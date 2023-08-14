package com.app.service;

import com.app.dto.LogInRequestDTO;
import com.app.dto.LogInResponseDTO;
import com.app.dto.OTPVerificationDTO;
import com.app.dto.SignUpRequestDTO;
import com.app.dto.SignUpResponseDTO;

public interface UserService {

	public boolean verifyOTP(OTPVerificationDTO otpVerificationDTO);
	SignUpResponseDTO storeUserData(SignUpRequestDTO userObj,int flag);
	 public void sendOTPAndStoreUserData(SignUpRequestDTO userRegistrationDTO);
	 
	 LogInResponseDTO logInUser(LogInRequestDTO request);
	 
}

