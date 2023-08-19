package com.app.service;

import java.util.List;

import com.app.dto.CustomerOrderHistoryRequestDTO;
import com.app.dto.CustomerOrderHistoryResponseDTO;
import com.app.entities.CustomerOrderHistory;

public interface CustOrderHistoryService {

	CustomerOrderHistoryResponseDTO  addOrderHistory(CustomerOrderHistoryRequestDTO request);

	List<CustomerOrderHistory> getAllCustomerOrderHistory(Long custId);


}
