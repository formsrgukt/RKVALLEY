"use client";

import React from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { RGUKT_DATA } from "@/data/rguktData";
import { useApp } from "@/context/AppContext";

export default function PlacementsPage() {
  const { openDocModal } = useApp();

  return (
    <div className="page-view-container">
      <Breadcrumb title="Career Development & Placement Cell (CDPC)" category="Placements" />

      <div className="container">
        <div className="page-content-layout">
          <aside className="page-sidebar" aria-label="Section Navigation">
            <h4 className="sidebar-menu-title">Explore Section</h4>
            <ul className="sidebar-nav-list">
              <li><Link href="/placements" className="sidebar-link active">CDPC Overview</Link></li>
              <li><Link href="/departments" className="sidebar-link">Department Statistics</Link></li>
              <li><Link href="/careers" className="sidebar-link">Recruiter Portal</Link></li>
            </ul>
          </aside>

          <article className="page-main-body">
            <h3>Placement Record & Industry Connect</h3>
            <p style={{ fontSize: "1.05rem", color: "#334155", marginBottom: "1.5rem" }}>
              {RGUKT_DATA.placements.overview}
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.25rem", marginBottom: "2.5rem" }}>
              <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", padding: "1.25rem", borderRadius: "10px", textAlign: "center" }}>
                <span style={{ fontSize: "2rem", fontWeight: 800, color: "var(--accent-gold)", display: "block" }}>
                  {RGUKT_DATA.placements.stats.highestPackage}
                </span>
                <span style={{ fontSize: "0.85rem", color: "#64748b", fontWeight: 600 }}>Highest CTC Package</span>
              </div>
              <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", padding: "1.25rem", borderRadius: "10px", textAlign: "center" }}>
                <span style={{ fontSize: "2rem", fontWeight: 800, color: "var(--accent-royal)", display: "block" }}>
                  {RGUKT_DATA.placements.stats.averagePackage}
                </span>
                <span style={{ fontSize: "0.85rem", color: "#64748b", fontWeight: 600 }}>Average CTC Package</span>
              </div>
              <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", padding: "1.25rem", borderRadius: "10px", textAlign: "center" }}>
                <span style={{ fontSize: "2rem", fontWeight: 800, color: "var(--status-emerald)", display: "block" }}>
                  {RGUKT_DATA.placements.stats.offersCount}
                </span>
                <span style={{ fontSize: "0.85rem", color: "#64748b", fontWeight: 600 }}>Offers Generated</span>
              </div>
              <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", padding: "1.25rem", borderRadius: "10px", textAlign: "center" }}>
                <span style={{ fontSize: "2rem", fontWeight: 800, color: "var(--primary-dark)", display: "block" }}>
                  {RGUKT_DATA.placements.stats.companiesVisited}
                </span>
                <span style={{ fontSize: "0.85rem", color: "#64748b", fontWeight: 600 }}>Recruiting Partners</span>
              </div>
            </div>

            <h4 style={{ marginBottom: "1rem", color: "var(--primary-dark)" }}>CDPC Rigorous Training Modules</h4>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
              {RGUKT_DATA.placements.trainingModules.map((t, i) => (
                <div key={i} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "1.25rem", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
                  <h5 style={{ color: "var(--primary-dark)", fontSize: "0.95rem", marginBottom: "0.25rem" }}>{t.title}</h5>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--accent-royal)" }}>{t.duration}</span>
                  <p style={{ fontSize: "0.8rem", color: "#64748b", marginTop: "0.35rem" }}>Conducted by: {t.trainer}</p>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="btn btn-primary"
              onClick={() => openDocModal("Placement Brochure 2026", "Placement_Brochure_RGUKT_RKV_2026.pdf")}
            >
              Download CDPC Placement Brochure (PDF)
            </button>
          </article>
        </div>
      </div>
    </div>
  );
}
