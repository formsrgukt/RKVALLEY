"use client";

import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/context/AppContext";
import InlineSearch from "./InlineSearch";

export default function StickyNavbar() {
  const pathname = usePathname();
  const { openSearch, openMobileDrawer, openGpaModal, lang, toggleLang } = useApp();
  const [pinnedDropdown, setPinnedDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

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
                <svg viewBox="0 0 1105 1424" width="38" height="38" className="logo-loader">
                  <path d="M 129.50,22.00 Q 121.00,19.00 115.50,41.00 Q 110.00,63.00 115.00,115.50 Q 120.00,168.00 154.00,269.00 Q 188.00,370.00 239.00,453.50 Q 290.00,537.00 349.50,590.50 Q 409.00,644.00 313.00,718.50 Q 217.00,793.00 164.50,867.50 Q 112.00,942.00 72.50,1048.00 Q 33.00,1154.00 23.50,1224.50 Q 14.00,1295.00 17.00,1340.00 Q 20.00,1385.00 32.50,1375.00 Q 45.00,1365.00 95.50,1243.00 Q 146.00,1121.00 188.00,1059.00 Q 230.00,997.00 296.00,936.50 Q 362.00,876.00 420.50,851.00 Q 479.00,826.00 526.50,829.50 Q 574.00,833.00 645.00,870.00 Q 716.00,907.00 804.00,972.50 Q 892.00,1038.00 969.00,1121.00 Q 1046.00,1204.00 1055.00,1204.00 Q 1064.00,1204.00 1077.00,1175.00 Q 1090.00,1146.00 1080.00,1123.00 Q 1070.00,1100.00 965.00,978.00 Q 860.00,856.00 755.00,752.00 Q 650.00,648.00 741.50,590.00 Q 833.00,532.00 895.00,467.00 Q 957.00,402.00 1007.50,312.50 Q 1058.00,223.00 1070.00,182.50 Q 1082.00,142.00 1082.00,113.50 Q 1082.00,85.00 1070.00,86.50 Q 1058.00,88.00 991.50,184.50 Q 925.00,281.00 869.50,334.50 Q 814.00,388.00 749.00,421.00 Q 684.00,454.00 617.00,462.50 Q 550.00,471.00 488.50,454.00 Q 427.00,437.00 372.00,394.50 Q 317.00,352.00 274.00,294.50 Q 231.00,237.00 184.50,131.00 Q 138.00,25.00 129.50,22.00 Z M 549.50,171.00 Q 538.00,171.00 526.00,173.00 Q 514.00,175.00 506.50,177.50 Q 499.00,180.00 484.50,188.00 Q 470.00,196.00 459.00,206.00 Q 448.00,216.00 440.50,226.50 Q 433.00,237.00 427.50,249.50 Q 422.00,262.00 419.00,277.00 Q 416.00,292.00 416.00,303.00 Q 416.00,314.00 418.00,325.50 Q 420.00,337.00 426.50,352.50 Q 433.00,368.00 439.50,377.50 Q 446.00,387.00 454.50,395.50 Q 463.00,404.00 475.00,412.00 Q 487.00,420.00 498.00,424.50 Q 509.00,429.00 521.00,431.50 Q 533.00,434.00 547.50,434.00 Q 562.00,434.00 579.00,430.00 Q 596.00,426.00 608.00,420.00 Q 620.00,414.00 627.50,408.50 Q 635.00,403.00 644.50,393.00 Q 654.00,383.00 659.00,375.50 Q 664.00,368.00 670.50,352.50 Q 677.00,337.00 679.00,326.00 Q 681.00,315.00 681.00,302.00 Q 681.00,289.00 678.50,276.50 Q 676.00,264.00 671.50,252.50 Q 667.00,241.00 660.50,231.00 Q 654.00,221.00 643.00,210.00 Q 632.00,199.00 622.00,192.50 Q 612.00,186.00 601.50,181.50 Q 591.00,177.00 576.00,174.00 Q 561.00,171.00 549.50,171.00 Z" className="nav-logo-outline"></path>
                  <path d="M 129.50,22.00 Q 121.00,19.00 115.50,41.00 Q 110.00,63.00 115.00,115.50 Q 120.00,168.00 154.00,269.00 Q 188.00,370.00 239.00,453.50 Q 290.00,537.00 349.50,590.50 Q 409.00,644.00 313.00,718.50 Q 217.00,793.00 164.50,867.50 Q 112.00,942.00 72.50,1048.00 Q 33.00,1154.00 23.50,1224.50 Q 14.00,1295.00 17.00,1340.00 Q 20.00,1385.00 32.50,1375.00 Q 45.00,1365.00 95.50,1243.00 Q 146.00,1121.00 188.00,1059.00 Q 230.00,997.00 296.00,936.50 Q 362.00,876.00 420.50,851.00 Q 479.00,826.00 526.50,829.50 Q 574.00,833.00 645.00,870.00 Q 716.00,907.00 804.00,972.50 Q 892.00,1038.00 969.00,1121.00 Q 1046.00,1204.00 1055.00,1204.00 Q 1064.00,1204.00 1077.00,1175.00 Q 1090.00,1146.00 1080.00,1123.00 Q 1070.00,1100.00 965.00,978.00 Q 860.00,856.00 755.00,752.00 Q 650.00,648.00 741.50,590.00 Q 833.00,532.00 895.00,467.00 Q 957.00,402.00 1007.50,312.50 Q 1058.00,223.00 1070.00,182.50 Q 1082.00,142.00 1082.00,113.50 Q 1082.00,85.00 1070.00,86.50 Q 1058.00,88.00 991.50,184.50 Q 925.00,281.00 869.50,334.50 Q 814.00,388.00 749.00,421.00 Q 684.00,454.00 617.00,462.50 Q 550.00,471.00 488.50,454.00 Q 427.00,437.00 372.00,394.50 Q 317.00,352.00 274.00,294.50 Q 231.00,237.00 184.50,131.00 Q 138.00,25.00 129.50,22.00 Z M 549.50,171.00 Q 538.00,171.00 526.00,173.00 Q 514.00,175.00 506.50,177.50 Q 499.00,180.00 484.50,188.00 Q 470.00,196.00 459.00,206.00 Q 448.00,216.00 440.50,226.50 Q 433.00,237.00 427.50,249.50 Q 422.00,262.00 419.00,277.00 Q 416.00,292.00 416.00,303.00 Q 416.00,314.00 418.00,325.50 Q 420.00,337.00 426.50,352.50 Q 433.00,368.00 439.50,377.50 Q 446.00,387.00 454.50,395.50 Q 463.00,404.00 475.00,412.00 Q 487.00,420.00 498.00,424.50 Q 509.00,429.00 521.00,431.50 Q 533.00,434.00 547.50,434.00 Q 562.00,434.00 579.00,430.00 Q 596.00,426.00 608.00,420.00 Q 620.00,414.00 627.50,408.50 Q 635.00,403.00 644.50,393.00 Q 654.00,383.00 659.00,375.50 Q 664.00,368.00 670.50,352.50 Q 677.00,337.00 679.00,326.00 Q 681.00,315.00 681.00,302.00 Q 681.00,289.00 678.50,276.50 Q 676.00,264.00 671.50,252.50 Q 667.00,241.00 660.50,231.00 Q 654.00,221.00 643.00,210.00 Q 632.00,199.00 622.00,192.50 Q 612.00,186.00 601.50,181.50 Q 591.00,177.00 576.00,174.00 Q 561.00,171.00 549.50,171.00 Z" className="nav-logo-fill"></path>
                </svg>
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
              <div className="dropdown-menu mega-menu" style={{ width: "600px" }}>
                <div>
                  <div className="mega-column-title">About & Administration</div>
                  <ul className="mega-menu-list">
                    <li><Link href="/about" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>About RGUKT</Link></li>
                    <li><Link href="/institute/vision-mission" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Vision and Mission</Link></li>
                    <li><Link href="/institute/best-practices" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Best Practices</Link></li>
                    <li><Link href="/institute/organization-chart" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Organization Chart</Link></li>
                    <li><Link href="/institute/strategy-document" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Strategy Document</Link></li>
                    <li><Link href="/institute/governing-council" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Governing Council</Link></li>
                    <li><a href="https://www.rguktrkv.ac.in/pdfdoc/AnnualReport.pdf" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Annual Report</a></li>
                    <li><a href="https://convo6.rgukt.in/" target="_blank" rel="noopener noreferrer" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Convocation</a></li>
                    <li><a href="#" className="dropdown-link" onClick={(e) => { e.preventDefault(); setToastMessage("This page will be updated shortly!"); setTimeout(() => setToastMessage(null), 3500); setPinnedDropdown(null); }}>Ombudsperson</a></li>
                  </ul>
                </div>
                <div>
                  <div className="mega-column-title">Accreditations & Disclosures</div>
                  <ul className="mega-menu-list">
                    <li><a href="#" className="dropdown-link" onClick={(e) => { e.preventDefault(); setToastMessage("This page will be updated shortly!"); setTimeout(() => setToastMessage(null), 3500); setPinnedDropdown(null); }}>NAAC Certificate</a></li>
                    <li><Link href="/institute/nirf" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>NIRF</Link></li>
                    <li><a href="https://www.rguktrkv.ac.in/pdfdoc/UGC12BStatus.jpg" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>UGC Status (12B)</a></li>
                    <li><a href="https://www.rguktrkv.ac.in/pdfdoc/UGC2FStatus.pdf" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>UGC Status (2F)</a></li>
                    <li><a href="https://www.rguktrkv.ac.in/pdfdoc/NAD_ABCCell.pdf" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>UGC-NAD/ABC Cell</a></li>
                    <li><Link href="/institute/aicte" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>AICTE Mandatory Disclosure</Link></li>
                  </ul>
                </div>
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
                <Link href="/academics/academic-audit-reports" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>
                  Academic Audit Reports
                </Link>
                <Link href="/academics/academic-council-minutes" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>
                  Minutes of Academic Council Meetings
                </Link>
                <Link href="/academics/faculty-ethics" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>
                  Faculty Ethics
                </Link>
                <Link href="/academics/academic-programmes" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>
                  Academic Programmes
                </Link>
                <Link href="/academics/academic-regulations" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>
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
                <Link href="/administration" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Central Administration</Link>
                <Link href="/administration" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Administration</Link>
                <Link href="/administration/coe" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Controller of Examinations</Link>
                <Link href="/administration" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Sports Board</Link>
                <Link href="/administration" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Communication Directory</Link>
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
                <Link href="/students/education" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Education at RGUKT</Link>
                <Link href="/placements" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Career Development Cell</Link>
                <Link href="/students#incubation" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Incubation Cell</Link>
                <Link href="/students#international-desk" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>International Desk</Link>
                <Link href="/grievance#antiragging" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Anti Ragging</Link>
                <Link href="/grievance#womens-cell" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Women's Cell</Link>
                <Link href="/students#welfare-office" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Students' Welfare Office</Link>
                <Link href="/students#alumni-association" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Alumni Association</Link>
                <a href="http://alumni.rguktrkv.ac.in/" target="_blank" rel="noopener noreferrer" className="dropdown-link" onClick={() => setPinnedDropdown(null)}>Alumni Portal</a>
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

      {/* Custom Toast Notification */}
      {mounted && typeof document !== "undefined" && createPortal(
        <div style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          background: "var(--primary-dark)",
          color: "#ffffff",
          padding: "1rem 1.5rem",
          borderRadius: "8px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          zIndex: 999999,
          fontWeight: 500,
          opacity: toastMessage ? 1 : 0,
          transform: toastMessage ? "translateY(0)" : "translateY(150%)",
          transition: "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease-out",
          pointerEvents: toastMessage ? "auto" : "none"
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          {toastMessage}
        </div>,
        document.body
      )}
    </div>
  );
}
