"use client";

import { Dialog, DialogBody } from "@material-tailwind/react";
import Image from "next/image";
import { Fragment, useState } from "react";

type EnlargableImageProps = {
  src: string;
  alt: string;
  className?: string;
};

const EnlargableImage: React.FC<EnlargableImageProps> = ({
  src,
  alt,
  className,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Fragment>
      <Dialog
        open={open}
        size="xl"
        handler={handleOpen}
        className="flex justify-center items-center backdrop-blur-sm bg-transparent"
      >
        <DialogBody className="relative">
          
          <img
            src={src}
            alt={alt}
            className={`w-[42rem] rounded-sm ${className}`}
          />
        </DialogBody>
      </Dialog>
      <Image
        src={src}
        alt={alt}
        width={460}
        height={0}
        priority
        className={`rounded-sm shadow-md cursor-pointer hover:opacity-85 transition-opacity ${className}`}
        onClick={handleOpen}
      />
    </Fragment>
  );
};

export default EnlargableImage;
