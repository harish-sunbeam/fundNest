package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.CustomerPersonalDetails;



public interface CustomerDao extends JpaRepository<CustomerPersonalDetails,Long > {

}
