package com.app.service;

import com.app.dto.UserPortfolioRequestDTO;
import com.app.dto.UserPortfolioResponseDTO;

public interface UserPortfolioService {

	UserPortfolioResponseDTO  addInPortfolio(UserPortfolioRequestDTO request);
}
