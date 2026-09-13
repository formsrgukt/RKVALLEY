"use client";

import React, { useState } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { RGUKT_DATA } from "@/data/rguktData";
import { useApp } from "@/context/AppContext";

export default function AcademicsPage() {
  const { openDocModal, openGpaModal } = useApp();
  const [deptFilter, setDeptFilter] = useState<"All" | "Engineering" | "Sciences">("All");

  const engineeringDepartments = RGUKT_DATA.departments.filter(
    (d) => d.category === "Engineering"
  );
  const sciencesDepartments = RGUKT_DATA.departments.filter(
    (d) => d.category === "Sciences" || d.category === "Humanities"
  );

  const displayedDepts =
    deptFilter === "Engineering"
      ? engineeringDepartments
      : deptFilter === "Sciences"
      ? sciencesDepartments
      : RGUKT_DATA.departments;

  return (
    <div className="page-view-container" style={{ width: "100%", minHeight: "100vh" }}>
      <Breadcrumb title="Academics Overview & Academic System" category="Academics" />

      <div className="container" style={{ padding: "2.5rem 1rem 4rem 1rem", maxWidth: "1280px", margin: "0 auto" }}>
        {/* HERO INTRO CARD */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: "12px",
            border: "1px solid #e2e8f0",
            padding: "2.25rem",
            marginBottom: "2.5rem",
            boxShadow: "0 4px 15px rgba(0,0,0,0.04)"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem", marginBottom: "1rem" }}>
            <div>
              <span
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: "#800517",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  display: "inline-block",
                  marginBottom: "0.4rem"
                }}
              >
                Rajiv Gandhi University of Knowledge Technologies • RK Valley
              </span>
              <h1
                style={{
                  color: "var(--primary-dark)",
                  fontSize: "2.25rem",
                  fontWeight: 800,
                  margin: 0,
                  lineHeight: 1.25,
                  fontFamily: "var(--font-heading, inherit)"
                }}
              >
                Academics &amp; Learning Architecture
              </h1>
            </div>
            <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
              <Link
                href="/academics/academic-programmes"
                className="btn btn-primary"
                style={{ fontSize: "0.85rem", padding: "0.6rem 1.1rem" }}
              >
                Academic Programmes →
              </Link>
              <button
                type="button"
                className="btn btn-gold"
                style={{ fontSize: "0.85rem", padding: "0.6rem 1.1rem" }}
                onClick={() => openDocModal("Official Academic Regulations & Syllabus", "AcademicRulesRegulations071022.pdf")}
              >
                Regulations PDF
              </button>
            </div>
          </div>

          <p style={{ fontSize: "1.05rem", color: "#334155", lineHeight: 1.65, margin: 0 }}>
            The signature academic architecture at RGUKT is a revolutionary 6-year integrated residential model. Conceptualized to nurture gifted rural youth passing out of 10th class, the program seamlessly bridges high school education to world-class undergraduate engineering without intermediate coaching-class stress.
          </p>
        </div>

        {/* SECTION 1: 6-YEAR INTEGRATED B.TECH PARADIGM */}
        <section
          id="btech-overview"
          style={{
            background: "#ffffff",
            borderRadius: "12px",
            border: "1px solid #e2e8f0",
            padding: "2.25rem",
            marginBottom: "2.5rem",
            boxShadow: "0 4px 15px rgba(0,0,0,0.03)"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.75rem", marginBottom: "1.5rem", borderBottom: "2px solid #800517", paddingBottom: "1rem" }}>
            <div>
              <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#800517", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Core Academic Structure
              </span>
              <h2 style={{ color: "var(--primary-dark)", fontSize: "1.75rem", fontWeight: 800, margin: "0.25rem 0 0 0" }}>
                1. The 6-Year Integrated B.Tech Paradigm
              </h2>
            </div>
            <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--accent-royal)", background: "#fdf2f4", padding: "0.3rem 0.85rem", borderRadius: "20px", border: "1px solid #fecdd3" }}>
              2 Years PUC + 4 Years B.Tech
            </span>
          </div>

          <p style={{ fontSize: "0.98rem", color: "#475569", lineHeight: 1.6, marginBottom: "2rem" }}>
            The curriculum is split into two integrated tiers: a 2-year foundational Pre-University Course (PUC-I &amp; PUC-II) equivalent to Intermediate/10+2 with intensive computing education, followed by 4 years of Bachelor of Technology (E1 through E4) in specialized engineering streams.
          </p>

          {/* Phase 1: PUC */}
          <div style={{ marginBottom: "2.25rem" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.85rem" }}>
              <div>
                <h3 style={{ color: "var(--primary-dark)", margin: 0, fontSize: "1.2rem", fontWeight: 800 }}>
                  Phase 1: Pre-University Course (PUC 1 &amp; PUC 2)
                </h3>
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
                    <h4 style={{ color: "var(--accent-royal)", fontWeight: 800, fontSize: "1.05rem", margin: 0 }}>
                      PUC-1 (Pre-University Course - Year 1)
                    </h4>
                    <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "var(--accent-royal)", background: "#fdf2f4", padding: "0.15rem 0.5rem", borderRadius: "4px", border: "1px solid #fecdd3", flexShrink: 0 }}>
                      PUC-1
                    </span>
                  </div>
                  <p style={{ fontSize: "0.85rem", color: "#475569", margin: "0 0 0.55rem 0", lineHeight: 1.5 }}>
                    Rigorous foundational STEM curriculum transitioning rural secondary school achievers to technical education with 1:1 laptop-enabled learning.
                  </p>
                  <div style={{ fontSize: "0.8rem", color: "#64748b", lineHeight: 1.5 }}>
                    <strong style={{ color: "#334155" }}>Subjects:</strong> Mathematics-I, Physics-I, Chemistry-I, English Communication &amp; IT Computing with hands-on laboratories.
                  </div>
                </div>
                <div style={{ marginTop: "0.75rem", paddingTop: "0.6rem", borderTop: "1px solid #f1f5f9" }}>
                  <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--accent-royal)", background: "#fdf2f4", border: "1px solid #fecdd3", padding: "0.25rem 0.6rem", borderRadius: "5px", display: "inline-block" }}>
                    Single Semester • 6 Continuous Mids &amp; Final EST
                  </div>
                </div>
              </div>

              {/* PUC-2 Card */}
              <div className="academic-puc-card card-puc2">
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem", marginBottom: "0.4rem" }}>
                    <h4 style={{ color: "var(--accent-gold-dark)", fontWeight: 800, fontSize: "1.05rem", margin: 0 }}>
                      PUC-2 (Pre-University Course - Year 2)
                    </h4>
                    <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "var(--accent-gold-dark)", background: "#fef3c7", padding: "0.15rem 0.55rem", borderRadius: "4px", border: "1px solid #fde68a", flexShrink: 0 }}>
                      PUC-2
                    </span>
                  </div>
                  <p style={{ fontSize: "0.85rem", color: "#475569", margin: "0 0 0.55rem 0", lineHeight: 1.5 }}>
                    Advanced science and engineering preparatory track qualifying students for B.Tech branch counseling across 8 disciplines without entrance coaching.
                  </p>
                  <div style={{ fontSize: "0.8rem", color: "#64748b", lineHeight: 1.5 }}>
                    <strong style={{ color: "#334155" }}>Subjects:</strong> Mathematics-II, Physics-II, Chemistry-II, Programming (Python/C) &amp; Environmental Studies.
                  </div>
                </div>
                <div style={{ marginTop: "0.75rem", paddingTop: "0.6rem", borderTop: "1px solid #f1f5f9" }}>
                  <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#92400e", background: "#fef3c7", border: "1px solid #fde68a", padding: "0.25rem 0.6rem", borderRadius: "5px", display: "inline-block" }}>
                    Branch Allocation • Merit CGPA determines 8 B.Tech Disciplines
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: CURRICULUM & SYLLABUS */}
        <section
          id="curriculum-syllabus"
          style={{
            background: "#ffffff",
            borderRadius: "12px",
            border: "1px solid #e2e8f0",
            padding: "2.25rem",
            marginBottom: "2.5rem",
            boxShadow: "0 4px 15px rgba(0,0,0,0.03)"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.75rem", marginBottom: "1.5rem", borderBottom: "2px solid #800517", paddingBottom: "1rem" }}>
            <div>
              <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#800517", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Course Structures &amp; Academic Roadmaps
              </span>
              <h2 style={{ color: "var(--primary-dark)", fontSize: "1.75rem", fontWeight: 800, margin: "0.25rem 0 0 0" }}>
                2. Curriculum &amp; Syllabus
              </h2>
            </div>
            <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#92400e", background: "#fef3c7", padding: "0.3rem 0.85rem", borderRadius: "20px", border: "1px solid #fde68a" }}>
              AICTE 160-Credit Model
            </span>
          </div>

          <p style={{ fontSize: "0.98rem", color: "#475569", lineHeight: 1.6, marginBottom: "1.75rem" }}>
            The RGUKT curriculum is engineered in strict compliance with the AICTE Model Curriculum framework, emphasizing strong mathematical foundations, core engineering problem-solving, industry-relevant programming skills, and interdisciplinary innovation.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem", marginBottom: "1.75rem" }}>
            {/* PUC Curriculum Summary Box */}
            <div style={{ background: "#fafbfc", border: "1px solid #e2e8f0", borderLeft: "4px solid var(--accent-royal)", borderRadius: "8px", padding: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                <h4 style={{ margin: 0, color: "var(--accent-royal)", fontSize: "1.1rem", fontWeight: 700 }}>
                  Pre-University Course (PUC)
                </h4>
                <span style={{ fontSize: "0.72rem", fontWeight: 700, background: "#fdf2f4", color: "var(--accent-royal)", padding: "0.15rem 0.5rem", borderRadius: "4px" }}>
                  Continuous Evaluation
                </span>
              </div>
              <p style={{ fontSize: "0.88rem", color: "#475569", lineHeight: 1.55, marginBottom: "1rem" }}>
                No 2-semester split. Operated under a continuous single-year structure assessed via 6 Mid Examinations and a comprehensive End Semester Test (EST) with 100% computerized evaluation support.
              </p>
              <ul style={{ margin: 0, paddingLeft: "1.2rem", fontSize: "0.85rem", color: "#334155", lineHeight: 1.6 }}>
                <li>Mathematics, Physics, and Chemistry integrated laboratory work</li>
                <li>Compulsory Computer Programming &amp; Computational Thinking (Python/C)</li>
                <li>Interactive English Language &amp; Communication Labs (ELL)</li>
              </ul>
            </div>

            {/* B.Tech Curriculum Summary Box */}
            <div style={{ background: "#fafbfc", border: "1px solid #e2e8f0", borderLeft: "4px solid var(--accent-gold-dark)", borderRadius: "8px", padding: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                <h4 style={{ margin: 0, color: "var(--accent-gold-dark)", fontSize: "1.1rem", fontWeight: 700 }}>
                  Undergraduate B.Tech (E1–E4)
                </h4>
                <span style={{ fontSize: "0.72rem", fontWeight: 700, background: "#fef3c7", color: "#92400e", padding: "0.15rem 0.5rem", borderRadius: "4px" }}>
                  160 Credits Total
                </span>
              </div>
              <p style={{ fontSize: "0.88rem", color: "#475569", lineHeight: 1.55, marginBottom: "1rem" }}>
                Follows 8 semester academic schedule with Choice Based Credit System (CBCS). Combines basic sciences (BSC), engineering sciences (ESC), program core (PCC), electives (PEC/OEC), and capstone project.
              </p>
              <ul style={{ margin: 0, paddingLeft: "1.2rem", fontSize: "0.85rem", color: "#334155", lineHeight: 1.6 }}>
                <li>Emerging technology minors (AI/ML, Data Science, Cyber Security, IoT)</li>
                <li>Mandatory Summer Internships &amp; Industrial Training programs</li>
                <li>Final Year Capstone Project (E4 S1 &amp; S2) with industry mentors</li>
              </ul>
            </div>
          </div>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
            <Link
              href="/curriculum"
              className="btn btn-primary"
              style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
            >
              <span>Explore Detailed Curriculum &amp; Syllabus Portal</span>
              <span>→</span>
            </Link>
            <button
              type="button"
              className="btn btn-gold"
              onClick={() => openDocModal("Official Academic Regulations & Syllabus", "AcademicRulesRegulations071022.pdf")}
            >
              Download Full Academic Regulations PDF
            </button>
          </div>
        </section>

        {/* SECTION 3: ALL DEPARTMENTS */}
        <section
          id="all-departments"
          style={{
            background: "#ffffff",
            borderRadius: "12px",
            border: "1px solid #e2e8f0",
            padding: "2.25rem",
            marginBottom: "2.5rem",
            boxShadow: "0 4px 15px rgba(0,0,0,0.03)"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.75rem", marginBottom: "1.5rem", borderBottom: "2px solid #800517", paddingBottom: "1rem" }}>
            <div>
              <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#800517", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Academic Faculty &amp; Disciplines
              </span>
              <h2 style={{ color: "var(--primary-dark)", fontSize: "1.75rem", fontWeight: 800, margin: "0.25rem 0 0 0" }}>
                3. All Academic Departments
              </h2>
            </div>
            <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
              <button
                type="button"
                onClick={() => setDeptFilter("All")}
                style={{
                  padding: "0.35rem 0.85rem",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  borderRadius: "20px",
                  border: "1px solid",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                  borderColor: deptFilter === "All" ? "var(--primary-maroon)" : "#cbd5e1",
                  background: deptFilter === "All" ? "var(--primary-maroon)" : "#ffffff",
                  color: deptFilter === "All" ? "#ffffff" : "#475569"
                }}
              >
                All (13)
              </button>
              <button
                type="button"
                onClick={() => setDeptFilter("Engineering")}
                style={{
                  padding: "0.35rem 0.85rem",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  borderRadius: "20px",
                  border: "1px solid",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                  borderColor: deptFilter === "Engineering" ? "var(--primary-maroon)" : "#cbd5e1",
                  background: deptFilter === "Engineering" ? "var(--primary-maroon)" : "#ffffff",
                  color: deptFilter === "Engineering" ? "#ffffff" : "#475569"
                }}
              >
                Engineering (8)
              </button>
              <button
                type="button"
                onClick={() => setDeptFilter("Sciences")}
                style={{
                  padding: "0.35rem 0.85rem",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  borderRadius: "20px",
                  border: "1px solid",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                  borderColor: deptFilter === "Sciences" ? "var(--primary-maroon)" : "#cbd5e1",
                  background: deptFilter === "Sciences" ? "var(--primary-maroon)" : "#ffffff",
                  color: deptFilter === "Sciences" ? "#ffffff" : "#475569"
                }}
              >
                Sciences &amp; Humanities (5)
              </button>
            </div>
          </div>

          <p style={{ fontSize: "0.98rem", color: "#475569", lineHeight: 1.6, marginBottom: "1.75rem" }}>
            RGUKT RK Valley houses 13 specialized academic departments spanning 8 core engineering disciplines and 5 foundational sciences and humanities divisions, fostering advanced research, innovative laboratory training, and industry collaboration.
          </p>

          <div className="academic-two-col-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "1.25rem", marginBottom: "1.75rem" }}>
            {displayedDepts.map((d, idx) => {
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
                  style={{ textDecoration: "none" }}
                >
                  <div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem", marginBottom: "0.35rem" }}>
                      <h4 style={{ color: titleColor, fontWeight: 700, fontSize: "1.02rem", margin: 0 }}>
                        {d.name}
                      </h4>
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
                        fontSize: "0.84rem",
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

                    <div style={{ display: "flex", gap: "0.75rem", fontSize: "0.76rem", color: "#64748b", fontWeight: 600, flexWrap: "wrap" }}>
                      <span>Faculty: {d.facultyCount}</span>
                      <span>•</span>
                      <span>Labs: {d.labsCount}</span>
                      <span>•</span>
                      <span>Students: {d.studentCount}</span>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "0.75rem", paddingTop: "0.55rem", borderTop: "1px solid #f1f5f9" }}>
                    <span style={{ fontSize: "0.8rem", fontWeight: 700, color: titleColor }}>
                      Explore Department &amp; Labs →
                    </span>
                    <span style={{ fontSize: "0.75rem", color: "#94a3b8" }}>
                      HOD: {d.hod.split(",")[0]}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              href="/academics/departments"
              className="btn btn-primary"
              style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
            >
              <span>View All 13 Departments Directory</span>
              <span>→</span>
            </Link>
          </div>
        </section>

        {/* QUICK ACTIONS & OFFICIAL TOOLS */}
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1rem" }}>
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
          <Link
            href="/academics/academic-programmes"
            className="btn btn-primary"
            style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
          >
            <span>Explore Academic Programmes (UG, PG &amp; Summer) →</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
