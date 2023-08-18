package com.app.service;

import java.lang.reflect.Type;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.CustTransacHistoryDao;
import com.app.dto.CustTransacHistoryRequestDTO;
import com.app.dto.CustTransacHistoryResponseDTO;

import com.app.entities.CustomerTransacHistory;

@Service
@Transactional
public class CustTransacHistoryServiceImpl implements CustTransacHistoryService {

	@Autowired
	private CustTransacHistoryDao  custTransacHistoryDao;
	
	@Autowired
	private ModelMapper mapper;
	@Override
	public CustTransacHistoryResponseDTO addTransacHistory(CustTransacHistoryRequestDTO request) {
		CustomerTransacHistory customerTransacHistory =custTransacHistoryDao.save(mapper.map(request, CustomerTransacHistory.class));
		return mapper.map(customerTransacHistory, CustTransacHistoryResponseDTO.class);
	}
	@Override
	public List<CustomerTransacHistory> getCustTransacHistoryByCustId(Long CustId) {
		
		 List<CustomerTransacHistory> list=custTransacHistoryDao.findBySignUpDetailsCustId(CustId);
		
		  Type listType = new TypeToken<List<CustomerTransacHistory>>() {}.getType();
	        return mapper.map(list, listType);
		 
	}

}

