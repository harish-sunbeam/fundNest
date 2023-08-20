package com.app.dto;

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

public class MFDetailsResponseDTO {

	private String mfName;
	
	
	private double mfFundSize;
	
	
	private double mfNAV;
	
	
	private double mfTotalUnits;
	
	
	private double mfInvestmentInEachStock;
}
