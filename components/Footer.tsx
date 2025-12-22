"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Phone, Heart } from "lucide-react";
import Container from "./Container";

export default function Footer() {
    return (
        <footer className="relative z-10 border-t border-white/5 bg-black/50 py-16 backdrop-blur-md">
            <Container>
                <div className="grid gap-12 md:grid-cols-3">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
                            Gan-Erdene
                        </Link>
                        <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-400">
                            Building high-performance backend systems and immersive digital experiences.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="md:ml-auto">
                        <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
                        <ul className="space-y-4 text-sm text-neutral-400">
                            <li><Link href="/" className="transition hover:text-teal-400">Home</Link></li>
                            <li><Link href="/about" className="transition hover:text-teal-400">About</Link></li>
                            <li><Link href="/experience" className="transition hover:text-teal-400">Experience</Link></li>
                            <li><Link href="/projects" className="transition hover:text-teal-400">Projects</Link></li>
                            <li><Link href="/achievements" className="transition hover:text-teal-400">Achievements</Link></li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div className="md:ml-auto">
                        <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">Connect</h3>
                        <ul className="space-y-4 text-sm text-neutral-400">
                            <li>
                                <a href="mailto:ganerdeneganaa92@gmail.com" className="flex items-center gap-3 transition hover:text-teal-400">
                                    <Mail size={16} />
                                    Email: ganerdeneganaa92@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+97689696185" className="flex items-center gap-3 transition hover:text-teal-400">
                                    <Phone size={16} />
                                    Phone: +976 89696185
                                </a>
                            </li>
                            <li className="flex gap-4 pt-4">
                                <a
                                    href="https://github.com/18b1num0240"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all hover:border-teal-500/50 hover:bg-teal-500/10 hover:shadow-[0_0_15px_rgba(20,184,166,0.3)]"
                                    aria-label="GitHub"
                                >
                                    <Github size={18} className="text-white/70 transition-colors group-hover:text-white" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/ganerdene-ganaa-b1092a25b/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all hover:border-teal-500/50 hover:bg-teal-500/10 hover:shadow-[0_0_15px_rgba(20,184,166,0.3)]"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={18} className="text-white/70 transition-colors group-hover:text-white" />
                                </a>
                                <a
                                    href="mailto:ganerdeneganaa92@gmail.com"
                                    className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all hover:border-teal-500/50 hover:bg-teal-500/10 hover:shadow-[0_0_15px_rgba(20,184,166,0.3)]"
                                    aria-label="Email"
                                >
                                    <Mail size={18} className="text-white/70 transition-colors group-hover:text-white" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 border-t border-white/5 pt-8 text-center text-xs text-neutral-500">
                    <p>© {new Date().getFullYear()} Gan-Erdene. All rights reserved.</p>
                    <p className="mt-2 flex items-center justify-center gap-1">
                        Built with <Heart size={12} className="text-red-500 fill-red-500" /> using Next.js and Tailwind CSS
                    </p>
                </div>
            </Container>
        </footer>
    );
}
