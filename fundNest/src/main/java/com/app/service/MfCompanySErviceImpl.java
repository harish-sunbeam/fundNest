package com.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.MfCompanyDao;
import com.app.dto.MFCompanyProfileRequestDTO;
import com.app.dto.MFProfileCompanyResponseDTO;
import com.app.entities.MFCompanyDetails;

@Service
@Transactional
public class MfCompanySErviceImpl implements MfCompanyService{
	
	@Autowired
	private MfCompanyDao mfComapnyDao;

	@Autowired
	private ModelMapper mapper;
	
	@Override
	public MFProfileCompanyResponseDTO mfCompanyProfile(MFCompanyProfileRequestDTO request) {
		// TODO Auto-generated method stub
		MFCompanyDetails mfCompanyDetails = mapper.map(request, MFCompanyDetails.class);
		MFCompanyDetails persisentmfcompany = mfComapnyDao.save(mfCompanyDetails);
		return mapper.map(persisentmfcompany,MFProfileCompanyResponseDTO.class);
	}
	

}
