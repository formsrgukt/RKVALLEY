import React from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Common/Breadcrumb";
import StudentsScrollspySidebar from "@/components/Common/StudentsScrollspySidebar";

export const metadata = {
  title: "Campus Life and Facilities | RGUKT RK Valley",
  description: "Comprehensive campus life, residential hostels, sports complex, shopping centers, medical facilities, soft skills edutainment, and campus regulations at RGUKT RK Valley."
};

export default function CampusFacilitiesPage() {
  return (
    <div className="page-view-container">
      <Breadcrumb title="Campus Life &amp; Facilities" category="Students" />

      <div className="container" style={{ paddingBottom: "4rem" }}>
        <div className="page-content-layout">
          {/* Section Navigation Sidebar */}
          <StudentsScrollspySidebar currentPath="/students/facilities" />

          {/* Main Body Content */}
          <article className="page-main-body">
            {/* Header Title Section */}
            <div style={{ borderBottom: "1px solid #e2e8f0", paddingBottom: "1.5rem", marginBottom: "2rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                <span style={{ background: "rgba(122, 0, 25, 0.08)", color: "var(--primary-maroon)", padding: "0.25rem 0.75rem", borderRadius: "999px", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase" }}>
                  Campus Living
                </span>
                <span style={{ background: "#ecfdf5", color: "#047857", padding: "0.25rem 0.75rem", borderRadius: "999px", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase" }}>
                  Fully Residential Township
                </span>
              </div>
              <h1 style={{ color: "var(--primary-dark)", fontSize: "2.25rem", fontWeight: 800, margin: "0.25rem 0 0.75rem" }}>
                Campus Life and Facilities
              </h1>
              <p style={{ fontSize: "1.05rem", color: "#475569", lineHeight: 1.6, margin: 0 }}>
                A vibrant, fully self-contained residential community providing state-of-the-art facilities, healthcare, sports, dining, and well-rounded personality development.
              </p>
            </div>

            {/* Life at RGUKT */}
            <section style={{ marginBottom: "2.75rem", display: "flow-root" }}>
              <h3 style={{ color: "var(--primary-dark)", fontSize: "1.45rem", fontWeight: 800, marginBottom: "0.85rem" }}>
                Life at RGUKT
              </h3>

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

              <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75, marginBottom: "1rem" }}>
                As mentioned earlier, RGUKT is a fully residential environment. This is necessary because most of the rural students come from a geographically distributed wide area and would not be able to commute to the campus. Thus, it is essential to provide a fully residential campus with all of the facilities included such as shops, hospitals, bank, laundry, barbershops, etc. appropriate for a community of about <strong>20,000 people</strong> consisting of <strong>12,000 students, 3,000 faculty and staff and 5,000 service providers</strong> of various types.
              </p>
              <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75, marginBottom: "1rem" }}>
                The Director of the Institute also becomes the pseudo-Mayor of this township dealing with the typical problems of community based living. Since the students are joining the institution at the age of 15 where they are undergoing physical transformation and hormonal changes, being away from home adds to their stress. The local Health Clinic must provide for Psychological Counseling and support.
              </p>
              <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75, margin: 0 }}>
                Many rural households tend to be poor and many of the factors of daily living that we take for granted are not always known, such as using a sit-down toilet as opposed to a squatting toilet and significant additional personal education will be needed to facilitate the integration into the larger community.
              </p>
            </section>

            {/* Life in a Residential Campus */}
            <section style={{ marginBottom: "2.75rem", display: "flow-root" }}>
              <h3 style={{ color: "var(--primary-dark)", fontSize: "1.45rem", fontWeight: 800, marginBottom: "0.85rem" }}>
                Life in a Residential Campus
              </h3>

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

              <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75, marginBottom: "1rem" }}>
                As a fully residential program, all students will stay on the campus. The program is intensive and runs for <strong>2 semesters of 16 weeks of 6 days a week each</strong>. Only <strong>6 weeks of vacation</strong> is permitted: 1 week in Dasara, 1 week during Sankranthi and four weeks in summer. While the program appears intensive, it is also designed to help absorption by making students apply concepts right-then-and-there in class.
              </p>
              <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75, marginBottom: "1rem" }}>
                All education is mediated through the use of Information and Communication technologies. The academic complex is being connected by high speed LAN which extends to each student&apos;s desk and a <strong>laptop is provided to each student right from his or her first year</strong>. Each class of about 50 students will have mentors who will conduct a discourse and discussion around a prerecorded expert lecture. The best part of this learning paradigm is that students will have time in these class sessions to receive the lecture, ask questions, discuss with the help of mentors and apply the concepts to problem solving. <strong>A good student would have no homework!</strong>
              </p>
              <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75, marginBottom: "1rem" }}>
                To keep up with this program and life in general, time is set apart for physical fitness activities. During the first two years all students would attend physical training and exercise each morning and participate in sports in the evening. The daily academic program will consist of 4 periods of just less than 2 hours duration each from 8 AM to 4PM with a lunch break.
              </p>
              <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75, marginBottom: "1.25rem" }}>
                During the evening after dinner, there will be programs in soft skills, reading classics, and viewing selected movie programs from 7.30PM to 10.30PM. This will be a more relaxing and a quiet learning time. Students get to explore their talents in art, drama and music as well. Subsequent year will offer greater flexibility in individual daily schedule.
              </p>

              <div style={{ background: "#f8fafc", border: "1px solid #cbd5e1", borderRadius: "8px", padding: "1.25rem", display: "flex", alignItems: "center", gap: "1rem" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-maroon)" strokeWidth="2" style={{ flexShrink: 0 }}>
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <p style={{ margin: 0, fontSize: "0.92rem", color: "#334155", lineHeight: 1.6 }}>
                  <strong>Separate and secure hostel facilities</strong> will be provided for girls and boys. Food and dining facilities will be according to modern standards.
                </p>
              </div>
            </section>

            {/* Sports & Games */}
            <section style={{ marginBottom: "2.5rem" }}>
              <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "1.5rem" }}>
                <h3 style={{ color: "var(--primary-dark)", fontSize: "1.35rem", fontWeight: 800, marginBottom: "0.6rem" }}>
                  Sports &amp; Games
                </h3>
                <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75, margin: 0 }}>
                  RGUKT provides facilities for both indoor games such as caroms and chess and outdoor games such as volleyball and basketball. Swimming pool facility will be made soon. It is anticipated to hold Inter-campus competitions will also be held.
                </p>
              </div>
            </section>

            {/* Shopping center */}
            <section style={{ marginBottom: "2.5rem" }}>
              <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "1.5rem" }}>
                <h3 style={{ color: "var(--primary-dark)", fontSize: "1.35rem", fontWeight: 800, marginBottom: "0.6rem" }}>
                  Shopping Center
                </h3>
                <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75, margin: 0 }}>
                  To cater to the needs of students, there is a general store, a canteen, a salon and a beauty parlor in every hostel. Students can make use of these services at a reasonable price.
                </p>
              </div>
            </section>

            {/* Extra-curricular activities in RGUKT */}
            <section style={{ marginBottom: "2.5rem" }}>
              <h3 style={{ color: "var(--primary-dark)", fontSize: "1.45rem", fontWeight: 800, marginBottom: "0.75rem" }}>
                Extra-curricular Activities in RGUKT
              </h3>
              <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75, margin: 0 }}>
                RGUKT&apos;s goal is to give students a well-rounded education and doesn&apos;t stop with just giving students an education in the Sciences and Engineering. Students are encouraged to get involved in arts, music, drama, debate, paintings and other elated skills. At this point, there is no full time faculty for these disciplines but it is anticipated to hire full time faculty and visiting faculty also.
              </p>
            </section>

            {/* Soft Skills and Edutainment */}
            <section style={{ marginBottom: "2.5rem" }}>
              <h3 style={{ color: "var(--primary-dark)", fontSize: "1.45rem", fontWeight: 800, marginBottom: "0.75rem" }}>
                Soft Skills and Edutainment
              </h3>
              <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75, marginBottom: "1rem" }}>
                After an evening break consisting of sports and dinner, students are expected to go back to the classes for a wide range of activities involving soft skills and edutainment. These sessions are normally supposed to happen from <strong>7:30PM to 10:30PM</strong>.
              </p>
              <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75 }}>
                The students have access to audio books of classics, both Western and Indian. The Western Classics might include books by Mark Twain, Walter Scott, Dickens and the Indian classics might include the Autobiography of Mahatma Gandhi. Each paragraph in each book is hyperlinked to an audio rendering of that paragraph so that a student can listen to a native speaker reading the paragraph with proper pronunciation and intonation. Thus, as well as reading the classics, the student is also able to learn how certain proper names are pronounced such as San Joaquin Valley. The students also learn how to do touch typing, prepare and participate in debating clubs and read newspapers online. Those students that are taking the remedial classes will miss some of these activities but it is expected that they will have plenty of time to catch up.
              </p>
            </section>

            {/* Health and Safety */}
            <section style={{ marginBottom: "2.5rem" }}>
              <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "1.5rem" }}>
                <h3 style={{ color: "var(--primary-dark)", fontSize: "1.35rem", fontWeight: 800, marginBottom: "0.6rem" }}>
                  Health and Safety
                </h3>
                <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75, margin: 0 }}>
                  RGUKT provides its students and staff all the necessary medical facilities. A medical center with the required facilities is under construction and is anticipated to be operational soon. The center will have <strong>30 beds and 3 doctors</strong>.
                </p>
              </div>
            </section>

            {/* Campus Guidelines and Rules (Note) */}
            <section style={{ marginBottom: "1rem" }}>
              <div style={{ background: "#fffbeb", borderLeft: "5px solid #d97706", borderRadius: "8px", padding: "1.5rem" }}>
                <h4 style={{ color: "#92400e", fontSize: "1.2rem", fontWeight: 800, marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
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
          </article>
        </div>
      </div>
    </div>
  );
}
