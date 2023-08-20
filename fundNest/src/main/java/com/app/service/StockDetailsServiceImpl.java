package com.app.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.StockDetailsDao;
import com.app.dto.StockDetailsRequestDTO;
import com.app.dto.StockDetailsResponseDTO;
import com.app.entities.StockDetails;

@Service
@Transactional
public class StockDetailsServiceImpl implements StockDetailsService {

	@Autowired
	private StockDetailsDao stockDetailsDao;
	
	@Autowired
	private ModelMapper mapper;
	
	private LocalDate date=LocalDate.now();
	@Override
	public StockDetailsResponseDTO addStockDetails(StockDetailsRequestDTO request) {
	
		StockDetails stockDetails=new StockDetails();
		
		stockDetails.setStockChangeDate(date);
		stockDetails.setStockDailyChange(request.getStockDailyChange());
		stockDetails.setStockName(request.getStockName());
		stockDetails.setStockPrice(request.getStockPrice());
		stockDetails.setStockSector(request.getStockSector());
		
		stockDetails =mapper.map(stockDetailsDao.save(stockDetails), StockDetails.class);
		
		return mapper.map(stockDetails, StockDetailsResponseDTO.class);
	}
	@Override
	public List<StockDetailsResponseDTO> getStockDetails() {
		List<StockDetails> stockDetails=stockDetailsDao.findAll();
		
		List<StockDetailsResponseDTO> newStockDetails =new ArrayList<StockDetailsResponseDTO>();
		for (StockDetails list : stockDetails) {
			StockDetailsResponseDTO dto =new StockDetailsResponseDTO();
			dto.setStockChangeDate(list.getStockChangeDate());
			dto.setStockDailyChange(list.getStockDailyChange());
			dto.setStockName(list.getStockName());
			dto.setStockPrice(list.getStockPrice());
			dto.setStockSector(list.getStockSector());
			newStockDetails.add(dto);
		}
		return newStockDetails;
	}

}
