package com.app.service;

import com.app.dto.AddMfDetailsRequestDTO;
import com.app.dto.AddMfDetailsResponseDTO;

public interface MFDetailsService {
	
	AddMfDetailsResponseDTO  addMfDetails(AddMfDetailsRequestDTO requestMfDetails);
	
}
