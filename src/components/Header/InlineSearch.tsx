"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { RGUKT_DATA } from "@/data/rguktData";

export default function InlineSearch() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();
  const { openDocModal } = useApp();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        // Only collapse if there is no query typed
        if (!inputRef.current?.value) {
          setIsExpanded(false);
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const pages = [
    { title: "About RGUKT RK Valley", link: "/about", desc: "Vision, History, Act 18 of 2008 & 330-Acre Campus" },
    { title: "University Administration", link: "/administration", desc: "Chancellor, Vice Chancellor, Director & Deans" },
    { title: "Academic Programs", link: "/academics", desc: "6-Year Integrated B.Tech Structure & Curricula" },
    { title: "Departments Directory", link: "/departments", desc: "CSE, ECE, EEE, Mechanical, Civil, Chemical, MME, Sciences" },
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

  if (q) {
    const uniValues = Object.values(RGUKT_DATA.university).flatMap(v => typeof v === 'object' ? Object.values(v) : v);
    if (uniValues.some(v => String(v).toLowerCase().includes(q))) {
      matches.push({ type: "Info", title: "University Overview", link: "/about", info: "Matches in university info" });
    }
  }

  RGUKT_DATA.leadership.forEach((l) => {
    if (q && (l.name.toLowerCase().includes(q) || l.designation.toLowerCase().includes(q) || l.message.toLowerCase().includes(q) || l.profile.toLowerCase().includes(q))) {
      matches.push({ type: "Leadership", title: l.name, link: `/leadership/${l.id}`, info: l.designation });
    }
  });

  RGUKT_DATA.tenders.forEach((t) => {
    if (q && (t.title.toLowerCase().includes(q) || t.refNo.toLowerCase().includes(q))) {
      matches.push({ type: "Tender", title: t.title, pdf: { name: t.docUrl, title: t.title }, info: `Ref: ${t.refNo}` });
    }
  });

  RGUKT_DATA.careers.forEach((c) => {
    if (q && (c.post.toLowerCase().includes(q) || c.department.toLowerCase().includes(q))) {
      matches.push({ type: "Career", title: c.post, link: "/careers", info: c.department });
    }
  });

  RGUKT_DATA.campusFacilities.forEach((f) => {
    if (q && (f.title.toLowerCase().includes(q) || f.description.toLowerCase().includes(q))) {
      matches.push({ type: "Facility", title: f.title, link: "/students", info: f.category });
    }
  });

  RGUKT_DATA.admissionFAQ.forEach((faq) => {
    if (q && (faq.q.toLowerCase().includes(q) || faq.a.toLowerCase().includes(q))) {
      matches.push({ type: "FAQ", title: faq.q, link: "/admissions", info: "Matches in FAQs" });
    }
  });

  const handleSelect = (m: typeof matches[0]) => {
    setIsOpen(false);
    setQuery("");
    setIsExpanded(false);
    if (m.link) {
      router.push(m.link);
    } else if (m.pdf) {
      openDocModal(m.pdf.title, m.pdf.name);
    }
  };

  const handleExpand = () => {
    setIsExpanded(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  return (
    <div className="inline-search-container" ref={wrapperRef} style={{ position: "relative" }}>
      <div className={`btn-nav-search ${isExpanded ? 'expanded' : ''}`} onClick={handleExpand}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ flexShrink: 0 }}>
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        
        {!isExpanded && (
          <span className="search-placeholder-text">Search</span>
        )}

        <input 
          ref={inputRef}
          type="text" 
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (!isOpen) setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="Search notices..." 
          className="search-input"
        />
      </div>

      {isOpen && (
        <div className="inline-search-dropdown" style={{
          position: "absolute",
          top: "calc(100% + 0.5rem)",
          right: 0,
          width: "400px",
          maxWidth: "90vw",
          maxHeight: "450px",
          background: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          border: "1px solid #e2e8f0",
          overflowY: "auto",
          zIndex: 1000
        }}>
          {matches.length === 0 ? (
            <div style={{ padding: "1.5rem", textAlign: "center", color: "#94a3b8", fontSize: "0.9rem" }}>
              No matching results found for &ldquo;{query}&rdquo;
            </div>
          ) : (
            <ul style={{ listStyle: "none", margin: 0, padding: "0.5rem" }}>
              {matches.slice(0, 8).map((m, idx) => (
                <li key={idx} onClick={() => handleSelect(m)} style={{
                  padding: "0.75rem 1rem",
                  cursor: "pointer",
                  borderRadius: "8px",
                  transition: "background 0.2s"
                }}
                onMouseOver={(e) => e.currentTarget.style.background = "#f8fafc"}
                onMouseOut={(e) => e.currentTarget.style.background = "transparent"}
                >
                  <div style={{ fontSize: "0.65rem", fontWeight: 700, color: "var(--accent-royal)", textTransform: "uppercase", marginBottom: "0.2rem" }}>
                    {m.type}
                  </div>
                  <div style={{ fontSize: "0.95rem", color: "var(--primary-dark)", fontWeight: 600, marginBottom: "0.15rem" }}>{m.title}</div>
                  <div style={{ fontSize: "0.8rem", color: "#64748b" }}>{m.info}</div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
