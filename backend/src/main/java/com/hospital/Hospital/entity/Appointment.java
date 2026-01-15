package com.hospital.Hospital.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "Appointment")
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private int userId;
    private String fullName;
    private String gender;
    private String age;
    private String appointmentDate;
    private String email;
    private String phNo;
    private String diseases;
    private int doctorId;
    private String address;
    private String status;
    private String action;

}
