import React from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata = {
  title: "Research Head | RGUKT RK Valley",
  description: "Profile of the Research Head at RGUKT RK Valley."
};

export default function ResearchHeadPage() {
  return (
    <div className="page-view-container" style={{ background: "#f8fafc", paddingBottom: "4rem" }}>
      <Breadcrumb title="Research Head" category="Research" />

      <div className="container" style={{ width: "100%", margin: "0 auto", maxWidth: "1200px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem", marginTop: "2rem", flexWrap: "wrap", gap: "1rem" }}>
          <h1 style={{ color: "var(--primary-dark)", fontSize: "2.2rem", fontWeight: 800, margin: 0 }}>
            Head of Research Cell
          </h1>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "var(--primary-maroon)",
              color: "white",
              padding: "0.75rem 1.5rem",
              borderRadius: "8px",
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              transition: "transform 0.2s"
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            View Full PDF
          </a>
        </div>
        
        <div style={{ background: "#ffffff", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)", overflow: "hidden" }}>
          
          {/* Profile Header Area */}
          <div style={{ 
            display: "flex", 
            flexDirection: "row", 
            flexWrap: "wrap",
            padding: "3rem", 
            gap: "3rem",
            alignItems: "flex-start",
            borderBottom: "1px solid #e2e8f0"
          }}>
            {/* Header Info Section */}
            <div style={{ flex: 1, minWidth: "300px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h2 style={{ color: "var(--primary-maroon)", fontSize: "2.2rem", fontWeight: 800, margin: "0 0 0.5rem 0", lineHeight: 1.2 }}>
                Prof. G. Mohan Rao
              </h2>
              <div style={{ color: "#475569", fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.25rem" }}>
                Head, Research Cell
              </div>
              <div style={{ color: "#64748b", fontSize: "1.1rem", marginBottom: "2rem" }}>
                Rajiv Gandhi University for Knowledge Technologies (APIIIT), Nuzvid, Andhra Pradesh
              </div>
              
              {/* Quick Contact */}
              <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "2rem", marginTop: "0.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.05rem", color: "#334155" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "var(--accent-gold-light)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary-dark)" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <a href="mailto:gmrao1954@gmail.com" style={{ color: "var(--primary-maroon)", textDecoration: "none", fontWeight: 500 }}>gmrao1954@gmail.com</a>
                    <a href="mailto:researchcell@rgukt.in" style={{ color: "var(--primary-maroon)", textDecoration: "none", fontWeight: 500 }}>researchcell@rgukt.in</a>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.05rem", color: "#334155" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "var(--accent-gold-light)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary-dark)" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <span style={{ fontWeight: 600 }}>Phone:</span> 
                  <span>9980536475</span>
                </div>
              </div>
            </div>

            {/* Image Section placeholder */}
            <div style={{ flexShrink: 0, width: "160px" }}>
              <div style={{ 
                width: "100%", 
                aspectRatio: "3/4", 
                position: "relative",
                borderRadius: "12px", 
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                background: "#e2e8f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#94a3b8"
              }}>
                <Image 
                  src="/images/8k.png" 
                  alt="Prof. G. Mohan Rao" 
                  fill 
                  style={{ objectFit: "cover", objectPosition: "center top" }} 
                />
              </div>
            </div>
          </div>
  
          {/* Details Section */}
          <div style={{ padding: "3rem", fontSize: "1.05rem", color: "#334155", lineHeight: 1.8 }}>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "3rem" }}>
              <div>
                <h3 style={{ color: "var(--primary-dark)", fontSize: "1.4rem", fontWeight: 700, borderBottom: "2px solid var(--accent-gold)", paddingBottom: "0.5rem", marginBottom: "1.5rem", display: "inline-block" }}>
                  Academic Background
                </h3>
                <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: "0.75rem", paddingLeft: "1.5rem", position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, top: "8px", width: "8px", height: "8px", borderRadius: "50%", background: "var(--primary-maroon)" }}></span>
                    <strong>Ph.D. (Engineering)</strong><br />Indian Institute of Science, Bangalore
                  </li>
                  <li style={{ marginBottom: "0.75rem", paddingLeft: "1.5rem", position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, top: "8px", width: "8px", height: "8px", borderRadius: "50%", background: "var(--primary-maroon)" }}></span>
                    <strong>M.Sc. (Physics)</strong><br />S.V. University, Tirupati
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 style={{ color: "var(--primary-dark)", fontSize: "1.4rem", fontWeight: 700, borderBottom: "2px solid var(--accent-gold)", paddingBottom: "0.5rem", marginBottom: "1.5rem", display: "inline-block" }}>
                  Areas of Interest
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                  {["Instrumentation", "Materials Science", "Applied Physics"].map(area => (
                    <span key={area} style={{ background: "#f1f5f9", padding: "0.5rem 1rem", borderRadius: "20px", fontWeight: 500, color: "var(--primary-dark)", border: "1px solid #e2e8f0" }}>
                      {area}
                    </span>
                  ))}
                </div>
                <p style={{ marginTop: "1rem" }}>
                  <strong>International Interaction:</strong> Universities in Denmark, Sweden, Finland and USA.
                </p>
              </div>
            </div>

            <h3 style={{ color: "var(--primary-dark)", fontSize: "1.4rem", fontWeight: 700, borderBottom: "2px solid var(--accent-gold)", paddingBottom: "0.5rem", marginBottom: "1.5rem", display: "inline-block" }}>
              Experience & Professional Service
            </h3>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Retired Professor</strong>, Department of Instrumentation and Applied Physics, Indian Institute of Science, Bangalore (560012).
            </p>
            <ul style={{ paddingLeft: "1.5rem", marginBottom: "2rem" }}>
              <li style={{ marginBottom: "0.5rem" }}>Advisor to Society for Innovation and Development, IISc</li>
              <li style={{ marginBottom: "0.5rem" }}>President, Instrument Society of India (2018-2020) & Secretary (2008-2012)</li>
              <li style={{ marginBottom: "0.5rem" }}>Editor, Journal of Instrument Society of India</li>
              <li style={{ marginBottom: "0.5rem" }}>Member, Research Advisory Council, JSS University, Mysore</li>
              <li style={{ marginBottom: "0.5rem" }}>Member, Board of Studies for more than 10 universities</li>
              <li style={{ marginBottom: "0.5rem" }}>Thesis evaluator for more than 25 universities, IITs and NITs in India and Abroad</li>
            </ul>

            <h3 style={{ color: "var(--primary-dark)", fontSize: "1.4rem", fontWeight: 700, borderBottom: "2px solid var(--accent-gold)", paddingBottom: "0.5rem", marginBottom: "1.5rem", display: "inline-block" }}>
              Research & Publications
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
              <div style={{ background: "#f8fafc", padding: "1.5rem", borderRadius: "8px", textAlign: "center", border: "1px solid #e2e8f0" }}>
                <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--primary-maroon)" }}>323</div>
                <div style={{ fontWeight: 600, color: "#64748b" }}>Total Publications</div>
              </div>
              <div style={{ background: "#f8fafc", padding: "1.5rem", borderRadius: "8px", textAlign: "center", border: "1px solid #e2e8f0" }}>
                <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--primary-maroon)" }}>5000+</div>
                <div style={{ fontWeight: 600, color: "#64748b" }}>Citations</div>
              </div>
              <div style={{ background: "#f8fafc", padding: "1.5rem", borderRadius: "8px", textAlign: "center", border: "1px solid #e2e8f0" }}>
                <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--primary-maroon)" }}>38</div>
                <div style={{ fontWeight: 600, color: "#64748b" }}>h-index</div>
              </div>
              <div style={{ background: "#f8fafc", padding: "1.5rem", borderRadius: "8px", textAlign: "center", border: "1px solid #e2e8f0" }}>
                <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--primary-maroon)" }}>120</div>
                <div style={{ fontWeight: 600, color: "#64748b" }}>i10-index</div>
              </div>
            </div>
            
            <p style={{ marginBottom: "1rem" }}><strong>Research Projects Directed:</strong> More than 10 (Worth Rs.20 crores)</p>
            <p style={{ marginBottom: "2rem" }}><strong>Research Guidance:</strong> Ph.D: 26 | M.Sc (Engg.): 7 | M.Tech: 6</p>

            <h3 style={{ color: "var(--primary-dark)", fontSize: "1.4rem", fontWeight: 700, borderBottom: "2px solid var(--accent-gold)", paddingBottom: "0.5rem", marginBottom: "1.5rem", display: "inline-block" }}>
              Patents
            </h3>
            <ol style={{ paddingLeft: "1.5rem", marginBottom: "2rem", lineHeight: 1.6 }}>
              <li style={{ marginBottom: "0.5rem" }}>Fluorine surface modified lens making process, patent no.1837/CHE/2005</li>
              <li style={{ marginBottom: "0.5rem" }}>Fluorine surface modified intraocular lens, patent no.1838/CHE/2005A</li>
              <li style={{ marginBottom: "0.5rem" }}>High-aspect-ratio structures with hard ceramic coatings, apparatus and method of coating the structures (Patent Application No. 201641008129)</li>
              <li style={{ marginBottom: "0.5rem" }}>Novel multilayer thin film architecture for strain sensing on curved and rough surface of aero engine and parts thereof (patent application no. 2017411029311)</li>
              <li style={{ marginBottom: "0.5rem" }}>Exfoliated Graphite and method thereof (patent application no.201641047244)</li>
              <li style={{ marginBottom: "0.5rem" }}>Superparamagnetic Nanoparticle Mediated Water Remediation (IP filed)</li>
            </ol>

            <h3 style={{ color: "var(--primary-dark)", fontSize: "1.4rem", fontWeight: 700, borderBottom: "2px solid var(--accent-gold)", paddingBottom: "0.5rem", marginBottom: "1.5rem", display: "inline-block" }}>
              Technology Transferred to Industry
            </h3>
            <ul style={{ paddingLeft: "1.5rem", marginBottom: "2rem" }}>
              <li style={{ marginBottom: "0.5rem" }}>High pressure oxygen sputtering of high Tc oxide films – Vacuum Techniques, Bangalore</li>
              <li style={{ marginBottom: "0.5rem" }}>Large scale magnetron sputter cathodes for industrial applications – Hind High Vacuum Co., Bangalore</li>
              <li style={{ marginBottom: "0.5rem" }}>Plasma surface modification of PMMA for intra ocular lens applications – Aurolab, Madurai</li>
            </ul>

            <h3 style={{ color: "var(--primary-dark)", fontSize: "1.4rem", fontWeight: 700, borderBottom: "2px solid var(--accent-gold)", paddingBottom: "0.5rem", marginBottom: "1.5rem", display: "inline-block" }}>
              Awards & Recognitions
            </h3>
            <ul style={{ paddingLeft: "1.5rem", marginBottom: "2rem" }}>
              <li style={{ marginBottom: "0.5rem" }}>Indo-US Science and Technology fellowship</li>
              <li style={{ marginBottom: "0.5rem" }}>Fellow of Instruments Society of India</li>
              <li style={{ marginBottom: "0.5rem" }}>Edurite fellow</li>
            </ul>
            
            <div style={{ background: "#f8fafc", padding: "1.5rem", borderRadius: "8px", border: "1px solid #e2e8f0", marginTop: "1rem" }}>
              <strong>Detailed CV:</strong> <a href="https://sites.google.com/view/gmrao" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary-maroon)", textDecoration: "none", fontWeight: 600 }}>https://sites.google.com/view/gmrao</a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
