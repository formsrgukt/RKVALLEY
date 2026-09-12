"use client";

import React, { useState } from "react";
import Link from "next/link";
import { RGUKT_DATA, Department } from "@/data/rguktData";

export default function DepartmentGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Engineering", "Sciences", "Humanities"];

  let depts = RGUKT_DATA.departments;
  if (selectedCategory !== "All") {
    depts = depts.filter((d) => d.category.toLowerCase() === selectedCategory.toLowerCase());
  }

  const renderCards = () => {
    return depts.map((d: Department) => (
      <div key={d.id} className="department-card">
        <div className="dept-header">
          <div className="dept-icon-box">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
          <span className="dept-code-badge">{d.code}</span>
        </div>
        <h4 className="dept-title">{d.name}</h4>
        <p className="dept-overview">{d.overview}</p>
        <div className="dept-meta-pills">
          <span><strong>{d.facultyCount}</strong> Faculty</span> • 
          <span><strong>{d.labsCount}</strong> Labs</span> • 
          <span><strong>{d.studentCount}</strong> Students</span>
        </div>
        <div className="dept-action-row">
          <span style={{ fontSize: "0.75rem", color: "#64748b" }}>HOD: {d.hod.split(",")[0]}</span>
          <Link href={/departments/ + d.id} className="btn-dept-explore">
            Explore →
          </Link>
        </div>
      </div>
    ));
  };

  const copies = [0, 1, 2, 3];
  // scale speed based on items. If fewer items, we need a shorter duration to maintain speed.
  // Assuming 380px per item, 40s for ~10 items.
  const animationDuration = Math.max(depts.length * 6, 20);

  return (
    <section className="section-padding" style={{ background: "#ffffff" }} aria-label="Academic Departments">
      <div className="container">
        <div className="section-header-centered">
          <span className="section-tag">Academics & Research</span>
          <h3 className="section-title">Academic Departments</h3>
          <p className="section-subtitle">
            13 specialized engineering, scientific, and humanities departments fostering world-class technical education.
          </p>
        </div>

        <div className="dept-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`dept-filter-btn ${selectedCategory === cat ? "active" : ""}`}
            >
              {cat === "All" ? "All Departments" : cat === "Engineering" ? "Engineering Streams" : cat === "Sciences" ? "Basic Sciences" : "Humanities & Management"}
            </button>
          ))}
        </div>

        <div className="departments-marquee-wrapper">
          <div className="departments-marquee-track" style={{ animationDuration: `${animationDuration}s` }}>
            {copies.map(c => (
              <div key={c} className="marquee-content" aria-hidden={c > 0}>
                {renderCards()}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
