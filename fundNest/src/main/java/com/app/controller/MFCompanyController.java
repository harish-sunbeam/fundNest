package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AddMfDetailsRequestDTO;
import com.app.dto.MFCompanyProfileRequestDTO;
import com.app.dto.SignUpRequestDTO;
import com.app.entities.MFDetails;
import com.app.service.MFDetailsService;
import com.app.service.MfCompanyService;


@RestController
@RequestMapping("/company")
@CrossOrigin(origins = "http://localhost:3000")
public class MFCompanyController {
	
	@Autowired
	private MfCompanyService mfCompanyService; 

	@Autowired
	private MFDetailsService mfDetailsService;
	
	// MF COMPANY PROFILE CREATION
		@PostMapping("/myprofilecompany")
		public ResponseEntity<?> mfCompanyProfile(@RequestBody MFCompanyProfileRequestDTO requestDTO) {
			System.out.println("in add new mfCompany" + requestDTO);
			return ResponseEntity.status(HttpStatus.CREATED).body(mfCompanyService.mfCompanyProfile(requestDTO));
		}
		
		@PostMapping("/addmfdetails")
		public ResponseEntity<?> mfdetails(@RequestBody AddMfDetailsRequestDTO requestMfDetails) {
			System.out.println("in add new Mutual Fund" + requestMfDetails);
			return ResponseEntity.status(HttpStatus.CREATED).body(mfDetailsService.addMfDetails(requestMfDetails));
		}
}
