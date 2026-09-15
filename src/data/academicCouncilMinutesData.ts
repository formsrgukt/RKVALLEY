export interface CouncilMember {
  sno: string | number;
  name: string;
  designation: string;
  representation: string;
}

export interface CouncilAgendaItem {
  itemNumber: string;
  title: string;
  discussion?: string;
  resolution: string;
  table?: {
    headers: string[];
    rows: (string | number)[][];
  };
  subPoints?: string[];
}

export interface CouncilMeetingRecord {
  id: string;
  title: string;
  shortDate: string;
  meetingDate: string;
  meetingTime: string;
  venue: string;
  intro: string;
  pdfUrl?: string;
  membersPresent: CouncilMember[];
  virtualMembers?: CouncilMember[];
  agendaItems: CouncilAgendaItem[];
  otherItems?: {
    title: string;
    description: string;
  }[];
  signatories?: string[];
}

export const ACADEMIC_COUNCIL_MINUTES_DATA: Record<string, CouncilMeetingRecord> = {
  "2018": {
    id: "2018",
    title: "Minutes of Academic Council Meeting (09.01.2018 at RKV)",
    shortDate: "09.01.2018",
    meetingDate: "9th January 2018",
    meetingTime: "09:30 AM",
    venue: "Conference Hall, Guest House of IIIT RK Valley, RGUKT-AP, Idupulapaya, YSR Kadapa District, Andhra Pradesh",
    pdfUrl: "/pdfdoc/AcdConMinRKV1604.pdf",
    intro: "The Academic Council (A.C.) meeting of Rajiv Gandhi University of Knowledge Technologies - AP was conducted at 09:30 AM on 9th January 2018 at the Conference Hall in the Guest House of IIIT RK Valley, RGUKT-AP, Idupulapaya, YSR District.",
    membersPresent: [
      { sno: 1, name: "Prof. D. Raj Reddy", designation: "Chancellor, RGUKT-AP", representation: "Chairman" },
      { sno: 2, name: "Prof. V. Ramachandra Raju", designation: "Vice-Chancellor, RGUKT-AP", representation: "Member" },
      { sno: 3, name: "Prof. M. Venkateswarlu", designation: "Governing Council Member, RGUKT-AP", representation: "Member (Nominee of Dean - Academics, IIIT Hyderabad)" },
      { sno: 4, name: "Prof. N. Balakrishnan", designation: "Honorary Professor, IISc Bengaluru", representation: "Member" },
      { sno: 5, name: "Prof. Damodar Acharya", designation: "Former Chairman, AICTE", representation: "Member" },
      { sno: 6, name: "Prof. Kota Harinarayana", designation: "Former Vice Chancellor, University of Hyderabad", representation: "Member" },
      { sno: 7, name: "Prof. V. Venkata Dasu", designation: "Director, IIIT Nuzvid", representation: "Special Invitee" },
      { sno: 8, name: "Prof. G. Bhagavannayana", designation: "Director, IIIT RK Valley", representation: "Special Invitee" },
      { sno: 9, name: "Prof. V. Venkata Basava Rao", designation: "Director, IIIT Ongole", representation: "Special Invitee" },
      { sno: 10, name: "Prof. S. Hara Sreeramulu", designation: "Director, IIIT Srikakulam", representation: "Special Invitee" },
      { sno: 11, name: "Dr. B. Ratna Suneel", designation: "Associate Dean - Academics (i/c), IIIT Nuzvid", representation: "Member (Nominee of Dean - Academics, IIIT Nuzvid)" },
      { sno: 12, name: "Dr. B. Konda Reddy", designation: "Dean - Academics (i/c), IIIT RK Valley", representation: "Member" },
      { sno: 13, name: "Dr. Ch. Hanumantharao", designation: "Dean - Academics (i/c), IIIT Ongole", representation: "Member" },
      { sno: 14, name: "Dr. Asiri Naidu", designation: "Dean - Academics (i/c), IIIT Srikakulam", representation: "Member" },
      { sno: 15, name: "Prof. V. Venkaiah", designation: "Director, CETLS, RGUKT-AP", representation: "Convener" }
    ],
    agendaItems: [
      {
        itemNumber: "Item 1",
        title: "Ratification of course structure for Pre-University Course (PUC) for the students admitted in A. Y. 2016-17",
        discussion: "The four Constituent Institutes prepared common curriculum for PUC and the same was approved by the respective Boards of Studies. The course structure for PUC implemented from A. Y. 2016-17 admitted batch as given in Annexure - I is placed for ratification.",
        resolution: "Ratified."
      },
      {
        itemNumber: "Item 2",
        title: "Ratification of course structure for Pre-University Course (PUC) for the students admitted in A. Y. 2017-18 onwards",
        discussion: "The four Constituent Institutes prepared common syllabi and course structure for PUC programme, based on Khan Academy PUC lecture series for Mathematics, Physics, and Chemistry courses. The syllabus for English course is formulated focusing on LSRW skills for PUC of 2017-18 admitted batch students. The Course Structure as given in Annexure - II is placed for ratification.",
        resolution: "Ratified."
      },
      {
        itemNumber: "Item 3",
        title: "Approval of course structure for B. Tech Programmes for A. Y. 2018-19 onwards with cooperative education model",
        discussion: "The common course structure for all six B. Tech Programmes of all Institutes as given in Annexure - III with cooperative education model is placed for necessary approval.",
        resolution: "The Academic Council recommended to reduce the credits and to follow the AICTE -2017 credit structure and guidelines."
      },
      {
        itemNumber: "Item 4",
        title: "Ratification of Academic Regulations for six year integrated B. Tech Programme",
        discussion: "The academic regulations of RGUKT are revised for six year integrated B. Tech Programme to be implemented at all the Institutes by a committee with internal officers, Deans (Academic) and senior teachers constituted by the Vice-Chancellor. The modified Academic Regulations are placed before the Academic Council for discussion and approval.",
        resolution: "The Academic Council recommended to modify the Academic regulations and suggested to circulate among the members to finalize the draft."
      }
    ],
    signatories: [
      "Prof. D. Raj Reddy (Chairman)",
      "Prof. V. Ramachandra Raju (Member)",
      "Prof. M. Venkateswarlu (Member)",
      "Prof. N. Balakrishnan (Member)",
      "Prof. Damodar Acharya (Member)",
      "Prof. Kota Harinarayana (Member)",
      "Prof. V. Venkata Dasu (Special Invitee)",
      "Prof. G. Bhagavannayana (Special Invitee)",
      "Prof. V. Venkata Basava Rao (Special Invitee)",
      "Prof. S. Hara Sreeramulu (Special Invitee)",
      "Dr. B. Ratna Suneel (Member)",
      "Dr. B. Konda Reddy (Member)",
      "Dr. Ch. Hanumantharao (Member)",
      "Dr. Asiri Naidu (Member)",
      "Prof. V. Venkaiah (Convener)"
    ]
  },

  "2019": {
    id: "2019",
    title: "Minutes of Academic Council Meeting (28.05.2019 at RGUKT HQ)",
    shortDate: "28.05.2019",
    meetingDate: "28th May 2019",
    meetingTime: "02:30 PM",
    venue: "Conference Hall, RGUKT-AP Headquarters, V.R. Mansion, Kunchanapalli, Guntur District, Andhra Pradesh",
    pdfUrl: "/pdfdoc/AcdConMinRGU2805.pdf",
    intro: "The Academic Council meeting of RGUKT-AP was held on 28th May 2019 at 2:30 PM in the conference hall, RGUKT-AP Head quarters, V.R. Mansion, Kunchanapalli, Guntur District, Andhra Pradesh.",
    membersPresent: [
      { sno: 1, name: "Prof. V. Ramachandra Raju", designation: "Chancellor (FAC) and Vice-Chancellor", representation: "Chairman" },
      { sno: 2, name: "Prof. C. Gangaiah", designation: "Registrar (i/c), RGUKT-AP", representation: "Special Invitee" },
      { sno: 3, name: "Prof. M.P. Narasimha Raju", designation: "PRO, RGUKT-AP", representation: "Special Invitee" },
      { sno: 4, name: "Prof. S. Hara Sreeramulu", designation: "Director, IIIT Srikakulam", representation: "Special Invitee" },
      { sno: 5, name: "Prof. H. Sudarsana Rao", designation: "Director, IIIT RK Valley", representation: "Special Invitee" },
      { sno: 6, name: "Prof. D. Surya Chandra Rao", designation: "Director, IIIT Nuzvid", representation: "Special Invitee" },
      { sno: 7, name: "Prof. C. Venkata Rao", designation: "Director, IIIT Ongole", representation: "Special Invitee" },
      { sno: 8, name: "Mr. N. Chandra Shekar", designation: "Dean Academics (i/c), IIIT RK Valley", representation: "Member" },
      { sno: 9, name: "Mr. Bandi Prasad", designation: "Dean Academics (i/c), IIIT Nuzvid", representation: "Member" },
      { sno: 10, name: "Dr. G. Bhanu Kiran", designation: "Dean Academics (i/c), IIIT Srikakulam", representation: "Member" },
      { sno: 11, name: "Dr. V. Madhu Mohan", designation: "Associate Dean Academics (i/c), IIIT Ongole", representation: "Member (Nominee of Dean Academics, IIIT Ongole)" },
      { sno: 12, name: "Prof. S.S.S.V. Gopala Raju", designation: "Director CELTS", representation: "Member Convener" }
    ],
    agendaItems: [
      {
        itemNumber: "Item 1",
        title: "Approval of proposed Curriculum from Institutional Boards of Studies held on 13th and 14th of April 2019",
        resolution: "The curriculum proposed in the Institute Board of studies held on 13th and 14th of April 2019 at RGUKT Nuzvid campus is approved. The new curriculum shall be implemented for PUC 1 & E1 batches of AY 2019-20 onwards."
      },
      {
        itemNumber: "Item 2",
        title: "Implementation of Self Study Program",
        resolution: "The implementation of Self Study Programme for the A.Y 2018-19 was assessed and it is resolved to offer the program (through NPTEL SWAYAM portal) only to E4 students who opt for long term internship."
      },
      {
        itemNumber: "Item 3",
        title: "Finalization of Academic Regulations",
        resolution: "Approved. The new academic regulations shall come into force w.e.f A.Y. 2019-20 for all the students."
      },
      {
        itemNumber: "Item 4",
        title: "Offering MME & Chemical Engineering Programs only in IIIT Nuzvid & IIIT RK Valley",
        resolution: "It is resolved to offer both MME and Chemical Engineering B. Tech Programs only in IIIT Nuzvid and IIIT RK Valley campuses. The existing E1 students (2016 batch) of MME and Chemical Engineering Departments studying at Srikakulam campus and Ongole campus shall be accommodated at Nuzvid and RK Valley suitably. Branch allocation of students for AY 2019-20 approved as follows:",
        table: {
          headers: ["Branch", "Nuzvid", "RK Valley", "Srikakulam", "Ongole"],
          rows: [
            ["CSE", "300", "300", "360", "360"],
            ["ECE", "300", "300", "360", "360"],
            ["ME", "180", "180", "180", "180"],
            ["CIVIL", "120/180", "180", "120/180", "120/180"],
            ["MME", "60", "60", "--", "--"],
            ["CHEMICAL", "60", "60", "--", "--"]
          ]
        }
      },
      {
        itemNumber: "Item 5",
        title: "Minimum attendance requirement for writing end semester examinations",
        resolution: "Every student is expected to have 100% attendance in all registered subjects. A minimum of 75% attendance is required to be eligible for End Semester Examinations. An additional 10 days (maximum) beyond 25% may be given for co-curricular/extracurricular activities, NCC/NSS Camps, and CDPC activities. Attendance between >=65% and <75% may be condoned on valid medical grounds. Students of PUC 2 (2017 batch) & E4 (2013 batch) allowed to write remedial exams scheduled in June 2019."
      },
      {
        itemNumber: "Item 6",
        title: "Minors in Engineering Disciplines and minimum CGPA requirement",
        resolution: "Students should have obtained a minimum CGPA of 8.5 and above in order to opt for minor programs in Engineering, Basic sciences and Humanities. Students who wish to opt for minors in fine arts/Physical Education/yoga must have a minimum of 7.0 CGPA."
      },
      {
        itemNumber: "Item 7",
        title: "Minimum Pass Mark and Relative Grading System for Major and Minor Programs",
        resolution: "Resolved to adopt the relative grading system from 2019-20 AY onwards with a maximum cutoff deviation of ±10 marks from absolute grading.",
        table: {
          headers: ["Marks Range", "Grade", "Grade Points", "% of Students Expected in Range"],
          rows: [
            ["90 - 100", "EX", 10, "Top 5% of students"],
            ["80 - 89", "A", 9, "Next 20% of students"],
            ["70 - 79", "B", 8, "Next 35% of students"],
            ["60 - 69", "C", 7, "Next 20% of students"],
            ["50 - 59", "D", 6, "Next 15% of students"],
            ["< 50", "Remedial (R)", 0, "Last 5% of students"]
          ]
        },
        subPoints: [
          "In each subject, marks awarded are compiled into cumulative frequency tables.",
          "Cutoff mark for each grade is determined based on the target percentage percentiles (e.g. EX border at top 5%, A border at next 20%).",
          "Lower of relative vs absolute cutoff is adopted, subject to max 10 marks deviation from absolute grading scale."
        ]
      },
      {
        itemNumber: "Item 8",
        title: "Grade Conversions for Non-Conventional Courses (NPTEL)",
        resolution: "Marks obtained in proctored NPTEL courses are divided by 10 and rounded off to the next highest nearest integer (e.g. 84.2% -> 8.42 -> Grade 9.0)."
      },
      {
        itemNumber: "Item 9",
        title: "Minimum student strength to offer an elective course",
        resolution: "Minimum strength required is one third of class strength, but not less than 15 students."
      },
      {
        itemNumber: "Item 10",
        title: "Number of weekly tests and MID tests per semester",
        resolution: "8 weekly assessment tests (best 5 considered for 10 marks). 3 Mid Examinations (best 2 considered for 30 marks)."
      },
      {
        itemNumber: "Item 11",
        title: "Remedial examinations schedule",
        resolution: "Director, CELTS shall circulate a common accepted schedule across all campuses."
      },
      {
        itemNumber: "Item 12",
        title: "Course Equivalency for detained students",
        resolution: "Campus Academic Deans are entrusted to identify equivalent courses for detained students."
      },
      {
        itemNumber: "Item 13",
        title: "Incentive marks for sports, games, and yoga students",
        resolution: "Award of incentive marks (in each subject) for medalists and participants in sports events:",
        table: {
          headers: ["Tournament Type", "Category", "Incentive Marks"],
          rows: [
            ["International", "Medalist", "15 Marks"],
            ["International", "Participants", "10 Marks"],
            ["All India Inter University", "Medalist", "10 Marks"],
            ["All India Inter University", "Participants", "5 Marks"],
            ["South India Inter University", "Medalist", "8 Marks"],
            ["South India Inter University", "Participants", "3 Marks"]
          ]
        }
      },
      {
        itemNumber: "Item 14",
        title: "Introducing new B.Tech Program in Electrical & Electronics Engineering (EEE)",
        resolution: "Resolved to initiate process to start Agricultural Engineering at IIIT Srikakulam and Electrical & Electronics Engineering (EEE) at IIIT RK Valley and IIIT Nuzvid with due approvals from Governing Council and AICTE from AY 2020-21."
      },
      {
        itemNumber: "Item 15",
        title: "Maximum duration for completing PUC Program",
        resolution: "The maximum duration for completing the PUC program is 4 Years (2 + 2)."
      },
      {
        itemNumber: "Item 16",
        title: "Maximum duration for completing B.Tech Program",
        resolution: "The maximum duration for completing the engineering program is 8 years."
      },
      {
        itemNumber: "Item 17",
        title: "Additional chance for students completing beyond stipulated time",
        resolution: "Resolved to grant one additional chance to all students unable to complete within stipulated duration."
      },
      {
        itemNumber: "Item 18",
        title: "Re-admission appeal of Mr. Dadisetti Durga Sai (S16 Batch, IIIT Srikakulam)",
        resolution: "Considered the student's request on humanitarian grounds and permitted re-admission into E1 for AY 2019-20."
      },
      {
        itemNumber: "Item 19",
        title: "Allotment of grading for PUC laboratory courses",
        resolution: "Resolved to implement separate grading for theory and laboratory courses for PUC in line with engineering courses."
      },
      {
        itemNumber: "Item 20",
        title: "Common Academic Calendar for all campuses",
        resolution: "Resolved to follow a unified common Academic Calendar across all four campuses for semester starting/closing dates, mid exams, final exams, holidays, and vacations."
      },
      {
        itemNumber: "Item 21",
        title: "Range of grades for award of Distinction, First Class, and Second Class",
        resolution: "Adopted the following classification based on cumulative GPA (CGPA):",
        table: {
          headers: ["CGPA Range", "Division / Class Awarded"],
          rows: [
            ["≥ 7.5 (without any backlog throughout)", "First Class with Distinction"],
            ["≥ 7.5 (with at least one backlog cleared)", "First Class"],
            ["< 7.5 and ≥ 6.5", "First Class"],
            ["< 6.5 and ≥ 5.5", "Second Class"],
            ["< 5.5", "Pass Class"]
          ]
        }
      }
    ]
  },

  "2020": {
    id: "2020",
    title: "Minutes of Academic Council Meeting (20.09.2020 at RKV)",
    shortDate: "20.09.2020",
    meetingDate: "20th September 2020",
    meetingTime: "03:30 PM",
    venue: "Conference Hall, RGUKT R.K. Valley Campus, Idupulapaya, YSR Kadapa District, Andhra Pradesh",
    pdfUrl: "/pdfdoc/AcdConMinRKV2009.pdf",
    intro: "The First meeting of the reconstituted Academic Council of RGUKT was held at 03:30 PM on 20th September 2020 in the Conference Hall, RGUKT R.K. Valley Campus, Idupulapaya, YSR Kadapa District. Several eminent council members joined virtually via Skype Web Application.",
    membersPresent: [
      { sno: 1, name: "Prof. K.C. Reddy", designation: "Chancellor, RGUKT", representation: "Chairman" },
      { sno: 2, name: "Prof. K. Hemachandra Reddy", designation: "Vice-Chancellor (FAC), RGUKT", representation: "Member" },
      { sno: 3, name: "Mr. B. Prasad", designation: "Dean, Academics (I/c), RGUKT Nuzvid campus", representation: "Member" },
      { sno: 4, name: "Dr. G. Ramesh", designation: "Dean, Academics (I/c), RGUKT R.K. Valley campus", representation: "Member" },
      { sno: 5, name: "Dr. G. Bhanu Kiran", designation: "Dean, Academics (I/c), RGUKT Srikakulam campus", representation: "Member" },
      { sno: 6, name: "Prof. K.N. Satyanarayana", designation: "Director, IIT-Tirupati", representation: "Permanent Invitee" },
      { sno: 7, name: "Prof. B. Sudheer Prem Kumar", designation: "Director (FAC), R.K. Valley & Ongole campuses", representation: "Special Invitee" },
      { sno: 8, name: "Prof. D. Harinarayana", designation: "Dean, Academics & Examinations, RGUKT", representation: "Special Invitee" }
    ],
    virtualMembers: [
      { sno: 1, name: "Prof. Jayanthi Sivaswamy", designation: "Dean, Academics, IIIT Hyderabad", representation: "Member" },
      { sno: 2, name: "Prof. S.S.S.V. Gopala Raju", designation: "Director, CETLS, RGUKT & Director (FAC), Nuzvid", representation: "Member" },
      { sno: 3, name: "Prof. B.S. Murty", designation: "Director, IIT Hyderabad", representation: "Member" },
      { sno: 4, name: "Prof. Kavi Mahesh", designation: "Director, IIIT Dharwad", representation: "Member" },
      { sno: 5, name: "Dr. Vijaya Chandru", designation: "INAE Distinguished Technologies, IISc Bengaluru", representation: "Member" },
      { sno: 6, name: "Prof. P.J. Narayanan", designation: "Director, IIIT Hyderabad", representation: "Permanent Invitee" },
      { sno: 7, name: "Prof. N. Balakrishnan", designation: "Former Associate Director, IISc Bengaluru", representation: "Permanent Invitee" },
      { sno: 8, name: "Shri V. Rajanna", designation: "Vice President, Tata Consultancy Services (TCS)", representation: "Special Invitee (IT Industry)" },
      { sno: 9, name: "Dr. T.V.L. Narasimha Rao", designation: "Vice President, Sundaram Clayton, TVS Motors, Chennai", representation: "Special Invitee (Automobile Sector)" },
      { sno: 10, name: "Dr. Deepak Srinivas Madala", designation: "Founding President, IT Association of AP (THE-AP/ITAPP)", representation: "Special Invitee (Industrial Engg.)" }
    ],
    agendaItems: [
      {
        itemNumber: "Item 1 (RGUKT/AC/I/1/2020)",
        title: "Final Year (E4) online examinations schedule",
        discussion: "The Chairman explained in detail that the University will conduct End Semester Examinations online for E4 students due to prevailing circumstances, and Aceline Tech Solutions (Pvt) Ltd was identified to conduct the examinations with two mock tests prior to final examination.",
        resolution: "Approved: a) Conduct of E4 End Semester Examinations online for the year 2019-20, and b) Hiring services of Aceline Tech Solutions Pvt Ltd on agreed terms to conduct examinations online through remote proctoring after holding two mock tests."
      },
      {
        itemNumber: "Item 2 (RGUKT/AC/I/2/2020)",
        title: "Admissions policy for 2020-21 and conduct of OMR-based Common Entrance Test (CET)",
        discussion: "Andhra Pradesh Government did not conduct 10th Class examinations and GPA was not awarded for the 2019-20 batch. Admission into RGUKT is strictly merit-based.",
        resolution: "Resolved to approve conduct of Common Entrance Test (CET) with Mathematics (50 marks, Part-I) and Science (50 marks, Part-II) for 100 marks based on 10th standard syllabus. Examination will be pen-and-paper OMR based. Video guidance and model paper to be hosted on website."
      },
      {
        itemNumber: "Item 3 (RGUKT/AC/I/3/2020)",
        title: "Changes in Academic Rules & Regulations for academic year 2020-21",
        resolution: "Resolved to have wider discussion on proposed changes in Academic Rules and Regulations among various stakeholders in the RGUKT institutes and submit final proposal to the next Academic Council."
      },
      {
        itemNumber: "Item 4 (RGUKT/GC/46/C/4/2020)",
        title: "Changes to the PUC program from Academic Year 2020-21",
        resolution: "Resolved to conduct wider consultation on proposed structural changes in Academic Rules and Regulations of PUC program across all campuses."
      },
      {
        itemNumber: "Item 5 (RGUKT/AC/I/5/2020)",
        title: "Proposal to offer Ph.D program and revival of M.Tech programs",
        resolution: "Resolved to revive M.Tech program in older campuses (Nuzvid and R.K. Valley) in industry-collaborative streams with practice/doing learning strategy. M.Tech and Ph.D. programs will be formally introduced after senior faculty recruitment against sanctioned AP Government positions is completed."
      },
      {
        itemNumber: "Item 6 (RGUKT/AC/I/6/2020)",
        title: "Starting Electrical & Electronics Engineering (EEE) branch from AY 2020-21",
        resolution: "Approved starting of Electrical & Electronics Engineering (EEE) branch from AY 2020-21, considering high student demand, easing pressure on existing branches, and expanding core employment opportunities."
      }
    ],
    otherItems: [
      {
        title: "Centre for Teaching-Learning & Educational Impact Study",
        description: "Based on the suggestion by Prof. K.N. Satyanarayana (Director, IIT Tirupati), resolved to consider establishing a Centre for Teaching-Learning to train faculty and undertake continuous studies on university educational needs. Also resolved to commission a study on the impact of RGUKT on its students' journey: 'Learning to Learn, Learning to Think and Learning to Live'."
      }
    ],
    signatories: [
      "Prof. K.C. Reddy (Chancellor and Chairman of Academic Council, RGUKT)"
    ]
  }
};
