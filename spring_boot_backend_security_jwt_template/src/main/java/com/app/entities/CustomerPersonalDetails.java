package com.app.entities;

import java.util.Date;

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
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="cust_personal_details")
public class CustomerPersonalDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long custPersonalDetailsId;
	
	@OneToOne
	@JoinColumn(name = "cust_id")
	private SignUpDetails signUpDetails;

	@Column(name="cust_first_name",length=50,nullable = false)
	private String custFirstName;
	
	@Column(name="cust_last_name",length=50,nullable = false)
	private String custLastName;
	
	@Column(name="cust_pan_no",length=10,nullable = false,unique = true)
	private String custPanNo;
	
	@Column(name="cust_gender",length=7,nullable = false)
	private char custGender;
	
	@Column(name="cust_marital_status",length=10,nullable = false)
	private char custMaritalStatus;
	
	@Column(name="cust_occupation",length=30,nullable = false)
	private String custOccupation;
	
	@Column(name="cust_address",length=250,nullable = false)
	private String custAddress;
	
	@Column(name="cust_state",length=30,nullable = false)
	private String custState;
	
	@Column(name="cust_pin_code",length=6,nullable = false)
	private int custPinCode;
	
	@Column(name="cust_DOB",nullable = false)
	private Date custDOB;
	
	
}
