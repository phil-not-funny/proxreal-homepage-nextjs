"use client";

import { Typography } from "@material-tailwind/react";

export default function Home() {
  return (
    <div className="w-full flex flex-row justify-center">
      <Typography
        variant="h1"
        className="text-2xl relative w-[max-content] font-mono before:absolute before:inset-0 before:animate-typewriter before:bg-zinc-900 after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-pink-700"
      >
        Portfolio by Philip Schrenk
      </Typography>
    </div>
  );
}
