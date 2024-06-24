"use client";
import CartProduct from "@/components/CartProduct";
import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Page = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json"); // Path to your data.json file in the public directory
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const removeProduct = async (id) => {
    try {
      const response = await axios.delete("/api/deleteproduct", {
        data: { id },
      });
      if (!response) {
        throw new Error("Failed to delete product");
      }
      setProducts((prevProducts) =>
        prevProducts.filter((item) => item.id !== id)
      );
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };

  return (
    <>
      <Header count={products.length} />
      <div className="bg-slate-100 py-5 px-32">
        <div className="flex bg-white shadow-sm justify-between items-center py-2 text-[12px] px-4 h-12 w-[700px]">
          From Saved Address
          <button className="border-2 rounded-md text-blue-600 p-2 font-semibold hover:shadow-md">
            Enter Delivery Pincode
          </button>
        </div>
        <div className="my-3 bg-white w-[700px]">
          {products.map((product) => (
            <CartProduct
              id={product.id}
              removeProduct={removeProduct}
              key={product?.id}
              title={product.title}
              price={product.price}
              rating={product.rating}
              image={product.image}
              count={product.count}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
