import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiFacebook } from "react-icons/si";

export default function Navbar({className}:{className:string}) {
  const socials = [
    {
      link: "https://www.linkedin.com/in/utkarsh-sachan-0aaa69279",
      label:"Linkedin",
      Icon:SiLinkedin,
    },
    {
      link: "https://github.com/Utkarsh860",
      label:"Github",
      Icon:SiGithub,
    },
    {
      link: "https://www.facebook.com/profile.php?id=100090330321305",
      label:"FaceBook",
      Icon:SiFacebook,
    }
  ]
  return (
    <nav className={cn("py-10 flex justify-between items-center",className)}>
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-600"> Utkarsh Sachan 👨🏻‍💻</h1>
      <div className="flex items-center gap-5">
        {
          socials.map((social,index) =>{
            const Icon = social.Icon ;


            return (
            <Link href={social.link} key={index} aria-label={social.label} target="_blank">

                <Icon className="w-6 h-6 hover:scale-125
                transition-all" />
            </Link>
            );
          })
        }
      </div>
  </nav>
  )
}