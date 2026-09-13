import React from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";
import StudentsScrollspySidebar from "@/components/Common/StudentsScrollspySidebar";

export const metadata = {
  title: "Anti Ragging | RGUKT RK Valley",
  description: "Anti Ragging regulations, UGC guidelines, and monitoring committees at RGUKT RK Valley Campus.",
};

export default function AntiRaggingPage() {
  return (
    <div className="page-view-container">
      <Breadcrumb title="Anti Ragging" category="Students" />

      <div className="container" style={{ paddingBottom: "4rem" }}>
        <div className="page-content-layout">
          {/* Section Navigation Sidebar */}
          <StudentsScrollspySidebar currentPath="/students/antiragging" />

          {/* Main Body Content */}
          <article className="page-main-body">
            <section id="antiragging" style={{ marginBottom: "2.75rem" }}>
              <h1 style={{ color: "var(--primary-dark)", fontSize: "2rem", fontWeight: 800, marginBottom: "1rem" }}>
                Anti Ragging
              </h1>

              <div style={{ marginBottom: "1.5rem" }}>
                <a
                  href="https://www.rguktrkv.ac.in/pdfdoc/gazzetaug2010.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "var(--primary-maroon)",
                    fontWeight: 700,
                    fontSize: "1rem",
                    textDecoration: "underline",
                    lineHeight: 1.5,
                  }}
                >
                  UGC Regulation on curbing the menace of Ragging in Higher Educational Institutions
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
                <div
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                    padding: "1.25rem 1.5rem",
                  }}
                >
                  <h2 style={{ color: "var(--primary-dark)", fontSize: "1.05rem", fontWeight: 800, marginBottom: "0.85rem", lineHeight: 1.4 }}>
                    Anti Ragging monitoring committee in RGUKT, RK Valley Campus
                  </h2>
                  <ul style={{ listStyleType: "disc", paddingLeft: "1.25rem", margin: 0, color: "#334155", fontSize: "0.95rem", lineHeight: 1.8 }}>
                    <li>Chairman</li>
                    <li>Coordinator</li>
                    <li>Committee Members</li>
                  </ul>
                </div>

                <div
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                    padding: "1.25rem 1.5rem",
                  }}
                >
                  <h2 style={{ color: "var(--primary-dark)", fontSize: "1.05rem", fontWeight: 800, marginBottom: "0.85rem", lineHeight: 1.4 }}>
                    Anti Women Harassment committee in RGUKT, RK Valley Campus
                  </h2>
                  <ul style={{ listStyleType: "disc", paddingLeft: "1.25rem", margin: 0, color: "#334155", fontSize: "0.95rem", lineHeight: 1.8 }}>
                    <li>Chairman</li>
                    <li>Coordinator</li>
                    <li>Committee Members</li>
                  </ul>
                </div>
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
}
