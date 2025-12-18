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
        <Container>
            <section className="py-10">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                    <p className="text-sm text-neutral-400">Work</p>
                    <h1 className="mt-2 text-4xl font-semibold tracking-tight">Projects</h1>
                    <p className="mt-3 text-neutral-300 max-w-2xl">
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

                <div className="mt-10 grid gap-5 sm:grid-cols-2">
                    {filtered.map((p) => (
                        <ProjectCard key={p.title} p={p} />
                    ))}
                </div>

                {filtered.length === 0 && (
                    <p className="mt-10 text-neutral-400">No projects found.</p>
                )}
            </section>
        </Container>
    );
}
