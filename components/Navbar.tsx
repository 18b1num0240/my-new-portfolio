"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronDown, Download } from "lucide-react";

const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [cvOpen, setCvOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300 px-6",
                scrolled ? "py-4" : "py-6"
            )}
        >
            <div className={cn(
                "mx-auto flex max-w-7xl items-center justify-between transition-all duration-300 rounded-full px-6",
                scrolled ? "bg-black/40 backdrop-blur-md border border-white/10 py-2 shadow-xl" : "bg-transparent py-0"
            )}>
                {/* Logo */}
                <Link href="/" className="text-xl font-bold tracking-tighter text-white">
                    Gan-Erdene
                </Link>

                {/* Centered Navigation */}
                <div className="flex items-center gap-1 sm:gap-4">
                    {navItems.map((item) => {
                        const isActive = pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={cn(
                                    "relative px-4 py-1.5 text-sm font-medium transition-colors",
                                    isActive ? "text-teal-400" : "text-neutral-400 hover:text-white"
                                )}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-active"
                                        className="absolute inset-0 rounded-full bg-white/10 shadow-sm"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{item.name}</span>
                            </Link>
                        );
                    })}

                    {/* Download CV Dropdown */}
                    <div className="relative" onMouseEnter={() => setCvOpen(true)} onMouseLeave={() => setCvOpen(false)}>
                        <button
                            className={cn(
                                "flex items-center gap-1 px-4 py-1.5 text-sm font-medium transition-colors",
                                cvOpen ? "text-white" : "text-neutral-400 hover:text-white"
                            )}
                        >
                            CV <ChevronDown size={14} className={cn("transition-transform duration-200", cvOpen && "rotate-180")} />
                        </button>

                        <AnimatePresence>
                            {cvOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute left-1/2 mt-2 w-48 -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A] p-2 shadow-2xl backdrop-blur-xl"
                                >
                                    <a
                                        href="/cv-mn.pdf"
                                        download
                                        className="flex items-center justify-between rounded-xl px-4 py-2 text-sm text-neutral-400 transition-colors hover:bg-white/5 hover:text-teal-400"
                                    >
                                        MN CV Download
                                        <Download size={14} />
                                    </a>
                                    <a
                                        href="/cv-en.pdf"
                                        download
                                        className="flex items-center justify-between rounded-xl px-4 py-2 text-sm text-neutral-400 transition-colors hover:bg-white/5 hover:text-teal-400"
                                    >
                                        EN CV Download
                                        <Download size={14} />
                                    </a>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Right Area (Socials or Placeholder) */}
                <div className="hidden lg:flex w-[100px] justify-end" />
            </div>
        </motion.nav>
    );
}
