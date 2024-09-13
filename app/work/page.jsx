"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description: "Project description goes here.",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }],
    image: "/assets/work/project1.png",
    live: "https://example.com", // Example URL
    github: "https://github.com/example", // Example URL
  },
  {
    num: "02",
    category: "backend",
    title: "project 2",
    description: "Project description goes here.",
    stack: [{ name: "Node.js" }, { name: "Express" }, { name: "MongoDB" }],
    image: "/assets/work/project1.png",
    live: "https://example.com", // Example URL
    github: "https://github.com/example", // Example URL
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description: "Project description goes here.",
    stack: [{ name: "React" }, { name: "TypeScript" }, { name: "Tailwind CSS" }],
    image: "/assets/work/project1.png",
    live: "https://example.com", // Example URL
    github: "https://github.com/example", // Example URL
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col items-center justify-center py-8 xl:px-0 px-4"
    >
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-center">
        <div className="flex flex-col items-center xl:items-start text-center xl:text-left w-full xl:w-[50%] xl:h-[360px]">
          <div className="flex flex-col gap-[15px] md:gap-[25px] items-center xl:items-start">
            {/* outline num */}
            <div className="text-5xl md:text-7xl leading-none font-extrabold ">
              {project.num}
            </div>
            {/* project category */}
            <h2 className="text-[32px] md:text-[50px] font-extrabold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
              {project.category} project
            </h2>
            {/* project description */}
            <p className="text-white/60 text-base md:text-lg font-semibold">{project.description}</p>
            {/* stack */}
            <ul className="flex flex-wrap gap-3 md:gap-5 justify-center">
              {project.stack.map((item, index) => (
                <li key={index} className="text-base md:text-xl text-accent font-bold">
                  {item.name}
                  {index !== project.stack.length - 1 && ","}
                </li>
              ))}
            </ul>
            {/* border */}
            <div className="border border-white/20 w-full xl:w-[500px]"></div>
            {/* button */}
            <div className="flex flex-wrap items-center gap-3 md:gap-5 justify-center xl:justify-start mt-4">
              {/* live project button */}
              <Link href={project.live} passHref>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[45px] h-[45px] md:w-[55px] md:h-[55px] rounded-full bg-white/5 flex justify-center items-center group relative md:relative">
                      <BsArrowUpRight className="text-[18px] md:text-[24px] text-white group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live Project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              {/* github project button */}
              <Link href={project.github} passHref>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[45px] h-[45px] md:w-[55px] md:h-[55px] rounded-full bg-white/5 flex justify-center items-center group relative md:relative">
                      <BsGithub className="text-[18px] md:text-[24px] text-white group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github Repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center relative w-full xl:w-[50%] max-w-[90%] xl:max-w-full mt-8 xl:mt-0">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            className="h-[250px] md:h-[360px] w-full"
            onSlideChange={handleSlideChange}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="w-full flex justify-center items-center">
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* overlay */}
                  <div className="absolute inset-0 bg-black/10 z-10"></div>
                  {/* image */}
                  <div className="relative w-full h-full">
                    <Image src={project.image} layout="fill" className="object-contain" alt={`Screenshot of ${project.title}`} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {/* slider button */}
            <WorkSliderBtns
              containerStyles="flex justify-between items-center absolute inset-x-0 bottom-2 md:bottom-4 z-20"
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[18px] md:text-[22px] w-[45px] h-[45px] md:w-[55px] md:h-[55px] rounded-full flex justify-center items-center transition-all"
              iconStyles="text-[18px] md:text-[22px]"
            />
          </Swiper>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
