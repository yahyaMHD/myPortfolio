import { TypeAnimation } from 'react-type-animation';

export default function TextEffect(){
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'web developer',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'mobile developer',
        1500,
        'Coder',
        1500,
        'Programmer',
        1500
      ]}
      speed={50}
      className="text-[2rem] md:text-[3rem]  font-bold uppercase text-[#55e6a5]"
      repeat={Infinity}
    />
  );
};