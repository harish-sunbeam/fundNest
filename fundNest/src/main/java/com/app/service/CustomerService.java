package com.app.service;

import com.app.dto.AddKYCDetailsRequestDTO;
import com.app.dto.AddKYCDetailsResponseDTO;
import com.app.dto.AddNomineeRequestDTO;
import com.app.dto.AddNomineeResponseDTO;
import com.app.dto.AddProfileRequestDTO;
import com.app.dto.AddProfileResponseDTO;
import com.app.dto.CustTransacHistoryResponseDTO;
import com.app.dto.CustomerUpdateProfileRequestDTO;
import com.app.dto.CustomerUpdateProfileResponseDTO;
import com.app.dto.LogInRequestDTO;
import com.app.dto.LogInResponseDTO;
import com.app.entities.CustomerPersonalDetails;
import com.app.entities.SignUpDetails;

public interface CustomerService {

	AddProfileResponseDTO addCustProfile(AddProfileRequestDTO request, Long custId);
	
	AddNomineeResponseDTO addCustNominee(AddNomineeRequestDTO request, Long custId);
	
	AddKYCDetailsResponseDTO addCustKYC(AddKYCDetailsRequestDTO request,Long custId);
	
	CustomerUpdateProfileResponseDTO updateCustProfile(CustomerUpdateProfileRequestDTO request);

	CustomerUpdateProfileResponseDTO getCustDetails(SignUpDetails request);
	
	AddNomineeResponseDTO getCustomerNomineeDetails(SignUpDetails request);
	
	AddKYCDetailsResponseDTO getCustomerKycDetails(SignUpDetails request);
	
	CustTransacHistoryResponseDTO getTransactionDetails(SignUpDetails request);
}
