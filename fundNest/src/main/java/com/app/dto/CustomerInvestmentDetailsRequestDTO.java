package com.app.dto;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.app.entities.CustomerOrderHistory;
import com.app.entities.MFDetails;
import com.app.entities.SignUpDetails;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class CustomerInvestmentDetailsRequestDTO {
	
	
//	private SignUpDetails signUpDetails;
	
	
	private MFDetails mfDetails; 
	
	
	private double investmentAmmount;
	
	
	private double units;
	
	
	private double pAndl;
	
	
	private LocalDateTime investmentDate;

}
