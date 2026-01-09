import { skillsData } from "../data/skills";
import { skillIcons } from "../data/skillIcons";
import Image from "next/image";

export default function Skills () {
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
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {skillsData.map((group) => (
                        <div
                            key={group.category}
                            className="rounded-2xl border border-border bg-surface p-6"
                        >
                            <h3 className="mb-4 text-lg font-semibold">
                                {group.category}
                            </h3>
                            <ul className="flex flex-wrap gap-2">
                                {group.items.map((skill) => {
                                    return (
                                        <li
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
                                                    className="shrink-0"
                                                />
                                            )}
                                            <span>{skill}</span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}