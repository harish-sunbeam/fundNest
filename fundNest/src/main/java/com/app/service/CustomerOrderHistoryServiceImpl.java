package com.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.CustOrderHistoryDao;
import com.app.dto.CustomerOrderHistoryRequestDTO;
import com.app.dto.CustomerOrderHistoryResponseDTO;
import com.app.entities.CustomerOrderHistory;

@Service
@Transactional
public class CustomerOrderHistoryServiceImpl implements CustOrderHistoryService {

	@Autowired
	private CustOrderHistoryDao custOrderHistoryDao;
	
	@Autowired
	private ModelMapper mapper;
	
	
	@Override
	public CustomerOrderHistoryResponseDTO addOrderHistory(CustomerOrderHistoryRequestDTO request) {
		
		CustomerOrderHistory custOrderHistory=custOrderHistoryDao.save(mapper.map(request, CustomerOrderHistory.class));
		
		return mapper.map(custOrderHistory, CustomerOrderHistoryResponseDTO.class);
	}

}


