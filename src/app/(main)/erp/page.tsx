"use client";

import React from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";

export default function ERPPage() {
  const erpModules = [
    "Academics",
    "Hostel Accounts",
    "Personnel Management System",
    "Convocation System",
    "CDN",
    "Central Accounts",
    "Audit System",
    "Security Unit",
    "Hospital",
    "Guest House",
    "IRD Establishment",
    "IRD Project Monitoring",
    "IRD Accounts",
    "Stores and Purchase System",
    "Hospital Stores",
    "Work Stores",
    "Work Accounts",
  ];

  return (
    <div className="page-view-container">
      <Breadcrumb title="Enterprise Resource Planning" category="ERP" />
      
      <div className="container" style={{ padding: "4rem 0", maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* Page Header */}
        <div style={{ marginBottom: "3rem", textAlign: "left" }}>
          <h2 style={{ fontSize: "2rem", color: "var(--primary-maroon)", marginBottom: "0.75rem", fontWeight: 700 }}>
            Enterprise Resource Planning (ERP)
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#475569", lineHeight: 1.6, maxWidth: "800px" }}>
            An ERP solution designed to manage educational institutions and academic processes, suitable for both Higher Education Technical Institutions and Management Education Institutions. It offers ease of technology management, requires minimal technical manpower, and utilizes open-source software.
          </p>
        </div>

        {/* Modules Grid */}
        <div>
          <h3 style={{ 
            fontSize: "1.8rem", 
            color: "#1e293b", 
            marginBottom: "2rem", 
            paddingBottom: "0.75rem", 
            borderBottom: "2px solid #e2e8f0",
            fontWeight: 700
          }}>
            Integrated Modules
          </h3>
          
          <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}>
            {erpModules.map((moduleName, index) => (
              <div 
                key={index}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "12px",
                  padding: "1.5rem",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
                  e.currentTarget.style.borderColor = "var(--primary-gold)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)";
                  e.currentTarget.style.borderColor = "#e2e8f0";
                }}
              >
                <div style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  background: "rgba(122, 0, 25, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: "var(--primary-maroon)"
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </div>
                <div style={{ fontSize: "1.05rem", fontWeight: 600, color: "#334155" }}>
                  {moduleName}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
