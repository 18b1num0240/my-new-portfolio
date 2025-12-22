"use client";

import { motion } from "framer-motion";

const skills = [
    { name: "HTML5", icon: "html" },
    { name: "CSS3", icon: "css" },
    { name: "JavaScript", icon: "js" },
    { name: "TypeScript", icon: "ts" },
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "Tailwind CSS", icon: "tailwind" },
    { name: "MySQL", icon: "mysql" },
    { name: "Firebase", icon: "firebase" },
    { name: "AWS", icon: "aws" },
    { name: "Git", icon: "git" },
    { name: "Python", icon: "py" },
    { name: "Node.js", icon: "nodejs" },
];

export default function SkillsGrid() {
    return (
        <section className="relative py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
                    >
                        Technical <span className="text-teal-400">Skills</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-6 text-lg leading-8 text-neutral-400"
                    >
                        Skills I have <span className="text-teal-400/80">mastered yet</span>
                    </motion.p>
                </div>

                <div className="mx-auto mt-20 flex max-w-4xl flex-wrap justify-center gap-6 sm:gap-8">
                    {skills.map((skill, idx) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{
                                scale: 1.1,
                                rotate: 5,
                                zIndex: 50,
                                transition: { duration: 0.2 }
                            }}
                            transition={{
                                delay: idx * 0.05,
                                type: "spring",
                                stiffness: 260,
                                damping: 20
                            }}
                            className="group relative flex flex-col items-center gap-3"
                        >
                            <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all group-hover:border-teal-500/50 group-hover:bg-white/10 sm:h-24 sm:w-24">
                                <img
                                    src={`https://skillicons.dev/icons?i=${skill.icon}`}
                                    alt={skill.name}
                                    className="h-full w-full object-contain filter transition-all group-hover:drop-shadow-[0_0_10px_rgba(20,184,166,0.5)]"
                                    loading="lazy"
                                />
                            </div>
                            <span className="text-xs font-medium text-neutral-400 transition-colors group-hover:text-teal-400">
                                {skill.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
