import React from "react";
import { CiSearch } from "react-icons/ci";
import { RiAccountCircleLine } from "react-icons/ri";
import { GrCart } from "react-icons/gr";
import { AiOutlineShop } from "react-icons/ai";

const Header = ({noofpRoducts}) => {
  return (
    <>
    <div className="flex justify-between items-center h-12 w-full p-8 m-0">
      <img
        src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
        alt="Flipkart"
      />
      <div className="flex items-center h-10 bg-blue-100 rounded-md px-2">
        <CiSearch className="h-6 w-6" />
        <input
          type="text"
          placeholder="Search for Products, Brands and More"
          className=" rounded-md p-1 outline-none bg-blue-100 w-[700px]"
        />
      </div>
      <div className="flex hover:bg-slate-200 hover:border-2 hover:border-gray-300  p-2 hover:rounded-md">
        <RiAccountCircleLine className="h-6 w-6" />
        <select name="" id="" className="outline-none hover:bg-slate-200 ">
          <option value="">Account</option>
        </select>
      </div>
      <div className="flex"><GrCart className="h-6 w-6 " /> Cart <span className="font-bold mx-2">{noofpRoducts}</span></div>
      <div className="flex"><AiOutlineShop className="h-6 w-6 " /> Become a Seller</div>
    </div>
    </>
  );
};

export default Header;
