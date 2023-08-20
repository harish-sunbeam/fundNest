package com.app.service;

import java.util.List;

import com.app.dto.StockDetailsRequestDTO;
import com.app.dto.StockDetailsResponseDTO;

public interface StockDetailsService {

	StockDetailsResponseDTO addStockDetails(StockDetailsRequestDTO request);

	 List<StockDetailsResponseDTO> getStockDetails();
}
