import React, { useEffect, useState } from "react";
// import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";

function Navbar() {
  var [nav, setNav] = useState(false);
  function navClick() {
    setNav(!nav);
  }

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (window.scrollY < 30) {
      setShow(false);
    }
  }, [window.scrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div
      className={
        show
          ? "fixed h-[70px] md:h-[140px] pt-2 mb-4 md:pt-[0]  w-full flex justify-between items-center md:px-[50px] px-[20px]  shadow-xl bg-[#150E28] z-20 transition-all ease-linear duration-100"
          : "h-[70px] md:h-[140px] pt-2 mb-4 md:pt-[0]  w-full flex justify-between items-center md:px-[50px] px-[20px]  shadow-xl bg-[#150E28] z-20 ease-linear duration-100"
      }
    >
      <header className="flex justify-between items-center w-full skill md:px-[128px]">
        {/* logo */}
        <div className=" font-bold text-xl sm:text-[20px] logo">
          <a
            href="/"
            className="flex justify-center items-center hover:text-[#147EFB] font-bold text-[36px] clash-font"
          >
            <span className="text-white">get</span>
            <span className="text-[#D434FE]">linked</span>
          </a>
        </div>

        {/* menu */}
        <div className="hidden md:flex montserrat  text-white text-[16px] font-semibold">
          <ul className="flex justify-between items-center">
            <li className="px-3 cursor-pointer">Timeline</li>
            <li className="px-3 cursor-pointer">Overview</li>
            <li className="px-3 cursor-pointer">
              <p className="pl-2">FAQs</p>
            </li>
            <li className="px-3 cursor-pointer">
              <p className="pl-2">Contact</p>
            </li>
            <li className="px-3 cursor-pointer">
              <button className="px-[52px] py-[16px] ml-[122px] rounded-[4px]">
                Register
              </button>
            </li>
          </ul>
        </div>
        {/* icons */}
        <div
          onClick={navClick}
          className="md:hidden z-20 flex justify-center items-center"
        >
          {!nav ? (
            <img src={close} className="z-20 cursor-pointer" />
          ) : (
            <img src={menu} className="z-20 cursor-pointer" />
          )}
        </div>

        {/* mobile menu */}
        <div
          className={
            !nav
              ? "hidden"
              : "absolute top-0 right-0 z-10  h-[100vh]  flex   w-full"
          }
        >
          <ul className="w-full pl-[47px] pt-[119px] bg-[#150E28] flex flex-col text-white text-[18px] gap-[20px] inter">
            <li>
              <span className="cursor-pointer">Home</span>
            </li>
            <li>
              <span className="cursor-pointer">About</span>
            </li>
            <li>
              <span className="cursor-pointer"> Projetcs </span>
            </li>
            <li>
              <span className="cursor-pointer">Contact</span>
            </li>
            <li>
              <button className="mt-[9px] px-[52px] py-[16px] rounded-[4px]">
                Register
              </button>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
