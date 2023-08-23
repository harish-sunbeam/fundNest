package com.app.dto;

import java.time.LocalDate;

import javax.persistence.Column;

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
public class CustomerUpdateProfileResponseDTO {

	private String custFirstName;

	private String custLastName;

	private String custMaritalStatus;

	private String custOccupation;

	private String custAddress;

	private String custState;

	private String custPinCode;

	

}
