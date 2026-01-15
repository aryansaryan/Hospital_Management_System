package com.hospital.Hospital.service;

import java.util.List;
import java.util.Optional;

import com.hospital.Hospital.entity.Appointment;

import org.springframework.stereotype.Service;

@Service
public interface AppointmentService {
	 Optional<Appointment> getAppointment(int id);
	 List<Appointment> findAppointments();
	 Appointment addAppointment(Appointment appointment); 
	 void updateAppointmentStatus(int id, String status);
}
