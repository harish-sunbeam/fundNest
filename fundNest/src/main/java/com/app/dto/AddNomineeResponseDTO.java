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
public class AddNomineeResponseDTO {

	private String nomFirstName;

	private String nomLastName;
}
