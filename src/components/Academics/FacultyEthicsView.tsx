"use client";

import React from "react";
import { FACULTY_ETHICS_DATA, EthicsSectionItem } from "@/data/facultyEthicsData";

export interface FacultyEthicsViewProps {
  id?: string;
  className?: string;
}

export default function FacultyEthicsView({
  id = "faculty-ethics",
  className = ""
}: FacultyEthicsViewProps) {
  const data = FACULTY_ETHICS_DATA;


  const handlePdfClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const pdfUrl = data.pdfUrl;
    const popup = window.open(pdfUrl, "PDFPopup", "width=950,height=850,scrollbars=yes,resizable=yes");
    if (!popup || popup.closed || typeof popup.closed === "undefined") {
      window.open(pdfUrl, "_blank");
    }
  };

  return (
    <div id={id} className={`faculty-ethics-container ${className}`} style={{ width: "100%" }}>
      {/* Header Banner - Primary Page Heading & Top-Right View Button */}
      <div
        style={{
          borderBottom: "2px solid #800517",
          paddingBottom: "1.75rem",
          marginBottom: "2rem"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "1.25rem"
          }}
        >
          {/* Main Heading Text Block */}
          <div style={{ flex: "1 1 500px", minWidth: 0 }}>
            <div
              style={{
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "#800517",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "0.45rem"
              }}
            >
              {data.university} • {data.state}
            </div>
            <h1
              style={{
                color: "var(--primary-dark)",
                fontSize: "2.15rem",
                fontWeight: 800,
                margin: "0 0 0.6rem 0",
                lineHeight: 1.25,
                fontFamily: "var(--font-heading, inherit)"
              }}
            >
              {data.title}
            </h1>
            <p style={{ fontSize: "1rem", color: "#475569", margin: 0, fontStyle: "italic", lineHeight: 1.6 }}>
              {data.governingCouncilApproval}
            </p>
          </div>

          {/* Top-Right View Button */}
          <div style={{ flexShrink: 0 }}>
            <button
              type="button"
              onClick={handlePdfClick}
              className="btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.65rem 1.35rem",
                background: "var(--primary-maroon)",
                color: "#ffffff",
                border: "none",
                borderRadius: "6px",
                fontWeight: 600,
                fontSize: "0.95rem",
                cursor: "pointer",
                boxShadow: "0 4px 6px -1px rgba(122, 0, 25, 0.2)",
                transition: "all 0.2s ease",
                whiteSpace: "nowrap"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#5a0010";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "var(--primary-maroon)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              View
            </button>
          </div>
        </div>
      </div>


      {/* Formatted Text Content for all 7 Sections */}
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {data.sections.map((sec: EthicsSectionItem) => (
          <article
            key={sec.id}
            id={`ethics-sec-${sec.id}`}
            style={{
              background: "#fafbfc",
              border: "1px solid #e2e8f0",
              borderRadius: "10px",
              padding: "2rem",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.02)"
            }}
          >
            {/* Section Heading */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <span
                style={{
                  background: "#800517",
                  color: "#ffffff",
                  fontSize: "0.88rem",
                  fontWeight: 800,
                  padding: "0.25rem 0.75rem",
                  borderRadius: "5px"
                }}
              >
                Section {sec.romanNumeral}
              </span>
              <h3
                style={{
                  color: "var(--primary-dark)",
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  margin: 0
                }}
              >
                {sec.romanNumeral}. {sec.title}
              </h3>
            </div>

            {/* Preamble (if present, e.g. for Section I) */}
            {sec.preamble && (
              <div
                style={{
                  background: "#f8fafc",
                  borderLeft: "4px solid #800517",
                  padding: "1rem 1.25rem",
                  borderRadius: "0 6px 6px 0",
                  marginBottom: "1.25rem",
                  fontSize: "0.96rem",
                  color: "#334155",
                  lineHeight: 1.7,
                  textAlign: "justify"
                }}
              >
                {sec.preamble}
              </div>
            )}

            {/* Prompt Line (e.g. "Teacher should:" or "Teachers should:") */}
            <div
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: "#1e293b",
                marginBottom: "0.85rem"
              }}
            >
              {sec.prompt}
            </div>

            {/* Clauses List */}
            <ol
              style={{
                margin: 0,
                paddingLeft: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.65rem",
                color: "#334155",
                fontSize: "0.95rem",
                lineHeight: 1.65,
                listStyleType: "lower-roman"
              }}
            >
              {sec.clauses.map((clause, cIdx) => (
                <li
                  key={cIdx}
                  style={{
                    paddingLeft: "0.35rem",
                    textAlign: "justify"
                  }}
                >
                  {clause}
                </li>
              ))}
            </ol>
          </article>
        ))}
      </div>
    </div>
  );
}
