"use client";

import React, { useState } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";

export default function GrievancePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-view-container">
      <Breadcrumb title="Anti-Ragging & Student Grievance Redressal" category="Grievance" />

      <div className="container">
        <div className="page-content-layout">
          <aside className="page-sidebar" aria-label="Section Navigation">
            <h4 className="sidebar-menu-title">Explore Section</h4>
            <ul className="sidebar-nav-list">
              <li><Link href="/grievance" className="sidebar-link active">Anti-Ragging Policy</Link></li>
              <li><Link href="/students" className="sidebar-link">Student Welfare</Link></li>
              <li><Link href="/contact" className="sidebar-link">Helplines & Directory</Link></li>
            </ul>
          </aside>

          <article className="page-main-body">
            <div style={{ background: "var(--status-crimson-bg)", borderLeft: "4px solid var(--status-crimson)", padding: "1.25rem", borderRadius: "8px", marginBottom: "2rem" }}>
              <h4 style={{ color: "var(--status-crimson)", fontWeight: 800 }}>Zero Tolerance Towards Ragging</h4>
              <p style={{ fontSize: "0.88rem", color: "#7f1d1d", marginTop: "0.25rem" }}>
                Ragging in any form is strictly prohibited inside and outside the campus. Severe disciplinary and legal actions under the AP Prohibition of Ragging Act will be initiated against violators.
              </p>
            </div>

            <h4 style={{ marginBottom: "1rem", color: "var(--primary-dark)" }}>Emergency Helplines & Squads</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem", color: "#475569", marginBottom: "2rem" }}>
              <li><strong>National Anti-Ragging Toll-Free Helpline:</strong> 1800-180-5522</li>
              <li><strong>Dean, Student Welfare (DSW):</strong> +91 85602 87842 | <a href="mailto:dsw@rguktrkv.ac.in">dsw@rguktrkv.ac.in</a></li>
              <li><strong>Chief Warden (Boys):</strong> +91 85602 87848</li>
              <li><strong>Chief Warden (Girls):</strong> +91 85602 87849</li>
            </ul>

            <h4 style={{ marginBottom: "1rem", color: "var(--primary-dark)" }}>Online Grievance Submission Portal</h4>
            {submitted ? (
              <div style={{ background: "#ecfdf5", border: "1px solid #10b981", borderRadius: "8px", padding: "1.5rem", color: "#065f46" }}>
                <h5 style={{ fontWeight: 700, fontSize: "1.1rem" }}>Grievance Successfully Registered!</h5>
                <p style={{ fontSize: "0.9rem", marginTop: "0.25rem" }}>
                  Your token has been securely forwarded to the RGUKT Internal Complaints and Student Grievance Redressal Committee.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "560px" }}>
                <input type="text" placeholder="Student ID (e.g. R200001)" required style={{ padding: "0.65rem", border: "1px solid #cbd5e1", borderRadius: "6px" }} />
                <input type="email" placeholder="Official University Email" required style={{ padding: "0.65rem", border: "1px solid #cbd5e1", borderRadius: "6px" }} />
                <select required style={{ padding: "0.65rem", border: "1px solid #cbd5e1", borderRadius: "6px" }}>
                  <option value="">Select Grievance Category</option>
                  <option value="Academic">Academic & Examination</option>
                  <option value="Hostel">Hostel & Mess Sanitation</option>
                  <option value="AntiRagging">Anti-Ragging Incident</option>
                  <option value="WomenCell">Internal Complaints Committee (ICC)</option>
                  <option value="Infrastructure">ICT / Laboratory / Water</option>
                </select>
                <textarea placeholder="Describe your grievance in detail..." rows={4} required style={{ padding: "0.65rem", border: "1px solid #cbd5e1", borderRadius: "6px" }}></textarea>
                <button type="submit" className="btn btn-primary" style={{ alignSelf: "flex-start" }}>Submit Grievance to Committee</button>
              </form>
            )}
          </article>
        </div>
      </div>
    </div>
  );
}
