package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.UserInvestmentDetails;
import com.app.entities.MFDetails;
import com.app.entities.SignUpDetails;
import java.util.List;

public interface UserInvestmentDetailsDao extends JpaRepository<UserInvestmentDetails, Long> {

	UserInvestmentDetails  findByMfDetailsAndSignUpDetails(MFDetails mfDetails,SignUpDetails signUpDetails);
	
	List<UserInvestmentDetails>	findAllByMfDetailsMfId(Long mfId);

}
