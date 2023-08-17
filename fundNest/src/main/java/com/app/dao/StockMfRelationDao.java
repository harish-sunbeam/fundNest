package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.MFDetails;
import com.app.entities.StockDetails;
import com.app.entities.StockMutualFundRelation;



public interface StockMfRelationDao extends JpaRepository<StockMutualFundRelation, Long>{

	List<StockMutualFundRelation> findByMfDetails(MFDetails mfDetails);
}
