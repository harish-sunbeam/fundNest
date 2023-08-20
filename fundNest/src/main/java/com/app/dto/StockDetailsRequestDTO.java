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
public class StockDetailsRequestDTO {

	
	private String stockName;
	
	
	private double stockPrice;
	
	
	private String stockSector;
	
	
	private double stockDailyChange;
	

}
