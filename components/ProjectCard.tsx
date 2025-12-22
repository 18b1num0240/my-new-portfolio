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
            className="group relative rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 transition-all hover:bg-[#111111] hover:border-white/20"
        >
            {/* Top Right Category Badge */}
            {p.category && (
                <div className="absolute right-6 top-6 flex h-16 w-16 flex-col items-center justify-center rounded-full border border-white/10 bg-white/5 text-[10px] font-bold tracking-tighter text-neutral-400 group-hover:border-teal-500/50 group-hover:text-white transition-all">
                    <span className="text-white/50 text-[8px] mb-1 opacity-50">{"</>"}</span>
                    <span className="text-center px-1 leading-tight">{p.category}</span>
                </div>
            )}

            <div className="flex flex-col h-full">
                <div className="pr-16"> {/* Leave space for the badge */}
                    <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-teal-400 transition-colors">
                        {p.title}
                    </h3>
                    <p className="mt-4 text-neutral-400 leading-relaxed text-sm">
                        {p.description}
                    </p>
                </div>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                    {p.tags.slice(0, 5).map((t) => (
                        <span
                            key={t}
                            className="rounded-full bg-white/5 px-4 py-1.5 text-xs font-medium text-neutral-300 transition-colors group-hover:bg-white/10"
                        >
                            {t}
                        </span>
                    ))}
                    {p.tags.length > 5 && (
                        <span className="rounded-full bg-white/5 px-4 py-1.5 text-xs font-medium text-neutral-300">
                            +{p.tags.length - 5} more
                        </span>
                    )}
                </div>

                {/* Points/Features */}
                {p.points && (
                    <ul className="mt-8 space-y-3">
                        {p.points.map((point, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-neutral-400 leading-relaxed">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500/50" />
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                )}

                {/* Bottom Bar: subCategory and Links */}
                <div className="mt-12 flex items-center justify-between pt-6 border-t border-white/5">
                    <div className="text-sm font-medium text-neutral-500 group-hover:text-teal-500/70 transition-colors">
                        {p.subCategory || (p.year && `Year ${p.year}`)}
                    </div>

                    <div className="flex gap-6">
                        {p.live && (
                            <a
                                href={p.live}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 text-sm font-semibold text-white hover:text-teal-400 transition-colors"
                            >
                                Live Demo <ExternalLink size={14} />
                            </a>
                        )}
                        {p.github && (
                            <a
                                href={p.github}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 text-sm font-semibold text-white hover:text-teal-400 transition-colors"
                            >
                                Code <ExternalLink size={14} />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
