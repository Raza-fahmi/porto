"use client";

import { useState } from "react";
import { GitCommit, Play, Cpu, ArrowRight, CheckCircle, Terminal } from "lucide-react";

const SlackIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523 2.528 2.528 0 0 1-2.522-2.523 2.528 2.528 0 0 1 2.522-2.52h2.52v2.52zm1.261 0a2.528 2.528 0 0 1 2.52-2.52h5.043a2.528 2.528 0 0 1 2.522 2.52v5.042a2.528 2.528 0 0 1-2.522 2.52H8.824a2.528 2.528 0 0 1-2.52-2.52v-5.042zM8.824 5.043a2.528 2.528 0 0 1 2.52-2.522 2.528 2.528 0 0 1 2.522 2.522v2.52h-2.522a2.528 2.528 0 0 1-2.52-2.52zm0 1.261a2.528 2.528 0 0 1 2.52 2.52v5.043a2.528 2.528 0 0 1-2.522 2.522H3.782a2.528 2.528 0 0 1-2.522-2.522V8.824a2.528 2.528 0 0 1 2.522-2.52h5.042zm10.134 3.76a2.528 2.528 0 0 1 2.522-2.52 2.528 2.528 0 0 1 2.52 2.52v2.52h-2.52a2.528 2.528 0 0 1-2.522-2.52zm-1.262 0a2.528 2.528 0 0 1-2.52 2.52h-5.043a2.528 2.528 0 0 1-2.522-2.52V3.782a2.528 2.528 0 0 1 2.522-2.522h5.043a2.528 2.528 0 0 1 2.52 2.522v5.042zm-3.781 10.122a2.528 2.528 0 0 1-2.52 2.522 2.528 2.528 0 0 1-2.522-2.522v-2.52h2.522a2.528 2.528 0 0 1 2.52 2.52zm0-1.262a2.528 2.528 0 0 1-2.52-2.52v-5.043a2.528 2.528 0 0 1 2.522-2.522h5.043a2.528 2.528 0 0 1 2.522 2.522v5.043a2.528 2.528 0 0 1-2.522 2.52H13.915z" />
  </svg>
);

