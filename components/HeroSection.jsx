import Image from "next/image";
import React from "react";

const HeroSection = () => {
  const Products = [
    {
      id: 1,
      title: "Mobiles",
      image: "/mobiles.webp",
    },
    {
      id: 2,
      title: "Grocery",
      image: "/grocery.webp",
    },
    {
      id: 3,
      title: "Travel",
      image: "/travel.webp",
    },
    {
      id: 4,
      title: "Appliances",
      image: "/appliances.webp",
    },
    {
      id: 5,
      title: "Fashion",
      image: "/fashion.jpg",
    },
    {
      id: 6,
      title: "Electronics",
      image: "/electronics.jpg",
    },
    {
      id: 7,
      title: "Home & Furniture",
      image: "/furniture.jpg",
    },
    {
      id: 8,
      title: "Beauty, Toys & More",
      image: "/toys.jpg",
    },
    {
      id: 9,
      title: "Two Wheelers",
      image: "/bike.jpg",
    },
  ];
  return (
    <div className="bg-slate-100 px-4 my-2">
      <div className="flex bg-white justify-between px-32 mx-4 h-28 ">
        {Products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col justify-center items-center"
          >
            <Image
              height={50}
              width={50}
              src={product.image}
              alt={product.title}
            />
            <p>{product.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
