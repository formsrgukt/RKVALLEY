import React from "react";
import { notFound } from "next/navigation";
import { RGUKT_DATA } from "@/data/rguktData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";

export function generateStaticParams() {
  return RGUKT_DATA.leadership.map((l) => ({
    id: l.id,
  }));
}

export default async function LeadershipProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const leader = RGUKT_DATA.leadership.find((l) => l.id === resolvedParams.id);

  if (!leader) {
    notFound();
  }

  return (
    <div className="page-view-container">
      <Breadcrumb title={`${leader.name} - ${leader.title}`} category="University Leadership" />

      <div style={{ padding: "3rem 4rem" }}>
        <div style={{ background: "transparent", padding: "0" }}>
          
          {/* Header Section */}
          <div style={{ marginBottom: "2rem" }}>
            <h2 style={{ color: "var(--primary-dark)", marginBottom: "0.1rem", fontSize: "2rem", fontWeight: 800, letterSpacing: "-0.5px" }}>
              {leader.name}
            </h2>
            <p style={{ color: "#64748b", fontSize: "0.95rem", fontWeight: 600, marginBottom: "1rem" }}>
              {leader.qualifications}
            </p>
            
            <div style={{ display: "inline-block", background: "#f8fafc", padding: "0.5rem 1rem", borderRadius: "8px", borderLeft: "4px solid var(--primary-maroon)" }}>
              <div style={{ color: "var(--primary-maroon)", fontSize: "0.95rem", fontWeight: 700, marginBottom: "0.15rem", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                {leader.title}
              </div>
              <div style={{ color: "#475569", fontSize: "0.85rem" }}>
                {leader.message.split(".")[0] + "."}
              </div>
            </div>
            
            <hr style={{ border: "none", borderTop: "1px solid #e2e8f0", marginTop: "2rem" }} />
          </div>

          {/* About Section */}
          <div style={{ marginBottom: "3rem", position: "relative" }}>
            <h3 style={{ color: "var(--accent-royal)", marginBottom: "1rem", fontSize: "1.4rem", fontWeight: 700 }}>
              About {leader.title}
            </h3>
            
            <div style={{ display: "block" }}>
              <div style={{ float: "right", marginLeft: "2rem", marginBottom: "1rem", width: "250px", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                <img
                  src={leader.image}
                  alt={leader.name}
                  style={{ width: "100%", height: "auto", borderRadius: "12px", objectFit: "cover", boxShadow: "0 4px 15px rgba(0,0,0,0.1)", marginBottom: "1rem" }}
                />
                {leader.extendedProfile?.link && (
                  <a href={leader.extendedProfile.link} target="_blank" rel="noreferrer" style={{ color: "var(--accent-royal)", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none" }}>
                    Click here to know more
                  </a>
                )}
              </div>
              <p style={{ color: "#334155", lineHeight: 1.8, fontSize: "0.95rem", textAlign: "justify" }}>
                {leader.profile}
              </p>
            </div>
            <div style={{ clear: "both" }}></div>
          </div>

          {leader.extendedProfile && (
            <>
              {/* Contact Details */}
              {leader.extendedProfile.contact && (
                <div style={{ marginBottom: "3rem" }}>
                  <h3 style={{ color: "var(--primary-dark)", marginBottom: "1.5rem", fontSize: "1.5rem", fontWeight: 700 }}>
                    Contact Details
                  </h3>
                  <div style={{ maxWidth: "500px", background: "#fff", borderRadius: "12px", border: "1px solid #e2e8f0", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)", overflow: "hidden" }}>
                    {leader.extendedProfile.contact.phone && (
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.25rem 1.5rem", borderBottom: "1px solid #f1f5f9" }}>
                        <div style={{ color: "#64748b", fontWeight: 600, fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "0.5px" }}>Phone</div>
                        <div style={{ color: "#0f172a", fontWeight: 700, fontSize: "1.05rem" }}>{leader.extendedProfile.contact.phone}</div>
                      </div>
                    )}
                    {leader.extendedProfile.contact.fax && (
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.25rem 1.5rem", borderBottom: "1px solid #f1f5f9" }}>
                        <div style={{ color: "#64748b", fontWeight: 600, fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "0.5px" }}>Fax</div>
                        <div style={{ color: "#0f172a", fontWeight: 700, fontSize: "1.05rem" }}>{leader.extendedProfile.contact.fax}</div>
                      </div>
                    )}
                    {leader.extendedProfile.contact.email && (
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.25rem 1.5rem" }}>
                        <div style={{ color: "#64748b", fontWeight: 600, fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "0.5px" }}>Email</div>
                        <div style={{ color: "var(--primary-maroon)", fontWeight: 700, fontSize: "1.05rem" }}>
                          <a href={`mailto:${leader.extendedProfile.contact.email}`} style={{ textDecoration: "none", color: "inherit" }}>
                            {leader.extendedProfile.contact.email}
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Director's Peshi */}
              {leader.extendedProfile.peshi && leader.extendedProfile.peshi.length > 0 && (
                <div style={{ marginBottom: "3rem" }}>
                  <h3 style={{ color: "var(--primary-dark)", marginBottom: "1.5rem", fontSize: "1.5rem", fontWeight: 700 }}>
                    {leader.title}&apos;s Peshi
                  </h3>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
                    {leader.extendedProfile.peshi.map((person, idx) => (
                      <div key={idx} style={{ background: "#fff", borderRadius: "12px", border: "1px solid #e2e8f0", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)", padding: "1.5rem", display: "flex", flexDirection: "column" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                          <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "var(--primary-maroon)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", fontWeight: 800 }}>
                            {person.name.charAt(4)} {/* Assuming 'Mr. ' -> 4th index */}
                          </div>
                          <div>
                            <h4 style={{ color: "#0f172a", fontWeight: 800, fontSize: "1.15rem", marginBottom: "0.1rem" }}>{person.name}</h4>
                            <span style={{ color: "var(--accent-royal)", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px" }}>Peshi Member</span>
                          </div>
                        </div>
                        <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.25rem", flex: 1 }}>
                          {person.role}
                        </p>
                        <div style={{ paddingTop: "1rem", borderTop: "1px solid #f1f5f9", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                          <a href={`mailto:${person.email}`} style={{ color: "#0f172a", fontWeight: 600, fontSize: "0.95rem", textDecoration: "none" }}>
                            {person.email}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Address */}
              {leader.extendedProfile.address && (
                <div style={{ marginBottom: "3rem" }}>
                  <h3 style={{ color: "var(--primary-dark)", marginBottom: "1.5rem", fontSize: "1.5rem", fontWeight: 700 }}>
                    Address
                  </h3>
                  <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "1.5rem", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)", display: "flex", gap: "1.25rem", alignItems: "flex-start", maxWidth: "500px" }}>
                    <div style={{ color: "var(--primary-maroon)", marginTop: "0.25rem" }}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div style={{ color: "#334155", fontSize: "1.05rem", lineHeight: 1.8, whiteSpace: "pre-line" }}>
                      {leader.extendedProfile.address}
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

        </div>
      </div>
    </div>
  );
}
