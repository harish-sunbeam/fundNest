package com.app.service;

import com.app.dto.AddKYCDetailsRequestDTO;
import com.app.dto.AddKYCDetailsResponseDTO;
import com.app.dto.AddProfileRequestDTO;
import com.app.dto.AddProfileResponseDTO;

public interface CustomerService {

	AddProfileResponseDTO addProfile(AddProfileRequestDTO request);
	
	AddKYCDetailsResponseDTO addCustKYCDetails(AddKYCDetailsRequestDTO requestKYC);
}
