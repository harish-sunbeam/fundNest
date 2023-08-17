package com.app.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.StockMfRelationDao;
import com.app.dto.AddStockDetailsResponseDTO;
import com.app.dto.GetMFHoldingDetailsResponseDTO;
import com.app.entities.MFDetails;
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
	public List<StockMutualFundRelation> getStocksByMutualFund(MFDetails mfDetails) {
		
		
		// TODO Auto-generated method stub
		
		return stockMfRelationDao.findByMfDetails(mfDetails);
		
	}

}
