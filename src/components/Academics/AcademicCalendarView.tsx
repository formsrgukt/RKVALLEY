"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { ACADEMIC_CALENDAR_DATA, AcademicYearCalendar, CalendarDocument } from "@/data/academicCalendarData";
import { useApp } from "@/context/AppContext";

export default function AcademicCalendarView() {
  const { openDocModal } = useApp();
  const [selectedYear, setSelectedYear] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const latestCalendar = ACADEMIC_CALENDAR_DATA.find((y) => y.isLatest) || ACADEMIC_CALENDAR_DATA[0];

  const filteredYears = useMemo(() => {
    return ACADEMIC_CALENDAR_DATA.filter((item) => {
      // Year filter
      if (selectedYear !== "All" && item.year !== selectedYear) {
        return false;
      }
      // Search query filter
      if (!searchQuery.trim()) {
        return true;
      }
      const query = searchQuery.toLowerCase();
      const matchYear = item.year.toLowerCase().includes(query);
      const matchDocs = item.documents.some(
        (doc) =>
          doc.title.toLowerCase().includes(query) ||
          (doc.badge && doc.badge.toLowerCase().includes(query)) ||
          (doc.scope && doc.scope.toLowerCase().includes(query)) ||
          doc.pdfName.toLowerCase().includes(query)
      );
      return matchYear || matchDocs;
    });
  }, [selectedYear, searchQuery]);

  const handleOpenPdf = (doc: CalendarDocument) => {
    openDocModal(
      doc.title,
      doc.pdfName,
      <div style={{ padding: "1rem 0" }}>
        <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "1rem 1.25rem", marginBottom: "1.25rem" }}>
          <h5 style={{ color: "var(--primary-dark)", margin: "0 0 0.5rem 0", fontWeight: 700 }}>
            {doc.title}
          </h5>
          <p style={{ margin: "0 0 0.5rem 0", fontSize: "0.88rem", color: "#475569" }}>
            {doc.scope || "Official academic schedule approved by RGUKT Academic Council."}
          </p>
          <div style={{ fontSize: "0.8rem", color: "#64748b" }}>
            <strong>File Reference:</strong> <code>{doc.pdfName}</code>
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "1rem" }}>
          <a
            href={doc.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
          >
            <span>Download Official PDF</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
          <a
            href={doc.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
            style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
          >
            <span>Open in New Tab</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>
    );
  };

  const handleYearClick = (yr: string) => {
    setSelectedYear(yr);
    // Smoothly move/scroll down to the result card
    setTimeout(() => {
      const targetId = yr === "All" ? "calendar-archive-results" : `year-card-${yr}`;
      const targetElement = document.getElementById(targetId) || document.getElementById("calendar-archive-results");

      if (targetElement) {
        const topOffset = 85; // accounts for sticky navbar height
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - topOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 40);
  };

  return (
    <div className="page-view-container" style={{ width: "100%", minHeight: "100vh" }}>
      <Breadcrumb title="Academic Calendar" category="Academics" />

      <div className="container" style={{ padding: "2.5rem 1rem 4rem 1rem", maxWidth: "1280px", margin: "0 auto", width: "100%" }}>
        {/* HERO BANNER CARD */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: "12px",
            border: "1px solid #e2e8f0",
            padding: "2.25rem",
            marginBottom: "2.25rem",
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
                Academic Affairs • RGUKT RK Valley
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
                Academic Calendar
              </h1>
              <p style={{ fontSize: "1.02rem", color: "#475569", lineHeight: 1.6, margin: 0, maxWidth: "920px" }}>
                Official semester chronologies, instructional days, continuous assessment &amp; Mid-Examination schedules, preparation holidays, End-Semester Tests (EST), and vacation notifications across all academic years for Pre-University Courses and 4-Year B.Tech programs.
              </p>
            </div>

            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a
                href="#latest-calendar"
                className="btn btn-primary"
                style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
              >
                <span>Latest Calendar (2024–25)</span>
                <span>↓</span>
              </a>
              <Link
                href="/academics/academic-regulations"
                className="btn btn-gold"
                style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
              >
                <span>Academic Regulations</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* SECTION 1: LATEST ACADEMIC YEAR (2024-25) SPOTLIGHT */}
        <section id="latest-calendar" style={{ marginBottom: "3rem", scrollMarginTop: "100px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem", flexWrap: "wrap", gap: "0.5rem" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#166534", background: "#dcfce7", padding: "0.2rem 0.55rem", borderRadius: "4px" }}>
                  CURRENT ACTIVE ACADEMIC YEAR
                </span>
                <span style={{ fontSize: "0.85rem", color: "#64748b" }}>• Approved by Academic Council</span>
              </div>
              <h2 style={{ color: "var(--primary-dark)", fontSize: "1.5rem", fontWeight: 700, margin: 0 }}>
                Academic Calendar for the Year 2024–25
              </h2>
            </div>
            <span style={{ fontSize: "0.85rem", color: "#475569" }}>
              3 Official Program Calendars Available
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "1.25rem"
            }}
          >
            {latestCalendar.documents.map((doc, idx) => {
              const isGold = idx === 1;
              const cardBorder = isGold ? "#fde68a" : "#fecdd3";
              const cardBg = isGold ? "#fffdfa" : "#ffffff";
              const badgeBg = isGold ? "#fef3c7" : "#fdf2f4";
              const badgeColor = isGold ? "#92400e" : "var(--accent-royal)";
              const btnClass = isGold ? "btn btn-gold" : "btn btn-primary";

              return (
                <div
                  key={idx}
                  style={{
                    background: cardBg,
                    border: `1px solid ${cardBorder}`,
                    borderRadius: "10px",
                    padding: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease"
                  }}
                >
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5rem", marginBottom: "0.75rem" }}>
                      <span
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 800,
                          background: badgeBg,
                          color: badgeColor,
                          padding: "0.2rem 0.6rem",
                          borderRadius: "4px"
                        }}
                      >
                        {doc.badge}
                      </span>
                      <span style={{ fontSize: "0.75rem", color: "#94a3b8" }}>AY 2024-25</span>
                    </div>

                    <h3 style={{ color: "var(--primary-dark)", fontSize: "1.15rem", fontWeight: 700, margin: "0 0 0.5rem 0", lineHeight: 1.3 }}>
                      {doc.title}
                    </h3>
                    <p style={{ fontSize: "0.86rem", color: "#475569", margin: "0 0 1.25rem 0", lineHeight: 1.5 }}>
                      {doc.scope}
                    </p>
                  </div>

                  <div style={{ paddingTop: "1rem", borderTop: "1px dashed #e2e8f0", display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
                    <button
                      type="button"
                      className={btnClass}
                      style={{ fontSize: "0.8rem", padding: "0.45rem 0.9rem", borderRadius: "6px" }}
                      onClick={() => handleOpenPdf(doc)}
                    >
                      View Details
                    </button>
                    <a
                      href={doc.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                      style={{
                        fontSize: "0.8rem",
                        padding: "0.45rem 0.9rem",
                        borderRadius: "6px",
                        background: "#f1f5f9",
                        color: "#334155",
                        border: "1px solid #cbd5e1",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.35rem"
                      }}
                    >
                      <span>Download PDF</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 2: ACADEMIC CALENDAR ARCHIVE (ALL YEARS) */}
        <section style={{ marginBottom: "3rem" }}>
          <div style={{ background: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0", padding: "1.75rem", boxShadow: "0 4px 15px rgba(0,0,0,0.03)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", marginBottom: "1.5rem" }}>
              <div>
                <h2 style={{ color: "var(--primary-dark)", fontSize: "1.35rem", fontWeight: 700, margin: "0 0 0.25rem 0" }}>
                  Official Academic Calendar Archive (2015–16 to 2024–25)
                </h2>
                <p style={{ margin: 0, fontSize: "0.88rem", color: "#64748b" }}>
                  Filter and retrieve historical academic notifications, revised semester timetables, and summer terms.
                </p>
              </div>

              {/* Search input */}
              <div style={{ position: "relative", minWidth: "260px" }}>
                <input
                  type="text"
                  placeholder="Search calendars or files..."
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

            {/* Filter Year Pills */}
            <div style={{ display: "flex", gap: "0.45rem", flexWrap: "wrap", marginBottom: "1.75rem", paddingBottom: "1.25rem", borderBottom: "1px solid #f1f5f9" }}>
              {["All", ...ACADEMIC_CALENDAR_DATA.map((y) => y.year)].map((yr) => (
                <button
                  key={yr}
                  type="button"
                  onClick={() => handleYearClick(yr)}
                  style={{
                    padding: "0.4rem 0.85rem",
                    borderRadius: "6px",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                    border: selectedYear === yr ? "1px solid var(--accent-royal)" : "1px solid #e2e8f0",
                    background: selectedYear === yr ? "var(--accent-royal)" : "#f8fafc",
                    color: selectedYear === yr ? "#ffffff" : "#475569",
                    boxShadow: selectedYear === yr ? "0 2px 6px rgba(128,5,23,0.2)" : "none"
                  }}
                >
                  {yr === "All" ? "All Years" : `AY ${yr}`}
                </button>
              ))}
            </div>

            {/* Active Year Filter Quick Banner */}
            {selectedYear !== "All" && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "#fdf2f4",
                  border: "1px solid #fecdd3",
                  borderRadius: "8px",
                  padding: "0.6rem 1rem",
                  marginBottom: "1.25rem",
                  flexWrap: "wrap",
                  gap: "0.5rem"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ fontSize: "0.95rem" }}>📅</span>
                  <span style={{ fontSize: "0.85rem", color: "#991b1b", fontWeight: 600 }}>
                    Moved to results for <strong>Academic Year {selectedYear}</strong>
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleYearClick("All")}
                  style={{
                    background: "#ffffff",
                    border: "1px solid #fca5a5",
                    color: "#991b1b",
                    borderRadius: "5px",
                    padding: "0.25rem 0.65rem",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    cursor: "pointer"
                  }}
                >
                  View All Years (10)
                </button>
              </div>
            )}

            {/* Grouped Years List */}
            <div id="calendar-archive-results" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {filteredYears.length === 0 ? (
                <div style={{ padding: "2.5rem 1rem", textAlign: "center", color: "#64748b" }}>
                  <p style={{ fontSize: "1.1rem", fontWeight: 600, margin: "0 0 0.5rem 0" }}>No academic calendars match your search</p>
                  <p style={{ fontSize: "0.85rem", margin: 0 }}>Try clearing the search query or selecting &quot;All Years&quot;.</p>
                </div>
              ) : (
                filteredYears.map((yearItem) => {
                  const isHighlighted = selectedYear === yearItem.year;
                  return (
                    <div
                      key={yearItem.year}
                      id={`year-card-${yearItem.year}`}
                      style={{
                        background: isHighlighted ? "#ffffff" : "#fafafa",
                        border: isHighlighted ? "2px solid var(--accent-royal)" : "1px solid #e2e8f0",
                        borderRadius: "8px",
                        padding: "1.25rem 1.5rem",
                        scrollMarginTop: "95px",
                        boxShadow: isHighlighted ? "0 4px 16px rgba(128,5,23,0.1)" : "none",
                        transition: "all 0.2s ease"
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.85rem", flexWrap: "wrap", gap: "0.5rem" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                          <span style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--primary-dark)" }}>
                            Academic Year {yearItem.year}
                          </span>
                          {yearItem.isLatest && (
                            <span style={{ fontSize: "0.7rem", fontWeight: 800, color: "#166534", background: "#dcfce7", padding: "0.15rem 0.45rem", borderRadius: "4px" }}>
                              Current Year
                            </span>
                          )}
                          {isHighlighted && (
                            <span style={{ fontSize: "0.7rem", fontWeight: 800, color: "var(--accent-royal)", background: "#fdf2f4", border: "1px solid #fecdd3", padding: "0.15rem 0.45rem", borderRadius: "4px" }}>
                              Selected Year
                            </span>
                          )}
                        </div>
                        <span style={{ fontSize: "0.78rem", color: "#64748b" }}>
                          {yearItem.documents.length} document{yearItem.documents.length > 1 ? "s" : ""}
                        </span>
                      </div>

                    {yearItem.description && (
                      <p style={{ fontSize: "0.85rem", color: "#64748b", margin: "0 0 1rem 0" }}>
                        {yearItem.description}
                      </p>
                    )}

                    {/* Table / List of documents */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {yearItem.documents.map((doc, dIdx) => (
                        <div
                          key={dIdx}
                          style={{
                            background: "#ffffff",
                            border: "1px solid #e2e8f0",
                            borderRadius: "6px",
                            padding: "0.75rem 1rem",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexWrap: "wrap",
                            gap: "0.75rem"
                          }}
                        >
                          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", flex: 1, minWidth: "260px" }}>
                            <div
                              style={{
                                width: "32px",
                                height: "32px",
                                borderRadius: "6px",
                                background: "#fef2f2",
                                color: "#991b1b",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0
                              }}
                            >
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <polyline points="14 2 14 8 20 8" />
                                <line x1="16" y1="13" x2="8" y2="13" />
                                <line x1="16" y1="17" x2="8" y2="17" />
                                <polyline points="10 9 9 9 8 9" />
                              </svg>
                            </div>
                            <div>
                              <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--primary-dark)" }}>
                                {doc.title}
                              </div>
                              <div style={{ fontSize: "0.75rem", color: "#64748b", display: "flex", gap: "0.4rem", alignItems: "center", flexWrap: "wrap" }}>
                                {doc.badge && (
                                  <span style={{ fontWeight: 600, color: "var(--accent-royal)", background: "#fdf2f4", padding: "0.1rem 0.35rem", borderRadius: "3px" }}>
                                    {doc.badge}
                                  </span>
                                )}
                                <span>Ref: <code>{doc.pdfName}</code></span>
                              </div>
                            </div>
                          </div>

                          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                            <button
                              type="button"
                              onClick={() => handleOpenPdf(doc)}
                              style={{
                                padding: "0.35rem 0.75rem",
                                fontSize: "0.78rem",
                                fontWeight: 600,
                                borderRadius: "5px",
                                background: "#eff6ff",
                                color: "#1e40af",
                                border: "1px solid #bfdbfe",
                                cursor: "pointer"
                              }}
                            >
                              Preview
                            </button>
                            <a
                              href={doc.pdfUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                padding: "0.35rem 0.75rem",
                                fontSize: "0.78rem",
                                fontWeight: 600,
                                borderRadius: "5px",
                                background: "var(--accent-royal)",
                                color: "#ffffff",
                                textDecoration: "none",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.3rem"
                              }}
                            >
                              <span>Download PDF</span>
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })
            )}
            </div>
          </div>
        </section>

        {/* SECTION 3: ACADEMIC CALENDAR REGULATIONS & STATUTORY GUIDELINES */}
        <section style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "1.75rem" }}>
          <h3 style={{ color: "var(--primary-dark)", fontSize: "1.15rem", fontWeight: 700, margin: "0 0 0.5rem 0" }}>
            Statutory Academic Calendar Guidelines &amp; Regulations
          </h3>
          <p style={{ fontSize: "0.88rem", color: "#475569", margin: "0 0 1.25rem 0", lineHeight: 1.6 }}>
            All academic schedules at RGUKT RK Valley are formulated in accordance with the Academic Council regulations, AICTE instructional norms, and University Grants Commission (UGC) guidelines.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1rem",
              marginBottom: "1.5rem"
            }}
          >
            <div style={{ background: "#ffffff", padding: "1rem", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
              <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--accent-royal)", marginBottom: "0.3rem" }}>
                ⏱️ 90 Instructional Days
              </div>
              <div style={{ fontSize: "0.82rem", color: "#64748b", lineHeight: 1.5 }}>
                Every semester strictly adheres to a minimum of 90 actual teaching and laboratory instruction days before the commencement of preparation holidays and EST.
              </div>
            </div>

            <div style={{ background: "#ffffff", padding: "1rem", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
              <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--accent-royal)", marginBottom: "0.3rem" }}>
                📊 Continuous Assessment
              </div>
              <div style={{ fontSize: "0.82rem", color: "#64748b", lineHeight: 1.5 }}>
                PUC follows continuous evaluation across 6 Mid Examinations with final EST, while Engineering semesters feature 3 centralized Mid examinations and final EST.
              </div>
            </div>

            <div style={{ background: "#ffffff", padding: "1rem", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
              <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--accent-royal)", marginBottom: "0.3rem" }}>
                🎯 75% Compulsory Attendance
              </div>
              <div style={{ fontSize: "0.82rem", color: "#64748b", lineHeight: 1.5 }}>
                Students must maintain a minimum attendance of 75% across all registered subjects to be eligible for End-Semester Examinations as per statutory norms.
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
            <Link
              href="/academics/academic-regulations"
              className="btn btn-primary"
              style={{ textDecoration: "none", fontSize: "0.85rem", padding: "0.5rem 1rem", borderRadius: "6px" }}
            >
              Read Academic Regulations →
            </Link>
            <Link
              href="/curriculum"
              className="btn btn-gold"
              style={{ textDecoration: "none", fontSize: "0.85rem", padding: "0.5rem 1rem", borderRadius: "6px" }}
            >
              Explore Curricula &amp; Syllabi
            </Link>
            <span style={{ fontSize: "0.8rem", color: "#64748b" }}>
              For calendar modifications or notifications, contact: <strong>Dean Academics (dean_academics@rguktrkv.ac.in)</strong>
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
