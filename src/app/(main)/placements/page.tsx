"use client";

import React, { useState } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { RGUKT_DATA } from "@/data/rguktData";
import { useApp } from "@/context/AppContext";

export default function PlacementsPage() {
  const { openDocModal } = useApp();
  const [activeSection, setActiveSection] = useState("overview");
  const [isStudentsHovered, setIsStudentsHovered] = useState(false);
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
              setCampusPlacementsOpen(true);
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
              <li
                style={{ position: "relative" }}
                onMouseEnter={() => setIsStudentsHovered(true)}
                onMouseLeave={() => setIsStudentsHovered(false)}
              >
                <button
                  type="button"
                  className={`sidebar-link ${isStudentsActive ? "active" : ""}`}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    cursor: "default",
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
                  aria-expanded={isStudentsHovered}
                >
                  <span>Students</span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transform: isStudentsHovered ? "translateX(3px)" : "translateX(0px)",
                      transition: "transform 0.2s",
                      color: "var(--primary-maroon)",
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </span>
                </button>
                <div
                  style={{
                    position: "absolute",
                    left: "100%",
                    top: "0",
                    marginLeft: "0.5rem",
                    zIndex: 50,
                    backgroundColor: "#ffffff",
                    borderRadius: "8px",
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                    border: "1px solid #e2e8f0",
                    width: "250px",
                    visibility: isStudentsHovered ? "visible" : "hidden",
                    opacity: isStudentsHovered ? 1 : 0,
                    transform: isStudentsHovered ? "translateX(0)" : "translateX(-10px)",
                    transition: "all 0.3s ease-in-out",
                    pointerEvents: isStudentsHovered ? "auto" : "none",
                  }}
                >
                  <ul style={{ listStyle: "none", padding: "0.5rem", display: "flex", flexDirection: "column", gap: "0.25rem", margin: 0 }}>
                    <li>
                      <button
                        type="button"
                        onClick={() => scrollTo("campus-placements")}
                        className={`sidebar-link ${isCampusPlacementsActive ? "active" : ""}`}
                        style={{
                          width: "100%",
                          textAlign: "left",
                          color: "var(--primary-maroon)",
                          cursor: "pointer",
                          fontSize: "0.85rem",
                          padding: "0.4rem 0.6rem",
                          borderRadius: "6px",
                          fontWeight: isCampusPlacementsActive ? 700 : 500,
                          transition: "all 0.2s ease",
                        }}
                      >
                        Campus Placements
                      </button>
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
                </div>
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
            </ul>
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



                {/* Part 1: Student Registration For Placements - Master Registration Data */}
                <div id="srp" style={{ scrollMarginTop: "100px", marginBottom: "2.5rem", borderTop: "2px solid #f1f5f9", paddingTop: "1.5rem" }}>
                  <h5 style={{ color: "var(--primary-dark)", fontSize: "1.25rem", fontWeight: 800, marginBottom: "0.75rem" }}>
                    Student Registration for Placements – Master Registration Data
                  </h5>

                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.25rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.55 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        All the Undergraduate students who are interested in campus placements should register for participating in campus recruitment drives as per CDPC notificationat the end of third year of engineering (E3-S2) whereas M.Tech (Post Graduate) students need to register at the end of 2nd semester (usually in the month of April of every Academic Year). It is referred as master placement registration data.
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.55 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        <strong>Each student must register for placement before leaving the campus for summer internship.</strong>
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.55 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        Use Mozilla Firefox web browser for online registration.
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.55 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        The students can register with Career Development &amp; Placement Cell (CDPC) for campus placements in online mode through student login at the link provided.
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.55 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        To Login, Student may use same username/Login ID and Password that is given for other purposes.
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.55 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        Marks/grades secured should be entered correctly to the second decimal point (e.g: Marks: 75.74 not as 76.0 it should be 75.74 ; Grade: 7.36 not as 7.4, it should be 7.36).
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.55 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        <strong>Issue of grade sheet, announcement of results of remedial/ other exams, verification of academic credentials etc are not the responsibilities of campus CDPC. Students have to approach exam cell/ any other relevant authority for these.</strong>
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.55 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        Number of backlogs, as on date, should be mentioned correctly.
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.55 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        Students should fill up all data carefully and verify the entered data before final submission.
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.55 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        Any false information furnished will lead to disciplinary action.
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.55 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        After successful submission of information, students have to take print out of the registration form, sign it and submit to campus CDPC.
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.55 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        Students must also submit the documental proof (from exam cell) on B. Tech grade entered in the online registration along with hard copy of the registration form.
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.55 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        <strong>Without the submission of hard copy of registration form and documental proof on B.Tech grade to campus CDPC, registration is considered to be incomplete and such students will not be considered for placement process.</strong>
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.55 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        Once online registration &amp; hardcopy submission is done, it will not possible for resubmission or modification of the data. However, if any student wants to modify the data at later stage in view of improvement in CGPA, clearing off backlogs,incorrect details submitted, they should submit hard copy application along with proof of documents.
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.55 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        For any queries, students should send mail only to{" "}
                        <a href="mailto:cdpcsupport@rguktrkv.ac.in" style={{ color: "#0052a9", fontWeight: 700, textDecoration: "underline" }}>
                          cdpcsupport@rguktrkv.ac.in
                        </a>
                        ; but not to any other email id.
                      </span>
                    </li>
                  </ul>

                  <div
                    style={{
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderLeft: "4px solid var(--primary-maroon)",
                      borderRadius: "8px",
                      padding: "1rem 1.25rem",
                      marginTop: "1.25rem",
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        color: "var(--primary-dark)",
                        fontWeight: 700,
                        fontSize: "0.92rem",
                        lineHeight: 1.5,
                      }}
                    >
                      Only those students who have registered with the Campus Career Development &amp; Placement Cell (CDPC), RGUKT-RK Valley within the stipulated time are only eligible to participate in the placement process.
                    </p>
                  </div>
                </div>

                {/* Part 2: Student Registration for a Particular Company Placement Process */}
                <div id="rpcp" style={{ scrollMarginTop: "100px", marginBottom: "2.5rem", borderTop: "2px solid #f1f5f9", paddingTop: "1.5rem" }}>
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
              <div
                id="summer-internship"
                style={{
                  scrollMarginTop: "100px",
                  borderTop: "3px solid #e2e8f0",
                  paddingTop: "2rem",
                  marginBottom: "3rem",
                }}
              >
                <h4 style={{ color: "var(--primary-dark)", fontSize: "1.45rem", fontWeight: 800, marginBottom: "1.25rem" }}>
                  Summer Internship Program
                </h4>

                {/* 1. Student Registration for Summer Internship Programme */}
                <div style={{ marginBottom: "2rem" }}>
                  <h5 style={{ color: "var(--primary-dark)", fontSize: "1.15rem", fontWeight: 800, marginBottom: "0.85rem" }}>
                    Student Registration for Summer Internship Programme
                  </h5>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        As per RGUKT, RK Valley curricula, all E3 (third year) students should undergo summer internship for the duration of <strong>08 weeks</strong> immediately after E3 S2 exams.
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        Campus CDPC will inform students about the actual date of commencement of summer internships well in advance (Usually, in the month of January in every Academic Year).
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <div style={{ flex: 1 }}>
                        <span>
                          Campus CDPC will conduct a brief introductory session to all E3 students along with department faculty &amp; HOD in the month of January and will inform students about:
                        </span>
                        <ul style={{ listStyle: "none", paddingLeft: "1.25rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                          <li style={{ display: "flex", gap: "0.5rem", fontSize: "0.9rem", color: "#475569", lineHeight: 1.5 }}>
                            <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>1.</span>
                            <span>Duration of summer internship</span>
                          </li>
                          <li style={{ display: "flex", gap: "0.5rem", fontSize: "0.9rem", color: "#475569", lineHeight: 1.5 }}>
                            <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>2.</span>
                            <span>Purpose of internship</span>
                          </li>
                          <li style={{ display: "flex", gap: "0.5rem", fontSize: "0.9rem", color: "#475569", lineHeight: 1.5 }}>
                            <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>3.</span>
                            <span>Type of organizations to be considered for summer internships</span>
                          </li>
                          <li style={{ display: "flex", gap: "0.5rem", fontSize: "0.9rem", color: "#475569", lineHeight: 1.5 }}>
                            <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>4.</span>
                            <span>Other relevant information that helps in choosing proper summer internship topic and organization.</span>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        It is to be noted that mere undergoing a training programme/ course in a particular organization is not considered as summer internship. The summer internship should be problem solving type.
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        All E3 students should register for summer internships by either online or hardcopy as informed by campus CDPC at the beginning of the E3 S2 course i.e. in January.
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        Students are encouraged to apply for the summer internship. Before applying they are advised to take the help of faculty members of the department. They can also consult campus CDPC.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* 2. Guidelines for Selection of Summer Internship Programme */}
                <div style={{ borderTop: "2px solid #f1f5f9", paddingTop: "1.5rem", marginBottom: "2rem" }}>
                  <h5 style={{ color: "var(--primary-dark)", fontSize: "1.15rem", fontWeight: 800, marginBottom: "0.85rem" }}>
                    Guidelines for Selection of Summer Internship Programme
                  </h5>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        Students should opt for a summer internship that would provide them to gain ample field knowledge in the relevant field of engineering such that theoretical knowledge gained the class can be applied to solve the practical/ field problem i.e. it should be problem solving summer internship.
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        Undergoing a training programme / Course at a particular organization for specified duration is <strong>NOT</strong> considered as summer internship. If any student undergoes such trainings during summer internships, those would be rejected. In such cases students have to repeat the internship for the specified duration as inform by the concern HOD.
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        However student can learn new tools for short duration that would help for solving the problem undertaken in the summer internship.
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        Students should take a challenging task, may be small portion, and apply the knowledge gained to solve it.
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        Summer internship can also involve data collection from different sources including generating experimental data, collection of data from field etc. Later on and analyzing the data to arrive at proper and meaningful conclusions.
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        Summer internship should be aimed at solving some of the problems of the society/ local region that should have practical applications and benefit the society.
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        Students should devote full <strong>08 weeks</strong> for summer internship. If any student undergoes internship duration is less than 08 weeks, such interns will not be considered.
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        Different central and state government organizations, CSIR labs, premier institutions like IITs and IIMs, DRDO, public sector undertaking organizations, top IT companies can be considered for summer internships.
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        Students of RGUKT are not permitted to undertake internships in RGUKT campuses. In house (RGUKT campuses) internships are not permitted.
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        While selecting such a topic, students are advised to consult faculty members of RGUKT.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* 3. Involvement of Dept in the Summer Internship Programme */}
                <div style={{ borderTop: "2px solid #f1f5f9", paddingTop: "1.5rem", marginBottom: "2rem" }}>
                  <h5 style={{ color: "var(--primary-dark)", fontSize: "1.15rem", fontWeight: 800, marginBottom: "0.85rem" }}>
                    Involvement of Dept in the Summer Internship Programme
                  </h5>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        Head of the department will allocate faculty members as advisors for all E3 students at the beginning of E3 S2 semester (January) for advising the students in selecting proper summer internship. List of students and concern faculty advisor for summer internship will be sent to campus CDPC at the end of January.
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        Campus CDPC and head of the department willfinalize the internship organizations to each of the registered students.
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        Faculty members will visit some of the organizations where students are undergoing summer internship and meet students and supervisors and discuss about the internship topic and help the students.
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        HOD will constitute Summer internship evaluation boards consisting of department faculty members that includes one faculty from other department. The evaluation board will involve in the evaluation process. Board can take decision to reject the student summer internship if it doesn&apos;t meet the requirements of summer internships. Such students have to repeat the summer internship.
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        HOD will send the student summer internship details in tabular form (CDPC/ Annexure -II) to campus CDPC as soon as the evaluation process is completed.
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        List of students who should repeat the summer internships will be informed to exam cell as well as to campus CDPC.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* 4. Arrangement of Summer Internships by CDPC */}
                <div style={{ borderTop: "2px solid #f1f5f9", paddingTop: "1.5rem", marginBottom: "2rem" }}>
                  <h5 style={{ color: "var(--primary-dark)", fontSize: "1.15rem", fontWeight: 800, marginBottom: "0.85rem" }}>
                    Arrangement of Summer Internships by CDPC
                  </h5>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        Based on the student registration for summer internship and requirement, campus CDPC would approach different organizations for summer internship and inform the students for registration.
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        A student who opts for summer internship through campus CDPC should take up the internship and report to assigned organization on the specified date.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* 5. Reporting Procedure for Summer Internship Programme */}
                <div style={{ borderTop: "2px solid #f1f5f9", paddingTop: "1.5rem", marginBottom: "2rem" }}>
                  <h5 style={{ color: "var(--primary-dark)", fontSize: "1.15rem", fontWeight: 800, marginBottom: "0.85rem" }}>
                    Reporting Procedure for Summer Internship Programme
                  </h5>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        Based on the student registration for summer internship and requirement, campus CDPC would approach different organizations for summer internship and inform the students for registration.
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        A student who opts for summer internship through campus CDPC should take up the internship and report to assigned organization on the specified date.
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        Students should submit the details such as name, ID No, branch, email ID, mobile no, organization where he/she would undergo training, date of commencement of summer internship and date of completion, name of the supervisor (if already assigned) and contact details to campus CDPC before leaving the campus after E3 S2 exams.
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        Students, who got internships through either CDPC or other sources, should report to the respective organization on the date given to them. No late reporting is permitted.
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <div style={{ flex: 1 }}>
                        <span>While reporting to the organization, student should carry:</span>
                        <ul style={{ listStyle: "none", paddingLeft: "1.25rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                          <li style={{ display: "flex", gap: "0.5rem", fontSize: "0.9rem", color: "#475569", lineHeight: 1.5 }}>
                            <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>1.</span>
                            <span>College Identity card</span>
                          </li>
                          <li style={{ display: "flex", gap: "0.5rem", fontSize: "0.9rem", color: "#475569", lineHeight: 1.5 }}>
                            <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>2.</span>
                            <span>Internship allotment letter (if available)</span>
                          </li>
                          <li style={{ display: "flex", gap: "0.5rem", fontSize: "0.9rem", color: "#475569", lineHeight: 1.5 }}>
                            <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>3.</span>
                            <span>Any other documents as informed by the organization.</span>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* 6. After Reporting to Organization for Summer Internship */}
                <div style={{ borderTop: "2px solid #f1f5f9", paddingTop: "1.5rem", marginBottom: "2rem" }}>
                  <h5 style={{ color: "var(--primary-dark)", fontSize: "1.15rem", fontWeight: 800, marginBottom: "0.85rem" }}>
                    After Reporting to Organization for Summer Internship
                  </h5>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        As soon student reports to the organization, every individual should get a supervisor/Guide/advisor for guiding the summer internship.
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        Each student should register for summer internship reporting details through online at the link provided by the CDPC (Name, ID No, branch, mobile no, email ID, place of internship, location, date of reporting to internship, title of the internship, supervisor name, contact number etc).
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        After certain period i.e. 08 weeks before college reopens for E4 S1, the link will be deactivated. Late registration is <strong>NOT PERMITTED</strong>.
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        If any student fails to register within the date mentioned, he/she will not be considered for evaluation of internship.
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        In case of any problem while registering through online link/ accessing the link / any other problem, you should contact campus CDPC through email ({" "}
                        <a href="mailto:cdpcsupport@rguktrkv.ac.in" style={{ color: "#0052a9", fontWeight: 700, textDecoration: "underline" }}>
                          cdpcsupport@rguktrkv.ac.in
                        </a>{" "}
                        ).
                      </span>
                    </li>
                  </ul>
                </div>

                {/* 7. During Summer Internship Programme */}
                <div style={{ borderTop: "2px solid #f1f5f9", paddingTop: "1.5rem" }}>
                  <h5 style={{ color: "var(--primary-dark)", fontSize: "1.15rem", fontWeight: 800, marginBottom: "0.85rem" }}>
                    During Summer Internship Programme
                  </h5>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <div style={{ flex: 1 }}>
                        <span>During 08 week of summer internship, students are expected to undergo the following:</span>
                        <ul style={{ listStyle: "none", paddingLeft: "1.25rem", marginTop: "0.5rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                          <li style={{ display: "flex", gap: "0.5rem", fontSize: "0.9rem", color: "#475569", lineHeight: 1.5 }}>
                            <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>1.</span>
                            <span>Brief training / some introduction/ training of software etc related to the topic that is assigned.</span>
                          </li>
                          <li style={{ display: "flex", gap: "0.5rem", fontSize: "0.9rem", color: "#475569", lineHeight: 1.5 }}>
                            <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>2.</span>
                            <span>Problem solving (request for a problem from supervisor and solve it, else student should choose a proper problem with the help of faculty / others and solve it).</span>
                          </li>
                          <li style={{ display: "flex", gap: "0.5rem", fontSize: "0.9rem", color: "#475569", lineHeight: 1.5 }}>
                            <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>3.</span>
                            <span>Prepare a report (as per B Tech project thesis) on the work done at the last part of summer internship. Report should contain: (i) introduction to the problem, (ii) objectives of the work, (iii) literature, (iv) data, (v) analysis and (vi) discussions and conclusions.</span>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        At the last part of summer internship, student should approach supervisor/ guide and request him/her to correct summer internship report.
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        Student should fill up the details PART- A of the Evaluation sheet (CDPC/ Annexure III) of the summer internship and hand it over the form to supervisor /guide and request him/her to fill up Part-B of the sheet.
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        Supervisor should be requested to post the evaluation report to respective branch coordinator of the campus. Student should provide the address of your branch coordinator (Part-C of CDPC/Annexure III).
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        Students should not carry the sheet of evaluation; it should be posted to HOD/branch coordinator.
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        Students should report to campus on the day of reopening along with summer internship report and submit a supervisor&apos;s signed copy of the report to the branch coordinator.
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        Student should maintain at most discipline during entire summer internship duration and they should be punctual to the work.
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        While working in the workshop/laboratories, students should not operate any instrument without supervisor&apos;s permission.
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        Students should take care of their health and safety. They should move in group not as individual. Use of caps during sunlight, drinking of adequate portable water, eating of seasonal fruits and proper food are some of the points to be kept in mind.
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        Students should not leave the organization without supervisor&apos;s permission. The whereabouts of individual students should be known to the supervisor/guide.
                      </span>
                    </li>
                    <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.92rem", color: "#334155", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--primary-maroon)", fontWeight: 700, flexShrink: 0 }}>•</span>
                      <span>
                        For any problem faced by the students during summer internship duration, they are advised to contact Faculty of RGUKT or campus CDPC.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3: Recruiters */}
            <section id="recruiters" style={{ scrollMarginTop: "100px", marginBottom: "3.5rem" }}>
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
                <div style={{ borderBottom: "2px solid #f1f5f9", paddingBottom: "0.75rem", marginBottom: "1.5rem" }}>
                  <h4 style={{ margin: 0, color: "var(--primary-dark)", fontSize: "1.3rem", fontWeight: 800 }}>
                    For Companies
                  </h4>
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
                      ) with the filled in Job Notification Form(JNF) available{" "}
                      <button
                        type="button"
                        onClick={() => openDocModal("Job Notification Form (JNF)", "Job_Notification_Form_JNF_RGUKT_RKV.pdf")}
                        style={{
                          background: "none",
                          border: "none",
                          padding: 0,
                          color: "#0052a9",
                          fontWeight: 700,
                          textDecoration: "underline",
                          cursor: "pointer",
                          font: "inherit",
                        }}
                      >
                        here
                      </button>
                      .
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
                </div>
              </div>

            </section>

            {/* Section 4: Contact Us */}
            <section id="contact" style={{ scrollMarginTop: "100px", marginBottom: "3rem" }}>
              <h3 style={{ color: "var(--primary-dark)", fontSize: "1.5rem", fontWeight: 800, marginBottom: "0.35rem" }}>
                Contact Us
              </h3>
              <h4 style={{ color: "var(--primary-maroon)", fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.75rem" }}>
                Contacts of Career Development and Placement Cell Office
              </h4>
              <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                For recruitment drive schedules, campus visits, corporate MOUs, or student intern hiring, get in touch with the Career Development &amp; Placement Cell officers below:
              </p>

              <style>{`
                @media (max-width: 640px) {
                  .cdpc-contacts-2x2-grid {
                    grid-template-columns: 1fr !important;
                  }
                }
              `}</style>

              <div
                className="cdpc-contacts-2x2-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                  gap: "1.25rem",
                  marginBottom: "1.5rem",
                }}
              >
                {/* 1. Mr. Satyanandaram N */}
                <div
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "10px",
                    padding: "1.25rem 1.35rem",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                    display: "flex",
                    gap: "1.25rem",
                    alignItems: "flex-start",
                  }}
                >
                  <img
                    src="/images/placementcoordinators/2082209.jpg"
                    alt="Mr. Satyanandaram N"
                    style={{
                      width: "90px",
                      height: "110px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      border: "1px solid #cbd5e1",
                      boxShadow: "0 2px 5px rgba(0,0,0,0.06)",
                      flexShrink: 0,
                    }}
                  />
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "110px" }}>
                    <div>
                      <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "var(--primary-maroon)", marginBottom: "0.25rem" }}>
                        Faculty Coordinator
                      </div>
                      <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--primary-dark)", marginBottom: "0.3rem" }}>
                        Mr. Satyanandaram N
                      </div>
                      <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "#334155", lineHeight: 1.45 }}>
                        Faculty Coordinator, Career Development and Placement Cell (CDPC)
                      </div>
                      <div style={{ fontSize: "0.84rem", color: "#64748b", marginTop: "0.3rem", lineHeight: 1.4 }}>
                        Lecturer, Dept. of Computer Science and &amp; Engineering
                      </div>
                    </div>
                    <div style={{ marginTop: "0.75rem", paddingTop: "0.6rem", borderTop: "1px solid #f1f5f9", fontSize: "0.9rem" }}>
                      <span style={{ color: "#64748b", marginRight: "0.35rem" }}>Email:</span>
                      <a href="mailto:cpi@rguktrkv.ac.in" style={{ color: "#0052a9", fontWeight: 700, textDecoration: "underline" }}>
                        cpi@rguktrkv.ac.in
                      </a>
                    </div>
                  </div>
                </div>

                {/* 2. Mr. G S Sundar */}
                <div
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "10px",
                    padding: "1.25rem 1.35rem",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                    display: "flex",
                    gap: "1.25rem",
                    alignItems: "flex-start",
                  }}
                >
                  <img
                    src="/images/placementcoordinators/2137601.jpg"
                    alt="Mr. G S Sundar"
                    style={{
                      width: "90px",
                      height: "110px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      border: "1px solid #cbd5e1",
                      boxShadow: "0 2px 5px rgba(0,0,0,0.06)",
                      flexShrink: 0,
                    }}
                  />
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "110px" }}>
                    <div>
                      <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "var(--primary-maroon)", marginBottom: "0.25rem" }}>
                        Placement Officer
                      </div>
                      <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--primary-dark)", marginBottom: "0.3rem" }}>
                        Mr. G S Sundar
                      </div>
                      <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "#334155", lineHeight: 1.45 }}>
                        Placement Officer
                      </div>
                      <div style={{ fontSize: "0.84rem", color: "#64748b", marginTop: "0.3rem", lineHeight: 1.4 }}>
                        Career Development &amp; Placement Cell
                      </div>
                    </div>
                    <div style={{ marginTop: "0.75rem", paddingTop: "0.6rem", borderTop: "1px solid #f1f5f9", fontSize: "0.9rem" }}>
                      <span style={{ color: "#64748b", marginRight: "0.35rem" }}>Email:</span>
                      <a href="mailto:po@rguktrkv.ac.in" style={{ color: "#0052a9", fontWeight: 700, textDecoration: "underline" }}>
                        po@rguktrkv.ac.in
                      </a>
                    </div>
                  </div>
                </div>

                {/* 3. Mr. G. Ravibabu */}
                <div
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "10px",
                    padding: "1.25rem 1.35rem",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                    display: "flex",
                    gap: "1.25rem",
                    alignItems: "flex-start",
                  }}
                >
                  <img
                    src="/images/placementcoordinators/2098012.jpg"
                    alt="Mr. G. Ravibabu"
                    style={{
                      width: "90px",
                      height: "110px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      border: "1px solid #cbd5e1",
                      boxShadow: "0 2px 5px rgba(0,0,0,0.06)",
                      flexShrink: 0,
                    }}
                  />
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "110px" }}>
                    <div>
                      <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "var(--primary-maroon)", marginBottom: "0.25rem" }}>
                        Assistant Coordinator
                      </div>
                      <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--primary-dark)", marginBottom: "0.3rem" }}>
                        Mr. G. Ravibabu
                      </div>
                      <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "#334155", lineHeight: 1.45 }}>
                        Assistant Coordinator
                      </div>
                      <div style={{ fontSize: "0.84rem", color: "#64748b", marginTop: "0.3rem", lineHeight: 1.4 }}>
                        Mentor in IT
                      </div>
                    </div>
                    <div style={{ marginTop: "0.75rem", paddingTop: "0.6rem", borderTop: "1px solid #f1f5f9", fontSize: "0.9rem" }}>
                      <span style={{ color: "#64748b", marginRight: "0.35rem" }}>Email:</span>
                      <a href="mailto:cpc@rguktrkv.ac.in" style={{ color: "#0052a9", fontWeight: 700, textDecoration: "underline" }}>
                        cpc@rguktrkv.ac.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Address & Directions to Reach Us */}
              <div style={{ marginTop: "2rem" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.25rem",
                  }}
                >
                  {/* Contact Address */}
                  <div
                    style={{
                      background: "#ffffff",
                      border: "1px solid #e2e8f0",
                      borderRadius: "10px",
                      padding: "1.35rem 1.5rem",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                    }}
                  >
                    <h4
                      style={{
                        color: "var(--primary-maroon)",
                        fontSize: "1.15rem",
                        fontWeight: 700,
                        marginBottom: "0.85rem",
                        borderBottom: "2px solid #f1f5f9",
                        paddingBottom: "0.5rem",
                      }}
                    >
                      Contact Address
                    </h4>
                    <p style={{ fontSize: "0.95rem", color: "#334155", lineHeight: 1.75, margin: 0 }}>
                      <strong style={{ color: "var(--primary-dark)" }}>Career Development &amp; Placement Cell (CDPC),</strong><br />
                      MME Department Building,<br />
                      RGUKT, RK Valley Campus (Idupulapaya),<br />
                      Vempalli(M), Kadapa (Dist),<br />
                      Andhra Pradesh - 516329
                    </p>
                  </div>

                  {/* Directions to Reach Us */}
                  <div
                    style={{
                      background: "#ffffff",
                      border: "1px solid #e2e8f0",
                      borderRadius: "10px",
                      padding: "1.35rem 1.5rem",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                    }}
                  >
                    <h4
                      style={{
                        color: "var(--primary-maroon)",
                        fontSize: "1.15rem",
                        fontWeight: 700,
                        marginBottom: "0.85rem",
                        borderBottom: "2px solid #f1f5f9",
                        paddingBottom: "0.5rem",
                      }}
                    >
                      <a
                        href="https://www.rguktrkv.ac.in/tnp-reachus.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "var(--primary-maroon)", textDecoration: "none" }}
                      >
                        Directions to Reach Us &rarr;
                      </a>
                    </h4>

                    <div style={{ fontSize: "0.9rem", color: "#334155", lineHeight: 1.65 }}>
                      <div style={{ marginBottom: "0.75rem" }}>
                        <strong style={{ color: "var(--primary-dark)" }}>From Hyderabad &amp; Chennai:</strong>
                        <ul style={{ margin: "0.35rem 0 0.5rem 1.25rem", padding: 0 }}>
                          <li>There are Flights and Trains available every day from Hyderabad and Chennai to Kadapa.</li>
                          <li>Transportation will be facilitated for pickup and drop at Kadapa.</li>
                        </ul>
                      </div>

                      <div style={{ marginBottom: "0.75rem" }}>
                        <strong style={{ color: "var(--primary-dark)" }}>From Bangalore:</strong> Can reach our campus/Kadapa through Roadways with approximate distance of 250 KM from Bangalore to RGUKT, R.K.Valley Campus.
                      </div>

                      <div style={{ marginBottom: "0.75rem" }}>
                        <strong style={{ color: "var(--primary-dark)" }}>From the other Metro Cities:</strong> Can reach the nearest airports like Bangalore or Tirupati; transportation will be facilitated for pickup and drop.
                      </div>

                      <div
                        style={{
                          background: "#f8fafc",
                          padding: "0.75rem 1rem",
                          borderRadius: "6px",
                          borderLeft: "3px solid var(--primary-maroon)",
                          marginTop: "0.85rem",
                          fontSize: "0.86rem",
                          color: "#475569",
                          lineHeight: 1.5,
                        }}
                      >
                        <strong>Note:</strong> RGUKT, R.K.Valley is 170 KM far from Tirupati Airport and 220 KM far from Bangalore Airport.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
}

