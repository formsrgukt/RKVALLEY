"use client";

import React from "react";

export default function StrategyDocumentPage() {
  return (
    <div className="container" style={{ padding: "4rem 1rem", width: "100%", margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
        <h1 style={{ color: "var(--primary-dark)", fontSize: "2.2rem", fontWeight: 800, margin: 0 }}>
          Strategy Document
        </h1>
        <a 
          href="https://www.rguktrkv.ac.in/pdfdoc/StrategyDocument1005.pdf"
          target="_blank"
          rel="noopener noreferrer"
          data-pdf-title="Strategy Document"
          className="btn btn-primary"
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
          <span>View Strategic Plan Document</span>
        </a>
      </div>

      <div style={{ background: "#ffffff", padding: "3rem", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)", lineHeight: 1.75, color: "#334155", fontSize: "1.05rem" }}>
        
        <h2 style={{ color: "var(--primary-maroon)", fontSize: "1.45rem", marginBottom: "1rem", fontWeight: 700 }}>
          1. Origins
        </h2>
        <p style={{ marginBottom: "2rem" }}>
          The establishment of Rajiv Gandhi University of Knowledge Technologies is the vision of late
          Dr.Y.S.Rajasekhara Reddy and got translated into a reality by the founding of the University
          on 28.04.2008 through the Act No.18 of 2008 of the Andhra Pradesh State Legislature with its
          three constituent institutes in the three regions of erstwhile Andhra Pradesh, each located at
          Basar (Adilabad District in Telangana Region), Nuzvid (Krishna District in Andhra Region)
          and Rajiv Knowledge Valley (Kadapa District in Rayalaseema Region). After bifurcation of
          the State, RGUKT also got bifurcated and the institutes located at Nuzvid and Idupulapaya
          came under RGUKT-Andhra Pradesh. During the Academic Year 2016-17, two more campuses
          at Srikakulam and Ongole were added to RGUKT-AP.
        </p>

        <h2 style={{ color: "var(--primary-maroon)", fontSize: "1.45rem", marginBottom: "1rem", fontWeight: 700 }}>
          2. Enshrining the Vision and Mission
        </h2>
        <p style={{ marginBottom: "1.5rem" }}>
          RGUKT from the beginning has been preserving the vision of the legendary founder Late Dr.
          Y. S. Rajasekhar Reddy Garu, the then Chief Minister of Andhra Pradesh, who always gave &lsquo;a
          preferential option for the poor, meritorious, rural youth&rsquo;, for whom the University was
          founded.
        </p>
        
        <h3 style={{ fontSize: "1.25rem", color: "var(--primary-dark)", fontWeight: 700, marginTop: "1.5rem", marginBottom: "0.5rem" }}>
          A) Vision:
        </h3>
        <p style={{ marginBottom: "1.5rem" }}>
          To transform rural youth into global leaders and innovators in science, technology and
          Multidisciplinary areas and contribute to the maximisation of welfare of humanity.
        </p>

        <h3 style={{ fontSize: "1.25rem", color: "var(--primary-dark)", fontWeight: 700, marginTop: "1.5rem", marginBottom: "0.5rem" }}>
          B) Mission:
        </h3>
        <p style={{ marginBottom: "1rem" }}>
          The main objective of the University is to provide quality technical education with the
          goal of inclusiveness in terms of access to the meritorious rural youth, who are
          perennially deprived of the opportunities; through an innovative blend of modern
          computer assisted, learner-centric instructional methodology along with rigorous
          traditional teaching in a world class ambience. The mission of the university is
          envisioned through the commitment of:
        </p>
        <ul style={{ paddingLeft: "1.5rem", marginBottom: "2.5rem", display: "flex", flexDirection: "column", gap: "0.5rem", listStyleType: "circle" }}>
          <li>Imparting each student broad skills such as Learning to Learn, Learning to think and Learning to Live.</li>
          <li>Reinforcing core values of integrity, respect for all, and care for environment.</li>
          <li>Reinforcing dissemination of advanced knowledge in the emerging fields such as Information Technology, etc.</li>
          <li>Making special provisions for integrated courses including humanities, social sciences and other interdisciplinary areas to impart broad-based education including soft skills.</li>
          <li>Functioning as a resource centre for knowledge management and entrepreneurship development in the emerging technologies.</li>
          <li>Establishing close linkages with industry to make teaching and research at the institute relevant to the needs of the economy, at regional and national levels.</li>
          <li>Equalizing opportunity for those that do not get quality education.</li>
        </ul>

        <h2 style={{ color: "var(--primary-maroon)", fontSize: "1.45rem", marginBottom: "1rem", fontWeight: 700 }}>
          3. Objectives of the University
        </h2>
        <p style={{ marginBottom: "1rem" }}>
          The following are the objectives of the University, as enshrined in the legislation:
        </p>
        <ul style={{ paddingLeft: "1.5rem", marginBottom: "2.5rem", display: "flex", flexDirection: "column", gap: "0.5rem", listStyleType: "lower-alpha" }}>
          <li>To disseminate and advance knowledge in the fields of Information Technology, Nano-Technology, Solar Energy Technology, Biotechnology and other emerging Technologies;</li>
          <li>to create institutes and /or centres of excellence for imparting state of the art education, training and research in the fields of Information technology, Nano Technology, solar energy Technology, Biotechnology and other emerging areas;</li>
          <li>to develop innovative patterns of teaching, training, curriculum design and methods of testing at various levels of educational accomplishment to attain global education standards;</li>
          <li>to make special provisions for integrated courses in humanities, social sciences and interdisciplinary areas, so as to promote use of technologies for larger benefit of mankind, particularly people living in developing countries;</li>
          <li>To function as a resource centres for knowledge management and entrepreneurship development in the fields of Information Technology, Nano Technology, Solar Energy Technology, Biotechnology and other emerging areas;</li>
          <li>To provide for inter-relationships for national and global participation in the fields of Information Technology, Nano Technology, Solar Energy Technology, Biotechnology and other emerging areas and its allied fields; and</li>
          <li>To establish close linkage with industry to make teaching and research at the institute relevant to the needs of the economy at national and global level.</li>
        </ul>

        <h2 style={{ color: "var(--primary-maroon)", fontSize: "1.45rem", marginBottom: "1rem", fontWeight: 700, marginTop: "2.5rem" }}>
          4. Quality Policy
        </h2>
        <p style={{ marginBottom: "2.5rem" }}>
          To impart world class engineering education to the students of the University through
          highly focused teaching &ndash; learning methodology optimising resources.
        </p>

        <h2 style={{ color: "var(--primary-maroon)", fontSize: "1.45rem", marginBottom: "1rem", fontWeight: 700 }}>
          5. Admission Procedure
        </h2>
        <p style={{ marginBottom: "1rem" }}>
          Keeping in view the basic philosophy and objective with which RGUKT was started as a
          unique model to empower meritorious rural youth through quality professional education, by
          following the model of Mandal best based admissions, admitting students by adding
          appropriate deprivation score to the students who studied in Government schools. Scientific
          studies are carried out to identify deprivation in education in AP and compensate there by
          achieving inclusivity. During 2020-21 and 2021-22, the University conducted common
          entrance test, as 10th class Board Examinations could not be held due to COVID. Presently,
          around 25000 students are pursuing their six year integrated educational programmes in
          engineering with an annual intake of 4400 students at the four campuses. In addition, the
          university is also offering M.Tech and Ph.D programmes.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          The University Grants Commission has accorded recognition under 12(B) of UGC Act (vide
          UGC letter, dated 12.06.2020) making the university eligible for receiving central financial
          assistance, a feather in the cap, after a decade of its establishment.
        </p>

        <h2 style={{ color: "var(--primary-maroon)", fontSize: "1.45rem", marginBottom: "1rem", fontWeight: 700 }}>
          6. Curricular Intercessions:
        </h2>
        
        <h3 style={{ fontSize: "1.25rem", color: "var(--primary-dark)", fontWeight: 700, marginTop: "1.5rem", marginBottom: "0.5rem" }}>
          A. Courses Offered:
        </h3>
        <p style={{ marginBottom: "1.5rem" }}>
          <strong>The Undergraduate Programme:</strong> The University predominantly offers 6-Year integrated
          programme comprising of 2-year Pre-University programme and 4-year B.Tech programme.
          The 6-year integrated B.Tech programme is offered in the following seven Engineering majors:
        </p>

        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", maxWidth: "600px", borderCollapse: "collapse", border: "2px solid #cbd5e1", margin: "0 auto" }}>
            <thead>
              <tr style={{ background: "#f8fafc", borderBottom: "2px solid #cbd5e1" }}>
                <th style={{ padding: "1rem", textAlign: "center", borderRight: "2px solid #cbd5e1", width: "80px", color: "var(--primary-dark)" }}>S.No.</th>
                <th style={{ padding: "1rem", textAlign: "center", color: "var(--primary-dark)" }}>Branch</th>
              </tr>
            </thead>
            <tbody>
              {[
                { no: 1, name: "Chemical Engineering" },
                { no: 2, name: "Civil Engineering" },
                { no: 3, name: "Computer Science Engineering" },
                { no: 4, name: "Electrical and Electronics Engineering" },
                { no: 5, name: "Electronics and Communication Engineering" },
                { no: 6, name: "Materials and Metallurgical Engineering" },
                { no: 7, name: "Mechanical Engineering" },
              ].map((branch, index) => (
                <tr key={branch.no} style={{ borderBottom: "2px solid #cbd5e1", background: index % 2 === 0 ? "#ffffff" : "#f8fafc" }}>
                  <td style={{ padding: "1rem", textAlign: "center", borderRight: "2px solid #cbd5e1" }}>{branch.no}</td>
                  <td style={{ padding: "1rem", textAlign: "center" }}>{branch.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={{ marginBottom: "1.5rem" }}>
          Apart from Majors in engineering disciplines, there is scope for doing a Minor in other branches
          of engineering or Science or Management or Humanities and Social Sciences including
          classical performing arts streams. Flexibility built in the curriculum is along the lines of best
          of the world universities and is mainly to provide wider choices to students in studies, paving
          way for their holistic personality development and prosper in varied career paths.
        </p>

        <p style={{ marginBottom: "1.5rem" }}>
          <strong>Introduction of minors and open Electives:</strong> In consonance with New Education Policy, 2020,
          RGUKT has introduced multidisciplinary courses in all the engineering programs from the
          academic year 2021-22. Open Electives are being offered from the academic year 2021-22 to
          make all the programmes truly multidisciplinary. A few of the courses offered as open electives
          are:
        </p>

        <div style={{ overflowX: "auto", marginBottom: "1.5rem" }}>
          <table style={{ width: "100%", maxWidth: "800px", borderCollapse: "collapse", border: "2px solid #cbd5e1", margin: "0 auto" }}>
            <tbody>
              <tr style={{ borderBottom: "2px solid #cbd5e1" }}>
                <td style={{ padding: "1rem", textAlign: "center", borderRight: "2px solid #cbd5e1", width: "40px" }}>1</td>
                <td style={{ padding: "1rem", textAlign: "center", borderRight: "2px solid #cbd5e1", width: "40%" }}>Robotics and artificial intelligence</td>
                <td style={{ padding: "1rem", textAlign: "center", borderRight: "2px solid #cbd5e1", width: "40px" }}>6</td>
                <td style={{ padding: "1rem", textAlign: "center", width: "40%" }}>Bioinformatics</td>
              </tr>
              <tr style={{ borderBottom: "2px solid #cbd5e1", background: "#f8fafc" }}>
                <td style={{ padding: "1rem", textAlign: "center", borderRight: "2px solid #cbd5e1" }}>2</td>
                <td style={{ padding: "1rem", textAlign: "center", borderRight: "2px solid #cbd5e1" }}>Internet of Things (IoT)</td>
                <td style={{ padding: "1rem", textAlign: "center", borderRight: "2px solid #cbd5e1" }}>7</td>
                <td style={{ padding: "1rem", textAlign: "center" }}>Bioengineering</td>
              </tr>
              <tr style={{ borderBottom: "2px solid #cbd5e1" }}>
                <td style={{ padding: "1rem", textAlign: "center", borderRight: "2px solid #cbd5e1" }}>3</td>
                <td style={{ padding: "1rem", textAlign: "center", borderRight: "2px solid #cbd5e1" }}>Micro Electronics Devices -Fabrication Techniques</td>
                <td style={{ padding: "1rem", textAlign: "center", borderRight: "2px solid #cbd5e1" }}>8</td>
                <td style={{ padding: "1rem", textAlign: "center" }}>Entrepreneurship</td>
              </tr>
              <tr style={{ borderBottom: "2px solid #cbd5e1", background: "#f8fafc" }}>
                <td style={{ padding: "1rem", textAlign: "center", borderRight: "2px solid #cbd5e1" }}>4</td>
                <td style={{ padding: "1rem", textAlign: "center", borderRight: "2px solid #cbd5e1" }}>Nanotechnology</td>
                <td style={{ padding: "1rem", textAlign: "center", borderRight: "2px solid #cbd5e1" }}>9</td>
                <td style={{ padding: "1rem", textAlign: "center" }}>Financial Management</td>
              </tr>
              <tr style={{ borderBottom: "2px solid #cbd5e1" }}>
                <td style={{ padding: "1rem", textAlign: "center", borderRight: "2px solid #cbd5e1" }}>5</td>
                <td style={{ padding: "1rem", textAlign: "center", borderRight: "2px solid #cbd5e1" }}>Data Sciences</td>
                <td style={{ padding: "1rem", textAlign: "center", borderRight: "2px solid #cbd5e1" }}>10</td>
                <td style={{ padding: "1rem", textAlign: "center" }}>Indian Economic Policy and Development</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={{ marginBottom: "2.5rem" }}>
          The syllabi for these courses was designed by separate Boards of Studies and approved by the
          Academic Council. In the next level, the University proposes to start a minor diploma,
          comprising a few of these minors which could be grouped together. At the third level, the
          University proposes to start an advanced diploma comprising a few of these minors which
          could be grouped for a relevant programme.
        </p>

        <p style={{ marginBottom: "1.5rem" }}>
          <strong>M.Tech programmes:</strong> With the approval of the Academic Council and Governing Council of
          the University, the following M.Tech programmes are reintroduced in the following areas w.e.f
          the academic year 2021-22.
        </p>

        <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
          <table style={{ width: "100%", maxWidth: "800px", borderCollapse: "collapse", border: "2px solid #cbd5e1", margin: "0 auto" }}>
            <thead>
              <tr style={{ background: "#f8fafc", borderBottom: "2px solid #cbd5e1" }}>
                <th style={{ padding: "1rem", textAlign: "center", borderRight: "2px solid #cbd5e1", width: "80px", color: "var(--primary-dark)" }}>S.No</th>
                <th style={{ padding: "1rem", textAlign: "center", borderRight: "2px solid #cbd5e1", color: "var(--primary-dark)" }}>Department</th>
                <th style={{ padding: "1rem", textAlign: "center", borderRight: "2px solid #cbd5e1", color: "var(--primary-dark)" }}>Discipline</th>
                <th style={{ padding: "1rem", textAlign: "center", color: "var(--primary-dark)" }}>Campus</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "2px solid #cbd5e1" }}>
                <td style={{ padding: "1rem", textAlign: "center", borderRight: "2px solid #cbd5e1" }}>1</td>
                <td style={{ padding: "1rem", textAlign: "center", borderRight: "2px solid #cbd5e1" }}>Mechanical Engineering</td>
                <td style={{ padding: "1rem", textAlign: "center", borderRight: "2px solid #cbd5e1" }}>Engineering Analysis and Design</td>
                <td style={{ padding: "1rem", textAlign: "center" }}>RGUKT-NUZVID</td>
              </tr>
              <tr style={{ borderBottom: "2px solid #cbd5e1", background: "#f8fafc" }}>
                <td style={{ padding: "1rem", textAlign: "center", borderRight: "2px solid #cbd5e1" }}>2</td>
                <td style={{ padding: "1rem", textAlign: "center", borderRight: "2px solid #cbd5e1" }}>Civil Engineering</td>
                <td style={{ padding: "1rem", textAlign: "center", borderRight: "2px solid #cbd5e1" }}>Transportation Engineering</td>
                <td style={{ padding: "1rem", textAlign: "center" }}>RGUKT-NUZVID</td>
              </tr>
              <tr style={{ borderBottom: "2px solid #cbd5e1" }}>
                <td style={{ padding: "1rem", textAlign: "center", borderRight: "2px solid #cbd5e1" }}>3</td>
                <td style={{ padding: "1rem", textAlign: "center", borderRight: "2px solid #cbd5e1" }}>Computer Science and Engineering</td>
                <td style={{ padding: "1rem", textAlign: "center", borderRight: "2px solid #cbd5e1" }}>Artificial Intelligence and Machine Learning</td>
                <td style={{ padding: "1rem", textAlign: "center" }}>RGUKT-RK Valley</td>
              </tr>
              <tr style={{ borderBottom: "2px solid #cbd5e1", background: "#f8fafc" }}>
                <td style={{ padding: "1rem", textAlign: "center", borderRight: "2px solid #cbd5e1" }}>4</td>
                <td style={{ padding: "1rem", textAlign: "center", borderRight: "2px solid #cbd5e1" }}>MME</td>
                <td style={{ padding: "1rem", textAlign: "center", borderRight: "2px solid #cbd5e1" }}>Advanced Material Technology</td>
                <td style={{ padding: "1rem", textAlign: "center" }}>RGUKT-RK Valley</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={{ marginBottom: "2.5rem" }}>
          <strong>Research Programs:</strong> Ph.D program is offered with effect from the academic year 2021-22,
          in the Departments of Materials and Metallurgical Engineering and Computer Science and Engineering.
        </p>

        <h3 style={{ fontSize: "1.25rem", color: "var(--primary-dark)", fontWeight: 700, marginTop: "1.5rem", marginBottom: "0.5rem" }}>
          B. Implementation of Integrated Pedagogical Paradigm:
        </h3>
        <p style={{ marginBottom: "1rem" }}>
          The teaching-learning process in the University is a hybrid mode involving learning-by-doing
          and conventional teaching. Video lectures from the best of faculty of the country and abroad
          are arranged in class rooms complimented with the interactions and live lecturing done by the
          competent faculty of RGUKT, who were recruited mainly from the premier institutions of the
          country. The education system at RGUKT is ICT based and perhaps it is the first University in
          the country to adopt ICT for educating rural students and to pass several batches of students
          successfully in the system. It is the first University to adopt the much praised and prestigious
          NPTEL content apart from using video courses produced by RGUKT on its own.
        </p>
        <p style={{ marginBottom: "1rem" }}>
          Reckoning with the main motto of imparting Quality Education, RGUKT has adopted the
          following innovative approaches to benefit the students:
        </p>
        <ul style={{ paddingLeft: "1.5rem", marginBottom: "2.5rem", display: "flex", flexDirection: "column", gap: "0.75rem", listStyleType: "disc" }}>
          <li>Comprehensive curriculum to meet the industry needs is designed and developed, which is on par with the IITs. Every student irrespective of his/her branch of engineering has to complete four courses in Computer Science and thus gets an extra edge in IT.</li>
          <li>Supplementing the robust curriculum, excellent laboratories are in place to provide strong laboratory practices and hands on experience for students, thus committing for the innovative approach of &lsquo;learning by doing&rsquo;.</li>
          <li>Effective engagement of students and faculty is ensured by adopting good academic regulations and with appropriate assessment criteria and methods, similar to those of IITs.</li>
          <li>Faculty are continuously oriented to mentor the students towards a targeted academic culture.</li>
          <li>Long term Internship up to one year at the end of third year to expose the students to cultivate Engineering and Professional skills.</li>
        </ul>

        <h3 style={{ fontSize: "1.25rem", color: "var(--primary-dark)", fontWeight: 700, marginTop: "1.5rem", marginBottom: "0.5rem" }}>
          C. Advanced laboratory infrastructure:
        </h3>
        <p style={{ marginBottom: "1rem" }}>
          RGUKT has provided modern laboratory facilities in each of the campuses, in all disciplines,
          with latest and advanced equipment to train the students with the best of practical knowledge
          in their respective disciplines and enhance their ability to perform creative engineering tasks.
          Following are some recently acquired advanced equipment in the campuses:
        </p>
        <ul style={{ paddingLeft: "1.5rem", marginBottom: "2.5rem", display: "flex", flexDirection: "column", gap: "0.5rem", listStyleType: "circle" }}>
          <li>Servo Hydraulic 200KN machine</li>
          <li>Rohde and Schwarz Spectrum and Network analyzer</li>
          <li>Spectral Analyzer, HF-60100 V4 (10 GHZ)</li>
          <li>Field emission scanning electron microscope (FESEM)</li>
          <li>X-Ray Diffractometer</li>
          <li>Cree Testing Machine</li>
          <li>Spark emission Spectrometer</li>
          <li>High Temperature Ceramic Sintering furnace.</li>
        </ul>

        <h3 style={{ fontSize: "1.25rem", color: "var(--primary-dark)", fontWeight: 700, marginTop: "1.5rem", marginBottom: "0.5rem" }}>
          D. Mentoring System:
        </h3>
        <p style={{ marginBottom: "2.5rem" }}>
          A salient and unique feature of RGUKT is mentoring wherein students
          are attached to a mentor at the entry stage itself and they are nurtured through handholding
          and pro-active counselling. Close rapport is continuously maintained within the residential
          climate to groom students for a well rounded personality.
        </p>

        <h3 style={{ fontSize: "1.25rem", color: "var(--primary-dark)", fontWeight: 700, marginTop: "1.5rem", marginBottom: "0.5rem" }}>
          E. Gap Analysis:
        </h3>
        <p style={{ marginBottom: "2.5rem" }}>
          Pre learning gaps are identified in the first year and after a gap analysis
          remedial measures are initiated to make students learning ready in the RGUKT setting.
        </p>

        <h3 style={{ fontSize: "1.25rem", color: "var(--primary-dark)", fontWeight: 700, marginTop: "1.5rem", marginBottom: "0.5rem" }}>
          F. Remedial education:
        </h3>
        <p style={{ marginBottom: "2.5rem" }}>
          It helps slow learners to overcome their disadvantages and compete
          well at the examinations. They are constantly monitored through mentors for their success.
        </p>

        <h2 style={{ color: "var(--primary-maroon)", fontSize: "1.45rem", marginBottom: "1rem", fontWeight: 700, marginTop: "2.5rem" }}>
          7. Promotion of Research
        </h2>
        <p style={{ marginBottom: "1rem" }}>
          One of the major agenda for the coming years is to build up a
          robust research culture in the University. The research activity which is sporadic on the
          campuses of RGUKT will be coordinated and nurtured as a cohesive program involving the
          faculty across all the departments in the University through Research and Development Cell &ndash;
        </p>
        <ul style={{ paddingLeft: "1.5rem", marginBottom: "2.5rem", display: "flex", flexDirection: "column", gap: "0.5rem", listStyleType: "circle" }}>
          <li>To nurture active research culture in the University.</li>
          <li>To strengthen inter-disciplinary research by coordinating activities of different departments.</li>
          <li>To foster research capacity for future.</li>
          <li>To thrive for external research funding for research infrastructure.</li>
          <li>To encourage socially relevant research problems.</li>
          <li>To encourage young student entrepreneurs through incubation of start-ups.</li>
        </ul>
        <p style={{ marginBottom: "1.5rem" }}>
          Nevertheless, to augment their research capabilities 48 faculty in Nuzvid, 45 in RK Valley, 49
          in Ongole and 28 in Srikakulam campus are currently pursuing their doctoral studies. With
          these 170 active researchers, the quality of research publications will definitely be improved.
          With the increase in faculty with doctoral degrees, it is planned to introduce Doctoral degree
          programmes in all the major branches of the University. A doctoral program in the University
          would also enhance the research aspirations of individual departments.
        </p>
        <p style={{ marginBottom: "1.5rem" }}>
          <strong>Seed Grant for Research:</strong> In order to boost up research in the University and to motivate
          the faculty to initiate research work, the University has decided to provide seed grant to faculty,
          after evaluating their research proposals. This grant could cover the basic requirements of the
          research project envisaged and should pave way for a major grant from a funding agency. The
          faculty is expected to submit a proposal and make a presentation to a specially set up committee
          for approval. Efforts are also being made to generate research funding from the Alumni of the
          University, Philanthropists and Industry. It is proposed to earmark a sensible amount in the
          budget of the university in the coming years.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          <strong>Sponsored Research Projects:</strong> Sponsored projects are the major sources of funding that help
          in developing research laboratories and enhance visibility to the university through research
          publications. The faculty will be encouraged to apply for the projects. In order to motivate
          research activity the investigators will be given incentives in the form of a small share in the
          &lsquo;overheads&rsquo; of the project grant. This money will be put into a separate account, called Faculty
          Development Fund, in the name of the investigator and could accumulate through his/her career
          in the university and could be utilized for any research related expenditure like attending
          conferences, publication fees, consumable materials for the laboratory, personal laptop or
          furniture to the office etc. From the &lsquo;overheads&rsquo; grant, 25 percent could be given to the
          investigator and 25 percent to the department to which the investigator belongs. In case of
          multiple departments/investigators involved, this could be equally distributed among the
          participating departments/investigators.
        </p>

        <h2 style={{ color: "var(--primary-maroon)", fontSize: "1.45rem", marginBottom: "1rem", fontWeight: 700, marginTop: "2.5rem" }}>
          8. Industrial Consultancy
        </h2>
        <p style={{ marginBottom: "1.5rem" }}>
          RGUKT is making its strides in providing consultancy services.
          Till now more than INR 1 crore worth of consultancy projects have been completed at all the
          campuses. Another INR 1 crore worth of projects are currently in progress.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          The sophisticated equipment available in many laboratories need to be fully utilized to
          undertake consultancy work for the industries. Any intellectual property developed through
          consultancy could be jointly shared by the industry and the University mutually. The revenues
          earned by each of the consultancy works are shared by the concerned faculty and the
          University, with the former getting a major share. Proper guidelines are being framed for the
          consultancy services by the faculty.
        </p>

        <h2 style={{ color: "var(--primary-maroon)", fontSize: "1.45rem", marginBottom: "1rem", fontWeight: 700, marginTop: "2.5rem" }}>
          9. Innovation and Incubation
        </h2>
        <p style={{ marginBottom: "1.5rem" }}>
          The faculty and students of the university have demonstrated
          their innovative ideas with potential to become marketable products. An innovation center
          that could incubate the startup industries initiated by the faculty and students is being
          established. The university shall provide limited space and permission to utilize the
          facilities of the campus for the purpose. In lieu of this, the university can acquire an equity
          of 3 to 5 percent in the company and charges a nominal rent for the space provided. The
          incubation will be for a period of three years, beyond which the company could move to its
          own place to sustain the growth. Under exceptional conditions which delay the starting of
          the company, the time could be extended by another one year. The incubating company
          can use the expertise in the campus to develop their products, through research funding.
        </p>
        <p style={{ marginBottom: "1.5rem" }}>
          To start with, the focus will be to develop technologies useful to the local industry. The
          Krishna, Godavari delta area is rich in agri based industries. Hence any start up catering to
          the needs of these industries in terms of food processing, food storage, pesticides etc.,
          would be a good beginning. Similarly, the RK Valley campus is surrounded by lot of
          mining industries and hence starting industries related to mining and mineral processing
          would be attractive.
        </p>
        <p style={{ marginBottom: "1.5rem" }}>
          The two university campuses at Nuzvid and RK Valley have invested huge money on several
          high-end equipment which requires maintenance. All the research facilities will be put under
          a common umbrella and any faculty/student will be allowed to use them with a proper time slot
          management system.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          In order to have coherence in the activities of all the campuses, the Research cell will be the
          single point of administration for the entire research program as discussed in this document. It
          will be managed by the Director of the research cell with a committee of three or four faculty
          members. A research advisory committee will be formed with eminent researchers from other
          academic institutions and industry to advise on the program. The fund accumulated by the
          Research Cell in its account, through the over heads of research projects, consultancy projects
          etc., will be utilized to provide fund to the faculty, at its discretion, for fostering research related
          activity in the university.
        </p>

        <h2 style={{ color: "var(--primary-maroon)", fontSize: "1.45rem", marginBottom: "1rem", fontWeight: 700, marginTop: "2.5rem" }}>
          10. Faculty Development Programmes
        </h2>
        <p style={{ marginBottom: "1.5rem" }}>
          RGUKT is committed for training the faculty to keep them abreast of latest and emerging fields.
          A few of such faculty development programmes on the anvil are -
        </p>

        <ul style={{ paddingLeft: "1.5rem", marginBottom: "2.5rem", display: "flex", flexDirection: "column", gap: "1.5rem", listStyleType: "none" }}>
          <li>
            <strong style={{ color: "var(--primary-dark)", fontSize: "1.15rem" }}>&gt; Common to All Branches</strong>
            <ul style={{ paddingLeft: "2rem", marginTop: "0.75rem", display: "flex", flexDirection: "column", gap: "0.5rem", listStyleType: "square" }}>
              <li>Artificial Intelligence</li>
              <li>Python Programming for Engineers (NumPy, Pandas, Plotting, Mathematical Equations)</li>
              <li>Innovative methods of Teaching and Learning - Video Recording &amp; Editing Tools, Animation Software&apos;s, Auto grading etc.</li>
              <li>Machine Learning</li>
            </ul>
          </li>
          
          <li>
            <strong style={{ color: "var(--primary-dark)", fontSize: "1.15rem" }}>&gt; Civil Engineering</strong>
            <ul style={{ paddingLeft: "2rem", marginTop: "0.75rem", display: "flex", flexDirection: "column", gap: "0.5rem", listStyleType: "square" }}>
              <li>Advanced Remote Sensing and GIS</li>
              <li>Waste Water Treatment Recycle and Reuse</li>
              <li>Advanced surveying methods by using DGPS</li>
              <li>Training on Vissumtraffic simulation software, MX Roads, Transportation software</li>
              <li>Numerical Methods in CFD using MATLAB and Programming languages.</li>
              <li>Sustainable construction practices, Lean Construction Principles, Six Sigma in Construction</li>
            </ul>
          </li>

          <li>
            <strong style={{ color: "var(--primary-dark)", fontSize: "1.15rem" }}>&gt; Computer Science and Engineering</strong>
            <ul style={{ paddingLeft: "2rem", marginTop: "0.75rem", display: "flex", flexDirection: "column", gap: "0.5rem", listStyleType: "square" }}>
              <li>Cyber Security</li>
              <li>Big Data using Hadoop</li>
              <li>Block Chain Technology</li>
              <li>Data Visualization</li>
            </ul>
          </li>

          <li>
            <strong style={{ color: "var(--primary-dark)", fontSize: "1.15rem" }}>&gt; Chemical Engineering</strong>
            <ul style={{ paddingLeft: "2rem", marginTop: "0.75rem", display: "flex", flexDirection: "column", gap: "0.5rem", listStyleType: "square" }}>
              <li>Role of Chemical Engineering in food technology</li>
              <li>Carbon capture and recent advancements</li>
              <li>Recent advancements in hybrid technology</li>
              <li>Advanced analysis characterization techniques of materials</li>
            </ul>
          </li>

          <li>
            <strong style={{ color: "var(--primary-dark)", fontSize: "1.15rem" }}>&gt; Electronics and Communication Engineering</strong>
            <ul style={{ paddingLeft: "2rem", marginTop: "0.75rem", display: "flex", flexDirection: "column", gap: "0.5rem", listStyleType: "square" }}>
              <li>VLSI design: front end (Verilog, System verilog, Software&apos;s- xilinx, Rivera pro, tanner, cadence virtuoso, questa-sim, Mixed signal processing- software: cadence)</li>
              <li>Embedded systems: (ARM cortex m4 microcontroller and programming in c, Software: keil)</li>
              <li>Digital System Design</li>
              <li>System Verilog</li>
            </ul>
          </li>

          <li>
            <strong style={{ color: "var(--primary-dark)", fontSize: "1.15rem" }}>&gt; Electrical Engineering</strong>
            <ul style={{ paddingLeft: "2rem", marginTop: "0.75rem", display: "flex", flexDirection: "column", gap: "0.5rem", listStyleType: "square" }}>
              <li>Electric vehicles</li>
            </ul>
          </li>

          <li>
            <strong style={{ color: "var(--primary-dark)", fontSize: "1.15rem" }}>&gt; Mechanical Engineering</strong>
            <ul style={{ paddingLeft: "2rem", marginTop: "0.75rem", display: "flex", flexDirection: "column", gap: "0.5rem", listStyleType: "square" }}>
              <li>Recent trends in Robotics</li>
              <li>3D printing ideas to real products</li>
              <li>Solar thermal engineering for a sustainable future</li>
              <li>Nano Technology</li>
              <li>Non-conventional sources of energy</li>
              <li>Software trainings like Pro-E, CATIA, ANSYS, Fluent.</li>
              <li>Training on simulation and Design software.</li>
            </ul>
          </li>

          <li>
            <strong style={{ color: "var(--primary-dark)", fontSize: "1.15rem" }}>&gt; Metallurgical and Materials Engineering</strong>
            <ul style={{ paddingLeft: "2rem", marginTop: "0.75rem", display: "flex", flexDirection: "column", gap: "0.5rem", listStyleType: "square" }}>
              <li>Energy storage materials</li>
              <li>Mechanical Characterization of Materials</li>
              <li>Mechanical Properties of Polymers</li>
              <li>Reuse of Industrial Waste for Metallurgical Applications</li>
              <li>Material characterization (SEM- EBSD and EDS; TEM; XRD; SADP) of metallic materials.</li>
            </ul>
          </li>
        </ul>

        <p style={{ marginBottom: "2.5rem" }}>
          Further, the university is providing financial assistance up to Rs 30,000 per year
          per teacher to enable the faculty to attend workshops, seminars, conferences etc
          within and outside the country. The university is also granting paid study leave to
          carry out research leading to Ph.D up to a maximum of three years. So far 14
          faculties are benefitted by this scheme and more are the pipeline. All this is
          considered a big leap forward in the domain of FDP.
        </p>

        <h2 style={{ color: "var(--primary-maroon)", fontSize: "1.45rem", marginBottom: "1rem", fontWeight: 700, marginTop: "2.5rem" }}>
          11. Collaborations with Industry/ Government departments/Research Centers:
        </h2>
        <p style={{ marginBottom: "2.5rem" }}>
          The University has inked MoUs with IIT Tirupati, IIT Hyderabad, IIIT Hyderabad, NIT
          Warangal, AIZU Japan, Korean Cultural and Technological Centre, ISB for promoting
          research and teaching in the University. RGUKT has collaborations with top level industries
          such as Effectronics, Kusalava Industries, etc for student training and placements.
        </p>

        <h2 style={{ color: "var(--primary-maroon)", fontSize: "1.45rem", marginBottom: "1rem", fontWeight: 700, marginTop: "2.5rem" }}>
          12. Placements:
        </h2>
        <p style={{ marginBottom: "2.5rem" }}>
          Placement Training has been given utmost prominence to ensure good placements for the
          students. <strong>CONDUIRA Education and Training Services PVT.LTD</strong> has provided a training
          platform portal for the registered R15 students of RK Valley campus. As a part of pre-placement training and skill enhancement programme is initiated in collaboration with
          APSSDC and Nandhi Foundation. Workshops were organized in two areas, one for technical
          training, and the other on Employability skills training which included soft skills,
          communication skills, life skills and interview preparation. <strong>Microsoft in collaboration with
          TCS has started a Global skills initiative by providing free access</strong> to learn paths and
          comprehensive resources to help beneficiaries to develop skills needed for their placement.
          Around <strong>170+ companies</strong> Pan India are participating in the recruitment drives. RGUKT has
          witnessed pay package of Rs.20 Lakhs per annum offered by Analog Devices, Bangalore.
        </p>

        <h2 style={{ color: "var(--primary-maroon)", fontSize: "1.45rem", marginBottom: "1rem", fontWeight: 700, marginTop: "2.5rem" }}>
          13. Internship programme:-Jignasa:
        </h2>
        <ul style={{ paddingLeft: "1.5rem", marginBottom: "2.5rem", display: "flex", flexDirection: "column", gap: "1.25rem", listStyleType: "disc" }}>
          <li>
            This internship programme of the University helped the students in sharpening,
            improving and strengthening their communication skills.
          </li>
          <li>
            Students were mentored by USA students which helped them in improving the public
            speaking skills, team spirit, getting exposed to USA culture through daily exchange of
            idea, updates and meetings.
          </li>
          <li>
            Students have prepared the Wikipedia profiles, biographies and Youtube videos of the
            selected engineers.
          </li>
          <li>
            The university has MOUs with the following list of companies for internships,
            placements, and training activities.
            <ol style={{ paddingLeft: "2rem", marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li>Great Lakes E-Learning Services Pvt. Ltd., Gurgaon</li>
              <li>Edunet Foundation, Gurgaon</li>
              <li>HamariMitti Society, Hyderabad</li>
              <li>Focus Academy for Career Enhancement, Hyderabad</li>
              <li>Saksham Strategy Group, Hyderabad</li>
              <li>CONDUIRA Education and Training Services Pvt. Ltd., Visakhapatnam</li>
              <li>Coign Consultants Pvt. Ltd., Hyderabad</li>
              <li>Placement Season, Coimbatore</li>
              <li>Pyramid Education &amp; Training Solutions, Hyderabad</li>
              <li>Andhra Pradesh Training &amp; Placement Officers [APTPO] Consortium</li>
              <li>Globarena, Hyderabad</li>
              <li>Life Of Girl [LOG], Hyderabad</li>
            </ol>
          </li>
        </ul>

        <h2 style={{ color: "var(--primary-maroon)", fontSize: "1.45rem", marginBottom: "1rem", fontWeight: 700, marginTop: "2.5rem" }}>
          14. Promoting In-House Talent:
        </h2>
        <p style={{ marginBottom: "1rem" }}>
          University wishes to identify and encourage In-House talent in different fields of knowledge.
          As part of this initiative, faculty and students are advised to submit proposals on:
        </p>
        <ol style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <li>Web designing to RGUKT and its constituent units.</li>
          <li>Attendance management system for both faculty and students.</li>
          <li>MIS for all maintenance cells of each of the RGUKT campuses.</li>
        </ol>
        <p style={{ marginBottom: "2.5rem" }}>
          In response, 7 proposals are received from faculty and students and are provided with the
          financial assistance of Rs 2.00 lakh each. Similar programmes will be given impetus in future
          and more and more students and faculty are drawn towards this initiative.
        </p>

        <h2 style={{ color: "var(--primary-maroon)", fontSize: "1.45rem", marginBottom: "1rem", fontWeight: 700, marginTop: "2.5rem" }}>
          15. Engagement with the Neighborhood:
        </h2>
        <p style={{ marginBottom: "1.5rem" }}>
          The University and the neighbourhood are entwined with each other. One of the main fabrics
          is the National Service Scheme. The NSS Units on the campuses are very active and their
          dedication and efforts are visible in various activities conducted before and during the COVID
          pandemic times. Students created awareness of COVID appropriate behaviour through Poster
          Presentations, producing awareness Videos, Drawings, Paintings etc. Some of the awareness
          videos made by students of RGUKT have been uploaded on the web portal of NSS, Regional
          Directorate, Hyderabad.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          During the lockdown, while at homes many of the students and NSS volunteers were active in
          their own neighbourhoods by way of donating groceries, and vegetables to the needy and also
          in distributing food to the Police personnel.
        </p>

        <h2 style={{ color: "var(--primary-maroon)", fontSize: "1.45rem", marginBottom: "1rem", fontWeight: 700, marginTop: "2.5rem" }}>
          16. Institution of Gold Medals
        </h2>
        <p style={{ marginBottom: "1rem" }}>
          For the first time in the annals of the University, three gold medals are instituted to be awarded
          at convocation of the university from time to time.
        </p>
        <ol style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem", listStyleType: "lower-roman" }}>
          <li>
            One gold medal for the topper of the batch of the University in memory of Late.
            Dr.Y.S. Rajasekhara Reddy, Former Chief Minster, Andhra Pradesh who was
            instrumental in the establishment of the University.
          </li>
          <li>
            Dr. Raj Reddy gold medal for the topper in Computer Science and Engineering
            in the name of Dr. Raj Reddy, Founder Chancellor of the University.
          </li>
          <li>
            Smt. Kalluri Venkata Subbamma gold medal for the topper among women
            graduates in memory of the mother of the donor.
          </li>
        </ol>
        <p style={{ marginBottom: "2.5rem" }}>
          The university is also approaching the various donor philanthropists to institute
          more medals as an incentive to students who excel in their studies.
        </p>

        <h2 style={{ color: "var(--primary-maroon)", fontSize: "1.45rem", marginBottom: "1rem", fontWeight: 700, marginTop: "2.5rem" }}>
          17. Dr. Y S R Lecture Series:
        </h2>
        <p style={{ marginBottom: "1.5rem" }}>
          It is indeed a privilege bestowed upon the Rajiv Gandhi University of Knowledge Technologies
          to introduce the Dr. Y S R Lecture Series, commemorating the 70th Birth Anniversary
          Celebrations of Dr. Y.S. Rajasekhar Reddy, the 14th Chief Minister of undivided state of
          Andhra Pradesh, who laid a solid foundation to the upliftment of the down trodden as was
          evident by establishment of this University for the talented rural youth.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          The founding Chancellor of RGUKT, Padma Bhushan Prof. Raj Reddy, Professor of repute in
          Artificial Intelligence and Machine Learning delivered the first of the Dr. YSR Lecture Series
          on &ldquo;Emerging Technologies and Implications for the Future of Education&rdquo;. The second lecture
          was delivered by a renowned space scientist and technologist, recipient of Padma Shri and
          many honorary doctorates, Dr. Kota Harinarayana where he spoke on the topic entitled &ldquo;Aircraft Artificial Intelligence &ndash; Agriculture : AAA Effect.&ldquo; This distinctive practice will be
          continued in future with renewed vigour.
        </p>

        <h2 style={{ color: "var(--primary-maroon)", fontSize: "1.45rem", marginBottom: "1rem", fontWeight: 700, marginTop: "2.5rem" }}>
          18. Looking into the future:
        </h2>
        <p style={{ marginBottom: "1rem" }}>
          The University is poised to make a mark in imparting quality technical education offered at its
          four campuses and furthers appropriate steps to keep these institutions on the academic map of
          the country by resorting to the following:
        </p>
        <ul style={{ paddingLeft: "1.5rem", marginBottom: "3.5rem", display: "flex", flexDirection: "column", gap: "0.5rem", listStyleType: "disc" }}>
          <li>QS and THE rankings.</li>
          <li>NIRF ranking.</li>
          <li>NBA accreditation.</li>
          <li>Setting up of incubation centers in the emerging areas of technology</li>
          <li>Establishing of Entrepreneur Development Cell and creation of startup eco system</li>
          <li>Extending Ph.D. program to other disciplines</li>
          <li>Encouraging faculty to develop E &ndash; content and emerge as Resource Persons of national significance.</li>
          <li>Develop more major and minor programs in subjects of industrial importance</li>
          <li>Creating a central training and placement unit to co-ordinate with the campus placement cells.</li>
          <li>Strengthening collaboration with AP State Skill Development Corporation and other agencies involved in training and placement.</li>
          <li>University to become a multidisciplinary institution of excellence and to start MS Programs in Humanities and Social Sciences such as Public Policy.</li>
          <li>Making it known as a premier institution within and outside the country for extending high equality technical education.</li>
        </ul>

        <div style={{ textAlign: "center", padding: "2rem", borderTop: "2px solid #e2e8f0", marginTop: "2rem", color: "var(--primary-maroon)", fontStyle: "italic", fontWeight: 600 }}>
          <p style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>saṃgacchadhwaṃsaṃvadadhwaṃ</p>
          <p style={{ marginBottom: "1.5rem", fontSize: "1.1rem" }}>saṃvomanāṃsijānatām &ndash; Rig Veda</p>
          <p style={{ marginBottom: "0.5rem" }}>&ldquo;Let us Walk Together</p>
          <p style={{ marginBottom: "0.5rem" }}>Let us Talk Together</p>
          <p style={{ marginBottom: "0" }}>Let us Think Together&rdquo;</p>
        </div>

      </div>
    </div>
  );
}
