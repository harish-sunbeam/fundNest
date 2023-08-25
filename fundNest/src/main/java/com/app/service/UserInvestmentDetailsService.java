package com.app.service;

import com.app.dto.UserInvestmentDetailsRequestDTO;
import com.app.dto.UserInvestmentDetailsResponseDTO;

public interface UserInvestmentDetailsService {

	UserInvestmentDetailsResponseDTO buyMfAddInUserInvestment(UserInvestmentDetailsRequestDTO request,Long custId);

	UserInvestmentDetailsResponseDTO  sellMfRemoveFromUserInvestment(UserInvestmentDetailsRequestDTO request,Long custId);
}
