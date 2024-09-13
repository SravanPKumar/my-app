"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
    SelectGroup,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';

const info = [
    {
        icon: <FaPhoneAlt />,
        title: 'Phone',
        desciption: '(+91) 82815 57060',
    },
    {
        icon: <FaEnvelope />,
        title: 'Email',
        desciption: 'sp.pathiyoor@gmail.com',
    },
    {
        icon: <FaMapMarkedAlt />,
        title: 'Address',
        desciption: 'Edanilathu Vaishnava Pathiyoor West, Kareelakulagara P.O Kayamkulam, Allapuzha, Kerala, India',
    },
];

import { motion } from "framer-motion";

const Contact = () => {
    return ( 
    <motion.section 
        initial={{ opacity: 0 }}
        animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="py-6 -mt-10"  
    >
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-[30px]"> 
                {/* form */}
                <div className="xl:w-[50%] order-2 xl:order-none">
                    <form className="flex flex-col gap-6 p-8 bg-[#27272c] rounded-xl">
                        <h3 className="text-3xl text-accent font-extrabold">Let's Work Together</h3>
                        <p className="text-white/75 font-bold">What were you thinking of doing before you regret not doing it?</p>
                        {/* input */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input type="firstname" placeholder="Firstname" />
                            <Input type="lastname" placeholder="Lastname" />
                            <Input type="email" placeholder="Email Address" />
                            <Input type="phone" placeholder="Phone Number" />
                        </div>
                        {/* select */}
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Select a service</SelectLabel>
                                    <SelectItem value="web">Web Development</SelectItem>
                                    <SelectItem value="uiux">UI/UX Design</SelectItem>
                                    <SelectItem value="logo">Logo Design</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        {/* textarea */}
                        <Textarea className="h-[100px]" placeholder="Type your message here." />
                        {/* btn */}
                        <Button size="md" className="max-w-40">
                            Send Message
                        </Button>
                    </form>
                </div>
                {/* info */}
                <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none">
                    <ul className="flex flex-col gap-6 text-lg xl:w-[90%]"> 
                        {info.map((item, index) => {
                            return (
                            <li key={index} className="flex items-center gap-4"> 
                                <div className="w-[50px] h-[50px] xl:w-[52px] xl:h-[52px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                    <div className="text-[20px] xl:text-[24px]">{item.icon}</div>
                                </div>
                                <div className="flex-1">
                                    <p className="text-accent/75 text-lg font-medium">{item.title}</p>
                                    <h3 className="text-base font-semibold">{item.desciption}</h3>
                                </div>
                            </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    </motion.section>
  );
};

export default Contact;
