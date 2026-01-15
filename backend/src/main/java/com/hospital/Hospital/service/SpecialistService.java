package com.hospital.Hospital.service;

import com.hospital.Hospital.entity.Specialist;
import org.springframework.stereotype.Service;

@Service
public interface SpecialistService {

    Specialist addSpecialist(Specialist specialist);

}
