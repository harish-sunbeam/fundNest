package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.UserPortfolio;

public interface UserPortfolioDao extends JpaRepository<UserPortfolio, Long> {

}
