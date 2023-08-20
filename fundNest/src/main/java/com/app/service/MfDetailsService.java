package com.app.service;

import com.app.dto.MFDetailsRequestDTO;
import com.app.dto.MFDetailsResponseDTO;

public interface MfDetailsService {

	MFDetailsResponseDTO addMfDetails(MFDetailsRequestDTO mfDetails,Long mfCompanyId);
}
