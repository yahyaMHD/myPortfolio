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
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
        praesentium quisquam harum excepturi nihil reiciendis deleniti debitis
        possimus, magni earum.
      </p>
    </div>
  );
};

export default SkillItem;
