'use client'

import { skillsData } from "../data/skills";
import { skillIcons } from "../data/skillIcons";
import Image from "next/image";
import { motion } from "framer-motion";
import { skillsContainer, skillsCard, skillsPill } from "../lib/motion";

export default function Skills() {
    const blackIcons = [
        "Next.js",
        "Express.js",
        "GitHub",
        "CodePen"
    ];

    return (
        <section
            id="skills"
            className="relative scroll-mt-20 py-10 md:py-20"
        >
            <div className="mx-auto max-w-6xl px-6 text-center">
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
                    variants={skillsContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                >
                    {skillsData.map((group) => (
                        <motion.div
                            variants={skillsCard}
                            key={group.category}
                            className="rounded-2xl border border-border bg-surface p-6 
                                transition-colors duration-300 hover:border-accent/30 hover:bg-accent/2
                            "
                        >
                            <h3 className="mb-4 text-lg font-semibold">
                                {group.category}
                            </h3>
                            <motion.ul
                                variants={skillsContainer}
                                className="flex flex-wrap gap-2"
                            >
                                {group.items.map((skill) => (
                                    <motion.li
                                        variants={skillsPill}
                                        key={skill}
                                        className="group flex items-center gap-2 rounded-full border border-border 
                                            px-3 py-1 text-sm text-foreground transition-all duration-200
                                            hover:-translate-y-0.5 hover:shadow-md hover:shadow-accent/10
                                        "
                                    >
                                        {skillIcons[skill] && (
                                            <Image
                                                src={skillIcons[skill]}
                                                alt=""
                                                aria-hidden="true"
                                                width={16}
                                                height={16}
                                                className={`shrink-0 transition-transform duration-200 
                                                    ${blackIcons.includes(skill) ? 'dark:invert' : ''}
                                                    group-hover:scale-110
                                                `}
                                            />
                                        )}
                                        <span>{skill}</span>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}