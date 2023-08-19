package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.StockDetails;
import com.app.service.StockMfRelationService;

@RestController
@RequestMapping("/mfdetails")
@CrossOrigin(origins = "http://localhost:3000")
public class MfDetailsController {

	@Autowired
	private StockMfRelationService stockMfRelationService;

	// To get The List of stock Details By mutual Fund Id
	@GetMapping("/{mutualFundId}")
	public ResponseEntity<List<StockDetails>> getChildrenByParentId(@PathVariable Long mutualFundId) {
        List<StockDetails> children = stockMfRelationService.getStockDetailsByMfId(mutualFundId);
        return new ResponseEntity<>(children, HttpStatus.OK);
    }
}
