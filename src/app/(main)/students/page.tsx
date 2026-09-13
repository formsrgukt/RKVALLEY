import React from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata = {
  title: "Student Affairs & Services | RGUKT RK Valley",
  description: "Comprehensive student services including Education at RGUKT, Career Development Cell, Incubation Cell, International Desk, Student Welfare, and Alumni Association."
};

export default function StudentsPage() {
  return (
    <div className="page-view-container">
      <Breadcrumb title="Student Affairs & Campus Services" category="Students" />

      <div className="container">
        <div className="page-content-layout">
          {/* Section Navigation Sidebar */}
          <aside className="page-sidebar" aria-label="Section Navigation" style={{ position: "sticky", top: "90px" }}>
            <h4 className="sidebar-menu-title">Student Services</h4>
            <ul className="sidebar-nav-list">
              <li><Link href="/students/education" className="sidebar-link">Education at RGUKT</Link></li>
              <li><Link href="/placements" className="sidebar-link">Career Development Cell (CDPC)</Link></li>
              <li><a href="#incubation" className="sidebar-link">Incubation Cell</a></li>
              <li><a href="#international-desk" className="sidebar-link">International Desk</a></li>
              <li><Link href="/grievance#antiragging" className="sidebar-link">Anti Ragging</Link></li>
              <li><Link href="/grievance#womens-cell" className="sidebar-link">Women&apos;s Cell (ICC)</Link></li>
              <li><a href="#welfare-office" className="sidebar-link">Students&apos; Welfare Office</a></li>
              <li><a href="#alumni-association" className="sidebar-link">Alumni Association</a></li>
              <li><a href="http://alumni.rguktrkv.ac.in/" target="_blank" rel="noopener noreferrer" className="sidebar-link">Alumni Portal ↗</a></li>
            </ul>
          </aside>

          {/* Main Content Area */}
          <article className="page-main-body">
            {/* Education at RGUKT */}
            <section id="education" style={{ scrollMarginTop: "100px", marginBottom: "3rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                <span style={{ background: "rgba(122, 0, 25, 0.1)", color: "var(--primary-maroon)", padding: "0.25rem 0.75rem", borderRadius: "999px", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase" }}>
                  Academic Model
                </span>
              </div>
              <h3 style={{ color: "var(--primary-dark)", fontSize: "1.75rem", fontWeight: 800, marginBottom: "1rem" }}>
                Education at RGUKT
              </h3>
              <p style={{ fontSize: "1rem", color: "#334155", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                Rajiv Gandhi University of Knowledge Technologies (RGUKT) RK Valley offers a unique and prestigious <strong>6-Year Integrated B.Tech Program</strong> specifically designed to cater to talented rural youth. The academic journey bridges intermediate schooling and high-caliber undergraduate engineering education through a seamless, continuous curriculum.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
                <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", padding: "1.25rem", borderRadius: "8px" }}>
                  <h5 style={{ color: "var(--primary-maroon)", fontWeight: 700, marginBottom: "0.4rem" }}>ICT-Enabled Pedagogy</h5>
                  <p style={{ fontSize: "0.85rem", color: "#64748b", margin: 0, lineHeight: 1.5 }}>
                    Individual laptops, high-speed digital classrooms, and digital courseware empowering students through self-paced learning and digital research.
                  </p>
                </div>
                <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", padding: "1.25rem", borderRadius: "8px" }}>
                  <h5 style={{ color: "var(--primary-maroon)", fontWeight: 700, marginBottom: "0.4rem" }}>Learning by Doing</h5>
                  <p style={{ fontSize: "0.85rem", color: "#64748b", margin: 0, lineHeight: 1.5 }}>
                    Extensive hands-on lab experiments, semester design projects, and industrial mini-projects fostering practical technical problem-solving skills.
                  </p>
                </div>
                <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", padding: "1.25rem", borderRadius: "8px" }}>
                  <h5 style={{ color: "var(--primary-maroon)", fontWeight: 700, marginBottom: "0.4rem" }}>Continuous Assessment</h5>
                  <p style={{ fontSize: "0.85rem", color: "#64748b", margin: 0, lineHeight: 1.5 }}>
                    Regular monthly tests, quizzes, and project milestones ensuring steady academic rigor and comprehensive mastery without last-minute cramming.
                  </p>
                </div>
              </div>
              <div style={{ marginTop: "1rem" }}>
                <Link href="/students/education" className="btn btn-primary" style={{ fontSize: "0.88rem" }}>
                  Explore Complete 6-Year Education Model, Curricula &amp; Regulations →
                </Link>
              </div>
            </section>

            {/* Career Development Cell */}
            <section id="career-development" style={{ scrollMarginTop: "100px", marginBottom: "3rem" }}>
              <div style={{ background: "linear-gradient(135deg, rgba(122,0,25,0.04) 0%, rgba(200,150,60,0.06) 100%)", border: "1px solid rgba(122,0,25,0.15)", borderRadius: "12px", padding: "1.75rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
                <div style={{ maxWidth: "600px" }}>
                  <span style={{ color: "var(--primary-maroon)", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase" }}>Placement &amp; Training</span>
                  <h4 style={{ color: "var(--primary-dark)", fontWeight: 800, margin: "0.25rem 0 0.5rem" }}>Career Development and Placement Cell (CDPC)</h4>
                  <p style={{ fontSize: "0.9rem", color: "#475569", margin: 0, lineHeight: 1.6 }}>
                    CDPC prepares students for top tier industry recruitment, coding bootcamps, resume workshops, soft skill training, and drives with 100+ national and multinational recruiters.
                  </p>
                </div>
                <Link href="/placements" className="btn btn-primary" style={{ whiteSpace: "nowrap" }}>
                  Explore CDPC &amp; Placements →
                </Link>
              </div>
            </section>

            {/* Incubation Cell */}
            <section id="incubation" style={{ scrollMarginTop: "100px", marginBottom: "3rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                <span style={{ background: "#ecfdf5", color: "#047857", padding: "0.25rem 0.75rem", borderRadius: "999px", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase" }}>
                  Entrepreneurship &amp; Startups
                </span>
              </div>
              <h3 style={{ color: "var(--primary-dark)", fontSize: "1.6rem", fontWeight: 800, marginBottom: "0.75rem" }}>
                Incubation &amp; Innovation Cell
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#334155", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                The RGUKT RK Valley Incubation Cell is a launchpad for student entrepreneurs, innovators, and inventors. We provide infrastructure, mentor networks, prototyping resources, and seed guidance to transform breakthrough ideas into viable commercial and social enterprises.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
                <div style={{ border: "1px solid #e2e8f0", padding: "1.25rem", borderRadius: "8px", background: "#ffffff" }}>
                  <div style={{ marginBottom: "0.5rem", color: "var(--primary-maroon)" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 18h6"></path><path d="M10 22h4"></path><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path>
                    </svg>
                  </div>
                  <h5 style={{ fontWeight: 700, color: "var(--primary-dark)", marginBottom: "0.3rem" }}>Ideation &amp; Prototyping</h5>
                  <p style={{ fontSize: "0.82rem", color: "#64748b", margin: 0 }}>Maker spaces with 3D printers, IoT kits, and electronics testing benches for rapid product prototyping.</p>
                </div>
                <div style={{ border: "1px solid #e2e8f0", padding: "1.25rem", borderRadius: "8px", background: "#ffffff" }}>
                  <div style={{ marginBottom: "0.5rem", color: "var(--primary-maroon)" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h5 style={{ fontWeight: 700, color: "var(--primary-dark)", marginBottom: "0.3rem" }}>Industry Mentorship</h5>
                  <p style={{ fontSize: "0.82rem", color: "#64748b", margin: 0 }}>Direct mentorship sessions with startup founders, tech architects, and alumni venture partners.</p>
                </div>
                <div style={{ border: "1px solid #e2e8f0", padding: "1.25rem", borderRadius: "8px", background: "#ffffff" }}>
                  <div style={{ marginBottom: "0.5rem", color: "var(--primary-maroon)" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line>
                    </svg>
                  </div>
                  <h5 style={{ fontWeight: 700, color: "var(--primary-dark)", marginBottom: "0.3rem" }}>IPR &amp; Patent Support</h5>
                  <p style={{ fontSize: "0.82rem", color: "#64748b", margin: 0 }}>Assistance with intellectual property rights, provisional patent filing, and legal advisory.</p>
                </div>
              </div>
            </section>

            {/* International Desk */}
            <section id="international-desk" style={{ scrollMarginTop: "100px", marginBottom: "3rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                <span style={{ background: "#eff6ff", color: "#1d4ed8", padding: "0.25rem 0.75rem", borderRadius: "999px", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase" }}>
                  Global Mobility
                </span>
              </div>
              <h3 style={{ color: "var(--primary-dark)", fontSize: "1.6rem", fontWeight: 800, marginBottom: "0.75rem" }}>
                International Desk
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#334155", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                The International Relations Desk facilitates global academic collaboration, international research internships, foreign university exchange programs, and guidance for competitive exams (GRE, TOEFL, IELTS) for higher studies abroad.
              </p>
              <div style={{ background: "#f8fafc", border: "1px solid #cbd5e1", borderRadius: "8px", padding: "1.25rem" }}>
                <ul style={{ margin: 0, paddingLeft: "1.25rem", color: "#475569", fontSize: "0.9rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <li>Global research internships with foreign academic institutions and laboratories.</li>
                  <li>Guidance sessions for MS, Ph.D., and fellowship applications in USA, Europe, and Asia.</li>
                  <li>Hosting international guest faculty, visiting scholars, and collaborative workshops.</li>
                  <li><strong>Contact Desk:</strong> <a href="mailto:international@rguktrkv.ac.in" style={{ color: "var(--primary-maroon)", fontWeight: 600 }}>international@rguktrkv.ac.in</a></li>
                </ul>
              </div>
            </section>

            {/* Anti Ragging & Women's Cell banner */}
            <section style={{ marginBottom: "3rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
                <div style={{ background: "var(--status-crimson-bg)", borderLeft: "4px solid var(--status-crimson)", padding: "1.25rem", borderRadius: "8px" }}>
                  <h5 style={{ color: "var(--status-crimson)", fontWeight: 800, marginBottom: "0.35rem" }}>Anti Ragging Policy</h5>
                  <p style={{ fontSize: "0.85rem", color: "#7f1d1d", marginBottom: "0.75rem", lineHeight: 1.5 }}>
                    Zero-tolerance campus policy with 24x7 flying squads and active anti-ragging committees.
                  </p>
                  <Link href="/grievance#antiragging" style={{ color: "var(--status-crimson)", fontSize: "0.85rem", fontWeight: 700, textDecoration: "underline" }}>
                    View Squads &amp; Helplines →
                  </Link>
                </div>
                <div style={{ background: "#fdf2f8", borderLeft: "4px solid #db2777", padding: "1.25rem", borderRadius: "8px" }}>
                  <h5 style={{ color: "#9d174d", fontWeight: 800, marginBottom: "0.35rem" }}>Women&apos;s Development Cell</h5>
                  <p style={{ fontSize: "0.85rem", color: "#831843", marginBottom: "0.75rem", lineHeight: 1.5 }}>
                    Internal Complaints Committee (ICC) dedicated to gender safety, equity, and female empowerment.
                  </p>
                  <Link href="/grievance#womens-cell" style={{ color: "#9d174d", fontSize: "0.85rem", fontWeight: 700, textDecoration: "underline" }}>
                    View Women&apos;s Cell Details →
                  </Link>
                </div>
              </div>
            </section>

            {/* Students' Welfare Office */}
            <section id="welfare-office" style={{ scrollMarginTop: "100px", marginBottom: "3rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                <span style={{ background: "rgba(122, 0, 25, 0.1)", color: "var(--primary-maroon)", padding: "0.25rem 0.75rem", borderRadius: "999px", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase" }}>
                  Campus Governance
                </span>
              </div>
              <h3 style={{ color: "var(--primary-dark)", fontSize: "1.6rem", fontWeight: 800, marginBottom: "0.75rem" }}>
                Students&apos; Welfare Office (DSW)
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#334155", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                Headed by the Dean of Student Welfare (DSW), the Welfare Office manages the residential lifecycle, hostel accommodation, nutritious central dining messes, student health care, cultural festivals, and extracurricular clubs.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
                <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", padding: "1.25rem", borderRadius: "8px" }}>
                  <h5 style={{ color: "var(--primary-dark)", fontWeight: 700, marginBottom: "0.3rem" }}>Hostels &amp; Messes</h5>
                  <p style={{ fontSize: "0.82rem", color: "#64748b", margin: 0 }}>Independent hostels with modern security, RO drinking water, and hygienic dining catering to 6,000+ residential students.</p>
                </div>
                <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", padding: "1.25rem", borderRadius: "8px" }}>
                  <h5 style={{ color: "var(--primary-dark)", fontWeight: 700, marginBottom: "0.3rem" }}>Student Activity Center</h5>
                  <p style={{ fontSize: "0.82rem", color: "#64748b", margin: 0 }}>Technical, cultural, sports, and social service clubs including NSS, NCC, coding communities, and annual fests.</p>
                </div>
                <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", padding: "1.25rem", borderRadius: "8px" }}>
                  <h5 style={{ color: "var(--primary-dark)", fontWeight: 700, marginBottom: "0.3rem" }}>24x7 Health Center</h5>
                  <p style={{ fontSize: "0.82rem", color: "#64748b", margin: 0 }}>30-bed in-house medical hospital with full-time resident doctors, emergency ambulance, and free pharmacy for students.</p>
                </div>
              </div>
            </section>

            {/* Alumni Association & Alumni Portal */}
            <section id="alumni-association" style={{ scrollMarginTop: "100px", marginBottom: "2rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                <span style={{ background: "#fef3c7", color: "#b45309", padding: "0.25rem 0.75rem", borderRadius: "999px", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase" }}>
                  Global Network
                </span>
              </div>
              <h3 style={{ color: "var(--primary-dark)", fontSize: "1.6rem", fontWeight: 800, marginBottom: "0.75rem" }}>
                RGUKT RK Valley Alumni Association
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#334155", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                With over 18,000+ alumni across leading multinational tech companies, prestigious research institutes, civil services, and successful startups globally, the Alumni Association serves as an enduring bridge between past graduates and current students.
              </p>

              <div style={{ background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)", color: "#ffffff", borderRadius: "12px", padding: "1.75rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1.25rem" }}>
                <div>
                  <h4 style={{ color: "#f8fafc", fontWeight: 800, margin: "0 0 0.4rem" }}>Official Alumni Portal</h4>
                  <p style={{ color: "#94a3b8", fontSize: "0.88rem", margin: 0, lineHeight: 1.5, maxWidth: "520px" }}>
                    Connect with fellow alumni, offer student mentorship, post job referrals, and participate in the annual Alumni Reunion Meet.
                  </p>
                </div>
                <a
                  href="http://alumni.rguktrkv.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{ background: "var(--accent-gold)", color: "#1e293b", fontWeight: 700, padding: "0.75rem 1.5rem", borderRadius: "6px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
                >
                  Visit Alumni Portal ↗
                </a>
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
}
