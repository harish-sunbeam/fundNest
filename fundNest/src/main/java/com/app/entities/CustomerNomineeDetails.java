package com.app.entities;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

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
@Table(name="cust_nominee_details")
public class CustomerNomineeDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long custNomId;
	
	@OneToOne()
	@JoinColumn(name="cust_id")
	private SignUpDetails signUpDetails;
	
	@Column(name="nom_first_name",length = 50,nullable = false)
	private String nomFirstName;
	
	@Column(name="nom_last_name",length = 50,nullable = false)
	private String nomLastName;
	
	@Column(name="nom_relation",length =25,nullable = false)
	private String nomRelation;

	@Column(name="nom_email_id",length = 50,nullable = false)
	private String nomEmailId;
	
	@Column(name="nom_mobile_no",length = 12,nullable = false)
	private String nomMobileNo;
	
	@Column(name="nom_address",length =250,nullable = false)
	private String nomAddress;
	
	@Column(name="nom_state",length = 30,nullable = false)
	private String nomState;
	
	@Column(name="nom_pin_code",length = 6,nullable = false)
	private String nomPinCode;
	
	@Column(name="nom_DOB",nullable = false)
	private LocalDate nomDOB;
	
}
