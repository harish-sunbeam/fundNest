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
public class CustomerWalletTransactionRequestDTO {

	private String orderStatus;

	private String transactionStatus;

	private LocalDate orderDate;

	private LocalDate orderTime;

	private double orderAmmount;

	private double transactionAmmount;

	private double openingBalance;

	private double totalInvestedAmmount;
}
