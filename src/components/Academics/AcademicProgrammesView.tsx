"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ACADEMIC_PROGRAMMES_SECTIONS, AcademicSectionItem, AcademicContentBlock } from "@/data/academicCouncilData";

export interface AcademicProgrammesViewProps {
  id?: string;
  defaultSectionId?: string;
  className?: string;
}

export default function AcademicProgrammesView({
  id = "academic-programmes-view",
  defaultSectionId = "programmes",
  className = ""
}: AcademicProgrammesViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSectionId, setActiveSectionId] = useState<string>(defaultSectionId);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const sectionParam = params.get("section") || params.get("tab");

      if (sectionParam && ACADEMIC_PROGRAMMES_SECTIONS.some((s) => s.id === sectionParam)) {
        setActiveSectionId(sectionParam);
      } else if (window.location.hash) {
        const hash = window.location.hash.replace("#", "");
        if (ACADEMIC_PROGRAMMES_SECTIONS.some((s) => s.id === hash)) {
          setActiveSectionId(hash);
        } else if (hash === "ug" || hash === "ug-programme" || hash === "ug_prog") {
          setActiveSectionId("ug_prog");
        } else if (hash === "pg" || hash === "pg-programme" || hash === "pg_prog") {
          setActiveSectionId("pg_prog");
        } else if (hash === "summer" || hash === "summer-programs" || hash === "summerprograms") {
          setActiveSectionId("summer");
        } else if (hash === "programmes" || hash === "programs") {
          setActiveSectionId("programmes");
        }
      }
    }
  }, []);

  useEffect(() => {
    if (defaultSectionId) {
      setActiveSectionId(defaultSectionId);
    }
  }, [defaultSectionId]);

  const activeSection: AcademicSectionItem =
    ACADEMIC_PROGRAMMES_SECTIONS.find((s) => s.id === activeSectionId) ||
    ACADEMIC_PROGRAMMES_SECTIONS[0];

  const handleSectionClick = (secId: string) => {
    setActiveSectionId(secId);
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.top < 85) {
        window.scrollTo({
          top: window.scrollY + rect.top - 95,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <div ref={containerRef} id={id} className={`academic-programmes-container ${className}`} style={{ width: "100%" }}>
      <div
        className="academic-programmes-layout"
        style={{
          display: "grid",
          gridTemplateColumns: "260px 1fr",
          gap: "2.5rem",
          alignItems: "start"
        }}
      >
        {/* LEFT SIDEBAR NAVIGATION (Sticky Index) */}
        <aside
          className="academic-programmes-sidebar"
          style={{
            position: "sticky",
            top: "95px",
            alignSelf: "start",
            borderRight: "1px solid #e2e8f0",
            paddingRight: "1.75rem",
            maxHeight: "calc(100vh - 115px)",
            overflowY: "auto",
            scrollbarWidth: "thin",
            zIndex: 20
          }}
        >
          <div
            style={{
              fontSize: "0.8rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: "#64748b",
              marginBottom: "0.75rem",
              paddingLeft: "0.5rem"
            }}
          >
            Academic Sections
          </div>

          <nav aria-label="Academic Programmes Navigation" style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            {ACADEMIC_PROGRAMMES_SECTIONS.map((sec) => {
              const isActive = sec.id === activeSection.id;
              return (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => handleSectionClick(sec.id)}
                  style={{
                    background: isActive ? "#f8fafc" : "transparent",
                    border: "none",
                    borderLeft: isActive ? "3px solid #800517" : "3px solid transparent",
                    padding: "0.65rem 0.85rem",
                    textAlign: "left",
                    cursor: "pointer",
                    color: isActive ? "#800517" : "#003366",
                    fontSize: "0.98rem",
                    fontWeight: isActive ? 700 : 600,
                    borderRadius: "0 6px 6px 0",
                    transition: "all 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    lineHeight: 1.35
                  }}
                  onMouseOver={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "#800517";
                      e.currentTarget.style.background = "#f1f5f9";
                    }
                  }}
                  onMouseOut={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "#003366";
                      e.currentTarget.style.background = "transparent";
                    }
                  }}
                >
                  <span>{sec.label}</span>
                  {isActive && (
                    <span style={{ color: "#800517", fontSize: "0.85rem", fontWeight: 700 }}>•</span>
                  )}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* RIGHT CONTENT DISPLAY */}
        <section style={{ minWidth: 0 }}>
          {/* Main Title in Maroon */}
          <h2
            style={{
              color: "#800517",
              fontSize: "1.75rem",
              fontWeight: 700,
              margin: "0 0 0.5rem 0",
              lineHeight: 1.25,
              fontFamily: "var(--font-heading, inherit)"
            }}
          >
            {activeSection.title}
          </h2>

          {/* Thin Horizontal Rule */}
          <hr
            style={{
              border: "none",
              borderTop: "1px solid #e2e8f0",
              margin: "0.5rem 0 1.5rem 0"
            }}
          />

          {/* Subtitle / Section Subhead */}
          {activeSection.subtitle && (
            <h3
              style={{
                color: "#004466",
                fontSize: "1.25rem",
                fontWeight: 700,
                margin: "0 0 1.25rem 0"
              }}
            >
              {activeSection.subtitle}
            </h3>
          )}

          {/* Descriptive Paragraphs */}
          {activeSection.description && (
            <div style={{ marginBottom: "1.75rem" }}>
              {activeSection.description.map((desc, idx) => (
                <p
                  key={idx}
                  style={{
                    color: "#334155",
                    fontSize: "0.96rem",
                    lineHeight: 1.65,
                    textAlign: "justify",
                    marginBottom: "1rem"
                  }}
                >
                  {desc}
                </p>
              ))}
            </div>
          )}

          {/* Content Blocks */}
          {activeSection.contentBlocks && activeSection.contentBlocks.length > 0 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginTop: "1rem" }}>
              {activeSection.contentBlocks.map((block: AcademicContentBlock, bIdx: number) => (
                <div
                  key={bIdx}
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                    padding: "1.5rem 1.75rem",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.02)"
                  }}
                >
                  <h4
                    style={{
                      color: "var(--primary-dark)",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      margin: "0 0 0.75rem 0",
                      borderBottom: "1px solid #f1f5f9",
                      paddingBottom: "0.5rem"
                    }}
                  >
                    {block.heading}
                  </h4>

                  {block.text && (
                    <p
                      style={{
                        color: "#475569",
                        fontSize: "0.94rem",
                        lineHeight: 1.65,
                        margin: "0 0 0.75rem 0",
                        textAlign: "justify"
                      }}
                    >
                      {block.text}
                    </p>
                  )}

                  {block.paragraphs && (
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "0.75rem" }}>
                      {block.paragraphs.map((para, pIdx) => (
                        <p
                          key={pIdx}
                          style={{
                            color: "#475569",
                            fontSize: "0.94rem",
                            lineHeight: 1.65,
                            margin: 0,
                            textAlign: "justify"
                          }}
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  )}

                  {block.bullets && (
                    <ul
                      style={{
                        margin: "0.5rem 0 0.75rem 1.25rem",
                        padding: 0,
                        color: "#475569",
                        fontSize: "0.93rem",
                        lineHeight: 1.6
                      }}
                    >
                      {block.bullets.map((b, bIdx2) => (
                        <li key={bIdx2} style={{ marginBottom: "0.35rem" }}>
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}

                  {block.subText && (
                    <p
                      style={{
                        color: "#475569",
                        fontSize: "0.92rem",
                        lineHeight: 1.6,
                        margin: "0.5rem 0 0.75rem 0",
                        textAlign: "justify"
                      }}
                    >
                      {block.subText}
                    </p>
                  )}

                  {block.links && (
                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "0.75rem" }}>
                      {block.links.map((link, lIdx) => (
                        <a
                          key={lIdx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.25rem",
                            background: "#fdf2f4",
                            color: "#800517",
                            border: "1px solid #fecdd3",
                            padding: "0.25rem 0.65rem",
                            borderRadius: "4px",
                            fontSize: "0.82rem",
                            fontWeight: 700,
                            textDecoration: "none"
                          }}
                        >
                          <span>[{link.label}]</span>
                          <span style={{ fontSize: "0.7rem" }}>↗</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Bottom Card Linking to Academic Regulations and Downloads */}
          <div
            style={{
              marginTop: "2.5rem",
              padding: "1.5rem",
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem"
            }}
          >
            <div>
              <div style={{ fontWeight: 700, color: "var(--primary-dark)", fontSize: "1rem", marginBottom: "0.25rem" }}>
                Academic Regulations & Official Syllabi
              </div>
              <div style={{ color: "#64748b", fontSize: "0.85rem" }}>
                View complete rules of evaluation, 160 AICTE credit distributions, and grading criteria.
              </div>
            </div>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <Link
                href="/academics/academic-regulations"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  background: "#800517",
                  color: "#ffffff",
                  padding: "0.55rem 1.15rem",
                  borderRadius: "6px",
                  fontWeight: 700,
                  fontSize: "0.88rem",
                  textDecoration: "none"
                }}
              >
                <span>Academic Regulations</span>
                <span>→</span>
              </Link>
              <Link
                href="/curriculum"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  background: "#003366",
                  color: "#ffffff",
                  padding: "0.55rem 1.15rem",
                  borderRadius: "6px",
                  fontWeight: 700,
                  fontSize: "0.88rem",
                  textDecoration: "none"
                }}
              >
                <span>Curricula & Syllabi</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
