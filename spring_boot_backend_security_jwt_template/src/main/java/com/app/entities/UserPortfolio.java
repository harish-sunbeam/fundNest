package com.app.entities;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
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
@Table(name="user_portfolio")
public class UserPortfolio {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long custPortfolioId;
	
	@ManyToOne
	@JoinColumn(name="cust_id")
	private SignUpDetails signUpDetails;
	
	@ManyToMany
	private List<MFDetails> mfDetails=new ArrayList<>();
	
	@Column(name="sip_ammount",nullable = false)
	private double sipAmmount;
	
	@Column(name="one_time_ammount",nullable = false)
	private double oneTimeAmmount;
	
	@Column(name="sip_date",nullable = false)
	private Date sipDate;
	
	@Column(name="one_time_date",nullable = false)
	private Date oneTimeDate;
	
	
	
}
