'use client'

import { skillsData } from "../data/skills";
import { skillIcons } from "../data/skillIcons";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const cardVariants: Variants = {
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

const pillVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.25 },
    },
};

export default function Skills () {
    const blackIcons = [
        "Next.js",
        "Express.js",
        "GitHub",
        "CodePen"
    ];

    return (
        <section
            id="skills"
            className="relative scroll-mt-24 py-10 md:py-20"
        >
            <div className="mx-auto max-w-6xl px-6">
                {/* Section label */}
                <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">
                    Skills
                </p>
                {/* Section title */}
                <h2 className="mb-10 text-3xl font-bold tracking-tight md:text-4xl">
                    Technologies I have worked with
                </h2>
                {/* Skills grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                >
                    {skillsData.map((group) => (
                        <motion.div
                            variants={cardVariants}
                            key={group.category}
                            className="rounded-2xl border border-border bg-surface p-6"
                        >
                            <h3 className="mb-4 text-lg font-semibold">
                                {group.category}
                            </h3>
                            <motion.ul
                                variants={containerVariants}
                                className="flex flex-wrap gap-2"
                            >
                                {group.items.map((skill) => {
                                    return (
                                        <motion.li
                                            variants={pillVariants}
                                            key={skill}
                                            className="flex items-center gap-2 rounded-full border border-border 
                                                px-3 py-1 text-sm text-foreground transition-all duration-200
                                                hover:-translate-y-0.5 hover:border-accent/50 hover:bg-accent/5
                                            "
                                        >
                                            {skillIcons[skill] && (
                                                <Image
                                                    src={skillIcons[skill]}
                                                    alt={skill}
                                                    width={16}
                                                    height={16}
                                                    className={`shrink-0 ${blackIcons.includes(skill) ? 'dark:invert' : ''}`}
                                                />
                                            )}
                                            <span>{skill}</span>
                                        </motion.li>
                                    )
                                })}
                            </motion.ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}