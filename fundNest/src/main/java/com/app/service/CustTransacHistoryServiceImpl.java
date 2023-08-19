package com.app.service;

import java.lang.reflect.Type;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.Hibernate;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.CustTransacHistoryDao;
import com.app.dao.UserDao;
import com.app.dto.CustTransacHistoryRequestDTO;
import com.app.dto.CustTransacHistoryResponseDTO;

import com.app.entities.CustomerTransacHistory;
import com.app.entities.SignUpDetails;
import com.app.entities.StockDetails;

@Service
@Transactional
public class CustTransacHistoryServiceImpl implements CustTransacHistoryService {

	@Autowired
	private CustTransacHistoryDao  custTransacHistoryDao;
	
	@Autowired
	private UserDao userDao;
	
	@Autowired
	private ModelMapper mapper;
	
	private LocalTime time;
	
	@Override
	public CustTransacHistoryResponseDTO addTransacHistory(CustTransacHistoryRequestDTO request) {
		
		CustomerTransacHistory customerTransacHistory =custTransacHistoryDao.save(mapper.map(request, CustomerTransacHistory.class));
		return mapper.map(customerTransacHistory, CustTransacHistoryResponseDTO.class);
	}
			
	@Override
	public List<CustTransacHistoryResponseDTO> getCustTHByCustId(Long custId) {
		List<CustomerTransacHistory> list=custTransacHistoryDao.findALLBySignUpDetailsCustId(custId);
		
		
		
		
		List<CustTransacHistoryResponseDTO> newList  = new ArrayList<>();
		 for (CustomerTransacHistory custTransacList: list) {
			 CustTransacHistoryResponseDTO dto = new CustTransacHistoryResponseDTO();
			 
			 dto.setOpeningBalance(custTransacList.getOpeningBalance());
			 dto.setTotalInvestedAmmount(custTransacList.getTotalInvestedAmmount());
			 dto.setTransactionAmmount(custTransacList.getTransactionAmmount());
			 dto.setTransactionStatus(custTransacList.getTransactionStatus());
			 dto.setTransactionTime(custTransacList.getTransactionTime());
			 
			 newList.add(dto);
			 
			}
		 
		 	return newList;
	}

	
}

