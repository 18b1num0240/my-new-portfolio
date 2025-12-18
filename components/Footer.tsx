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
                                <a href="mailto:contact@example.com" className="flex items-center gap-3 transition hover:text-teal-400">
                                    <Mail size={16} />
                                    Email
                                </a>
                            </li>
                            <li>
                                <a href="tel:+1234567890" className="flex items-center gap-3 transition hover:text-teal-400">
                                    <Phone size={16} />
                                    Phone
                                </a>
                            </li>
                            <li className="flex gap-4 pt-2">
                                <a href="https://github.com" target="_blank" rel="noreferrer" className="text-neutral-400 transition hover:text-white">
                                    <Github size={20} />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-neutral-400 transition hover:text-white">
                                    <Linkedin size={20} />
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
