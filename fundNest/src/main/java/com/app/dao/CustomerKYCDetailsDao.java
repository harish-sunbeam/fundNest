package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.CustomerKYCDetails;

import com.app.entities.SignUpDetails;

public interface CustomerKYCDetailsDao extends JpaRepository<CustomerKYCDetails, Long>{
	CustomerKYCDetails findBySignUpDetails(SignUpDetails signUpDetails);
}
