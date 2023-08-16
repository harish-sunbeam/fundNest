package com.app.service;

import com.app.dto.AddNomineeRequestDTO;
import com.app.dto.AddNomineeResponseDTO;
import com.app.dto.AddProfileRequestDTO;
import com.app.dto.AddProfileResponseDTO;
import com.app.dto.CustomerUpdateProfileRequestDTO;
import com.app.dto.CustomerUpdateProfileResponseDTO;
import com.app.dto.LogInRequestDTO;
import com.app.dto.LogInResponseDTO;
import com.app.entities.CustomerPersonalDetails;
import com.app.entities.SignUpDetails;

public interface CustomerService {

	AddProfileResponseDTO addCustProfile(AddProfileRequestDTO request);
	
	AddNomineeResponseDTO addCustNominee(AddNomineeRequestDTO request);
	
	CustomerUpdateProfileResponseDTO updateCustProfile(CustomerUpdateProfileRequestDTO request);

	CustomerUpdateProfileResponseDTO getCustDetails(SignUpDetails request);
	
}
