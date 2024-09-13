"use client";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs,
} from "react-icons/fa"

import {SiTailwindcss, SiNextdotjs} from "react-icons/si"

// about data
const about = {
    title: " About me",
    description: "what to do man",
    info: [
        {
            fieldName: "Name:-",
            fieldValue: "Sravan P Kumar"
        },
        {
            fieldName: "Phone:-",
            fieldValue: "(+91) 82815 57060"
        },
        {
            fieldName: "Experince:-",
            fieldValue: "1+ Years"
        },
        {
            fieldName: "Instagram:-",
            fieldValue: "vichu_sravan"
        },
        {
            fieldName: "Nationality:-",
            fieldValue: "India"
        },
        {
            fieldName: "Email:-",
            fieldValue: "sp.pathiyoor@gmail.com"
        },
        {
            fieldName: "Freelance:-",
            fieldValue: "Available"
        },
        {
            fieldName: "Language:-",
            fieldValue: "English, Malayalam"
        },
    ]
};

// experience data
const experience = {
    icon: "",
    title: "My Experience",
    description: "What to do to do.",
    items: [
        {
            company: "IEEE SB CEK",
            position: "Chair SPS/PHO/SSCS/MTTS Jt. Chapter",
            duration: "2024 - Present",
        },
        {
            company: "Freelance",
            position: "Graphic Designer",
            duration: "2024 - Present",
        },
        {
            company: "IEEE SB CEK",
            position: "Design Lead",
            duration: "2023 - 2024",
        },
        {
            company: "IEEE SB CEK",
            position: "Design Intern",
            duration: "2022 - 2023",
        },
    ],
};

// education data
const education = {
    icon: "",
    title: "My Education",
    description: "What to do to do.",
    items: [
        {
            institution: "IEEE SB CEK",
            degree: "Design Intern",
            duration: "2022 - 2023",
        },
        {
            institution: "Youtube",
            degree: "Figma Course",
            duration: "2023 - 2024",
        },
        {
            institution: "IHRD College of Engineering Karunagappally",
            degree: "Btech in Coputer Science",
            duration: "2021 - 2025",
        },
        {
            institution: "MSM Higher Secondary School Kayamkulam",
            degree: "Plus 2 Bio-Science",
            duration: "2019 - 2021",
        },
        {
            institution: "Sree Vitoba High School Kayamkulam",
            degree: "10th Grade",
            duration: "2016 - 2019",
        },
        
    ],
};

// skill data
const skills = {
    title: "My Skills",
    description: "What to do to do.",
    skilllist: [
        {
            icon: <FaHtml5 />,
            name: "html 5",
        },
        {
            icon: <FaCss3 />,
            name: "css 3",
        },
        {
            icon: <FaJs />,
            name: "javascript",
        },
        {
            icon: <FaReact />,
            name: "react.js",
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js",
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
            name: "fimga",
        },
    ],
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return (
        <motion.div
         initial={{opacity: 0}}
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

                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index)=> {
                                            return (
                                              <li key={index} className="bg-[#232329] h-[184px] py6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent font-semibold">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left font-bold">{item.position}</h3>
                                                <div className="flex items-center gap-3">
                                                    {/* dat */}
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60 font-bold">{item.company}</p>
                                                </div>
                                              </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-1">
                                                    <span className="text-accent font-semibold">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] font-bold">{item.degree}</h3>
                                                    <div className="flex items-center justify-center lg:justify-start gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60 font-bold">{item.institution}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* skills */}
                        <TabsContent value="skills" className="w-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {skills.description}
                                    </p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skilllist.map((skill, index) => {
                                        return <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                        <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className="capitalize">{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>;
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* about */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-8">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 mb-6">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                                <span className="text-accent/60 font-semibold ">{item.fieldName}</span>
                                                <span className="text-xl font-bold">{item.fieldValue}</span>
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