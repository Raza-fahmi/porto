"use client";

import { Briefcase, Calendar, CheckCircle2, ArrowRight } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "PT Hama Smart Solution",
      role: "Quality Assurance Intern",
      period: "Apr 2026 – Present",
      accent: "cyan",
      highlights: [
        {
          title: "Exploratory Testing",
          desc: "Executed agile, risk-based exploratory cycles across 4 major platforms (Web, Mobile, Desktop, and Chrome Extension).",
        },
        {
          title: "Payment Integrations",
          desc: "Validated critical Stripe API workflows, tracking request-response payload validation and HTTP statuses using Postman.",
        },
        {
          title: "PostgreSQL Verifications",
          desc: "Performed structural database testing across tables (Payments, Users, Organizations) to check transactional state integrity.",
        },
        {
          title: "Load Tests (Apache JMeter)",
          desc: "Analyzed platform stability and payment vs. dunning lifecycles under high concurrent transaction simulation scenarios.",
        },
      ],
    },
    {
      company: "PT Digital Solusi Group",
      role: "QA Intern (Apprenticeship)",
      period: "Jun 2026 – Present",
      accent: "indigo",
      highlights: [
        {
          title: "Dibimbing.id Placement",
          desc: "Integrated with internal corporate application ecosystems, aligning system maps and cross-functional user flows.",
        },
        {
          title: "Test Scenario Mapping",
          desc: "Created structured, comprehensive test suites from raw system requirement documents to act as sprint baselines.",
        },
        {
          title: "UI Defects Discovery",
          desc: "Collaborated with development teams to systematically track, categorize, and log UI/UX issues using shared bug sheets.",
        },
        {
          title: "Product Onboarding Mapping",
          desc: "Effectively mapped functional data flows and endpoint interactions between internal microservices and back-office portals.",
        },
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 border-t border-slate-100 bg-slate-50/50 relative">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-widest text-indigo-600 uppercase">Section 01</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Dual Internship Deep-Dive</h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Hands-on QA validation, manual exploration, backend query verification, and API transaction verification within concurrent corporate environments.
          </p>
        </div>

        {/* Experiences Split View Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`glass-panel p-6 sm:p-8 rounded-2xl border transition duration-300 flex flex-col justify-between shadow-sm ${
                exp.accent === "cyan" 
                  ? "hover:border-cyan-400 hover:shadow-cyan-100/50" 
                  : "hover:border-indigo-400 hover:shadow-indigo-100/50"
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-6">
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">{exp.company}</h3>
                    <p className={`text-sm font-semibold tracking-wide ${exp.accent === "cyan" ? "text-cyan-600" : "text-indigo-600"}`}>
                      {exp.role}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-100 bg-slate-50 text-slate-500 text-xs font-medium self-start sm:self-center">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </div>
                </div>

                {/* Bullets List */}
                <div className="space-y-6">
                  {exp.highlights.map((bullet, idx) => (
                    <div key={idx} className="flex gap-4 group/bullet">
                      <div className={`mt-1 p-0.5 rounded-full border self-start ${
                        exp.accent === "cyan" ? "text-cyan-600 border-cyan-200 bg-cyan-50" : "text-indigo-600 border-indigo-200 bg-indigo-50"
                      }`}>
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-slate-800 text-sm sm:text-base group-hover/bullet:text-slate-950 transition duration-200">
                          {bullet.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                          {bullet.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span>Internship Role</span>
                <span className="flex items-center gap-1">
                  Active Contribution <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
