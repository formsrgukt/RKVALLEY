"use client";

import React from "react";
import Link from "next/link";
import { RGUKT_DATA } from "@/data/rguktData";
import { useApp } from "@/context/AppContext";

export default function ImportantNews() {
  const { openDocModal } = useApp();
  // Filter only urgent news for this section
  const newsItems = RGUKT_DATA.notices.filter(n => n.urgent).slice(0, 3);
  
  if (newsItems.length === 0) return null;

  return (
    <section className="section-padding" style={{ background: "var(--surface-bg, #f8fafc)" }} aria-label="Important News">
      <div className="container">
        <div className="section-header">
          <div>
            <span className="section-tag" style={{ color: "#ef4444", background: "rgba(239, 68, 68, 0.1)" }}>Urgent Updates</span>
            <h3 className="section-title">Important News</h3>
            <p className="section-subtitle">
              Critical announcements and priority updates for students and staff.
            </p>
          </div>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
          marginTop: "1.5rem"
        }}>
          {newsItems.map((news) => (
            <div key={news.id} style={{
              background: "#ffffff",
              borderRadius: "12px",
              padding: "1.5rem",
              boxShadow: "var(--shadow-sm)",
              borderTop: "4px solid #ef4444",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              transition: "transform 0.3s, box-shadow 0.3s"
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "var(--shadow-md)"; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "var(--shadow-sm)"; }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--primary-maroon)", background: "rgba(128,0,0,0.05)", padding: "0.2rem 0.6rem", borderRadius: "100px" }}>
                  {news.tag}
                </span>
                <span style={{ fontSize: "0.85rem", color: "#64748b", fontWeight: 500 }}>{news.date}</span>
              </div>
              
              <h4 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 600, lineHeight: 1.4, color: "#0f172a" }}>
                {news.title}
              </h4>
              
              <p style={{ margin: 0, fontSize: "0.9rem", color: "#475569", lineHeight: 1.5, flexGrow: 1 }}>
                {news.summary}
              </p>

              {news.pdfName && (
                <button 
                  onClick={() => openDocModal(news.pdfName || "", news.title)}
                  style={{
                    alignSelf: "flex-start",
                    background: "transparent",
                    border: "1px solid #cbd5e1",
                    color: "var(--primary-maroon)",
                    padding: "0.5rem 1rem",
                    borderRadius: "6px",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    transition: "all 0.2s"
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.background = "var(--primary-maroon)"; e.currentTarget.style.color = "white"; e.currentTarget.style.borderColor = "var(--primary-maroon)"; }}
                  onMouseOut={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--primary-maroon)"; e.currentTarget.style.borderColor = "#cbd5e1"; }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  View Details
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
