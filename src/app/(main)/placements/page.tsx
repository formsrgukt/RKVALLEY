"use client";

import React, { useState } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { RGUKT_DATA } from "@/data/rguktData";
import { useApp } from "@/context/AppContext";

export default function PlacementsPage() {
  const { openDocModal } = useApp();
  const [activeSection, setActiveSection] = useState("overview");
  const [studentsOpen, setStudentsOpen] = useState(false);
  const [campusPlacementsOpen, setCampusPlacementsOpen] = useState(false);

  const scrollTo = (id: string) => {
    if (id === "for-companies" || id === "students-profile" || id === "registration-process") {
      setActiveSection("recruiters");
    } else {
      setActiveSection(id);
    }
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  React.useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.replace("#", "");
      if (hash === "campus-placements" || hash === "summer-internship" || hash === "srp" || hash === "rpcp" || hash === "psp") {
        setStudentsOpen(true);
      }
      if (hash === "campus-placements" || hash === "srp" || hash === "rpcp" || hash === "psp") {
        setCampusPlacementsOpen(true);
      }
      if (hash) {
        setTimeout(() => {
          scrollTo(hash);
        }, 150);
      }
    }

    const trackedSectionIds = [
      "overview",
      "students",
      "campus-placements",
      "srp",
      "rpcp",
      "psp",
      "summer-internship",
      "recruiters",
      "for-companies",
      "students-profile",
      "registration-process",
      "contact"
    ];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 130;
      for (let i = trackedSectionIds.length - 1; i >= 0; i--) {
        const id = trackedSectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (scrollPos >= top) {
            if (id === "for-companies" || id === "students-profile" || id === "registration-process") {
              setActiveSection("recruiters");
            } else {
              setActiveSection(id);
            }
            if (id === "campus-placements" || id === "srp" || id === "rpcp" || id === "psp") {
              setStudentsOpen(true);
              setCampusPlacementsOpen(true);
            } else if (id === "summer-internship" || id === "students") {
              setStudentsOpen(true);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isStudentsActive =
    activeSection === "students" ||
    activeSection === "campus-placements" ||
    activeSection === "summer-internship" ||
    activeSection === "srp" ||
    activeSection === "rpcp" ||
    activeSection === "psp";

  const isCampusPlacementsActive =
    activeSection === "campus-placements" ||
    activeSection === "srp" ||
    activeSection === "rpcp" ||
    activeSection === "psp";

  const isRecruitersActive =
    activeSection === "recruiters" ||
    activeSection === "for-companies" ||
    activeSection === "students-profile" ||
    activeSection === "registration-process";

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
                  style={{
                    width: "100%",
                    textAlign: "left",
                    cursor: "pointer",
                    color: "var(--primary-maroon)",
                    fontWeight: activeSection === "overview" ? 700 : 500,
                  }}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setStudentsOpen((prev) => !prev);
                    scrollTo("students");
                  }}
                  className={`sidebar-link ${isStudentsActive ? "active" : ""}`}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: "var(--primary-maroon)",
                    fontWeight: isStudentsActive ? 700 : 600,
                    fontSize: "0.9rem",
                    padding: "0.5rem 0.75rem",
                    borderRadius: "6px",
                    transition: "all 0.2s ease",
                  }}
                  aria-expanded={studentsOpen}
                >
                  <span>Students</span>
                  <span
                    style={{
                      fontSize: "0.65rem",
                      display: "inline-block",
                      transform: studentsOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s",
                      color: "var(--primary-maroon)",
                    }}
                  >
                    ▼
                  </span>
                </button>
                {studentsOpen && (
                  <ul style={{ listStyle: "none", paddingLeft: "1rem", margin: "0.25rem 0", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                    <li>
                      <button
                        type="button"
                        onClick={() => {
                          setCampusPlacementsOpen((prev) => !prev);
                          scrollTo("campus-placements");
                        }}
                        className={`sidebar-link ${isCampusPlacementsActive ? "active" : ""}`}
                        style={{
                          width: "100%",
                          textAlign: "left",
                          color: "var(--primary-maroon)",
                          cursor: "pointer",
                          fontSize: "0.85rem",
                          padding: "0.4rem 0.6rem",
                          borderRadius: "6px",
                          fontWeight: isCampusPlacementsActive ? 700 : 600,
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          transition: "all 0.2s ease",
                        }}
                        aria-expanded={campusPlacementsOpen}
                      >
                        <span>Campus Placements</span>
                        <span
                          style={{
                            fontSize: "0.6rem",
                            color: "var(--primary-maroon)",
                            transform: campusPlacementsOpen ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.2s",
                          }}
                        >
                          ▼
                        </span>
                      </button>
                      {campusPlacementsOpen && (
                        <ul style={{ listStyle: "none", paddingLeft: "0.75rem", margin: "0.35rem 0 0.5rem", display: "flex", flexDirection: "column", gap: "0.35rem", borderLeft: "2px solid #e2e8f0" }}>
                          <li>
                            <button
                              type="button"
                              onClick={() => scrollTo("srp")}
                              className={`sidebar-sublink ${activeSection === "srp" ? "active" : ""}`}
                            >
                              Registration For Placements
                            </button>
                          </li>
                          <li>
                            <button
                              type="button"
                              onClick={() => scrollTo("rpcp")}
                              className={`sidebar-sublink ${activeSection === "rpcp" ? "active" : ""}`}
                            >
                              Registration for a Particular Company Placement Process
                            </button>
                          </li>
                          <li>
                            <button
                              type="button"
                              onClick={() => scrollTo("psp")}
                              className={`sidebar-sublink ${activeSection === "psp" ? "active" : ""}`}
                            >
                              Placement Selection Process
                            </button>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => scrollTo("summer-internship")}
                        className={`sidebar-link ${activeSection === "summer-internship" ? "active" : ""}`}
                        style={{
                          width: "100%",
                          textAlign: "left",
                          cursor: "pointer",
                          fontSize: "0.85rem",
                          padding: "0.4rem 0.6rem",
                          borderRadius: "6px",
                          color: "var(--primary-maroon)",
                          fontWeight: activeSection === "summer-internship" ? 700 : 500,
                          transition: "all 0.2s ease",
                        }}
                      >
                        Summer Internship
                      </button>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("recruiters")}
                  className={`sidebar-link ${isRecruitersActive ? "active" : ""}`}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    cursor: "pointer",
                    color: "var(--primary-maroon)",
                    fontWeight: isRecruitersActive ? 700 : 500,
                  }}
                >
                  Recruiters
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("contact")}
                  className={`sidebar-link ${activeSection === "contact" ? "active" : ""}`}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    cursor: "pointer",
                    color: "var(--primary-maroon)",
                    fontWeight: activeSection === "contact" ? 700 : 500,
                  }}
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

            </section>

            {/* Section 2: Students */}
            <section id="students" style={{ scrollMarginTop: "100px", marginBottom: "3.5rem" }}>
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
                  Students
                </span>
              </div>
              <h3 style={{ color: "var(--primary-dark)", fontSize: "1.65rem", fontWeight: 800, marginBottom: "0.75rem" }}>
                Students Career Development
              </h3>
              <p style={{ fontSize: "0.98rem", color: "#475569", lineHeight: 1.6, marginBottom: "2rem" }}>
                CDPC at RGUKT RK Valley equips students through structured programs in campus placements and summer internships, bridging academic excellence with industry requirements.
              </p>

              {/* Subsection: Campus Placements */}
              <div id="campus-placements" style={{ scrollMarginTop: "100px", marginBottom: "2.5rem", background: "#ffffff", padding: "2rem", borderRadius: "10px", border: "1px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                  <span style={{ background: "#e0f2fe", color: "#0369a1", padding: "0.2rem 0.6rem", borderRadius: "4px", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase" }}>
                    Placement Guidelines &amp; Process
                  </span>
                </div>
                <h4 style={{ color: "var(--primary-dark)", fontSize: "1.6rem", fontWeight: 800, marginBottom: "0.5rem" }}>
                  Campus Placements
                </h4>
                <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                  The Career Development &amp; Placement Cell (CDPC) at RGUKT RK Valley coordinates comprehensive training and on-campus recruitment drives for graduating engineers. Review the master registration process, company-specific application criteria, and placement selection code of conduct below.
                </p>

                {/* Quick Anchor Navigation */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    padding: "0.85rem 1rem",
                    background: "#f8fafc",
                    borderRadius: "8px",
                    border: "1px solid #e2e8f0",
                    marginBottom: "2rem",
                  }}
                >
                  <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--primary-maroon)", alignSelf: "center", marginRight: "0.5rem" }}>
                    Quick Jump:
                  </span>
                  <button
                    type="button"
                    onClick={() => scrollTo("srp")}
                    style={{
                      background: "#ffffff",
                      border: "1px solid #cbd5e1",
                      padding: "0.35rem 0.75rem",
                      borderRadius: "6px",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: "var(--primary-dark)",
                      cursor: "pointer",
                    }}
                  >
                    1. Master Registration Data
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollTo("rpcp")}
                    style={{
                      background: "#ffffff",
                      border: "1px solid #cbd5e1",
                      padding: "0.35rem 0.75rem",
                      borderRadius: "6px",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: "var(--primary-dark)",
                      cursor: "pointer",
                    }}
                  >
                    2. Company Placement Process
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollTo("psp")}
                    style={{
                      background: "#ffffff",
                      border: "1px solid #cbd5e1",
                      padding: "0.35rem 0.75rem",
                      borderRadius: "6px",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: "var(--primary-dark)",
                      cursor: "pointer",
                    }}
                  >
                    3. Selection Process &amp; Rules
                  </button>
                </div>

                {/* Part 1: Student Registration For Placements - Master Registration Data */}
                <div id="srp" style={{ scrollMarginTop: "100px", marginBottom: "2.5rem", borderTop: "2px solid #f1f5f9", paddingTop: "1.5rem" }}>
                  <div
                    style={{
                      border: "1px solid #e2e8f0",
                      borderRadius: "4px",
                      padding: "1.25rem 1.5rem",
                      background: "#ffffff",
                    }}
                  >
                    <div style={{ borderLeft: "4px solid #5cb85c", paddingLeft: "1.25rem" }}>
                      <h4 style={{ color: "#5cb85c", fontSize: "1.28rem", fontWeight: 600, margin: "0 0 1rem 0" }}>
                        Student Registration For Placements - Master Registration Data
                      </h4>

                      <ul style={{ paddingLeft: "1.25rem", margin: "0 0 1.25rem 0", display: "flex", flexDirection: "column", gap: "0.55rem", listStyleType: "disc" }}>
                        <li style={{ fontSize: "0.92rem", color: "#212529", lineHeight: 1.55 }}>
                          All the Undergraduate students who are interested in campus placements should register for participating in campus recruitment drives as per CDPC notificationat the end of third year of engineering (E3-S2) whereas M.Tech (Post Graduate) students need to register at the end of 2nd semester (usually in the month of April of every Academic Year). It is referred as master placement registration data.
                        </li>
                        <li style={{ fontSize: "0.92rem", color: "#212529", lineHeight: 1.55 }}>
                          <strong>Each student must register for placement before leaving the campus for summer internship.</strong>
                        </li>
                        <li style={{ fontSize: "0.92rem", color: "#212529", lineHeight: 1.55 }}>
                          Use Mozilla Firefox web browser for online registration.
                        </li>
                        <li style={{ fontSize: "0.92rem", color: "#212529", lineHeight: 1.55 }}>
                          The students can register with Career Development &amp; Placement Cell (CDPC) for campus placements in online mode through student login at the link provided.
                        </li>
                        <li style={{ fontSize: "0.92rem", color: "#212529", lineHeight: 1.55 }}>
                          To Login, Student may use same username/Login ID and Password that is given for other purposes.
                        </li>
                        <li style={{ fontSize: "0.92rem", color: "#212529", lineHeight: 1.55 }}>
                          Marks/grades secured should be entered correctly to the second decimal point (e.g: Marks: 75.74 not as 76.0 it should be 75.74 ; Grade: 7.36 not as 7.4, it should be 7.36).
                        </li>
                        <li style={{ fontSize: "0.92rem", color: "#212529", lineHeight: 1.55 }}>
                          <strong>Issue of grade sheet, announcement of results of remedial/ other exams, verification of academic credentials etc are not the responsibilities of campus CDPC. Students have to approach exam cell/ any other relevant authority for these.</strong>
                        </li>
                        <li style={{ fontSize: "0.92rem", color: "#212529", lineHeight: 1.55 }}>
                          Number of backlogs, as on date, should be mentioned correctly.
                        </li>
                        <li style={{ fontSize: "0.92rem", color: "#212529", lineHeight: 1.55 }}>
                          Students should fill up all data carefully and verify the entered data before final submission.
                        </li>
                        <li style={{ fontSize: "0.92rem", color: "#212529", lineHeight: 1.55 }}>
                          Any false information furnished will lead to disciplinary action.
                        </li>
                        <li style={{ fontSize: "0.92rem", color: "#212529", lineHeight: 1.55 }}>
                          After successful submission of information, students have to take print out of the registration form, sign it and submit to campus CDPC.
                        </li>
                        <li style={{ fontSize: "0.92rem", color: "#212529", lineHeight: 1.55 }}>
                          Students must also submit the documental proof (from exam cell) on B. Tech grade entered in the online registration along with hard copy of the registration form.
                        </li>
                        <li style={{ fontSize: "0.92rem", color: "#212529", lineHeight: 1.55 }}>
                          <strong>Without the submission of hard copy of registration form and documental proof on B.Tech grade to campus CDPC, registration is considered to be incomplete and such students will not be considered for placement process.</strong>
                        </li>
                        <li style={{ fontSize: "0.92rem", color: "#212529", lineHeight: 1.55 }}>
                          Once online registration &amp; hardcopy submission is done, it will not possible for resubmission or modification of the data. However, if any student wants to modify the data at later stage in view of improvement in CGPA, clearing off backlogs,incorrect details submitted, they should submit hard copy application along with proof of documents.
                        </li>
                        <li style={{ fontSize: "0.92rem", color: "#212529", lineHeight: 1.55 }}>
                          For any queries, students should send mail only to{" "}
                          <a href="mailto:cdpcsupport@rguktrkv.ac.in" style={{ color: "#0052a9", fontWeight: 700, textDecoration: "underline" }}>
                            cdpcsupport@rguktrkv.ac.in
                          </a>
                          ; but not to any other email id.
                        </li>
                      </ul>

                      <div
                        style={{
                          border: "2px solid #ffd427",
                          borderRadius: "14px",
                          padding: "0.85rem 1.25rem",
                          background: "#ffffff",
                          marginTop: "1.25rem",
                        }}
                      >
                        <p
                          style={{
                            margin: 0,
                            color: "#0052a9",
                            fontWeight: 700,
                            fontSize: "0.92rem",
                            lineHeight: 1.5,
                          }}
                        >
                          Only those students who have registered with the Campus Career Development &amp; Placement Cell (CDPC), RGUKT-RK Valley within the stipulated time are only eligible to participate in the placement process.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Part 2: Student Registration for a Particular Company Placement Process */}
                <div id="rpcp" style={{ scrollMarginTop: "100px", marginBottom: "2.5rem", borderTop: "2px solid #f1f5f9", paddingTop: "1.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                    <span style={{ background: "rgba(122, 0, 25, 0.08)", color: "var(--primary-maroon)", padding: "0.2rem 0.6rem", borderRadius: "4px", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase" }}>
                      Phase 2
                    </span>
                  </div>
                  <h5 style={{ color: "var(--primary-dark)", fontSize: "1.25rem", fontWeight: 800, marginBottom: "0.75rem" }}>
                    Student Registration for a Particular Company Placement Process
                  </h5>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.25rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                    {[
                      "Job Announcement (JA) will be posted on CDPC Web portal and also on campus CDPC notice board(s) on receiving the information from the company about campus/off campus visit.",
                      "Students are advised to visit CDPC website and campus CDPC notice boards regularly for job announcements (JA), updates and other information. No other mode of communication will be provided.",
                      "Students who have registered for placements earlier i.e. end of E3 S2 for B. Tech and 2nd semester for M.Tech should also apply for each company selection process against Job announcement (JA) of any company as notified by CDPC. Before applying, students are advised to go through the job description, company profile and other relevant information.",
                      "Students must apply within the stipulated time mentioned in the JA. No late submission would be entertained.",
                      "Students are advised to apply for a job in any organization only if he/she is eligible and interested in taking up a job. No withdrawal of candidature will be permitted.",
                      "List of students who have applied for a particular company on time in response to Job announcement (JA) will be sent to company for consideration and only short listed students by company and/or CDPC, as the case may be, would be permitted for process.",
                      "Short listing is generally done based on CGPA of the student considering grade up to E3 S1 or E3 S2 decided by campus CDPC.",
                    ].map((item, idx) => (
                      <li key={idx} style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.55 }}>
                        <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", padding: "1.25rem", borderRadius: "8px", marginTop: "1rem" }}>
                    <h6 style={{ color: "var(--primary-dark)", fontSize: "0.95rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                      Shortlisting Committee (Criteria Other than CGPA)
                    </h6>
                    <p style={{ fontSize: "0.85rem", color: "#64748b", marginBottom: "0.75rem" }}>
                      In case of short listing based on criteria other than CGPA, a committee consisting of following members would shortlist the required number of students for the drive:
                    </p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "0.5rem" }}>
                      {[
                        "Campus Placement Incharge (CPI)",
                        "Additional Campus placement Incharge (ACPI)",
                        "Placement officer (PO)",
                        "Head of the department/s of concern students or nominated by HOD of the department",
                        "Head of the department of English/Management or nominated by HOD of the department",
                      ].map((member, i) => (
                        <li key={i} style={{ background: "#ffffff", padding: "0.6rem 0.85rem", borderRadius: "6px", border: "1px solid #e2e8f0", fontSize: "0.85rem", color: "#1e293b", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                          <span style={{ color: "var(--accent-royal)", fontWeight: 700 }}>›</span>
                          <span>{member}</span>
                        </li>
                      ))}
                    </ul>
                    <p style={{ fontSize: "0.85rem", color: "#475569", marginTop: "0.75rem", fontStyle: "italic" }}>
                      * The short listing done by the committee is final and binding. Short listed students would be notified and students are advised to prepare for the campus selection process as per schedule given in the JA.
                    </p>
                  </div>
                </div>

                {/* Part 3: Placement Selection Process */}
                <div id="psp" style={{ scrollMarginTop: "100px", borderTop: "2px solid #f1f5f9", paddingTop: "1.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                    <span style={{ background: "rgba(122, 0, 25, 0.08)", color: "var(--primary-maroon)", padding: "0.2rem 0.6rem", borderRadius: "4px", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase" }}>
                      Phase 3
                    </span>
                  </div>
                  <h5 style={{ color: "var(--primary-dark)", fontSize: "1.35rem", fontWeight: 800, marginBottom: "1rem" }}>
                    Placement Selection Process
                  </h5>

                  {/* Pre - Placement Process */}
                  <div style={{ marginBottom: "1.75rem" }}>
                    <h6 style={{ color: "var(--primary-maroon)", fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.6rem" }}>
                      A. Pre - Placement Process
                    </h6>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.55rem" }}>
                      {[
                        "List of applications received from student on time and short listed by campus CDPC would be sent to company for consideration.",
                        "On hearing from the company, the final date of visiting the campus and time of each activity would be notified to the students and short listed candidates should comply with the selection procedure of the company.",
                        "Students should attend the placement activities as per notified time schedule. No late arrival to any placement activity is permitted.",
                        "Students must carry their valid identity card with them during entire campus placement selection process i.e. Pre-placement Talk (PPT), written test, group discussion, interviews etc and produce the same whenever demanded by the recruiting members, CDPC or any authorized member of RGUKT.",
                        "Students are advised to visit company website to know the job requirements. Any queries related to job or other matter must be clarified with the company officials during their visit to campus i.e. PPT. No direct communication with the company officials is permitted.",
                        "Students are not permitted to interact with the company official directly. Any queries must be clarified during the Pre-Placement Talk (PPT) itself. For any other doubts (if any) after PPT, they should bring it to the notice of the CDPC for necessary action.",
                        "Student should maintain discipline while attending pre placement talks (PPT), written test and interviews etc.",
                        "Dress code: Students, who are short listed for interviews (Group discussion/Personal Interview), should attend the process with proper formal dress on time. Boys are advised to wear shoes. If any student doesn't appear in decent formal dress, campus CDPC reserves the right to refuse the permission to attend the campus selection process.",
                        "Students should keep ready all documents well in advance and they should be in a position to produce on time.",
                        "Student should carry certificates in a proper file along with two passport size photographs and a copy of their latest resume for the interview process.",
                        "Students are permitted to clarify any of their doubts at any point of time with campus CDPC.",
                        "CPI/ACPI reserves the right to refuse any student from placement activity at any point of time if student does not follow any of the above procedures.",
                        "Disciplinary committee: Student must not involve in malpractice or impersonation in the placement process. If found, such students would have to abide to the decision of campus placement & internship disciplinary committee (CPIDC) that may include debarring from placement activity for entire year etc.",
                      ].map((item, idx) => (
                        <li key={idx} style={{ display: "flex", gap: "0.75rem", fontSize: "0.9rem", color: "#334155", lineHeight: 1.55 }}>
                          <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Post - Placement Process */}
                  <div style={{ marginBottom: "1.75rem" }}>
                    <h6 style={{ color: "var(--primary-maroon)", fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.6rem" }}>
                      B. Post - Placement Process
                    </h6>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.55rem" }}>
                      {[
                        "List of selected students obtained from company would be notified to students and also displayed on notice board of CDPC.",
                        "Companies would send offer letters of the students along with other information to campus CDPC. After receiving the offers letter by the selected candidates, they should follow the instructions given in the offer letter.",
                        "Any student who has applied or secured a job through off campus is not considered under CDPC placement process. Such students are advised to inform CDPC after their selection and voluntarily withdraw their candidature from placement for the benefit of other students.",
                        "One student one job offer is strictly followed. Student with job offer through CDPC will not be considered for other companies for placements.",
                        "If a student is not joining an organization under unavoidable circumstances, then the accepted job offer (original) must be surrendered to the CDPC.",
                        "If any student fails to comply with any of the above mentioned rules and regulations or found indulging in any act of indiscipline/misbehavior, he/she would be liable for strict disciplinary action, as per the university rules and regulations.",
                      ].map((item, idx) => (
                        <li key={idx} style={{ display: "flex", gap: "0.75rem", fontSize: "0.9rem", color: "#334155", lineHeight: 1.55 }}>
                          <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Procedure to be Followed When a Company Visits Other Campus of RGUKT */}
                  <div style={{ marginBottom: "1.75rem" }}>
                    <h6 style={{ color: "var(--primary-maroon)", fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.6rem" }}>
                      C. Procedure to be Followed When a Company Visits Other Campus of RGUKT For Recruitment / Another Place
                    </h6>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.55rem" }}>
                      {[
                        "Based on the request from company or understanding between campus CDPC and other campuses of RGUKT/other institutes, Campus recruitment drives of some of the companies may be conducted at the place where the company is located/other campuses of RGUKT/ other institutes. In such case, interested and short listed students should attend the recruitment drive at the specified location outside the campus.",
                        "Short listed candidates will have to undertake the journey at their risk to the other campus of RGUKT/ other place for this purpose. Expenses incurred for journey should be borne by the students and should not be claimed from the institute. Student should submit the undertaking form (Format CDPC/ Form IIa-for Individual student) for performing journey. If number of students likely to travel is more, then Format CDPC / Form IIb (for group of students) is to be used.",
                        "Campus CDPC will send a request to hosting campus CDPC for food and accommodation inside the hosting campus well in advance. It is expected that Hosting campus CDPC of RGUKT considers the request of our campus and make necessary arrangement for the stay (accommodation) of students.",
                        "In case of off - campus drives at other than RGUKT campus, campus CDPC team along with other faculty and staff members will accompany the students. Campus CDPC will also arrange for accommodation and travel at off campus drives to the possible extent.",
                        "Students should apply for station leaving/gate pass using Format CDPC/ Form III and they should obtain permission from (a) HOD of concern department (b) CDPC and (c) finally Director/ competent authority. Students should reach the host campus well in advance with minimum days of loss of class work.",
                        "Before leaving the campus, students should write the departure details in the register kept in campus CDPC. If any student fails to provide details in the register would not be considered for the drive.",
                        "Students are permitted to leave the campus for attending placement process at other campus only when they fulfill all the specified requirements i.e. eligibility and proper gate pass.",
                        "Students should report to campus CDPC of the host campus as soon as they arrive. They should fill up arrival details the register/Format CDPC form IV a available in the host campus CDPC.",
                        "Students must attend the recruitment process without fail.",
                        "Students should obtain permission to leave the campus after the recruitment process. They should use host station leaving / gate pass (Format CDPC/Form IV b) available in the host campus CDPC for obtaining permission to leave the host campus.",
                        "Student must return to the respective campus as soon as placement process is completed and furnish the arrival details in the register & Format CDPC Form IIa or Format CDPC Form II b against their name.",
                        "All the forms mentioned above are available with campus CDPC and Students should use these forms.",
                        "Violation of above procedure will attract disciplinary action.",
                      ].map((item, idx) => (
                        <li key={idx} style={{ display: "flex", gap: "0.75rem", fontSize: "0.9rem", color: "#334155", lineHeight: 1.55 }}>
                          <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Number of Attempts by Students */}
                  <div style={{ marginBottom: "1.75rem", background: "#f8fafc", padding: "1.25rem", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                    <h6 style={{ color: "var(--primary-dark)", fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                      D. Number of Attempts by Students for Placement Process
                    </h6>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {[
                        "For any drive that allows all eligible and interested students, there is no limit on number of attempts for the placement process until he/ she is selected by a particular company.",
                        "For a campus drive that permits limited number of students (where no. of students permitted to the drive is less than no. of student eligible and interested) it was decided to permit for three (03) companies so that it is possible to provide opportunity to large no. of students.",
                        "Students who have registered for the limited student company drive and got short listed, but did not attend the drive will be considered as attempted. However, student is permitted to withdraw the registration by submitted application for withdrawal within the stipulated time notified by CDPC and should obtain the permission from CPI/ACPI/placement officer well in advance.",
                      ].map((item, idx) => (
                        <li key={idx} style={{ display: "flex", gap: "0.75rem", fontSize: "0.9rem", color: "#334155", lineHeight: 1.55 }}>
                          <span style={{ color: "var(--accent-royal)", fontWeight: 700, flexShrink: 0 }}>✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Off Campus Opportunities & Career Development Activities */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem", marginBottom: "1.75rem" }}>
                    <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", padding: "1.25rem", borderRadius: "8px" }}>
                      <h6 style={{ color: "var(--primary-dark)", fontSize: "0.95rem", fontWeight: 700, marginBottom: "0.4rem" }}>
                        E. Off Campus Opportunities
                      </h6>
                      <p style={{ fontSize: "0.88rem", color: "#64748b", lineHeight: 1.55, margin: 0 }}>
                        Job announcements (off campus) will be posted on website (student login) and also on notice boards of CDPC and students are advised to make use of this information. Procedure decided by the campus CDPC should be followed for registration, travel for attending the drive, permission to leave the campus etc.
                      </p>
                    </div>
                    <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", padding: "1.25rem", borderRadius: "8px" }}>
                      <h6 style={{ color: "var(--primary-dark)", fontSize: "0.95rem", fontWeight: 700, marginBottom: "0.4rem" }}>
                        F. Career Development Activities
                      </h6>
                      <p style={{ fontSize: "0.88rem", color: "#64748b", lineHeight: 1.55, margin: 0 }}>
                        Information on career development activities will also be posted time to time on website (student login) for the benefit of the students. Students are advised to make use of this facility.
                      </p>
                    </div>
                  </div>

                  {/* Campus Placement and Internships Disciplinary Committee (CPIDC) */}
                  <div style={{ background: "#fff5f5", border: "1px solid #fed7d7", padding: "1.25rem", borderRadius: "8px", marginBottom: "2rem" }}>
                    <h6 style={{ color: "var(--primary-maroon)", fontSize: "1rem", fontWeight: 800, marginBottom: "0.5rem" }}>
                      Campus Placement and Internships Disciplinary Committee (CPIDC)
                    </h6>
                    <p style={{ fontSize: "0.86rem", color: "#742a2a", marginBottom: "0.75rem" }}>
                      Following are the members of the disciplinary committee for placement and internship activities:
                    </p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.4rem" }}>
                      {[
                        "Director",
                        "Administrative officer (AO)",
                        "Dean, Student affairs",
                        "Campus Placement Incharge (CPI)",
                        "Additional Campus Placement Incharge (ACPI)",
                        "Placement officer (PO)/APO",
                        "HOD of concern department / representative",
                      ].map((member, i) => (
                        <li key={i} style={{ background: "#ffffff", padding: "0.5rem 0.75rem", borderRadius: "6px", border: "1px solid #feb2b2", fontSize: "0.85rem", color: "#2d3748", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                          <span style={{ color: "var(--primary-maroon)", fontWeight: 700 }}>•</span>
                          <span>{member}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Training Roadmap & Competency Modules */}
                  <h5 style={{ color: "var(--primary-maroon)", fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.85rem" }}>
                    Training Roadmap &amp; Competency Modules
                  </h5>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                      gap: "1rem",
                      marginBottom: "1.5rem",
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
                        <h6 style={{ color: "var(--primary-dark)", fontSize: "0.95rem", fontWeight: 700, marginBottom: "0.35rem" }}>
                          {t.title}
                        </h6>
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
                </div>
              </div>

              {/* Subsection: Summer Internship */}
              <div id="summer-internship" style={{ scrollMarginTop: "100px", background: "#f8fafc", padding: "1.75rem", borderRadius: "10px", border: "1px solid #e2e8f0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                  <span style={{ background: "#fef3c7", color: "#92400e", padding: "0.2rem 0.6rem", borderRadius: "4px", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase" }}>
                    Internship Programs
                  </span>
                </div>
                <h4 style={{ color: "var(--primary-dark)", fontSize: "1.4rem", fontWeight: 800, marginBottom: "0.5rem" }}>
                  Summer Internship
                </h4>
                <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                  Practical experience is pivotal to technical education. The CDPC facilitates summer internships (8 to 10 weeks) and semester-long internships for pre-final (E3) and final-year (E4) students in premier multinational enterprises, high-growth startups, and national research labs.
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "1rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", padding: "1.15rem", borderRadius: "8px" }}>
                    <div style={{ fontWeight: 700, color: "var(--primary-dark)", marginBottom: "0.35rem", fontSize: "0.95rem" }}>Industry Internships</div>
                    <div style={{ fontSize: "0.85rem", color: "#64748b", lineHeight: 1.5 }}>
                      Work on real-world industrial projects with mentorship from senior corporate engineers and attractive monthly stipends.
                    </div>
                  </div>
                  <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", padding: "1.15rem", borderRadius: "8px" }}>
                    <div style={{ fontWeight: 700, color: "var(--primary-dark)", marginBottom: "0.35rem", fontSize: "0.95rem" }}>R&amp;D Fellowships</div>
                    <div style={{ fontSize: "0.85rem", color: "#64748b", lineHeight: 1.5 }}>
                      Summer research fellowships at premier national institutions including IITs, IISc Bangalore, CSIR labs, and ISRO centres.
                    </div>
                  </div>
                  <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", padding: "1.15rem", borderRadius: "8px" }}>
                    <div style={{ fontWeight: 700, color: "var(--primary-dark)", marginBottom: "0.35rem", fontSize: "0.95rem" }}>Academic Credits</div>
                    <div style={{ fontSize: "0.85rem", color: "#64748b", lineHeight: 1.5 }}>
                      Formal academic credits awarded following internship report evaluation, seminar presentation, and viva voce examination.
                    </div>
                  </div>
                </div>

                <div style={{ fontSize: "0.88rem", color: "#475569", lineHeight: 1.6, background: "#ffffff", padding: "1rem", borderRadius: "6px", borderLeft: "4px solid var(--accent-gold)" }}>
                  <strong>Guidelines for Students:</strong> Interested students must coordinate with their respective departmental CDPC faculty coordinators and submit an official No Objection Certificate (NOC) request prior to commencement of off-campus internships.
                </div>
              </div>
            </section>

            {/* Section 3: Recruiters */}
            <section id="recruiters" style={{ scrollMarginTop: "100px", marginBottom: "3.5rem" }}>
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
                Recruiters &amp; Companies
              </h3>
              <p style={{ fontSize: "0.98rem", color: "#475569", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                RGUKT RK Valley welcomes national and international corporations for on-campus, hybrid, and off-campus recruitment drives. Our graduates undergo rigorous 6-year continuous residential training in core engineering, software architecture, and practical laboratory problem-solving.
              </p>

              {/* For Companies Section Container */}
              <div
                id="for-companies"
                style={{
                  background: "#ffffff",
                  padding: "2rem",
                  borderRadius: "10px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                  marginBottom: "2.5rem",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "2px solid #f1f5f9", paddingBottom: "0.75rem", marginBottom: "1.5rem", flexWrap: "wrap", gap: "0.75rem" }}>
                  <h4 style={{ margin: 0, color: "var(--primary-dark)", fontSize: "1.3rem", fontWeight: 800 }}>
                    For Companies
                  </h4>
                  <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", flexWrap: "wrap" }}>
                    <a
                      href="#students-profile"
                      onClick={(e) => { e.preventDefault(); scrollTo("students-profile"); }}
                      style={{ fontSize: "0.85rem", color: "#0052a9", textDecoration: "underline", fontWeight: 600, cursor: "pointer" }}
                    >
                      Students Profile
                    </a>
                    <span style={{ color: "#cbd5e1" }}>•</span>
                    <a
                      href="#registration-process"
                      onClick={(e) => { e.preventDefault(); scrollTo("registration-process"); }}
                      style={{ fontSize: "0.85rem", color: "#0052a9", textDecoration: "underline", fontWeight: 600, cursor: "pointer" }}
                    >
                      Registration Process for Campus Placements
                    </a>
                  </div>
                </div>

                {/* 1. Students of RGUKT R.K.Valley */}
                <div id="students-profile" style={{ scrollMarginTop: "100px", marginBottom: "2.5rem" }}>
                  <h5
                    style={{
                      color: "var(--primary-dark)",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      marginBottom: "1rem",
                    }}
                  >
                    Students of RGUKT R.K.Valley :
                  </h5>

                  <ul style={{ paddingLeft: "1.35rem", listStyleType: "disc", lineHeight: 1.75, color: "#334155", fontSize: "0.93rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    <li>
                      Our students in the streams of <strong>Computer Science</strong>, <strong>Electronics &amp; Communications</strong>, <strong>Mechanical</strong>, <strong>Civil</strong>, <strong>Metallurgical &amp; Materials</strong> and <strong>Chemical Engineering</strong> are the best in technical expertise available in the region.
                    </li>
                    <li>
                      Alumni of our institute have been working at top MNCs like <strong>Amazon, Oracle, Qualcomm, INTEL, ADP, Thought Works, Power Grid, IBM, Infosys, Wipro, Cognizant, Aarvee Associate, BSCPL, Medha Servo, BMM Steels, Hetero Drugs, ITC etc.</strong> and have proven of a great value with their contribution to the respective organizations.
                    </li>
                    <li>
                      Our students constitute the <strong>top 1% meritorious</strong> from the state of Andhra Pradesh admitted at 10 + 2 Level for Six Year Course (2 Years of Pre-University Course and 4 Years of Engineering).
                    </li>
                    <li>
                      Salient Attributes like <strong>Excitement to learn, Hard Working, Adaptability</strong>, of our students makes them a very good fit for any of the organization.
                    </li>
                    <li>
                      The <strong>Long-Term Internship option</strong> in the curriculum enables our students to join the industry by the end of the Pre-Final year.
                    </li>
                  </ul>
                </div>

                {/* 2. Registration Process for Campus Placements */}
                <div id="registration-process" style={{ scrollMarginTop: "100px", borderTop: "2px solid #f1f5f9", paddingTop: "1.75rem" }}>
                  <h5
                    style={{
                      color: "var(--primary-dark)",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      marginBottom: "1rem",
                    }}
                  >
                    Registration Process for Campus Placements :
                  </h5>

                  <ul style={{ paddingLeft: "1.35rem", listStyleType: "disc", lineHeight: 1.75, color: "#334155", fontSize: "0.93rem", display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "1.5rem" }}>
                    <li>
                      The companies are always invited to recruit the students of the pre-final year or final year engineering students for the Intern positions with potential Pre-Placement offers or Full-Time positions.
                    </li>
                    <li>
                      The campus recruitment for the internships and placements usually commences from the <strong>1st September</strong> of every Academic Year.
                    </li>
                    <li>
                      Any potential company willing to recruit students of our institute can write to CDPC, RGUKT - R.K.Valley for the recruitments ({" "}
                      <a href="mailto:cpi@rguktrkv.ac.in" style={{ color: "#0052a9", fontWeight: 700, textDecoration: "underline" }}>cpi@rguktrkv.ac.in</a>,{" "}
                      <a href="mailto:po@rguktrkv.ac.in" style={{ color: "#0052a9", fontWeight: 700, textDecoration: "underline" }}>po@rguktrkv.ac.in</a>,{" "}
                      <a href="mailto:apo@rguktrkv.ac.in" style={{ color: "#0052a9", fontWeight: 700, textDecoration: "underline" }}>apo@rguktrkv.ac.in</a>{" "}
                      ) with the filled in Job Notification Form(JNF) available here.
                    </li>
                    <li>
                      The JNF will be notified to the students seeking the registrations from the eligible and interested students as per the eligibility criteria listed in JNF.
                    </li>
                    <li>
                      The registered list of students against the given JNF is shared with the respective company and a mutually convenient date will be finalized.
                    </li>
                    <li>
                      All the necessary arrangements like <strong>Accommodation, Local Transportation, Written Test, and Interview Panel Room arrangements</strong> will be facilitated by the CDPC, RGUKT-R.K.Valley as per the prior information received.
                    </li>
                    <li>
                      The companies are expected to release the results or offers at the earliest possible immediately after the completion of the campus recruitment drive.
                    </li>
                  </ul>

                  {/* Action card for JNF download */}
                  <div
                    style={{
                      background: "#f0fdf4",
                      border: "1px solid #bbf7d0",
                      borderRadius: "8px",
                      padding: "1.25rem 1.5rem",
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 700, color: "#166534", fontSize: "0.98rem" }}>
                        Corporate Invitation &amp; Job Notification Form (JNF)
                      </div>
                      <div style={{ fontSize: "0.85rem", color: "#15803d", marginTop: "0.25rem" }}>
                        Download the official JNF template, fill in requirements &amp; email to the CDPC placement cell.
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => openDocModal("Job Notification Form (JNF)", "Job_Notification_Form_JNF_RGUKT_RKV.pdf")}
                      style={{
                        background: "#16a34a",
                        color: "#ffffff",
                        border: "none",
                        padding: "0.6rem 1.15rem",
                        borderRadius: "6px",
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        boxShadow: "0 2px 4px rgba(22, 163, 74, 0.2)",
                      }}
                    >
                      <span>📥 Download JNF Form (PDF)</span>
                    </button>
                  </div>
                </div>
              </div>

              <h4 style={{ color: "var(--primary-dark)", fontSize: "1.15rem", fontWeight: 800, marginBottom: "1rem" }}>
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

