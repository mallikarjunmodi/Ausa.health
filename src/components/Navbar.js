import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import ausa_logo from "../assets/ausaLogo.png";

const Navbar = () => {
  const [hamclicked, sethamclicked] = useState(true);

  return (
    <div className="flex flex-col sm:mb-[12rem]  bg-white">
        <div className={hamclicked ? "navbar-white" : "navbar-black"}>
        <img className=" sm:w-56 sm:mt-8 mt-5 w-32 sm:-ml-1 -ml-8" src={ausa_logo}></img>
        <p className="font-montserrat sm:text-lg text-sm sm:mr-10 -mr-4"><a href="https://calendar.notion.so/meet/mallikarjun/6e363c4h" target="_blank">Connect</a> </p>
        </div>
    </div>
  );
};

export default Navbar;
