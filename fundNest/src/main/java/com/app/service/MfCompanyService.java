package com.app.service;

import com.app.dto.MFCompanyProfileRequestDTO;
import com.app.dto.MFProfileCompanyResponseDTO;
import com.app.entities.MFCompanyDetails;

public interface MfCompanyService {

	MFProfileCompanyResponseDTO mfCompanyProfile(MFCompanyProfileRequestDTO requestDTO,Long custId);

	MFProfileCompanyResponseDTO getMfCompanyDetailsByCustId(Long custId);
	
}
