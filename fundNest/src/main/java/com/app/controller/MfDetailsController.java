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
import com.app.dto.AddStockInMfResponseDTO;
import com.app.dto.MFDetailsRequestDTO;
import com.app.dto.UpdateStockInMfRequestDTO;
import com.app.entities.ChangeInNav;
import com.app.entities.StockDetails;
import com.app.service.ChangeInNavService;
import com.app.service.MfDetailsService;
import com.app.service.StockMfRelationService;

@RestController
@RequestMapping("/mfdetails")
@CrossOrigin(origins = "http://localhost:3000")
public class MfDetailsController {

	int counter=0;
	@Autowired
	private StockMfRelationService stockMfRelationService;
	
	@Autowired
	private ChangeInNavService changeInNavService;

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
		
		@PostMapping("/addstocksinmfs")
		public ResponseEntity<?> addStocksInMf(@RequestBody AddStockInMfRequestDTO request) {
			{
				System.out.println("addstocksinmf of mfId ");
				AddStockInMfResponseDTO response=stockMfRelationService.addStocksInMf(request);
				counter++;
				if(counter==5)
				{
					List<StockDetails> stockList=stockMfRelationService.getStockDetailsByMfId(request.getMfId());
					
					UpdateStockInMfRequestDTO list=new UpdateStockInMfRequestDTO(stockList);
					
					stockMfRelationService.updateStockDetails(list, request.getMfId());
					counter=0;
				}
				return ResponseEntity.status(HttpStatus.CREATED).body(response);
			}
		}
		//get MfDetails by MfId for UpdateStockValue and Further Calculations
		@GetMapping("/getmfdetailsbymfid/{mutualFundId}")
		public ResponseEntity<?> getMfDetailaisByMfId(@PathVariable Long mutualFundId) {
	       
	        return ResponseEntity.status(HttpStatus.CREATED).body(mfDetailsService.getMfDetailsByMfId(mutualFundId));
	    }
		
		//get nav List
				@GetMapping("/getnavbymfid/{mutualFundId}")
				public ResponseEntity<?> getNavByMfId(@PathVariable Long mutualFundId,int noOfDays) {
			        return ResponseEntity.status(HttpStatus.CREATED).body(changeInNavService.getChangeInNavByMfId(mutualFundId,noOfDays));
			    }
				
}
