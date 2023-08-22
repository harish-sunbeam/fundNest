package com.app.entities;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
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
@Table(name="change_in_nav")
public class ChangeInNav {


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long navChangeId;
	
	@ManyToOne
	@JoinColumn(name = "mf_id")
	private MFDetails mfDetails;

	
	@Column(name = "mf_Nav")
	private double mfNav;
	
	@Column(name="change_date")
	private LocalDateTime changeDate;
}
