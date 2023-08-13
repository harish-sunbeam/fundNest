package com.app.entities;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name="cust_wallet_transaction")
//order No remaining
public class CustomerWalletTransaction{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long custWalletTransactId;
	
	@ManyToOne
	@JoinColumn(name="cust_id")
	private SignUpDetails signUpDetails;
	
	@Column(name="order_status",length = 5,nullable = false)
	private char orderStatus;
	
	@Column(name="transaction_status",length = 12,nullable = false)
	private char transactionStatus;
	
	@Column(name="order_date",nullable = false)
	private Date orderDate;
	
	@Column(name="order_time",nullable = false)
	private Date orderTime;
	
	@Column(name="order_ammount",nullable = false)
	private double orderAmmount;
	
	@Column(name="transaction_ammount",nullable = false)
	private double transactionAmmount;
	
	@Column(name="opening_balance",nullable = false)
	private double openingBalance;
	
	@Column(name="total_invested_ammount",nullable = false)
	private double totalInvestedAmmount;
	
	
	
}
