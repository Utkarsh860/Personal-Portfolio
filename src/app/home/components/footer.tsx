"use client"
import React from "react"
import Navbar from "./Navbar"
import { Vortex } from "@/components/ui/vortex"
import Link from "next/link"

export default function Footer (){
  return (
    <div className="">
      <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Feel Free To Contact Me
        </h2>
        

        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          I will be Happy to know about You lets connect 
        </p>
        <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
          <Link href={"https://www.linkedin.com/in/utkarsh-sachan-0aaa69279"} className="inline-block" target="_blank">
            Contact Me
        </Link>
          </button>
      </Vortex>
    </div>
    </div>
  )
}