"use client";

import React from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";

export default function TopUtilityBar() {
  const { setFontSize, toggleHighContrast, lang, toggleLang, openDocModal } = useApp();

  return (
    <div className="top-utility-bar">
      <div className="container utility-container">
        <div className="utility-left">
          <a href="tel:+918560287834" className="utility-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Helpdesk: +91 85602 87834
          </a>
          <div className="utility-divider"></div>
          <a href="mailto:director@rguktrkv.ac.in" className="utility-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            director@rguktrkv.ac.in
          </a>
          <div className="utility-divider"></div>
          <span className="utility-item" style={{ color: "#94a3b8" }}>
            Kadapa District, Andhra Pradesh
          </span>
        </div>

        <div className="utility-right">
          <div className="accessibility-tools" aria-label="Text Size Controls">
            <button onClick={() => setFontSize("font-size-sm")} className="btn-a11y" title="Small Text">A-</button>
            <button onClick={() => setFontSize("font-size-md")} className="btn-a11y" title="Normal Text">A</button>
            <button onClick={() => setFontSize("font-size-lg")} className="btn-a11y" title="Large Text">A+</button>
            <div className="utility-divider"></div>
            <button onClick={toggleHighContrast} className="btn-a11y" title="Toggle High Contrast Mode">Contrast</button>
          </div>

          <button onClick={toggleLang} className="lang-btn" title="Switch Language">
            {lang === "en" ? "తెలుగు" : "English"}
          </button>
          <div className="utility-divider"></div>
          <Link href="/grievance" className="utility-item">
            RTI / Grievance
          </Link>
          <div className="utility-divider"></div>
          <button
            onClick={() => openDocModal("Student Management System (SMS) Portal", "Student_SMS_Login_Guide.pdf")}
            className="utility-item"
            style={{ color: "var(--accent-gold)", fontWeight: 700 }}
          >
            SMS Login →
          </button>
        </div>
      </div>
    </div>
  );
}
