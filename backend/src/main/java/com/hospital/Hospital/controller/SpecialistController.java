package com.hospital.Hospital.controller;

import com.hospital.Hospital.entity.Specialist;
import com.hospital.Hospital.service.SpecialistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/specialist")
public class SpecialistController {

    @Autowired
    private SpecialistService specialistService;

    @PostMapping("/addSpecialist")
    public Specialist addSpecialist(@RequestBody Specialist specialist){
        return specialistService.addSpecialist(specialist);
    }

}
