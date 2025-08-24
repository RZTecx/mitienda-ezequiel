import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Navbar() {
  return (
    <nav style={{
      backgroundColor: "#222",
      color: "#fff",
      padding: "15px 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <Link to="/">
        <img src={logo} alt="Logo MiTienda" style={{ height: "50px" }} />
      </Link>
      <div>
        <Link to="/category/hombres" style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}>Hombres</Link>
        <Link to="/category/mujeres" style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}>Mujeres</Link>
        <Link to="/category/accesorios" style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}>Accesorios</Link>
      </div>
    </nav>
  );
}

export default Navbar;


