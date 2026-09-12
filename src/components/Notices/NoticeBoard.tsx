"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { Notice } from "@/data/rguktData";
import { fetchNotices } from "@/lib/db/notices";

export default function NoticeBoard() {
  const { openDocModal } = useApp();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [noticesData, setNoticesData] = useState<Notice[]>([]);
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);

  useEffect(() => {
    fetchNotices().then(setNoticesData).catch(console.error);
  }, []);

  const categories = ["All", "Admissions", "Academic", "Examinations", "Recruitment", "Tenders"];

  let filtered = noticesData.filter(n => n.category !== "News");

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

  filtered = [...filtered].sort((a, b) => {
    const aDate = new Date(a.date).getTime();
    const bDate = new Date(b.date).getTime();
    const now = Date.now();
    const aNew = !isNaN(aDate) && aDate > now - 3 * 24 * 60 * 60 * 1000;
    const bNew = !isNaN(bDate) && bDate > now - 3 * 24 * 60 * 60 * 1000;
    
    if (aNew && !bNew) return -1;
    if (!aNew && bNew) return 1;
    
    if (!isNaN(aDate) && !isNaN(bDate)) {
      return bDate - aDate;
    }
    return 0;
  });

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
            View All Notices & Circulars &rarr;
          </Link>
        </div>

        <div className="notices-layout">
          <div className="notices-main-card">
            <div className="notice-filter-bar">
              <div className="notice-tabs">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`notice-tab-btn ${selectedCategory === cat ? "active" : ""}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="notice-search-box">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                  let day = "01";
                  let month = "SEP";
                  let isNew = false;
                  
                  try {
                    const d = new Date(n.date);
                    if (!isNaN(d.getTime())) {
                      day = d.getDate().toString().padStart(2, "0");
                      month = d.toLocaleString('en-US', { month: 'short' }).toUpperCase();
                      isNew = d.getTime() > Date.now() - 3 * 24 * 60 * 60 * 1000;
                    } else {
                      const parts = n.date.split(" ");
                      day = parts[0] || "01";
                      month = parts[1] || "SEP";
                    }
                  } catch (e) {
                    const parts = n.date.split(" ");
                    day = parts[0] || "01";
                    month = parts[1] || "SEP";
                  }

                  return (
                    <div key={n.id} className="notice-row">
                      <div className="notice-date-badge">
                        {isNew && <span className="badge-new">New</span>}
                        <span className="notice-day">{day}</span>
                        <span className="notice-month">{month}</span>
                      </div>
                      <div className="notice-content" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", gap: "1rem" }}>
                        <div style={{ flex: 1 }}>
                          <div className="notice-meta">
                            <span className="badge-category">{n.tag}</span>
                            {n.urgent && <span className="badge-urgent">Urgent</span>}
                          </div>
                          <h4 className="notice-headline" style={{ margin: 0 }}>
                            <button
                              type="button"
                              onClick={() => setSelectedNotice(n)}
                              style={{ textAlign: "left", background: "none", border: "none", padding: 0, font: "inherit", cursor: "pointer", color: "inherit" }}
                            >
                              {n.title}
                            </button>
                          </h4>
                        </div>
                        <div className="notice-action-links" style={{ flexShrink: 0 }}>
                          <button
                            type="button"
                            className="btn-pdf-view"
                            onClick={() => setSelectedNotice(n)}
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

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
              <li><Link href="/admissions" className="side-widget-link"><span>Admissions 2026-27</span> <span>&rarr;</span></Link></li>
              <li><Link href="/examinations" className="side-widget-link"><span>Examination Cell</span> <span>&rarr;</span></Link></li>
              <li><Link href="/placements" className="side-widget-link"><span>Training & Placements</span> <span>&rarr;</span></Link></li>
              <li><Link href="/departments" className="side-widget-link"><span>Academic Departments</span> <span>&rarr;</span></Link></li>
              <li><Link href="/about" className="side-widget-link"><span>Institute Profile</span> <span>&rarr;</span></Link></li>
            </ul>
          </div>
        </div>
      </div>

      {selectedNotice && (
        <div style={{
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)", zIndex: 9999,
          display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem"
        }}>
          <div style={{
            background: "#fff", width: "100%", maxWidth: "max(75vw, 600px)", maxHeight: "90vh", display: "flex", flexDirection: "column",
            borderRadius: "12px", overflow: "hidden", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)", margin: "0 auto"
          }}>
            <div style={{ padding: "1.5rem", borderBottom: "1px solid #e2e8f0", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexShrink: 0 }}>
              <h3 style={{ margin: 0, fontSize: "1.25rem", color: "#0f172a", paddingRight: "1rem" }}>{selectedNotice.title}</h3>
              <button 
                onClick={() => setSelectedNotice(null)}
                style={{ background: "none", border: "none", cursor: "pointer", color: "#64748b", padding: "0.25rem", flexShrink: 0 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
            <div style={{ padding: "1.5rem", overflowY: "auto", flex: 1 }}>
              <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem", flexWrap: "wrap" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", fontSize: "0.85rem", background: "#dbeafe", color: "#1d4ed8", padding: "0.25rem 0.75rem", borderRadius: "999px", fontWeight: 600, border: "1px solid #bfdbfe" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  {selectedNotice.date}
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", fontSize: "0.85rem", background: "#f3e8ff", color: "#7e22ce", padding: "0.25rem 0.75rem", borderRadius: "999px", fontWeight: 600, border: "1px solid #e9d5ff" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                  {selectedNotice.category}
                </span>
                {selectedNotice.tag && <span style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", fontSize: "0.85rem", background: "#fce7f3", color: "#be185d", padding: "0.25rem 0.75rem", borderRadius: "999px", fontWeight: 700, border: "1px solid #fbcfe8" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  {selectedNotice.tag}
                </span>}
              </div>
              <div style={{ color: "#334155", lineHeight: "1.6", whiteSpace: "pre-wrap", marginBottom: "1.5rem" }}>
                {selectedNotice.summary}
              </div>
              
              {selectedNotice.pdfName && (
                <button
                  type="button"
                  onClick={() => openDocModal(selectedNotice.title, selectedNotice.pdfName)}
                  style={{
                    display: "flex", alignItems: "center", gap: "0.5rem",
                    background: "var(--primary-maroon)", color: "#fff",
                    border: "none", padding: "0.75rem 1.25rem", borderRadius: "8px",
                    fontWeight: 600, cursor: "pointer", width: "100%", justifyContent: "center"
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                  View Document {selectedNotice.size ? `(${selectedNotice.size})` : ""}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
