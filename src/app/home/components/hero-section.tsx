import { MovingBorderBtn } from "@/components/ui/moving-border";
import Link from "next/link";
import React from "react";
import Title from "./title"


export default function HeroSection() {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-14 md:gap-14 lg:gap-0 lg:flex-row items-center justify-between sm:mt-10">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Hello ! How are you 👋
          <br /> <span className="underline underline-offset-8 decoration-indigo-500">{"I'm Utkarsh Sachan"}</span>
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          {
            "Based in India, I'm a FullStack developer passionate about building a modern web application that users love."
          }
        </p>
        <Link href={"utkarshsachan@gmail.com"} className="inline-block">
          <Title text="Contact Me ➡️"/>
        </Link>
      </div>
      <div className="relative">
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
          </div>
          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
         <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10">
          <MovingBorderBtn borderRadius="0.5rem" className="p-3">
           <p>✅ Available for work</p>
          </MovingBorderBtn>
         </div>
      </div>
    </div>
  );
}
