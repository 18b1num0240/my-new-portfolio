"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export default function AboutSection() {
    return (
        <section className="relative py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
                    >
                        About <span className="text-teal-400">Me</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-6 text-lg leading-8 text-neutral-400"
                    >
                        Passionate about building innovative solutions at the intersection of cloud computing,
                        full-stack development, and emerging technologies.
                    </motion.p>
                </div>

                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col gap-8 text-lg leading-8 text-neutral-300"
                    >
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
                            This experience strengthened my ability to deliver end-to-end features with clean, maintainable code.
                        </p>
                    </motion.div>

                    {/* Education Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="lg:pl-8 lg:pt-4"
                    >
                        <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-teal-500/30 hover:bg-white/10">
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400">
                                    <GraduationCap className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">
                                        Software Engineering Program
                                    </h3>
                                    <p className="mt-1 text-teal-400 font-medium">
                                        Mongolian National University of Mongolia
                                    </p>

                                    <div className="mt-6 flex flex-wrap gap-4 text-sm text-neutral-400">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="h-4 w-4" />
                                            <span>2018-2024</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <MapPin className="h-4 w-4" />
                                            <span>Ulaanbaatar, Mongolia</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Subtle Decorative element */}
                            <div className="absolute -bottom-px -right-px h-24 w-24 bg-gradient-to-br from-teal-500/20 to-transparent blur-2xl opacity-50" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
