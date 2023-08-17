package com.app.dto;

import java.time.LocalDate;

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
public class UserPortfolioRequestDTO {

	private double sipAmmount;

	private double oneTimeAmmount;

	private LocalDate sipDate;

	private LocalDate oneTimeDate;
}
