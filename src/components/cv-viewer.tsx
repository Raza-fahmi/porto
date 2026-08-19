"use client";

import React, { useState, useEffect } from "react";
import { ExternalLink, Download } from "lucide-react";

const CvViewer: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="cv" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Curriculum Vitae
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Overview of my professional experience, education, and
              certifications.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition shadow-sm"
            >
              <ExternalLink className="w-4 h-4" /> Buka Tab Baru
            </a>
            <a
              href="/resume.pdf"
              download="CV_Reza_Fahmi_Pahlevi.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-600 hover:bg-slate-500 text-white text-sm font-medium transition shadow-sm"
            >
              <Download className="w-4 h-4" /> Download PDF
            </a>
          </div>
        </div>

        {/* PDF Embed Container */}
        <div className="rounded-xl border border-slate-200 shadow-sm overflow-hidden bg-white">
          {isMounted ? (
            <iframe
              src="/resume.pdf"
              className="w-full h-[720px] border-none"
              title="Curriculum Vitae PDF"
            />
          ) : (
            <div className="w-full h-[720px] flex items-center justify-center text-slate-400">
              Loading CV Preview...
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CvViewer;
