"use client";

import DecoratedLink from "@/components/low/DecoratedLink";
import PageHeader from "@/components/low/PageHeader";
import PopIn from "@/components/low/PopIn";
import ScrollProgress from "@/components/low/ScrollProgress";
import { PageHead } from "@/components/top/PageHead";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";
import { List, Typography } from "@material-tailwind/react";
import Image from "next/image";
import { motion as m } from "framer-motion"
import React, { Fragment, ReactElement } from "react";

export default function About() {
  return (
    <Fragment>
      <ScrollProgress />
      <PageHead className="mt-0 justify-center">
        <PageHeader>About</PageHeader>
        <Typography variant="lead" className="text-center">
          This page provides insight into who I am as an individual, while also
          showcasing my entirely fictional franchise and company, "Proxreal",
          <br /> a creative venture that reflects my imagination and vision.
        </Typography>
        <ChevronDoubleDownIcon className="text-neutral-300 animate-bounce h-8 w-8 rounded-full p-1 mt-10 border border-neutral-300 " />
      </PageHead>
      <List className="pb-12">
        <AboutReadSection
          title={
            <Fragment>
              Some words{" "}
              <span className="text-pink-600 uppercase">About Me</span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              My name is <strong>Philip Schrenk</strong>, and I am from the
              Austrian city of <strong>Vienna</strong>. <br /> Growing up, I've
              always been passionate about programming, software engineering,
              and creating things in general. Keep reading to find out about my
              past and ongoing projects and passions. You can find me on
              basically all{" "}
              <DecoratedLink href={"/contact"}>
                mayor dev platforms
              </DecoratedLink>
              .
            </Fragment>
          }
          extra={
            <Fragment>
              <m.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileHover={{ scale: 1.3 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, scale: { type: "spring", visualDuration: 0.5, bounce: 0.2 } }}
                viewport={{ once: true }}
                className="absolute !right-20 flex flex-row -top-1/2 !h-42 !w-auto z-20">
                <Image
                  src={"/images/about_me_1.jpg"}
                  alt="Picture of me"
                  height={170}
                  width={100}
                  className="!w-full !h-full rounded-lg shadow-lg -rotate-[8deg]" />
              </m.div>
              <m.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.3 }}
                transition={{ duration: 1, scale: { type: "spring", visualDuration: 0.5, bounce: 0.2 } }} viewport={{ once: true }}
                className="absolute !right-12 flex flex-row -top-1/2 !h-42 !w-auto z-10 hover:z-30">
                <Image
                  src={"/images/about_me_2.jpg"}
                  alt="Picture of me"
                  height={170}
                  width={100}
                  className="!w-full !h-full rounded-lg !object-cover !object-center shadow-lg rotate-[8deg]" />
              </m.div>
            </Fragment>
          }
        />
        <AboutReadSection
          title={
            <Fragment>
              What is{" "}
              <span className="text-pink-600 uppercase tracking-wide">
                Proxreal
              </span>
              ?
            </Fragment>
          }
          paragraph={`Proxreal is, as mentioned earlier, a completely fictional company or
      franchise—though I'm not entirely sure what to call it. The name
      came about a few years ago when I set out to create a series of
      quality-of-life desktop apps, adding "Prox" to each application's
      name simply because "it sounded cool." The idea stuck with me over
      time, and now Proxreal has evolved into something more, complete
      with its own design identity: sleek black and bold dark pink.`}
        />
        <AboutReadSection
          title={
            <Fragment>About <span className="text-pink-600 uppercase tracking-wide">This Page</span></Fragment>
          }
          paragraph={<Fragment>This page is made with <a target="_blank" href="https://nextjs.org/" className="hover:underline text-green-400">Next.js</a>, <a target="_blank" href="https://tailwindcss.com/" className="hover:underline text-teal-400">Tailwind CSS</a>, <a target="_blank" href="https://material-tailwind.com/" className="hover:underline text-pink-400">Material Tailwind</a> and <a target="_blank" href="https://motion.dev" className="hover:underline text-yellow-400">Framer Motion</a>.<br />
            Working with these over multiple years has thought me expertise in Frontend design and development.<br />
            All of the code is open-source and can be found on <a target="_blank" href="https://github.com/phil-not-funny/proxreal-homepage-nextjs" className="hover:underline text-slate-500">GitHub</a>.</Fragment>} 
          extra={
            <Fragment>
              <m.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileHover={{ scale: 1.3 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, scale: { type: "spring", visualDuration: 0.5, bounce: 0.2 } }}
                viewport={{ once: true }}
                className="absolute !right-28 flex flex-row -top-10 !h-20 !w-20 z-10 hover:z-30">
                <img
                  src={"https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png"}
                  alt="Nextjs"
                  className="!w-full !h-full rounded-full shadow-lg" />
              </m.div>
              <m.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.3 }}
                transition={{ duration: 1, scale: { type: "spring", visualDuration: 0.5, bounce: 0.2 } }} viewport={{ once: true }}
                className="absolute !right-20 flex flex-row -top-10 !h-20 !w-20 z-10 hover:z-30 bg-neutral-100 rounded-full">
                <img
                  src={"https://files.raycast.com/83afy69l6wjib1zd62gya59tpc76"}
                  alt="Picture of me"
                  height={100}
                  width={100}
                  className="!w-full !h-full rounded-full shadow-lg" />
              </m.div>
            </Fragment>
          }
          />
      </List>
    </Fragment>
  );
}

interface AboutReadSectionProps {
  title: ReactElement | string | ReactElement[];
  paragraph: ReactElement | string | ReactElement[];
  extra?: ReactElement | string | ReactElement[];
}

const AboutReadSection: React.FC<AboutReadSectionProps> = ({
  title,
  paragraph,
  extra
}) => {
  return (
    <div className="w-full flex flex-col justify-center items-center min-h-screen">
      <PopIn>
        <div className="bg-neutral-800 rounded-xl p-10 relative shadow-lg">
          {extra}
          <Typography variant="h3" className="font-mono">
            {title}
          </Typography>
          <Typography
            variant="paragraph"
            className="text-pretty text-base max-w-screen-lg leading-relaxed text-neutral-300"
          >
            {paragraph}
          </Typography>
        </div>
      </PopIn>
    </div>
  );
};
