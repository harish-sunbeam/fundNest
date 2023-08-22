package com.app.entities;

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
import javax.persistence.ManyToMany;

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
@Table(name="MF_details")
public class MFDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long mfId;
	
	@OneToOne
	@JoinColumn(name="MF_company_id")
	private MFCompanyDetails mfCompanyDetails;
	
	
	@OneToMany(mappedBy = "mfDetails",cascade = CascadeType.ALL)
	private List<ChangeInNav> changeInNav=new ArrayList<>();
	
	@ManyToMany(mappedBy = "mfDetails",cascade = CascadeType.ALL , fetch = FetchType.LAZY)
	private List<UserPortfolio> userPortfolio =new ArrayList<>();
	
	@OneToMany(mappedBy = "mfDetails",cascade = CascadeType.ALL,orphanRemoval = true  ,fetch = FetchType.LAZY)
	private List<CustomerOrderHistory> customerOrderHistory =new ArrayList<>();
	
	@Column(name="mf_name",length = 50,nullable = false,unique = true)
	private String mfName;
	
	@Column(name="mf_fund_size",nullable = false)
	private double mfFundSize;
	
	
	
	@Column(name="mf_total_units",nullable = false)
	private double mfTotalUnits;
	
	@Column(name="mf_total_investment",nullable = false)
	private double mfTotalInvestment;
	
}
