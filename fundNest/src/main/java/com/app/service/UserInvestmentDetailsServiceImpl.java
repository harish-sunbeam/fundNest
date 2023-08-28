package com.app.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Random;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.ChangeInNavDao;
import com.app.dao.CustOrderHistoryDao;
import com.app.dao.CustTransacHistoryDao;
import com.app.dao.MfCompanyDao;
import com.app.dao.MfDetailsDao;
import com.app.dao.StockDetailsDao;
import com.app.dao.StockMfRelationDao;
import com.app.dao.UserDao;
import com.app.dao.UserInvestmentDetailsDao;
import com.app.dto.UserInvestmentDetailsRequestDTO;
import com.app.dto.UserInvestmentDetailsResponseDTO;
import com.app.entities.ChangeInNav;
import com.app.entities.CustomerOrderHistory;
import com.app.entities.CustomerTransacHistory;
import com.app.entities.MFCompanyDetails;
import com.app.entities.MFDetails;
import com.app.entities.OrderStatus;
import com.app.entities.SignUpDetails;
import com.app.entities.StockMutualFundRelation;
import com.app.entities.UserInvestmentDetails;
import com.app.entities.UserType;

@Service
@Transactional
public class UserInvestmentDetailsServiceImpl implements UserInvestmentDetailsService {

	@Autowired
	private UserInvestmentDetailsDao userInvestmentDetailsDao;

	@Autowired
	private ChangeInNavDao changeInNavDao;

	@Autowired
	private StockMfRelationDao stockMfRelationDao;

	@Autowired
	private MfCompanyDao mfCompanyDao;

	@Autowired
	private MfDetailsDao mfDetailsDao;

	@Autowired
	private CustTransacHistoryDao custTransacHistoryDao;

	@Autowired
	private CustOrderHistoryDao custOrderHistoryDao;

	@Autowired
	private UserDao userDao;

	@Autowired
	private ModelMapper mapper;

	private LocalDateTime date = LocalDateTime.now();

