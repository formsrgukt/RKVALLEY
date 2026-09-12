"use client";

import React, { use } from "react";
import Link from "next/link";
import { nirfData } from "@/data/nirfData";

export default function NIRFYearPage({ params }: { params: Promise<{ year: string }> }) {
  const resolvedParams = use(params);
  const data = nirfData[resolvedParams.year];

  return (
    <div className="container" style={{ padding: "4rem 1rem", width: "100%", margin: "0 auto", minHeight: "80vh" }}>
      {/* Breadcrumb / Back button */}
      <Link 
        href="/institute/nirf" 
        style={{ 
          display: "inline-flex", 
          alignItems: "center", 
          gap: "0.5rem", 
          color: "var(--primary-maroon)", 
          textDecoration: "none", 
          marginBottom: "2.5rem", 
          fontWeight: 700,
          fontSize: "0.9rem",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          padding: "0.6rem 1.2rem",
          background: "rgba(144, 0, 32, 0.05)",
          borderRadius: "9999px",
          border: "1px solid rgba(144, 0, 32, 0.1)",
          transition: "all 0.2s ease"
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.background = "var(--primary-maroon)";
          e.currentTarget.style.color = "#ffffff";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.background = "rgba(144, 0, 32, 0.05)";
          e.currentTarget.style.color = "var(--primary-maroon)";
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        Back to NIRF Rankings
      </Link>

      <div style={{ background: "#ffffff", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)", padding: "3rem" }}>
        {data ? (
          <>
            <h1 style={{ color: "var(--primary-dark)", fontSize: "2.2rem", fontWeight: 800, margin: "0 0 2rem 0", paddingBottom: "1rem", borderBottom: "2px solid #e2e8f0" }}>
              {data.title}
            </h1>

            <div style={{ marginBottom: "3rem" }}>
              <h2 style={{ color: "var(--primary-maroon)", fontSize: "1.4rem", marginBottom: "1.5rem", fontWeight: 700 }}>
                Documents & Reports
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", gap: "1.25rem" }}>
                {data.documents.map((doc, idx) => (
                  <a 
                    key={idx}
                    href={doc.url}
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(doc.url, `NIRFPDF_${idx}`, "width=900,height=800");
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "1rem 1.5rem",
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderRadius: "8px",
                      color: "var(--primary-dark)",
                      textDecoration: "none",
                      fontWeight: 600,
                      transition: "all 0.2s ease"
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = "#fff";
                      e.currentTarget.style.borderColor = "var(--primary-maroon)";
                      e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.05)";
                      e.currentTarget.style.color = "var(--primary-maroon)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = "#f8fafc";
                      e.currentTarget.style.borderColor = "#e2e8f0";
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.color = "var(--primary-dark)";
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "1rem", color: "var(--accent-gold)" }}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                    {doc.title}
                  </a>
                ))}
              </div>
            </div>

            {data.contact && (
              <div>
                <h2 style={{ color: "var(--primary-maroon)", fontSize: "1.4rem", marginBottom: "1.5rem", fontWeight: 700 }}>
                  Contact Details
                </h2>
                <div style={{ background: "#f8fafc", padding: "1.5rem", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                  <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--primary-dark)", marginBottom: "0.25rem" }}>
                    {data.contact.profileUrl ? (
                      <a href={data.contact.profileUrl} target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }} onMouseOver={e => e.currentTarget.style.textDecoration = "underline"} onMouseOut={e => e.currentTarget.style.textDecoration = "none"}>
                        {data.contact.name}
                      </a>
                    ) : (
                      data.contact.name
                    )}
                  </div>
                  <div style={{ color: "#475569", fontWeight: 500, marginBottom: "1rem" }}>{data.contact.designation}</div>
                  
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#334155", fontWeight: 500 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--primary-maroon)" }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    <a href={`mailto:${data.contact.email}`} style={{ color: "var(--primary-maroon)", textDecoration: "none" }}>{data.contact.email}</a>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div style={{ textAlign: "center", padding: "3rem 0", color: "#64748b" }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: "1rem", opacity: 0.5 }}><circle cx="12" cy="12" r="10"></circle><polyline points="12 8 12 12 14 14"></polyline></svg>
            <h2 style={{ color: "var(--primary-dark)", fontSize: "1.5rem", marginBottom: "0.5rem" }}>No Data Available</h2>
            <p style={{ fontSize: "1.1rem" }}>The NIRF data for the year {resolvedParams.year} is currently being updated or is not available.</p>
          </div>
        )}
      </div>
    </div>
  );
}
