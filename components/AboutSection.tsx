"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

    return (
        <section className="relative py-24 sm:py-32 overflow-hidden">
            {/* Unique Organic Background Blobs */}
            <div className="absolute top-0 left-0 -translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none animate-pulse" />
            <div className="absolute bottom-0 right-0 translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
                    >
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Me</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-6 text-lg leading-8 text-neutral-400"
                    >
                        Passionate about building innovative solutions at the intersection of cloud computing,
                        full-stack development, and emerging technologies.
                    </motion.p>
                </div>

                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-5 items-start">
                    {/* Text Content - Spans 3 columns */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-3 flex flex-col gap-8 text-lg leading-8 text-neutral-300"
                    >
                        <div className="space-y-6">
                            <p>
                                Hi! I&apos;m <span className="text-white font-medium">Gan-Erdene</span>, currently pursuing a{" "}
                                <span className="text-white font-medium">Software Engineering program</span> at the{" "}
                                <span className="text-white font-medium">National University of Mongolia</span> in Ulaanbaatar.
                                I&apos;m passionate about building reliable software solutions, with a strong focus on backend
                                development and clean system design.
                            </p>

                            <p>
                                I worked at <span className="text-white font-medium">SoftMaster</span> as a{" "}
                                <span className="text-white font-medium">backend-focused full-stack developer</span> (70% backend / 30% frontend),
                                where I developed and maintained production features using{" "}
                                <span className="text-white font-medium">Laravel (PHP)</span> and built{" "}
                                <span className="text-white font-medium">RESTful APIs</span> to support web applications.
                                I also contributed to frontend improvements, ensuring smooth data flow and seamless API integration.
                            </p>
                        </div>

                        {/* Integrated Social Links */}
                        <div className="flex flex-wrap gap-4 mt-4">
                            {[
                                { icon: Github, label: "GitHub", href: "#" },
                                { icon: Linkedin, label: "LinkedIn", href: "#" },
                                { icon: Mail, label: "Email", href: "mailto:contact@example.com" }
                            ].map((social, i) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white transition-colors hover:bg-white/10 hover:border-teal-500/30"
                                >
                                    <social.icon className="h-4 w-4 text-teal-400" />
                                    {social.label}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Visuals - Spans 2 columns */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Profile Photo with unique Orbiting Border */}
                        <div className="relative mx-auto lg:mx-0 w-fit group">
                            {/* Orbiting Ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="absolute -inset-4 border-2 border-dashed border-teal-500/20 rounded-full pointer-events-none"
                            />

                            {/* Inner Pulse */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-full blur-xl group-hover:opacity-100 transition duration-700 opacity-50" />

                            <div className="relative aspect-square w-64 sm:w-80 overflow-hidden rounded-full border-2 border-white/10 bg-neutral-900 ring-4 ring-teal-500/10">
                                <Image
                                    src="/profile_no_bg.png"
                                    alt="Gan-Erdene"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Refined Education Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-teal-500/30 hover:bg-white/10 group">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 group-hover:scale-110 transition-transform">
                                        <GraduationCap className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">
                                            Software Engineering
                                        </h3>
                                        <p className="mt-1 text-teal-400 font-medium text-sm">
                                            National University of Mongolia
                                        </p>

                                        <div className="mt-6 flex flex-col gap-3 text-sm text-neutral-400">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="h-4 w-4 text-emerald-400/70" />
                                                <span>2018 - 2024</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MapPin className="h-4 w-4 text-emerald-400/70" />
                                                <span>Ulaanbaatar, Mongolia</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Subtle Accent */}
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <div className="w-12 h-12 rounded-full border-t-2 border-r-2 border-teal-500" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
