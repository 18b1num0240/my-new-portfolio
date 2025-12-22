"use client";

import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

export default function ExperiencePage() {
    return (
        <main className="relative min-h-screen pt-20">
            <Container>
                <ExperienceSection />
            </Container>
            <Footer />
        </main>
    );
}
