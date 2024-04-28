import React from "react";


const user = require('../assets/images/about.jpg')
const AboutSection = () => {
  return (
    <div className="bg-[#121121]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[35px] font-bold uppercase text-[#55e6a5] md:[1rem] pb-[1rem]">
            About me
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white  ">
            Transforming <span>visions</span>
          </h2>
          <div className="mb-[3rem] flex item-center   md:space-x-10  ">
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm "></span>
            <p className="text-[18px] text-slate-300 w-[100%]">
            At just 17 years old,  he's a future-forward thinker with a passion for technology and a drive to innovate. Aspiring to become a software engineer, Mahdi Yahya is already making waves as a skilled web and mobile developer, crafting digital solutions that push the boundaries of possibilit            </p>
          </div>
        </div>
          <div data-aos="fade-left" className="lg:w-[500px] mx-auto relative md:mx-0 lg:mt-16 lg:h-[500px] w-[300px] h-[300px] pt-10 ">
            <img
            src={user}
            alt="user"
            className="relative z-[11] w-[100%] h-[100%] object-contain"
            />
            <div className="absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] top-[-1rem] "></div>
          </div>
      </div>
    </div>
  );
};

export default AboutSection;
 