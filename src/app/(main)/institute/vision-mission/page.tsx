"use client";

import React from "react";
import Link from "next/link";

export default function VisionAndMissionPage() {
  return (
    <div className="container" style={{ padding: "4rem 1rem", width: "100%", margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
        <h1 style={{ color: "var(--primary-dark)", fontSize: "2.2rem", fontWeight: 800, margin: 0 }}>
          Vision and Mission
        </h1>
        <a 
          href="https://www.rguktrkv.ac.in/pdfdoc/VISIONANDMISSION.pdf"
          data-pdf-title="Vision and Mission"
          className="btn"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.6rem 1.25rem",
            background: "var(--primary-maroon)",
            color: "#ffffff",
            border: "none",
            borderRadius: "6px",
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "0 4px 6px -1px rgba(122, 0, 25, 0.2)",
            transition: "all 0.2s ease"
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          <span>View Official Document</span>
        </a>
      </div>

      <div style={{ background: "#ffffff", padding: "3rem", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)", lineHeight: 1.75, color: "#334155", fontSize: "1.05rem" }}>
        
        <h2 style={{ color: "var(--primary-maroon)", fontSize: "1.45rem", marginBottom: "0.75rem", fontWeight: 700 }}>Vision</h2>
        <p style={{ marginBottom: "2rem" }}>
          To transform rural youth into global leaders and innovators in science, technology and Multidisciplinary areas and contribute to the maximisation of welfare of humanity.
        </p>

        <h2 style={{ color: "var(--primary-maroon)", fontSize: "1.45rem", marginBottom: "0.75rem", fontWeight: 700 }}>Mission</h2>
        <p style={{ marginBottom: "1.5rem" }}>
          The main objective of the University is to provide quality technical education with the goal of inclusiveness in terms of access to the meritorious rural youth, who are perennially deprived of the opportunities; through an innovative blend of modern computer assisted, learner-centric instructional methodology along with rigorous traditional teaching in a world class ambience.
        </p>
        
        <ol style={{ paddingLeft: "1.5rem", marginBottom: "2.5rem", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
          <li>The mission of the university is envisioned through the commitment of: Imparting each student broad skills such as Learning to Learn, learning to think and Learning to Live.</li>
          <li>Reinforcing core values of integrity, respect for all, and care for environment.</li>
          <li>Reinforcing dissemination of advanced knowledge in the emerging fields such as Information Technology, etc.</li>
          <li>Making special provisions for integrated courses including humanities, social sciences and other interdisciplinary areas to impart broad-based education including soft skills.</li>
          <li>Functioning as a resource centre for knowledge management and entrepreneurship development in the emerging technologies.</li>
          <li>Establishing close linkages with industry to make teaching and research at the institute relevant to the needs of the economy, at regional and national levels.</li>
          <li>Equalizing opportunity for those that do not get quality education.</li>
        </ol>

        <h2 style={{ color: "var(--primary-maroon)", fontSize: "1.45rem", marginBottom: "0.75rem", fontWeight: 700 }}>Objectives of the University</h2>
        <p style={{ marginBottom: "1.5rem" }}>
          The following are the objectives of the University, as enshrined in the legislation:
        </p>
        <ol style={{ paddingLeft: "1.5rem", marginBottom: "2.5rem", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
          <li>To disseminate and advance knowledge in the fields of Information Technology, Nano-Technology, Solar Energy Technology, Biotechnology and other emerging Technologies;</li>
          <li>To create institutes and /or centres of excellence for imparting state of the art education, training and research in the fields of Information technology, Nano Technology, solar energy Technology, Biotechnology and other emerging areas;</li>
          <li>To develop innovative patterns of teaching, training, curriculum design and methods of testing at various levels of educational accomplishment to attain global education standards;</li>
          <li>To make special provisions for integrated courses in humanities, social sciences and interdisciplinary areas, so as to promote use of technologies for larger benefit of mankind, particularly people living in developing countries;</li>
          <li>To function as a resource centres for knowledge management and entrepreneurship development in the fields of Information Technology, Nano Technology, Solar Energy Technology, Biotechnology and other emerging areas;</li>
          <li>To provide for inter-relationships for national and global participation in the fields of Information Technology, Nano Technology, Solar Energy Technology, Biotechnology and other emerging areas and its allied fields; and</li>
          <li>To establish close linkage with industry to make teaching and research at the institute relevant to the needs of the economy at national and global level.</li>
        </ol>

        <h2 style={{ color: "var(--primary-maroon)", fontSize: "1.45rem", marginBottom: "0.75rem", fontWeight: 700 }}>Quality Policy</h2>
        <p style={{ marginBottom: "2.5rem" }}>
          To impart world class engineering education to the students of the University through highly focused teaching – learning methodology optimising resources.
        </p>

        <h2 style={{ color: "var(--primary-maroon)", fontSize: "1.45rem", marginBottom: "0.75rem", fontWeight: 700 }}>Core Values of the University</h2>
        <ol style={{ paddingLeft: "1.5rem", marginBottom: "1rem", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
          <li>National pride and global outlook</li>
          <li>Integrity, transparency, and trustworthiness</li>
          <li>Continuous learning and knowledge creation</li>
          <li>Professional morality, scientific ethics and academic freedom</li>
          <li>Quality consciousness and environmental sustainability</li>
        </ol>

      </div>
    </div>
  );
}
