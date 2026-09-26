"use client";

import React from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ImagePopup from "@/components/Common/ImagePopup";

export default function DeveloperPage() {
  return (
    <div className="page-view-container">
      <Breadcrumb title="CSC Developers" category="Developers" />
      
      <div className="container" style={{ padding: "2rem 0 4rem 0", maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* Page Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "2rem", color: "var(--primary-maroon)", marginBottom: "0.75rem", fontWeight: 700 }}>
            Campus Software Cell (CSC)
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#475569", lineHeight: 1.6, maxWidth: "700px", margin: "0 auto" }}>
            This portal was designed, developed, and is maintained by the Campus Software Cell (CSC), a team of dedicated student developers and faculty mentors at RGUKT RK Valley.
          </p>
        </div>

        {/* Faculty Mentor Section */}
        <div style={{ marginBottom: "4rem" }}>
          <h3 style={{ 
            fontSize: "1.8rem", 
            color: "#1e293b", 
            marginBottom: "2rem", 
            paddingBottom: "0.75rem", 
            borderBottom: "2px solid #e2e8f0",
            fontWeight: 700
          }}>
            Faculty Mentor
          </h3>
          <div style={{ display: "grid", gap: "2rem", gridTemplateColumns: "repeat(auto-fill, minmax(450px, 1fr))" }}>
            
            {/* Mentor Card */}
            <div style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "10px",
              padding: "1.5rem",
              boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
              display: "flex",
              gap: "1.25rem",
              alignItems: "flex-start"
            }}>
              <div style={{
                width: "115px",
                height: "135px",
                borderRadius: "8px",
                border: "1px solid #cbd5e1",
                boxShadow: "0 2px 5px rgba(0,0,0,0.06)",
                flexShrink: 0,
                background: "#f1f5f9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#94a3b8"
              }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </div>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "110px" }}>
                <div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "var(--primary-maroon)", marginBottom: "0.25rem" }}>
                    Faculty Mentor
                  </div>
                  <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--primary-dark)", marginBottom: "0.3rem" }}>
                    Mr. B Lingamurthy
                  </div>
                  <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "#334155", lineHeight: 1.45 }}>
                    Software Engineer
                  </div>
                  <div style={{ fontSize: "0.84rem", color: "#64748b", marginTop: "0.3rem", lineHeight: 1.4 }}>
                    Campus Software Cell (CSC)
                  </div>
                </div>
                <div style={{ marginTop: "0.75rem", paddingTop: "0.6rem", borderTop: "1px solid #f1f5f9", fontSize: "0.9rem", display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                  <span style={{ color: "#64748b", marginRight: "0.35rem" }}>Email:</span>
                  <a href="mailto:adminrkv@rguktrkv.ac.in" style={{ color: "#0052a9", fontWeight: 700, textDecoration: "underline", wordBreak: "break-all", marginRight: "0.5rem" }}>
                    adminrkv@rguktrkv.ac.in
                  </a>
                  <span style={{ color: "#cbd5e1", marginRight: "0.5rem" }}>|</span>
                  <a href="mailto:blmurthy@rguktrkv.ac.in" style={{ color: "#0052a9", fontWeight: 700, textDecoration: "underline", wordBreak: "break-all" }}>
                    blmurthy@rguktrkv.ac.in
                  </a>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* Development Team Section */}
        <div>
          <h3 style={{ 
            fontSize: "1.8rem", 
            color: "#1e293b", 
            marginBottom: "2.5rem", 
            paddingBottom: "0.75rem", 
            borderBottom: "2px solid #e2e8f0",
            fontWeight: 700
          }}>
            Development Team
          </h3>
          
          {/* Team Lead Sub-section */}
          <div style={{ marginBottom: "3rem" }}>
            <h4 style={{ fontSize: "1.4rem", color: "#334155", marginBottom: "1.5rem", fontWeight: 600 }}>Team Lead</h4>
            <div style={{ display: "grid", gap: "2rem", gridTemplateColumns: "repeat(auto-fill, minmax(450px, 1fr))" }}>
              
              <div style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "10px",
                padding: "1.5rem",
                boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                display: "flex",
                gap: "1.25rem",
                alignItems: "flex-start"
              }}>
                <ImagePopup 
                  src="/images/vin.jpeg" 
                  alt="B. Nagesh" 
                  width={400} 
                  containerStyle={{
                    width: "125px",
                    height: "165px",
                    borderRadius: "8px",
                    border: "1px solid #cbd5e1",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.06)",
                    flexShrink: 0,
                    overflow: "hidden"
                  }} 
                />
                <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "110px" }}>
                  <div>
                    <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "var(--primary-maroon)", marginBottom: "0.25rem" }}>
                      Team Lead
                    </div>
                    <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--primary-dark)", marginBottom: "0.3rem" }}>
                      B. Nagesh
                    </div>
                    <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "#334155", lineHeight: 1.45 }}>
                      B.Tech – Artificial Intelligence & Machine Learning
                    </div>
                    <div style={{ fontSize: "0.84rem", color: "#64748b", marginTop: "0.3rem", lineHeight: 1.4 }}>
                      E1, Campus Software Cell (CSC)
                    </div>
                  </div>
                  <div style={{ marginTop: "0.75rem", paddingTop: "0.6rem", borderTop: "1px solid #f1f5f9", fontSize: "0.9rem", display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                    <span style={{ color: "#64748b", marginRight: "0.35rem" }}>Email:</span>
                    <a href="mailto:balijavinay807454@gmail.com" style={{ color: "#0052a9", fontWeight: 700, textDecoration: "underline", wordBreak: "break-all" }}>
                      balijavinay807454@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>

          {/* Team Members Sub-section */}
          <div>
            <h4 style={{ fontSize: "1.4rem", color: "#334155", marginBottom: "1.5rem", fontWeight: 600 }}>Team Members</h4>
            <div style={{ display: "grid", gap: "2rem", gridTemplateColumns: "repeat(auto-fill, minmax(450px, 1fr))" }}>
              
              {/* Team Member 1 */}
              <div style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "10px",
                padding: "1.5rem",
                boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                display: "flex",
                gap: "1.25rem",
                alignItems: "flex-start"
              }}>
                <div style={{
                  width: "115px",
                  height: "135px",
                  borderRadius: "8px",
                  border: "1px solid #cbd5e1",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.06)",
                  flexShrink: 0,
                  background: "#f1f5f9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#94a3b8"
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </div>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "110px" }}>
                  <div>
                    <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "var(--primary-maroon)", marginBottom: "0.25rem" }}>
                      Team Member
                    </div>
                    <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--primary-dark)", marginBottom: "0.3rem" }}>
                      P. Manoj
                    </div>
                    <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "#334155", lineHeight: 1.45 }}>
                      Developer
                    </div>
                    <div style={{ fontSize: "0.84rem", color: "#64748b", marginTop: "0.3rem", lineHeight: 1.4 }}>
                      Campus Software Cell (CSC)
                    </div>
                  </div>
                  <div style={{ marginTop: "0.75rem", paddingTop: "0.6rem", borderTop: "1px solid #f1f5f9", fontSize: "0.9rem" }}>
                    <span style={{ color: "#64748b", marginRight: "0.35rem" }}>Role:</span>
                    <span style={{ color: "#0052a9", fontWeight: 700 }}>Frontend Developer</span>
                  </div>
                </div>
              </div>

              {/* Team Member 2 */}
              <div style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "10px",
                padding: "1.5rem",
                boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                display: "flex",
                gap: "1.25rem",
                alignItems: "flex-start"
              }}>
                <div style={{
                  width: "115px",
                  height: "135px",
                  borderRadius: "8px",
                  border: "1px solid #cbd5e1",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.06)",
                  flexShrink: 0,
                  background: "#f1f5f9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#94a3b8"
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </div>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "110px" }}>
                  <div>
                    <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "var(--primary-maroon)", marginBottom: "0.25rem" }}>
                      Team Member
                    </div>
                    <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--primary-dark)", marginBottom: "0.3rem" }}>
                      C. Bharath
                    </div>
                    <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "#334155", lineHeight: 1.45 }}>
                      Developer
                    </div>
                    <div style={{ fontSize: "0.84rem", color: "#64748b", marginTop: "0.3rem", lineHeight: 1.4 }}>
                      Campus Software Cell (CSC)
                    </div>
                  </div>
                  <div style={{ marginTop: "0.75rem", paddingTop: "0.6rem", borderTop: "1px solid #f1f5f9", fontSize: "0.9rem" }}>
                    <span style={{ color: "#64748b", marginRight: "0.35rem" }}>Role:</span>
                    <span style={{ color: "#0052a9", fontWeight: 700 }}>Backend Developer</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
