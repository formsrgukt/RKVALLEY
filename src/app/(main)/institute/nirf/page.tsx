"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const nirfYears = [
  "2026", "2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017"
];

export default function NIRFPage() {
  const router = useRouter();

  return (
    <div className="container" style={{ padding: "4rem 1rem", width: "100%", margin: "0 auto", minHeight: "80vh" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
        <h1 style={{ color: "var(--primary-dark)", fontSize: "2.2rem", fontWeight: 800, margin: 0 }}>
          NIRF
        </h1>
      </div>
      
      <div style={{ background: "#ffffff", padding: "3rem", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
        <div style={{ marginBottom: "2rem" }}>
          <h2 style={{ color: "var(--primary-maroon)", fontSize: "1.45rem", marginBottom: "1rem", fontWeight: 700 }}>
            National Institutional Ranking Framework
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#334155", lineHeight: 1.75, marginBottom: "0" }}>
            The National Institutional Ranking Framework (NIRF) was approved by the MHRD and launched by Honourable Minister of Human Resource Development on 29th September 2015. This framework outlines a methodology to rank institutions across the country.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1.5rem" }}>
          {nirfYears.map((year) => (
            <div 
              key={year} 
              onClick={() => router.push(`/institute/nirf/${year}`)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem",
                background: "#ffffff",
                borderWidth: "5px 1px 1px 1px",
                borderStyle: "solid",
                borderColor: "var(--primary-maroon) #e2e8f0 #e2e8f0 #e2e8f0",
                borderRadius: "10px",
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "var(--primary-dark)",
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
              NIRF {year}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
