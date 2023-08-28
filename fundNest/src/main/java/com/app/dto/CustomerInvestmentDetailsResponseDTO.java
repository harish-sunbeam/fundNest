package com.app.dto;

import java.time.LocalDateTime;

import com.app.entities.MFDetails;

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
public class CustomerInvestmentDetailsResponseDTO {
	
private MFDetails mfDetails; 
	
	
	private double investmentAmmount;
	
	
	private double units;
	
	
	private double pAndl;
	
	
	private LocalDateTime investmentDate;
}
