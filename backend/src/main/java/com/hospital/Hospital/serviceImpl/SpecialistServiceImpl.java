package com.hospital.Hospital.serviceImpl;

import com.hospital.Hospital.entity.Specialist;
import com.hospital.Hospital.repository.SpecialistRepository;
import com.hospital.Hospital.service.SpecialistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SpecialistServiceImpl implements SpecialistService {

    @Autowired
    private SpecialistRepository specialistRepository;

    @Override
    public Specialist addSpecialist(Specialist specialist) {
        return specialistRepository.save(specialist);
    }
}
