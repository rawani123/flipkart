"use client";
import Card from "@/components/Card";
import Header from "@/components/Header";

import Slider from "@/components/Slider";
import React, { useState } from "react";

export default function Home() {
  const [addtoCart, setAddtoCart] = useState(0);
  const products = [
    { id: "1", src: "/product1.jpeg", price: "RS 300" },
    { id: "2", src: "/product2.jpeg", price: "RS 400" },
    { id: "3", src: "/product2.jpeg", price: "RS 400" },
    { id: "4", src: "/product2.jpeg", price: "RS 400" },
    { id: "5", src: "/product2.jpeg", price: "RS 400" },
  ];
  return (
    <>
      <Header noofpRoducts={addtoCart} />
      <Slider />
      <div className="flex flex-wrap justify-center items-center  w-full p-8 m-0">
        {products.map((product) => (
          <Card
            key={product.id}
            src={product.src}
            price={product.price}
            setAddtoCart={setAddtoCart}
            addtoCart={addtoCart}
          />
        ))}
      </div>
    </>
  );
}
