package com.app.service;

import com.app.dto.MFDetailsRequestDTO;
import com.app.dto.MFDetailsResponseDTO;
import com.app.entities.MFDetails;

public interface MfDetailsService {

	MFDetailsResponseDTO addMfDetails(MFDetailsRequestDTO mfDetails,Long mfCompanyId);
	
	MFDetails getMfDetailsByMfId(Long mfId);
}
