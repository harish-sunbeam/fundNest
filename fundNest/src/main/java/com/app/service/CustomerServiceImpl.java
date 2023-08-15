package com.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.CustKYCDetailsDao;
import com.app.dao.CustomerDao;
import com.app.dto.AddKYCDetailsRequestDTO;
import com.app.dto.AddKYCDetailsResponseDTO;
import com.app.dto.AddProfileRequestDTO;
import com.app.dto.AddProfileResponseDTO;
import com.app.dto.MFProfileCompanyResponseDTO;
import com.app.entities.CustomerKYCDetails;
import com.app.entities.CustomerPersonalDetails;
import com.app.entities.MFCompanyDetails;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	private CustomerDao custDao;
	
	@Autowired
	private CustKYCDetailsDao custKYCDetailsDao;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public AddProfileResponseDTO addProfile(AddProfileRequestDTO request) {
		
		CustomerPersonalDetails  persistentCust=custDao.save(mapper.map(request, CustomerPersonalDetails.class));
		return mapper.map(persistentCust, AddProfileResponseDTO.class);
	
	}

	@Override
	public AddKYCDetailsResponseDTO addCustKYCDetails(AddKYCDetailsRequestDTO requestKYC) {
		// TODO Auto-generated method stub
		CustomerKYCDetails custKYCDetails = mapper.map(requestKYC, CustomerKYCDetails.class);
		CustomerKYCDetails persisentkycdetails = custKYCDetailsDao.save(custKYCDetails);
		return mapper.map(persisentkycdetails,AddKYCDetailsResponseDTO.class);
	}
	

}
