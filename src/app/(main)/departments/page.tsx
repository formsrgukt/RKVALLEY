import React from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { RGUKT_DATA } from "@/data/rguktData";

export const metadata = {
  title: "Departments Directory | RGUKT RK Valley",
  description: "Explore 13 academic departments, course curricula, laboratory facilities, and faculty members."
};

export default function DepartmentsPage() {
  return (
    <div className="page-view-container">
      <Breadcrumb title="Academic Departments Directory" category="Departments" />

      <div className="container">
        <div className="page-content-layout">
          <aside className="page-sidebar" aria-label="Section Navigation">
            <h4 className="sidebar-menu-title">Explore Section</h4>
            <ul className="sidebar-nav-list">
              <li><Link href="/departments" className="sidebar-link active">All Departments</Link></li>
              <li><Link href="/academics" className="sidebar-link">Curriculum & Syllabus</Link></li>
              <li><Link href="/research" className="sidebar-link">Research Centers</Link></li>
              <li><Link href="/admissions" className="sidebar-link">Admissions</Link></li>
            </ul>
          </aside>

          <article className="page-main-body">
            <h3>Explore Academic & Engineering Departments</h3>
            <p style={{ marginBottom: "2rem", color: "#475569" }}>
              Discover our 13 specialized departments equipped with state-of-the-art laboratories, experienced faculty, and industry-aligned curricula.
            </p>

            <div className="academic-two-col-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "1.25rem", marginBottom: "2rem" }}>
              {RGUKT_DATA.departments.map((d) => (
                <div
                  key={d.id}
                  style={{
                    background: "#ffffff",
                    borderTop: "1px solid #e2e8f0",
                    borderRight: "1px solid #e2e8f0",
                    borderBottom: "1px solid #e2e8f0",
                    borderLeft: "4px solid var(--accent-royal)",
                    padding: "1.25rem",
                    borderRadius: "8px",
                    boxShadow: "0 1px 4px rgba(0, 0, 0, 0.05)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.2s ease"
                  }}
                >
                  <div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem", marginBottom: "0.35rem" }}>
                      <h5 style={{ color: "var(--accent-royal)", fontWeight: 700, fontSize: "1.02rem", margin: 0 }}>
                        {d.name}
                      </h5>
                      <span
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 800,
                          color: "var(--accent-royal)",
                          background: "#fdf2f4",
                          padding: "0.15rem 0.5rem",
                          borderRadius: "4px",
                          flexShrink: 0
                        }}
                      >
                        {d.code}
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: "0.85rem",
                        color: "#475569",
                        margin: "0 0 0.85rem 0",
                        lineHeight: 1.45,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden"
                      }}
                    >
                      {d.overview}
                    </p>
                    <div style={{ display: "flex", gap: "0.75rem", fontSize: "0.78rem", color: "#64748b", marginBottom: "0.85rem", flexWrap: "wrap" }}>
                      <span><strong>{d.facultyCount}</strong> Faculty</span> • 
                      <span><strong>{d.labsCount}</strong> Labs</span> • 
                      <span><strong>{d.studentCount}</strong> Students</span>
                    </div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto", paddingTop: "0.5rem", borderTop: "1px dashed #f1f5f9" }}>
                    <span style={{ fontSize: "0.78rem", color: "#64748b" }}>
                      <strong>HOD:</strong> {d.hod.split(",")[0]}
                    </span>
                    <Link
                      href={`/departments/${d.id}`}
                      className="btn btn-primary"
                      style={{
                        padding: "0.3rem 0.75rem",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        borderRadius: "5px",
                        boxShadow: "0 2px 6px rgba(122, 0, 25, 0.25)"
                      }}
                    >
                      View Department →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
