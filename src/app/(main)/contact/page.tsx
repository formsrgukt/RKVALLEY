"use client";

import React from "react";
import Link from "next/link";
import ImagePopup from "@/components/Common/ImagePopup";

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

            {/* Contacts of Career Development and Placement Cell Office */}
            <div style={{ marginTop: "2.5rem", marginBottom: "2.5rem" }}>
              <div style={{ borderBottom: "2px solid #e2e8f0", paddingBottom: "0.6rem", marginBottom: "1.5rem" }}>
                <h3 style={{ color: "var(--primary-maroon)", fontSize: "1.35rem", fontWeight: 800, marginBottom: "0.3rem" }}>
                  Contacts of Career Development and Placement Cell Office
                </h3>
                <p style={{ fontSize: "0.9rem", color: "#64748b", margin: 0 }}>
                  Career Development &amp; Placement Cell (CDPC), MME Department Building, RGUKT RK Valley
                </p>
              </div>

              <style>{`
                @media (max-width: 640px) {
                  .cdpc-contacts-2x2-grid {
                    grid-template-columns: 1fr !important;
                  }
                }
              `}</style>

              <div
                className="cdpc-contacts-2x2-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                  gap: "1.5rem",
                }}
              >
                {/* 1. Mr. Satyanandaram N */}
                <div
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                    padding: "1.25rem 1.35rem",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                    display: "flex",
                    gap: "1.25rem",
                    alignItems: "flex-start",
                  }}
                >
                  <ImagePopup
                    src="/images/placementcoordinators/2082209.jpg"
                    alt="Mr. Satyanandaram N"
                    width={400}
                    containerStyle={{
                      width: "90px",
                      height: "110px",
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
                        Faculty Coordinator
                      </div>
                      <h4 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--primary-dark)", margin: "0 0 0.35rem 0" }}>
                        Mr. Satyanandaram N
                      </h4>

                      <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "0.92rem", color: "#334155" }}>
                        <li style={{ marginBottom: "0.35rem" }}>
                          <strong>Role:</strong> Faculty Coordinator, CDPC
                        </li>
                        <li style={{ marginBottom: "0.35rem", color: "#475569" }}>
                          <strong>Designation:</strong> Lecturer, Dept. of CSE
                        </li>
                      </ul>
                    </div>

                    <div style={{ marginTop: "0.75rem", paddingTop: "0.6rem", borderTop: "1px solid #f1f5f9", fontSize: "0.92rem" }}>
                      <strong style={{ color: "#334155" }}>Email:</strong>{" "}
                      <a href="mailto:cpi@rguktrkv.ac.in" style={{ color: "var(--accent-royal)", fontWeight: 700, textDecoration: "none" }}>
                        cpi@rguktrkv.ac.in
                      </a>
                    </div>
                  </div>
                </div>

                {/* 2. Mr. G S Sundar */}
                <div
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                    padding: "1.25rem 1.35rem",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                    display: "flex",
                    gap: "1.25rem",
                    alignItems: "flex-start",
                  }}
                >
                  <ImagePopup
                    src="/images/placementcoordinators/2137601.jpg"
                    alt="Mr. G S Sundar"
                    width={400}
                    containerStyle={{
                      width: "90px",
                      height: "110px",
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
                        Placement Officer
                      </div>
                      <h4 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--primary-dark)", margin: "0 0 0.35rem 0" }}>
                        Mr. G S Sundar
                      </h4>

                      <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "0.92rem", color: "#334155" }}>
                        <li style={{ marginBottom: "0.35rem" }}>
                          <strong>Role:</strong> Placement Officer
                        </li>
                        <li style={{ marginBottom: "0.35rem", color: "#475569" }}>
                          <strong>Cell:</strong> Career Development &amp; Placement Cell
                        </li>
                      </ul>
                    </div>

                    <div style={{ marginTop: "0.75rem", paddingTop: "0.6rem", borderTop: "1px solid #f1f5f9", fontSize: "0.92rem" }}>
                      <strong style={{ color: "#334155" }}>Email:</strong>{" "}
                      <a href="mailto:po@rguktrkv.ac.in" style={{ color: "var(--accent-royal)", fontWeight: 700, textDecoration: "none" }}>
                        po@rguktrkv.ac.in
                      </a>
                    </div>
                  </div>
                </div>

                {/* 3. Mr. G. Ravibabu */}
                <div
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                    padding: "1.25rem 1.35rem",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                    display: "flex",
                    gap: "1.25rem",
                    alignItems: "flex-start",
                  }}
                >
                  <ImagePopup
                    src="/images/placementcoordinators/2098012.jpg"
                    alt="Mr. G. Ravibabu"
                    width={400}
                    containerStyle={{
                      width: "90px",
                      height: "110px",
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
                        Assistant Coordinator
                      </div>
                      <h4 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--primary-dark)", margin: "0 0 0.35rem 0" }}>
                        Mr. G. Ravibabu
                      </h4>

                      <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "0.92rem", color: "#334155" }}>
                        <li style={{ marginBottom: "0.35rem" }}>
                          <strong>Role:</strong> Assistant Coordinator
                        </li>
                        <li style={{ marginBottom: "0.35rem", color: "#475569" }}>
                          <strong>Designation:</strong> Mentor in IT
                        </li>
                      </ul>
                    </div>

                    <div style={{ marginTop: "0.75rem", paddingTop: "0.6rem", borderTop: "1px solid #f1f5f9", fontSize: "0.92rem" }}>
                      <strong style={{ color: "#334155" }}>Email:</strong>{" "}
                      <a href="mailto:cpc@rguktrkv.ac.in" style={{ color: "var(--accent-royal)", fontWeight: 700, textDecoration: "none" }}>
                        cpc@rguktrkv.ac.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CDPC Contact Address & Directions to Reach Us */}
            <div style={{ marginTop: "2rem", marginBottom: "2.5rem" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                {/* Contact Address */}
                <div
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                    padding: "1.5rem",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                  }}
                >
                  <h4
                    style={{
                      color: "var(--primary-maroon)",
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      marginBottom: "0.85rem",
                      borderBottom: "2px solid #f1f5f9",
                      paddingBottom: "0.5rem",
                    }}
                  >
                    Contact Address
                  </h4>
                  <p style={{ fontSize: "0.95rem", color: "#334155", lineHeight: 1.75, margin: 0 }}>
                    <strong style={{ color: "var(--primary-dark)" }}>Career Development &amp; Placement Cell (CDPC),</strong><br />
                    MME Department Building,<br />
                    RGUKT, RK Valley Campus (Idupulapaya),<br />
                    Vempalli(M), Kadapa (Dist),<br />
                    Andhra Pradesh - 516329
                  </p>
                </div>

                {/* Directions to Reach Us */}
                <div
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                    padding: "1.5rem",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                  }}
                >
                  <h4
                    style={{
                      color: "var(--primary-maroon)",
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      marginBottom: "0.85rem",
                      borderBottom: "2px solid #f1f5f9",
                      paddingBottom: "0.5rem",
                    }}
                  >
                    <a
                      href="https://www.rguktrkv.ac.in/tnp-reachus.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "var(--primary-maroon)", textDecoration: "none" }}
                    >
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem" }}>
                        Directions to Reach Us 
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </span>
                    </a>
                  </h4>

                  <div style={{ fontSize: "0.9rem", color: "#334155", lineHeight: 1.65 }}>
                    <div style={{ marginBottom: "0.75rem" }}>
                      <strong style={{ color: "var(--primary-dark)" }}>From Hyderabad &amp; Chennai:</strong>
                      <ul style={{ margin: "0.35rem 0 0.5rem 1.25rem", padding: 0 }}>
                        <li>There are Flights and Trains available every day from Hyderabad and Chennai to Kadapa.</li>
                        <li>Transportation will be facilitated for pickup and drop at Kadapa.</li>
                      </ul>
                    </div>

                    <div style={{ marginBottom: "0.75rem" }}>
                      <strong style={{ color: "var(--primary-dark)" }}>From Bangalore:</strong> Can reach our campus/Kadapa through Roadways with approximate distance of 250 KM from Bangalore to RGUKT, R.K.Valley Campus.
                    </div>

                    <div style={{ marginBottom: "0.75rem" }}>
                      <strong style={{ color: "var(--primary-dark)" }}>From the other Metro Cities:</strong> Can reach the nearest airports like Bangalore or Tirupati; transportation will be facilitated for pickup and drop.
                    </div>

                    <div
                      style={{
                        background: "#f8fafc",
                        padding: "0.75rem 1rem",
                        borderRadius: "6px",
                        borderLeft: "3px solid var(--primary-maroon)",
                        marginTop: "0.85rem",
                        fontSize: "0.86rem",
                        color: "#475569",
                        lineHeight: 1.5,
                      }}
                    >
                      <strong>Note:</strong> RGUKT, R.K.Valley is 170 KM far from Tirupati Airport and 220 KM far from Bangalore Airport.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div style={{ marginTop: "3rem", marginBottom: "3rem" }}>
              <div style={{ borderBottom: "2px solid #e2e8f0", paddingBottom: "0.6rem", marginBottom: "1.5rem" }}>
                <h3 style={{ color: "var(--primary-maroon)", fontSize: "1.35rem", fontWeight: 800, marginBottom: "0.3rem" }}>
                  Frequently Asked Questions
                </h3>
                <p style={{ fontSize: "0.9rem", color: "#64748b", margin: 0 }}>
                  Common queries regarding reaching out to the campus
                </p>
              </div>

              <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "1.5rem", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
                {[
                  {
                    question: "What are the working hours of the administrative office?",
                    answer: "The administrative office is open from Monday to Saturday, 9:00 AM to 5:00 PM. It remains closed on Sundays and public holidays."
                  },
                  {
                    question: "How can I get directions to the RK Valley Campus?",
                    answer: "The campus is located in Rajiv Knowledge Valley (Idupulapaya) Village, Vempalli Mandal, Kadapa District. We provide transportation from Kadapa for visitors. You can find detailed directions under the 'Directions to Reach Us' section above."
                  },
                  {
                    question: "Who should I contact for admissions-related queries?",
                    answer: "For admissions, please reach out to the Admissions Cell through the respective contact numbers provided during the admission cycle, or email the Director's office directly."
                  },
                  {
                    question: "Where can I find the full communication directory of all faculty?",
                    answer: "You can click on the 'View Full Communication Directory' button at the bottom of this page to access the complete contact list of all staff and faculty."
                  }
                ].map((faq, idx) => {
                  return (
                    <FAQItem key={idx} question={faq.question} answer={faq.answer} isLast={idx === 3} />
                  );
                })}
              </div>
            </div>

            <div style={{ marginTop: "2rem", padding: "1.5rem", background: "#f8fafc", border: "1px dashed #cbd5e1", borderRadius: "8px", textAlign: "center" }}>
              <a href="https://www.rguktrkv.ac.in/Institute.php?view=CD" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", padding: "0.75rem 1.5rem", background: "var(--primary-maroon)", color: "#fff", fontWeight: 600, borderRadius: "6px", textDecoration: "none", transition: "background 0.2s" }} onMouseOver={(e) => e.currentTarget.style.background = "var(--primary-dark)"} onMouseOut={(e) => e.currentTarget.style.background = "var(--primary-maroon)"}>
                View Full Communication Directory
              </a>
            </div>

          </article>
      </div>
    </div>
  );
}

const FAQItem = ({ question, answer, isLast }: { question: string; answer: string; isLast: boolean }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div style={{ borderBottom: isLast ? "none" : "1px solid #e2e8f0", padding: isLast ? "1rem 0 0" : "1rem 0" }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "none",
          border: "none",
          padding: "0.5rem 0",
          cursor: "pointer",
          fontSize: "1.02rem",
          fontWeight: 600,
          color: isOpen ? "var(--primary-maroon)" : "var(--primary-dark)",
          textAlign: "left",
          transition: "color 0.2s ease"
        }}
      >
        <span>{question}</span>
        <div style={{ 
          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", 
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          color: isOpen ? "var(--primary-maroon)" : "#94a3b8",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "24px",
          height: "24px",
          borderRadius: "50%",
          background: isOpen ? "rgba(122,0,25,0.05)" : "transparent"
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </button>
      <div
        style={{
          maxHeight: isOpen ? "200px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p style={{ margin: 0, padding: "1rem 0 0.5rem", color: "#475569", fontSize: "0.95rem", lineHeight: 1.6 }}>
          {answer}
        </p>
      </div>
    </div>
  );
};
