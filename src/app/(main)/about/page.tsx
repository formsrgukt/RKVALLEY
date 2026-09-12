"use client";

import React from "react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="page-view-container">
      <div style={{ padding: "0 2rem", width: "100%", maxWidth: "1600px", margin: "0 auto" }}>
        <article className="page-main-body" style={{ margin: "0 auto", width: "100%" }}>
          <h2 style={{ color: "var(--primary-dark)", marginBottom: "1.5rem", fontSize: "1.8rem", fontWeight: 800 }}>About RGUKT RK Valley</h2>
          
          <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "2rem", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
            <h3 style={{ color: "var(--primary-maroon)", marginBottom: "1rem", fontSize: "1.4rem", fontWeight: 700, borderBottom: "2px solid #f1f5f9", paddingBottom: "0.5rem" }}>
              Vision & Institutional Mission
            </h3>
            
            <p style={{ color: "#334155", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Rajiv Gandhi University of Knowledge Technologies (RGUKT) was created by an Act of the Andhra Pradesh State Legislature (Act 18 of 2008) to cater to the educational needs of the meritorious rural youth of Andhra Pradesh.
            </p>
            
            <p style={{ color: "#334155", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "2rem" }}>
              The primary objective of establishing RGUKT was to provide high quality educational opportunities for the aimed rural youth of Andhra Pradesh. The initial goal was that at least the top 1% of the rural graduates would be given the opportunity to study at RGUKT.
            </p>

            <h3 style={{ color: "var(--primary-maroon)", marginBottom: "1rem", fontSize: "1.4rem", fontWeight: 700, borderBottom: "2px solid #f1f5f9", paddingBottom: "0.5rem" }}>
              Act 18 of 2008 / History
            </h3>
            
            <p style={{ color: "#334155", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              The University operates on a fully residential basis and uses a unique blend of modern IT and conventional teaching methods. RGUKT RK Valley campus is located at Idupulapaya, Vempalli Mandal, YSR Kadapa District, Andhra Pradesh.
            </p>

            <div style={{ marginTop: "2rem", padding: "1.5rem", background: "#f8fafc", border: "1px dashed #cbd5e1", borderRadius: "8px", textAlign: "center" }}>
              <p style={{ color: "#64748b", margin: 0 }}>This section is currently under development by the content team.</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
