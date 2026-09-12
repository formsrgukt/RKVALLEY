import React from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { RGUKT_DATA } from "@/data/rguktData";

export const metadata = {
  title: "Administration & Governance | RGUKT RK Valley",
  description: "Chancellor, Vice Chancellor, Campus Director, and Administrative Officers of RGUKT RK Valley."
};

export default function AdministrationPage() {
  return (
    <div className="page-view-container">
      <Breadcrumb title="University Administration & Leadership" category="Administration" />

      <div className="container">
        <div className="page-content-layout">
          <aside className="page-sidebar" aria-label="Section Navigation">
            <h4 className="sidebar-menu-title">Explore Section</h4>
            <ul className="sidebar-nav-list">
              <li><Link href="/administration" className="sidebar-link active">Governing Leadership</Link></li>
              <li><Link href="/about" className="sidebar-link">About RGUKT</Link></li>
              <li><Link href="/departments" className="sidebar-link">Faculty & Departments</Link></li>
              <li><Link href="/contact" className="sidebar-link">Telephone Directory</Link></li>
            </ul>
          </aside>

          <article className="page-main-body">
            <h3>Statutory Officers & Key Administration</h3>
            <p style={{ marginBottom: "2rem", color: "#475569" }}>
              Meet the distinguished academic leaders and administrative officers guiding RGUKT RK Valley.
            </p>

            <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: "3rem" }}>
              {RGUKT_DATA.leadership.map((l) => (
                <div key={l.id} style={{
                  display: "flex",
                  flexDirection: "row",
                  background: "var(--surface-card)",
                  borderRadius: "var(--radius-xl)",
                  border: "1px solid var(--border-subtle)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-sm)",
                  width: "100%",
                  alignItems: "stretch"
                }}>
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "2.5rem" }}>
                    <h4 style={{ fontSize: "1.6rem", color: "var(--primary-dark)", fontWeight: 800, margin: "0 0 0.5rem 0" }}>{l.name}</h4>
                    <span style={{ fontSize: "0.9rem", color: "#64748b", marginBottom: "1rem", display: "block", fontWeight: 500 }}>{l.qualifications}</span>
                    <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: 1.7, fontStyle: "italic", marginBottom: "1.5rem" }}>&ldquo;{l.message}&rdquo;</p>
                    <Link
                      href={`/leadership/${l.id}`}
                      style={{ 
                        alignSelf: "flex-start", 
                        color: "var(--primary-maroon)", 
                        fontWeight: 700, 
                        fontSize: "0.9rem", 
                        textDecoration: "none"
                      }}
                      className="hover-underline"
                    >
                      View Full Profile →
                    </Link>
                  </div>
                  <div style={{ width: "300px", position: "relative", flexShrink: 0 }}>
                    <img src={l.image} alt={l.name} style={{ width: "100%", height: "100%", minHeight: "350px", objectFit: "cover", objectPosition: "center" }} />
                    <span style={{ 
                      position: "absolute", 
                      bottom: "1.25rem", 
                      right: "1.25rem",
                      background: "var(--primary-maroon)",
                      color: "#fff",
                      fontSize: "0.7rem",
                      fontWeight: 800,
                      padding: "0.3rem 0.6rem",
                      borderRadius: "4px",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px"
                    }}>
                      {l.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <h4 style={{ marginBottom: "1rem", color: "var(--primary-dark)" }}>Campus Officers & Deans Directory</h4>
            <div style={{ overflowX: "auto" }}>
              <div className="table-responsive"><table className="gov-table">
                <thead>
                  <tr>
                    <th>Designation / Role</th>
                    <th>Officer In-Charge</th>
                    <th>Official Email</th>
                    <th>Phone / Contact</th>
                  </tr>
                </thead>
                <tbody>
                  {RGUKT_DATA.administration.map((a, i) => (
                    <tr key={i}>
                      <td><strong>{a.role}</strong></td>
                      <td>{a.name}</td>
                      <td><a href={`mailto:${a.email}`}>{a.email}</a></td>
                      <td>{a.phone}</td>
                    </tr>
                  ))}
                </tbody>
              </table></div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

