import { AnimatePresence, motion } from "motion/react";

import Image from "next/image";
import Link from "next/link";

import { FaGithub } from "react-icons/fa";
import { CiShare1 } from "react-icons/ci";

import { ProjectCardsProps } from "./ProjectCards";
import { useEffect } from "react";

const ProjectsModal = ({
  isOpen,
  setIsOpen,
  imageSrc,
  projectName,
  domain,
  features,
  fullDesc,
  githubIo,
  languages,
}: ProjectCardsProps) => {
  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen?.(false)}
          className="backdrop-blur-md font-sans fixed inset-0 z-20 grid place-content-center "
        >
          <motion.div
            className="bg-[#4a4e69] relative z-50 rounded-xl w-[290px] md:w-[500px] overflow-y-auto "
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <p className="text-white text-xl xl:text-2xl p-4 font-extrabold">
                Project
              </p>
              <Image
                src={imageSrc}
                alt="temp store image"
                priority
                width={500}
                height={100}
                placeholder="blur"
                className=" w-full object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-white text-xl xl:text-2xl font-bold">
                {projectName}
              </p>
              <div className="flex gap-1 pt-1">
                {languages.map((lang, i) => {
                  return i === languages.length - 1 ? (
                    <p
                      key={i}
                      className="text-xs xl:text-sm text-[#4cc9f0] capitalize "
                    >
                      {lang}
                    </p>
                  ) : (
                    <span
                      key={i}
                      className="flex items-center gap-1 text-[#4cc9f0]"
                    >
                      <p className="text-xs xl:text-sm capitalize ">{lang}</p>
                      <hr className="w-2 h-[2px] bg-[#4cc9f0]   text-[#4cc9f0] " />
                    </span>
                  );
                })}
              </div>
              <p className="text-white text-xs xl:text-sm pt-4">{fullDesc}</p>
              <div className=" mt-2 md:mt-3 xl:mt-5">
                <p className="text-white  text-xl xl:text-2xl">Features</p>
                <ul>
                  {features?.map((feature, i) => (
                    <li className="text-[#4cc9f0] text-xs xl:text-sm" key={i}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-white text-lg xl:text-xl pt-4 font-bold">
                Project Links
              </p>
              <div className="flex pt-1 gap-3 items-center ">
                <div>
                  <Link
                    href={githubIo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-[#4cc9f0] font-medium"
                  >
                    <FaGithub />
                    <p className="text-white text-xs xl:text-sm hover:text-[#4cc9f0] font-medium">
                      Source Code
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    href={domain}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-[#4cc9f0]"
                  >
                    <CiShare1 />
                    <p className="text-white text-xs xl:text-sm hover:text-[#4cc9f0] ">
                      Live demo
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectsModal;
