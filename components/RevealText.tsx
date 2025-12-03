'use client';

import { cn } from "@/lib/utils";
import {  motion } from "motion/react"
import React from "react";

type RevealTextProp = {
  children: React.ReactNode;
  className?: string;
}


const RevealText = ({children, className}: RevealTextProp) => {
  return (
    <div>
      <div className={cn("relative overflow-hidden ", className)}>
        <motion.div
          className="relative z-10 "
          initial={{ y: "70%", opacity: 0 , filter: 'blur(5px)'}}
          whileInView={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true}}
        >
          {children}
        </motion.div>
        <motion.div
          className="absolute top-0 left-0 w-full h-full  bg-[#4cc9f0] "
          initial={{ x: "0%" }}
          whileInView={{ x: "100%", opacity: [1, 1, 0] }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
}

export default RevealText
