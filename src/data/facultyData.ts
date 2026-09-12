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
}

export const getDepartmentFaculty = (dept: Department): FacultyProfile[] => {
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
