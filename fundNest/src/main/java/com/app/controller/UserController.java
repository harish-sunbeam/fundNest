package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.LogInRequestDTO;
import com.app.dto.LogInResponseDTO;
import com.app.dto.OTPVerificationDTO;
import com.app.dto.SignUpRequestDTO;
import com.app.entities.UserType;
import com.app.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

	@Autowired
	private UserService userService;
	
	int flag=0;

	
	// Sign Up Email OTP Verification
	SignUpRequestDTO userObj=new SignUpRequestDTO();
	@PostMapping("/registerasuser")
	public ResponseEntity<String> registerUser(@RequestBody SignUpRequestDTO userRegistrationDTO) {
        userObj=userRegistrationDTO;
		userService.sendOTPAndStoreUserData(userRegistrationDTO);
        return ResponseEntity.ok("OTP sent for verification.");
    }
	
	@PostMapping("/registerascompany")
	public ResponseEntity<String> registerCompany(@RequestBody SignUpRequestDTO userRegistrationDTO) {
        userObj=userRegistrationDTO;
        flag=1;
		userService.sendOTPAndStoreUserData(userRegistrationDTO);
        return ResponseEntity.ok("OTP sent for verification.");
    }

    @PostMapping("/verify-otp")
    public ResponseEntity<?> verifyOTP(@RequestBody OTPVerificationDTO otpVerificationDTO) {
        boolean isVerified = userService.verifyOTP(otpVerificationDTO);
        if (isVerified) {
            userService.storeUserData(userObj,flag);
            return ResponseEntity.ok("User registered successfully.");
        } else {
            return ResponseEntity.badRequest().body("OTP verification failed.");
        }
    }
    
    @PostMapping("/login")
    public ResponseEntity<?> signInUser(@RequestBody LogInRequestDTO request) {
        System.out.println("Inside login"+ request);
        LogInResponseDTO response=userService.logInUser(request);
		
        return ResponseEntity.ok(response);
    }
}
