import React, { useEffect, useState } from "react";
import "./_product.scss";
import coats from "../assets/coats.jpg";

function Product() {
  const data = [
    {
      id: 1,
      img: "coats",
      price: "$262",
    },
    {
      id: 2,
      img: "coats",
      price: "$262",
    },
    {
      id: 3,
      img: "coats",
      price: "$262",
    },
    {
      id: 4,
      img: "coats",
      price: "$262",
    },
  ];
  return (
    <main className="product-section">
     
      <div className="product-grid">
        {data.map(() => (
          <div className="product-card">
            <img src={coats} className="product-img "></img>
            <div className="product-info">
              <h1>coat</h1>
              <p>$290</p>
              <div className="product-rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Product;
