"use client";

import React from "react";
import AcademicCouncilMinutes from "@/components/Academics/AcademicCouncilMinutes";

export default function AcademicCouncilMinutesPage() {
  return (
    <div className="container" style={{ padding: "4rem 1rem", width: "100%", margin: "0 auto", minHeight: "80vh" }}>
      {/* Page Heading matching website design standard */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
        <h1 style={{ color: "var(--primary-dark)", fontSize: "2.2rem", fontWeight: 800, margin: 0 }}>
          Minutes of Academic Council Meetings
        </h1>
      </div>

      {/* Main White Card matching Vision & Mission and Academic Audit styling */}
      <div style={{ background: "#ffffff", padding: "3rem", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
        <AcademicCouncilMinutes id="council-minutes" defaultSectionId="coun_min" />
      </div>
    </div>
  );
}
