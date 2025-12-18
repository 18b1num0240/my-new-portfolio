"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Achievements", href: "/achievements" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-md">
            <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 relative">
                {/* Logo */}
                <Link href="/" className="font-semibold tracking-tight z-10">
                    Gan-Erdene
                </Link>

                {/* Centered Navigation */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="flex items-center gap-6">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "px-4 py-1.5 text-sm font-medium transition-all rounded-full",
                                        isActive
                                            ? "bg-white/10 text-teal-400 shadow-sm"
                                            : "text-neutral-400 hover:text-white"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* Placeholder for right side to balance if needed, or keeping it empty */}
                <div className="w-[100px]" />
            </nav>
        </header>
    );
}
