import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PatientAppointmentsPage = () => {
    const [appointments, setAppointments] = useState([]);
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        // Get the logged-in patient ID
        const patient = JSON.parse(localStorage.getItem('loggedInPatient'));
        if (patient) {
            const patientId = patient.id;

            // Get all appointments and filter by patient ID
            const allAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
            const patientAppointments = allAppointments.filter(app => app.patientId === patientId);
            setAppointments(patientAppointments);

            // Retrieve doctors from localStorage to display doctor names
            const storedDoctors = JSON.parse(localStorage.getItem('doctors')) || [];
            setDoctors(storedDoctors);
        }
    }, []);

    const getDoctorNameById = (doctorId) => {
        const doctor = doctors.find(doc => doc.id === doctorId);
        return doctor ? doctor.name : 'Unknown Doctor';
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Your Appointments</h1>
            <table style={{ width: '80%', margin: '0 auto', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={styles.tableHeader}>Doctor Name</th>
                        <th style={styles.tableHeader}>Doctor ID</th>
                        <th style={styles.tableHeader}>Status</th>
                        <th style={styles.tableHeader}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.length > 0 ? (
                        appointments.map((appointment, index) => (
                            <tr key={index}>
                                <td style={styles.tableCell}>{getDoctorNameById(appointment.doctorId)}</td>
                                <td style={styles.tableCell}>{appointment.doctorId}</td>
                                <td style={styles.tableCell}>{appointment.status}</td>
                                <td style={styles.tableCell}>
                                    {appointment.status === 'Confirmed' ? (
                                        <Link to={`/reschedule-appointment/${appointment.doctorId}/${index}`}>
                                            <button style={styles.rescheduleButton}>Reschedule</button>
                                        </Link>
                                    ) : (
                                        'Pending'
                                    )}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" style={styles.noAppointments}>No appointments booked yet.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

const styles = {
    tableHeader: { padding: '10px', backgroundColor: '#007bff', color: '#fff' },
    tableCell: { padding: '10px', border: '1px solid #ddd', textAlign: 'center' },
    rescheduleButton: {
        padding: '5px 10px',
        backgroundColor: '#ffc107',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    noAppointments: {
        padding: '20px',
        fontSize: '16px',
        color: '#555',
    },
};

export default PatientAppointmentsPage;
