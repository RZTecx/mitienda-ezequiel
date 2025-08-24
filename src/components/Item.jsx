import React from "react";
import { Link } from "react-router-dom";

function Item({ product }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "15px",
      padding: "15px",
      backgroundColor: "#fff",
      width: "220px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      transition: "transform 0.2s",
      cursor: "pointer"
    }}
    onMouseOver={e => e.currentTarget.style.transform = "scale(1.05)"}
    onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
    >
      <img src={product.image} alt={product.name} style={{ width: "100%", borderRadius: "10px" }} />
      <h3 style={{ margin: "10px 0", color: "#222" }}>{product.name}</h3>
      <p style={{ color: "#555" }}>ARS ${product.price}</p>
      <Link to={`/item/${product.id}`}>
        <button style={{
          marginTop: "10px",
          padding: "10px",
          width: "100%",
          backgroundColor: "#222",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}>Ver Detalle</button>
      </Link>
    </div>
  );
}

export default Item;
