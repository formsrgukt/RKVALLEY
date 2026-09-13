import React from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";
import StudentsScrollspySidebar from "@/components/Common/StudentsScrollspySidebar";

export const metadata = {
  title: "Anti Ragging & Campus Safety | RGUKT RK Valley",
  description: "Official Anti-Ragging regulations, monitoring committees, UGC guidelines, Anti Women Harassment committee, and emergency helplines at RGUKT RK Valley campus.",
};

export default function AntiRaggingPage() {
  return (
    <div className="page-view-container">
      <Breadcrumb title="Anti Ragging" category="Students" />

      <div className="container" style={{ paddingBottom: "4rem" }}>
        <div className="page-content-layout">
          {/* Section Navigation Sidebar */}
          <StudentsScrollspySidebar currentPath="/students/antiragging" />

          {/* Main Body Content */}
          <article className="page-main-body">
            {/* Header Title Section */}
            <div style={{ borderBottom: "1px solid #e2e8f0", paddingBottom: "1.5rem", marginBottom: "2rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                <span
                  style={{
                    background: "rgba(220, 38, 38, 0.1)",
                    color: "#b91c1c",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "999px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                  }}
                >
                  Campus Safety &amp; Discipline
                </span>
                <span
                  style={{
                    background: "#fef2f2",
                    color: "#991b1b",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "999px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                  }}
                >
                  Zero Tolerance Policy
                </span>
              </div>
              <h1 style={{ color: "var(--primary-dark)", fontSize: "2.25rem", fontWeight: 800, margin: "0.25rem 0 0.75rem" }}>
                Anti Ragging
              </h1>
              <p style={{ fontSize: "1.05rem", color: "#475569", lineHeight: 1.6, margin: 0 }}>
                RGUKT RK Valley maintains a strictly enforced, zero-tolerance policy against ragging, harassment, and discrimination to provide a safe, respectful, and inclusive residential campus for every student.
              </p>
            </div>

            {/* UGC Regulations Official Document Card */}
            <section style={{ marginBottom: "2.5rem" }}>
              <div
                style={{
                  background: "#fff",
                  border: "1px solid #fed7aa",
                  borderLeft: "5px solid #ea580c",
                  borderRadius: "10px",
                  padding: "1.5rem",
                  boxShadow: "0 4px 14px rgba(234, 88, 12, 0.07)",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1.25rem" }}>
                  <div
                    style={{
                      background: "#fff7ed",
                      color: "#ea580c",
                      padding: "0.85rem",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", color: "#c2410c", letterSpacing: "0.05em", marginBottom: "0.35rem" }}>
                      Statutory Directive &amp; Guidelines
                    </div>
                    <a
                      href="https://www.rguktrkv.ac.in/pdfdoc/gazzetaug2010.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: 800,
                        color: "var(--primary-dark)",
                        textDecoration: "none",
                        lineHeight: 1.4,
                        display: "inline-block",
                        marginBottom: "0.5rem",
                      }}
                    >
                      UGC Regulation on curbing the menace of Ragging in Higher Educational Institutions ↗
                    </a>
                    <p style={{ fontSize: "0.95rem", color: "#475569", margin: "0 0 1rem 0", lineHeight: 1.6 }}>
                      Complete Gazette notification issued by the University Grants Commission specifying prohibition, prevention, institutional responsibilities, student undertakings, and legal consequences under the AP Prohibition of Ragging Act.
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                      <a
                        href="https://www.rguktrkv.ac.in/pdfdoc/gazzetaug2010.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          background: "#ea580c",
                          color: "#ffffff",
                          padding: "0.55rem 1.25rem",
                          borderRadius: "6px",
                          fontSize: "0.9rem",
                          fontWeight: 600,
                          textDecoration: "none",
                          boxShadow: "0 2px 6px rgba(234, 88, 12, 0.25)",
                        }}
                      >
                        Download UGC Gazette PDF
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="7 10 12 15 17 10"></polyline>
                          <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                      </a>
                      <a
                        href="https://www.antiragging.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.4rem",
                          background: "#f8fafc",
                          color: "#334155",
                          border: "1px solid #cbd5e1",
                          padding: "0.55rem 1.15rem",
                          borderRadius: "6px",
                          fontSize: "0.9rem",
                          fontWeight: 600,
                          textDecoration: "none",
                        }}
                      >
                        National Anti-Ragging Portal ↗
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Monitoring Committees Section */}
            <section style={{ marginBottom: "2.5rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "1.75rem" }}>
                {/* 1. Anti Ragging monitoring committee */}
                <div
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
                  }}
                >
                  <div style={{ background: "linear-gradient(135deg, #7a0019 0%, #9e1c36 100%)", padding: "1.35rem 1.5rem", color: "#ffffff" }}>
                    <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", opacity: 0.9, marginBottom: "0.3rem" }}>
                      Institutional Oversight
                    </div>
                    <h2 style={{ margin: 0, fontSize: "1.25rem", fontWeight: 800, color: "#ffffff", lineHeight: 1.4 }}>
                      Anti Ragging monitoring committee in RGUKT, RK Valley Campus
                    </h2>
                  </div>

                  <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1.35rem" }}>
                    {/* Chairman */}
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", paddingBottom: "1.25rem", borderBottom: "1px solid #f1f5f9" }}>
                      <div style={{ width: "40px", height: "40px", borderRadius: "8px", background: "rgba(122, 0, 25, 0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary-maroon)", flexShrink: 0, marginTop: "0.15rem" }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                      <div>
                        <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "var(--primary-maroon)" }}>
                          Apex Leadership
                        </div>
                        <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--primary-dark)" }}>
                          Chairman
                        </div>
                        <div style={{ fontSize: "0.88rem", color: "#64748b", marginTop: "0.25rem", lineHeight: 1.55 }}>
                          Administrative head providing overarching supervisory governance, regulatory adherence, and institutional sanction authority.
                        </div>
                      </div>
                    </div>

                    {/* Coordinator */}
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", paddingBottom: "1.25rem", borderBottom: "1px solid #f1f5f9" }}>
                      <div style={{ width: "40px", height: "40px", borderRadius: "8px", background: "rgba(122, 0, 25, 0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary-maroon)", flexShrink: 0, marginTop: "0.15rem" }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="8" x2="12" y2="12"></line>
                          <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                      </div>
                      <div>
                        <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "var(--primary-maroon)" }}>
                          Executive Operations
                        </div>
                        <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--primary-dark)" }}>
                          Coordinator
                        </div>
                        <div style={{ fontSize: "0.88rem", color: "#64748b", marginTop: "0.25rem", lineHeight: 1.55 }}>
                          Coordinates patrol rosters, mobilizes anti-ragging flying squads, receives student communications, and maintains case documentation.
                        </div>
                      </div>
                    </div>

                    {/* Committee Members */}
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                      <div style={{ width: "40px", height: "40px", borderRadius: "8px", background: "rgba(122, 0, 25, 0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary-maroon)", flexShrink: 0, marginTop: "0.15rem" }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                      </div>
                      <div>
                        <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "var(--primary-maroon)" }}>
                          Vigilance Squad &amp; Officers
                        </div>
                        <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--primary-dark)" }}>
                          Committee Members
                        </div>
                        <div style={{ fontSize: "0.88rem", color: "#64748b", marginTop: "0.25rem", lineHeight: 1.55 }}>
                          Comprising Senior Faculty Members, Dean of Student Welfare (DSW), Chief Wardens (Boys &amp; Girls), Security Personnel, and Student Representatives.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Anti Women Harassment committee */}
                <div
                  style={{
                    background: "#ffffff",
                    border: "1px solid #fbcfe8",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 4px 16px rgba(219, 39, 119, 0.05)",
                  }}
                >
                  <div style={{ background: "linear-gradient(135deg, #9d174d 0%, #be185d 100%)", padding: "1.35rem 1.5rem", color: "#ffffff" }}>
                    <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", opacity: 0.9, marginBottom: "0.3rem" }}>
                      Gender Equity &amp; Safety
                    </div>
                    <h2 style={{ margin: 0, fontSize: "1.25rem", fontWeight: 800, color: "#ffffff", lineHeight: 1.4 }}>
                      Anti Women Harassment committee in RGUKT, RK Valley Campus
                    </h2>
                  </div>

                  <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1.35rem" }}>
                    {/* Chairman */}
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", paddingBottom: "1.25rem", borderBottom: "1px solid #fdf2f8" }}>
                      <div style={{ width: "40px", height: "40px", borderRadius: "8px", background: "#fdf2f8", display: "flex", alignItems: "center", justifyContent: "center", color: "#be185d", flexShrink: 0, marginTop: "0.15rem" }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                      <div>
                        <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "#9d174d" }}>
                          Presiding Authority
                        </div>
                        <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--primary-dark)" }}>
                          Chairman
                        </div>
                        <div style={{ fontSize: "0.88rem", color: "#64748b", marginTop: "0.25rem", lineHeight: 1.55 }}>
                          Leads the Internal Complaints Committee (ICC), ensures adherence to POSH guidelines, and oversees equitable proceedings for female students and staff.
                        </div>
                      </div>
                    </div>

                    {/* Coordinator */}
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", paddingBottom: "1.25rem", borderBottom: "1px solid #fdf2f8" }}>
                      <div style={{ width: "40px", height: "40px", borderRadius: "8px", background: "#fdf2f8", display: "flex", alignItems: "center", justifyContent: "center", color: "#be185d", flexShrink: 0, marginTop: "0.15rem" }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 16v-4"></path>
                          <path d="M12 8h.01"></path>
                        </svg>
                      </div>
                      <div>
                        <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "#9d174d" }}>
                          Counsel &amp; Redressal
                        </div>
                        <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--primary-dark)" }}>
                          Coordinator
                        </div>
                        <div style={{ fontSize: "0.88rem", color: "#64748b", marginTop: "0.25rem", lineHeight: 1.55 }}>
                          Provides confidential guidance, processes grievances, coordinates self-defense and awareness workshops, and ensures psychological support.
                        </div>
                      </div>
                    </div>

                    {/* Committee Members */}
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                      <div style={{ width: "40px", height: "40px", borderRadius: "8px", background: "#fdf2f8", display: "flex", alignItems: "center", justifyContent: "center", color: "#be185d", flexShrink: 0, marginTop: "0.15rem" }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                      </div>
                      <div>
                        <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "#9d174d" }}>
                          Multi-Disciplinary Team
                        </div>
                        <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--primary-dark)" }}>
                          Committee Members
                        </div>
                        <div style={{ fontSize: "0.88rem", color: "#64748b", marginTop: "0.25rem", lineHeight: 1.55 }}>
                          Comprising Senior Women Faculty Members, Lady Medical Officers, Girls Hostel Wardens, Student Council Representatives, and NGO Legal Nominees.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Campus Preventive Mechanisms */}
            <section style={{ marginBottom: "2.5rem" }}>
              <h3 style={{ color: "var(--primary-dark)", fontSize: "1.45rem", fontWeight: 800, marginBottom: "1rem" }}>
                Campus Vigilance &amp; Preventive Measures
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
                <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", padding: "1.25rem", borderRadius: "8px" }}>
                  <h4 style={{ color: "var(--primary-maroon)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.4rem" }}>
                    24/7 Flying Squad Patrols
                  </h4>
                  <p style={{ fontSize: "0.88rem", color: "#64748b", margin: 0, lineHeight: 1.55 }}>
                    Faculty flying squads conduct surprise rounds in residential halls, cafeterias, transit roads, and sports arenas during peak evening and night hours.
                  </p>
                </div>
                <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", padding: "1.25rem", borderRadius: "8px" }}>
                  <h4 style={{ color: "var(--primary-maroon)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.4rem" }}>
                    CCTV Surveillance Network
                  </h4>
                  <p style={{ fontSize: "0.88rem", color: "#64748b", margin: 0, lineHeight: 1.55 }}>
                    Strategic high-definition cameras monitored centrally across entry gates, corridors, dining clusters, and common congregation areas.
                  </p>
                </div>
                <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", padding: "1.25rem", borderRadius: "8px" }}>
                  <h4 style={{ color: "var(--primary-maroon)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.4rem" }}>
                    Mandatory Student Undertakings
                  </h4>
                  <p style={{ fontSize: "0.88rem", color: "#64748b", margin: 0, lineHeight: 1.55 }}>
                    Signed anti-ragging affidavits by admitted students and their parents/guardians at the commencement of each academic semester.
                  </p>
                </div>
              </div>
            </section>

            {/* Emergency Contacts & Direct Redressal */}
            <section
              style={{
                background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
                border: "1px solid #cbd5e1",
                borderRadius: "12px",
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              <div>
                <h4 style={{ color: "var(--primary-dark)", fontSize: "1.15rem", fontWeight: 800, margin: "0 0 0.4rem 0" }}>
                  Emergency Helplines &amp; Confidential Support
                </h4>
                <p style={{ fontSize: "0.9rem", color: "#475569", margin: 0, lineHeight: 1.5 }}>
                  Any student experiencing or witnessing ragging or harassment may report immediately through any of the following channels:
                </p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem", fontSize: "0.9rem" }}>
                <div style={{ background: "#ffffff", padding: "1rem", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                  <strong style={{ color: "var(--primary-maroon)", display: "block", marginBottom: "0.25rem" }}>National Toll-Free Helpline</strong>
                  <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--primary-dark)" }}>1800-180-5522</span>
                  <div style={{ fontSize: "0.78rem", color: "#64748b", marginTop: "0.2rem" }}>24x7 Free Service (UGC)</div>
                </div>
                <div style={{ background: "#ffffff", padding: "1rem", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                  <strong style={{ color: "var(--primary-maroon)", display: "block", marginBottom: "0.25rem" }}>Dean, Student Welfare</strong>
                  <span style={{ fontWeight: 700, color: "var(--primary-dark)" }}>+91 85602 87842</span>
                  <div style={{ fontSize: "0.78rem", color: "#64748b", marginTop: "0.2rem" }}>dsw@rguktrkv.ac.in</div>
                </div>
                <div style={{ background: "#ffffff", padding: "1rem", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                  <strong style={{ color: "#be185d", display: "block", marginBottom: "0.25rem" }}>Women&apos;s Cell / ICC</strong>
                  <span style={{ fontWeight: 700, color: "var(--primary-dark)" }}>+91 85602 87850</span>
                  <div style={{ fontSize: "0.78rem", color: "#64748b", marginTop: "0.2rem" }}>icc@rguktrkv.ac.in</div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", paddingTop: "0.5rem" }}>
                <div style={{ fontSize: "0.88rem", color: "#64748b" }}>
                  Complaints can also be submitted confidentially online via the portal.
                </div>
                <Link
                  href="/grievance#antiragging"
                  style={{
                    background: "var(--primary-maroon)",
                    color: "#ffffff",
                    padding: "0.6rem 1.25rem",
                    borderRadius: "6px",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    textDecoration: "none",
                    boxShadow: "0 2px 4px rgba(122, 0, 25, 0.2)",
                  }}
                >
                  Submit Grievance Online →
                </Link>
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
}
