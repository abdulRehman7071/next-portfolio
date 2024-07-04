import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import cryptoStream from "@/public/crypto-stream.png";
import digiShop from "@/public/digishop.png";
import reviewHub from "@/public/review-hub.png";

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
    title: "Crypto Stream",
    description:
      "Developed a real-time cryptocurrency tracking application using React and Material UI.",
    tags: ["React", "Material UI", "Framer", "Chartjs"],
    imageUrl: cryptoStream,
  },
  {
    title: "Digi Shop",
    description:
      "Designed and built an ecommerce web application from front to back utilizing MongoDB, Express, React, Node.js (MERN)",
    tags: ["React", "Next.js",  "Redux", "Tailwind", "Express", "MongoDB" ],
    imageUrl: digiShop,
  },
  {
    title: "Review Hub",
    description:
      "Created a platform for users to share movie and web series reviews with upload and OTP authentication functionality.",
    tags: ["React", "Firebase", "Tailwind"],
    imageUrl: reviewHub,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Vue.js",
  "Nuxt.js",
  "Vuex",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
] as const;
