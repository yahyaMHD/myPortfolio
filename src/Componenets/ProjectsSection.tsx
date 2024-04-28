import React from "react";
const p1 = require("../assets/images/e.jpg");
const p2 = require("../assets/images/f.png");
const p3 = require("../assets/images/p2.jpg");

const ProjectsSection = () => {
  return (
    <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]">
      <h1 className="text-center text-white text-[28px] sm:text-[33px] md:text-[45px] font-bold uppercase">
        Pro<span className="text-yellow-400">ject</span>
      </h1>
      <div  className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        <div data-aos="fade-up"  className="trosform cursor-pointer hover:-translate-y-6 transition-all duration-300 relative w-[100%] h-[200px] md:h-[300px]">
          <img alt="prject" src={p1} className="object-contain" />
        </div>
        <div data-aos="fade-up" data-aos-delay="300" className="trosform cursor-pointer hover:-translate-y-6 transition-all duration-300 relative w-[100%] h-[200px] md:h-[300px]">
          <img alt="prject" src={p2} className="object-contain" height={600} />
        </div>
        <div data-aos="fade-up" data-aos-delay="600" className="trosform cursor-pointer hover:-translate-y-6 transition-all duration-300 relative w-[100%] h-[200px] md:h-[300px]">
          <img alt="prject" src={p3} className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
