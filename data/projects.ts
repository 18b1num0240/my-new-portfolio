export type Project = {
    title: string;
    description: string;
    tags: string[];
    year?: string;
    live?: string;
    github?: string;
};

// Real data based on your recent work
export const projects: Project[] = [
    {
        title: "Test Project 1",
        description: "Test Project 1 Description",
        tags: ["Frontend", "React", "Social"],
        year: "2025",
    },
    {
        title: "Test Project 2",
        description: "Test Project 2 Description",
        tags: ["Backend", "Java", "Quarkus", "Security"],
        year: "2025",
        github: "https://github.com/gan-erdene/quarkus-auth",
    },
    {
        title: "Test Project 3",
        description: "Test Project 3 Description",
        tags: ["Backend", "Java", "API"],
        year: "2025",
    },
    {
        title: "Test Project 4",
        description: "Test Project 4 Description",
        tags: ["Frontend", "Next.js", "Tailwind"],
        year: "2025",
        live: "https://gan-erdene-portfolio.vercel.app",
    },
    {
        title: "Test Project 5",
        description: "Test Project 5 Description",
        tags: ["Cyber Security", "Tool", "Python"],
        year: "2024",
    },
    {
        title: "Test Project 6",
        description: "Test Project 6 Description",
        tags: ["Algorithm", "Java", "Optimization"],
        year: "2024",
    },
];
