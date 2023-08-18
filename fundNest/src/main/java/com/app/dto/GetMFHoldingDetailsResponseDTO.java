package com.app.dto;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
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
public class GetMFHoldingDetailsResponseDTO {

	private Long stockId;
	
	private String stockName;
	
	private double stockPrice;
	
	private String stockSector;
	
	private double stockDailyChange;
	
}