import React from "react";
import "../index.css";
import { Bars3Icon } from "@heroicons/react/20/solid";

interface Props {
  openNav:() => void
}

const Nav = ({openNav}:Props) => {
  const nav_links = ["Home", "SERVICES", "ABOUT", "PROJECT", "BLOG", "CONTACT"];
  return (
    <div className="w-[100%] sticky z-[1000] top-0 h-[12vh] bg-[#141c27] shadow-md">
      <div className="flex items-center justify-between w-[80%] h-[100%] mx-auto">
        <h1 className="flex-[0.6] cursor-pointer text-white text-[25px] font-bold">
          MHD
          <span className="text-yellow-300">TECH</span>
        </h1>
        {nav_links.map((link, index) => {
          return (
            <div
              key={index}
              className="relative font-semibold text-white cursor-pointer text-[17px] w-fit md:block after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hidden "
            >
              {link}
            </div>
          );
        })}

        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden  h-[2rem] cursor-pointer text-yellow-300 " />
        </div>
      </div>
    </div>
  );
};

export default Nav;
