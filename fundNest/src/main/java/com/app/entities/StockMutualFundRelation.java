package com.app.entities;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
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
@Table(name="stock_mf_relation")
	public class StockMutualFundRelation {
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    
	    @ManyToOne
	    private MFDetails mfDetails;

	    @ManyToOne
	    private StockDetails stockDetails;
	    
	    @Column(name = "mf_investment_per_stock")
	    private double mfInvestmentPerStock;
	    
	    // Other fields, getters, setters
	}