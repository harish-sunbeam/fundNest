package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.CustomerTransacHistory;
import com.app.entities.SignUpDetails;

public interface CustTransacHistoryDao extends JpaRepository<CustomerTransacHistory, Long> {

	
	List<CustomerTransacHistory> findBySignUpDetailsCustId(Long custId);
}
