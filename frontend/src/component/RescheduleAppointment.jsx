import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RescheduleAppointment({ match }) {
  const { id } = match.params;  // Extract appointment ID from URL
  const [appointment, setAppointment] = useState({});
  const [newDate, setNewDate] = useState('');
  const [newTime, setNewTime] = useState('');

  useEffect(() => {
    // Fetch the appointment details by ID when the page loads
    const fetchAppointment = async () => {
      try {
        const response = await axios.get(`/api/appointments/${id}`);
        setAppointment(response.data);
      } catch (error) {
        console.error("Error fetching appointment details:", error);
      }
    };

    fetchAppointment();
  }, [id]);

  const handleReschedule = async (e) => {
    e.preventDefault();
    const updatedAppointment = {
      ...appointment,
      appointmentDate: newDate,
      appointmentTime: newTime,
      status: 'Pending',  // Change status to Pending for approval
    };

    try {
      await axios.patch(`/api/appointments/${id}`, updatedAppointment);
      alert('Appointment rescheduled successfully!');
      window.location.href = '/appointments'; // Redirect to appointments page after reschedule
    } catch (error) {
      console.error("Error rescheduling appointment:", error);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Reschedule Appointment</h2>
      <form onSubmit={handleReschedule} style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Patient Name:</label>
          <input
            type="text"
            value={appointment.fullName}
            disabled
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Current Appointment Date:</label>
          <input
            type="text"
            value={appointment.appointmentDate}
            disabled
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>New Appointment Date:</label>
          <input
            type="date"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>New Appointment Time:</label>
          <input
            type="time"
            value={newTime}
            onChange={(e) => setNewTime(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <button type="submit" style={styles.submitBtn}>Reschedule Appointment</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '1rem',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '1rem',
  },
  label: {
    fontSize: '14px',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  input: {
    padding: '8px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  submitBtn: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '1rem',
  },
};

export default RescheduleAppointment;
