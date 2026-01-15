import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import backgroundImg from "../assets/patient.png";

const PatientDashboard = () => {
  const navigate = useNavigate();
  const [doctorDetails, setDoctorDetails] = useState([]);
  const [selectedDoctorId, setSelectedDoctorId] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctorDetails = async () => {
      try {
        const response = await axios.get("http://localhost:1234/doctor/findDoctor");
        if (!response.data || !Array.isArray(response.data) || response.data.length === 0) {
          throw new Error("No doctor details found");
        }
        setDoctorDetails(response.data);
      } catch (err) {
        setError(err?.message || "Failed to load doctor list");
        console.error("Error fetching doctor details:", err);
      }
    };

    fetchDoctorDetails();
  }, []);

  const handleDoctorClick = () => navigate("/doctor-list");

  const handleAppointmentsClick = () => {
    if (selectedDoctorId) {
      navigate(`/doctor-appointments/${selectedDoctorId}`);
    } else {
      alert("Please select a doctor to view appointments.");
    }
  };

  return (
    <div style={styles.page(backgroundImg)}>
      <div style={styles.overlay} />

      <div style={styles.card}>
        <h1 style={styles.title}>PATIENT DASHBOARD</h1>
        <p style={styles.subtitle}>Choose a doctor and manage your appointments</p>

        <div style={styles.selectWrap}>
          <label style={styles.label}>Select Doctor</label>
          <select
            style={styles.select}
            value={selectedDoctorId}
            onChange={(e) => setSelectedDoctorId(e.target.value)}
          >
            <option value="" disabled>
              Select a Doctor
            </option>
            {doctorDetails.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                ({doctor.id} - {doctor.fullName})
              </option>
            ))}
          </select>
        </div>

        <div style={styles.buttonRow}>
          <button style={styles.button("primary")} onClick={handleDoctorClick}>
            View Doctors
          </button>

          <button style={styles.button("secondary")} onClick={handleAppointmentsClick}>
            View Appointments
          </button>
        </div>

        {error && <p style={styles.error}>Error: {error}</p>}
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
    paddingTop: `${NAV_HEIGHT + 28}px`, // ✅ avoids navbar overlap
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
    padding: "30px 28px",
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
    margin: "10px 0 22px",
    textAlign: "center",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.98rem",
    color: "rgba(245,251,255,0.92)",
    letterSpacing: "0.4px",
  },

  selectWrap: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    marginTop: "6px",
  },

  label: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.95rem",
    color: "rgba(245,251,255,0.92)",
  },

  // ✅ dropdown is readable + modern
  select: {
    padding: "12px 12px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.22)",
    outline: "none",
    background: "rgba(255,255,255,0.14)",
    color: "#0b2236", // ✅ readable text
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "15px",
  },

  buttonRow: {
    marginTop: "18px",
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  button: (variant) => {
    const base = {
      padding: "12px 16px",
      borderRadius: "14px",
      border: "none",
      cursor: "pointer",
      fontFamily: "'DM Sans', sans-serif",
      fontSize: "15px",
      fontWeight: 800,
      letterSpacing: "0.5px",
      boxShadow: "0 12px 26px rgba(0,0,0,0.25)",
      minWidth: "180px",
    };

    if (variant === "primary") {
      return {
        ...base,
        color: "#06263e",
        background:
          "linear-gradient(135deg, rgba(56, 189, 248, 0.95), rgba(255,255,255,0.90))",
      };
    }

    return {
      ...base,
      color: "#06263e",
      background:
        "linear-gradient(135deg, rgba(167, 243, 208, 0.95), rgba(255,255,255,0.90))",
    };
  },

  error: {
    marginTop: "14px",
    fontFamily: "'DM Sans', sans-serif",
    color: "rgba(255, 180, 180, 0.95)",
    textAlign: "center",
    fontWeight: 700,
  },
};

export default PatientDashboard;
