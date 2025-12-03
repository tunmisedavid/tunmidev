"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export type ProjectCardsProps = {
  imageSrc: string | StaticImageData;
  projectName: string;
  description: string;
  githubIo: string;
  domain: string;
  languages: string[];
  isOpen?: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
};

import ProjectsModal from "./ProjectsModal";
import { Dispatch, SetStateAction, useState } from "react";
import { FaGithub } from "react-icons/fa";
import RevealText from "./RevealText";

const ProjectCards = ({
  imageSrc,
  projectName,
  description,
  githubIo,
  languages,
  domain,
}: ProjectCardsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <div className="bg-[#4a4e69] h-40 xl:h-80 font-sans w-full flex px-8 xl:px-12 pt-12 xl:pt-20 overflow-hidden rounded-xl ">
        <Image
          src={imageSrc}
          alt="project pic"
          priority
          width={300}
          placeholder="blur"
          loading="eager"
          onClick={() => setIsOpen(true)}
          className="rounded w-full object-fill hover:rotate-3 duration-300 hover:scale-105 cursor-pointer"
        />
          <ProjectsModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            imageSrc={imageSrc}
            projectName={projectName}
            description={description}
            githubIo={githubIo}
            domain={domain}
            languages={languages}
          />
      </div>

      <div className="text-[#4cc9f0] mt-4 xl:mt-6">
        <RevealText>
          <div className="flex justify-between items-center gap-3 w-full ">
            <p className="text-white text-lg md:text-xl xl:text-2xl font-bold">
              {projectName}
            </p>
            <div className="bg-[#4cc9f0] h-px flex-1  "></div>
            <Link href={githubIo} target="_blank" rel="noopener noreferrer" >
              <FaGithub />
            </Link>
          </div>
          <div className="flex gap-1 mt-1 xl:mt-2">
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
                  <p className=" text-xs xl:text-sm capitalize ">{lang}</p>
                  <hr className="w-2 h-[2px] bg-[#4cc9f0] " />
                </span>
              );
            })}
          </div>
        </RevealText>
        <RevealText className="mt-4">
          <p className="text-white text-xs lg:text-sm xl:text-base ">
            {description}
          </p>
        </RevealText>
      </div>
    </div>
  );
};

export default ProjectCards;
