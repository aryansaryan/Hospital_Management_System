package com.hospital.Hospital.serviceImpl;

import com.hospital.Hospital.dto.LoginDTO;
import com.hospital.Hospital.entity.Appointment;
import com.hospital.Hospital.entity.Doctor;
import com.hospital.Hospital.entity.User;
import com.hospital.Hospital.repository.UserRepository;
import com.hospital.Hospital.response.LoginResponse;
import com.hospital.Hospital.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;
    
    @Autowired
  	private PasswordEncoder passwordEncoder;

    @Override
    public User addUser(User user) {
    user.setPassword(passwordEncoder.encode(user.getPassword()));
    return userRepository.save(user);
}


    @Override
    public List<User> getUser() {
        return userRepository.findAll();
    }

    @Override
public String updateUser(User user, int id) {
    Optional<User> user1 = userRepository.findById(id);

    if (user1.isPresent()) {
        User user2 = user1.get();

        // DO NOT change ID
        user2.setFullName(user.getFullName());
        user2.setAge(user.getAge());
        user2.setEmail(user.getEmail());

        // encode password before saving
        user2.setPassword(passwordEncoder.encode(user.getPassword()));

        userRepository.save(user2);
        return "User details updated: " + user2;
    }

    return "No user found with id: " + id;
}


    @Override
    public void deleteUser(int id) {
        userRepository.deleteById(id);
    }

	@Override
    public LoginResponse loginPatient(LoginDTO loginDTO) {
    User user1 = userRepository.findByEmail(loginDTO.getEmail());

    if (user1 == null) {
        return new LoginResponse("Email does not match", false);
    }

    boolean isPwdRight = passwordEncoder.matches(
            loginDTO.getPassword(),
            user1.getPassword()
    );

    if (isPwdRight) {
        return new LoginResponse("Login Success", true);
    }
    return new LoginResponse("Password does not match", false);
	}
}
