"use client";

import { motion as m } from "framer-motion";
import { Typography } from "@material-tailwind/react";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center min-h-screen">
      <Typography
        variant="h1"
        className="text-2xl relative w-[max-content] font-mono before:absolute before:inset-0 before:animate-typewriter before:bg-zinc-900 after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-neutral-300 after:ml-1"
      >
        <span className="text-pink-700">Proxreal</span> by Philip Schrenk
      </Typography>
      <m.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{ delay: 3, duration: 2, ease: "easeInOut" }}
      >
        <Typography variant="lead" className="max-w-screen-md mt-3 text-center text-neutral-300">
          This portfolio website contains information about my projects, linked accounts and contact information.
        </Typography>
      </m.div>
    </div>
  );
}
