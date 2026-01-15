package com.hospital.Hospital.serviceImpl;

import java.util.List;
import java.util.Optional;

import com.hospital.Hospital.entity.Appointment;
import com.hospital.Hospital.repository.AppointmentRepository;
import com.hospital.Hospital.service.AppointmentService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AppointmentServiceImpl implements AppointmentService{
	
	@Autowired
	private AppointmentRepository appointmentRepository;

	@Override
	public Optional<Appointment> getAppointment(int id) {
		return appointmentRepository.findById(id);
	}

	@Override
	public Appointment addAppointment(Appointment appointment) {
		return appointmentRepository.save(appointment);
	}

	@Override
	public List<Appointment> findAppointments() {
		return appointmentRepository.findAll();
	}

	@Override
	public void updateAppointmentStatus(int id, String status) {
		appointmentRepository.updateAppointmentStatus(id, status);
	}

	
}
