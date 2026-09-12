"use client";

import React from "react";

export default function AdminDashboard() {
  return (
    <div>
      <h1 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#0f172a", marginBottom: "0.5rem" }}>
        Dashboard Overview
      </h1>
      <p style={{ color: "#64748b", marginBottom: "2rem" }}>
        Welcome to the RGUKT RK Valley portal management system.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
        {[
          { title: "Active Notices", value: "12", color: "#3b82f6" },
          { title: "Open Tenders", value: "5", color: "#10b981" },
          { title: "Recent Updates", value: "8", color: "#f59e0b" },
          { title: "System Health", value: "Good", color: "#8b5cf6" }
        ].map(stat => (
          <div key={stat.title} style={{ background: "#ffffff", padding: "1.5rem", borderRadius: "12px", boxShadow: "0 2px 4px rgba(0,0,0,0.02)" }}>
            <h3 style={{ fontSize: "0.9rem", color: "#64748b", fontWeight: 600, margin: "0 0 0.5rem 0" }}>{stat.title}</h3>
            <div style={{ fontSize: "2rem", fontWeight: 700, color: stat.color }}>{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
