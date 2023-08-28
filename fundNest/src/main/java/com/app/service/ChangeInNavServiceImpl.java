package com.app.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.ChangeInNavDao;
import com.app.dto.ChangeInNavResponseDTO;
import com.app.entities.ChangeInNav;
import com.app.entities.MFDetails;
import com.app.entities.StockDetails;
import com.app.entities.StockMutualFundRelation;


@Service
@Transactional
public class ChangeInNavServiceImpl implements ChangeInNavService{

	@Autowired
	private ChangeInNavDao changeInNavDao;
	
//	@Autowired
//	private ChangeInNavResponseDTO changeInNavResponseDTO;
	
	@Autowired
	private ModelMapper mapper;
	
	
	@Override
	public double getChangeInNavByMfId(Long mfId,int noOfDays)  {
		// TODO Auto-generated method stub
		List<ChangeInNav> list = changeInNavDao.findAllByMfDetailsMfIdOrderByNavChangeIdDesc(mfId);
		 double startNavData = list.get(0).getMfNav();
		 double endNavData   = list.get(noOfDays).getMfNav();
		 
		 double roundedNumber = ((startNavData - endNavData)/startNavData) * 100 ;
		 
		 double returnPercentage = Math.round(roundedNumber * 1000.0) / 1000.0; 
		 	
//		changeInNavResponseDTO.setReturnPercentage(returnPercentage);
		 
//		return  mapper.map(changeInNavResponseDTO, ChangeInNavResponseDTO.class);
		 return returnPercentage;
	}
	


	
	
}
