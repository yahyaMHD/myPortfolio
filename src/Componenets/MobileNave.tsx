import { XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";

interface Props {
    nav : boolean;
    closeNav:() => void;
}


const MobileNave = ({nav , closeNav}: Props) => {
  const nav_links = ["Home", "SERVICES", "ABOUT", "PROJECT", "BLOG", "CONTACT"];

  const navanimation = nav?'translate-x-0': 'translate-x-[-100%]'

  return (
    <div
      className={`fixed ${navanimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000] bg-[#09101a]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        {nav_links.map((link, index) => {
          return (
            <div
              key={index}
              className="relative font-semibold text-white cursor-pointer text-[27px] w-fit md:block after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center mb-[2rem]  "
            >
              {link}
            </div>
          );
        })}
      </div>

      <div onClick={closeNav} className="top-[2rem] right-[2rem] absolute cursor-pointer w-[2rem] h-[2rem] text-yellow-300">
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNave;
