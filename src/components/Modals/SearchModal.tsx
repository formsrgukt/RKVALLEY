"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { RGUKT_DATA } from "@/data/rguktData";

export default function SearchModal() {
  const { isSearchOpen, closeSearch, openDocModal } = useApp();
  const [query, setQuery] = useState("");
  const router = useRouter();

  if (!isSearchOpen) return null;

  const pages = [
    { title: "About RGUKT RK Valley", link: "/about", desc: "Vision, History, Act 18 of 2008 & 330-Acre Campus" },
    { title: "University Administration", link: "/administration", desc: "Chancellor, Vice Chancellor, Director & Deans" },
    { title: "Academic Programs", link: "/academics", desc: "6-Year Integrated B.Tech Structure & Curricula" },
    { title: "Departments Directory", link: "/departments", desc: "AI&ML, Chemical, Civil, CSE, EEE, ECE, Mechanical, MME, Sciences" },
    { title: "Admissions 2026-27", link: "/admissions", desc: "Eligibility, Deprivation points, Application instructions" },
    { title: "Examinations Cell", link: "/examinations", desc: "10-Point Grading Scale, Timetables & Results" },
    { title: "Placements Cell (CDPC)", link: "/placements", desc: "Highest CTC, Top Recruiters & Training Roadmap" },
    { title: "Central Digital Library", link: "/library", desc: "Digital Library, E-Journals & OPAC" },
    { title: "Student Welfare & Hostels", link: "/students", desc: "Hostel life, Mess, SAC Clubs & Sports Stadium" },
    { title: "Anti-Ragging & Grievance Cell", link: "/grievance", desc: "Zero tolerance policy & emergency squads" },
    { title: "Tenders & Procurement", link: "/tenders", desc: "Active e-procurement tenders & bidding notices" },
    { title: "Careers & Recruitment", link: "/careers", desc: "Faculty & staff employment advertisements" },
    { title: "Contact Us & Map", link: "/contact", desc: "Postal address, telephone directory & location" }
  ];

  let matches: { type: string; title: string; link?: string; pdf?: { name: string; title: string }; info: string }[] = [];

  const q = query.trim().toLowerCase();

  pages.forEach((p) => {
    if (!q || p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)) {
      matches.push({ type: "Page", title: p.title, link: p.link, info: p.desc });
    }
  });

  RGUKT_DATA.departments.forEach((d) => {
    if (!q || d.name.toLowerCase().includes(q) || d.code.toLowerCase().includes(q)) {
      matches.push({ type: "Department", title: `${d.name} (${d.code})`, link: `/departments/${d.id}`, info: `HOD: ${d.hod}` });
    }
  });

  RGUKT_DATA.notices.forEach((n) => {
    if (q && (n.title.toLowerCase().includes(q) || n.summary.toLowerCase().includes(q))) {
      matches.push({ type: "Notice", title: n.title, pdf: { name: n.pdfName, title: n.title }, info: `${n.date} • ${n.tag}` });
    }
  });

  const handleSelect = (m: typeof matches[0]) => {
    closeSearch();
    if (m.link) {
      router.push(m.link);
    } else if (m.pdf) {
      openDocModal(m.pdf.title, m.pdf.name);
    }
  };

  return (
    <div className="modal-backdrop active" onClick={closeSearch} role="dialog" aria-modal="true">
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <span className="modal-title">Universal Quick Search</span>
          <button className="modal-close-btn" onClick={closeSearch} aria-label="Close Search">✕</button>
        </div>
        <div className="modal-body">
          <div className="search-modal-input-wrap">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search departments, notices, faculty, or services (e.g. CSE, Admissions, Placements)..."
            />
          </div>

          <ul className="search-results-list">
            {matches.length === 0 ? (
              <li style={{ padding: "1rem", textAlign: "center", color: "#94a3b8" }}>
                No matching results found for &ldquo;{query}&rdquo;
              </li>
            ) : (
              matches.slice(0, 8).map((m, idx) => (
                <li key={idx} className="search-result-item" onClick={() => handleSelect(m)}>
                  <div>
                    <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--accent-royal)", textTransform: "uppercase" }}>
                      {m.type}
                    </span>
                    <h5 style={{ fontSize: "0.92rem", color: "var(--primary-dark)" }}>{m.title}</h5>
                    <p style={{ fontSize: "0.78rem", color: "#64748b" }}>{m.info}</p>
                  </div>
                  <span style={{ fontSize: "0.8rem", color: "var(--accent-royal)" }}>→</span>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
