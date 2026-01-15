package com.hospital.Hospital.repository;

import java.util.List;

import com.hospital.Hospital.entity.Appointment;
import com.hospital.Hospital.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	User findByEmail(String email);
}
