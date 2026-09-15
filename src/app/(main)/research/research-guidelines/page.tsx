import React from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata = {
  title: "Research Guidelines | RGUKT RK Valley",
  description: "Guidelines for promotion of research and consultancy activities at RGUKT."
};

export default function ResearchGuidelinesPage() {
  return (
    <div className="page-view-container" style={{ background: "#f8fafc", paddingBottom: "4rem" }}>
      <Breadcrumb title="Research Guidelines" category="Research" />

      <div className="container" style={{ width: "100%", margin: "0 auto", maxWidth: "1200px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem", marginTop: "2rem", flexWrap: "wrap", gap: "1rem" }}>
          <h1 style={{ color: "var(--primary-dark)", fontSize: "2.2rem", fontWeight: 800, margin: 0 }}>
            Research Guidelines
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
          
          <h2 style={{ textAlign: "center", color: "var(--primary-dark)", fontSize: "1.8rem", fontWeight: 800, marginBottom: "2.5rem", borderBottom: "2px solid var(--accent-gold)", paddingBottom: "1rem" }}>
            GUIDELINES FOR PROMOTION OF RESEARCH AND CONSULTANCY ACTIVITIES AT RGUKT
          </h2>

          {/* 1. MOTIVATION */}
          <h3 style={{ color: "var(--primary-maroon)", fontSize: "1.4rem", fontWeight: 700, marginTop: "2rem", marginBottom: "1rem" }}>
            1. MOTIVATION
          </h3>
          <p style={{ marginBottom: "1rem" }}>
            Research, which is a scholarly and creative endeavour, leading to innovations and development, is a major pillar of strength in a university system. Academic excellence is significantly contributed through the success achieved through research and development. The research and development cell envisages to bring together, the faculty of this multi-disciplinary and diversified university organisational set up by nurturing and promoting scientific excellence. This could be achieved by an encouraging ecosystem for promotion of research excellence and this is achieved through multifaceted tasks which include facilitating the initiation and organisation/implementation of research projects, coordination, monitoring and evaluation of student research.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            Having achieved significant laurels in teaching programs, RGUKT has embarked on its mission to develop research programs as well. The research activity which is sporadic in the campuses of RGUKT has to be coordinated and nurtured as a cohesive program involving the faculty across all the departments in the university.
          </p>
          <p style={{ marginBottom: "1rem", fontWeight: 600 }}>The strategy of the Research Cell would be</p>
          <ul style={{ paddingLeft: "2rem", marginBottom: "2rem" }}>
            <li style={{ marginBottom: "0.5rem" }}>To nurture active research culture in the university</li>
            <li style={{ marginBottom: "0.5rem" }}>To strengthen inter-disciplinary research by coordinating activities of different departments</li>
            <li style={{ marginBottom: "0.5rem" }}>To foster research capacity for future</li>
            <li style={{ marginBottom: "0.5rem" }}>To thrive for external research funding for research infrastructure</li>
            <li style={{ marginBottom: "0.5rem" }}>To encourage socially relevant research problems</li>
            <li style={{ marginBottom: "0.5rem" }}>To encourage young student entrepreneurs through incubation of startups</li>
          </ul>
          <p style={{ marginBottom: "2rem" }}>In order to achieve the set goals, it is suggested to have the following.</p>


          {/* 2. SPONSORED RESEARCH PROJECTS */}
          <h3 style={{ color: "var(--primary-maroon)", fontSize: "1.4rem", fontWeight: 700, marginTop: "2rem", marginBottom: "1rem" }}>
            2. SPONSORED RESEARCH PROJECTS
          </h3>
          <p style={{ marginBottom: "1rem" }}>
            Sponsored projects are the major sources of funding that help in developing research laboratories and enhance visibility to the university through research publications. The faculty should be encouraged to apply for the projects. In order to motivate research activity the investigators could be given incentives in the form of a small share in the 'overheads' of the project grant. This money would be put into a separate account, called Faculty Development Fund, in the name of the investigator and could accumulate through his/her career in the university and could be utilized for any research related expenditure like attending conferences, publication fees, consumable materials for the laboratory, personal laptop or furniture to the office etc. From the 'overheads' grant, 25 percent could be given to the investigator and 25 percent to the department to which the investigator belongs. In case of multiple departments/investigators involved, this could be equally distributed among the participating departments/investigators.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            In order to encourage research publications by the faculty, each of the publication, depending on the quality could be graded and a one time incentive could be approved and credited to the account of the faculty development fund as mentioned above.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            The contract faculty may be permitted to avail academic leave of 20 days in an academic year, to visit other institutions in connection with research work. Such a leave, not more than a maximum of 5 days at a time, will be given on the recommendation of the Head of the department, without affecting the academic program of the department.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            Whenever a contract faculty undertakes a research project, it is suggested to have a regular faculty member as another investigator.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            All the research proposals from the faculty have to be approved by the Research and Development cell, which will verify the research content and the budget. Contractual scientific staff could be appointed for the duration of the project, with prior identification in the budget. The R&D cell would be the nodal point for any communication with the funding agency and would maintain the accounts of the projects.
          </p>
          <p style={{ marginBottom: "2rem" }}>
            Any findings of the university faculty that deserve protection of Intellectual Property, could be done so by applying for a patent. The IP document will be reviewed by a committee set up by the Research cell and the faculty has to make a presentation to the committee justifying the importance of the IP. The committee will then decide on the suitability for patent filing. The university will then process the patent through the legal advisor.
          </p>


          {/* 3. INDUSTRIAL CONSULTANCY */}
          <h3 style={{ color: "var(--primary-maroon)", fontSize: "1.4rem", fontWeight: 700, marginTop: "2rem", marginBottom: "1rem" }}>
            3. INDUSTRIAL CONSULTANCY
          </h3>
          <p style={{ marginBottom: "1rem" }}>
            The sophisticated equipment available in many laboratories could be properly utilized to undertake consultancy work for the industries on charged basis. This could be in the form testing charges, undertaking proof of concept projects, etc. An intellectual property developed through such program could be jointly shared by the industry and the university. The revenues earned by each of the consultancy works is shared by the concerned faculty and the university, with the former getting a major share. A proper format for budgeting the consultancy work will be made.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            After initial negotiation between the industry and the faculty, on the technical aspects of the consultancy, a proper proposal has to be submitted to the research cell in the prescribed f. oromatA technical committee will evaluate the proposal before approving it. Then the concerned industry will be contacted by the Research Cell with the proposal. The program will start after receiving the budgeted money in advance from the industry. There could be three types of consultancy projects, such as
          </p>
          <ul style={{ paddingLeft: "2rem", marginBottom: "1rem", fontWeight: 600 }}>
            <li style={{ marginBottom: "0.5rem" }}>A. Type I consultancy Project involving research/field work:</li>
            <li style={{ marginBottom: "0.5rem" }}>B. Type II consultancy Project for Materials Testing</li>
            <li style={{ marginBottom: "0.5rem" }}>C. Type III consultancy Project involving only technical advice</li>
          </ul>
          <p style={{ marginBottom: "1rem" }}>
            In case of Type I projects, the minimum project cost (consultation fee + overheads) could be Rs.50,000.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            In case of Type II and Type III consultancy projects, the minimum amount could be Rs.5000.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            The project cost has to be paid in advance before taking up the consultancy work. The faculty is encouraged to take up more research based consultancy, than the routine material testing.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            The consultancy fee charged in these projects would be predominately have three types of charges, a) cost of materials and services b) Technical advice fee and c) over heads.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            The technical advice fee would have a major share to the consulting faculty with a small share to the department and to the institute.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            In case any students are involved in the consultancy project, they should be paid for the work done. The maximum time that a student can spend on such work would be 40 hours a month subject to a maximum of 10 hours a week. For any technician involved in the project, the consultant can determine a consolidated amount to be paid. This should be accommodated accordingly in the budget for materials and services.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            Any certification on material testing has to be approved by the R&D cell. All the communication with the industry will be done through the R&D Cell of the university. The test report should be duly signed by the consultant and the Head of the department. In case of material testing report, which does not involve analysis, the HOD will be the competent authority to sign the document.
          </p>
          <p style={{ marginBottom: "2rem" }}>
            Both regular and contract faculty are encouraged to take up consultancy work.
          </p>


          {/* 4. SEED GRANT FOR RESEARCH */}
          <h3 style={{ color: "var(--primary-maroon)", fontSize: "1.4rem", fontWeight: 700, marginTop: "2rem", marginBottom: "1rem" }}>
            4. SEED GRANT FOR RESEARCH
          </h3>
          <p style={{ marginBottom: "1rem" }}>
            In order to motivate the faculty to initiate research work, each of them could be given a seed grant after evaluating the research proposal. This grant could cover the basic requirements of the research project envisaged and should pave way for a major grant from a funding agency. The faculty is expected to submit a proposal and make a presentation to a specially set up committee for approval. Thus the sanction of seed grant would be need based and the quantum of the grant depends on the project and the funds available with the university. The corpus for such fund could be generated through donations from the Alumni of the university, Philanthrophy and Industry.
          </p>
          <p style={{ marginBottom: "2rem" }}>
            Also the faculty/students presenting their research work in conferences could be supported to the tune of Rs.25,000 in a year. An application to attend the conference has to be made by the applicant giving details of the conference and the research work being presented. It will be reviewed by the committee before making a decision.
          </p>


          {/* 5. INNOVATION AND INCUBATION */}
          <h3 style={{ color: "var(--primary-maroon)", fontSize: "1.4rem", fontWeight: 700, marginTop: "2rem", marginBottom: "1rem" }}>
            5. INNOVATION AND INCUBATION
          </h3>
          <p style={{ marginBottom: "1rem" }}>
            The faculty and students of the university have demonstrated their innovative ideas with potential to become a marketable products. A innovation center that could incubate the startup industries initiated by the faculty and student can be though off. The university can provide limited space and permission to utilize the facilities of the campus for the purpose. In lieu of this, the university can acquire an equity of 3 to 5 percent in the company and charge a nominal rent for the space provided. The incubation will be for a period of three years, beyond which the company could move to its own place to sustain the growth. Under exceptional conditions which delay the starting of the company, the time could be extended by another one year. The incubating company can use the expertise in the campus to develop their products, through research funding. The university should identify the place to house such incubation center. Legal opinion should be sought in each case to avoid future issues.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            To start with, the focus should be to develop technologies useful to the local industry. The Krishna, Godavari delta area is rich in agri based industries. Hence any start up catering to the needs of these industries in terms of food processing, food storage, pesticides etc., would be a good beginning. Similarly, the RK Valley campus is surrounded by lot of mining industries and hence starting industries related to mining and mineral processing would be attractive.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            Hence the students and faculty of relevant departments should be motivated by organizing special interactive sessions with these industrial representatives to understand the outstanding problems waiting for solutions. Simultaneously, we can approach different Governmental nodal agencies to fund such incubation centers.
          </p>
          <p style={{ marginBottom: "2rem" }}>
            A product fair, displaying the innovative projects of the final year students of engineering can be organized to expose their talent to the public in general and industries in particular. Incentive cash prizes may be instituted by the university to encourage the students to undertake innovative projects.
          </p>


          {/* 6. KEEPING THE HOUSE IN ORDER */}
          <h3 style={{ color: "var(--primary-maroon)", fontSize: "1.4rem", fontWeight: 700, marginTop: "2rem", marginBottom: "1rem" }}>
            6. KEEPING THE HOUSE IN ORDER
          </h3>
          <p style={{ marginBottom: "1rem" }}>
            The two university campuses at Nuzvid and RK Valley have invested huge money on several high end equipment which requires maintenance. As a first step, all the existing equipment should be put back into working condition and for each of these equipment, a faculty person should be made responsible. All the research facilities must be put under a common umbrella and any faculty/student should be allowed to use them with a proper time slot management system. In an ideal case, technicians should be appointed to run the facilities. In the absence of that the faculty member who is spending his time in helping the researchers for conducting the experiments and collecting the data, could be credited appropriately.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            In general, any external funding for research is granted only to the regular faculty in the university. That being the case, it is imperative to increase the number of regular faculty with the Ph.D degree. Even the contract faculty should be appointed on long term contract of at least 5 years, instead of the present system of renewal every year.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            <strong>In order to have coherence in the activities of all the campuses, the Research cell will be the single point of administration for the entire research program as discussed in this document.</strong> It should be managed by the director of the research cell with a committee of three or four faculty members, A research advisory committee could be formed with eminent researchers from other academic institutions and industry to advise on the program. The fund accumulated by the Research Cell in its account, through the over heads of research projects, consultancy projects etc., will be utilized to provide fund to the faculty, at its discretion, for fostering research related activity in the university.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            All the faculty members should try to earn money in the form of consultancy or sponsored research to upkeep the working of the research facilities in the campus. With the early success of the program, the university can embark on larger programs which can attract larger funding and better infrastructure.
          </p>
          <p style={{ marginBottom: "2rem" }}>
            As a long term plan, the university should aim at publishing a quarterly research journal encompassing different subjects.
          </p>


          {/* 7. VISIBILITY OF THE UNIVERSITY */}
          <h3 style={{ color: "var(--primary-maroon)", fontSize: "1.4rem", fontWeight: 700, marginTop: "2rem", marginBottom: "1rem" }}>
            7. VISIBILITY OF THE UNIVERSITY
          </h3>
          <p style={{ marginBottom: "1rem" }}>
            In the present day social environment which is monitored and controlled by Media, a good publicity for the achievements of the university is essential. Social media posts, print media articles, participation in scientific events conducted by other institutions are some of the activities envisaged along with scientific publications. The website of the university has to be updated frequently with relevant information.
          </p>
          <p style={{ marginBottom: "2rem", fontWeight: 700 }}>
            Within the established framework of the university system and the identified goals and strategies, let us strive to achieve research excellence which would transform the university as one of the desirable destinations for quality research and education in the country.
          </p>

        </div>
      </div>
    </div>
  );
}
