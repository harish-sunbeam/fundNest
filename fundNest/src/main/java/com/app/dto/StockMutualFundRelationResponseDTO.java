package com.app.dto;

import com.app.entities.MFDetails;
import com.app.entities.StockDetails;

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
public class StockMutualFundRelationResponseDTO {
//    private MFDetails mfDetails;

    
//    private StockDetails stockDetails;
    
    
    private double mfInvestmentPerStock;
    
   
    private double noOfUnitsPerStock;
}