package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AddKYCDetailsRequestDTO;
import com.app.dto.AddStockDetailsRequestDTO;
import com.app.service.StockDetailsService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class StockDetailsController {
	
	@Autowired
	private StockDetailsService stockDetailsService;
	
	@PostMapping("/addstockdetails")
	public ResponseEntity<?> stockDetails(@RequestBody AddStockDetailsRequestDTO request) {
		{
			System.out.println("Added the stock successfully" + request);
			return ResponseEntity.status(HttpStatus.CREATED).body(stockDetailsService.addstockDetails(request));
		}
	}
}
