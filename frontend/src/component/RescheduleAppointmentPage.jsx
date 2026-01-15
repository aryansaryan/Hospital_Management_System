import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const RescheduleAppointmentPage = () => {
    const { doctorId, appointmentIndex } = useParams();
    const [newDate, setNewDate] = useState('');
    const [newTime, setNewTime] = useState('');
    const navigate = useNavigate();

    const handleReschedule = (e) => {
        e.preventDefault();

        // Get stored appointments
        const appointments = JSON.parse(localStorage.getItem('appointments')) || [];

        // Update the specific appointment with new date and time
        appointments[appointmentIndex].appointmentDate = newDate;
        appointments[appointmentIndex].appointmentTime = newTime;
        appointments[appointmentIndex].status = 'Rescheduled';

        // Save updated appointments to local storage
        localStorage.setItem('appointments', JSON.stringify(appointments));

        alert('Appointment rescheduled successfully.');

        // Redirect to doctor’s bookings page
        navigate(`/doctor-bookings/${doctorId}`);
    };

    return (
        <div style={styles.container}>
            <h1>Reschedule Appointment</h1>
            <form onSubmit={handleReschedule} style={styles.form}>
                <div style={styles.formGroup}>
                    <label style={styles.label}>New Appointment Date</label>
                    <input
                        type="date"
                        value={newDate}
                        onChange={(e) => setNewDate(e.target.value)}
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>New Appointment Time</label>
                    <input
                        type="time"
                        value={newTime}
                        onChange={(e) => setNewTime(e.target.value)}
                        required
                        style={styles.input}
                    />
                </div>
                <button type="submit" style={styles.button}>Reschedule Appointment</button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        gap: '15px',
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'column',
    },
    label: {
        fontWeight: 'bold',
        marginBottom: '5px',
    },
    input: {
        padding: '8px',
        fontSize: '16px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    button: {
        padding: '10px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
    },
};

export default RescheduleAppointmentPage;
