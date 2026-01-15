import React, { useState, useEffect } from "react";
import PatientListServie from "../service/PatientListServie";
import backgroundImg from "../assets/patient.png";

const PatientListPage = () => {
  const [patients, setPatient] = useState([]);

  useEffect(() => {
    PatientListServie.getAllPatients()
      .then((response) => {
        setPatient(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div style={styles.page(backgroundImg)}>
      <div style={styles.overlay} />

      <div style={styles.card}>
        <h1 style={styles.title}>PATIENT LIST</h1>
        <p style={styles.subtitle}>Registered patients in the system</p>

        <div style={styles.tableWrap}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Full Name</th>
                <th style={styles.th}>Age</th>
                <th style={styles.th}>Email</th>
              </tr>
            </thead>

            <tbody>
              {patients.length > 0 ? (
                patients.map((patient, index) => (
                  <tr key={index} style={styles.tr}>
                    <td style={styles.td}>{patient.fullName}</td>
                    <td style={styles.td}>{patient.age}</td>
                    <td style={styles.td}>{patient.email}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" style={styles.empty}>
                    No patients found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div style={styles.note}>
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
    width: "min(900px, 95vw)",
    padding: "26px",
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
    fontSize: "clamp(2.2rem, 4.6vw, 3rem)",
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

  tableWrap: {
    overflowX: "auto",
    borderRadius: "16px",
    border: "1px solid rgba(255,255,255,0.18)",
    background: "rgba(255,255,255,0.10)",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    minWidth: "650px",
  },

  th: {
    textAlign: "left",
    padding: "14px 14px",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 800,
    letterSpacing: "0.5px",
    color: "#eaf7ff",
    background: "rgba(0,0,0,0.20)",
    borderBottom: "1px solid rgba(255,255,255,0.18)",
  },

  tr: {
    borderBottom: "1px solid rgba(255,255,255,0.12)",
  },

  td: {
    padding: "12px 14px",
    fontFamily: "'DM Sans', sans-serif",
    color: "rgba(245,251,255,0.92)",
  },

  empty: {
    padding: "18px",
    textAlign: "center",
    fontFamily: "'DM Sans', sans-serif",
    color: "rgba(245,251,255,0.9)",
  },

  note: {
    marginTop: "14px",
    textAlign: "center",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.92rem",
    color: "rgba(245,251,255,0.85)",
  },
};

export default PatientListPage;
