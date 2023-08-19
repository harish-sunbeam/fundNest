package com.app.service;

import com.app.dto.CustomerOrderHistoryRequestDTO;
import com.app.dto.CustomerOrderHistoryResponseDTO;

public interface CustOrderHistoryService {

	CustomerOrderHistoryResponseDTO  addOrderHistory(CustomerOrderHistoryRequestDTO request);
}
