export interface AcademicDocument {
  title: string;
  date?: string;
  venue?: string;
  url: string;
  fileName: string;
  size?: string;
  subtitle?: string;
  description?: string[];
  contentBlocks?: AcademicContentBlock[];
}

export interface AcademicLinkItem {
  label: string;
  url: string;
}

export interface AcademicContentBlock {
  heading: string;
  text?: string;
  paragraphs?: string[];
  bullets?: string[];
  subText?: string;
  links?: AcademicLinkItem[];
}

export interface AcademicSectionItem {
  id: string;
  label: string;
  shortLabel?: string;
  title: string;
  subtitle?: string;
  description?: string[];
  documents?: AcademicDocument[];
  contentBlocks?: AcademicContentBlock[];
}

/**
 * Academic Programmes Sections
 * Matches the user image and official university structure:
 * 1. Academic Programmes
 * 2. UG-Programme
 * 3. PG-Programme
 * 4. SummerPrograms
 */
export const ACADEMIC_PROGRAMMES_SECTIONS: AcademicSectionItem[] = [
  {
    id: "programmes",
    label: "Academic Programmes",
    title: "Academic Programmes",
    subtitle: "Undergraduate, Postgraduate & Research Streams",
    description: [
      "RGUKT caters to the educational needs of academically gifted rural youth through an innovative pedagogy and integrated technical curricula designed to foster analytical thinking, innovation, and leadership."
    ],
    contentBlocks: [
      {
        heading: "Undergraduate Programme (6-Year Integrated B.Tech)",
        text: "The signature program of RGUKT is a 6-year integrated residential course after Class 10 leading to a Bachelor of Technology (B.Tech) degree. The first phase consists of a 2-year Pre-University Course (equivalent to AP Intermediate) followed by a 4-year specialized Engineering program across 8 core engineering disciplines."
      },
      {
        heading: "Postgraduate Programme (M.Tech)",
        text: "Specialized postgraduate programs formulated in collaboration with premier IITs and IISc, incorporating computational engineering, advanced modeling, and simulation tools.",
        bullets: [
          "Transportation Engineering (Civil Engineering)",
          "Engineering Analysis and Design (Mechanical Engineering)",
          "Advanced Embedded Systems and IoT"
        ]
      },
      {
        heading: "Doctoral Research Programme (Ph.D.)",
        text: "Interdisciplinary Ph.D. research fellowships across Engineering, Physical Sciences, Mathematics, and Humanities fostering impactful applied and fundamental research."
      }
    ]
  },
  {
    id: "ug_prog",
    label: "UG-Programme",
    title: "Undergraduate Programme",
    subtitle: "Features of Six - Years Integrated Course",
    description: [
      "The program offered by the RGUKT consists of a six year integrated course after 10th class examination leading to a B.Tech. degree. The first part of the six-year course is a two-year Pre University Course (equivalent to (AP) Intermediate) followed by a second part of four-year Engineering Course. At present the pre-university part of education offers premature specialization in tracks such as Mathematics, Physics, Chemistry and Life sciences (equivalent to MPC + BiPC). By bringing students in to the University at an earlier stage we hope to impart a broad based education including humanities and liberal arts to students."
    ],
    contentBlocks: [
      {
        heading: "The Pre University Part",
        text: "This is equivalent to the two year Intermediate (AP) education. The program provides a qualitative plus two education in itself and further lays a stronger foundation for the technical and professional courses ahead. It has an inbuilt system for remedial education for the students who are relatively weak. In addition, there is a foundation course in IT, preparing students to make full use of the Information Technology and Communication resources provided by the RGUKT in its novel model of teaching learning. There is a permitted exit after Pre-University if the student chooses to go for a career in other professional programs. The program also provides short-term courses in humanities and social sciences so that the students emerge as confident, energetic, enthusiastic youngsters seeking challenges in their university education and life.",
        links: [
          { label: "Curriculum", url: "https://www.rguktrkv.ac.in/aca-curicula.html" },
          { label: "Regulations", url: "https://www.rguktrkv.ac.in/aca-academicreg.html" }
        ]
      },
      {
        heading: "Degree Programs at RGUKTs",
        text: "Upon completion of 6 years of education, each year consisting of 3 semesters, and the prescribed requirements, the graduates will be awarded a B.Tech. degree in any one of the following engineering disciplines given below",
        bullets: [
          "Chemical Engineering",
          "Civil Engineering",
          "Computer Science and Engineering",
          "Electronics & Communications Engineering",
          "Materials Science and Metallurgical Engineering",
          "Mechanical Engineering"
        ],
        subText: "Further, depending on the performance and by earning additional credits, it is possible to get a B.Tech. with two Majors, i.e., one in Computer Science and the other from among Chemical, Civil, Electronics and Communication, Materials Science and Mechanical. Alternatively it is possible to get a degree with one Major and two Minors or one Major and one Minor. One of the two Minors may be from Business Management, Economics Mathematics, Social Sciences and Statistics.",
        links: [
          { label: "Curriculum", url: "https://www.rguktrkv.ac.in/aca-curicula.html" },
          { label: "Regulations", url: "https://www.rguktrkv.ac.in/aca-academicreg.html" }
        ]
      },
      {
        heading: "Employment Prospects",
        text: "It is expected that the employment prospects of graduates of RGUKT (IIITs) will be comparable to the other world class universities in India. It is also anticipated that the broad-based education including soft skills will provide a strong foundation for national competitive examinations. Appropriate placement guidance and awareness programs will be conducted to prepare the students for private and public sector opportunities. Students also learn entrepreneurship and other skills that can help them to set out on their own."
      },
      {
        heading: "Tuition Fees:",
        text: "As a government sponsored university, the tuition fees at Rajiv Gandhi University are highly subsidized by the AP government. The annual fee (for AP students) for the first two years (Pre University program) is Rs.36,000/-. This includes tuition, lodging and boarding."
      },
      {
        heading: "Focus on Liberal and Professional Education Including Soft Skills",
        paragraphs: [
          "The program at RGUKT is built on a new model of liberal professional education creating future leaders with a broad understanding of the world. A structured environment of broad based education including basic skills of communication, teamwork and leadership is provided. It aims at making students well equipped with life skills and confident problem solvers rather than over specialized engineers who just know the theory. It prepares the student to meet the demands of the work place and society as he or she navigates through life. It stresses lifelong learning through learning to learn, and learning to live.",
          "The program uses the learning-by-doing paradigm of education using personalized mentors and intelligent tutoring systems. The program adapts self-paced learning with variable duration to reach the mastery level outcome. Highly qualified and meritorious faculty will be participating in teaching, learning and research. Many of them are being drawn from the world class institutions such as IITs.",
          "There will be a focus on all-round development with emphasis on personality development and education in Humanities and Social Sciences to make students responsible world citizens. The program is intensive with emphasis on physical training, sports and soft skills. About 30% of time is devoted to soft skills."
        ]
      },
      {
        heading: "Life in a Residential Campus",
        paragraphs: [
          "As a fully residential program, all students will stay on the campus. The program is intensive and runs for 3 semesters of 16 weeks of 6 days a week each. Only 6 weeks of vacation is permitted: 1 week in Dasara, 1 week during Sankranthi and four weeks in summer. While the program appears intensive, it is also designed to help absorption by making students apply concepts right-then-and-there in class.",
          "All education is mediated through the use of Information and Communication technologies. The academic complex is being connected by high speed LAN which extends to each student's desk and a laptop is provided to each student right from his or her first year. Each class of about 50 students will have mentors who will conduct a discourse and discussion around a prerecorded expert lecture. The best part of this learning paradigm is that students will have time in these class sessions to receive the lecture, ask questions, discuss with the help of mentors and apply the concepts to problem solving. A good student would have no homework!",
          "To keep up with this program and life in general, time is set apart for physical fitness activities. During the first two years all students would attend physical training and exercise each morning and participate in sports in the evening. The daily academic program will consist of 4 periods of just less than 2 hours duration each from 8 AM to 4PM with a lunch break. During the evening after dinner, there will be programs in soft skills, reading classics, and viewing selected movie programs from 7.30PM to 10.30PM. This will be a more relaxing and a quiet learning time. Students get to explore their talents in art, drama and music as well. Subsequent year will offer greater flexibility in individual daily schedule.",
          "Separate and secure hostel facilities will be provided for girls and boys. Food and dining facilities will be according to modern standards."
        ]
      }
    ]
  },
  {
    id: "pg_prog",
    label: "PG-Programme",
    title: "Postgraduate Programme",
    subtitle: "Master of Technology (M.Tech)",
    description: [
      "Advanced 2-year postgraduate degrees in engineering formulated in active academic synergy with premier institutions like IITs and IISc, offering deep specialization, research immersion, and state-of-the-art simulation laboratories."
    ],
    contentBlocks: [
      {
        heading: "M.Tech Curriculum Architecture",
        text: "Advanced postgraduate engineering courses formulated to cultivate specialized domain expertise for industry research and collegiate academia.",
        bullets: [
          "Computational Mechanics & Advanced Materials",
          "Highway & Intelligent Transportation Systems",
          "Applied Signal Processing & Embedded Systems"
        ]
      },
      {
        heading: "Research Laboratories & Computational Infrastructure",
        text: "Students have 24x7 access to high-performance computing clusters, CAD/CAM design workstations, embedded IoT experimentation benches, and dedicated research suites."
      },
      {
        heading: "Admission Criteria",
        text: "Candidates with a valid GATE score or merit in the RGUKT postgraduate entrance evaluation are admitted into the specialized streams with academic stipends according to government norms."
      }
    ]
  },
  {
    id: "summer",
    label: "SummerPrograms",
    title: "Summer Programs",
    subtitle: "Skill Internships & Remedial Training",
    description: [
      "Structured summer academic and technical immersion modules bridging semester learning with industry practice, competitive coding, and foundational reinforcement."
    ],
    contentBlocks: [
      {
        heading: "Summer Industrial Internship",
        text: "Mandatory 6-to-8 week industrial immersion for all third-year B.Tech students to gain industry exposure, live project training, and mentorship from corporate leaders."
      },
      {
        heading: "Remedial Coaching & Bridge Workshops",
        text: "Intensive summer development camps in programming languages (C, Python, Java, Data Structures), technical communication, and foundational STEM concepts for emerging scholars."
      },
      {
        heading: "Innovation & Incubation Bootcamps",
        text: "Summer hackathons, product prototyping sprints, and startup mentorship organized in collaboration with the RGUKT Innovation and Incubation Cell (IIEC)."
      }
    ]
  }
];

