import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DoctorListService from "../service/DoctorListService";
import backgroundImg from "../assets/patient.png";

const DoctorListPage = () => {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    DoctorListService.getAllDoctors()
      .then((response) => {
        setDoctors(response.data || []);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to load doctors.");
      });
  }, []);

  const bookAppointment = (doctorId) => {
    navigate(`/book-appointment/${doctorId}`);
  };

  return (
    <div style={styles.page(backgroundImg)}>
      <div style={styles.overlay} />

      <div style={styles.card}>
        <h1 style={styles.title}>DOCTORS</h1>
        <p style={styles.subtitle}>Select a doctor and book your appointment</p>

        {error && <p style={styles.error}>{error}</p>}

        <div style={styles.tableWrap}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>DOB</th>
                <th style={styles.th}>Qualification</th>
                <th style={styles.th}>Specialist</th>
                <th style={styles.th}>Mobile</th>
                <th style={styles.th}>Action</th>
              </tr>
            </thead>

            <tbody>
              {doctors.length > 0 ? (
                doctors.map((doctor) => (
                  <tr key={doctor.id} style={styles.tr}>
                    <td style={styles.tdStrong}>{doctor.fullName}</td>
                    <td style={styles.td}>{doctor.dob}</td>
                    <td style={styles.td}>{doctor.qualification}</td>
                    <td style={styles.td}>{doctor.specialist}</td>
                    <td style={styles.td}>{doctor.mobNo}</td>
                    <td style={styles.td}>
                      <button
                        onClick={() => bookAppointment(doctor.id)}
                        style={styles.bookButton}
                      >
                        Book Appointment
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" style={styles.empty}>
                    No doctors found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div style={styles.bottomRow}>
          <button style={styles.backButton} onClick={() => navigate("/patient-dashboard")}>
            ← Back to Dashboard
          </button>
        </div>
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
    width: "min(1050px, 94vw)",
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

  error: {
    margin: "10px 0 14px",
    textAlign: "center",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 700,
    color: "rgba(255, 190, 190, 0.95)",
  },

  // ✅ makes table scroll on small screens
  tableWrap: {
    overflowX: "auto",
    borderRadius: "16px",
    border: "1px solid rgba(255,255,255,0.18)",
    background: "rgba(255,255,255,0.10)",
  },

  table: {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
    minWidth: "900px",
    fontFamily: "'DM Sans', sans-serif",
    color: "#0b2236",
  },

  th: {
    padding: "14px 14px",
    textAlign: "left",
    fontSize: "0.95rem",
    fontWeight: 800,
    color: "#06263e",
    background: "rgba(255,255,255,0.85)",
    position: "sticky",
    top: 0,
    zIndex: 2,
  },

  tr: {
    background: "rgba(255,255,255,0.70)",
  },

  td: {
    padding: "14px 14px",
    borderTop: "1px solid rgba(10, 30, 50, 0.10)",
    fontSize: "0.95rem",
    color: "#0b2236",
  },

  tdStrong: {
    padding: "14px 14px",
    borderTop: "1px solid rgba(10, 30, 50, 0.10)",
    fontSize: "0.98rem",
    fontWeight: 800,
    color: "#06263e",
  },

  empty: {
    padding: "18px",
    textAlign: "center",
    fontFamily: "'DM Sans', sans-serif",
    color: "#06263e",
    background: "rgba(255,255,255,0.75)",
  },

  bookButton: {
    padding: "10px 12px",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.92rem",
    fontWeight: 800,
    letterSpacing: "0.3px",
    color: "#06263e",
    background:
      "linear-gradient(135deg, rgba(56, 189, 248, 0.95), rgba(255,255,255,0.90))",
    boxShadow: "0 10px 20px rgba(0,0,0,0.18)",
    whiteSpace: "nowrap",
  },

  bottomRow: {
    marginTop: "16px",
    display: "flex",
    justifyContent: "center",
  },

  backButton: {
    padding: "10px 14px",
    borderRadius: "12px",
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

export default DoctorListPage;
