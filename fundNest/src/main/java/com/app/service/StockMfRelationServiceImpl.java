package com.app.service;

import java.lang.reflect.Type;
import java.time.LocalDate;
import java.time.LocalDateTime;

import org.modelmapper.TypeToken;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.apache.catalina.mapper.Mapper;
import org.hibernate.Hibernate;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.ChangeInNavDao;
import com.app.dao.MfDetailsDao;
import com.app.dao.StockDetailsDao;
import com.app.dao.StockMfRelationDao;
import com.app.dao.UserInvestmentDetailsDao;
import com.app.dto.AddStockInMfRequestDTO;
import com.app.dto.AddStockInMfResponseDTO;
import com.app.dto.StockMutualFundRelationResponseDTO;
import com.app.dto.UpdateStockInMfRequestDTO;
import com.app.dto.UpdateStockInMfResponseDTO;
import com.app.entities.ChangeInNav;
import com.app.entities.MFDetails;
import com.app.entities.StockDetails;
import com.app.entities.StockMutualFundRelation;
import com.app.entities.UserInvestmentDetails;

@Service
@Transactional
public class StockMfRelationServiceImpl implements StockMfRelationService {

	@Autowired
	private StockMfRelationDao stockMfRelationDao;

	@Autowired
	private StockDetailsDao stockDetailsDao;

	@Autowired
	private ChangeInNavDao changeInNavDao;

	@Autowired
	private MfDetailsDao mfDetailsDao;

	@Autowired
	private ModelMapper mapper;

	@Autowired
	private UserInvestmentDetailsDao userInvestmentDetailsDao;

	// private MFDetails mfDetails;

	private LocalDate date = LocalDate.now();

	private LocalDateTime dateTime = LocalDateTime.now();

	@Override
//	@Transactional
	// Get the List of the Stocks By Mutual Fund Id
	public List<StockDetails> getStockDetailsByMfId(Long mfId) {
		MFDetails obj = new MFDetails();
		obj.setMfId(mfId);
		List<StockMutualFundRelation> relationList = stockMfRelationDao.findByMfDetails(obj);
		List<StockDetails> stockDetails = new ArrayList<>();

//		for (StockMutualFundRelation list : relationList) {
//			StockDetails stockDetail = list.getStockDetails();
//			//Hibernate.initialize(stockDetail); // Initialize the collection
//			stockDetails.add(stockDetail);
//		}

		List<StockDetails> collect = relationList.stream().map(x -> x.getStockDetails()).collect(Collectors.toList());

//		Type listType = new TypeToken<List<StockDetails>>() {
//		}.getType();
//		
		return collect;

	}

	// Add stocks in respective mutual funds and Maintain there relationship in
	// StockMfRealtion table
	@Override

	public AddStockInMfResponseDTO addStocksInMf(AddStockInMfRequestDTO request) {

		StockDetails stockDetails = stockDetailsDao.findById(request.getStockId())
				.orElseThrow(() -> new ResourceNotFoundException("INvalid StockId From StockMFRelationImpl"));
		MFDetails mfDetails = mfDetailsDao.findById(request.getMfId())
				.orElseThrow(() -> new ResourceNotFoundException("INvalid MfId From StockMFRelationImpl"));
		StockMutualFundRelation stockMfRelation = new StockMutualFundRelation();
		double invPerStock = request.getMfInvestmentPerStock();
		double stockPrice = stockDetails.getStockPrice();

		double noOfUnitsPerStock = invPerStock / stockPrice;
		stockMfRelation.setMfDetails(mfDetails);
		stockMfRelation.setStockDetails(stockDetails);
		stockMfRelation.setMfInvestmentPerStock(request.getMfInvestmentPerStock());
		stockMfRelation.setNoOfUnitsPerStock(noOfUnitsPerStock);
		double totalInvestment = mfDetails.getMfTotalInvestment();
		mfDetails.setMfTotalInvestment(totalInvestment + request.getMfInvestmentPerStock());
		double totalUnits = mfDetails.getMfTotalUnits();
		mfDetails.setMfTotalUnits(totalUnits + noOfUnitsPerStock);

		mapper.map(mfDetailsDao.save(mfDetails), MFDetails.class);

		AddStockInMfResponseDTO response = mapper.map(stockMfRelationDao.save(stockMfRelation),
				AddStockInMfResponseDTO.class);

		return mapper.map(response, AddStockInMfResponseDTO.class);
	}

