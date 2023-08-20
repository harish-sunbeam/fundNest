package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.StockDetailsRequestDTO;
import com.app.service.StockDetailsService;

@RestController
@RequestMapping("/stockdetails")
@CrossOrigin(origins = "http://localhost:3000")
public class StockDetailsController {

	@Autowired
	private StockDetailsService  stockDetailsService;
	
	@PostMapping("/addstockdetails")
	public ResponseEntity<?> addStockDetails(@RequestBody StockDetailsRequestDTO request) {
		{
			System.out.println("Add stock details in DB " + request);
			return ResponseEntity.status(HttpStatus.CREATED).body(stockDetailsService.addStockDetails(request));
		}
	}
	
	@PostMapping("/getstockdetails")
	public ResponseEntity<?> getStockDetails() {
		{
			System.out.println("get Stock details ");
			return ResponseEntity.status(HttpStatus.CREATED).body(stockDetailsService.getStockDetails());
		}
	}
}
