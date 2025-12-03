'use client'

import { useScroll } from "@/hooks/UseScroll";
import Container from "../Container";
import RevealText from "../RevealText";
import WaterDropGrid from "../WaterDrop";

const About = () => {
  const {handleScroll} = useScroll();
  return (
    <div className=" pt-28 pb-20 xl:pt-32 sm:h-[420px] lg:h-[480px] xl:h-[680px] flex justify-center items-center bg-[#4a4e69] ">
      <Container className="relative h-full flex items-center sm:max-w-2xl lg:max-w-3xl xl:max-w-5xl ">
        <div className="font-sans">
          <RevealText>
            <p className="text-2xl xs:text-3xl sm:text-4xl xl:text-6xl text-white font-bold z-10 relative">
              Hi, This is Tummy<span className="text-[#4cc9f0]">Dev</span>
            </p>
          </RevealText>
          <RevealText className=" mt-1 lg:mt-2 xl:mt-4">
            <p className="text-white text-lg sm:text-xl xl:text-3xl font-semibold ">
              i'm a <span className="text-[#4cc9f0] ">Front End Developer</span>
            </p>
          </RevealText>
          <RevealText className="mt-1 lg:mt-2 xl:mt-4">
            <p className="text-white text-xs sm:text-sm xl:text-lg font-bold w-[270px] xs:w-[380px] lg:w-[420px] xl:w-[630px] ">
              I have spent the last 12 months learning and
              <span className="text-[#1b263b] relative z-10 font-bold"> honing my skills in </span>
               front end development,my aim is to build and bring solutions to
              real world problems.
            </p>
          </RevealText>
          <RevealText className="mt-2 xl:mt-4 ">
            <button
              onClick={() => handleScroll("contact")}
              className="bg-[#4cc9f0] text-black text-xs xl:text-sm font-semibold w-[85px] xl:w-28 h-7 xl:h-9 rounded-[5px] xl:rounded-[8px] cursor-pointer "
            >
              Contact Me
            </button>
          </RevealText>
        </div>
        <div className="hidden sm:block absolute top-0 right-0">
          <WaterDropGrid />
        </div>
      </Container>
    </div>
  );
};

export default About;
