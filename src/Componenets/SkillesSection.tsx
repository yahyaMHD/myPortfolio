import React from "react";
import SkillItem from "./SkillItem";
import SkillsLanguage from "./SkillsLanguage";

const SkillesSection = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="text-center text-white text-[28px] sm:text-[33px] md:text-[45px] font-bold uppercase">
        Education & <span className="text-yellow-400">Skills</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid gird-cols-1 md:grid-cols-2 gap-[2rem] items-center justify-center">
        <div>
          <SkillItem title={"React js Developer"} year={"2022 - 2023"} />
          <SkillItem title={"React native Developer"} year={"2023 - 2024"} />
          <SkillsLanguage skill1={"html"} skill2={"css"} skill3={"javascript"} level1={"w-[86%]"} level2={"w-[76%]"} level3={"w-[88%]"} />
        </div>

        <div>
        <SkillItem title={"c++ programming"} year={"2023 - 2024"} />
          <SkillsLanguage skill1={"tailwid css"} skill2={"redux"} skill3={"typeScript"} level1={"w-[82%]"} level2={"w-[76%]"} level3={"w-[70%]"} />
        </div>
      </div>
    </div>
  );
};

export default SkillesSection;
