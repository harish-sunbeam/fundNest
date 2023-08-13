package com.app.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
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
	private long MFId;
	
	@OneToOne
	@JoinColumn(name="MF_company_id")
	private MFCompanyDetails mfCompanyDetails;
	
	@ManyToMany(mappedBy = "mfDetails",cascade = CascadeType.ALL)
	private List<StockDetails> stockDetails =new ArrayList<>();
	
	@ManyToMany(mappedBy = "mfDetails",cascade = CascadeType.ALL)
	private List<UserPortfolio> userPortfolio =new ArrayList<>();
	
	@Column(name="mf_name",length = 50,nullable = false,unique = true)
	private String mfName;
	
	@Column(name="mf_fund_size",nullable = false)
	private double mfFundSize;
	
	@Column(name="mf_NAV",nullable = false)
	private double mfNAV;
	
	@Column(name="mf_total_units",nullable = false)
	private double mfTotalUnits;
	
	@Column(name="mf_investment_in_each_stock",nullable = false)
	private double mfInvestmentInEachStock;
	
}
