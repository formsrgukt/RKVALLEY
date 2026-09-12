"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Department } from "@/data/rguktData";
import { useApp } from "@/context/AppContext";

interface FacultyProfile {
  id: string;
  name: string;
  designation: string;
  qualification: string;
  almaMater: string;
  specialization: string;
  email: string;
  phone: string;
  cabin: string;
  experience: string;
  publicationsCount: number;
  patentsCount: number;
  researchAreas: string[];
  coursesTaught: string[];
  officeHours: string;
  bio: string;
  gender: "m" | "f";
  isHod?: boolean;
}

interface DepartmentDetailViewProps {
  dept: Department;
}

export default function DepartmentDetailView({ dept }: DepartmentDetailViewProps) {
  const router = useRouter();
  const { openDocModal } = useApp();
  const [activeTab, setActiveTab] = useState<string>("faculty");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyProfile | null>(null);

  const menuItems = [
    { id: "faculty", label: "Faculty" },
    { id: "staff", label: "Staff" },
    { id: "curricula", label: "Curricula" },
    { id: "bos", label: "Board of Studies" },
    { id: "labs", label: "Lab Facilities" },
    { id: "contact", label: "Contact" },
    { id: "recreation", label: "Student Recreation Centre" },
  ];

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/departments");
    }
  };

  // Generate rich faculty directory for this department
  const getDepartmentFaculty = (): FacultyProfile[] => {
    const list: FacultyProfile[] = [
      {
        id: "fac-hod",
        name: dept.hod,
        designation: "Head of the Department & Associate Professor",
        qualification: "Ph.D. in " + dept.name,
        almaMater: "Indian Institute of Technology (IIT) Madras",
        specialization: dept.highlights[0] || "Advanced Research & Engineering Systems",
        email: dept.hodEmail,
        phone: "+91 8560 287834 (Ext. HOD)",
        cabin: "Cabin HOD-01, Academic Block-I (First Floor)",
        experience: "16+ Years Academic & Research Experience",
        publicationsCount: 34,
        patentsCount: 3,
        researchAreas: [
          dept.highlights[0] || "Advanced Systems",
          "Applied Computational Modeling",
          "Interdisciplinary Technology Solutions",
          "Laboratory Instrumentation"
        ],
        coursesTaught: [
          `Advanced ${dept.code} Principles`,
          "Research Methodologies & Design Thinking",
          "Capstone Project Guidance"
        ],
        officeHours: "Mon, Wed & Fri: 3:00 PM – 5:00 PM",
        bio: `${dept.hod} has been spearheading the Department of ${dept.name} with an emphasis on research-driven education, industry collaborations, and modern student laboratory learning.`,
        gender: "m",
        isHod: true
      },
      {
        id: "fac-2",
        name: "Dr. K. V. Subba Rao",
        designation: "Associate Professor",
        qualification: "Ph.D., M.Tech (Gold Medalist)",
        almaMater: "National Institute of Technology (NIT) Warangal",
        specialization: `Advanced ${dept.code} Systems & Architecture`,
        email: `kv.subbarao@rguktrkv.ac.in`,
        phone: "+91 8560 287834 (Ext. 204)",
        cabin: "Room 204, Academic Block-I",
        experience: "12+ Years Teaching & Industry R&D",
        publicationsCount: 22,
        patentsCount: 2,
        researchAreas: [
          "Applied System Algorithms",
          "High Performance Computing",
          "Embedded Sensing & Diagnostics"
        ],
        coursesTaught: ["Core Engineering Analysis", "Advanced Laboratory Practicums", "Elective Specialization I"],
        officeHours: "Tue & Thu: 2:00 PM – 4:00 PM",
        bio: "Dr. Subba Rao specializes in high-efficiency engineering systems and has mentored over 40+ undergraduate research projects and published in premier IEEE/Elsevier journals.",
        gender: "m"
      },
      {
        id: "fac-3",
        name: "Dr. P. Swathi",
        designation: "Assistant Professor",
        qualification: "Ph.D., M.Tech",
        almaMater: "Indian Institute of Science (IISc) Bangalore",
        specialization: "Data Modeling, Optimization & Smart Networks",
        email: `p.swathi@rguktrkv.ac.in`,
        phone: "+91 8560 287834 (Ext. 206)",
        cabin: "Room 206, Academic Block-I",
        experience: "9+ Years Teaching & Post-Doctoral Research",
        publicationsCount: 18,
        patentsCount: 1,
        researchAreas: [
          "Predictive Machine Intelligence",
          "Signal & Data Analytics",
          "Renewable & Sustainable Protocols"
        ],
        coursesTaught: ["Mathematical Modeling", "Advanced Data Systems", "Undergraduate Seminar"],
        officeHours: "Mon & Thu: 10:30 AM – 12:30 PM",
        bio: "Dr. Swathi holds a Ph.D. from IISc Bangalore with research focused on data-driven physical modeling and sustainable computational optimization.",
        gender: "f"
      },
      {
        id: "fac-4",
        name: "Dr. M. Sreenivasulu",
        designation: "Assistant Professor",
        qualification: "Ph.D., M.Tech",
        almaMater: "IIT Kharagpur",
        specialization: "Digital Automation, Testing & Experimental Prototyping",
        email: `m.sreenivasulu@rguktrkv.ac.in`,
        phone: "+91 8560 287834 (Ext. 208)",
        cabin: "Room 208, Academic Block-I",
        experience: "8+ Years Teaching",
        publicationsCount: 15,
        patentsCount: 1,
        researchAreas: [
          "Hardware-in-the-Loop Simulation",
          "Smart Prototyping",
          "Industrial Automation Standards"
        ],
        coursesTaught: ["Hardware & Systems Lab", "Engineering Measurements", "Department Core II"],
        officeHours: "Wed & Fri: 11:00 AM – 1:00 PM",
        bio: "Dr. Sreenivasulu leads several sponsored student innovation challenges and oversees departmental laboratory modernization and test setups.",
        gender: "m"
      },
      {
        id: "fac-5",
        name: "Dr. Y. Radhika",
        designation: "Assistant Professor",
        qualification: "Ph.D., Post-Doc (Europe)",
        almaMater: "IIT Hyderabad",
        specialization: "Applied Intelligence, Sensor Fusion & IoT",
        email: `y.radhika@rguktrkv.ac.in`,
        phone: "+91 8560 287834 (Ext. 210)",
        cabin: "Room 210, Academic Block-I",
        experience: "7+ Years Academic Research",
        publicationsCount: 14,
        patentsCount: 1,
        researchAreas: [
          "Edge Analytics",
          "Next-Gen Cyber-Physical Systems",
          "Autonomous Sensor Arrays"
        ],
        coursesTaught: ["Embedded Design Lab", "IoT Applications", "Foundation Engineering"],
        officeHours: "Tue & Fri: 3:30 PM – 5:00 PM",
        bio: "Dr. Radhika completed post-doctoral training in sensor technologies and serves as the mentor for student hackathon cohorts.",
        gender: "f"
      },
      {
        id: "fac-6",
        name: "Mr. B. Rajesh Kumar",
        designation: "Mentor & Lecturer",
        qualification: "M.Tech (First Class with Distinction)",
        almaMater: "JNTU Hyderabad",
        specialization: "Applied Engineering Practicums & Student Mentorship",
        email: `b.rajesh@rguktrkv.ac.in`,
        phone: "+91 8560 287834 (Ext. 212)",
        cabin: "Faculty Lounge 2B, Academic Block-I",
        experience: "6+ Years Teaching & Industry Support",
        publicationsCount: 8,
        patentsCount: 0,
        researchAreas: [
          "Experimental Engineering",
          "Student Peer Learning Methodologies",
          "Industry Capstone Support"
        ],
        coursesTaught: ["Laboratory Practicum I & II", "Technical Workshop Practicums", "Engineering Graphics/Code"],
        officeHours: "Mon to Fri: 4:00 PM – 5:30 PM",
        bio: "Mr. Rajesh Kumar guides first- and second-year undergraduate students during intensive laboratory problem-solving and software tool sessions.",
        gender: "m"
      }
    ];
    return list;
  };

  const facultyList = getDepartmentFaculty();
  const hodFaculty = facultyList.find((f) => f.isHod) || facultyList[0];
  const filteredFaculty = facultyList
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
    });

  const staffMembers = [
    {
      name: "Sri C. H. Venkata Ramana",
      role: "Senior System Administrator & Technical Officer",
      qualification: "B.Tech, CCNA, RedHat Certified",
      responsibilities: "Network infrastructure, GPU server cluster & lab computing administration",
      email: "sysadmin." + dept.id + "@rguktrkv.ac.in"
    },
    {
      name: "Sri G. Suresh Babu",
      role: "Senior Technical Lab Assistant",
      qualification: "Diploma in Engg, B.Sc",
      responsibilities: "Hardware testing setups, equipment calibration & student lab maintenance",
      email: "techassist." + dept.id + "@rguktrkv.ac.in"
    },
    {
      name: "Smt. K. Anitha",
      role: "Junior Technical Assistant",
      qualification: "B.Sc (Comp Science)",
      responsibilities: "Software licenses, terminal setups & test bench provisioning",
      email: "anitha.k@rguktrkv.ac.in"
    },
    {
      name: "Sri D. Narasimhulu",
      role: "Department Superintendent & Record Officer",
      qualification: "M.A., PGDCA",
      responsibilities: "Departmental academic records, circulars, student attendance & official files",
      email: "deptoffice." + dept.id + "@rguktrkv.ac.in"
    }
  ];

  return (
    <div className="container" style={{ paddingBottom: "3rem" }}>
      <div className="page-content-layout">
        {/* Standard Page Sidebar used across all pages */}
        <aside className="page-sidebar" aria-label="Department Navigation">
          <h4 className="sidebar-menu-title">
            Dept of {dept.name}
          </h4>

          <ul className="sidebar-nav-list">
            {menuItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => setActiveTab(item.id)}
                    className={`sidebar-link ${isActive ? "active" : ""}`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>

          <div style={{ marginTop: "1.25rem", paddingTop: "0.75rem", borderTop: "1px solid #e2e8f0" }}>
            <button
              type="button"
              onClick={handleBack}
              className="btn btn-primary"
              style={{
                width: "100%",
                padding: "0.55rem 0.85rem",
                fontSize: "0.85rem",
                textAlign: "center"
              }}
            >
              Back to Previous Page
            </button>
          </div>
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

          {/* Tab 1: Faculty */}
          {activeTab === "faculty" && (
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
                    border: "1px solid #f2cfd5",
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
                      width: "90px",
                      height: "90px",
                      borderRadius: "50%",
                      border: "3px solid var(--accent-gold)",
                      background: "linear-gradient(135deg, #7a0019 0%, #4a000e 100%)",
                      color: "#ffffff",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      boxShadow: "0 4px 10px rgba(0,0,0,0.15)"
                    }}
                  >
                    <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
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
                    onClick={() => setSelectedFaculty(hodFaculty)}
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
                {filteredFaculty.map((fac) => (
                  <div
                    key={fac.id}
                    style={{
                      background: "#ffffff",
                      border: "1px solid #e2e8f0",
                      borderRadius: "10px",
                      padding: "1.15rem 1.45rem",
                      boxShadow: "0 1px 5px rgba(0, 0, 0, 0.04)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "1.25rem",
                      flexWrap: "wrap",
                      transition: "all 0.18s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = "0 5px 14px rgba(0, 0, 0, 0.07)";
                      e.currentTarget.style.borderColor = "#cbd5e1";
                      e.currentTarget.style.transform = "translateY(-1px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "0 1px 5px rgba(0, 0, 0, 0.04)";
                      e.currentTarget.style.borderColor = "#e2e8f0";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    {/* Left Side: Avatar + Details */}
                    <div style={{ display: "flex", alignItems: "center", gap: "1.15rem", flex: "1 1 500px" }}>
                      <div
                        style={{
                          width: "56px",
                          height: "56px",
                          borderRadius: "50%",
                          background: fac.gender === "f" ? "#fdf2f8" : "#f0f9ff",
                          color: fac.gender === "f" ? "#be185d" : "#0284c7",
                          border: `2px solid ${fac.gender === "f" ? "#fbcfe8" : "#bae6fd"}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0
                        }}
                      >
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>

                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.55rem", flexWrap: "wrap", marginBottom: "0.3rem" }}>
                          <h4 style={{ margin: 0, fontSize: "1.06rem", color: "var(--primary-dark)", fontWeight: 700 }}>
                            {fac.name}
                          </h4>
                          <span
                            style={{
                              fontSize: "0.72rem",
                              fontWeight: 700,
                              color: fac.isHod ? "var(--primary-maroon)" : "#0284c7",
                              background: fac.isHod ? "#fdf2f4" : "#f0f9ff",
                              padding: "0.15rem 0.55rem",
                              borderRadius: "4px"
                            }}
                          >
                            {fac.designation.split("&")[0].trim()}
                          </span>
                          <span style={{ fontSize: "0.78rem", color: "#64748b" }}>• {fac.experience.split(" ")[0]} Exp</span>
                        </div>

                        <div style={{ fontSize: "0.85rem", color: "#64748b", lineHeight: 1.45, marginBottom: "0.25rem" }}>
                          <strong style={{ color: "#475569" }}>Qualification:</strong> {fac.qualification} • <span style={{ color: "#334155" }}>{fac.almaMater}</span>
                        </div>

                        <div style={{ fontSize: "0.85rem", color: "#334155", lineHeight: 1.45, marginBottom: "0.35rem" }}>
                          <strong style={{ color: "#64748b" }}>Specialization:</strong> {fac.specialization}
                        </div>

                        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", fontSize: "0.82rem", color: "#475569" }}>
                          <div>
                            <strong>Email:</strong>{" "}
                            <a href={`mailto:${fac.email}`} style={{ color: "var(--primary-maroon)", textDecoration: "none", fontWeight: 600 }}>
                              {fac.email}
                            </a>
                          </div>
                          <div>
                            <strong>Cabin:</strong> {fac.cabin}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Side: Small View Profile Button */}
                    <div style={{ flexShrink: 0 }}>
                      <button
                        type="button"
                        onClick={() => setSelectedFaculty(fac)}
                        className="btn btn-primary"
                        style={{
                          padding: "0.26rem 0.65rem",
                          fontSize: "0.72rem",
                          fontWeight: 600,
                          borderRadius: "5px",
                          whiteSpace: "nowrap",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.25rem",
                          boxShadow: "0 2px 6px rgba(122, 0, 25, 0.25)"
                        }}
                      >
                        View Profile
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
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
          )}

          {/* Tab 2: Staff */}
          {activeTab === "staff" && (
            <div>
              <h3 style={{ color: "var(--primary-dark)", fontSize: "1.35rem", marginBottom: "0.5rem", fontWeight: 800 }}>
                Department Supporting Staff
              </h3>
              <p style={{ fontSize: "0.92rem", color: "#64748b", marginBottom: "1.5rem" }}>
                Dedicated technical officers, laboratory assistants, and administrative personnel ensuring smooth day-to-day operations.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
                {staffMembers.map((staff, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: "#ffffff",
                      border: "1px solid #e2e8f0",
                      borderRadius: "8px",
                      padding: "1.25rem",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                      <div
                        style={{
                          width: "42px",
                          height: "42px",
                          borderRadius: "50%",
                          background: "#f1f5f9",
                          color: "var(--primary-maroon)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 700,
                          fontSize: "1rem"
                        }}
                      >
                        {staff.name.charAt(0)}
                      </div>
                      <div>
                        <h4 style={{ margin: 0, fontSize: "1rem", color: "#0f172a" }}>{staff.name}</h4>
                        <span style={{ fontSize: "0.8rem", color: "#64748b" }}>{staff.qualification}</span>
                      </div>
                    </div>
                    <div style={{ fontSize: "0.82rem", color: "var(--primary-maroon)", fontWeight: 700, marginBottom: "0.35rem" }}>
                      {staff.role}
                    </div>
                    <p style={{ fontSize: "0.82rem", color: "#475569", lineHeight: 1.5, marginBottom: "0.75rem" }}>
                      {staff.responsibilities}
                    </p>
                    <div style={{ fontSize: "0.8rem", color: "#64748b" }}>
                      <strong>Email:</strong> <a href={`mailto:${staff.email}`} style={{ color: "var(--primary-maroon)" }}>{staff.email}</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Curricula */}
          {activeTab === "curricula" && (
            <div>
              <h3 style={{ color: "var(--primary-dark)", fontSize: "1.35rem", marginBottom: "0.5rem", fontWeight: 800 }}>
                Course Curricula & Academic Regulations
              </h3>
              <p style={{ fontSize: "0.92rem", color: "#64748b", marginBottom: "1.5rem" }}>
                Industry-aligned 4-Year B.Tech curriculum designed in accordance with AICTE model framework, Bloom’s Taxonomy, and National Education Policy (NEP 2020).
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
                <div style={{ background: "#f8fafc", padding: "1.25rem", borderRadius: "8px", borderLeft: "4px solid var(--primary-maroon)" }}>
                  <h4 style={{ margin: "0 0 0.25rem 0", color: "var(--primary-maroon)", fontSize: "1rem" }}>Engineering Year 1 (E1)</h4>
                  <p style={{ fontSize: "0.85rem", color: "#475569", margin: 0 }}>Foundations in Mathematics, Programming, Engineering Physics & Basic Sciences.</p>
                </div>
                <div style={{ background: "#f8fafc", padding: "1.25rem", borderRadius: "8px", borderLeft: "4px solid #0284c7" }}>
                  <h4 style={{ margin: "0 0 0.25rem 0", color: "#0284c7", fontSize: "1rem" }}>Engineering Year 2 (E2)</h4>
                  <p style={{ fontSize: "0.85rem", color: "#475569", margin: 0 }}>Core departmental theory, algorithm analysis, circuit design & laboratory practicums.</p>
                </div>
                <div style={{ background: "#f8fafc", padding: "1.25rem", borderRadius: "8px", borderLeft: "4px solid #eab308" }}>
                  <h4 style={{ margin: "0 0 0.25rem 0", color: "#b45309", fontSize: "1rem" }}>Engineering Year 3 (E3)</h4>
                  <p style={{ fontSize: "0.85rem", color: "#475569", margin: 0 }}>Professional electives, summer internships, mini-project, and specialized domain labs.</p>
                </div>
                <div style={{ background: "#f8fafc", padding: "1.25rem", borderRadius: "8px", borderLeft: "4px solid #10b981" }}>
                  <h4 style={{ margin: "0 0 0.25rem 0", color: "#047857", fontSize: "1rem" }}>Engineering Year 4 (E4)</h4>
                  <p style={{ fontSize: "0.85rem", color: "#475569", margin: 0 }}>Capstone major project, open interdisciplinary electives & industry placement semesters.</p>
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
          )}

          {/* Tab 4: Board of Studies (BoS) */}
          {activeTab === "bos" && (
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
          )}

          {/* Tab 5: Lab Facilities */}
          {activeTab === "labs" && (
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
          )}

          {/* Tab 6: Contact */}
          {activeTab === "contact" && (
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
          )}

          {/* Tab 7: Student Recreation Centre */}
          {activeTab === "recreation" && (
            <div>
              <h3 style={{ color: "var(--primary-dark)", fontSize: "1.35rem", marginBottom: "0.5rem", fontWeight: 800 }}>
                Student Recreation & Technical Hub
              </h3>
              <p style={{ fontSize: "0.92rem", color: "#64748b", marginBottom: "1.5rem" }}>
                Fostering holistic growth, technical innovation, student chapters, leadership clubs, and peer learning communities.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem", marginBottom: "2rem" }}>
                <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", padding: "1.25rem", borderRadius: "8px" }}>
                  <h4 style={{ margin: "0 0 0.5rem 0", color: "var(--primary-maroon)", fontSize: "1rem" }}>Technical Chapters & Clubs</h4>
                  <p style={{ fontSize: "0.85rem", color: "#475569", margin: 0 }}>
                    Active student branch chapters organized under national/international bodies (ACM, IEEE, CSI, SAE, IIChE) hosting weekly code sprints, circuit-building hackathons, and tech seminars.
                  </p>
                </div>
                <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", padding: "1.25rem", borderRadius: "8px" }}>
                  <h4 style={{ margin: "0 0 0.5rem 0", color: "var(--primary-maroon)", fontSize: "1rem" }}>Annual Department Symposium</h4>
                  <p style={{ fontSize: "0.85rem", color: "#475569", margin: 0 }}>
                    Grand inter-college technical symposium featuring project exhibitions, paper presentations, robotic wars, coding hackathons, and guest lectures from industry luminaries.
                  </p>
                </div>
                <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", padding: "1.25rem", borderRadius: "8px" }}>
                  <h4 style={{ margin: "0 0 0.5rem 0", color: "var(--primary-maroon)", fontSize: "1rem" }}>Department Library & Discussion Room</h4>
                  <p style={{ fontSize: "0.85rem", color: "#475569", margin: 0 }}>
                    Quiet peer study lounges, digital library kiosks, IEEE Xplore access terminals, and brainstorming whiteboard rooms for hackathon squads.
                  </p>
                </div>
              </div>

              <div style={{ background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)", border: "1px solid #bbf7d0", padding: "1.25rem", borderRadius: "8px" }}>
                <h4 style={{ margin: "0 0 0.5rem 0", color: "#166534", fontSize: "0.95rem" }}>Indoor Recreation & Sports Corner</h4>
                <p style={{ fontSize: "0.85rem", color: "#15803d", margin: 0 }}>
                  Recreational chess tables, table tennis boards, and relaxing open air balconies within the academic block to unwind between intensive lab sessions.
                </p>
              </div>
            </div>
          )}
        </article>
      </div>

      {/* Comprehensive Faculty Profile Modal */}
      {selectedFaculty && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedFaculty(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(15, 23, 42, 0.65)",
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: "1rem"
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#ffffff",
              borderRadius: "12px",
              maxWidth: "680px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.25)",
              border: "1px solid #e2e8f0",
              position: "relative"
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                background: "linear-gradient(135deg, #7a0019 0%, #4a000e 100%)",
                color: "#ffffff",
                padding: "1.75rem",
                borderRadius: "12px 12px 0 0",
                position: "relative",
                display: "flex",
                alignItems: "center",
                gap: "1.25rem"
              }}
            >
              <button
                type="button"
                onClick={() => setSelectedFaculty(null)}
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  background: "rgba(255, 255, 255, 0.2)",
                  border: "none",
                  color: "#ffffff",
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  fontSize: "1.1rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
                aria-label="Close Modal"
              >
                ✕
              </button>

              {/* Modal Avatar */}
              <div
                style={{
                  width: "78px",
                  height: "78px",
                  borderRadius: "50%",
                  border: "3px solid var(--accent-gold)",
                  background: "#ffffff",
                  color: "var(--primary-maroon)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2rem",
                  flexShrink: 0
                }}
              >
                <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>

              <div>
                <span
                  style={{
                    background: "var(--accent-gold)",
                    color: "var(--primary-dark)",
                    fontSize: "0.72rem",
                    fontWeight: 800,
                    padding: "0.2rem 0.5rem",
                    borderRadius: "4px",
                    textTransform: "uppercase"
                  }}
                >
                  {selectedFaculty.isHod ? "Head of the Department" : selectedFaculty.designation}
                </span>
                <h3 style={{ margin: "0.35rem 0 0.15rem 0", fontSize: "1.45rem", fontWeight: 800 }}>
                  {selectedFaculty.name}
                </h3>
                <p style={{ margin: 0, fontSize: "0.85rem", opacity: 0.9 }}>
                  {selectedFaculty.qualification} • {selectedFaculty.almaMater}
                </p>
              </div>
            </div>

            {/* Modal Body Content */}
            <div style={{ padding: "1.75rem" }}>
              {/* Bio */}
              <div style={{ marginBottom: "1.5rem" }}>
                <h4 style={{ color: "var(--primary-dark)", fontSize: "1rem", marginBottom: "0.4rem" }}>
                  Academic Biography
                </h4>
                <p style={{ fontSize: "0.9rem", color: "#475569", lineHeight: 1.6, margin: 0 }}>
                  {selectedFaculty.bio}
                </p>
              </div>

              {/* Research Areas */}
              <div style={{ marginBottom: "1.5rem" }}>
                <h4 style={{ color: "var(--primary-dark)", fontSize: "1rem", marginBottom: "0.5rem" }}>
                  Specialization & Research Domains
                </h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {selectedFaculty.researchAreas.map((area, idx) => (
                    <span
                      key={idx}
                      style={{
                        background: "#f1f5f9",
                        color: "#334155",
                        fontSize: "0.82rem",
                        padding: "0.3rem 0.65rem",
                        borderRadius: "4px",
                        fontWeight: 600,
                        border: "1px solid #e2e8f0"
                      }}
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick Details Table */}
              <div style={{ background: "#f8fafc", padding: "1rem", borderRadius: "8px", border: "1px solid #e2e8f0", marginBottom: "1.5rem", fontSize: "0.86rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "0.75rem" }}>
                  <div>
                    <strong style={{ color: "#0f172a" }}>Official Email:</strong><br />
                    <a href={`mailto:${selectedFaculty.email}`} style={{ color: "var(--primary-maroon)" }}>
                      {selectedFaculty.email}
                    </a>
                  </div>
                  <div>
                    <strong style={{ color: "#0f172a" }}>Office / Cabin:</strong><br />
                    <span>{selectedFaculty.cabin}</span>
                  </div>
                  <div>
                    <strong style={{ color: "#0f172a" }}>Research Publications:</strong><br />
                    <span>{selectedFaculty.publicationsCount}+ Scopus / SCI Papers</span>
                  </div>
                  <div>
                    <strong style={{ color: "#0f172a" }}>Office Consultation Hours:</strong><br />
                    <span>{selectedFaculty.officeHours}</span>
                  </div>
                </div>
              </div>

              {/* Teaching Courses */}
              <div style={{ marginBottom: "1.5rem" }}>
                <h4 style={{ color: "var(--primary-dark)", fontSize: "1rem", marginBottom: "0.5rem" }}>
                  Courses Instructed in B.Tech
                </h4>
                <ul style={{ paddingLeft: "1.25rem", margin: 0, fontSize: "0.88rem", color: "#475569", display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                  {selectedFaculty.coursesTaught.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>

              {/* Modal Footer */}
              <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.75rem", borderTop: "1px solid #e2e8f0", paddingTop: "1.25rem" }}>
                <button
                  type="button"
                  onClick={() => setSelectedFaculty(null)}
                  className="btn btn-secondary"
                  style={{ fontSize: "0.85rem", padding: "0.5rem 1rem" }}
                >
                  Close
                </button>
                <a
                  href={`mailto:${selectedFaculty.email}?subject=Inquiry from RGUKT RK Valley Portal`}
                  className="btn btn-primary"
                  style={{ fontSize: "0.85rem", padding: "0.5rem 1rem", textDecoration: "none" }}
                >
                  Send Email to Faculty →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
