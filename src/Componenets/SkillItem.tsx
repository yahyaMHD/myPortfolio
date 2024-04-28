import React from "react";

interface Props {
  title: string;
  year: string;
}

const SkillItem = ({ year, title }: Props) => {
  return (
    <div className="mb-[4rem] md:mb-[8rem] ">
      <span className="px-[2rem] text-[#55e6a5] py-[0.9rem] text-[18px] font-bold border-[2px] border-[#55e6a5]">
        {year}
      </span>
      <h1 className=" text-white py-[0.9rem] text-[20px] font-bold sm:text-[25px] md:text-[34px]">
        {title}
      </h1>
      <p className="text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80" >  
      React Native is an open-source framework for building native apps using React. It allows for cross-platform development with a single JavaScript codebase, i started with react native in the beginning og the 2024
      </p>
    </div>
  );
};

export default SkillItem;
