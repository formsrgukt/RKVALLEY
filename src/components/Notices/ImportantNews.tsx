"use client";

import React from "react";
import Link from "next/link";
import { RGUKT_DATA } from "@/data/rguktData";

export default function ImportantNews() {
  // Use notices marked as urgent or just the first few as news
  const newsItems = RGUKT_DATA.notices.filter(n => n.urgent).slice(0, 5);
  
  if (newsItems.length === 0) return null;

  return (
    <div className="important-news-bar">
      <div className="container" style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <div className="news-badge">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
          </svg>
          Important News
        </div>
        
        <div className="news-ticker-container">
          <div className="news-ticker-track">
            {/* Duplicated for seamless loop */}
            {[...newsItems, ...newsItems].map((news, idx) => (
              <div key={`${news.id}-${idx}`} className="news-ticker-item">
                <span className="news-ticker-date">{news.date}</span>
                <span className="news-ticker-divider">|</span>
                <a href="#" className="news-ticker-link">
                  {news.title}
                  {news.urgent && <span className="news-ticker-new">NEW</span>}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
