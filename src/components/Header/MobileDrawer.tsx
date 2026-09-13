"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";

export default function MobileDrawer() {
  const { isMobileDrawerOpen, closeMobileDrawer, openGpaModal, toggleLang, lang } = useApp();
  const [openAccordions, setOpenAccordions] = useState<{ [key: string]: boolean }>({});

  const toggleAccordion = (key: string) => {
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className={`mobile-drawer-overlay ${isMobileDrawerOpen ? "active" : ""}`} onClick={closeMobileDrawer}>
      <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-header">
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <img
              src="/images/logo.png"
              alt="RGUKT Logo"
              style={{
                width: "32px",
                height: "32px",
                objectFit: "contain",
                background: "#ffffff",
                borderRadius: "50%",
                padding: "2px",
                border: "1.5px solid var(--accent-gold)"
              }}
            />
            <span className="drawer-title">RGUKT RK Valley</span>
          </div>
          <button onClick={closeMobileDrawer} className="drawer-close" aria-label="Close Navigation">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="drawer-body">
          <ul className="drawer-nav-list">
            <li className="drawer-item" style={{ padding: "0.5rem 1rem", borderBottom: "1px solid var(--border-light)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontWeight: 600, color: "var(--primary-dark)" }}>Translate Site:</span>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  toggleLang();
                  closeMobileDrawer();
                }} 
                className="lang-btn" 
                title="Switch Language"
                style={{ background: "var(--primary-maroon)", color: "#fff", padding: "0.4rem 1rem", borderRadius: "var(--radius-sm)", fontSize: "0.9rem", fontWeight: 700, border: "none", cursor: "pointer" }}
              >
                {lang === "en" ? "తెలుగు" : "English"}
              </button>
            </li>
            <li className="drawer-item">
              <Link href="/home" className="drawer-link" onClick={closeMobileDrawer}>Home</Link>
            </li>

            <li className="drawer-item">
              <button onClick={() => toggleAccordion("inst")} className="drawer-link" style={{ width: "100%" }}>
                <span>Institute</span>
                <span>{openAccordions["inst"] ? "−" : "+"}</span>
              </button>
              <ul className={`drawer-submenu ${openAccordions["inst"] ? "open" : ""}`}>
                <li><Link href="/about" className="drawer-sublink" onClick={closeMobileDrawer}>About RGUKT</Link></li>
                <li><Link href="/about" className="drawer-sublink" onClick={closeMobileDrawer}>Vision & Mission</Link></li>
                <li><Link href="/administration" className="drawer-sublink" onClick={closeMobileDrawer}>Governing Leadership</Link></li>
              </ul>
            </li>

            <li className="drawer-item">
              <button onClick={() => toggleAccordion("acad")} className="drawer-link" style={{ width: "100%" }}>
                <span>Academics</span>
                <span>{openAccordions["acad"] ? "−" : "+"}</span>
              </button>
              <ul className={`drawer-submenu ${openAccordions["acad"] ? "open" : ""}`}>
                <li><Link href="/academics" className="drawer-sublink" onClick={closeMobileDrawer}>6-Year Integrated B.Tech</Link></li>
                <li><Link href="/academics/academic-audit-reports" className="drawer-sublink" onClick={closeMobileDrawer}>Academic Audit Reports</Link></li>
                <li><Link href="/academics/academic-council-minutes" className="drawer-sublink" onClick={closeMobileDrawer}>Minutes of Academic Council Meetings</Link></li>
                <li><Link href="/academics/faculty-ethics" className="drawer-sublink" onClick={closeMobileDrawer}>Faculty Ethics</Link></li>
                <li><Link href="/academics/academic-programmes" className="drawer-sublink" onClick={closeMobileDrawer}>Academic Programmes</Link></li>
                <li><Link href="/academics/academic-regulations" className="drawer-sublink" onClick={closeMobileDrawer}>Academic Regulations</Link></li>
                <li><Link href="/academics#calendar" className="drawer-sublink" onClick={closeMobileDrawer}>Academic Calendar</Link></li>
                <li><Link href="/curriculum" className="drawer-sublink" onClick={closeMobileDrawer}>Curricula</Link></li>
                <li><Link href="/departments" className="drawer-sublink" onClick={closeMobileDrawer}>Departments</Link></li>
                <li><Link href="/examinations#timetable" className="drawer-sublink" onClick={closeMobileDrawer}>Time Table</Link></li>
                <li><Link href="/examinations" className="drawer-sublink" onClick={closeMobileDrawer}>Examinations</Link></li>
              </ul>
            </li>

            <li className="drawer-item">
              <Link href="/departments" className="drawer-link" onClick={closeMobileDrawer}>Departments</Link>
            </li>
            <li className="drawer-item">
              <Link href="/admissions" className="drawer-link" onClick={closeMobileDrawer}>Admissions 2026</Link>
            </li>
            <li className="drawer-item">
              <button onClick={() => toggleAccordion("students")} className="drawer-link" style={{ width: "100%" }}>
                <span>Students</span>
                <span>{openAccordions["students"] ? "−" : "+"}</span>
              </button>
              <ul className={`drawer-submenu ${openAccordions["students"] ? "open" : ""}`}>
                <li><Link href="/students/education" className="drawer-sublink" onClick={closeMobileDrawer}>Education at RGUKT</Link></li>
                <li><Link href="/placements" className="drawer-sublink" onClick={closeMobileDrawer}>Career Development Cell</Link></li>
                <li><Link href="/placements#campus-placements" className="drawer-sublink" onClick={closeMobileDrawer}>Campus Placements</Link></li>
                <li><Link href="/placements#summer-internship" className="drawer-sublink" onClick={closeMobileDrawer}>Summer Internship</Link></li>
                <li><Link href="/students#incubation" className="drawer-sublink" onClick={closeMobileDrawer}>Incubation Cell</Link></li>
                <li><Link href="/students#international-desk" className="drawer-sublink" onClick={closeMobileDrawer}>International Desk</Link></li>
                <li><Link href="/students/antiragging" className="drawer-sublink" onClick={closeMobileDrawer}>Anti Ragging</Link></li>
                <li><Link href="/grievance#womens-cell" className="drawer-sublink" onClick={closeMobileDrawer}>Women&apos;s Cell</Link></li>
                <li><Link href="/students#welfare-office" className="drawer-sublink" onClick={closeMobileDrawer}>Students' Welfare Office</Link></li>
                <li><Link href="/students#alumni-association" className="drawer-sublink" onClick={closeMobileDrawer}>Alumni Association</Link></li>
                <li><a href="http://alumni.rguktrkv.ac.in/" target="_blank" rel="noopener noreferrer" className="drawer-sublink" onClick={closeMobileDrawer}>Alumni Portal</a></li>
              </ul>
            </li>
            <li className="drawer-item">
              <Link href="/examinations" className="drawer-link" onClick={closeMobileDrawer}>Examinations</Link>
            </li>
            <li className="drawer-item">
              <Link href="/placements" className="drawer-link" onClick={closeMobileDrawer}>Placements (CDPC)</Link>
            </li>
            <li className="drawer-item">
              <Link href="/research" className="drawer-link" onClick={closeMobileDrawer}>Research & Innovation</Link></li>
            <li className="drawer-item">
              <Link href="/tenders" className="drawer-link" onClick={closeMobileDrawer}>Tenders & Procurement</Link>
            </li>
            <li className="drawer-item">
              <Link href="/careers" className="drawer-link" onClick={closeMobileDrawer}>Careers & Jobs</Link>
            </li>
            <li className="drawer-item">
              <Link href="/contact" className="drawer-link" onClick={closeMobileDrawer}>Contact & Location</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
