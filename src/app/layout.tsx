import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reza Fahmi Pahlevi | QA Automation Engineer Portfolio",
  description: "QA Automation Engineer specializing in robust automation testing architectures, comprehensive API response contract validations, and automated CI/CD continuous regression testing environments.",
  keywords: [
    "QA Automation Engineer",
    "Software Quality Assurance",
    "Automation Architectures",
    "API Testing",
    "CI/CD Regression",
    "Selenium",
    "Appium",
    "REST Assured",
    "Reza Fahmi Pahlevi"
  ],
  authors: [{ name: "Reza Fahmi Pahlevi" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="bg-slate-50 text-slate-900 min-h-screen font-sans selection:bg-indigo-500/10 selection:text-indigo-900">
        {children}
      </body>
    </html>
  );
}
