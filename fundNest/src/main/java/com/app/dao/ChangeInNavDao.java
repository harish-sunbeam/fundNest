package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.ChangeInNav;
import com.app.entities.MFDetails;
import java.util.List;

public interface ChangeInNavDao extends JpaRepository<ChangeInNav, Long> {

	List<ChangeInNav> findByMfDetailsOrderByChangeDateDesc(MFDetails mfdetails);
	
}
