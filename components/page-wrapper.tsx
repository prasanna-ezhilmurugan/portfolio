"use client";

import {motion} from "framer-motion";
import {usePathname} from "next/navigation";

export function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: -20}}
      transition={{duration: 0.3}}
      className="flex flex-col items-center justify-center"
    >
      {children}
    </motion.div>
  );
}