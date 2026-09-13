import React from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Common/Breadcrumb";
import StudentsScrollspySidebar from "@/components/Common/StudentsScrollspySidebar";

export const metadata = {
  title: "Smart Classes | RGUKT RK Valley",
  description: "Smart Class Rooms and ICT-mediated learning paradigm at RGUKT RK Valley."
};

export default function SmartClassesPage() {
  return (
    <div className="page-view-container">
      <Breadcrumb title="Smart Classes" category="Students" />

      <div className="container" style={{ paddingBottom: "4rem" }}>
        <div className="page-content-layout">
          {/* Section Navigation Sidebar */}
          <StudentsScrollspySidebar currentPath="/students/smartclasses" />

          {/* Main Body Content */}
          <article className="page-main-body">
            <div style={{ borderBottom: "1px solid #e2e8f0", paddingBottom: "1.5rem", marginBottom: "2rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                <span style={{ background: "rgba(122, 0, 25, 0.08)", color: "var(--primary-maroon)", padding: "0.25rem 0.75rem", borderRadius: "999px", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase" }}>
                  Academics
                </span>
                <span style={{ background: "#ecfdf5", color: "#047857", padding: "0.25rem 0.75rem", borderRadius: "999px", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase" }}>
                  ICT Learning Paradigm
                </span>
              </div>
              <h1 style={{ color: "var(--primary-dark)", fontSize: "2.25rem", fontWeight: 800, margin: "0.25rem 0 0.75rem" }}>
                Smart Classes
              </h1>
            </div>

            <section style={{ marginBottom: "2.5rem", display: "flow-root" }}>
              <h3 style={{ color: "var(--primary-dark)", fontSize: "1.45rem", fontWeight: 800, marginBottom: "1rem" }}>
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

              <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75, marginBottom: "1.25rem", textAlign: "justify" }}>
                The fundamental assumption at RGUKT is that the students will learn more effectively if each of them has a laptop connected to the Internet and have been given the skills for accessing and using the resources of the Internet. For example, the lectures and the text book content and problems to be solved including example problems, are all made available on a server and the student can go back and re-listen or re-reference the material repeatedly, unlike a lecture which can only be heard in real time once. This ability to re-listen provides a great deal of help for those people who are struggling with understanding the lessons because they are missing some basic concepts. The Smart class Room environment also makes it possible for students to work on problems at an individual pace without being left behind in a classroom environment and being lost forever.
              </p>

              <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75, marginBottom: "1.25rem", textAlign: "justify" }}>
                Every student is provided with a personal computer (usually a laptop) from day one and much of the educational experience is complier-mediated. Since getting high quality teachers has always been a problem given the lower salaries the lectures are provided on line by world class teachers and classroom support is provided by domain specialists and home room tutors who play the role of an instructor and teaching assistant in a conventional environment handling a smaller group of students.
              </p>

              <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75, marginBottom: "1.25rem", textAlign: "justify" }}>
                It is expected that all the text books for all the subjects will be online and each problem will be hyperlinked back to the specific content in the textbook so that the student can quickly review the material needed to solve the problem at hand. Every learning unit has one hour of problem solving to reinforce the concepts they have a learned during that period. However not all students are able to solve all the problems within a one hour period. If they are stuck, immediate help is available from the Domain Specialist and Home Room Tutor. Instead of the conventional homework assisted by an untrained parent, the use of immediate help by an expert who knows the problem at hand and can instantaneously provide guidance eliminates much of the wasted effort in following dead end paths.
              </p>

              <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75, marginBottom: "1.25rem", textAlign: "justify" }}>
                In an IT-rich environment, it now becomes possible to do several things that would not have been practical in a traditional educational system. It is now possible to track the progress of each student while he/she solves the problems and see what distinguishes very good students from the students who seem to be struggling. It also becomes possible to get instantaneous feedback from all the students to a wide range of questions from the quality of the food to the quality of the education and quality of the mentors, permitting mid-course correction which is not practical in a conventional classroom environment.
              </p>

              <p style={{ fontSize: "0.98rem", color: "#334155", lineHeight: 1.75, marginBottom: "1.25rem", textAlign: "justify" }}>
                In a Smart Class Room environment, it now becomes possible to administer all the examinations online and provide immediate feedback including an analysis of the errors they made during the test.
              </p>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
}
