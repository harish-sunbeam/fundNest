package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.CustomerWalletTransaction;

public interface CustomerWalletTransactionDao extends JpaRepository<CustomerWalletTransaction, Long> {

}
