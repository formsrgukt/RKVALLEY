"use client";

import React from "react";
import Link from "next/link";

export default function AboutPage() {
  const sectionStyle = {
    background: "#ffffff", 
    border: "1px solid #e2e8f0", 
    borderRadius: "8px", 
    padding: "2rem", 
    boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
    marginBottom: "2rem"
  };

  const headingStyle = {
    color: "var(--primary-maroon)", 
    marginBottom: "1rem", 
    fontSize: "1.4rem", 
    fontWeight: 700, 
    borderBottom: "2px solid #f1f5f9", 
    paddingBottom: "0.5rem"
  };

  const textStyle = {
    color: "#334155", 
    fontSize: "1.05rem", 
    lineHeight: 1.8, 
    marginBottom: "1.5rem"
  };

  const listStyle = {
    ...textStyle,
    paddingLeft: "1.5rem",
    marginBottom: "1.5rem"
  };

  return (
    <div className="page-view-container">
      <div style={{ padding: "0 2rem", width: "100%", maxWidth: "1600px", margin: "0 auto" }}>
        <div className="page-content-layout">
          {/* Index Sidebar */}
          <aside style={{ position: "sticky", top: "100px", height: "fit-content", background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "1.5rem", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
            <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--primary-maroon)", marginBottom: "1rem", borderBottom: "1px solid #f1f5f9", paddingBottom: "0.5rem" }}>On this page</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "0.95rem", lineHeight: 2.2 }}>
              <li><a href="#founding" style={{ color: "var(--primary-dark)", textDecoration: "none" }}>Founding of RGUKT</a></li>
              <li><a href="#why-rgukt" style={{ color: "var(--primary-dark)", textDecoration: "none" }}>Why RGUKT?</a></li>
              <li><a href="#educational-objectives" style={{ color: "var(--primary-dark)", textDecoration: "none" }}>Educational Objectives</a></li>
              <li><a href="#university-objectives" style={{ color: "var(--primary-dark)", textDecoration: "none" }}>Objectives of the University</a></li>
              <li><a href="#leadership" style={{ color: "var(--primary-dark)", textDecoration: "none" }}>Present Leadership</a></li>
              <li><a href="#management" style={{ color: "var(--primary-dark)", textDecoration: "none" }}>Management</a></li>
            </ul>
          </aside>

          {/* Main Content */}
          <article className="page-main-body" style={{ margin: "0 auto", width: "100%" }}>
            <h2 style={{ color: "var(--primary-dark)", marginBottom: "1.5rem", fontSize: "1.8rem", fontWeight: 800 }}>About RGUKT</h2>
            
            <div style={sectionStyle} id="founding">
              <h3 style={headingStyle}>Founding of RGUKT</h3>
              <p style={textStyle}>
                The idea to create RGUKT germinated in April 2007, at a meeting between Prof. D.Raj Reddy and Prof. K.C. Reddy who then took idea to the then Chief Minister of Andhra Pradesh, Dr. Y.S.Rajashekar Reddy. Dr. YSR by then was not happy with the opportunities available to the rural youth and wanted to start a University modeled on IIIT to exclusively concentrate on rural youth in imparting technology oriented higher education for bettering their employment potential.
              </p>
              <p style={textStyle}>
                A Task Force was created under the Chairmanship of Prof. K.C. Reddy, the then chairman APSCHE which recommended for establishing a technological University to benefit rural youth.
              </p>
              <p style={textStyle}>
                In March of 2008, the AP Government created RGUKT with three campuses through an Act of the Legislature as a full-fledged university which would initially admit approximately the top 1% of the rural students into the three residential campuses located at RK Valley, Basara and Nuzvid.
              </p>
              <p style={textStyle}>
                The first batch of about 6,500 tenth class graduates was admitted into the six year integrated B.Tech program in August of 2008. The initial selection was based on the &apos;Mandal Best&apos; model wherein students securing the top marks in SSC examination in every mandal were selected.
              </p>
              <p style={textStyle}>
                Prof. Raj Reddy as the founding Chancellor of the University for a decade guided the educational philosophy of the University and also moulded the academic journey to maintain not only its uniqueness but create significant impact on the quality of outcome and the student employment profile that later transformed their lives.
              </p>
            </div>

            <div style={sectionStyle} id="why-rgukt">
              <h3 style={headingStyle}>Why RGUKT?</h3>
              <p style={textStyle}>
                A person born into a low income, rural family in India struggles to aspire to study at an IIT or aim to be selected into the IAS. This is true in many cases. The reason for this is because they start with many inherent disadvantages such as:
              </p>
              <ul style={listStyle}>
                <li>The educational level of the parents</li>
                <li>The quality of teachers and the schools they go to</li>
                <li>The ability to pay for coaching classes, and;</li>
                <li>The time and effort devoted to study the material;</li>
              </ul>
              <p style={textStyle}>
                It has been observed that, on an average, the marks obtained by the students in rural India are about 10-20% lower than the marks of students studying in private schools of urban India. As a result, most of the seats for higher education get filled by students from these private schools when the basis of selection is the marks obtained. Even if a rural student is capable, the educational system doesn&apos;t allow him to go ahead. The goal of RGUKT is to help remedy this unfortunate situation.
              </p>
              <p style={textStyle}>
                The other issue RGUKT is attempting to tackle is the issue of &quot;Early Specialization&quot;. In most cases, once a student goes into a Junior College for a pre-university program, he gets routed through coaching factories that drills him to get the top rank in entrance tests which will enable him to secure a seat in a good college or university. This kind of intensive coaching makes students uni-dimensional with very little understanding of anything other than what they have been coached in.
              </p>
              <p style={textStyle}>
                Once students get into professionals colleges, they don&apos;t get any exposure to Humanities and Social Sciences for the rest of their lives. RGUKT attempts to deal with this issue by giving students direct admission into a 6-year integrated program after class X. Here, they are not subjected to two years of torture preparing for entrance tests. Since these students are already gifted and belong to the top 1%, it is expected that they will do well naturally and don&apos;t need other entrance tests.
              </p>
              <p style={textStyle}>
                Education at RGUKT is based on the intensive use of Information Technology. Every student has access to a laptop and education uses the latest advances in Learning Sciences such as Learning by Example, Learning by Doing and Problem-based Learning. Online lectures are provided and lectures are followed by problem solving sessions that reinforce what has been covered in each lecture.
              </p>
            </div>

            <div style={sectionStyle} id="educational-objectives">
              <h3 style={headingStyle}>RGUKT Educational Objectives</h3>
              <p style={textStyle}>
                The primary objective of establishing RGUKT was to provide high quality educational opportunities for the aimed rural youth of Andhra Pradesh. The initial goal was that at least the top 1 % of the rural graduates would be given the opportunity to study at RGUKT.
              </p>
              <p style={textStyle}>
                The top 1% of rural graduates is around 6,000 to 7,000 per year. Thus, the three campuses would need residential accommodation for about 36,000 students for the six year integrated program.
              </p>
              <p style={textStyle}>
                At present, most universities in India and in Andhra Pradesh follow the affiliated college structure model where the main role of the university is to set the curriculum and conduct examinations to ensure that the students have indeed learned the material prescribed in the curriculum. Most colleges have an entering class of 100-300. Having an entry class of 6,000 students leads to issues of scale. This is unique to RGUKT and is being attempted for the first time in India. In the US, several of the larger universities do have enrolments of 20,000 to 30,000. However not all of them tend to be residential universities. Thus RGUKT, as a green field university, represents a unique experiment in the educational arena.
              </p>
              <p style={textStyle}>
                The assumption is that ICT (Information and Communication Technologies), will permit the scaling of the learning environments by one to two orders of magnitude is currently possible.
              </p>
              <p style={textStyle}>
                Another key educational objective of RGUKT is to use advances in learning sciences and explore the use of modern cognitive science tools in education and learning.
              </p>
              <p style={textStyle}>
                Phrases such as &quot;Learning by Example&quot;, &quot;Learning by Doing&quot;, &quot;Problem-Based Learning&quot;, &quot;Self-Paced Learning&quot;, etc become facilitated when every student can be assured to have a personal computer that does not have to be shared with anyone else.
              </p>
            </div>

            <div style={sectionStyle} id="university-objectives">
              <h3 style={headingStyle}>Objectives of the University</h3>
              <ul style={listStyle}>
                <li>To impart to each student broad skills of Learning to Learn, Learning to Think and Learning to Live</li>
                <li>To reinforce core values of integrity, respect for all, and care for environment</li>
                <li>To disseminate and advance knowledge in the emerging fields such as Information Technology, Nanotechnology, etc</li>
                <li>To make special provisions for integrated courses including Humanities, Social Sciences and other interdisciplinary areas to impart broad-based education including soft skills.</li>
                <li>To function as a resource center for knowledge management and entrepreneurship development in the emerging technologies.</li>
                <li>To establish close linkage with industry to make teaching and research at the institutes relevant to the needs of the economy, at national and global levels.</li>
              </ul>
            </div>

            <div style={sectionStyle} id="leadership">
              <h3 style={headingStyle}>Present Leadership</h3>
              <ul style={listStyle}>
                <li>Prof. Raj Reddy continues to be the chief mentor guiding the university.</li>
                <li>Prof. K.C. Reddy, one of the architects and founding Vice-Chancellor of the university, returned to the University as its Chancellor in 2019. His farsighted vision, dynamic leadership and commitment to empower rural youth created a vibrant learning environment for meeting more successfully the mission of the University.</li>
                <li>Prof. N. Balakrishnan, IISc Banglore, Dr. Sudha Murthy, Chairperson, Infosys Foundation, Prof. K. N. Satyanarayana, Director, IIT Tirupathi, Prof. P.J.Narayanan, Director, IIIT Hyderabad as learned members on the Governing council and eminent educationists on the Academic council including Prof. B. S. Murthy, Director IIT Hyderabad, Prof. Kavi Mahesh, Director, IIIT Dharwad and Dr.Vijaya Chandru, INAE distinguished Technologist, besides prominent industry experts have been guiding and supporting in framing academic policies of the university.</li>
              </ul>
            </div>

            <div style={sectionStyle} id="management">
              <h3 style={headingStyle}>Management of the University</h3>
              <p style={textStyle}>
                The management of the university is headed by the distinguished academician and able academic administrator, Prof. M. Vijaya Kumar as the Vice-Chancellor (FAC) chartering the university on the indelible legacy left by the earlier Vice-Chancellors Prof. V. Raj Kumar and Prof. V. Ramachandra Raju.
              </p>
              <p style={textStyle}>
                The leaderships of the university is successful in finding benevolent, learner centered and committed academicians to head the four campus institutes of the university:
              </p>
              <ul style={listStyle}>
                <li>Prof. Matli Chandrasekhar, Director, RGUKT Nuzvid campus</li>
                <li>Prof. A V S S Kumara Swami Gupta, Director, RGUKT RK Valley campus</li>
                <li>Prof. Bhaskar Patel, Director, RGUKT Ongole campus</li>
                <li>Prof. K. V. G. D. Balaji, Director, RGUKT Srikakulam campus</li>
              </ul>
            </div>

          </article>
        </div>
      </div>
    </div>
  );
}
