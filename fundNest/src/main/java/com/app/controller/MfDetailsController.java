package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AddStockInMfRequestDTO;
import com.app.dto.MFDetailsRequestDTO;
import com.app.entities.StockDetails;
import com.app.service.MfDetailsService;
import com.app.service.StockMfRelationService;

@RestController
@RequestMapping("/mfdetails")
@CrossOrigin(origins = "http://localhost:3000")
public class MfDetailsController {

	@Autowired
	private StockMfRelationService stockMfRelationService;

	@Autowired
	private MfDetailsService  mfDetailsService;
	
	// To get The List of stock Details By mutual Fund Id
	@GetMapping("/getsockdetailsbymfid/{mutualFundId}")
	public ResponseEntity<List<StockDetails>> getChildrenByParentId(@PathVariable Long mutualFundId) {
        List<StockDetails> children = stockMfRelationService.getStockDetailsByMfId(mutualFundId);
        return new ResponseEntity<>(children, HttpStatus.OK);
    }
	
	//to add mfDetails using mfCompanyId
		@PostMapping("/addmfdetails/{mfCompanyId}")
		public ResponseEntity<?> addMfDetails(@RequestBody MFDetailsRequestDTO request, @PathVariable Long mfCompanyId) {
			{
				System.out.println("addmfdetails of mfCompanyId " + request);
				return ResponseEntity.status(HttpStatus.CREATED).body(mfDetailsService.addMfDetails(request,mfCompanyId));
			}
		}
		
		@PostMapping("/addstocksinmfss")
		public ResponseEntity<?> addStocksInMf(AddStockInMfRequestDTO request) {
			{
				System.out.println("addstocksinmf of mfId ");
				return ResponseEntity.status(HttpStatus.CREATED).body(stockMfRelationService.addStocksInMf(request));
			}
		}
}
