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
public class MFProfileCompanyResponseDTO {

	private Long MFCompanyId;
	private String companyName;

	private String companyEmailId;

	private String companyContactNo;

	private String companyAddress;

	private String companySate;

	private String companyPinCode;
}
