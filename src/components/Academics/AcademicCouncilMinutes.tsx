"use client";

import React, { useState, useEffect, useRef } from "react";
import { ACADEMIC_COUNCIL_MINUTES_DATA, CouncilMeetingRecord } from "@/data/academicCouncilMinutesData";

export interface AcademicCouncilMinutesProps {
  id?: string;
  defaultMeetingId?: string;
  defaultSectionId?: string;
  className?: string;
}

export default function AcademicCouncilMinutes({
  id = "academic-council",
  defaultMeetingId = "2018",
  className = ""
}: AcademicCouncilMinutesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedMeetingId, setSelectedMeetingId] = useState<string>(defaultMeetingId);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const meetingParam = params.get("meeting") || params.get("year");
      if (meetingParam && ACADEMIC_COUNCIL_MINUTES_DATA[meetingParam]) {
        setSelectedMeetingId(meetingParam);
      } else if (window.location.hash) {
        const hash = window.location.hash.replace("#", "");
        if (ACADEMIC_COUNCIL_MINUTES_DATA[hash]) {
          setSelectedMeetingId(hash);
        }
      }
    }
  }, []);

  const currentMeeting: CouncilMeetingRecord =
    ACADEMIC_COUNCIL_MINUTES_DATA[selectedMeetingId] ||
    ACADEMIC_COUNCIL_MINUTES_DATA["2018"];

  const resultRef = useRef<HTMLElement>(null);

  const handleMeetingSelect = (meetingId: string) => {
    setSelectedMeetingId(meetingId);
    // Smoothly scroll down to the result section below
    setTimeout(() => {
      if (resultRef.current) {
        const topOffset = 85;
        const elementPosition = resultRef.current.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - topOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 40);
  };

  // Map meeting document links to their meeting data IDs
  const meetingLinks = [
    {
      id: "2018",
      title: "Minutes of Academic Council Meeting (09.01.2018 at RKV)"
    },
    {
      id: "2019",
      title: "Minutes of Academic Council Meeting (28.05.2019 at RGUKT HQ)"
    },
    {
      id: "2020",
      title: "Minutes of Academic Council Meeting (20.09.2020 at RKV)"
    }
  ];

  return (
    <div ref={containerRef} id={id} className={`academic-council-container ${className}`} style={{ width: "100%" }}>
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
        Academic Council Minutes
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
      <h3
        style={{
          color: "#004466",
          fontSize: "1.25rem",
          fontWeight: 700,
          margin: "0 0 1.25rem 0"
        }}
      >
        Meeting Minutes
      </h3>

      {/* Overview Description */}
      <p
        style={{
          color: "#334155",
          fontSize: "0.96rem",
          lineHeight: 1.65,
          textAlign: "justify",
          marginBottom: "1.75rem"
        }}
      >
        The Academic Council is the apex academic authority of Rajiv Gandhi University of Knowledge Technologies (RGUKT). It exercises general supervision over the academic policies, curricular frameworks, examination systems, and instructional standards across all university campuses.
      </p>

      {/* MEETING MINUTES LINKS LIST */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2.25rem" }}>
        {meetingLinks.map((item) => {
          const isSelected = selectedMeetingId === item.id;
          return (
            <div key={item.id}>
              <button
                type="button"
                onClick={() => handleMeetingSelect(item.id)}
                aria-label={`Select ${item.title}`}
                style={{
                  background: isSelected ? "rgba(128, 5, 23, 0.08)" : "transparent",
                  border: isSelected ? "1px solid rgba(128, 5, 23, 0.2)" : "1px solid transparent",
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
                  if (span) span.style.color = "#4a000f";
                  const circle = e.currentTarget.querySelector("circle");
                  if (circle) circle.setAttribute("fill", "#4a000f");
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = isSelected ? "rgba(128, 5, 23, 0.08)" : "transparent";
                  const span = e.currentTarget.querySelector("span");
                  if (span) span.style.color = isSelected ? "#4a000f" : "#800517";
                  const circle = e.currentTarget.querySelector("circle");
                  if (circle) circle.setAttribute("fill", isSelected ? "#4a000f" : "#800517");
                }}
              >
                {/* Circular Bullet Icon */}
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="10" cy="10" r="9" fill={isSelected ? "#4a000f" : "#800517"} />
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
                    color: isSelected ? "#4a000f" : "#800517",
                    fontSize: "1.05rem",
                    fontWeight: isSelected ? 700 : 600,
                    lineHeight: 1.45,
                    transition: "color 0.2s ease",
                    textDecoration: isSelected ? "underline" : "none"
                  }}
                >
                  {item.title}
                </span>
              </button>
            </div>
          );
        })}
      </div>

      {/* EXTRACTED MINUTES TEXT CARD (Styled with Our Page CSS - NO PDF viewer) */}
      <article
        ref={resultRef}
        id="meeting-details-result"
        style={{
          background: "#fafbfc",
          border: "1px solid #e2e8f0",
          borderRadius: "10px",
          padding: "2.5rem",
          boxShadow: "0 2px 8px rgba(0,0,0,0.03)"
        }}
      >
        {/* Meeting Header */}
        <div
          style={{
            borderBottom: "2px solid #800517",
            paddingBottom: "1.25rem",
            marginBottom: "1.75rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "1rem"
          }}
        >
          <div style={{ flex: "1 1 500px" }}>
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
                fontSize: "1.45rem",
                fontWeight: 800,
                margin: "0 0 0.85rem 0",
                lineHeight: 1.3
              }}
            >
              {currentMeeting.title}
            </h3>

            {/* Meeting Metadata Summary */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1.25rem",
                fontSize: "0.88rem",
                color: "#475569"
              }}
            >
              <div>
                <strong style={{ color: "#1e293b" }}>Meeting Date:</strong> {currentMeeting.meetingDate}
              </div>
              <div>
                <strong style={{ color: "#1e293b" }}>Time:</strong> {currentMeeting.meetingTime}
              </div>
              <div style={{ width: "100%" }}>
                <strong style={{ color: "#1e293b" }}>Venue:</strong> {currentMeeting.venue}
              </div>
            </div>
          </div>

          {/* Right Corner: View PDF Option for Selected Meeting */}
          {currentMeeting.pdfUrl && (
            <div style={{ flexShrink: 0 }}>
              <a
                href={currentMeeting.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                aria-label={`View PDF for ${currentMeeting.title}`}
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
          )}
        </div>

        {/* Meeting Opening Narrative */}
        <p style={{ fontSize: "0.96rem", color: "#334155", lineHeight: 1.6, marginBottom: "1.75rem" }}>
          {currentMeeting.intro}
        </p>

        {/* SECTION 1: MEMBERS PRESENT TABLE */}
        <div style={{ marginBottom: "2.25rem" }}>
          <h4
            style={{
              color: "var(--primary-dark)",
              fontSize: "1.15rem",
              fontWeight: 700,
              margin: "0 0 0.75rem 0"
            }}
          >
            Members Present:
          </h4>

          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.92rem",
                background: "#ffffff",
                borderRadius: "6px",
                overflow: "hidden",
                border: "1px solid #e2e8f0"
              }}
            >
              <thead>
                <tr style={{ background: "#f1f5f9" }}>
                  <th style={{ padding: "0.75rem 1rem", border: "1px solid #e2e8f0", textAlign: "left", width: "70px", color: "#1e293b", fontWeight: 700 }}>
                    S.No
                  </th>
                  <th style={{ padding: "0.75rem 1rem", border: "1px solid #e2e8f0", textAlign: "left", color: "#1e293b", fontWeight: 700 }}>
                    Name
                  </th>
                  <th style={{ padding: "0.75rem 1rem", border: "1px solid #e2e8f0", textAlign: "left", color: "#1e293b", fontWeight: 700 }}>
                    Designation
                  </th>
                  <th style={{ padding: "0.75rem 1rem", border: "1px solid #e2e8f0", textAlign: "left", color: "#1e293b", fontWeight: 700 }}>
                    Representation
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentMeeting.membersPresent.map((m, idx) => (
                  <tr key={idx} style={{ background: idx % 2 === 0 ? "#ffffff" : "#f8fafc" }}>
                    <td style={{ padding: "0.7rem 1rem", border: "1px solid #e2e8f0", color: "#64748b", fontWeight: 600 }}>
                      {m.sno}
                    </td>
                    <td style={{ padding: "0.7rem 1rem", border: "1px solid #e2e8f0", color: "#1e293b", fontWeight: 600 }}>
                      {m.name}
                    </td>
                    <td style={{ padding: "0.7rem 1rem", border: "1px solid #e2e8f0", color: "#334155" }}>
                      {m.designation}
                    </td>
                    <td style={{ padding: "0.7rem 1rem", border: "1px solid #e2e8f0", color: "#475569" }}>
                      <span
                        style={{
                          display: "inline-block",
                          padding: "0.15rem 0.55rem",
                          borderRadius: "4px",
                          fontSize: "0.82rem",
                          fontWeight: 600,
                          background: m.representation === "Chairman" ? "#fdf2f4" : m.representation.includes("Invitee") ? "#eff6ff" : "#f1f5f9",
                          color: m.representation === "Chairman" ? "#800517" : m.representation.includes("Invitee") ? "#1d4ed8" : "#334155"
                        }}
                      >
                        {m.representation}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* OPTIONAL: VIRTUAL MEMBERS JOINED (e.g. 2020 Skype meeting) */}
        {currentMeeting.virtualMembers && currentMeeting.virtualMembers.length > 0 && (
          <div style={{ marginBottom: "2.25rem" }}>
            <h4
              style={{
                color: "var(--primary-dark)",
                fontSize: "1.15rem",
                fontWeight: 700,
                margin: "0 0 0.75rem 0"
              }}
            >
              Members Joined the Meeting Through Skype Web Application:
            </h4>

            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "0.92rem",
                  background: "#ffffff",
                  borderRadius: "6px",
                  overflow: "hidden",
                  border: "1px solid #e2e8f0"
                }}
              >
                <thead>
                  <tr style={{ background: "#eff6ff" }}>
                    <th style={{ padding: "0.75rem 1rem", border: "1px solid #e2e8f0", textAlign: "left", width: "70px", color: "#1e3a8a", fontWeight: 700 }}>
                      S.No
                    </th>
                    <th style={{ padding: "0.75rem 1rem", border: "1px solid #e2e8f0", textAlign: "left", color: "#1e3a8a", fontWeight: 700 }}>
                      Name
                    </th>
                    <th style={{ padding: "0.75rem 1rem", border: "1px solid #e2e8f0", textAlign: "left", color: "#1e3a8a", fontWeight: 700 }}>
                      Designation
                    </th>
                    <th style={{ padding: "0.75rem 1rem", border: "1px solid #e2e8f0", textAlign: "left", color: "#1e3a8a", fontWeight: 700 }}>
                      Representation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentMeeting.virtualMembers.map((m, idx) => (
                    <tr key={idx} style={{ background: idx % 2 === 0 ? "#ffffff" : "#f8fafc" }}>
                      <td style={{ padding: "0.7rem 1rem", border: "1px solid #e2e8f0", color: "#64748b", fontWeight: 600 }}>
                        {m.sno}
                      </td>
                      <td style={{ padding: "0.7rem 1rem", border: "1px solid #e2e8f0", color: "#1e293b", fontWeight: 600 }}>
                        {m.name}
                      </td>
                      <td style={{ padding: "0.7rem 1rem", border: "1px solid #e2e8f0", color: "#334155" }}>
                        {m.designation}
                      </td>
                      <td style={{ padding: "0.7rem 1rem", border: "1px solid #e2e8f0", color: "#475569" }}>
                        <span
                          style={{
                            display: "inline-block",
                            padding: "0.15rem 0.55rem",
                            borderRadius: "4px",
                            fontSize: "0.82rem",
                            fontWeight: 600,
                            background: "#eff6ff",
                            color: "#1d4ed8"
                          }}
                        >
                          {m.representation}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* SECTION 2: ITEMS FOR CONSIDERATION & RESOLUTIONS */}
        <div style={{ marginBottom: "2rem" }}>
          <h4
            style={{
              color: "#800517",
              fontSize: "1.25rem",
              fontWeight: 700,
              borderBottom: "1px solid #e2e8f0",
              paddingBottom: "0.5rem",
              margin: "0 0 1.25rem 0"
            }}
          >
            Items for Consideration &amp; Resolutions
          </h4>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {currentMeeting.agendaItems.map((agenda, aIdx) => (
              <div
                key={aIdx}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                  padding: "1.5rem",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.02)"
                }}
              >
                {/* Item Title & Badge */}
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", flexWrap: "wrap", marginBottom: "0.6rem" }}>
                  <span
                    style={{
                      background: "#800517",
                      color: "#ffffff",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      padding: "0.2rem 0.6rem",
                      borderRadius: "4px",
                      flexShrink: 0
                    }}
                  >
                    {agenda.itemNumber}
                  </span>
                  <h5
                    style={{
                      color: "var(--primary-dark)",
                      fontSize: "1.08rem",
                      fontWeight: 700,
                      margin: 0,
                      lineHeight: 1.4
                    }}
                  >
                    {agenda.title}
                  </h5>
                </div>

                {/* Discussion Context (if present) */}
                {agenda.discussion && (
                  <p style={{ margin: "0.6rem 0", color: "#334155", fontSize: "0.94rem", lineHeight: 1.6 }}>
                    {agenda.discussion}
                  </p>
                )}

                {/* Structured Table (if present, e.g. Branch Allocation, Relative Grading, Sports Incentives) */}
                {agenda.table && (
                  <div style={{ margin: "0.85rem 0 1rem 0", overflowX: "auto" }}>
                    <table
                      style={{
                        width: "100%",
                        borderCollapse: "collapse",
                        fontSize: "0.88rem",
                        border: "1px solid #cbd5e1"
                      }}
                    >
                      <thead>
                        <tr style={{ background: "#f8fafc" }}>
                          {agenda.table.headers.map((hdr, hIdx) => (
                            <th
                              key={hIdx}
                              style={{
                                padding: "0.6rem 0.85rem",
                                border: "1px solid #cbd5e1",
                                textAlign: "left",
                                fontWeight: 700,
                                color: "#0f172a"
                              }}
                            >
                              {hdr}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {agenda.table.rows.map((row, rIdx) => (
                          <tr key={rIdx} style={{ background: rIdx % 2 === 0 ? "#ffffff" : "#f8fafc" }}>
                            {row.map((cell, cIdx) => (
                              <td
                                key={cIdx}
                                style={{
                                  padding: "0.55rem 0.85rem",
                                  border: "1px solid #cbd5e1",
                                  color: "#334155",
                                  fontWeight: cIdx === 0 ? 600 : 400
                                }}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Subpoints (if present) */}
                {agenda.subPoints && agenda.subPoints.length > 0 && (
                  <ul style={{ margin: "0.5rem 0 0.85rem 1.25rem", padding: 0, color: "#475569", fontSize: "0.9rem", lineHeight: 1.55 }}>
                    {agenda.subPoints.map((sp, spIdx) => (
                      <li key={spIdx} style={{ marginBottom: "0.3rem" }}>{sp}</li>
                    ))}
                  </ul>
                )}

                {/* Official Resolution Box */}
                <div
                  style={{
                    marginTop: "0.85rem",
                    background: "#f0fdf4",
                    borderLeft: "4px solid #16a34a",
                    padding: "0.85rem 1.15rem",
                    borderRadius: "4px"
                  }}
                >
                  <div style={{ fontSize: "0.82rem", fontWeight: 800, color: "#166534", textTransform: "uppercase", marginBottom: "0.2rem" }}>
                    Resolution:
                  </div>
                  <div style={{ color: "#14532d", fontSize: "0.93rem", lineHeight: 1.55, fontWeight: 500 }}>
                    {agenda.resolution}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* OTHER ITEMS (e.g. 2020 Centre for Teaching Learning) */}
        {currentMeeting.otherItems && currentMeeting.otherItems.length > 0 && (
          <div style={{ marginBottom: "2rem" }}>
            <h4
              style={{
                color: "var(--primary-dark)",
                fontSize: "1.15rem",
                fontWeight: 700,
                borderBottom: "1px solid #e2e8f0",
                paddingBottom: "0.5rem",
                margin: "0 0 1rem 0"
              }}
            >
              Other Items:
            </h4>

            {currentMeeting.otherItems.map((oi, oiIdx) => (
              <div
                key={oiIdx}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                  padding: "1.25rem"
                }}
              >
                <h5 style={{ color: "#800517", fontSize: "1.05rem", fontWeight: 700, margin: "0 0 0.5rem 0" }}>
                  {oi.title}
                </h5>
                <p style={{ margin: 0, color: "#334155", fontSize: "0.94rem", lineHeight: 1.6 }}>
                  {oi.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* SIGNATORIES & OFFICIAL RATIFICATION */}
        {currentMeeting.signatories && currentMeeting.signatories.length > 0 && (
          <div
            style={{
              borderTop: "1px solid #e2e8f0",
              paddingTop: "1.25rem",
              marginTop: "2rem"
            }}
          >
            <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase", marginBottom: "0.5rem" }}>
              Authenticated &amp; Signed By Academic Council:
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
              {currentMeeting.signatories.map((sig, sIdx) => (
                <span
                  key={sIdx}
                  style={{
                    background: "#f1f5f9",
                    color: "#334155",
                    padding: "0.3rem 0.75rem",
                    borderRadius: "5px",
                    fontSize: "0.84rem",
                    fontWeight: 600,
                    border: "1px solid #e2e8f0"
                  }}
                >
                  ✓ {sig}
                </span>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
