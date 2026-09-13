"use client";

import React, { useState, useEffect } from "react";
import { ACADEMIC_AUDIT_DATA } from "@/data/academicAuditData";

export interface AcademicAuditReportsProps {
  id?: string;
  className?: string;
}

export default function AcademicAuditReports({
  id = "audit",
  className = ""
}: AcademicAuditReportsProps) {
  const [selectedYear, setSelectedYear] = useState<string>("2020-21");
  const report = ACADEMIC_AUDIT_DATA[selectedYear] || ACADEMIC_AUDIT_DATA["2020-21"];

  const handleYearClick = (yr: string) => {
    setSelectedYear(yr);
    if (typeof window !== "undefined") {
      history.replaceState(null, "", `#${yr}`);
    }
    // Smoothly scroll / move to the audit report result card
    setTimeout(() => {
      const targetElement = document.getElementById("audit-report-result");
      if (targetElement) {
        const topOffset = 85; // offset for sticky navbar
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - topOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 50);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      if (hash === "2020-21" || hash === "2021-22") {
        setSelectedYear(hash);
        setTimeout(() => {
          const target = document.getElementById("audit-report-result");
          if (target) {
            const topOffset = 85;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - topOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
          }
        }, 150);
      }
    }
  }, []);

  return (
    <div id={id} className={`academic-audit-reports-content ${className}`} style={{ width: "100%" }}>
      {/* Heading, Divider, and Clean Links (Full-Width Section) */}
      <h2
        style={{
          color: "#800517",
          fontSize: "1.65rem",
          fontWeight: 700,
          margin: "0 0 0.5rem 0",
          lineHeight: "1.25",
          fontFamily: "var(--font-heading, inherit)"
        }}
      >
        Academic Audit Reports
      </h2>

      <hr
        style={{
          border: "none",
          borderTop: "1px solid #e2e8f0",
          margin: "0.5rem 0 1.5rem 0"
        }}
      />

      {/* Report Links as shown in the original image */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.85rem",
          marginBottom: "2rem"
        }}
      >
        {/* 2020-21 Link */}
        <div>
          <button
            type="button"
            onClick={() => handleYearClick("2020-21")}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              color: selectedYear === "2020-21" ? "#800517" : "#0077b6",
              fontSize: "1.1rem",
              fontWeight: selectedYear === "2020-21" ? 700 : 500,
              cursor: "pointer",
              textAlign: "left",
              display: "inline-block",
              textDecoration: selectedYear === "2020-21" ? "underline" : "none",
              transition: "color 0.2s ease"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = "#004875";
              e.currentTarget.style.textDecoration = "underline";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = selectedYear === "2020-21" ? "#800517" : "#0077b6";
              if (selectedYear !== "2020-21") e.currentTarget.style.textDecoration = "none";
            }}
          >
            Academic Audit Report 2020-21
          </button>
        </div>

        {/* 2021-22 Link */}
        <div>
          <button
            type="button"
            onClick={() => handleYearClick("2021-22")}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              color: selectedYear === "2021-22" ? "#800517" : "#0077b6",
              fontSize: "1.1rem",
              fontWeight: selectedYear === "2021-22" ? 700 : 500,
              cursor: "pointer",
              textAlign: "left",
              display: "inline-block",
              textDecoration: selectedYear === "2021-22" ? "underline" : "none",
              transition: "color 0.2s ease"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = "#004875";
              e.currentTarget.style.textDecoration = "underline";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = selectedYear === "2021-22" ? "#800517" : "#0077b6";
              if (selectedYear !== "2021-22") e.currentTarget.style.textDecoration = "none";
            }}
          >
            Academic Audit Report 2021-22
          </button>
        </div>
      </div>

      {/* EXTRACTED TEXT SECTION (Full-Width Native Text with Website CSS, NO PDF format) */}
      <article
        id="audit-report-result"
        style={{
          background: "#fafbfc",
          border: "1px solid #e2e8f0",
          borderRadius: "10px",
          padding: "2.5rem",
          marginTop: "1.5rem",
          width: "100%",
          scrollMarginTop: "90px",
          transition: "all 0.3s ease"
        }}
      >
        {/* Active Selection Banner */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.5rem",
            background: "#fdf2f4",
            border: "1px solid #fecdd3",
            borderRadius: "6px",
            padding: "0.55rem 1rem",
            marginBottom: "1.5rem"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ fontSize: "0.95rem" }}>📋</span>
            <span style={{ fontSize: "0.85rem", color: "#800517", fontWeight: 700 }}>
              Viewing Results for Academic Audit Report {selectedYear}
            </span>
          </div>
          <span style={{ fontSize: "0.78rem", color: "#64748b" }}>
            Official External Committee Audit
          </span>
        </div>
        {/* Report Header Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "1rem",
            paddingBottom: "1.5rem",
            borderBottom: "2px solid #e2e8f0",
            marginBottom: "2rem"
          }}
        >
          <div>
            <span
              style={{
                display: "inline-block",
                fontSize: "0.75rem",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "#800517",
                background: "#fdf2f4",
                padding: "0.25rem 0.65rem",
                borderRadius: "4px",
                border: "1px solid #fecdd3",
                marginBottom: "0.5rem"
              }}
            >
              Academic Year {report.academicYear} • Official Audit
            </span>
            <h3
              style={{
                color: "var(--primary-dark)",
                fontSize: "1.6rem",
                fontWeight: 800,
                margin: 0,
                lineHeight: 1.3
              }}
            >
              {report.title}
            </h3>
          </div>

          {/* Download original document button */}
          <a
            href={report.pdfUrl}
            download={report.pdfFileName}
            className="btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.45rem",
              padding: "0.6rem 1.25rem",
              background: "var(--primary-maroon)",
              color: "#ffffff",
              borderRadius: "6px",
              fontSize: "0.85rem",
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: "0 2px 4px rgba(122, 0, 25, 0.15)",
              transition: "all 0.2s ease"
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download PDF ({report.pdfSize})
          </a>
        </div>

        {/* Committee Members Highlight Card (2 names per row with space on both sides) */}
        <div
          style={{
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            borderLeft: "5px solid var(--primary-maroon)",
            borderRadius: "8px",
            padding: "1.75rem 3rem",
            marginBottom: "2.5rem",
            boxShadow: "0 2px 4px rgba(0,0,0,0.02)"
          }}
        >
          <h4
            style={{
              color: "var(--primary-maroon)",
              fontSize: "1.15rem",
              fontWeight: 800,
              margin: "0 0 1.25rem 0"
            }}
          >
            {report.committeeTitle}
          </h4>
          <div className="committee-grid-2col">
            {report.committeeMembers.map((member, idx) => (
              <div key={idx} style={{ fontSize: "0.95rem", color: "#334155" }}>
                <div style={{ fontWeight: 700, color: "var(--primary-dark)", fontSize: "1rem" }}>
                  {member.name}
                </div>
                <div style={{ fontSize: "0.84rem", color: "#64748b", marginTop: "0.15rem" }}>
                  {member.designation} {member.role && `(${member.role})`}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Introduction Paragraph */}
        <div style={{ marginBottom: "2.5rem" }}>
          <p
            style={{
              fontSize: "1.02rem",
              color: "#334155",
              lineHeight: 1.8,
              margin: 0,
              fontStyle: "italic",
              background: "#ffffff",
              padding: "1.35rem 1.6rem",
              borderRadius: "8px",
              border: "1px solid #f1f5f9"
            }}
          >
            {report.introduction}
          </p>
        </div>

        {/* Report Sections Rendered in Full-Width Native HTML/CSS */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {report.sections.map((section, sIdx) => (
            <section
              key={sIdx}
              style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                padding: "2rem",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.02)"
              }}
            >
              <h4
                style={{
                  color: "var(--primary-maroon)",
                  fontSize: "1.3rem",
                  fontWeight: 800,
                  margin: "0 0 1.25rem 0",
                  borderBottom: "1px solid #f1f5f9",
                  paddingBottom: "0.65rem"
                }}
              >
                {section.title}
              </h4>

              {/* Paragraph Content */}
              {section.content &&
                section.content.map((para, pIdx) => (
                  <p
                    key={pIdx}
                    style={{
                      fontSize: "1rem",
                      color: "#334155",
                      lineHeight: 1.8,
                      marginBottom: pIdx === (section.content?.length ?? 1) - 1 ? 0 : "1rem"
                    }}
                  >
                    {para}
                  </p>
                ))}

              {/* Observations Box if present */}
              {section.observations && section.observations.length > 0 && (
                <div
                  style={{
                    marginTop: "1.5rem",
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderLeft: "4px solid #004466",
                    borderRadius: "6px",
                    padding: "1.15rem 1.4rem"
                  }}
                >
                  <h5
                    style={{
                      color: "#004466",
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      margin: "0 0 0.6rem 0",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em"
                    }}
                  >
                    Specific Observations of the Committee:
                  </h5>
                  <ul
                    style={{
                      margin: 0,
                      paddingLeft: "1.25rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                      color: "#334155",
                      fontSize: "0.95rem",
                      lineHeight: 1.65
                    }}
                  >
                    {section.observations.map((obs, oIdx) => (
                      <li key={oIdx}>{obs}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Recommendations Box if present */}
              {section.recommendations && section.recommendations.length > 0 && (
                <div
                  style={{
                    marginTop: "1.5rem",
                    background: "#fdf2f4",
                    border: "1px solid #fecdd3",
                    borderLeft: "4px solid var(--primary-maroon)",
                    borderRadius: "6px",
                    padding: "1.15rem 1.4rem"
                  }}
                >
                  <h5
                    style={{
                      color: "var(--primary-maroon)",
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      margin: "0 0 0.6rem 0",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em"
                    }}
                  >
                    Recommendations of the Committee:
                  </h5>
                  <ul
                    style={{
                      margin: 0,
                      paddingLeft: "1.25rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                      color: "#334155",
                      fontSize: "0.95rem",
                      lineHeight: 1.65
                    }}
                  >
                    {section.recommendations.map((rec, rIdx) => (
                      <li key={rIdx}>{rec}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Subsections if present */}
              {section.subsections && section.subsections.length > 0 && (
                <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  {section.subsections.map((sub, subIdx) => (
                    <div
                      key={subIdx}
                      style={{
                        background: "#f8fafc",
                        border: "1px solid #e2e8f0",
                        borderRadius: "6px",
                        padding: "1.25rem 1.5rem"
                      }}
                    >
                      <h5
                        style={{
                          color: "var(--primary-dark)",
                          fontSize: "1.05rem",
                          fontWeight: 700,
                          margin: "0 0 0.75rem 0"
                        }}
                      >
                        {sub.subtitle}
                      </h5>
                      {sub.bullets && (
                        <ul
                          style={{
                            margin: 0,
                            paddingLeft: "1.25rem",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.5rem",
                            color: "#334155",
                            fontSize: "0.95rem",
                            lineHeight: 1.65
                          }}
                        >
                          {sub.bullets.map((b, bIdx) => (
                            <li key={bIdx}>{b}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </article>
    </div>
  );
}
