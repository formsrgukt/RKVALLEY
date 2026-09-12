"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";

export type ExploreSectionId =
  | "academics"
  | "curriculum"
  | "departments"
  | "examinations"
  | "admissions";

interface SubSectionItem {
  title: string;
  href: string;
  badge?: string;
}

interface SubSectionGroup {
  groupName: string;
  items: SubSectionItem[];
}

interface SectionConfig {
  id: ExploreSectionId;
  label: string;
  href: string;
  groups: SubSectionGroup[];
}

const SECTIONS_CONFIG: SectionConfig[] = [
  {
    id: "academics",
    label: "6-Year B.Tech Overview",
    href: "/academics",
    groups: []
  },
  {
    id: "curriculum",
    label: "Curriculum & Syllabus",
    href: "/curriculum",
    groups: [
      {
        groupName: "Academic Streams",
        items: [
          {
            title: "Pre-University Courses (PUC)",
            href: "/curriculum#puc",
            badge: "6 Mids + EST"
          },
          {
            title: "Engineering Departments",
            href: "/curriculum#engineering",
            badge: "B.Tech E1-E4"
          }
        ]
      }
    ]
  },
  {
    id: "departments",
    label: "All Departments",
    href: "/departments",
    groups: [
      {
        groupName: "Department Categories",
        items: [
          {
            title: "Engineering Departments",
            href: "/departments#engineering",
            badge: "8 Depts"
          },
          {
            title: "Sciences & Humanities",
            href: "/departments#sciences",
            badge: "5 Depts"
          }
        ]
      }
    ]
  },
  {
    id: "examinations",
    label: "Grading & Exam Regulations",
    href: "/examinations",
    groups: [
      {
        groupName: "Examinations & Grading",
        items: [
          {
            title: "PUC Evaluation Scheme (6 Mids + EST)",
            href: "/examinations#evaluation",
            badge: "PUC"
          },
          {
            title: "B.Tech Semester Examination Framework",
            href: "/examinations#evaluation",
            badge: "B.Tech"
          },
          {
            title: "RGUKT 10-Point Grading Scale",
            href: "/examinations#grading",
            badge: "10-Point"
          },
          {
            title: "SGPA & CGPA Calculator Tool",
            href: "/examinations#grading"
          },
          {
            title: "Examination Timetables & Circulars",
            href: "/examinations"
          }
        ]
      }
    ]
  },
  {
    id: "admissions",
    label: "Admissions Guidelines",
    href: "/admissions",
    groups: [
      {
        groupName: "Admissions & Counseling",
        items: [
          {
            title: "6-Year Integrated Program Eligibility",
            href: "/admissions#eligibility"
          },
          {
            title: "Rural Deprivation Points (0.4 Bonus)",
            href: "/admissions#deprivation",
            badge: "0.4 Bonus"
          },
          {
            title: "Counseling & Document Verification",
            href: "/admissions#counseling"
          },
          {
            title: "Admissions FAQs & Helpdesk",
            href: "/admissions#faqs"
          }
        ]
      }
    ]
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
  const [hoveredSection, setHoveredSection] = useState<ExploreSectionId | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<ExploreSectionId | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (id: ExploreSectionId) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    const cfg = SECTIONS_CONFIG.find((s) => s.id === id);
    if (cfg && cfg.groups.length > 0) {
      setHoveredSection(id);
    } else {
      setHoveredSection(null);
    }
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setHoveredSection(null);
    }, 180);
  };

  const toggleMobileAccordion = (id: ExploreSectionId, e: React.MouseEvent) => {
    // Only toggle accordion on small screens (< 992px)
    if (typeof window !== "undefined" && window.innerWidth < 992) {
      e.preventDefault();
      setMobileExpanded((prev) => (prev === id ? null : id));
    }
  };

  // Always show all sections in standard order: 6-Year Overview first, followed by others
  const visibleSections = SECTIONS_CONFIG;
  const activeHoverConfig = SECTIONS_CONFIG.find((s) => s.id === hoveredSection);

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
        {visibleSections.map((section) => {
          const isActive = activeSection === section.id;
          const isHovered = hoveredSection === section.id;
          const isMobileOpen = mobileExpanded === section.id;

          return (
            <li
              key={section.id}
              className="explore-nav-item"
              style={{ position: "relative", marginBottom: "0.25rem" }}
              onMouseEnter={() => handleMouseEnter(section.id)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={section.href}
                onClick={(e) => toggleMobileAccordion(section.id, e)}
                className={`sidebar-link ${isActive ? "active" : ""}`}
                style={{
                  display: "block",
                  padding: "0.6rem 0.85rem",
                  fontSize: "0.9rem",
                  fontWeight: isActive ? 700 : 600,
                  color: isActive ? "var(--primary-maroon)" : "#475569",
                  background: isActive ? "#ffffff" : isHovered ? "#f8fafc" : "transparent",
                  borderTop: isActive ? "1px solid #e2e8f0" : "1px solid transparent",
                  borderRight: isActive ? "1px solid #e2e8f0" : "1px solid transparent",
                  borderBottom: isActive ? "1px solid #e2e8f0" : "1px solid transparent",
                  borderLeft: isActive
                    ? "4px solid var(--primary-maroon)"
                    : isHovered
                    ? "4px solid var(--accent-gold)"
                    : "4px solid transparent",
                  borderRadius: "6px",
                  boxShadow: isActive ? "0 2px 4px rgba(0,0,0,0.02)" : "none",
                  transform: isHovered || isActive ? "translateX(4px)" : "none",
                  transition: "all 0.2s ease",
                  textDecoration: "none",
                  whiteSpace: "nowrap"
                }}
              >
                {section.label}
              </Link>

              {/* Mobile Accordion Inline Dropdown (Screens < 992px) */}
              {isMobileOpen && section.groups.length > 0 && (
                <div
                  className="mobile-subsections-drawer"
                  style={{
                    display: "block",
                    padding: "0.6rem",
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "6px",
                    marginTop: "0.35rem",
                    marginBottom: "0.5rem"
                  }}
                >
                  {section.groups.map((grp, gIdx) => (
                    <div key={gIdx} style={{ marginBottom: "0.5rem" }}>
                      <div style={{ fontSize: "0.68rem", fontWeight: 800, color: "var(--primary-maroon)", textTransform: "uppercase", marginBottom: "0.25rem", letterSpacing: "0.5px" }}>
                        {grp.groupName}
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                        {grp.items.map((it, iIdx) => (
                          <Link
                            key={iIdx}
                            href={it.href}
                            style={{
                              fontSize: "0.8rem",
                              fontWeight: 600,
                              color: "#334155",
                              padding: "0.3rem 0.5rem",
                              borderRadius: "4px",
                              textDecoration: "none",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              background: "#ffffff",
                              border: "1px solid #f1f5f9"
                            }}
                          >
                            <span>{it.title}</span>
                            {it.badge && (
                              <span style={{ fontSize: "0.64rem", fontWeight: 700, color: "#b45309", background: "#fef3c7", padding: "0.05rem 0.3rem", borderRadius: "3px" }}>
                                {it.badge}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </li>
          );
        })}
      </ul>

      {/* Desktop Floating Side Bar Flyout on Mouseover (Screens >= 992px) */}
      {hoveredSection && activeHoverConfig && activeHoverConfig.groups.length > 0 && (
        <div
          className="desktop-sidebar-flyout"
          onMouseEnter={() => handleMouseEnter(hoveredSection)}
          onMouseLeave={handleMouseLeave}
          style={{
            position: "absolute",
            left: "calc(100% + 10px)",
            top: "0px",
            width: "330px",
            background: "#ffffff",
            borderRadius: "10px",
            borderTop: "1px solid #e2e8f0",
            borderRight: "1px solid #e2e8f0",
            borderBottom: "1px solid #e2e8f0",
            borderLeft: "4px solid var(--primary-maroon)",
            boxShadow: "0 16px 36px -4px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.05)",
            zIndex: 99999,
            padding: "0.85rem",
            animation: "flyoutFadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards"
          }}
        >
          {/* Invisible Hover Bridge spanning the gap so mouse doesn't drop hover */}
          <div
            style={{
              position: "absolute",
              left: "-16px",
              top: 0,
              width: "18px",
              height: "100%",
              background: "transparent"
            }}
          />

          {/* Flyout Header - Clean heading and direct page link */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem", paddingBottom: "0.55rem", borderBottom: "1px solid #f1f5f9", marginBottom: "0.65rem" }}>
            <h5 style={{ margin: 0, color: "var(--primary-maroon)", fontSize: "0.92rem", fontWeight: 800 }}>
              {activeHoverConfig.label}
            </h5>
            <Link
              href={activeHoverConfig.href}
              className="btn btn-primary"
              style={{
                fontSize: "0.68rem",
                padding: "0.22rem 0.55rem",
                borderRadius: "5px",
                fontWeight: 700,
                flexShrink: 0
              }}
            >
              Open Page →
            </Link>
          </div>

          {/* Sub-sections Groups: Clean headings only with direct links */}
          <div
            className="flyout-scroll-container"
            style={{
              maxHeight: "440px",
              overflowY: "auto",
              paddingRight: "0.2rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.6rem"
            }}
          >
            {activeHoverConfig.groups.map((group, gIdx) => (
              <div key={gIdx}>
                <div
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    color: "var(--primary-maroon)",
                    background: "#fdf2f4",
                    padding: "0.18rem 0.45rem",
                    borderRadius: "4px",
                    marginBottom: "0.35rem",
                    display: "inline-block"
                  }}
                >
                  {group.groupName}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                  {group.items.map((item, itemIdx) => (
                    <Link
                      key={itemIdx}
                      href={item.href}
                      className="flyout-item-link"
                    >
                      <span>{item.title}</span>
                      {item.badge && (
                        <span
                          style={{
                            fontSize: "0.64rem",
                            fontWeight: 700,
                            color: "#b45309",
                            background: "#fef3c7",
                            padding: "0.08rem 0.35rem",
                            borderRadius: "3px",
                            flexShrink: 0,
                            marginLeft: "0.5rem"
                          }}
                        >
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
}
