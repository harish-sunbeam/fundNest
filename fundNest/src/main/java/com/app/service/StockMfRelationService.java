package com.app.service;

import java.util.List;

import com.app.dto.AddStockInMfRequestDTO;
import com.app.dto.AddStockInMfResponseDTO;
import com.app.dto.StockMutualFundRelationResponseDTO;
import com.app.dto.UpdateStockInMfRequestDTO;
import com.app.entities.StockDetails;

public interface StockMfRelationService {

	List<StockDetails> getStockDetailsByMfId(Long mfId);
	
	AddStockInMfResponseDTO addStocksInMf(AddStockInMfRequestDTO request);
	
	String updateStockDetails(UpdateStockInMfRequestDTO request,Long mfId);
	

	List<StockMutualFundRelationResponseDTO> getStockMfRelationDetailsByMfId(Long mfId);

  List<StockDetails> getStockDetailsExcludeIncluded();

}
