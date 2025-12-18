"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

export default function TypewriterEffect({ words }: { words: string[] }) {
    const [index, setIndex] = useState(0);
    const text = words[index];
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

    useEffect(() => {
        const controls = animate(count, text.length, {
            type: "tween",
            duration: 1.5,
            ease: "easeInOut",
            onComplete: () => {
                // Wait 2 seconds, then delete
                setTimeout(() => {
                    animate(count, 0, {
                        duration: 1,
                        ease: "easeInOut",
                        onComplete: () => {
                            setIndex((prev) => (prev + 1) % words.length);
                        },
                    });
                }, 2000);
            },
        });
        return controls.stop;
    }, [index, text.length, count, words.length]);

    return (
        <span className="inline-flex">
            <motion.span>{displayText}</motion.span>
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="ml-1 w-[2px] bg-teal-400"
            />
        </span>
    );
}
