import React from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Common/Breadcrumb";
import StudentsScrollspySidebar from "@/components/Common/StudentsScrollspySidebar";

export const metadata = {
  title: "Education at RGUKT | 6-Year Integrated B.Tech Program | RGUKT RK Valley",
  description: "Features of the Six-Year Integrated Course, Pre-University program, Engineering degree disciplines, liberal professional education, subsidized tuition fees, and residential campus life at RGUKT RK Valley."
};

export default function EducationAtRGUKTPage() {
  const engineeringBranches = [
    { name: "Artificial Intelligence & Machine Learning", code: "AI&ML", href: "/departments/aiml" },
    { name: "Chemical Engineering", code: "CHE", href: "/departments/che" },
    { name: "Civil Engineering", code: "CE", href: "/departments/ce" },
    { name: "Computer Science and Engineering", code: "CSE", href: "/departments/cse" },
    { name: "Electrical & Electronics Engineering", code: "EEE", href: "/departments/eee" },
    { name: "Electronics & Communications Engineering", code: "ECE", href: "/departments/ece" },
    { name: "Mechanical Engineering", code: "ME", href: "/departments/me" },
    { name: "Metallurgical & Materials Engineering", code: "MME", href: "/departments/mme" },
  ];

  const campusEvents = [
    {
      title: "Dr.Ambedkar 135th Birthday Celebration in RGUKT RK Valley on 14 th April 2026 (15.04.2026)",
      href: "https://photos.app.goo.gl/jfkhxUuoD2YuT9uQA",
    },
    {
      title: "Campus Students Selected for State-Level Yoga Competitions (22.11.2025)",
      href: "https://www.rguktrkv.ac.in/others/YogaCom22112025.html",
    },
    {
      title: "Inauguration of Section 8 Company at RK Valley Campus (16.11.2025)",
      href: "https://www.rguktrkv.ac.in/others/section8.jpeg",
    },
    {
      title: "Leadership Qualities Must Be Improved – Awareness Session Conducted (16.11.2025)",
      href: "https://www.rguktrkv.ac.in/others/leader16112025.jpeg",
    },
    {
      title: "Awareness Program on Personality Development and Mannasika Odetidina Conducted (22.09.2025)",
      href: "https://www.rguktrkv.ac.in/others/Awareness22092025.jpg",
    },
    {
      title: "Dr.Ambedkar 134th Birthday Celebration in RGUKT RK Valley on 14 th April 2025 (15.04.2025)",
      href: "https://photos.app.goo.gl/CYCk7JvsLXfMB2vL7",
    },
    {
      title: "The Viksit Bharat - Youth Parliament at the district level was successfully held at KSRM College, YSR Kadapa, on 21st March 2025. (27.03.2025)",
      href: "https://www.rguktrkv.ac.in/others/ViksitBharat_21032025.html",
    },
    {
      title: "Hon'ble DGP of Telangana State visit to RGUKT RK Valley on 20.02.2020 (20-02-2020)",
      href: "https://photos.app.goo.gl/QNSps3HKKvVzUjeH8",
    },
    {
      title: "National Science Day celebrations at RGUKT R.K.Valley on 26th to 28th Feb 2020 (29-02-2020)",
      href: "https://photos.app.goo.gl/1fzGRtCoKGjm91G26",
    },
    {
      title: "Self defence training workshop for girl students held on 28th September 2019 at IIIT R.K.Valley (01-10-2019)",
      href: "https://photos.app.goo.gl/CihbRRC1wQ6VtYc2A",
    },
    {
      title: "Day 2 of NSS Special camp programme at Kommaram Palli Village on 3rd Jan 2019",
      href: "https://www.rguktrkv.ac.in/Gallerys/JBMV6th2Unit/index.html",
    },
    {
      title: "National Science Day Program -2017 at IIIT RK Valley, RGUKT-AP(26-02-2017)",
      href: "https://www.rguktrkv.ac.in/pdfdoc/NSD2017.pdf",
    },
    {
      title: "National level conference on Multi-Disciplinary Academic Studies(02-06-2016)",
      href: "https://www.rguktrkv.ac.in/rgu-MultiDisciplinary.html",
    },
  ];

  return (
    <div className="page-view-container">
      <Breadcrumb title="Education at RGUKT" category="Students" />

      <div className="container" style={{ paddingBottom: "4rem" }}>
        <div className="page-content-layout">
          {/* Section Navigation Sidebar with Dynamic Scrollspy */}
          <StudentsScrollspySidebar currentPath="/students/education" />

          {/* Main Body */}
          <article className="page-main-body">
            {/* Header Title Section */}
            <div id="education" style={{ scrollMarginTop: "100px", borderBottom: "1px solid #e2e8f0", paddingBottom: "1.5rem", marginBottom: "2rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                <span style={{ background: "rgba(122, 0, 25, 0.08)", color: "var(--primary-maroon)", padding: "0.25rem 0.75rem", borderRadius: "999px", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase" }}>
                  Academics &amp; Pedagogy
                </span>
                <span style={{ background: "#fef3c7", color: "#92400e", padding: "0.25rem 0.75rem", borderRadius: "999px", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase" }}>
                  6-Year Integrated Model
                </span>
              </div>
              <h1 style={{ color: "var(--primary-dark)", fontSize: "2.25rem", fontWeight: 800, margin: "0.25rem 0 0.75rem" }}>
                Education at the RGUKT
              </h1>
              <p style={{ fontSize: "1.05rem", color: "#475569", lineHeight: 1.6, margin: 0 }}>
                A groundbreaking residential educational model bridging 10th class rural merit to world-class engineering excellence through seamless 6-year integrated education.
              </p>
            </div>

            {/* 1. Features of Six-Years Integrated Course */}
            <section id="features" style={{ scrollMarginTop: "100px", marginBottom: "2.75rem" }}>
              <h3 style={{ color: "var(--primary-dark)", fontSize: "1.45rem", fontWeight: 800, marginBottom: "0.75rem" }}>
                Features of Six - Years Integrated Course
              </h3>
              <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75, marginBottom: "1rem" }}>
                The program offered by the RGUKT consists of a <strong>six year integrated course</strong> after 10th class examination leading to a <strong>B.Tech. degree</strong>. The first part of the six-year course is a <strong>two-year Pre University Course (equivalent to (AP) Intermediate)</strong> followed by a second part of <strong>four-year Engineering Course</strong>.
              </p>
              <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75 }}>
                At present the pre-university part of education offers premature specialization in tracks such as Mathematics, Physics, Chemistry and Life sciences (equivalent to MPC + BiPC). By bringing students in to the University at an earlier stage we hope to impart a broad based education including humanities and liberal arts to students.
              </p>
            </section>

            {/* 2. The Pre University Part */}
            <section id="puc" style={{ scrollMarginTop: "100px", marginBottom: "2.75rem" }}>
              <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "1.75rem", position: "relative" }}>
                <h3 style={{ color: "var(--primary-dark)", fontSize: "1.45rem", fontWeight: 800, marginBottom: "0.75rem" }}>
                  The Pre University Part
                </h3>
                <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75, marginBottom: "1rem" }}>
                  This is equivalent to the two year Intermediate (AP) education. The program provides a qualitative plus two education in itself and further lays a stronger foundation for the technical and professional courses ahead. It has an inbuilt system for remedial education for the students who are relatively weak.
                </p>
                <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75, marginBottom: "1rem" }}>
                  In addition, there is a foundation course in IT, preparing students to make full use of the Information Technology and Communication resources provided by the RGUKT in its novel model of teaching learning. There is a permitted exit after Pre-University if the student chooses to go for a career in other professional programs.
                </p>
                <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75, marginBottom: "1.25rem" }}>
                  The program also provides short-term courses in humanities and social sciences so that the students emerge as confident, energetic, enthusiastic youngsters seeking challenges in their university education and life.
                </p>

                {/* Curriculum & Regulations CTAs */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", paddingTop: "0.75rem", borderTop: "1px solid #e2e8f0" }}>
                  <Link
                    href="/curriculum"
                    style={{
                      background: "var(--primary-maroon)",
                      color: "#ffffff",
                      padding: "0.5rem 1rem",
                      borderRadius: "6px",
                      fontSize: "0.88rem",
                      fontWeight: 700,
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem"
                    }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                    View Curriculum
                  </Link>
                  <Link
                    href="/academics#regulations"
                    style={{
                      background: "#ffffff",
                      color: "var(--primary-dark)",
                      border: "1px solid #cbd5e1",
                      padding: "0.5rem 1rem",
                      borderRadius: "6px",
                      fontSize: "0.88rem",
                      fontWeight: 700,
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem"
                    }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
                    Academic Regulations
                  </Link>
                </div>
              </div>
            </section>

            {/* 3. Degree Programs at RGUKTs */}
            <section id="degree-programs" style={{ scrollMarginTop: "100px", marginBottom: "2.75rem" }}>
              <h3 style={{ color: "var(--primary-dark)", fontSize: "1.45rem", fontWeight: 800, marginBottom: "0.75rem" }}>
                Degree Programs at RGUKTs
              </h3>
              <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75, marginBottom: "1.25rem" }}>
                Upon completion of 6 years of education, each year consisting of <strong>2 semesters</strong>, and the prescribed requirements, the graduates will be awarded a <strong>B.Tech. degree</strong> in any one of the following <strong>8 engineering disciplines</strong> given below:
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "0.85rem", marginBottom: "1.5rem" }}>
                {engineeringBranches.map((branch) => (
                  <Link
                    key={branch.name}
                    href={branch.href}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      background: "#ffffff",
                      border: "1px solid #e2e8f0",
                      borderRadius: "8px",
                      padding: "0.85rem 1rem",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.03)",
                      textDecoration: "none",
                      transition: "all 0.2s ease"
                    }}
                  >
                    <span style={{ background: "rgba(122, 0, 25, 0.08)", color: "var(--primary-maroon)", fontWeight: 800, fontSize: "0.75rem", padding: "0.3rem 0.55rem", borderRadius: "5px", letterSpacing: "0.5px" }}>
                      {branch.code}
                    </span>
                    <h5 style={{ margin: 0, fontSize: "0.92rem", fontWeight: 700, color: "var(--primary-dark)" }}>
                      {branch.name}
                    </h5>
                  </Link>
                ))}
              </div>

              {/* Major / Minor Options */}
              <div id="majors-minors" style={{ background: "linear-gradient(135deg, rgba(122,0,25,0.03) 0%, rgba(200,150,60,0.05) 100%)", border: "1px solid rgba(122,0,25,0.12)", borderRadius: "10px", padding: "1.5rem", marginBottom: "1.25rem" }}>
                <h4 style={{ color: "var(--primary-maroon)", fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.5rem" }}>
                  Dual Majors and Minor Specializations
                </h4>
                <p style={{ fontSize: "0.95rem", color: "#334155", lineHeight: 1.75, margin: 0 }}>
                  Further, depending on the performance and by earning additional credits, it is possible to get a <strong>B.Tech. with two Majors</strong>, i.e., one in Computer Science / AI&amp;ML and the other from among Chemical, Civil, Electrical &amp; Electronics, Electronics and Communication, Materials Science and Mechanical.
                </p>
                <p style={{ fontSize: "0.95rem", color: "#334155", lineHeight: 1.75, marginTop: "0.75rem", marginBottom: 0 }}>
                  Alternatively it is possible to get a degree with <strong>one Major and two Minors</strong> or <strong>one Major and one Minor</strong>. One of the two Minors may be from <strong>Business Management, Economics, Mathematics, Social Sciences and Statistics</strong>.
                </p>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                <Link href="/curriculum" style={{ background: "var(--primary-maroon)", color: "#ffffff", padding: "0.5rem 1rem", borderRadius: "6px", fontSize: "0.88rem", fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                  View Curricula
                </Link>
                <Link href="/academics#regulations" style={{ background: "#ffffff", color: "var(--primary-dark)", border: "1px solid #cbd5e1", padding: "0.5rem 1rem", borderRadius: "6px", fontSize: "0.88rem", fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
                  Academic Regulations
                </Link>
              </div>
            </section>

            {/* 4. Employment Prospects */}
            <section id="employment" style={{ scrollMarginTop: "100px", marginBottom: "2.75rem" }}>
              <h3 style={{ color: "var(--primary-dark)", fontSize: "1.45rem", fontWeight: 800, marginBottom: "0.75rem" }}>
                Employment Prospects
              </h3>
              <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75, marginBottom: "1rem" }}>
                It is expected that the employment prospects of graduates of RGUKT (IIITs) will be comparable to the other world class universities in India. It is also anticipated that the broad-based education including soft skills will provide a strong foundation for national competitive examinations.
              </p>
              <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75, marginBottom: "1.25rem" }}>
                Appropriate placement guidance and awareness programs will be conducted to prepare the students for private and public sector opportunities. Students also learn entrepreneurship and other skills that can help them to set out on their own.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <Link href="/placements" className="btn btn-primary" style={{ fontSize: "0.88rem" }}>
                  Explore Career Development &amp; Placements Cell (CDPC) →
                </Link>
              </div>
            </section>

            {/* 5. Tuition Fees */}
            <section id="tuition" style={{ scrollMarginTop: "100px", marginBottom: "2.75rem" }}>
              <div style={{ background: "#ecfdf5", borderLeft: "5px solid #059669", borderRadius: "8px", padding: "1.5rem" }}>
                <h3 style={{ color: "#065f46", fontSize: "1.35rem", fontWeight: 800, marginBottom: "0.5rem" }}>
                  Tuition Fees &amp; Financial Support
                </h3>
                <p style={{ fontSize: "0.98rem", color: "#047857", lineHeight: 1.75, margin: 0 }}>
                  As a government sponsored university, the tuition fees at Rajiv Gandhi University are <strong>highly subsidized by the AP government</strong>. The annual fee (for AP students) for the first two years (Pre University program) is <strong>Rs.45,000/-</strong>. This includes tuition, lodging and boarding.
                </p>
              </div>
            </section>

            {/* 6. Focus on Liberal and Professional Education Including Soft Skills */}
            <section id="liberal-education" style={{ scrollMarginTop: "100px", marginBottom: "2.75rem" }}>
              <h3 style={{ color: "var(--primary-dark)", fontSize: "1.45rem", fontWeight: 800, marginBottom: "0.75rem" }}>
                Focus on Liberal and Professional Education Including Soft Skills
              </h3>
              <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75, marginBottom: "1rem" }}>
                The program at RGUKT (IIITs) is built on a new model of liberal professional education creating future leaders with a broad understanding of the world. A structured environment of broad based education including basic skills of communication, teamwork and leadership is provided. It aims at making students well equipped with life skills and confident problem solvers rather than over specialized engineers who just know the theory.
              </p>
              <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75, marginBottom: "1rem" }}>
                It prepares the student to meet the demands of the work place and society as he or she navigates through life. It stresses lifelong learning through <em>learning to learn</em>, and <em>learning to live</em>.
              </p>
              <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75, marginBottom: "1rem" }}>
                The program uses the <strong>learning-by-doing paradigm</strong> of education using personalized mentors and intelligent tutoring systems. The program adapts self-paced learning with variable duration to reach the mastery level outcome. Highly qualified and meritorious faculty will be participating in teaching, learning and research. Many of them are being drawn from the world class institutions such as IITs.
              </p>
              <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75, marginBottom: "1rem" }}>
                There will be a focus on all-round development with emphasis on personality development and education in Humanities and Social Sciences to make students responsible world citizens. The program is intensive with emphasis on physical training, sports and soft skills. <strong>About 30% of time is devoted to soft skills.</strong>
              </p>
            </section>

            {/* 7. Facilities */}
            <section id="facilities" style={{ scrollMarginTop: "100px", marginBottom: "2.75rem" }}>
              <h3 style={{ color: "var(--primary-dark)", fontSize: "1.45rem", fontWeight: 800, marginBottom: "0.85rem" }}>
                Campus Life and Facilities
              </h3>

              {/* Life at RGUKT */}
              <div style={{ marginBottom: "2rem", display: "flow-root" }}>
                <h4 style={{ color: "var(--primary-maroon)", fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.6rem" }}>
                  Life at RGUKT
                </h4>

                <div className="facility-float-image">
                  <div style={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                    background: "#ffffff"
                  }}>
                    <Image
                      src="/images/campus-facilities/cmp1.jpg"
                      alt="RGUKT Campus Life and Facilities"
                      width={400}
                      height={245}
                      style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
                    />
                  </div>
                </div>

                <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75, marginBottom: "1rem", textAlign: "justify" }}>
                  As mentioned earlier, RGUKT is a fully residential environment. This is necessary because most of the rural students come from a geographically distributed wide area and would not be able to commute to the campus. Thus, it is essential to provide a fully residential campus with all of the facilities included such as shops, hospitals, bank, laundry, barbershops, etc. appropriate for a community of about <strong>20,000 people</strong> consisting of <strong>12,000 students, 3,000 faculty and staff and 5,000 service providers</strong> of various types.
                </p>
                <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75, marginBottom: "1rem", textAlign: "justify" }}>
                  The Director of the Institute also becomes the pseudo-Mayor of this township dealing with the typical problems of community based living. Since the students are joining the institution at the age of 15 where they are undergoing physical transformation and hormonal changes, being away from home adds to their stress. The local Health Clinic must provide for Psychological Counseling and support.
                </p>
                <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75, margin: 0, textAlign: "justify" }}>
                  Many rural households tend to be poor and many of the factors of daily living that we take for granted are not always known, such as using a sit-down toilet as opposed to a squatting toilet and significant additional personal education will be needed to facilitate the integration into the larger community.
                </p>
              </div>

              {/* Life in a Residential Campus */}
              <div style={{ marginBottom: "2rem", display: "flow-root" }}>
                <h4 style={{ color: "var(--primary-maroon)", fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.6rem" }}>
                  Life in a Residential Campus
                </h4>

                <div className="facility-float-image">
                  <div style={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                    background: "#ffffff"
                  }}>
                    <Image
                      src="/images/campus-facilities/cmp4.jpg"
                      alt="RGUKT Residential Campus Life and Hostels"
                      width={400}
                      height={325}
                      style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
                    />
                  </div>
                </div>

                <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75, marginBottom: "1rem", textAlign: "justify" }}>
                  As a fully residential program, all students will stay on the campus. The program is intensive and runs for <strong>2 semesters of 16 weeks of 6 days a week each</strong>. Only <strong>6 weeks of vacation</strong> is permitted: 1 week in Dasara, 1 week during Sankranthi and four weeks in summer. While the program appears intensive, it is also designed to help absorption by making students apply concepts right-then-and-there in class.
                </p>
                <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75, marginBottom: "1rem", textAlign: "justify" }}>
                  All education is mediated through the use of Information and Communication technologies. The academic complex is being connected by high speed LAN which extends to each student&apos;s desk and a <strong>laptop is provided to each student right from his or her first year</strong>. Each class of about 50 students will have mentors who will conduct a discourse and discussion around a prerecorded expert lecture. The best part of this learning paradigm is that students will have time in these class sessions to receive the lecture, ask questions, discuss with the help of mentors and apply the concepts to problem solving. <strong>A good student would have no homework!</strong>
                </p>
                <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75, marginBottom: "1rem", textAlign: "justify" }}>
                  To keep up with this program and life in general, time is set apart for physical fitness activities. During the first two years all students would attend physical training and exercise each morning and participate in sports in the evening. The daily academic program will consist of 4 periods of just less than 2 hours duration each from 8 AM to 4PM with a lunch break.
                </p>
                <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75, marginBottom: "1.25rem", textAlign: "justify" }}>
                  During the evening after dinner, there will be programs in soft skills, reading classics, and viewing selected movie programs from 7.30PM to 10.30PM. This will be a more relaxing and a quiet learning time. Students get to explore their talents in art, drama and music as well. Subsequent year will offer greater flexibility in individual daily schedule.
                </p>
                <div style={{ background: "#f8fafc", border: "1px solid #cbd5e1", borderRadius: "8px", padding: "1.25rem", display: "flex", alignItems: "center", gap: "1rem", clear: "both" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-maroon)" strokeWidth="2" style={{ flexShrink: 0 }}>
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  <p style={{ margin: 0, fontSize: "0.92rem", color: "#334155", lineHeight: 1.6 }}>
                    <strong>Separate and secure hostel facilities</strong> will be provided for girls and boys. Food and dining facilities will be according to modern standards.
                  </p>
                </div>
              </div>

              {/* Sports & Games */}
              <div style={{ marginBottom: "1.75rem" }}>
                <h4 style={{ color: "var(--primary-maroon)", fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.6rem" }}>
                  Sports &amp; Games
                </h4>
                <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75, margin: 0, textAlign: "justify" }}>
                  RGUKT provides facilities for both indoor games such as caroms and chess and outdoor games such as volleyball and basketball. Swimming pool facility will be made soon. It is anticipated to hold Inter-campus competitions will also be held.
                </p>
              </div>

              {/* Shopping Center */}
              <div style={{ marginBottom: "1.75rem" }}>
                <h4 style={{ color: "var(--primary-maroon)", fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.6rem" }}>
                  Shopping Center
                </h4>
                <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75, margin: 0, textAlign: "justify" }}>
                  To cater to the needs of students, there is a general store, a canteen, a salon and a beauty parlor in every hostel. Students can make use of these services at a reasonable price.
                </p>
              </div>

              {/* Extra-curricular Activities in RGUKT */}
              <div style={{ marginBottom: "1.75rem" }}>
                <h4 style={{ color: "var(--primary-maroon)", fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.6rem" }}>
                  Extra-curricular Activities in RGUKT
                </h4>
                <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75, margin: 0, textAlign: "justify" }}>
                  RGUKT&apos;s goal is to give students a well-rounded education and doesn&apos;t stop with just giving students an education in the Sciences and Engineering. Students are encouraged to get involved in arts, music, drama, debate, paintings and other elated skills. At this point, there is no full time faculty for these disciplines but it is anticipated to hire full time faculty and visiting faculty also.
                </p>
              </div>

              {/* Soft Skills and Edutainment */}
              <div style={{ marginBottom: "1.75rem" }}>
                <h4 style={{ color: "var(--primary-maroon)", fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.6rem" }}>
                  Soft Skills and Edutainment
                </h4>
                <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75, marginBottom: "1rem", textAlign: "justify" }}>
                  After an evening break consisting of sports and dinner, students are expected to go back to the classes for a wide range of activities involving soft skills and edutainment. These sessions are normally supposed to happen from <strong>7:30PM to 10:30PM</strong>.
                </p>
                <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75, margin: 0, textAlign: "justify" }}>
                  The students have access to audio books of classics, both Western and Indian. The Western Classics might include books by Mark Twain, Walter Scott, Dickens and the Indian classics might include the Autobiography of Mahatma Gandhi. Each paragraph in each book is hyperlinked to an audio rendering of that paragraph so that a student can listen to a native speaker reading the paragraph with proper pronunciation and intonation. Thus, as well as reading the classics, the student is also able to learn how certain proper names are pronounced such as San Joaquin Valley. The students also learn how to do touch typing, prepare and participate in debating clubs and read newspapers online. Those students that are taking the remedial classes will miss some of these activities but it is expected that they will have plenty of time to catch up.
                </p>
              </div>

              {/* Health and Safety */}
              <div style={{ marginBottom: "1.75rem" }}>
                <h4 style={{ color: "var(--primary-maroon)", fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.6rem" }}>
                  Health and Safety
                </h4>
                <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75, margin: 0, textAlign: "justify" }}>
                  RGUKT provides its students and staff all the necessary medical facilities. A medical center with the required facilities is under construction and is anticipated to be operational soon. The center will have <strong>30 beds and 3 doctors</strong>.
                </p>
              </div>

              {/* Campus Guidelines and Rules */}
              <div style={{ background: "#fffbeb", borderLeft: "5px solid #d97706", borderRadius: "8px", padding: "1.5rem" }}>
                <h4 style={{ color: "#92400e", fontSize: "1.15rem", fontWeight: 800, marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                  Important Note &amp; Campus Rules
                </h4>
                <ul style={{ margin: 0, paddingLeft: "1.25rem", color: "#78350f", fontSize: "0.92rem", lineHeight: 1.75, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <li>Parents are allowed to meet their children <strong>only on Sundays</strong>.</li>
                  <li>Relatives of students are not entertained unless they are accompanied by the students&apos; parent(s).</li>
                  <li>Parents need to make an appointment to meet their children.</li>
                  <li>When students want to go out of campus to their home towns, parents are required to come and pick them up.</li>
                  <li>Cell phones are not allowed to be used on campus. Students can use their cell phones in their rooms alone. If one is found to be using a cell phone on campus, it will be confiscated immediately.</li>
                  <li>No food from outside is allowed in the hostel. Parents are not supposed to bring snacks or food of any kind for their children.</li>
                </ul>
              </div>
            </section>

            {/* 9. SmartClasses */}
            <section id="smartclasses" style={{ scrollMarginTop: "100px", marginBottom: "2.75rem", display: "flow-root" }}>
              <h3 style={{ color: "var(--primary-dark)", fontSize: "1.45rem", fontWeight: 800, marginBottom: "0.85rem" }}>
                Smart Class Rooms
              </h3>

              <div className="smart-classes-media-col">
                <div style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                  background: "#ffffff"
                }}>
                  <Image
                    src="/images/campus-facilities/cmp2.jpg"
                    alt="RGUKT Smart Class Rooms"
                    width={240}
                    height={276}
                    style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
                  />
                </div>

                <div style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                  background: "#ffffff"
                }}>
                  <Image
                    src="/images/campus-facilities/cmp3.jpg"
                    alt="RGUKT Smart Class Learning Environment"
                    width={240}
                    height={347}
                    style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
                  />
                </div>
              </div>
              <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75, marginBottom: "1rem", textAlign: "justify" }}>
                The fundamental assumption at RGUKT is that the students will learn more effectively if each of them has a laptop connected to the Internet and have been given the skills for accessing and using the resources of the Internet. For example, the lectures and the text book content and problems to be solved including example problems, are all made available on a server and the student can go back and re-listen or re-reference the material repeatedly, unlike a lecture which can only be heard in real time once. This ability to re-listen provides a great deal of help for those people who are struggling with understanding the lessons because they are missing some basic concepts. The Smart class Room environment also makes it possible for students to work on problems at an individual pace without being left behind in a classroom environment and being lost forever.
              </p>
              <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75, marginBottom: "1rem", textAlign: "justify" }}>
                Every student is provided with a personal computer (usually a laptop) from day one and much of the educational experience is complier-mediated. Since getting high quality teachers has always been a problem given the lower salaries the lectures are provided on line by world class teachers and classroom support is provided by domain specialists and home room tutors who play the role of an instructor and teaching assistant in a conventional environment handling a smaller group of students.
              </p>
              <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75, marginBottom: "1rem", textAlign: "justify" }}>
                It is expected that all the text books for all the subjects will be online and each problem will be hyperlinked back to the specific content in the textbook so that the student can quickly review the material needed to solve the problem at hand. Every learning unit has one hour of problem solving to reinforce the concepts they have a learned during that period. However not all students are able to solve all the problems within a one hour period. If they are stuck, immediate help is available from the Domain Specialist and Home Room Tutor. Instead of the conventional homework assisted by an untrained parent, the use of immediate help by an expert who knows the problem at hand and can instantaneously provide guidance eliminates much of the wasted effort in following dead end paths.
              </p>
              <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75, marginBottom: "1rem", textAlign: "justify" }}>
                In an IT-rich environment, it now becomes possible to do several things that would not have been practical in a traditional educational system. It is now possible to track the progress of each student while he/she solves the problems and see what distinguishes very good students from the students who seem to be struggling. It also becomes possible to get instantaneous feedback from all the students to a wide range of questions from the quality of the food to the quality of the education and quality of the mentors, permitting mid-course correction which is not practical in a conventional classroom environment.
              </p>
              <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75, textAlign: "justify" }}>
                In a Smart Class Room environment, it now becomes possible to administer all the examinations online and provide immediate feedback including an analysis of the errors they made during the test.
              </p>
            </section>

            {/* 10. Achivements */}
            <section id="achievements" style={{ scrollMarginTop: "100px", marginBottom: "2.75rem" }}>
              <h3 style={{ color: "var(--primary-dark)", fontSize: "1.45rem", fontWeight: 800, marginBottom: "0.75rem" }}>
                Students Achivements / Awards
              </h3>
              <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75, marginBottom: "1.25rem" }}>
                Notable accomplishments, sports honors, civic recognitions, and competitive milestones achieved by RGUKT RK Valley students:
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "1.75rem" }}>
                <a
                  href="https://www.rguktrkv.ac.in/others/ViksitBharat_21032025.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    padding: "1rem 1.25rem",
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                    textDecoration: "none",
                    color: "var(--primary-dark)",
                    transition: "all 0.2s ease"
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary-maroon)" strokeWidth="2" style={{ flexShrink: 0, marginTop: "0.2rem" }}>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  <span style={{ fontSize: "0.95rem", fontWeight: 600, lineHeight: 1.6, color: "var(--primary-dark)" }}>
                    The Viksit Bharat - Youth Parliament at the district level was successfully held at KSRM College, YSR Kadapa, on 21st March 2025.
                  </span>
                </a>

                <a
                  href="https://photos.app.goo.gl/cv77SspqWYfvcQaf9"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    padding: "1rem 1.25rem",
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                    textDecoration: "none",
                    color: "var(--primary-dark)",
                    transition: "all 0.2s ease"
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary-maroon)" strokeWidth="2" style={{ flexShrink: 0, marginTop: "0.2rem" }}>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  <span style={{ fontSize: "0.95rem", fontWeight: 600, lineHeight: 1.6, color: "var(--primary-dark)" }}>
                    M Jyothi, (R180878) E3 ECE, won 4 Gold Medals in Asia Pacific African powerlifting championship which was held at Hongkong from 24th to 30th June 2023
                  </span>
                </a>

                <a
                  href="https://photos.app.goo.gl/o9jhvw9YMjMW3jM26"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    padding: "1rem 1.25rem",
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                    textDecoration: "none",
                    color: "var(--primary-dark)",
                    transition: "all 0.2s ease"
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary-maroon)" strokeWidth="2" style={{ flexShrink: 0, marginTop: "0.2rem" }}>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  <span style={{ fontSize: "0.95rem", fontWeight: 600, lineHeight: 1.6, color: "var(--primary-dark)" }}>
                    Power lifting Achievements of RGUKT Students and Teachers
                  </span>
                </a>

                <a
                  href="https://www.rguktrkv.ac.in/others/cdpcnews_22062016.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    padding: "1rem 1.25rem",
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                    textDecoration: "none",
                    color: "var(--primary-dark)",
                    transition: "all 0.2s ease"
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary-maroon)" strokeWidth="2" style={{ flexShrink: 0, marginTop: "0.2rem" }}>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  <span style={{ fontSize: "0.95rem", fontWeight: 600, lineHeight: 1.6, color: "var(--primary-dark)" }}>
                    RGUKT RK Valley Students are selected for IB Group with highest package
                  </span>
                </a>
              </div>
            </section>

            {/* 11. Events and Activities */}
            <section id="events" style={{ scrollMarginTop: "100px", marginBottom: "2.75rem" }}>
              <h3 style={{ color: "var(--primary-dark)", fontSize: "1.45rem", fontWeight: 800, marginBottom: "0.75rem" }}>
                Events and Activities
              </h3>
              <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75, marginBottom: "1.25rem" }}>
                Academic conventions, commemorative occasions, student workshops, leadership awareness, and community outreach programs at RGUKT RK Valley:
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {campusEvents.map((evt, idx) => (
                  <a
                    key={idx}
                    href={evt.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      padding: "1rem 1.25rem",
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderRadius: "8px",
                      textDecoration: "none",
                      color: "var(--primary-dark)",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--primary-maroon)"
                      strokeWidth="2"
                      style={{ flexShrink: 0, marginTop: "0.2rem" }}
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    <span style={{ fontSize: "0.95rem", fontWeight: 600, lineHeight: 1.6, color: "var(--primary-dark)" }}>
                      {evt.title}
                    </span>
                  </a>
                ))}
              </div>
            </section>

            {/* 12. Anti Ragging */}
            <section id="antiragging" style={{ scrollMarginTop: "100px", marginBottom: "2.75rem" }}>
              <h3 style={{ color: "var(--primary-dark)", fontSize: "1.45rem", fontWeight: 800, marginBottom: "1rem" }}>
                Anti Ragging
              </h3>

              <div style={{ marginBottom: "1.5rem" }}>
                <a
                  href="https://www.rguktrkv.ac.in/pdfdoc/gazzetaug2010.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "var(--primary-maroon)",
                    fontWeight: 700,
                    fontSize: "1rem",
                    textDecoration: "underline",
                    lineHeight: 1.5,
                  }}
                >
                  UGC Regulation on curbing the menace of Ragging in Higher Educational Institutions
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
                <div
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                    padding: "1.25rem 1.5rem",
                  }}
                >
                  <h4 style={{ color: "var(--primary-dark)", fontSize: "1.05rem", fontWeight: 800, marginBottom: "0.85rem", lineHeight: 1.4 }}>
                    Anti Ragging monitoring committee in RGUKT, RK Valley Campus
                  </h4>
                  <ul style={{ listStyleType: "disc", paddingLeft: "1.25rem", margin: 0, color: "#334155", fontSize: "0.95rem", lineHeight: 1.8 }}>
                    <li>Chairman</li>
                    <li>Coordinator</li>
                    <li>Committee Members</li>
                  </ul>
                </div>

                <div
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                    padding: "1.25rem 1.5rem",
                  }}
                >
                  <h4 style={{ color: "var(--primary-dark)", fontSize: "1.05rem", fontWeight: 800, marginBottom: "0.85rem", lineHeight: 1.4 }}>
                    Anti Women Harassment committee in RGUKT, RK Valley Campus
                  </h4>
                  <ul style={{ listStyleType: "disc", paddingLeft: "1.25rem", margin: 0, color: "#334155", fontSize: "0.95rem", lineHeight: 1.8 }}>
                    <li>Chairman</li>
                    <li>Coordinator</li>
                    <li>Committee Members</li>
                  </ul>
                </div>
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
}
