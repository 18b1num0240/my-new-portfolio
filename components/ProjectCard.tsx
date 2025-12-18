"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ p }: { p: Project }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur
                 hover:bg-white/10 hover:border-white/20 transition"
        >
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="text-xs text-neutral-400">{p.year ?? ""}</p>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight">
                        {p.title}
                    </h3>
                    <p className="mt-2 text-neutral-300 leading-relaxed">
                        {p.description}
                    </p>
                </div>

                <div className="flex gap-2">
                    {p.live && (
                        <a
                            href={p.live}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-xl border border-white/10 p-2 text-neutral-300 hover:text-white hover:border-white/20 transition"
                            aria-label="Live demo"
                        >
                            <ExternalLink size={18} />
                        </a>
                    )}
                    {p.github && (
                        <a
                            href={p.github}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-xl border border-white/10 p-2 text-neutral-300 hover:text-white hover:border-white/20 transition"
                            aria-label="GitHub"
                        >
                            <Github size={18} />
                        </a>
                    )}
                </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                    <span
                        key={t}
                        className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-neutral-300"
                    >
                        {t}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}
