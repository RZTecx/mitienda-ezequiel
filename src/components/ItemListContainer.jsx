import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import productsData from "../data/products";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    // Simula promesa asincrónica
    const fetchProducts = new Promise((resolve) => {
      setTimeout(() => {
        if(categoryId){
          resolve(productsData.filter(p => p.category === categoryId));
        } else {
          resolve(productsData);
        }
      }, 500);
    });

    fetchProducts.then(res => setProducts(res));
  }, [categoryId]);

  return <ItemList products={products} />;
}

export default ItemListContainer;
