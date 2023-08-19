package com.app.service;

import com.app.dto.MFCompanyProfileRequestDTO;
import com.app.dto.MFProfileCompanyResponseDTO;

public interface MfCompanyService {

	MFProfileCompanyResponseDTO mfCompanyProfile(MFCompanyProfileRequestDTO requestDTO,Long custId);
	
}
