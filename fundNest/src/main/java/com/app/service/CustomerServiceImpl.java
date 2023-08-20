package com.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.CustomerKYCDetailsDao;
import com.app.dao.CustomerNomineeDetailsDao;
import com.app.dao.CustomerPersonalDetailsDao;
import com.app.dao.UserDao;
import com.app.dto.AddKYCDetailsRequestDTO;
import com.app.dto.AddKYCDetailsResponseDTO;
import com.app.dto.AddNomineeRequestDTO;
import com.app.dto.AddNomineeResponseDTO;
import com.app.dto.AddProfileRequestDTO;
import com.app.dto.AddProfileResponseDTO;
import com.app.dto.CustomerUpdateProfileRequestDTO;
import com.app.dto.CustomerUpdateProfileResponseDTO;
import com.app.dto.LogInRequestDTO;
import com.app.dto.LogInResponseDTO;
import com.app.entities.CustomerKYCDetails;
import com.app.entities.CustomerNomineeDetails;
import com.app.entities.CustomerPersonalDetails;
import com.app.entities.SignUpDetails;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	private CustomerPersonalDetailsDao custPDetailsDao;
	
	@Autowired
	private UserDao userDao;
	
	@Autowired
	private CustomerNomineeDetailsDao custNomDetailsDao;
	
	@Autowired
	private CustomerKYCDetailsDao custKYCDetailsDao;
	
	@Autowired
	private ModelMapper mapper;
	
	
	// Add Customer Profile Details
	@Override
	public AddProfileResponseDTO addCustProfile(AddProfileRequestDTO request, Long custId) {
		
		SignUpDetails signUpDetails = userDao.findById(custId).orElseThrow(()-> new ResourceNotFoundException("Invalid UserId from CustomerServiceImpl"));
		
		CustomerPersonalDetails customerPersonalDetails = new CustomerPersonalDetails();
		customerPersonalDetails.setCustFirstName(request.getCustFirstName());
		customerPersonalDetails.setCustLastName(request.getCustLastName());
		customerPersonalDetails.setCustPanNo(request.getCustPanNo());
		customerPersonalDetails.setCustGender(request.getCustGender());
		customerPersonalDetails.setCustMaritalStatus(request.getCustMaritalStatus());
		customerPersonalDetails.setCustOccupation(request.getCustOccupation());
		customerPersonalDetails.setCustAddress(request.getCustAddress());
		customerPersonalDetails.setCustState(request.getCustState());
		customerPersonalDetails.setCustPinCode(request.getCustPinCode());
		customerPersonalDetails.setCustDOB(request.getCustDOB());
		customerPersonalDetails.setSignUpDetails(signUpDetails);
		
		
		CustomerPersonalDetails  persistentCust=custPDetailsDao.save(mapper.map(customerPersonalDetails, CustomerPersonalDetails.class));
		return mapper.map(persistentCust, AddProfileResponseDTO.class);
	
	}
	
	
	// Add Customer Nominee Details
	@Override
	public AddNomineeResponseDTO addCustNominee(AddNomineeRequestDTO request , Long custId) {
		
		SignUpDetails signUpDetails = userDao.findById(custId).orElseThrow(()-> new ResourceNotFoundException("Invalid UserId from CustomerServiceImpl"));
		
		CustomerNomineeDetails customerNomineeDetails = new  CustomerNomineeDetails();
		
		customerNomineeDetails.setNomAddress(request.getNomAddress());
		customerNomineeDetails.setNomDOB(request.getNomDOB());
		customerNomineeDetails.setNomEmailId(request.getNomEmailId());
		customerNomineeDetails.setNomFirstName(request.getNomFirstName());
		customerNomineeDetails.setNomLastName(request.getNomLastName());
		customerNomineeDetails.setNomMobileNo(request.getNomMobileNo());
		customerNomineeDetails.setNomPinCode(request.getNomPinCode());
		customerNomineeDetails.setNomRelation(request.getNomRelation());
		customerNomineeDetails.setNomState(request.getNomState());
		customerNomineeDetails.setSignUpDetails(signUpDetails);
		CustomerNomineeDetails persistentNom=custNomDetailsDao.save(mapper.map(customerNomineeDetails, CustomerNomineeDetails.class));
		
		return mapper.map(persistentNom, AddNomineeResponseDTO.class);
	}
	
	
	// Add Customer KYC Details
	@Override
	public AddKYCDetailsResponseDTO addCustKYC(AddKYCDetailsRequestDTO request,Long custId) {
		
		SignUpDetails signUpDetails = userDao.findById(custId).orElseThrow(()-> new ResourceNotFoundException("Invalid UserId from CustomerServiceImpl"));
		
		CustomerKYCDetails customerKYCDetails = new CustomerKYCDetails();
		customerKYCDetails.setAccNo(request.getAccNo());
		customerKYCDetails.setAnnualIncome(request.getAnnualIncome());
		customerKYCDetails.setBankName(request.getBankName());
		customerKYCDetails.setIfscCode(request.getIfscCode());
		customerKYCDetails.setSignUpDetails(signUpDetails);
		
		CustomerKYCDetails persistentNom=custKYCDetailsDao.save(mapper.map(customerKYCDetails, CustomerKYCDetails.class));
		
		return mapper.map(persistentNom, AddKYCDetailsResponseDTO.class);
	}
	
	// Retrieve Customer Personal Details
	CustomerPersonalDetails custPersonalDetails =new CustomerPersonalDetails();
	@Override
	public CustomerUpdateProfileResponseDTO getCustDetails(SignUpDetails request) {
		CustomerPersonalDetails custDetails=custPDetailsDao.findBySignUpDetails(mapper.map(request, SignUpDetails.class));
				custPersonalDetails=custDetails;
		System.out.println("Cust_id :- "+custDetails.getSignUpDetails().getCustId());
		return mapper.map(custDetails, CustomerUpdateProfileResponseDTO.class) ;
	}
	
	// Update Customer Personal Details
	@Override
	public CustomerUpdateProfileResponseDTO updateCustProfile(CustomerUpdateProfileRequestDTO request) {	
		
		custPersonalDetails.setCustFirstName(request.getCustFirstName());
		custPersonalDetails.setCustLastName(request.getCustLastName());
		custPersonalDetails.setCustMaritalStatus(request.getCustMaritalStatus());
		custPersonalDetails.setCustOccupation(request.getCustOccupation());
		custPersonalDetails.setCustAddress(request.getCustAddress());
		custPersonalDetails.setCustState(request.getCustState());
		custPersonalDetails.setCustPinCode(request.getCustPinCode());
		
		CustomerPersonalDetails custDetails=custPDetailsDao.save(mapper.map(custPersonalDetails, CustomerPersonalDetails.class));
		return mapper.map(custDetails, CustomerUpdateProfileResponseDTO.class);
	}

	
	// Retrieve the Customer Nominee Details
	@Override
	public AddNomineeResponseDTO getCustomerNomineeDetails(SignUpDetails request) {
		
		CustomerNomineeDetails custDetails=custNomDetailsDao.findBySignUpDetails(mapper.map(request, SignUpDetails.class));
	
		return mapper.map(custDetails,  AddNomineeResponseDTO.class);
	}
}
