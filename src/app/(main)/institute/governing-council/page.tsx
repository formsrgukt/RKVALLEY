"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const councilMembers = [
  {
    name: "Prof. K. Madhu Murthy",
    designation: "Chancellor (FAC),\nRGUKT, AP",
    email: "chancellor@rgukt.in",
    role: "Chairman/Member-Convener",
    image: "/images/governing-council/KMadhuMurthy_Pr.jpeg",
    link: "/leadership/chancellor"
  },
  {
    name: "Prof. Maddali Lakshmi Narayana Rao (M.L.N. Rao)",
    designation: "Vice-Chancellor,\nRGUKT, AP",
    email: "vc@rgukt.in",
    role: "Member",
    image: "/images/governing-council/mlnrao.jpg"
  },
  {
    name: "Sri. Katamneni Bhaskar, IAS",
    designation: "Secretary to Government\nIT & C Department, Govt. of AP.",
    email: "",
    role: "Member",
    image: "/images/governing-council/katambhaskar.jpg"
  },
  {
    name: "Sri Kona Sasidhar IAS",
    designation: "Secretary to Government\nHigher Education Department, Govt. of AP.",
    email: "",
    role: "Member",
    image: "/images/governing-council/konasasidhar.png"
  },
  {
    name: "Sri V. Vinay Chand IAS",
    designation: "Secretary to Government\nFinance Department, Govt. of AP.",
    email: "",
    role: "Member",
    image: "/images/governing-council/FMIAS.jpg"
  },
  {
    name: "Prof. K. Madhu Murthy",
    designation: "Chairman, APSCHE\n\nMangalagiri",
    email: "",
    role: "Member",
    image: "/images/governing-council/KMadhuMurthy_Pr (1).jpeg",
    link: "/leadership/chancellor"
  },
  {
    name: "Prof. Sandeep Kumar Shukla",
    designation: "Director, IIIT-Hyderabad",
    email: "",
    role: "Member",
    image: "/images/governing-council/Sandeep-Kumar-Shukla.jpg",
    link: "https://www.iiit.ac.in/faculty/sandeep-kumar-shukla/"
  },
  {
    name: "Prof. G. Vijaya Prakash",
    designation: "FNASc, FRSC (UK), FInstP (UK)\nDirector, RGUKT RKValley (Idupulapaya) Campus\nOn lien: Institute Chair Professor and HAG Professor of Physics, IIT Delhi, New Delhi",
    email: "director@rguktrkv.ac.in",
    role: "Member",
    image: "/images/governing-council/GVijayprakash.jpg",
    objectPosition: "center 15%",
    link: "/leadership/director"
  },
  {
    name: "Prof. SSSV Gopala Raju",
    designation: "In-Charge Director,\nRGUKT Nuzvid Campus",
    email: "director@rguktn.ac.in",
    role: "Member",
    image: "/images/governing-council/GR.jpg"
  },
  {
    name: "Prof. Amarendra Kumar Sandra",
    designation: "Director,\nRGUKT Ongole Campus",
    email: "director.ongole@rgukt.in",
    role: "Member",
    image: "/images/governing-council/1161503.jpg",
    link: "https://rguktong.ac.in/instituteinfo.php?data=director"
  },
  {
    name: "Prof. Giridhar Madras",
    designation: "Director,\nRGUKT Srikakulam Campus",
    email: "director.sklm@rgukt.in",
    role: "Member",
    image: "/images/governing-council/Giridhar_Madras.jpg",
    link: "https://rguktsklm.ac.in/the-institute/administration/director/"
  },
  {
    name: "Prof. N.Balakrishnan",
    designation: "Former Associate Director,\nIndian Institute of Science, Bangalore",
    email: "",
    role: "Member",
    image: "/images/governing-council/profnbalakrishnan.jpg"
  },
  {
    name: "Dr. Sudha Murthy",
    designation: "Chairperson,\nInfosys Foundation, Bangalore.",
    email: "",
    role: "Member",
    image: "/images/governing-council/drsudhamurthy.jpg"
  },
  {
    name: "Shri. K.Nityananda Reddy",
    designation: "Vice-Chairman, Aurobindo Pharma",
    email: "",
    role: "Member",
    image: "/images/governing-council/nityananda-reddy.jpg"
  },
  {
    name: "Prof K.N. Satyanarayana",
    designation: "Director, IIT-Tirupati",
    email: "",
    role: "Special Invitee",
    image: "/images/governing-council/iittptydirector.jpg"
  },
  {
    name: "Prof. Amarendra Kumar Sandra",
    designation: "Registrar,\nRGUKT",
    email: "registrar@rgukt.in",
    role: "Special Invitee",
    image: "/images/governing-council/1161503 (1).jpg",
    link: "https://rguktong.ac.in/instituteinfo.php?data=director"
  }
];

