"use client";

import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import ProjectFilters from "@/components/ProjectFilters";

import Container from "@/components/Container";

export default function ProjectsPage() {
    const tabs = ["All", "Frontend", "Backend", "UI/UX"];
    const [activeTab, setActiveTab] = useState("All");
    const [search, setSearch] = useState("");

    const filtered = useMemo(() => {
        const q = search.trim().toLowerCase();

        return projects.filter((p) => {
            const matchesTab =
                activeTab === "All" || p.tags.some((t) => t.toLowerCase() === activeTab.toLowerCase());

            const hay = `${p.title} ${p.description} ${p.tags.join(" ")}`.toLowerCase();
            const matchesSearch = q === "" || hay.includes(q);

            return matchesTab && matchesSearch;
        });
    }, [activeTab, search]);

    return (
        <main className="min-h-screen pt-24 pb-20">
            <Container>
                <section className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-xl">
                    {/* Subtle Gradient Glow */}
                    <div className="absolute -top-24 -right-24 h-64 w-64 bg-teal-500/10 blur-[100px]" />

                    <div className="relative z-10">
                        <p className="text-sm font-medium tracking-widest text-teal-400 uppercase">Work</p>
                        <h1 className="mt-2 text-5xl font-bold tracking-tight text-white sm:text-6xl">Projects</h1>
                        <p className="mt-4 text-neutral-400 max-w-2xl text-lg leading-relaxed">
                            A collection of things I’ve built. You can filter by category and search by keywords.
                        </p>

                        <ProjectFilters
                            tabs={tabs}
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                            search={search}
                            setSearch={setSearch}
                        />
                    </div>
                </section>

                <div className="mt-12 grid gap-8 md:grid-cols-2">
                    {filtered.map((p) => (
                        <ProjectCard key={p.title} p={p} />
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div className="mt-20 text-center">
                        <p className="text-neutral-400 text-lg">No projects found matching your criteria.</p>
                        <button
                            onClick={() => { setActiveTab("All"); setSearch(""); }}
                            className="mt-4 text-teal-400 hover:underline"
                        >
                            Reset filters
                        </button>
                    </div>
                )}
            </Container>
        </main>
    );
}
