package com.app.service;

import java.util.List;

import com.app.dto.CustTransacHistoryRequestDTO;
import com.app.dto.CustTransacHistoryResponseDTO;
import com.app.entities.CustomerTransacHistory;

public interface CustTransacHistoryService {

	CustTransacHistoryResponseDTO addTransacHistory(CustTransacHistoryRequestDTO request);
	
	 List<CustomerTransacHistory> getCustTransacHistoryByCustId(Long CustId);
}
