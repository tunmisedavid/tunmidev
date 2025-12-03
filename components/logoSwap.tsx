"use client";

import React, { ReactElement, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  SiBootstrap,
  SiChakraui,
  SiClerk,
  SiCss3,
  SiGithub,
  SiHtml5,
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiShadcnui,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { twMerge } from "tailwind-merge";
import { FaJs } from "react-icons/fa";
import { IconType } from "react-icons";

const languages:langProp[] = [
  { icon: SiReact, key: 1, name: "react" },
  { icon: SiHtml5, key: 1, name: "html" },
  { icon: SiNextdotjs , key: 1, name: "next" },
  { icon: SiTypescript , key: 1, name: "typescript" },
  { icon: FaJs , key: 1, name: "javascript" },
];
const styling:langProp[] = [
  { icon: SiTailwindcss , key: 1, name: "tailwind" },
  { icon: SiCss3, key: 1, name: "css" },
  { icon: SiShadcnui , key: 1, name: "shadcn" },
  { icon: SiChakraui , key: 1, name: "chakraui" },
  { icon: SiBootstrap, key: 1, name: "bootstrap" },
];

const others:langProp[] = [
  { icon: SiSupabase , key: 1, name: "supabase" },
  { icon: SiPrisma , key: 1, name: "prisma" },
  { icon: SiClerk , key: 1, name: "clerk" },
  { icon: SiGithub , key: 1, name: "githug" },
  { icon: SiStripe , key: 1, name: "stripe" },
];

type langProp = {
  icon: IconType;
  key: number;
  name: string
}

export const DivOrigami = () => {
  return (
    <section className="grid place-content-center gap-8 md:flex md:justify-between">
      <LogoRolodex
        items={languages.map(({ icon: Icon, key }) => (
          <LogoItem key={key} className="bg-orange-300 text-neutral-900">
            <Icon />
          </LogoItem>
        ))}
        itemsName={languages.map(({ name }) => name)}
      />
      <LogoRolodex
        items={styling.map(({ icon: Icon, key }) => (
          <LogoItem key={key} className="bg-orange-300 text-neutral-900">
            <Icon />
          </LogoItem>
        ))}
        itemsName={styling.map(({ name }) => name)}
      />
      <LogoRolodex
        items={others.map(({ icon: Icon, key }) => (
          <LogoItem key={key} className="bg-orange-300 text-neutral-900">
            <Icon />
          </LogoItem>
        ))}
        itemsName={others.map(({ name }) => name)}
      />
    </section>
  );
};

const DELAY_IN_MS = 2500;
const TRANSITION_DURATION_IN_SECS = 1.5;


const LogoRolodex = ({ items, itemsName }: { items: ReactElement[], itemsName: string[] }) => {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((pv) => pv + 1);
    }, DELAY_IN_MS);

    return () => {
      clearInterval(intervalRef.current || undefined);
    };
  }, []);

  return (
    <div
      style={{
        transform: "rotateY(-20deg)",
        transformStyle: "preserve-3d",
      }}
      className="relative z-0 h-48 w-48 shrink-0 rounded-xl bg-[#1b263b]"
    >
      <AnimatePresence mode="sync">
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
            zIndex: -index,
            backfaceVisibility: "hidden",
          }}
          key={index}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          initial={{ rotateX: "0deg" }}
          whileInView={{ rotateX: "0deg" }}
          exit={{ rotateX: "-180deg" }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
            zIndex: index,
            backfaceVisibility: "hidden",
          }}
          key={(index + 1) * 2}
          initial={{ rotateX: "180deg" }}
          whileInView={{ rotateX: "0deg" }}
          exit={{ rotateX: "0deg" }}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>
        <hr
          style={{
            transform: "translateZ(1px)",
          }}
          className="absolute left-0 right-0 top-1/2 z-[999999999] -translate-y-1/2 border-t-2 border-[#1b263b] "
        />
        <motion.div
          key={(index + 1) * 3}
          initial={{ opacity: 0, x: -100, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, x: 100, filter: "blur(5px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="z-40 absolute left-0 right-0 bottom-2 font-sans text-[#4cc9f0] font-normal text-xl text-center "
        >
          <p className="capitalize">
          {itemsName[index % itemsName.length]}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const LogoItem = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "grid h-24 w-32 place-content-center rounded-[10px] text-5xl",
        className
      )}
    >
      {children}
    </div>
  );
};
