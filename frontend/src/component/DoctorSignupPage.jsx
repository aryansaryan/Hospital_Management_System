import React, { useState } from "react";
import axios from "axios";
import backgroundImg from "../assets/doctor.png"; // ✅ use the doctor background you shared

const NAV_HEIGHT = 60;

const DoctorSignupPage = () => {
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [qualification, setQualification] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [email, setEmail] = useState("");
  const [mobNo, setMobNo] = useState("");
  const [password, setPassword] = useState("");

  async function save(event) {
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:1234/doctor/addDoctor", {
  fullName,
  dob,
  qualification,
  specialist,
  email,
  mobNo,
  password,
});

alert(`✅ Doctor Registration Successful!
Your Doctor ID is: ${res.data.id}

⚠️ Please save this ID for login and appointments.`);

    } catch (err) {
      alert(err?.message || err);
    }
  }

  return (
    <div style={styles.page(backgroundImg)}>
      <div style={styles.overlay} />

      <div style={styles.wrapper}>
        <h1 style={styles.title}>DOCTOR SIGNUP</h1>
        <p style={styles.subtitle}>Create your doctor account</p>

        <form onSubmit={save} style={styles.form}>
          <div style={styles.cardsWrapper}>
            {/* LEFT BOX */}
            <div style={styles.card}>
              <h2 style={styles.cardTitle}>Personal Info</h2>

              <div style={styles.formGroup}>
                <label style={styles.label}>Doctor Name</label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  style={styles.input}
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Date of Birth</label>
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  style={styles.input}
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Mobile No</label>
                <input
                  type="tel"
                  placeholder="Enter mobile number"
                  value={mobNo}
                  onChange={(e) => setMobNo(e.target.value)}
                  style={styles.input}
                  required
                />
              </div>
            </div>

            {/* RIGHT BOX */}
            <div style={styles.card}>
              <h2 style={styles.cardTitle}>Professional Info</h2>

              <div style={styles.formGroup}>
                <label style={styles.label}>Qualification</label>
                <input
                  type="text"
                  placeholder="MBBS, MD, etc."
                  value={qualification}
                  onChange={(e) => setQualification(e.target.value)}
                  style={styles.input}
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Specialization</label>
                <input
                  type="text"
                  placeholder="Cardiology, Ortho, etc."
                  value={specialist}
                  onChange={(e) => setSpecialist(e.target.value)}
                  style={styles.input}
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Email</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={styles.input}
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Password</label>
                <input
                  type="password"
                  placeholder="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={styles.input}
                  required
                />
              </div>
            </div>
          </div>

          <button type="submit" style={styles.buttonWide}>
            Create Account
          </button>
        </form>
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
    paddingTop: `${NAV_HEIGHT + 24}px`, // ✅ prevents navbar overlap
    boxSizing: "border-box",
  }),

  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(135deg, rgba(2, 132, 199, 0.30), rgba(0, 0, 0, 0.38))",
  },

  wrapper: {
    position: "relative",
    zIndex: 1,
    width: "min(980px, 96vw)",
  },

  title: {
    margin: 0,
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "clamp(2.4rem, 4.8vw, 3.3rem)",
    letterSpacing: "2px",
    textAlign: "center",
    color: "#f5fbff",
    textShadow: "0 10px 26px rgba(0,0,0,0.55)",
  },

  subtitle: {
    margin: "10px 0 22px",
    textAlign: "center",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "1rem",
    color: "rgba(245,251,255,0.92)",
    letterSpacing: "0.4px",
    textShadow: "0 10px 26px rgba(0,0,0,0.35)",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "18px",
  },

  // ✅ Two boxes side-by-side (responsive)
  cardsWrapper: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "100px",
    width: "100%",
  },

  card: {
    position: "relative",
    width: "100%",
    padding: "22px 22px",
    borderRadius: "22px",
    background: "rgba(255,255,255,0.18)",
    border: "1px solid rgba(255,255,255,0.26)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    boxShadow: "0 18px 55px rgba(0,0,0,0.35)",
    color: "#fff",
  },

  cardTitle: {
    margin: "0 0 14px",
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "1.6rem",
    letterSpacing: "1.6px",
    textAlign: "center",
    color: "#f5fbff",
    textShadow: "0 8px 18px rgba(0,0,0,0.45)",
  },

  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    marginBottom: "12px",
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
    background: "rgba(250, 250, 250, 0.12)",
    color: "#000000",
    fontFamily: "'DM Sans', sans-serif",
  },

  buttonWide: {
    width: "min(460px, 92vw)",
    padding: "14px",
    borderRadius: "16px",
    border: "none",
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "16px",
    fontWeight: 800,
    letterSpacing: "0.8px",
    color: "#06263e",
    background:
      "linear-gradient(135deg, rgba(125, 211, 252, 0.95), rgba(255,255,255,0.90))",
    boxShadow: "0 14px 30px rgba(0,0,0,0.30)",
  },
};

export default DoctorSignupPage;
