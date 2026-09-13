export interface AuditReportSection {
  title: string;
  content?: string[];
  observations?: string[];
  recommendations?: string[];
  subsections?: {
    subtitle: string;
    paragraphs?: string[];
    bullets?: string[];
  }[];
}

export interface AcademicAuditReport {
  id: string;
  title: string;
  academicYear: string;
  reportDate: string;
  committeeTitle: string;
  committeeMembers: {
    name: string;
    designation: string;
    role?: string;
  }[];
  pdfUrl: string;
  pdfFileName: string;
  pdfSize: string;
  introduction: string;
  sections: AuditReportSection[];
}

export const ACADEMIC_AUDIT_DATA: Record<string, AcademicAuditReport> = {
  "2021-22": {
    id: "2021-22",
    title: "Academic and Administrative Audit of RGUKT-Andhra Pradesh",
    academicYear: "2021-22",
    reportDate: "May 2023",
    committeeTitle: "Academic & Administrative Audit Committee",
    committeeMembers: [
      {
        name: "Prof. K.V. Rao",
        designation: "Former Vice Chancellor, Acharya Nagarjuna University",
        role: "Chairman"
      },
      {
        name: "Prof. D. Harinarayana",
        designation: "Professor (Rtd.), Andhra University",
        role: "Member"
      },
      {
        name: "Prof. G. Mohan Rao",
        designation: "Professor (Rtd.), Indian Institute of Science, Bangalore",
        role: "Member"
      }
    ],
    pdfUrl: "/pdfdoc/AcademicAuditReport19052023.pdf",
    pdfFileName: "AcademicAuditReport19052023.pdf",
    pdfSize: "425 KB",
    introduction:
      "Vide Proceedings of Hon. Chancellor, No. RGUKT-AP dated 1.5.2022, a committee with external experts was constituted to conduct the Academic and Administrative Audit of RGUKT for the academic year 2021-22 across all four campuses. The audit reviews academic excellence, governance efficiency, infrastructure utilization, and research culture.",
    sections: [
      {
        title: "1. Constitution of the Committee",
        content: [
          "Vide Proceedings of Hon. Chancellor, No. RGUKT-AP dated 1.5.2022, a committee with the following experts was constituted to conduct the Academic and Administrative audit of RGUKT for the academic year 2021-22:",
          "1. Prof. K.V. Rao, Former Vice Chancellor, Acharya Nagarjuna University",
          "2. Prof. D. Harinarayana, Professor (Rtd.), Andhra University",
          "3. Prof. G. Mohan Rao, Professor (Rtd.), Indian Institute of Science, Bangalore",
          "The committee was requested to submit its comprehensive report to the Chancellor."
        ]
      },
      {
        title: "2. Establishment of the University & Core Objectives",
        content: [
          "The Rajiv Gandhi University of Knowledge Technologies was established through Act No. 18 of 2008 by the Government of Andhra Pradesh with the primary mandate of nurturing rural meritorious youth:",
          "• To disseminate and advance knowledge in the fields of Information Technology, Nanotechnology, Solar Energy Technology, Biotechnology, and other emerging engineering disciplines.",
          "• To create institutes and centers of excellence for imparting state-of-the-art education, training, and research.",
          "• To develop innovative patterns of teaching, training, curriculum design, and testing methods to attain global education standards.",
          "• To make special provisions for integrated courses in humanities, social sciences, and interdisciplinary areas to promote technology for the larger benefit of mankind.",
          "• To function as resource centers for knowledge management and entrepreneurship development.",
          "• To establish close linkages with industry to make teaching and research relevant to national and global economic needs."
        ]
      },
      {
        title: "3. Organization of the Audit & Evaluation Criteria",
        content: [
          "After detailed deliberations, the committee adopted 10 comprehensive criteria for conducting the academic and administrative audit:",
          "1. Admission Process",
          "2. Curricular Aspects",
          "3. Teaching – Learning Process",
          "4. Infrastructure and Learning Resources",
          "5. Promotion of Research",
          "6. Student Support",
          "7. Governance Issues",
          "8. Environmental Consciousness",
          "9. Societal Engagement",
          "10. Campus Life"
        ]
      },
      {
        title: "4. Admission Process",
        content: [
          "Keeping in view the basic philosophy with which RGUKT was started as a unique model to empower meritorious rural youth through quality professional education, admissions follow the Mandal-best model with deprivation score weightage added for students from Government schools.",
          "At present, the University admits about 4,400 students across its campuses annually, resulting in a total active student strength of over 25,000. The uniqueness of RGUKT is that it inducts students after Class 10 and provides a two-year Pre-University Course (PUC) transitioning seamlessly into the 4-year B.Tech engineering disciplines."
        ]
      },
      {
        title: "5. Curricular Aspects & Outcome Based Education",
        content: [
          "The University has a well-defined statutory structure for Curriculum Design and Development. Ground-level department faculty identify curriculum revisions, followed by detailed deliberation in the Board of Studies (BoS) consisting of external experts from IITs, NITs, industry, and alumni. Final approval is accorded by the Academic Council and reported to the Governing Council.",
          "The University has adopted Outcome Based Education (OBE) with mapped POs, PSOs, PEOs, and COs for all disciplines. In tune with NEP-2020, multi-disciplinary electives, minor degree programs, long-term 1-year industry internships, and mandatory 6-week summer internships are institutionalized."
        ],
        observations: [
          "Attainment mapping of Course Objectives under OBE needs continuous periodic assessment.",
          "While AI/ML and Data Science are offered as electives, dedicated specialized programs can be introduced to cater to emerging market trends.",
          "Admission outreach through public prospectus and state media should be expanded."
        ],
        recommendations: [
          "BoS of all disciplines should meet annually on a fixed calendar schedule.",
          "Curriculum should be updated in line with National Education Policy (NEP-2020) for enhanced inter-disciplinary flexibility.",
          "Structured bridge courses in English communication and foundational mathematics should be organized for incoming rural students."
        ]
      },
      {
        title: "6. Teaching – Learning Process",
        content: [
          "RGUKT's hallmark pedagogy is 'Learning by Doing' supported by Home Room Tutors (HRTs) and continuous mentoring. Because all campuses are fully residential, faculty-student interaction is high. Students actively leverage NPTEL, MOOCs, and 1:1 laptops.",
          "About 25% to 30% of final-year engineering students undertake a Long-Term Internship (LTI) in leading tech industries. Remedial coaching is conducted for slow learners prior to end-semester and supplementary evaluations."
        ],
        observations: [
          "Need for closer coordination between course instructors and students during self-learning hours.",
          "Classrooms require periodic upgrades to audio-visual and ICT equipment to support interactive instruction.",
          "Final-year B.Tech projects require formalized documentation to facilitate research publications."
        ],
        recommendations: [
          "Shift emphasis from lecture-only pedagogy towards hands-on project-based engineering problem solving.",
          "Mandate regular student seminar presentations within the official academic calendar.",
          "Incentivize advanced learners to publish their capstone project findings in peer-reviewed journals."
        ]
      },
      {
        title: "7. Infrastructure and Learning Resources",
        content: [
          "RGUKT campuses feature expansive, pollution-free environments. Each classroom accommodates 60 students with multimedia projection and dedicated power hubs for student laptops. Central Libraries are automated using KOHA open-source software and equipped with OPAC, digital e-resources, journals, and discussion spaces open 9 AM to 8 PM.",
          "RK Valley campus possesses world-class analytical instrumentation including Field Emission Scanning Electron Microscopes (FESEM), high-temperature X-Ray Diffractometers (XRD), and high-temperature fatigue testing equipment (up to 1200°C)."
        ],
        observations: [
          "Sophisticated instrumentation is of national caliber but requires enhanced user utilization programs.",
          "New campus laboratories in Srikakulam and Ongole are undergoing phased construction."
        ],
        recommendations: [
          "Appoint dedicated Estate Officers for infrastructure oversight and preventive maintenance.",
          "Institutionalize structured Annual Maintenance Contracts (AMC) for sophisticated analytical instruments.",
          "Continuously monitor equipment utilization rates to optimize academic deployment."
        ]
      },
      {
        title: "8. Promotion of Research & Innovation",
        content: [
          "The faculty body includes numerous Ph.D. holders from IITs and central universities. Ph.D. doctoral programs have been initiated, and the University launched a Seed Money Grant Scheme of Rs. 20 Lakhs, funding 13 faculty research projects (up to Rs. 1.8 Lakhs each).",
          "Consultancy services are actively undertaken by Civil Engineering and Metallurgy & Materials Engineering departments."
        ],
        recommendations: [
          "Introduce performance-linked incentives and citation bonuses for high-impact Scopus/SCI publications.",
          "Establish technology incubation centers and innovation sandboxes to foster student entrepreneurial start-ups.",
          "Guide undergraduate students in publishing their B.Tech capstone projects."
        ]
      },
      {
        title: "9. Student Support & Co-Curricular Growth",
        content: [
          "Coaching for GATE, GRE, and civil services is organized with mock assessments. Campus Technical Associations (e.g. IETE, IEEE chapters) organize technical symposiums, hackathons, and national contests. Notably, an automotive prototype built by RGUKT students earned all-India recognition.",
          "Daily morning and evening Yoga sessions are conducted under certified instructors, with students winning State and national accolades."
        ]
      },
      {
        title: "10. Governance & Administrative Efficiency",
        content: [
          "The University functions under the leadership of the Chancellor, Vice Chancellor, and Governing Council. Examination management is centrally monitored by a designated Controller of Examinations.",
          "Students are represented on hostel mess committees, anti-ragging squads, internal complaints committees, and library advisory bodies."
        ],
        recommendations: [
          "Streamline fee reimbursement reconciliations with social welfare departments to ensure timely operational inflows.",
          "Strengthen internal audit and automated ERP governance across all campus administrative branches."
        ]
      },
      {
        title: "11. Environmental Consciousness & Green Campus",
        content: [
          "All campuses are eco-friendly with extensive greenery, tree plantations, and water bodies. RK Valley and Nuzvid have installed grid-interactive rooftop Solar PV plants.",
          "Rainwater harvesting pits and dedicated Sewage Treatment Plants (STP) recycle treated wastewater for campus landscaping."
        ]
      },
      {
        title: "12. Societal Engagement & NSS Outreach",
        content: [
          "RGUKT operates 15 active NSS units with over 25 adopted villages. Students conduct Swachh Bharat drives, blood donation camps, voter awareness, flood relief, and rural computer literacy drives.",
          "Accolades received include State-level awards for youth leadership, recognition in the Telugu Book of Records, and special commendations from the Governor of Andhra Pradesh and Vice President of India."
        ]
      },
      {
        title: "13. Campus Life & Residential Welfare",
        content: [
          "Fully residential campus housing students in modern hostel blocks with 24x7 security, hygienic mess halls, RO drinking water, and indoor sports complexes. Staff and faculty quarters, primary healthcare dispensaries with 24x7 ambulance services, post office, and banking facilities are available on campus."
        ]
      },
      {
        title: "14. Concluding Remarks & Commendation",
        content: [
          "RGUKT represents a visionary educational paradigm in India, bridging rural disadvantage to high-tech engineering competence through 1:1 digital learning and free residential technical education.",
          "The Committee commends the University administration, Directors, faculty, and students for their dedicated strides and recommends continued government budgetary backing to elevate RGUKT into a world-class institute of national eminence."
        ]
      }
    ]
  },

  "2020-21": {
    id: "2020-21",
    title: "Academic, Administrative and Financial Audit of RGUKT",
    academicYear: "2020-21",
    reportDate: "November 2020",
    committeeTitle: "Academic, Administrative & Financial Audit Committee",
    committeeMembers: [
      {
        name: "Prof. V. Balamohandas",
        designation: "Former Vice-Chancellor, Acharya Nagarjuna University",
        role: "Chairman"
      },
      {
        name: "Prof. C.R. Visweswara Rao",
        designation: "Former Vice-Chancellor, Vikrama Simhapuri University",
        role: "Member"
      },
      {
        name: "Prof. K.T. Ramakrishna Reddy",
        designation: "Professor of Physics, Sri Venkateswara University",
        role: "Member"
      },
      {
        name: "Prof. D. Harinarayana",
        designation: "Dean, Academics & Examinations, RGUKT",
        role: "Convener"
      }
    ],
    pdfUrl: "/pdfdoc/AcademicAuditReport06042023.pdf",
    pdfFileName: "AcademicAuditReport06042023.pdf",
    pdfSize: "633 KB",
    introduction:
      "Submitted to the Honourable Chancellor, Prof. K.C. Reddy, this comprehensive audit evaluates the academic, administrative, and financial ecosystem of RGUKT campuses with in-depth review of infrastructure, curriculum rigor, faculty development, financial management, and student outcomes.",
    sections: [
      {
        title: "1. Preface & Mandate of the Audit",
        content: [
          "Rajiv Gandhi University of Knowledge Technologies (RGUKT) is a unique university established by Act 18 of 2008 of the Andhra Pradesh Legislature, recognized under Section 12(B) of the UGC Act.",
          "The University provides integrated technical education for rural meritorious students based on merit in Class 10 without coaching burdens. The pedagogy emphasizes self-learning, Learning to Learn, Learning to Think, and Learning to Live, supported by 1:1 computing and residential care.",
          "The audit aims to review educational decision-making, evaluate quality assurance mechanisms, conduct a SWOC analysis, and establish guidelines for academic excellence and financial transparency."
        ]
      },
      {
        title: "2. The Committee and Inspection Meetings",
        content: [
          "The Chancellor, Prof. K.C. Reddy, constituted the committee vide Proceedings dated 27.01.2020. The Committee conducted extensive on-site inspections, laboratory reviews, and stakeholder meetings with administrative officers, HoDs, faculty, and student representatives across RGUKT Nuzvid, RK Valley, and Ongole campuses."
        ]
      },
      {
        title: "3. RK Valley Campus Audit Assessment",
        content: [
          "The RK Valley campus covers 354 acres in Idupulapaya, Kadapa District, featuring lush green surroundings, modern academic blocks, state-of-the-art laboratories, a Central Library, Student Activity Center, auditorium, and faculty quarters.",
          "The Committee observed highly dedicated faculty and vibrant students across Pre-University Course (PUC) and the eight engineering departments: Civil, Chemical, Computer Science, Electronics & Communication, Electrical & Electronics, Mechanical, Metallurgical & Materials, and Humanities/Sciences.",
          "The campus houses sophisticated research equipment including high-temperature XRD and advanced metallurgical electron microscopy setups that serve both academic and industrial consultancy needs."
        ]
      },
      {
        title: "4. Executive Summary of Recommendations",
        subsections: [
          {
            subtitle: "Academic & Pedagogical Reforms",
            bullets: [
              "Transition from purely lecture-based sessions to inquiry-based and problem-solving project tutorials.",
              "Strengthen Outcome Based Education (OBE) course attainment measurements across all departments.",
              "Introduce bridge courses in technical English, phonetics, and mathematical thinking during early PUC-1 induction.",
              "Provide seed grants and computational infrastructure to support faculty research and doctoral scholars."
            ]
          },
          {
            subtitle: "Administrative & Infrastructure Enhancements",
            bullets: [
              "Formulate comprehensive Annual Maintenance Contracts (AMC) for lab equipment, computer systems, and power backups.",
              "Ensure structured career advancement pathways and regular service rules for teaching and non-teaching personnel.",
              "Strengthen Central Library digital subscriptions, IEEE/Elsevier e-journals, and automated book issue portals.",
              "Empower campus Estate Officers to maintain civic infrastructure, water purification plants, and hostel amenities."
            ]
          },
          {
            subtitle: "Financial Governance & Student Welfare",
            bullets: [
              "Streamline government fee reimbursement remittance mechanisms to maintain continuous institutional liquidity.",
              "Maintain strict transparent procurement audits in line with AP State Government e-procurement guidelines.",
              "Continue active student involvement in hostel mess inspection committees to guarantee top-tier nutritional quality.",
              "Expand placement training partnerships with top IT and core engineering organizations."
            ]
          }
        ]
      },
      {
        title: "5. Conclusion & Forward Roadmap",
        content: [
          "The Committee noted that RGUKT is an educational experiment of tremendous social transformation in Andhra Pradesh. With sustained government support, enhanced funding, and faculty empowerment, RGUKT RK Valley and its sister campuses are poised to become benchmark institutes of engineering excellence."
        ]
      }
    ]
  }
};
