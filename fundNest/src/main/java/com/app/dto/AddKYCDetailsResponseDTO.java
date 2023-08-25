package com.app.dto;

import java.time.LocalDate;

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
public class AddKYCDetailsResponseDTO {
	
	private String bankName;

	private long accNo;
	
	private String ifscCode;
	
	private double annualIncome;
}
