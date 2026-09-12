export interface NirfDocument {
  title: string;
  url: string;
}

export interface NirfYearData {
  year: string;
  title: string;
  documents: NirfDocument[];
  contact?: {
    name: string;
    designation: string;
    email: string;
    profileUrl?: string;
  };
}

export const nirfData: Record<string, NirfYearData> = {
  "2017": {
    year: "2017",
    title: "NIRF (2016-17)",
    documents: [
      { title: "Consultancy Project Detail", url: "https://www.rguktrkv.ac.in/pdfdoc/ConsultancyProjectDetail.pdf" },
      { title: "Enterpreneurship NIRF", url: "https://www.rguktrkv.ac.in/pdfdoc/EnterpreneurshipNIRF.pdf" },
      { title: "Executive Development Program", url: "https://www.rguktrkv.ac.in/pdfdoc/ExecutiveDevelopmentProgram.pdf" },
      { title: "Higher Studies", url: "https://www.rguktrkv.ac.in/pdfdoc/HigherStudies.pdf" },
      { title: "Sponsored Research Detail", url: "https://www.rguktrkv.ac.in/pdfdoc/SponsoredResearchDetail2.pdf" },
      { title: "Top University Details 3D", url: "https://www.rguktrkv.ac.in/pdfdoc/TopUniversityDetails_3D.pdf" },
      { title: "Top University Details 5D", url: "https://www.rguktrkv.ac.in/pdfdoc/TopUniversityDetails_5D.pdf" }
    ],
    contact: {
      name: "Mr. Abdul Aziz MD",
      designation: "Nodal Officer, Associate Dean of Academics",
      email: "mdabdulaziz@rguktrkv.ac.in",
      profileUrl: "https://www.rguktrkv.ac.in/Profile.php?id=Dr_P_Justin&dep=Chy"
    }
  },
  "2018": {
    year: "2018",
    title: "NIRF (2017-18)",
    documents: [
      { title: "Overall Report", url: "https://www.rguktrkv.ac.in/pdfdoc/NIRF_2017-18.pdf" },
      { title: "Students Details", url: "https://www.rguktrkv.ac.in/pdfdoc/NIRF_StudentsDetails_2017-18.pdf" },
      { title: "Faculty Details", url: "https://www.rguktrkv.ac.in/pdfdoc/NIRF_FacultyDetails_2017-18.pdf" },
      { title: "Facilities", url: "https://www.rguktrkv.ac.in/pdfdoc/NIRF_Facilities_2017-18.pdf" },
      { title: "IPR & Research Funding", url: "https://www.rguktrkv.ac.in/pdfdoc/NIRF_IPRRF_2017-18.pdf" },
      { title: "PCS facilities", url: "https://www.rguktrkv.ac.in/pdfdoc/NIRF_PCS_2017-18.pdf" },
      { title: "Consultancy projects", url: "https://www.rguktrkv.ac.in/pdfdoc/NIRF_ConsultancyProjects_2017-18.pdf" },
      { title: "Campus placements 2014-2017", url: "https://www.rguktrkv.ac.in/pdfdoc/NIRF_Placements_2017-18.pdf" }
    ],
    contact: {
      name: "Mr. Y Arun Kumar Reddy",
      designation: "Nodal Officer, Associate Dean of Academics",
      email: "yarunkumarreddy@rguktrkv.ac.in",
      profileUrl: "https://www.rguktrkv.ac.in/Profile.php?id=Dr_P_Justin&dep=Chy"
    }
  },
  "2019": {
    year: "2019",
    title: "NIRF (2018-19)",
    documents: [
      { title: "Overall Report", url: "https://www.rguktrkv.ac.in/pdfdoc/NIRF_2018-19_Overall.pdf" },
      { title: "Engineering", url: "https://www.rguktrkv.ac.in/pdfdoc/NIRF_2018-19_Engineering.pdf" }
    ],
    contact: {
      name: "Mr. Y Arun Kumar Reddy",
      designation: "Nodal Officer, Associate Dean of Academics",
      email: "yarunkumarreddy@rguktrkv.ac.in",
      profileUrl: "https://www.rguktrkv.ac.in/Profile.php?id=Dr_P_Justin&dep=Chy"
    }
  },
  "2020": {
    year: "2020",
    title: "NIRF (2019-20)",
    documents: [
      { title: "Engineering", url: "https://www.rguktrkv.ac.in/pdfdoc/NIRF_2019-20_Engineering.pdf" }
    ],
    contact: {
      name: "Mr. Y Arun Kumar Reddy",
      designation: "Nodal Officer, Associate Dean of Academics",
      email: "yarunkumarreddy@rguktrkv.ac.in",
      profileUrl: "https://www.rguktrkv.ac.in/Profile.php?id=Dr_P_Justin&dep=Chy"
    }
  },
  "2021": {
    year: "2021",
    title: "NIRF (2020-21)",
    documents: [
      { title: "Engineering", url: "https://www.rguktrkv.ac.in/pdfdoc/NIRF_2020-21_Engineering.pdf" }
    ],
    contact: {
      name: "Mr. Y Arun Kumar Reddy",
      designation: "Nodal Officer",
      email: "yarunkumarreddy@rguktrkv.ac.in",
      profileUrl: "https://www.rguktrkv.ac.in/profile-AzizMD"
    }
  },
  "2022": {
    year: "2022",
    title: "NIRF (2021-22)",
    documents: [
      { title: "Engineering", url: "https://www.rguktrkv.ac.in/pdfdoc/nirfRKValley20220310.pdf" }
    ],
    contact: {
      name: "Dr P Justin",
      designation: "Nodal Officer",
      email: "p.justin@rguktrkv.ac.in",
      profileUrl: "https://www.rguktrkv.ac.in/Profile.php?id=Dr_P_Justin&dep=Chy"
    }
  },
  "2023": {
    year: "2023",
    title: "NIRF (2022-23)",
    documents: [
      { title: "Engineering", url: "https://www.rguktrkv.ac.in/pdfdoc/nirfRKValley20230902.pdf" }
    ],
    contact: {
      name: "Dr P Justin",
      designation: "Nodal Officer",
      email: "p.justin@rguktrkv.ac.in",
      profileUrl: "https://www.rguktrkv.ac.in/Profile.php?id=Dr_P_Justin&dep=Chy"
    }
  },
  "2024": {
    year: "2024",
    title: "NIRF - 2024",
    documents: [
      { title: "Engineering", url: "https://www.rguktrkv.ac.in/pdfdoc/NIRF2024.pdf" }
    ],
    contact: {
      name: "Dr P Justin",
      designation: "Nodal Officer",
      email: "p.justin@rguktrkv.ac.in",
      profileUrl: "https://www.rguktrkv.ac.in/Profile.php?id=Dr_P_Justin&dep=Chy"
    }
  },
  "2025": {
    year: "2025",
    title: "NIRF - 2025",
    documents: [
      { title: "Engineering", url: "https://www.rguktrkv.ac.in/pdfdoc/NIRF2025.pdf" }
    ],
    contact: {
      name: "Dr P Justin",
      designation: "Nodal Officer",
      email: "p.justin@rguktrkv.ac.in",
      profileUrl: "https://www.rguktrkv.ac.in/Profile.php?id=Dr_P_Justin&dep=Chy"
    }
  },
  "2026": {
    year: "2026",
    title: "NIRF - 2026",
    documents: [
      { title: "Engineering", url: "https://www.rguktrkv.ac.in/pdfdoc/NIRF2026.pdf" },
      { title: "NIRF Overall", url: "https://www.rguktrkv.ac.in/pdfdoc/NIRFALL2026.pdf" },
      { title: "NIRF SDG INSTITUTION", url: "https://www.rguktrkv.ac.in/pdfdoc/NIRFSDG2026.pdf" }
    ],
    contact: {
      name: "Mrs. M. DSVJP Koteswari",
      designation: "Nodal Officer",
      email: "dean.iqac@rgukt.in",
      profileUrl: "https://rgukt.in/administration/dean-iqac/"
    }
  }
};
