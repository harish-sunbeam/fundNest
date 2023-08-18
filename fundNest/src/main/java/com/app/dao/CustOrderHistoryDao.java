package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.CustomerOrderHistory;

public interface CustOrderHistoryDao extends JpaRepository<CustomerOrderHistory, Long> {

}
