import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; 

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        {/* LEFT: Logo */}
        <Link to="/" style={styles.logoWrap}>
          <img src={logo} alt="Hospital MS Logo" style={styles.logo} />
        </Link>


        {/* RIGHT */}
        <ul style={styles.navList}>
          <li><Link to="/" style={styles.navLink}>Home</Link></li>
          <li><Link to="/doctor-login" style={styles.navLink}>Doctor Login</Link></li>
          <li><Link to="/patient-login" style={styles.navLink}>Patient Login</Link></li>
        </ul>
      </div>
    </nav>
  );
};



const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    width: "100%",
    height: "60px",
    background: "rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    zIndex: 1000,
  },

  container: {
  maxWidth: "1400px",
  height: "120%",        // 🔑 important
  margin: "0 auto",
  padding: "0 24px",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",  // 🔑 vertical centering
},


  navList: {
    listStyle: "none",
    display: "flex",
    gap: "28px",
    margin: 0,
    padding: 0,
  },

  navLink: {
    color: "#ffffff",
    textDecoration: "none",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "15px",
    fontWeight: "500",
  },

  logoWrap: {
  display: "flex",
  alignItems: "center",
  height: "100%",
},

logo: {
  height: "200px",
  width: "auto",
  objectFit: "contain",
},


};



export default Navbar;
