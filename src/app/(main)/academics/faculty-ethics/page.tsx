"use client";

import React from "react";
import FacultyEthicsView from "@/components/Academics/FacultyEthicsView";

export default function FacultyEthicsPage() {
  return (
    <div className="container" style={{ padding: "3.5rem 1rem 4rem 1rem", width: "100%", margin: "0 auto", minHeight: "80vh" }}>
      {/* Main White Card matching Vision & Mission and Academic Audit styling */}
      <div style={{ background: "#ffffff", padding: "3rem", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
        <FacultyEthicsView id="faculty-ethics" />
      </div>
    </div>
  );
}
