"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/context/AppContext";
import InlineSearch from "./InlineSearch";

export default function StickyNavbar() {
  const pathname = usePathname();
  const { openSearch, openMobileDrawer, openGpaModal, lang, toggleLang } = useApp();
  const [pinnedDropdown, setPinnedDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setPinnedDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 140);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const handleDropdownClick = (e: React.MouseEvent, dropdownName: string) => {
    e.preventDefault();
    setPinnedDropdown(pinnedDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <div className={`sticky-nav-container ${isScrolled ? "scrolled" : ""}`}>
      <div className="container navbar">
        <nav aria-label="Main Navigation">
          <ul className="nav-links-desktop" ref={navRef}>
            {/* Dynamic Logo that appears only when scrolled */}
            <li style={{ 
              width: isScrolled ? "45px" : "0px", 
              opacity: isScrolled ? 1 : 0, 
              overflow: "hidden", 
              transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              display: "flex",
              alignItems: "center",
              marginRight: isScrolled ? "10px" : "0px"
            }}>
              <Link href="/home" aria-label="Go to Home" onClick={() => setPinnedDropdown(null)}>
                <img src="/images/logo.png" alt="RGUKT Logo" style={{ width: "38px", height: "38px", filter: "brightness(0) invert(1)", objectFit: "contain" }} />
              </Link>
            </li>

            <li className={`nav-item ${isActive("/home") || isActive("/") ? "active" : ""}`}>
              <Link href="/home" className="nav-link" onClick={() => setPinnedDropdown(null)}>Home</Link>
            </li>

            {/* Institute Dropdown */}
            <li 
              className={`nav-item ${isActive("/about") ? "active" : ""} ${pinnedDropdown === "institute" ? "pinned" : ""}`}
              onMouseEnter={() => setPinnedDropdown(null)}
            >
              <Link href="/about" className="nav-link" onClick={(e) => handleDropdownClick(e, "institute")}>
                Institute
                <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </Link>
              <div className="dropdown-menu">
                <Link href="/about" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>About RGUKT RK Valley</Link>
                <Link href="/about" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Vision & Institutional Mission</Link>
                <Link href="/about" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Act 18 of 2008 / History</Link>
                <Link href="/administration" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Governing Council & Leadership</Link>
                <Link href="/about" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Campus Infrastructure</Link>
                <Link href="/contact" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>How to Reach Idupulapaya</Link>
              </div>
            </li>

            {/* Academics Mega Menu */}
            <li 
              className={`nav-item ${isActive("/academics") ? "active" : ""} ${pinnedDropdown === "academics" ? "pinned" : ""}`}
              onMouseEnter={() => setPinnedDropdown(null)}
            >
              <Link href="/academics" className="nav-link" onClick={(e) => handleDropdownClick(e, "academics")}>
                Academics
                <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </Link>
              <div className="dropdown-menu" style={{ minWidth: "310px", padding: "0.5rem" }}>
                <Link href="/academics" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>
                  6-Year Integrated B.Tech
                </Link>
                <Link href="/academics#audit" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>
                  Academic Audit Reports
                </Link>
                <Link href="/academics#council" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>
                  Minutes of Academic Council Meetings
                </Link>
                <Link href="/academics#ethics" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>
                  Faculty Ethics
                </Link>
                <Link href="/academics#programs" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>
                  Academic Programmes
                </Link>
                <Link href="/academics#regulations" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>
                  Academic Regulations
                </Link>
                <Link href="/academics#calendar" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>
                  Academic Calendar
                </Link>
                <Link href="/curriculum" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>
                  Curricula
                </Link>
                <Link href="/departments" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>
                  Departments
                </Link>
                <Link href="/examinations#timetable" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>
                  Time Table
                </Link>
                <Link href="/examinations" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>
                  Examinations
                </Link>
              </div>
            </li>

            {/* Administration */}
            <li 
              className={`nav-item ${isActive("/administration") ? "active" : ""} ${pinnedDropdown === "administration" ? "pinned" : ""}`}
              onMouseEnter={() => setPinnedDropdown(null)}
            >
              <Link href="/administration" className="nav-link" onClick={(e) => handleDropdownClick(e, "administration")}>
                Administration
                <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </Link>
              <div className="dropdown-menu">
                <Link href="/administration" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Chancellor's Desk</Link>
                <Link href="/administration" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Vice-Chancellor's Secretariat</Link>
                <Link href="/administration" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Campus Director's Office</Link>
                <Link href="/administration" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Administrative Officer (AO)</Link>
                <Link href="/administration" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Deaneries Directory</Link>
              </div>
            </li>

            {/* Departments Mega Menu */}
            <li 
              className={`nav-item ${isActive("/departments") ? "active" : ""} ${pinnedDropdown === "departments" ? "pinned" : ""}`}
              onMouseEnter={() => setPinnedDropdown(null)}
            >
              <Link href="/departments" className="nav-link" onClick={(e) => handleDropdownClick(e, "departments")}>
                Departments
                <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </Link>
              <div className="dropdown-menu mega-menu">
                <div>
                  <div className="mega-column-title">Engineering Disciplines</div>
                  <ul className="mega-menu-list">
                    <li><Link href="/departments/aiml" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Artificial Intelligence & Machine Learning (AI&ML)</Link></li>
                    <li><Link href="/departments/che" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Chemical Engineering (CHE)</Link></li>
                    <li><Link href="/departments/ce" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Civil Engineering (CE)</Link></li>
                    <li><Link href="/departments/cse" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Computer Science & Engineering (CSE)</Link></li>
                    <li><Link href="/departments/eee" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Electrical & Electronics Engineering (EEE)</Link></li>
                    <li><Link href="/departments/ece" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Electronics & Communication Engineering (ECE)</Link></li>
                    <li><Link href="/departments/me" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Mechanical Engineering (ME)</Link></li>
                    <li><Link href="/departments/mme" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Metallurgical & Materials Engineering (MME)</Link></li>
                  </ul>
                </div>
                <div>
                  <div className="mega-column-title">Sciences & Humanities</div>
                  <ul className="mega-menu-list">
                    <li><Link href="/departments/maths" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Mathematics</Link></li>
                    <li><Link href="/departments/physics" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Physics</Link></li>
                    <li><Link href="/departments/chem" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Chemistry</Link></li>
                    <li><Link href="/departments/bio" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Bio-Sciences</Link></li>
                    <li><Link href="/departments/humanities" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Humanities & Management</Link></li>
                    <li><Link href="/departments" className="dropdown-link" onClick={() => setPinnedDropdown(null)} style={{ fontWeight: 700, color: "var(--accent-royal)" }}>All 13 Departments →</Link></li>
                  </ul>
                </div>
              </div>
            </li>

            {/* Admissions */}
            <li className={`nav-item ${isActive("/admissions") ? "active" : ""}`}>
              <Link href="/admissions" className="nav-link" onClick={() => setPinnedDropdown(null)}>Admissions</Link>
            </li>

            {/* Students */}
            <li 
              className={`nav-item ${isActive("/students") || isActive("/library") ? "active" : ""} ${pinnedDropdown === "students" ? "pinned" : ""}`}
              onMouseEnter={() => setPinnedDropdown(null)}
            >
              <Link href="/students" className="nav-link" onClick={(e) => handleDropdownClick(e, "students")}>
                Students
                <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </Link>
              <div className="dropdown-menu">
                <Link href="/students" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Hostels & Central Dining</Link>
                <Link href="/library" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Central Digital Library</Link>
                <Link href="/students" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Student Activity Center (SAC)</Link>
                <Link href="/students" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Sports Stadium & Complex</Link>
                <Link href="/students" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>24x7 Campus Health Center</Link>
                <Link href="/grievance" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Anti-Ragging Squads</Link>
                <Link href="/grievance" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Women Development Cell (ICC)</Link>
              </div>
            </li>

            {/* Examinations */}
            <li className={`nav-item ${isActive("/examinations") ? "active" : ""}`}>
              <Link href="/examinations" className="nav-link" onClick={() => setPinnedDropdown(null)}>Examinations</Link>
            </li>

            {/* Placements */}
            <li className={`nav-item ${isActive("/placements") ? "active" : ""}`}>
              <Link href="/placements" className="nav-link" onClick={() => setPinnedDropdown(null)}>Placements</Link>
            </li>

            {/* Research */}
            <li className={`nav-item ${isActive("/research") ? "active" : ""}`}>
              <Link href="/research" className="nav-link" onClick={() => setPinnedDropdown(null)}>Research</Link>
            </li>

            {/* Tenders & Careers */}
            <li 
              className={`nav-item ${isActive("/tenders") || isActive("/careers") ? "active" : ""} ${pinnedDropdown === "tenders" ? "pinned" : ""}`}
              onMouseEnter={() => setPinnedDropdown(null)}
            >
              <Link href="/tenders" className="nav-link" onClick={(e) => handleDropdownClick(e, "tenders")}>
                Tenders & Jobs
                <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </Link>
              <div className="dropdown-menu">
                <Link href="/tenders" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>E-Tenders & Bidding</Link>
                <Link href="/careers" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Faculty & Staff Recruitment</Link>
                <Link href="/examinations" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Examination Circulars</Link>
              </div>
            </li>

            {/* Contact */}
            <li className={`nav-item ${isActive("/contact") ? "active" : ""}`}>
              <Link href="/contact" className="nav-link" onClick={() => setPinnedDropdown(null)}>Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="nav-actions-right">
          <InlineSearch />

          <button 
            onClick={toggleLang} 
            className="lang-btn-global" 
            aria-label="Toggle Language"
            title="Switch Language"
            style={{ 
              background: 'transparent', 
              border: '1px solid rgba(255, 255, 255, 0.4)', 
              color: 'rgba(255, 255, 255, 0.9)', 
              borderRadius: '99px', 
              padding: '0.4rem 0.8rem', 
              fontWeight: 600, 
              fontSize: '0.85rem',
              marginLeft: '0.5rem',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
            }}
          >
            {lang === "en" ? "తెలుగు" : "EN"}
          </button>

          <button onClick={openMobileDrawer} className="btn-mobile-toggle" aria-label="Open Mobile Menu" style={{ marginLeft: '0.5rem' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
