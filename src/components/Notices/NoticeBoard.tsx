"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { RGUKT_DATA, Notice } from "@/data/rguktData";

export default function NoticeBoard() {
  const { openDocModal } = useApp();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Admissions", "Academic", "Examinations", "Recruitment", "Tenders"];

  let filtered = RGUKT_DATA.notices;

  if (selectedCategory !== "All") {
    filtered = filtered.filter(
      (n) => n.category.toLowerCase() === selectedCategory.toLowerCase() || n.tag.toLowerCase().includes(selectedCategory.toLowerCase())
    );
  }

  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(
      (n) => n.title.toLowerCase().includes(q) || n.summary.toLowerCase().includes(q)
    );
  }

  return (
    <section className="section-padding" style={{ background: "#ffffff" }} aria-label="Latest News & Noticeboard">
      <div className="container">
        <div className="section-header">
          <div>
            <span className="section-tag">Official Circulars</span>
            <h3 className="section-title">Notice Board</h3>
            <p className="section-subtitle">
              Real-time academic circulars, exam notifications, admissions announcements, and procurement notices.
            </p>
          </div>
          <Link href="/tenders" className="btn btn-primary" style={{ fontSize: "0.85rem", padding: "0.55rem 1.25rem" }}>
            View All Notices & Circulars →
          </Link>
        </div>

        <div className="notices-layout">
          <div className="notices-main-card">
            <div className="notice-filter-bar">
              <div className="notice-tabs">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`notice-tab-btn ${selectedCategory === cat ? "active" : ""}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="notice-search-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search notices..."
                  aria-label="Search Notices"
                />
              </div>
            </div>

            <div className="notices-list-container">
              {filtered.length === 0 ? (
                <div style={{ padding: "2.5rem", textAlign: "center", color: "#94a3b8" }}>
                  <p>No circulars or notices found matching your criteria.</p>
                </div>
              ) : (
                filtered.map((n: Notice) => {
                  const parts = n.date.split(" ");
                  const day = parts[0] || "01";
                  const month = parts[1] || "SEP";

                  return (
                    <div key={n.id} className="notice-row">
                      <div className="notice-date-badge">
                        <span className="notice-day">{day}</span>
                        <span className="notice-month">{month}</span>
                      </div>
                      <div className="notice-content">
                        <div className="notice-meta">
                          <span className="badge-category">{n.tag}</span>
                          {n.urgent && <span className="badge-urgent">Urgent</span>}
                        </div>
                        <h4 className="notice-headline">
                          <button
                            type="button"
                            onClick={() => openDocModal(n.title, n.pdfName)}
                            style={{ textAlign: "left", background: "none", border: "none", padding: 0, font: "inherit", cursor: "pointer", color: "inherit" }}
                          >
                            {n.title}
                          </button>
                        </h4>
                        <p className="notice-snippet">{n.summary}</p>
                        <div className="notice-action-links">
                          <button
                            type="button"
                            className="btn-pdf-view"
                            onClick={() => openDocModal(n.title, n.pdfName)}
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                              <polyline points="14 2 14 8 20 8"></polyline>
                              <line x1="16" y1="13" x2="8" y2="13"></line>
                              <line x1="16" y1="17" x2="8" y2="17"></line>
                              <polyline points="10 9 9 9 8 9"></polyline>
                            </svg>
                            View Document ({n.size})
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Quick Portals Side Widget */}
          <div className="portal-side-widget">
            <h4 className="side-widget-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              Key Institutional Portals
            </h4>
            <ul className="side-widget-list">
              <li><Link href="/admissions" className="side-widget-link"><span>Admissions 2026-27</span> <span>→</span></Link></li>
              <li><Link href="/examinations" className="side-widget-link"><span>Examination Cell</span> <span>→</span></Link></li>
              <li><Link href="/placements" className="side-widget-link"><span>CDPC Placement Cell</span> <span>→</span></Link></li>
              <li><Link href="/library" className="side-widget-link"><span>Digital Library (OPAC)</span> <span>→</span></Link></li>
              <li><Link href="/grievance" className="side-widget-link"><span>Anti-Ragging Squad</span> <span>→</span></Link></li>
              <li><Link href="/careers" className="side-widget-link"><span>Faculty Recruitment</span> <span>→</span></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
