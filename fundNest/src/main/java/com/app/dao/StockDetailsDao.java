package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.StockDetails;

public interface StockDetailsDao extends JpaRepository<StockDetails, Long> {

}
