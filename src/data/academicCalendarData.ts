export interface CalendarDocument {
  title: string;
  pdfName: string;
  pdfUrl: string;
  badge?: string;
  scope?: string;
}

export interface AcademicYearCalendar {
  year: string;
  isLatest?: boolean;
  description?: string;
  documents: CalendarDocument[];
}

export const ACADEMIC_CALENDAR_DATA: AcademicYearCalendar[] = [
  {
    year: "2024-25",
    isLatest: true,
    description: "Approved official academic calendars for the Academic Year 2024–25 across Pre-University Course (PUC-II) and B.Tech Engineering disciplines (E1 to E4).",
    documents: [
      {
        title: "Engineering - I (AY 2024-25)",
        pdfName: "AC_AY2024-25_E1.pdf",
        pdfUrl: "https://www.rguktrkv.ac.in/pdfdoc/AC_AY2024-25_E1.pdf",
        badge: "Engineering - I",
        scope: "First Year B.Tech (E1) All Branches Academic Schedule"
      },
      {
        title: "PUC-II, Engineering - II & III (AY 2024-25)",
        pdfName: "AC_AY2024-25_P2_E2_E3.pdf",
        pdfUrl: "https://www.rguktrkv.ac.in/pdfdoc/AC_AY2024-25_P2_E2_E3.pdf",
        badge: "PUC-II & E2/E3",
        scope: "Pre-University Course-II & Engineering 2nd/3rd Year Schedule"
      },
      {
        title: "Engineering - IV (AY 2024-25)",
        pdfName: "AC_AY2024-25_E4.pdf",
        pdfUrl: "https://www.rguktrkv.ac.in/pdfdoc/AC_AY2024-25_E4.pdf",
        badge: "Engineering - IV",
        scope: "Final Year B.Tech (E4) Capstone Projects & Placement Term Schedule"
      }
    ]
  },
  {
    year: "2023-24",
    description: "Academic schedules and revised second semester notifications for AY 2023–24.",
    documents: [
      {
        title: "Revised Academic Calendar for 2nd Semester (AY 2023-24)",
        pdfName: "AcademicCalender2023-24S2.pdf",
        pdfUrl: "https://www.rguktrkv.ac.in/pdfdoc/AcademicCalender2023-24S2.pdf",
        badge: "Revised Semester - 2",
        scope: "Semester-II Updated Chronology & Exam Weeks"
      },
      {
        title: "Academic Calendar for the year 2023-24",
        pdfName: "AcademicCalender2023-24.pdf",
        pdfUrl: "https://www.rguktrkv.ac.in/pdfdoc/AcademicCalender2023-24.pdf",
        badge: "Full Academic Year",
        scope: "Official Annual PUC & B.Tech Regulations & Dates"
      }
    ]
  },
  {
    year: "2022-23",
    description: "Approved Academic Calendar for the academic year 2022–23.",
    documents: [
      {
        title: "Academic Calendar for the year 2022-23",
        pdfName: "AcademicCalender2022-23.pdf",
        pdfUrl: "https://www.rguktrkv.ac.in/pdfdoc/AcademicCalender2022-23.pdf",
        badge: "Annual Calendar",
        scope: "Instructional Days, Mid Exams & End Semester Tests"
      }
    ]
  },
  {
    year: "2021-22",
    description: "Academic calendar notifications for AY 2021–22.",
    documents: [
      {
        title: "Semester - 2 Academic Calendar (AY 2021-22)",
        pdfName: "AS2122.pdf",
        pdfUrl: "https://www.rguktrkv.ac.in/pdfdoc/AS2122.pdf",
        badge: "Semester - 2",
        scope: "Second Semester Academic Calendar Schedule"
      }
    ]
  },
  {
    year: "2020-21",
    description: "Academic schedules for AY 2020–21 across Pre-University Course and Engineering divisions.",
    documents: [
      {
        title: "Semester - 1 (PUC-II) Academic Calendar",
        pdfName: "AcademicCalenderP2S12020-21.pdf",
        pdfUrl: "https://www.rguktrkv.ac.in/pdfdoc/AcademicCalenderP2S12020-21.pdf",
        badge: "PUC-II Semester - 1",
        scope: "PUC Second Year First Semester Calendar"
      },
      {
        title: "Semester - 1 (Engineering) Academic Calendar",
        pdfName: "AcademicCalenderEnggS12020-21.pdf",
        pdfUrl: "https://www.rguktrkv.ac.in/pdfdoc/AcademicCalenderEnggS12020-21.pdf",
        badge: "Engineering Semester - 1",
        scope: "Engineering First Semester Calendar"
      }
    ]
  },
  {
    year: "2019-20",
    description: "Detailed semester chronologies across PUC-I, PUC-II, and Engineering departments for AY 2019–20.",
    documents: [
      {
        title: "Semester - 1 Academic Calendar",
        pdfName: "AC1920S1.pdf",
        pdfUrl: "https://www.rguktrkv.ac.in/pdfdoc/AC1920S1.pdf",
        badge: "Semester - 1",
        scope: "General Semester-1 Academic Calendar"
      },
      {
        title: "Semester - 1 (PUC-I) Updated Academic Calendar",
        pdfName: "AY2019-2020-PUC-ISEM-1UpdatedAcademicCalendar.pdf",
        pdfUrl: "https://www.rguktrkv.ac.in/pdfdoc/AY2019-2020-PUC-ISEM-1UpdatedAcademicCalendar.pdf",
        badge: "PUC-I Semester - 1",
        scope: "Updated PUC-I First Semester Schedule"
      },
      {
        title: "Semester - 2 (PUC-I) Academic Calendar",
        pdfName: "AY2019-2020-PUC-ISEM-IIAcademicCalendar.pdf",
        pdfUrl: "https://www.rguktrkv.ac.in/pdfdoc/AY2019-2020-PUC-ISEM-IIAcademicCalendar.pdf",
        badge: "PUC-I Semester - 2",
        scope: "PUC-I Second Semester Schedule"
      },
      {
        title: "Semester - 2 (PUC-II) Academic Calendar",
        pdfName: "AY2019-2020-SEM-II-PUC-IIAcademicCalendar.pdf",
        pdfUrl: "https://www.rguktrkv.ac.in/pdfdoc/AY2019-2020-SEM-II-PUC-IIAcademicCalendar.pdf",
        badge: "PUC-II Semester - 2",
        scope: "PUC-II Second Semester Schedule"
      },
      {
        title: "Semester - 2 (Engineering) Academic Calendar",
        pdfName: "AY2019-2020-SEM-II-EnggAcademicCalendar.pdf",
        pdfUrl: "https://www.rguktrkv.ac.in/pdfdoc/AY2019-2020-SEM-II-EnggAcademicCalendar.pdf",
        badge: "Engineering Semester - 2",
        scope: "Engineering Second Semester Schedule"
      }
    ]
  },
  {
    year: "2018-19",
    description: "Modified and regular semester, winter, and summer academic schedules for AY 2018–19.",
    documents: [
      {
        title: "Modified Semester - 2 (P2-E4)",
        pdfName: "AC2018-19_P2-E4.pdf",
        pdfUrl: "https://www.rguktrkv.ac.in/pdfdoc/AC2018-19_P2-E4.pdf",
        badge: "Modified Semester - 2 (P2–E4)",
        scope: "PUC-2 through Engineering-4 Schedule"
      },
      {
        title: "Modified Semester - 2 (P1)",
        pdfName: "AC2018-19_P1.pdf",
        pdfUrl: "https://www.rguktrkv.ac.in/pdfdoc/AC2018-19_P1.pdf",
        badge: "Modified Semester - 2 (P1)",
        scope: "PUC-1 Second Semester Schedule"
      },
      {
        title: "Semester - 1 Academic Calendar",
        pdfName: "AC1819S1.pdf",
        pdfUrl: "https://www.rguktrkv.ac.in/pdfdoc/AC1819S1.pdf",
        badge: "Semester - 1",
        scope: "First Semester Calendar"
      },
      {
        title: "Winter Semester Academic Calendar",
        pdfName: "AC1819WS1.pdf",
        pdfUrl: "https://www.rguktrkv.ac.in/pdfdoc/AC1819WS1.pdf",
        badge: "Winter Semester",
        scope: "Winter Term Schedule"
      },
      {
        title: "Semester - 2 Academic Calendar",
        pdfName: "AC1819S2.pdf",
        pdfUrl: "https://www.rguktrkv.ac.in/pdfdoc/AC1819S2.pdf",
        badge: "Semester - 2",
        scope: "Second Semester Calendar"
      },
      {
        title: "Summer Semester Academic Calendar",
        pdfName: "AC1819SS2.pdf",
        pdfUrl: "https://www.rguktrkv.ac.in/pdfdoc/AC1819SS2.pdf",
        badge: "Summer Semester",
        scope: "Summer Term Schedule"
      }
    ]
  },
  {
    year: "2017-18",
    description: "Revised semester, winter, and summer academic schedules for AY 2017–18.",
    documents: [
      {
        title: "Semester - 1 (Revised) Academic Calendar",
        pdfName: "AC1718S1_Revised.pdf",
        pdfUrl: "https://www.rguktrkv.ac.in/pdfdoc/AC1718S1_Revised.pdf",
        badge: "Semester - 1 (Revised)",
        scope: "Revised First Semester Calendar"
      },
      {
        title: "Winter Semester (Revised) Academic Calendar",
        pdfName: "AC1718WS1_Revised.pdf",
        pdfUrl: "https://www.rguktrkv.ac.in/pdfdoc/AC1718WS1_Revised.pdf",
        badge: "Winter Semester (Revised)",
        scope: "Revised Winter Term Schedule"
      },
      {
        title: "Semester - 2 (Revised) Academic Calendar",
        pdfName: "AC1718S2_Revised.pdf",
        pdfUrl: "https://www.rguktrkv.ac.in/pdfdoc/AC1718S2_Revised.pdf",
        badge: "Semester - 2 (Revised)",
        scope: "Revised Second Semester Calendar"
      },
      {
        title: "Summer Semester (Revised) Academic Calendar",
        pdfName: "AC1718SS2_Revised.pdf",
        pdfUrl: "https://www.rguktrkv.ac.in/pdfdoc/AC1718SS2_Revised.pdf",
        badge: "Summer Semester (Revised)",
        scope: "Revised Summer Term Schedule"
      }
    ]
  },
  {
    year: "2016-17",
    description: "Academic calendars including revised semester and summer sessions for AY 2016–17.",
    documents: [
      {
        title: "Semester - 1 Academic Calendar",
        pdfName: "AY201617S1Calendar.pdf",
        pdfUrl: "https://www.rguktrkv.ac.in/pdfdoc/AY201617S1Calendar.pdf",
        badge: "Semester - 1",
        scope: "First Semester Calendar"
      },
      {
        title: "Semester - 2 (Revised) Academic Calendar",
        pdfName: "AcademicCSem22017.pdf",
        pdfUrl: "https://www.rguktrkv.ac.in/pdfdoc/AcademicCSem22017.pdf",
        badge: "Semester - 2 (Revised)",
        scope: "Revised Second Semester Calendar"
      },
      {
        title: "Summer Semester (Revised) Academic Calendar",
        pdfName: "AY201617SSCalendar-rev2.pdf",
        pdfUrl: "https://www.rguktrkv.ac.in/pdfdoc/AY201617SSCalendar-rev2.pdf",
        badge: "Summer Semester (Revised)",
        scope: "Revised Summer Term Schedule"
      }
    ]
  },
  {
    year: "2015-16",
    description: "Historical academic schedules and examinations calendar for AY 2015–16.",
    documents: [
      {
        title: "Semester - 1 Academic Calendar",
        pdfName: "AY201516S1Calendar.pdf",
        pdfUrl: "https://www.rguktrkv.ac.in/pdfdoc/AY201516S1Calendar.pdf",
        badge: "Semester - 1",
        scope: "First Semester Calendar"
      },
      {
        title: "Semester - 2 Academic Calendar",
        pdfName: "AY201516S2Calendar.pdf",
        pdfUrl: "https://www.rguktrkv.ac.in/pdfdoc/AY201516S2Calendar.pdf",
        badge: "Semester - 2",
        scope: "Second Semester Calendar"
      },
      {
        title: "Summer Semester Academic Calendar",
        pdfName: "AY201516SSCalendar.pdf",
        pdfUrl: "https://www.rguktrkv.ac.in/pdfdoc/AY201516SSCalendar.pdf",
        badge: "Summer Semester",
        scope: "Summer Term Schedule"
      }
    ]
  }
];
