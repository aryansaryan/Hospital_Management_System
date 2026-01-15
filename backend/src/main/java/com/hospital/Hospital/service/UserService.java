package com.hospital.Hospital.service;

import com.hospital.Hospital.dto.LoginDTO;
import com.hospital.Hospital.entity.Appointment;
import com.hospital.Hospital.entity.User;
import com.hospital.Hospital.response.LoginResponse;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {

    User addUser(User user);
    List<User> getUser();
    String updateUser(User user, int id);
    void deleteUser(int id);
    LoginResponse loginPatient(LoginDTO loginDTO);
   
    
}
