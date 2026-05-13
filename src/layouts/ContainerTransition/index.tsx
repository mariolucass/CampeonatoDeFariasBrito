import { IChildren } from "@/interfaces/global";
import { motion } from "framer-motion";

const EASING = [0.25, 0.1, 0.25, 1] as const;

export const ContainerTransition = ({ children }: IChildren) => (
  <motion.div
    initial={{ opacity: 0, y: 12, scale: 0.985 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: -6, scale: 0.99 }}
    transition={{
      duration: 0.35,
      ease: EASING,
      opacity: { duration: 0.25, ease: EASING },
    }}
    style={{ willChange: "transform, opacity" }}
  >
    {children}
  </motion.div>
);