/**
 * Academic Council Minutes Section
 */
export const ACADEMIC_COUNCIL_SECTIONS: AcademicSectionItem[] = [
  {
    id: "coun_min",
    label: "Academic Council Minutes",
    shortLabel: "AcademicCounMin",
    title: "Academic Council Minutes",
    subtitle: "Meeting Minutes",
    description: [
      "The Academic Council is the apex academic authority of Rajiv Gandhi University of Knowledge Technologies (RGUKT). It exercises general supervision over the academic policies, curricular frameworks, examination systems, and instructional standards across all university campuses."
    ],
    documents: [
      {
        title: "Minutes of Academic Council Meeting (09.01.2018 at RKV)",
        date: "09.01.2018",
        venue: "RK Valley Campus",
        url: "/pdfdoc/AcdConMinRKV1604.pdf",
        fileName: "AcdConMinRKV1604.pdf",
        size: "1.7 MB"
      },
      {
        title: "Minutes of Academic Council Meeting (28.05.2019 at RGUKT HQ)",
        date: "28.05.2019",
        venue: "RGUKT Headquarters",
        url: "/pdfdoc/AcdConMinRGU2805.pdf",
        fileName: "AcdConMinRGU2805.pdf",
        size: "3.1 MB"
      },
      {
        title: "Minutes of Academic Council Meeting (20.09.2020 at RKV)",
        date: "20.09.2020",
        venue: "RK Valley Campus",
        url: "/pdfdoc/AcdConMinRKV2009.pdf",
        fileName: "AcdConMinRKV2009.pdf",
        size: "6.5 MB"
      }
    ]
  }
];

