package com.app.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import com.app.entities.CustomerTransacHistory;
import com.app.entities.MFDetails;
import com.app.entities.OrderStatus;
import com.app.entities.SignUpDetails;
import com.app.entities.UserPortfolio;

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
public class CustomerOrderHistoryRequestDTO {

	private OrderStatus orderStatus;

	private LocalDateTime orderTime;
	
	private double orderAmmount;

}
