package com.hospital.Hospital.controller;

import com.hospital.Hospital.dto.LoginDTO;
import com.hospital.Hospital.entity.Appointment;
import com.hospital.Hospital.entity.User;
import com.hospital.Hospital.response.LoginResponse;
import com.hospital.Hospital.service.AppointmentService;
import com.hospital.Hospital.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService userService;
    
    @Autowired
    private AppointmentService appointmentService;

    @PostMapping("/addUser")
    public User addUSer(@RequestBody User user){
        return userService.addUser(user);
    }

    @GetMapping("/getUser")
    public List<User> getUser(){
        return userService.getUser();
    }

    @PutMapping("/updateUser/{id}")
    public String updateUser(@RequestBody User user, @PathVariable int id){
        return userService.updateUser(user, id);
    }

    @DeleteMapping("/deleteUser/{id}")
    public void deleteUser(@PathVariable int id){
        userService.deleteUser(id);
    }
    
    @PostMapping("/login")
    public ResponseEntity<?> loginDoctor(@RequestBody LoginDTO loginDTO){
    	LoginResponse loginResponse = userService.loginPatient(loginDTO);
    	return ResponseEntity.ok(loginResponse);
    }

    @GetMapping("appointment/{id}")
    public Optional<Appointment> listAppointments(@PathVariable int id){
    	return appointmentService.getAppointment(id);
    }
    
    @PostMapping("/bookAppointment")
    public Appointment addAppointment(@RequestBody Appointment appointment) {
    	return appointmentService.addAppointment(appointment);
    }
    
    @GetMapping("/findAppointment")
    public List<Appointment> findAppointments(){
    	return appointmentService.findAppointments();
    }
    
}
