"use client";

import { Button, CloseButton, Drawer, Portal } from "@chakra-ui/react";
import { motion } from "motion/react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

type navLinksProp = {
  navLinks: { tab: string; href: string }[];
  handleScroll: (id: string) => void;
  active: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ navLinks, handleScroll, active, open, setOpen }: navLinksProp) => {
  // const [open, setOpen] = useState(false);

  return (
    <Drawer.Root open={open} size="xs" onOpenChange={(e) => setOpen(e.open)}>
      <Drawer.Trigger asChild>
        <Button variant="outline" color={'white'} size="sm">
          <GiHamburgerMenu />
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content
            style={{
              width: "150px",
              backgroundColor: "#4cc9f0",
              overflow: "hidden",
            }}
          >
            <div className="flex flex-col pt-20 h-full relative">
              {navLinks.map((link, i) => (
                <button
                  className="text-white font-sans w-full relative flex justify-end p-2 "
                  key={i}
                  onClick={() => {
                    setOpen(false);
                    setTimeout(() => {
                      handleScroll(link.href);
                    }, 150);
                  }}
                >
                  <span className=" relative z-10 ">{link.tab}</span>

                  {active === link.href && (
                    <motion.div
                      layoutId="Indicator"
                      className="absolute before:h-6 before:w-8 before:absolute before:bg-[#4cc9f0] before:shadow-[-8px_5px_0] before:shadow-[#4a4e69] before:left-0 before:bottom-full before:rounded-bl-[22px] after:rounded-tl-[22px] after:absolute after:h-6 after:w-8 after:bg-[#4cc9f0] after:left-0 after:top-full after:shadow-[#4a4e69] after:shadow-[-8px_-5px_0] inset-0 z-0 bg-[#4a4e69]  "
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

export default Sidebar;
