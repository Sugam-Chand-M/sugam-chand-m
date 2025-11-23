"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/app/lib/hooks";
import { hobbiesData } from "@/app/lib/data";
import HobbiesClient from "./hobbiesClient";

export default function Hobbies(){
    const {ref}=useSectionInView("Hobbies",0.5);
    return (
        <section
            ref={ref}
            id="hobbies"
            className="
                mt-28
                mb-28
                max-w-[53rem]
                scroll-mt-28
                text-center
                sm:mb-40
            "
        >
            <SectionHeading>
                My Hobbies
            </SectionHeading>
            <p
                className="
                    mb-3
                "
            >
                In my free time, I enjoy watching Movies 🎬, Series 📺, and Anime 🎥, and I love diving into a good Novel 📚. I'm also passionate about playing Football ⚽ whenever I get the chance. Additionally, I post reviews of the films I watch on Letterboxd, sharing my thoughts and opinions with other movie enthusiasts! ✍️. Also, I post gameplay videos of the Games I play, in my YouTube channel. 
            </p>
            <br />
            <div>
                {
                    hobbiesData.map((hobby,index)=>(
                        <React.Fragment key={index}>
                            <HobbiesClient {...hobby}/>
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    );
};