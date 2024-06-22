import Image from "next/image";
import React from "react";



const CartProduct = ({
  title,
  price,
  image,
  rating,
  count,
  removeProduct,
  id,
}) => {
  return (
    <div className=" bg-white py-4 px-6 h-[150px] w-[700px] border-b-2 border-slate-100 ">
      <div className="flex bg-white h-[90px] w-[650px]">
        <div className="flex items-center justify-center">
          <Image
            className=""
            src={image}
            alt="hello"
            height={70}
            width={70}
          ></Image>
        </div>
        <div className="px-7 flex flex-col gap-y-2.5">
          <h1 className="font-serif">{title}</h1>
          <h4 className="text-[12px]">{rating}</h4>
          <h3 className="text-[14px]">{price}</h3>
        </div>
        <div className="bg-orange-400 shadow-md flex items-center justify-center text-white text-[13px] shadow-gray-400 w-40 h-8 mt-14">
          Buy Now
        </div>
      </div>
      <div className="bg-white flex gap-x-2 h-[30px] w-[650px]">
        <button className="border-2 border-slate-200 px-3 py-0.5 rounded-full ">
          -
        </button>
        <h1 className="inline-block border-2 border-slate-200 py-0.5 px-3">
          {count}
        </h1>
        <button className="border-2 px-3 py-0.5 border-slate-200 rounded-full ">
          +
        </button>
        <div className="mx-4 text-[14px] my-1 font-semibold hover:text-blue-500">
          SAVE FOR LATER
        </div>
        <div
          className="mx-4 text-[14px] my-1 font-semibold hover:text-blue-500"
          onClick={() => removeProduct(id)}
        >
          REMOVE
        </div>
      </div>
    </div>
  );
};

export default CartProduct;