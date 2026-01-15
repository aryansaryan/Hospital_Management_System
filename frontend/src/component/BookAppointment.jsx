import React, { useState } from 'react';
import axios from 'axios';

const BookAppointment = ({ doctorId, patientId }) => {
    const [formData, setFormData] = useState({
        userId: patientId,
        fullName: '',
        gender: '',
        age: '',
        appointmentDate: '',
        email: '',
        phNo: '',
        diseases: '',
        doctorId: doctorId,
        address: '',
        status: 'Pending',
        action: 'Book'
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:1234/user/bookAppointment', formData);
            alert('Appointment booked successfully!');
        } catch (error) {
            console.error('Error booking appointment:', error);
            alert('Failed to book appointment. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <h2 style={styles.heading}>Book Appointment</h2>
            <input name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleInputChange} style={styles.input} required />
            <input name="gender" placeholder="Gender" value={formData.gender} onChange={handleInputChange} style={styles.input} required />
            <input name="age" placeholder="Age" value={formData.age} onChange={handleInputChange} style={styles.input} required />
            <input name="appointmentDate" type="date" value={formData.appointmentDate} onChange={handleInputChange} style={styles.input} required />
            <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleInputChange} style={styles.input} required />
            <input name="phNo" placeholder="Phone Number" value={formData.phNo} onChange={handleInputChange} style={styles.input} required />
            <input name="diseases" placeholder="Diseases" value={formData.diseases} onChange={handleInputChange} style={styles.input} notrequired />
            <input name="address" placeholder="Address" value={formData.address} onChange={handleInputChange} style={styles.input} notrequired />
            <button type="submit" style={styles.button}>Book Appointment</button>
        </form>
    );
};

const styles = {
    form: {
        maxWidth: '500px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#f7f7f7',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    },
    heading: {
        textAlign: 'center',
        marginBottom: '20px',
        color: '#333'
    },
    input: {
        display: 'block',
        width: '100%',
        padding: '10px',
        marginBottom: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px'
    },
    button: {
        width: '100%',
        padding: '10px',
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
    }
};

export default BookAppointment;
