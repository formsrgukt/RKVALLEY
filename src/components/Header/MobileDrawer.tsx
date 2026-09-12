"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";

export default function MobileDrawer() {
  const { isMobileDrawerOpen, closeMobileDrawer, openGpaModal } = useApp();
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
                <li><Link href="/academics" className="drawer-sublink" onClick={closeMobileDrawer}>6-Year B.Tech Program</Link></li>
                <li><Link href="/departments" className="drawer-sublink" onClick={closeMobileDrawer}>Departments & Syllabus</Link></li>
                <li><Link href="/examinations" className="drawer-sublink" onClick={closeMobileDrawer}>Examinations & Grading</Link></li>
                <li>
                  <button
                    onClick={() => { closeMobileDrawer(); openGpaModal(); }}
                    className="drawer-sublink"
                    style={{ textAlign: "left", width: "100%" }}
                  >
                    CGPA Calculator
                  </button>
                </li>
              </ul>
            </li>

            <li className="drawer-item">
              <Link href="/departments" className="drawer-link" onClick={closeMobileDrawer}>Departments</Link>
            </li>
            <li className="drawer-item">
              <Link href="/admissions" className="drawer-link" onClick={closeMobileDrawer}>Admissions 2026</Link>
            </li>
            <li className="drawer-item">
              <Link href="/students" className="drawer-link" onClick={closeMobileDrawer}>Student Life & Welfare</Link>
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
