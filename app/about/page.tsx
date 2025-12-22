"use client";

import AboutSection from "@/components/AboutSection";
import SkillsGrid from "@/components/SkillsGrid";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

export default function AboutPage() {
    return (
        <main className="relative min-h-screen pt-20">
            <Container>
                <AboutSection />
                <SkillsGrid />
            </Container>
            <Footer />
        </main>
    );
}
