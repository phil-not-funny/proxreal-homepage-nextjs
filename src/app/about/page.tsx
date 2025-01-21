"use client";

import DecoratedLink from "@/components/low/DecoratedLink";
import PageHeader from "@/components/low/PageHeader";
import PopIn from "@/components/low/PopIn";
import ScrollProgress from "@/components/low/ScrollProgress";
import { PageHead, WithPageHead } from "@/components/top/PageHead";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";
import { List, Typography } from "@material-tailwind/react";
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
              About <span className="text-pink-600 uppercase">Me</span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              My name is <strong>Philip Schrenk</strong>, and I'm from
              Austria. Growing up, I've always been passionate about
              programming, software engineering, and creating things in general.
              This page is meant to be a showcase of what I can do and what I've done so far. You can find
              me on basically all{" "}
              <DecoratedLink href={"/contact"}>
                mayor dev platforms
              </DecoratedLink>
              .
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
      </List>
    </Fragment>
  );
}

interface AboutReadSectionProps {
  title: ReactElement;
  paragraph: ReactElement | string | ReactElement[];
}

const AboutReadSection: React.FC<AboutReadSectionProps> = ({
  title,
  paragraph,
}) => {
  return (
    <div className="w-full flex flex-col items-center min-h-screen">
      <PopIn>
        <Typography variant="h4" className="text-xl font-mono">
          {title}
        </Typography>
        <Typography
          variant="paragraph"
          className="text-pretty text-[0.92rem] max-w-screen-lg leading-relaxed text-neutral-300"
        >
          {paragraph}
        </Typography>
      </PopIn>
    </div>
  );
};
