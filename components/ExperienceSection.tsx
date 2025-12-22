"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
    {
        title: "Software Developer",
        company: "Travel Port Smartsystem",
        period: "2021–2022",
        location: "Ulaanbaatar, Mongolia · Full-time",
        description: "Worked as a software developer focusing on maintaining and enhancing a C++-based system, while also contributing to web development using WordPress and custom frontend solutions.",
        points: [
            "Maintained and enhanced an existing C++ application by fixing bugs and implementing new features",
            "Contributed to the development and improvement of internal software systems",
            "Developed and customized company websites using WordPress"
        ],
        tags: ["C++", "Software Maintenance", "WordPress", "Web Development", "Frontend Development"],
    },
    {
        title: "Full-Stack Developer (Backend-Focused)",
        company: "Soft Master LLC / Софт Мастер ХХК",
        period: "2022-2024",
        location: "Ulaanbaatar, Mongolia - Full-time",
        description: "Worked as a backend-focused full-stack developer, handling core server-side logic while also contributing to frontend features and integrations.",
        points: [
            "Developed and maintained backend systems using Laravel and PHP",
            "Designed and integrated RESTful APIs to support frontend applications",
            "Implemented business logic and handled data processing on the server side",
            "Contributed to frontend development using JavaScript for UI interactions and API integration",
            "Worked closely with frontend developers to deliver end-to-end features"
        ],
        tags: [
            "PostgreSQL",
            "Laravel",
            "PHP",
            "JavaScript",
            "Java",
            "REST API",
            "Full-Stack Development"
        ],
    },
    {
        title: "Back-End Developer",
        company: "Gerege Edtech",
        period: "2024-2025",
        location: "Ulaanbaatar, Mongolia - Full-time",
        description: "Worked as a backend-focused software engineer, leading system migration and backend redevelopment to improve performance, scalability, and maintainability.",
        points: [
            "Migrated an existing Oracle-based system to a Golang v2 backend architecture",
            "Performed data migration from Oracle to PostgreSQL while ensuring data integrity",
            "Designed and implemented RESTful APIs to support frontend applications",
            "Developed additional backend features and improvements on the new Golang system",
            "Collaborated with frontend developers to ensure seamless API integration"
        ],
        tags: ["Golang", "PostgreSQL", "Oracle", "REST API", "System Migration"],
    },
    {
        title: "Backend Software Engineer",
        company: "Digital Mall",
        period: "2025–2026",
        location: "Ulaanbaatar, Mongolia · Full-time",
        description: "Worked as a backend software engineer focusing on e-commerce platform development using PHP, Symfony, and Sylius.",
        points: [
            "Developed and maintained backend features for an e-commerce platform using Symfony and Sylius",
            "Implemented product, order, and customer-related business logic",
            "Built and customized REST APIs to support frontend and third-party integrations",
            "Worked with databases to manage product data, pricing, and order workflows",
            "Contributed to system stability, performance improvements, and bug fixes"
        ],
        tags: ["PHP", "Symfony", "Sylius", "E-commerce", "REST API", "Backend Development"],
    },
];

export default function ExperienceSection() {
    return (
        <section className="relative py-24 sm:py-32 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16 sm:mb-24">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold tracking-tight text-white sm:text-7xl"
                    >
                        Work <span className="text-teal-400">Experience</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-6 text-lg leading-8 text-neutral-400"
                    >
                        My professional journey and key contributions across various organizations.
                    </motion.p>
                </div>

                <div className="relative mx-auto mt-16 max-w-5xl">
                    {/* Vertical middle line */}
                    <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-teal-500/50 via-teal-500/20 to-transparent hidden lg:block" />

                    <div className="space-y-12 lg:space-y-24">
                        {experiences.map((exp, idx) => (
                            <ExperienceItem key={idx} exp={exp} index={idx} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function ExperienceItem({ exp, index }: { exp: any; index: number }) {
    const isEven = index % 2 === 0;

    return (
        <div className={`relative flex flex-col items-center lg:flex-row ${isEven ? "lg:justify-start" : "lg:justify-end"}`}>
            {/* Timeline dot */}
            <div className="absolute left-1/2 top-0 z-10 hidden h-4 w-4 -translate-x-1/2 transform rounded-full border-2 border-teal-500 bg-black lg:block" />

            {/* Content Card */}
            <motion.div
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className={`w-full max-w-lg lg:w-[45%] ${isEven ? "lg:pr-8" : "lg:pl-8"}`}
            >
                <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:border-teal-500/30 hover:bg-white/10">
                    {/* Header */}
                    <div className="mb-4">
                        <h3 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors">
                            {exp.title}
                        </h3>
                        <div className="mt-1 flex items-center gap-2 text-teal-400 font-medium">
                            <Briefcase className="h-4 w-4" />
                            <span>{exp.company}</span>
                        </div>
                    </div>

                    {/* Meta info */}
                    <div className="mb-6 flex flex-wrap gap-4 text-sm text-neutral-400">
                        <div className="flex items-center gap-1.5">
                            <Calendar className="h-4 w-4 text-teal-500/60" />
                            <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <MapPin className="h-4 w-4 text-teal-500/60" />
                            <span>{exp.location}</span>
                        </div>
                    </div>

                    <p className="mb-6 text-neutral-300 leading-relaxed text-sm">
                        {exp.description}
                    </p>

                    <ul className="mb-8 space-y-3">
                        {exp.points.map((point: string, i: number) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-neutral-400 leading-relaxed">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500/50" />
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag: string, i: number) => (
                            <span
                                key={i}
                                className="rounded-full border border-teal-500/20 bg-teal-500/5 px-2.5 py-1 text-xs font-medium text-teal-400"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Hover glow */}
                    <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
            </motion.div>
        </div>
    );
}
