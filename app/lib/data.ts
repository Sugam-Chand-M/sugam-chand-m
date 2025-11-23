import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaYoutube } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import sociopediaApp from "@/public/sociopedia.png";
import myMemoryApp from "@/public/myMemoryApp.jpg";
import { FaSquareLetterboxd, FaSquareYoutube } from "react-icons/fa6";
import { title } from "process";

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
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  // {
  //   name: "Open Source Contribution",
  //   hash: "#opensource", 
  // },
  {
    name: "Hobbies",
    hash: "#hobbies",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const educationData = [
  {
    title: "B.E/B.Tech",
    college: "Bangalore Institute of Technology",
    major: "Computer Science and Engineering",
    description:"Completed my B.E/B.Tech graduation from Bangalore Institute of Technology with a CGPA of 9.44 / 10.0 and was ranked top 2 in my batch.",
    icon: React.createElement(LuGraduationCap),
    date: "August 2019 - May 2023",
  }
];

export const experiencesData = [
  {
    title: "Software Engineer I",
    location: "Bangalore, India",
    company:"Progress",
    description:
      "Currently working as a Software Engineer I with expertise in implementing features for the product ShareFile.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2025 - Present",
  },
  {
    title: "Associate Software Engineer",
    location: "Bangalore, India",
    company:"OpenText",
    description:
      "Worked as an Associate Software Engineer at OpenText with expertise in handling customer issues and implementing features.",
    icon: React.createElement(CgWorkAlt),
    date: "September 2023 - June 2025",
  },
  {
    title: "Software Engineer Intern",
    location: "Bangalore, India",
    company:"MicroFocus [now OpenText]",
    description:
      "Worked as an intern at MicroFocus[now OpenText] with expertise in resolving defects and features.",
    icon: React.createElement(CgWorkAlt),
    date: "February 2023 - August 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Sociopedia React Application",
    description:
      "Developed a Social Media Web Application for users to upload and share social events.",
    tags: ["React","JavaScript", "MongoDB", "Node.js", "Material-UI"],
    imageUrl: sociopediaApp,
  },
  {
    title: "My Memory Application",
    description:
      "Developed a game application themed on superheroes to test memory power and speed in card selection.",
    tags: ["Kotlin", "App Development"],
    imageUrl: myMemoryApp,
  },
] as const;

// export const openSourceData=[

// ];

export const skillsData = [
  "C++",
  "Java",
  "JavaScript",
  "TypeScript",
  "C#",
  ".NET Framework",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "GitHub",
  "GitLab",
  "BitBucket",
  "AWS",
  "SnowFlake",
  "SQL",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
] as const;

export const hobbiesData = [
  {
    title: "LetterBoxd",
    link: "https://boxd.it/7xphV",
    icon: React.createElement(FaSquareLetterboxd),
  },
  {
    title: "YouTube",
    link: "https://www.youtube.com/@Aurum-Chrysus-86",
    icon: React.createElement(FaYoutube),
  },
];