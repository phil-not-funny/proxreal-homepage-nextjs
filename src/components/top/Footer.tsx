"use client"

import { Typography } from "@material-tailwind/react";

const Footer: React.FC = () => {
  return (
    <div className="flex px-10 w-full text-neutral-300 flex-wrap flex-row justify-around items-center gap-y-6 gap-x-12 border-t border-zinc-800 border-blue-gray-50 py-6 text-center md:justify-between bg-neutral-900">
      <Typography color="white" className="font-normal">
        &copy; 2025 Proxreal
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="#"
            color="white"
            className="font-normal transition-colors hover:text-pink-600 focus:text-pink-600"
          >
            About Us
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="white"
            className="font-normal transition-colors hover:text-pink-600 focus:text-pink-600"
          >
            License
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="white"
            className="font-normal transition-colors hover:text-pink-600 focus:text-pink-600"
          >
            Contribute
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="white"
            className="font-normal transition-colors hover:text-pink-600 focus:text-pink-600"
          >
            Contact Us
          </Typography>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
