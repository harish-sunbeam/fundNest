package com.app.service;

import java.util.List;

import com.app.dto.CustTransacHistoryRequestDTO;
import com.app.dto.CustTransacHistoryResponseDTO;
import com.app.entities.CustomerTransacHistory;

public interface CustTransacHistoryService {

	
	CustTransacHistoryResponseDTO deposit(CustTransacHistoryRequestDTO request,Long custId);
	 
	 List<CustTransacHistoryResponseDTO> getCustTHByCustId(Long custId);
	 
	 CustTransacHistoryResponseDTO withdraw(CustTransacHistoryRequestDTO  request,Long custId);
}
