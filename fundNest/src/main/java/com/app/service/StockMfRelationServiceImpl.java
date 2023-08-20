package com.app.service;

import java.lang.reflect.Type;
import java.time.LocalDate;

import org.modelmapper.TypeToken;
import java.util.ArrayList;
import java.util.List;

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
import com.app.dto.AddStockInMfRequestDTO;
import com.app.dto.AddStockInMfResponseDTO;
import com.app.dto.UpdateStockInMfRequestDTO;
import com.app.dto.UpdateStockInMfResponseDTO;
import com.app.entities.ChangeInNav;
import com.app.entities.MFDetails;
import com.app.entities.StockDetails;
import com.app.entities.StockMutualFundRelation;

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

	private LocalDate date = LocalDate.now();

	@Override
	@Transactional

	// Get the List of the Stocks By Mutual Fund Id
	public List<StockDetails> getStockDetailsByMfId(Long mfId) {
		List<StockMutualFundRelation> relationList = stockMfRelationDao.findByMfDetailsMfId(mfId);

		List<StockDetails> stockDetails = new ArrayList<>();

		for (StockMutualFundRelation list : relationList) {
			StockDetails stockDetail = list.getStockDetails();
			Hibernate.initialize(stockDetail); // Initialize the collection
			stockDetails.add(stockDetail);
		}

		Type listType = new TypeToken<List<StockDetails>>() {
		}.getType();
		return mapper.map(stockDetails, listType);

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

		stockMfRelation.setMfDetails(mfDetails);
		stockMfRelation.setStockDetails(stockDetails);
		stockMfRelation.setMfInvestmentPerStock(request.getMfInvestmentPerStock());

		AddStockInMfResponseDTO response = mapper.map(stockMfRelationDao.save(stockMfRelation),
				AddStockInMfResponseDTO.class);

		return mapper.map(response, AddStockInMfResponseDTO.class);
	}

	@Override
	public String updateStockDetails(UpdateStockInMfRequestDTO request, Long mfId) {

		double[] arrInvestmentInStock = new double[5];
		ChangeInNav changeInNav = new ChangeInNav();
		MFDetails mfDetails = mfDetailsDao.findById(mfId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Mf Id from StockDetailsImpl"));
		List<StockMutualFundRelation> stockMfRelation = stockMfRelationDao.findByMfDetailsMfId(mfId);

		for (int i = 0; i < stockMfRelation.size(); i++) {
			double investmentInStock = stockMfRelation.get(i).getMfInvestmentPerStock();
			arrInvestmentInStock[i] = investmentInStock;

		}
		double totalUnits = 0;
		double totalInvestment = 0;
		for (int i = 0; i < request.getStockDetails().size(); i++) {

			StockDetails stockDetails = stockDetailsDao.findById(request.getStockDetails().get(i).getStockId())
					.orElseThrow(() -> new ResourceNotFoundException("Invalid Stock Id from StockDetailsImpl"));
			stockDetails.setStockPrice(request.getStockDetails().get(i).getStockPrice());
			stockDetails.setStockChangeDate(date);
			mapper.map(stockDetailsDao.save(stockDetails), StockDetails.class);
			double newStockPrice = request.getStockDetails().get(i).getStockPrice();
			double investmentInStock = arrInvestmentInStock[i];

			double units = investmentInStock / newStockPrice;
			totalUnits = totalUnits + units;
			totalInvestment = totalInvestment + investmentInStock;

		}

		double liabilities = (3 * totalInvestment) / 100;

		double NAV = (totalInvestment - liabilities) / totalUnits;

		mfDetails.setMfTotalInvestment(totalInvestment);
		mfDetails.setMfTotalUnits(totalUnits);

		mapper.map(mfDetailsDao.save(mfDetails), MFDetails.class);

		changeInNav.setMfDetails(mfDetails);
		changeInNav.setMfNav(NAV);

		mapper.map(changeInNavDao.save(changeInNav), ChangeInNav.class);

		return "Successful";
	}

}