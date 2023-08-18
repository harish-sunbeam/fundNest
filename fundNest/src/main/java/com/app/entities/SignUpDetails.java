package com.app.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name="signup_details")
public class SignUpDetails  {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long custId;
	
	@OneToOne(mappedBy ="signUpDetails",cascade =CascadeType.ALL,orphanRemoval = true )
	private CustomerKYCDetails custKYCDetails;
	
	@OneToOne(mappedBy = "signUpDetails",cascade = CascadeType.ALL,orphanRemoval = true,fetch = FetchType.EAGER)
	private CustomerPersonalDetails custPersonalDetails;
	
	@OneToOne(mappedBy = "signUpDetails",cascade = CascadeType.ALL,orphanRemoval = true)
	private MFCompanyDetails mfCompanyDetails;
	
	@OneToMany(mappedBy = "signUpDetails",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<CustomerOrderHistory> customerOrderHistory =new ArrayList<>();
	
	@OneToMany(mappedBy = "signUpDetails",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<CustomerTransacHistory> customerTransacHistory =new ArrayList<>();
	
	@OneToMany(mappedBy = "signUpDetails",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<UserPortfolio> userPortfolio =new ArrayList<>();
	
	
	@OneToOne(mappedBy ="signUpDetails",cascade =CascadeType.ALL,orphanRemoval = true )
	private CustomerNomineeDetails custNomineeDetails;
	
	@Column(name="cust_email_id",length = 50,nullable = false,unique = true)
	private String emailId;
	
	@Column(name="cust_password",length = 10,nullable = false)
	private String password;
	
	@Column(name="cust_mobile_no",length = 10,nullable = false,unique = true)
	private String mobileNo;
	
	@Column(name="user_type",length = 20)
	@Enumerated(EnumType.STRING)
	private UserType userType;
	
}
