package com.app.dto;

import com.app.entities.MFCompanyDetails;

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

public class MFDetailsRequestDTO {

	private String mfName;
	
	private double mfFundSize;

	
}
