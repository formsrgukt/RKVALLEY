"use client";

import React from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { RGUKT_DATA } from "@/data/rguktData";
export default function AcademicsPage() {

  return (
    <div className="page-view-container">
      <Breadcrumb title="Academic Programs & Regulations" category="Academics" />

      <div className="container">
        <div className="page-content-layout">
          <aside className="page-sidebar" aria-label="Section Navigation">
            <h4 className="sidebar-menu-title">Explore Section</h4>
            <ul className="sidebar-nav-list">
              <li><Link href="/academics" className="sidebar-link active">6-Year B.Tech Overview</Link></li>
              <li><Link href="/departments" className="sidebar-link">Departments & Syllabus</Link></li>
              <li><Link href="/examinations" className="sidebar-link">Grading & Exam Regulations</Link></li>
              <li><Link href="/admissions" className="sidebar-link">Admissions Guidelines</Link></li>
            </ul>
          </aside>

          <article className="page-main-body">
            <h3>The 6-Year Integrated B.Tech Academic Paradigm</h3>
            <p style={{ fontSize: "1rem", color: "#334155", marginBottom: "1.5rem" }}>
              The academic architecture at RGUKT is specifically engineered to take gifted 10th standard toppers and cultivate them into world-class engineers through a unified 6-year residential curriculum.
            </p>

            <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "1.5rem", marginBottom: "2rem" }}>
              <h4 style={{ color: "var(--primary-dark)", marginBottom: "0.75rem" }}>Academic Structure:</h4>
              <div className="academic-two-col-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "1.5rem" }}>
                <div style={{ background: "#fff", padding: "1.25rem", borderRadius: "8px", borderTop: "1px solid #e2e8f0", borderRight: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0", borderLeft: "4px solid var(--accent-royal)", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
                  <h5 style={{ color: "var(--accent-royal)", fontWeight: 700, marginBottom: "0.35rem" }}>Phase 1: Pre-University Course (PUC I & PUC II)</h5>
                  <p style={{ fontSize: "0.85rem", color: "#475569" }}>Two years of intensive foundational instruction in Mathematics, Physics, Chemistry, English, Information Technology, and Biology/Environmental Sciences.</p>
                </div>
                <div style={{ background: "#fff", padding: "1.25rem", borderRadius: "8px", borderTop: "1px solid #e2e8f0", borderRight: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0", borderLeft: "4px solid var(--accent-gold)", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
                  <h5 style={{ color: "var(--accent-gold-dark)", fontWeight: 700, marginBottom: "0.35rem" }}>Phase 2: Bachelor of Technology (E1, E2, E3, E4)</h5>
                  <p style={{ fontSize: "0.85rem", color: "#475569" }}>Four years of specialized engineering education in 8 core engineering streams with minor specializations in AI, Data Science, Cyber Security, and Renewable Energy.</p>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <h4 style={{ marginBottom: "1rem", color: "var(--primary-dark)" }}>Pre-University Course (PUC 1 & PUC 2)</h4>
              <div className="academic-two-col-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "1.25rem" }}>
                <div
                  style={{
                    background: "#ffffff",
                    borderTop: "1px solid #e2e8f0",
                    borderRight: "1px solid #e2e8f0",
                    borderBottom: "1px solid #e2e8f0",
                    borderLeft: "4px solid var(--accent-royal)",
                    padding: "1.25rem",
                    borderRadius: "8px",
                    boxShadow: "0 1px 4px rgba(0, 0, 0, 0.05)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    transition: "all 0.2s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.08)";
                    e.currentTarget.style.borderTopColor = "#cbd5e1";
                    e.currentTarget.style.borderRightColor = "#cbd5e1";
                    e.currentTarget.style.borderBottomColor = "#cbd5e1";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 1px 4px rgba(0, 0, 0, 0.05)";
                    e.currentTarget.style.borderTopColor = "#e2e8f0";
                    e.currentTarget.style.borderRightColor = "#e2e8f0";
                    e.currentTarget.style.borderBottomColor = "#e2e8f0";
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem", marginBottom: "0.35rem" }}>
                    <h5 style={{ color: "var(--accent-royal)", fontWeight: 700, fontSize: "0.98rem", margin: 0 }}>
                      PUC-1 (Pre-University Course - Year 1)
                    </h5>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 800,
                        color: "var(--accent-royal)",
                        background: "#fdf2f4",
                        padding: "0.15rem 0.5rem",
                        borderRadius: "4px",
                        flexShrink: 0
                      }}
                    >
                      PUC-1
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "#475569",
                      margin: 0,
                      lineHeight: 1.45,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden"
                    }}
                  >
                    Foundational curriculum in Mathematics-I, Physics-I, Chemistry-I, English Communication, and Information Technology with hands-on laboratory practice.
                  </p>
                </div>

                <div
                  style={{
                    background: "#ffffff",
                    borderTop: "1px solid #e2e8f0",
                    borderRight: "1px solid #e2e8f0",
                    borderBottom: "1px solid #e2e8f0",
                    borderLeft: "4px solid var(--accent-gold)",
                    padding: "1.25rem",
                    borderRadius: "8px",
                    boxShadow: "0 1px 4px rgba(0, 0, 0, 0.05)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    transition: "all 0.2s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.08)";
                    e.currentTarget.style.borderTopColor = "#cbd5e1";
                    e.currentTarget.style.borderRightColor = "#cbd5e1";
                    e.currentTarget.style.borderBottomColor = "#cbd5e1";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 1px 4px rgba(0, 0, 0, 0.05)";
                    e.currentTarget.style.borderTopColor = "#e2e8f0";
                    e.currentTarget.style.borderRightColor = "#e2e8f0";
                    e.currentTarget.style.borderBottomColor = "#e2e8f0";
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem", marginBottom: "0.35rem" }}>
                    <h5 style={{ color: "var(--accent-gold-dark)", fontWeight: 700, fontSize: "0.98rem", margin: 0 }}>
                      PUC-2 (Pre-University Course - Year 2)
                    </h5>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 800,
                        color: "var(--accent-gold-dark)",
                        background: "#fef3c7",
                        padding: "0.15rem 0.5rem",
                        borderRadius: "4px",
                        flexShrink: 0
                      }}
                    >
                      PUC-2
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "#475569",
                      margin: 0,
                      lineHeight: 1.45,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden"
                    }}
                  >
                    Advanced preparatory curriculum in Mathematics-II, Physics-II, Chemistry-II, Computer Programming, and Environmental Studies qualifying for B.Tech engineering stream allocation.
                  </p>
                </div>
              </div>
            </div>

            <h4 style={{ marginBottom: "1rem", color: "var(--primary-dark)" }}>Engineering Departments</h4>
            <div className="academic-two-col-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "1.25rem", marginBottom: "2rem" }}>
              {RGUKT_DATA.departments
                .filter((d) => d.category === "Engineering")
                .map((d, idx) => {
                  const isYellow = idx % 2 === 1;
                  const accentBorder = isYellow ? "4px solid var(--accent-gold)" : "4px solid var(--accent-royal)";
                  const titleColor = isYellow ? "var(--accent-gold-dark)" : "var(--accent-royal)";
                  const badgeColor = isYellow ? "var(--accent-gold-dark)" : "var(--accent-royal)";
                  const badgeBg = isYellow ? "#fef3c7" : "#fdf2f4";

                  return (
                    <Link
                      key={d.id}
                      href={`/departments/${d.id}`}
                      style={{
                        background: "#ffffff",
                        borderTop: "1px solid #e2e8f0",
                        borderRight: "1px solid #e2e8f0",
                        borderBottom: "1px solid #e2e8f0",
                        borderLeft: accentBorder,
                        padding: "1.25rem",
                        borderRadius: "8px",
                        boxShadow: "0 1px 4px rgba(0, 0, 0, 0.05)",
                        textDecoration: "none",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        transition: "all 0.2s ease"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.08)";
                        e.currentTarget.style.borderTopColor = "#cbd5e1";
                        e.currentTarget.style.borderRightColor = "#cbd5e1";
                        e.currentTarget.style.borderBottomColor = "#cbd5e1";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 1px 4px rgba(0, 0, 0, 0.05)";
                        e.currentTarget.style.borderTopColor = "#e2e8f0";
                        e.currentTarget.style.borderRightColor = "#e2e8f0";
                        e.currentTarget.style.borderBottomColor = "#e2e8f0";
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem", marginBottom: "0.35rem" }}>
                        <h5 style={{ color: titleColor, fontWeight: 700, fontSize: "0.98rem", margin: 0 }}>
                          {d.name}
                        </h5>
                        <span
                          style={{
                            fontSize: "0.72rem",
                            fontWeight: 800,
                            color: badgeColor,
                            background: badgeBg,
                            padding: "0.15rem 0.5rem",
                            borderRadius: "4px",
                            flexShrink: 0
                          }}
                        >
                          {d.code}
                        </span>
                      </div>
                      <p
                        style={{
                          fontSize: "0.85rem",
                          color: "#475569",
                          margin: 0,
                          lineHeight: 1.45,
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden"
                        }}
                      >
                        {d.overview}
                      </p>
                    </Link>
                  );
                })}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
