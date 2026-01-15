import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import HomePage from './component/Home';
import DoctorLoginPage from './component/DoctorLoginPage';
import PatientLoginPage from './component/PatientLoginPage';
import DoctorSignupPage from './component/DoctorSignupPage';
import DoctorListPage from './component/DoctorsListPage';
import PatientListPage from './component/PatientListPage';
import AppointmentBookingPage from './component/AppointmentBookingPage';
import DoctorBookingsPage from './component/DoctorBookingsPage';
import PatientSignupPage from './component/PatientSignUpPage';
import PatientBookingsPage from './component/PatientBookingsPage';
import DoctorAppointmentsPage from './component/DoctorAppointmentsPage';
import RescheduleAppointmentPage from './component/RescheduleAppointmentPage';
import PatientDashboard from './component/PatientDashboard';
import PatientAppointmentsPage from './component/PatientAppointmentsPage';
import BookAppointment from './component/BookAppointment';
import AppointmentsList from './component/AppointmentsList';
import RescheduleAppointment from './component/RescheduleAppointment';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/doctor-login" element={<DoctorLoginPage />} />
                <Route path="/patient-login" element={<PatientLoginPage />} />
                <Route path="/doctor-signup" element={<DoctorSignupPage />} />
                <Route path="/patient-signup" element={<PatientSignupPage />} />
                <Route path="/doctor-list" element={<DoctorListPage />} />
                <Route path="/patient-list" element={<PatientListPage />} />
                <Route path="/patient-dashboard" element={<PatientDashboard />} />
                <Route path="/book-appointment/:doctorId" element={<AppointmentBookingPage />} />
                <Route path="/doctor-bookings/:doctorId" element={<DoctorBookingsPage />} /> 
                <Route path="/doctor-appointments/:doctorId" element={<DoctorAppointmentsPage />} />
                <Route path="/patient-appointments" element={<PatientAppointmentsPage />} />
                <Route path="/patient-bookings/:patientName" element={<PatientBookingsPage />} />
                <Route path="/reschedule-appointment/:doctorId/:appointmentIndex" element={<RescheduleAppointmentPage />} />
                <Route path="/book-appointment" element={<BookAppointment />} />
                <Route path="/appointments" element={<AppointmentsList />} />
                <Route path="/reschedule-appointment/:id" component={RescheduleAppointment} />
            </Routes>
        </Router>
    );
};

export default App;
