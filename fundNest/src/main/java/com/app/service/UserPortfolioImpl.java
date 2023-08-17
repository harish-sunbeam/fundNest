package com.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.UserPortfolioDao;
import com.app.dto.UserPortfolioRequestDTO;
import com.app.dto.UserPortfolioResponseDTO;
import com.app.entities.UserPortfolio;

@Service
@Transactional
public class UserPortfolioImpl implements UserPortfolioService {

	@Autowired
	private UserPortfolioDao userPortfolioDao;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public UserPortfolioResponseDTO addInPortfolio(UserPortfolioRequestDTO request) {
		
		UserPortfolio userPortfolio =userPortfolioDao.save(mapper.map(request, UserPortfolio.class));
		
		
		return mapper.map(userPortfolio, UserPortfolioResponseDTO.class) ;
	}
}
