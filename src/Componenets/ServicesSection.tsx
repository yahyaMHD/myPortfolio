import { CodeBracketIcon, RocketLaunchIcon } from "@heroicons/react/20/solid";
import React from "react";

const ServicesSection = () => {
  return (
    <div className="bg-[#121121] pt-[4rem] md:pt-[8rem] pb-[5rem]">
      <p className="text-center text-white text-[28px] sm:text-[33px] md:text-[45px] font-bold uppercase">
        My <span className="text-yellow-400">services</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mt-[4rem]  gap-[3rem] mx-auto text-white ">
        <div className="">
          <div className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]">
            <CodeBracketIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3faeb]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem] font-bold">
              Frontend
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              nemo, labore excepturi distinctio modi culpa iste esse, cumque
            </p>
          </div>
        </div>
        <div className="">
          <div className="bg-orange-700 hover:scale-110 transform transition-all duration-300  uppercase font-semibold text-center p-[2rem]">
            <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3faeb]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem] font-bold">
              backend
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              nemo, labore excepturi distinctio modi culpa iste esse, cumque
            </p>
          </div>
        </div>
        <div className="">
          <div className="bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]">
            <CodeBracketIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3faeb]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem] font-bold">
              fullStack
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              nemo, labore excepturi distinctio modi culpa iste esse, cumque
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServicesSection;






