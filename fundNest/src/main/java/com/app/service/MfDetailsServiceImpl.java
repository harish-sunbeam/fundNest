package com.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.MFDetailsDao;
import com.app.dto.AddMfDetailsRequestDTO;
import com.app.dto.AddMfDetailsResponseDTO;
import com.app.dto.MFProfileCompanyResponseDTO;
import com.app.entities.MFCompanyDetails;
import com.app.entities.MFDetails;


@Service
@Transactional
public class MfDetailsServiceImpl implements MFDetailsService {

	@Autowired
	private MFDetailsDao mfDetailsDao;
		
	@Autowired
	private ModelMapper mapper;
	
	public AddMfDetailsResponseDTO addMfDetails(AddMfDetailsRequestDTO requestMfDetails) {
		// TODO Auto-generated method stub
		MFDetails addMfDetails = mapper.map(requestMfDetails, MFDetails.class);
		MFDetails persisentmfDetails = mfDetailsDao.save(addMfDetails);
		return mapper.map(persisentmfDetails,AddMfDetailsResponseDTO.class);
	}
	

}
