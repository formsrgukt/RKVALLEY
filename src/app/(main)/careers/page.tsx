"use client";

import React from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { RGUKT_DATA, Career } from "@/data/rguktData";
import { useApp } from "@/context/AppContext";

export default function CareersPage() {
  const { openDocModal } = useApp();

  return (
    <div className="page-view-container">
      <Breadcrumb title="Careers & Faculty Recruitment" category="Careers" />

      <div className="container">
        <div className="page-content-layout">
          <aside className="page-sidebar" aria-label="Section Navigation">
            <h4 className="sidebar-menu-title">Explore Section</h4>
            <ul className="sidebar-nav-list">
              <li><Link href="/careers" className="sidebar-link active">Current Openings</Link></li>
              <li><Link href="/tenders" className="sidebar-link">Tenders</Link></li>
              <li><Link href="/departments" className="sidebar-link">Faculty & Departments</Link></li>
            </ul>
          </aside>

          <article className="page-main-body">
            <h3>Employment Opportunities at RGUKT RK Valley</h3>
            <p style={{ marginBottom: "1.5rem", color: "#475569" }}>
              Join our prestigious faculty and technical staff committed to empowering rural youth through cutting-edge technology education.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {RGUKT_DATA.careers.map((c: Career) => (
                <div key={c.id} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "1.5rem", boxShadow: "0 2px 4px rgba(0,0,0,0.04)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--accent-royal)", textTransform: "uppercase" }}>{c.advtNo}</span>
                    <span className="table-badge-active">{c.status}</span>
                  </div>
                  <h4 style={{ fontSize: "1.15rem", color: "var(--primary-dark)", marginBottom: "0.35rem" }}>{c.post}</h4>
                  <p style={{ fontSize: "0.85rem", color: "#475569", marginBottom: "0.5rem" }}><strong>Departments:</strong> {c.department}</p>
                  <p style={{ fontSize: "0.82rem", color: "#64748b", marginBottom: "1rem" }}><strong>Eligibility:</strong> {c.qualification}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #f1f5f9", paddingTop: "0.75rem" }}>
                    <span style={{ fontSize: "0.8rem", color: "#dc2626", fontWeight: 600 }}>Last Date: {c.lastDate}</span>
                    <button
                      type="button"
                      className="btn btn-primary"
                      style={{ padding: "0.35rem 0.85rem", fontSize: "0.8rem" }}
                      onClick={() => openDocModal(`${c.post} Application Form`, c.formUrl)}
                    >
                      Download Application Form
                    </button>
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
