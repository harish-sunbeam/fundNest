package com.app.entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

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
@Entity
@Table(name="stock_details")
public class StockDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long stockId;
	
	
	@Column(name="stock_name",length = 50,nullable = false,unique = true)
	private String stockName;
	
	@Column(name="stock_price",nullable = false)
	private double stockPrice;
	
	@Column(name="stock_sector",length = 25,nullable = false)
	private String stockSector;
	
	@Column(name="stock_daily_change")
	private double stockDailyChange;
	
	@Column(name="stock_change_Date")
	private LocalDate stockChangeDate;
}
