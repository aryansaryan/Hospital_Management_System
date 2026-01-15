import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import backgroundImg from "../assets/patient.png";

const PatientSignupPage = () => {
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:1234/user/addUser", {
        fullName,
        age,
        email,
        password,
      });

      alert("Patient Registration Successful");
      navigate("/patient-login"); // ✅ go to login after signup
    } catch (err) {
      alert(err?.message || err);
    }
  }

  return (
    <div style={styles.page(backgroundImg)}>
      <div style={styles.overlay} />

      <div style={styles.card}>
        <h1 style={styles.title}>PATIENT SIGNUP</h1>
        <p style={styles.subtitle}>Create your account to access your dashboard.</p>

        {/* ✅ Proper submit handling */}
        <form onSubmit={save} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Full Name</label>
            <input
              type="text"
              style={styles.input}
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Age</label>
            <input
              type="number"
              style={styles.input}
              placeholder="Enter your age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              min="0"
              required
            />
          </div>

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
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" style={styles.button}>
            Create Account
          </button>

          <div style={styles.footer}>
            <span style={styles.footerText}>Already have an account?</span>
            <button
              type="button"
              style={styles.linkButton}
              onClick={() => navigate("/patient-login")}
            >
              Login
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
    paddingTop: `${NAV_HEIGHT + 24}px`,
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
    width: "min(420px, 92vw)",
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
      "linear-gradient(135deg, rgba(56, 189, 248, 0.95), rgba(255,255,255,0.90))",
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
    color: "#a5f3fc",
    textDecoration: "underline",
    padding: 0,
  },
};

export default PatientSignupPage;
