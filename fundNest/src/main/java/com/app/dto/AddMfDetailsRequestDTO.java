package com.app.dto;

import javax.persistence.Id;

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
public class AddMfDetailsRequestDTO {

	private String mfName;
	
	private double mfFundSize;
	
	private double mfNAV;
	
	private double mfTotalUnits;
	
	private double mfInvestmentInEachStock;
	
}
