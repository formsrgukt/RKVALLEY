"use client";

import React from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";

export default function UniversityFooter() {
  const { openGpaModal } = useApp();

  return (
    <footer className="university-footer" role="contentinfo">
      <div className="container footer-grid">
        {/* Col 1 */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "#ffffff",
                padding: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid var(--accent-gold)",
                flexShrink: 0
              }}
            >
              <img
                src="/images/logo.png"
                alt="RGUKT RK Valley Logo"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
            <h4 className="footer-brand-title" style={{ marginBottom: 0 }}>RGUKT RK Valley</h4>
          </div>
          <p className="footer-brand-desc">
            Rajiv Gandhi University of Knowledge Technologies, Andhra Pradesh (RK Valley Campus). Established under AP Act 18 of 2008 to cater to the educational needs of gifted rural youth.
          </p>
          <div style={{ fontSize: "0.8rem", color: "#94a3b8", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            <span><strong>Campus Code:</strong> RKV</span>
            <span><strong>Recognition:</strong> UGC 2(f) & 12(B) | AICTE Approved</span>
            <span><strong>District:</strong> YSR Kadapa, Andhra Pradesh - 516330</span>
          </div>
        </div>

        {/* Col 2 */}
        <div>
          <h4 className="footer-column-title">Academics</h4>
          <ul className="footer-links-list">
            <li><Link href="/academics">6-Year Integrated B.Tech</Link></li>
            <li><Link href="/departments/aiml">AI & Machine Learning</Link></li>
            <li><Link href="/departments/cse">Computer Science & Engineering</Link></li>
            <li><Link href="/departments/ece">Electronics & Communication Engineering</Link></li>
            <li><Link href="/departments/eee">Electrical & Electronics Engineering</Link></li>
            <li><Link href="/departments/me">Mechanical Engineering</Link></li>
            <li><Link href="/departments/ce">Civil Engineering</Link></li>
            <li><Link href="/departments">All 13 Departments</Link></li>
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <h4 className="footer-column-title">Student Hub</h4>
          <ul className="footer-links-list">
            <li><Link href="/admissions">Admissions 2026-27</Link></li>
            <li><Link href="/examinations">Examination Cell</Link></li>
            <li><Link href="/placements">Placement Cell (CDPC)</Link></li>
            <li><Link href="/library">Central Digital Library</Link></li>
            <li><Link href="/grievance">Anti-Ragging Squad</Link></li>
            <li><Link href="/students">Hostels & Mess Facilities</Link></li>
            <li>
              <button
                onClick={openGpaModal}
                style={{ color: "#94a3b8", fontSize: "0.85rem", background: "none", border: "none", padding: 0, textAlign: "left" }}
              >
                GPA Calculator Tool
              </button>
            </li>
          </ul>
        </div>

        {/* Col 4 */}
        <div>
          <h4 className="footer-column-title">Contact & Helpdesk</h4>
          <div className="footer-contact-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>Idupulapaya, Vempalli Mandal, YSR Kadapa Dist, AP - 516330</span>
          </div>
          <div className="footer-contact-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>+91 85602 87834 / 87839</span>
          </div>
          <div className="footer-contact-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <span>director@rguktrkv.ac.in</span>
          </div>
        </div>
      </div>

      <div className="bottom-footer">
        <div className="container bottom-footer-container">
          <div>
            © 2026 Rajiv Gandhi University of Knowledge Technologies - RK Valley. All Rights Reserved.
          </div>
          <div className="bottom-legal-links">
            <Link href="/grievance">RTI Act</Link>
            <Link href="/about">Privacy Policy</Link>
            <Link href="/about">Terms of Use</Link>
            <Link href="/contact">Webmaster</Link>
            <Link href="/contact">Feedback</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
