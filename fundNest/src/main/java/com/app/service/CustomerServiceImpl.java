package com.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.CustomerNomineeDetailsDao;
import com.app.dao.CustomerPersonalDetailsDao;
import com.app.dao.UserDao;
import com.app.dto.AddNomineeRequestDTO;
import com.app.dto.AddNomineeResponseDTO;
import com.app.dto.AddProfileRequestDTO;
import com.app.dto.AddProfileResponseDTO;
import com.app.dto.CustomerUpdateProfileRequestDTO;
import com.app.dto.CustomerUpdateProfileResponseDTO;
import com.app.dto.LogInRequestDTO;
import com.app.dto.LogInResponseDTO;
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
	private ModelMapper mapper;
	
	@Override
	public AddProfileResponseDTO addCustProfile(AddProfileRequestDTO request) {
		
		CustomerPersonalDetails  persistentCust=custPDetailsDao.save(mapper.map(request, CustomerPersonalDetails.class));
		return mapper.map(persistentCust, AddProfileResponseDTO.class);
	
	}
	
	@Override
	public AddNomineeResponseDTO addCustNominee(AddNomineeRequestDTO request) {
		
		CustomerNomineeDetails persistentNom=custNomDetailsDao.save(mapper.map(request, CustomerNomineeDetails.class));
		
		return mapper.map(persistentNom, AddNomineeResponseDTO.class);
	}
	
	CustomerPersonalDetails custPersonalDetails =new CustomerPersonalDetails();
	@Override
	public CustomerUpdateProfileResponseDTO getCustDetails(SignUpDetails request) {
		CustomerPersonalDetails custDetails=custPDetailsDao.findBySignUpDetails(mapper.map(request, SignUpDetails.class));
				custPersonalDetails=custDetails;
		System.out.println("Cust_id :- "+custDetails.getSignUpDetails().getCustId());
		return mapper.map(custDetails, CustomerUpdateProfileResponseDTO.class) ;
	}
	
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

	@Override
	public AddNomineeResponseDTO getCustomerNomineeDetails(SignUpDetails request) {
		
		CustomerNomineeDetails custDetails=custNomDetailsDao.findBySignUpDetails(mapper.map(request, SignUpDetails.class));
	
		return mapper.map(custDetails,  AddNomineeResponseDTO.class);
	}
}
