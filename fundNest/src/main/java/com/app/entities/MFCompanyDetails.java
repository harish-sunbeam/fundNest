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
@Table(name="MF_company_details")
public class MFCompanyDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long MFCompanyId;
	
	@OneToOne(mappedBy = "mfCompanyDetails",cascade = CascadeType.ALL,orphanRemoval = true)
	private MFDetails mfDetails;
	
	@OneToOne
	@JoinColumn(name = "cust_id")
	private SignUpDetails signUpDetails;
	
	@Column(name="company_name",length = 50,nullable = false,unique = true)
	private String companyName;
	
	@Column(name="company_email_id",length = 50,nullable = false,unique = true)
	private String companyEmailId;
	
	@Column(name="company_contact_no",length = 12,nullable = false,unique = true)
	private String companyContactNo;
	
	@Column(name="company_address",length = 250,nullable = false)
	private String companyAddress;
	
	@Column(name="company_state",length = 30,nullable = false)
	private String companySate;
	
	@Column(name="company_pin_code",length = 6,nullable = false)
	private String companyPinCode;
	
}
