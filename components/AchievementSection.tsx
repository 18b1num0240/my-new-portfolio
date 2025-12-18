"use client";

import { motion } from "framer-motion";
import { Trophy, Users, Target, Award } from "lucide-react";

const achievements = [
    {
        title: "Top 15",
        subtitle: "Hack India Finalist",
        description: "Top 15 teams nationwide",
        icon: Award,
    },
    {
        title: "Top 15",
        subtitle: "ZeroDay Apocalypse",
        description: "GDSC Hackathon - Among top 15 teams",
        icon: Trophy,
    },
    {
        title: "Top 50 / 2500",
        subtitle: "Hack With Uttar Pradesh",
        description: "Ranked Top 50 out of 2500+ teams",
        icon: Target,
    },
    {
        title: "1500+ Members",
        subtitle: "Coders Circle",
        description: "Co-founded a tech community",
        icon: Users,
    },
];

export default function AchievementSection() {
    return (
        <section className="py-20 relative z-10">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold tracking-tight sm:text-5xl"
                >
                    Achievements & Impact
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mt-4 text-neutral-400 text-lg"
                >
                    Hackathons, community building, and real-world impact through tech.
                </motion.p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {achievements.map((item, idx) => (
                    <motion.div
                        key={item.subtitle}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur transition hover:bg-white/10 hover:border-white/20"
                    >
                        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-400 ring-1 ring-teal-500/20 group-hover:scale-110 transition duration-300">
                            <item.icon size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                        <p className="mt-1 font-semibold text-teal-400/90">{item.subtitle}</p>
                        <p className="mt-2 text-sm text-neutral-400 group-hover:text-neutral-300 transition">{item.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
