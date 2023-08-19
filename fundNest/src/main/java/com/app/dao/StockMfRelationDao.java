package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.StockMutualFundRelation;

public interface StockMfRelationDao extends JpaRepository<StockMutualFundRelation, Long> {

	//to find mfDetails UsingmfId
	List<StockMutualFundRelation> findByMfDetailsMfId(Long mfId);
	
}
