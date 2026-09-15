"use client";

import React, { useState, useEffect, useRef } from "react";
import { ACADEMIC_REGULATIONS_SECTIONS, AcademicSectionItem } from "@/data/academicCouncilData";

export interface AcademicRegulationsViewProps {
  id?: string;
  defaultSectionId?: string;
  className?: string;
}

export default function AcademicRegulationsView({
  id = "academic-regulations-view",
  defaultSectionId = "regulations",
  className = ""
}: AcademicRegulationsViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSectionId, setActiveSectionId] = useState<string>(defaultSectionId);
  const [activeDocTitle, setActiveDocTitle] = useState<string | null>("Academic Regulations (AY 2022-23 Onwards)");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const sectionParam = params.get("section") || params.get("tab");
      const docParam = params.get("doc");

      if (sectionParam && ACADEMIC_REGULATIONS_SECTIONS.some((s) => s.id === sectionParam)) {
        setActiveSectionId(sectionParam);
      } else if (window.location.hash) {
        const hash = window.location.hash.replace("#", "");
        if (ACADEMIC_REGULATIONS_SECTIONS.some((s) => s.id === hash)) {
          setActiveSectionId(hash);
        }
      }

      if (docParam) {
        setActiveDocTitle(docParam);
      }
    }
  }, []);

  useEffect(() => {
    if (defaultSectionId) {
      setActiveSectionId(defaultSectionId);
    }
  }, [defaultSectionId]);

  const activeSection: AcademicSectionItem =
    ACADEMIC_REGULATIONS_SECTIONS.find((s) => s.id === activeSectionId) ||
    ACADEMIC_REGULATIONS_SECTIONS[0];

  const selectedDocument = activeSection.documents?.find((d) => d.title === activeDocTitle);

  const resultRef = useRef<HTMLElement>(null);

  const handleDocClick = (docTitle: string) => {
    setActiveDocTitle(docTitle);
    // Smoothly scroll down to the regulation result section below
    setTimeout(() => {
      const targetElement = document.getElementById("regulation-details-result");
      if (targetElement) {
        const topOffset = 85;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - topOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 50);
  };

  const handleSectionClick = (secId: string) => {
    setActiveSectionId(secId);
    setActiveDocTitle(null);
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
    <div ref={containerRef} id={id} className={`academic-regulations-container ${className}`} style={{ width: "100%" }}>
      <div
        className="academic-regulations-layout"
        style={{
          display: "grid",
          gridTemplateColumns: "260px 1fr",
          gap: "2.5rem",
          alignItems: "start"
        }}
      >
        {/* LEFT SIDEBAR NAVIGATION */}
        <aside
          className="academic-regulations-sidebar"
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
            Academic Regulations
          </div>

          <nav aria-label="Regulations Navigation" style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            {ACADEMIC_REGULATIONS_SECTIONS.map((sec) => {
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

          <hr
            style={{
              border: "none",
              borderTop: "1px solid #e2e8f0",
              margin: "0.5rem 0 1.5rem 0"
            }}
          />

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

          {/* Intro Description */}
          {activeSection.description && activeSection.description.length > 0 && (
            <div style={{ marginBottom: "1.5rem", color: "#334155", lineHeight: 1.6, fontSize: "0.96rem" }}>
              {activeSection.description.map((para, pIdx) => (
                <p key={pIdx} style={{ margin: "0 0 0.75rem 0" }}>{para}</p>
              ))}
            </div>
          )}

          {/* Document Links */}
          {activeSection.documents && activeSection.documents.length > 0 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "2.25rem" }}>
              {activeSection.documents.map((doc, dIdx) => {
                const isDocSelected = activeDocTitle === doc.title;
                return (
                  <div key={dIdx}>
                    <button
                      type="button"
                      onClick={() => handleDocClick(doc.title)}
                      aria-label={`Select ${doc.title}`}
                      style={{
                        background: isDocSelected ? "rgba(128, 5, 23, 0.06)" : "transparent",
                        border: isDocSelected ? "1px solid rgba(128, 5, 23, 0.15)" : "1px solid transparent",
                        padding: "0.45rem 0.75rem",
                        borderRadius: "6px",
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        textAlign: "left",
                        transition: "all 0.2s ease"
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = "rgba(128, 5, 23, 0.08)";
                        const span = e.currentTarget.querySelector("span");
                        if (span) {
                          span.style.color = "#4a000f";
                          span.style.textDecoration = "underline";
                        }
                        const circle = e.currentTarget.querySelector("circle");
                        if (circle) circle.setAttribute("fill", "#4a000f");
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = isDocSelected ? "rgba(128, 5, 23, 0.06)" : "transparent";
                        const span = e.currentTarget.querySelector("span");
                        if (span) {
                          span.style.color = "#800517";
                          if (!isDocSelected) span.style.textDecoration = "none";
                        }
                        const circle = e.currentTarget.querySelector("circle");
                        if (circle) circle.setAttribute("fill", isDocSelected ? "#4a000f" : "#800517");
                      }}
                    >
                      {/* Circular Bullet Icon */}
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
                        <circle cx="10" cy="10" r="9" fill={isDocSelected ? "#4a000f" : "#800517"} />
                        <path
                          d="M8 6l5 4-5 4"
                          stroke="#ffffff"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      {/* Clean Link Title in Maroon */}
                      <span
                        style={{
                          color: "#800517",
                          fontSize: "1.05rem",
                          fontWeight: isDocSelected ? 700 : 500,
                          lineHeight: 1.45,
                          transition: "color 0.2s ease",
                          textDecoration: isDocSelected ? "underline" : "none"
                        }}
                      >
                        {doc.title}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>
          )}

          {/* Selected Document Content Card */}
          {selectedDocument && (
            <article
              ref={resultRef}
              id="regulation-details-result"
              style={{
                background: "#fafbfc",
                border: "1px solid #e2e8f0",
                borderRadius: "10px",
                padding: "2rem 2.25rem",
                boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                marginBottom: "2.5rem",
                scrollMarginTop: "90px",
                transition: "all 0.3s ease"
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "1rem",
                  borderBottom: "2px solid #800517",
                  paddingBottom: "1.25rem",
                  marginBottom: "1.75rem"
                }}
              >
                <div style={{ flex: "1 1 400px" }}>
                  <div
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      color: "#800517",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginBottom: "0.35rem"
                    }}
                  >
                    Rajiv Gandhi University of Knowledge Technologies - Andhra Pradesh
                  </div>
                  <h3
                    style={{
                      color: "var(--primary-dark)",
                      fontSize: "1.35rem",
                      fontWeight: 800,
                      margin: 0,
                      lineHeight: 1.3
                    }}
                  >
                    {selectedDocument.title}
                  </h3>
                </div>

                {/* Right Corner: View PDF Button */}
                <div style={{ flexShrink: 0 }}>
                  <a
                    href={selectedDocument.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    aria-label={`View PDF for ${selectedDocument.title}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.6rem 1.25rem",
                      background: "var(--primary-maroon)",
                      color: "#ffffff",
                      borderRadius: "6px",
                      fontSize: "0.88rem",
                      fontWeight: 600,
                      textDecoration: "none",
                      boxShadow: "0 2px 4px rgba(122, 0, 25, 0.15)",
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
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    View PDF
                  </a>
                </div>
              </div>

              {selectedDocument.subtitle && (
                <h4
                  style={{
                    color: "var(--primary-dark)",
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    margin: "0 0 1rem 0"
                  }}
                >
                  {selectedDocument.subtitle}
                </h4>
              )}

              {selectedDocument.description && selectedDocument.description.length > 0 && (
                <div style={{ marginBottom: "1.5rem" }}>
                  {selectedDocument.description.map((p, pIdx) => (
                    <p
                      key={pIdx}
                      style={{
                        color: "#334155",
                        fontSize: "0.96rem",
                        lineHeight: 1.65,
                        textAlign: "justify",
                        margin: "0 0 0.85rem 0"
                      }}
                    >
                      {p}
                    </p>
                  ))}
                </div>
              )}

              {selectedDocument.contentBlocks && selectedDocument.contentBlocks.length > 0 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem", marginTop: "1.25rem" }}>
                  {selectedDocument.contentBlocks.map((block, bIdx) => (
                    <div
                      key={bIdx}
                      style={{
                        background: "#ffffff",
                        border: "1px solid #e2e8f0",
                        borderRadius: "8px",
                        padding: "1.5rem 1.65rem"
                      }}
                    >
                      <h5
                        style={{
                          color: "var(--primary-dark)",
                          fontSize: "1.08rem",
                          fontWeight: 700,
                          margin: "0 0 0.75rem 0",
                          borderBottom: "1px solid #f1f5f9",
                          paddingBottom: "0.45rem"
                        }}
                      >
                        {block.heading}
                      </h5>

                      {block.text && (
                        <p style={{ color: "#475569", fontSize: "0.93rem", lineHeight: 1.65, margin: "0 0 0.75rem 0", textAlign: "justify" }}>
                          {block.text}
                        </p>
                      )}

                      {block.paragraphs && (
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                          {block.paragraphs.map((p, pIdx2) => (
                            <p key={pIdx2} style={{ color: "#475569", fontSize: "0.93rem", lineHeight: 1.65, margin: 0, textAlign: "justify" }}>
                              {p}
                            </p>
                          ))}
                        </div>
                      )}

                      {block.bullets && (
                        <ul style={{ margin: "0.5rem 0 0.75rem 1.25rem", padding: 0, color: "#475569", fontSize: "0.92rem", lineHeight: 1.6 }}>
                          {block.bullets.map((b, bIdx2) => (
                            <li key={bIdx2} style={{ marginBottom: "0.3rem" }}>{b}</li>
                          ))}
                        </ul>
                      )}

                      {block.subText && (
                        <p style={{ color: "#475569", fontSize: "0.92rem", lineHeight: 1.6, margin: "0.5rem 0 0.75rem 0", textAlign: "justify" }}>
                          {block.subText}
                        </p>
                      )}

                      {block.links && (
                        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "0.75rem" }}>
                          {block.links.map((linkItem, lIdx) => (
                            <a
                              key={lIdx}
                              href={linkItem.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.25rem",
                                background: "#ffffff",
                                color: "#0077b6",
                                border: "1px solid #cbd5e1",
                                padding: "0.25rem 0.65rem",
                                borderRadius: "4px",
                                fontSize: "0.82rem",
                                fontWeight: 700,
                                textDecoration: "none"
                              }}
                            >
                              <span>[{linkItem.label}]</span>
                              <span>↗</span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </article>
          )}
        </section>
      </div>
    </div>
  );
}
