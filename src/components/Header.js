import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "../constant/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faBars,
  faClose,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import DP from "../assets/my-passport-picture.jpg";
import { useState } from "react";

const Header = () => {
  const [menuBtn, setMenuBtn] = useState(false);
  return (
    <section className="w-full px-8 flex justify-between shadow-md">
      <div className="flex gap-8 items-center">
        <a href="/signup">
          <img src={logo} alt="#" width={100} />
        </a>
        <ul className="md:flex gap-5 hidden ">
          {NavLink.map((link, key) => (
            <li
              key={key}
              className=" text-gray-600 text-sm hover:text-black cursor-pointer"
            >
              {link.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-3 ">
        <div className="sm:bg-gray-200  flex items-center px-1 rounded-md">
          <FontAwesomeIcon icon={faSearch} className="text-gray-600" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none border-none bg-gray-200 p-1 max-w-[100px] text-sm text-gray-600 sm:flex hidden "
          />
        </div>
        <FontAwesomeIcon
          icon={faBagShopping}
          size="lg"
          className="text-gray-600"
        />
        <div className="rounded-full border flex items-center justify-center overflow-hidden px-1">
          <img src={DP} alt="" className="w-[20px] md:w-[30px]" />
        </div>
        <button className="bg-pink-500 px-3 py-1 rounded-md hidden md:flex text-white">
          Upload
        </button>
        <div
          onClick={() => {
            setMenuBtn(!menuBtn);
          }}
        >
          {!menuBtn ? (
            <FontAwesomeIcon
              icon={faBars}
              size="lg"
              className="sm:hidden z-10"
            />
          ) : (
            <FontAwesomeIcon
              icon={faClose}
              className="float-right z-10"
              size="lg"
            />
          )}
        </div>
      </div>
      <div
        className={
          !menuBtn
            ? "hidden"
            : "absolute w-full  top-[13%] left-0 h-full flex flex-col items-center bg-white pb-4"
        }
      >
        <ul className="flex flex-col h-full items-center gap-10">
          {NavLink.map((link, key) => (
            <li
              key={key}
              className=" text-gray-600 text-xl leading-10 hover:text-black cursor-pointer"
            >
              {link.title}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Header;
