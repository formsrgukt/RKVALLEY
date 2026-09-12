"use client";

import React from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";

export default function QuickAccessGrid() {
  const { openGpaModal, openDocModal } = useApp();

  return (
    <section className="quick-access-section container" aria-label="Quick Access Services">
      <div className="quick-access-grid">
        <Link href="/admissions" className="quick-card">
          <div className="quick-icon-box">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>
          <span className="quick-card-title">Admissions 2026</span>
          <span className="quick-card-desc">6-Yr B.Tech Entry</span>
        </Link>

        <Link href="/examinations" className="quick-card">
          <div className="quick-icon-box">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
            </svg>
          </div>
          <span className="quick-card-title">Examinations</span>
          <span className="quick-card-desc">Timetables & Halltickets</span>
        </Link>

        <button
          onClick={() => openDocModal("Student Management System", "Student_SMS_Login_Guide.pdf")}
          className="quick-card"
        >
          <div className="quick-icon-box">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <span className="quick-card-title">SMS Portal</span>
          <span className="quick-card-desc">Student Attendance</span>
        </button>

        <Link href="/placements" className="quick-card">
          <div className="quick-icon-box">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
          </div>
          <span className="quick-card-title">Placements (CDPC)</span>
          <span className="quick-card-desc">₹28.5 LPA Highest</span>
        </Link>

        <Link href="/library" className="quick-card">
          <div className="quick-icon-box">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
          </div>
          <span className="quick-card-title">Central Library</span>
          <span className="quick-card-desc">75,000+ Volumes</span>
        </Link>

        <Link href="/academics" className="quick-card">
          <div className="quick-icon-box">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
          <span className="quick-card-title">Academic Calendar</span>
          <span className="quick-card-desc">AY 2026-27 Schedule</span>
        </Link>

        <Link href="/departments" className="quick-card">
          <div className="quick-icon-box">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
          <span className="quick-card-title">Departments</span>
          <span className="quick-card-desc">12 Branches & Labs</span>
        </Link>

        <button onClick={openGpaModal} className="quick-card">
          <div className="quick-icon-box">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="4" y="2" width="16" height="20" rx="2"></rect>
              <line x1="8" y1="6" x2="16" y2="6"></line>
              <line x1="8" y1="10" x2="16" y2="10"></line>
              <line x1="8" y1="14" x2="12" y2="14"></line>
              <line x1="8" y1="18" x2="10" y2="18"></line>
            </svg>
          </div>
          <span className="quick-card-title">GPA Calculator</span>
          <span className="quick-card-desc">SGPA / CGPA Tool</span>
        </button>

        <Link href="/tenders" className="quick-card">
          <div className="quick-icon-box">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
          </div>
          <span className="quick-card-title">Tenders & Jobs</span>
          <span className="quick-card-desc">E-Procurement</span>
        </Link>

        <Link href="/contact" className="quick-card">
          <div className="quick-icon-box">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <span className="quick-card-title">Contact & Map</span>
          <span className="quick-card-desc">Idupulapaya Campus</span>
        </Link>
      </div>
    </section>
  );
}
