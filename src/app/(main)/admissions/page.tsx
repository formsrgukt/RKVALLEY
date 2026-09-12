"use client";

import React from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ExploreSidebar from "@/components/Common/ExploreSidebar";
import { RGUKT_DATA } from "@/data/rguktData";
import { useApp } from "@/context/AppContext";

export default function AdmissionsPage() {
  const { openDocModal } = useApp();

  return (
    <div className="page-view-container">
      <Breadcrumb title="Admissions Portal 2026-27" category="Admissions" />

      <div className="container">
        <div className="page-content-layout">
          <ExploreSidebar activeSection="admissions" />

          <article className="page-main-body">
            <div style={{ background: "linear-gradient(135deg, #680015 0%, #4a000f 100%)", color: "#fff", padding: "2rem", borderRadius: "12px", marginBottom: "2rem" }}>
              <span className="badge-urgent" style={{ marginBottom: "0.5rem", display: "inline-block" }}>Admissions Open 2026</span>
              <h3 style={{ color: "#fff", fontSize: "1.75rem", marginBottom: "0.5rem" }}>
                6-Year Integrated B.Tech Admissions (2026-27)
              </h3>
              <p style={{ color: "#cbd5e1", fontSize: "0.95rem", marginBottom: "1.25rem" }}>
                Inviting applications from meritorious students who passed SSC (10th Standard) in AP and Telangana.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <button
                  type="button"
                  className="btn btn-gold"
                  onClick={() => openDocModal("Detailed Admission Notification 2026", "RGUKT_Admissions_Detailed_Notification_2026.pdf")}
                >
                  Download Detailed Notification (PDF)
                </button>
                <button
                  type="button"
                  className="btn btn-outline-white"
                  onClick={() => openDocModal("Online Application Manual", "RGUKT_Online_Application_Instructions_2026.pdf")}
                >
                  Application Manual
                </button>
              </div>
            </div>

            <h4 style={{ marginBottom: "1rem", color: "var(--primary-dark)" }}>Eligibility & Selection Criteria</h4>
            <ul style={{ paddingLeft: "1.5rem", color: "#475569", display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "2rem" }}>
              <li><strong>Educational Qualification:</strong> Regular candidates who passed SSC or its equivalent examination conducted in 2026 in first attempt.</li>
              <li><strong>Deprivation Points:</strong> A deprivation score of <strong>0.4 marks</strong> is added to the 10th GPA of candidates who studied in Non-Residential Government Schools (Zilla Parishad / Municipal / Govt schools) as per AP Act 18 of 2008.</li>
              <li><strong>Age Limit:</strong> Candidates should not have completed 18 years of age (21 years in case of SC/ST candidates) as of 31st December 2026.</li>
              <li><strong>Reservations:</strong> Statutory reservations for SC, ST, BC, EWS, Physically Handicapped (PH), CAP, NCC, and Sports quotas apply strictly according to AP State Government norms.</li>
            </ul>

            <h4 style={{ marginBottom: "1rem", color: "var(--primary-dark)" }}>Frequently Asked Questions (FAQ)</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {RGUKT_DATA.admissionFAQ.map((faq, i) => (
                <div key={i} style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "1.25rem" }}>
                  <h5 style={{ color: "var(--primary-dark)", fontWeight: 700, marginBottom: "0.35rem" }}>Q: {faq.q}</h5>
                  <p style={{ fontSize: "0.88rem", color: "#475569" }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
