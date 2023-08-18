package com.app.dto;

import java.time.LocalDate;
import java.time.LocalTime;

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
public class CustTransacHistoryRequestDTO {

	private String transactionStatus;

	private double transactionAmmount;

	private LocalDate transactionDate;

	private LocalTime transactionTime;

	private double openingBalance;

	private double totalInvestedAmmount;
}
