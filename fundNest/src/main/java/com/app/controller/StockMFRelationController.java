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
	@GetMapping("/getstockdetailsexcluded")
	public ResponseEntity<?> getStockDetailsExcludeIncluded() {
		{
			System.out.println("get excluded Stock details ");
			return ResponseEntity.status(HttpStatus.CREATED).body(stockMfRelationService.getStockDetailsExcludeIncluded());
		}
	}
	
}
