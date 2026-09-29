"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { RGUKT_DATA } from "@/data/rguktData";

export default function PlacementSection() {
  const { openDocModal } = useApp();
  const [counts, setCounts] = useState({ students: 0, acres: 0, placement: 0, faculty: 0, alumni: 0 });

  useEffect(() => {
    let currentStep = 0;
    const totalSteps = 40;
    const timer = setInterval(() => {
      currentStep++;
      setCounts({
        students: Math.min(6600, Math.floor((6600 / totalSteps) * currentStep)),
        acres: Math.min(330, Math.floor((330 / totalSteps) * currentStep)),
        placement: Math.min(87, Math.floor((87 / totalSteps) * currentStep)),
        faculty: Math.min(240, Math.floor((240 / totalSteps) * currentStep)),
        alumni: Math.min(22000, Math.floor((22000 / totalSteps) * currentStep))
      });
      if (currentStep >= totalSteps) clearInterval(timer);
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding placements-section" aria-label="Placements & Recruiters">
      <div className="container">
        <div style={{ marginBottom: "3rem" }}>
          <div className="placement-stats-grid" style={{ gridTemplateColumns: "repeat(5, 1fr)" }}>
            <div className="placement-stat-box">
              <span className="placement-stat-val">{counts.students.toLocaleString()}+</span>
              <span className="placement-stat-lbl">Students Enrolled</span>
            </div>
            <div className="placement-stat-box">
              <span className="placement-stat-val">{counts.alumni.toLocaleString()}+</span>
              <span className="placement-stat-lbl">Alumni</span>
            </div>
            <div className="placement-stat-box">
              <span className="placement-stat-val">{counts.acres}+</span>
              <span className="placement-stat-lbl">Acres Green Campus</span>
            </div>
            <div className="placement-stat-box">
              <span className="placement-stat-val">{counts.placement}.4%</span>
              <span className="placement-stat-lbl">Placement Record</span>
            </div>
            <div className="placement-stat-box">
              <span className="placement-stat-val">{counts.faculty}+</span>
              <span className="placement-stat-lbl">Faculty & Researchers</span>
            </div>
          </div>
        </div>

        <div className="placements-banner">
          <div>
            <span className="section-tag" style={{ color: "var(--accent-gold)" }}>Career Development & Placement Cell</span>
            <h3 className="section-title" style={{ color: "#ffffff", marginBottom: "1rem" }}>Exceptional Industry Placements</h3>
            <p style={{ color: "#cbd5e1", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
              Through year-round rigorous training in Data Structures, Competitive Coding, Full-Stack Architecture, and Mock Technical Interviews, RGUKT RK Valley students secure prime roles in Fortune 500 tech corporations.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/placements" className="btn btn-gold">
                Explore Placement Report →
              </Link>
              <button
                onClick={() => openDocModal("Placement Brochure 2026", "Placement_Brochure_RGUKT_RKV_2026.pdf")}
                className="btn btn-outline-white"
              >
                Download Recruiter Brochure
              </button>
            </div>
          </div>

          <div className="placement-stats-grid">
            <div className="placement-stat-box">
              <span className="placement-stat-val">₹28.5 LPA</span>
              <span className="placement-stat-lbl">Highest Package (Super Dream)</span>
            </div>
            <div className="placement-stat-box">
              <span className="placement-stat-val">₹6.8 LPA</span>
              <span className="placement-stat-lbl">Average CTC Package</span>
            </div>
            <div className="placement-stat-box">
              <span className="placement-stat-val">1,240+</span>
              <span className="placement-stat-lbl">Offers Generated</span>
            </div>
            <div className="placement-stat-box">
              <span className="placement-stat-val">85+</span>
              <span className="placement-stat-lbl">Top Tier Recruiters</span>
            </div>
          </div>
        </div>

        {/* Recruiter Showcase */}
        <div className="recruiters-showcase">
          <h4 className="recruiters-title">Our Prime Recruiting Partners</h4>
          <div className="recruiters-grid">
            {RGUKT_DATA.placements.topRecruiters.map((r, i) => (
              <div key={i} className="recruiter-pill">
                {r.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
