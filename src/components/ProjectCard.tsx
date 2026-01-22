'use client'

import Image from "next/image";
import { Project } from "../data/projects";

type ProjectCardProps = {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article 
            className="
                group flex h-full flex-col overflow-hidden rounded-2xl 
                border border-border bg-surface transition-all 
                duration-300 hover:-translate-y-1 hover:shadow-lg
            "
        >
            {/* Project Image */}
            <div 
                className="
                    relative aspect-video overflow-hidden 
                    border-b border-border
                "
            >
                <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform 
                        duration-500 group-hover:scale-105
                    "
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
                <div 
                    className="
                        absolute inset-0 bg-linear-to-t from-black/50 
                        to-transparent opacity-0 transition-opacity 
                        duration-500 group-hover:opacity-100
                    "
                ></div>
            </div>
            {/* Content */}
            <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-lg font-semibold">
                    {project.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed">
                    {project.description}
                </p>
                {/* Tech Stack */}
                <ul className="mb-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                        <li
                            key={tech}
                            className="
                                text-accent rounded-full border 
                                border-border px-3 py-1 text-xs hover:bg-muted/10
                            "
                        >
                            {tech}
                        </li>
                    ))}
                </ul>
                {/* Actions */}
                <div className="mt-auto flex gap-3">
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            intro-cta-button inline-flex flex-1 items-center 
                            justify-center rounded-lg border border-border 
                            px-4 py-2 text-sm font-medium transition-colors 
                            hover:bg-accent/90
                        "
                    >
                        Live Demo
                    </a>
                    <a 
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            inline-flex flex-1 items-center justify-center 
                            rounded-lg border border-border px-4 py-2 
                            text-sm font-medium transition-colors 
                            hover:bg-border
                        "
                    >
                        GitHub Repo
                    </a>
                </div>
            </div>
        </article>
    );
}