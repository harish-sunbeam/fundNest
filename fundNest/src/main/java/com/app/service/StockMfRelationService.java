package com.app.service;

import java.util.List;

import com.app.entities.StockDetails;

public interface StockMfRelationService {

	List<StockDetails> getStockDetailsByMfId(Long mfId);
	
	String addStocksInMf(Long stockId,Long mfId);
}
