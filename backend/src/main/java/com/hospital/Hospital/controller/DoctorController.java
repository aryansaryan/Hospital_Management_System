package com.hospital.Hospital.controller;

import com.hospital.Hospital.dto.LoginDTO;
import com.hospital.Hospital.entity.Appointment;
import com.hospital.Hospital.entity.Doctor;
import com.hospital.Hospital.response.LoginResponse;
import com.hospital.Hospital.service.AppointmentService;
import com.hospital.Hospital.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/doctor")
@CrossOrigin("*")
public class DoctorController {

    @Autowired
    private DoctorService doctorService;
    
    
    @Autowired
    private AppointmentService appointmentService;
    

    @PostMapping("/addDoctor")
    public Doctor addDoctor(@RequestBody Doctor doctor){
        return doctorService.addDoctor(doctor);
    }

    @GetMapping("/findDoctor")
    public List<Doctor> getDoctor(){
        return doctorService.getDoctor();
    }

    @PutMapping("/updateDoctor/{id}")
    public String updateDoctor(@RequestBody Doctor doctor, @PathVariable Long id){
    return doctorService.updateDoctor(doctor, id);
    }

    @DeleteMapping("/deleteDoctor/{id}")
    public void deleteDoctor(@PathVariable Long id){
    doctorService.deleteDoctor(id);
    }

    
    @PostMapping("/login")
    public ResponseEntity<?> loginDoctor(@RequestBody LoginDTO loginDTO){
    	LoginResponse loginResponse = doctorService.loginDoctor(loginDTO);
    	return ResponseEntity.ok(loginResponse);
    }
    
    @GetMapping("/viewAppointment/{doctorId}")
    public Optional<Appointment> getAppointment(@PathVariable int doctorId){
    	return appointmentService.getAppointment(doctorId);
    }
    
    
    @PutMapping("/appointment/{id}")
    public String updateAppointmentStatus(@PathVariable int id, @RequestParam String status) {
        appointmentService.updateAppointmentStatus(id, status);
        return "Appointment status updated to " + status;
    }

}
