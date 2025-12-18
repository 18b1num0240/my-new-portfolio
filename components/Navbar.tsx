"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Achievements", path: "/achievements" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

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
                </div>

                {/* Right Placeholder to maintain centering */}
                <div className="hidden w-[100px] lg:block" />
            </div>
        </motion.nav>
    );
}
