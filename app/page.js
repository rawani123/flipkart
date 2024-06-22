"use client";
import React from 'react';
import axios from 'axios';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Info from "@/components/Info";
import Card from "@/components/Card";
import Slider from "@/components/Slider";
import { Products } from "@/product";

export default function Home() {
  const handleClick = async (id) => {
    const product = Products.find(product => product.id === id);
    if (!product) return;

    try {
      const response = await axios.post('/api/product', product, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response.data.message); // Display the result message
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <>
      <Header />
      <HeroSection />
      <Slider />
      <div className="flex py-4 px-8 flex-wrap bg-slate-100">
        {Products.map((product) => (
          <Card
            handleClick={handleClick}
            key={product.id}
            id={product.id}
            title={product.title}
            rating={product.rating}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
      <Info />
      <Footer />
    </>
  );
}
