"use client";

import React from "react";
import Link from "next/link";
import HeroSection from "@/components/Hero/HeroSection";
import QuickAccessGrid from "@/components/Hero/QuickAccessGrid";
import NoticeBoard from "@/components/Notices/NoticeBoard";

import DepartmentGrid from "@/components/Departments/DepartmentGrid";
import PlacementSection from "@/components/Placements/PlacementSection";
import CampusGallery from "@/components/Gallery/CampusGallery";
import { RGUKT_DATA, Tender } from "@/data/rguktData";
import { useApp } from "@/context/AppContext";

export default function HomePage() {
  const { openDocModal } = useApp();

  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Quick Access Command Grid */}
      <QuickAccessGrid />

      {/* 3. Live Notice Board & Urgent Updates */}
      <NoticeBoard />

      {/* 4. About RGUKT & 6-Year Paradigm */}
      <section className="section-padding about-section" aria-label="About Institute">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-wrapper">
              <img src="/images/campus_image.png" alt="Aerial view of RGUKT RK Valley" className="about-main-img" />
              <div className="about-floating-card">
                <span className="floating-card-number">18,000+</span>
                <span className="floating-card-text">Alumni Engineers & Global Leaders Graduated</span>
              </div>
            </div>

            <div>
              <span className="section-tag">Institutional Heritage</span>
              <h3 className="section-title" style={{ marginBottom: "1rem" }}>
                Empowering Exceptional Talent Through Technology
              </h3>
              <p className="about-content-text">
                Rajiv Gandhi University of Knowledge Technologies (RGUKT) RK Valley was founded in 2008 by the Government of Andhra Pradesh to bridge the urban-rural technological divide. Located in the serene valley of Idupulapaya, Kadapa, the institute combines world-class pedagogy with a 100% residential campus.
              </p>

              <div className="about-features-list">
                <div className="about-feature-item">
                  <div className="about-feature-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>
                  <div>
                    <h5 className="about-feature-title">Merit-Based Rural Inclusion</h5>
                    <p className="about-feature-desc">Special deprivation scoring for rural government school toppers.</p>
                  </div>
                </div>

                <div className="about-feature-item">
                  <div className="about-feature-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  </div>
                  <div>
                    <h5 className="about-feature-title">1:1 ICT Computing Model</h5>
                    <p className="about-feature-desc">Individual laptops and high-speed campus-wide 10 Gbps network.</p>
                  </div>
                </div>

                <div className="about-feature-item">
                  <div className="about-feature-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h5 className="about-feature-title">100% Residential Living</h5>
                    <p className="about-feature-desc">Hygienic mechanized dining, sports arena, and 24x7 healthcare.</p>
                  </div>
                </div>

                <div className="about-feature-item">
                  <div className="about-feature-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h5 className="about-feature-title">Industry-Ready Research</h5>
                    <p className="about-feature-desc">Extensive core placements, patent support, and student startups.</p>
                  </div>
                </div>
              </div>

              <Link href="/about" className="btn btn-primary">
                Learn More About RGUKT Paradigm â†’
              </Link>
            </div>
          </div>

          {/* 5. Campus Video Tour (Merged) */}
          <div className="section-header" style={{ textAlign: "center", justifyContent: "center", display: "flex", flexDirection: "column", alignItems: "center", marginTop: "4rem" }}>
            <div style={{ maxWidth: "800px" }}>
              <span className="section-tag" style={{ justifyContent: "center" }}>Campus Life</span>
              <h3 className="section-title">Experience RGUKT RK Valley</h3>
              <p className="section-subtitle" style={{ margin: "0 auto" }}>
                Take a glimpse into the vibrant academic environment, world-class infrastructure, and lush green campus.
              </p>
            </div>
          </div>
          <div style={{ maxWidth: "960px", margin: "2rem auto 0", borderRadius: "16px", overflow: "hidden", boxShadow: "var(--shadow-xl)", aspectRatio: "16/9", background: "#000" }}>
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/FjK9tdeIFiM?rel=0" 
              title="RGUKT RK Valley Campus Tour" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* 6. Academic Departments Showcase */}
      <DepartmentGrid />

      {/* 7. Student Services Dashboard */}
      <section className="section-padding student-services-section" aria-label="Student Services">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-tag">Campus Ecosystem</span>
              <h3 className="section-title">Student Services & Welfare</h3>
              <p className="section-subtitle">
                Dedicated 24x7 student amenities supporting academic, physical, and holistic personal growth.
              </p>
            </div>
            <Link href="/students" className="btn btn-primary" style={{ fontSize: "0.85rem" }}>
              Explore Campus Life â†’
            </Link>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              </div>
              <h4 className="service-title">Hostels & Central Dining</h4>
              <p className="service-desc">Spacious residential blocks with RO water purification, solar heating, and mechanized catering kitchens.</p>
            </div>

            <div className="service-card">
              <div className="service-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
              </div>
              <h4 className="service-title">Central Digital Library</h4>
              <p className="service-desc">Over 75,000 volumes, IEEE/ScienceDirect e-resources, and a 200-seat 24x7 digital reading wing.</p>
            </div>

            <div className="service-card">
              <div className="service-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
              </div>
              <h4 className="service-title">Sports Stadium & SAC</h4>
              <p className="service-desc">400m running track, tennis, basketball, multi-gymnasium, cricket ground, and vibrant student clubs.</p>
            </div>

            <div className="service-card">
              <div className="service-icon-wrap">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
              </div>
              <h4 className="service-title">24x7 Campus Hospital</h4>
              <p className="service-desc">30-bed health center with resident medical officers, emergency ambulance, and full pharmacy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Placement Metrics & Recruiters */}
      <PlacementSection />

      {/* 9. Campus Infrastructure Gallery */}
      <CampusGallery />

      {/* 10. Tenders Summary */}
      <section className="section-padding" style={{ background: "#ffffff" }} aria-label="E-Tenders & Procurement">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-tag">Procurement & Bidding</span>
              <h3 className="section-title">Active E-Tenders</h3>
              <p className="section-subtitle">
                Official university tenders for equipment, civil works, lab supplies, and annual maintenance.
              </p>
            </div>
            <Link href="/tenders" className="btn btn-primary" style={{ fontSize: "0.85rem" }}>
              View All Tenders Portal â†’
            </Link>
          </div>

          <div className="tenders-table-container">
            <div style={{ overflowX: "auto" }}>
              <div className="table-responsive"><table className="gov-table">
                <thead>
                  <tr>
                    <th>Tender Ref No</th>
                    <th>Description of Work / Item</th>
                    <th>Publish Date</th>
                    <th>Closing Date</th>
                    <th>Status</th>
                    <th>Document</th>
                  </tr>
                </thead>
                <tbody>
                  {RGUKT_DATA.tenders.slice(0, 4).map((t: Tender) => (
                    <tr key={t.id}>
                      <td><strong>{t.refNo}</strong></td>
                      <td>{t.title}</td>
                      <td>{t.publishDate}</td>
                      <td><strong style={{ color: "var(--status-crimson)" }}>{t.closingDate}</strong></td>
                      <td><span className="table-badge-active">{t.status}</span></td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-primary"
                          style={{ padding: "0.3rem 0.65rem", fontSize: "0.75rem" }}
                          onClick={() => openDocModal(t.title, t.docUrl)}
                        >
                          PDF
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table></div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Social Media Connect */}
      <section className="section-padding" style={{ background: "var(--surface-bg, #f8fafc)" }} aria-label="Social Media">
        <div className="container">
          <div className="section-header" style={{ textAlign: "center", justifyContent: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ maxWidth: "800px" }}>
                <span className="section-tag" style={{ justifyContent: "center" }}>Social Networks</span>
                <h3 className="section-title">Join Our Digital Community</h3>
              <p className="section-subtitle" style={{ margin: "0 auto" }}>
                Stay updated with the latest news, events, and student activities across our official social media channels.
              </p>
            </div>
          </div>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
            marginTop: "2.5rem"
          }}>
            {/* Facebook Card */}
              <a href="https://www.facebook.com/share/19PbLCmiBr/" target="_blank" rel="noopener noreferrer" style={{
              background: "#ffffff",
              borderRadius: "16px",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
              textDecoration: "none",
              color: "inherit",
              boxShadow: "var(--shadow-md, 0 4px 6px -1px rgba(0, 0, 0, 0.1))",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "var(--shadow-xl, 0 20px 25px -5px rgba(0, 0, 0, 0.1))"; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "var(--shadow-md, 0 4px 6px -1px rgba(0, 0, 0, 0.1))"; }}
            >
              <div style={{ color: "#1877F2" }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <h4 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 600 }}>Facebook</h4>
              <span style={{ color: "#64748b", fontSize: "0.9rem" }}>@rguktrkv</span>
            </a>

            {/* Twitter Card */}
              <a href="https://x.com/RGUKTRKVOFFI" target="_blank" rel="noopener noreferrer" style={{
              background: "#ffffff",
              borderRadius: "16px",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
              textDecoration: "none",
              color: "inherit",
              boxShadow: "var(--shadow-md, 0 4px 6px -1px rgba(0, 0, 0, 0.1))",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "var(--shadow-xl, 0 20px 25px -5px rgba(0, 0, 0, 0.1))"; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "var(--shadow-md, 0 4px 6px -1px rgba(0, 0, 0, 0.1))"; }}
            >
              <div style={{ color: "#1DA1F2" }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </div>
              <h4 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 600 }}>Twitter</h4>
              <span style={{ color: "#64748b", fontSize: "0.9rem" }}>@rguktrkv</span>
            </a>

            {/* LinkedIn Card */}
              <a href="https://www.linkedin.com/school/rgukt-rkv/" target="_blank" rel="noopener noreferrer" style={{
              background: "#ffffff",
              borderRadius: "16px",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
              textDecoration: "none",
              color: "inherit",
              boxShadow: "var(--shadow-md, 0 4px 6px -1px rgba(0, 0, 0, 0.1))",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "var(--shadow-xl, 0 20px 25px -5px rgba(0, 0, 0, 0.1))"; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "var(--shadow-md, 0 4px 6px -1px rgba(0, 0, 0, 0.1))"; }}
            >
              <div style={{ color: "#0A66C2" }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <h4 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 600 }}>LinkedIn</h4>
              <span style={{ color: "#64748b", fontSize: "0.9rem" }}>RGUKT RK Valley</span>
            </a>

                          {/* Youtube Card */}
              <a href="https://youtube.com/@adminsocialnetwork?si=mQhKRFaoIE_YA-y6" target="_blank" rel="noopener noreferrer" style={{
                background: "#ffffff",
                borderRadius: "16px",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
                textDecoration: "none",
                color: "inherit",
                boxShadow: "var(--shadow-md, 0 4px 6px -1px rgba(0, 0, 0, 0.1))",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "var(--shadow-xl, 0 20px 25px -5px rgba(0, 0, 0, 0.1))"; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "var(--shadow-md, 0 4px 6px -1px rgba(0, 0, 0, 0.1))"; }}
              >
                <div style={{ color: "#FF0000" }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <h4 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 600 }}>YouTube</h4>
                <span style={{ color: "#64748b", fontSize: "0.9rem" }}>@adminsocialnetwork</span>
              </a>

              {/* Instagram Card */}
              <a href="https://www.instagram.com/rguktrkv_official?utm_source=qr&igsh=NXVrNmlpcjY2ZmM0" target="_blank" rel="noopener noreferrer" style={{
              background: "#ffffff",
              borderRadius: "16px",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
              textDecoration: "none",
              color: "inherit",
              boxShadow: "var(--shadow-md, 0 4px 6px -1px rgba(0, 0, 0, 0.1))",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "var(--shadow-xl, 0 20px 25px -5px rgba(0, 0, 0, 0.1))"; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "var(--shadow-md, 0 4px 6px -1px rgba(0, 0, 0, 0.1))"; }}
            >
              <div style={{ color: "#E1306C" }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </div>
              <h4 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 600 }}>Instagram</h4>
              <span style={{ color: "#64748b", fontSize: "0.9rem" }}>@rgukt_rkvalley</span>
            </a>
          </div>
        </div>
      </section>

      {/* 12. Accreditations Bar */}
      <div className="official-links-bar" aria-label="Official Links & Accreditations">
        <div className="container">
          <div className="official-links-grid">
            <a href="https://www.ugc.gov.in" target="_blank" rel="noopener" className="official-link-card">UGC Portal</a>
            <a href="https://www.aicte-india.org" target="_blank" rel="noopener" className="official-link-card">AICTE Approved</a>
            <a href="https://www.naac.gov.in" target="_blank" rel="noopener" className="official-link-card">NAAC Portal</a>
            <a href="https://www.nirfindia.org" target="_blank" rel="noopener" className="official-link-card">NIRF Ranking</a>
            <a href="https://apsche.ap.gov.in" target="_blank" rel="noopener" className="official-link-card">APSCHE AP</a>
            <a href="https://ndl.iitkgp.ac.in" target="_blank" rel="noopener" className="official-link-card">National Digital Library</a>
          </div>
        </div>
      </div>
    </>
  );
}


