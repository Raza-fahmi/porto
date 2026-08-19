"use client";

import { useState } from "react";
import { Bug, Search, Lightbulb, AlertOctagon, Wrench } from "lucide-react";

export default function IncidentAnalysis() {
  const [activeIncidentId, setActiveIncidentId] = useState("incident-e");

  const incidents = [
    {
      id: "incident-a",
      title: "Incident A: Form Reset Failure",
      severity: "CRITICAL",
      severityColor: "bg-rose-500/10 text-rose-600 border-rose-500/20",
      accentColor: "rose",
      finding:
        'The billing form clears automatically after clicking "Save," even though the backend returns a success response (HTTP 200 OK) but before state confirmation is fully committed on the frontend UI threads.',
      investigation: [
        "Triggered billing form submission actions with various boundary input values.",
        "Monitored state lifecycle variables using DevTools console during async API HTTP 200 return sequences.",
      ],
      suggestion:
        "Refactor the UI state management to prevent premature form resetting. Ensure input bindings are cleared only after verified database state changes are acknowledged, and preserve user input if validation warnings arise.",
    },
    {
      id: "incident-b",
      title: "Incident B: Weak Password Regex Filter",
      severity: "HIGH RISK",
      severityColor: "bg-amber-500/10 text-amber-600 border-amber-500/20",
      accentColor: "amber",
      finding:
        "The registration form rejects standard symbols (!@#$%^&*), but incorrectly permits spaces as valid password characters, enabling users to enter extremely weak, space-only credentials.",
      investigation: [
        "Executed black-box tests using space sequences as passwords in the onboarding forms.",
        "Inspected client-side validation logic triggers and checked DB password hashing outcomes.",
      ],
      suggestion:
        "Advise the developer to add a robust Regex filter middleware on both client and server sides to trim outer whitespace and reject input sequences that consist solely of whitespace characters.",
    },
    {
      id: "incident-c",
      title: "Incident C: Invalid Billing Address Input",
      severity: "HIGH RISK",
      severityColor: "bg-amber-500/10 text-amber-600 border-amber-500/20",
      accentColor: "amber",
      finding:
        'The billing form accepts non-standard characters and random symbols (e.g., "////") without country-based validation, leading to database entries containing garbage billing data.',
      investigation: [
        "Injected non-standard characters ('////') into billing address fields during checkout simulation.",
        "Analyzed database payload logs and confirmed SQL schema inputs lacked formatting verification checks.",
      ],
      suggestion:
        "Advise developers to integrate a geo-address validation library or lookup API to verify postal codes and match regional structures before database insert queries are executed.",
    },
    {
      id: "incident-d",
      title: "Incident D: Upload Button Duplicate Data",
      severity: "HIGH RISK",
      severityColor: "bg-amber-500/10 text-amber-600 border-amber-500/20",
      accentColor: "amber",
      finding:
        "The file upload button allows multiple consecutive clicks before a request resolves. If clicked repeatedly, identical duplicate media files are saved and duplicated database entries are generated.",
      investigation: [
        "Simulated rapid-click behavior on document upload buttons under high latency network states.",
        "Verified system file directories and PostgreSQL rows to confirm duplicate writes occurred.",
      ],
      suggestion:
        "Add a loading spinner and apply a disabled state to the upload button immediately after the initial click, lasting until the upload request finishes and returns a response.",
    },
    {
      id: "incident-e",
      title: "Incident E: Dunning State & Subscription Cancellation Edge Case",
      severity: "CRITICAL",
      severityColor: "bg-rose-500/10 text-rose-600 border-rose-500/20",
      accentColor: "rose",
      finding:
        "Re-testing pada environment Staging (t02) mengungkap edge case krusial pada alur Dunning + Manual Cancel Subscription. Saat perangkat lama berhasil ter-unenroll otomatis, sistem salah mengembalikan lisensi ke pool (status 0/1) tanpa memblokir enrollment baru. Akibatnya, pengguna dapat mendaftarkan ulang perangkat baru secara gratis meskipun status tagihan masih tertunggak (past_due).",
      investigation: [
        "Mengondisikan status tagihan past_due menggunakan Stripe Test Clock.",
        "Mengeksekusi query SQL di DBeaver PostgreSQL pada tabel subscription untuk memeriksa korelasi atribut billing_phase, dunning_started_at, dan cancel_at_period_end.",
      ],
      suggestion:
        "Ubah logika validasi pendaftaran perangkat agar tidak bergantung pada atribut billing_phase, melainkan memeriksa status cancel_at_period_end secara langsung di tabel subscription. Tambahkan automated regression test khusus berdasarkan kondisi DB ini untuk mencegah kelemahan logika serupa berulang.",
    },
  ];

  const activeIncident =
    incidents.find((inc) => inc.id === activeIncidentId) || incidents[0];

  return (
    <section
      id="incident-analysis"
      className="py-20 border-t border-slate-100 bg-slate-50 relative"
    >
      <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Project Validation: UniNote AI
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            UniNote is an enterprise AI-powered notetaker platform deployed
            across four distinct platforms: Web, Mobile, Desktop, and Chrome
            Extension.
          </p>
        </div>

        {/* Top Info Grid - Overview */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
          <div className="md:col-span-8 space-y-6">
            <div className="glass-panel p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-cyan-50 border border-cyan-200 text-xs font-bold text-cyan-700 uppercase">
                  Scope & Context
                </span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                UniNote operates across Web, Mobile, Desktop, and Chrome
                Extension. The primary focus of the test execution lay in
                verifying cross-platform synchronizations, billing transaction
                flows, and PostgreSQL state machine transitions under load.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-indigo-50 border border-indigo-200 text-xs font-bold text-indigo-700 uppercase">
                  Methodology & Action
                </span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Combined deep manual testing (black-box & boundary value checks)
                with rigorous backend verifications. Validated system schema
                rules in PostgreSQL and isolated payment gateways for
                race-condition threats.
              </p>
            </div>
          </div>

          <div className="md:col-span-4 flex">
            <div className="glass-card w-full p-8 rounded-2xl border border-rose-200 bg-white flex flex-col justify-center items-center text-center space-y-4 relative overflow-hidden group shadow-sm">
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-rose-500/5 rounded-full blur-xl group-hover:scale-150 transition duration-500" />

              <div className="p-4 rounded-full bg-rose-50 border border-rose-100 text-rose-500">
                <Bug className="w-8 h-8" />
              </div>
              <div>
                <span className="text-5xl font-black text-rose-600 tracking-tight">
                  14
                </span>
                <p className="text-base font-bold text-slate-900 mt-1">
                  Critical Bugs Mitigated
                </p>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed max-w-[200px]">
                Prevented commercial release blockages, achieving a flawless,
                delay-free production launch.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Console Section */}
        <div className="glass-panel rounded-2xl border border-slate-200 overflow-hidden shadow-sm bg-white">
          {/* Console Header */}
          <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-400" />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <span className="text-xs text-slate-400 font-mono ml-4">
                uninote-incident-console v1.1.0
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
              <span className="flex items-center gap-1.5">
                <Search className="w-3.5 h-3.5" /> Filter: All
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Sidebar Buttons */}
            <div className="lg:col-span-4 border-r border-slate-200 bg-slate-50/50 p-4 space-y-2">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 mb-2">
                Select Incident
              </p>
              {incidents.map((inc) => (
                <button
                  key={inc.id}
                  onClick={() => setActiveIncidentId(inc.id)}
                  className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm font-semibold transition duration-200 flex items-center justify-between gap-3 cursor-pointer ${
                    activeIncidentId === inc.id
                      ? inc.accentColor === "rose"
                        ? "bg-rose-50 border-rose-200 text-rose-800"
                        : "bg-amber-50 border-amber-200 text-amber-800"
                      : "bg-transparent border-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <span className="truncate">{inc.title.split(":")[0]}</span>
                  <span
                    className={`px-2 py-0.5 rounded text-[9px] font-black border ${inc.severityColor}`}
                  >
                    {inc.severity.split(" ")[0]}
                  </span>
                </button>
              ))}
            </div>

            {/* Display Console Details */}
            <div className="lg:col-span-8 p-6 sm:p-8 bg-white space-y-6">
              {/* Head info */}
              <div className="flex items-start justify-between flex-wrap gap-4 border-b border-slate-100 pb-5">
                <div className="space-y-1">
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                    {activeIncident.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-mono">
                    ID: {activeIncident.id.toUpperCase()} // STATUS: RESOLVED
                  </p>
                </div>
                <div
                  className={`px-3 py-1 rounded-full border text-xs font-bold tracking-wider ${activeIncident.severityColor}`}
                >
                  {activeIncident.severity}
                </div>
              </div>

              {/* Finding Box */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-slate-600 text-xs font-semibold uppercase tracking-wider">
                  <AlertOctagon className="w-4 h-4 text-slate-500" />
                  Detailed QA Finding
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <span className="text-rose-600 font-bold">[FINDING] </span>
                  {activeIncident.finding}
                </div>
              </div>

              {/* Investigations Box (STAR Method details) */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-slate-600 text-xs font-semibold uppercase tracking-wider">
                  <Wrench className="w-4 h-4 text-slate-500" />
                  Engineering Investigation & Actions
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs sm:text-sm text-slate-700 space-y-1.5">
                  <span className="text-indigo-600 font-bold block mb-1">
                    [INVESTIGATION]
                  </span>
                  {activeIncident.investigation.map((step, index) => (
                    <p
                      key={index}
                      className="pl-4 border-l-2 border-indigo-200 text-slate-600 leading-relaxed"
                    >
                      {step}
                    </p>
                  ))}
                </div>
              </div>

              {/* Solution Suggestion */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-emerald-600 text-xs font-semibold uppercase tracking-wider">
                  <Lightbulb className="w-4 h-4 text-emerald-600" />
                  Engineering Suggestion & Remediation
                </div>
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100 font-mono text-xs sm:text-sm text-emerald-800 leading-relaxed">
                  <span className="text-emerald-600 font-bold">
                    [SUGGESTION]{" "}
                  </span>
                  {activeIncident.suggestion}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
