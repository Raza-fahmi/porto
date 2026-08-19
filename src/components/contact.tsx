"use client";

import { Mail, Phone, Send, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const contactLinks = [
    {
      label: "Direct Email",
      value: "reza27fahmi@gmail.com",
      href: "mailto:reza27fahmi@gmail.com",
      icon: <Mail className="w-5 h-5 text-blue-600" />,
      colorTheme: "group-hover:border-blue-300 group-hover:shadow-blue-100/50",
    },
    {
      label: "Mobile Call",
      value: "+62 877-1513-7752",
      href: "https://wa.me/6287715137752",
      icon: <Phone className="w-5 h-5 text-cyan-600" />,
      colorTheme: "group-hover:border-cyan-300 group-hover:shadow-cyan-100/50",
    },
    {
      label: "LinkedIn Profile",
      value: "Reza Fahmi Pahlevi",
      href: "https://www.linkedin.com/in/reza-fahmi-pahlevi/",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 text-indigo-600"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      colorTheme:
        "group-hover:border-indigo-300 group-hover:shadow-indigo-100/50",
    },
    {
      label: "GitHub Profile",
      value: "Fahmeza",
      href: "https://github.com/Raza-fahmi",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 text-slate-700"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      ),
      colorTheme:
        "group-hover:border-slate-350 group-hover:shadow-slate-100/50",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 border-t border-slate-150 bg-white relative overflow-hidden"
    >
      {/* Background neon elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-700 text-xs font-semibold tracking-wide uppercase">
            <Send className="w-3 h-3" />
            Reach Out
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Let&apos;s Collaborate!
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Are you looking to build robust, highly secure, and
            performance-optimized application ecosystems? Reach out via my
            contacts below:
          </p>
        </div>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contactLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className={`group glass-card p-6 rounded-2xl border border-slate-200 hover:border-slate-350 transition duration-300 flex flex-col justify-between h-40 bg-white ${link.colorTheme}`}
            >
              <div className="flex justify-between items-start">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-slate-700 group-hover:scale-110 transition duration-300 flex items-center justify-center">
                  {link.icon}
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-700 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div className="space-y-1 mt-4">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  {link.label}
                </p>
                <p className="text-sm font-bold text-slate-900 truncate group-hover:text-indigo-600 transition duration-200">
                  {link.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Professional Footer Statement */}
        <div className="mt-20 pt-8 border-t border-slate-100 text-center text-slate-400 text-xs font-mono space-y-2">
          <p>
            &copy; {new Date().getFullYear()} Reza Fahmi Pahlevi. All rights
            reserved.
          </p>
          <p>
            QA Automation portfolio built with Next.js (App Router), Tailwind
            CSS & TypeScript.
          </p>
        </div>
      </div>
    </section>
  );
}
