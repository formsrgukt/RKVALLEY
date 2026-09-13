"use client";

import React from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ExploreSidebar from "@/components/Common/ExploreSidebar";
import { RGUKT_DATA } from "@/data/rguktData";
import { useApp } from "@/context/AppContext";

export default function AcademicsPage() {
  const { openDocModal, openGpaModal } = useApp();
  const engineeringDepartments = RGUKT_DATA.departments.filter(
    (d) => d.category === "Engineering"
  );

  return (
    <div className="page-view-container">
      <Breadcrumb title="6-Year B.Tech Overview" category="Academics" />

      <div className="container">
        <div className="page-content-layout">
          <ExploreSidebar activeSection="academics" />

          <article className="page-main-body">
            <h3>The 6-Year Integrated B.Tech Academic Paradigm</h3>
            <p style={{ fontSize: "1rem", color: "#334155", lineHeight: 1.6, marginBottom: "1.75rem" }}>
              The signature academic architecture at Rajiv Gandhi University of Knowledge Technologies (RGUKT) is a revolutionary 6-year integrated residential model. Conceptualized to nurture gifted rural youth passing out of 10th class, the program seamlessly bridges high school education to world-class undergraduate engineering without intermediate coaching-class stress.
            </p>

            {/* PHASE 1: PRE-UNIVERSITY COURSE (PUC 1 & PUC 2) */}
            <div style={{ marginBottom: "2.25rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.85rem" }}>
                <div>
                  <h4 style={{ color: "var(--primary-dark)", margin: 0, fontSize: "1.15rem", fontWeight: 800 }}>
                    Phase 1: Pre-University Course (PUC 1 &amp; PUC 2)
                  </h4>
                  <p style={{ fontSize: "0.85rem", color: "#64748b", margin: "0.2rem 0 0 0" }}>
                    Two-year foundational STEM cycle bridging secondary school to collegiate engineering:
                  </p>
                </div>
                <span style={{ fontSize: "0.74rem", fontWeight: 700, color: "var(--accent-royal)", background: "#fdf2f4", padding: "0.2rem 0.65rem", borderRadius: "5px", border: "1px solid #fecdd3" }}>
                  Years 1 &amp; 2 • Foundation Stage
                </span>
              </div>

              <div className="academic-two-col-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "1.25rem" }}>
                {/* PUC-1 Card */}
                <div className="academic-puc-card card-puc1">
                  <div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem", marginBottom: "0.4rem" }}>
                      <h5 style={{ color: "var(--accent-royal)", fontWeight: 800, fontSize: "1rem", margin: 0 }}>
                        PUC-1 (Pre-University Course - Year 1)
                      </h5>
                      <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "var(--accent-royal)", background: "#fdf2f4", padding: "0.15rem 0.5rem", borderRadius: "4px", border: "1px solid #fecdd3", flexShrink: 0 }}>
                        PUC-1
                      </span>
                    </div>

                    <p style={{ fontSize: "0.84rem", color: "#475569", margin: "0 0 0.55rem 0", lineHeight: 1.5 }}>
                      Rigorous foundational STEM curriculum transitioning rural secondary school achievers to technical education with 1:1 laptop-enabled learning.
                    </p>

                    <div style={{ fontSize: "0.78rem", color: "#64748b", lineHeight: 1.45 }}>
                      <strong style={{ color: "#334155" }}>Subjects:</strong> Mathematics-I, Physics-I, Chemistry-I, English Communication &amp; IT Computing with laboratories.
                    </div>
                  </div>

                  <div style={{ marginTop: "0.65rem", paddingTop: "0.55rem", borderTop: "1px solid #f1f5f9" }}>
                    <div style={{ fontSize: "0.73rem", fontWeight: 600, color: "var(--accent-royal)", background: "#fdf2f4", border: "1px solid #fecdd3", padding: "0.25rem 0.55rem", borderRadius: "5px", display: "inline-block" }}>
                      Single Semester • 6 Continuous Mids &amp; Final EST
                    </div>
                  </div>
                </div>

                {/* PUC-2 Card */}
                <div className="academic-puc-card card-puc2">
                  <div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem", marginBottom: "0.4rem" }}>
                      <h5 style={{ color: "var(--accent-gold-dark)", fontWeight: 800, fontSize: "1rem", margin: 0 }}>
                        PUC-2 (Pre-University Course - Year 2)
                      </h5>
                      <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "var(--accent-gold-dark)", background: "#fef3c7", padding: "0.15rem 0.55rem", borderRadius: "4px", border: "1px solid #fde68a", flexShrink: 0 }}>
                        PUC-2
                      </span>
                    </div>

                    <p style={{ fontSize: "0.84rem", color: "#475569", margin: "0 0 0.55rem 0", lineHeight: 1.5 }}>
                      Advanced science and engineering preparatory track qualifying students for B.Tech branch counseling across 8 disciplines without entrance coaching.
                    </p>

                    <div style={{ fontSize: "0.78rem", color: "#64748b", lineHeight: 1.45 }}>
                      <strong style={{ color: "#334155" }}>Subjects:</strong> Mathematics-II, Physics-II, Chemistry-II, Programming (Python/C) &amp; Environmental Studies.
                    </div>
                  </div>

                  <div style={{ marginTop: "0.65rem", paddingTop: "0.55rem", borderTop: "1px solid #f1f5f9" }}>
                    <div style={{ fontSize: "0.73rem", fontWeight: 600, color: "#92400e", background: "#fef3c7", border: "1px solid #fde68a", padding: "0.25rem 0.55rem", borderRadius: "5px", display: "inline-block" }}>
                      Branch Allocation • Merit CGPA determines 8 B.Tech Disciplines
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PHASE 2: BACHELOR OF TECHNOLOGY (B.TECH) - 8 ENGINEERING DEPARTMENTS */}
            <div style={{ marginBottom: "2.25rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.85rem" }}>
                <div>
                  <h4 style={{ color: "var(--primary-dark)", margin: 0, fontSize: "1.15rem", fontWeight: 800 }}>
                    Phase 2: Bachelor of Technology (B.Tech) — 8 Engineering Departments
                  </h4>
                  <p style={{ fontSize: "0.85rem", color: "#64748b", margin: "0.2rem 0 0 0" }}>
                    Four-year specialized degree programs (E1 to E4) following AICTE 160-credit framework:
                  </p>
                </div>
                <span style={{ fontSize: "0.74rem", fontWeight: 700, color: "var(--accent-gold-dark)", background: "#fef3c7", padding: "0.2rem 0.65rem", borderRadius: "5px", border: "1px solid #fde68a" }}>
                  Undergraduate Stage • 4 Years (E1–E4)
                </span>
              </div>

              <div className="academic-two-col-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "1.25rem" }}>
                {engineeringDepartments.map((d, idx) => {
                  const isYellow = idx % 2 === 1;
                  const cardClass = isYellow ? "academic-dept-card card-gold" : "academic-dept-card card-royal";
                  const titleColor = isYellow ? "var(--accent-gold-dark)" : "var(--accent-royal)";
                  const badgeColor = isYellow ? "var(--accent-gold-dark)" : "var(--accent-royal)";
                  const badgeBg = isYellow ? "#fef3c7" : "#fdf2f4";
                  const badgeBorder = isYellow ? "1px solid #fde68a" : "1px solid #fecdd3";

                  return (
                    <Link
                      key={d.id}
                      href={`/departments/${d.id}`}
                      className={cardClass}
                    >
                      <div>
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
                              border: badgeBorder,
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
                            fontSize: "0.82rem",
                            color: "#475569",
                            margin: "0 0 0.55rem 0",
                            lineHeight: 1.45,
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden"
                          }}
                        >
                          {d.overview}
                        </p>

                        <div style={{ display: "flex", gap: "0.75rem", fontSize: "0.75rem", color: "#64748b", fontWeight: 600, flexWrap: "wrap" }}>
                          <span>Faculty: {d.facultyCount}</span>
                          <span>•</span>
                          <span>Labs: {d.labsCount}</span>
                          <span>•</span>
                          <span>Students: {d.studentCount}</span>
                        </div>
                      </div>

                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "0.65rem", paddingTop: "0.5rem", borderTop: "1px solid #f1f5f9" }}>
                        <span style={{ fontSize: "0.78rem", fontWeight: 700, color: titleColor }}>
                          Explore Department &amp; Syllabus →
                        </span>
                        <span style={{ fontSize: "0.74rem", color: "#94a3b8" }}>
                          HOD: {d.hod.split(",")[0]}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions & Official Downloads */}
            <div id="programs" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
              <Link
                href="/academics/academic-programmes"
                className="btn btn-primary"
                style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
              >
                <span>Explore Academic Programmes (UG, PG & Summer)</span>
                <span>→</span>
              </Link>
              <button
                type="button"
                className="btn btn-gold"
                onClick={() => openDocModal("Official Academic Regulations & Syllabus", "AcademicRulesRegulations071022.pdf")}
              >
                Download Academic Regulations (PDF)
              </button>
              <button
                type="button"
                className="btn"
                style={{ background: "#f1f5f9", color: "#003366", border: "1px solid #cbd5e1" }}
                onClick={openGpaModal}
              >
                RGUKT CGPA Calculator Tool
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
