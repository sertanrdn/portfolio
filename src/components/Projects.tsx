import ProjectCard from "./ProjectCard";
import { projectsData } from "../data/projects";

export default function Projects() {
    return (
        <section
            id="projects"
            className="relative scroll-mt-24 py-10 md:py-20"
        >
            <div className="mx-auto max-w-6xl px-6">
                {/* Section header */}
                <div className="mb-12 mx-auto max-w-2xl text-center">
                    <p className="mb-2 text-sm font-bold tracking-widest text-accent">
                        PROJECTS
                    </p>
                    <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                        Selected Work
                    </h2>
                    <p className="text-muted">
                        A selection of projects I’ve worked on, showcasing real-world
                        applications, clean UI, and thoughtful engineering decisions.
                    </p>
                </div>
                {/* Projects grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {projectsData.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}