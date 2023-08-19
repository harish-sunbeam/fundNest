package com.app.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

import com.app.entities.MFDetails;
import com.app.entities.OrderStatus;

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
public class CustomerOrderHistoryResponseDTO {
	
	private OrderStatus orderStatus;

	private LocalDateTime orderTime;

	private double orderAmmount;
	
	private MFDetails mfDetails;
}
