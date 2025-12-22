"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const skillCategories = [
    {
        title: "Programming Languages",
        icon: "💻",
        years: "4+",
        skills: [
            { name: "JavaScript", level: 80 },
            { name: "Java", level: 50 },
            { name: "Golang", level: 78 },
            { name: "PHP", level: 80 },
        ],
    },
    {
        title: "Frontend Development",
        icon: "🎨",
        years: "3+",
        skills: [
            { name: "Next.js", level: 50 },
            { name: "Tailwind CSS", level: 50 },
            { name: "HTML & CSS", level: 90 },
        ],
    },
    {
        title: "Backend & Databases",
        icon: "⚙️",
        years: "3+",
        skills: [
            { name: "Laravel", level: 70 },
            { name: "Symfony", level: 80 },
            { name: "PostgreSQL", level: 82 },
            { name: "Oracle", level: 70 },
            { name: "Supabase", level: 75 },
        ],
    },
];


export default function SkillSection() {
    return (
        <section className="py-20 relative z-10">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold tracking-tight sm:text-5xl"
                >
                    Technical Skills
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mt-4 text-neutral-400 text-lg"
                >
                    Proficient in modern web technologies and cloud computing platforms
                </motion.p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {skillCategories.map((cat, idx) => (
                    <motion.div
                        key={cat.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 transition-all hover:bg-[#111111] hover:border-teal-500/30"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">{cat.icon}</span>
                                <h3 className="text-xl font-semibold">{cat.title}</h3>
                            </div>
                            <span className="rounded-full border border-white/20 bg-white/5 px-2 py-0.5 text-xs font-medium text-neutral-400">
                                {cat.years}
                            </span>
                        </div>

                        <div className="space-y-6">
                            {cat.skills.map((skill) => (
                                <div key={skill.name}>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-sm font-medium text-neutral-300">{skill.name}</span>
                                        <span className="text-sm font-medium text-teal-400">{skill.level}%</span>
                                    </div>
                                    <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                            className="h-full bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
