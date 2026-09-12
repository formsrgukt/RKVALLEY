import React from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { RGUKT_DATA } from "@/data/rguktData";

export const metadata = {
  title: "Central Digital Library | RGUKT RK Valley",
  description: "Central Library facilities, e-resources, OPAC catalog, and digital study wings at RGUKT RK Valley."
};

export default function LibraryPage() {
  return (
    <div className="page-view-container">
      <Breadcrumb title="Central Digital Library" category="Library" />

      <div className="container">
        <div className="page-content-layout">
          <aside className="page-sidebar" aria-label="Section Navigation">
            <h4 className="sidebar-menu-title">Explore Section</h4>
            <ul className="sidebar-nav-list">
              <li><Link href="/library" className="sidebar-link active">Library Overview</Link></li>
              <li><Link href="/students" className="sidebar-link">Student Welfare</Link></li>
              <li><Link href="/research" className="sidebar-link">Research E-Resources</Link></li>
              <li><Link href="/academics" className="sidebar-link">Academic Curricula</Link></li>
            </ul>
          </aside>

          <article className="page-main-body">
            <h3>Central Knowledge Repository</h3>
            <p style={{ fontSize: "1.05rem", color: "#334155", marginBottom: "1.5rem" }}>
              {RGUKT_DATA.campusFacilities[0].description}
            </p>

            <img
              src="/images/central_library.jpg"
              alt="Central Library"
              style={{ borderRadius: "12px", marginBottom: "2rem", width: "100%", maxHeight: "420px", objectFit: "cover" }}
            />

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
              <div style={{ background: "#f8fafc", padding: "1.25rem", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                <h5 style={{ color: "var(--primary-dark)", fontWeight: 700 }}>Library Hours</h5>
                <p style={{ fontSize: "0.85rem", color: "#475569", marginTop: "0.35rem" }}>
                  <strong>Circulation Section:</strong> 9:00 AM – 8:00 PM<br />
                  <strong>Digital Reading Wing:</strong> 24 Hours Open<br />
                  <strong>Sunday & Holidays:</strong> 9:00 AM – 5:00 PM
                </p>
              </div>

              <div style={{ background: "#f8fafc", padding: "1.25rem", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                <h5 style={{ color: "var(--primary-dark)", fontWeight: 700 }}>E-Journals & Databases</h5>
                <p style={{ fontSize: "0.85rem", color: "#475569", marginTop: "0.35rem" }}>
                  IEEE Xplore, ScienceDirect, Springer, ACM Digital Library, NPTEL Video Courses, National Digital Library of India (NDLI).
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
