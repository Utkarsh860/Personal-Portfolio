import React from "react"

export default function Title({text,className}:{text:string,className?:string}) {
  return (
    <div className = {className}>
            <h1 className="text-3xl font-bold hover:text-green-400 transition-all">{text}</h1>
            <div className="w-full h-1 bg-green-500 rounded-full translate-x-2"></div>
              <div className="w-full h-1 bg-indigo-500 rounded-full translate-x-2"></div>
           
          </div>
  )
}