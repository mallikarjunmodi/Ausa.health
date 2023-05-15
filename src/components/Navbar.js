import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import logo from "../assets/logo.png";
import hamy from "../assets/ham.svg";
import cross from "../assets/cross.svg";
import white_logo from "../assets/white_logo.png";
import ausa_logo from "../assets/ausaLogo.png";
import ausalogowhite from "../assets/ausalogowhite.png";

const Navbar = () => {
  const [hamclicked, sethamclicked] = useState(true);
  const [showSubNav, setShowSubNav] = useState(false);

  const handleNavItemClick = () => {
    setShowSubNav(true);
  };

  return (
    <div className="flex flex-col sm:mb-[12rem]  bg-white">
        <div className={hamclicked ? "navbar-white" : "navbar-black"}>
        <img className=" w-56 mt-8 " src={ausa_logo}></img>
        <p className="font-montserrat text-lg mr-4">Prar.io</p>
        {/* {hamclicked ? (
          <img className=" w-56 mt-8 " src={ausa_logo}></img>
        ) : (
          <img className=" w-56 -mt-4 -ml-12 " src={ausalogowhite}></img>
        )}

        <button
          onClick={() => {
            sethamclicked(!hamclicked);
          }}
          className="sm:hidden"
        >
          {hamclicked ? (
            <img className="w-8" src={hamy}></img>
          ) : (
            <img className="w-4 mr-2" src={cross}></img>
          )}
        </button> */}

        {/* <ul className="hidden sm:desktop-nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-bold underline underline-offset-8"
                : "transition duration-200 ease-in-out hover:scale-105"
            }
          >
            <li className="">Home</li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-bold underline underline-offset-8"
                : "transition duration-200 ease-in-out hover:scale-105"
            }
            to="/about"
          >
            <li className="">About us</li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-bold underline underline-offset-8"
                : "transition duration-200 ease-in-out hover:scale-105"
            }
            to="/pod"
          >
            <li className="">Pod</li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-bold underline underline-offset-8"
                : "transition duration-200 ease-in-out hover:scale-105"
            }
            to="/ausa"
            onClick={handleNavItemClick}
          >
            <li className="">ausa.health</li>
          </NavLink>
        </ul> */}

        {/* {showSubNav && (
        <div className="sub-nav">
          <ul>
            <li>
              <NavLink to="/" activeClassName="active">
                <img className=" h-3 w-50 " src={ausa_logo}></img>
              </NavLink>
            </li>
            <li><NavLink to="/home" activeClassName="active">Prar.io</NavLink></li>
          </ul>
        </div>
      )} */}

      </div>

      {/* <ul
        className={hamclicked ? "hidden sm:hidden" : "unhidden"}
        onClick={() => {
          sethamclicked(!hamclicked);
        }}
      >
        <NavLink to="/">
          <li className="mb-6 border-b-2 border-gray1 pb-6">Home</li>
        </NavLink>
        <NavLink to="/about">
          <li className="mb-6 border-b-2 border-gray1 pb-6">About us</li>
        </NavLink>
        <NavLink to="/pod">
          <li className="mb-6 border-b-2 border-gray1 pb-6">Pod</li>
        </NavLink>
        <NavLink to="/ausa">
          <li className="mb-6 border-b-2 border-gray1 pb-6">ausa.health</li>
        </NavLink>
      </ul> */}
    </div>
  );
};

export default Navbar;
