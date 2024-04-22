import React from "react";
import {
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiGit,
  SiCss3,
  SiBootstrap,
} from "react-icons/si";
import Title from "./title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export default function Projects() {
  const projects = [
    {
      title: "XBoard - news feed App",
      tech: [SiHtml5, SiCss3, SiJavascript, SiGit],
      link: "http://localhost:3000",
      cover: "/News-Feed.png",
      bg: "bg-indigo-500",
    },
    {
      title: "Portfolio 2.0",
      tech: [SiGit, SiTailwindcss, SiJavascript, SiNextdotjs, SiReact],
      link: "http://localhost:3000",
      cover: "/portfolio-1.png",
      bg: "bg-gray-300",
    },
    {
      title: "QTrip - Dynamic",
      tech: [SiHtml5, SiCss3, SiJavascript, SiGit, SiBootstrap],
      link: "http://localhost:3000",
      cover: "/Qtrip-dynamic.png",
      bg: "bg-gray-300",
    },

    {
      title: "QTrip -Static",
      tech: [SiHtml5, SiCss3, SiJavascript, SiGit],
      link: "http://localhost:3000",
      cover: "/Qtrip-static.png",
      bg: "bg-green-500",
    },
  ];
  return (
    <div className="py-10 p-5 sm:p-0">
      <div className="flex flex-col items-center justify-center">
        <Title text="Projects 🗂️" className="inline-block" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => {
          return (
            <Link key={index} href={project.link}>
              <div className={cn("p-4 rounded-md", project.bg)}>
                <DirectionAwareHover imageUrl={project.cover} className="">
                  <div className="space-y-5">
                    <h1 className="text-xl font-bold">{project.title}</h1>
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, index) => {
                        return <Icon className="w-6 h-6" key={index} />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
