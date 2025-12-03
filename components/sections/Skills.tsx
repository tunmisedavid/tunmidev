"use client";

import { motion } from "motion/react";
import Container from "../Container";
import { DivOrigami } from "../logoSwap";

const Skills = () => {
  return (
    <div className="bg-[#4a4e69] pt-6 xl:pt-10 pb-16 xl:pb-20 ">
      <Container className="">
        <div className="flex items-center gap-5 pb-8">
          <div className="bg-[#4cc9f0] h-px flex-1 "></div>
          <motion.p
            initial={{ translateX: 50, opacity: 0, filter: "blur(5px)" }}
            whileInView={{ translateX: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="text-[#4cc9f0] text-xl md:text-2xl xl:text-4xl text-end  "
          >
            Skills
          </motion.p>
        </div>
        <div>
          <DivOrigami />
        </div>
      </Container>
    </div>
  );
};

export default Skills;
