"use client";

import React, { useState } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { RGUKT_DATA } from "@/data/rguktData";
import { useApp } from "@/context/AppContext";

export default function PlacementsPage() {
  const { openDocModal } = useApp();
  const [activeSection, setActiveSection] = useState("overview");

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="page-view-container">
      <Breadcrumb title="Career Development & Placement Cell (CDPC)" category="Placements" />

      <div className="container" style={{ paddingBottom: "4rem" }}>
        <div className="page-content-layout">
          {/* Section Navigation Sidebar */}
          <aside className="page-sidebar" aria-label="Section Navigation" style={{ position: "sticky", top: "90px" }}>
            <h4 className="sidebar-menu-title">Index</h4>

            <ul className="sidebar-nav-list">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("overview")}
                  className={`sidebar-link ${activeSection === "overview" ? "active" : ""}`}
                  style={{ width: "100%", textAlign: "left", background: "none", border: "none", cursor: "pointer" }}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("students")}
                  className={`sidebar-link ${activeSection === "students" ? "active" : ""}`}
                  style={{ width: "100%", textAlign: "left", background: "none", border: "none", cursor: "pointer" }}
                >
                  Students
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("recruiters")}
                  className={`sidebar-link ${activeSection === "recruiters" ? "active" : ""}`}
                  style={{ width: "100%", textAlign: "left", background: "none", border: "none", cursor: "pointer" }}
                >
                  Recruiters
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("contact")}
                  className={`sidebar-link ${activeSection === "contact" ? "active" : ""}`}
                  style={{ width: "100%", textAlign: "left", background: "none", border: "none", cursor: "pointer" }}
                >
                  Contact Us
                </button>
              </li>
              <li>
                <Link href="/" className="sidebar-link">
                  RK Valley Home →
                </Link>
              </li>
            </ul>

            <div
              style={{
                marginTop: "1.5rem",
                padding: "1rem",
                background: "#f8fafc",
                borderRadius: "8px",
                border: "1px solid #e2e8f0",
              }}
            >
              <div
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: "var(--primary-maroon)",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}
              >
                Quick Links
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem", fontSize: "0.85rem" }}>
                <Link href="/departments" style={{ color: "var(--primary-dark)", textDecoration: "none", fontWeight: 600 }}>
                  Department Statistics →
                </Link>
                <Link href="/careers" style={{ color: "var(--primary-dark)", textDecoration: "none", fontWeight: 600 }}>
                  Recruitment Drives →
                </Link>
                <Link href="/curriculum" style={{ color: "var(--primary-dark)", textDecoration: "none", fontWeight: 600 }}>
                  Academic Curriculum →
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Body Content */}
          <article className="page-main-body">
            {/* Section 1: Home / Overview */}
            <section id="overview" style={{ scrollMarginTop: "100px", marginBottom: "3rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                <span
                  style={{
                    background: "rgba(122, 0, 25, 0.08)",
                    color: "var(--primary-maroon)",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "999px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                  }}
                >
                  CDPC Cell
                </span>
                <span
                  style={{
                    background: "#ecfdf5",
                    color: "#047857",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "999px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                  }}
                >
                  Industry Interface
                </span>
              </div>

              <h2 style={{ color: "var(--primary-dark)", fontSize: "2rem", fontWeight: 800, margin: "0.25rem 0 1rem" }}>
                Career Development and Placement Cell (CDPC)
              </h2>

              <p style={{ fontSize: "1.05rem", color: "#334155", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                Career Development and Placement Cell (CDPC) at RGUKT, R.K.Valley is dedicated to enriching the students of the institute as competent and efficient human resources for the nation. Our students are guided and trained through a constantly updated curriculum, by a highly qualified and dedicated faculty, meeting the fast-changing needs of the industry. The CDPC at RGUKT R.K.Valley regularly understands the needs of the industry and acts as a bridge between the industry and academia.
              </p>

              {/* Major Objectives Card */}
              <div
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: "10px",
                  padding: "1.5rem",
                  marginBottom: "2rem",
                }}
              >
                <h3 style={{ color: "var(--primary-dark)", fontSize: "1.15rem", fontWeight: 800, marginBottom: "1rem" }}>
                  The major objectives of the CDPC at RGUKT, R.K.Valley includes
                </h3>
                <ul
                  style={{
                    listStyleType: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.85rem",
                  }}
                >
                  {[
                    "To maintain an ecosystem where collaboration with industry thrives by continuous and very productive relationships with corporations of all sizes, from Start-Ups to Multi-National Corporations from different sectors of Industry.",
                    "To expose the students towards different Career Options available after graduation and helping them in identifying their Career Objectives.",
                    "To provide an efficient environment for the students in enhancing their skills and their preparation strategies towards fulfilling their Career Objectives.",
                    "Enabling the students to meet the industry expectation based on the expected objectives by organizing various programmes to improve soft skills, professional communication, and personality.",
                    "To provide employment opportunities for the students by approaching the organizations for the Campus Placements at the Institute.",
                    "To assist the departments in organizing Industry Oriented Workshops, Leadership Talks, Lectures, Curriculum Oriented Career Prospects.",
                  ].map((objective, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.75rem",
                        color: "#334155",
                        fontSize: "0.95rem",
                        lineHeight: 1.6,
                      }}
                    >
                      <span
                        style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          background: "rgba(122, 0, 25, 0.1)",
                          color: "var(--primary-maroon)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          marginTop: "0.15rem",
                        }}
                      >
                        ✓
                      </span>
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Statistics Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "1.25rem",
                  marginBottom: "2rem",
                }}
              >
                <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", padding: "1.25rem", borderRadius: "10px", textAlign: "center" }}>
                  <span style={{ fontSize: "2rem", fontWeight: 800, color: "var(--accent-gold)", display: "block" }}>
                    {RGUKT_DATA.placements.stats.highestPackage}
                  </span>
                  <span style={{ fontSize: "0.85rem", color: "#64748b", fontWeight: 600 }}>Highest CTC Package</span>
                </div>
                <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", padding: "1.25rem", borderRadius: "10px", textAlign: "center" }}>
                  <span style={{ fontSize: "2rem", fontWeight: 800, color: "var(--accent-royal)", display: "block" }}>
                    {RGUKT_DATA.placements.stats.averagePackage}
                  </span>
                  <span style={{ fontSize: "0.85rem", color: "#64748b", fontWeight: 600 }}>Average CTC Package</span>
                </div>
                <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", padding: "1.25rem", borderRadius: "10px", textAlign: "center" }}>
                  <span style={{ fontSize: "2rem", fontWeight: 800, color: "var(--status-emerald)", display: "block" }}>
                    {RGUKT_DATA.placements.stats.offersCount}
                  </span>
                  <span style={{ fontSize: "0.85rem", color: "#64748b", fontWeight: 600 }}>Offers Generated</span>
                </div>
                <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", padding: "1.25rem", borderRadius: "10px", textAlign: "center" }}>
                  <span style={{ fontSize: "2rem", fontWeight: 800, color: "var(--primary-dark)", display: "block" }}>
                    {RGUKT_DATA.placements.stats.companiesVisited}
                  </span>
                  <span style={{ fontSize: "0.85rem", color: "#64748b", fontWeight: 600 }}>Recruiting Partners</span>
                </div>
              </div>
            </section>

            {/* Section 2: Students */}
            <section id="students" style={{ scrollMarginTop: "100px", marginBottom: "3rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                <span
                  style={{
                    background: "rgba(122, 0, 25, 0.08)",
                    color: "var(--primary-maroon)",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "999px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                  }}
                >
                  Skill Architecture
                </span>
              </div>
              <h3 style={{ color: "var(--primary-dark)", fontSize: "1.5rem", fontWeight: 800, marginBottom: "0.75rem" }}>
                Students &amp; Training Roadmap
              </h3>
              <p style={{ fontSize: "0.98rem", color: "#475569", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                CDPC conducts intensive competency development, live hackathons, technical bootcamps, and mock placement interviews to nurture high-impact engineering graduates.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: "1rem",
                  marginBottom: "1.75rem",
                }}
              >
                {RGUKT_DATA.placements.trainingModules.map((t, i) => (
                  <div
                    key={i}
                    style={{
                      background: "#ffffff",
                      border: "1px solid #e2e8f0",
                      borderRadius: "8px",
                      padding: "1.25rem",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                    }}
                  >
                    <h4 style={{ color: "var(--primary-dark)", fontSize: "1rem", fontWeight: 700, marginBottom: "0.35rem" }}>
                      {t.title}
                    </h4>
                    <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--accent-royal)", background: "#eff6ff", padding: "0.2rem 0.5rem", borderRadius: "4px" }}>
                      {t.duration}
                    </span>
                    <p style={{ fontSize: "0.85rem", color: "#64748b", marginTop: "0.5rem", lineHeight: 1.5 }}>
                      Conducted by: {t.trainer}
                    </p>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => openDocModal("Placement Brochure 2026", "Placement_Brochure_RGUKT_RKV_2026.pdf")}
                  style={{
                    background: "var(--primary-maroon)",
                    color: "#ffffff",
                    border: "none",
                    padding: "0.65rem 1.25rem",
                    borderRadius: "6px",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  Download CDPC Placement Brochure (PDF)
                </button>
              </div>
            </section>

            {/* Section 3: Recruiters */}
            <section id="recruiters" style={{ scrollMarginTop: "100px", marginBottom: "3rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                <span
                  style={{
                    background: "#fef3c7",
                    color: "#92400e",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "999px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                  }}
                >
                  Industry Partnerships
                </span>
              </div>
              <h3 style={{ color: "var(--primary-dark)", fontSize: "1.5rem", fontWeight: 800, marginBottom: "0.75rem" }}>
                Recruiters
              </h3>
              <p style={{ fontSize: "0.98rem", color: "#475569", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                RGUKT RK Valley welcomes national and international corporations for on-campus, hybrid, and off-campus recruitment drives. Our graduates undergo rigorous 6-year continuous residential training in core engineering, software architecture, and practical laboratory problem-solving.
              </p>

              <h4 style={{ color: "var(--primary-dark)", fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem" }}>
                Prominent Recruiting Partners
              </h4>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "1rem",
                  marginBottom: "2rem",
                }}
              >
                {RGUKT_DATA.placements.topRecruiters.map((r, i) => (
                  <div
                    key={i}
                    style={{
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderRadius: "8px",
                      padding: "1rem 1.25rem",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: "1rem", fontWeight: 700, color: "var(--primary-dark)" }}>
                        {r.name}
                      </div>
                      <div style={{ fontSize: "0.82rem", color: "#64748b", marginTop: "0.25rem" }}>
                        Role: {r.roles}
                      </div>
                    </div>
                    <div style={{ marginTop: "0.75rem" }}>
                      <span
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          padding: "0.2rem 0.55rem",
                          borderRadius: "4px",
                          background: r.tier === "Super Dream" ? "#fee2e2" : r.tier === "Dream" ? "#fef3c7" : "#e0f2fe",
                          color: r.tier === "Super Dream" ? "#991b1b" : r.tier === "Dream" ? "#92400e" : "#0369a1",
                        }}
                      >
                        {r.tier}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Contact Us */}
            <section id="contact" style={{ scrollMarginTop: "100px", marginBottom: "2rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                <span
                  style={{
                    background: "rgba(122, 0, 25, 0.08)",
                    color: "var(--primary-maroon)",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "999px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                  }}
                >
                  Connect
                </span>
              </div>
              <h3 style={{ color: "var(--primary-dark)", fontSize: "1.5rem", fontWeight: 800, marginBottom: "0.75rem" }}>
                Contact Us
              </h3>
              <p style={{ fontSize: "0.98rem", color: "#475569", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                For recruitment drive schedules, campus visits, corporate MOUs, or student intern hiring, get in touch with the Career Development &amp; Placement Cell:
              </p>

              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "10px",
                  padding: "1.5rem",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: "1.5rem",
                }}
              >
                <div>
                  <div style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", color: "var(--primary-maroon)", marginBottom: "0.25rem" }}>
                    Career Development &amp; Placement Officer
                  </div>
                  <div style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--primary-dark)" }}>
                    Dr. T. Suresh Kumar
                  </div>
                  <div style={{ fontSize: "0.88rem", color: "#64748b", marginTop: "0.25rem" }}>
                    Officer In-Charge, CDPC
                  </div>
                  <div style={{ marginTop: "1rem", fontSize: "0.9rem", color: "#334155", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    <div>
                      <strong>Email:</strong> <a href="mailto:cdpc@rguktrkv.ac.in" style={{ color: "var(--primary-maroon)", fontWeight: 600 }}>cdpc@rguktrkv.ac.in</a>
                    </div>
                    <div>
                      <strong>Phone:</strong> 08560-287846
                    </div>
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", color: "var(--primary-maroon)", marginBottom: "0.25rem" }}>
                    Cell Office Location
                  </div>
                  <div style={{ fontSize: "1rem", fontWeight: 700, color: "var(--primary-dark)" }}>
                    CDPC Complex, Administrative Building
                  </div>
                  <p style={{ fontSize: "0.88rem", color: "#64748b", marginTop: "0.4rem", lineHeight: 1.6 }}>
                    Rajiv Gandhi University of Knowledge Technologies (RGUKT) RK Valley,<br />
                    Idupulapaya, Vempalli Mandal, Kadapa District, Andhra Pradesh - 516330
                  </p>
                </div>
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
}

