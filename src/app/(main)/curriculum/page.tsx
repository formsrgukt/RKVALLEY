"use client";

import React, { useState } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { RGUKT_DATA } from "@/data/rguktData";
import { useApp } from "@/context/AppContext";

export default function CurriculumPage() {
  const { openDocModal, openGpaModal } = useApp();
  const [activeFilter, setActiveFilter] = useState<"All" | "PUC" | "Engineering" | "Sciences">("All");

  const engineeringDepts = RGUKT_DATA.departments.filter((d) => d.category === "Engineering");
  const sciencesDepts = RGUKT_DATA.departments.filter((d) => d.category === "Sciences" || d.category === "Humanities");

  const renderPucModalContent = (year: "PUC-I" | "PUC-II") => {
    const isPuc1 = year === "PUC-I";
    const subjects = isPuc1
      ? [
          { name: "Mathematics-I", code: "M101", credits: 8, desc: "Algebra, Trigonometry, Analytical Geometry, Functions, and Calculus foundations." },
          { name: "Physics-I & Laboratory", code: "P102", credits: 8, desc: "Mechanics, Waves, Thermodynamics, Optics, Practical experiments in physics lab." },
          { name: "Chemistry-I & Laboratory", code: "C103", credits: 8, desc: "Physical, Inorganic & Organic Chemistry fundamentals, Qualitative chemical analysis lab." },
          { name: "English Communication Skills", code: "E104", credits: 4, desc: "Grammar, Phonetics, Reading Comprehension, Interactive Multimedia English Language Lab (ELL)." },
          { name: "Information Technology & Computing Lab", code: "IT105", credits: 4, desc: "Computational Thinking, Linux OS, Productivity Tools, Basic Programming logic." },
          { name: "Environmental Studies", code: "ES106", credits: 2, desc: "Ecology, Natural Resources conservation, Environmental Pollution & sustainable solutions." }
        ]
      : [
          { name: "Mathematics-II", code: "M201", credits: 8, desc: "Differential Equations, Matrix Algebra, Probability & Statistics, Vector Calculus." },
          { name: "Physics-II & Laboratory", code: "P202", credits: 8, desc: "Electrodynamics, Magnetism, Modern Physics, Semiconductor Electronics, Practical lab experiments." },
          { name: "Chemistry-II & Laboratory", code: "C203", credits: 6, desc: "Electrochemistry, Coordination Chemistry, Organic Synthesis & Instrumental Chemistry lab." },
          { name: "C-Programming & Data Structures", code: "CS204", credits: 6, desc: "Problem Solving through C, Control Structures, Arrays, Pointers, Linked Lists, Stacks & Queues." },
          { name: "Technical English & Soft Skills", code: "E205", credits: 4, desc: "Technical Writing, Presentation Skills, Group Discussions, Professional verbal interaction." },
          { name: "Biology for Engineers", code: "BIO206", credits: 2, desc: "Biomolecules, Cellular architecture, Bio-inspired computational algorithms & bio-materials." }
        ];

    return (
      <div style={{ padding: "0.25rem 0" }}>
        {/* Important Regulation Box */}
        <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "8px", padding: "1rem 1.25rem", marginBottom: "1.25rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.35rem" }}>
            <span style={{ fontSize: "1.2rem" }}>📋</span>
            <h5 style={{ margin: 0, color: "#991b1b", fontWeight: 700, fontSize: "0.98rem" }}>
              PUC Academic Evaluation Structure (No 2-Semester Division)
            </h5>
          </div>
          <p style={{ margin: 0, fontSize: "0.85rem", color: "#7f1d1d", lineHeight: 1.55 }}>
            In the Pre-University Course (PUC), there are <strong>no 2 semesters</strong>. The academic program operates on a <strong>single continuous semester</strong> structure evaluated continuously through <strong>6 Mid Examinations (Mid 1 to Mid 6)</strong> throughout the academic year, and at the end of the year only the <strong>End Semester Test (EST)</strong> is conducted.
          </p>
        </div>

        {/* Mids & EST Breakdown */}
        <h5 style={{ color: "var(--primary-dark)", fontSize: "0.95rem", marginBottom: "0.6rem" }}>
          6 Mid Examinations &amp; Final EST Schedule
        </h5>
        <div style={{ overflowX: "auto", marginBottom: "1.25rem" }}>
          <table className="gov-table" style={{ fontSize: "0.8rem", background: "#fff", width: "100%" }}>
            <thead>
              <tr>
                <th>Exam Level</th>
                <th>Examination Name</th>
                <th>Type &amp; Purpose</th>
                <th>Syllabus Scope</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Mid 1 &amp; Mid 2</strong></td>
                <td>Quarter 1 Mid Examinations</td>
                <td>Continuous Internal Assessment</td>
                <td>Unit 1 &amp; Unit 2</td>
              </tr>
              <tr>
                <td><strong>Mid 3 &amp; Mid 4</strong></td>
                <td>Mid-Year Examinations</td>
                <td>Continuous Internal Assessment</td>
                <td>Unit 3 &amp; Unit 4</td>
              </tr>
              <tr>
                <td><strong>Mid 5 &amp; Mid 6</strong></td>
                <td>Pre-Final Mid Examinations</td>
                <td>Continuous Internal Assessment</td>
                <td>Unit 5 &amp; Unit 6 (Complete Review)</td>
              </tr>
              <tr style={{ background: "#f8fafc" }}>
                <td><strong style={{ color: "var(--accent-royal)" }}>EST (Final)</strong></td>
                <td><strong>End Semester Test (EST)</strong></td>
                <td><strong>Final University Examination (Conducted at End)</strong></td>
                <td><strong>100% Comprehensive Syllabus</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Subjects List */}
        <h5 style={{ color: "var(--primary-dark)", fontSize: "0.95rem", marginBottom: "0.6rem" }}>
          {year} Curriculum Subjects Breakdown (32 Credits Total)
        </h5>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          {subjects.map((sub, i) => (
            <div key={i} style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "6px", padding: "0.7rem 0.9rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.2rem", flexWrap: "wrap", gap: "0.25rem" }}>
                <span style={{ fontWeight: 700, fontSize: "0.88rem", color: "var(--primary-dark)" }}>{sub.name}</span>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--accent-royal)", background: "#eff6ff", padding: "0.15rem 0.45rem", borderRadius: "4px" }}>
                  {sub.code} • {sub.credits} Credits
                </span>
              </div>
              <p style={{ margin: 0, fontSize: "0.8rem", color: "#64748b" }}>{sub.desc}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="page-view-container">
      <Breadcrumb title="Curriculum & Academic Syllabus" category="Academics" />

      <div className="container">
        <div className="page-content-layout">
          {/* Sidebar */}
          <aside className="page-sidebar" aria-label="Section Navigation">
            <h4 className="sidebar-menu-title">Explore Section</h4>
            <ul className="sidebar-nav-list">
              <li><Link href="/curriculum" className="sidebar-link active">Curriculum & Syllabus</Link></li>
              <li><Link href="/departments" className="sidebar-link">All Departments</Link></li>
              <li><Link href="/academics" className="sidebar-link">6-Year B.Tech Overview</Link></li>
              <li><Link href="/examinations" className="sidebar-link">Grading & Exam Regulations</Link></li>
              <li><Link href="/admissions" className="sidebar-link">Admissions Guidelines</Link></li>
            </ul>
          </aside>

          {/* Main Content */}
          <article className="page-main-body">
            <h3>Academic Curricula & Comprehensive Syllabi</h3>
            <p style={{ fontSize: "1rem", color: "#334155", marginBottom: "1.5rem" }}>
              Explore official course curricula, credit frameworks, and academic syllabi for the 6-Year Integrated B.Tech program across Pre-University Courses (PUC I &amp; PUC II with single-semester 6-Mid &amp; EST evaluation) and 8 Core Engineering disciplines at RGUKT RK Valley.
            </p>

            {/* Quick Filter Navigation */}
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
              {(["All", "PUC", "Engineering", "Sciences"] as const).map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  style={{
                    padding: "0.5rem 1.1rem",
                    borderRadius: "6px",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    border: activeFilter === filter ? "1px solid var(--accent-royal)" : "1px solid #cbd5e1",
                    background: activeFilter === filter ? "var(--accent-royal)" : "#ffffff",
                    color: activeFilter === filter ? "#ffffff" : "#475569"
                  }}
                >
                  {filter === "All" ? "All Programs" : filter === "PUC" ? "PUC (Years 1–2)" : filter === "Engineering" ? "Engineering (E1–E4)" : "Sciences & Humanities"}
                </button>
              ))}
            </div>

            {/* SECTION 1: PUC SYLLABUS */}
            {(activeFilter === "All" || activeFilter === "PUC") && (
              <div style={{ marginBottom: "2.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem", flexWrap: "wrap", gap: "0.5rem" }}>
                  <h4 style={{ color: "var(--primary-dark)", margin: 0 }}>
                    Pre-University Course (PUC I &amp; PUC II) Curriculum
                  </h4>
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ fontSize: "0.8rem", padding: "0.4rem 0.85rem", borderRadius: "6px" }}
                    onClick={() => openDocModal("PUC Complete Academic Syllabus Handbook", "RGUKT_PUC_Curriculum_Handbook_2026.pdf", renderPucModalContent("PUC-I"))}
                  >
                    Download PUC Syllabus (PDF)
                  </button>
                </div>

                <div className="academic-two-col-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "1.25rem", marginBottom: "1.5rem" }}>
                  {/* PUC 1 Card */}
                  <div className="dept-card-red">
                    <div>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem", marginBottom: "0.35rem" }}>
                        <h5 style={{ color: "var(--accent-royal)", fontWeight: 700, fontSize: "1.02rem", margin: 0 }}>
                          PUC-I (First Year Pre-University Course)
                        </h5>
                        <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "var(--accent-royal)", background: "#fdf2f4", padding: "0.15rem 0.5rem", borderRadius: "4px" }}>
                          PUC-1
                        </span>
                      </div>
                      <p style={{ fontSize: "0.85rem", color: "#475569", margin: "0 0 0.65rem 0", lineHeight: 1.45 }}>
                        Intensive foundations in core STEM disciplines with hands-on computational IT labs and scientific experiments.
                      </p>

                      {/* Evaluation Scheme Notice: Single semester with 6 mids and only EST conducted at the end */}
                      <div style={{ background: "#fdf2f4", border: "1px solid #fecdd3", borderRadius: "6px", padding: "0.4rem 0.65rem", fontSize: "0.76rem", color: "var(--accent-royal)", fontWeight: 600, marginBottom: "0.65rem", display: "flex", alignItems: "center", gap: "0.45rem" }}>
                        <span style={{ fontSize: "0.9rem" }}>📋</span>
                        <span><strong>Evaluation Scheme:</strong> Single semester • <strong>6 Mids</strong> &amp; only <strong>EST</strong> conducted at the end</span>
                      </div>

                      <div style={{ background: "#f8fafc", padding: "0.75rem", borderRadius: "6px", fontSize: "0.78rem", color: "#334155", marginBottom: "0.75rem", lineHeight: 1.6 }}>
                        <strong>Course Subjects:</strong> Mathematics-I, Physics-I &amp; Lab, Chemistry-I &amp; Lab, English Communication Skills, Information Technology &amp; Computing Lab, Environmental Studies.
                      </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto", paddingTop: "0.5rem", borderTop: "1px dashed #f1f5f9" }}>
                      <span style={{ fontSize: "0.78rem", color: "#64748b" }}>Credits: <strong>32 Credits / Year</strong></span>
                      <button
                        type="button"
                        className="btn btn-primary"
                        style={{ padding: "0.3rem 0.75rem", fontSize: "0.75rem", fontWeight: 600, borderRadius: "5px" }}
                        onClick={() => openDocModal("PUC-I Academic Syllabus & 6-Mid Regulations", "PUC_1_Detailed_Syllabus_2026.pdf", renderPucModalContent("PUC-I"))}
                      >
                        View Syllabus →
                      </button>
                    </div>
                  </div>

                  {/* PUC 2 Card */}
                  <div className="dept-card-gold">
                    <div>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem", marginBottom: "0.35rem" }}>
                        <h5 style={{ color: "var(--accent-gold-dark)", fontWeight: 700, fontSize: "1.02rem", margin: 0 }}>
                          PUC-II (Second Year Pre-University Course)
                        </h5>
                        <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "var(--accent-gold-dark)", background: "#fef3c7", padding: "0.15rem 0.5rem", borderRadius: "4px" }}>
                          PUC-2
                        </span>
                      </div>
                      <p style={{ fontSize: "0.85rem", color: "#475569", margin: "0 0 0.65rem 0", lineHeight: 1.45 }}>
                        Advanced pre-engineering coursework bridging pure sciences and computational algorithms for engineering branch allocation.
                      </p>

                      {/* Evaluation Scheme Notice: Single semester with 6 mids and only EST conducted at the end */}
                      <div style={{ background: "#fffbeb", border: "1px solid #fde68a", borderRadius: "6px", padding: "0.4rem 0.65rem", fontSize: "0.76rem", color: "#92400e", fontWeight: 600, marginBottom: "0.65rem", display: "flex", alignItems: "center", gap: "0.45rem" }}>
                        <span style={{ fontSize: "0.9rem" }}>📋</span>
                        <span><strong>Evaluation Scheme:</strong> Single semester • <strong>6 Mids</strong> &amp; only <strong>EST</strong> conducted at the end</span>
                      </div>

                      <div style={{ background: "#fffbeb", padding: "0.75rem", borderRadius: "6px", fontSize: "0.78rem", color: "#78350f", marginBottom: "0.75rem", lineHeight: 1.6 }}>
                        <strong>Course Subjects:</strong> Mathematics-II (Calculus &amp; Linear Algebra), Physics-II (Electrodynamics), Chemistry-II, C-Programming &amp; Data Structures, Technical English, Biology for Engineers.
                      </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto", paddingTop: "0.5rem", borderTop: "1px dashed #fef3c7" }}>
                      <span style={{ fontSize: "0.78rem", color: "#64748b" }}>Credits: <strong>32 Credits / Year</strong></span>
                      <button
                        type="button"
                        className="btn btn-gold"
                        style={{ padding: "0.3rem 0.75rem", fontSize: "0.75rem", fontWeight: 600, borderRadius: "5px" }}
                        onClick={() => openDocModal("PUC-II Academic Syllabus & 6-Mid Regulations", "PUC_2_Detailed_Syllabus_2026.pdf", renderPucModalContent("PUC-II"))}
                      >
                        View Syllabus →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SECTION 2: ENGINEERING DISCIPLINES (E1 - E4) SYLLABI */}
            {(activeFilter === "All" || activeFilter === "Engineering") && (
              <div style={{ marginBottom: "2.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem", flexWrap: "wrap", gap: "0.5rem" }}>
                  <h4 style={{ color: "var(--primary-dark)", margin: 0 }}>
                    4-Year B.Tech Engineering Curricula (E1 to E4)
                  </h4>
                  <span style={{ fontSize: "0.85rem", color: "#64748b" }}>
                    AICTE Model Curriculum • 160 Credits
                  </span>
                </div>

                <div className="academic-two-col-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "1.25rem", marginBottom: "1.5rem" }}>
                  {engineeringDepts.map((d, idx) => {
                    const isYellow = idx % 2 === 1;
                    const cardClass = isYellow ? "dept-card-gold" : "dept-card-red";
                    const titleColor = isYellow ? "var(--accent-gold-dark)" : "var(--accent-royal)";
                    const badgeColor = isYellow ? "var(--accent-gold-dark)" : "var(--accent-royal)";
                    const badgeBg = isYellow ? "#fef3c7" : "#fdf2f4";
                    const btnClass = isYellow ? "btn btn-gold" : "btn btn-primary";

                    return (
                      <div key={d.id} className={cardClass}>
                        <div>
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem", marginBottom: "0.35rem" }}>
                            <h5 style={{ color: titleColor, fontWeight: 700, fontSize: "1.02rem", margin: 0 }}>
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
                              margin: "0 0 0.85rem 0",
                              lineHeight: 1.45,
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden"
                            }}
                          >
                            {d.overview}
                          </p>
                          <div style={{ display: "flex", gap: "0.75rem", fontSize: "0.78rem", color: "#64748b", marginBottom: "0.85rem", flexWrap: "wrap" }}>
                            <span><strong>8</strong> Semesters</span> • 
                            <span><strong>160</strong> Credits</span> • 
                            <span><strong>{d.labsCount}</strong> Specialized Labs</span>
                          </div>
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto", paddingTop: "0.5rem", borderTop: "1px dashed #f1f5f9", gap: "0.5rem", flexWrap: "wrap" }}>
                          <button
                            type="button"
                            className={btnClass}
                            style={{
                              padding: "0.3rem 0.75rem",
                              fontSize: "0.75rem",
                              fontWeight: 600,
                              borderRadius: "5px"
                            }}
                            onClick={() => openDocModal(`${d.name} Detailed Syllabus Handbook`, `${d.code}_BTech_Syllabus_2026.pdf`)}
                          >
                            Download Syllabus PDF
                          </button>
                          <Link
                            href={`/departments/${d.id}`}
                            style={{
                              fontSize: "0.78rem",
                              fontWeight: 700,
                              color: titleColor,
                              textDecoration: "none"
                            }}
                          >
                            View Department Details →
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* SECTION 3: SCIENCES & HUMANITIES */}
            {(activeFilter === "All" || activeFilter === "Sciences") && (
              <div style={{ marginBottom: "2.5rem" }}>
                <h4 style={{ color: "var(--primary-dark)", marginBottom: "1rem" }}>
                  Basic Sciences &amp; Humanities Supporting Curricula
                </h4>
                <div className="academic-two-col-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "1.25rem", marginBottom: "1.5rem" }}>
                  {sciencesDepts.map((d, idx) => {
                    const isYellow = idx % 2 === 1;
                    const cardClass = isYellow ? "dept-card-gold" : "dept-card-red";
                    const titleColor = isYellow ? "var(--accent-gold-dark)" : "var(--accent-royal)";
                    const badgeColor = isYellow ? "var(--accent-gold-dark)" : "var(--accent-royal)";
                    const badgeBg = isYellow ? "#fef3c7" : "#fdf2f4";
                    const btnClass = isYellow ? "btn btn-gold" : "btn btn-primary";

                    return (
                      <div key={d.id} className={cardClass}>
                        <div>
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem", marginBottom: "0.35rem" }}>
                            <h5 style={{ color: titleColor, fontWeight: 700, fontSize: "1.02rem", margin: 0 }}>
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
                              margin: "0 0 0.85rem 0",
                              lineHeight: 1.45,
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden"
                            }}
                          >
                            {d.overview}
                          </p>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto", paddingTop: "0.5rem", borderTop: "1px dashed #f1f5f9" }}>
                          <button
                            type="button"
                            className={btnClass}
                            style={{
                              padding: "0.3rem 0.75rem",
                              fontSize: "0.75rem",
                              fontWeight: 600,
                              borderRadius: "5px"
                            }}
                            onClick={() => openDocModal(`${d.name} Curriculum & Course Outlines`, `${d.code}_Course_Outlines_2026.pdf`)}
                          >
                            Download Course Outlines
                          </button>
                          <Link
                            href={`/departments/${d.id}`}
                            style={{
                              fontSize: "0.78rem",
                              fontWeight: 700,
                              color: titleColor,
                              textDecoration: "none"
                            }}
                          >
                            Profile →
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Action Regulation Buttons */}
            <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "1.5rem", marginTop: "2rem" }}>
              <h4 style={{ color: "var(--primary-dark)", marginBottom: "0.5rem" }}>Academic Regulations &amp; Policies</h4>
              <p style={{ fontSize: "0.9rem", color: "#475569", marginBottom: "1.25rem" }}>
                Curricula comply with Choice Based Credit System (CBCS), AICTE Model Curriculum, Bloom&apos;s Taxonomy, Continuous Internal Evaluation (40%), and End-Semester Examinations (60%).
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => openDocModal("Official Academic Regulations & Syllabus", "Academic_Regulations_RGUKT_2026.pdf")}
                >
                  Download Academic Regulations (PDF)
                </button>
                <button
                  type="button"
                  className="btn btn-gold"
                  onClick={openGpaModal}
                >
                  RGUKT CGPA Calculator Tool
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
