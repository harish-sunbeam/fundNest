package com.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.MfCompanyDao;
import com.app.dao.UserDao;
import com.app.dto.MFCompanyProfileRequestDTO;
import com.app.dto.MFProfileCompanyResponseDTO;
import com.app.entities.MFCompanyDetails;
import com.app.entities.SignUpDetails;

@Service
@Transactional
public class MfCompanySErviceImpl implements MfCompanyService {

	@Autowired
	private MfCompanyDao mfComapnyDao;

	@Autowired
	private UserDao userDao;

	@Autowired
	private ModelMapper mapper;

	// Add the Mutual Fund Company Details
	@Override
	public MFProfileCompanyResponseDTO mfCompanyProfile(MFCompanyProfileRequestDTO request, Long custId) {
		// TODO Auto-generated method stub

		SignUpDetails signUpDetails = userDao.findById(custId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid UserId from CustomerServiceImpl"));

		MFCompanyDetails mFCompanyDetails = new MFCompanyDetails();
		mFCompanyDetails.setCompanyAddress(request.getCompanyAddress());
		mFCompanyDetails.setCompanyContactNo(request.getCompanyContactNo());
		mFCompanyDetails.setCompanyEmailId(request.getCompanyEmailId());
		mFCompanyDetails.setCompanyName(request.getCompanyName());
		mFCompanyDetails.setCompanyPinCode(request.getCompanyPinCode());
		mFCompanyDetails.setCompanySate(request.getCompanySate());
		mFCompanyDetails.setSignUpDetails(signUpDetails);

		MFCompanyDetails mfCompanyDetails = mapper.map(mFCompanyDetails, MFCompanyDetails.class);
		MFCompanyDetails persisentmfcompany = mfComapnyDao.save(mfCompanyDetails);
		return mapper.map(persisentmfcompany, MFProfileCompanyResponseDTO.class);
	}

	@Override
	public MFProfileCompanyResponseDTO getMfCompanyDetailsByCustId(Long custId) {

		try {
			MFCompanyDetails response = mapper.map(mfComapnyDao.findBySignUpDetailsCustId(custId),
					MFCompanyDetails.class);
			return mapper.map(response, MFProfileCompanyResponseDTO.class);

		} catch (IllegalArgumentException e) {
			throw new ResourceNotFoundException("Invalid Cust Id");
		}

	}
}
