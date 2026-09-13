"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface SidebarIndexItem {
  id: string;
  label: string;
  sectionId?: string;
  href: string;
}

const DEFAULT_INDEX_ITEMS: SidebarIndexItem[] = [
  { id: "education", label: "Education at RGUKT", sectionId: "education", href: "/students/education" },
  { id: "facilities", label: "Facilities", sectionId: "facilities", href: "/students/facilities" },
  { id: "smartclasses", label: "Smart Classes", sectionId: "smartclasses", href: "/students/smartclasses" },
  { id: "achievements", label: "Achivements", sectionId: "achievements", href: "/students/education#achievements" },
  { id: "events", label: "Events", sectionId: "events", href: "/students/education#events" },
  { id: "antiragging", label: "AntiRagging", sectionId: "antiragging", href: "/students/antiragging" },
];

interface Props {
  currentPath?: string;
  items?: SidebarIndexItem[];
}

export default function StudentsScrollspySidebar({
  currentPath = "/students/education",
  items = DEFAULT_INDEX_ITEMS,
}: Props) {
  const pathname = usePathname();
  const isEducationPage = pathname === "/students/education" || currentPath === "/students/education";

  const [activeId, setActiveId] = useState<string>(() => {
    if (pathname === "/students/facilities") return "facilities";
    if (pathname === "/students/smartclasses") return "smartclasses";
    if (pathname === "/students/antiragging") return "antiragging";
    return "education";
  });

  useEffect(() => {
    if (!isEducationPage) {
      if (pathname === "/students/facilities") setActiveId("facilities");
      else if (pathname === "/students/smartclasses") setActiveId("smartclasses");
      else if (pathname === "/students/antiragging") setActiveId("antiragging");
      else setActiveId("education");
      return;
    }

    const trackedSections = [
      { id: "education", elementId: "education" },
      { id: "facilities", elementId: "facilities" },
      { id: "smartclasses", elementId: "smartclasses" },
      { id: "achievements", elementId: "achievements" },
      { id: "events", elementId: "events" },
      { id: "antiragging", elementId: "antiragging" },
    ];

    // Check if initial hash matches a tracked section on load
    if (typeof window !== "undefined" && window.location.hash) {
      const hashId = window.location.hash.replace("#", "");
      const match = trackedSections.find((s) => s.id === hashId || s.elementId === hashId);
      if (match) {
        setTimeout(() => {
          const el = document.getElementById(match.elementId);
          if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 90;
            window.scrollTo({ top: y, behavior: "smooth" });
            setActiveId(match.id);
          }
        }, 150);
      }
    }

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Check if user is at the bottom of the page
          const isBottom =
            window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 70;
          if (isBottom) {
            setActiveId("antiragging");
            ticking = false;
            return;
          }

          // Check if user is at the top of the page
          if (window.scrollY < 200) {
            setActiveId("education");
            ticking = false;
            return;
          }

          let current = "education";
          const threshold = 180; // Distance in px from viewport top

          for (const item of trackedSections) {
            const el = document.getElementById(item.elementId);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= threshold) {
                current = item.id;
              }
            }
          }

          setActiveId(current);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isEducationPage, pathname]);

  const handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>, item: SidebarIndexItem) => {
    if (isEducationPage && item.sectionId) {
      e.preventDefault();
      setActiveId(item.id);

      if (item.id === "education") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        if (typeof window !== "undefined" && window.history) {
          window.history.replaceState(null, "", "/students/education");
        }
      } else {
        const el = document.getElementById(item.sectionId);
        if (el) {
          const yOffset = -90;
          const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
          if (typeof window !== "undefined" && window.history) {
            window.history.replaceState(null, "", `#${item.sectionId}`);
          }
        }
      }
    }
  };

  return (
    <aside
      className="page-sidebar"
      aria-label="Section Navigation"
      style={{ position: "sticky", top: "90px" }}
    >
      <h4 className="sidebar-menu-title">Index</h4>
      <ul className="sidebar-nav-list">
        {items.map((item) => {
          const isActive = activeId === item.id;
          const href = isEducationPage && item.sectionId ? `#${item.sectionId}` : item.href;

          return (
            <li key={item.id}>
              <Link
                href={href}
                onClick={(e) => handleItemClick(e, item)}
                className={`sidebar-link ${isActive ? "active" : ""}`}
                style={{ cursor: "pointer" }}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>

      <div
        style={{
          marginTop: "1.5rem",
          padding: "1rem",
          background: "#f8fafc",
          borderRadius: "8px",
          border: "1px solid #e2e8f0",
        }}
      >
        <div
          style={{
            fontSize: "0.8rem",
            fontWeight: 700,
            color: "var(--primary-maroon)",
            textTransform: "uppercase",
            marginBottom: "0.5rem",
          }}
        >
          Quick Links
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.85rem" }}>
          <Link
            href="/curriculum"
            style={{
              color: "var(--primary-dark)",
              fontWeight: 600,
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
            Academic Curricula →
          </Link>
          <Link
            href="/academics#regulations"
            style={{
              color: "var(--primary-dark)",
              fontWeight: 600,
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
            </svg>
            Academic Regulations →
          </Link>
          <Link
            href="/placements"
            style={{
              color: "var(--primary-dark)",
              fontWeight: 600,
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
            Career &amp; Placements →
          </Link>
        </div>
      </div>
    </aside>
  );
}
