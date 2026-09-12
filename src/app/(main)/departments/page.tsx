import React from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { RGUKT_DATA } from "@/data/rguktData";

export const metadata = {
  title: "Departments Directory | RGUKT RK Valley",
  description: "Explore 12 academic departments, course curricula, laboratory facilities, and faculty members."
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
              Discover our 12 specialized departments equipped with state-of-the-art laboratories, experienced faculty, and industry-aligned curricula.
            </p>

            <div className="departments-grid">
              {RGUKT_DATA.departments.map((d) => (
                <div key={d.id} className="department-card">
                  <div className="dept-header">
                    <span className="dept-code-badge">{d.code}</span>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--accent-royal)" }}>{d.category}</span>
                  </div>
                  <h4 className="dept-title">{d.name}</h4>
                  <p className="dept-overview">{d.overview}</p>
                  <div className="dept-meta-pills">
                    <span><strong>{d.facultyCount}</strong> Faculty</span> • 
                    <span><strong>{d.labsCount}</strong> Labs</span> • 
                    <span><strong>{d.studentCount}</strong> Students</span>
                  </div>
                  <div style={{ background: "#f8fafc", padding: "0.75rem", borderRadius: "6px", marginBottom: "1rem", fontSize: "0.8rem", color: "#475569" }}>
                    <strong>HOD:</strong> {d.hod}<br />
                    <strong>Email:</strong> {d.hodEmail}
                  </div>
                  <Link href={`/departments/${d.id}`} className="btn btn-primary" style={{ padding: "0.45rem 1rem", fontSize: "0.82rem" }}>
                    View Syllabus & Labs →
                  </Link>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
