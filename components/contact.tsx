"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/app/lib/hooks";
import {motion} from "framer-motion";
import {sendEmail} from "@/actions/sendEmail";
import SubmitButton from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact(){
    const {ref}=useSectionInView("Contact",0.8);
    return (
        <motion.section
            ref={ref}
            id="contact"
            className="
                mb-20
                sm:mb-28
                w-[min(100%,38rem)]
                text-center
            "
            initial={{
                opacity:0,
            }}
            whileInView={{
                opacity:1,
            }}
            transition={{
                duration:1
            }}
            viewport={{
                once:true,
            }}
        >
            <SectionHeading>
                Contact Me
            </SectionHeading>
            <p
                className="
                    text-gray-800
                    -mt-6
                    dark:text-white/80
                "
            >
                Please contact me directly through this form.
            </p>
            <form
                className="
                    mt-10
                    flex
                    flex-col
                    dark:text-black
                "
                action={async (formData)=>{
                    const {data,error} = await sendEmail(formData);
                    if(error){
                        toast.error(error);
                        return;
                    }
                    toast.success("Email sent successfully!!");
                }}
            >
                <input 
                    className="
                        h-14
                        rounded-lg
                        borderBlack
                        px-4
                        dark:bg-white
                        dark:bg-opacity-80
                        dark:focus:bg-opacity-100
                        transition-all
                        dark:outline-none
                    "
                    name="senderEmail"
                    placeholder="Your Email"
                    required
                    maxLength={500}
                    type="email"
                />
                <textarea 
                    className="
                        h-52
                        my-3
                        rounded-lg
                        borderBlack
                        p-4
                        dark:bg-white
                        dark:bg-opacity-80
                        dark:focus:bg-opacity-100
                        transition-all
                        dark:outline-none
                    "
                    name="message"
                    placeholder="Your Message"
                    required
                    maxLength={5000}
                />
                <SubmitButton />
            </form>
        </motion.section>
    );
};