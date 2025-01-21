import { motion as m } from "framer-motion";
import { PropsWithChildren, ReactElement } from "react";

interface Props extends PropsWithChildren {
  className?: string;
}

export const PageHead: React.FC<Props> = ({ children, className }) => {
  return (
    <m.div
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1, x: "100" }}
      transition={{ duration: 1, type: "spring", stiffness: 20 }}
      className={`w-full flex flex-col items-center min-h-screen mt-24 ${className}`}
    >
      {children}
    </m.div>
  );
};

export const WithPageHead = (children: React.ReactElement): ReactElement => {
  return <PageHead>{children}</PageHead>;
}
