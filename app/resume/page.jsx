"use client";
import Link from "next/link";
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
  title: "About Me",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat totam quaerat iste sint reprehenderit porro.",
  info:[
    {
      fieldName: "Name",
      fieldValue: "Parulian Ramot Manik"
    },
    {
      fieldName: "Phone",
      fieldValue: "+6289-6734-19632"
    },
    {
      fieldName: "Work Experience"
      fieldValue: "6+ Years"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indonesia"
    },
    {
      fieldName: "E-Mail",
      fieldValue: "parulianrmanik@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Languages",
      fieldValue: "Indonesia, English"
    },
  ],
};

const page = () => {
    return <div>Resume</div>;
};

export default page;
