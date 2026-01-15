import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import backgroundImg from "../assets/patient.png";

const AppointmentBookingPage = () => {
  const { doctorId } = useParams();
  const navigate = useNavigate();

  const [patientName, setPatientName] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");

  const handleBooking = (e) => {
    e.preventDefault();

    const newAppointment = {
      doctorId,
      patientName,
      appointmentDate,
      appointmentTime,
      status: "Pending",
    };

    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    appointments.push(newAppointment);
    localStorage.setItem("appointments", JSON.stringify(appointments));

    alert(
      `Appointment booked with Doctor ID: ${doctorId}. Waiting for doctor confirmation.`
    );

    // go back to doctor list page (your route looks like /patient-list)
    navigate("/patient-list");
  };

  return (
    <div style={styles.page(backgroundImg)}>
      <div style={styles.overlay} />

      <div style={styles.card}>
        <h1 style={styles.title}>BOOK APPOINTMENT</h1>
        <p style={styles.subtitle}>
          Booking with Doctor ID: <span style={styles.badge}>{doctorId}</span>
        </p>

        <form onSubmit={handleBooking} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Patient Name</label>
            <input
              type="text"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              placeholder="Enter your full name"
              required
              style={styles.input}
            />
          </div>

          <div style={styles.row}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Appointment Date</label>
              <input
                type="date"
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
                required
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Appointment Time</label>
              <input
                type="time"
                value={appointmentTime}
                onChange={(e) => setAppointmentTime(e.target.value)}
                required
                style={styles.input}
              />
            </div>
          </div>

          <button type="submit" style={styles.button}>
            Confirm Booking
          </button>

          <button
            type="button"
            style={styles.secondaryBtn}
            onClick={() => navigate(-1)}
          >
            ← Back
          </button>
        </form>
      </div>
    </div>
  );
};

const NAV_HEIGHT = 60;

const styles = {
  page: (bg) => ({
    minHeight: "100vh",
    width: "100%",
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    position: "relative",
    overflow: "hidden",

    padding: "24px",
    paddingTop: `${NAV_HEIGHT + 28}px`,
    boxSizing: "border-box",
  }),

  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(135deg, rgba(2, 132, 199, 0.35), rgba(0, 0, 0, 0.35))",
  },

  card: {
    position: "relative",
    zIndex: 1,
    width: "min(520px, 92vw)",
    padding: "28px 26px",
    borderRadius: "22px",
    background: "rgba(255,255,255,0.20)",
    border: "1px solid rgba(255,255,255,0.28)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    boxShadow: "0 18px 55px rgba(0,0,0,0.35)",
    color: "#fff",
  },

  title: {
    margin: 0,
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "clamp(2.2rem, 4.8vw, 3rem)",
    letterSpacing: "2px",
    textAlign: "center",
    color: "#f5fbff",
    textShadow: "0 8px 20px rgba(0,0,0,0.55)",
  },

  subtitle: {
    margin: "10px 0 18px",
    textAlign: "center",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.98rem",
    color: "rgba(245,251,255,0.92)",
    letterSpacing: "0.4px",
  },

  badge: {
    display: "inline-block",
    padding: "4px 10px",
    borderRadius: "999px",
    background: "rgba(255,255,255,0.16)",
    border: "1px solid rgba(255,255,255,0.22)",
    fontWeight: 800,
    color: "#eaf7ff",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },

  row: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
  },

  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  label: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.95rem",
    color: "rgba(245,251,255,0.92)",
  },

  // ✅ black text inputs (visible while typing)
  input: {
    padding: "12px 12px",
    fontSize: "15px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.22)",
    outline: "none",
    background: "rgba(255,255,255,0.85)",
    color: "#0b2236",
    fontFamily: "'DM Sans', sans-serif",
  },

  button: {
    marginTop: "6px",
    padding: "12px",
    borderRadius: "14px",
    border: "none",
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "15px",
    fontWeight: 800,
    letterSpacing: "0.6px",
    color: "#06263e",
    background:
      "linear-gradient(135deg, rgba(56, 189, 248, 0.95), rgba(255,255,255,0.90))",
    boxShadow: "0 12px 26px rgba(0,0,0,0.25)",
  },

  secondaryBtn: {
    padding: "10px",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.30)",
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.95rem",
    fontWeight: 800,
    color: "#f5fbff",
    background: "rgba(255,255,255,0.12)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
  },
};

export default AppointmentBookingPage;
