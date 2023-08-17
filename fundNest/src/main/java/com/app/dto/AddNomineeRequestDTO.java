package com.app.dto;

import java.time.LocalDate;

import com.app.entities.SignUpDetails;

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
public class AddNomineeRequestDTO {

	private String nomFirstName;

	private String nomLastName;

	private String nomRelation;

	private String nomEmailId;

	private String nomMobileNo;

	private String nomAddress;

	private String nomState;

	private int nomPinCode;

	private LocalDate nomDOB;
}
