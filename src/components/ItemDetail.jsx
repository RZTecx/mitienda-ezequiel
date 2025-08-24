import React from "react";

function ItemDetail({ product }) {
  return (
    <div style={{maxWidth:"600px", margin:"40px auto", padding:"20px", backgroundColor:"#fff", borderRadius:"15px", boxShadow:"0 4px 6px rgba(0,0,0,0.1)"}}>
      <img src={product.image} alt={product.name} style={{ width:"100%", borderRadius:"10px" }} />
      <h2 style={{margin:"20px 0 10px", color:"#222"}}>{product.name}</h2>
      <p style={{color:"#555", fontSize:"18px"}}>ARS ${product.price}</p>
      <p style={{color:"#888"}}>Stock disponible: {product.stock}</p>
    </div>
  );
}

export default ItemDetail;
