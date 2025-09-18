import { useState, createContext, useContext, useEffect } from "react";
import products from "../database/products";
import { createRoot } from "react-dom/client";
import styles from "./Products.module.css"
const Products = ({ handleClick, searchQuery }) => {
  const filteredData = !searchQuery
    ? products
    : products.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <>
      <div className={styles.products}>
        {
          filteredData.length === 0 ? (
            <p>No products</p>
          ) : (
            filteredData.map((item) => {
              return (
                <div key={item.id} className={styles.items} >
                  <img src={item.imgurl} />
                  <p>{item.name}</p>
                  <p>Price : {item.price}</p>
                  <button className={styles.btn} onClick={handleClick}>Add to cart</button>
                </div>
              );
            })
          )
        }
      </div>
    </>
  );
};

export default Products;
