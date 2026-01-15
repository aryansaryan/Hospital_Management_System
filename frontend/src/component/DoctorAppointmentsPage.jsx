import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import backgroundImg from "../assets/doctor.png"; // ✅ use your doctor background image

const DoctorAppointmentsPage = () => {
  const { doctorId } = useParams();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    
    const storedAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];
    const doctorAppointments = storedAppointments.filter(
      (app) => String(app.doctorId) === String(doctorId)
    );
    setAppointments(doctorAppointments);
  }, [doctorId]);

  const handleStatusChange = (index, status) => {
    const updatedAppointments = [...appointments];
    updatedAppointments[index].status = status;
    setAppointments(updatedAppointments);

    const storedAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];

    const updatedStoredAppointments = storedAppointments.map((app) =>
      String(app.doctorId) === String(doctorId) &&
      app.patientName === updatedAppointments[index].patientName &&
      app.appointmentDate === updatedAppointments[index].appointmentDate &&
      app.appointmentTime === updatedAppointments[index].appointmentTime
        ? { ...app, status }
        : app
    );

    localStorage.setItem("appointments", JSON.stringify(updatedStoredAppointments));
  };

  return (
    <div style={styles.page(backgroundImg)}>
      <div style={styles.overlay} />

      <div style={styles.wrapper}>
        <div style={styles.headerWrap}>
          <h1 style={styles.title}>DOCTOR APPOINTMENTS</h1>
          <p style={styles.subtitle}>Doctor ID: {doctorId}</p>
        </div>

        <div style={styles.card}>
          <div style={styles.tableWrap}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Patient</th>
                  <th style={styles.th}>Date</th>
                  <th style={styles.th}>Time</th>
                  <th style={styles.th}>Status</th>
                  <th style={styles.th}>Actions</th>
                </tr>
              </thead>

              <tbody>
                {appointments.length > 0 ? (
                  appointments.map((appointment, index) => (
                    <tr key={index} style={styles.tr}>
                      <td style={styles.td}>{appointment.patientName}</td>
                      <td style={styles.td}>{appointment.appointmentDate}</td>
                      <td style={styles.td}>{appointment.appointmentTime}</td>

                      <td style={styles.td}>
                        <span style={styles.badge(appointment.status)}>
                          {appointment.status || "Pending"}
                        </span>
                      </td>

                      <td style={styles.td}>
                        {(appointment.status === "Pending" ||
                          !appointment.status) && (
                          <div style={styles.actionRow}>
                            <button
                              style={styles.btn("confirm")}
                              onClick={() => handleStatusChange(index, "Confirmed")}
                            >
                              Confirm
                            </button>
                            <button
                              style={styles.btn("reject")}
                              onClick={() => handleStatusChange(index, "Rejected")}
                            >
                              Reject
                            </button>
                          </div>
                        )}

                        {appointment.status === "Confirmed" && (
                          <Link to={`/reschedule-appointment/${doctorId}/${index}`}>
                            <button style={styles.btn("reschedule")}>
                              Reschedule
                            </button>
                          </Link>
                        )}

                        {appointment.status === "Rejected" && (
                          <span style={styles.muted}>No actions</span>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" style={styles.empty}>
                      No appointments found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div style={styles.footerRow}>
            <Link to="/" style={styles.backLink}>
              ← Back to Home
            </Link>
          </div>
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
    position: "relative",
    overflow: "hidden",
    padding: "24px",
    paddingTop: `${NAV_HEIGHT + 28}px`, // ✅ prevents navbar overlap
    boxSizing: "border-box",
  }),

  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(135deg, rgba(2, 132, 199, 0.25), rgba(0, 0, 0, 0.55))",
  },

  wrapper: {
    position: "relative",
    zIndex: 1,
    width: "min(1100px, 96vw)",
    margin: "0 auto",
  },

  headerWrap: {
    textAlign: "center",
    marginBottom: "16px",
  },

  title: {
    margin: 0,
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "clamp(2.4rem, 4.6vw, 3.4rem)",
    letterSpacing: "2px",
    color: "#f5fbff",
    textShadow: "0 10px 24px rgba(0,0,0,0.55)",
  },

  subtitle: {
    margin: "8px 0 0",
    fontFamily: "'DM Sans', sans-serif",
    color: "rgba(245,251,255,0.9)",
    letterSpacing: "0.3px",
  },

  card: {
    borderRadius: "22px",
    background: "rgba(255,255,255,0.14)",
    border: "1px solid rgba(255,255,255,0.22)",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
    boxShadow: "0 18px 60px rgba(0,0,0,0.35)",
    padding: "18px",
  },

  tableWrap: {
    width: "100%",
    overflowX: "auto",
    borderRadius: "16px",
  },

  table: {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
    minWidth: "760px",
  },

  th: {
    textAlign: "left",
    padding: "14px 14px",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.92rem",
    letterSpacing: "0.5px",
    color: "rgba(245,251,255,0.95)",
    background: "rgba(255,255,255,0.10)",
    position: "sticky",
    top: 0,
    backdropFilter: "blur(10px)",
  },

  tr: {
    background: "rgba(255,255,255,0.06)",
  },

  td: {
    padding: "14px 14px",
    borderTop: "1px solid rgba(255,255,255,0.12)",
    fontFamily: "'DM Sans', sans-serif",
    color: "rgba(245,251,255,0.92)",
    verticalAlign: "middle",
  },

  badge: (status) => {
    const s = (status || "Pending").toLowerCase();
    const map = {
      pending: "rgba(251, 191, 36, 0.95)",
      confirmed: "rgba(34, 197, 94, 0.95)",
      rejected: "rgba(239, 68, 68, 0.95)",
    };
    return {
      display: "inline-block",
      padding: "6px 10px",
      borderRadius: "999px",
      fontSize: "0.85rem",
      fontWeight: 700,
      color: "#061b28",
      background: map[s] || map.pending,
    };
  },

  actionRow: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },

  btn: (type) => {
    const presets = {
      confirm: {
        background: "linear-gradient(135deg, rgba(34,197,94,0.95), rgba(255,255,255,0.75))",
        color: "#06263e",
      },
      reject: {
        background: "linear-gradient(135deg, rgba(239,68,68,0.95), rgba(255,255,255,0.70))",
        color: "#3b0b0b",
      },
      reschedule: {
        background: "linear-gradient(135deg, rgba(56,189,248,0.95), rgba(255,255,255,0.85))",
        color: "#06263e",
      },
    };

    return {
      border: "none",
      cursor: "pointer",
      padding: "10px 12px",
      borderRadius: "12px",
      fontFamily: "'DM Sans', sans-serif",
      fontSize: "0.92rem",
      fontWeight: 800,
      letterSpacing: "0.3px",
      boxShadow: "0 10px 22px rgba(0,0,0,0.22)",
      transition: "transform 0.2s ease",
      ...presets[type],
    };
  },

  muted: {
    fontFamily: "'DM Sans', sans-serif",
    color: "rgba(245,251,255,0.65)",
    fontSize: "0.9rem",
  },

  empty: {
    padding: "22px",
    textAlign: "center",
    fontFamily: "'DM Sans', sans-serif",
    color: "rgba(245,251,255,0.85)",
  },

  footerRow: {
    marginTop: "14px",
    display: "flex",
    justifyContent: "flex-end",
  },

  backLink: {
    fontFamily: "'DM Sans', sans-serif",
    color: "rgba(165, 243, 252, 0.95)",
    textDecoration: "underline",
    fontWeight: 700,
  },
};

export default DoctorAppointmentsPage;
