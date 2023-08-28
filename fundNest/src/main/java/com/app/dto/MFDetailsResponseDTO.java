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
	private Long mfId;
	private double mfFundSize;
	
	private double mfTotalUnits;
	
	private double mfTotalInvestment;
}
