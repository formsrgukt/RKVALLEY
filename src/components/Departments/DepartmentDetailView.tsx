"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Department } from "@/data/rguktData";
import { useApp } from "@/context/AppContext";
import { DEPARTMENT_SECTIONS } from "@/data/departmentSections";

import { FacultyProfile, getDepartmentFaculty } from "@/data/facultyData";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";


interface DepartmentDetailViewProps {
  dept: Department;
  activeSection?: string;
}

export default function DepartmentDetailView({ dept, activeSection = "faculty" }: DepartmentDetailViewProps) {
  const router = useRouter();
  const { openDocModal } = useApp();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [staffSearchQuery, setStaffSearchQuery] = useState<string>("");
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyProfile | null>(null);
  const [hoveredDeptSection, setHoveredDeptSection] = useState<string | null>(null);
  const deptCloseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleDeptMouseEnter = (id: string) => {
    if (deptCloseTimeoutRef.current) {
      clearTimeout(deptCloseTimeoutRef.current);
      deptCloseTimeoutRef.current = null;
    }
    setHoveredDeptSection(id);
  };

  const handleDeptMouseLeave = () => {
    deptCloseTimeoutRef.current = setTimeout(() => {
      setHoveredDeptSection(null);
    }, 180);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [activeSection]);

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/departments");
    }
  };

    const [liveFacultyList, setLiveFacultyList] = useState<FacultyProfile[]>([]);
  const facultyList = getDepartmentFaculty(dept);

  useEffect(() => {
    let isMounted = true;
    const fetchLive = async () => {
      const merged = [...facultyList];
      for (let i = 0; i < merged.length; i++) {
        if (merged[i].email) {
          try {
            const snap = await getDoc(doc(db, "facultyProfiles", merged[i].email.toLowerCase()));
            if (snap.exists()) {
              merged[i] = { ...merged[i], ...snap.data() } as FacultyProfile;
            }
          } catch (e) {}
        }
      }
      if (isMounted) setLiveFacultyList(merged);
    };
    fetchLive();
    return () => { isMounted = false; };
  }, [dept.id]);

  const hodFaculty = liveFacultyList.find((f) => f.isHod) || liveFacultyList[0] || facultyList[0];
  const filteredFaculty = liveFacultyList.length > 0 ? liveFacultyList
    .filter((f) => !f.isHod)
    .filter((f) => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        f.name.toLowerCase().includes(q) ||
        f.designation.toLowerCase().includes(q) ||
        f.specialization.toLowerCase().includes(q) ||
        f.qualification.toLowerCase().includes(q)
      );
    }) : [];


  const staffMembers = [
    {
      id: "staff-1",
      name: "Sri C. H. Venkata Ramana",
      role: "Senior System Administrator & Technical Officer",
      qualification: "B.Tech, CCNA, RedHat Certified",
      responsibilities: "Network infrastructure, GPU server cluster & lab computing administration",
      email: "sysadmin." + dept.id + "@rguktrkv.ac.in",
      location: "Central Computing & Server Facility, Academic Block-I",
      experience: "14+ Years",
      gender: "m" as const
    },
    {
      id: "staff-2",
      name: "Sri G. Suresh Babu",
      role: "Senior Technical Lab Assistant",
      qualification: "Diploma in Engg, B.Sc",
      responsibilities: "Hardware testing setups, equipment calibration & student lab maintenance",
      email: "techassist." + dept.id + "@rguktrkv.ac.in",
      location: "Department Engineering Laboratories, Academic Block-I",
      experience: "11+ Years",
      gender: "m" as const
    },
    {
      id: "staff-3",
      name: "Smt. K. Anitha",
      role: "Junior Technical Assistant",
      qualification: "B.Sc (Comp Science)",
      responsibilities: "Software licenses, terminal setups & test bench provisioning",
      email: "anitha.k@rguktrkv.ac.in",
      location: "Academic Computing Lab, Academic Block-I",
      experience: "7+ Years",
      gender: "f" as const
    },
    {
      id: "staff-4",
      name: "Sri D. Narasimhulu",
      role: "Department Superintendent & Record Officer",
      qualification: "M.A., PGDCA",
      responsibilities: "Departmental academic records, circulars, student attendance & official files",
      email: "deptoffice." + dept.id + "@rguktrkv.ac.in",
      location: "Department Secretariat Office, Academic Block-I",
      experience: "16+ Years",
      gender: "m" as const
    }
  ];

  const filteredStaff = staffMembers.filter((staff) => {
    if (!staffSearchQuery.trim()) return true;
    const q = staffSearchQuery.toLowerCase();
    return (
      staff.name.toLowerCase().includes(q) ||
      staff.role.toLowerCase().includes(q) ||
      staff.qualification.toLowerCase().includes(q) ||
      staff.responsibilities.toLowerCase().includes(q)
    );
  });

  const getDeptSubSections = (sectionId: string) => {
    switch (sectionId) {
      case "curricula":
        return [
          { title: "E1 First Year Engineering", badge: "Semester 1 & 2", desc: "Foundational engineering mathematics, physics & computing." },
          { title: "E2 Second Year Engineering", badge: "Core Branch", desc: "Core departmental subjects, professional theory & labs." },
          { title: "E3 Third Year Engineering", badge: "Electives", desc: "Advanced branch specializations & mini projects." },
          { title: "E4 Fourth Year Engineering", badge: "Capstone", desc: "Major project, industrial internship & research thesis." },
          { title: "Download Syllabus Handbook", badge: "PDF", desc: `Official verified ${dept.name} curriculum handbook.` }
        ];
      case "faculty":
        return [
          { title: "HOD Executive Profile", badge: "Leadership", desc: `${dept.hod} • Head of Department` },
          { title: "Core Faculty Directory", badge: "Distinguished", desc: "Professors, research supervisors & specialized lecturers." },
          { title: "Research Areas & Publications", badge: "Research", desc: "Departmental research initiatives, patents & grants." }
        ];
      case "staff":
        return [
          { title: "Technical Staff", badge: "Laboratories", desc: "Specialized lab technicians & system administrators." },
          { title: "Administrative Staff", badge: "Office", desc: "Department coordinators & academic office staff." }
        ];
      case "bos":
        return [
          { title: "Board of Studies Committee", badge: "Academic Council", desc: "Internal department faculty & curriculum heads." },
          { title: "External Industry Advisors", badge: "Industry & Academia", desc: "Advisors from IITs, NITs, and top tech industry." }
        ];
      case "labs":
        return [
          { title: "Department Laboratories", badge: `${dept.labs?.length || 4} Facilities`, desc: "Modern practical laboratories & computational equipment." },
          { title: "Specialized R&D Centers", badge: "Innovation", desc: "Research centers for advanced engineering projects." }
        ];
      case "contact":
        return [
          { title: "Department Office & Helpdesk", badge: "Main Campus", desc: "Academic inquiry, student affairs & consultation." },
          { title: "HOD Office Contact", badge: "Direct", desc: `hod.${dept.id}@rgukt.ac.in • Intercom 2401` }
        ];
      default:
        return [];
    }
  };

  return (
    <div className="container" style={{ paddingBottom: "3rem" }}>
      <div className="page-content-layout">
        {/* Standard Page Sidebar used across all pages */}
        <aside className="page-sidebar" aria-label="Department Navigation" style={{ overflow: "visible", position: "sticky", top: "90px", zIndex: 900 }}>
          <h4 className="sidebar-menu-title" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span>Dept of {dept.name}</span>
            <span style={{ fontSize: "0.68rem", fontWeight: 600, color: "var(--accent-gold-dark)", textTransform: "none" }}>Hover</span>
          </h4>

          <ul className="sidebar-nav-list" style={{ position: "relative" }}>
            {DEPARTMENT_SECTIONS.map((item) => {
              const isActive = (activeSection || "faculty") === item.id;
              const isHovered = hoveredDeptSection === item.id;
              const subSections = getDeptSubSections(item.id);

              return (
                <li
                  key={item.id}
                  style={{ position: "relative" }}
                  onMouseEnter={() => handleDeptMouseEnter(item.id)}
                  onMouseLeave={handleDeptMouseLeave}
                >
                  <Link
                    href={`/departments/${dept.id}/${item.id}`}
                    className={`sidebar-link ${isActive ? "active" : ""}`}
                    style={{
                      display: "block",
                      borderLeft: isActive
                        ? "3px solid var(--primary-maroon)"
                        : isHovered
                        ? "3px solid var(--accent-gold)"
                        : "3px solid transparent",
                      background: isHovered && !isActive ? "#f8fafc" : undefined
                    }}
                  >
                    {item.label}
                  </Link>

                  {/* Flyout Side Bar on Mouseover */}
                  {isHovered && subSections.length > 0 && (
                    <div
                      className="desktop-sidebar-flyout"
                      onMouseEnter={() => handleDeptMouseEnter(item.id)}
                      onMouseLeave={handleDeptMouseLeave}
                      style={{
                        position: "absolute",
                        left: "calc(100% + 12px)",
                        top: "0px",
                        width: "310px",
                        background: "#ffffff",
                        borderRadius: "10px",
                        border: "1px solid #e2e8f0",
                        borderLeft: "4px solid var(--primary-maroon)",
                        boxShadow: "0 20px 40px -6px rgba(0, 0, 0, 0.22), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                        zIndex: 99999,
                        padding: "0.9rem 1rem",
                        animation: "flyoutFadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards"
                      }}
                    >
                      {/* Invisible Hover Bridge */}
                      <div
                        style={{
                          position: "absolute",
                          left: "-16px",
                          top: 0,
                          width: "18px",
                          height: "100%",
                          background: "transparent"
                        }}
                      />

                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "0.5rem", borderBottom: "1px solid #f1f5f9", marginBottom: "0.65rem" }}>
                        <span style={{ fontWeight: 800, fontSize: "0.9rem", color: "var(--primary-maroon)" }}>
                          {item.label} Sub-sections
                        </span>
                        <Link
                          href={`/departments/${dept.id}/${item.id}`}
                          style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--accent-royal)", textDecoration: "none" }}
                        >
                          View Section →
                        </Link>
                      </div>

                      <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                        {subSections.map((sub, sIdx) => (
                          <div
                            key={sIdx}
                            style={{
                              padding: "0.4rem 0.55rem",
                              borderRadius: "6px",
                              background: "#ffffff",
                              border: "1px solid #f1f5f9",
                              transition: "all 0.15s ease"
                            }}
                          >
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: sub.desc ? "0.15rem" : 0 }}>
                              <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--primary-dark)" }}>
                                {sub.title}
                              </span>
                              {sub.badge && (
                                <span style={{ fontSize: "0.65rem", fontWeight: 700, color: "#b45309", background: "#fef3c7", padding: "0.08rem 0.35rem", borderRadius: "3px" }}>
                                  {sub.badge}
                                </span>
                              )}
                            </div>
                            {sub.desc && (
                              <p style={{ margin: 0, fontSize: "0.72rem", color: "#64748b", lineHeight: 1.35 }}>
                                {sub.desc}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

        </aside>

        {/* Main Body with Tab Views */}
        <article className="page-main-body" style={{ minHeight: "550px" }}>
          {/* Header Banner */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "1.5rem",
              paddingBottom: "1.25rem",
              borderBottom: "1px solid #e2e8f0",
              flexWrap: "wrap",
              gap: "0.75rem"
            }}
          >
            <div>
              <span className="badge-category" style={{ marginBottom: "0.4rem", display: "inline-block" }}>
                {dept.category} Discipline
              </span>
              <h2 style={{ color: "var(--primary-dark)", fontSize: "1.75rem", margin: 0 }}>
                {dept.name}
              </h2>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span className="dept-code-badge" style={{ fontSize: "1.05rem", padding: "0.4rem 0.9rem" }}>
                {dept.code}
              </span>
            </div>
          </div>

          {/* Section 1: Faculty */}
          {(activeSection === "faculty" || !activeSection) && (
            <section style={{ marginBottom: "2rem" }}>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem", marginBottom: "1.5rem" }}>
                <div>
                  <h3 style={{ color: "var(--primary-dark)", fontSize: "1.35rem", margin: "0 0 0.35rem 0", fontWeight: 800 }}>
                    Faculty Directory & Profiles
                  </h3>
                  <p style={{ fontSize: "0.92rem", color: "#64748b", margin: 0 }}>
                    Meet the professors, research mentors, and educators shaping the future of {dept.name}.
                  </p>
                </div>

                {/* Quick Search Filter */}
                <div style={{ position: "relative", minWidth: "260px" }}>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search faculty, research area..."
                    style={{
                      width: "100%",
                      padding: "0.55rem 0.85rem 0.55rem 2.2rem",
                      fontSize: "0.85rem",
                      borderRadius: "6px",
                      border: "1px solid #cbd5e1",
                      outline: "none",
                      background: "#f8fafc"
                    }}
                  />
                  <svg
                    style={{ position: "absolute", left: "0.75rem", top: "50%", transform: "translateY(-50%)", width: "15px", height: "15px", color: "#94a3b8" }}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
              </div>

              {/* HOD Executive Spotlight Card */}
              {(!searchQuery || hodFaculty.name.toLowerCase().includes(searchQuery.toLowerCase())) && (
                <div
                  style={{
                    background: "linear-gradient(135deg, #ffffff 0%, #fdf6f7 100%)",
                    borderTop: "1px solid #f2cfd5",
                    borderRight: "1px solid #f2cfd5",
                    borderBottom: "1px solid #f2cfd5",
                    borderLeft: "5px solid var(--primary-maroon)",
                    borderRadius: "10px",
                    padding: "1.5rem",
                    marginBottom: "2rem",
                    boxShadow: "0 4px 12px rgba(122, 0, 25, 0.05)",
                    display: "flex",
                    gap: "1.5rem",
                    alignItems: "center",
                    flexWrap: "wrap"
                  }}
                >
                  {/* Portrait Avatar */}
                  <div
                    style={{
                      width: "88px",
                      height: "110px",
                      borderRadius: "12px",
                      border: "2px solid var(--accent-gold)",
                      background: hodFaculty.image ? `url(${hodFaculty.image}) center top / cover no-repeat` : "linear-gradient(135deg, #7a0019 0%, #4a000e 100%)",
                      color: "#ffffff",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      boxShadow: "0 4px 10px rgba(0,0,0,0.15)"
                    }}
                  >
                    {!hodFaculty.image && (
                      <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    )}
                  </div>

                  <div style={{ flex: 1, minWidth: "260px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem", flexWrap: "wrap" }}>
                      <span
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 800,
                          background: "var(--primary-maroon)",
                          color: "#ffffff",
                          padding: "0.2rem 0.6rem",
                          borderRadius: "4px",
                          letterSpacing: "0.5px"
                        }}
                      >
                        HEAD OF THE DEPARTMENT
                      </span>
                      <span style={{ fontSize: "0.78rem", color: "#64748b" }}>• 16+ Years Experience</span>
                    </div>

                    <h4 style={{ margin: "0.2rem 0", color: "var(--primary-dark)", fontSize: "1.35rem", fontWeight: 800 }}>
                      {hodFaculty.name}
                    </h4>
                    <p style={{ margin: "0 0 0.5rem 0", fontSize: "0.88rem", color: "#475569" }}>
                      {hodFaculty.qualification} • <em>{hodFaculty.almaMater}</em>
                    </p>

                    <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap", fontSize: "0.85rem", color: "#334155" }}>
                      <span>
                        <strong style={{ color: "#0f172a" }}>Email:</strong>{" "}
                        <a href={`mailto:${hodFaculty.email}`} style={{ color: "var(--primary-maroon)", fontWeight: 600 }}>
                          {hodFaculty.email}
                        </a>
                      </span>
                      <span>
                        <strong style={{ color: "#0f172a" }}>Cabin:</strong> Cabin HOD-01, Academic Block
                      </span>
                      <span>
                        <strong style={{ color: "#0f172a" }}>Publications:</strong> 34+ Papers
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => router.push(`/departments/${dept.id}/faculty/${hodFaculty.id}`)}
                    className="btn btn-primary"
                    style={{
                      fontSize: "0.75rem",
                      padding: "0.3rem 0.75rem",
                      whiteSpace: "nowrap",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.25rem",
                      borderRadius: "5px",
                      boxShadow: "0 2px 6px rgba(122, 0, 25, 0.25)"
                    }}
                  >
                    View Profile
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              )}

              {/* Faculty Directory Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", marginBottom: "1rem" }}>
                <div style={{ fontSize: "0.92rem", fontWeight: 700, color: "var(--primary-dark)" }}>
                  Showing {filteredFaculty.length} Faculty Members
                </div>
              </div>

              {/* Horizontal Cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.95rem" }}>
                {filteredFaculty.map((fac, idx) => {
                  const isYellow = idx % 2 === 1;
                  const theme = isYellow
                    ? {
                        cardBg: "linear-gradient(135deg, #ffffff 0%, #fffdf0 100%)",
                        borderTop: "1px solid #fde68a",
                        borderRight: "1px solid #fde68a",
                        borderBottom: "1px solid #fde68a",
                        borderLeft: "5px solid #d97706",
                        shadow: "0 2px 8px rgba(217, 119, 6, 0.06)",
                        hoverShadow: "0 5px 14px rgba(217, 119, 6, 0.15)",
                        avatarBg: "linear-gradient(135deg, #d97706 0%, #92400e 100%)",
                        avatarBorder: "2px solid #fbbf24",
                        avatarShadow: "0 4px 10px rgba(180, 83, 9, 0.2)",
                        badgeBg: "#fef3c7",
                        badgeBorder: "1px solid #fde68a",
                        badgeColor: "#b45309",
                        textColor: "#b45309",
                        btnBg: "linear-gradient(135deg, #d97706 0%, #b45309 100%)",
                        btnShadow: "0 2px 5px rgba(217, 119, 6, 0.3)"
                      }
                    : {
                        cardBg: "linear-gradient(135deg, #ffffff 0%, #fdf6f7 100%)",
                        borderTop: "1px solid #f2cfd5",
                        borderRight: "1px solid #f2cfd5",
                        borderBottom: "1px solid #f2cfd5",
                        borderLeft: "5px solid var(--primary-maroon)",
                        shadow: "0 2px 8px rgba(122, 0, 25, 0.04)",
                        hoverShadow: "0 5px 14px rgba(122, 0, 25, 0.1)",
                        avatarBg: "linear-gradient(135deg, #7a0019 0%, #4a000e 100%)",
                        avatarBorder: "2px solid var(--accent-gold)",
                        avatarShadow: "0 4px 10px rgba(0,0,0,0.16)",
                        badgeBg: fac.isHod ? "var(--primary-maroon)" : "#fdf2f4",
                        badgeBorder: "1px solid #f9d5dc",
                        badgeColor: fac.isHod ? "#ffffff" : "var(--primary-maroon)",
                        textColor: "var(--primary-maroon)",
                        btnBg: "linear-gradient(135deg, #7a0019 0%, #4a000e 100%)",
                        btnShadow: "0 2px 5px rgba(122, 0, 25, 0.25)"
                      };

                  return (
                    <div
                      key={fac.id}
                      style={{
                        background: theme.cardBg,
                        borderTop: theme.borderTop,
                        borderRight: theme.borderRight,
                        borderBottom: theme.borderBottom,
                        borderLeft: theme.borderLeft,
                        borderRadius: "8px",
                        padding: "0.45rem 1.15rem",
                        boxShadow: theme.shadow,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1.15rem",
                        flexWrap: "wrap",
                        transition: "all 0.18s ease"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = theme.hoverShadow;
                        e.currentTarget.style.transform = "translateY(-1px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = theme.shadow;
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      {/* Left Side: Avatar + Details */}
                      <div style={{ display: "flex", alignItems: "center", gap: "1.15rem", flex: "1 1 460px", flexWrap: "wrap" }}>
                        {/* Portrait Avatar (Enlarged to fit card height) */}
                        <div
                          style={{
                            width: "98px",
                            height: "125px",
                            borderRadius: "14px",
                            border: theme.avatarBorder,
                            background: fac.image ? `url(${fac.image}) center top / cover no-repeat` : theme.avatarBg,
                            color: "#ffffff",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            boxShadow: theme.avatarShadow
                          }}
                        >
                          {!fac.image && (
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                              <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                          )}
                        </div>

                        <div style={{ flex: 1, minWidth: "240px" }}>
                          <h4 style={{ margin: "0 0 0.25rem 0", fontSize: "1.15rem", color: "var(--primary-dark)", fontWeight: 800 }}>
                            {fac.name}
                          </h4>

                          <div style={{ display: "flex", alignItems: "center", gap: "0.45rem", marginBottom: "0.35rem", flexWrap: "wrap" }}>
                            <span
                              style={{
                                fontSize: "0.68rem",
                                fontWeight: 800,
                                background: theme.badgeBg,
                                color: theme.badgeColor,
                                border: theme.badgeBorder,
                                padding: "0.15rem 0.5rem",
                                borderRadius: "4px",
                                letterSpacing: "0.4px"
                              }}
                            >
                              {fac.designation.split("&")[0].trim().toUpperCase()}
                            </span>
                            <span style={{ fontSize: "0.74rem", color: "#64748b" }}>• {fac.experience.split(" ")[0]} Years Exp</span>
                          </div>

                          <div style={{ fontSize: "0.85rem", color: "#475569", marginBottom: "0.25rem", lineHeight: 1.35 }}>
                            <strong style={{ color: "#334155" }}>Qualification:</strong> {fac.qualification}
                          </div>

                          <div style={{ fontSize: "0.85rem", color: "#475569", lineHeight: 1.35 }}>
                            <strong style={{ color: "#334155" }}>Specialization:</strong> {fac.specialization}
                          </div>
                        </div>
                      </div>

                      {/* Right Side: View Profile Button */}
                      <div style={{ flexShrink: 0 }}>
                        <button
                          type="button"
                          onClick={() => router.push(`/departments/${dept.id}/faculty/${fac.id}`)}
                          className="btn"
                          style={{
                            background: theme.btnBg,
                            color: "#ffffff",
                            border: "none",
                            padding: "0.32rem 0.8rem",
                            fontSize: "0.76rem",
                            fontWeight: 600,
                            borderRadius: "5px",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.25rem",
                            whiteSpace: "nowrap",
                            boxShadow: theme.btnShadow,
                            cursor: "pointer"
                          }}
                        >
                          View Profile →
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>


              {filteredFaculty.length === 0 && (!searchQuery || !hodFaculty.name.toLowerCase().includes(searchQuery.toLowerCase())) && (
                <div style={{ textAlign: "center", padding: "3rem 1rem", background: "#f8fafc", borderRadius: "8px", color: "#64748b" }}>
                  <p>No faculty members found matching &quot;{searchQuery}&quot;.</p>
                  <button type="button" onClick={() => setSearchQuery("")} className="btn btn-secondary" style={{ fontSize: "0.85rem", marginTop: "0.5rem" }}>
                    Clear Search Filter
                  </button>
                </div>
              )}
            </div>
            </section>
          )}

          {/* Section 2: Staff */}
          {activeSection === "staff" && (
            <section style={{ marginBottom: "2rem" }}>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem", marginBottom: "1.5rem" }}>
                <div>
                  <h3 style={{ color: "var(--primary-dark)", fontSize: "1.35rem", margin: "0 0 0.35rem 0", fontWeight: 800 }}>
                    Department Supporting Staff
                  </h3>
                  <p style={{ fontSize: "0.92rem", color: "#64748b", margin: 0 }}>
                    Dedicated technical officers, laboratory assistants, and administrative personnel ensuring smooth day-to-day operations.
                  </p>
                </div>

                {/* Quick Search Filter */}
                <div style={{ position: "relative", minWidth: "260px" }}>
                  <input
                    type="text"
                    value={staffSearchQuery}
                    onChange={(e) => setStaffSearchQuery(e.target.value)}
                    placeholder="Search staff, role, specialization..."
                    style={{
                      width: "100%",
                      padding: "0.55rem 0.85rem 0.55rem 2.2rem",
                      fontSize: "0.85rem",
                      borderRadius: "6px",
                      border: "1px solid #cbd5e1",
                      outline: "none",
                      background: "#f8fafc"
                    }}
                  />
                  <svg
                    style={{ position: "absolute", left: "0.75rem", top: "50%", transform: "translateY(-50%)", width: "15px", height: "15px", color: "#94a3b8" }}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
              </div>

              {/* Staff Directory Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", marginBottom: "1rem" }}>
                <div style={{ fontSize: "0.92rem", fontWeight: 700, color: "var(--primary-dark)" }}>
                  Showing {filteredStaff.length} Supporting Staff Members
                </div>
              </div>

              {/* Horizontal Staff Cards (Identical style to faculty cards) */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.95rem" }}>
                {filteredStaff.map((staff, idx) => {
                  const isYellow = idx % 2 === 1;
                  const theme = isYellow
                    ? {
                        cardBg: "linear-gradient(135deg, #ffffff 0%, #fffdf0 100%)",
                        borderTop: "1px solid #fde68a",
                        borderRight: "1px solid #fde68a",
                        borderBottom: "1px solid #fde68a",
                        borderLeft: "5px solid #d97706",
                        shadow: "0 2px 8px rgba(217, 119, 6, 0.06)",
                        hoverShadow: "0 5px 14px rgba(217, 119, 6, 0.15)",
                        avatarBg: "linear-gradient(135deg, #d97706 0%, #92400e 100%)",
                        avatarBorder: "2px solid #fbbf24",
                        avatarShadow: "0 4px 10px rgba(180, 83, 9, 0.2)",
                        badgeBg: "#fef3c7",
                        badgeBorder: "1px solid #fde68a",
                        badgeColor: "#b45309",
                        textColor: "#b45309",
                        btnBg: "linear-gradient(135deg, #d97706 0%, #b45309 100%)",
                        btnShadow: "0 2px 5px rgba(217, 119, 6, 0.3)"
                      }
                    : {
                        cardBg: "linear-gradient(135deg, #ffffff 0%, #fdf6f7 100%)",
                        borderTop: "1px solid #f2cfd5",
                        borderRight: "1px solid #f2cfd5",
                        borderBottom: "1px solid #f2cfd5",
                        borderLeft: "5px solid var(--primary-maroon)",
                        shadow: "0 2px 8px rgba(122, 0, 25, 0.04)",
                        hoverShadow: "0 5px 14px rgba(122, 0, 25, 0.1)",
                        avatarBg: "linear-gradient(135deg, #7a0019 0%, #4a000e 100%)",
                        avatarBorder: "2px solid var(--accent-gold)",
                        avatarShadow: "0 4px 10px rgba(0,0,0,0.16)",
                        badgeBg: "#fdf2f4",
                        badgeBorder: "1px solid #f9d5dc",
                        badgeColor: "var(--primary-maroon)",
                        textColor: "var(--primary-maroon)",
                        btnBg: "linear-gradient(135deg, #7a0019 0%, #4a000e 100%)",
                        btnShadow: "0 2px 5px rgba(122, 0, 25, 0.25)"
                      };

                  return (
                    <div
                      key={staff.id}
                      style={{
                        background: theme.cardBg,
                        borderTop: theme.borderTop,
                        borderRight: theme.borderRight,
                        borderBottom: theme.borderBottom,
                        borderLeft: theme.borderLeft,
                        borderRadius: "8px",
                        padding: "0.45rem 1.15rem",
                        boxShadow: theme.shadow,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1.15rem",
                        flexWrap: "wrap",
                        transition: "all 0.18s ease"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = theme.hoverShadow;
                        e.currentTarget.style.transform = "translateY(-1px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = theme.shadow;
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      {/* Left Side: Avatar + Details */}
                      <div style={{ display: "flex", alignItems: "center", gap: "1.15rem", flex: "1 1 460px", flexWrap: "wrap" }}>
                        {/* Portrait Avatar (Enlarged to fit card height) */}
                        <div
                          style={{
                            width: "98px",
                            height: "98px",
                            borderRadius: "14px",
                            border: theme.avatarBorder,
                            background: theme.avatarBg,
                            color: "#ffffff",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            boxShadow: theme.avatarShadow
                          }}
                        >
                          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg>
                        </div>

                        <div style={{ flex: 1, minWidth: "240px" }}>
                          <h4 style={{ margin: "0 0 0.25rem 0", fontSize: "1.15rem", color: "var(--primary-dark)", fontWeight: 800 }}>
                            {staff.name}
                          </h4>

                          <div style={{ display: "flex", alignItems: "center", gap: "0.45rem", marginBottom: "0.35rem", flexWrap: "wrap" }}>
                            <span
                              style={{
                                fontSize: "0.68rem",
                                fontWeight: 800,
                                background: theme.badgeBg,
                                color: theme.badgeColor,
                                border: theme.badgeBorder,
                                padding: "0.15rem 0.5rem",
                                borderRadius: "4px",
                                letterSpacing: "0.4px"
                              }}
                            >
                              {staff.role.toUpperCase()}
                            </span>
                            <span style={{ fontSize: "0.74rem", color: "#64748b" }}>• {staff.experience} Experience</span>
                          </div>

                          <div style={{ fontSize: "0.85rem", color: "#475569", marginBottom: "0.25rem", lineHeight: 1.35 }}>
                            <strong style={{ color: "#334155" }}>Qualification:</strong> {staff.qualification}
                          </div>

                          <div style={{ fontSize: "0.85rem", color: "#475569", lineHeight: 1.35 }}>
                            <strong style={{ color: "#334155" }}>Key Responsibilities:</strong> {staff.responsibilities}
                          </div>
                        </div>
                      </div>

                      {/* Right Side: Send Email Button */}
                      <div style={{ flexShrink: 0 }}>
                        <button
                          type="button"
                          onClick={() => router.push(`/departments/${dept.id}/staff/${staff.id}`)}
                          className="btn"
                          style={{
                            background: theme.btnBg,
                            color: "#ffffff",
                            border: "none",
                            padding: "0.32rem 0.8rem",
                            fontSize: "0.76rem",
                            fontWeight: 600,
                            borderRadius: "5px",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.25rem",
                            whiteSpace: "nowrap",
                            boxShadow: theme.btnShadow,
                            cursor: "pointer"
                          }}
                        >
                          View Profile →
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {filteredStaff.length === 0 && staffSearchQuery && (
                <div style={{ textAlign: "center", padding: "3rem 1rem", background: "#f8fafc", borderRadius: "8px", color: "#64748b", marginTop: "1rem" }}>
                  <p>No staff members found matching &quot;{staffSearchQuery}&quot;.</p>
                  <button type="button" onClick={() => setStaffSearchQuery("")} className="btn btn-secondary" style={{ fontSize: "0.85rem", marginTop: "0.5rem" }}>
                    Clear Search Filter
                  </button>
                </div>
              )}
            </div>
            </section>
          )}

          {/* Section 3: Curricula */}
          {activeSection === "curricula" && (
            <section style={{ marginBottom: "2rem" }}>
            <div>
              <h3 style={{ color: "var(--primary-dark)", fontSize: "1.35rem", marginBottom: "0.5rem", fontWeight: 800 }}>
                Course Curricula & Academic Regulations
              </h3>
              <p style={{ fontSize: "0.92rem", color: "#64748b", marginBottom: "1.5rem" }}>
                Industry-aligned 4-Year B.Tech curriculum designed in accordance with AICTE model framework, Bloom’s Taxonomy, and National Education Policy (NEP 2020).
              </p>

              <div className="curricula-years-grid">
                <div
                  style={{
                    background: "#ffffff",
                    padding: "1.35rem 1.5rem",
                    borderRadius: "8px",
                    borderTop: "1px solid #f2cfd5",
                    borderRight: "1px solid #f2cfd5",
                    borderBottom: "1px solid #f2cfd5",
                    borderLeft: "5px solid var(--primary-maroon)",
                    boxShadow: "0 2px 6px rgba(122, 0, 25, 0.04)"
                  }}
                >
                  <h4 style={{ margin: "0 0 0.35rem 0", color: "var(--primary-maroon)", fontSize: "1.05rem", fontWeight: 700 }}>
                    Engineering Year 1 (E1)
                  </h4>
                  <p style={{ fontSize: "0.88rem", color: "#475569", margin: 0, lineHeight: 1.5 }}>
                    Foundations in Mathematics, Programming, Engineering Physics &amp; Basic Sciences.
                  </p>
                </div>

                <div
                  style={{
                    background: "#ffffff",
                    padding: "1.35rem 1.5rem",
                    borderRadius: "8px",
                    borderTop: "1px solid #fef08a",
                    borderRight: "1px solid #fef08a",
                    borderBottom: "1px solid #fef08a",
                    borderLeft: "5px solid #d97706",
                    boxShadow: "0 2px 6px rgba(217, 119, 6, 0.04)"
                  }}
                >
                  <h4 style={{ margin: "0 0 0.35rem 0", color: "#b45309", fontSize: "1.05rem", fontWeight: 700 }}>
                    Engineering Year 2 (E2)
                  </h4>
                  <p style={{ fontSize: "0.88rem", color: "#475569", margin: 0, lineHeight: 1.5 }}>
                    Core departmental theory, algorithm analysis, circuit design &amp; laboratory practicums.
                  </p>
                </div>

                <div
                  style={{
                    background: "#ffffff",
                    padding: "1.35rem 1.5rem",
                    borderRadius: "8px",
                    borderTop: "1px solid #f2cfd5",
                    borderRight: "1px solid #f2cfd5",
                    borderBottom: "1px solid #f2cfd5",
                    borderLeft: "5px solid var(--primary-maroon)",
                    boxShadow: "0 2px 6px rgba(122, 0, 25, 0.04)"
                  }}
                >
                  <h4 style={{ margin: "0 0 0.35rem 0", color: "var(--primary-maroon)", fontSize: "1.05rem", fontWeight: 700 }}>
                    Engineering Year 3 (E3)
                  </h4>
                  <p style={{ fontSize: "0.88rem", color: "#475569", margin: 0, lineHeight: 1.5 }}>
                    Professional electives, summer internships, mini-project, and specialized domain labs.
                  </p>
                </div>

                <div
                  style={{
                    background: "#ffffff",
                    padding: "1.35rem 1.5rem",
                    borderRadius: "8px",
                    borderTop: "1px solid #fef08a",
                    borderRight: "1px solid #fef08a",
                    borderBottom: "1px solid #fef08a",
                    borderLeft: "5px solid #d97706",
                    boxShadow: "0 2px 6px rgba(217, 119, 6, 0.04)"
                  }}
                >
                  <h4 style={{ margin: "0 0 0.35rem 0", color: "#b45309", fontSize: "1.05rem", fontWeight: 700 }}>
                    Engineering Year 4 (E4)
                  </h4>
                  <p style={{ fontSize: "0.88rem", color: "#475569", margin: 0, lineHeight: 1.5 }}>
                    Capstone major project, open interdisciplinary electives &amp; industry placement semesters.
                  </p>
                </div>
              </div>

              <div style={{ background: "#fdf2f4", border: "1px solid #f9d5dc", padding: "1.25rem", borderRadius: "8px", marginBottom: "1.5rem" }}>
                <h4 style={{ color: "var(--primary-maroon)", margin: "0 0 0.5rem 0", fontSize: "1.05rem" }}>Official Syllabus Documents</h4>
                <p style={{ fontSize: "0.88rem", color: "#64748b", marginBottom: "1rem" }}>
                  Download the complete semester-wise scheme of instruction, course outcomes (COs), and syllabus guidelines.
                </p>
                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                  <button
                    type="button"
                    onClick={() => openDocModal(`${dept.name} Complete Curriculum Structure`, `${dept.code}_Curriculum_2026.pdf`)}
                    className="btn btn-primary"
                    style={{ fontSize: "0.85rem", padding: "0.5rem 1rem" }}
                  >
                    Download Curriculum Structure (PDF)
                  </button>
                  <button
                    type="button"
                    onClick={() => openDocModal(`${dept.name} Detailed Syllabus Handbook`, `${dept.code}_Syllabus_Handbook.pdf`)}
                    className="btn btn-secondary"
                    style={{ fontSize: "0.85rem", padding: "0.5rem 1rem" }}
                  >
                    Download Syllabus Handbook (PDF)
                  </button>
                </div>
              </div>
            </div>
            </section>
          )}

          {/* Section 4: Board of Studies (BoS) */}
          {activeSection === "bos" && (
            <section style={{ marginBottom: "2rem" }}>
            <div>
              <h3 style={{ color: "var(--primary-dark)", fontSize: "1.35rem", marginBottom: "0.5rem", fontWeight: 800 }}>
                Board of Studies (BoS)
              </h3>
              <p style={{ fontSize: "0.92rem", color: "#64748b", marginBottom: "1.5rem" }}>
                The statutory academic authority responsible for formulating courses of study, updating academic regulations, and reviewing question papers.
              </p>

              <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "8px", overflow: "hidden", marginBottom: "2rem" }}>
                <div style={{ background: "var(--primary-maroon)", color: "#ffffff", padding: "0.85rem 1.25rem", fontWeight: 700, fontSize: "0.95rem" }}>
                  Department Board of Studies Committee
                </div>
                <div style={{ padding: "1.25rem" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.88rem" }}>
                    <tbody>
                      <tr style={{ borderBottom: "1px solid #f1f5f9" }}>
                        <td style={{ padding: "0.75rem 0.5rem", fontWeight: 700, width: "35%", color: "#334155" }}>Chairman</td>
                        <td style={{ padding: "0.75rem 0.5rem", color: "#0f172a" }}>{dept.hod} (Head of Department)</td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #f1f5f9" }}>
                        <td style={{ padding: "0.75rem 0.5rem", fontWeight: 700, color: "#334155" }}>External Academic Expert 1</td>
                        <td style={{ padding: "0.75rem 0.5rem", color: "#0f172a" }}>Prof. K. V. L. Subramaniam, Senior Professor, Indian Institute of Technology (IIT) Hyderabad</td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #f1f5f9" }}>
                        <td style={{ padding: "0.75rem 0.5rem", fontWeight: 700, color: "#334155" }}>External Academic Expert 2</td>
                        <td style={{ padding: "0.75rem 0.5rem", color: "#0f172a" }}>Prof. M. B. Srinivas, Professor of Engineering, BITS Pilani (Hyderabad Campus)</td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #f1f5f9" }}>
                        <td style={{ padding: "0.75rem 0.5rem", fontWeight: 700, color: "#334155" }}>Industry Representative</td>
                        <td style={{ padding: "0.75rem 0.5rem", color: "#0f172a" }}>Dr. V. Ramachandra, Director of R&D & Technology Fellow, Core Engineering Partner</td>
                      </tr>
                      <tr style={{ borderBottom: "1px solid #f1f5f9" }}>
                        <td style={{ padding: "0.75rem 0.5rem", fontWeight: 700, color: "#334155" }}>Internal Faculty Members</td>
                        <td style={{ padding: "0.75rem 0.5rem", color: "#0f172a" }}>All Senior Professors & Associate Professors of {dept.code} Department, RGUKT RK Valley</td>
                      </tr>
                      <tr>
                        <td style={{ padding: "0.75rem 0.5rem", fontWeight: 700, color: "#334155" }}>Alumni Representative</td>
                        <td style={{ padding: "0.75rem 0.5rem", color: "#0f172a" }}>Er. S. Teja Reddy (Alumnus, Senior Staff Engineer, Global R&D)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div style={{ background: "#f8fafc", padding: "1.25rem", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                <h4 style={{ margin: "0 0 0.5rem 0", color: "#0f172a", fontSize: "0.95rem" }}>Key Mandates & Meeting Resolutions</h4>
                <ul style={{ paddingLeft: "1.25rem", margin: 0, fontSize: "0.85rem", color: "#475569", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <li>Continuous alignment of the course curriculum with emerging industry domains and practical case studies.</li>
                  <li>Inclusion of 30% hands-on laboratory assessment components in all core engineering modules.</li>
                  <li>Promotion of interdisciplinary research electives with Basic Sciences and Humanities.</li>
                </ul>
              </div>
            </div>
            </section>
          )}

          {/* Section 5: Lab Facilities */}
          {activeSection === "labs" && (
            <section style={{ marginBottom: "2rem" }}>
            <div>
              <h3 style={{ color: "var(--primary-dark)", fontSize: "1.35rem", marginBottom: "0.5rem", fontWeight: 800 }}>
                Laboratories & Experimental Studios
              </h3>
              <p style={{ fontSize: "0.92rem", color: "#64748b", marginBottom: "1.5rem" }}>
                Equipped with modern test benches, cutting-edge software licenses, high-speed workstations, and specialized hardware test rigs.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
                {dept.labs.map((lab, index) => (
                  <div
                    key={index}
                    style={{
                      background: "#ffffff",
                      border: "1px solid #e2e8f0",
                      borderRadius: "8px",
                      padding: "1.25rem",
                      borderTop: "3px solid var(--primary-maroon)"
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                      <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--primary-maroon)", background: "#fdf2f4", padding: "0.2rem 0.5rem", borderRadius: "4px" }}>
                        LAB 0{index + 1}
                      </span>
                      <span style={{ fontSize: "0.75rem", color: "#10b981", fontWeight: 600 }}>● Fully Operational</span>
                    </div>
                    <h4 style={{ margin: "0 0 0.5rem 0", fontSize: "1.05rem", color: "#0f172a" }}>
                      {lab}
                    </h4>
                    <p style={{ fontSize: "0.82rem", color: "#64748b", lineHeight: 1.5, margin: 0 }}>
                      State-of-the-art facility supporting B.Tech practicums, faculty research initiatives, and capstone prototyping projects.
                    </p>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: "2rem", background: "#f8fafc", padding: "1.25rem", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                <h4 style={{ margin: "0 0 0.5rem 0", color: "#0f172a", fontSize: "0.95rem" }}>General Laboratory Norms & Timings</h4>
                <p style={{ fontSize: "0.85rem", color: "#475569", margin: 0 }}>
                  <strong>Working Hours:</strong> Monday – Saturday, 8:30 AM – 7:30 PM (extended access during semester project weeks). Safety apparel, ID badges, and adherence to standard SOPs are strictly enforced.
                </p>
              </div>
            </div>
            </section>
          )}

          {/* Section 6: Contact */}
          {activeSection === "contact" && (
            <section style={{ marginBottom: "2rem" }}>
            <div>
              <h3 style={{ color: "var(--primary-dark)", fontSize: "1.35rem", marginBottom: "0.5rem", fontWeight: 800 }}>
                Department Office & Contact Information
              </h3>
              <p style={{ fontSize: "0.92rem", color: "#64748b", marginBottom: "1.5rem" }}>
                Reach out to the department secretariat for admissions, academic inquiries, research collaborations, or student verifications.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
                <div style={{ background: "#f8fafc", padding: "1.5rem", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                  <h4 style={{ margin: "0 0 1rem 0", color: "var(--primary-maroon)", fontSize: "1.05rem" }}>Office Location</h4>
                  <p style={{ fontSize: "0.88rem", color: "#334155", lineHeight: 1.6, margin: 0 }}>
                    <strong>Department of {dept.name}</strong><br />
                    Academic Block - I (First Floor)<br />
                    Rajiv Gandhi University of Knowledge Technologies (RGUKT - RK Valley)<br />
                    Idupulapaya (Vill), Vempalli (Mdl), YSR Kadapa District<br />
                    Andhra Pradesh - 516330, India.
                  </p>
                </div>

                <div style={{ background: "#f8fafc", padding: "1.5rem", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                  <h4 style={{ margin: "0 0 1rem 0", color: "var(--primary-maroon)", fontSize: "1.05rem" }}>Head of Department Desk</h4>
                  <div style={{ fontSize: "0.88rem", color: "#334155", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <div><strong>HOD:</strong> {dept.hod}</div>
                    <div><strong>Official Email:</strong> <a href={`mailto:${dept.hodEmail}`} style={{ color: "var(--primary-maroon)" }}>{dept.hodEmail}</a></div>
                    <div><strong>Campus Phone:</strong> +91 8560 287834 (Ext. {dept.code})</div>
                    <div><strong>Working Hours:</strong> Mon – Sat: 9:00 AM – 5:30 PM</div>
                  </div>
                </div>
              </div>
            </div>
            </section>
          )}
        </article>
      </div>

    </div>
  );
}
