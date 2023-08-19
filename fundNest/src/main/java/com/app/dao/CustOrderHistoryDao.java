package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.CustomerOrderHistory;
import com.app.entities.CustomerTransacHistory;

public interface CustOrderHistoryDao extends JpaRepository<CustomerOrderHistory, Long> {
	
	List<CustomerOrderHistory> findALLBySignUpDetailsCustId(Long custId);
}
