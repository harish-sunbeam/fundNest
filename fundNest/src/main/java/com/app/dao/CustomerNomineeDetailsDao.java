package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.CustomerNomineeDetails;
import com.app.entities.SignUpDetails;

public interface CustomerNomineeDetailsDao extends JpaRepository<CustomerNomineeDetails, Long> {

	CustomerNomineeDetails findBySignUpDetails(SignUpDetails signUpDetails);	
	
}
