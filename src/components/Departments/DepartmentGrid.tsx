"use client";

import React, { useState } from "react";
import Link from "next/link";
import { RGUKT_DATA, Department } from "@/data/rguktData";

export default function DepartmentGrid() {
  const depts = RGUKT_DATA.departments.filter(d => d.category === "Engineering").slice(0, 8);

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding" style={{ background: "#ffffff" }} aria-label="Academic Departments">
      <div className="container">
        <style>{`
          .popup-card {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
            transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
          }
          .popup-card.visible {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        `}</style>
        
        <div className="section-header-centered">
          <span className="section-tag">Academics & Research</span>
          <h3 className="section-title">Academic Departments</h3>
          <p className="section-subtitle">
            13 specialized engineering, scientific, and humanities departments fostering world-class technical education.
          </p>
        </div>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(4, 1fr)", 
          gap: "1.5rem" 
        }}>
          {depts.map((d: Department, idx: number) => {
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
                key={d.id}
                className={`${cardClass} popup-card ${isVisible ? "visible" : ""}`}
                style={{
                  borderLeft: borderLeftStyle,
                  transitionDelay: `${idx * 0.05}s`
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
                    Explore &rarr;
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: "3.5rem" }}>
          <div 
            className={`department-card dept-card-red popup-card ${isVisible ? "visible" : ""}`}
            style={{ 
              borderLeft: "4px solid var(--primary-maroon)",
              maxWidth: "450px",
              width: "100%",
              transitionDelay: "0.4s"
            }}
          >
            <div className="dept-header">
              <div 
                className="dept-icon-box"
                style={{ background: "#fdf2f4", color: "var(--primary-maroon)" }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l9 4.9V17L12 22l-9-4.9V7z"/>
                </svg>
              </div>
              <span 
                className="dept-code-badge"
                style={{ color: "var(--primary-maroon)", background: "#fdf2f4", borderColor: "#fecdd3" }}
              >
                H&S
              </span>
            </div>
            <h4 className="dept-title" style={{ color: "var(--primary-maroon)" }}>
              Humanities & Sciences
            </h4>
            <p className="dept-overview">
              Encompassing essential disciplines including Mathematics, Physics, Chemistry, Biology, Telugu, English, and Management to build a strong foundation.
            </p>
            <div className="dept-meta-pills">
              <span><strong>7</strong> Departments</span>
            </div>
            <div className="dept-action-row" style={{ justifyContent: "flex-start", marginTop: "1.5rem" }}>
              <Link 
                href="/academics/departments"
                className="btn"
                style={{ 
                  background: "var(--primary-maroon)", 
                  color: "#ffffff", 
                  padding: "0.6rem 1.5rem",
                  borderRadius: "var(--radius-md)",
                  fontWeight: 600,
                  fontSize: "0.95rem"
                }}
              >
                View All Departments &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
