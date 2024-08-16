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

import {
    SiTailwindcss,
    SiNextdotjs,
    SiAdobephotoshop,
    SiCoreldraw,
    SiAdobeillustrator,
} from "react-icons/si";

const about = {
    title: "About Me",
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat totam quaerat iste sint reprehenderit porro.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Parulian Ramot Manik",
        },
        {
            fieldName: "Phone",
            fieldValue: "+6289-6734-19632",
        },
        {
            fieldName: "telegram",
            fieldValue: "@lianrosado1",
        },
        {
            fieldName: "E-Mail",
            fieldValue: "parulianrmanik@gmail.com",
        },
        {
            fieldName: "Work Experience",
            fieldValue: "6+ Years",
        },
        {
            fieldName: "Nationality",
            fieldValue: "Indonesia",
        },

        {
            fieldName: "Freelance",
            fieldValue: "Available",
        },
        {
            fieldName: "Languages",
            fieldValue: "Indonesia, English",
        },
    ],
};

const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My Experience",
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat totam quaerat iste sint reprehenderit porro.",
    items: [
        {
            company: "Neuronworks Indonesia",
            position: "Quality Assurance & Technical Support",
            duration: "2023 - Present",
        },
        {
            company: "Yayasan Adhi Guna Kencana",
            position: "General Affairs",
            duration: "2020 - 2023",
        },
        {
            company: "Bhakti Kencana University",
            position: "Marketing",
            duration: "2018 - 2020",
        },
        {
            company: "Kubus Gaming Station",
            position: "Operators",
            duration: "2015 - 2018",
        },
    ],
};

const education = {
    icon: "/assets/resume/cap.svg",
    title: "My Education",
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat totam quaerat iste sint reprehenderit porro.",
    items: [
        {
            institution: "Masoem University",
            degree: "S1 - Sistem Informasi",
            duration: "2022-2024",
        },
        {
            institution: "AMIK Al-Masoem Bandung",
            degree: "D3 - Manajemen Informatika",
            duration: "2014-2017",
        },
        {
            institution: "SMK Pasundan Jatinangor",
            degree: "Teknik Komputer Jaringan",
            duration: "2010-2013",
        },
        {
            institution: "Bootcamp JagooIT",
            degree: "Fullstack Web Developer with React",
            duration: "2023",
        },
    ],
};

const skills = {
    title: "My Skills",
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat totam quaerat iste sint reprehenderit porro.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html 5",
        },
        {
            icon: <FaCss3 />,
            name: "CSS 3",
        },
        {
            icon: <FaJs />,
            name: "Javascript",
        },
        {
            icon: <FaReact />,
            name: "react.js",
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind.css",
        },
        {
            icon: <FaNodeJs />,
            name: "node.js",
        },
        {
            icon: <FaFigma />,
            name: "Figma",
        },
        {
            icon: <SiAdobeillustrator />,
            name: "Adobe Illustrator",
        },
        {
            icon: <SiAdobephotoshop />,
            name: "Photoshop",
        },
        {
            icon: <SiCoreldraw />,
            name: "Coreldraw",
        },
    ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About Me</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">
                                    {experience.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span>{item.duration}</span>
                                                    <h3 className="text-accent text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                        {item.position}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">
                                                            {item.company}
                                                        </p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">
                                    {education.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span>{item.duration}</span>
                                                    <h3 className="text-accent text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                        {item.degree}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">
                                                            {item.institution}
                                                        </p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">
                                        {skills.title}
                                    </h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {skills.description}
                                    </p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider
                                                    delayDuration={100}
                                                >
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                {skill.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">
                                                                {skill.name}
                                                            </p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        <TabsContent
                            value="about"
                            className="w-full text-center xl:text-left"
                        >
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">
                                    {about.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {about.description}
                                </p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="flex items-center justify-center xl:justify-start gap-3"
                                            >
                                                <span className="text-white/60 capitalize">
                                                    {item.fieldName}
                                                </span>
                                                <span className="">
                                                    {item.fieldValue}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
