package com.app.dto;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class GetMFHoldingDetailsResponseDTO {

	private Long stockId;
	
	private String stockName;
	
	private double stockPrice;
	
	private String stockSector;
	
	private double stockDailyChange;
	
}
