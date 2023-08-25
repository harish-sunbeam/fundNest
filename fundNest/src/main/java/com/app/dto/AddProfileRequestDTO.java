package com.app.dto;

import java.time.LocalDate;
import java.util.Date;

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
public class AddProfileRequestDTO {

	

	private String custFirstName;

	private String custLastName;

	private String custPanNo;

	private String custGender;

	private String custMaritalStatus;

	private String custOccupation;

	private String custAddress;

	private String custState;

	private String custPinCode;

	private LocalDate custDOB;
}
