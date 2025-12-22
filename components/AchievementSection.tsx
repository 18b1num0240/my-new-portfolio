"use client";

import { motion } from "framer-motion";
import { Trophy, Users, Target, Award } from "lucide-react";

const achievements = [
    {
        title: "Revolution of Youth Organization",
        subtitle: "Organizer ",
        description: "Introduced peers to information about foreign universities",
        icon: Award,
    },
    {
        title: "Let’s Hold Their Hands” Program",
        subtitle: "Organizer",
        description: "Spent a day with disabled children to support social inclusion",
        icon: Award,
    },
    // {
    //     title: "Top 50 / 2500",
    //     subtitle: "Hack With Uttar Pradesh",
    //     description: "Ranked Top 50 out of 2500+ teams",
    //     icon: Target,
    // },
    // {
    //     title: "1500+ Members",
    //     subtitle: "Coders Circle",
    //     description: "Co-founded a tech community",
    //     icon: Users,
    // },
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
                    Organized Events
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mt-4 text-neutral-400 text-lg"
                >
                    Organized events and initiatives to support social inclusion and awareness.
                </motion.p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {achievements.map((item, idx) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="group relative rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 transition-all hover:bg-[#111111] hover:border-teal-500/30"
                    >
                        {/* Top Left Icon */}
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-400 ring-1 ring-teal-500/20 group-hover:scale-110 transition duration-300">
                            <item.icon size={24} />
                        </div>

                        <div className="flex flex-col h-full">
                            <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-teal-400 transition-colors">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-sm font-semibold text-neutral-500 uppercase tracking-wider">
                                {item.subtitle}
                            </p>
                            <p className="mt-4 text-sm text-neutral-400 leading-relaxed">
                                {item.description}
                            </p>
                        </div>

                        {/* Bottom Accent Line */}
                        <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