export default function PipelineVisualizer() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Dev Commit",
      subtitle: "Code push to repository",
      description: "Developers push fresh refactored codes and features into GitHub, triggering webhook endpoints.",
      icon: <GitCommit className="w-6 h-6" />,
      color: "text-blue-600 border-blue-200 bg-blue-50",
      activeColor: "bg-blue-600 shadow-blue-200 text-white border-blue-600",
      glow: "shadow-blue-500/20 border-blue-400",
      logs: [
        "[INFO] git push origin main",
        "[INFO] Enumerating objects: 12, done.",
        "[INFO] Counting objects: 100% (12/12), done.",
        "[INFO] Delta compression using up to 8 threads",
        "[INFO] Writing objects: 100% (8/8), 1.42 KiB | 1.42 MiB/s, done.",
        "[INFO] To github.com:Raza-fahmi/resonance-api-ui-automation.git",
        "[INFO]    d8f932e..4a72d1a  main -> main",
        "[SUCCESS] Webhook dispatched to GitHub Actions runner successfully.",
      ],
    },
    {
      title: "Workflow Start",
      subtitle: "GitHub Actions runner init",
      description: "GitHub Actions triggers execution workflows, setting up virtual environment environments (VM runners).",
      icon: <Play className="w-6 h-6" />,
      color: "text-purple-600 border-purple-200 bg-purple-50",
      activeColor: "bg-purple-600 shadow-purple-200 text-white border-purple-600",
      glow: "shadow-purple-500/20 border-purple-400",
      logs: [
        "[TRIGGER] GitHub Actions Workflow 'E2E Regression Testing' initiated.",
        "[RUNNER] Requesting VM instance with OS: ubuntu-latest...",
        "[RUNNER] VM Runner successfully provisioned and online.",
        "[SYSTEM] Setup Java SE Development Kit 17 (zulu)...",
        "[SYSTEM] Setup Maven dependencies and cached Gradle dependencies...",
        "[GIT] Checking out repository ref: refs/heads/main...",
        "[SUCCESS] Workspace initialized. Ready to execute automation scripts.",
      ],
    },
    {
      title: "Headless Verification",
      subtitle: "Selenium & Rest Assured E2E",
      description: "Launches headless Chrome/Firefox Selenium UI verifications and REST Assured API collection runs simultaneously.",
      icon: <Cpu className="w-6 h-6" />,
      color: "text-cyan-600 border-cyan-200 bg-cyan-50",
      activeColor: "bg-cyan-600 shadow-cyan-200 text-white border-cyan-600",
      glow: "shadow-cyan-500/20 border-cyan-400",
      logs: [
        "[TEST] Initializing UI automation suite: 24 test scripts (Selenium WebDriver)...",
        "[TEST] Initializing API automation suite: 17 endpoint collections (REST Assured)...",
        "[RUN] Running Headless Chrome: UI login validation pass",
        "[RUN] Running Headless Chrome: CRUD ticket generation pass",
        "[RUN] Running REST Assured: GET /api/v1/tickets: HTTP 200 OK",
        "[RUN] Running REST Assured: POST /api/v1/checkout: Stripe payload valid",
        "[METRICS] Execution complete: 41 scripts executed, 0 failures, 100% pass rate.",
        "[SUCCESS] Test execution finished. ExtentReports dashboard generated: report.html.",
      ],
    },
    {
      title: "Slack Reporting",
      subtitle: "Slack Webhook Notifications",
      description: "Pushes final JUnit metrics and HTML report summaries directly into developers channels via Webhook hooks.",
      icon: <SlackIcon />,
      color: "text-emerald-600 border-emerald-200 bg-emerald-50",
      activeColor: "bg-emerald-600 shadow-emerald-200 text-white border-emerald-600",
      glow: "shadow-emerald-500/20 border-emerald-400",
      logs: [
        "[REPORT] Accessing Slack Incoming Webhook configuration...",
        "[REPORT] Formatting JSON payload block structure...",
        "[REPORT] Attaching ExtentReports execution link...",
        "[CURL] Sending POST payload to https://hooks.slack.com/services/T000/B000/XXXX...",
        "[SUCCESS] Slack alert sent: 'CI/CD Build #841 passed successfully.'",
        "[INFO] Total duration: 3m 42s. Pipeline completed. Terminating VM runner.",
      ],
    },
  ];

  return (
    <section id="pipeline-visualizer" className="py-20 border-t border-slate-100 bg-slate-50/50 relative">
      <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-widest text-indigo-600 uppercase">Automation Infrastructure</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">CI/CD Pipeline Visualizer</h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Every code push triggers a deterministic, headless quality gate, executing extensive E2E scripts and alerting team channels instantly.
          </p>
        </div>

        {/* Pipeline Diagram Grid */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 bg-white space-y-12 shadow-sm">
          
          {/* Timeline Nodes */}
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 px-4 py-6">
            
            {/* Horizontal Line connecting nodes (on Desktop) */}
            <div className="hidden md:block absolute left-10 right-10 top-1/2 -translate-y-1/2 h-0.5 bg-slate-200 z-0" />
            
            {/* Glowing active connector line */}
            <div 
              className="hidden md:block absolute left-10 top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-500 transition-all duration-500 z-0"
              style={{ width: `${(activeStep / (steps.length - 1)) * 80}%` }}
            />

            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              const isPassed = activeStep > idx;

              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className="relative z-10 flex flex-col items-center text-center group focus:outline-none w-full md:w-auto cursor-pointer"
                >
                  {/* Circle Button */}
                  <div 
                    className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? `${step.activeColor} active-pulse scale-110` 
                        : isPassed 
                          ? "border-emerald-500 text-emerald-600 bg-emerald-50" 
                          : "border-slate-350 text-slate-400 bg-slate-100"
                    }`}
                  >
                    {isPassed ? <CheckCircle className="w-6 h-6" /> : step.icon}
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mt-4 space-y-0.5">
                    <p className={`text-sm font-bold transition duration-200 ${isActive ? "text-slate-900 scale-105" : "text-slate-500 group-hover:text-slate-700"}`}>
                      {step.title}
                    </p>
                    <p className="text-[11px] text-slate-400 font-mono tracking-tight hidden sm:block">
                      {step.subtitle}
                    </p>
                  </div>

                  {/* Desktop Step Index Badge */}
                  <div className="absolute -top-3 px-2 py-0.5 rounded-full border border-slate-150 bg-slate-50 text-[9px] font-mono text-slate-400">
                    Step 0{idx + 1}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Details & Terminal Simulation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 border-t border-slate-100">
            
            {/* Step Description */}
            <div className="lg:col-span-5 space-y-4 flex flex-col justify-center">
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Current Pipeline Node</span>
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  {steps[activeStep].title} 
                  <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-650 border border-slate-200">ACTIVE</span>
                </h3>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {steps[activeStep].description}
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                <span>Select other nodes to inspect execution workflows</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Terminal Window */}
            <div className="lg:col-span-7 glass-panel rounded-2xl border border-slate-950 bg-slate-950 overflow-hidden shadow-lg">
              <div className="bg-slate-900 px-4 py-3 border-b border-slate-950/60 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono text-zinc-400 font-medium">verification-runner-console ~ run-logs</span>
                </div>
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                </div>
              </div>
              <div className="p-5 font-mono text-xs text-zinc-300 space-y-2 max-h-[220px] overflow-y-auto leading-relaxed">
                {steps[activeStep].logs.map((log, index) => {
                  let logColor = "text-zinc-300";
                  if (log.includes("[SUCCESS]")) logColor = "text-emerald-400 font-semibold";
                  if (log.includes("[TRIGGER]") || log.includes("[RUNNER]")) logColor = "text-purple-400";
                  if (log.includes("[TEST]") || log.includes("[RUN]")) logColor = "text-cyan-400";
                  if (log.includes("[REPORT]")) logColor = "text-blue-400";
                  return (
                    <div key={index} className={logColor}>
                      {log}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
