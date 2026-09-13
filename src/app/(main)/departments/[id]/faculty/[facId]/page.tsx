import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { RGUKT_DATA } from "@/data/rguktData";
import { getDepartmentFaculty } from "@/data/facultyData";
import { DEPARTMENT_SECTIONS } from "@/data/departmentSections";
import FacultyProfileClient from "./FacultyProfileClient";
interface FacultyProfilePageProps {
  params: Promise<{ id: string; facId: string }>;
}

export default async function FacultyProfilePage({ params }: FacultyProfilePageProps) {
  const { id, facId } = await params;
  
  const dept = RGUKT_DATA.departments.find((d) => d.id === id);
  if (!dept) return notFound();

  const facultyList = getDepartmentFaculty(dept);
  const faculty = facultyList.find((f) => f.id === facId);
  
  if (!faculty) return notFound();

  return (
    <div className="container" style={{ padding: "3rem 1rem", minHeight: "80vh" }}>
      <div style={{ width: "100%", margin: "0 auto" }}>
        {/* Breadcrumb Navigation */}
        <div style={{ marginBottom: "2rem", fontSize: "0.9rem" }}>
          <Link href="/departments" style={{ color: "#64748b", textDecoration: "none" }}>Departments</Link>
          <span style={{ margin: "0 0.5rem", color: "#cbd5e1" }}>/</span>
          <Link href={`/departments/${dept.id}`} style={{ color: "#64748b", textDecoration: "none" }}>{dept.name}</Link>
          <span style={{ margin: "0 0.5rem", color: "#cbd5e1" }}>/</span>
          <span style={{ color: "var(--primary-dark)", fontWeight: 600 }}>{faculty.name}</span>
        </div>

        {/* Profile Card */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: "12px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
            border: "1px solid #e2e8f0",
            overflow: "hidden"
          }}
        >
          {/* Header Section */}
          <div
            style={{
              background: "rgba(90, 0, 18, 0.85)",
              color: "#ffffff",
              padding: "2.5rem 2rem",
              position: "relative",
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              flexWrap: "wrap",
              borderBottom: "none"
            }}
          >
            {/* Avatar */}
            <div
              style={{
                width: "120px",
                height: "160px",
                borderRadius: "16px",
                border: "2px solid var(--accent-gold)",
                background: faculty.image ? `url(${faculty.image}) center top / cover no-repeat` : "#ffffff",
                color: "var(--primary-maroon)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "3rem",
                flexShrink: 0,
                boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
              }}
            >
              {!faculty.image && (
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              )}
            </div>

            <div style={{ flex: 1, minWidth: "300px" }}>
              <span
                style={{
                  background: "var(--accent-gold)",
                  color: "var(--primary-dark)",
                  fontSize: "0.8rem",
                  fontWeight: 800,
                  padding: "0.3rem 0.6rem",
                  borderRadius: "6px",
                  textTransform: "uppercase",
                  display: "inline-block",
                  marginBottom: "0.75rem"
                }}
              >
                {faculty.isHod ? "Head of the Department" : faculty.designation}
              </span>
              <h1 style={{ margin: "0 0 0.25rem 0", fontSize: "2rem", fontWeight: 800, color: "#ffffff" }}>
                {faculty.name}
              </h1>
              <p style={{ margin: 0, fontSize: "1rem", color: "#f8fafc" }}>
                {faculty.qualification} • <em>{faculty.almaMater}</em>
              </p>
            </div>
          </div>

          {/* Body Section */}
          <div style={{ padding: "2rem" }}>
            {/* Quick Details Grid */}
            <div style={{ background: "#f8fafc", padding: "1.5rem", borderRadius: "8px", border: "1px solid #e2e8f0", marginBottom: "2rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
                <div>
                  <strong style={{ color: "#0f172a", display: "block", marginBottom: "0.25rem" }}>Official Email:</strong>
                  <a href={`mailto:${faculty.email}`} style={{ color: "var(--primary-maroon)", textDecoration: "none", fontWeight: 500 }}>
                    {faculty.email}
                  </a>
                </div>
                <div>
                  <strong style={{ color: "#0f172a", display: "block", marginBottom: "0.25rem" }}>Office / Cabin:</strong>
                  <span style={{ color: "#475569" }}>{faculty.cabin}</span>
                </div>
                <div>
                  <strong style={{ color: "#0f172a", display: "block", marginBottom: "0.25rem" }}>Research Publications:</strong>
                  <span style={{ color: "#475569" }}>{faculty.publicationsCount}+ Scopus / SCI Papers</span>
                </div>
                <div>
                  <strong style={{ color: "#0f172a", display: "block", marginBottom: "0.25rem" }}>Office Consultation Hours:</strong>
                  <span style={{ color: "#475569" }}>{faculty.officeHours}</span>
                </div>
              </div>
            </div>
            
            {/* Dynamic Detailed Profile Rendered on Client */}
            <FacultyProfileClient initialFaculty={faculty} />

            {/* Actions */}
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem", borderTop: "1px solid #e2e8f0", paddingTop: "1.5rem" }}>
              <Link
                href={`/departments/${dept.id}`}
                className="btn btn-secondary"
                style={{ fontSize: "0.9rem", padding: "0.6rem 1.2rem", textDecoration: "none" }}
              >
                Back to Department
              </Link>
              <a
                href={`mailto:${faculty.email}?subject=Inquiry from RGUKT RK Valley Portal`}
                className="btn btn-primary"
                style={{ fontSize: "0.9rem", padding: "0.6rem 1.2rem", textDecoration: "none" }}
              >
                Send Email to Faculty →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
