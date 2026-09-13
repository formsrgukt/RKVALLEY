"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { RGUKT_DATA } from "@/data/rguktData";

export default function AcademicDepartmentsView() {
  const [filter, setFilter] = useState<"All" | "Engineering" | "Sciences">("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const allDepts = RGUKT_DATA.departments;
  const engineeringDepts = allDepts.filter((d) => d.category === "Engineering");
  const sciencesDepts = allDepts.filter((d) => d.category !== "Engineering");

  const filteredDepts = useMemo(() => {
    return allDepts.filter((d) => {
      // Category filter
      if (filter === "Engineering" && d.category !== "Engineering") return false;
      if (filter === "Sciences" && d.category === "Engineering") return false;

      // Search query
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      const matchName = d.name.toLowerCase().includes(q);
      const matchCode = d.code.toLowerCase().includes(q);
      const matchOverview = d.overview.toLowerCase().includes(q);
      const matchHod = d.hod.toLowerCase().includes(q);
      const matchLabs = d.labs && d.labs.some((l) => l.toLowerCase().includes(q));
      const matchHighlights = d.highlights && d.highlights.some((h) => h.toLowerCase().includes(q));

      return matchName || matchCode || matchOverview || matchHod || matchLabs || matchHighlights;
    });
  }, [allDepts, filter, searchQuery]);

  return (
    <div className="page-view-container" style={{ width: "100%", minHeight: "100vh" }}>
      <Breadcrumb title="Academic Departments Directory" category="Academics" />

      <div className="container" style={{ padding: "2.5rem 1rem 4rem 1rem", maxWidth: "1280px", margin: "0 auto", width: "100%" }}>
        {/* HERO BANNER CARD */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: "12px",
            border: "1px solid #e2e8f0",
            padding: "2.25rem",
            marginBottom: "2rem",
            boxShadow: "0 4px 15px rgba(0,0,0,0.04)"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
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
                Academic Divisions • RGUKT RK Valley
              </span>
              <h1
                style={{
                  color: "var(--primary-dark)",
                  fontSize: "2.2rem",
                  fontWeight: 800,
                  margin: "0 0 0.75rem 0",
                  lineHeight: 1.2
                }}
              >
                Academic &amp; Engineering Departments
              </h1>
              <p style={{ fontSize: "1.02rem", color: "#475569", lineHeight: 1.6, margin: 0, maxWidth: "920px" }}>
                Explore our 13 specialized academic departments spanning 8 core engineering disciplines and 5 foundational sciences and humanities divisions. Each department is equipped with state-of-the-art computational and experimental laboratories, distinguished research faculty, and industry-aligned curricula.
              </p>
            </div>

            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <Link
                href="/curriculum"
                className="btn btn-primary"
                style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
              >
                <span>Curricula &amp; Syllabi</span>
                <span>→</span>
              </Link>
              <Link
                href="/academics/academic-programmes"
                className="btn btn-gold"
                style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
              >
                <span>Degree Programmes</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* STATS STRIP */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
              gap: "1rem",
              marginTop: "1.75rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid #f1f5f9"
            }}
          >
            <div style={{ background: "#f8fafc", padding: "0.85rem 1rem", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
              <div style={{ fontSize: "1.45rem", fontWeight: 800, color: "var(--primary-dark)" }}>13</div>
              <div style={{ fontSize: "0.78rem", color: "#64748b", fontWeight: 600 }}>Total Academic Departments</div>
            </div>
            <div style={{ background: "#f8fafc", padding: "0.85rem 1rem", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
              <div style={{ fontSize: "1.45rem", fontWeight: 800, color: "var(--accent-royal)" }}>8</div>
              <div style={{ fontSize: "0.78rem", color: "#64748b", fontWeight: 600 }}>Core Engineering Disciplines</div>
            </div>
            <div style={{ background: "#f8fafc", padding: "0.85rem 1rem", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
              <div style={{ fontSize: "1.45rem", fontWeight: 800, color: "var(--accent-gold-dark)" }}>5</div>
              <div style={{ fontSize: "0.78rem", color: "#64748b", fontWeight: 600 }}>Sciences &amp; Humanities</div>
            </div>
            <div style={{ background: "#f8fafc", padding: "0.85rem 1rem", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
              <div style={{ fontSize: "1.45rem", fontWeight: 800, color: "var(--primary-dark)" }}>240+</div>
              <div style={{ fontSize: "0.78rem", color: "#64748b", fontWeight: 600 }}>Experienced Faculty Members</div>
            </div>
            <div style={{ background: "#f8fafc", padding: "0.85rem 1rem", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
              <div style={{ fontSize: "1.45rem", fontWeight: 800, color: "var(--accent-royal)" }}>70+</div>
              <div style={{ fontSize: "0.78rem", color: "#64748b", fontWeight: 600 }}>Specialized Research Labs</div>
            </div>
          </div>
        </div>

        {/* SEARCH & FILTER CONTROLS */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: "10px",
            border: "1px solid #e2e8f0",
            padding: "1.25rem 1.5rem",
            marginBottom: "2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.02)"
          }}
        >
          {/* Category Filter Buttons */}
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            <button
              type="button"
              onClick={() => setFilter("All")}
              style={{
                padding: "0.55rem 1.15rem",
                borderRadius: "6px",
                fontSize: "0.85rem",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.2s ease",
                border: filter === "All" ? "1px solid var(--accent-royal)" : "1px solid #cbd5e1",
                background: filter === "All" ? "var(--accent-royal)" : "#ffffff",
                color: filter === "All" ? "#ffffff" : "#475569",
                boxShadow: filter === "All" ? "0 2px 6px rgba(128,5,23,0.2)" : "none"
              }}
            >
              All Departments ({allDepts.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter("Engineering")}
              style={{
                padding: "0.55rem 1.15rem",
                borderRadius: "6px",
                fontSize: "0.85rem",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.2s ease",
                border: filter === "Engineering" ? "1px solid var(--accent-royal)" : "1px solid #cbd5e1",
                background: filter === "Engineering" ? "var(--accent-royal)" : "#ffffff",
                color: filter === "Engineering" ? "#ffffff" : "#475569",
                boxShadow: filter === "Engineering" ? "0 2px 6px rgba(128,5,23,0.2)" : "none"
              }}
            >
              Engineering Disciplines ({engineeringDepts.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter("Sciences")}
              style={{
                padding: "0.55rem 1.15rem",
                borderRadius: "6px",
                fontSize: "0.85rem",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.2s ease",
                border: filter === "Sciences" ? "1px solid var(--accent-royal)" : "1px solid #cbd5e1",
                background: filter === "Sciences" ? "var(--accent-royal)" : "#ffffff",
                color: filter === "Sciences" ? "#ffffff" : "#475569",
                boxShadow: filter === "Sciences" ? "0 2px 6px rgba(128,5,23,0.2)" : "none"
              }}
            >
              Sciences &amp; Humanities ({sciencesDepts.length})
            </button>
          </div>

          {/* Search Input */}
          <div style={{ position: "relative", minWidth: "280px" }}>
            <input
              type="text"
              placeholder="Search by department, lab, code..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "0.55rem 0.85rem 0.55rem 2.2rem",
                borderRadius: "6px",
                border: "1px solid #cbd5e1",
                fontSize: "0.85rem",
                outline: "none"
              }}
            />
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#94a3b8"
              strokeWidth="2"
              style={{ position: "absolute", left: "0.75rem", top: "50%", transform: "translateY(-50%)" }}
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>

        {/* RESULTS COUNT & ACTIVE FILTER NOTICE */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem", flexWrap: "wrap", gap: "0.5rem" }}>
          <h2 style={{ color: "var(--primary-dark)", fontSize: "1.25rem", fontWeight: 700, margin: 0 }}>
            {filter === "Engineering"
              ? "Engineering Disciplines (B.Tech, M.Tech, Ph.D.)"
              : filter === "Sciences"
              ? "Sciences & Humanities Divisions (PUC & Foundational Core)"
              : "All Academic & Engineering Departments"}
          </h2>
          <span style={{ fontSize: "0.85rem", color: "#64748b" }}>
            Showing {filteredDepts.length} of {allDepts.length} departments
          </span>
        </div>

        {/* DEPARTMENTS GRID */}
        {filteredDepts.length === 0 ? (
          <div style={{ background: "#ffffff", padding: "3rem", borderRadius: "10px", textAlign: "center", border: "1px solid #e2e8f0" }}>
            <h4 style={{ color: "var(--primary-dark)", marginBottom: "0.5rem" }}>No departments match your search</h4>
            <p style={{ color: "#64748b", margin: "0 0 1rem 0" }}>Try clearing the search query or selecting &quot;All Departments&quot;.</p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setFilter("All");
                setSearchQuery("");
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
              gap: "1.5rem",
              marginBottom: "3rem"
            }}
          >
            {filteredDepts.map((d, idx) => {
              const isEngineering = d.category === "Engineering";
              const isYellow = idx % 2 === 1;
              const accentColor = isYellow ? "var(--accent-gold-dark)" : "var(--accent-royal)";
              const badgeBg = isYellow ? "#fef3c7" : "#fdf2f4";
              const badgeColor = isYellow ? "var(--accent-gold-dark)" : "var(--accent-royal)";
              const cardBorderLeft = isYellow ? "4px solid var(--accent-gold)" : "4px solid var(--accent-royal)";
              const btnClass = isYellow ? "btn btn-gold" : "btn btn-primary";

              return (
                <div
                  key={d.id}
                  style={{
                    background: "#ffffff",
                    borderRadius: "10px",
                    border: "1px solid #e2e8f0",
                    borderLeft: cardBorderLeft,
                    padding: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease"
                  }}
                >
                  <div>
                    {/* Header: Name + Badge */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5rem", marginBottom: "0.4rem" }}>
                      <div>
                        <span
                          style={{
                            fontSize: "0.72rem",
                            fontWeight: 700,
                            color: isEngineering ? "var(--accent-royal)" : "#0284c7",
                            textTransform: "uppercase",
                            letterSpacing: "0.04em",
                            display: "block",
                            marginBottom: "0.2rem"
                          }}
                        >
                          {isEngineering ? "Engineering Discipline" : "Sciences & Humanities"}
                        </span>
                        <h3 style={{ color: "var(--primary-dark)", fontSize: "1.2rem", fontWeight: 700, margin: 0, lineHeight: 1.3 }}>
                          {d.name}
                        </h3>
                      </div>
                      <span
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 800,
                          color: badgeColor,
                          background: badgeBg,
                          padding: "0.2rem 0.55rem",
                          borderRadius: "4px",
                          flexShrink: 0
                        }}
                      >
                        {d.code}
                      </span>
                    </div>

                    {/* Overview */}
                    <p
                      style={{
                        fontSize: "0.85rem",
                        color: "#475569",
                        lineHeight: 1.45,
                        margin: "0.4rem 0 0.85rem 0",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden"
                      }}
                    >
                      {d.overview}
                    </p>

                    {/* HOD Box */}
                    <div
                      style={{
                        background: "#f8fafc",
                        border: "1px solid #e2e8f0",
                        borderRadius: "6px",
                        padding: "0.65rem 0.85rem",
                        marginBottom: "1rem",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "0.4rem"
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <span style={{ fontSize: "1rem" }}>👤</span>
                        <div>
                          <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--primary-dark)" }}>
                            HOD: {d.hod}
                          </div>
                          <div style={{ fontSize: "0.74rem", color: "#64748b" }}>
                            Head of the Department
                          </div>
                        </div>
                      </div>
                      {d.hodEmail && (
                        <a
                          href={`mailto:${d.hodEmail}`}
                          style={{ fontSize: "0.74rem", color: "var(--accent-royal)", fontWeight: 600, textDecoration: "none" }}
                        >
                          {d.hodEmail}
                        </a>
                      )}
                    </div>

                    {/* Key Metrics Strip */}
                    <div
                      style={{
                        display: "flex",
                        gap: "1rem",
                        fontSize: "0.8rem",
                        color: "#64748b",
                        marginBottom: "1rem",
                        paddingBottom: "0.75rem",
                        borderBottom: "1px dashed #e2e8f0",
                        flexWrap: "wrap"
                      }}
                    >
                      <span>👥 <strong>{d.facultyCount}</strong> Faculty</span>
                      <span>🔬 <strong>{d.labsCount}</strong> Labs</span>
                      <span>🎓 <strong>{d.studentCount}</strong> Students</span>
                      <span>📜 <strong>{isEngineering ? "B.Tech, M.Tech, Ph.D." : "PUC & Foundational Core"}</strong></span>
                    </div>

                    {/* Specialized Labs Tags */}
                    {d.labs && d.labs.length > 0 && (
                      <div style={{ marginBottom: "1rem" }}>
                        <div style={{ fontSize: "0.76rem", fontWeight: 700, color: "#334155", marginBottom: "0.4rem", textTransform: "uppercase", letterSpacing: "0.03em" }}>
                          Specialized Facilities &amp; Labs:
                        </div>
                        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                          {d.labs.slice(0, 3).map((lab, lIdx) => (
                            <span
                              key={lIdx}
                              style={{
                                fontSize: "0.73rem",
                                background: "#f1f5f9",
                                color: "#334155",
                                padding: "0.2rem 0.5rem",
                                borderRadius: "4px",
                                border: "1px solid #e2e8f0"
                              }}
                            >
                              {lab}
                            </span>
                          ))}
                          {d.labs.length > 3 && (
                            <span
                              style={{
                                fontSize: "0.73rem",
                                background: "#eff6ff",
                                color: "#1d4ed8",
                                padding: "0.2rem 0.5rem",
                                borderRadius: "4px",
                                fontWeight: 600
                              }}
                            >
                              +{d.labs.length - 3} more labs
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Academic Highlights */}
                    {d.highlights && d.highlights.length > 0 && (
                      <div style={{ marginBottom: "1.25rem" }}>
                        <div style={{ fontSize: "0.76rem", fontWeight: 700, color: "#334155", marginBottom: "0.35rem", textTransform: "uppercase", letterSpacing: "0.03em" }}>
                          Key Highlights:
                        </div>
                        <ul style={{ margin: 0, paddingLeft: "1.1rem", fontSize: "0.8rem", color: "#64748b", lineHeight: 1.5 }}>
                          {d.highlights.slice(0, 2).map((high, hIdx) => (
                            <li key={hIdx}>{high}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Actions Row */}
                  <div
                    style={{
                      paddingTop: "1rem",
                      borderTop: "1px solid #f1f5f9",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: "0.6rem"
                    }}
                  >
                    <Link
                      href={`/departments/${d.id}`}
                      className={btnClass}
                      style={{
                        textDecoration: "none",
                        fontSize: "0.8rem",
                        padding: "0.45rem 0.9rem",
                        borderRadius: "5px",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.35rem"
                      }}
                    >
                      <span>View Department Profile</span>
                      <span>→</span>
                    </Link>

                    <div style={{ display: "flex", gap: "0.6rem", fontSize: "0.78rem" }}>
                      <Link
                        href={`/departments/${d.id}/curricula`}
                        style={{ color: accentColor, fontWeight: 700, textDecoration: "none" }}
                      >
                        Curricula
                      </Link>
                      <span style={{ color: "#cbd5e1" }}>•</span>
                      <Link
                        href={`/departments/${d.id}/faculty`}
                        style={{ color: "#64748b", fontWeight: 600, textDecoration: "none" }}
                      >
                        Faculty
                      </Link>
                      <span style={{ color: "#cbd5e1" }}>•</span>
                      <Link
                        href={`/departments/${d.id}/laboratories`}
                        style={{ color: "#64748b", fontWeight: 600, textDecoration: "none" }}
                      >
                        Labs
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ACADEMIC STRUCTURE & NEP ALIGNMENT INFO */}
        <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "1.75rem" }}>
          <h4 style={{ color: "var(--primary-dark)", fontSize: "1.15rem", fontWeight: 700, margin: "0 0 0.5rem 0" }}>
            Academic Regulations &amp; Degree Framework
          </h4>
          <p style={{ fontSize: "0.9rem", color: "#475569", margin: "0 0 1.25rem 0", lineHeight: 1.6 }}>
            All 13 departments follow the Choice Based Credit System (CBCS) aligned with AICTE and NEP 2020 frameworks. Students across departments have opportunities for multidisciplinary minors in AI/ML, Cyber Security, IoT, and Data Science, alongside mandatory industrial internships and capstone projects.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
            <Link
              href="/curriculum"
              className="btn btn-primary"
              style={{ textDecoration: "none", fontSize: "0.85rem", padding: "0.5rem 1rem", borderRadius: "6px" }}
            >
              Explore Course Curricula &amp; Syllabi Portal →
            </Link>
            <Link
              href="/academics/academic-regulations"
              className="btn btn-gold"
              style={{ textDecoration: "none", fontSize: "0.85rem", padding: "0.5rem 1rem", borderRadius: "6px" }}
            >
              Academic Regulations (PDF)
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
