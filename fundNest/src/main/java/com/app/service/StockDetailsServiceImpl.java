package com.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.StockDetailsDao;
import com.app.dto.AddStockDetailsRequestDTO;
import com.app.dto.AddStockDetailsResponseDTO;
import com.app.dto.MFProfileCompanyResponseDTO;
import com.app.entities.MFCompanyDetails;
import com.app.entities.StockDetails;

@Service
@Transactional
public class StockDetailsServiceImpl implements StockDetailsService{

	@Autowired
	private StockDetailsDao stockDetailsDao;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public AddStockDetailsResponseDTO addstockDetails(AddStockDetailsRequestDTO requestStockDetails) {
		// TODO Auto-generated method stub
		StockDetails stockDetails = mapper.map(requestStockDetails, StockDetails.class);
		StockDetails  persisentStockDetails = stockDetailsDao.save(stockDetails);
		return mapper.map(persisentStockDetails,AddStockDetailsResponseDTO.class);
	}

}
