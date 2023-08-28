package com.app.service;

import java.lang.reflect.Type;
import java.time.LocalDateTime;
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
import com.app.entities.TransactionStatus;

@Service
@Transactional
public class CustTransacHistoryServiceImpl implements CustTransacHistoryService {

	@Autowired
	private CustTransacHistoryDao custTransacHistoryDao;

	@Autowired
	private UserDao userDao;

	@Autowired
	private ModelMapper mapper;

	private LocalDateTime date = LocalDateTime.now();

	// Add the Transaction of the Customer
	@Override
	public CustTransacHistoryResponseDTO deposit(CustTransacHistoryRequestDTO request, Long custId) {

		SignUpDetails signUpDetails = userDao.findById(custId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid UserId from CustomerServiceImpl"));

		List<CustomerTransacHistory> custTHList = custTransacHistoryDao
				.findBySignUpDetailsCustIdOrderByCustTransacHistoryIdDesc(custId);
		double latestBalance = 0;
		if (!custTHList.isEmpty()) {
			latestBalance = custTHList.get(0).getOpeningBalance();

		}
		latestBalance = latestBalance + request.getTransactionAmmount();

		CustomerTransacHistory customerTransacHistory1 = new CustomerTransacHistory();

		customerTransacHistory1.setOpeningBalance(latestBalance);
		customerTransacHistory1.setTransactionAmmount(request.getTransactionAmmount());
		customerTransacHistory1.setTransactionStatus(TransactionStatus.DEPOSIT);
		customerTransacHistory1.setTransactionTime(date);
		customerTransacHistory1.setSignUpDetails(signUpDetails);

		CustomerTransacHistory customerTransacHistory = custTransacHistoryDao
				.save(mapper.map(customerTransacHistory1, CustomerTransacHistory.class));
		return mapper.map(customerTransacHistory, CustTransacHistoryResponseDTO.class);
	}

	// Retrieve the whole List of the Transaction Details
	@Override
	public List<CustTransacHistoryResponseDTO> getCustTHByCustId(Long custId) {
		List<CustomerTransacHistory> list = custTransacHistoryDao.findALLBySignUpDetailsCustId(custId);

		List<CustTransacHistoryResponseDTO> newList = new ArrayList<>();
		for (CustomerTransacHistory custTransacList : list) {
			CustTransacHistoryResponseDTO dto = new CustTransacHistoryResponseDTO();

			dto.setOpeningBalance(custTransacList.getOpeningBalance());
			dto.setTransactionAmmount(custTransacList.getTransactionAmmount());
			dto.setTransactionStatus(custTransacList.getTransactionStatus());
			dto.setTransactionTime(custTransacList.getTransactionTime());

			newList.add(dto);

		}

		return newList;
	}

	@Override
	public CustTransacHistoryResponseDTO withdraw(CustTransacHistoryRequestDTO request, Long custId) {

		SignUpDetails signUpDetails = userDao.findById(custId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid UserId from CustomerServiceImpl"));

		List<CustomerTransacHistory> custTHList = custTransacHistoryDao
				.findBySignUpDetailsCustIdOrderByCustTransacHistoryIdDesc(custId);
		double latestBalance = 0;

		if (!custTHList.isEmpty()) {
			latestBalance = custTHList.get(0).getOpeningBalance(); // Previous opening balance
		}

		// Check if sufficient balance for withdrawal
		if (latestBalance < request.getTransactionAmmount()) {
			throw new ResourceNotFoundException("Insufficient Balance to withdraw");
		} else {
			// Update the opening balance based on previous balance and withdrawal amount
			latestBalance = latestBalance - request.getTransactionAmmount();

			CustomerTransacHistory customerTransacHistory1 = new CustomerTransacHistory();

			customerTransacHistory1.setOpeningBalance(latestBalance);
			customerTransacHistory1.setTransactionAmmount(request.getTransactionAmmount());
			customerTransacHistory1.setTransactionStatus(TransactionStatus.WITHDRAW);
			customerTransacHistory1.setTransactionTime(date);
			customerTransacHistory1.setSignUpDetails(signUpDetails);

			CustomerTransacHistory customerTransacHistory = custTransacHistoryDao
					.save(mapper.map(customerTransacHistory1, CustomerTransacHistory.class));
			return mapper.map(customerTransacHistory, CustTransacHistoryResponseDTO.class);
		}

	}
	
	
	
	@Override
	public CustTransacHistoryResponseDTO getTransactionDetails(Long custId) {
		// TODO Auto-generated method stub
		List<CustomerTransacHistory> custTHList = custTransacHistoryDao
				.findBySignUpDetailsCustIdOrderByCustTransacHistoryIdDesc(custId);
		
		CustomerTransacHistory customerTransacHistory = new CustomerTransacHistory();
		double latestBalance = 0;

		if (!custTHList.isEmpty()) {
			customerTransacHistory = custTHList.get(0); // Previous opening balance
		}
		return mapper.map(customerTransacHistory, CustTransacHistoryResponseDTO.class);
	}
}
