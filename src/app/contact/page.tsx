"use client";

import PageHeader from "@/components/low/PageHeader";
import { WithPageHead } from "@/components/top/PageHead";
import { Avatar, Typography } from "@material-tailwind/react";
import { Fragment } from "react";

import { motion as m } from "framer-motion";
import Link from "next/link";

export default function Contact() {
  return WithPageHead(
    <Fragment>
      <PageHeader>Contact</PageHeader>
      <Typography variant="lead" className="text-center">
        Here, you'll find several ways to get in touch with me, including links
        to my social media profiles.
      </Typography>
      <div className="rounded-lg shadow-lg bg-neutral-800 max-w-screen-lg w-full flex flex-col items-center gap-4 mt-24 p-4">
        <Typography
          className="col-span-1 font-mono text-center w-full"
          variant="h4"
        >
          Contact
        </Typography>
        <div className="flex lg:flex-row flex-col gap-4 w-full">
          <ContactListItem
            title="E-Mail"
            username="schrenk.philip@hotmail.com"
            companyBadge="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg/1101px-Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg.png"
          />
          <ContactListItem
            title="Phone"
            username="+43 681 10280618"
            companyBadge="https://static.vecteezy.com/system/resources/thumbnails/016/416/785/small/phone-call-icon-in-black-colors-telephone-signs-illustration-png.png"
          />
        </div>
        <Typography className="col-span-1 font-mono text-center" variant="h4">
          Social Media
        </Typography>
        <div className="flex lg:flex-row flex-col gap-4 w-full">
          <ContactListItem
            title="GitHub"
            username="phil-not-funny"
            href="https://github.com/phil-not-funny"
            avatar="https://avatars.githubusercontent.com/u/77935424?v=4"
            companyBadge="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
          />
          <ContactListItem
            title="Stack Overflow"
            username="phil-not-funny"
            href="https://stackoverflow.com/users/15899862/phil-not-funny"
            avatar="https://www.gravatar.com/avatar/8cdf654472167b2b3de281836464f116?s=256&d=identicon&r=PG&f=y&so-version=2"
            companyBadge="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/2048px-Stack_Overflow_icon.svg.png"
          />
        </div>
      </div>
    </Fragment>
  );
}

interface ContactListItemProps {
  title: string;
  username: string;
  href?: string;
  avatar?: string;
  companyBadge: string;
  className?: string;
}

const ContactListItem: React.FC<ContactListItemProps> = ({
  title,
  username,
  href,
  avatar,
  companyBadge,
  className,
}) => {
  return (
    <div
      className={`flex flex-row items-center gap-4 shadow-md p-4 rounded-lg w-full flex-grow bg-neutral-700 ${className}`}
    >
      {avatar && (
        <Avatar
          src={avatar}
          alt="avatar"
          className="rounded-full h-16 w-16"
          variant="circular"
        />
      )}
      <div className="flex flex-col justify-center items-start">
        <div className="flex flex-row items-center justify-start space-x-2">
          <Typography variant="h4" className="font-mono">
            {title}
          </Typography>
          <Avatar
            src={companyBadge}
            alt="company"
            className="h-8 w-8 border rounded-full border-neutral-300 bg-white"
          />
        </div>
        {avatar ? (
          <Link href={href!} target="_blank">
            <Typography variant="paragraph" className="text-neutral-400 italic">
              {username}
            </Typography>
          </Link>
        ) : (
          <Typography variant="paragraph" className="text-neutral-400">
            {username}
          </Typography>
        )}
      </div>
    </div>
  );
};
