import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { RGUKT_DATA } from "@/data/rguktData";

export async function generateStaticParams() {
  return RGUKT_DATA.departments.map((d) => ({
    id: d.id
  }));
}

export default async function DepartmentDetailPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const dept = RGUKT_DATA.departments.find((d) => d.id === id);

  if (!dept) {
    notFound();
  }

  return (
    <div className="page-view-container">
      <Breadcrumb title={`${dept.name} (${dept.code})`} category="Department" />

      <div className="container">
        <div className="page-content-layout">
          <aside className="page-sidebar" aria-label="Section Navigation">
            <h4 className="sidebar-menu-title">Departments List</h4>
            <ul className="sidebar-nav-list">
              {RGUKT_DATA.departments.map((d) => (
                <li key={d.id}>
                  <Link
                    href={`/departments/${d.id}`}
                    className={`sidebar-link ${d.id === id ? "active" : ""}`}
                  >
                    {d.code} - {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>

          <article className="page-main-body">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem", flexWrap: "wrap", gap: "0.5rem" }}>
              <div>
                <span className="badge-category" style={{ marginBottom: "0.5rem", display: "inline-block" }}>
                  {dept.category} Department
                </span>
                <h3 style={{ color: "var(--primary-dark)", fontSize: "1.75rem" }}>{dept.name}</h3>
              </div>
              <span className="dept-code-badge" style={{ fontSize: "1rem", padding: "0.35rem 0.85rem" }}>
                {dept.code}
              </span>
            </div>

            <p style={{ fontSize: "1.05rem", color: "#334155", lineHeight: 1.6, marginBottom: "1.5rem" }}>
              {dept.overview}
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginBottom: "2rem" }}>
              <div style={{ background: "#f8fafc", padding: "1rem", borderRadius: "8px", textAlign: "center", border: "1px solid #e2e8f0" }}>
                <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--accent-royal)", display: "block" }}>{dept.facultyCount}</span>
                <span style={{ fontSize: "0.8rem", color: "#64748b" }}>Faculty Members</span>
              </div>
              <div style={{ background: "#f8fafc", padding: "1rem", borderRadius: "8px", textAlign: "center", border: "1px solid #e2e8f0" }}>
                <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--accent-gold)", display: "block" }}>{dept.labsCount}</span>
                <span style={{ fontSize: "0.8rem", color: "#64748b" }}>Advanced Labs</span>
              </div>
              <div style={{ background: "#f8fafc", padding: "1rem", borderRadius: "8px", textAlign: "center", border: "1px solid #e2e8f0" }}>
                <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--status-emerald)", display: "block" }}>{dept.studentCount}</span>
                <span style={{ fontSize: "0.8rem", color: "#64748b" }}>Enrolled Students</span>
              </div>
            </div>

            <h4 style={{ color: "var(--primary-dark)", marginBottom: "0.75rem" }}>Department Laboratories & Studios</h4>
            <ul style={{ paddingLeft: "1.25rem", marginBottom: "2rem", display: "flex", flexDirection: "column", gap: "0.4rem", color: "#475569" }}>
              {dept.labs.map((lab, i) => (
                <li key={i}><strong>{lab}</strong></li>
              ))}
            </ul>

            <h4 style={{ color: "var(--primary-dark)", marginBottom: "0.75rem" }}>Key Department Highlights & Collaborations</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "2rem" }}>
              {dept.highlights.map((h, i) => (
                <div key={i} style={{ background: "#f0f9ff", borderLeft: "4px solid var(--accent-royal)", padding: "0.75rem 1rem", borderRadius: "4px", fontSize: "0.88rem", color: "#0369a1" }}>
                  ✓ {h}
                </div>
              ))}
            </div>

            <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "1.25rem" }}>
              <h5 style={{ color: "var(--primary-dark)", fontWeight: 700, marginBottom: "0.35rem" }}>Department Leadership Contact</h5>
              <p style={{ fontSize: "0.88rem", color: "#475569" }}>
                <strong>Head of Department:</strong> {dept.hod}<br />
                <strong>Official Email:</strong> <a href={`mailto:${dept.hodEmail}`}>{dept.hodEmail}</a>
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
