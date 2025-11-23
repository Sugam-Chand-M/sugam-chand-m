"use client";

import React from "react";
import { hobbiesData } from "@/app/lib/data";
import {motion} from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

type HobbiesProps=(typeof hobbiesData)[number];

export default function HobbiesClient({
    title,
    link,
    icon
} :HobbiesProps){

    return (
        <motion.div
                className="
                    mt-5
                    flex
                    flex-col
                    sm:flex-row
                    items-center
                    justify-center
                    gap-2
                    px-4
                    text-lg
                    font-medium
                "
                initial={{opacity:0,y:100}}
                animate={{opacity:1,y:0}}
                transition={{
                    delay:0.1,
                }}
            >
                <p
                    className="
                        group
                        bg-gray-900
                        text-white
                        px-7
                        py-3
                        flex
                        items-center
                        gap-2
                        rounded-full
                        outline-none
                        transition
                        dark:bg-white/10
                        dark:text-white/60
                        w-[300px]
                    "
                >
                    Follow Me on {title} <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"/>
                </p>
                <a
                    href={link}
                    target="_blank"
                    className="
                        group
                       bg-white
                       text-gray-700
                       p-5
                       flex
                       items-center
                       gap-2
                       rounded-full
                       outline-none
                       focus:scale-[1.15]
                       hover:scale-[1.15]
                       hover:text-gray-800
                       active:scale-105
                       transition
                       cursor-pointer
                       border
                       border-black/20
                       dark:bg-white/10
                       dark:text-white/60
                       dark:hover:text-gray-400
                    "
                >
                    {icon}
                </a>
            </motion.div>
    );
};