package com.app.entities;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
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
@Table(name="cust_order_history")
//order No remaining
public class CustomerOrderHistory{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long custOrderNo;
	
	@ManyToOne
	@JoinColumn(name = "cust_transac_history_id")
	private CustomerTransacHistory custTransacHistory;
	
	@ManyToOne(targetEntity = SignUpDetails.class,fetch= FetchType.EAGER)
	@JoinColumn(name="cust_id")
	private SignUpDetails signUpDetails;
	
	@ManyToOne(targetEntity = MFDetails.class,fetch= FetchType.EAGER)
	@JoinColumn(name="mf_id")
	private MFDetails mfDetails;
	
	@OneToOne(targetEntity =UserPortfolio.class,fetch= FetchType.LAZY)
	@JoinColumn(name = "cust_portfolio_id")
	private UserPortfolio userPortfolio;
	
	@Column(name="order_status",length = 20,nullable = false)
	@Enumerated(EnumType.STRING)
	private OrderStatus orderStatus;
	
	@Column(name="order_time",nullable =false)
	private LocalDateTime orderTime;
	
	@Column(name="order_ammount",nullable = false)
	private double orderAmmount;
	

	
	
	
	
	
}
