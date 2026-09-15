import React from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata = {
  title: "Research & Innovation | RGUKT RK Valley",
  description: "Explore sponsored research projects, patents, Student Incubation & Innovation Hub at RGUKT RK Valley."
};

export default function ResearchPage() {
  return (
    <div className="page-view-container">
      <Breadcrumb title="Research, Innovation & Incubation" category="Research" />

      <div className="container">
        <div className="page-content-layout">


          <article className="page-main-body">
            <h3>Fostering Indigenous Innovation</h3>
            <p style={{ fontSize: "1rem", color: "#334155", marginBottom: "1.5rem" }}>
              RGUKT RK Valley promotes translational research addressing rural societal challenges, renewable energy grids, smart agriculture sensors, artificial intelligence, and materials engineering.
            </p>

            <img
              src="/images/computing_lab.jpg"
              alt="Computing Laboratory"
              style={{ borderRadius: "12px", marginBottom: "2rem", width: "100%", maxHeight: "400px", objectFit: "cover" }}
            />

            <h4 style={{ marginBottom: "0.75rem", color: "var(--primary-dark)" }}>Major Funded Projects & Grants</h4>
            <p style={{ color: "#475569", marginBottom: "1.5rem" }}>
              Faculty and research scholars have secured competitive grants from the Department of Science & Technology (DST), Science and Engineering Research Board (SERB), AP Pollution Control Board, and AICTE.
            </p>

            <div style={{ background: "#f8fafc", borderTop: "1px solid #e2e8f0", borderRight: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0", borderLeft: "4px solid var(--accent-gold)", borderRadius: "10px", padding: "1.25rem" }}>
              <h5 style={{ color: "var(--primary-dark)", fontWeight: 700, fontSize: "1.05rem" }}>Student Incubation & Innovation Hub (SIIH)</h5>
              <p style={{ fontSize: "0.88rem", color: "#64748b", marginTop: "0.35rem" }}>
                Providing seed funding, mentoring, and patent filing assistance for promising student technology startups and intellectual property creations.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
