import { Department } from "@/data/rguktData";

export interface FacultyProfile {
  id: string;
  name: string;
  designation: string;
  qualification: string;
  almaMater: string;
  specialization: string;
  email: string;
  phone: string;
  cabin: string;
  experience: string;
  publicationsCount: number;
  patentsCount: number;
  researchAreas: string[];
  coursesTaught: string[];
  officeHours: string;
  bio: string;
  gender: "m" | "f";
  isHod?: boolean;
  image?: string;
  extendedBioHtml?: string;
  educationDetails?: string;
  teachingExperience?: string;
  researchExperience?: string;
  booksPublished?: string;
  journalPapers?: string;
  conferencePapers?: string;
  workshopsAttended?: string;
  refresherCourses?: string;
  scholarshipsAwards?: string;
  administrativePositions?: string;
  committeeMemberships?: string;
}

export const getDepartmentFaculty = (dept: Department): FacultyProfile[] => {
  if (dept.id === "bio") {
    return [
      {
        id: "fac-dr-roger-binny",
        name: "Dr. A. Job Roger Binny",
        designation: "Head of the Department, Mentor",
        qualification: "M.Sc., B.Ed., Ph.D",
        almaMater: "Sri Venkateswara University",
        specialization: "Botany-Biodiversity",
        email: "rogerbinny@rguktrkv.ac.in",
        phone: "+91 8588-283687",
        cabin: "Biology Department Office",
        experience: "17+ Years",
        publicationsCount: 6,
        patentsCount: 0,
        researchAreas: [
          "Plant Systematics",
          "Angiosperm Taxonomy",
          "Biodiversity",
          "Phytomedicine"
        ],
        coursesTaught: [
          "Biology for Engineers",
          "Environmental Science",
          "Biodiversity Conservation"
        ],
        officeHours: "Mon-Fri: 10:00 AM - 5:00 PM",
        bio: "Faculty in Biology at RGUKT, R.K. Valley since 2009. Date of Join: 01-April-2009. Experience @ RK Valley: 17 years, 5 months, and 12 days.",
        gender: "m",
        isHod: true,
        image: "/images/Dr_A_Job_Roger_Binny.jpg",
        extendedBioHtml: `
<h4 style="color: var(--primary-dark); font-size: 1.25rem; margin-top: 1.5rem; margin-bottom: 0.75rem;">Research Publications Overview</h4>
<div style="overflow-x: auto;">
  <table style="width: 100%; border-collapse: collapse; text-align: center; border: 1px solid #cbd5e1; margin-bottom: 1.5rem;">
    <thead>
      <tr style="background-color: #3b82f6; color: white;">
        <th style="padding: 0.75rem; border: 1px solid #cbd5e1;">Books Published</th>
        <th colspan="2" style="padding: 0.75rem; border: 1px solid #cbd5e1;">Papers Published</th>
        <th colspan="2" style="padding: 0.75rem; border: 1px solid #cbd5e1;">Papers Published in Seminars/Conferences/Workshops</th>
        <th colspan="2" style="padding: 0.75rem; border: 1px solid #cbd5e1;">Seminars/Conferences/Workshops Attended</th>
      </tr>
      <tr style="background-color: #eff6ff; color: #1e3a8a; font-weight: 600;">
        <th style="padding: 0.5rem; border: 1px solid #cbd5e1;">Total</th>
        <th style="padding: 0.5rem; border: 1px solid #cbd5e1;">International</th>
        <th style="padding: 0.5rem; border: 1px solid #cbd5e1;">National</th>
        <th style="padding: 0.5rem; border: 1px solid #cbd5e1;">International</th>
        <th style="padding: 0.5rem; border: 1px solid #cbd5e1;">National</th>
        <th style="padding: 0.5rem; border: 1px solid #cbd5e1;">International</th>
        <th style="padding: 0.5rem; border: 1px solid #cbd5e1;">National</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 0.5rem; border: 1px solid #cbd5e1; font-weight: bold;">1</td>
        <td style="padding: 0.5rem; border: 1px solid #cbd5e1; font-weight: bold;">6</td>
        <td style="padding: 0.5rem; border: 1px solid #cbd5e1; font-weight: bold;">--</td>
        <td style="padding: 0.5rem; border: 1px solid #cbd5e1; font-weight: bold;">3</td>
        <td style="padding: 0.5rem; border: 1px solid #cbd5e1; font-weight: bold;">4</td>
        <td style="padding: 0.5rem; border: 1px solid #cbd5e1; font-weight: bold;">3</td>
        <td style="padding: 0.5rem; border: 1px solid #cbd5e1; font-weight: bold;">5</td>
      </tr>
    </tbody>
  </table>
</div>
`,
        educationDetails: "Doctoral Degree from (Botany-Biodiversity) Sri Venkateswara University, Dec, 2014.\nMaster of Sciences (Botany) from Sri Venkateswara University, June, 2008.\nBachelor of Education from Sri Venkateswara University, June, 2007.\nBachelor of Science from Sri Venkateswara University, June, 2005.",
        teachingExperience: "Faculty in Biology at RGUKT, R.K. Valley since 2009.",
        researchExperience: "Research Experience: 6 Years.",
        booksPublished: "Yasodamma N. & Job Roger Binny A. (2011). \"An Illustrative Taxonomic key for identification of Angiosperm Families\". Nandaluri Publication, Tirupati.",
        journalPapers: "Job Roger Binny and N. Yasodamma \"Floristic Enumeration of Sri Venkateswara Zoological Park for the Future Conservation of Biodiversity.\" Indian Streams Research Journal, International Multidisciplinary Research Journal, Vol 4 Issue 4 May 2014, ISSN: 2230-7850 (IF=2.1506)\nN.Yasodamma*, K.S. Shanthi Sree, C. Alekhya, D. Chaithra, A. Job Roger Binny “Pharmacognostic Studies of Sebastiania chamaelea Muell. Arg.” International Journal of Pharmacy and Pharmaceutical Sciences, Vol 5, Issue 3, 12 June 2013, 833-839 ISSN 0975-1491\nAlekhya, N. Yasodamma, D. Chaithra, A. Job Roger Binny, \"Anthelmintic Activity of Aeschynomene aspera and Aeschynomene indica\" International Journal of Pharmacy and Pharmaceutical Sciences. Vol 5 (2), ISSN: 0975-1491. (IF=1.59)\nN. Yasodamma, K. S. Shanthi Sree, C. Alekhya, A. Job Roger Binny, \"In- Vitro Antioxidant Activity and Quantitative Analysis\" of Total Phenolic and Flavonoid Compounds of Sebastiania chamaelea Muell. Arg. Leaf Extracts.\" International Journal of Pharma and Bio Sciences 2013, ISSN: 0975-6299 (IF=0.87).\nK. Naga Malleswari, N. Yasodamma, A. Job Roger Binny, \"Phytochemical Screening, Antibacterial and Antifungal Studies of Pittosporum floribundum Wight & Arn. Leaf, Bark, Fruit and Seed Extracts.\" International Journal of Pharma and Bio Sciences 2013, ISSN: 0975-6299. (IF=0.87)\nMeera Saheb Chittoor, Avula Job Roger Binny, Siva Kumari Yadlapalli, Alekhya Cheruku, Chaithra Dandu, Yasodamma Nimmanapalli. \"Anthelmintic and antimicrobial studies of Drimia indica (Roxb.) Jessop. bulb aqueous extracts\" Journal of Pharmacy Research 2012, 5(5), 3677-3686, ISSN: 0974-6943. (IF=2.36)",
        conferencePapers: "INTERNATIONAL\nActively participated and presented a Poster Presentation entitled \"Study on Ecological Diversity in Relation to the Plant Wealth of S.V.U. Zoological Park\" in the 2nd International Seminar on \"Medicinal Plants and Herbal Products (ISMPHP-2010)\" organized by the Department of Botany, S.V.University, during 27-29, December, 2010.\nActively participated and presented a oral paper entitled \"Seethamma Vadlu- A Traditional Rice of Eastern Ghats- Germplasm resource\". During the International Conference on Eco-Technology and Sustainability Science \"Biodiversity and Sustainable Development\" from Feb, 29th to March, 2nd 2012 at S.V. Vedic University, Tirupati.\nActively participated and presented a oral paper entitled \"Biodiversity threats to the Indigenous Species of Sacred Tirumala Hills- Reforestation With Exotic Species\" during the \"International Seminar on \"Emerging Threats And Challenges To Biodiversity: Policy Framework For Sustainable Management (ETCOB 2012)\" organized by the Department of Botany from 2nd -4th, March, 2012 at Sri Venkateswara University, Tirupati.\nParticipated in the National Seminar on \"Perspectives of Phytomedicine and Medicinal Plants Conservation\" (NSPPMC-2013) during 22nd and 23rd March, 2013, organized by Department of Botany, Sri Venkateswara University, A.P., India. And Presented a Paper Entitled \"Conservation of IUCN Red Listed Medicinal Plants in Sri Venkateswara Zoological Park, Tirupati, A.P., India.\nParticipated and presented a Oral Paper entitled \"New Reports Of Grasses and Sedges From S.V. Zoological Park, Tirupati.\" In two days National Conference entitled \"Conservation of Eastern Ghats\" held Sri Venkateswara University, Tirupati on 04th and 5th December, 2014.\nNATIONAL\nActively participated and presented a paper National Seminar on \"Recent Research Trends in Synthetic Organic and Natural Products in Chemistry-2012 (RRTSONPC-12)\" held during 19th & 20th March, 2012 at Sri Venkateswara University, Tirupati.\nActively participated and presented a Oral paper on \"Drimia indica (Roxb) Jessop- A Drug for Anthelmintic Activity\" in the National Conference on \"Modern Innovations and Approaches in Biotechnology\" held during 29th- 1st March 2012 at Sri Padmavathi Mahila Visvavidyalayam, Tirupati.\nParticipated in the National Seminar on \"Perspectives of Phytomedicine and Medicinal Plants Conservation\" (NSPPMC-2013) during 22nd and 23rd March, 2013, organized by Department of Botany, Sri Venkateswara University, A.P., India. And Presented a Paper Entitled “Conservation of IUCN Red Listed Medicinal Plants in Sri Venkateswara Zoological Park, Tirupati, A.P., India.\nParticipated and presented a Oral Paper entitled \"New Reports Of Grasses and Sedges From S.V. Zoological Park, Tirupati.\" In two days National Conference entitled “Conservation of Eastern Ghats” held Sri Venkateswara University, Tirupati on 04th and 5th December, 2014.",
        workshopsAttended: "INTERNATIONAL\nActive participation in the International Seminar on \"Medicinal Plants and Herbal Products (ISMPHP-2008)\" organized by the Department of Botany, S.V.University, during 7th - 9th, March 2008.\nActive participation in the \"International Symposium On Environmental Impacts, Health Implications & Therapeutic Approaches & A Special Symposium on Water Quality And Aquatic Biotechnology\" organized by the Department of Zoology from 15th - 4th July, 2012 at Sri Vikrama Simhapuri University, SPSR Nellore, A.P, India.\nActively participated in the \"International Conference on Environmental Impact on Human Health and Therapeutic Challenges\" organized by the Department of Virology from 20th - 22nd December, 2012 at Sri Venkateswara University, Tirupati, A.P, India.\nParticipated in the International Conference on \"Statistics and Information Technology For a Growth Nation\" on 30tt November-02nd December, 2014, XXXIV Annual Convention of Indian Society for \"Probability & Statistics\" (ISPS). Organized By Department of Statistics, Sri Venkateswara University, Tirupati, A.P.\nNATIONAL\nActively Participated in the 2-Days National Workshop on \"Medicinal Plants\" held on 10th -11th, March 2006 in Department of Botany, S.V. University.\nActively Participated in organizing the \"Open House and Exhibition\" event held on August 23rd - 27th, 2007 in the Department of Botany, S.V. University.\nActive participation in the National Workshop on \"Influence of Microbes on The Earth's Environment And Inhabitants\" organized by the Department of Applied Microbiology, Sri Padmavathi Mahila Visvavidyalayam, during 23rd - 24th, March 2008.\nActive participation in the National Workshop on \"Biodiversity Assessment of Chittoor district\" was organized by Government of Andhra Pradesh, A.P. Biodiversity Board on 27th & 28th Nov. 2008-in collaboration with S.V. University & A.P. Forest Department.\nActively participated in the National Seminar on \"Recent Research Trends in Synthetic Organic and Natural Products in Chemistry-2010 (RRTSONPC-10)\" held during 29th& 30th March, 2010 at Sri Venkateswara University, Tirupati.\nActive participation in Science Academies National Lecture Workshop on \"Viral Vaccines and Diagnostics\" held during 25-26th February, 2013 at the Department of Virology, Sri Venkateswara University, Tirupati.\nParticipated in the UGC Sponsored National Conference on \"YVU Plant Biology-2014 (YVUPB-2014)\" 24th-25th February, 2014, held at Yogi Vemana University, Kadapa.\nActively participated in the National Workshop on \"Mushroom Cultivation\" (NWMC-2014) held 12-13th November, 2014, at Department of Botany, Sri Venkateswara University, Tirupati.\nAttended the Science Academies Lecture Workshop on \"Trends in Plant Taxonomy\" held during 21-22nd January, 2016, at Department of Botany, Yogi Vemana University, Kadapa.",
        refresherCourses: "Successfully Completed A Two Weeks \"Science Academies Refresher Course in \"Plant Taxonomy-Orthodox and Modern Aspects\" Organized by Department of Botany, Yogi Vemana University, Vemanapuram, Kadapa, A.P. India from 18th_31st October, 2016.\nParticipated in the Training Programme on \"Instructional Design and Delivery System\" Conducted by National Institute of Technical Teachers Training & Research (NITTTR) at Rajiv Gandhi University of Knowledge Technologies, IIIT-R.K.Valley, AP from 2nd to 7th January 2019.\nParticipated in the workshop on \"Modern Techniques in Molecular Biolog\" (MTMB-2019) held during 31st May to 6th June, 2019 in Sri Venkateswara University, Tirupati-517502, A.P. India.",
        scholarshipsAwards: "GATE- 2013 and 2015",
        administrativePositions: "Head of the Department Biology 3 Terms (AY 2011-12, 2012-13, 2015-16)\nTutor Student Welfare Officer (TWSO) (AY 2012-13)\nWarden (PUC Boys Hostels) 2 Terms (23.09.2015 to 19.07.2017)\nAcademic Coordinator (PUC) (11.07.2016 to 12.07.2017)\nAssociate Dean of Academics (PUC) (14.07.2017 to Till Date)",
        committeeMemberships: "Member in Disciplinary Committee of R.K.Valley Campus, RGUKT-AP, dt 06.12.2010\nMember in EAA (NCC, NSS, YOGA) of R.K.Valley Campus, RGUKT-AP, dt 06.12.2010\nMember in Examination Committee of R.K.Valley Campus, RGUKT-AP, dt 06.12.2010\nMember in Quarters Allotment Committee R.K.Valley Campus, RGUKT-AP, dt. 20.04.2015\nCoordinator 1st Convocation Ceremony of R.K.Valley Campus, RGUKT-AP ,dt 07.12.2015\nMember in UG-Admissions Committee of R.K.Valley Campus, RGUKT-AP, dt 16.07.2016\nCoordinator 2nd Convocation Ceremony of R.K.Valley Campus, RGUKT-AP, dt 31.10.2016\nMember in 1st Disciplinary Committee of Ongole Campus, RGUKT-AP dt 28.01.2017\nMember in Annual Accounts Sub-Committee of R.K.Valley Campus, RGUKT-AP, dt. 09.02.2017\nMember in UG-Admissions Committee of R.K.Valley Campus, RGUKT-AP, dt 20.05.2017\nMember in UG-Admissions Committee for Ongole Campus, RGUKT-AP, dt 15.06.2017\nCoordinator 3rd Convocation Ceremony of R.K.Valley Campus, RGUKT-AP, dt 12.10.2017\nMember in Physical Stock Verification of R.K.Valley Campus, RGUKT-AP, dt: 20.03.2018\nMember in Disciplinary Committee of R.K.Valley Campus, RGUKT-AP, dt: 04.04.2018\nMember in Laptop Receiving Committee of R.K.Valley Campus, RGUKT-AP, dt: 28.04.2018\nMember in UG-Admissions Committee for R.K.Valley Campus, RGUKT-AP, dt 14.06.2018\nMember in UG-Admissions Committee for Ongole Campus, RGUKT-AP, dt 14.06.2018\nMember in Disciplinary Committee of R.K.Valley Campus, RGUKT-AP, dt: 27.10.2018\nMember in UG-Admissions Committee for R.K.Valley Campus, RGUKT-AP, dt 11.07.2019\nMember in UG-Admissions Committee for Ongole Campus, RGUKT-AP, dt 02.08.2019",
      }
    ];
  }

  if (dept.id === "civil" || dept.id === "ce") {
    return [
      {
        id: "fac-hod",
        name: dept.hod,
        designation: "Head of the Department & Associate Professor",
        qualification: "Ph.D. in " + dept.name,
        almaMater: "Indian Institute of Technology (IIT) Madras",
        specialization: dept.highlights[0] || "Structural Design & Infrastructure",
        email: dept.hodEmail,
        phone: "+91 8560 287834 (Ext. HOD)",
        cabin: "Cabin HOD-01, Civil Engineering Block",
        experience: "16+ Years Academic & Research Experience",
        publicationsCount: 28,
        patentsCount: 2,
        researchAreas: [
          "Structural Engineering",
          "Geotechnical Engineering",
          "Smart Infrastructure"
        ],
        coursesTaught: [
          "Structural Analysis",
          "Design of Concrete Structures"
        ],
        officeHours: "Mon-Fri: 10:00 AM - 5:00 PM",
        bio: `${dept.hod} serves as Head of the Department of Civil Engineering at RGUKT R.K. Valley.`,
        gender: "m",
        isHod: true,
        image: "/images/vin.jpeg"
      },
      {
        id: "fac-durga-kishore",
        name: "MR. A V Durga Kishore Reddy",
        designation: "Assistant Professor",
        qualification: "M.Tech",
        almaMater: "JNTUA Anantapuram",
        specialization: "Structural Engineering",
        email: "durgakishorereddy@rguktrkv.ac.in",
        phone: "+91 9700-112233",
        cabin: "Civil Engineering Department",
        experience: "15+ Years",
        publicationsCount: 1,
        patentsCount: 0,
        researchAreas: [
          "Structural Engineering",
          "Special Concretes"
        ],
        coursesTaught: [
          "Structural Engineering"
        ],
        officeHours: "Mon-Fri: 10:00 AM - 5:00 PM",
        bio: "Assistant Professor at RGUKT R.K. Valley since Nov, 2012.",
        gender: "m",
        isHod: false,
        image: "/images/Mr_A_V_Durga_Kishore_Reddy.jpg",
        educationDetails: "M.Tech from JNTUA Anantapuram, 2011\nB.Tech from JNTUA Anantapuram, 2007",
        teachingExperience: "Assistant Professor at RGUKT R.K. Valley since Nov, 2012.\nAssistant Professor at KSRMCE Kadapa (June 2008 to Oct 2012)",
        researchExperience: "Structural Engineering\nSpecial Concretes",
        conferencePapers: "P. R. Mohan, A. V. D. Kishore Reddy (2012), \"Experimental Study on Permeability of Concrete By Replacing Artificial Sand And Adding Admixtures\", (NCETC2012)",
        workshopsAttended: "NPTEL workshop conducted by IIT Madras (2013)\nTEQIP-II sponsored intensive training programme on \"Structural Analysis\" at SVU, Tirupati (2014)\nRefresher Course in engineering (RCC & Steel) at SVU, Tirupati (2015)\nFaculty Development Programme on \"Formulation, Preparation and writing of project proposal for funding agencies\" (2020)\nAttended webinar on \"Advances in Chemical Admixture Systems for Precast concrete\" by Master Builder Solutions (2020)\nRecent developments in non-destructive testing and evaluating of civil engineering structures at MSRIT (2020)",
        administrativePositions: "Warden (03.02.2023 to till date)",
        committeeMemberships: "Civil Works Advisory Committee Member (20.01.2021 to 20.01.2022)\nCivil Dept NBA Coordinator (09.11.2021 to till date)",
      },
      {
        id: "fac-daundkar-ramesh-kailas",
        name: "Mr. Daundkar Ramesh Kailas",
        designation: "Assistant Professor, Head of the Department",
        qualification: "M.Tech",
        almaMater: "IIT Kharagpur",
        specialization: "Hydraulic and Water Resources Engineering",
        email: "ramesh2016@rguktrkv.ac.in",
        phone: "08588-283683",
        cabin: "Civil Engineering Department",
        experience: "14+ Years",
        publicationsCount: 0,
        patentsCount: 0,
        researchAreas: [
          "Applied Hydrology",
          "Water Resource Engineering",
          "Hydraulics of Sediment Transport",
          "Irrigation and Drainage Engineering"
        ],
        coursesTaught: [
          "Engineering Mechanics",
          "Engineering Drawing",
          "Water Resource Engineering",
          "Hydraulic Engineering",
          "Fluid Mechanics",
          "Surveying & Leveling",
          "Mechanics of Solids"
        ],
        officeHours: "Mon-Fri: 10:00 AM - 5:00 PM",
        bio: "Assistant Professor and Head of the Department in Civil Engineering at RGUKT R.K. Valley.",
        gender: "m",
        isHod: true,
        image: "/images/Mr_Daundkar_Ramesh_Kailas.jpg",
        educationDetails: "Masters of Technology in Hydraulic and Water Resources Engineering from IIT Kharagpur (2008-10)\nBachelor of Technology in Agricultural Engineering from K.K.Wagh College of Agricultural Engg, Nasik (2004-08)",
        teachingExperience: "Working as Assistant Professor in Department of Civil Engineering at IIIT R K Valley, RGUKT from 15th Feb 2016 to till date\nWorked as Assistant Professor in Department of Civil Engineering at Rajiv Gandhi University of Knowledge Technology, IIIT RK valley (16/06/2010 to 14-07-2016).",
        administrativePositions: "Currently Working as Institute Engineer from September 2016 at IIIT R K Valley for Academic Year 2016-17.\nCurrently working as Branch Coordinator at IIIT RK Valley, RGUKT for Academic Year 2016-17.\nWorked as Academic Coordinator at IIIT RK Valley, RGUKT for Academic Year 2013-14.\nWorked as Branch Coordinator at IIIT RK Valley, RGUKT from July 2012 to June 2013.\nActed as Member of Discipline Committee at RGUKT Rk Valley (2012-13).\nEstablishment and conduction of Surveying lab, Fluid Mechanics lab, Soil Mechanics & Transportation lab.",
        scholarshipsAwards: "Graduate Aptitude Test for Engineering (GATE 2008): All India Rank: 39 (96.03 percentage)\n2nd Rank in M.tech (Hydraulic and Water Resource Engineering in 2008-2010 batch) at IIT Kharagpur.\nM.H.R.D Scholarship awarded by Government of India for Post Graduation Studies at IIT Kharagpur.",
        extendedBioHtml: `
<h4 style="color: var(--primary-dark); margin-top: 1.5rem; margin-bottom: 0.75rem; font-size: 1.15rem; font-weight: 700;">M.Tech Project</h4>
<p style="margin-bottom: 1.5rem;">Study &amp; Numerical Modeling of local Scour Characteristics Under Low Tail Water Condition Below Stilling Basins. The objective of the study was to carry out the experiments on one bay of a typical diversion structure model to study the effect of different gate opening and tail water conditions on downstream scour. The computational fluid dynamics (CFD) software FLUENT was used to find the water surface profile numerically.</p>

<h4 style="color: var(--primary-dark); margin-top: 1.5rem; margin-bottom: 0.75rem; font-size: 1.15rem; font-weight: 700;">Professional Trainings</h4>
<ul style="list-style-type: disc; margin-left: 1.5rem; margin-bottom: 1.5rem;">
  <li>Trained in Agricultural Processing work for one month (May 2006) at Central Institute of Agricultural Engineering Government of India, Bhopal, MP, India.</li>
  <li>Trained in Farm Machinery and Equipment based works for one month (June 2007) at Southern Farm-Machinery Testing Training Institute, Government of India, Anantpur, AP, India.</li>
</ul>

<h4 style="color: var(--primary-dark); margin-top: 1.5rem; margin-bottom: 0.75rem; font-size: 1.15rem; font-weight: 700;">Special Subjects &amp; Electives taken during M.Tech</h4>
<p style="margin-bottom: 1.5rem;">Applied Hydrology, Free Surface Flow /Open Channel Flow, Hydraulic Structures, Hydropower Engineering, Hydraulics of Sediment Transport, River Engineering, Integrated Watershed Management, Advanced Computational Hydraulics, System Approach To Management.</p>

<h4 style="color: var(--primary-dark); margin-top: 1.5rem; margin-bottom: 0.75rem; font-size: 1.15rem; font-weight: 700;">Subjects studied during B.Tech</h4>
<p style="margin-bottom: 1.5rem;">Hydrology, Fluid Mechanics, Surveying &amp; Leveling, Mechanics of Solid, Soil Mechanics, Environmental Engineering &amp; Renewable Energy, Irrigation &amp; Drainage Engineering, Engineering Drawing &amp; Graphics, Engineering Mechanics</p>
`
      }
    ];
  }

  if (dept.id === "chem") {
    return [
      {
        id: "fac-hod",
        name: dept.hod,
        designation: "Head of the Department & Associate Professor",
        qualification: "Ph.D. in " + dept.name,
        almaMater: "Indian Institute of Technology (IIT) Madras",
        specialization: dept.highlights[0] || "Advanced Research & Engineering Systems",
        email: dept.hodEmail,
        phone: "+91 8560 287834 (Ext. HOD)",
        cabin: "Cabin HOD-01, Academic Block-I",
        experience: "16+ Years Academic & Research Experience",
        publicationsCount: 34,
        patentsCount: 3,
        researchAreas: [
          dept.highlights[0] || "Advanced Systems",
          "Applied Computational Modeling",
          "Interdisciplinary Technology Solutions",
          "Laboratory Instrumentation"
        ],
        coursesTaught: [
          `Advanced ${dept.code} Principles`,
          "Research Methodologies & Design Thinking",
          "Capstone Project Guidance"
        ],
        officeHours: "Mon, Wed & Fri: 3:00 PM - 5:00 PM",
        bio: `${dept.hod} has been spearheading the Department of ${dept.name} with an emphasis on research-driven education, industry collaborations, and modern student laboratory learning.`,
        gender: "f",
        isHod: true,
        image: "/images/vin.jpeg"
      },
      {
        id: "fac-bukke-eswara-naik",
        name: "Dr. Bukke Eswara Naik",
        designation: "Mentor",
        qualification: "M.Sc, B.Ed, Ph.D",
        almaMater: "Rayalaseema University",
        specialization: "Analytical Chemistry",
        email: "beswar2009@rguktrkv.ac.in",
        phone: "08588-283683",
        cabin: "Chemistry Department",
        experience: "16+ Years",
        publicationsCount: 0,
        patentsCount: 0,
        researchAreas: [
          "Spectrophotometric Determination of Drugs",
          "Analytical Reagents for Drugs",
          "Pharmaceutical Formulations"
        ],
        coursesTaught: [
          "PUC-1 Chemistry Theory courses",
          "PUC-2 Chemistry Theory courses",
          "PUC-1 Chemistry - lab courses",
          "PUC-2 Chemistry - lab courses"
        ],
        officeHours: "Mon-Fri: 10:00 AM - 5:00 PM",
        bio: "Faculty in Chemistry at RGUKT, R.K. Valley since 2009.",
        gender: "m",
        isHod: false,
        image: "/images/Dr_Bukke_Eswara_Naik.jpg",
        educationDetails: "Ph.D from Rayalaseema University (Analytical Chemistry), 2020\nM.Phil from V.M.University, Salem\nMaster of Sciences (Chemistry) from Sri Venkateswara University, June, 2004.\nBachelor of Education from Sri Venkateswara University, June, 2007.\nBachelor of Science from Sri Venkateswara University, Oct, 2001.",
        teachingExperience: "Faculty in Chemistry at RGUKT, R.K. Valley since 2009",
        researchExperience: "Spectrophotometric Determination of Drugs by using Analytical Reagents for some selected and widely used drugs in pure and pharmaceutical formulations and in human body fluids. From the obtain results of linearity, correlation coefficient, recovery results, LOD, LOQ, molar absorbity, Sandell's sensitivity values and recovery studies.",
        administrativePositions: "Head of the department Rajiv Gandhi University of Knowledge Technologies-RK Valley, YSR Kadapa, AP from August 2021 to 2022\nAssociate Subject Coordinator Rajiv Gandhi University of Knowledge Technologies-RK Valley, YSR Kadapa, AP during 2016-17\nAssociate Subject Coordinator Rajiv Gandhi University of Knowledge Technologies-RK Valley, YSR Kadapa, AP during 2012-13",
        extendedBioHtml: `
<h4 style="color: var(--primary-dark); margin-top: 1.5rem; margin-bottom: 0.75rem; font-size: 1.15rem; font-weight: 700;">Full Profile</h4>
<p style="margin-bottom: 1.5rem;"><a href="https://www.rguktrkv.ac.in/pdfdoc/EswarNaik_Profile.pdf" target="_blank" rel="noopener noreferrer" style="color: var(--primary-maroon); font-weight: bold; text-decoration: underline;">Click here for Full Profile (PDF)</a></p>
`
      }
    ];
  }

  if (dept.id === "me") {
    return [
      {
        id: "fac-hod",
        name: dept.hod,
        designation: "Head of the Department & Associate Professor",
        qualification: "Ph.D. in " + dept.name,
        almaMater: "Indian Institute of Technology (IIT) Madras",
        specialization: dept.highlights[0] || "Advanced Research & Engineering Systems",
        email: dept.hodEmail,
        phone: "+91 8560 287834 (Ext. HOD)",
        cabin: "Cabin HOD-01, Academic Block-I",
        experience: "16+ Years Academic & Research Experience",
        publicationsCount: 34,
        patentsCount: 3,
        researchAreas: [
          dept.highlights[0] || "Advanced Systems",
          "Applied Computational Modeling",
          "Interdisciplinary Technology Solutions",
          "Laboratory Instrumentation"
        ],
        coursesTaught: [
          `Advanced ${dept.code} Principles`,
          "Research Methodologies & Design Thinking",
          "Capstone Project Guidance"
        ],
        officeHours: "Mon, Wed & Fri: 3:00 PM - 5:00 PM",
        bio: `${dept.hod} has been spearheading the Department of ${dept.name} with an emphasis on research-driven education, industry collaborations, and modern student laboratory learning.`,
        gender: "m",
        isHod: true,
        image: "/images/vin.jpeg"
      },
      {
        id: "fac-hms-mostafa-mazarbhuiya",
        name: "Dr. Hussain Mahamed Sahed Mostafa Mazarbhuiya",
        designation: "Assistant Professor",
        qualification: "Ph.D",
        almaMater: "NIT Silchar",
        specialization: "CFD & Renewable Energy",
        email: "mazarbhuiya@rguktrkv.ac.in",
        phone: "08588-283640",
        cabin: "Mechanical Engineering Department",
        experience: "5+ Years",
        publicationsCount: 7,
        patentsCount: 0,
        researchAreas: [
          "Blade Aerodynamics",
          "Vertical Axis Wind Turbine",
          "Renewable Energy",
          "CFD"
        ],
        coursesTaught: [
          "Renewable Energy Resources",
          "Management Science & Productivity",
          "Manufacturing Processes",
          "Kinematics of Machinery",
          "Dynamics of Machinery",
          "Metal Cutting and Machine Tools",
          "Mechanical Technology"
        ],
        officeHours: "Mon-Fri: 10:00 AM - 5:00 PM",
        bio: "Dr. Hussain Mahamed Sahed Mostafa Mazarbhuiya completed his B. Tech. in Mechanical Engineering from Jawaharlal Nehru Technological University Hyderabad in 2011, M. Tech. in CAD-CAM & Automation from National Institute of Technology Silchar in 2015 and Ph. D. in Mechanical Engineering from National Institute of Technology Silchar in 2020. At present he is working as an Assistant Professor (Contract) in the Mechanical Engineering Department at Rajiv Gandhi University of Knowledge Technologies-A.P., R K Valley Campus. He has published several papers in reputed Journals and presented in numerous conferences. His research area includes computational as well as experimental investigations in the broad domains of vertical axis wind turbines design and development.",
        gender: "m",
        isHod: false,
        image: "/images/Dr_HMS_Mostafa_Mazarbhuiya.jpg",
        educationDetails: "Ph. D. in Mechanical Engineering: National Institute of Technology Silchar\nM. Tech in CAD-CAM & Automation: National Institute of Technology Silchar\nB. Tech. in Mechanical Engineering: Jawaharlal Nehru Technological University Hyderabad",
        teachingExperience: "Experience @ RK Valley: 5 years, 2 months, and 5 days (Date of Join: 09-July-2021)",
        administrativePositions: "Associate Dean of Academics (w.e.f. 30-04-2026)",
        journalPapers: "[1] Mazarbhuiya HMSM, Biswas A, Sharma KK. Performance investigations of modified asymmetric blade H-Darrieus VAWT rotors. Journal of Renewable and Sustainable Energy 10, 033302 (2018). (SCIE).\n[2] Mazarbhuiya HMSM, Biswas A, Sharma KK. Blade thickness effect on the aerodynamic performance of an asymmetric NACA six series blade vertical axis wind turbine in low wind speed. International Journal of Green Energy, 17:2, 171-179 (2020). (SCIE).\n[3] Mazarbhuiya HMSM, Biswas A, Sharma KK. Low wind speed aerodynamics of asymmetric blade H-Darrieus wind turbine- its desired blade pitch for performance improvement in the built environment. Journal of the Brazilian Society of Mechanical Sciences and Engineering, 42, 326 (2020). (SCIE).\n[4] Mazarbhuiya HMSM, Biswas A, Sharma KK. Effect of blade attachments on the performance of an asymmetric blade H-Darrieus turbine at low wind speed. Energy Sources, Part A: Recovery, Utilization, and Environmental Effects. (SCIE).\n[5] Mazarbhuiya HMSM, Biswas A, Sharma KK. A 2D numerical simulation of blade twist effect on the aerodynamic performance of an asymmetric blade vertical axis wind turbine in low wind speed. EAI Endorsed Transactions on Energy Web, 7:28 (2020). (SCOPUS).\n[6] Mazarbhuiya HMSM, Sengupta AR, Biswas A, Sharma KK. Wind tunnel investigation of blade pitch effect for performance improvement of an asymmetric bladed H-Darrieus VAWT under low wind speed condition. International Journal of Ambient Energy, 45:1, 1-12, (2023). (SCOPUS)\n[7] Maddela SK and Mazarbhuiya HMSM, A thin wall machining for electric vehicles: A Review on Precise, Efficient and Sustainable Approach. Endorsed Transactions on Energy Web, 12(2025). (SCOPUS)",
        conferencePapers: "[1] Mazarbhuiya HMSM, Biswas A, Sharma KK. Performance Prediction of Asymmetrical Bladed H-Darrieus VAWT Rotors in Low Wind Speed Condition using CFD. AIP Conference Proceedings 1952, 020040 (2018). (SCOPUS).\n[2] Mazarbhuiya HMSM, Biswas A, Sharma KK. Experimental Investigation on the Performance of Varying Thickness H-Darrieus Rotor. IOP Conference Series: Journal of Physics: Conference Series 1172 (2019) 012082. (SCOPUS).\n[3] Mazarbhuiya HMSM and Pandey KM. Steady State Structural Analysis of High Pressure Gas Turbine Blade using Finite Element Analysis. IOP Conference Series: Material Science and Engineering 2017; 225: 012113. (SCOPUS).\n[4] Mazarbhuiya HMSM, Biswas A and Sharma KK. Performance Improvement of Turbine Blade using Flow Control Techniques: A Review. Recent Advances in Mechanical Engineering, 823-828 (2021). (SCOPUS).\n[5] Kumar Y, Sengupta AR, Biswas A, Mazarbhuiya HMSM, Gupta R. CFD Analysis of the Performance of an H-Darrieus Wind Turbine Having Cavity Blades. Recent Advances in Mechanical Engineering, 711-719 (2021). (SCOPUS).",
        extendedBioHtml: `
<h4 style="color: var(--primary-dark); margin-top: 1.5rem; margin-bottom: 0.75rem; font-size: 1.15rem; font-weight: 700;">Laboratory Handled</h4>
<ul style="list-style-type: disc; margin-left: 1.5rem; margin-bottom: 1.5rem;">
  <li>Computer Aided Engineering Lab</li>
  <li>Metal Cutting and Machine Tools Lab</li>
  <li>Workshop Practice</li>
  <li>Computer Aided Machine Drawing Lab</li>
  <li>Engineering Graphics and Computer Drafting Lab</li>
</ul>
`
      }
    ];
  }

  const list: FacultyProfile[] = [
    {
      id: "fac-hod",
      name: dept.hod,
      designation: "Head of the Department & Associate Professor",
      qualification: "Ph.D. in " + dept.name,
      almaMater: "Indian Institute of Technology (IIT) Madras",
      specialization: dept.highlights[0] || "Advanced Research & Engineering Systems",
      email: dept.hodEmail,
      phone: "+91 8560 287834 (Ext. HOD)",
      cabin: "Cabin HOD-01, Academic Block-I (First Floor)",
      experience: "16+ Years Academic & Research Experience",
      publicationsCount: 34,
      patentsCount: 3,
      researchAreas: [
        dept.highlights[0] || "Advanced Systems",
        "Applied Computational Modeling",
        "Interdisciplinary Technology Solutions",
        "Laboratory Instrumentation"
      ],
      coursesTaught: [
        `Advanced ${dept.code} Principles`,
        "Research Methodologies & Design Thinking",
        "Capstone Project Guidance"
      ],
      officeHours: "Mon, Wed & Fri: 3:00 PM – 5:00 PM",
      bio: `${dept.hod} has been spearheading the Department of ${dept.name} with an emphasis on research-driven education, industry collaborations, and modern student laboratory learning.`,
      gender: "m",
      isHod: true,
      image: "/images/vin.jpeg"
    },
    {
      id: "fac-2",
      name: "Dr. K. V. Subba Rao",
      designation: "Associate Professor",
      qualification: "Ph.D., M.Tech (Gold Medalist)",
      almaMater: "National Institute of Technology (NIT) Warangal",
      specialization: `Advanced ${dept.code} Systems & Architecture`,
      email: `kv.subbarao@rguktrkv.ac.in`,
      phone: "+91 8560 287834 (Ext. 204)",
      cabin: "Room 204, Academic Block-I",
      experience: "12+ Years Teaching & Industry R&D",
      publicationsCount: 22,
      patentsCount: 2,
      researchAreas: [
        "Applied System Algorithms",
        "High Performance Computing",
        "Embedded Sensing & Diagnostics"
      ],
      coursesTaught: ["Core Engineering Analysis", "Advanced Laboratory Practicums", "Elective Specialization I"],
      officeHours: "Tue & Thu: 2:00 PM – 4:00 PM",
      bio: "Dr. Subba Rao specializes in high-efficiency engineering systems and has mentored over 40+ undergraduate research projects and published in premier IEEE/Elsevier journals.",
      gender: "m"
    },
    {
      id: "fac-3",
      name: "Dr. P. Swathi",
      designation: "Assistant Professor",
      qualification: "Ph.D., M.Tech",
      almaMater: "Indian Institute of Science (IISc) Bangalore",
      specialization: "Data Modeling, Optimization & Smart Networks",
      email: `p.swathi@rguktrkv.ac.in`,
      phone: "+91 8560 287834 (Ext. 206)",
      cabin: "Room 206, Academic Block-I",
      experience: "9+ Years Teaching & Post-Doctoral Research",
      publicationsCount: 18,
      patentsCount: 1,
      researchAreas: [
        "Predictive Machine Intelligence",
        "Signal & Data Analytics",
        "Renewable & Sustainable Protocols"
      ],
      coursesTaught: ["Mathematical Modeling", "Advanced Data Systems", "Undergraduate Seminar"],
      officeHours: "Mon & Thu: 10:30 AM – 12:30 PM",
      bio: "Dr. Swathi holds a Ph.D. from IISc Bangalore with research focused on data-driven physical modeling and sustainable computational optimization.",
      gender: "f"
    },
    {
      id: "fac-4",
      name: "Dr. M. Sreenivasulu",
      designation: "Assistant Professor",
      qualification: "Ph.D., M.Tech",
      almaMater: "IIT Kharagpur",
      specialization: "Digital Automation, Testing & Experimental Prototyping",
      email: `m.sreenivasulu@rguktrkv.ac.in`,
      phone: "+91 8560 287834 (Ext. 208)",
      cabin: "Room 208, Academic Block-I",
      experience: "8+ Years Teaching",
      publicationsCount: 15,
      patentsCount: 1,
      researchAreas: [
        "Hardware-in-the-Loop Simulation",
        "Smart Prototyping",
        "Industrial Automation Standards"
      ],
      coursesTaught: ["Hardware & Systems Lab", "Engineering Measurements", "Department Core II"],
      officeHours: "Wed & Fri: 11:00 AM – 1:00 PM",
      bio: "Dr. Sreenivasulu leads several sponsored student innovation challenges and oversees departmental laboratory modernization and test setups.",
      gender: "m"
    },
    {
      id: "fac-5",
      name: "Dr. Y. Radhika",
      designation: "Assistant Professor",
      qualification: "Ph.D., Post-Doc (Europe)",
      almaMater: "IIT Hyderabad",
      specialization: "Applied Intelligence, Sensor Fusion & IoT",
      email: `y.radhika@rguktrkv.ac.in`,
      phone: "+91 8560 287834 (Ext. 210)",
      cabin: "Room 210, Academic Block-I",
      experience: "7+ Years Academic Research",
      publicationsCount: 14,
      patentsCount: 1,
      researchAreas: [
        "Edge Analytics",
        "Next-Gen Cyber-Physical Systems",
        "Autonomous Sensor Arrays"
      ],
      coursesTaught: ["Embedded Design Lab", "IoT Applications", "Foundation Engineering"],
      officeHours: "Tue & Fri: 3:30 PM – 5:00 PM",
      bio: "Dr. Radhika completed post-doctoral training in sensor technologies and serves as the mentor for student hackathon cohorts.",
      gender: "f"
    },
    {
      id: "fac-6",
      name: "Mr. B. Rajesh Kumar",
      designation: "Mentor & Lecturer",
      qualification: "M.Tech (First Class with Distinction)",
      almaMater: "JNTU Hyderabad",
      specialization: "Applied Engineering Practicums & Student Mentorship",
      email: `b.rajesh@rguktrkv.ac.in`,
      phone: "+91 8560 287834 (Ext. 212)",
      cabin: "Faculty Lounge 2B, Academic Block-I",
      experience: "6+ Years Teaching & Industry Support",
      publicationsCount: 8,
      patentsCount: 0,
      researchAreas: [
        "Experimental Engineering",
        "Student Peer Learning Methodologies",
        "Industry Capstone Support"
      ],
      coursesTaught: ["Laboratory Practicum I & II", "Technical Workshop Practicums", "Engineering Graphics/Code"],
      officeHours: "Mon to Fri: 4:00 PM – 5:30 PM",
      bio: "Mr. Rajesh Kumar guides first- and second-year undergraduate students during intensive laboratory problem-solving and software tool sessions.",
      gender: "m"
    }
  ];
  return list;
};
