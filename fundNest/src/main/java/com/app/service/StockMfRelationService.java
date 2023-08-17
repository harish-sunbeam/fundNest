package com.app.service;

import java.util.List;

import com.app.entities.MFDetails;
import com.app.entities.StockMutualFundRelation;


public interface StockMfRelationService  {
	public List<StockMutualFundRelation> getStocksByMutualFund(MFDetails mfDetails);
}
