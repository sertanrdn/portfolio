export type Project = {
    id: string;
    title: string;
    description: string;
    image: string;
    tech: string[];
    liveUrl: string;
    repoUrl: string;
}

export const projectsData: Project[] = [
    {
        id: "viable-volunteer-dashboard",
        title: "Viable Volunteer Dashboard",
        description: "A production-grade volunteer management dashboard enabling community volunteers to manage projects, events, resources through a secure web interface.",
        image: "/projects/viable-dashboard.png",
        tech: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Drizzle", "PostgreSQL", "Cypress"],
        liveUrl: "https://dashboard.viable.community/dashboard",
        repoUrl: "https://github.com/Viable-Community/viable-dashboard"
    },
    {
        id: "elva-travel-planner",
        title: "ELVA Trip Planner",
        description: "A trip planning tool that helps travelers organize trips with daily activities including locations, pricing, ratings, notes, and photos. Users can duplicate and customize trips, making planning easier without switching between multiple apps.",
        image: "/projects/elva.png",
        tech: ["React", "Tailwind CSS", "MongoDB", "Node.js", "Express.js", "Zod"],
        liveUrl: "https://c51c.hyf.dev/",
        repoUrl: "https://github.com/HackYourFutureProjects/c51-final-project-group-C"
    },
    {
        id: "portfolio",
        title: "Personal Portfolio",
        description: "A modern, responsive portfolio website built to showcase projects and skills with clean UI and smooth interactions.",
        image: "/projects/portfolio.png",
        tech: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
        liveUrl: "https://sertanerdogan.me",
        repoUrl: "https://github.com/sertanrdn/portfolio"
    }
];