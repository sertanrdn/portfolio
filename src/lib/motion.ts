import { Variants } from "framer-motion";

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

export const hoverLift = {
    whileHover: { y: -6 },
};
  
export const tapScale = {
    whileTap: { scale: 0.97 },
};