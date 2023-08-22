"use client";

import { IChildren } from "@/interfaces/global";
import { AnimatePresence } from "framer-motion";

const CategoriesLayout = ({ children }: IChildren) => {
  return <AnimatePresence>{children}</AnimatePresence>;
};

export default CategoriesLayout;
