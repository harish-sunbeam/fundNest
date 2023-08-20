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
public class StockDetailsResponseDTO {

	private Long stockId;
	
	private String stockName;

	private double stockPrice;

	private String stockSector;

	private LocalDate stockChangeDate;
}
