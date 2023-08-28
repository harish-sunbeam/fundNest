package com.app.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Column;

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
public class UserInvestmentDetailsResponseDTO {

	private String mfName;
	
	private double investmentAmmount;
	
	private double units;
	
	private double pAndl;
	
	private LocalDateTime investmentDate;

}
