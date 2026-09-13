import React from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";

export function generateStaticParams() {
  return [
    { id: 'director' },
    { id: 'ao' },
    { id: 'fo' },
    { id: 'establishment' },
    { id: 'doa' },
    { id: 'dosw' },
    { id: 'coe' },
  ];
}

export default async function RegularExaminationsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  return (
    <main>
      <Breadcrumb
        title="Academic Regulations - 2017-18"
        links={[
          { label: "Home", href: "/" },
          { label: "Administration", href: "/administration/director" },
          { label: "Examination Cell", href: "/administration/coe" },
          { label: "Regular Examinations", href: "#" }
        ]}
      />
      
      <div style={{ margin: "4rem auto", width: "95%", maxWidth: "1500px", padding: "0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }}>
          
          <div style={{ background: "#fff", borderRadius: "8px", border: "1px solid #e2e8f0", padding: "3rem 4rem", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)" }}>
            <div style={{ borderBottom: "2px solid var(--primary-maroon)", paddingBottom: "1rem", marginBottom: "2rem" }}>
              <h1 style={{ color: "var(--primary-dark)", fontSize: "2rem", fontWeight: 800 }}>Examinations</h1>
            </div>

            <section id="regular-examinations" style={{ marginBottom: "3rem" }}>
              <h2 style={{ color: "var(--primary-maroon)", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Regular Examinations</h2>
              <p style={{ color: "#475569", lineHeight: "1.8", marginBottom: "1rem" }}>In this mode, students register for regular semester courses at the starting of the semester and the students shall attend the examinations (Weekly Tests, Mid 1, 2 and 3 and EST) in the same semester as per academic calendar.</p>
              <p style={{ color: "#475569", lineHeight: "1.8", marginBottom: "1rem" }}>As per the common academic calendar defined for the institutes, the End Semester Examinations shall be conducted in the given Examination Week of the semester. Usually the last week of November is given for Semester - I and last week of April is given for Semester - II.</p>
              <p style={{ color: "#475569", lineHeight: "1.8", marginBottom: "1rem" }}>The schedule for the End Semester Examinations should be given in such a way that main subjects like Mathematics, Physics, Chemistry, should fall on the beginning of the examination week. The results should be declared subject wise within 3 days from the scheduled date of the examination. For example, if the Mathematics End Semester Examination is conducted on Monday in the examination week, the results of the same should be announced by Thursday of the same week.</p>
              <p style={{ color: "#475569", lineHeight: "1.8", marginBottom: "1rem" }}>The results of the subjects shall be shared to the respective students through online notice board (ONB)/ in the website of the institute and the same shall be communicated to the students through several ways like e-mails, SMS etc.</p>
            </section>

            <section id="remedial-examinations" style={{ marginBottom: "3rem" }}>
              <h2 style={{ color: "var(--primary-maroon)", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Remedial/ Grade Improvement Examinations</h2>
              <p style={{ color: "#475569", lineHeight: "1.8", marginBottom: "1rem" }}>The students who did not clear the subjects in the End Semester Examinations of First Semester should appear for the subsequent remedial courses which shall be offered in the month of December. Two slots for the Remedial/GI Courses shall be offered in the month of December. In each slot, the supplementary examinations for EST shall be conducted for all the courses of First Semester. Any failed student can appear for maximum of two courses in each slot but he/she must do the registration and attend remedial class work for those courses. The students who have cleared all the courses in the regular EST examinations can opt for the Grade Improvement. These students should appear for the same supplementary examinations that shall be conducted for remedial courses. However, any student can register for maximum of two courses in the Grade Improvement in a slot. The grade improvement is given only once for a course.</p>
              <p style={{ color: "#475569", lineHeight: "1.8", marginBottom: "1rem" }}>Similarly, the students who did not clear the subjects in the End Semester Examinations of Second Semester should appear for the subsequent remedial courses which shall be offered in the month of June. Two slots for the Remedial Courses shall be offered in the month of June. In each slot, the supplementary examinations for EST shall be conducted for all the courses of Second Semester. Any failed student can appear for maximum of two courses in each slot but he/she must do the registration and attend remedial class work for those courses. The students who have cleared all the courses in the regular EST examinations can opt for the Grade Improvement. These students should appear for the same supplementary examinations that shall be conducted for remedial courses. However, any student can register for maximum of two courses in the Grade Improvement in a slot. The grade improvement is given only once for a course.</p>
              <p style={{ color: "#475569", lineHeight: "1.8", marginBottom: "1rem" }}>In the month of July, there shall be two slots (one slot for First Semester and one slot for Second Semester remedial) for the remedial courses. However, in July the supplementary examinations for the EST shall be conducted for all the courses of First Semester and Second Semester. Any failed student can appear for maximum of two courses in each slot but he/she must do the registration and attend remedial class work for those courses. There shall not be any Grade Improvement offered in these slots.</p>
              
              <ul style={{ color: "#475569", lineHeight: "1.8", paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
                <li>The students who don&apos;t clear required courses even after appearing for all the remedial courses should repeat those courses in the next academic year subjected to the promotion rules are satisfied.</li>
                <li>Re-registered students shall write both internal assessment test for 40% marks and for 60% marks end semester test.</li>
                <li>Remedial and grade improvement students shall write only end semester test for 60% marks. Internal assessment for 40% marks will be carried over from the internal assessment test held already. No separate internal assessment test shall be held for this category.</li>
                <li>All remedial and grade improvement examinations should be conducted only in SUM semesters.</li>
              </ul>
              
              <h3 style={{ color: "var(--primary-dark)", fontSize: "1.2rem", fontWeight: 600, marginBottom: "1rem" }}>Remedial / Grade Improvement Registration Fee (in Rupees)</h3>
              <p style={{ color: "#475569", lineHeight: "1.8", marginBottom: "1rem" }}>The following are registration fee for the remedial/grade improvement examinations for each course for A.Y.2017-18 and 2018-19</p>
              
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1.5rem" }}>
                  <thead>
                    <tr style={{ background: "var(--surface-light)", borderBottom: "2px solid #e2e8f0" }}>
                      <th style={{ padding: "1rem", textAlign: "left", color: "var(--primary-dark)" }}>Item</th>
                      <th style={{ padding: "1rem", textAlign: "left", color: "var(--primary-dark)" }}>Amount for each course</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                      <td style={{ padding: "1rem", color: "#475569" }}>First time appearing for Remedial</td>
                      <td style={{ padding: "1rem", color: "#475569", fontWeight: 600 }}>200/-</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                      <td style={{ padding: "1rem", color: "#475569" }}>Second time appearing for Remedial</td>
                      <td style={{ padding: "1rem", color: "#475569", fontWeight: 600 }}>500/-</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                      <td style={{ padding: "1rem", color: "#475569" }}>Third time appearing for Remedial</td>
                      <td style={{ padding: "1rem", color: "#475569", fontWeight: 600 }}>750/-</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                      <td style={{ padding: "1rem", color: "#475569" }}>Grade Improvement / Re-Registration</td>
                      <td style={{ padding: "1rem", color: "#475569", fontWeight: 600 }}>750/-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="results-committee" style={{ marginBottom: "3rem" }}>
              <h2 style={{ color: "var(--primary-maroon)", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Results Committee</h2>
              <p style={{ color: "#475569", lineHeight: "1.8", marginBottom: "1rem" }}>The Results Committee should consist of the following members:</p>
              <ul style={{ color: "#475569", lineHeight: "1.8", paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
                <li>Director</li>
                <li>Dean & Associate Dean of Academics</li>
                <li>COE, Associate COE, Exam in-charge</li>
                <li>HODs of all disciplines</li>
                <li>PUC Coordinator</li>
              </ul>
              <p style={{ color: "#475569", lineHeight: "1.8", marginBottom: "1rem" }}>The committee should carefully scrutinize cutoff marks, malpractice issues, grades awarded etc. before the declaration of results. The grades for individual subjects shall examine and compare at the Department level.</p>
              <p style={{ color: "#475569", lineHeight: "1.8", marginBottom: "1rem" }}>The Examination Time Table and Results shall be placed on the website of individual campus from time to time and shall be announced by the authorities in the Institute.</p>
            </section>

            <section id="examination-pattern" style={{ marginBottom: "3rem" }}>
              <h2 style={{ color: "var(--primary-maroon)", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Examination Pattern</h2>
              <p style={{ color: "#475569", lineHeight: "1.8", marginBottom: "1rem" }}>The evaluation procedure for each course consisting of weekly tests/Assignments, Mid tests and End Semester Test (EST).</p>
              <ul style={{ color: "#475569", lineHeight: "1.8", paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
                <li>10% weightage is given for the weekly tests/assignments (Best 5 out of 10) by continuous assessment.</li>
                <li>30% weightage is given for the Mid tests. Three Mid tests shall be conducted and best two will be considered. Each Mid exam shall be conducted with the internal choices.</li>
                <li>60% weightage is given for the end semester examination. The question paper contains two parts in which Part-A consists of 18 objective questions for 18 marks (3 objective questions from each unit) and Part-B contains 12 descriptive questions with internal choice between 2 questions from each unit, and each question carries 7 marks (total 42 marks) Grand total will become 18+42 = 60 marks.</li>
                <li>Laboratory course assessment shall consist of 40 marks for internal assessment which includes continuous assessment or weekly assessment, record books and observation books. 60 marks are given for end semester practical examination which includes viva-voce.</li>
                <li>Summer internship is compulsory for all students, and internal & external guides assess the student for 40 marks as internal assessment for the summer internship. Department HOD has to constitute an evaluation panel for 60 marks. A student has to submit a report and present the project work before the panel.</li>
                <li>If the mini project or project is done in the campus, the project guide assesses the student for 40 marks as internal assessment for mini project or project. Department HOD has to constitute an evaluation panel to evaluate the project for 60 marks. A student has to submit a report and present the project work before the panel.</li>
                <li>If the project is in Industry (long term internship), the internal & external guides assess the student for 40 marks as internal assessment for mini project or project. Department HOD has to constitute evaluation panel to evaluate the project for 60 marks. A student has to submit a report and present the project work before the panel.</li>
              </ul>
            </section>

            <section id="grading-procedure" style={{ marginBottom: "3rem" }}>
              <h2 style={{ color: "var(--primary-maroon)", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Grading Procedure</h2>
              <p style={{ color: "#475569", lineHeight: "1.8", marginBottom: "1rem" }}>The marks secured by students, those who have appeared for the end semester examination, in a course shall be computed in descending order. The expected percentages for each grade are given in below table. All the students, whose grade is below D, are considered to have failed (remedial) in the course.</p>
              
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1.5rem" }}>
                  <thead>
                    <tr style={{ background: "var(--surface-light)", borderBottom: "2px solid #e2e8f0" }}>
                      <th style={{ padding: "1rem", textAlign: "left", color: "var(--primary-dark)" }}>Grade</th>
                      <th style={{ padding: "1rem", textAlign: "left", color: "var(--primary-dark)" }}>Absolute Cut off</th>
                      <th style={{ padding: "1rem", textAlign: "left", color: "var(--primary-dark)" }}>Expected %</th>
                      <th style={{ padding: "1rem", textAlign: "left", color: "var(--primary-dark)" }}>Expected Cumulative %</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                      <td style={{ padding: "1rem", color: "#475569", fontWeight: 600 }}>X</td>
                      <td style={{ padding: "1rem", color: "#475569" }}>90</td>
                      <td style={{ padding: "1rem", color: "#475569" }}>5%</td>
                      <td style={{ padding: "1rem", color: "#475569" }}>5%</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                      <td style={{ padding: "1rem", color: "#475569", fontWeight: 600 }}>A</td>
                      <td style={{ padding: "1rem", color: "#475569" }}>80</td>
                      <td style={{ padding: "1rem", color: "#475569" }}>25%</td>
                      <td style={{ padding: "1rem", color: "#475569" }}>30%</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                      <td style={{ padding: "1rem", color: "#475569", fontWeight: 600 }}>B</td>
                      <td style={{ padding: "1rem", color: "#475569" }}>70</td>
                      <td style={{ padding: "1rem", color: "#475569" }}>30%</td>
                      <td style={{ padding: "1rem", color: "#475569" }}>60%</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                      <td style={{ padding: "1rem", color: "#475569", fontWeight: 600 }}>C</td>
                      <td style={{ padding: "1rem", color: "#475569" }}>60</td>
                      <td style={{ padding: "1rem", color: "#475569" }}>25%</td>
                      <td style={{ padding: "1rem", color: "#475569" }}>85%</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                      <td style={{ padding: "1rem", color: "#475569", fontWeight: 600 }}>D</td>
                      <td style={{ padding: "1rem", color: "#475569" }}>50</td>
                      <td style={{ padding: "1rem", color: "#475569" }}>10%</td>
                      <td style={{ padding: "1rem", color: "#475569" }}>95%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p style={{ color: "#475569", lineHeight: "1.8", marginBottom: "1rem" }}>The cut off mark for each grade will be calculated as per the expected percentages. If the relative cut off marks is more than the absolute value specified for grades, the new threshold cut off marks (should not be lower than absolute value) will be calculated such that the new expected cumulative percentage should not exceed the values given in Table. However in case of C and D, if the relative cut off marks is more than the absolute value specified for grades they are limited to the absolute values.</p>

              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", maxWidth: "400px", borderCollapse: "collapse", marginBottom: "1.5rem" }}>
                  <thead>
                    <tr style={{ background: "var(--surface-light)", borderBottom: "2px solid #e2e8f0" }}>
                      <th style={{ padding: "1rem", textAlign: "left", color: "var(--primary-dark)" }}>Grade</th>
                      <th style={{ padding: "1rem", textAlign: "left", color: "var(--primary-dark)" }}>New Expected Cumulative %</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                      <td style={{ padding: "1rem", color: "#475569", fontWeight: 600 }}>X</td>
                      <td style={{ padding: "1rem", color: "#475569" }}>10%</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                      <td style={{ padding: "1rem", color: "#475569", fontWeight: 600 }}>A</td>
                      <td style={{ padding: "1rem", color: "#475569" }}>50%</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                      <td style={{ padding: "1rem", color: "#475569", fontWeight: 600 }}>B</td>
                      <td style={{ padding: "1rem", color: "#475569" }}>80%</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                      <td style={{ padding: "1rem", color: "#475569", fontWeight: 600 }}>C</td>
                      <td style={{ padding: "1rem", color: "#475569" }}>--</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                      <td style={{ padding: "1rem", color: "#475569", fontWeight: 600 }}>D</td>
                      <td style={{ padding: "1rem", color: "#475569" }}>--</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p style={{ color: "#475569", lineHeight: "1.8", marginBottom: "1rem" }}>All the people who secured a grade less than D shall be considered as that they have not cleared the course and they have to appear for remedial/supplementary examinations.</p>
            </section>

            <section id="sgpa-cgpa" style={{ marginBottom: "3rem" }}>
              <h2 style={{ color: "var(--primary-maroon)", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>SGPA and CGPA calculations</h2>
              
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "2rem 0", fontFamily: "'Times New Roman', Times, serif" }}>
                <span style={{ fontStyle: "italic", fontSize: "1.25rem", marginRight: "0.5rem" }}>SGPA</span>
                <span style={{ fontSize: "1.25rem", marginRight: "0.5rem" }}>=</span>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", borderBottom: "1px solid #000", padding: "0 0.5rem 0.2rem 0.5rem" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: "0.4rem" }}>
                      <span style={{ fontSize: "0.7rem", lineHeight: 1 }}>n</span>
                      <span style={{ fontSize: "1.5rem", lineHeight: 1 }}>&Sigma;</span>
                      <span style={{ fontSize: "0.7rem", lineHeight: 1 }}>i=1</span>
                    </div>
                    <span style={{ fontStyle: "italic", fontSize: "1.2rem" }}>Ci * GPi</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", paddingTop: "0.2rem" }}>
                    <span style={{ fontSize: "1.5rem", lineHeight: 1, marginRight: "0.2rem" }}>&Sigma;</span>
                    <span style={{ fontStyle: "italic", fontSize: "1.2rem" }}>C</span>
                  </div>
                </div>
              </div>

              <p style={{ color: "#475569", lineHeight: "1.8", marginBottom: "1.5rem" }}>Where, C<sub>i</sub> = Credit for the course, GP<sub>i</sub> = the Grade Point obtained for the course and the summation over all the courses taken in that semester and &apos;n&apos; is the number of subjects registered for the semester.</p>
              
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "2rem 0", fontFamily: "'Times New Roman', Times, serif" }}>
                <span style={{ fontSize: "1.25rem", marginRight: "0.5rem" }}>CGPA</span>
                <span style={{ fontSize: "1.25rem", marginRight: "0.5rem" }}>=</span>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", borderBottom: "1px solid #000", padding: "0 0.5rem 0.2rem 0.5rem" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: "0.4rem" }}>
                      <span style={{ fontSize: "0.7rem", lineHeight: 1 }}>m</span>
                      <span style={{ fontSize: "1.5rem", lineHeight: 1 }}>&Sigma;</span>
                      <span style={{ fontSize: "0.7rem", lineHeight: 1 }}>i</span>
                    </div>
                    <span style={{ fontStyle: "italic", fontSize: "1.2rem" }}>Si &times; Ci</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", paddingTop: "0.2rem" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: "0.4rem" }}>
                      <span style={{ fontSize: "0.7rem", lineHeight: 1 }}>m</span>
                      <span style={{ fontSize: "1.5rem", lineHeight: 1 }}>&Sigma;</span>
                      <span style={{ fontSize: "0.7rem", lineHeight: 1 }}>i</span>
                    </div>
                    <span style={{ fontStyle: "italic", fontSize: "1.2rem" }}>Ci</span>
                  </div>
                </div>
              </div>

              <p style={{ color: "#475569", lineHeight: "1.8", marginBottom: "1rem" }}>Where &apos;m&apos; is the total number of semesters under consideration. C<sub>i</sub> the total number of credit registered for during a particular semester and S<sub>i</sub> is the SGPA of that semester. Both SGPA and CGPA shall be rounded off to the second place of decimal and recorded as such.</p>
            </section>

            <section id="ph-students" style={{ marginBottom: "3rem" }}>
              <h2 style={{ color: "var(--primary-maroon)", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Reduction in pass marks for PH students (G.O Ms. No. 183)</h2>
              <p style={{ color: "#475569", lineHeight: "1.8", marginBottom: "1rem" }}>Following prevailing orders from the Government, PH students under the category of Hearing impaired, orthopedically handicapped, visually challenged, Deaf and dumb shall be given a concession of 10% over pass marks.</p>
            </section>

            <section id="recounting" style={{ marginBottom: "3rem" }}>
              <h2 style={{ color: "var(--primary-maroon)", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Recounting process</h2>
              <ul style={{ color: "#475569", lineHeight: "1.8", paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
                <li>Students must submit their application to the academic section in the institute indicating clearly the subject in which recounting is to be made.</li>
                <li>Application must be accompanied by a demand draft for the prescribed fee per course drawn in favor of the Director towards the subject(s) opted for recounting process.</li>
                <li>Results after the recounting process shall be declared following the academic regulations in force then.</li>
                <li>In case of any changes in marks after recounting is done, the higher of the original and recounted marks shall be taken as the final marks.</li>
              </ul>
            </section>

            <section id="malpractice-rules" style={{ marginBottom: "2rem" }}>
              <h2 style={{ color: "var(--primary-maroon)", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Examination Malpractice Rules</h2>
              <p style={{ color: "#475569", lineHeight: "1.8", marginBottom: "1rem" }}>Students are expected to be in the exam hall in time. No student shall be allowed to enter the examination hall 15 minutes after the commencement of the examination.</p>
              <p style={{ color: "#475569", lineHeight: "1.8", marginBottom: "1.5rem" }}>Students are expected to strictly comply with the instructions given while in the examinations hall. Non-compliance shall amount to malpractice and suitable action shall be initiated. Disciplinary actions for malpractices and improper conduct in the examinations are listed in the below Table.</p>

              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1.5rem" }}>
                  <thead>
                    <tr style={{ background: "var(--surface-light)", borderBottom: "2px solid #e2e8f0" }}>
                      <th style={{ padding: "1rem", textAlign: "left", color: "var(--primary-dark)", width: "5%" }}>S.No</th>
                      <th style={{ padding: "1rem", textAlign: "left", color: "var(--primary-dark)", width: "55%" }}>Malpractice/Improper conduct</th>
                      <th style={{ padding: "1rem", textAlign: "left", color: "var(--primary-dark)", width: "40%" }}>Disciplinary action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                      <td style={{ padding: "1rem", color: "#475569", verticalAlign: "top" }}>1</td>
                      <td style={{ padding: "1rem", color: "#475569", verticalAlign: "top" }}>
                        In the examination hall, if the candidate possesses or keeps accessible such as any paper, note book, programmable calculators, Cell phones, pager, palm computers, pen drives, memory cards or any other form of material concerned with or related to the subject of the examination (theory or practical) in which he is appearing but has not made use of (material shall include any marks on the body of the candidate which can be an aid in the subject of the examination).<br/><br/>
                        <span style={{ fontStyle: "italic", fontSize: "0.9rem" }}>Note: The Controller of Examination shall update the list of objectionable material from time to time according to the advancing methods in the malpractice.</span>
                      </td>
                      <td style={{ padding: "1rem", color: "#475569", verticalAlign: "top" }}>Expulsion from the examination hall and cancellation of the performance in that subject only.</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                      <td style={{ padding: "1rem", color: "#475569", verticalAlign: "top" }}>2</td>
                      <td style={{ padding: "1rem", color: "#475569", verticalAlign: "top" }}>
                        Gives assistance or guidance to any other candidate<br/>or<br/>Receives information from any other candidate (orally, body language methods, cell phones or any such media) in or outside the exam hall.
                      </td>
                      <td style={{ padding: "1rem", color: "#475569", verticalAlign: "top" }}>
                        Expulsion from the examination hall and cancellation of the performance in that subject only of all the candidates involved.<br/><br/>
                        In case of an outsider:<br/>
                        (1) Refer Clause 10 in the Table.<br/>
                        (2) If the outsider is also the candidate of that particular exam, the same mentioned in the clause (10) is applicable.
                      </td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                      <td style={{ padding: "1rem", color: "#475569", verticalAlign: "top" }}>3</td>
                      <td style={{ padding: "1rem", color: "#475569", verticalAlign: "top" }}>Has copied in the examination hall from any paper, book, programmable calculators, palm computers or any other form of material relevant to the subject of the examination (theory or practical) in which the candidate is appearing.</td>
                      <td style={{ padding: "1rem", color: "#475569", verticalAlign: "top" }}>Expulsion from the examination hall and cancellation of the performance in that subject. Student will not be permitted to appear for the remaining examinations of the subjects of that semester.</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                      <td style={{ padding: "1rem", color: "#475569", verticalAlign: "top" }}>4</td>
                      <td style={{ padding: "1rem", color: "#475569", verticalAlign: "top" }}>Impersonates any other candidate in connection with the examination.</td>
                      <td style={{ padding: "1rem", color: "#475569", verticalAlign: "top" }}>
                        The candidate who has impersonated shall be expelled from examination hall. He would be debarred and his seat gets forfeited.<br/><br/>
                        The performance of the original candidate who has been impersonated shall be cancelled in all the subjects of the examination (including practicals and project work) already appeared and shall not be allowed to appear for examinations of the remaining subjects of that semester. The candidate is also debarred for ONE semester from class work and all University examinations. The continuation of the course by the candidate is subject to the academic regulations in connection with forfeit of seat.<br/><br/>
                        If the imposter is an outsider, he will be handed over to the police and a police case will be registered.
                      </td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                      <td style={{ padding: "1rem", color: "#475569", verticalAlign: "top" }}>5</td>
                      <td style={{ padding: "1rem", color: "#475569", verticalAlign: "top" }}>Smuggling of answer scripts during or after the examination.<br/>or<br/>Takes out or arranges to send out the question paper during the examination.</td>
                      <td style={{ padding: "1rem", color: "#475569", verticalAlign: "top" }}>
                        Expulsion from the examination hall.<br/><br/>
                        Cancellation of performance in that subject and all the other subjects the candidate has already appeared including practical examinations and project work.<br/><br/>
                        He shall not be permitted for the remaining examinations of the subjects of that semester.
                      </td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                      <td style={{ padding: "1rem", color: "#475569", verticalAlign: "top" }}>6</td>
                      <td style={{ padding: "1rem", color: "#475569", verticalAlign: "top" }}>Uses objectionable, abusive or offensive language in the answer paper or in letters to the examiners or writes to the examiner requesting him to award pass marks.</td>
                      <td style={{ padding: "1rem", color: "#475569", verticalAlign: "top" }}>Cancellation of the performance in that subject.</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                      <td style={{ padding: "1rem", color: "#475569", verticalAlign: "top" }}>7</td>
                      <td style={{ padding: "1rem", color: "#475569", verticalAlign: "top" }}>
                        Refuses to obey the orders of the Invigilators/Squad Team/Controller of Examination/any officer on duty<br/>or<br/>Misbehaves or creates disturbance of any kind in and around the examination hall or organizes a walk out or instigates others to walk out<br/>or<br/>Threatens the officer-in charge or any person on duty in or outside the examination hall of any injury to his person or to any of his relations whether by words, either spoken or written or by signs or by visible representation<br/>or<br/>Assaults the officer-in charge, or any person on duty in or outside the examination hall or any of his relations<br/>or<br/>Indulges in any other act of misconduct or mischief which result in damage to or destruction of property in the examination hall or any part of the Institute campus<br/>or<br/>Engages in any other act which in the opinion of the officer on duty amounts to use of unfair means or misconduct or has the tendency to disrupt the orderly conduct of the examination.
                      </td>
                      <td style={{ padding: "1rem", color: "#475569", verticalAlign: "top" }}>The student(s) of the institute shall be expelled from examination hall and shall not be permitted to appear for the remaining examinations of the subjects of that semester.</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                      <td style={{ padding: "1rem", color: "#475569", verticalAlign: "top" }}>8</td>
                      <td style={{ padding: "1rem", color: "#475569", verticalAlign: "top" }}>Leaves the exam hall taking away answer script or intentionally tears of the script or any part thereof inside or outside the examination hall.</td>
                      <td style={{ padding: "1rem", color: "#475569", verticalAlign: "top" }}>Expulsion from the examination hall and cancellation of performance in that subject and all the other subjects the candidate has already appeared including practical examinations and project work.<br/><br/>The candidate shall not be permitted for the remaining examinations of the subjects of that semester.</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                      <td style={{ padding: "1rem", color: "#475569", verticalAlign: "top" }}>9</td>
                      <td style={{ padding: "1rem", color: "#475569", verticalAlign: "top" }}>Possess any lethal weapon or firearm in the examination hall.</td>
                      <td style={{ padding: "1rem", color: "#475569", verticalAlign: "top" }}>
                        Expulsion from the examination hall and cancellation of the performance in that subject and all other subjects the candidate has already appeared including practicals and project work.<br/><br/>
                        The candidate shall not be permitted for the remaining examinations of the subjects of that semester.<br/><br/>
                        The candidate is also debarred for two consecutive semesters.<br/><br/>
                        The continuation of course by the candidate is subject to the academic regulations in connection with forfeiture of seat.
                      </td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                      <td style={{ padding: "1rem", color: "#475569", verticalAlign: "top" }}>10</td>
                      <td style={{ padding: "1rem", color: "#475569", verticalAlign: "top" }}>If student of the institute, who is not a candidate for the particular examination<br/>or<br/>Any person not connected with the institute indulges in any malpractice or improper conduct mentioned in clause 6 to 8.</td>
                      <td style={{ padding: "1rem", color: "#475569", verticalAlign: "top" }}>
                        Student of the institute will be expelled from the examination hall along with cancellation of the performance in that subject and all other subjects the candidate has already appeared including practical examinations and project work.<br/><br/>
                        The candidate shall not be permitted for the remaining examinations of the subjects of that semester.<br/><br/>
                        Maximum punishment: Based on the severity of the case, the candidate&apos;s seat shall be forfeited. Person(s) who do not belong to the Institute will be handed over to police and a police case will be registered against them.
                      </td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                      <td style={{ padding: "1rem", color: "#475569", verticalAlign: "top" }}>11</td>
                      <td style={{ padding: "1rem", color: "#475569", verticalAlign: "top" }}>Comes in a drunken condition to the examination hall.</td>
                      <td style={{ padding: "1rem", color: "#475569", verticalAlign: "top" }}>
                        Expulsion from the examination hall and cancellation of the performance in that subject and all other subjects the candidate has already appeared including practical examinations and project work.<br/><br/>
                        The student shall not be permitted for the remaining examinations of the subjects of that semester.
                      </td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                      <td style={{ padding: "1rem", color: "#475569", verticalAlign: "top" }}>12</td>
                      <td style={{ padding: "1rem", color: "#475569", verticalAlign: "top" }}>Copying detected on the basis of internal evidence, such as, during valuation or during special scrutiny.<br/><br/><span style={{ fontStyle: "italic", fontSize: "0.9rem" }}>Note: The Director is authorized to form a suitable committee and apply the above said rule.</span></td>
                      <td style={{ padding: "1rem", color: "#475569", verticalAlign: "top" }}>Cancellation of the performance in that subject only.</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                      <td style={{ padding: "1rem", color: "#475569", verticalAlign: "top" }}>13</td>
                      <td style={{ padding: "1rem", color: "#475569", verticalAlign: "top" }}>Unauthorized uploading of jar file in online examination, unauthorized usage of the local servers (renaming the script file, uploading script file from the location other than the exam hall allocated to student, etc.)</td>
                      <td style={{ padding: "1rem", color: "#475569", verticalAlign: "top" }}>
                        Expulsion from the examination hall and cancellation of the performance in that subject and all other subjects the candidate has already appeared including practical examinations and project work.<br/><br/>
                        The student shall not be permitted to appear for the examinations in the remaining subjects in that semester.<br/><br/>
                        The candidate shall be handed over to the police and case will be filed against them.
                      </td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                      <td style={{ padding: "1rem", color: "#475569", verticalAlign: "top" }}>14</td>
                      <td style={{ padding: "1rem", color: "#475569", verticalAlign: "top" }}>Unauthorized access to any of the examination archives, examination server and database, rooms, files etc.<br/><br/>Illegal manipulation of examination data through hacking etc.</td>
                      <td style={{ padding: "1rem", color: "#475569", verticalAlign: "top" }}>
                        The candidate shall be debarred for two years.<br/><br/>
                        The continuation of the course by the candidate is subject to the academic regulations in connection with forfeiture of seat.<br/><br/>
                        If the candidate is an outsider, he will be handed over to the police and case will be registered.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div style={{ background: "#fff5f5", borderLeft: "4px solid #ef4444", padding: "1rem 1.5rem", borderRadius: "4px" }}>
                <p style={{ color: "#b91c1c", fontSize: "0.95rem", lineHeight: "1.6", margin: 0 }}>
                  <strong>Note:</strong> The authority (invigilator/Squad team/Controller of Examinations/Special invigilator) whoever is implementing the above disciplinary action must hold all the suitable evidences. Any malpractice not covered in the above clause shall be reported to the Disciplinary committee for necessary action.
                </p>
              </div>

              <div style={{ marginTop: "2rem" }}>
                <h3 style={{ color: "var(--primary-dark)", fontSize: "1.2rem", fontWeight: 600, marginBottom: "1rem" }}>Disciplinary Committee on Prevention of Examination Malpractices</h3>
                <ul style={{ color: "#475569", lineHeight: "1.8", paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
                  <li>Dean of Academics - Chairman</li>
                  <li>Controller of Examinations / Faculty In-charge (Exam) - Convener</li>
                  <li>Head / Faculty-in-charge / PUC coordinator of the Department to which the reported student belongs - Member</li>
                  <li>The Invigilator reporting the case (optional) - Member</li>
                  <li>Two faculty members (Director nominees) - Members</li>
                </ul>
                <p style={{ color: "#475569", lineHeight: "1.8", marginBottom: "1rem" }}>The Committee shall recommend appropriate measures in each case to the Director of the institute for necessary action.</p>
              </div>
            </section>
          </div>

        </div>
      </div>
    </main>
  );
}
