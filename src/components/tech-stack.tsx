"use client";

import { Monitor, Server, GitFork } from "lucide-react";

export default function TechStack() {
  const stackCategories = [
    {
      title: "Web & Mobile UI Automation",
      description: "Frontend regression verification, device layout assertions, and visual inspection.",
      icon: <Monitor className="w-5 h-5 text-cyan-600" />,
      tools: [
        { name: "Selenium WebDriver", desc: "Browser orchestration for web regression" },
        { name: "Appium Mobile Automation", desc: "Cross-platform E2E native app checks" },
        { name: "Katalon Studio", desc: "Rapid codeless test scenario modeling" },
        { name: "Android Studio", desc: "Virtual devices, log analysis & inspection" },
        { name: "Figma Design Review", desc: "Asset export & pixel-perfect validations" },
      ],
    },
    {
      title: "API, Databases & Load Testing",
      description: "Data-layer integration verifications, contract assertions, and load tests.",
      icon: <Server className="w-5 h-5 text-indigo-600" />,
      tools: [
        { name: "REST Assured", desc: "Java DSL for REST API response validations" },
        { name: "Postman API Tooling", desc: "Manual API exploratory & collection suites" },
        { name: "HTTP Toolkit", desc: "Network proxy, request rewriting & capture" },
        { name: "PostgreSQL / MySQL", desc: "DB state assertions and data verification" },
        { name: "Apache JMeter", desc: "Concurrency simulation & load test suites" },
      ],
    },
    {
      title: "CI/CD, Reporting & Utilities",
      description: "Build integration, execution reporting, and automation communications.",
      icon: <GitFork className="w-5 h-5 text-emerald-600" />,
      tools: [
        { name: "GitHub Actions", desc: "Automated test trigger upon repository push" },
        { name: "Git / GitHub Versioning", desc: "Source branch management and code review" },
        { name: "ExtentReports", desc: "Rich interactive HTML execution reports" },
        { name: "Slack Hook Integrations", desc: "Real-time pipeline verification notifications" },
      ],
    },
  ];

  return (
    <section id="tech-stack" className="py-20 border-t border-slate-100 bg-slate-50/50 relative">
      <div className="absolute top-1/4 right-10 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-widest text-emerald-600 uppercase">Technology Ecosystem</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Professional Tech Stack</h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            A specialized collection of test runners, network interceptors, data assertions, and CI orchestration pipelines.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stackCategories.map((category, index) => (
            <div
              key={index}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 bg-white flex flex-col justify-between group hover:border-indigo-300 transition duration-300 shadow-sm"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-150">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 tracking-tight">{category.title}</h3>
                    <p className="text-[10px] text-slate-400 font-mono">CATEGORY 0{index + 1}</p>
                  </div>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  {category.description}
                </p>

                {/* Tools Badges List */}
                <div className="space-y-3.5">
                  {category.tools.map((tool, idx) => (
                    <div 
                      key={idx} 
                      className="p-3 rounded-xl bg-slate-50/40 border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition duration-150 flex flex-col gap-0.5"
                    >
                      <span className="text-xs font-bold text-slate-800">{tool.name}</span>
                      <span className="text-[10px] text-slate-400 font-mono">{tool.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Tag */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-[9px] text-slate-400 font-mono">
                <span>VERIFICATION CERTIFIED</span>
                <span>GRADE A+ SUCCESS</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
