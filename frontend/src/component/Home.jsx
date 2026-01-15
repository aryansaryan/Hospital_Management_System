import React from "react";
import backgroundImg from "../assets/hospital.png";

const NAV_HEIGHT = 60; // match your navbar height

const HomePage = () => {
  return (
    <div style={styles.page(backgroundImg)}>
      {/* overlay for readability */}
      <div style={styles.overlay} />

      {/* centered hero */}
      <div style={styles.hero}>
        <div style={styles.badge}>WELCOME</div>

        <h1 style={styles.title}>Hospital Management System</h1>

        <p style={styles.subtitle}>
          One portal for Doctors & Patients — appointments, records, and care made simple.
        </p>

        <div style={styles.divider} />

        <div style={styles.tagline}>Care • Compassion • Technology</div>
      </div>
    </div>
  );
};

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
    paddingTop: `${NAV_HEIGHT + 24}px`, // prevents navbar overlap
    boxSizing: "border-box",
  }),

  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(135deg, rgba(2, 132, 199, 0.28), rgba(0,0,0,0.45))",
  },

  hero: {
    position: "relative",
    zIndex: 1,

    width: "min(720px, 92vw)",
    padding: "clamp(22px, 4vw, 40px)",
    borderRadius: "24px",

    background: "rgba(255,255,255,0.16)",
    border: "1px solid rgba(255,255,255,0.28)",
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(14px)",
    boxShadow: "0 22px 70px rgba(0,0,0,0.35)",

    textAlign: "center",
    color: "#f5fbff",
    marginTop: "80px",
    
  },

  badge: {
    display: "inline-block",
    padding: "7px 14px",
    borderRadius: "999px",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.85rem",
    fontWeight: 700,
    letterSpacing: "1.6px",
    textTransform: "uppercase",
    color: "rgba(245,251,255,0.95)",
    background: "rgba(2, 132, 199, 0.25)",
    border: "1px solid rgba(255,255,255,0.22)",
    marginBottom: "14px",
  },

  title: {
    margin: 0,
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "clamp(2.6rem, 6vw, 4.2rem)",
    letterSpacing: "2px",
    lineHeight: 1.05,
    textShadow: "0 10px 25px rgba(0,0,0,0.55)",
  },

  subtitle: {
    margin: "14px auto 0",
    maxWidth: "62ch",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "clamp(1rem, 1.6vw, 1.15rem)",
    color: "rgba(245,251,255,0.92)",
    lineHeight: 1.6,
    textShadow: "0 6px 18px rgba(0,0,0,0.35)",
  },

  divider: {
    width: "min(280px, 70%)",
    height: "1px",
    margin: "18px auto 14px",
    background:
      "linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.45), rgba(255,255,255,0))",
  },

  tagline: {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 700,
    letterSpacing: "1.2px",
    textTransform: "uppercase",
    fontSize: "0.95rem",
    color: "rgba(180, 235, 255, 0.95)",
  },
};

export default HomePage;
