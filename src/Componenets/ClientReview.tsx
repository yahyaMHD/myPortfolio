import { StarIcon } from "@heroicons/react/20/solid";
import React from "react";

interface Props {
  image: string;
  name: string;
  role: string;
}

const ClientReview = ({ image, name, role }: Props) => {
  return (
    <div className="flex flex-col text-center justify-center">
      <img
        src={image}
        alt="client image"
        width={100}
        height={100}
        className="rounded-full mx-auto gap-6"
      />
      <div className="flex items-center mx-auto">
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-400" />
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-400" />
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-400" />
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-400" />
      </div>
      <h1 className="text-[25px] text-white mt-[1rem]">{name}</h1>
      <p className="text-[18px] text-white opacity-75 mt-[0.5rem] mb-[1.4rem]" >{role}</p>
      <p className="w-[50%] md:w-[80%] mx-auto text-white opacity-[50%] text-[16px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
        dignissimos.
      </p>
    </div>
  );
};

export default ClientReview;
