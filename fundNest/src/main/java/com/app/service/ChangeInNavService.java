package com.app.service;

import java.util.List;

import com.app.dto.ChangeInNavResponseDTO;
import com.app.entities.ChangeInNav;
import com.app.entities.StockDetails;



public interface ChangeInNavService{

	double getChangeInNavByMfId(Long mfId,int noOfDays );
	
}
