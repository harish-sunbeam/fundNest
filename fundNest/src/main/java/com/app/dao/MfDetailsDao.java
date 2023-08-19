package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.MFDetails;

public interface MfDetailsDao extends JpaRepository<MFDetails, Long> {

}
