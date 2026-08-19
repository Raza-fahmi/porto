"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/hero";
import Experience from "@/components/experience";
import IncidentAnalysis from "@/components/incident-analysis";
import PipelineVisualizer from "@/components/pipeline-visualizer";
import Projects from "@/components/projects";
import TechStack from "@/components/tech-stack";
import Contact from "@/components/contact";
import CvViewer from "@/components/cv-viewer";
import { Terminal, Shield, Menu, X, Code, ExternalLink } from "lucide-react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { label: "Credentials", id: "hero" },
    { label: "Experiences", id: "experience" },
    { label: "Incident Analysis", id: "incident-analysis" },
    { label: "CI/CD Pipeline", id: "pipeline-visualizer" },
    { label: "Projects", id: "projects" },
    { label: "Tech Stack", id: "tech-stack" },
    { label: "Contact", id: "contact" },
  ];

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: id === "hero" ? 0 : offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full glass-panel border-b border-zinc-900/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection("hero")}
              className="flex items-center gap-2 group font-mono font-bold text-white tracking-wider"
            >
              <Terminal className="w-5 h-5 text-cyan-400 group-hover:rotate-6 transition duration-200" />
              <span>REZA_FAHMI</span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-xs font-semibold uppercase tracking-wider transition-colors duration-200 cursor-pointer ${
                    activeSection === item.id 
                      ? "text-cyan-400 font-bold" 
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <button 
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-1.5 px-4.5 py-2 rounded-xl text-xs font-bold transition duration-200 border border-zinc-800 bg-zinc-900 hover:bg-zinc-850 hover:border-zinc-700 text-zinc-300 hover:text-white"
              >
                Let&apos;s Talk <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex lg:hidden items-center justify-center p-2 rounded-xl bg-zinc-900 border border-zinc-850 text-zinc-400 hover:text-white transition"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-b border-zinc-900 bg-zinc-950/95 backdrop-blur-lg px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left py-3 px-4 rounded-xl text-sm font-semibold tracking-wide block transition-colors duration-150 ${
                  activeSection === item.id 
                    ? "bg-zinc-900 text-cyan-400 border border-zinc-800" 
                    : "text-zinc-400 hover:bg-zinc-900/40 hover:text-zinc-200"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 px-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full text-center py-3.5 rounded-xl text-sm font-bold bg-indigo-600 hover:bg-indigo-500 text-white transition shadow-lg shadow-indigo-600/10"
              >
                Let&apos;s Collaborate
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <div id="hero">
          <Hero />
        </div>

        {/* Experience Section */}
        <div id="experience">
          <Experience />
        </div>

        {/* Incident Analysis */}
        <div id="incident-analysis">
          <IncidentAnalysis />
        </div>

        {/* CI/CD Pipeline Visualizer */}
        <div id="pipeline-visualizer">
          <PipelineVisualizer />
        </div>

        {/* Projects Grid */}
        <div id="projects">
          <Projects />
        </div>

        {/* Tech Stack Grid */}
        <div id="tech-stack">
          <TechStack />
        </div>

        {/* CV Viewer Section */}
        <CvViewer />

        {/* Contact info & Footer */}
        <div id="contact">
          <Contact />
        </div>
      </main>
    </div>
  );
}
