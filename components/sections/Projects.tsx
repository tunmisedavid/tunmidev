"use client";

import { motion } from "motion/react";
import Container from "../Container";
import ProjectCards from "../ProjectCards";

import TempNextImg from "@/public/temp-next-img.png";
import ThomasImg from "@/public/thomasdev-img.png";
import DevImg from "@/public/developerPort-img.png";
import TechImg from "@/public/technologist-img.png";
import CinemaImg from "@/public/cinema.png";
import TaskImg from "@/public/taskapp-img.png";
import Taskmate from "@/public/taskmate.png";
import RockPaper from "@/public/rock-paper.png";
import calculator from "@/public/calculator.png";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const project1langs = [
    "typescript",
    "nextjs",
    "supabase",
    "shadcn",
    "motion",
  ];
  const project2langs = ["javascript", "react", "react hooks"];
  const project3langs = ["javascript", "html", "css", "localstorage"];
  const project4langs = ["nextjs", "typescript", "tailwind", "redux"];
  const taskMate = ["javascript", "react", "css", "localstorage"];

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
            fullDesc="A scalable, full-stack E-commerce platform engineered with Next.js and TypeScript, featuring a robust administrative suite and secure payment processing. The application leverages a headless architecture to separate concern between a high-performance storefront and a secure Supabase backend, providing a seamless shopping experience across all device types. "
            features={[
              "Developed a full-stack e-commerce web application using Next.js with server-side rendering and static site generation",
              "Implemented user authentication and protected routes with Clerk for secure login, logout, and role-based access",
              "Developed admin dashboard for managing and creating products, orders, and checking reviews",
              "Integrated Stripe payments for seamless and secure transactions",
              "Built product creation, order management, and review systems to enhance user experience",
              "Leveraged Supabase and Prisma for database management and API interactions",
              "Designed UI components with Shadcn UI and styled responsive interfaces using Tailwind CSS",
              "Optimized performance, responsive design, and accessibility for desktop and mobile platforms",
            ]}
            githubIo="https://github.com/tunmisedavid/temp-next-store"
            languages={project1langs}
            domain={"https://temp-next-store-one.vercel.app/"}
          />
          <ProjectCards
            imageSrc={ThomasImg}
            projectName="Portfolio"
            description="This is react portfolio app. clean UI . easy navigation and responsive design.  "
            fullDesc="  This is developer portfolio design with clean UI and easy navigation. Built using React and Tailwind CSS, it features responsive design, smooth animations with Framer Motion, and showcases various projects and skills sections effectively. "
            features={[
              "Clean and intuitive UI/UX design for enhanced user engagement",
              "Responsive design for optimal viewing across devices",
              "Utilized framer-motion for smooth animations and transitions",
              "Integrated modern web development practices",
            ]}
            githubIo="https://github.com/tunmisedavid/thomas-dev"
            languages={project2langs}
            domain={"https://thomasportfolioweb.netlify.app/"}
          />
          <ProjectCards
            imageSrc={DevImg}
            projectName="Portfolio"
            description="This is developer portfolio design with clean UI and easy navigation.  "
            fullDesc="  This is developer portfolio design with clean UI and easy navigation. Built using React and Tailwind CSS, it features responsive design, smooth animations with Framer Motion, and showcases various projects and skills sections effectively. "
            features={[
              "Clean and intuitive UI/UX design for enhanced user engagement",
              "Responsive design for optimal viewing across devices",
              "Utilized framer-motion for smooth animations and transitions",
              "Integrated modern web development practices",
            ]}
            githubIo="https://github.com/tunmisedavid/developer"
            languages={project2langs}
            domain={"https://classy-developer.netlify.app/"}
          />
          <ProjectCards
            imageSrc={TechImg}
            projectName="Portfolio"
            description="This is technologist portfolio design with clean UI and easy navigation.  "
            fullDesc="This is technologist portfolio design with clean UI and easy navigation. Built using React and Tailwind CSS, it features responsive design, smooth animations with Framer Motion, and showcases various projects and skills sections effectively. "
            features={[
              "Clean and intuitive UI/UX design for enhanced user engagement",
              "Responsive design for optimal viewing across devices",
              "Utilized framer-motion for smooth animations and transitions",
              "Integrated modern web development practices",
            ]}
            githubIo="https://github.com/tunmisedavid/technologistApp"
            languages={project1langs}
            domain={"https://technologistporfolio.netlify.app/"}
          />
          <ProjectCards
            imageSrc={CinemaImg}
            projectName="Cinematewe"
            description="Developed a dynamic movie browsing web application using React and The Movie Database (TMDb) API."
            fullDesc="Developed a dynamic movie browsing web application using React and The Movie Database (TMDb) API, featuring real-time search, genre filtering, and responsive design for an engaging user experience."
            features={[
              "Integrated TMDb API for dynamic movie data retrieval",
              "Implemented real-time search functionality with debouncing",
              "Developed genre-based filtering for tailored movie discovery",
              "Responsive design for optimal viewing across devices",
              "Utilized React hooks for efficient state and lifecycle management",
              "Clean and intuitive UI/UX design for enhanced user engagement",
            ]}
            githubIo="https://github.com/tunmisedavid/taskApp"
            languages={project1langs}
            domain={"https://cinematewe.netlify.app/"}
          />
          <ProjectCards
            imageSrc={calculator}
            projectName="Calculator Web App"
            description="Built an interactive calculator web application using React and TypeScrip."
            fullDesc="Built an interactive calculator web application using React and TypeScript, leveraging Redux for centralized state management, with validated operator input, decimal handling, keyboard shortcuts, and real-time expression evaluation."
            features={[
              "Prevented invalid operator sequences (++, **)",
              "Implemented decimal validation per operand",
              "Handled safe calculation and error states",
              "Added full keyboard support",
              "Used string-based display with controlled parsing",
              "Dynamic theme switching (light, dark, system)",
              "Centralized state management with Redux",
              "Component-based architecture (Display, Keypad, ThemeSwitcher)",
            ]}
            githubIo="https://github.com/tunmisedavid/calculator-webApp"
            languages={project4langs}
            domain={"https://calc-webapp-p.netlify.app/"}
          />
          <ProjectCards
            imageSrc={Taskmate}
            projectName="Task Management App"
            description="TaskMate is a React-based task management application that allows users to create, edit, delete, and manage tasks with timestamps."
            fullDesc="TaskMate is a React-based task management application that allows users to create, edit, delete, and manage tasks with timestamps. It features dynamic theming, controlled inputs, and real-time UI updates   "
            features={[
              "Add new tasks with timestamps",
              "Edit existing tasks using controlled inputs",
              "Delete individual tasks",
              "Clear all tasks at once",
              "Real-time task count display",
              "Dynamic theme switching (light, dark, gradient themes)",
              "Controlled form handling with validation",
              "Component-based architecture (Header, AddTask, ShowTask)",
            ]}
            githubIo="https://github.com/tunmisedavid/taskmate"
            languages={taskMate}
            domain={"https://addtaskmate.netlify.app/"}
          />
          <ProjectCards
            imageSrc={RockPaper}
            projectName="Rock-Paper-Scissors"
            fullDesc="An interactive Rock–Paper–Scissors browser game built with JavaScript and CSS. Includes persistent score tracking, keyboard controls, autoplay mode, and responsive UI."
            description="An interactive Rock–Paper–Scissors browser game built with JavaScript and CSS. "
            features={[
              "Implemented core game logic using conditional statements",
              "Persistent score tracking using localStorage",
              "Keyboard controls for faster gameplay (R, P, S)",
              "Autoplay mode using setInterval",
              "Dynamic UI updates without page reload",
              "Randomized computer move generation",
              "Clean separation of game logic and UI updates",
            ]}
            githubIo="https://github.com/tunmisedavid/Rock-paper-scissors-game"
            languages={project3langs}
            domain={"https://tunmisedavid.github.io/Rock-paper-scissors-game/"}
          />
        </div>
      </Container>
    </div>
  );
};

export default Projects;