	// In this Method
	@Override
	public String updateStockDetails(UpdateStockInMfRequestDTO request, Long mfId) {

		List<StockDetails> saveAllList = new ArrayList<StockDetails>();
		double[] arrNoOfUnitsPerStock = new double[10];
		double[] arrInvestmentInStock = new double[10];
		ChangeInNav changeInNav = new ChangeInNav();
		// Hibernate.initialize(MFDetails.class);
		MFDetails mfDetails = mfDetailsDao.findById(mfId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid MF Id from StockDetailsImpl"));
		;

		double totalUnits = 0;
		List<StockMutualFundRelation> stockMfRelation = stockMfRelationDao.findByMfDetailsMfId(mfId);

		for (int i = 0; i < stockMfRelation.size(); i++) {
			double noOfUnitsPerStock = stockMfRelation.get(i).getNoOfUnitsPerStock();
			arrNoOfUnitsPerStock[i] = noOfUnitsPerStock;
			totalUnits = totalUnits + noOfUnitsPerStock;
		}

		for (int i = 0; i < stockMfRelation.size(); i++) {
			double invPerStock = stockMfRelation.get(i).getMfInvestmentPerStock();
			arrInvestmentInStock[i] = invPerStock;

		}

		double totalInvestment = 0;
		for (int i = 0; i < request.getStockDetails().size(); i++) {

			StockDetails stockDetails = stockDetailsDao.findById(request.getStockDetails().get(i).getStockId())
					.orElseThrow(() -> new ResourceNotFoundException("Invalid Stock Id from StockDetailsImpl"));
			stockDetails.setStockPrice(request.getStockDetails().get(i).getStockPrice());
			stockDetails.setStockChangeDate(date);
			saveAllList.add(stockDetails);
			double newStockPrice = request.getStockDetails().get(i).getStockPrice();
			double investmentInStock = arrInvestmentInStock[i];

			arrInvestmentInStock[i] = newStockPrice * arrNoOfUnitsPerStock[i];

			totalInvestment = totalInvestment + arrInvestmentInStock[i];

		}
		mapper.map(stockDetailsDao.saveAll(saveAllList), StockDetails.class);
		double liabilities = (3 * totalInvestment) / 100;

		double NAV = (totalInvestment - liabilities) / totalUnits;

		mfDetails.setMfTotalInvestment(totalInvestment);
		mfDetails.setMfTotalUnits(totalUnits);

		mapper.map(mfDetailsDao.save(mfDetails), MFDetails.class);

		changeInNav.setMfDetails(mfDetails);
		changeInNav.setMfNav(NAV);
		changeInNav.setChangeDate(dateTime);

		mapper.map(changeInNavDao.save(changeInNav), ChangeInNav.class);

		for (int i = 0; i < stockMfRelation.size(); i++) {
			stockMfRelation.get(i).setMfInvestmentPerStock(
					arrNoOfUnitsPerStock[i] * request.getStockDetails().get(i).getStockPrice());
		}
		mapper.map(stockMfRelationDao.saveAll(stockMfRelation), StockMutualFundRelation.class);

		List<UserInvestmentDetails> updateUserInv = userInvestmentDetailsDao.findAllByMfDetailsMfId(mfId);

		for (int i = 0; i < updateUserInv.size(); i++) {
			double pAndl = 0;
			double units = updateUserInv.get(i).getUnits();
			double totalInv = updateUserInv.get(i).getInvestmentAmmount();

			double newInv = (units * NAV);

			if (newInv > totalInv) {
				pAndl = newInv - totalInv;
			} else {
				pAndl = totalInv - newInv;
			}
			updateUserInv.get(i).setPAndl(pAndl);
		}
		mapper.map(userInvestmentDetailsDao.saveAll(updateUserInv), UserInvestmentDetails.class);

		return "Successful";
	}

	@Override
	public List<StockMutualFundRelationResponseDTO> getStockMfRelationDetailsByMfId(Long mfId) {
		// TODO Auto-generated method stub
		MFDetails mfDetails=new MFDetails();
//		StockDetails stockDetails = new StockDetails();
		List<StockDetails> stocklist = getStockDetailsByMfId(mfId); // getStockDetailsByMfId() method is already defined above
		List<StockMutualFundRelation> list = stockMfRelationDao.findByMfDetailsMfId(mfId);
		List<StockMutualFundRelationResponseDTO> newList = new ArrayList<StockMutualFundRelationResponseDTO>();
		for (StockMutualFundRelation relation : list) {
			StockDetails stockDetails = new StockDetails();
			StockMutualFundRelationResponseDTO dto = new StockMutualFundRelationResponseDTO();
			mfDetails.setMfId(mfId);
			dto.setMfInvestmentPerStock(relation.getMfInvestmentPerStock());
			dto.setNoOfUnitsPerStock(relation.getNoOfUnitsPerStock());
			stockDetails.setStockId(relation.getStockDetails().getStockId());
			stockDetails.setStockName(relation.getStockDetails().getStockName());
			stockDetails.setStockSector(relation.getStockDetails().getStockSector());
//			dto.setStockDetails(stockDetails);
			newList.add(dto);
		}
		return newList;
	}

}