package com.app.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

import com.app.entities.TransactionStatus;

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
public class CustTransacHistoryResponseDTO {

	private TransactionStatus transactionStatus;

	private double transactionAmmount;

	private LocalDateTime transactionTime;

	private double openingBalance;

	private double totalInvestedAmmount;
}
