package com.app.controller;

import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.MFDetailsDao;
import com.app.entities.MFDetails;
import com.app.entities.StockMutualFundRelation;
import com.app.service.StockMfRelationService;


@RestController
@RequestMapping("/mutualfund")
@CrossOrigin(origins = "http://localhost:3000")
public class MfDetailsController {

	@Autowired
	private MFDetailsDao mfDetailsDao;
		
	@Autowired
	private StockMfRelationService stockMfRelationService;
	
	@GetMapping("/{mfId}")
	public List<StockMutualFundRelation> getStocksByMutualFund(@PathVariable Long mfId){
		
		
		MFDetails mfDetails = mfDetailsDao.findById(mfId).orElseThrow(()->new ResourceNotFoundException("Inside Mf details Controller"));
		if(mfDetails!=null) {
			List<StockMutualFundRelation> list = stockMfRelationService.getStocksByMutualFund(mfDetails);
			return stockMfRelationService.getStocksByMutualFund(mfDetails);
		}
		return null;
	}
	
}
