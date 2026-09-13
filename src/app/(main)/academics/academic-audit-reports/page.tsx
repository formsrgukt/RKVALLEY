"use client";

import React from "react";
import AcademicAuditReports from "@/components/Academics/AcademicAuditReports";

export default function AcademicAuditReportsPage() {
  return (
    <div className="container" style={{ padding: "4rem 1rem", width: "100%", margin: "0 auto", minHeight: "80vh" }}>
      {/* Title matching Vision and Mission page header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
        <h1 style={{ color: "var(--primary-dark)", fontSize: "2.2rem", fontWeight: 800, margin: 0 }}>
          Academic Audit Reports
        </h1>
      </div>

      {/* Main White Card matching Vision and Mission card styling */}
      <div style={{ background: "#ffffff", padding: "3rem", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
        <AcademicAuditReports id="audit" />
      </div>
    </div>
  );
}
