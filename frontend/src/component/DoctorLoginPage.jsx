import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import backgroundImg from "../assets/doctor.png"; // ✅ your new doctor image

const DoctorLoginPage = () => {
  const { doctorId } = useParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();

    // Keeping your localStorage logic as-is
    const newAppointment = { doctorId };
    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    appointments.push(newAppointment);
    localStorage.setItem("appointments", JSON.stringify(appointments));

    try {
      const res = await axios.post("http://localhost:1234/doctor/login", {
        email,
        password,
      });

      if (res.data.message === "Email deos not match") {
        alert("Email does not match");
      } else if (res.data.message === "Login Success") {
        const doctorIdPrompt = prompt("Please enter the Doctor ID:");
        if (doctorIdPrompt) navigate(`/doctor-appointments/${doctorIdPrompt}`);
      } else {
        alert("Incorrect Email or Password");
      }
    } catch (err) {
      alert(err?.message || err);
    }
  }

  return (
    <div style={styles.page(backgroundImg)}>
      <div style={styles.overlay} />

      <div style={styles.card}>
        <h1 style={styles.title}>DOCTOR LOGIN</h1>
        <p style={styles.subtitle}>Secure access to your schedule & appointments</p>

        <form onSubmit={login} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              style={styles.input}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              style={styles.input}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" style={styles.button}>
            Login
          </button>

          <div style={styles.footer}>
            <span style={styles.footerText}>New doctor?</span>
            <button
              type="button"
              style={styles.linkButton}
              onClick={() => navigate("/doctor-signup")}
            >
              Create account
            </button>
          </div>
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
    paddingTop: `${NAV_HEIGHT + 24}px`, // ✅ prevents navbar overlap
    boxSizing: "border-box",
  }),

  // ✅ Premium doctor-theme overlay (cool + readable)
  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(135deg, rgba(2, 132, 199, 0.25), rgba(0, 0, 0, 0.45))",
  },

  // ✅ More glossy glass card (slightly stronger for readability)
  card: {
    position: "relative",
    zIndex: 1,
    width: "min(430px, 92vw)",
    padding: "30px 28px",
    borderRadius: "22px",

    background:
      "linear-gradient(135deg, rgba(255,255,255,0.22), rgba(255,255,255,0.12))",
    border: "1px solid rgba(255,255,255,0.25)",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
    boxShadow: "0 18px 55px rgba(0,0,0,0.40)",
    color: "#fff",
  },

  title: {
    margin: 0,
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "clamp(2.2rem, 4.8vw, 3rem)",
    letterSpacing: "2px",
    textAlign: "center",
    color: "#f5fbff",
    textShadow: "0 10px 24px rgba(0,0,0,0.55)",
  },

  subtitle: {
    margin: "10px 0 22px",
    textAlign: "center",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.98rem",
    color: "rgba(245,251,255,0.92)",
    letterSpacing: "0.4px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
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

  input: {
    padding: "12px 12px",
    fontSize: "15px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.22)",
    outline: "none",
    background: "rgba(255,255,255,0.12)",
    color: "#000000",
    fontFamily: "'DM Sans', sans-serif",
  },

  // ✅ Slightly more “professional/doctor” button (cool blue)
  button: {
    marginTop: "8px",
    padding: "12px",
    borderRadius: "14px",
    border: "none",
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "15px",
    fontWeight: 700,
    letterSpacing: "0.6px",
    color: "#06263e",
    background:
      "linear-gradient(135deg, rgba(125, 211, 252, 0.95), rgba(255,255,255,0.90))",
    boxShadow: "0 12px 26px rgba(0,0,0,0.25)",
  },

  footer: {
    marginTop: "14px",
    display: "flex",
    justifyContent: "center",
    gap: "8px",
    alignItems: "center",
  },

  footerText: {
    fontFamily: "'DM Sans', sans-serif",
    color: "rgba(245,251,255,0.9)",
    fontSize: "0.95rem",
  },

  linkButton: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 700,
    fontSize: "0.95rem",
    color: "#7dd3fc",
    textDecoration: "underline",
    padding: 0,
  },
};

export default DoctorLoginPage;
