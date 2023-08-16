package com.app.dto;

import javax.persistence.Id;

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
public class AddStockDetailsRequestDTO {

	
	private String stockName;
	
	private double stockPrice;
	
	private String stockSector;
	
	private double stockDailyChange;
}
