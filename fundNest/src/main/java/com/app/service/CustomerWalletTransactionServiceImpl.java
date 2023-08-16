package com.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.CustomerWalletTransactionDao;
import com.app.dto.CustomerWalletTransactionRequestDTO;
import com.app.dto.CustomerWalletTransactionResponseDTO;
import com.app.entities.CustomerWalletTransaction;

@Service
@Transactional
public class CustomerWalletTransactionServiceImpl implements CustomerWalletTransactionService {

	@Autowired
	private CustomerWalletTransactionDao custWalletTranDao;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public CustomerWalletTransactionResponseDTO addTransation(CustomerWalletTransactionRequestDTO request) {
	
		CustomerWalletTransaction custWalletTransac =custWalletTranDao.save(mapper.map(request, CustomerWalletTransaction.class));
		
		return mapper.map(custWalletTransac, CustomerWalletTransactionResponseDTO.class);
	}
}
