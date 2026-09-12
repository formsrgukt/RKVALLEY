"use client";

import React from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { RGUKT_DATA } from "@/data/rguktData";

export default function PlacementSection() {
  const { openDocModal } = useApp();

  return (
    <section className="section-padding placements-section" aria-label="Placements & Recruiters">
      <div className="container">
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
