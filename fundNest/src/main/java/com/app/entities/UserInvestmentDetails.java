package com.app.entities;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="user_investment_details")
public class UserInvestmentDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long userInvestmentId;
	
	@ManyToOne
	@JoinColumn(name="cust_id")
	private SignUpDetails signUpDetails;
	
	
	@ManyToOne
	@JoinColumn(name = "mf_id")
	private MFDetails mfDetails; 
	
	@OneToMany(mappedBy = "userInvestmentDetails",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<CustomerOrderHistory> custWalletTransaction;	
	
	@Column(name="investment_ammount")
	private double investmentAmmount;
	
	@Column
	private double units;
	
	@Column(name="p_and_l")
	private double pAndl;
	
	
	@Column(name="investment_date")
	private LocalDateTime investmentDate;
	
	
	
	
	
}
