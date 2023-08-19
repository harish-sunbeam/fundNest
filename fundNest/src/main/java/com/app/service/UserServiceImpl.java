package com.app.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.hibernate.Hibernate;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.UserDao;
import com.app.dto.EditPassDTO;
import com.app.dto.ForgetPassOtpDTO;
import com.app.dto.LogInRequestDTO;
import com.app.dto.LogInResponseDTO;
import com.app.dto.OTPVerificationDTO;
import com.app.dto.SignUpRequestDTO;
import com.app.dto.SignUpResponseDTO;
import com.app.entities.CustomerTransacHistory;
import com.app.entities.SignUpDetails;
import com.app.entities.UserType;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userDao;

	@Autowired
	private JavaMailSender javaMailSender;

	private Map<String, String> otpMap = new HashMap<>(); // Store OTPs temporarily

	@Autowired
	private ModelMapper mapper;

	SignUpRequestDTO userObj = new SignUpRequestDTO();

	public void sendOTPAndStoreUserData(SignUpRequestDTO userRegistrationDTO) {
		userObj = userRegistrationDTO;
		String otp = generateOTP();
		sendOTPEmail(userRegistrationDTO.getEmailId(), otp);
		otpMap.put(userRegistrationDTO.getEmailId(), otp);
	}

	public boolean verifyOTP(OTPVerificationDTO otpVerificationDTO) {
		String storedOTP = otpMap.get(userObj.getEmailId());
		otpMap=null;
		return storedOTP != null && storedOTP.equals(otpVerificationDTO.getOtp());
	}

	@Override
	public SignUpResponseDTO storeUserData(SignUpRequestDTO request, int flag) {

		SignUpDetails signUp = mapper.map(request, SignUpDetails.class);
		if (flag == 1)
			signUp.setUserType(UserType.MF_MANAGER);
		else if (flag == 0)
			signUp.setUserType(UserType.CUSTOMER);
		SignUpDetails persistentUser = userDao.save(signUp);

		return mapper.map(persistentUser, SignUpResponseDTO.class);
	}

	private String generateOTP() {
		int otpLength = 6;
		String numbers = "0123456789";
		StringBuilder otp = new StringBuilder();

		for (int i = 0; i < otpLength; i++) {
			int index = (int) (Math.random() * numbers.length());
			otp.append(numbers.charAt(index));
		}

		return otp.toString();
	}

	private void sendOTPEmail(String email, String otp) {
		MimeMessage message = javaMailSender.createMimeMessage();

		try {
			MimeMessageHelper helper = new MimeMessageHelper(message, true);
			helper.setTo(email);
			helper.setSubject("OTP Verification");
			helper.setText("Your OTP for registration is: " + otp);
			javaMailSender.send(message);
		} catch (MessagingException e) {
			// Handle exception
		}
	}
	
	@Override
	public LogInResponseDTO logInUser(LogInRequestDTO request) {
		SignUpDetails user=userDao.findByEmailIdAndPassword(request.getEmail(), request.getPassword())
				.orElseThrow(()-> new ResourceNotFoundException("Invalid Email or Password"));
		return mapper.map(user, LogInResponseDTO.class);
	}
	
	@Override
	public SignUpDetails getCustFromId(Long id) {
		SignUpDetails cust=userDao.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Invalid Id from userServiceImpl"));
		return cust;
	}
	

	//latest form Harish
	SignUpDetails cust =new SignUpDetails();
	@Override
	public void getOtpForForgotPass(String emailId) {
		 cust=userDao.findByEmailId(emailId);
		 userObj.setEmailId(emailId);
		if(cust.getEmailId()!=null)
		{
			String otp = generateOTP();
			sendOTPEmail(emailId, otp);
			otpMap.put(emailId, otp);
		}
		else if(cust.getEmailId()==null)
			throw new ResourceNotFoundException("User Does not exist from userServiceImpl Class");	
		
	}
	
	@Override
	public SignUpResponseDTO storeUserDataWithNewPass(EditPassDTO newPass) {
		
		cust.setPassword(newPass.getPassword());
		SignUpDetails persistentUser = userDao.save(cust);

		return mapper.map(persistentUser, SignUpResponseDTO.class);
				
	}

	@Override
	public List<CustomerTransacHistory> getTransacHistoryByCustId(Long custId) {
		// TODO Auto-generated method stub
		Optional<SignUpDetails> signUpDetails = userDao.findByCustId(custId);
		if(signUpDetails.isPresent()) {
			SignUpDetails obj = signUpDetails.get();
			Hibernate.initialize(obj.getCustomerTransacHistory());
			return obj.getCustomerTransacHistory();
		}
		return null;
	}
	

}
