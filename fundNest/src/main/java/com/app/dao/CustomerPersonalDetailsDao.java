package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.CustomerPersonalDetails;
import com.app.entities.SignUpDetails;




public interface CustomerPersonalDetailsDao extends JpaRepository<CustomerPersonalDetails,Long > {

	CustomerPersonalDetails findBySignUpDetailsCustId(Long custId);
	
	   
	
}
