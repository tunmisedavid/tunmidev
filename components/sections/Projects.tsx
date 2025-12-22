"use client";

import { motion } from "motion/react";
import Container from "../Container";
import ProjectCards from "../ProjectCards";

import TempNextImg from "@/public/temp-next-img.png";
import ThomasImg from "@/public/thomasdev-img.png"
import DevImg from "@/public/developerPort-img.png";
import TechImg from "@/public/technologist-img.png";
import CinemaImg from "@/public/cinema.png";
import TaskImg from "@/public/taskapp-img.png";
import Taskmate from "@/public/taskmate.png";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const project1langs = ["typescript", "nextjs", "supabase", "shadcn"];
  const project2langs = ["javascript", "react", "framer"];
  const project3langs = ["javascript", "html", "css", "localstorage"];

  return (
    <div className="bg-[#1b263b] py-14 xl:py-24 ">
      <Container className="font-sans">
        <div className="flex items-center gap-3  xl:gap-5 pb-4 xl:pb-8">
          <Link
            href="https://github.com/tunmisedavid"
            target="_blank"
            // rel="noopener noreferrer"
            className=" text-[#4cc9f0] font-medium"
          >
            <FaGithub />
          </Link>
          <div className="bg-[#4a4e69] h-px flex-1 "></div>
          <motion.p
            initial={{ translateX: 50, opacity: 0, filter: "blur(5px)" }}
            whileInView={{ translateX: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="text-[#4cc9f0] text-xl md:text-2xl xl:text-4xl text-end "
          >
            Projects
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          <ProjectCards
            imageSrc={TempNextImg}
            projectName="Next Store"
            description="This is nextjs fullstack store project. clean UI , easy login and signup and become a buyer or a seller with secured payment.   "
            githubIo="https://github.com/tunmisedavid/temp-next-store"
            languages={project1langs}
            domain={"https://temp-next-store-one.vercel.app/"}
          />
          <ProjectCards
            imageSrc={ThomasImg}
            projectName="Portfolio"
            description="This is react portfolio app. clean UI , easy login and signup and become a buyer or a seller with secured payment.   "
            githubIo="https://github.com/tunmisedavid/thomas-dev"
            languages={project2langs}
            domain={"https://thomasportfolioweb.netlify.app/"}
          />
          <ProjectCards
            imageSrc={DevImg}
            projectName="Portfolio"
            description="This is developer portfolio design. clean UI , easy login and signup and become a buyer or a seller with secured payment.   "
            githubIo="https://github.com/tunmisedavid/developer"
            languages={project2langs}
            domain={"https://classy-developer.netlify.app/"}
          />
          <ProjectCards
            imageSrc={TechImg}
            projectName="Portfolio"
            description="This is react portolio app. clean UI , easy login and signup and become a buyer or a seller with secured payment.   "
            githubIo="https://github.com/tunmisedavid/technologistApp"
            languages={project1langs}
            domain={"https://technologistporfolio.netlify.app/"}
          />
          <ProjectCards
            imageSrc={CinemaImg}
            projectName="Cinematewe"
            description="This is react portolio app. clean UI , easy login and signup and become a buyer or a seller with secured payment.   "
            githubIo="https://github.com/tunmisedavid/taskApp"
            languages={project1langs}
            domain={"https://cinematewe.netlify.app/"}
          />
          <ProjectCards
            imageSrc={TaskImg}
            projectName="TaskApp"
            description="This is react task app. clean UI , create tasks and follow up on them   "
            githubIo="https://github.com/tunmisedavid/taskApp"
            languages={project3langs}
            domain={"https://taskappmate.netlify.app/"}
          />
          <ProjectCards
            imageSrc={Taskmate}
            projectName="TaskApp"
            description="This is react task app. clean UI , create tasks and follow up on them   "
            githubIo="https://github.com/tunmisedavid/taskmate"
            languages={project3langs}
            domain={"https://addtaskmate.netlify.app/"}
          />
        </div>
      </Container>
    </div>
  );
};

export default Projects;
