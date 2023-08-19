package com.app.service;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.CustOrderHistoryDao;
import com.app.dto.CustTransacHistoryResponseDTO;
import com.app.dto.CustomerOrderHistoryRequestDTO;
import com.app.dto.CustomerOrderHistoryResponseDTO;
import com.app.entities.CustomerOrderHistory;
import com.app.entities.CustomerTransacHistory;
import com.app.entities.MFDetails;

@Service
@Transactional
public class CustomerOrderHistoryServiceImpl implements CustOrderHistoryService {

	@Autowired
	private CustOrderHistoryDao custOrderHistoryDao;
	
	@Autowired
	private ModelMapper mapper;
	
	private LocalTime time;
	
	
	@Override
	public CustomerOrderHistoryResponseDTO addOrderHistory(CustomerOrderHistoryRequestDTO request) {
		
		
		CustomerOrderHistory custOrderHistory=custOrderHistoryDao.save(mapper.map(request, CustomerOrderHistory.class));
		
		return mapper.map(custOrderHistory, CustomerOrderHistoryResponseDTO.class);
	}


	@Override
	public List<CustomerOrderHistoryResponseDTO> getCustOrderHistoryByCustId(Long custId) {
		// TODO Auto-generated method stub
		
		List<CustomerOrderHistory> list=custOrderHistoryDao.findALLBySignUpDetailsCustId(custId);
		
		List<CustomerOrderHistoryResponseDTO> newList  = new ArrayList<>();
		for (CustomerOrderHistory custOrderList : list) {
			CustomerOrderHistoryResponseDTO dto = new CustomerOrderHistoryResponseDTO();
			MFDetails mfDetails = new MFDetails();
			dto.setOrderAmmount(custOrderList.getOrderAmmount());
			dto.setOrderStatus(custOrderList.getOrderStatus());
			dto.setOrderTime(custOrderList.getOrderTime());
			mfDetails.setMfName(custOrderList.getMfDetails().getMfName());
			mfDetails.setMfNAV(custOrderList.getMfDetails().getMfNAV());
			
			dto.setMfDetails(mfDetails);
			newList.add(dto);		
		}
		return newList;
		
		
		
	}
}


