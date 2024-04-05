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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full Stack Developer",
    location: "Wohlig Transformation",
    description:
      "Built scalable e-commerce frontend for fantasy sports, enabling seamless point redemption. Led engineering for dynamic news portal similar to Cricbuzz, providing real-time updates with engaging UX. Implemented authentication with Cognito, integrated AI feedback like ChatGPT. Led teams in crafting flawless websites and managed complex full-stack projects for cohesive user experiences.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - Present",
  },
  {
    title: "Front-End Developer",
    location: "Topcentile",
    description:
      "Crafted a Profile Management web app catering to both students and professionals. Allows registration of personal details, visible to admins for team assignments and feedback. Engaged in numerous diverse projects, utilizing React, Redux, HTML, CSS, JavaScript, Material UI, and SCSS functionalities.",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  },
  {
    title: "Bachelor of Engineering",
    location: "Don Bosco Institute of Technology",
    description:
      "Don Bosco Tech grad with BE. Led as Cultural Secretary, organizing events, while diving into Robotics, Drama, and NSS.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2022",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Tailwind"],
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
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