	// Add the UserPortfolio to the customer
	@Override
	public UserInvestmentDetailsResponseDTO buyMfAddInUserInvestment(UserInvestmentDetailsRequestDTO request,
			Long custId) {
		UserInvestmentDetails toReturnUserInv = new UserInvestmentDetails();
		MFDetails mfDetails = mfDetailsDao.findById(request.getMfId())
				.orElseThrow(() -> new ResourceNotFoundException("Invalid MfId from UserInveImpl"));

		List<StockMutualFundRelation> stockMfRelation = stockMfRelationDao.findByMfDetailsMfId(request.getMfId());
		SignUpDetails signUpDetails = userDao.findById(custId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid custId from UserInveImpl"));

		CustomerTransacHistory custTrHistory = custTransacHistoryDao.findBySignUpDetailsCustId(custId);
		List<ChangeInNav> navList = changeInNavDao.findByMfDetailsOrderByChangeDateDesc(mfDetails);
		double latestNav = 0;
		double noOfUnitsToUser = 0;
		double totalBalance = custTrHistory.getOpeningBalance();
		double investmentAmt = request.getOrderAmmount();
		if (custTrHistory.getOpeningBalance() != 0 && custTrHistory.getOpeningBalance() > investmentAmt) {
			latestNav = navList.get(0).getMfNav();

			noOfUnitsToUser = investmentAmt / latestNav;

			custTrHistory.setOpeningBalance(totalBalance - investmentAmt);
			custTrHistory.setSignUpDetails(signUpDetails);

			mapper.map(custTransacHistoryDao.save(custTrHistory), CustomerTransacHistory.class);

			double totalInvOfMf = 0;
			for (int i = 0; i < stockMfRelation.size(); i++) {
				totalInvOfMf = totalInvOfMf + stockMfRelation.get(i).getMfInvestmentPerStock();

			}

			double totalUnits = 0;
			for (int i = 0; i < stockMfRelation.size(); i++) {
				totalUnits = totalUnits + stockMfRelation.get(i).getNoOfUnitsPerStock();

			}
			double totalNewUnitsToSetInMf = 0;
			double totalInvToSetInMf = 0;
			for (int i = 0; i < stockMfRelation.size(); i++) {
				double invPerStock = stockMfRelation.get(i).getMfInvestmentPerStock();
				double noOfUnits = stockMfRelation.get(i).getNoOfUnitsPerStock();
				double newInvPerStock = ((investmentAmt * invPerStock) / totalInvOfMf) + invPerStock;
				totalInvToSetInMf = totalInvToSetInMf + newInvPerStock;
				stockMfRelation.get(i).setMfInvestmentPerStock(newInvPerStock);

				double newNoOfUnits = noOfUnits - ((noOfUnitsToUser * noOfUnits) / totalUnits);
				totalNewUnitsToSetInMf = totalNewUnitsToSetInMf + newNoOfUnits;
				stockMfRelation.get(i).setNoOfUnitsPerStock(newNoOfUnits);
			}

			mapper.map(stockMfRelationDao.saveAll(stockMfRelation), StockMutualFundRelation.class);
			mfDetails.setMfTotalInvestment(totalInvToSetInMf);
			mfDetails.setMfTotalUnits(totalNewUnitsToSetInMf);
			mapper.map(mfDetailsDao.save(mfDetails), MFDetails.class);

			UserInvestmentDetails userInvDetails = userInvestmentDetailsDao.findByMfDetailsAndSignUpDetails(mfDetails,
					signUpDetails);
			
			if (userInvDetails != null) {
				userInvDetails.setInvestmentAmmount(userInvDetails.getInvestmentAmmount() + investmentAmt);

				userInvDetails.setUnits(userInvDetails.getUnits() + noOfUnitsToUser);
				userInvDetails.setMfDetails(mfDetails);
				userInvDetails.setSignUpDetails(signUpDetails);
				userInvDetails.setInvestmentDate(date);
				toReturnUserInv = mapper.map(userInvDetails, UserInvestmentDetails.class);
				mapper.map(userInvestmentDetailsDao.save(userInvDetails), UserInvestmentDetails.class);
			} else if (userInvDetails == null) {
				UserInvestmentDetails newUserInv = new UserInvestmentDetails();
				newUserInv.setInvestmentAmmount(investmentAmt);
				newUserInv.setUnits(noOfUnitsToUser);
				newUserInv.setMfDetails(mfDetails);
				newUserInv.setSignUpDetails(signUpDetails);
				newUserInv.setInvestmentDate(date);
				toReturnUserInv = mapper.map(newUserInv, UserInvestmentDetails.class);
				mapper.map(userInvestmentDetailsDao.save(newUserInv), UserInvestmentDetails.class);
			}

			CustomerOrderHistory custOrderHistory = new CustomerOrderHistory();
			custOrderHistory.setOrderAmmount(investmentAmt);
			custOrderHistory.setOrderStatus(OrderStatus.BUY);
			custOrderHistory.setOrderTime(date);
			custOrderHistory.setMfDetails(mfDetails);
			custOrderHistory.setSignUpDetails(signUpDetails);
			custOrderHistory.setUserInvestmentDetails(toReturnUserInv);

			mapper.map(custOrderHistoryDao.save(custOrderHistory), CustomerOrderHistory.class);

		} else {
			throw new ResourceNotFoundException("Insufficient Balance To Buy Mutual Fund");
		}

		return mapper.map(toReturnUserInv, UserInvestmentDetailsResponseDTO.class);
	}

	// sell
	@Override
	public UserInvestmentDetailsResponseDTO sellMfRemoveFromUserInvestment(UserInvestmentDetailsRequestDTO request,
			Long custId) {
		UserInvestmentDetails toReturnUserInv =new UserInvestmentDetails();
		MFDetails mfDetails = mfDetailsDao.findById(request.getMfId())
				.orElseThrow(() -> new ResourceNotFoundException("Invalid MfId from UserInveImpl"));

		List<StockMutualFundRelation> stockMfRelation = stockMfRelationDao.findByMfDetailsMfId(request.getMfId());
		SignUpDetails signUpDetails = userDao.findById(custId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid custId from UserInveImpl"));

		CustomerTransacHistory custTrHistory = custTransacHistoryDao.findBySignUpDetailsCustId(custId);

		List<ChangeInNav> navList = changeInNavDao.findByMfDetailsOrderByChangeDateDesc(mfDetails);
		UserInvestmentDetails foundUser = new UserInvestmentDetails();
		double latestNav = navList.get(0).getMfNav();
		;
		double noOfUnitsToSell = 0;
		double openingBalance = custTrHistory.getOpeningBalance();
		foundUser = userInvestmentDetailsDao.findByMfDetailsAndSignUpDetails(mfDetails, signUpDetails);
		double totalInvOfUser = foundUser.getInvestmentAmmount();
		double sellAmt = request.getOrderAmmount();
		noOfUnitsToSell = sellAmt / latestNav;

		if (sellAmt > totalInvOfUser) {
			throw new ResourceNotFoundException("Redeem amound exceeds invested amount");
		} else {
			custTrHistory.setOpeningBalance(openingBalance + sellAmt);
			custTrHistory.setSignUpDetails(signUpDetails);

			mapper.map(custTransacHistoryDao.save(custTrHistory), CustomerTransacHistory.class);

			double totalInvOfMf = 0;
			for (int i = 0; i < stockMfRelation.size(); i++) {
				totalInvOfMf = totalInvOfMf + stockMfRelation.get(i).getMfInvestmentPerStock();

			}

			double totalMfUnits = 0;
			for (int i = 0; i < stockMfRelation.size(); i++) {
				totalMfUnits = totalMfUnits + stockMfRelation.get(i).getNoOfUnitsPerStock();

			}

			double totalNewUnitsToSetInMf =0;
			double totalInvToSetInMf =mfDetails.getMfTotalInvestment();
			for (int i = 0; i < stockMfRelation.size(); i++) {
				double invPerStock = stockMfRelation.get(i).getMfInvestmentPerStock();
				double noOfUnits = stockMfRelation.get(i).getNoOfUnitsPerStock();
				double newInvPerStock = invPerStock - ((sellAmt * invPerStock) / totalInvOfMf);
				totalInvToSetInMf = totalInvToSetInMf - newInvPerStock;
				stockMfRelation.get(i).setMfInvestmentPerStock(newInvPerStock);

				double newNoOfUnits = noOfUnits + ((noOfUnitsToSell * noOfUnits) / totalMfUnits);
				totalNewUnitsToSetInMf = totalNewUnitsToSetInMf + newNoOfUnits;
				stockMfRelation.get(i).setNoOfUnitsPerStock(newNoOfUnits);
			}
			mfDetails.setMfTotalUnits(mfDetails.getMfTotalUnits() +totalNewUnitsToSetInMf);
			mapper.map(stockMfRelationDao.saveAll(stockMfRelation), StockMutualFundRelation.class);
			mfDetails.setMfTotalInvestment(totalInvToSetInMf);
			mapper.map(mfDetailsDao.save(mfDetails), MFDetails.class);

			UserInvestmentDetails userInvDetails = userInvestmentDetailsDao.findByMfDetailsAndSignUpDetails(mfDetails,
					signUpDetails);

			if (userInvDetails != null) {
				userInvDetails.setInvestmentAmmount(userInvDetails.getInvestmentAmmount() -sellAmt );

				userInvDetails.setUnits(userInvDetails.getUnits() - noOfUnitsToSell);
				userInvDetails.setMfDetails(mfDetails);
				userInvDetails.setSignUpDetails(signUpDetails);
				userInvDetails.setInvestmentDate(date);
				toReturnUserInv = mapper.map(userInvDetails, UserInvestmentDetails.class);
				mapper.map(userInvestmentDetailsDao.save(userInvDetails), UserInvestmentDetails.class);
				
				CustomerOrderHistory custOrderHistory = new CustomerOrderHistory();
				custOrderHistory.setOrderAmmount(sellAmt);
				custOrderHistory.setOrderStatus(OrderStatus.SELL);
				custOrderHistory.setOrderTime(date);
				custOrderHistory.setMfDetails(mfDetails);
				custOrderHistory.setSignUpDetails(signUpDetails);
				custOrderHistory.setUserInvestmentDetails(userInvDetails);

				mapper.map(custOrderHistoryDao.save(custOrderHistory), CustomerOrderHistory.class);
			} else if (userInvDetails == null) {
				throw new ResourceNotFoundException("The Mutual is not present in your portfolio");
			}
		}
		return mapper.map(toReturnUserInv, UserInvestmentDetailsResponseDTO.class);
	}

}
