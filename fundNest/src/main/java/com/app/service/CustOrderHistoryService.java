package com.app.service;

import java.util.List;

import com.app.dto.CustomerOrderHistoryRequestDTO;
import com.app.dto.CustomerOrderHistoryResponseDTO;

public interface CustOrderHistoryService {

	CustomerOrderHistoryResponseDTO  addOrderHistory(CustomerOrderHistoryRequestDTO request);
	
	List<CustomerOrderHistoryResponseDTO> getCustOrderHistoryByCustId(Long custId);
}
