import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Studies",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Újratervezés Program alapozó képzés",
    location: "Nemzeti Szakképzési és Felnőttképzési Hivatal - Online Course",
    description:
      "In the course, I acquired fundamental digital skills and gained insight into programming by building a website. I developed practical expertise in using Windows, understanding networks, and mastering development methodologies like Git. Additionally, I acquired the basics of HTML, CSS, and Javascript for web development.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "The Frontend Developer Career Path",
    location: "Scrimba - Online Course",
    description:
      "In Scrimba's 'Frontend Developer Career Path,' I mastered key skills in HTML, CSS, and JavaScript, delving into advanced areas like responsive design and popular framework such as React.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Junior Frontend Developer Course",
    location: "CodeCool - Online Course",
    description:
      "In the Codecool Frontend Developer training, I began with HTML and CSS, mastering the basics and moving on to building responsive websites. I then delved into JavaScript, Node.js for backend development, and concluded by learning the React.js framework, ultimately preparing me for a role as a Junior Frontend Developer through hands-on application projects.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "Vite",
  "Framer Motion",
  "DaisyUI"
] as const;