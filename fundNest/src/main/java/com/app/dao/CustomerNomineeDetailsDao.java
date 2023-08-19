package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.CustomerNomineeDetails;

public interface CustomerNomineeDetailsDao extends JpaRepository<CustomerNomineeDetails, Long> {

}
