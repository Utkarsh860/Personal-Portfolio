"use client";
import React from "react"
import Title from "./title"
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { AiFillEdit } from "react-icons/ai";


export default function AboutMe(){
  const about = [
  {
    title:"Education",
    description:[
      "☑️Pursuing Diploma in Information Technology from Government Polytechnic, Kanpur 78% (2021- Present)",
      "☑️Saraswati vidya Mandir Inter College Intermediate(12) 81.2 (2020)",
      "☑️Saraswati shishu mandir higher secondary School highSchool(10) 86.8 (2018)"
    ],
    Icon:AiFillEdit
  },
  {
    title:"Hobbies",
    description:[
      "☑️Playing virtual Games",
      "☑️Traveling new Destination",
      "☑️Fitness fanatic"
    ],
    Icon:AiFillEdit
  },
  {
    title:"Courses",
    description:[
      "☑️Crio.do full stackdevelopment (June 2023 -  Present)",
      "☑️FreeCodeCamp Responsive Web design(360 hours)"
    ],
    Icon:AiFillEdit
  },
  // {
  //   title:"Achievements",
  //   description:[
  //     "☑️100+ DSA solved"
  //   ],
  //   Icon:AiFillEdit
  // },
  {
    title:"Certifications",
    description:[
      "☑️Full Stack Development certification from crio.do",
      "☑️Responsive Design Certification in Full stack web Development from freeCodeCamp"
    ],
    Icon:AiFillEdit
  },
];
 return (
  <div className="max-w-5xl mx-auto px-8 flex flex-col items-center justify-center" >
     <div className="inline-block">
       <Title text="About Me 📙" />
     </div>
    <HoverEffect items={about} className="grid grid-cols-1  lg:grid-cols-2  py-10" />
     
  </div>
  )
}