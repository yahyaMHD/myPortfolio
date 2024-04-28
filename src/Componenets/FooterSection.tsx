import { DevicePhoneMobileIcon, MapIcon } from "@heroicons/react/20/solid";
import React from "react";

const FooterSection = () => {
  return (
    <div className="pt-[8rem] pb-[4rem] bg-[#02050a] ">
      <div className="grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[3rem]">
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
            <MapIcon className="md:w-[5rem] md:h-[5rem] w-[3.5rem] h-[3.5rem]" />
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white ">
              Address
            </h1>
            <p className="text-[17px] w-[90%] text-white opacity-60">
              Tipaza , bouharoune{" "}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
            <DevicePhoneMobileIcon className="md:w-[5rem] md:h-[5rem] w-[3.5rem] h-[3.5rem]" />
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white ">
              Phone
            </h1>
            <p className="text-[17px] w-[90%] text-white opacity-60">
              +213556268876
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
            <MapIcon className="md:w-[5rem] md:h-[5rem] w-[3.5rem] h-[3.5rem]" />
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white ">
              Send Us Email
            </h1>
            <p className="text-[17px] w-[90%] text-white opacity-60">
              yahyamahdi4242@gmail.com
            </p>
          </div>
        </div>
      </div>

      <div  className="md:w-[70%] w-[80%] mx-auto mt-[2rem] grid grid-cols-1 md:grid-cols-2 justify-center items-center text-white opacity-60 font-bold gap-4" >
        <h1 className="flex-[0.6]">Mahdi Yahya 2024 | All Right Reserved</h1>
        <div style={{display:'flex', gap:20}}>
          <p>Terms & Condition</p>
          <p>Privacy Policy</p>
          <p>Sitemap</p>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
