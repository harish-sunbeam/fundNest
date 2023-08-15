package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.CustomerKYCDetails;

public interface CustKYCDetailsDao extends JpaRepository<CustomerKYCDetails, Long>{

}
