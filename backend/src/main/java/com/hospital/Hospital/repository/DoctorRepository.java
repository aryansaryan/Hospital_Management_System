package com.hospital.Hospital.repository;

import java.util.Optional;

import com.hospital.Hospital.entity.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long> {
	Doctor findByEmail(String email);
	boolean existsByEmail(String email);
	Optional<Doctor> findOneByEmailAndPassword(String email, String password);

}
