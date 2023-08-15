package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.MFCompanyDetails;

public interface MfCompanyDao extends JpaRepository<MFCompanyDetails, Long>{

}
