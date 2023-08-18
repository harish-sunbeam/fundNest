package com.app.dto;

import java.time.LocalDate;
import java.time.LocalTime;

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

	private LocalDate orderDate;

	private LocalTime orderTime;

	private double orderAmmount;
}
