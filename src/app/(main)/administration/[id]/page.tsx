import React from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { RGUKT_DATA } from "@/data/rguktData";

export function generateStaticParams() {
  return [
    { id: 'director' },
    { id: 'ao' },
    { id: 'fo' },
    { id: 'establishment' },
    { id: 'doa' },
    { id: 'dosw' },
    { id: 'coe' },
  ];
}

export default async function AdministrationSectionPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const leader = RGUKT_DATA.leadership.find((l) => l.id === id);

  return (
    <div className="page-view-container">
      <Breadcrumb title="University Administration & Leadership" category="Administration" />

      <div className="container">
        <div className="page-content-layout">
          <aside className="page-sidebar" aria-label="Section Navigation">
            <h4 className="sidebar-menu-title">Central Administration</h4>
            <ul className="sidebar-nav-list">
              <li><Link href="/administration/director" className={`sidebar-link ${id === 'director' ? 'active' : ''}`}>Director</Link></li>
              <li><Link href="/administration/ao" className={`sidebar-link ${id === 'ao' ? 'active' : ''}`}>Administrative Officer</Link></li>
              <li><Link href="/administration/fo" className={`sidebar-link ${id === 'fo' ? 'active' : ''}`}>Finance Officer</Link></li>
              <li><Link href="/administration/establishment" className={`sidebar-link ${id === 'establishment' ? 'active' : ''}`}>Establishment Section</Link></li>
              <li><Link href="/administration/doa" className={`sidebar-link ${id === 'doa' ? 'active' : ''}`}>Dean of Academics</Link></li>
              <li><Link href="/administration/dosw" className={`sidebar-link ${id === 'dosw' ? 'active' : ''}`}>Dean of Students Welfare</Link></li>
            </ul>
          </aside>

          <article className="page-main-body">
            {leader && id === 'coe' ? (
              <div style={{ marginBottom: "3rem", marginTop: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem", borderBottom: "1px solid #e2e8f0", paddingBottom: "0.5rem" }}>
                  <h2 style={{ color: "var(--primary-maroon)", fontSize: "1.75rem", fontWeight: 700, margin: 0 }}>
                    Examination Cell
                  </h2>
                  <a href="https://www.rguktrkv.ac.in/pdfdoc/EducationalVerification.pdf" data-pdf-title="Educational Details Verification" className="coe-verification-btn" style={{ background: "#fef3c7", border: "1px solid #d97706", borderRadius: "4px", padding: "0.5rem 1rem", color: "#d97706", fontWeight: 600, fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
                    Educational Details Verification of the Students
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  </a>
                </div>
                
                <h3 style={{ color: "#0f172a", fontSize: "1.25rem", fontWeight: 600, marginBottom: "1rem" }}>
                  Controller of Examination
                </h3>
                
                <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
                  {/* COE Card */}
                  <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start", background: "#fff", padding: "1rem", borderRadius: "12px", border: "1px solid #e2e8f0", flex: 1, minWidth: "300px" }}>
                    <div style={{ width: "120px", height: "140px", borderRadius: "8px", overflow: "hidden", border: "1px solid #e2e8f0", flexShrink: 0 }}>
                      <img src={leader.image} alt={leader.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <h4 style={{ color: "var(--primary-dark)", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.15rem" }}>{leader.name}</h4>
                      <div style={{ color: "var(--primary-dark)", fontSize: "0.9rem", fontWeight: 600, marginBottom: "0.15rem" }}>{leader.designation},</div>
                      <div style={{ color: "var(--primary-dark)", fontSize: "0.9rem", marginBottom: "0.75rem" }}>{leader.qualifications}</div>
                      
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        <a href={`mailto:${leader.extendedProfile?.contact?.email}`} style={{ color: "#1e293b", fontSize: "0.9rem", textDecoration: "none" }}>: {leader.extendedProfile?.contact?.email}</a>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        <span style={{ color: "#1e293b", fontSize: "0.9rem" }}>: {leader.extendedProfile?.contact?.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {leader.extendedProfile?.peshi && leader.extendedProfile.peshi.length > 0 && (
                  <>
                    <h3 style={{ color: "#0f172a", fontSize: "1.25rem", fontWeight: 600, marginBottom: "1rem", marginTop: "2rem", borderTop: "1px solid #e2e8f0", paddingTop: "2rem" }}>
                      Associate Controller of Examinations
                    </h3>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "1rem" }}>
                      {leader.extendedProfile.peshi.map((person, idx) => (
                        <div key={idx} style={{ background: "#fff", borderRadius: "12px", border: "1px solid #e2e8f0", padding: "1rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                          {person.image && (
                            <div style={{ flexShrink: 0, width: "100px", height: "120px", borderRadius: "8px", overflow: "hidden", border: "1px solid #e2e8f0" }}>
                              <img src={person.image} alt={person.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </div>
                          )}
                          <div style={{ display: "flex", flexDirection: "column" }}>
                            <h4 style={{ color: "var(--primary-dark)", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.15rem" }}>{person.name}</h4>
                            <div style={{ color: "var(--primary-dark)", fontSize: "0.9rem", fontWeight: 600, marginBottom: "0.15rem" }}>{person.role.split(',')[0]} ,</div>
                            {person.role.includes(',') && (
                              <div style={{ color: "var(--primary-dark)", fontSize: "0.9rem", marginBottom: "0.75rem" }}>
                                {person.role.split(',').slice(1).join(',').trim()}
                              </div>
                            )}
                            {person.email && (
                              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "0.25rem" }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                <a href={`mailto:${person.email}`} style={{ color: "#1e293b", fontSize: "0.9rem", textDecoration: "none" }}>
                                  : {person.email}
                                </a>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
                
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "1.5rem", marginTop: "3rem" }}>
                  {/* For Students Card */}
                  <div style={{ background: "#fff", borderRadius: "4px", border: "1px solid #e2e8f0", borderLeft: "4px solid var(--primary-maroon)", padding: "1.5rem", boxShadow: "0 2px 4px rgba(0,0,0,0.02)" }}>
                    <h3 style={{ color: "var(--primary-maroon)", fontSize: "1.35rem", fontWeight: 700, marginBottom: "1.25rem", borderBottom: "none" }}>For Students</h3>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                      {[
                        { title: "Fee Structure of Certificates", link: "#" },
                        { title: "Guidelines for Exams", link: "#" },
                        { title: "Exam Time Tables", link: "#" },
                        { title: "Results", link: "#" }
                      ].map((item, idx) => (
                        <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary-maroon)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: "0.2rem", flexShrink: 0 }}><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                          <a href={item.link} style={{ color: "var(--primary-dark)", textDecoration: "none", fontSize: "0.95rem", fontWeight: 600 }}>{item.title}</a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Other Useful Information Card */}
                  <div style={{ background: "#fff", borderRadius: "4px", border: "1px solid #e2e8f0", borderLeft: "4px solid var(--primary-maroon)", padding: "1.5rem", boxShadow: "0 2px 4px rgba(0,0,0,0.02)" }}>
                    <h3 style={{ color: "var(--primary-maroon)", fontSize: "1.35rem", fontWeight: 700, marginBottom: "1.25rem", borderBottom: "none" }}>Other Useful Information</h3>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                      {[
                        { title: "PUC Equivalent to Intermediate Certificate", link: "#" },
                        { title: "Conversation of CGPA into Percentage", link: "#" },
                        { title: "Invigilation Duties", link: "#" },
                        { title: "Fomat for Paper Setting", link: "#" }
                      ].map((item, idx) => (
                        <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary-maroon)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: "0.2rem", flexShrink: 0 }}><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                          <a href={item.link} style={{ color: "var(--primary-dark)", textDecoration: "none", fontSize: "0.95rem", fontWeight: 600 }}>{item.title}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : leader ? (
              <>
                <h3>Statutory Officers & Key Administration</h3>
                <div style={{ marginBottom: "3rem", marginTop: "2rem" }}>
                  <div key={leader.id} id={leader.id} style={{ background: "transparent", padding: "0" }}>

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
                        {leader.extendedProfile?.link && leader.extendedProfile.link.endsWith('.pdf') && (
                          <a href={leader.extendedProfile.link} data-pdf-title={`${leader.name} - Profile Document`} target="_blank" rel="noreferrer" style={{ color: "var(--accent-royal)", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", marginTop: "0.5rem" }}>
                            Click here to know more
                          </a>
                        )}
                        {leader.extendedProfile?.link && !leader.extendedProfile.link.endsWith('.pdf') && (
                          <a href={leader.extendedProfile.link} target="_blank" rel="noreferrer" style={{ color: "var(--accent-royal)", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", marginTop: "0.5rem" }}>
                            Click here to know more
                          </a>
                        )}
                      </div>
                      <div style={{ color: "#334155", lineHeight: 1.8, fontSize: "0.95rem", textAlign: "justify" }} dangerouslySetInnerHTML={{ __html: leader.profile }} />
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
                              <div key={idx} style={{ background: "#fff", borderRadius: "12px", border: "1px solid #e2e8f0", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)", padding: "1.25rem", display: "flex", gap: "1.25rem", alignItems: "center" }}>
                                {person.image ? (
                                  <div style={{ flexShrink: 0, width: "100px", height: "120px", borderRadius: "8px", overflow: "hidden", border: "1px solid #e2e8f0" }}>
                                    <img src={person.image} alt={person.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                  </div>
                                ) : (
                                  <div style={{ flexShrink: 0, width: "60px", height: "60px", borderRadius: "50%", background: "var(--primary-maroon)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", fontWeight: 800 }}>
                                    {person.name.charAt(0)}
                                  </div>
                                )}
                                <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                                  <h4 style={{ color: "var(--primary-dark)", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.25rem" }}>{person.name}</h4>
                                  <div style={{ color: "var(--primary-maroon)", fontSize: "0.9rem", fontWeight: 600, marginBottom: "0.25rem" }}>{person.role.split(',')[0]}</div>
                                  {person.role.includes(',') && (
                                    <div style={{ color: "#475569", fontSize: "0.85rem", marginBottom: "0.5rem" }}>
                                      {person.role.split(',').slice(1).join(',').trim()}
                                    </div>
                                  )}
                                  {person.email && (
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "0.25rem" }}>
                                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                      <a href={`mailto:${person.email}`} style={{ color: "#0f172a", fontWeight: 600, fontSize: "0.85rem", textDecoration: "none" }}>
                                        {person.email}
                                      </a>
                                    </div>
                                  )}
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
              </>
            ) : (
              <div style={{ marginBottom: "3rem", padding: "4rem", textAlign: "center", background: "#f8fafc", borderRadius: "12px", border: "1px dashed #cbd5e1", marginTop: "2rem" }}>
                <h4 style={{ color: "#64748b", fontSize: "1.2rem", fontWeight: 600 }}>Profile details will be updated soon.</h4>
                <p style={{ color: "#94a3b8", fontSize: "0.95rem", marginTop: "0.5rem" }}>The requested administrative profile is currently being compiled.</p>
              </div>
            )}
          </article>
        </div>
      </div>
    </div>
  );
}
