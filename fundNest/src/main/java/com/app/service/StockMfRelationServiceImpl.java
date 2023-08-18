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

import com.app.dao.StockMfRelationDao;
import com.app.dto.MFProfileCompanyResponseDTO;
import com.app.entities.StockDetails;
import com.app.entities.StockMutualFundRelation;

@Service
@Transactional
public class StockMfRelationServiceImpl implements StockMfRelationService {

	@Autowired
	private StockMfRelationDao stockMfRelationDao;

	@Autowired
	private ModelMapper mapper;

	@Override
	@Transactional
	public List<StockDetails> getStockDetailsByMfId(Long mfId) {
		List<StockMutualFundRelation> relationList = stockMfRelationDao.findByMfDetailsMfId(mfId);

		List<StockDetails> stockDetails = new ArrayList<>();

		for (StockMutualFundRelation list : relationList) {
			StockDetails stockDetail = list.getStockDetails();
			Hibernate.initialize(stockDetail.getMfDetails()); // Initialize the collection
			stockDetails.add(stockDetail);
		}

		Type listType = new TypeToken<List<StockDetails>>() {
		}.getType();
		return mapper.map(stockDetails, listType);

	}

}