package com.app.service;

import com.app.dto.AddStockDetailsRequestDTO;
import com.app.dto.AddStockDetailsResponseDTO;

public interface StockDetailsService {

	AddStockDetailsResponseDTO addstockDetails(AddStockDetailsRequestDTO requestStockDetails);
}
