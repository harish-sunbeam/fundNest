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

import com.app.dto.AddKYCDetailsRequestDTO;
import com.app.dto.AddNomineeRequestDTO;
import com.app.dto.AddProfileRequestDTO;
import com.app.dto.CustTransacHistoryRequestDTO;
import com.app.dto.CustTransacHistoryResponseDTO;
import com.app.dto.CustomerUpdateProfileRequestDTO;
import com.app.dto.CustomerOrderHistoryRequestDTO;
import com.app.dto.CustomerOrderHistoryResponseDTO;
import com.app.dto.UserInvestmentDetailsRequestDTO;
import com.app.entities.CustomerPersonalDetails;
import com.app.entities.CustomerTransacHistory;
import com.app.entities.SignUpDetails;
import com.app.entities.StockDetails;
import com.app.service.CustOrderHistoryService;
import com.app.service.CustTransacHistoryService;
import com.app.service.CustomerService;

import com.app.service.UserInvestmentDetailsService;
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
	private UserInvestmentDetailsService userPortfolioService;
	
	@Autowired
	private CustOrderHistoryService custOrderHistoryService;
	
	@Autowired
	private CustTransacHistoryService  custTransacHistoryService;
	
	// To add the customer Profile
	@PostMapping("/addprofile/{custId}")
	public ResponseEntity<?> addCustProfile(@RequestBody AddProfileRequestDTO request, Long custId) {
		{
			System.out.println("Add profile of user " + request);
			return ResponseEntity.status(HttpStatus.CREATED).body(custService.addCustProfile(request,custId));
		}
	}
	
	
	// To add the customer Nominee Details
	@PostMapping("/addnominee/{custId}")
	public ResponseEntity<?> addCustNominee(@RequestBody AddNomineeRequestDTO request,Long custId) {
		{
			System.out.println("Add nominee of user " + request);
			return ResponseEntity.status(HttpStatus.CREATED).body(custService.addCustNominee(request,custId));
		}
	}
	
	
	// To add the customer KYC Details
	@PostMapping("/addkyc/{custId}")
	public ResponseEntity<?> addCustKYC(@RequestBody AddKYCDetailsRequestDTO request,@PathVariable Long custId) {
		{
			System.out.println("Add KYC of user " + request);
			return ResponseEntity.status(HttpStatus.CREATED).body(custService.addCustKYC(request,custId));
		}
	}
	
	// To add the customer Portfolio Details
	@PostMapping("/buymutualfund/{custId}")
	public ResponseEntity<?> addInPortfolio(@RequestBody UserInvestmentDetailsRequestDTO request,@PathVariable Long custId) {
		{
			System.out.println("Add in portfolio of user " + request);
			return ResponseEntity.status(HttpStatus.CREATED).body(userPortfolioService.buyMfAddInUserInvestment(request,custId));
		}
	}
	
	//to sell mf and adjust the units and balance etc.
	@PostMapping("/sellmutualfund/{custId}")
	public ResponseEntity<?> sellMf(@RequestBody UserInvestmentDetailsRequestDTO request,@PathVariable Long custId) {
		{
			System.out.println("Sell mf of user " + request);
			return ResponseEntity.status(HttpStatus.CREATED).body(userPortfolioService.sellMfRemoveFromUserInvestment(request,custId));
		}
	}
	
	
	// To retrieve the Customer personal details
	@GetMapping("/{custId}")
	public ResponseEntity<?> getCustDetails(@PathVariable Long custId)
	{
		System.out.println("In get Cust Details"+ custId);
		SignUpDetails cust=userService.getCustFromId(custId);
		
		return ResponseEntity.status(HttpStatus.CREATED).body(custService.getCustDetails(cust));
		
	}
	
	// To update the Customer Profile Details
	@PutMapping("/updateprofile")
	public ResponseEntity<?> updateCustProfile(@RequestBody CustomerUpdateProfileRequestDTO request) {
		{
			
			System.out.println("Updated profile of user " + request);
			return ResponseEntity.status(HttpStatus.CREATED).body(custService.updateCustProfile(request));
		}
	}
	
	// To add the customer order Into the database
	@PostMapping("/addorderhistory")
	public ResponseEntity<?> addOrderHistory(@RequestBody CustomerOrderHistoryRequestDTO request) {
		{
			System.out.println("Add order History of user " + request);
			return ResponseEntity.status(HttpStatus.CREATED).body(custOrderHistoryService.addOrderHistory(request));
		}
	}
	
	// To add the customer Transaction Into the database
	@PostMapping("/deposit/{custId}")
	public ResponseEntity<?> deposit(@RequestBody CustTransacHistoryRequestDTO request,@PathVariable Long custId) {
		{
			System.out.println("Deposit of user " + request);
			return ResponseEntity.status(HttpStatus.CREATED).body(custTransacHistoryService.deposit(request,custId));
		}
	}
	
	@PostMapping("/withdraw/{custId}")
	public ResponseEntity<?> withdraw(@RequestBody CustTransacHistoryRequestDTO request,@PathVariable Long custId) {
		{
			System.out.println("Withdraw of user " + request);
			return ResponseEntity.status(HttpStatus.CREATED).body(custTransacHistoryService.withdraw(request, custId));
		}
	}
	
	// To retrieve the investment details
		@GetMapping("/transactiondetails/{custId}")
		public ResponseEntity<?> getTransactionDetails(@PathVariable Long custId)
		{
			System.out.println("In get Transac Details"+ custId);
			SignUpDetails cust=userService.getCustFromId(custId);
			
			return ResponseEntity.status(HttpStatus.CREATED).body(custService.getTransactionDetails(cust));
			
		}

	// Get the Overall Transaction History
	@GetMapping("/gettransactionhistory/{custId}")
	public ResponseEntity<List<CustTransacHistoryResponseDTO>> getCustTransacHistoryByCustId(@PathVariable Long custId) {
		List<CustTransacHistoryResponseDTO> children = custTransacHistoryService.getCustTHByCustId(custId);
        return new ResponseEntity<>(children, HttpStatus.OK);
    }
	
	
	// Get the Overall Order History
	@GetMapping("/getorderhistory/{custId}")
	public ResponseEntity<List<CustomerOrderHistoryResponseDTO>> getCustOrderHistoryByCustId(@PathVariable Long custId) {
	SignUpDetails obj=	 userService.getCustFromId(custId);
		List<CustomerOrderHistoryResponseDTO> children = custOrderHistoryService.getCustOrderHistoryByCustId(obj);
        return new ResponseEntity<>(children, HttpStatus.OK);
    }
	

	
	// To retrieve the Customer Nominee Details
	@GetMapping("/nom/{custId}")
	public ResponseEntity<?> getCustomerNomineeDetails(@PathVariable Long custId)
	{
		System.out.println("In get Cust Nominee Details"+ custId);
		SignUpDetails cust=userService.getCustFromId(custId);
		
		return ResponseEntity.status(HttpStatus.CREATED).body(custService.getCustomerNomineeDetails(cust));
		
	}
	
	@GetMapping("/kyc/{custId}")
	public ResponseEntity<?> getCustomerKycDetails(@PathVariable Long custId)
	{
		System.out.println("In get Cust KYC Details"+ custId);
		SignUpDetails cust=userService.getCustFromId(custId);
		
		return ResponseEntity.status(HttpStatus.CREATED).body(custService.getCustomerKycDetails(cust));
		
	}
	
//	TO get User investment Details
	@GetMapping("/userInvestmentDetails/{custId}")
	public ResponseEntity<?> getCustomerInvestmentDetails(@PathVariable Long custId)
	{   
		System.out.println("In get Cust investment Details"+ custId);
		SignUpDetails cust=userService.getCustFromId(custId);
		
		return ResponseEntity.status(HttpStatus.CREATED).body(custService.getCustomerInvestmentDetails(cust));
		
	}
	
	
}