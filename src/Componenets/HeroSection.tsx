import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";

const bannerImage = require("../assets/images/banner.jpg");
const user = require("../assets/images/about.jpg");
const HeroSection = () => {
  return (
    <div
      className="h-[88vh] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-white font-bold text-[35px] md:text-[50px]">
            HI, I'M <span className="text-yellow-400">YAHYA!</span>
          </h1>
          <TextEffect />
          <p className="mt-[2rem] text-[20px] text-[#ffffff92]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit,
            eligendi laboriosam cum odio doloremque porro perspiciatis. Nisi
            dolor quam veniam id repudiandae deserunt iure minus, eius esse
            dolore laudantium sequi.
          </p>
        </div>
        <div className="w-[500px] lg:flex hidden bg-[#55e6a5] rounded-full h-[500px] z-[10000]">
          <img src={user} alt="user" className="rounded-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
