package com.hospital.Hospital.service;

import com.hospital.Hospital.dto.DoctorDTO;
import com.hospital.Hospital.dto.LoginDTO;
import com.hospital.Hospital.entity.Doctor;
import com.hospital.Hospital.response.LoginResponse;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface DoctorService {
    Doctor addDoctor(Doctor doctor);
    List<Doctor> getDoctor();
    String updateDoctor(Doctor doctor, Long id);
    void deleteDoctor(Long id);
    LoginResponse loginDoctor(LoginDTO loginDTO);
}

