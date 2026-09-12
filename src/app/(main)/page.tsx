import React from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata = {
  title: "About RGUKT RK Valley | Premier Technological University",
  description: "Learn about the history, vision, Act 18 of 2008, and the 6-Year Integrated B.Tech model at RGUKT RK Valley."
};

export default function AboutPage() {
  return (
    <div className="page-view-container">
      <Breadcrumb title="About RGUKT" category="About Institute" />

      <div className="container">
        <div className="page-content-layout">
          <aside className="page-sidebar" aria-label="Section Navigation">
            <h4 className="sidebar-menu-title">About RGUKT</h4>
            <ul className="sidebar-nav-list">
              <li><a href="#founding" className="sidebar-link">Founding of RGUKT</a></li>
              <li><a href="#educational" className="sidebar-link">RGUKT Educational Objectives</a></li>
              <li><a href="#objectives" className="sidebar-link">Objectives of the University</a></li>
              <li><a href="#why" className="sidebar-link">Why RGUKT?</a></li>
              <li><a href="#leadership" className="sidebar-link">Present Leadership & Management</a></li>
            </ul>
          </aside>

          <article className="page-main-body">
            <h2 style={{ color: "var(--primary-dark)", marginBottom: "1.5rem", fontSize: "1.8rem", fontWeight: 800 }}>About RGUKT</h2>
            
            <section id="founding" style={{ marginBottom: "2rem", scrollMarginTop: "100px" }}>
              <h3 style={{ color: "var(--primary-maroon)", marginBottom: "1.25rem", fontSize: "1.2rem", fontWeight: 700, borderBottom: "2px solid #f1f5f9", paddingBottom: "0.5rem" }}>Founding of RGUKT</h3>
              <p style={{ color: "#334155", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1rem" }}>
                The idea to create RGUKT germinated in April 2007, at a meeting between Prof. D. Raj Reddy and Prof. K.C. Reddy who then took the idea to the then Chief Minister of Andhra Pradesh, Dr. Y.S. Rajashekar Reddy. Dr. YSR by then was not happy with the opportunities available to the rural youth and wanted to start a University modeled on IIIT to exclusively concentrate on rural youth in imparting technology-oriented higher education for bettering their employment potential.
              </p>
              <p style={{ color: "#334155", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1rem" }}>
                A Task Force was created under the Chairmanship of Prof. K.C. Reddy, the then chairman APSCHE which recommended for establishing a technological University to benefit rural youth.
              </p>
              <p style={{ color: "#334155", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1rem" }}>
                In March of 2008, the AP Government created RGUKT with three campuses through an Act of the Legislature as a full-fledged university which would initially admit approximately the top 1% of the rural students into the three residential campuses located at RK Valley, Basara and Nuzvid.
              </p>
              <p style={{ color: "#334155", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1rem" }}>
                The first batch of about 6,500 tenth class graduates was admitted into the six year integrated B.Tech program in August of 2008. The initial selection was based on the &apos;Mandal Best&apos; model wherein students securing the top marks in SSC examination in every mandal were selected.
              </p>
              <p style={{ color: "#334155", fontSize: "0.95rem", lineHeight: 1.8 }}>
                Prof. Raj Reddy as the founding Chancellor of the University for a decade guided the educational philosophy of the University and also moulded the academic journey to maintain not only its uniqueness but create significant impact on the quality of outcome and the student employment profile that later transformed their lives.
              </p>
            </section>

            <section id="why" style={{ marginBottom: "2rem", scrollMarginTop: "100px" }}>
              <h3 style={{ color: "var(--primary-maroon)", marginBottom: "1.25rem", fontSize: "1.2rem", fontWeight: 700, borderBottom: "2px solid #f1f5f9", paddingBottom: "0.5rem" }}>Why RGUKT?</h3>
              <p style={{ color: "#334155", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1rem" }}>
                A person born into a low income, rural family in India struggles to aspire to study at an IIT or aim to be selected into the IAS. This is true in many cases. The reason for this is because they start with many inherent disadvantages such as:
              </p>
              <ul style={{ color: "#334155", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.5rem", paddingLeft: "1.5rem" }}>
                <li>The educational level of the parents</li>
                <li>The quality of teachers and the schools they go to</li>
                <li>The ability to pay for coaching classes, and;</li>
                <li>The time and effort devoted to study the material;</li>
              </ul>
              <p style={{ color: "#334155", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1rem" }}>
                It has been observed that, on an average, the marks obtained by the students in rural India are about 10-20% lower than the marks of students studying in private schools of urban India. As a result, most of the seats for higher education get filled by students from these private schools when the basis of selection is the marks obtained. Even if a rural student is capable, the educational system doesn&apos;t allow him to go ahead. The goal of RGUKT is to help remedy this unfortunate situation.
              </p>
              <p style={{ color: "#334155", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1rem" }}>
                The other issue RGUKT is attempting to tackle is the issue of &quot;Early Specialization&quot;. In most cases, once a student goes into a Junior College for a pre-university program, he gets routed through coaching factories that drills him to get the top rank in entrance tests which will enable him to secure a seat in a good college or university. This kind of intensive coaching makes students uni-dimensional with very little understanding of anything other than what they have been coached in.
              </p>
              <p style={{ color: "#334155", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1rem" }}>
                Once students get into professionals colleges, they don&apos;t get any exposure to Humanities and Social Sciences for the rest of their lives. RGUKT attempts to deal with this issue by giving students direct admission into a 6-year integrated program after class X. Here, they are not subjected to two years of torture preparing for entrance tests. Since these students are already gifted and belong to the top 1%, it is expected that they will do well naturally and don&apos;t need other entrance tests.
              </p>
              <p style={{ color: "#334155", fontSize: "0.95rem", lineHeight: 1.8 }}>
                Education at RGUKT is based on the intensive use of Information Technology. Every student has access to a laptop and education uses the latest advances in Learning Sciences such as Learning by Example, Learning by Doing and Problem-based Learning. Online lectures are provided and lectures are followed by problem solving sessions that reinforce what has been covered in each lecture.
              </p>
            </section>

            <img src="/images/campus_image.png" alt="RGUKT RK Valley Campus View" style={{ borderRadius: "12px", marginBottom: "3rem", width: "100%", maxHeight: "420px", objectFit: "cover", boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }} />

            <section id="educational" style={{ marginBottom: "2rem", scrollMarginTop: "100px" }}>
              <h3 style={{ color: "var(--primary-maroon)", marginBottom: "1.25rem", fontSize: "1.2rem", fontWeight: 700, borderBottom: "2px solid #f1f5f9", paddingBottom: "0.5rem" }}>RGUKT Educational Objectives</h3>
              <p style={{ color: "#334155", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1rem" }}>
                The primary objective of establishing RGUKT was to provide high quality educational opportunities for the aimed rural youth of Andhra Pradesh. The initial goal was that at least the top 1 % of the rural graduates would be given the opportunity to study at RGUKT. The top 1% of rural graduates is around 6,000 to 7,000 per year. Thus, the three campuses would need residential accommodation for about 36,000 students for the six year integrated program.
              </p>
              <p style={{ color: "#334155", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1rem" }}>
                At present, most universities in India and in Andhra Pradesh follow the affiliated college structure model where the main role of the university is to set the curriculum and conduct examinations to ensure that the students have indeed learned the material prescribed in the curriculum. Most colleges have an entering class of 100-300. Having an entry class of 6,000 students leads to issues of scale. This is unique to RGUKT and is being attempted for the first time in India. In the US, several of the larger universities do have enrolments of 20,000 to 30,000. However not all of them tend to be residential universities. Thus RGUKT, as a green field university, represents a unique experiment in the educational arena.
              </p>
              <p style={{ color: "#334155", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1rem" }}>
                The assumption is that ICT (Information and Communication Technologies), will permit the scaling of the learning environments by one to two orders of magnitude is currently possible. Another key educational objective of RGUKT is to use advances in learning sciences and explore the use of modern cognitive science tools in education and learning.
              </p>
              <p style={{ color: "#334155", fontSize: "0.95rem", lineHeight: 1.8 }}>
                Phrases such as &quot;Learning by Example&quot;, &quot;Learning by Doing&quot;, &quot;Problem-Based Learning&quot;, &quot;Self-Paced Learning&quot;, etc become facilitated when every student can be assured to have a personal computer that does not have to be shared with anyone else.
              </p>
            </section>

            <section id="objectives" style={{ marginBottom: "2rem", scrollMarginTop: "100px" }}>
              <h3 style={{ color: "var(--primary-maroon)", marginBottom: "1.25rem", fontSize: "1.2rem", fontWeight: 700, borderBottom: "2px solid #f1f5f9", paddingBottom: "0.5rem" }}>Objectives of the University</h3>
              <ul style={{ color: "#334155", fontSize: "0.95rem", lineHeight: 1.8, paddingLeft: "1.5rem" }}>
                <li style={{ marginBottom: "0.5rem" }}>To impart to each student broad skills of Learning to Learn, Learning to Think and Learning to Live</li>
                <li style={{ marginBottom: "0.5rem" }}>To reinforce core values of integrity, respect for all, and care for environment</li>
                <li style={{ marginBottom: "0.5rem" }}>To disseminate and advance knowledge in the emerging fields such as Information Technology, Nanotechnology, etc</li>
                <li style={{ marginBottom: "0.5rem" }}>To make special provisions for integrated courses including Humanities, Social Sciences and other interdisciplinary areas to impart broad-based education including soft skills.</li>
                <li style={{ marginBottom: "0.5rem" }}>To function as a resource center for knowledge management and entrepreneurship development in the emerging technologies.</li>
                <li style={{ marginBottom: "0.5rem" }}>To establish close linkage with industry to make teaching and research at the institutes relevant to the needs of the economy, at national and global levels.</li>
              </ul>
            </section>

            <section id="leadership" style={{ marginBottom: "2rem", scrollMarginTop: "100px" }}>
              <h3 style={{ color: "var(--primary-maroon)", marginBottom: "1.25rem", fontSize: "1.2rem", fontWeight: 700, borderBottom: "2px solid #f1f5f9", paddingBottom: "0.5rem" }}>Present Leadership & Management</h3>
              <p style={{ color: "#334155", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1rem" }}>
                <strong>Prof. Raj Reddy</strong> continues to be the chief mentor guiding the university. <strong>Prof. K.C. Reddy</strong>, one of the architects and founding Vice-Chancellor of the university, returned to the University as its Chancellor in 2019. His farsighted vision, dynamic leadership and commitment to empower rural youth created a vibrant learning environment for meeting more successfully the mission of the University.
              </p>
              <p style={{ color: "#334155", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1rem" }}>
                Prof. N. Balakrishnan, IISc Banglore, Dr. Sudha Murthy, Chairperson, Infosys Foundation, Prof. K. N. Satyanarayana, Director, IIT Tirupathi, Prof. P.J.Narayanan, Director, IIIT Hyderabad as learned members on the Governing council and eminent educationists on the Academic council including Prof. B. S. Murthy, Director IIT Hyderabad, Prof. Kavi Mahesh, Director, IIIT Dharwad and Dr.Vijaya Chandru, INAE distinguished Technologist, besides prominent industry experts have been guiding and supporting in framing academic policies of the university.
              </p>
              <p style={{ color: "#334155", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1rem" }}>
                The management of the university is headed by the distinguished academician and able academic administrator, <strong>Prof. M. Vijaya Kumar</strong> as the Vice-Chancellor (FAC) chartering the university on the indelible legacy left by the earlier Vice-Chancellors Prof. V. Raj Kumar and Prof. V. Ramachandra Raju.
              </p>
              <p style={{ color: "#334155", fontSize: "0.95rem", lineHeight: 1.8 }}>
                The leaderships of the university is successful in finding benevolent, learner centered and committed academicians to head the four campus institutes of the university:
              </p>
              <ul style={{ color: "#334155", fontSize: "0.95rem", lineHeight: 1.8, paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
                <li style={{ marginBottom: "0.5rem" }}>Prof. Matli Chandrasekhar, Director, RGUKT Nuzvid campus</li>
                <li style={{ marginBottom: "0.5rem" }}>Prof. A V S S Kumara Swami Gupta, Director, RGUKT RK Valley campus</li>
                <li style={{ marginBottom: "0.5rem" }}>Prof. Bhaskar Patel, Director, RGUKT Ongole campus</li>
                <li style={{ marginBottom: "0.5rem" }}>Prof. K. V. G. D. Balaji, Director, RGUKT Srikakulam campus</li>
              </ul>
            </section>

          </article>
        </div>
      </div>
    </div>
  );
}
