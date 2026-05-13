import React from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Expertise } from "@/components/Expertise";
import { Brands } from "@/components/Brands";
import { Campaigns } from "@/components/Campaigns";
import { AISkills } from "@/components/AISkills";
import { Timeline } from "@/components/Timeline";
import { Contact } from "@/components/Contact";
import { CursorParticles } from "@/components/CursorParticles";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <CursorParticles />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Brands />
        <Campaigns />
        <Timeline />
        <AISkills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
