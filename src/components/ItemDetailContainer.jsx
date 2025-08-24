import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import productsData from "../data/products";

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productsData.find(p => p.id === parseInt(id)));
      }, 500);
    });

    fetchProduct.then(res => setProduct(res));
  }, [id]);

  return product ? <ItemDetail product={product} /> : <p style={{textAlign:"center"}}>Cargando...</p>;
}

export default ItemDetailContainer;
