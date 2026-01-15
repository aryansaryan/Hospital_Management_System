package com.hospital.Hospital.serviceImpl;

import com.hospital.Hospital.dto.DoctorDTO;
import com.hospital.Hospital.dto.LoginDTO;
import com.hospital.Hospital.entity.Doctor;
import com.hospital.Hospital.repository.DoctorRepository;
import com.hospital.Hospital.response.LoginResponse;
import com.hospital.Hospital.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class DoctorServiceImpl implements DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;
    
    @Autowired
  	private PasswordEncoder passwordEncoder;

   @Override
    public Doctor addDoctor(Doctor doctor) {
    doctor.setId(null); 
    doctor.setPassword(passwordEncoder.encode(doctor.getPassword()));
    return doctorRepository.save(doctor);
}


    @Override
    public List<Doctor> getDoctor() {
        return doctorRepository.findAll();
    }

    @Override
    public String updateDoctor(Doctor doctor, Long id) {
    Optional<Doctor> doctor1 = doctorRepository.findById(id);

    if (doctor1.isPresent()) {
        Doctor doctor2 = doctor1.get();

        doctor2.setFullName(doctor.getFullName());
        doctor2.setDob(doctor.getDob());
        doctor2.setQualification(doctor.getQualification());
        doctor2.setSpecialist(doctor.getSpecialist());
        doctor2.setEmail(doctor.getEmail());
        doctor2.setMobNo(doctor.getMobNo());
        doctor2.setPassword(passwordEncoder.encode(doctor.getPassword()));

        doctorRepository.save(doctor2);
        return "Updated the Doctor details: " + doctor2;
    }
    return "No doctor found with id: " + id;
    }

    @Override
    public void deleteDoctor(Long id) {
    doctorRepository.deleteById(id);
    }


    
    
  
@Override
public LoginResponse loginDoctor(LoginDTO loginDTO) {
    Doctor doctor1 = doctorRepository.findByEmail(loginDTO.getEmail());
    if (doctor1 == null) {
        return new LoginResponse("Email does not match", false);
    }

    boolean isPwdRight = passwordEncoder.matches(
            loginDTO.getPassword(),
            doctor1.getPassword()
    );

    if (isPwdRight) {
        return new LoginResponse("Login Success", true);
    }
    return new LoginResponse("Password does not match", false);
} 
	
}
