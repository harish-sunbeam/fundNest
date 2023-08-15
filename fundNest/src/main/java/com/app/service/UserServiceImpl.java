package com.app.service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.UserDao;
import com.app.dto.LogInRequestDTO;
import com.app.dto.LogInResponseDTO;
import com.app.dto.OTPVerificationDTO;
import com.app.dto.SignUpRequestDTO;
import com.app.dto.SignUpResponseDTO;
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
}
