import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Key, useState } from "react";
import { IconType } from "react-icons";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string[];
    Icon: IconType;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn(className)}>
      {items.map((item, idx) => {
        const Icon = item.Icon;
        return (
          <div
            key={idx}
            className="relative group  block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-lg"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className="border rounded-md w-full h-full p-4 overflow-hidden bg-black group-hover:ring-2 ring-green-500 relative z-20 transition-all duration-500">
              <div className="py-10 z-50 relative space-y-5">
                <div className="text-2xl font-bold text-center text-gray-300">
                  <div>
                    <Icon className="w-8 h-8 mx-auto" />

                    <p>{item.title}</p>
                  </div>
                </div>
                <div className="mt-5">
                  <ul>
                    {item.description.map((i, index) => (
                      <li key={index} className="text-xl">
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
