import React from "react";
import Link from "next/link";

export default function TopTicker() {
  return (
    <div className="top-ticker" role="region" aria-label="Urgent Announcements">
      <div className="container ticker-wrapper">
        <span className="ticker-badge">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L1 21h22L12 2zm0 3.5l8.5 15H3.5L12 5.5zM11 10v4h2v-4h-2zm0 6v2h2v-2h-2z"/>
          </svg>
          Urgent Update
        </span>
        <div className="ticker-content">
          <div className="ticker-marquee">
            <Link href="/admissions">
              🚨 Applications are now invited for 6-Year Integrated B.Tech Admissions 2026-27 across RGUKT AP Campuses. Click here to apply.
            </Link>
            <Link href="/examinations">
              📢 End Semester Examination (AY 2025-26 Sem-II) Final Timetable & Hall Tickets released for PUC & B.Tech.
            </Link>
            <Link href="/tenders">
              📋 E-Tender for 40 Deep Learning GPU AI Workstations for Department of CSE published. Closing Date: 25 Sep 2026.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
