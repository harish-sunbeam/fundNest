package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.MFCompanyProfileRequestDTO;
import com.app.dto.SignUpRequestDTO;
import com.app.service.MfCompanyService;


@RestController
@RequestMapping("/company")
@CrossOrigin(origins = "http://localhost:3000")
public class MFCompanyController {
	
	@Autowired
	private MfCompanyService mfCompanyService; 
	
	// MF COMPANY PROFILE CREATION
		@PostMapping("/myprofilecompany/{custId}")
		public ResponseEntity<?> mfCompanyProfile(@RequestBody MFCompanyProfileRequestDTO requestDTO,@PathVariable Long custId) {
			System.out.println("in add new mfCompany" + requestDTO);
			return ResponseEntity.status(HttpStatus.CREATED).body(mfCompanyService.mfCompanyProfile(requestDTO,custId));
		}
		
		@GetMapping("/getMfCompanyDetailsByCustId/{custId}")
		public ResponseEntity<?> getMfCompanyDetailsByCustId(@PathVariable Long custId) {
			System.out.println("getMfCompanyDetailsByCustId" + custId);
			return ResponseEntity.status(HttpStatus.CREATED).body(mfCompanyService.getMfCompanyDetailsByCustId(custId));
		}
}
