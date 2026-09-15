import React from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata = {
  title: "Research and Advisory Committee | RGUKT RK Valley",
  description: "Members of the Research and Advisory Committee at RGUKT."
};

const committeeMembers = [
  {
    sno: 1,
    name: "Prof. M.M.Nayak",
    affiliation: "Former Director, LVPO, ISRO, Bangalore",
    role: "Member"
  },
  {
    sno: 2,
    name: "Prof. Phaneendra Kumar Yalavarthy",
    affiliation: "Center for Data Sciences, Indian Institute of Science, Bangalore",
    role: "Member"
  },
  {
    sno: 3,
    name: "Prof. Muralidhar Ghantasala",
    affiliation: "Dept. of Aerospace and Mechanical Engineering, University of West Michigan, Kalamazoo, USA",
    role: "Member"
  },
  {
    sno: 4,
    name: "Prof. T.S.Sampath Kumar",
    affiliation: "Dept. of Materials Metallurgical Engineering, Indian Institute of Technology- Madras, Chennai",
    role: "Member"
  },
  {
    sno: 5,
    name: "Prof. M.Ghanashyam Krishna",
    affiliation: "Professor Incharge, Center for Nanotechnology, University of Hyderabad, Hyderabad.",
    role: "Member"
  },
  {
    sno: 6,
    name: "Prof. K.V. Rao",
    affiliation: "Former Vice-Chancellor, Acharya Nagarjuna University",
    role: "Member"
  },
  {
    sno: 7,
    name: "Prof. D.Harinarayana",
    affiliation: "Professor (Retd), Andhra University and Former Director School of Distance Education and Dean Academics both at Andhra University and Former Pro-Vice-Chancellor, GITAM University",
    role: "Member"
  },
  {
    sno: 8,
    name: "Prof. S.Ramakrishna Rao",
    affiliation: "Former Professor of Environmental Engineering, Andhra University and Former Vice-Chancellor, Krishna University.",
    role: "Member"
  },
  {
    sno: 9,
    name: "Prof. S.S.S.V.Gopala Raju",
    affiliation: "Dept.of Civil Engineering, RGUKT Nuzvid campus",
    role: "Member"
  },
  {
    sno: 10,
    name: "Prof. S.Amarendra Kumar",
    affiliation: "Dept.of Civil Engineering, RGUKT RK Valley campus",
    role: "Member"
  },
  {
    sno: 11,
    name: "Prof. G.Mohan Rao",
    affiliation: "Professor (Retd), IISC Banglore.",
    role: "Member- Convener"
  }
];

export default function ResearchAdvisoryCommitteePage() {
  return (
    <div className="page-view-container" style={{ background: "#f8fafc", paddingBottom: "4rem" }}>
      <Breadcrumb title="Research & Advisory Committee" category="Research" />

      <div className="container" style={{ width: "100%", margin: "0 auto", maxWidth: "1200px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem", marginTop: "2rem", flexWrap: "wrap", gap: "1rem" }}>
          <h1 style={{ color: "var(--primary-dark)", fontSize: "2.2rem", fontWeight: 800, margin: 0 }}>
            Research and Advisory Committee
          </h1>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "var(--primary-maroon)",
              color: "white",
              padding: "0.75rem 1.5rem",
              borderRadius: "8px",
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              transition: "transform 0.2s"
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            View Full PDF
          </a>
        </div>
        
        <div style={{ background: "#ffffff", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)", padding: "3rem", fontSize: "1.05rem", color: "#334155", lineHeight: 1.8 }}>
          
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h2 style={{ color: "var(--primary-dark)", fontSize: "1.5rem", fontWeight: 700, margin: "0 0 0.5rem 0" }}>
              PROCEEDINGS OF THE CHANCELLOR
            </h2>
            <p style={{ fontWeight: 600, color: "#475569", margin: "0 0 1rem 0" }}>
              Present: Prof. K. C. Reddy<br/>
              Date: 01-01-2022
            </p>
          </div>

          <div style={{ background: "#f1f5f9", padding: "1.5rem", borderRadius: "8px", marginBottom: "2rem", borderLeft: "4px solid var(--primary-maroon)" }}>
            <p style={{ margin: 0 }}>
              <strong>Sub:</strong> RGUKT, Andhra Pradesh–Constitution of Research Advisory Committee – Approved-Orders–Issued–Reg.
            </p>
          </div>

          <p style={{ marginBottom: "2rem", fontWeight: 600, fontSize: "1.1rem" }}>
            ORDERS:<br/>
            A Research and Advisory committee be constituted with the following experts for the University.
          </p>

          <div style={{ overflowX: "auto", marginBottom: "3rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
              <thead>
                <tr style={{ background: "var(--primary-dark)", color: "white" }}>
                  <th style={{ padding: "1rem", border: "1px solid #e2e8f0" }}>S.No</th>
                  <th style={{ padding: "1rem", border: "1px solid #e2e8f0" }}>Name of the Member</th>
                  <th style={{ padding: "1rem", border: "1px solid #e2e8f0" }}>Role</th>
                </tr>
              </thead>
              <tbody>
                {committeeMembers.map((member, index) => (
                  <tr key={index} style={{ background: index % 2 === 0 ? "#ffffff" : "#f8fafc" }}>
                    <td style={{ padding: "1rem", border: "1px solid #e2e8f0", verticalAlign: "top", fontWeight: 600 }}>
                      {member.sno}
                    </td>
                    <td style={{ padding: "1rem", border: "1px solid #e2e8f0", verticalAlign: "top" }}>
                      <div style={{ fontWeight: 700, color: "var(--primary-maroon)", marginBottom: "0.25rem" }}>
                        {member.name}
                      </div>
                      <div style={{ fontSize: "0.95rem", color: "#475569" }}>
                        {member.affiliation}
                      </div>
                    </td>
                    <td style={{ padding: "1rem", border: "1px solid #e2e8f0", verticalAlign: "top", fontWeight: 600, color: "var(--primary-dark)" }}>
                      {member.role}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem", marginTop: "2rem", paddingTop: "2rem", borderTop: "1px solid #e2e8f0" }}>
            <div>
              <p style={{ margin: "0 0 0.5rem 0", fontWeight: 700 }}>To</p>
              <p style={{ margin: 0 }}>The Individuals.</p>
              <br/>
              <p style={{ margin: "0 0 0.5rem 0", fontWeight: 700 }}>Copy to:</p>
              <ul style={{ margin: 0, paddingLeft: "1.2rem", color: "#475569" }}>
                <li>Vice-Chancellor (FAC), RGUKT</li>
                <li>All Directors, Deans and Administrative Officers of all four campuses of RGUKT.</li>
                <li>PS to Chancellor/Office of the Vice-Chancellor/OOF.</li>
              </ul>
            </div>
            
            <div style={{ textAlign: "right" }}>
              <div style={{ fontWeight: 700, fontSize: "1.2rem", color: "var(--primary-dark)" }}>
                (K.C.REDDY)
              </div>
              <div style={{ fontWeight: 600, color: "#475569" }}>
                Chancellor
              </div>
              <div style={{ fontSize: "0.9rem", color: "#64748b", marginTop: "0.5rem" }}>
                Rajiv Gandhi University of Knowledge Technologies<br/>
                Camp Office at RGUKT Nuzvid Campus, Nuzvid,<br/>
                Eluru District, Andhra Pradesh - 521202
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
