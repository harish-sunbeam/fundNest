package com.app.service;

import java.lang.reflect.Type;
import org.modelmapper.TypeToken;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.Hibernate;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.MfDetailsDao;
import com.app.dao.StockDetailsDao;
import com.app.dao.StockMfRelationDao;
import com.app.dto.MFProfileCompanyResponseDTO;
import com.app.entities.MFDetails;
import com.app.entities.StockDetails;
import com.app.entities.StockMutualFundRelation;

@Service
@Transactional
public class StockMfRelationServiceImpl implements StockMfRelationService {

	@Autowired
	private StockMfRelationDao stockMfRelationDao;
	
	@Autowired
	private StockDetailsDao  stockDetailsDao;
	
	@Autowired
	private MfDetailsDao  mfDetailsDao;

	@Autowired
	private ModelMapper mapper;

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

	// Add stocks in respective mutual funds and Maintain there relationship in StockMfRealtion table
	@Override
	public String addStocksInMf(Long stockId, Long mfId) {
		
		StockDetails stockDetails =stockDetailsDao.findById(stockId)
				.orElseThrow(()-> new ResourceNotFoundException("INvalid StockId From StockMFRelationImpl"));
		MFDetails mfDetails=mfDetailsDao.findById(mfId)
				.orElseThrow(()-> new ResourceNotFoundException("INvalid MfId From StockMFRelationImpl"));
		StockMutualFundRelation stockMfRelation =new StockMutualFundRelation();
		
		stockMfRelation.setMfDetails(mfDetails);
		stockMfRelation.setStockDetails(stockDetails);
		mapper.map(stockMfRelationDao.save(stockMfRelation), StockMutualFundRelation.class);
		return "Stock Added in Mutual Fund";
	}

}