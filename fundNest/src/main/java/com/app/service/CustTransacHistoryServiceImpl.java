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
	
	// Add the Transaction of the Customer
	@Override
	public CustTransacHistoryResponseDTO addTransacHistory(CustTransacHistoryRequestDTO request,Long custId) {
		
		SignUpDetails signUpDetails = userDao.findById(custId).orElseThrow(()-> new ResourceNotFoundException("Invalid UserId from CustomerServiceImpl"));
		
		CustomerTransacHistory customerTransacHistory1 = new CustomerTransacHistory();
		
		customerTransacHistory1.setOpeningBalance(request.getOpeningBalance());
		customerTransacHistory1.setTotalInvestedAmmount(request.getTotalInvestedAmmount());
		customerTransacHistory1.setTransactionAmmount(request.getTransactionAmmount());
		customerTransacHistory1.setTransactionStatus(request.getTransactionStatus());
		customerTransacHistory1.setTransactionTime(request.getTransactionTime());
		customerTransacHistory1.setSignUpDetails(signUpDetails);
		
		CustomerTransacHistory customerTransacHistory =custTransacHistoryDao.save(mapper.map(customerTransacHistory1, CustomerTransacHistory.class));
		return mapper.map(customerTransacHistory, CustTransacHistoryResponseDTO.class);
	}
	
	
	// Retrieve the whole List of the Transaction Details		
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

