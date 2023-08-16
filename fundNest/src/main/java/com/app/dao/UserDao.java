package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.SignUpDetails;

public interface UserDao extends JpaRepository<SignUpDetails,Long > {

	Optional<SignUpDetails> findByEmailIdAndPassword(String email,String password);
	
}
