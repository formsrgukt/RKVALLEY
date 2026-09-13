"use client";

import React from "react";
import AcademicProgrammesView from "@/components/Academics/AcademicProgrammesView";

export default function UGProgrammePage() {
  return (
    <div className="container" style={{ padding: "4rem 1rem", width: "100%", margin: "0 auto", minHeight: "80vh" }}>
      {/* Page Heading matching website design standard */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
        <h1 style={{ color: "var(--primary-dark)", fontSize: "2.2rem", fontWeight: 800, margin: 0 }}>
          Undergraduate Programme (6-Year Integrated B.Tech)
        </h1>
      </div>

      {/* Main White Card matching portal styling */}
      <div style={{ background: "#ffffff", padding: "3rem", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
        <AcademicProgrammesView id="ug-programme-view" defaultSectionId="ug_prog" />
      </div>
    </div>
  );
}