export default function GoverningCouncilPage() {
  return (
    <div className="container" style={{ padding: "4rem 1rem", width: "100%", margin: "0 auto", minHeight: "80vh" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
        <h1 style={{ color: "var(--primary-dark)", fontSize: "2.2rem", fontWeight: 800, margin: 0 }}>
          Governing Council
        </h1>
      </div>
      
      <div style={{ background: "#ffffff", padding: "3rem", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)", lineHeight: 1.75, color: "#334155", fontSize: "1.05rem" }}>
        <div style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ color: "var(--primary-maroon)", fontSize: "1.45rem", marginBottom: "1rem", fontWeight: 700 }}>
            About Governing Council
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#334155", lineHeight: 1.75, marginBottom: "0" }}>
            The Government of Andhra Pradesh established Rajiv Gandhi University of Knowledge Technologies (RGUKT) in 2008 to cater to the educational needs of the meritorious rural youth of Andhra Pradesh. Four Institutions (IIITs) are established under RGUKT, one each at Nuzvid (Krishna dt), Rajiv Knowledge Valley (Kadapa dt), Ongole and Srikakulam. These autonomous institutions will specialize in teaching and research in Information Technology and other emerging engineering and other disciplines under the control of a common University Governing Council and following a common syllabus.
          </p>
        </div>

        <h2 style={{ color: "var(--primary-maroon)", fontSize: "1.45rem", marginBottom: "1.5rem", fontWeight: 700 }}>
          Governing Council of RGUKT
        </h2>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))", 
          gap: "1.5rem",
          borderTop: "1px solid #e2e8f0",
          paddingTop: "1.5rem"
        }}>
          {councilMembers.map((member, idx) => (
            <div key={idx} style={{ 
              display: "flex", 
              gap: "1.25rem", 
              padding: "1.25rem", 
              background: "#f8fafc",
              borderRadius: "8px",
              border: "1px solid #e2e8f0",
              alignItems: "stretch",
              height: "100%",
              transition: "transform 0.2s, box-shadow 0.2s",
              cursor: "default"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "none";
            }}>
              <div style={{ 
                width: "80px", 
                height: "80px", 
                borderRadius: "50%", 
                overflow: "hidden", 
                flexShrink: 0,
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                border: "2px solid var(--accent-gold)"
              }}>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: member.objectPosition || "top" }} 
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "0.25rem", flex: 1, height: "100%" }}>
                <div>
                  {member.link ? (
                    <Link 
                      href={member.link} 
                      target={member.link.startsWith("http") ? "_blank" : "_self"}
                      rel={member.link.startsWith("http") ? "noopener noreferrer" : ""}
                      style={{ color: "var(--primary-maroon)", fontSize: "1rem", fontWeight: 700, lineHeight: 1.3, display: "block", textDecoration: "none" }}
                      onMouseOver={(e) => e.currentTarget.style.textDecoration = "underline"}
                      onMouseOut={(e) => e.currentTarget.style.textDecoration = "none"}
                    >
                      {member.name}
                    </Link>
                  ) : (
                    <div style={{ color: "var(--primary-maroon)", fontSize: "1rem", fontWeight: 700, lineHeight: 1.3 }}>
                      {member.name}
                    </div>
                  )}
                <div style={{ fontSize: "0.85rem", color: "#64748b", whiteSpace: "pre-wrap", lineHeight: 1.4 }}>
                  {member.designation}
                </div>
                {member.email && (
                  <div style={{ fontSize: "0.85rem", color: "#334155", marginTop: "0.15rem" }}>
                    <span style={{ fontWeight: 600 }}>Email:</span> {member.email}
                  </div>
                )}
                </div>
                <div style={{ 
                  display: "inline-block",
                  fontSize: "0.75rem", 
                  color: "var(--primary-dark)", 
                  fontWeight: 700, 
                  marginTop: "0.25rem",
                  background: "var(--accent-gold-light)",
                  padding: "0.15rem 0.5rem",
                  borderRadius: "4px",
                  alignSelf: "flex-start"
                }}>
                  {member.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
