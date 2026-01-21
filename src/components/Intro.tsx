'use client'

import { introData } from "../data/intro";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";
import HeroBackground from "./HeroBackground";

export default function Intro() {
    return (
        <section id="intro" className="min-h-[calc(100vh-5rem)] flex items-center">
            <HeroBackground />
            <div className="max-w-7xl mx-auto px-4 w-full">
                {/* Layout wrapper */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Image column */}
                    <div className="flex justify-center md:justify-center md:pr-12">
                        {/* Image will go here */}
                        <div className="w-40 h-40 md:w-64 md:h-64 rounded-full bg-gray-200">
                            <Image
                                src="/profile.jpeg"
                                alt={introData.name}
                                width={1120}
                                height={1600}
                                className="w-full h-full object-cover rounded-full"
                                priority
                            />
                        </div>
                    </div>
  
                    {/* Text column */}
                    <div className="text-center md:text-left space-y-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 16, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
                            className="text-4xl md:text-5xl font-bold text-text"
                        >
                            {introData.name}
                        </motion.h1>
                        <motion.h2 
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.1 }}
                            className="text-xl md:text-2xl text-muted"
                        >
                            {introData.role}
                        </motion.h2>
                        <motion.p 
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.15 }}
                            className="max-w-xl mx-auto md:mx-0 text-muted leading-relaxed"
                        >
                            {introData.description}
                        </motion.p>
                        <motion.a 
                            href={introData.cta.href} 
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.2 }}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            className="
                                intro-cta-button inline-flex items-center 
                                justify-center mt-6 px-6 py-3 rounded-lg 
                                border font-medium transition hover:shadow-md
                            "
                        >
                            {introData.cta.label}
                        </motion.a>
                    </div>
                </div>
            </div>
        </section>
    );
}