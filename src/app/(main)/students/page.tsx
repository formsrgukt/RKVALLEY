import React from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata = {
  title: "Student Life & Welfare | RGUKT RK Valley",
  description: "Hostels, central dining, Student Activity Center (SAC) clubs, sports complex, and campus life."
};

export default function StudentsPage() {
  return (
    <div className="page-view-container">
      <Breadcrumb title="Student Life & Welfare Services" category="Students" />

      <div className="container">
        <div className="page-content-layout">
          <aside className="page-sidebar" aria-label="Section Navigation">
            <h4 className="sidebar-menu-title">Explore Section</h4>
            <ul className="sidebar-nav-list">
              <li><Link href="/students" className="sidebar-link active">Hostels & Campus Life</Link></li>
              <li><Link href="/grievance" className="sidebar-link">Anti-Ragging & Grievance</Link></li>
              <li><Link href="/library" className="sidebar-link">Central Library</Link></li>
              <li><Link href="/placements" className="sidebar-link">Career Development</Link></li>
            </ul>
          </aside>

          <article className="page-main-body">
            <h3>Holistic Residential Campus Experience</h3>
            <p style={{ fontSize: "1rem", color: "#334155", marginBottom: "1.5rem" }}>
              Life at RGUKT RK Valley is an immersive 24x7 residential journey where academics seamlessly blend with sports, cultural festivals, student innovation clubs, and leadership activities.
            </p>

            <img
              src="/images/sports_complex.jpg"
              alt="University Sports Stadium"
              style={{ borderRadius: "12px", marginBottom: "2rem", width: "100%", maxHeight: "400px", objectFit: "cover" }}
            />

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem", marginBottom: "2rem" }}>
              <div style={{ background: "#fff", border: "1px solid #e2e8f0", padding: "1.25rem", borderRadius: "8px" }}>
                <h5 style={{ color: "var(--primary-dark)", fontWeight: 700 }}>Hostels & Dining</h5>
                <p style={{ fontSize: "0.82rem", color: "#64748b", marginTop: "0.35rem" }}>
                  Dedicated hostel blocks for boys and girls with RO purified water, hot water geysers, 24x7 security, and student-monitored mess committees.
                </p>
              </div>

              <div style={{ background: "#fff", border: "1px solid #e2e8f0", padding: "1.25rem", borderRadius: "8px" }}>
                <h5 style={{ color: "var(--primary-dark)", fontWeight: 700 }}>Student Activity Center (SAC)</h5>
                <p style={{ fontSize: "0.82rem", color: "#64748b", marginTop: "0.35rem" }}>
                  Vibrant technical, coding, robotic, literary, music, dance, and fine arts clubs organizing annual fests like &lsquo;Abhiyanth&rsquo; and &lsquo;Kalasrjan&rsquo;.
                </p>
              </div>

              <div style={{ background: "#fff", border: "1px solid #e2e8f0", padding: "1.25rem", borderRadius: "8px" }}>
                <h5 style={{ color: "var(--primary-dark)", fontWeight: 700 }}>24x7 Campus Hospital</h5>
                <p style={{ fontSize: "0.82rem", color: "#64748b", marginTop: "0.35rem" }}>
                  30-bed in-house hospital with resident medical doctors, paramedical staff, emergency ambulance, and full pharmacy.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
