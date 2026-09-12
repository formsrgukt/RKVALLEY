"use client";

import React from "react";
import Link from "next/link";

export type ExploreSectionId =
  | "academics"
  | "curriculum"
  | "departments"
  | "examinations"
  | "admissions";

interface SectionConfig {
  id: ExploreSectionId;
  label: string;
  href: string;
}

const SECTIONS_CONFIG: SectionConfig[] = [
  {
    id: "academics",
    label: "6-Year B.Tech Overview",
    href: "/academics"
  },
  {
    id: "curriculum",
    label: "Curriculum & Syllabus",
    href: "/curriculum"
  },
  {
    id: "departments",
    label: "All Departments",
    href: "/departments"
  },
  {
    id: "examinations",
    label: "Grading & Exam Regulations",
    href: "/examinations"
  },
  {
    id: "admissions",
    label: "Admissions Guidelines",
    href: "/admissions"
  }
];

interface ExploreSidebarProps {
  activeSection: ExploreSectionId;
  title?: string;
  className?: string;
}

export default function ExploreSidebar({
  activeSection,
  title = "EXPLORE SECTION",
  className = ""
}: ExploreSidebarProps) {
  return (
    <aside
      className={`page-sidebar explore-sidebar-container ${className}`}
      aria-label="Section Navigation"
      style={{ overflow: "visible", position: "sticky", top: "90px", zIndex: 900 }}
    >
      <h4 className="sidebar-menu-title">
        {title}
      </h4>

      <ul className="sidebar-nav-list" style={{ position: "relative", listStyle: "none", padding: 0, margin: 0 }}>
        {SECTIONS_CONFIG.map((section) => {
          const isActive = activeSection === section.id;

          return (
            <li
              key={section.id}
              className="explore-nav-item"
              style={{ position: "relative", marginBottom: "0.25rem" }}
            >
              <Link
                href={section.href}
                className={`sidebar-link ${isActive ? "active" : ""}`}
                style={{
                  display: "block",
                  padding: "0.6rem 0.85rem",
                  fontSize: "0.9rem",
                  fontWeight: isActive ? 700 : 600,
                  color: isActive ? "var(--primary-maroon)" : "#475569",
                  background: isActive ? "#ffffff" : "transparent",
                  borderTop: isActive ? "1px solid #e2e8f0" : "1px solid transparent",
                  borderRight: isActive ? "1px solid #e2e8f0" : "1px solid transparent",
                  borderBottom: isActive ? "1px solid #e2e8f0" : "1px solid transparent",
                  borderLeft: isActive
                    ? "4px solid var(--primary-maroon)"
                    : "4px solid transparent",
                  borderRadius: "6px",
                  boxShadow: isActive ? "0 2px 4px rgba(0,0,0,0.02)" : "none",
                  transform: isActive ? "translateX(4px)" : "none",
                  transition: "all 0.2s ease",
                  textDecoration: "none",
                  whiteSpace: "nowrap"
                }}
              >
                {section.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
