"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const socials = [
    { icon: Github, href: "https://github.com/18b1num0240", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ganerdene-ganaa-b1092a25b/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:ganerdeneganaa92@gmail.com", label: "Email" },
];

export default function SocialSidebar() {
    return (
        <div className="fixed left-4 md:left-6 top-1/2 z-40 -translate-y-1/2 flex flex-col gap-5 md:gap-6">
            {socials.map((social, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 + 0.5 }}
                >
                    <Link
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative block rounded-full border border-white/10 bg-black/40 p-3 backdrop-blur-sm transition-all hover:border-teal-500/50 hover:bg-teal-500/10 hover:shadow-[0_0_15px_rgba(20,184,166,0.3)]"
                        aria-label={social.label}
                    >
                        <social.icon className="h-5 w-5 text-white/70 transition-colors group-hover:text-white" />
                        <span className="pointer-events-none absolute left-14 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-neutral-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                            {social.label}
                        </span>
                    </Link>
                </motion.div>
            ))}
            <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mt-4 h-20 w-px self-center bg-gradient-to-b from-teal-500/50 to-transparent"
            />
        </div>
    );
}
