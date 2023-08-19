package com.app.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
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
@Table(name="cust_KYC_details")

public class CustomerKYCDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long custKYCId;
	
	@OneToOne()
	@JoinColumn(name="cust_id")
	private SignUpDetails signUpDetails;
	
	@Column(name="bank_name",length = 50,nullable = false)
	private String bankName;

	@Column(name="acc_no",nullable = false,unique = true)
	private long accNo;
	
	@Column(name="ifsc_code",length = 15,nullable = false)
	private String ifscCode;
	
	@Column(name="annual_income",nullable = false)
	private double annualIncome;
	
	
}
