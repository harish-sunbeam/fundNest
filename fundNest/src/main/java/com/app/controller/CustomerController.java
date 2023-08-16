package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AddKYCDetailsRequestDTO;
import com.app.dto.AddProfileRequestDTO;
import com.app.service.CustomerService;

@RestController
@RequestMapping("/customer")
@CrossOrigin(origins = "http://localhost:3000")
public class CustomerController {

	@Autowired
	private CustomerService custService;

	@PostMapping("/addProfile")
	public ResponseEntity<?> signUnEmployee(@RequestBody AddProfileRequestDTO request) {
		{
			System.out.println("Add profile of user " + request);
			return ResponseEntity.status(HttpStatus.CREATED).body(custService.addProfile(request));
		}
	}
	
	@PostMapping("/addkyc")
	public ResponseEntity<?> addKYCDetails(@RequestBody AddKYCDetailsRequestDTO request) {
		{
			System.out.println("Add profile of user " + request);
			return ResponseEntity.status(HttpStatus.CREATED).body(custService.addCustKYCDetails(request));
		}
	}
	
	
}
