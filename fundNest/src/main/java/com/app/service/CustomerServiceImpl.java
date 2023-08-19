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
	
	
	
	@Override
	public CustomerUpdateProfileResponseDTO getCustDetails(Long custId) {
		CustomerPersonalDetails custDetails=custPDetailsDao.findBySignUpDetailsCustId(custId);
		return mapper.map(custDetails, CustomerUpdateProfileResponseDTO.class) ;
	}
	
	@Override
	public CustomerUpdateProfileResponseDTO updateCustProfile(CustomerUpdateProfileRequestDTO request,Long custId) {	
		SignUpDetails signUpDetails =userDao.findById(custId)
				.orElseThrow(()-> new ResourceNotFoundException("Invalid cust_id from CustServImpl"));
		Long id=signUpDetails.getCustId();
		CustomerPersonalDetails oldCustPDetails=custPDetailsDao.findBySignUpDetailsCustId(id);
		CustomerPersonalDetails	custPersonalDetails =new CustomerPersonalDetails();
		custPersonalDetails.setCustPersonalDetailsId(oldCustPDetails.getCustPersonalDetailsId());
		custPersonalDetails.setCustFirstName(request.getCustFirstName());
		custPersonalDetails.setCustLastName(request.getCustLastName());
		custPersonalDetails.setCustMaritalStatus(request.getCustMaritalStatus());
		custPersonalDetails.setCustOccupation(request.getCustOccupation());
		custPersonalDetails.setCustAddress(request.getCustAddress());
		custPersonalDetails.setCustState(request.getCustState());
		custPersonalDetails.setCustPinCode(request.getCustPinCode());
		custPersonalDetails.setCustDOB(oldCustPDetails.getCustDOB());
		custPersonalDetails.setCustPanNo(oldCustPDetails.getCustPanNo());
		custPersonalDetails.setCustGender(oldCustPDetails.getCustGender());
		custPersonalDetails.setSignUpDetails(signUpDetails);
		
		CustomerPersonalDetails custDetails=custPDetailsDao.save(mapper.map(custPersonalDetails, CustomerPersonalDetails.class));
		return mapper.map(custDetails, CustomerUpdateProfileResponseDTO.class);
	}

	@Override
	public AddNomineeResponseDTO getCustomerNomineeDetails(SignUpDetails request) {
		
		CustomerNomineeDetails custDetails=custNomDetailsDao.findBySignUpDetails(mapper.map(request, SignUpDetails.class));
	
		return mapper.map(custDetails,  AddNomineeResponseDTO.class);
	}
}
