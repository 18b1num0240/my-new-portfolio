"use client";

import Link from "next/link";
import TypewriterEffect from "@/components/TypewriterEffect";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import SkillSection from "@/components/SkillSection";
import AchievementSection from "@/components/AchievementSection";
import Footer from "@/components/Footer";

import Container from "@/components/Container";

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center">
        {/* Dynamic Teal/Emerald Organic Glows */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 left-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/10 blur-[120px] pointer-events-none"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 right-0 h-[600px] w-[600px] translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none"
        />

        {/* Viewport Border Glow */}
        <div className="fixed inset-0 pointer-events-none z-50 ring-[1px] ring-white/5 shadow-[inset_0_0_100px_rgba(20,184,166,0.05)]" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative z-10 max-w-3xl"
        >
          <p className="mb-4 text-sm font-medium tracking-widest text-neutral-400 uppercase">
            Hello, I&apos;m
          </p>
          <h1 className="animate-gradient bg-gradient-to-r from-[#6BC7D1] via-[#D16BA0] to-[#6BC7D1] bg-clip-text text-6xl font-extrabold text-transparent sm:text-8xl">
            Gan-Erdene
          </h1>
          <div className="mt-6 text-xl text-teal-400 sm:text-2xl h-8">
            <TypewriterEffect words={["Backend Developer", "Problem Solver", "Innovator"]} />
          </div>

          <div className="mt-10">
            <Link
              href="/projects"
              className="rounded-full bg-teal-500 px-8 py-3 text-lg font-semibold text-black transition hover:bg-teal-400 hover:shadow-[0_0_30px_rgba(45,212,191,0.4)]"
            >
              View Projects
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <Container>
        <section className="py-20 relative z-10">
          <div className="mb-12">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-xs font-medium text-teal-400">
              <span>#</span>
              <span>SELECTED WORK</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Projects
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-neutral-400">
              Projects where I build interactive user interfaces and implement scalable backend APIs with clean, maintainable logic.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 6).map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
        </section>

        <SkillSection />

        <AchievementSection />
      </Container>

      <Footer />
    </>
  );
}
