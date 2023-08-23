package com.app.dto;

import java.util.List;

import com.app.entities.CustomerKYCDetails;
import com.app.entities.CustomerNomineeDetails;
import com.app.entities.CustomerPersonalDetails;
import com.app.entities.CustomerOrderHistory;
import com.app.entities.MFCompanyDetails;
import com.app.entities.UserInvestmentDetails;
import com.app.entities.UserType;

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
public class SignUpResponseDTO {

	private String emailId;
	private String password;
	private String mobileNo;
	private UserType userType;
}
