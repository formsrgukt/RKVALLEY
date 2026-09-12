"use client";

import React from "react";

export default function BestPracticesPage() {
  const handlePdfClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open("https://www.rguktrkv.ac.in/pdfdoc/BESTPRACTICES1.pdf", "PDFPopup", "width=900,height=800,scrollbars=yes,resizable=yes");
  };

  return (
    <div className="container" style={{ padding: "4rem 1rem", width: "100%", margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
        <h1 style={{ color: "var(--primary-dark)", fontSize: "2.2rem", fontWeight: 800, margin: 0 }}>
          Best Practices
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

      <div style={{ background: "#ffffff", padding: "3rem", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)", lineHeight: 1.75, color: "#334155", fontSize: "1.05rem", marginBottom: "2rem" }}>
        
        <h2 style={{ color: "var(--primary-maroon)", fontSize: "1.6rem", marginBottom: "1.5rem", fontWeight: 800, borderBottom: "2px solid #f1f5f9", paddingBottom: "0.5rem" }}>
          Best Practice – 1
        </h2>
        
        <p style={{ marginBottom: "1rem", fontWeight: 700, color: "var(--primary-dark)" }}>
          Title: &lsquo;Learning by doing&rsquo; for effective learning and outcomes<br />
          Duration: Year of Inception - 2008, and still continuing
        </p>

        <h3 style={{ fontSize: "1.25rem", color: "var(--primary-dark)", fontWeight: 700, marginTop: "1.5rem", marginBottom: "0.5rem" }}>Objectives:</h3>
        <ol style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <li>Education at RGUKT is based on the intensive use of Information Technology. The assumption is that ICT (Information and Communication Technologies), will permit the scaling of the learning environments by one to two orders of magnitude.</li>
          <li>Specifically, use the latest advances in Learning Sciences with ICT using modern cognitive science tools in education and learning to effectively reach the learners.</li>
          <li>Engage each student residing in the campus with study and extension through mentoring by way of tutoring the students after regular class work, taking extra care of the slow learners by way of mentoring and provide additional support and council the students as a friend, guide and philosopher.</li>
        </ol>

        <h3 style={{ fontSize: "1.25rem", color: "var(--primary-dark)", fontWeight: 700, marginTop: "1.5rem", marginBottom: "0.5rem" }}>The Context:</h3>
        <p style={{ marginBottom: "1rem" }}>
          The primary objective of establishing RGUKT was to provide high quality educational opportunities for the aimed rural youth of Andhra Pradesh. The initial goal was that at least the top 1 % of the eligible rural students would be given the opportunity to study at RGUKT. A person born into a low income, rural family in India normally struggles to aspire to study at an IIT or aim to be selected into the IAS or even study in an engineering institution. This is true in many cases. The reason for this is because they start with many inherent disadvantages such as:
        </p>
        <ol style={{ paddingLeft: "1.5rem", marginBottom: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <li>The educational level of the parents and the familial conditions that children of those families face</li>
          <li>The quality of teachers and the infrastructure of the schools they go to in rural areas</li>
          <li>The ability to pay for coaching classes, and</li>
          <li>The time and effort devoted to study the material</li>
        </ol>
        <p style={{ marginBottom: "1rem" }}>
          It has been observed that, on an average, the marks obtained by the students in rural India are about 10-20% lower than the marks of students studying in private schools of urban India. As a result, most of the seats in higher education tend to get filled by students from these private schools located in urban areas when the basis of selection is the marks obtained. Even if a rural student is capable, the resultant educational deprivation doesn&apos;t allow him to go ahead. The goal of RGUKT is to help remedy this unfortunate situation.
        </p>
        <p style={{ marginBottom: "1.5rem" }}>
          The other issue RGUKT is attempting to tackle is the issue of &quot;Early Specialization&quot;. In most cases, once a student goes into a Junior College for intermediate program, (s)he gets routed through coaching that drills him/her to get the top rank in entrance tests which will enable to secure a seat in a good college or university. This kind of intensive coaching makes students uni-dimensional with very little understanding of anything other than what they have been coached in. RGUKT attempts to deal with this issue by giving students direct admission into a 6-year integrated program after class X. Here, they are not subjected to two years of preparing for entrance tests. Since these students are already gifted and belong to the top 1%, it is expected that they will do well naturally and don&apos;t need other entrance tests.
        </p>

        <h3 style={{ fontSize: "1.25rem", color: "var(--primary-dark)", fontWeight: 700, marginTop: "1.5rem", marginBottom: "0.5rem" }}>The Practice:</h3>
        <p style={{ marginBottom: "1rem" }}>
          Every student in RGUKT is given a laptop the moment he/she is admitted. Teaching methods used are such as Learning by Example, Learning by Doing and Problem-based Learning. Online lectures are provided to the students in the class rooms and are followed by problem solving sessions that reinforce what has been covered in each lecture. Flipped class room method has been mostly followed. Video lectures of experts are downloaded from various sources such as NPTEL depending on the subject. Some lectures are also produced in RGUKT and some of them were funded and the faculty were trained by Commonwealth of Learning, Canada. The lectures are played in the classrooms for a period ranging from 30 minutes and above. Once video lecture is over, the Mentor/teacher clarifies doubts of the students, and problems are solved in the classroom on the topic. After class hours the students have study hours from 8:00 PM to 10:00 PM, wherein Home room tutors (HRTs) and Mentors help the students in reinforcing their learning in the classroom.
        </p>
        <p style={{ marginBottom: "1rem" }}>
          The teaching-learning process in the University is centered around the continuous engagement of the students. All the students are residents in the Hostels and are in the campus 24X7. Therefore, it is the responsibility of the University to take care of their study and stay. Further, the campus is also residential for faculty and free accommodation is provided to them. Therefore, the faculty are entrusted with extra responsibility of caring the students. Pro active support is provided to the students. As it is known, many Higher Educational Institutions in India are nonresidential. Though some of them run Hostels for accommodating the students, they are not available for the total strength of students.
        </p>
        <p style={{ marginBottom: "1rem" }}>
          RGUKT is a completely residential institution. Therefore, there is dire necessity to monitor the activities of the students on the campus, for the purpose of making campus life enjoyable and memorable.
        </p>
        <p style={{ marginBottom: "1rem" }}>
          Further, each teacher is expected to play the role as a counselor and extend warmth at every occasion. Every care is taken by the teachers and mentors to create an environment like a &quot;Home away from Home&quot;. Mentoring is carried out by focusing on the following:
        </p>
        <ol style={{ paddingLeft: "1.5rem", marginBottom: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <li>The educational levels of the parents.</li>
          <li>The background and the quality of schools they have come from.</li>
          <li>The time they spend on studies and play.</li>
        </ol>
        <p style={{ marginBottom: "1.5rem" }}>
          Meeting inclusive atmosphere is the hallmark of the university. Students of various backgrounds are admitted into the campus and they are destined to continue their studies in a joyful environment. The Government of Andhra Pradesh has been providing financial support to meet food, accommodation, laptops, uniforms, shoes, socks, blankets etc. A student can walk-in barefoot into the campuses of RGUKT and the University will take care of every requirement of the student.
        </p>

        <h3 style={{ fontSize: "1.25rem", color: "var(--primary-dark)", fontWeight: 700, marginTop: "1.5rem", marginBottom: "0.5rem" }}>Evidence of Success:</h3>
        <p style={{ marginBottom: "1rem" }}>
          Evaluation is continuous as assessed by a combination of weekly tests, Mid-exams and Semester end exams. The success rate of the students after evaluation has been very high and even those students who fail are given remedial classes from 5:00 PM to 7:30 PM as needed and then are allowed to take remedial examinations. As for as the evidence of success of mentoring is concerned, the pass percentage of students is always above 95%. The placement record is also impressive at 70%. The remaining 30% either progress to higher education or take up entrepreneurial activities.
        </p>
        <p style={{ marginBottom: "1.5rem" }}>
          The composition of the students is such that about 80 % of them come from low-income rural background, i.e., below the poverty line, having white ration cards. Joining RGUKT is dream come true for such people. It is made possible through this novel scheme. It is an attempt to create a replica like IIT/NIT at the State level.
        </p>

        <h3 style={{ fontSize: "1.25rem", color: "var(--primary-dark)", fontWeight: 700, marginTop: "1.5rem", marginBottom: "0.5rem" }}>Constraints:</h3>
        <p style={{ marginBottom: "1.5rem" }}>
          RGUKT has been running successfully providing technical professional education to thousands of students with predominantly rural background and low socio-economic status funded by the Government of Andhra Pradesh, which continues to be only source of funding. Financial constraints sometimes derail the progress of the Institution in intensifying technological adoption and increasing further access to many aspiring rural youth with similar background. Further, availability of adequate number of teachers, both in quality and quantity, is another problem that the RGUKT is currently facing. Infrastructure issues add to the problems that RGUKT has to grapple with.
        </p>

        <h3 style={{ fontSize: "1.25rem", color: "var(--primary-dark)", fontWeight: 700, marginTop: "1.5rem", marginBottom: "0.5rem" }}>Notes:</h3>
        <p style={{ marginBottom: "2.5rem" }}>
          &apos;Learning by doing&apos; is a unique successful practice which can be emulated by other educational institutions. The practice of appointing mentors for mentoring purpose can be emulated by every residential campus. In addition, the technology orientation with the provision of an exclusive laptop to every student is the need of the hour in the present-day context. The Government of India also started long ago under mission mode, the Scheme of &quot;National Mission for Education through ICT [NMEICT]&quot;. RGUKT is the best example for commissioning this idea. It is to be considered as the best practice since effective learning is promoted and outcomes match the philosophy and objectives of the university.
        </p>

      </div>

      <div style={{ background: "#ffffff", padding: "3rem", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)", lineHeight: 1.75, color: "#334155", fontSize: "1.05rem" }}>
        <h2 style={{ color: "var(--primary-maroon)", fontSize: "1.6rem", marginBottom: "1.5rem", fontWeight: 800, borderBottom: "2px solid #f1f5f9", paddingBottom: "0.5rem" }}>
          Best Practice – 2
        </h2>
        
        <p style={{ marginBottom: "1rem", fontWeight: 700, color: "var(--primary-dark)" }}>
          Title: Promoting Community Service and Leadership among students through self-help (HELPING HANDS)<br />
          Duration: Year of Inception - 2009, and still continuing
        </p>

        <h3 style={{ fontSize: "1.25rem", color: "var(--primary-dark)", fontWeight: 700, marginTop: "1.5rem", marginBottom: "0.5rem" }}>Objectives:</h3>
        <ol style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <li>To encourage students to develop among themselves community service and the habit of helping others;</li>
          <li>To promote the habit of thrift among the students, and help the needy in their own way</li>
          <li>To make the students aware of fund raising and extend assistance to the public; and</li>
          <li>To promote leadership qualities among students in mobilizing, convincing and helping people in the society.</li>
        </ol>

        <h3 style={{ fontSize: "1.25rem", color: "var(--primary-dark)", fontWeight: 700, marginTop: "1.5rem", marginBottom: "0.5rem" }}>The Context:</h3>
        <p style={{ marginBottom: "1.5rem" }}>
          RGUKT is an institution established in 2008 by the Government of Andhra Pradesh. It is a fully residential University for students and faculty. In each campus, there will be about 4500 students. Community service is instilled among students through a non-credit course in B. Tech and through NSS wing. The students got an idea to start an Association to help themselves, in an organized manner, in providing items pertaining to their and residents&apos; daily needs. It is named as &apos;Helping Hands&apos;. Immediately, they contacted the Administration and got permission to open a store at each campus. The store is completely managed by them. Later, the association is also registered as a society on 16-11-2019 under the AP Societies Registration Act, 2001 with Registration No: 313/2019. The association also maintains a website with domain name : www.helpinghandsrguktn.org.
          <br /><br />
          The society is funded under the &apos;crowd-funding model&apos;. The students themselves have become the members of the society and will be associated with the same as long as they are in the campus. New students are added and old students exit after completion of their studies.
        </p>

        <h3 style={{ fontSize: "1.25rem", color: "var(--primary-dark)", fontWeight: 700, marginTop: "1.5rem", marginBottom: "0.5rem" }}>The Practice:</h3>
        <p style={{ marginBottom: "1rem" }}>
          A course on Community Service is part of the curriculum of B.Tech program in which each student has to go to a village and study various aspects of village setting and life and submit a project report to the university. This experience provides practical experience on how to service rural community. This is further reinforced by various NSS activities conducted in the adopted villages. One of the objectives of Helping Hands (HH) is to promote the wellbeing of students from disadvantaged backgrounds both on and off the campus. From among the members, active volunteers are identified from time to time and are involved in each activity.
        </p>
        
        <h4 style={{ fontSize: "1.1rem", color: "var(--primary-maroon)", fontWeight: 700, marginTop: "1.5rem", marginBottom: "0.5rem" }}>ACTIVITIES OF HELPING HANDS (HH)</h4>
        <p style={{ marginBottom: "1rem" }}>
          Helping Hands is actively involved in a variety of constructive services and activities aimed at addressing students&apos; needs, raising public awareness on health issues, and assisting the larger community. Some of the key activities include:
        </p>
        <ol style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <li><strong>MEETING DAILY NEEDS OF STUDENTS:</strong> HH provides essential daily necessities to students, ensuring that they have access to basic requirements within the campus. This includes items such as food, clothing, and other essential supplies.</li>
          <li><strong>TRAVEL ALLOWANCES AND SUPPORT:</strong> It offers travel allowances to students during vacations, enabling them to visit their families and homes. Additionally, it provides support such as tricycles and washing machines to differently-abled students, facilitating their mobility and enhancing their quality of life.</li>
          <li><strong>FINANCIAL SUPPORT FOR MEDICAL NEEDS:</strong> It extends financial assistance to cover the medical expenses and surgeries of both students and staff members. By providing this support, HH ensures that individuals in need can access the necessary healthcare without financial burden.</li>
          <li><strong>HEALTH AWARENESS PROGRAMS:</strong> HH conducts regular mega health camps and eye camps within the campus. These initiatives aim to raise health awareness among students and promote preventive healthcare practices. By organizing such camps, it contributes to the well-being and overall health of the student community.</li>
          <li><strong>BLOOD DONATION CAMPS:</strong> Collaborating with other community-level organizations or clubs, HH organizes blood donation camps on campus. These camps provide an opportunity for students and staff members to contribute to the noble cause of saving lives through blood donations.</li>
          <li><strong>ANNIVERSARY CELEBRATIONS:</strong> Each year, on the occasion of Mother Teresa&apos;s birthday, HH celebrates its anniversary. This event serves as a platform to recognize and appreciate its achievements, inspire students to embrace the spirit of service, and plan for future endeavours and expansions.</li>
        </ol>

        <h4 style={{ fontSize: "1.1rem", color: "var(--primary-maroon)", fontWeight: 700, marginTop: "1.5rem", marginBottom: "0.5rem" }}>FUNCTIONING OF THE ORGANIZATION</h4>
        <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem", listStyleType: "square" }}>
          <li><strong>MONEY GENERATION:</strong> Helping Hands generates funds through various channels, including weekly collections, drop boxes positioned in every class at HRs, donations from philanthropic individuals, and contributions from the sale of rough books. The HH representatives collect the money from the drop boxes every Saturday. The collected funds are counted in the presence of the working committee on Monday and deposits into its SBI account on Tuesday probably. These financial details are transparently displayed on the website.</li>
          <li><strong>GATHERING THE ISSUES THROUGH REPRESENTATIVES:</strong> Students who are experiencing challenges or financial issues can contact Helping Hands by enrolling on the website of the organisation or by speaking with a representative. The representatives serve as a bridge between the organisation and the students, ensuring that issues are adequately conveyed and dealt with.</li>
          <li><strong>EXECUTIVE COMMITTEE DECISIONS:</strong> The working committee, consisting of members responsible for the day-to-day operations of Helping Hands, regularly convenes meetings. During these meetings, the problems of the service extension are discussed and evaluated by the committee members.</li>
          <li><strong>CONTRIBUTION:</strong> Once a problem has been thoroughly scrutinized, discussed, and approved by the EC the organization provides financial support to the person in need. The contribution is typically provided in the form of a cheque, ensuring transparency and accountability in the disbursement of funds.</li>
        </ul>

        <h4 style={{ fontSize: "1.1rem", color: "var(--primary-maroon)", fontWeight: 700, marginTop: "1.5rem", marginBottom: "0.5rem" }}>RESOURCE MOBILISATION</h4>
        <p style={{ marginBottom: "0.5rem" }}>The Following are Some of the Major Donations Received by the Organization:</p>
        <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem", listStyleType: "circle" }}>
          <li>Dr. Chinnam Rama Kotaiah, Former M.L.A Nuzvid generously donated Rs. 1,00,000/- towards Helping Hands, demonstrating his support.</li>
          <li>Dr. Subba Rao, an LIC agent from Nuzvid, made a generous contribution of Rs. 50,000/- to support the initiatives of Helping Hands.</li>
          <li>Amaravani, a generous woman, contributed Rs. 25,000/- helping to further the HH&apos;s efforts in providing financial support and assistance to students.</li>
          <li>The Rotary Club of Vijayawada extended their support by donating Rs. 20,000/- showcasing their commitment to social welfare and education.</li>
          <li>Mr. Sunil Riyani, formerly worked as Assistant Professor in Civil Engineering donated Rs. 10,000/-</li>
          <li>Mr. Chandra Sekhar, one of the former students who studied PUC in RGUKT, Nuzvid and worked as an HH member extended his support while making a transaction of Rs. 10,000/-</li>
          <li>Dr. Saleem Babu, an English Mentor, shows his commitment by donating Rs. 500/- every month to support the noble cause.</li>
          <li>Mrs. U. Pavani, Assistant Professor in the Mechanical Department, contributes Rs.700/- on a monthly basis to assist students in need through Helping Hands.</li>
          <li>Mrs. Kalavathi, IT Mentor, shows her support by donating Rs. 100/- every month.</li>
        </ul>

        <h3 style={{ fontSize: "1.25rem", color: "var(--primary-dark)", fontWeight: 700, marginTop: "1.5rem", marginBottom: "0.5rem" }}>Evidence of Success:</h3>
        <p style={{ marginBottom: "1rem" }}>
          The success story of this practice is very interesting and rewarding. Helping Hands has been involved in various noteworthy occasions, events and charitable contributions, demonstrating the commitment to assisting those in need. Here are some of the significant activities and contributions:
        </p>
        <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem", listStyleType: "circle" }}>
          <li>Periodically donates tricycles for the physically challenged students.</li>
          <li>Organizes student visits to old-age homes and orphan child homes.</li>
          <li>Helping Hands Team visited Lekhana Ambedkar Oldage home in Vissannapeta, Krishna district, interacted with them and donated 4 cots and some kitchen utensils on 26/08/2017</li>
          <li>Organized cloth donation in few areas near Munuguru, Khammam district on 28/07/2019.</li>
          <li>Contributed Rs.1,00,000 /- towards kidney transplantation for a student.</li>
          <li>Helping Hands contributed Rs. 1, 00, 000/- for Kerala floods on 07/09/2018.</li>
          <li>Helping Hands contributed Rs. 60,000/- to a student of 2011 batch towards his medical treatment on 02/08/2017.</li>
          <li>Helping Hands contributed Rs. 42,546/- to 2009 batch student suffering from Kidney failure on 11/08/2019.</li>
          <li>Donated Rs.40,000/- for a student of 2013 batch towards his prosthetic leg</li>
          <li>Helping Hands contributed Rs. 25,000/- to a student of 2016 batch towardsher backbone surgery on 03/03/2018.</li>
          <li>Helping Hands contributed Rs. 25, 000/- to a student of 2013 batch suffering from Nephrolithiasis on 05/02/2019.</li>
          <li>Helping Hands contributed Rs.25,000/- to a student of 2018 batch suffering from Hemicolectomy on 30/07/2019.</li>
          <li>Helping Hands contributed Rs. 17,000/- on Woman&apos;s Day.</li>
          <li>Helping Hands contributed Rs. 15,000/- to a student of 2014 batch suffering from Epilepsy on 20/11/2018.</li>
          <li>Helping Hands has initiated a Go Green project at a cost of Rs. 15, 000/- inside the campus in support of green space development in 2019.</li>
          <li>Helping Hands contributed Rs. 10,000/- to a student of 2017 batch towards her ear impaired on 17/02/2018.</li>
          <li>Helping Hands contributed Rs. 10, 000/- to 2015 batch student&apos;s father towards his brain stroke on 15/02/2019</li>
          <li>Helping Hands contributed Rs.10, 000/- to 2018 batch student&apos;s brother towards his brain fever on 05/03/2019.</li>
        </ul>

        <h3 style={{ fontSize: "1.25rem", color: "var(--primary-dark)", fontWeight: 700, marginTop: "1.5rem", marginBottom: "0.5rem" }}>Problems Encountered and Resources Required:</h3>
        <p style={{ marginBottom: "1.5rem" }}>
          There are not many problems in carrying out this practice; since it is voluntarily undertaken by the students. Faculty are only advisors. One problem pertains to the size of operations. Like an ordinary business, students cannot thoroughly involve in the activity, because their primary focus is learning. Secondly, there will be a gap in the operations due to vacation or closure of the campus. This is not considered a serious issue, because the students themselves have to enjoy the vacation and be with their family members. Thirdly, mobilization of resources is a bit difficult, since members only have to contribute and outside fund mobilization is limited to specific events only and is need based.
        </p>

        <h3 style={{ fontSize: "1.25rem", color: "var(--primary-dark)", fontWeight: 700, marginTop: "1.5rem", marginBottom: "0.5rem" }}>Notes:</h3>
        <p style={{ marginBottom: "1.5rem" }}>
          This is truly a unique best practice which other institutions can emulate. The model is particularly suitable to the residential type of institutions. It is the best way to promote community service among students which will help them through their life. It also helps to develop harmony among students and staff, residing at one place.
        </p>

      </div>
    </div>
  );
}
