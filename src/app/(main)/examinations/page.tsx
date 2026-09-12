"use client";

import React from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { RGUKT_DATA } from "@/data/rguktData";
import { useApp } from "@/context/AppContext";

export default function ExaminationsPage() {
  const { openDocModal, openGpaModal } = useApp();

  return (
    <div className="page-view-container">
      <Breadcrumb title="Examinations Cell & Results" category="Examinations" />

      <div className="container">
        <div className="page-content-layout">
          <aside className="page-sidebar" aria-label="Section Navigation">
            <h4 className="sidebar-menu-title">Explore Section</h4>
            <ul className="sidebar-nav-list">
              <li><Link href="/examinations" className="sidebar-link active">Exam Regulations & Grading</Link></li>
              <li><Link href="/academics" className="sidebar-link">Academic Calendars</Link></li>
              <li><Link href="/tenders" className="sidebar-link">Examination Circulars</Link></li>
              <li><Link href="/admissions" className="sidebar-link">Admissions</Link></li>
            </ul>
          </aside>

          <article className="page-main-body">
            <h3>Examination Cell & Evaluation System</h3>
            <p style={{ marginBottom: "1.5rem", color: "#475569" }}>
              The Examination Cell at RGUKT RK Valley is responsible for conducting mid-term and end-semester examinations, evaluation, grade sheet generation, and convocation degree issuance.
            </p>

            <div style={{ background: "#f1f5f9", borderRadius: "12px", padding: "1.5rem", marginBottom: "2rem" }}>
              <h4 style={{ color: "var(--primary-dark)", marginBottom: "0.75rem" }}>RGUKT 10-Point Grading Scale</h4>
              <div style={{ overflowX: "auto" }}>
                <table className="gov-table" style={{ background: "#fff" }}>
                  <thead>
                    <tr>
                      <th>Grade</th>
                      <th>Qualitative Description</th>
                      <th>Grade Points</th>
                      <th>Marks Range (Out of 100)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {RGUKT_DATA.gradingSystem.map((g, i) => (
                      <tr key={i}>
                        <td><strong style={{ color: "var(--accent-royal)" }}>{g.grade}</strong></td>
                        <td>{g.description}</td>
                        <td><strong>{g.points}</strong></td>
                        <td>{g.marksRange}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <button type="button" className="btn btn-primary" onClick={openGpaModal}>
                Launch RGUKT SGPA/CGPA Calculator Tool
              </button>
              <button
                type="button"
                className="btn btn-gold"
                onClick={() => openDocModal("End Semester Timetable", "End_Sem_Exam_Schedule_Sep_2026.pdf")}
              >
                Download Latest Exam Timetable (PDF)
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
