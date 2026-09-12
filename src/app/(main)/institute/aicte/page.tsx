"use client";

import React from "react";
import Link from "next/link";

const eoaDocuments = [
  { year: "2020-21", title: "EOA for Academic Year 2020-21", url: "#" },
  { year: "2019-20", title: "EOA for Academic Year 2019-20", url: "#" },
  { year: "2018-19", title: "EOA for Academic Year 2018-19", url: "#" },
  { year: "2017-18", title: "EOA for Academic Year 2017-18", url: "#" },
  { year: "2016-17", title: "EOA for Academic Year 2016-17", url: "#" }
];

export default function AICTEPage() {
  const [showToast, setShowToast] = React.useState<string | null>(null);

  return (
    <div className="container" style={{ padding: "4rem 1rem", width: "100%", margin: "0 auto", minHeight: "80vh", position: "relative" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2.5rem", flexWrap: "wrap", gap: "1rem" }}>
        <h1 style={{ color: "var(--primary-dark)", fontSize: "2.2rem", fontWeight: 800, margin: 0 }}>
          AICTE Mandatory Disclosure
        </h1>
      </div>
      
      <div style={{ background: "#ffffff", padding: "3rem", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
        <div style={{ marginBottom: "2.5rem" }}>
          <p style={{ fontSize: "1.1rem", color: "#475569", lineHeight: 1.75, marginBottom: "0" }}>
            The Extension of Approval (EOA) documents granted by the All India Council for Technical Education (AICTE) for the respective academic years are available below.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {eoaDocuments.map((doc, idx) => (
            <a 
              key={idx} 
              href={doc.url}
              onClick={(e) => {
                if (doc.url === "#") {
                  e.preventDefault();
                  setShowToast(doc.year);
                  setTimeout(() => setShowToast(null), 3500);
                } else {
                  e.preventDefault();
                  window.open(doc.url, `EOA_${doc.year}`, "width=900,height=800");
                }
              }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem 1.5rem",
                background: "#ffffff",
                borderWidth: "5px 1px 1px 1px",
                borderStyle: "solid",
                borderColor: "var(--primary-maroon) #e2e8f0 #e2e8f0 #e2e8f0",
                borderRadius: "10px",
                fontSize: "1.15rem",
                fontWeight: 700,
                color: "var(--primary-dark)",
                textDecoration: "none",
                textAlign: "center",
                boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
                transition: "all 0.3s ease",
                cursor: "pointer"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.1)";
                e.currentTarget.style.borderTopColor = "var(--accent-gold)";
                e.currentTarget.style.color = "var(--primary-maroon)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.04)";
                e.currentTarget.style.borderTopColor = "var(--primary-maroon)";
                e.currentTarget.style.color = "var(--primary-dark)";
              }}
            >
              {doc.title}
            </a>
          ))}
        </div>
      </div>

      {/* Custom Toast Notification */}
      <div style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        background: "var(--primary-dark)",
        color: "#ffffff",
        padding: "1rem 1.5rem",
        borderRadius: "8px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        zIndex: 9999,
        fontWeight: 500,
        opacity: showToast ? 1 : 0,
        transform: showToast ? "translateY(0)" : "translateY(150%)",
        transition: "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease-out",
        pointerEvents: showToast ? "auto" : "none"
      }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        PDF link for {showToast} will be updated shortly!
      </div>
    </div>
  );
}
