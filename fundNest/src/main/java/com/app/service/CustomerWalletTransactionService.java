package com.app.service;

import com.app.dto.CustomerWalletTransactionRequestDTO;
import com.app.dto.CustomerWalletTransactionResponseDTO;

public interface CustomerWalletTransactionService {

	CustomerWalletTransactionResponseDTO addTransation(CustomerWalletTransactionRequestDTO request);
}
