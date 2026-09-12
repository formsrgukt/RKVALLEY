/**
 * RGUKT RK Valley Official Website - Data Store
 * Rajiv Gandhi University of Knowledge Technologies - RK Valley (Idupulapaya)
 */

const RGUKT_DATA = {
  university: {
    name: "Rajiv Gandhi University of Knowledge Technologies",
    campus: "RK Valley (Idupulapaya)",
    shortName: "RGUKT RK Valley",
    teluguName: "రాజీవ్ గాంధీ వైజ్ఞానిక సాంకేతిక విశ్వవిద్యాలయం - ఆర్.కె. వ్యాలీ",
    tagline: "Catering to the Educational Needs of Gifted Rural Youth",
    established: "2008 (AP Act 18 of 2008)",
    type: "State University, Govt. of Andhra Pradesh",
    recognition: "UGC 2(f) & 12(B) | AICTE Approved | NAAC Accredited",
    location: "Idupulapaya, Vempalli (M), YSR Kadapa District, Andhra Pradesh - 516330",
    phone: "+91 85602 87834 / +91 85602 87839",
    admissionsPhone: "+91 85602 87840",
    email: "director@rguktrkv.ac.in",
    aoEmail: "ao@rguktrkv.ac.in",
    examEmail: "coe@rguktrkv.ac.in",
    placementEmail: "cdpc@rguktrkv.ac.in",
    workingHours: "Monday – Saturday: 9:00 AM – 5:30 PM",
    stats: {
      studentsEnrolled: "6,500+",
      facultyMembers: "240+",
      departments: "12",
      campusAcres: "330+",
      placementRate: "87.4%",
      highestPackage: "₹28.5 LPA",
      avgPackage: "₹6.8 LPA",
      alumniGlobal: "18,000+"
    }
  },

  leadership: [
    {
      id: "chancellor",
      title: "Chancellor",
      name: "Prof. K. C. Reddy",
      qualifications: "Ph.D. (Economics), D.Litt. (Hon.)",
      designation: "Hon'ble Chancellor, RGUKT Andhra Pradesh",
      image: "images/chancellor.jpg",
      message: "RGUKT represents an unprecedented socio-technological intervention to nurture top-tier rural intellect into globally competent engineers, researchers, and nation-builders through integrated academic rigor.",
      profile: "Former Chairman of AP State Council of Higher Education (APSCHE) and renowned education reformer who has shaped tertiary technological education across the country."
    },
    {
      id: "vice-chancellor",
      title: "Vice-Chancellor",
      name: "Prof. M. Jagannadha Rao",
      qualifications: "Ph.D., Post-Doc (USA), FGS",
      designation: "Vice-Chancellor, RGUKT Andhra Pradesh",
      image: "images/vc.jpg",
      message: "Our unique 6-year integrated curriculum blends pre-university science foundations with cutting-edge engineering branches, high-speed ICT infrastructure, and hands-on laboratory immersion.",
      profile: "Distinguished scientist, academic leader, and former Vice-Chancellor of Adikavi Nannaya University with four decades of seminal research in Earth Sciences and higher education governance."
    },
    {
      id: "director",
      title: "Campus Director",
      name: "Prof. K. Hemachandra Reddy",
      qualifications: "Ph.D. (Mechanical Engg.), M.Tech, FIE",
      designation: "Director i/c, RGUKT RK Valley Campus",
      image: "images/director.jpg",
      message: "At RK Valley, we provide an expansive 330-acre residential sanctuary where intellect meets innovation. Every student is empowered with 24x7 computing, modern laboratories, and vibrant student-led clubs.",
      profile: "Eminent professor of Mechanical Engineering with over 30 years of teaching, cutting-edge thermal engineering research, and leadership in state academic accreditation bodies."
    }
  ],

  administration: [
    { role: "Director", name: "Prof. K. Hemachandra Reddy", email: "director@rguktrkv.ac.in", phone: "08560-287834" },
    { role: "Administrative Officer (AO)", name: "Sri B. Venkata Rami Reddy", email: "ao@rguktrkv.ac.in", phone: "08560-287839" },
    { role: "Dean of Academics", name: "Dr. S. Mallikarjuna Rao", email: "dean.academics@rguktrkv.ac.in", phone: "08560-287841" },
    { role: "Dean of Student Welfare (DSW)", name: "Dr. V. Rajesh", email: "dsw@rguktrkv.ac.in", phone: "08560-287842" },
    { role: "Dean of Research & Development", name: "Dr. K. Ramanjaneyulu", email: "dean.rnd@rguktrkv.ac.in", phone: "08560-287843" },
    { role: "Finance Officer (FO)", name: "Sri K. Narasimha Rao", email: "fo@rguktrkv.ac.in", phone: "08560-287844" },
    { role: "Controller of Examinations (COE)", name: "Dr. P. Chandra Sekhar", email: "coe@rguktrkv.ac.in", phone: "08560-287845" },
    { role: "Career Development & Placement Officer", name: "Dr. T. Suresh Kumar", email: "cdpc@rguktrkv.ac.in", phone: "08560-287846" },
    { role: "Coordinator, IQAC", name: "Dr. N. Siva Prasad", email: "iqac@rguktrkv.ac.in", phone: "08560-287847" },
    { role: "Chief Warden (Boys)", name: "Dr. M. Venkatesh", email: "warden.boys@rguktrkv.ac.in", phone: "08560-287848" },
    { role: "Chief Warden (Girls)", name: "Dr. G. Lakshmi Prasanna", email: "warden.girls@rguktrkv.ac.in", phone: "08560-287849" },
    { role: "Chief Security Officer", name: "Sri R. K. V. Sharma", email: "security@rguktrkv.ac.in", phone: "08560-287850" }
  ],

  departments: [
    {
      id: "cse",
      code: "CSE",
      name: "Computer Science and Engineering",
      category: "Engineering",
      icon: "code",
      hod: "Dr. B. Ramanjaneyulu, Ph.D.",
      hodEmail: "hod.cse@rguktrkv.ac.in",
      facultyCount: 38,
      studentCount: 960,
      labsCount: 8,
      overview: "The Department of Computer Science & Engineering imparts state-of-the-art education in Artificial Intelligence, Machine Learning, Cloud Computing, Cyber Security, and Software Engineering. Equipped with 8 advanced computing labs and high-speed GPU clusters.",
      labs: [
        "Advanced AI & Deep Learning Laboratory",
        "Data Analytics & Cloud Infrastructure Lab",
        "Cyber Security & Cryptography Center",
        "Full-Stack Web & Mobile App Development Lab",
        "Database Systems & Data Warehousing Lab",
        "Operating Systems & Distributed Computing Lab",
        "Software Engineering & Testing Lab",
        "IoT & Embedded Systems Prototyping Lab"
      ],
      highlights: ["96% Placement in Top Tier Product & IT firms", "Active ACM and CSI Student Chapters", "NVIDIA Deep Learning Institute Academic Partner"]
    },
    {
      id: "ece",
      code: "ECE",
      name: "Electronics and Communications Engineering",
      category: "Engineering",
      icon: "cpu",
      hod: "Dr. K. Srinivasulu, Ph.D.",
      hodEmail: "hod.ece@rguktrkv.ac.in",
      facultyCount: 34,
      studentCount: 920,
      labsCount: 7,
      overview: "The ECE Department focuses on VLSI Circuit Design, Embedded Systems, Signal & Image Processing, Wireless Communications, 5G/6G Networks, and Microwave Engineering.",
      labs: [
        "Cadence & Synopsys VLSI Design Center",
        "Embedded Systems & Robotics Studio",
        "Digital Signal & Image Processing Lab",
        "Microwave & RF Communication Laboratory",
        "Analog & Digital Integrated Circuits Lab",
        "Optical Communications & Fiber Optics Lab",
        "Industrial Automation & Sensor Network Lab"
      ],
      highlights: ["TI Innovation Lab & ARM University Program Center", "Multiple Student Patents in Smart Agriculture Sensors", "Extensive Core Semiconductor Placements"]
    },
    {
      id: "eee",
      code: "EEE",
      name: "Electrical and Electronics Engineering",
      category: "Engineering",
      icon: "zap",
      hod: "Dr. M. Veera Reddy, Ph.D.",
      hodEmail: "hod.eee@rguktrkv.ac.in",
      facultyCount: 24,
      studentCount: 640,
      labsCount: 6,
      overview: "Leading sustainable electrical engineering with dedicated research in Smart Power Grids, Renewable Energy Systems, Electric Vehicles (EV) Powertrain, and Power Electronics.",
      labs: [
        "Electric Vehicles & Battery Management Lab",
        "Smart Grid & Renewable Energy Center",
        "Power Electronics & Drives Laboratory",
        "Electrical Machines & Transformers Lab",
        "Control Systems & Simulation Lab (MATLAB/Simulink)",
        "Power Systems Protection & High Voltage Lab"
      ],
      highlights: ["Campus 1MW Rooftop Solar Integration Research", "Active IEEE Power & Energy Society Chapter", "Sponsored Projects from DST and SERB"]
    },
    {
      id: "me",
      code: "ME",
      name: "Mechanical Engineering",
      category: "Engineering",
      icon: "settings",
      hod: "Dr. P. Mallikarjuna, Ph.D.",
      hodEmail: "hod.me@rguktrkv.ac.in",
      facultyCount: 26,
      studentCount: 720,
      labsCount: 8,
      overview: "Providing comprehensive engineering foundations in Thermal Systems, CAD/CAM/CAE, Robotics, Advanced Materials, CNC Machining, and Additive Manufacturing (3D Printing).",
      labs: [
        "Advanced CAD/CAM & 3D Additive Printing Studio",
        "CNC Machining & Precision Metrology Lab",
        "Thermal Engineering & IC Engines Research Lab",
        "Fluid Mechanics & Hydraulic Machinery Lab",
        "Strength of Materials & Metallurgy Testing Lab",
        "Robotics, Mechatronics & Kinematics Lab",
        "Heat Transfer & Refrigeration Lab",
        "Central Mechanical Fabrication & Foundry Workshop"
      ],
      highlights: ["Annual participation in SAE BAJA & E-Baja Racing", "Collaborative MOUs with L&T and Bosch", "Fully automated CNC machining center"]
    },
    {
      id: "ce",
      code: "CE",
      name: "Civil Engineering",
      category: "Engineering",
      icon: "home",
      hod: "Dr. S. K. Mahaboob Basha, Ph.D.",
      hodEmail: "hod.ce@rguktrkv.ac.in",
      facultyCount: 22,
      studentCount: 600,
      labsCount: 6,
      overview: "Focusing on Structural Design, Geotechnical Engineering, GIS & Remote Sensing, Environmental Water Treatment, and Sustainable Smart Infrastructure Development.",
      labs: [
        "Structural Engineering & Concrete Technology Lab",
        "Geotechnical & Soil Mechanics Testing Center",
        "Geographic Information Systems (GIS) & Total Station Lab",
        "Environmental Engineering & Water Quality Lab",
        "Transportation Engineering & Highway Materials Lab",
        "Hydraulics & Water Resources Engineering Lab"
      ],
      highlights: ["State Government Infrastructure Consultancy Partner", "Hands-on Total Station & Drone Surveying Modules", "Green Building Design Specialization"]
    },
    {
      id: "che",
      code: "CHE",
      name: "Chemical Engineering",
      category: "Engineering",
      icon: "flask",
      hod: "Dr. N. Chandra Sekhar, Ph.D.",
      hodEmail: "hod.che@rguktrkv.ac.in",
      facultyCount: 16,
      studentCount: 380,
      labsCount: 5,
      overview: "Specializing in Process Engineering, Nanotechnology, Reaction Kinetics, Bioprocess Engineering, Membrane Separation, and Industrial Pollution Abatement.",
      labs: [
        "Chemical Reaction Engineering (CRE) Lab",
        "Mass Transfer Operations (MTO) Lab",
        "Heat Transfer Operations & Furnace Lab",
        "Process Dynamics & Instrumentation Control Lab",
        "Effluent Treatment & Membrane Technology Lab"
      ],
      highlights: ["Campus pilot plant for bio-diesel extraction", "Placements in Pharma, Petrochem, and Process industries", "IIChE Student Chapter active activities"]
    },
    {
      id: "mme",
      code: "MME",
      name: "Metallurgical & Materials Engineering",
      category: "Engineering",
      icon: "layers",
      hod: "Dr. G. Ravi Kumar, Ph.D.",
      hodEmail: "hod.mme@rguktrkv.ac.in",
      facultyCount: 14,
      studentCount: 320,
      labsCount: 5,
      overview: "Advancing characterization of advanced alloys, ceramic matrix composites, extractive metallurgy, non-destructive testing (NDT), and corrosion science.",
      labs: [
        "Scanning Electron Microscopy (SEM) & Characterization Lab",
        "Heat Treatment & Metallography Laboratory",
        "Mechanical Metallurgy & Hardness Testing Lab",
        "Corrosion Testing & Surface Coating Lab",
        "Extractive Metallurgy & Minerals Processing Lab"
      ],
      highlights: ["NDT Level-II Certification for Students", "Tie-ups with JSW Steel and Vizag Steel Plant", "High publication count in SCI journals"]
    },
    {
      id: "maths",
      code: "MATH",
      name: "Mathematics",
      category: "Sciences",
      icon: "percent",
      hod: "Dr. K. Pushpalatha, Ph.D.",
      hodEmail: "hod.maths@rguktrkv.ac.in",
      facultyCount: 20,
      studentCount: 1200,
      labsCount: 2,
      overview: "Providing deep mathematical grounding across Linear Algebra, Differential Equations, Numerical Analysis, Cryptography, Probability & Stochastic Processes for engineering streams.",
      labs: ["Computational Mathematics & Python/R Lab", "Statistical Modeling & Mathematica Studio"],
      highlights: ["Core faculty supporting AI & Data Science foundations", "National Mathematics Day symposium host"]
    },
    {
      id: "physics",
      code: "PHY",
      name: "Physics",
      category: "Sciences",
      icon: "compass",
      hod: "Dr. Y. Venkata Ramana, Ph.D.",
      hodEmail: "hod.physics@rguktrkv.ac.in",
      facultyCount: 18,
      studentCount: 1200,
      labsCount: 3,
      overview: "Engaging students with Applied Optics, Quantum Mechanics, Solid State Physics, Semiconductor Device Physics, and Fiber Optics.",
      labs: ["Engineering Optics & Laser Lab", "Solid State & Condensed Matter Physics Lab", "Modern Physics & Nanomaterials Synthesis Lab"],
      highlights: ["DST-FIST funded research instrumentation", "High-impact nanomaterial publications"]
    },
    {
      id: "chem",
      code: "CHEM",
      name: "Chemistry",
      category: "Sciences",
      icon: "droplet",
      hod: "Dr. P. Sujatha, Ph.D.",
      hodEmail: "hod.chemistry@rguktrkv.ac.in",
      facultyCount: 16,
      studentCount: 1200,
      labsCount: 3,
      overview: "Delivering foundational and advanced instruction in Organic Synthesis, Analytical Chemistry, Electrochemistry, Polymer Science, and Green Chemistry.",
      labs: ["Instrumental Analytical Chemistry Lab (HPLC/UV-Vis)", "Physical & Electrochemistry Lab", "Organic Synthesis & Polymer Characterization Lab"],
      highlights: ["Patented water purification formulations", "Active industry-sponsored projects"]
    },
    {
      id: "bio",
      code: "BIO",
      name: "Bio-Sciences",
      category: "Sciences",
      icon: "activity",
      hod: "Dr. M. Sreenivasulu, Ph.D.",
      hodEmail: "hod.biosciences@rguktrkv.ac.in",
      facultyCount: 10,
      studentCount: 400,
      labsCount: 2,
      overview: "Imparting fundamental concepts of Molecular Biology, Genetics, Bioinformatics, Computational Genomics, and Environmental Biotechnology for PUC & Engineering electives.",
      labs: ["Molecular Biology & Cell Culture Lab", "Bioinformatics & Computational Biology Terminal"],
      highlights: ["Collaborative research with agricultural research stations", "Student projects on endemic herbal flora of Kadapa"]
    },
    {
      id: "humanities",
      code: "H&S",
      name: "Humanities & Social Sciences",
      category: "Humanities",
      icon: "book-open",
      hod: "Dr. D. V. Subba Rao, Ph.D.",
      hodEmail: "hod.humanities@rguktrkv.ac.in",
      facultyCount: 15,
      studentCount: 1200,
      labsCount: 2,
      overview: "Fostering professional communication, soft skills, managerial economics, intellectual property rights (IPR), professional ethics, and universal human values.",
      labs: ["Interactive English Language & Multimedia Phonetics Lab", "Corporate Soft Skills & Mock Interview Suite"],
      highlights: ["Extensive BEC (Business English Certificate) training", "Model United Nations & Debate Society Mentors"]
    }
  ],

  notices: [
    {
      id: "not-2026-001",
      title: "Notification for 6-Year Integrated B.Tech Admissions 2026-27 (RGUKT AP)",
      category: "Admissions",
      date: "08 Sep 2026",
      urgent: true,
      tag: "Admissions",
      summary: "Official notification inviting online applications from AP & TS SSC passed candidates for admission into 6-Year Integrated B.Tech program across RGUKT campuses.",
      pdfName: "RGUKT_Admissions_Detailed_Notification_2026.pdf",
      size: "1.4 MB"
    },
    {
      id: "not-2026-002",
      title: "End Semester Examinations (AY 2025-26 Sem-II) Final Timetable & Hall Ticket Release",
      category: "Examinations",
      date: "06 Sep 2026",
      urgent: true,
      tag: "Exams",
      summary: "End Semester Examination timetables for PUC-I, PUC-II, E1, E2, E3, and E4 regular & remedial examinations starting from September 22, 2026.",
      pdfName: "End_Sem_Exam_Schedule_Sep_2026.pdf",
      size: "820 KB"
    },
    {
      id: "not-2026-003",
      title: "Invitation of E-Tender for Supply & Commissioning of High-End GPU AI Workstations",
      category: "Tenders",
      date: "04 Sep 2026",
      urgent: false,
      tag: "Tenders",
      summary: "E-tenders are invited from OEM/authorized dealers for supply and installation of 40 GPU AI workstations for Department of CSE. Tender Ref: RGUKT/RKV/E-Tender/CSE/GPU/2026/08.",
      pdfName: "Tender_Notice_GPU_AI_Lab_2026.pdf",
      size: "2.1 MB"
    },
    {
      id: "not-2026-004",
      title: "Recruitment Notification for Guest Faculty Positions in Engineering & Sciences (AY 2026-27)",
      category: "Recruitment",
      date: "01 Sep 2026",
      urgent: false,
      tag: "Careers",
      summary: "Applications are invited from eligible candidates for walk-in/online interviews for Guest Faculty in CSE, ECE, Mechanical, Civil, Mathematics, and Physics.",
      pdfName: "Guest_Faculty_Recruitment_Notification_2026.pdf",
      size: "950 KB"
    },
    {
      id: "not-2026-005",
      title: "Academic Calendar for 6-Year Integrated B.Tech for the Academic Year 2026-27",
      category: "Academic",
      date: "28 Aug 2026",
      urgent: false,
      tag: "Academic",
      summary: "Approved academic calendar for PUC & B.Tech programs detailing semester commencement, mid-term examinations, festivals, and project submission deadlines.",
      pdfName: "Academic_Calendar_RGUKT_2026_27.pdf",
      size: "640 KB"
    },
    {
      id: "not-2026-006",
      title: "Campus Placement Drive 2026-27: Registration Schedule for Tier-1 Product Companies",
      category: "Events",
      date: "25 Aug 2026",
      urgent: false,
      tag: "Placements",
      summary: "CDPC announces upcoming placement drives by Amazon, Cisco, Qualcomm, TCS Digital, and Analog Devices for final year E4 students.",
      pdfName: "Placement_Drive_Schedule_Phase1_2026.pdf",
      size: "480 KB"
    },
    {
      id: "not-2026-007",
      title: "Circular regarding Anti-Ragging Guidelines and Constitution of Campus Flying Squads",
      category: "Academic",
      date: "20 Aug 2026",
      urgent: false,
      tag: "Student Welfare",
      summary: "Strict zero-tolerance policy against ragging in hostels and classrooms. 24x7 emergency helpline contacts and flying squad member details.",
      pdfName: "Anti_Ragging_Policy_Squad_2026.pdf",
      size: "380 KB"
    },
    {
      id: "not-2026-008",
      title: "Call for Research Proposals under RGUKT Internal Seed Grant Scheme (ISGS-2026)",
      category: "Academic",
      date: "15 Aug 2026",
      urgent: false,
      tag: "R&D",
      summary: "Dean R&D invites innovative research proposals from regular and contractual faculty for financial seed grants up to ₹5.00 Lakhs per project.",
      pdfName: "RGUKT_Seed_Grant_ISGS_Guidelines_2026.pdf",
      size: "1.1 MB"
    }
  ],

  tenders: [
    {
      id: "TND-2026-01",
      refNo: "RGUKT/RKV/ENQ/2026/08/01",
      title: "Supply, Installation & Maintenance of 40 High-End Deep Learning GPU Workstations for CSE Dept",
      category: "Equipment & Hardware",
      publishDate: "04 Sep 2026",
      closingDate: "25 Sep 2026 (03:00 PM)",
      emd: "₹ 1,50,000/-",
      status: "Active",
      docUrl: "Tender_GPU_Workstations_2026.pdf"
    },
    {
      id: "TND-2026-02",
      refNo: "RGUKT/RKV/CATERING/2026/07/04",
      title: "Tender for Providing Hygienic Catering & Student Mess Services for Dining Halls (Boys & Girls)",
      category: "Catering & Services",
      publishDate: "28 Aug 2026",
      closingDate: "18 Sep 2026 (05:00 PM)",
      emd: "₹ 5,00,000/-",
      status: "Active",
      docUrl: "Tender_Student_Mess_Services_2026.pdf"
    },
    {
      id: "TND-2026-03",
      refNo: "RGUKT/RKV/CIVIL/2026/08/09",
      title: "Comprehensive Annual Maintenance Contract (CAMC) for 1000 KLD Sewage Treatment Plant (STP)",
      category: "Works & Maintenance",
      publishDate: "20 Aug 2026",
      closingDate: "12 Sep 2026 (04:00 PM)",
      emd: "₹ 75,000/-",
      status: "Active",
      docUrl: "Tender_STP_Maintenance_2026.pdf"
    },
    {
      id: "TND-2026-04",
      refNo: "RGUKT/RKV/LIB/2026/07/02",
      title: "Subscription to International E-Journals (IEEE Xplore, ScienceDirect, SpringerLink) for Central Library",
      category: "Library & E-Resources",
      publishDate: "10 Aug 2026",
      closingDate: "31 Aug 2026",
      emd: "₹ 2,00,000/-",
      status: "Under Evaluation",
      docUrl: "Tender_EJournals_Library_2026.pdf"
    },
    {
      id: "TND-2026-05",
      refNo: "RGUKT/RKV/SOLAR/2026/06/11",
      title: "Turnkey Installation of 500 kWp Grid-Connected Rooftop Solar PV System on Academic Block-1",
      category: "Renewable Energy",
      publishDate: "15 Jul 2026",
      closingDate: "10 Aug 2026",
      emd: "₹ 3,50,000/-",
      status: "Awarded",
      docUrl: "Tender_Solar_PV_System_2026.pdf"
    }
  ],

  careers: [
    {
      id: "CAR-2026-01",
      advtNo: "RGUKT/RKV/Estt/Recruitment/Faculty/01/2026",
      post: "Guest Faculty / Assistant Professor (Ad-hoc)",
      department: "CSE, ECE, Mechanical, Civil, Chemical, MME, Maths, Physics, Chemistry, English",
      qualification: "First Class M.Tech / M.E / M.Sc with NET/SET or Ph.D. in relevant discipline.",
      lastDate: "20 Sep 2026",
      status: "Open",
      type: "Academic",
      formUrl: "Faculty_Application_Form_2026.pdf"
    },
    {
      id: "CAR-2026-02",
      advtNo: "RGUKT/RKV/Estt/Staff/02/2026",
      post: "Technical Laboratory Assistants & Network Engineers",
      department: "Computer Center, ECE Labs, Mechanical Fabrication & Central Instrumentation",
      qualification: "Diploma / B.Tech / B.Sc in relevant field with minimum 2 years laboratory experience.",
      lastDate: "22 Sep 2026",
      status: "Open",
      type: "Technical",
      formUrl: "Staff_Application_Form_2026.pdf"
    },
    {
      id: "CAR-2026-03",
      advtNo: "RGUKT/RKV/Estt/Medical/03/2026",
      post: "Resident Medical Officer (RMO) & Staff Nurses",
      department: "Campus Health Center (24x7 Hospital)",
      qualification: "MBBS recognized by MCI for Medical Officer; GNM / B.Sc Nursing for Staff Nurse.",
      lastDate: "28 Sep 2026",
      status: "Open",
      type: "Medical",
      formUrl: "Medical_Officer_Application_Form_2026.pdf"
    }
  ],

  placements: {
    overview: "The Career Development and Placement Cell (CDPC) at RGUKT RK Valley acts as an interface between premier industries and students. Through year-round competitive coding bootcamps, soft-skills training, and industry mentorship, our students achieve consistent excellence.",
    stats: {
      highestPackage: "₹ 28.5 LPA",
      averagePackage: "₹ 6.8 LPA",
      medianPackage: "₹ 5.6 LPA",
      offersCount: "1,240+",
      companiesVisited: "85+",
      dreamOffers: "210+"
    },
    topRecruiters: [
      { name: "Amazon", logo: "amazon", tier: "Super Dream", roles: "Software Dev Engineer" },
      { name: "Cisco Systems", logo: "cisco", tier: "Super Dream", roles: "Network Software Engineer" },
      { name: "Analog Devices", logo: "adi", tier: "Super Dream", roles: "VLSI Design & Embedded" },
      { name: "Qualcomm", logo: "qualcomm", tier: "Super Dream", roles: "Hardware / Modem Engg" },
      { name: "TCS Digital / Prime", logo: "tcs", tier: "Dream", roles: "System Engineer / R&D" },
      { name: "Infosys (Power Programmer)", logo: "infosys", tier: "Dream", roles: "Specialist Programmer" },
      { name: "Wipro Turbo", logo: "wipro", tier: "Core", roles: "Project Engineer" },
      { name: "Cognizant GenC Next", logo: "cognizant", tier: "Core", roles: "Full Stack Engineer" },
      { name: "L&T Construction", logo: "lnt", tier: "Core", roles: "Graduate Engineer Trainee" },
      { name: "Medha Servo Drives", logo: "medha", tier: "Core", roles: "Power & Embedded Engineer" },
      { name: "Zoho Corporation", logo: "zoho", tier: "Dream", roles: "Member Technical Staff" },
      { name: "Darwinbox", logo: "darwinbox", tier: "Dream", roles: "Backend Software Engineer" }
    ],
    trainingModules: [
      { title: "Competitive Programming & DSA", duration: "120 Hours", trainer: "Industry SDEs & LeetCode Masters" },
      { title: "Full Stack & Cloud Native Architecture", duration: "90 Hours", trainer: "AWS / Azure Certified Architects" },
      { title: "Core VLSI / FPGA & Verilog Design", duration: "80 Hours", trainer: "Cadence & Synopsys Certified Mentors" },
      { title: "Corporate Communication & Mock GD/PI", duration: "60 Hours", trainer: "British Council & Corporate HR Leaders" }
    ]
  },

  campusFacilities: [
    {
      id: "library",
      title: "Central Digital Library",
      category: "Academic",
      image: "images/central_library.jpg",
      description: "A three-story digital library housing over 75,000 physical volumes, 10,000+ national and international e-journals via IEEE Xplore, ScienceDirect, ACM Digital Library, and a 200-seat 24x7 digital reading wing."
    },
    {
      id: "computing",
      title: "Central Computing Center & AI Lab",
      category: "Labs",
      image: "images/computing_lab.jpg",
      description: "State-of-the-art data center with 10 Gbps National Knowledge Network (NKN) optical fiber backbone, dual-redundant server clusters, and GPU workstations powering computer vision and AI research."
    },
    {
      id: "sports",
      title: "University Sports Stadium & SAC",
      category: "Sports",
      image: "images/sports_complex.jpg",
      description: "Floodlit athletic track, international standard synthetic tennis & basketball courts, volleyball courts, modern multi-gymnasium, cricket ground, and indoor badminton stadium."
    },
    {
      id: "aerial",
      title: "330-Acre Green Sanctuary",
      category: "Campus",
      image: "images/campus_aerial.jpg",
      description: "Eco-friendly scenic residential campus nestled amidst the rolling hills of Idupulapaya, featuring 1MW solar rooftops, 1000 KLD wastewater recycling, and serene walking avenues."
    },
    {
      id: "academic-hub",
      title: "Academic Administrative Complex",
      category: "Campus",
      image: "images/campus_hero.jpg",
      description: "The architectural landmark housing state-of-the-art smart lecture theatres, Senate Hall, Administrative Directorate, Deaneries, and Departmental Research Centers."
    }
  ],

  gradingSystem: [
    { grade: "Ex", description: "Excellent", points: 10, marksRange: "90 - 100" },
    { grade: "A", description: "Very Good", points: 9, marksRange: "80 - 89" },
    { grade: "B", description: "Good", points: 8, marksRange: "70 - 79" },
    { grade: "C", description: "Fair", points: 7, marksRange: "60 - 69" },
    { grade: "D", description: "Satisfactory", points: 6, marksRange: "50 - 59" },
    { grade: "E", description: "Pass", points: 5, marksRange: "40 - 49" },
    { grade: "R", description: "Remedial (Failed)", points: 0, marksRange: "Below 40" }
  ],

  admissionFAQ: [
    {
      q: "What is the 6-Year Integrated B.Tech program at RGUKT RK Valley?",
      a: "The flagship 6-Year Integrated B.Tech program admits students immediately after 10th standard (SSC). It combines 2 years of rigorous Pre-University Course (PUC - equivalent to Intermediate/10+2 with deep ICT grounding) followed by 4 years of Bachelor of Technology in Engineering without needing intermediate entrance exams."
    },
    {
      q: "What is the eligibility criteria for RGUKT Admissions?",
      a: "Candidates must have passed SSC (10th class) in first attempt from recognized boards in AP or Telangana. Candidates must not have completed 18 years of age (21 years for SC/ST)."
    },
    {
      q: "What are Deprivation Points for Government School Students?",
      a: "In accordance with the RGUKT Act, a deprivation score of 0.4 marks is added to the 10th GPA of candidates who studied in Non-Residential Government Schools (Zilla Parishad / Municipal / Govt schools) to empower gifted rural students."
    },
    {
      q: "Is RGUKT RK Valley 100% residential?",
      a: "Yes. All students are provided with on-campus accommodation in secure, modern hostel blocks with mechanized catering, 24x7 medical care, Wi-Fi, and sports facilities."
    },
    {
      q: "What engineering branches are offered after PUC?",
      a: "Students can choose from Computer Science & Engineering (CSE), Electronics & Communications (ECE), Electrical & Electronics (EEE), Mechanical Engineering (ME), Civil Engineering (CE), Chemical Engineering (CHE), and Metallurgical & Materials Engineering (MME) based on merit and choice counseling."
    }
  ]
};

if (typeof window !== "undefined") {
  window.RGUKT_DATA = RGUKT_DATA;
}
