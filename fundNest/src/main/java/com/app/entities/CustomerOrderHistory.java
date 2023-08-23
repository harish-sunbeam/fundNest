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
	
	
	@ManyToOne(targetEntity = SignUpDetails.class,fetch= FetchType.EAGER)
	@JoinColumn(name="cust_id")
	private SignUpDetails signUpDetails;
	
	@ManyToOne(targetEntity = MFDetails.class)
	@JoinColumn(name="mf_id")
	private MFDetails mfDetails;
	
	@ManyToOne(targetEntity =UserInvestmentDetails.class)
	@JoinColumn(name = "user_investment_details")
	private UserInvestmentDetails userInvestmentDetails;
	
	@Column(name="order_status",length = 20)
	@Enumerated(EnumType.STRING)
	private OrderStatus orderStatus;
	
	@Column(name="order_time")
	private LocalDateTime orderTime;
	
	@Column(name="order_ammount")
	private double orderAmmount;
	

	
	
	
	
	
}
