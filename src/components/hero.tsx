"use client";

import Image from "next/image";
import { GraduationCap, Award, CheckCircle2, ShieldCheck, Zap, Sparkles } from "lucide-react";

export default function Hero() {
  const stats = [
    {
      value: "85%",
      label: "Automation Coverage",
      description: "Delivered 24 Web UI scripts & 17 API test collections",
      icon: <Zap className="w-5 h-5 text-cyan-600" />,
      glowColor: "group-hover:border-cyan-300 group-hover:shadow-cyan-100",
      textColor: "text-cyan-600",
    },
    {
      value: "14+",
      label: "Bugs Mitigated",
      description: "Critical & high-risk issues found prior to production release",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
      glowColor: "group-hover:border-emerald-300 group-hover:shadow-emerald-100",
      textColor: "text-emerald-600",
    },
    {
      value: "100%",
      label: "API Success Rate",
      description: "Ensured robust request-response contract assertions",
      icon: <CheckCircle2 className="w-5 h-5 text-indigo-600" />,
      glowColor: "group-hover:border-indigo-300 group-hover:shadow-indigo-100",
      textColor: "text-indigo-600",
    },
  ];

  return (
    <section className="relative pt-24 pb-16 md:py-32 overflow-hidden bg-slate-50">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Bio & Intro */}
          <div className="lg:col-span-7 text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-700 text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              QA Engineer Portfolio
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              Reza Fahmi <span className="bg-gradient-to-r from-cyan-600 via-indigo-600 to-emerald-600 bg-clip-text text-transparent">Pahlevi</span>
            </h1>

            <h2 className="text-lg sm:text-xl font-medium text-slate-700 border-l-2 border-cyan-500 pl-4 py-1 leading-relaxed">
              QA Automation Engineer specializing in robust automation testing architectures, comprehensive API response contract validations, and automated CI/CD continuous regression environments.
            </h2>

            {/* Academic & Certifications Card */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-200 space-y-5 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Credentials & Education</h3>
              
              <div className="flex gap-4">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 self-start text-cyan-600">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Bachelor in Computer Science</h4>
                  <p className="text-sm text-slate-600">Universitas Muhammadiyah Purwokerto | GPA: 3.64 / 4.00</p>
                  <p className="text-xs text-slate-400 mt-0.5">Academic Period: 2021 – 2025</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 self-start text-indigo-600">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="font-semibold text-slate-900">Certified Quality Assurance</h4>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">Grade A+ (94.18/100)</span>
                  </div>
                  <p className="text-sm text-slate-600">Dibimbing.id | 2nd Runner-Up Performer (Cohort 2025 – 2026)</p>
                  <p className="text-xs italic text-slate-500 mt-1 leading-relaxed">
                    &ldquo;Recognized as the 2nd Runner-Up Performer of Quality Assurance Batch 3 at Dibimbing.id out of the entire cohort for outstanding academic consistency and technical capstone execution.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#projects" className="px-6 py-3 rounded-xl font-medium text-sm transition bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/10 hover:shadow-indigo-600/20">
                View Automation Projects
              </a>
              <a href="#contact" className="px-6 py-3 rounded-xl font-medium text-sm transition border border-slate-200 hover:border-slate-350 bg-white hover:bg-slate-50 text-slate-700">
                Contact Details
              </a>
            </div>
          </div>

          {/* Profile Picture */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Outer neon border glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-400 via-indigo-400 to-emerald-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000" />
              
              <div className="relative glass-panel p-3 rounded-2xl border border-slate-200">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/profile.jpg"
                    alt="Reza Fahmi Pahlevi"
                    fill
                    sizes="(max-width: 640px) 256px, 320px"
                    priority
                    className="object-cover object-center group-hover:scale-105 transition duration-500"
                  />
                  {/* Visual Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold tracking-widest text-cyan-300 uppercase">Automation Architect</span>
                    <p className="text-sm font-semibold">Based in Purwokerto, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`group glass-card p-6 rounded-2xl border flex flex-col justify-between ${stat.glowColor}`}
            >
              <div className="flex justify-between items-start mb-4">
                <span className={`text-3xl font-extrabold tracking-tight ${stat.textColor}`}>
                  {stat.value}
                </span>
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-150">
                  {stat.icon}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base mb-1 group-hover:text-indigo-600 transition duration-200">
                  {stat.label}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
