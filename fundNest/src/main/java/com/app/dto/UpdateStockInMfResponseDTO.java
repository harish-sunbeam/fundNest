package com.app.dto;

import java.util.List;

import com.app.entities.StockDetails;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class UpdateStockInMfResponseDTO {

	private List<StockDetails> stockDetails;
}
