package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.UpdateStockInMfRequestDTO;

import com.app.entities.StockMutualFundRelation;
import com.app.dto.CustTransacHistoryResponseDTO;
import com.app.dto.StockDetailsRequestDTO;
import com.app.dto.StockMutualFundRelationResponseDTO;
import com.app.service.StockMfRelationService;


import com.app.service.StockMfRelationService;
@RestController
@RequestMapping("/stockmfrelation")
@CrossOrigin(origins = "http://localhost:3000")
public class StockMFRelationController {

	@Autowired
	private StockMfRelationService stockMfRelationService;
	 
	@PutMapping("/updatestockdetails/{mfId}")
	public ResponseEntity<?> updateStockDetails(@RequestBody UpdateStockInMfRequestDTO request, @PathVariable Long mfId) {
		{
			System.out.println("Update Stock details ");
			return ResponseEntity.status(HttpStatus.CREATED).body(stockMfRelationService.updateStockDetails(request,mfId));
		}
		
	
	}
	
	@GetMapping("/getStockMfRelationDetails/{mfId}")
	public ResponseEntity<List<StockMutualFundRelationResponseDTO>> getStockMfRelationDetailsByMfId(@PathVariable Long mfId) {
		List<StockMutualFundRelationResponseDTO> children = stockMfRelationService.getStockMfRelationDetailsByMfId(mfId);
        return new ResponseEntity<>(children, HttpStatus.OK);
	}
	@GetMapping("/getstockdetailsexcluded")
	public ResponseEntity<?> getStockDetailsExcludeIncluded() {
		{
			System.out.println("get excluded Stock details ");
			return ResponseEntity.status(HttpStatus.CREATED).body(stockMfRelationService.getStockDetailsExcludeIncluded());
		}
	}

	@GetMapping("/getStockMfRelationDetails/{mfId}")
	public ResponseEntity<List<StockMutualFundRelationResponseDTO>> getStockMfRelationDetailsByMfId(@PathVariable Long mfId) {
		List<StockMutualFundRelationResponseDTO> children = stockMfRelationService.getStockMfRelationDetailsByMfId(mfId);
        return new ResponseEntity<>(children, HttpStatus.OK);
	}

}
