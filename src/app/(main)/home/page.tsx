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
                Learn More About RGUKT Paradigm →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Campus Video Tour */}
      <section className="section-padding" style={{ background: "var(--surface-card)" }} aria-label="Campus Video Tour">
        <div className="container">
          <div className="section-header" style={{ textAlign: "center", justifyContent: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
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
              Explore Campus Life →
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
              View All Tenders Portal →
            </Link>
          </div>

          <div className="tenders-table-container">
            <div style={{ overflowX: "auto" }}>
              <table className="gov-table">
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
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Accreditations Bar */}
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
