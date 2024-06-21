import React from "react";
import { CiSearch } from "react-icons/ci";
import { RiAccountCircleLine } from "react-icons/ri";
import { GrCart } from "react-icons/gr";
import { AiOutlineShop } from "react-icons/ai";
import { RiBitCoinFill } from "react-icons/ri";
import { TiPlusOutline } from "react-icons/ti";
import { LuCodesandbox } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { GoTag } from "react-icons/go";
import { IoCardOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import { MdLogout } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import Image from "next/image";

const Header = ({}) => {
  return (
    <>
      <div className="bg-white flex justify-between text-[14px] items-center h-12 w-full px-6 py-4 m-0">
        <Image
          className="ml-6"
          height={120}
          width={120}
          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
          alt="Flipkart"
        />
        <div className="flex items-center h-8 bg-blue-50 rounded-md px-2">
          <CiSearch className="h-6 w-6" />
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
            className="rounded-md p-1 outline-none bg-blue-50 w-[550px]"
          />
        </div>
        <div className="relative flex hover:bg-slate-200 hover:border-2 hover:border-gray-300 p-2 hover:rounded-md group">
          <button
            id="dropdownHoverButton"
            className="text-black text-[14px] font-medium rounded-lg text-sm px-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            <RiAccountCircleLine className="h-5 w-5 text-black" />
            <span className="ml-1"> Account</span>
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            id="dropdownHover"
            className="absolute hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 group-hover:block  "
            style={{ top: "100%", left: "0", zIndex: 50 }}
          >
            <ul
              className="py-2  text-[13px] text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownHoverButton"
            >
              <li>
                <a
                  href="#"
                  className=" flex px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <RiAccountCircleLine className="h-5 w-5 text-black" />{" "}
                  <span className="pl-2">My Account</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <RiBitCoinFill className="h-5 w-5 text-yellow-500" />{" "}
                  <span className="pl-2">SuperCoin Zone</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <TiPlusOutline className="h-5 w-5 " />{" "}
                  <span className="pl-2">Flipkart Plus Zone</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <LuCodesandbox className="h-5 w-5 " />{" "}
                  <span className="pl-2">Orders</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <CiHeart className="h-5 w-5 " />
                  <span className="pl-2">Wishlist</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <GoTag className="h-5 w-5" />
                  <span className="pl-2">Coupons</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <IoCardOutline className="h-5 w-5" />{" "}
                  <span className="pl-2"> Gift Cards</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <GoBell className="h-5 w-5" />{" "}
                  <span className="pl-2">Notifications</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <MdLogout className="h-5 w-5" />
                  <span className="pl-2">Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex">
          <GrCart className="h-5 w-5" /> Cart{" "}
          <span className="font-bold mx-2">{3}</span>
        </div>
        <div className="flex">
          <AiOutlineShop className="h-5 w-5" /> Become a Seller
        </div>
        <div className="relative flex hover:bg-slate-200 hover:border-2 hover:border-gray-300 p-2 hover:rounded-md group">
          <button
            id="dropdownHoverButton"
            className="text-black  font-medium rounded-lg text-sm px-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            <BsThreeDotsVertical className="h-3.5 w-3.5 text-black" />
          </button>
          <div
            id="dropdownHover"
            className="absolute hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-52 dark:bg-gray-700 group-hover:block  "
            style={{ top: "100%", right: "0", zIndex: 50 }}
          >
            <ul
              className="py-2  text-[12px] text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownHoverButton"
            >
              <li>
                <a
                  href="#"
                  className="flex px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <GoBell className="h-3.5 w-3.5" />{" "}
                  <span className="pl-2">Notification preferences</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <TfiHeadphoneAlt className="h-3.5 w-3.5 " />{" "}
                  <span className="pl-2">24x7 Customer Care</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <FaArrowTrendUp className="h-3.5 w-3.5 " />
                  <span className="pl-2">Advertise</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <MdOutlineFileDownload className="h-3.5 w-3.5" />
                  <span className="pl-2">Download</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
