"use client";

import { useState } from "react";
import { FolderGit, Layout, Smartphone, HelpCircle, Check, Bug, ShieldAlert } from "lucide-react";

const GithubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: "resonance",
      title: "Resonance Ticket Management",
      category: "web-api",
      categoryLabel: "Web UI & API Automation",
      summary: "Resonance is a web-based bug tracking system from Dibimbing.id used to log and manage bug tickets. Built a robust regression suite executing both frontend user journeys and REST API contract checks.",
      metrics: {
        label: "Key Metric Achieved",
        value: "85%",
        subValue: "Automation Coverage",
        detail: "Delivered 24 robust Web UI automation scripts and 17 API test collections with a 100% execution success rate.",
      },
      approach: "Engineered automated UI tests utilizing the structured Page Object Model (POM) in Java & Maven. Developed backend integration contract testing setups using REST Assured.",
      bugsFound: [
        { type: "CRITICAL", desc: "API returned HTTP 500 instead of HTTP 400/404 during invalid resource queries." },
        { type: "MAJOR", desc: "Mandatory input field UI triggers failed validation warnings but submitted partial data on enter." }
      ],
      tools: ["Java", "Selenium", "Rest Assure", "Postman", "IntelliJ IDEA", "Google Sheets"],
      github: "https://github.com/Raza-fahmi/resonance-api-ui-automation.git",
    },
    {
      id: "saucedemo",
      title: "Mobile E-Commerce (Saucedemo App)",
      category: "mobile",
      categoryLabel: "Mobile Automation",
      summary: "Designed an automated end-to-end framework validating checkout funnels over the Saucedemo Mobile E-Commerce Application running on Android devices.",
      metrics: {
        label: "Execution Standard",
        value: "Flawless",
        subValue: "Transaction Coverage",
        detail: "E2E test cases mapped across authentication, catalogue search, cart processing, and checkout workflows.",
      },
      approach: "Mitigated flaky test behavior by shifting raw thread sleep delays to dynamic Explicit Wait handlers. Optimized locator mapping libraries using refined, robust XPath locators.",
      bugsFound: [
        { type: "MEDIUM", desc: "Cart counter state failed to decrement instantly upon item deletion on specific Android API levels." }
      ],
      tools: ["Java", "Appium", "Android Studio", "IntelliJ IDEA", "Google Sheets"],
      github: "https://github.com/Raza-fahmi/appium-automation-saucedemo.git",
    },
    {
      id: "lms-b2b",
      title: "Web & API Automation – LMS B2B",
      category: "web-api",
      categoryLabel: "Web UI & API Automation",
      summary: "A web and API automation testing project targeting the CRUD Employee features of a Business-to-Business Learning Management System to enforce deployment stability.",
      metrics: {
        label: "CI/CD Gate Decision",
        value: "100%",
        subValue: "Verification Run Pass",
        detail: "Automated regression tests run via GitHub Actions. Led to a final HOLD RELEASE gate decision due to business logic bugs.",
      },
      approach: "Built parallel test threads in Selenium and REST Assured. Integrated tests directly into GitHub Actions with real-time Slack reporting notifications.",
      bugsFound: [
        { type: "MAJOR", desc: "Employee records creation allowed duplicate email addresses without triggering validation warnings." },
        { type: "MEDIUM", desc: "Slack channel webhook payloads failed to attach full JUnit XML test report reports on network timeout." }
      ],
      tools: ["Java", "Selenium", "Rest Assure", "Postman", "GitHub Actions", "Slack Webhook"],
      github: "https://github.com/Raza-fahmi/dibimbing-lms-automation.git",
    },
  ];

  const filteredProjects = filter === "all" ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 border-t border-slate-100 bg-slate-50 relative">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-semibold tracking-widest text-emerald-600 uppercase">Section 02</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Case Studies & Automation Projects</h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Production-grade test automation suites covering web application frontends, REST APIs, and native mobile checkouts.
          </p>
        </div>

        {/* Filter Tab Buttons */}
        <div className="flex justify-center gap-2 mb-12">
          {["all", "web-api", "mobile"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4.5 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition duration-200 capitalize cursor-pointer ${
                filter === cat
                  ? "bg-slate-900 border-slate-900 text-white font-bold"
                  : "bg-white border-slate-200 text-slate-600 hover:border-slate-350 hover:text-slate-900"
              }`}
            >
              {cat === "all" ? "Show All" : cat === "web-api" ? "Web & API" : "Mobile Automation"}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-3xl border border-slate-200 overflow-hidden flex flex-col justify-between h-full bg-white group hover:border-indigo-400 transition duration-300 shadow-sm"
            >
              {/* Card Header & Main Description */}
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Category Badge & Icon */}
                <div className="flex justify-between items-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border border-slate-100 bg-slate-50 text-slate-500">
                    {project.category === "mobile" ? <Smartphone className="w-3.5 h-3.5 text-cyan-600" /> : <Layout className="w-3.5 h-3.5 text-indigo-600" />}
                    {project.categoryLabel}
                  </span>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-350 transition flex items-center justify-center"
                    title="View GitHub Repository"
                  >
                    <GithubIcon />
                  </a>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition duration-200">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {project.summary}
                </p>

                {/* Grid layout for Metrics & Approach info */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 border-t border-b border-slate-100 py-6">
                  
                  {/* Metric Display */}
                  <div className="sm:col-span-5 bg-slate-50 p-4 rounded-2xl border border-slate-150 flex flex-col justify-center">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1 block">
                      {project.metrics.label}
                    </span>
                    <span className="text-3xl font-black text-cyan-600 tracking-tight leading-none mb-1">
                      {project.metrics.value}
                    </span>
                    <span className="text-xs font-bold text-slate-900 block">
                      {project.metrics.subValue}
                    </span>
                  </div>

                  {/* Approach Display */}
                  <div className="sm:col-span-7 flex flex-col justify-center pl-2">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1.5 block">
                      Testing Strategy
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {project.approach}
                    </p>
                  </div>
                </div>

                {/* Bullet details on Metrics */}
                <p className="text-[11px] sm:text-xs text-slate-500 font-mono leading-relaxed bg-slate-50/50 p-3 rounded-xl border border-slate-100">
                  <Check className="inline w-3.5 h-3.5 text-emerald-600 mr-2 -mt-0.5" />
                  {project.metrics.detail}
                </p>

                {/* Bugs Uncovered Section */}
                <div className="space-y-2">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                    Bugs Uncovered & Logged
                  </span>
                  <div className="space-y-1.5">
                    {project.bugsFound.map((bug, idx) => (
                      <div key={idx} className="flex gap-2 text-xs">
                        <span className={`px-1.5 py-0.2 h-fit rounded text-[8px] font-black border font-mono tracking-wider ${
                          bug.type === "CRITICAL" 
                            ? "bg-rose-500/10 text-rose-600 border-rose-500/20" 
                            : bug.type === "MAJOR"
                              ? "bg-amber-500/10 text-amber-600 border-amber-500/20"
                              : "bg-slate-100 text-slate-500 border-slate-200"
                        }`}>
                          {bug.type}
                        </span>
                        <span className="text-slate-650 leading-relaxed font-mono text-[11px]">
                          {bug.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Tools Tags Grid - Card Footer */}
              <div className="bg-slate-50 px-6 py-4.5 border-t border-slate-100 flex flex-wrap gap-1.5">
                {project.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded text-[10px] font-medium bg-white text-slate-600 border border-slate-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
