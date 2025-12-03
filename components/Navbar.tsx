"use client";

import { useTheme } from "next-themes";
import { LuSunMoon } from "react-icons/lu";
import { ColourfulText } from "./ui/shadcn-io/colourful-text";
import Container from "./Container";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Sidebar from "./Sidebar";

import { useScroll } from "@/hooks/UseScroll";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setActive } from "@/store/ScrollSlice";


const Navbar = () => {
  const {handleScroll} = useScroll();
  const active = useSelector((state: RootState)  => state.scroll.active)
  // const { theme, setTheme } = useTheme();

  const navLinks = [
    { tab: "About", href: "about" },
    { tab: "Certs", href: "certification" },
    { tab: "Projects", href: "projects" },
    { tab: "Skills", href: "skills" },
    { tab: "Contact", href: "contact" },
  ];


  useEffect(() => {
    const handleScrollToSection = () => {
      const scrollY = window.scrollY + window.innerHeight / 2;

      for (const [_, ref] of Object.entries(navLinks)) {
        const el = document.getElementById(ref.href);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (scrollY > offsetTop && scrollY < offsetTop + offsetHeight) {
            setActive(ref.href);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScrollToSection);
    return () => window.removeEventListener("scroll", handleScrollToSection);
  }, []);


  return (
    <div className="bg-[#1b263b]/70 backdrop-blur-md h-14 fixed z-20 left-0 right-0 top-0 ">
      <Container className="flex justify-between items-center h-full  ">
        <div className="font-sans italic font-bold lg:text-2xl ">
          <Link href={"/"}>
            <ColourfulText
              text="TummyDev"
              colors={[
                "#e0e1dd",
                "#778da9",
                "#415a77",
                "#403d39",
                "#e0afa0",
                "#bcb8b1",
                "#463f3a",
              ]}
            />
          </Link>
        </div>
        <div className="lg:hidden">
          <Sidebar navLinks={navLinks} active={active} handleScroll={handleScroll} />
        </div>
        <div className="hidden lg:block">
          <div className="text-white flex gap-2 text-lg">
            {navLinks.map((link) => (
              <button
                className="relative text-[#4cc9f0] "
                onClick={() => handleScroll(link.href)}
                key={link.href}
              >
                <span className="relative z-10 p-3 ">{link.tab}</span>
                {active === link.href && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 z-0 rounded-2xl bg-[#4a4e69]  "
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* <div> */}
          {/* <LuSunMoon
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            /> */}
          {/* </div> */}
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
