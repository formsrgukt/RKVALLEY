"use client";

import React, { useState } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { RGUKT_DATA } from "@/data/rguktData";
import { useApp } from "@/context/AppContext";

export type TabKey =
  | "overview"
  | "grading"
  | "pattern"
  | "regulations"
  | "malpractice"
  | "coe"
  | "circulars";

export default function AcademicExaminationsView() {
  const { openDocModal, openGpaModal } = useApp();
  const [activeTab, setActiveTab] = useState<TabKey>("overview");
  const [malpracticeSearch, setMalpracticeSearch] = useState<string>("");

  const examNotices = RGUKT_DATA.notices.filter(
    (n) => n.category === "Examinations" || n.category === "Academic"
  );

  const malpracticeClauses = [
    {
      sno: 1,
      offense: "In the examination hall, candidate possesses or keeps accessible any paper, book, notes, programmable calculators, cell phones, smart watches, pagers, pen drives, memory cards or objectionable materials relevant to the subject of examination (theory or practical), but has not made use of it.",
      note: "Material includes any notes on body or clothes.",
      action: "Expulsion from the examination hall and cancellation of performance in that subject only."
    },
    {
      sno: 2,
      offense: "Gives assistance or guidance to any other candidate, or receives information from any other candidate (orally, body language methods, cell phones or any such media) inside or outside the examination hall.",
      note: "Applies to all parties involved.",
      action: "Expulsion from examination hall and cancellation of performance in that subject only for all candidates involved. In case of an outsider, police case will be registered."
    },
    {
      sno: 3,
      offense: "Has copied in the examination hall from any paper, book, programmable calculator, palm device or any form of material relevant to the subject of examination.",
      note: "Applies to theory and practical sessions.",
      action: "Expulsion from examination hall and cancellation of performance in that subject. The student will not be permitted to appear for the remaining examinations of that semester."
    },
    {
      sno: 4,
      offense: "Impersonates any other candidate in connection with the university examination.",
      note: "Applies to both the imposter and the registered candidate.",
      action: "The impersonator is expelled, debarred, and seat forfeited. The original candidate's performance in all subjects of that semester is cancelled, and they are debarred for ONE full semester. Outsiders handed over to police."
    },
    {
      sno: 5,
      offense: "Smuggling of answer scripts during or after examination, or arranging to send out the question paper during examination hours.",
      note: "Severe breach of institutional exam protocol.",
      action: "Expulsion from examination hall, cancellation of performance in that subject and all other subjects already appeared (including labs & projects), and debarred from remaining exams of that semester."
    },
    {
      sno: 6,
      offense: "Uses objectionable, abusive or offensive language in answer scripts or letters to examiners, or writes requesting examiners to award pass marks.",
      note: "Breach of student ethics and evaluation decorum.",
      action: "Cancellation of performance in that subject."
    },
    {
      sno: 7,
      offense: "Refuses to obey orders of Invigilators, Squad Team, COE or duty officers; misbehaves, creates disturbance, organizes walkouts, threatens or assaults personnel, or damages campus examination property.",
      note: "Disciplinary and penal offense.",
      action: "Immediate expulsion from the examination hall and disbarment from all remaining examinations of that semester. Subject to statutory disciplinary panel action."
    },
    {
      sno: 8,
      offense: "Leaves exam hall taking away answer script or intentionally tears up the script or any part thereof inside or outside the hall.",
      note: "Destruction of official examination documents.",
      action: "Expulsion and cancellation of performance in all subjects appeared during that semester (including practicals & projects). Debarred from remaining semester exams."
    },
    {
      sno: 9,
      offense: "Possesses any lethal weapon or firearm in or around the examination hall.",
      note: "Criminal offense handled with extreme prejudice.",
      action: "Expulsion, cancellation of performance across all subjects, debarred for two consecutive semesters, forfeiture of seat, and immediate police custody."
    },
    {
      sno: 10,
      offense: "A student of the institute who is not a candidate for that exam, or an outsider, indulges in misconduct or malpractice mentioned in clauses 6 to 8.",
      note: "Interference by non-candidates.",
      action: "Student expelled and cancelled across all subjects of that semester with possible seat forfeiture. Outsiders handed over to police with criminal FIR."
    },
    {
      sno: 11,
      offense: "Comes in an intoxicated or drunken condition to the examination hall.",
      note: "Gross behavioral violation.",
      action: "Expulsion, cancellation of performance in all subjects appeared, and debarred from remaining examinations of that semester."
    },
    {
      sno: 12,
      offense: "Copying detected on the basis of internal evidence during evaluation or special scrutiny committee verification.",
      note: "Scrutinized by Director-constituted committee.",
      action: "Cancellation of performance in that subject only."
    },
    {
      sno: 13,
      offense: "Unauthorized uploading of jar/script files in online examination, unauthorized usage of local servers (renaming scripts, uploading from unassigned terminals).",
      note: "Digital and network exam tampering.",
      action: "Expulsion, cancellation across all subjects of that semester, disbarment from remaining exams, and police case registration for cyber breach."
    },
    {
      sno: 14,
      offense: "Unauthorized access to examination archives, confidential databases, question banks, or illegal manipulation of examination data through hacking.",
      note: "Institutional cybersecurity violation.",
      action: "Debarred for two full years, seat forfeiture, and immediate cybercrime police complaint registration."
    }
  ];

  const filteredMalpractice = malpracticeClauses.filter((item) => {
    if (!malpracticeSearch.trim()) return true;
    const q = malpracticeSearch.toLowerCase();
    return (
      item.offense.toLowerCase().includes(q) ||
      item.action.toLowerCase().includes(q) ||
      item.sno.toString().includes(q)
    );
  });

  return (
    <div className="page-view-container" style={{ width: "100%", minHeight: "100vh" }}>
      <Breadcrumb title="Examinations & Evaluation System" category="Academics" />

      <div className="container" style={{ padding: "2.5rem 1rem 4rem 1rem", maxWidth: "1280px", margin: "0 auto" }}>
        
        {/* HERO BANNER CARD */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: "14px",
            border: "1px solid #e2e8f0",
            padding: "2.5rem",
            marginBottom: "2rem",
            boxShadow: "0 6px 20px rgba(0,0,0,0.05)"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1.5rem", marginBottom: "1.25rem" }}>
            <div>
              <span
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "#800517",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  display: "inline-block",
                  marginBottom: "0.4rem"
                }}
              >
                Academic Evaluation &amp; Testing Architecture • RGUKT RK Valley
              </span>
              <h1
                style={{
                  color: "var(--primary-dark)",
                  fontSize: "2.3rem",
                  fontWeight: 800,
                  margin: 0,
                  lineHeight: 1.25,
                  fontFamily: "var(--font-heading, inherit)"
                }}
              >
                Examinations &amp; Evaluation System
              </h1>
            </div>

            {/* ACTION BUTTONS */}
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={openGpaModal}
                style={{ fontSize: "0.88rem", padding: "0.65rem 1.2rem", display: "inline-flex", alignItems: "center", gap: "0.45rem" }}
              >
                <span>🧮 SGPA/CGPA Calculator</span>
              </button>
              <button
                type="button"
                className="btn btn-gold"
                onClick={() => openDocModal("Official Academic Rules, Regulations & Examination Pattern", "AcademicRulesRegulations071022.pdf")}
                style={{ fontSize: "0.88rem", padding: "0.65rem 1.2rem", display: "inline-flex", alignItems: "center", gap: "0.45rem" }}
              >
                <span>📄 Regulations PDF</span>
              </button>
              <Link
                href="/academics/academic-calendar"
                className="btn"
                style={{
                  fontSize: "0.88rem",
                  padding: "0.65rem 1.2rem",
                  background: "#f1f5f9",
                  color: "var(--primary-dark)",
                  border: "1px solid #cbd5e1",
                  textDecoration: "none"
                }}
              >
                Academic Calendar →
              </Link>
            </div>
          </div>

          <p style={{ fontSize: "1.05rem", color: "#334155", lineHeight: 1.65, margin: 0, maxWidth: "1050px" }}>
            The Examination Cell at RGUKT RK Valley is the centralized statutory authority entrusted with conducting continuous internal assessments, end-semester examinations, confidential script evaluations, relative grade calculations, SGPA/CGPA determinations, and academic degree certifications under the supervision of the Controller of Examinations (COE).
          </p>

          {/* QUICK METRICS ROW */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1rem",
              marginTop: "2rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid #f1f5f9"
            }}
          >
            <div style={{ background: "#faf5ff", border: "1px solid #f3e8ff", borderRadius: "10px", padding: "1rem" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#6b21a8", textTransform: "uppercase" }}>Grading Scale</span>
              <div style={{ fontSize: "1.45rem", fontWeight: 800, color: "#581c87", marginTop: "0.2rem" }}>10-Point Absolute</div>
              <div style={{ fontSize: "0.78rem", color: "#64748b" }}>Ex, A, B, C, D, E &amp; R scale</div>
            </div>

            <div style={{ background: "#f0fdf4", border: "1px solid #dcfce7", borderRadius: "10px", padding: "1rem" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#166534", textTransform: "uppercase" }}>PUC Assessment</span>
              <div style={{ fontSize: "1.45rem", fontWeight: 800, color: "#14532d", marginTop: "0.2rem" }}>6 Mid-Tests / Yr</div>
              <div style={{ fontSize: "0.78rem", color: "#64748b" }}>Single continuous year model</div>
            </div>

            <div style={{ background: "#eff6ff", border: "1px solid #dbeafe", borderRadius: "10px", padding: "1rem" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#1e40af", textTransform: "uppercase" }}>B.Tech Assessment</span>
              <div style={{ fontSize: "1.45rem", fontWeight: 800, color: "#1e3a8a", marginTop: "0.2rem" }}>2 Semesters / Yr</div>
              <div style={{ fontSize: "0.78rem", color: "#64748b" }}>3 Mids + EST Theory &amp; Labs</div>
            </div>

            <div style={{ background: "#fffbeb", border: "1px solid #fef3c7", borderRadius: "10px", padding: "1rem" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#92400e", textTransform: "uppercase" }}>Results Turnaround</span>
              <div style={{ fontSize: "1.45rem", fontWeight: 800, color: "#78350f", marginTop: "0.2rem" }}>Within 3 Days</div>
              <div style={{ fontSize: "0.78rem", color: "#64748b" }}>Subject-wise rapid publication</div>
            </div>
          </div>
        </div>

        {/* INTERACTIVE NAVIGATION TABS */}
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            overflowX: "auto",
            paddingBottom: "0.5rem",
            marginBottom: "2rem",
            borderBottom: "2px solid #e2e8f0"
          }}
        >
          {[
            { key: "overview", label: "Overview & Structure" },
            { key: "grading", label: "10-Point Scale & SGPA/CGPA" },
            { key: "pattern", label: "Marks Pattern & Weightages" },
            { key: "regulations", label: "Regular & Remedial Policies" },
            { key: "malpractice", label: "Malpractice Rules & Penalties" },
            { key: "coe", label: "COE & Exam Cell Contacts" },
            { key: "circulars", label: "Notices & Schedules" }
          ].map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key as TabKey)}
                style={{
                  padding: "0.7rem 1.25rem",
                  fontSize: "0.9rem",
                  fontWeight: isActive ? 700 : 600,
                  whiteSpace: "nowrap",
                  borderRadius: "8px 8px 0 0",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  background: isActive ? "var(--primary-maroon)" : "transparent",
                  color: isActive ? "#ffffff" : "#475569",
                  borderBottom: isActive ? "3px solid var(--accent-gold)" : "3px solid transparent"
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* TAB 1: OVERVIEW & EVALUATION STRUCTURE */}
        {activeTab === "overview" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {/* PUC VS BTECH EVALUATION SCHEMES */}
            <div style={{ background: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0", padding: "2rem", boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}>
              <h3 style={{ color: "var(--primary-dark)", fontSize: "1.45rem", fontWeight: 800, marginBottom: "0.5rem" }}>
                Program-Wise Evaluation Architecture
              </h3>
              <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                RGUKT enforces two distinct, scientifically calibrated examination evaluation structures designed for the residential educational paradigm:
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
                {/* PUC CARD */}
                <div
                  style={{
                    background: "#ffffff",
                    borderTop: "1px solid #fecdd3",
                    borderRight: "1px solid #fecdd3",
                    borderBottom: "1px solid #fecdd3",
                    borderLeft: "5px solid var(--accent-royal)",
                    borderRadius: "10px",
                    padding: "1.5rem",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.03)"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                    <h4 style={{ color: "var(--accent-royal)", margin: 0, fontWeight: 800, fontSize: "1.1rem" }}>
                      Pre-University Course (PUC I &amp; PUC II)
                    </h4>
                    <span style={{ fontSize: "0.75rem", fontWeight: 800, background: "#fdf2f4", color: "var(--accent-royal)", padding: "0.2rem 0.55rem", borderRadius: "4px" }}>
                      Annual Paradigm
                    </span>
                  </div>
                  <ul style={{ color: "#475569", fontSize: "0.9rem", lineHeight: 1.7, paddingLeft: "1.2rem", margin: 0 }}>
                    <li><strong>Single Continuous Semester:</strong> Delivered across an annual academic cycle rather than fragmented term boundaries.</li>
                    <li><strong>6 Mid-Term Examinations:</strong> Continuous diagnostic tests scheduled every 5-6 weeks across the academic year to monitor steady learning.</li>
                    <li><strong>Continuous Weightage:</strong> Best mid-examinations and weekly assignments constitute internal score.</li>
                    <li><strong>End Semester Test (EST):</strong> Comprehensive cumulative final examination conducted only at the end of the academic year.</li>
                  </ul>
                </div>

                {/* BTECH CARD */}
                <div
                  style={{
                    background: "#ffffff",
                    borderTop: "1px solid #fde68a",
                    borderRight: "1px solid #fde68a",
                    borderBottom: "1px solid #fde68a",
                    borderLeft: "5px solid var(--accent-gold)",
                    borderRadius: "10px",
                    padding: "1.5rem",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.03)"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                    <h4 style={{ color: "var(--accent-gold-dark)", margin: 0, fontWeight: 800, fontSize: "1.1rem" }}>
                      Bachelor of Technology (E1 to E4)
                    </h4>
                    <span style={{ fontSize: "0.75rem", fontWeight: 800, background: "#fef3c7", color: "var(--accent-gold-dark)", padding: "0.2rem 0.55rem", borderRadius: "4px" }}>
                      Semester Paradigm
                    </span>
                  </div>
                  <ul style={{ color: "#475569", fontSize: "0.9rem", lineHeight: 1.7, paddingLeft: "1.2rem", margin: 0 }}>
                    <li><strong>Two Semesters Per Year:</strong> Semester-I (Monsoon term) and Semester-II (Spring term).</li>
                    <li><strong>3 Mid-Term Tests Per Semester:</strong> Conducted with internal question choice; the best two marks are counted towards internal assessment.</li>
                    <li><strong>Weekly Continuous Evaluation:</strong> 10% weightage awarded through regular classroom problem-solving tests and assignments.</li>
                    <li><strong>End Semester Test (EST):</strong> 60% theory EST plus practical laboratory exams and external project vivas.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* RESULTS COMMITTEE & MONITORING */}
            <div style={{ background: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0", padding: "2rem", boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}>
              <h3 style={{ color: "var(--primary-dark)", fontSize: "1.35rem", fontWeight: 800, marginBottom: "0.5rem" }}>
                Statutory Results Committee
              </h3>
              <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                Before any end-semester or remedial result is made public, the University Results Committee convenes to scrutinize grade distributions, departmental performance cutoffs, and potential discrepancies:
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
                {[
                  { role: "Chairperson", title: "Campus Director" },
                  { role: "Academic Authority", title: "Dean & Associate Dean of Academics" },
                  { role: "Convener", title: "Controller of Examinations (COE) & Associate COEs" },
                  { role: "Disciplinary Heads", title: "Heads of all 13 Academic Departments (HODs)" },
                  { role: "Preparatory Head", title: "Pre-University Course (PUC) Coordinator" },
                  { role: "Administration", title: "Faculty In-Charge (Examinations & Systems)" }
                ].map((m, idx) => (
                  <div key={idx} style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "1rem" }}>
                    <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#800517", textTransform: "uppercase" }}>{m.role}</span>
                    <div style={{ fontSize: "0.98rem", fontWeight: 700, color: "var(--primary-dark)", marginTop: "0.2rem" }}>{m.title}</div>
                  </div>
                ))}
              </div>

              <div style={{ background: "#f0fdf4", borderLeft: "4px solid #16a34a", padding: "1rem 1.25rem", borderRadius: "6px" }}>
                <p style={{ margin: 0, fontSize: "0.9rem", color: "#166534", lineHeight: 1.6 }}>
                  <strong>Rigorous Scrutiny:</strong> The committee carefully reviews relative grade cutoffs, malpractice reports, paper moderation reports, and subject-level distribution curves before authorizing digital publication on the Online Notice Board (ONB).
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: 10-POINT SCALE & SGPA / CGPA */}
        {activeTab === "grading" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {/* GRADING SCALE TABLE */}
            <div style={{ background: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0", padding: "2rem", boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", marginBottom: "1.25rem" }}>
                <div>
                  <h3 style={{ color: "var(--primary-dark)", fontSize: "1.45rem", fontWeight: 800, margin: 0 }}>
                    RGUKT Official 10-Point Absolute Grading Scale
                  </h3>
                  <p style={{ color: "#64748b", fontSize: "0.9rem", margin: "0.25rem 0 0 0" }}>
                    Letter grades, qualitative performance bands, grade points, and corresponding mark boundaries.
                  </p>
                </div>
                <button type="button" className="btn btn-primary" onClick={openGpaModal} style={{ fontSize: "0.85rem" }}>
                  Launch GPA Calculator
                </button>
              </div>

              <div style={{ overflowX: "auto" }}>
                <table className="gov-table" style={{ width: "100%", background: "#fff" }}>
                  <thead>
                    <tr style={{ background: "var(--surface-light)" }}>
                      <th style={{ padding: "0.85rem", textAlign: "left" }}>Letter Grade</th>
                      <th style={{ padding: "0.85rem", textAlign: "left" }}>Qualitative Description</th>
                      <th style={{ padding: "0.85rem", textAlign: "center" }}>Grade Points (GP)</th>
                      <th style={{ padding: "0.85rem", textAlign: "center" }}>Marks Range (Out of 100)</th>
                      <th style={{ padding: "0.85rem", textAlign: "left" }}>Academic Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {RGUKT_DATA.gradingSystem.map((g, i) => {
                      const isRemedial = g.grade === "R";
                      return (
                        <tr key={i} style={{ background: isRemedial ? "#fff5f5" : "transparent" }}>
                          <td style={{ padding: "0.85rem", fontWeight: 800, fontSize: "1.1rem", color: isRemedial ? "#dc2626" : "var(--accent-royal)" }}>
                            {g.grade}
                          </td>
                          <td style={{ padding: "0.85rem", fontWeight: 600, color: "#334155" }}>{g.description}</td>
                          <td style={{ padding: "0.85rem", textAlign: "center", fontWeight: 800, fontSize: "1.05rem", color: "var(--primary-dark)" }}>
                            {g.points}
                          </td>
                          <td style={{ padding: "0.85rem", textAlign: "center", color: "#475569", fontWeight: 600 }}>{g.marksRange}</td>
                          <td style={{ padding: "0.85rem" }}>
                            {isRemedial ? (
                              <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#b91c1c", background: "#fee2e2", padding: "0.2rem 0.6rem", borderRadius: "4px" }}>
                                Remedial / Not Cleared
                              </span>
                            ) : (
                              <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#15803d", background: "#dcfce7", padding: "0.2rem 0.6rem", borderRadius: "4px" }}>
                                Course Cleared (Credits Earned)
                              </span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* GRADE PERCENTAGE DISTRIBUTION RULES */}
              <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid #e2e8f0" }}>
                <h4 style={{ color: "var(--primary-dark)", fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.75rem" }}>
                  Expected Relative Percentage &amp; Threshold Rules
                </h4>
                <p style={{ color: "#475569", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "1rem" }}>
                  The cutoff mark for each grade is determined based on expected distributions. When relative cutoffs exceed the absolute thresholds, new ceiling cutoffs are computed such that cumulative percentages do not violate the limits:
                </p>

                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", maxWidth: "650px", borderCollapse: "collapse", fontSize: "0.88rem" }}>
                    <thead>
                      <tr style={{ background: "#f8fafc", borderBottom: "2px solid #e2e8f0" }}>
                        <th style={{ padding: "0.6rem 0.85rem", textAlign: "left", color: "var(--primary-dark)" }}>Grade</th>
                        <th style={{ padding: "0.6rem 0.85rem", textAlign: "center", color: "var(--primary-dark)" }}>Absolute Cutoff</th>
                        <th style={{ padding: "0.6rem 0.85rem", textAlign: "center", color: "var(--primary-dark)" }}>Expected %</th>
                        <th style={{ padding: "0.6rem 0.85rem", textAlign: "center", color: "var(--primary-dark)" }}>Max Cumulative %</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: "1px solid #f1f5f9" }}><td style={{ padding: "0.55rem 0.85rem", fontWeight: 700 }}>X (Ex)</td><td style={{ textAlign: "center" }}>90</td><td style={{ textAlign: "center" }}>5%</td><td style={{ textAlign: "center" }}>10%</td></tr>
                      <tr style={{ borderBottom: "1px solid #f1f5f9" }}><td style={{ padding: "0.55rem 0.85rem", fontWeight: 700 }}>A</td><td style={{ textAlign: "center" }}>80</td><td style={{ textAlign: "center" }}>25%</td><td style={{ textAlign: "center" }}>50%</td></tr>
                      <tr style={{ borderBottom: "1px solid #f1f5f9" }}><td style={{ padding: "0.55rem 0.85rem", fontWeight: 700 }}>B</td><td style={{ textAlign: "center" }}>70</td><td style={{ textAlign: "center" }}>30%</td><td style={{ textAlign: "center" }}>80%</td></tr>
                      <tr style={{ borderBottom: "1px solid #f1f5f9" }}><td style={{ padding: "0.55rem 0.85rem", fontWeight: 700 }}>C</td><td style={{ textAlign: "center" }}>60</td><td style={{ textAlign: "center" }}>25%</td><td style={{ textAlign: "center" }}>Limited to Absolute</td></tr>
                      <tr style={{ borderBottom: "1px solid #f1f5f9" }}><td style={{ padding: "0.55rem 0.85rem", fontWeight: 700 }}>D</td><td style={{ textAlign: "center" }}>50</td><td style={{ textAlign: "center" }}>10%</td><td style={{ textAlign: "center" }}>Limited to Absolute</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* SGPA & CGPA MATHEMATICAL FORMULAS */}
            <div style={{ background: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0", padding: "2rem", boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}>
              <h3 style={{ color: "var(--primary-dark)", fontSize: "1.35rem", fontWeight: 800, marginBottom: "0.5rem" }}>
                SGPA &amp; CGPA Computation Formulas
              </h3>
              <p style={{ color: "#475569", fontSize: "0.92rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                Both Semester Grade Point Average (SGPA) and Cumulative Grade Point Average (CGPA) are computed strictly as weighted credit averages rounded off to the second decimal place:
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem", marginBottom: "1.5rem" }}>
                {/* SGPA FORMULA BOX */}
                <div style={{ background: "#f8fafc", border: "1px solid #cbd5e1", borderRadius: "10px", padding: "1.5rem", textAlign: "center" }}>
                  <span style={{ fontSize: "0.78rem", fontWeight: 800, color: "var(--accent-royal)", textTransform: "uppercase" }}>
                    Semester Grade Point Average (SGPA)
                  </span>
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "1.25rem 0", fontFamily: "'Times New Roman', serif" }}>
                    <span style={{ fontStyle: "italic", fontSize: "1.35rem", marginRight: "0.6rem", fontWeight: "bold" }}>SGPA</span>
                    <span style={{ fontSize: "1.35rem", marginRight: "0.6rem" }}>=</span>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <div style={{ borderBottom: "2px solid #0f172a", padding: "0 0.5rem 0.2rem 0.5rem", fontSize: "1.2rem", fontStyle: "italic" }}>
                        &Sigma; (C<sub>i</sub> &times; GP<sub>i</sub>)
                      </div>
                      <div style={{ paddingTop: "0.2rem", fontSize: "1.2rem", fontStyle: "italic" }}>
                        &Sigma; C<sub>i</sub>
                      </div>
                    </div>
                  </div>
                  <p style={{ fontSize: "0.82rem", color: "#64748b", margin: 0 }}>
                    Where <em>C<sub>i</sub></em> is the credits of course <em>i</em>, and <em>GP<sub>i</sub></em> is the grade point earned in course <em>i</em> for all <em>n</em> registered courses in the semester.
                  </p>
                </div>

                {/* CGPA FORMULA BOX */}
                <div style={{ background: "#f8fafc", border: "1px solid #cbd5e1", borderRadius: "10px", padding: "1.5rem", textAlign: "center" }}>
                  <span style={{ fontSize: "0.78rem", fontWeight: 800, color: "var(--accent-gold-dark)", textTransform: "uppercase" }}>
                    Cumulative Grade Point Average (CGPA)
                  </span>
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "1.25rem 0", fontFamily: "'Times New Roman', serif" }}>
                    <span style={{ fontStyle: "italic", fontSize: "1.35rem", marginRight: "0.6rem", fontWeight: "bold" }}>CGPA</span>
                    <span style={{ fontSize: "1.35rem", marginRight: "0.6rem" }}>=</span>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <div style={{ borderBottom: "2px solid #0f172a", padding: "0 0.5rem 0.2rem 0.5rem", fontSize: "1.2rem", fontStyle: "italic" }}>
                        &Sigma; (S<sub>j</sub> &times; C<sub>j</sub>)
                      </div>
                      <div style={{ paddingTop: "0.2rem", fontSize: "1.2rem", fontStyle: "italic" }}>
                        &Sigma; C<sub>j</sub>
                      </div>
                    </div>
                  </div>
                  <p style={{ fontSize: "0.82rem", color: "#64748b", margin: 0 }}>
                    Where <em>m</em> is total semesters completed, <em>C<sub>j</sub></em> is total credits registered in semester <em>j</em>, and <em>S<sub>j</sub></em> is the SGPA achieved in that semester.
                  </p>
                </div>
              </div>

              {/* PH STUDENTS CONCESSION */}
              <div style={{ background: "#eff6ff", borderLeft: "4px solid #3b82f6", padding: "1rem 1.25rem", borderRadius: "6px" }}>
                <h5 style={{ margin: "0 0 0.35rem 0", color: "#1e40af", fontWeight: 700, fontSize: "0.95rem" }}>
                  Reduction in Pass Marks for Persons with Disabilities (PH Students - G.O. Ms. No. 183)
                </h5>
                <p style={{ margin: 0, fontSize: "0.88rem", color: "#1e3a8a", lineHeight: 1.6 }}>
                  In accordance with statutory orders from the Government of Andhra Pradesh, eligible PH students (hearing impaired, orthopedically challenged, visually impaired, deaf &amp; dumb) receive a <strong>10% concession</strong> over the prescribed minimum passing cutoff across all theory and laboratory evaluations.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: MARKS PATTERN & WEIGHTAGES */}
        {activeTab === "pattern" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{ background: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0", padding: "2rem", boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}>
              <h3 style={{ color: "var(--primary-dark)", fontSize: "1.45rem", fontWeight: 800, marginBottom: "0.5rem" }}>
                Course-Wise Evaluation Patterns &amp; Weightages
              </h3>
              <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.75rem" }}>
                Academic assessment blends rigorous continuous internal evaluations with comprehensive end-of-semester testing:
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
                {/* THEORY COURSES */}
                <div style={{ background: "#fafafa", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "1.5rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                    <h4 style={{ color: "var(--primary-dark)", margin: 0, fontWeight: 800, fontSize: "1.1rem" }}>
                      1. Theory Courses (100 Marks Total)
                    </h4>
                    <span style={{ fontSize: "0.75rem", fontWeight: 800, background: "#e0f2fe", color: "#0369a1", padding: "0.2rem 0.5rem", borderRadius: "4px" }}>
                      40 Int + 60 EST
                    </span>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.88rem", color: "#334155" }}>
                    <div style={{ background: "#fff", padding: "0.75rem", borderRadius: "6px", border: "1px solid #e2e8f0" }}>
                      <strong>10% Weekly Tests &amp; Assignments:</strong> Continuous formative assessment (Best 5 out of 10 tests counted).
                    </div>
                    <div style={{ background: "#fff", padding: "0.75rem", borderRadius: "6px", border: "1px solid #e2e8f0" }}>
                      <strong>30% Mid Examinations:</strong> Three Mid examinations conducted with internal question choice (Best 2 out of 3 counted).
                    </div>
                    <div style={{ background: "#fff", padding: "0.75rem", borderRadius: "6px", border: "1px solid #e2e8f0" }}>
                      <strong>60% End Semester Test (EST):</strong> 3-Hour examination containing:
                      <ul style={{ margin: "0.35rem 0 0 0", paddingLeft: "1.2rem", fontSize: "0.82rem", color: "#64748b" }}>
                        <li><strong>Part-A (18 Marks):</strong> 18 objective questions (3 from each unit).</li>
                        <li><strong>Part-B (42 Marks):</strong> 12 descriptive questions with internal choice between 2 questions per unit (6 &times; 7 = 42 marks).</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* LABORATORY COURSES */}
                <div style={{ background: "#fafafa", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "1.5rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                    <h4 style={{ color: "var(--primary-dark)", margin: 0, fontWeight: 800, fontSize: "1.1rem" }}>
                      2. Practical &amp; Laboratory Courses
                    </h4>
                    <span style={{ fontSize: "0.75rem", fontWeight: 800, background: "#fef3c7", color: "#92400e", padding: "0.2rem 0.5rem", borderRadius: "4px" }}>
                      40 Int + 60 Ext
                    </span>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.88rem", color: "#334155" }}>
                    <div style={{ background: "#fff", padding: "0.75rem", borderRadius: "6px", border: "1px solid #e2e8f0" }}>
                      <strong>40 Marks Internal Assessment:</strong> Continuous weekly laboratory performance, hands-on programming/circuit wiring, viva voce, day-to-day observation, and lab record book maintenance.
                    </div>
                    <div style={{ background: "#fff", padding: "0.75rem", borderRadius: "6px", border: "1px solid #e2e8f0" }}>
                      <strong>60 Marks End Semester Practical Test:</strong> Formal examination conducted by internal and external examiner panels including setup execution, experiment verification, and oral viva voce.
                    </div>
                  </div>
                </div>

                {/* INTERNSHIPS & CAPSTONE PROJECTS */}
                <div style={{ background: "#fafafa", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "1.5rem", gridColumn: "1 / -1" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                    <h4 style={{ color: "var(--primary-dark)", margin: 0, fontWeight: 800, fontSize: "1.1rem" }}>
                      3. Projects, Internships &amp; Practical Training
                    </h4>
                    <span style={{ fontSize: "0.75rem", fontWeight: 800, background: "#dcfce7", color: "#166534", padding: "0.2rem 0.5rem", borderRadius: "4px" }}>
                      Panel Defense
                    </span>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem", fontSize: "0.88rem" }}>
                    <div style={{ background: "#fff", padding: "0.85rem", borderRadius: "6px", border: "1px solid #e2e8f0" }}>
                      <strong>Summer Internship:</strong> Mandatory for all students; internal and external mentors assess 40 marks, and departmental HOD panel assesses 60 marks based on report and presentation.
                    </div>
                    <div style={{ background: "#fff", padding: "0.85rem", borderRadius: "6px", border: "1px solid #e2e8f0" }}>
                      <strong>Campus Mini &amp; Major Project:</strong> Guide assesses 40 marks internal; Department Evaluation Panel assesses 60 marks based on design demo, documentation, and thesis defense.
                    </div>
                    <div style={{ background: "#fff", padding: "0.85rem", borderRadius: "6px", border: "1px solid #e2e8f0" }}>
                      <strong>Industry Long-Term Internship:</strong> Joint mentor assessment for 40 marks; departmental panel assesses 60 marks upon industrial training report submission.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: REGULAR & REMEDIAL POLICIES */}
        {activeTab === "regulations" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {/* REGULAR EXAMS POLICY */}
            <div style={{ background: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0", padding: "2rem", boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}>
              <h3 style={{ color: "var(--primary-dark)", fontSize: "1.45rem", fontWeight: 800, marginBottom: "0.5rem" }}>
                Regular Examination Regulations
              </h3>
              <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                Students register for regular semester courses at the beginning of each semester and attend examinations (Weekly Tests, Mids 1, 2, 3, and EST) as scheduled in the Academic Calendar:
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
                <div style={{ background: "#f8fafc", padding: "1.1rem", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                  <h5 style={{ color: "var(--accent-royal)", margin: "0 0 0.35rem 0", fontWeight: 700 }}>Designated Examination Weeks</h5>
                  <p style={{ margin: 0, fontSize: "0.85rem", color: "#64748b", lineHeight: 1.5 }}>
                    Last week of November for Semester-I and last week of April for Semester-II. Core foundational subjects (Maths, Physics, Chemistry) are scheduled at the start of the examination week.
                  </p>
                </div>

                <div style={{ background: "#f8fafc", padding: "1.1rem", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                  <h5 style={{ color: "var(--accent-royal)", margin: "0 0 0.35rem 0", fontWeight: 700 }}>3-Day Rapid Result Announcement</h5>
                  <p style={{ margin: 0, fontSize: "0.85rem", color: "#64748b", lineHeight: 1.5 }}>
                    Results are declared subject-wise within 3 working days from the scheduled examination date (e.g., if exam is Monday, results are announced by Thursday).
                  </p>
                </div>

                <div style={{ background: "#f8fafc", padding: "1.1rem", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                  <h5 style={{ color: "var(--accent-royal)", margin: "0 0 0.35rem 0", fontWeight: 700 }}>Multi-Channel Communication</h5>
                  <p style={{ margin: 0, fontSize: "0.85rem", color: "#64748b", lineHeight: 1.5 }}>
                    Grades and marks are communicated via the Online Notice Board (ONB), institute student portal, official university email, and registered SMS.
                  </p>
                </div>
              </div>
            </div>

            {/* REMEDIAL & GRADE IMPROVEMENT REGULATIONS */}
            <div style={{ background: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0", padding: "2rem", boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}>
              <h3 style={{ color: "var(--primary-dark)", fontSize: "1.35rem", fontWeight: 800, marginBottom: "0.5rem" }}>
                Remedial &amp; Grade Improvement (GI) Policy
              </h3>
              <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                Students with backlogs (Remedials) or students seeking Grade Improvement can appear for supplementary examinations during designated slots:
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
                <div style={{ background: "#fff", border: "1px solid #fecdd3", borderLeft: "4px solid #e11d48", padding: "1rem", borderRadius: "8px" }}>
                  <strong style={{ color: "#9f1239" }}>December Window:</strong> Two slots for Semester-I remedial courses and Grade Improvement. Max 2 courses per slot.
                </div>
                <div style={{ background: "#fff", border: "1px solid #fed7aa", borderLeft: "4px solid #f97316", padding: "1rem", borderRadius: "8px" }}>
                  <strong style={{ color: "#9a3412" }}>June Window:</strong> Two slots for Semester-II remedial courses and Grade Improvement. Max 2 courses per slot.
                </div>
                <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderLeft: "4px solid #0284c7", padding: "1rem", borderRadius: "8px" }}>
                  <strong style={{ color: "#0369a1" }}>July SUM Semester:</strong> Comprehensive window for both Sem-I and Sem-II remedial courses (No GI offered in July).
                </div>
              </div>

              <div style={{ background: "#f8fafc", borderRadius: "8px", padding: "1.25rem", marginBottom: "1.5rem" }}>
                <h4 style={{ color: "var(--primary-dark)", fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.75rem" }}>
                  Important Supplementary Rules:
                </h4>
                <ul style={{ color: "#475569", fontSize: "0.88rem", lineHeight: 1.7, paddingLeft: "1.2rem", margin: 0 }}>
                  <li><strong>Internal Marks Carryover:</strong> Remedial and Grade Improvement students write only the End Semester Test (60% marks). Internal marks (40%) are carried over from the regular semester.</li>
                  <li><strong>Re-Registration:</strong> Re-registered students write both internal assessments (40%) and end-semester tests (60%).</li>
                  <li><strong>Single GI Chance:</strong> Grade improvement is permitted only once per course for candidates who cleared all subjects in the regular EST.</li>
                  <li><strong>Repeat Course Requirement:</strong> Students who fail to clear even after remedial attempts must repeat the courses in the subsequent academic year, subject to promotion rules.</li>
                </ul>
              </div>

              {/* REMEDIAL FEE TABLE */}
              <h4 style={{ color: "var(--primary-dark)", fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.75rem" }}>
                Official Remedial / Grade Improvement Registration Fee Schedule
              </h4>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", maxWidth: "600px", borderCollapse: "collapse", fontSize: "0.88rem" }}>
                  <thead>
                    <tr style={{ background: "var(--surface-light)", borderBottom: "2px solid #e2e8f0" }}>
                      <th style={{ padding: "0.75rem", textAlign: "left", color: "var(--primary-dark)" }}>Registration Category</th>
                      <th style={{ padding: "0.75rem", textAlign: "right", color: "var(--primary-dark)" }}>Fee Per Course (INR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid #f1f5f9" }}><td style={{ padding: "0.65rem" }}>First time appearing for Remedial</td><td style={{ padding: "0.65rem", textAlign: "right", fontWeight: 700 }}>₹ 200/-</td></tr>
                    <tr style={{ borderBottom: "1px solid #f1f5f9" }}><td style={{ padding: "0.65rem" }}>Second time appearing for Remedial</td><td style={{ padding: "0.65rem", textAlign: "right", fontWeight: 700 }}>₹ 500/-</td></tr>
                    <tr style={{ borderBottom: "1px solid #f1f5f9" }}><td style={{ padding: "0.65rem" }}>Third time appearing for Remedial</td><td style={{ padding: "0.65rem", textAlign: "right", fontWeight: 700 }}>₹ 750/-</td></tr>
                    <tr style={{ borderBottom: "1px solid #f1f5f9" }}><td style={{ padding: "0.65rem" }}>Grade Improvement / Re-Registration</td><td style={{ padding: "0.65rem", textAlign: "right", fontWeight: 700 }}>₹ 750/-</td></tr>
                  </tbody>
                </table>
              </div>

              {/* RECOUNTING PROCEDURE */}
              <div style={{ marginTop: "1.5rem", padding: "1.25rem", background: "#faf5ff", border: "1px solid #f3e8ff", borderRadius: "8px" }}>
                <h5 style={{ color: "#6b21a8", fontWeight: 700, margin: "0 0 0.5rem 0", fontSize: "0.95rem" }}>
                  Recounting &amp; Re-Evaluation Process
                </h5>
                <p style={{ margin: 0, fontSize: "0.86rem", color: "#475569", lineHeight: 1.6 }}>
                  Students desiring recounting must submit a formal application to the Academic Section with a Demand Draft for the prescribed fee drawn in favor of the Director. In the event of any upward revision of marks upon recounting, the higher of the original and recounted score is recorded as final.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: MALPRACTICE RULES & STATUTORY PENALTIES */}
        {activeTab === "malpractice" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{ background: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0", padding: "2rem", boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", marginBottom: "1rem" }}>
                <div>
                  <h3 style={{ color: "var(--primary-dark)", fontSize: "1.45rem", fontWeight: 800, margin: 0 }}>
                    Official Examination Malpractice &amp; Disciplinary Code
                  </h3>
                  <p style={{ color: "#64748b", fontSize: "0.9rem", margin: "0.25rem 0 0 0" }}>
                    Statutory guidelines governing examination discipline, hall decorum, and punitive actions approved by Academic Council.
                  </p>
                </div>

                {/* SEARCH INPUT */}
                <input
                  type="text"
                  placeholder="Filter clauses (e.g. copying, mobile, imposter)..."
                  value={malpracticeSearch}
                  onChange={(e) => setMalpracticeSearch(e.target.value)}
                  style={{
                    padding: "0.55rem 1rem",
                    borderRadius: "20px",
                    border: "1px solid #cbd5e1",
                    fontSize: "0.85rem",
                    minWidth: "260px"
                  }}
                />
              </div>

              <div style={{ background: "#fff5f5", borderLeft: "4px solid #ef4444", padding: "0.85rem 1.25rem", borderRadius: "6px", marginBottom: "1.5rem" }}>
                <p style={{ color: "#b91c1c", fontSize: "0.86rem", margin: 0, lineHeight: 1.5 }}>
                  <strong>Strict Entry Rule:</strong> Students must arrive in the examination hall before the bell. No candidate is permitted to enter after 15 minutes from the commencement of the examination.
                </p>
              </div>

              <div style={{ overflowX: "auto" }}>
                <table className="gov-table" style={{ width: "100%", background: "#fff" }}>
                  <thead>
                    <tr style={{ background: "var(--surface-light)" }}>
                      <th style={{ padding: "0.75rem", width: "55px", textAlign: "center" }}>S.No</th>
                      <th style={{ padding: "0.75rem", width: "55%", textAlign: "left" }}>Malpractice / Improper Conduct Description</th>
                      <th style={{ padding: "0.75rem", textAlign: "left" }}>Prescribed Disciplinary Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredMalpractice.map((c) => (
                      <tr key={c.sno}>
                        <td style={{ padding: "0.85rem", textAlign: "center", fontWeight: 700, verticalAlign: "top", color: "var(--accent-royal)" }}>
                          {c.sno}
                        </td>
                        <td style={{ padding: "0.85rem", verticalAlign: "top" }}>
                          <div style={{ fontSize: "0.9rem", color: "#334155", lineHeight: 1.5, marginBottom: "0.35rem" }}>
                            {c.offense}
                          </div>
                          {c.note && (
                            <span style={{ fontSize: "0.78rem", color: "#64748b", fontStyle: "italic" }}>
                              Note: {c.note}
                            </span>
                          )}
                        </td>
                        <td style={{ padding: "0.85rem", verticalAlign: "top", fontSize: "0.88rem", color: "#991b1b", lineHeight: 1.5, fontWeight: 500 }}>
                          {c.action}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* DISCIPLINARY COMMITTEE */}
              <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid #e2e8f0" }}>
                <h4 style={{ color: "var(--primary-dark)", fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.75rem" }}>
                  Disciplinary Committee on Prevention of Examination Malpractices
                </h4>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "0.85rem" }}>
                  <div style={{ background: "#f8fafc", padding: "0.85rem", borderRadius: "6px", border: "1px solid #e2e8f0" }}>
                    <span style={{ fontSize: "0.72rem", color: "#800517", fontWeight: 700 }}>CHAIRMAN</span>
                    <div style={{ fontWeight: 600, color: "#1e293b", fontSize: "0.88rem" }}>Dean of Academics</div>
                  </div>
                  <div style={{ background: "#f8fafc", padding: "0.85rem", borderRadius: "6px", border: "1px solid #e2e8f0" }}>
                    <span style={{ fontSize: "0.72rem", color: "#800517", fontWeight: 700 }}>CONVENER</span>
                    <div style={{ fontWeight: 600, color: "#1e293b", fontSize: "0.88rem" }}>Controller of Examinations / Faculty In-Charge</div>
                  </div>
                  <div style={{ background: "#f8fafc", padding: "0.85rem", borderRadius: "6px", border: "1px solid #e2e8f0" }}>
                    <span style={{ fontSize: "0.72rem", color: "#800517", fontWeight: 700 }}>MEMBERS</span>
                    <div style={{ fontWeight: 600, color: "#1e293b", fontSize: "0.88rem" }}>Concerned HOD / Faculty In-Charge / PUC Coordinator</div>
                  </div>
                  <div style={{ background: "#f8fafc", padding: "0.85rem", borderRadius: "6px", border: "1px solid #e2e8f0" }}>
                    <span style={{ fontSize: "0.72rem", color: "#800517", fontWeight: 700 }}>DIRECTOR NOMINEES</span>
                    <div style={{ fontWeight: 600, color: "#1e293b", fontSize: "0.88rem" }}>Two Senior Faculty Members &amp; Invigilator</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: COE & EXAM CELL CONTACTS */}
        {activeTab === "coe" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{ background: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0", padding: "2rem", boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}>
              <h3 style={{ color: "var(--primary-dark)", fontSize: "1.45rem", fontWeight: 800, marginBottom: "0.5rem" }}>
                Controller of Examinations (COE) Directorate
              </h3>
              <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.75rem" }}>
                Key officers, confidential wing personnel, and institutional contact touchpoints of the Examination Cell:
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
                {/* COE CARD */}
                <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderLeft: "5px solid var(--primary-maroon)", borderRadius: "10px", padding: "1.5rem" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#800517", textTransform: "uppercase" }}>
                    HEAD OF EXAMINATIONS CELL
                  </span>
                  <h4 style={{ color: "var(--primary-dark)", fontSize: "1.25rem", fontWeight: 800, margin: "0.35rem 0 0.2rem 0" }}>
                    Dr. Y Arun Kumar Reddy
                  </h4>
                  <div style={{ fontSize: "0.85rem", color: "#64748b", marginBottom: "1rem" }}>
                    Controller of Examinations (COE) • Assistant Professor, Department of ECE
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem", fontSize: "0.88rem", color: "#334155" }}>
                    <div><strong>Email:</strong> <a href="mailto:coe@rguktrkv.ac.in" style={{ color: "var(--accent-royal)" }}>coe@rguktrkv.ac.in</a></div>
                    <div><strong>Phone:</strong> 08588-283682</div>
                    <div><strong>Office:</strong> Examination Confidential Cell, Academic Block-I</div>
                  </div>
                </div>

                {/* ASSOCIATE COES */}
                <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderLeft: "5px solid var(--accent-gold)", borderRadius: "10px", padding: "1.5rem" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--accent-gold-dark)", textTransform: "uppercase" }}>
                    ASSOCIATE CONTROLLERS
                  </span>
                  
                  <div style={{ marginTop: "0.75rem", paddingBottom: "0.75rem", borderBottom: "1px solid #e2e8f0" }}>
                    <div style={{ fontWeight: 800, color: "var(--primary-dark)", fontSize: "1.05rem" }}>Mr. H Seshagiri Rao</div>
                    <div style={{ fontSize: "0.82rem", color: "#64748b" }}>Associate Controller of Examinations • Assistant Professor, Dept. of Chemistry</div>
                    <div style={{ fontSize: "0.82rem", color: "var(--accent-royal)", marginTop: "0.2rem" }}>ace@rguktrkv.ac.in</div>
                  </div>

                  <div style={{ marginTop: "0.75rem" }}>
                    <div style={{ fontWeight: 800, color: "var(--primary-dark)", fontSize: "1.05rem" }}>Mr. J. Bhanumurthy</div>
                    <div style={{ fontSize: "0.82rem", color: "#64748b" }}>Associate Controller of Examinations • Mentor in Mathematics</div>
                    <div style={{ fontSize: "0.82rem", color: "var(--accent-royal)", marginTop: "0.2rem" }}>acoe@rguktrkv.ac.in</div>
                  </div>
                </div>
              </div>

              {/* TIMINGS & SERVICES */}
              <div style={{ marginTop: "1.5rem", background: "#faf5ff", border: "1px solid #f3e8ff", borderRadius: "8px", padding: "1.25rem" }}>
                <h5 style={{ color: "#6b21a8", margin: "0 0 0.5rem 0", fontWeight: 700, fontSize: "0.95rem" }}>
                  Examination Counter Working Hours &amp; Services
                </h5>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "0.85rem", fontSize: "0.85rem", color: "#475569" }}>
                  <div><strong>Counter Timings:</strong> Mon - Sat: 10:00 AM – 5:00 PM (Lunch: 1:00 – 2:00 PM)</div>
                  <div><strong>Transcript &amp; Migration:</strong> Counter 2, Examination Cell</div>
                  <div><strong>Grade Sheet Verification:</strong> Online Portal / Examination Peshi</div>
                  <div><strong>Duplicate Memo Issuance:</strong> Submit police FIR copy &amp; DD</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 7: NOTICES & CIRCULARS */}
        {activeTab === "circulars" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{ background: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0", padding: "2rem", boxShadow: "0 4px 12px rgba(0,0,0,0.04)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", marginBottom: "1.5rem" }}>
                <div>
                  <h3 style={{ color: "var(--primary-dark)", fontSize: "1.45rem", fontWeight: 800, margin: 0 }}>
                    Official Examination Circulars &amp; Schedules
                  </h3>
                  <p style={{ color: "#64748b", fontSize: "0.9rem", margin: "0.25rem 0 0 0" }}>
                    Download latest exam schedules, hall-ticket announcements, and academic evaluation updates.
                  </p>
                </div>
                <button
                  type="button"
                  className="btn btn-gold"
                  onClick={() => openDocModal("End Semester Examination Timetable", "End_Sem_Exam_Schedule_Sep_2026.pdf")}
                  style={{ fontSize: "0.85rem" }}
                >
                  Download Latest Timetable PDF
                </button>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {examNotices.map((notice) => (
                  <div
                    key={notice.id}
                    style={{
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderRadius: "10px",
                      padding: "1.25rem",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: "1rem"
                    }}
                  >
                    <div>
                      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "0.35rem" }}>
                        <span style={{ fontSize: "0.72rem", fontWeight: 800, background: "#fef3c7", color: "#92400e", padding: "0.15rem 0.5rem", borderRadius: "4px" }}>
                          {notice.category}
                        </span>
                        <span style={{ fontSize: "0.75rem", color: "#64748b" }}>{notice.date}</span>
                      </div>
                      <h4 style={{ color: "var(--primary-dark)", fontSize: "1.02rem", fontWeight: 700, margin: "0 0 0.25rem 0" }}>
                        {notice.title}
                      </h4>
                      <p style={{ fontSize: "0.85rem", color: "#475569", margin: 0 }}>
                        {notice.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => openDocModal(notice.title, notice.pdfName)}
                      style={{ fontSize: "0.8rem", padding: "0.45rem 0.9rem", whiteSpace: "nowrap" }}
                    >
                      View Notice (PDF)
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* BOTTOM QUICK ACTIONS CARD */}
        <div
          style={{
            marginTop: "2.5rem",
            background: "#ffffff",
            borderRadius: "12px",
            border: "1px solid #e2e8f0",
            padding: "1.75rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem"
          }}
        >
          <div>
            <h4 style={{ color: "var(--primary-dark)", margin: "0 0 0.25rem 0", fontWeight: 800, fontSize: "1.1rem" }}>
              Explore Related Academic Sections
            </h4>
            <p style={{ margin: 0, fontSize: "0.88rem", color: "#64748b" }}>
              Access full curricula, academic council resolutions, regulations, and departmental syllabus structures.
            </p>
          </div>

          <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
            <Link href="/academics/academic-regulations" className="btn btn-primary" style={{ fontSize: "0.82rem", textDecoration: "none" }}>
              Academic Regulations
            </Link>
            <Link href="/curriculum" className="btn btn-gold" style={{ fontSize: "0.82rem", textDecoration: "none" }}>
              Curricula &amp; Syllabus
            </Link>
            <Link href="/academics/departments" className="btn" style={{ fontSize: "0.82rem", background: "#f1f5f9", color: "#334155", border: "1px solid #cbd5e1", textDecoration: "none" }}>
              All Departments
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
