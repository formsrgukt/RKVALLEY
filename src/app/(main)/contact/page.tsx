"use client";

import React from "react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="page-view-container">

      <div style={{ padding: "0 2rem", width: "100%", maxWidth: "1600px", margin: "0 auto" }}>
          <article className="page-main-body" style={{ margin: "0 auto", width: "100%" }}>
            <h2 style={{ color: "var(--primary-dark)", marginBottom: "1.5rem", fontSize: "1.8rem", fontWeight: 800 }}>Contact Details</h2>
            
            <p style={{ color: "#334155", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "2rem" }}>
              For any information that you would like to get from the RGUKT (Kadapa), please reach out to the respective offices or send a letter by mail or fax to the addresses provided below.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "2.5rem" }}>
              {/* Director Details Block */}
              <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "1.5rem", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
                <h3 style={{ color: "var(--primary-maroon)", marginBottom: "1rem", fontSize: "1.2rem", fontWeight: 700, borderBottom: "2px solid #f1f5f9", paddingBottom: "0.5rem" }}>Director</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem 0", fontSize: "0.95rem", color: "#334155" }}>
                  <li style={{ marginBottom: "0.5rem" }}><strong>Name:</strong> Prof. G. Vijaya Prakash</li>
                  <li style={{ marginBottom: "0.5rem" }}><strong>Phone:</strong> 08588-283603</li>
                  <li style={{ marginBottom: "0.5rem" }}><strong>Fax:</strong> 08588-283602</li>
                  <li style={{ marginBottom: "0.5rem" }}><strong>Email:</strong> <a href="mailto:director@rguktrkv.ac.in" style={{ color: "var(--accent-royal)" }}>director@rguktrkv.ac.in</a></li>
                </ul>

                <h4 style={{ color: "var(--primary-dark)", fontSize: "1.05rem", marginBottom: "0.75rem", fontWeight: 600 }}>Director&apos;s Peshi</h4>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem 0", fontSize: "0.95rem", color: "#334155" }}>
                  <li style={{ marginBottom: "0.5rem" }}><strong>Name:</strong> Mr. SAKE RAMAKRISHNA</li>
                  <li style={{ marginBottom: "0.5rem" }}><strong>Phone:</strong> 08588-283603</li>
                  <li style={{ marginBottom: "0.5rem" }}><strong>Email:</strong> <a href="mailto:patodirector@rguktrkv.ac.in" style={{ color: "var(--accent-royal)" }}>patodirector@rguktrkv.ac.in</a></li>
                </ul>

                <h4 style={{ color: "var(--primary-dark)", fontSize: "1.05rem", marginBottom: "0.75rem", fontWeight: 600 }}>Office Address</h4>
                <p style={{ fontSize: "0.9rem", color: "#475569", lineHeight: 1.6, margin: 0 }}>
                  The Director,<br />
                  RK Valley Campus, RGUKT-AP,<br />
                  Administrative Building,<br />
                  Rajiv Knowledge Valley (Idupulapaya) Village,<br />
                  Vempalli Mandalam,<br />
                  Kadapa District,<br />
                  Andhra Pradesh - 516330
                </p>
              </div>

              {/* AO Details Block */}
              <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "1.5rem", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
                <h3 style={{ color: "var(--primary-maroon)", marginBottom: "1rem", fontSize: "1.2rem", fontWeight: 700, borderBottom: "2px solid #f1f5f9", paddingBottom: "0.5rem" }}>Administrative Officer (i/c)</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem 0", fontSize: "0.95rem", color: "#334155" }}>
                  <li style={{ marginBottom: "0.5rem" }}><strong>Name:</strong> Dr. Penugonda Ravi Kumar</li>
                  <li style={{ marginBottom: "0.5rem" }}><strong>Phone:</strong> 08588-283687</li>
                  <li style={{ marginBottom: "0.5rem" }}><strong>Email:</strong> <a href="mailto:ao@rguktrkv.ac.in" style={{ color: "var(--accent-royal)" }}>ao@rguktrkv.ac.in</a></li>
                </ul>

                <h4 style={{ color: "var(--primary-dark)", fontSize: "1.05rem", marginBottom: "0.75rem", fontWeight: 600 }}>Administrative Officer&apos;s Peshi</h4>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem 0", fontSize: "0.95rem", color: "#334155" }}>
                  <li style={{ marginBottom: "0.5rem" }}><strong>Name:</strong> Mr. V. Subbanarsaiah</li>
                  <li style={{ marginBottom: "0.5rem" }}><strong>Phone:</strong> 08588-283687</li>
                  <li style={{ marginBottom: "0.5rem" }}><strong>Email:</strong> <a href="mailto:patoao@rguktrkv.ac.in" style={{ color: "var(--accent-royal)" }}>patoao@rguktrkv.ac.in</a></li>
                </ul>

                <h4 style={{ color: "var(--primary-dark)", fontSize: "1.05rem", marginBottom: "0.75rem", fontWeight: 600 }}>Office Address</h4>
                <p style={{ fontSize: "0.9rem", color: "#475569", lineHeight: 1.6, margin: 0 }}>
                  The Administrative Officer,<br />
                  RK Valley Campus, RGUKT-AP,<br />
                  Academic Block - 2, Ground Floor,<br />
                  Rajiv Knowledge Valley (Idupulapaya) Village,<br />
                  Vempalli Mandalam,<br />
                  Kadapa District,<br />
                  Andhra Pradesh - 516330
                </p>
              </div>
            </div>

            <div style={{ marginTop: "2rem", padding: "1.5rem", background: "#f8fafc", border: "1px dashed #cbd5e1", borderRadius: "8px", textAlign: "center" }}>
              <a href="https://www.rguktrkv.ac.in/Institute.php?view=CD" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", padding: "0.75rem 1.5rem", background: "var(--primary-maroon)", color: "#fff", fontWeight: 600, borderRadius: "6px", textDecoration: "none" }}>
                View Full Communication Directory
              </a>
            </div>

          </article>
      </div>
    </div>
  );
}
