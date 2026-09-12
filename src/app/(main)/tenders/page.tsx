"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Tender } from "@/data/rguktData";
import { fetchTenders } from "@/lib/db/tenders";
import { useApp } from "@/context/AppContext";

export default function TendersPage() {
  const { openDocModal } = useApp();
  const [search, setSearch] = useState("");
  const [tendersData, setTendersData] = useState<Tender[]>([]);

  useEffect(() => {
    fetchTenders().then(setTendersData).catch(console.error);
  }, []);

  const filtered = tendersData.filter(
    (t) =>
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.refNo.toLowerCase().includes(search.toLowerCase()) ||
      t.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-view-container">
      <Breadcrumb title="Tenders & Procurement Portal" category="Tenders" />

      <div className="container">
        <div className="page-content-layout">
          <aside className="page-sidebar" aria-label="Section Navigation">
            <h4 className="sidebar-menu-title">Explore Section</h4>
            <ul className="sidebar-nav-list">
              <li><Link href="/tenders" className="sidebar-link active">Active Tenders</Link></li>
              <li><Link href="/careers" className="sidebar-link">Careers & Recruitment</Link></li>
              <li><Link href="/about" className="sidebar-link">Institute Details</Link></li>
            </ul>
          </aside>

          <article className="page-main-body">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap", gap: "1rem" }}>
              <div>
                <h3>E-Procurement & Tender Notices</h3>
                <p style={{ color: "#475569" }}>
                  Official tenders invited for works, supplies, lab equipment, and institutional services at RGUKT RK Valley.
                </p>
              </div>

              <div style={{ width: "240px" }}>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Filter tenders..."
                  style={{ width: "100%", padding: "0.45rem 0.85rem", border: "1px solid #cbd5e1", borderRadius: "6px", fontSize: "0.85rem" }}
                />
              </div>
            </div>

            <div style={{ overflowX: "auto" }}>
              <div className="table-responsive"><table className="gov-table">
                <thead>
                  <tr>
                    <th>Tender Ref No</th>
                    <th>Description of Work / Item</th>
                    <th>Category</th>
                    <th>Publish Date</th>
                    <th>Closing Date</th>
                    <th>EMD</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.length === 0 ? (
                    <tr>
                      <td colSpan={8} style={{ textAlign: "center", padding: "2rem", color: "#94a3b8" }}>
                        No tenders found matching your query.
                      </td>
                    </tr>
                  ) : (
                    filtered.map((t: Tender) => (
                      <tr key={t.id}>
                        <td><strong>{t.refNo}</strong></td>
                        <td style={{ maxWidth: "260px" }}>{t.title}</td>
                        <td><span className="badge-category">{t.category}</span></td>
                        <td>{t.publishDate}</td>
                        <td><strong style={{ color: "var(--status-crimson)" }}>{t.closingDate}</strong></td>
                        <td>{t.emd}</td>
                        <td><span className="table-badge-active">{t.status}</span></td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-primary"
                            style={{ padding: "0.3rem 0.6rem", fontSize: "0.75rem" }}
                            onClick={() => openDocModal(t.title, t.docUrl)}
                          >
                            PDF
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table></div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

