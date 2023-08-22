package com.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.MfCompanyDao;
import com.app.dao.MfDetailsDao;
import com.app.dto.MFDetailsRequestDTO;
import com.app.dto.MFDetailsResponseDTO;
import com.app.entities.MFCompanyDetails;
import com.app.entities.MFDetails;
@Service
@Transactional
public class MfDetailsServiceImpl implements MfDetailsService {

	@Autowired
	private MfDetailsDao mfDetailsDao;
	
	@Autowired
	private MfCompanyDao mfCompanyDao;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public MFDetailsResponseDTO addMfDetails(MFDetailsRequestDTO mfDetails,Long mfCompanyId) {
		MFCompanyDetails mfCompanyDetails=mfCompanyDao.findById(mfCompanyId)
				.orElseThrow(()-> new ResourceNotFoundException("Invalid MfCompanyId from MfDetailsServiceImpl"));
		MFDetails newMfDetails=new MFDetails();
		newMfDetails.setMfFundSize(mfDetails.getMfFundSize());
		newMfDetails.setMfName(mfDetails.getMfName());
		newMfDetails.setMfTotalInvestment(mfDetails.getMfTotalInvestment());
		newMfDetails.setMfCompanyDetails(mfCompanyDetails);
		
		MFDetails  resMfDetails	=mfDetailsDao.save(mapper.map(newMfDetails, MFDetails.class));
		return mapper.map(resMfDetails, MFDetailsResponseDTO.class);
	}

}
