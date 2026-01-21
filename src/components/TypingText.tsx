'use client'

import { motion } from "framer-motion";

type TypingTextProps = {
    text: string;
    delay?: number;
}

export default function TypingText({ text, delay = 0 }: TypingTextProps) {
    return (
        <div className="inline-flex items-center">
            <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  duration: text.length * 0.1,
                  ease: "linear",
                  delay,
                }}
                className="
                  overflow-hidden whitespace-nowrap
                  text-xl md:text-2xl text-muted
                "
            >
                {text}
            </motion.span>
            <motion.span 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.4, repeat: Infinity }}
                className="ml-1 inline-block h-6 w-0.5 bg-accent"
            />
        </div>
    );
}