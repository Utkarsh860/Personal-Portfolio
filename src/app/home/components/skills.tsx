"use client"

import React from "react"
import Title from "./title"
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {SiReact,SiJavascript,SiMongodb,SiNextdotjs, SiTailwindcss, SiHtml5,SiGit,SiCss3,SiBootstrap} from "react-icons/si"

export default function Skills(){
  const skills = [
    {
      title:"React",
      description:["a JavaScript library for building user interfaces, particularly single-page applications"],
      Icon:SiReact,
    },
    {
      title:"Next.js",
      description:["a React framework for building full-stack web applications"],
      Icon:SiNextdotjs,
    },
    {
      title:"Tailwind CSS",
      description:["a utility-first CSS framework for building custom user interfaces"],
      Icon:SiTailwindcss,
    },
    {
      title:"HTML",
      description:["A markup language used to structure and give meaning to content on the web"],
      Icon:SiHtml5,
    },
    {
      title:"CSS",
      description:["A stylesheet language used to describe the presentation of a document written in HTML or XML"],
      Icon:SiCss3,
    },

    {
      title:"JavaScript",
      description:["A high-level, interpreted programming language"],
      Icon:SiJavascript,
    },
    {
      title:"Bootstrap",
      description:[" A popular open-source front-end development framework "],
      Icon:SiBootstrap,
    },
    {
      title:"MongoDB",
      description:["A NoSQL document-oriented database "],
      Icon:SiMongodb,
    },
    {
      title:"Git",
      description:["A distributed version control system"],
      Icon:SiGit,
    },
  ]
  return(
    <div className="max-w-5xl mx-auto px-8 flex flex-col items-center justify-center" >
     <div className="inline-block">
       <Title text="Skills Acquired 🎯" />
     </div>
     <HoverEffect items={skills} className="grid grid-cols-2  lg:grid-cols-3  py-10"/>
  </div>
  ) 
}