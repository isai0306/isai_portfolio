import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

const AboutSection = lazy(() => import("@/components/AboutSection"));
const SkillsSection = lazy(() => import("@/components/SkillsSection"));
const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));
const ExperienceSection = lazy(() => import("@/components/ExperienceSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));

const Index = () => (
  <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative selection:bg-foreground/20">
    <ScrollProgress />
    <div className="film-grain" aria-hidden />
    <CustomCursor />
    <Navbar />
    <main>
      <HeroSection />
      <Suspense fallback={null}>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </Suspense>
    </main>
    <footer className="py-12 px-6 text-center border-t border-border/40 bg-background/80 backdrop-blur-sm">
      <p className="text-muted-foreground text-sm tracking-wide">
        Designed &amp; Built by Isai Kumar K
      </p>
    </footer>
  </div>
);

export default Index;
