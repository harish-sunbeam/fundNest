package com.app.entities;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
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
@Table(name="cust_transaction_history")
public class CustomerTransacHistory {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long custTransacHistoryId;
	
	@ManyToOne(targetEntity = SignUpDetails.class,fetch= FetchType.EAGER)
	@JoinColumn(name="cust_id")
	private SignUpDetails signUpDetails;
	
	 @OneToMany(mappedBy = "custTransacHistory", cascade = CascadeType.ALL, orphanRemoval = true)
	    private List<CustomerOrderHistory> orderHistoryList = new ArrayList<>();
	
	
	@Column(name="transaction_status",length = 12,nullable = false)
	private String transactionStatus;
	
	@Column(name="transaction_ammount",nullable = false)
	private double transactionAmmount;
	
	@Column(name="transaction_time",nullable =false)
	private LocalDateTime transactionTime;
	
	@Column(name="opening_balance",nullable = false)
	private double openingBalance;
	
	@Column(name="total_invested_ammount",nullable = false)
	private double totalInvestedAmmount;
}
