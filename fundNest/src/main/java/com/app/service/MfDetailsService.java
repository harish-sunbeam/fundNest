package com.app.service;

import java.util.List;

import com.app.dto.MFDetailsRequestDTO;
import com.app.dto.MFDetailsResponseDTO;
import com.app.entities.MFDetails;

public interface MfDetailsService {

	MFDetailsResponseDTO addMfDetails(MFDetailsRequestDTO mfDetails,Long mfCompanyId);
	
	MFDetailsResponseDTO getMfDetailsByMfId(Long mfId);
	List<MFDetailsResponseDTO> getListOfAllMf();
}
