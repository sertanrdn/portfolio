'use client'

import { motion } from "framer-motion";

export default function HeroBackground() {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.6, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="
                  absolute -top-32 -left-32 w-125 h-125
                  rounded-full bg-accent/30 blur-3xl
                "
            />
            <motion.div 
                animate={{ y: [0, 40, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="
                  absolute top-1/2 right-50 w-150 h-150
                  rounded-full bg-purple-500/20 blur-3xl
                "
            />
        </div>
    );
}