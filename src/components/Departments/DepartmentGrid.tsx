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

  // Because depts (13 departments) has an odd length, repeating copies directly creates 2 red cards in a row
  // (the last item index 12 is red, and the next copy's first item index 0 is also red).
  // Creating an even-length sequence (26 items when odd) guarantees every card strictly alternates Red and Yellow.
  const displayItems: Department[] = depts.length % 2 !== 0 ? [...depts, ...depts] : depts;

  const renderCards = (copyIndex: number) => {
    return displayItems.map((d: Department, idx: number) => {
      const isYellow = idx % 2 === 1;
      const borderLeftStyle = isYellow ? "4px solid var(--accent-gold) !important" : "4px solid var(--accent-royal) !important";
      const iconBg = isYellow ? "#fef3c7" : "#fee2e2";
      const iconColor = isYellow ? "var(--accent-gold-dark)" : "var(--accent-royal)";
      const badgeColor = isYellow ? "var(--accent-gold-dark)" : "var(--accent-royal)";
      const badgeBg = isYellow ? "#fef9c3" : "#fdf2f4";
      const badgeBorder = isYellow ? "#fde68a" : "#fecdd3";
      const titleColor = isYellow ? "var(--accent-gold-dark)" : "var(--accent-royal)";
      const exploreColor = isYellow ? "var(--accent-gold-dark)" : "var(--accent-royal)";
      const cardClass = isYellow ? "department-card dept-card-gold" : "department-card dept-card-red";

      return (
        <div
          key={`${copyIndex}-${idx}-${d.id}`}
          className={cardClass}
          style={{
            borderLeft: borderLeftStyle
          }}
        >
          <div className="dept-header">
            <div
              className="dept-icon-box"
              style={{
                background: iconBg,
                color: iconColor
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <span
              className="dept-code-badge"
              style={{
                color: badgeColor,
                background: badgeBg,
                borderColor: badgeBorder
              }}
            >
              {d.code}
            </span>
          </div>
          <h4
            className="dept-title"
            style={{ color: titleColor }}
          >
            {d.name}
          </h4>
          <p className="dept-overview">{d.overview}</p>
          <div className="dept-meta-pills">
            <span><strong>{d.facultyCount}</strong> Faculty</span> • 
            <span><strong>{d.labsCount}</strong> Labs</span> • 
            <span><strong>{d.studentCount}</strong> Students</span>
          </div>
          <div className="dept-action-row">
            <span style={{ fontSize: "0.75rem", color: "#64748b" }}>HOD: {d.hod.split(",")[0]}</span>
            <Link
              href={`/departments/${d.id}`}
              className="btn-dept-explore"
              style={{ color: exploreColor }}
            >
              Explore →
            </Link>
          </div>
        </div>
      );
    });
  };

  const copies = [0, 1];
  // 26 items per cycle, approx 3s per item for smooth continuous scrolling
  const animationDuration = displayItems.length * 3;

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

        <div className="departments-marquee-wrapper">
          <div className="departments-marquee-track" style={{ animationDuration: `${animationDuration}s` }}>
            {copies.map(c => (
              <div key={c} className="marquee-content" aria-hidden={c > 0}>
                {renderCards(c)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
