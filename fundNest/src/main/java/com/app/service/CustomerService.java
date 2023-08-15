package com.app.service;

import com.app.dto.AddProfileRequestDTO;
import com.app.dto.AddProfileResponseDTO;

public interface CustomerService {

	AddProfileResponseDTO addProfile(AddProfileRequestDTO request);
}
