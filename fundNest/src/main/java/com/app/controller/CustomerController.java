package com.app.controller;

import java.util.List;

import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AddNomineeRequestDTO;
import com.app.dto.AddProfileRequestDTO;
import com.app.dto.CustTransacHistoryRequestDTO;
import com.app.dto.CustomerUpdateProfileRequestDTO;
import com.app.dto.CustomerOrderHistoryRequestDTO;
import com.app.dto.UserPortfolioRequestDTO;
import com.app.entities.CustomerOrderHistory;
import com.app.entities.CustomerPersonalDetails;
import com.app.entities.CustomerTransacHistory;
import com.app.entities.SignUpDetails;
import com.app.entities.StockDetails;
import com.app.service.CustOrderHistoryService;
import com.app.service.CustTransacHistoryService;
import com.app.service.CustomerService;

import com.app.service.UserPortfolioService;
import com.app.service.UserService;

@RestController
@RequestMapping("/customer")
@CrossOrigin(origins = "http://localhost:3000")
public class CustomerController {

	@Autowired
	private CustomerService custService;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private UserPortfolioService userPortfolioService;
	
	@Autowired
	private CustOrderHistoryService custOrderHistoryService;
	
	@Autowired
	private CustTransacHistoryService  custTransacHistoryService;
	

	@PostMapping("/addprofile")
	public ResponseEntity<?> addCustProfile(@RequestBody AddProfileRequestDTO request) {
		{
			System.out.println("Add profile of user " + request);
			return ResponseEntity.status(HttpStatus.CREATED).body(custService.addCustProfile(request));
		}
	}
	
	@PostMapping("/addnominee")
	public ResponseEntity<?> addCustNominee(@RequestBody AddNomineeRequestDTO request) {
		{
			System.out.println("Add nominee of user " + request);
			return ResponseEntity.status(HttpStatus.CREATED).body(custService.addCustNominee(request));
		}
	}
	
	@PostMapping("/portfolio")
	public ResponseEntity<?> addInPortfolio(@RequestBody UserPortfolioRequestDTO request) {
		{
			System.out.println("Add in portfolio of user " + request);
			return ResponseEntity.status(HttpStatus.CREATED).body(userPortfolioService.addInPortfolio(request));
		}
	}
	
	
	
	@GetMapping("/{custId}")
	public ResponseEntity<?> getCustDetails(@PathVariable Long custId)
	{
		System.out.println("In get Cust Details"+ custId);
		SignUpDetails cust=userService.getCustFromId(custId);
		
		return ResponseEntity.status(HttpStatus.CREATED).body(custService.getCustDetails(cust));
		
	}
	
	
	@PutMapping("/updateprofile")
	public ResponseEntity<?> updateCustProfile(@RequestBody CustomerUpdateProfileRequestDTO request) {
		{
			
			System.out.println("Updated profile of user " + request);
			return ResponseEntity.status(HttpStatus.CREATED).body(custService.updateCustProfile(request));
		}
	}
	
	@PostMapping("/orderhistory")
	public ResponseEntity<?> addOrderHistory(@RequestBody CustomerOrderHistoryRequestDTO request) {
		{
			System.out.println("Add order History of user " + request);
			return ResponseEntity.status(HttpStatus.CREATED).body(custOrderHistoryService.addOrderHistory(request));
		}
	}
	
	@PostMapping("/transactionhistory")
	public ResponseEntity<?> addTransacHistory(@RequestBody CustTransacHistoryRequestDTO request) {
		{
			System.out.println("Add Transac History of user " + request);
			return ResponseEntity.status(HttpStatus.CREATED).body(custTransacHistoryService.addTransacHistory(request));
		}
	}
	

	
//	@GetMapping("/transactionhistory/{custId}")
//	public ResponseEntity<List<CustomerTransacHistory>> getCustTransacHistoryByCustId(@PathVariable Long custId) {
//        List<CustomerTransacHistory> children = custTransacHistoryService.getCustTransacHistoryByCustId(custId);
//        return new ResponseEntity<>(children, HttpStatus.OK);
//    }
	
	
	@GetMapping("/transactionhistory/{custId}")
	public ResponseEntity<List<CustomerTransacHistory>> getCustTransacHistoryByCustId(@PathVariable Long custId) {
        List<CustomerTransacHistory> children = userService.getTransacHistoryByCustId(custId);
        return new ResponseEntity<>(children, HttpStatus.OK);
    }


    @GetMapping("/order-history/{custId}")
    public ResponseEntity<List<CustomerOrderHistory>>  getCustomerOrderHistoryByCustomerId(@PathVariable Long custId) {
        List<CustomerOrderHistory> child = custOrderHistoryService.getAllCustomerOrderHistory(custId);
        return new ResponseEntity<>(child, HttpStatus.OK);
        
    }
	
}