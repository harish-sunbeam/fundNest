package com.app.dto;

import com.app.entities.UserType;

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
public class AddProfileResponseDTO {

	private String custLastName;

	private String custPanNo;
}
