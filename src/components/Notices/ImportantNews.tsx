"use client";

import React, { useState, useEffect } from "react";
import { Notice } from "@/data/rguktData";
import { fetchNotices } from "@/lib/db/notices";
import { useApp } from "@/context/AppContext";

export default function ImportantNews() {
  const { openDocModal } = useApp();
  const [newsItems, setNewsItems] = useState<Notice[]>([]);

  useEffect(() => {
    fetchNotices()
      .then(data => {
        let urgentNotices = data.filter(n => n.category === "News");
        
        urgentNotices.sort((a, b) => {
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

        setNewsItems(urgentNotices.slice(0, 3));
      })
      .catch(console.error);
  }, []);
  
  if (newsItems.length === 0) return null;

  return (
    <section aria-label="Important News" style={{ padding: "2rem 0", background: "var(--surface-bg, #f8fafc)" }}>
      <div className="container">
        
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "1rem"
        }}>
          <span style={{ 
            background: "var(--primary-maroon)", 
            color: "white", 
            padding: "0.25rem 0.75rem", 
            borderRadius: "4px",
            fontSize: "0.8rem",
            fontWeight: 700,
            letterSpacing: "0.05em",
            textTransform: "uppercase"
          }}>
            Urgent
          </span>
          <h4 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 700, color: "var(--primary-maroon)" }}>Important News</h4>
        </div>

        <div style={{
          display: "flex",
          gap: "1rem",
          overflowX: "auto",
          paddingTop: "1.5rem",
          paddingLeft: "1.5rem",
          marginTop: "-1.5rem",
          marginLeft: "-1.5rem",
          paddingBottom: "1.5rem",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none"
        }}>
          {newsItems.map((news) => {
            const newsDate = new Date(news.date).getTime();
            const isNew = !isNaN(newsDate) && newsDate > Date.now() - 3 * 24 * 60 * 60 * 1000;

            return (
              <div key={news.id} style={{
                position: "relative",
                flex: "0 0 300px",
                scrollSnapAlign: "start",
                background: "#ffffff",
                borderRadius: "8px",
                padding: "1rem 1.25rem",
                boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                borderLeft: "3px solid var(--primary-maroon)",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem"
              }}>
                {isNew && <span className="badge-new">New</span>}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#64748b" }}>{news.date}</span>
                  </div>
                </div>
              
              <h5 style={{ margin: 0, fontSize: "0.95rem", fontWeight: 600, lineHeight: 1.3, color: "#0f172a" }}>
                {news.title}
              </h5>

              {news.pdfName && (
                <button 
                  onClick={() => openDocModal(news.pdfName || "", news.title)}
                  style={{
                    alignSelf: "flex-start",
                    background: "transparent",
                    border: "none",
                    color: "var(--primary-maroon)",
                    padding: "0",
                    marginTop: "0.25rem",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.3rem"
                  }}
                  onMouseOver={(e) => e.currentTarget.style.textDecoration = "underline"}
                  onMouseOut={(e) => e.currentTarget.style.textDecoration = "none"}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  View PDF
                </button>
              )}
            </div>
          );
          })}
        </div>
      </div>
    </section>
  );
}