/**
 * Academic Regulations Sections
 * 1. UG Regulations (regulations)
 * 2. PhD Regulations (phd_reg)
 * 3. Academic Calendar (calendar)
 */
export const ACADEMIC_REGULATIONS_SECTIONS: AcademicSectionItem[] = [
  {
    id: "regulations",
    label: "UG Regulations",
    title: "Academic Regulations",
    subtitle: "Undergraduate Programme Rules & Norms",
    contentBlocks: [
      {
        heading: "Statutory Academic Framework",
        text: "Governs curriculum structure, credit requirements (160 AICTE credits), attendance thresholds (75% minimum), continuous internal assessment (Mid examinations), and end-semester grading."
      }
    ],
    documents: [
      {
        title: "Academic Regulations (AY 2022-23 Onwards)",
        url: "/pdfdoc/AcademicRulesRegulations071022.pdf",
        fileName: "AcademicRulesRegulations071022.pdf",
        size: "415 KB",
        subtitle: "Features of Six - Years Integrated Course",
        description: [
          "The program offered by the RGUKT consists of a six year integrated course after 10th class examination leading to a B.Tech. degree. The first part of the six-year course is a two-year Pre University Course (equivalent to (AP) Intermediate) followed by a second part of four-year Engineering Course. At present the pre-university part of education offers premature specialization in tracks such as Mathematics, Physics, Chemistry and Life sciences (equivalent to MPC + BiPC). By bringing students in to the University at an earlier stage we hope to impart a broad based education including humanities and liberal arts to students."
        ],
        contentBlocks: [
          {
            heading: "The Pre University Part",
            text: "This is equivalent to the two year Intermediate (AP) education. The program provides a qualitative plus two education in itself and further lays a stronger foundation for the technical and professional courses ahead. It has an inbuilt system for remedial education for the students who are relatively weak. In addition, there is a foundation course in IT, preparing students to make full use of the Information Technology and Communication resources provided by the RGUKT in its novel model of teaching learning. There is a permitted exit after Pre-University if the student chooses to go for a career in other professional programs. The program also provides short-term courses in humanities and social sciences so that the students emerge as confident, energetic, enthusiastic youngsters seeking challenges in their university education and life.",
            links: [
              { label: "Curriculum", url: "https://www.rguktrkv.ac.in/aca-curicula.html" },
              { label: "Regulations", url: "https://www.rguktrkv.ac.in/aca-academicreg.html" }
            ]
          },
          {
            heading: "Degree Programs at RGUKTs",
            text: "Upon completion of 6 years of education, each year consisting of 3 semesters, and the prescribed requirements, the graduates will be awarded a B.Tech. degree in any one of the following engineering disciplines given below",
            bullets: [
              "Chemical Engineering",
              "Civil Engineering",
              "Computer Science and Engineering",
              "Electronics & Communications Engineering",
              "Materials Science and Metallurgical Engineering",
              "Mechanical Engineering"
            ],
            subText: "Further, depending on the performance and by earning additional credits, it is possible to get a B.Tech. with two Majors, i.e., one in Computer Science and the other from among Chemical, Civil, Electronics and Communication, Materials Science and Mechanical. Alternatively it is possible to get a degree with one Major and two Minors or one Major and one Minor. One of the two Minors may be from Business Management, Economics Mathematics, Social Sciences and Statistics.",
            links: [
              { label: "Curriculum", url: "https://www.rguktrkv.ac.in/aca-curicula.html" },
              { label: "Regulations", url: "https://www.rguktrkv.ac.in/aca-academicreg.html" }
            ]
          },
          {
            heading: "Employment Prospects",
            text: "It is expected that the employment prospects of graduates of RGUKT (IIITs) will be comparable to the other world class universities in India. It is also anticipated that the broad-based education including soft skills will provide a strong foundation for national competitive examinations. Appropriate placement guidance and awareness programs will be conducted to prepare the students for private and public sector opportunities. Students also learn entrepreneurship and other skills that can help them to set out on their own."
          },
          {
            heading: "Tuition Fees:",
            text: "As a government sponsored university, the tuition fees at Rajiv Gandhi University are highly subsidized by the AP government. The annual fee (for AP students) for the first two years (Pre University program) is Rs.36,000/-. This includes tuition, lodging and boarding."
          },
          {
            heading: "Focus on Liberal and Professional Education Including Soft Skills",
            paragraphs: [
              "The program at RGUKT is built on a new model of liberal professional education creating future leaders with a broad understanding of the world. A structured environment of broad based education including basic skills of communication, teamwork and leadership is provided. It aims at making students well equipped with life skills and confident problem solvers rather than over specialized engineers who just know the theory. It prepares the student to meet the demands of the work place and society as he or she navigates through life. It stresses lifelong learning through learning to learn, and learning to live.",
              "The program uses the learning-by-doing paradigm of education using personalized mentors and intelligent tutoring systems. The program adapts self-paced learning with variable duration to reach the mastery level outcome. Highly qualified and meritorious faculty will be participating in teaching, learning and research. Many of them are being drawn from the world class institutions such as IITs.",
              "There will be a focus on all-round development with emphasis on personality development and education in Humanities and Social Sciences to make students responsible world citizens. The program is intensive with emphasis on physical training, sports and soft skills. About 30% of time is devoted to soft skills."
            ]
          },
          {
            heading: "Life in a Residential Campus",
            paragraphs: [
              "As a fully residential program, all students will stay on the campus. The program is intensive and runs for 3 semesters of 16 weeks of 6 days a week each. Only 6 weeks of vacation is permitted: 1 week in Dasara, 1 week during Sankranthi and four weeks in summer. While the program appears intensive, it is also designed to help absorption by making students apply concepts right-then-and-there in class.",
              "All education is mediated through the use of Information and Communication technologies. The academic complex is being connected by high speed LAN which extends to each student's desk and a laptop is provided to each student right from his or her first year. Each class of about 50 students will have mentors who will conduct a discourse and discussion around a prerecorded expert lecture. The best part of this learning paradigm is that students will have time in these class sessions to receive the lecture, ask questions, discuss with the help of mentors and apply the concepts to problem solving. A good student would have no homework!",
              "To keep up with this program and life in general, time is set apart for physical fitness activities. During the first two years all students would attend physical training and exercise each morning and participate in sports in the evening. The daily academic program will consist of 4 periods of just less than 2 hours duration each from 8 AM to 4PM with a lunch break. During the evening after dinner, there will be programs in soft skills, reading classics, and viewing selected movie programs from 7.30PM to 10.30PM. This will be a more relaxing and a quiet learning time. Students get to explore their talents in art, drama and music as well. Subsequent year will offer greater flexibility in individual daily schedule.",
              "Separate and secure hostel facilities will be provided for girls and boys. Food and dining facilities will be according to modern standards."
            ]
          }
        ]
      },
      {
        title: "Academic Regulations (AY 2019-20 Onwards)",
        url: "/pdfdoc/Academic-Regulations-2019.pdf",
        fileName: "Academic-Regulations-2019.pdf",
        size: "918 KB",
        subtitle: "Academic Rules & Regulations (With Effect from AY 2019-20)",
        description: [
          "Approved by the Academic Council of Rajiv Gandhi University of Knowledge Technologies (RGUKT) - AP, these academic rules and regulations govern the 6-Year Integrated B.Tech Program across all four constituent campuses: Nuzvid, RK Valley, Ongole, and Srikakulam with effect from the Academic Year 2019-20."
        ],
        contentBlocks: [
          {
            heading: "Program Architecture & Course Structure",
            text: "The Six-Year Integrated B.Tech program comprises a 2-Year Pre-University Course (PUC) followed by a 4-Year specialized Bachelor of Technology (B.Tech) degree program.",
            bullets: [
              "2-Year Pre-University Course (PUC): Rigorous foundation in Mathematics, Physics, Chemistry, English, and Information Technology.",
              "4-Year B.Tech Program: Specialized technical engineering curricula across Chemical, Civil, Computer Science, Electronics & Communication, Materials Science, and Mechanical Engineering.",
              "Cooperative learning model with modern multimedia classrooms, continuous assessment, and hands-on laboratory practice."
            ]
          },
          {
            heading: "Degree Requirements & Credit Distribution",
            text: "A student shall be eligible for the award of B.Tech degree upon successfully earning the prescribed minimum credits within the stipulated maximum duration.",
            bullets: [
              "Total AICTE-aligned credits required for B.Tech degree: 160 credits.",
              "Provision for earning Honors or Minor degrees by securing additional credits in advanced specialized or interdisciplinary courses.",
              "Mandatory non-credit courses including Environmental Sciences, Constitution of India, and Essence of Indian Traditional Knowledge."
            ]
          },
          {
            heading: "Attendance & Continuous Assessment Scheme",
            text: "RGUKT strictly emphasizes regularity and continuous evaluation across all semesters.",
            bullets: [
              "Minimum attendance requirement of 75% in aggregate across all registered theory and practical courses.",
              "Condonation of attendance up to 10% (between 65% and 75%) on genuine medical grounds subject to approval by the competent authority.",
              "Assessment: 8 Weekly Tests (best 5 considered for 10 marks) and 3 Mid Examinations (best 2 considered for 30 marks), totaling 40 continuous internal assessment marks and 60 End-Semester examination marks."
            ]
          },
          {
            heading: "Grading System & Class Award",
            text: "Academic performance is evaluated using the 10-point letter grading scale:",
            bullets: [
              "Grades: Ex (Outstanding - 10), A (Excellent - 9), B (Very Good - 8), C (Good - 7), D (Fair - 6), Rem (Remedial / Backlog - 0).",
              "First Class with Distinction: Cumulative Grade Point Average (CGPA) ≥ 7.5 without any backlog cleared throughout the program.",
              "First Class: CGPA ≥ 6.5 and < 7.5 (or CGPA ≥ 7.5 with backlogs cleared).",
              "Second Class: CGPA ≥ 5.5 and < 6.5."
            ]
          },
          {
            heading: "Internships & Practical Training",
            text: "Industry immersion is a mandatory graduation requirement for all undergraduate engineering scholars.",
            bullets: [
              "Summer Industrial Internship: Mandatory 6 to 8 weeks internship during summer vacation following the 3rd year (E3).",
              "Long-Term Semester Internship: Provision for select eligible students to pursue a semester-long capstone internship at recognized industrial firms or R&D institutions in their final year (E4)."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "phd_reg",
    label: "PhD Regulations",
    title: "Ph.D. Programme Regulations",
    subtitle: "Research Admission, Coursework & Thesis Guidelines",
    contentBlocks: [
      {
        heading: "General Requirements",
        text: "RGUKT provides comprehensive facilities for research work leading to the Doctor of Philosophy (Ph.D.) degree. The award is based on prescribed doctoral coursework, comprehensive viva, progress seminars, and an original research thesis."
      },
      {
        heading: "Eligibility Criteria",
        text: "Candidates must hold an M.Tech / M.E / M.S. or M.Sc / M.A with a valid GATE score or UGC/CSIR-NET/NBHM qualification with a minimum 60% aggregate (CGPA 6.5/10)."
      }
    ],
    documents: [
      {
        title: "Official PhD Regulations (Effective AY 2022-23)",
        url: "/pdfdoc/PhDRegulations250323.pdf",
        fileName: "PhDRegulations250323.pdf",
        size: "1.5 MB"
      }
    ]
  }
];
