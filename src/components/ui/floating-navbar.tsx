"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  // Make the FloatingNav always visible
  const [visible, setVisible] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 1, y: -100 }}
      animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "flex max-w-fit fixed top-6 inset-x-0 mx-auto border border-transparent rounded-full bg-gradient-to-r from-[#C430B1] to-[#A74BFF] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-0 items-center justify-center space-x-4", // Use gradient background
        className
      )}
    >
      {navItems.map((navItem: any, idx: number) => (
        <Link
          key={`link=${idx}`}
          href={navItem.link}
          className="relative text-white items-center flex space-x-1 hover:text-gray-300"
        >
          <span className="hidden sm:block text-sm">{navItem.name}</span>
        </Link>
      ))}
      <button className="border text-sm font-medium relative border-neutral-200 text-white dark:border-white/[0.2] dark:text-white px-4 py-2 rounded-full hover:bg-gray-800">
        <span>Login</span>
        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
      </button>
    </motion.div>
  );
};
