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
	public List<CustomerTransacHistory> getCustTransacHistoryByCustId(Long CustId) {
		
		List<CustomerTransacHistory> custTransactionHistory = custTransacHistoryDao.findBySignUpDetailsCustId(CustId);
		
			Hibernate.initialize(custTransactionHistory);
			Type listType = new TypeToken<List<CustomerTransacHistory>>() {}.getType();
	        return mapper.map(custTransactionHistory, listType);
			
		
		
		
//		 List<CustomerTransacHistory> list=custTransacHistoryDao.findBySignUpDetailsCustId(CustId);
//		 
//		 List<CustomerTransacHistory> newList  = new ArrayList<>();
//		 for (CustomerTransacHistory custTransacList: list) {
//			 Hibernate.initialize(custTransacList);
//			 newList.add(custTransacList);	
//		}
//		
//		  Type listType = new TypeToken<List<CustomerTransacHistory>>() {}.getType();
//	        return mapper.map(list, listType);
		 
	}

}

