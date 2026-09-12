"use client";

import React from "react";

export default function OrganizationChartPage() {
  const handlePdfClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open("https://www.rguktrkv.ac.in/pdfdoc/OrganizationChart.pdf", "PDFPopup", "width=900,height=800,scrollbars=yes,resizable=yes");
  };

  const OrgBox = ({ children, style }: { children: React.ReactNode, style?: React.CSSProperties }) => {
    const [isHovered, setIsHovered] = React.useState(false);
    return (
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          background: isHovered ? "#ffffff" : "linear-gradient(to bottom, #ffffff, #f8fafc)",
          border: "1px solid #e2e8f0",
          borderTop: isHovered ? "4px solid var(--accent-gold)" : "4px solid var(--primary-maroon)",
          padding: "1rem 1.25rem",
          borderRadius: "8px",
          fontWeight: 700,
          color: isHovered ? "var(--primary-maroon)" : "var(--primary-dark)",
          textAlign: "center",
          boxShadow: isHovered ? "0 12px 25px rgba(0,0,0,0.1)" : "0 4px 10px rgba(0,0,0,0.03)",
          transform: isHovered ? "translateY(-4px)" : "translateY(0)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          width: "fit-content",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
          cursor: "default",
          ...style
        }}
      >
        {children}
      </div>
    );
  };

  const VerticalLine = () => (
    <div style={{ width: "2px", height: "25px", background: "#94a3b8", margin: "0 auto", position: "relative", zIndex: 1 }}></div>
  );

  return (
    <div className="container" style={{ padding: "1.5rem 1rem 4rem 1rem", width: "100%", margin: "0 auto" }}>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .org-tree {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .org-tree * { margin: 0; padding: 0; }
        .org-tree ul {
          padding-top: 25px; position: relative;
          display: flex;
          justify-content: center;
        }
        .org-tree li {
          float: left; text-align: center;
          list-style-type: none;
          position: relative;
          padding: 25px 10px 0 10px;
        }
        .org-tree li::before, .org-tree li::after{
          content: '';
          position: absolute; top: 0; right: 50%;
          border-top: 2px solid #94a3b8;
          width: 50%; height: 25px;
        }
        .org-tree li::after{
          right: auto; left: 50%;
          border-left: 2px solid #94a3b8;
        }
        .org-tree li:only-child::after, .org-tree li:only-child::before {
          display: none;
        }
        .org-tree li:only-child { padding-top: 0; }
        .org-tree li:first-child::before, .org-tree li:last-child::after{
          border: 0 none;
        }
        .org-tree li:last-child::before{
          border-right: 2px solid #94a3b8;
        }
        .org-tree ul ul::before{
          content: '';
          position: absolute; top: 0; left: 50%;
          border-left: 2px solid #94a3b8;
          width: 0; height: 25px;
          transform: translateX(-50%);
        }
        .org-box {
          background: linear-gradient(to bottom, #ffffff, #f8fafc);
          border: 1px solid #e2e8f0;
          border-top: 4px solid var(--primary-maroon);
          padding: 1rem 1.25rem;
          border-radius: 8px;
          font-weight: 700;
          color: var(--primary-dark);
          text-align: center;
          box-shadow: 0 4px 10px rgba(0,0,0,0.03);
          display: inline-block;
          font-size: 0.95rem;
          min-width: 150px;
          max-width: 300px;
          word-wrap: break-word;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          z-index: 2;
          cursor: default;
        }
        .org-box:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.1);
          border-top-color: var(--accent-gold);
          color: var(--primary-maroon);
          background: #ffffff;
        }
        .org-box.small {
          font-size: 0.85rem;
          padding: 0.75rem 1rem;
          min-width: 120px;
        }
      `}} />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap", gap: "1rem" }}>
        <h1 style={{ color: "var(--primary-dark)", fontSize: "2.2rem", fontWeight: 800, margin: 0 }}>
          Organizational Chart
        </h1>
        <button 
          onClick={handlePdfClick}
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
          View PDF
        </button>
      </div>

      <div style={{ 
        background: "#f8fafc", 
        padding: "3rem 1rem", 
        borderRadius: "12px", 
        boxShadow: "inset 0 2px 10px rgba(0,0,0,0.02)",
        overflowX: "auto"
      }}>
        <div className="org-tree" style={{ minWidth: "1200px" }}>
          <ul>
            <li>
              <div className="org-box">Governing Council</div>
              <ul>
                <li>
                  <div className="org-box">Academic Council</div>
                  <ul>
                    <li>
                      <div className="org-box">Chancellor</div>
                      <ul>
                        <li>
                          <div className="org-box" style={{ maxWidth: "400px" }}>Executive Committee for each campus</div>
                          <ul>
                            <li>
                              <div className="org-box">Vice-Chancellor</div>
                              <ul>
                                
                                {/* DIRECTORS BRANCH */}
                                <li>
                                  <div className="org-box" style={{ maxWidth: "400px" }}>Directors, RK Valley, Nuzvid, Ongole, Srikakulam</div>
                                  <ul>
                                    
                                    <li>
                                      <div className="org-box">Dean, Academics</div>
                                      <ul>
                                        <li>
                                          <div className="org-box small">Chairman, BoS</div>
                                        </li>
                                        <li>
                                          <div className="org-box small">Head of the Department</div>
                                          <ul>
                                            <li><div className="org-box small">Faculty</div></li>
                                          </ul>
                                        </li>
                                        <li>
                                          <div className="org-box small">Controller of Examinations</div>
                                        </li>
                                      </ul>
                                    </li>

                                    <li>
                                      <div className="org-box">Administrative Officer</div>
                                      <ul>
                                        <li>
                                          <div className="org-box small">Finance Officer</div>
                                          <ul>
                                            <li><div className="org-box small">Office Staff</div></li>
                                          </ul>
                                        </li>
                                      </ul>
                                    </li>

                                    <li>
                                      <div className="org-box">Dean, Student Welfare</div>
                                    </li>

                                  </ul>
                                </li>

                                {/* REGISTRAR BRANCH */}
                                <li>
                                  <div className="org-box">Registrar</div>
                                  <ul>
                                    <li>
                                      <div className="org-box small">Chief Administrative Officer</div>
                                      <ul>
                                        <li><div className="org-box small">Office Staff</div></li>
                                      </ul>
                                    </li>
                                  </ul>
                                </li>

                                {/* FINANCE OFFICER BRANCH */}
                                <li>
                                  <div className="org-box">Finance Officer (Head Office)</div>
                                  <ul>
                                    <li><div className="org-box small">Office Staff</div></li>
                                  </ul>
                                </li>

                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
