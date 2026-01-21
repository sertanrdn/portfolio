import { Variants } from "framer-motion";

export const fadeUp = (delay = 0): Variants => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut", delay },
    },
});

export const hoverLift = {
    whileHover: { y: -6 },
};
  
export const tapScale = {
    whileTap: { scale: 0.97 },
};

export const skillsContainer: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

export const skillsCard: Variants = {
    hidden: { 
        opacity: 0, 
        y: 24 
    },
    show: {
        opacity: 1,
        y: 0,
        transition: { 
            duration: 0.5, 
            ease: [0.25, 0.1, 0.25, 1]
        },
    },
};

export const skillsPill: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.25 },
    },
};