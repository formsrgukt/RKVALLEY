import React from "react";
import Image from "next/image";

export default function ChancellorProfilePage() {
  return (
    <div className="container" style={{ padding: "4rem 1rem", width: "100%", margin: "0 auto", maxWidth: "1200px", minHeight: "80vh" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
        <h1 style={{ color: "var(--primary-dark)", fontSize: "2.2rem", fontWeight: 800, margin: 0 }}>
          About Chancellor
        </h1>
      </div>
      
      <div style={{ background: "#ffffff", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)", overflow: "hidden" }}>
        
        {/* Profile Header Area */}
        <div style={{ 
          display: "flex", 
          flexDirection: "row", 
          flexWrap: "wrap",
          padding: "3rem", 
          gap: "2rem",
          alignItems: "flex-start",
          borderBottom: "1px solid #e2e8f0"
        }}>
          {/* Image Section */}
          <div style={{ flexShrink: 0, width: "130px" }}>
            <div style={{ 
              width: "100%", 
              aspectRatio: "3/4", 
              position: "relative",
              borderRadius: "12px", 
              overflow: "hidden",
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
              border: "1px solid #000000"
            }}>
              <Image 
                src="/images/leadership/KMadhuMurthy_ful.jpeg" 
                alt="Prof. K. Madhu Murthy"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                priority
              />
            </div>
          </div>
          
          {/* Header Info Section */}
          <div style={{ flex: 1, minWidth: "300px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h2 style={{ color: "var(--primary-maroon)", fontSize: "2rem", fontWeight: 800, margin: "0 0 0.5rem 0", lineHeight: 1.2 }}>
              Prof. (Dr.) Kotha Madhu Murthy
            </h2>
            <div style={{ color: "#475569", fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.25rem" }}>
              Chancellor (I/c), RGUKT, AP
            </div>
            <div style={{ color: "#64748b", fontSize: "1.1rem", marginBottom: "2rem" }}>
              Chairman of the Andhra Pradesh State Council of Higher Education (APSCHE)
            </div>
            
            {/* Quick Contact */}
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "2rem", marginTop: "0.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.05rem", color: "#334155" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "var(--accent-gold-light)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary-dark)" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <span style={{ fontWeight: 600 }}>Email:</span> 
                <a href="mailto:chancellor@rgukt.in" style={{ color: "var(--primary-maroon)", textDecoration: "none", fontWeight: 500 }}>chancellor@rgukt.in</a>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "1.05rem", color: "#334155" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "var(--accent-gold-light)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary-dark)" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <span style={{ fontWeight: 600 }}>Phone:</span> 
                <span>08656235855</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div style={{ padding: "3rem", fontSize: "1.05rem", color: "#334155", lineHeight: 1.8 }}>
          <p style={{ marginBottom: "1.5rem" }}>
            Prof. (Dr.) Kotha Madhu Murthy is an academician and administrator, currently serving as the Chairman of the Andhra Pradesh State Council of Higher Education (APSCHE). With over 37 years of experience in Mechanical Engineering and Entrepreneurship, he has significantly contributed to higher education policy, research, and institutional development.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            Prior to his appointment as Chairman, he was a Professor (HAG) at the National Institute of Technology, Warangal (NITW) and a Member of the Board of Governors (NITW). He has held several leadership roles, including Dean (Faculty Welfare), Head of the Mechanical Engineering Department, and Registrar (Additional Charge) at NITW and NIT Delhi. Prof. Murthy holds a Ph.D. in Mechanical Engineering from Regional Engineering College, Warangal (1998), along with an M.Tech. in IC Engines & Gas Turbines, a B.E. in Mechanical Engineering, and a PG Diploma in Business Administration. As an Advisor at AICTE, he played a crucial role in policy formulation, governance restructuring, and curriculum reforms at the national level and coordinator of NITs. He served as a member of NCVT, BEE, Board of Governors of NITs, NITTTR Kolkata and many other reputed bodies.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            Internationally, he served as LEDA Management Advisor for UNDP/ILO in Cambodia and worked with Samsung India Software Organization on HR and training initiatives. His research expertise spans IC engines, biofuels, solar energy, and rocket propellants. As a Fellow of The Institution of Engineers (India), Andhra Pradesh Akademi of Sciences, and the Indian Institution of Production Engineers, Prof. Murthy has led entrepreneurship & skill development initiatives, established incubation centers, and conducted skill development programs. He has also played a key role in enhancing campus placements, achieving near 100% recruitment at NITW.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            Prof. Murthy has received several prestigious awards and recognitions, including the British Council TCTP Fellowship (1996) under the Indo-UK RECs Project, which allowed him to train at leading UK universities in Entrepreneurial Small Business Development and Technology Transfer Mechanisms. He has also won four Best Paper Awards for his outstanding research contributions and has been recognized with a Lifetime Achievement Recognition for his impact on engineering education and entrepreneurship development.
          </p>
          <p style={{ marginBottom: "2.5rem" }}>
            Under his leadership at APSCHE, he is planning reforms in higher education policy, academic innovation, and industry-academia collaboration, driving the vision for a stronger, future-ready education system in Andhra Pradesh.
          </p>

          {/* Addresses Section */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginTop: "2rem", paddingTop: "2.5rem", borderTop: "1px solid #e2e8f0" }}>
            <div style={{ background: "#f8fafc", padding: "1.5rem", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
              <h3 style={{ color: "var(--primary-dark)", fontSize: "1.2rem", fontWeight: 700, margin: "0 0 1rem 0", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Head Office Address
              </h3>
              <address style={{ fontStyle: "normal", color: "#475569", lineHeight: 1.6 }}>
                <strong>The Chancellor</strong><br/>
                Rajiv Gandhi University of Knowledge Technologies-AP,<br/>
                RK Valley Campus, Idupulapaya (Village),<br/>
                Kadapa District,<br/>
                Andhra Pradesh, Pin: 516330
              </address>
            </div>
            
            <div style={{ background: "#f8fafc", padding: "1.5rem", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
              <h3 style={{ color: "var(--primary-dark)", fontSize: "1.2rem", fontWeight: 700, margin: "0 0 1rem 0", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Camp Office Address
              </h3>
              <address style={{ fontStyle: "normal", color: "#475569", lineHeight: 1.6 }}>
                <strong>The Chancellor</strong><br/>
                Rajiv Gandhi University of Knowledge Technologies-AP,<br/>
                Nuzvid Campus, Nuzvid<br/>
                Krishna District,<br/>
                Andhra Pradesh, Pin: 521202
              </address>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
