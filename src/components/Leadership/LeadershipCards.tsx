"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { RGUKT_DATA, LeadershipMember } from "@/data/rguktData";

export default function LeadershipCards() {
  const { openDocModal } = useApp();

  return (
    <section className="section-padding leadership-section" aria-label="University Leadership">
      <div className="container">
        <div className="section-header-centered">
          <span className="section-tag">Governance & Vision</span>
          <h3 className="section-title">University Leadership</h3>
          <p className="section-subtitle">
            Distinguished academic visionaries steering RGUKT RK Valley towards global technological excellence.
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          {RGUKT_DATA.leadership.map((l: LeadershipMember) => (
            <div key={l.id} style={{
              display: "flex",
              flexDirection: "row",
              background: "var(--surface-card)",
              borderRadius: "var(--radius-xl)",
              border: "1px solid var(--border-subtle)",
              overflow: "hidden",
              boxShadow: "var(--shadow-sm)",
              maxWidth: "900px",
              width: "100%",
              margin: "0 auto",
              transition: "all var(--transition-normal)",
              alignItems: "stretch"
            }}>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "3rem" }}>
                <h4 style={{ fontSize: "1.8rem", color: "var(--primary-dark)", fontWeight: 800, marginBottom: "0.5rem" }}>{l.name}</h4>
                <span style={{ fontSize: "0.95rem", color: "#64748b", marginBottom: "1.5rem", display: "block", fontWeight: 500 }}>{l.qualifications}</span>
                <p style={{ fontSize: "1.05rem", color: "#475569", lineHeight: 1.8, fontStyle: "italic", marginBottom: "2rem" }}>&ldquo;{l.message}&rdquo;</p>
                <Link
                  href={`/leadership/${l.id}`}
                  style={{ 
                    alignSelf: "flex-start", 
                    color: "var(--primary-maroon)", 
                    fontWeight: 700, 
                    fontSize: "0.95rem", 
                    textDecoration: "none",
                    borderBottom: "2px solid transparent",
                    transition: "all 0.2s"
                  }}
                  onMouseOver={(e) => e.currentTarget.style.borderBottom = "2px solid var(--primary-maroon)"}
                  onMouseOut={(e) => e.currentTarget.style.borderBottom = "2px solid transparent"}
                >
                  View Profile & Message →
                </Link>
              </div>
              <div style={{ width: "350px", position: "relative", flexShrink: 0 }}>
                <img src={l.image} alt={l.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
                <span style={{ 
                  position: "absolute", 
                  bottom: "1.5rem", 
                  right: "1.5rem",
                  background: "var(--primary-maroon)",
                  color: "#fff",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  padding: "0.4rem 0.8rem",
                  borderRadius: "4px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                }}>
                  {l.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
