import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const AppointmentsPage = () => {
    const { doctorId } = useParams();
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        // Fetch all appointments
        const fetchAppointments = async () => {
            try {
              const response = await axios.get(`http://localhost:1234/user/findAppointment`);
              setAppointments(response.data);
            } catch (error) {
                console.error("Error fetching appointments:", error);
            }
        };

        fetchAppointments();
    }, [doctorId]);

    // Handle status change (Accept or Reject)
    const handleStatusChange = (index, status) => {
      const updatedAppointments = [...appointments];
      updatedAppointments[index].status = status;
      setAppointments(updatedAppointments);

      // Save updated status back to local storage
      const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
      const updatedStoredAppointments = storedAppointments.map(app =>
          app.doctorId === doctorId && app.patientName === updatedAppointments[index].patientName
              ? { ...app, status }
              : app
      );
      localStorage.setItem('appointments', JSON.stringify(updatedStoredAppointments));
  };


    return (
        <div style={styles.container}>
            <h1 style={styles.header}>All Appointments</h1>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.tableHeader}>Doctor Name</th>
                        <th style={styles.tableHeader}>Patient Name</th>
                        <th style={styles.tableHeader}>Appointment Date</th>
                        <th style={styles.tableHeader}>Appointment Time</th>
                        <th style={styles.tableHeader}>Status</th>
                        <th style={styles.tableHeader}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appointment, index) => (
                        <tr key={appointment.id}>
                            <td style={styles.tableCell}>{appointment.doctorName}</td>
                            <td style={styles.tableCell}>{appointment.patientName}</td>
                            <td style={styles.tableCell}>{appointment.appointmentDate}</td>
                            <td style={styles.tableCell}>{appointment.appointmentTime}</td>
                            <td style={styles.tableCell}>{appointment.status}</td>
                            <td style={styles.tableCell}>
                                {appointment.status === 'Pending' ? (
                                    <>
                                        <button 
                                            style={styles.confirmButton}
                                            onClick={() => handleStatusChange(appointment.id, 'Confirmed')}
                                        >
                                            Accept
                                        </button>
                                        <button 
                                            style={styles.rejectButton}
                                            onClick={() => handleStatusChange(appointment.id, 'Rejected')}
                                        >
                                            Reject
                                        </button>
                                    </>
                                ) : (
                                    appointment.status === 'Confirmed' && (
                                        <Link to={`/reschedule-appointment/${appointment.id}`}>
                                            <button style={styles.rescheduleButton}>Reschedule</button>
                                        </Link>
                                    )
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
    },
    header: {
        fontSize: '24px',
        marginBottom: '20px',
        textAlign: 'center',
        color: '#333',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
    },
    tableHeader: {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '10px',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    tableCell: {
        padding: '10px',
        borderBottom: '1px solid #ddd',
        textAlign: 'center',
    },
    confirmButton: {
        backgroundColor: '#28a745',
        color: '#fff',
        padding: '5px 10px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginRight: '5px',
    },
    rejectButton: {
        backgroundColor: '#dc3545',
        color: '#fff',
        padding: '5px 10px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    rescheduleButton: {
        backgroundColor: '#ffc107',
        color: '#fff',
        padding: '5px 10px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};

export default AppointmentsPage;
