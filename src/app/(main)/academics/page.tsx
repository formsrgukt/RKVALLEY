"use client";

import React from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { RGUKT_DATA } from "@/data/rguktData";
import { useApp } from "@/context/AppContext";

export default function AcademicsPage() {
  const { openDocModal, openGpaModal } = useApp();

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
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                <div style={{ background: "#fff", padding: "1.25rem", borderRadius: "8px", borderLeft: "4px solid var(--accent-royal)", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
                  <h5 style={{ color: "var(--accent-royal)", fontWeight: 700, marginBottom: "0.35rem" }}>Phase 1: Pre-University Course (PUC I & PUC II)</h5>
                  <p style={{ fontSize: "0.85rem", color: "#475569" }}>Two years of intensive foundational instruction in Mathematics, Physics, Chemistry, English, Information Technology, and Biology/Environmental Sciences.</p>
                </div>
                <div style={{ background: "#fff", padding: "1.25rem", borderRadius: "8px", borderLeft: "4px solid var(--accent-gold)", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
                  <h5 style={{ color: "var(--accent-gold-dark)", fontWeight: 700, marginBottom: "0.35rem" }}>Phase 2: Bachelor of Technology (E1, E2, E3, E4)</h5>
                  <p style={{ fontSize: "0.85rem", color: "#475569" }}>Four years of specialized engineering education in 7 core engineering streams with minor specializations in AI, Data Science, Cyber Security, and Renewable Energy.</p>
                </div>
              </div>
            </div>

            <h4 style={{ marginBottom: "1rem", color: "var(--primary-dark)" }}>Engineering Disciplines Offered</h4>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
              {RGUKT_DATA.departments.filter((d) => d.category === "Engineering").map((d) => (
                <Link key={d.id} href={`/departments/${d.id}`} style={{ background: "#fff", border: "1px solid #e2e8f0", padding: "1rem", borderRadius: "8px", textAlign: "center", textDecoration: "none" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--accent-royal)" }}>{d.code}</span>
                  <h5 style={{ fontSize: "0.92rem", color: "var(--primary-dark)", marginTop: "0.25rem" }}>{d.name}</h5>
                </Link>
              ))}
            </div>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => openDocModal("Official Academic Regulations & Syllabus", "Academic_Regulations_RGUKT_2026.pdf")}
              >
                Download Academic Regulations (PDF)
              </button>
              <button type="button" className="btn btn-gold" onClick={openGpaModal}>
                RGUKT CGPA Calculator Tool
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
