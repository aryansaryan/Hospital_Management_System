import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DoctorBookingsPage = () => {
    const { doctorId } = useParams(); // Get doctorId from the URL
    const [appointments, setAppointments] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Retrieve all appointments from local storage
        const allAppointments = JSON.parse(localStorage.getItem('appointments')) || [];

        // Filter appointments for the specific doctor
        const doctorAppointments = allAppointments.filter(appointment => appointment.doctorId === doctorId);

        setAppointments(doctorAppointments);
    }, [doctorId]);

    const handleLogout = () => {
        alert('You have successfully logged out');
        navigate('/');
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h1>Appointments for Doctor ID: {doctorId}</h1>
                <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
            </div>
            {/* Display the list of bookings */}
            {appointments.length === 0 ? (
                <p>No appointments found for this doctor.</p>
            ) : (
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th>Patient Name</th>
                            <th>Appointment Date</th>
                            <th>Appointment Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((appointment, index) => (
                            <tr key={index}>
                                <td>{appointment.patientName}</td>
                                <td>{appointment.appointmentDate}</td>
                                <td>{appointment.appointmentTime}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: '20px',
    },
    logoutButton: {
        padding: '10px 20px',
        backgroundColor: '#d9534f',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    table: {
        width: '80%',
        borderCollapse: 'collapse',
        marginTop: '20px',
        textAlign: 'center',
        border: '1px solid #ddd',
    },
    th: {
        padding: '12px',
        border: '1px solid #ddd',
        textAlign: 'left',
        backgroundColor: '#f2f2f2',
    },
    td: {
        padding: '12px',
        border: '1px solid #ddd',
        textAlign: 'left',
    },
};

export default DoctorBookingsPage;
