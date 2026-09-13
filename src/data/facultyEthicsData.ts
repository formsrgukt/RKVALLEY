export interface EthicsSectionItem {
  id: string;
  romanNumeral: string;
  title: string;
  preamble?: string;
  prompt: string;
  clauses: string[];
}

export interface FacultyEthicsData {
  university: string;
  state: string;
  title: string;
  governingCouncilApproval: string;
  meetingNumber: string;
  meetingDate: string;
  pdfUrl: string;
  pdfFileName: string;
  pdfSize: string;
  sections: EthicsSectionItem[];
}

export const FACULTY_ETHICS_DATA: FacultyEthicsData = {
  university: "Rajiv Gandhi University of Knowledge Technologies",
  state: "Andhra Pradesh",
  title: "Code of Professional Ethics for Faculty",
  governingCouncilApproval: "Code of Professional Ethics for faculty as approved by the Governing Council of RGUKT at its 43rd meeting held on 29-11-2019",
  meetingNumber: "43rd Governing Council Meeting",
  meetingDate: "29-11-2019",
  pdfUrl: "/pdfdoc/FacultyProfessionalEthics.pdf",
  pdfFileName: "FacultyProfessionalEthics.pdf",
  pdfSize: "73 KB",
  sections: [
    {
      id: "responsibilities",
      romanNumeral: "I",
      title: "Teachers and their Responsibilities",
      preamble: "Whoever adopts teaching as a profession assumes the obligation to conduct himself / herself in accordance with the ideal of the profession. A teacher is constantly under the scrutiny of his students and the society at large. Therefore, every teacher should see that there is no incompatibility between his precepts and practice. The national ideals of education which have already been set forth and which he/she should seek to inculcate among students must be his/her own ideals. The profession further requires that the teacher should be calm, patient and communicative by temperament and amiable in disposition.",
      prompt: "Teacher should:",
      clauses: [
        "Adhere to a responsible pattern of conduct and demeanor expected of them by the community;",
        "Manage their private affairs in a manner consistent with the dignity of the profession;",
        "Seek to make professional growth continuous through study and research;",
        "Express free and frank opinion by participation at professional meetings, seminars, conferences etc., towards the contribution of knowledge;",
        "Maintain active membership of professional organisations and strive to improve education and profession through them;",
        "Perform their duties in the form of teaching, tutorials, practicals, seminars and research work, conscientiously and with dedication;",
        "Discourage and not indulge in plagiarism and other non ethical behaviour in teaching and research;",
        "Abide by the Act, Statute and Ordinance of the University and to respect its ideals, vision, mission, cultural practices and tradition;",
        "Co-operate and assist in carrying out the functions relating to the educational responsibilities of the college and the university, such as: assisting in appraising applications for admission, advising and counselling students as well as assisting the conduct of university and college examinations, including supervision, invigilation and evaluation; and",
        "Participate in extension, co-curricular and extra-curricular activities, including the community service."
      ]
    },
    {
      id: "students",
      romanNumeral: "II",
      title: "Teachers and Students",
      prompt: "Teachers should:",
      clauses: [
        "Respect the rights and dignity of the student in expressing his/her opinion;",
        "Deal justly and impartially with students regardless of their religion, caste, gender, political, economic, social and physical characteristics;",
        "Recognise the difference in aptitude and capabilities among students and strive to meet their individual needs;",
        "Encourage students to improve their attainments, develop their personalities and at the same time contribute to community welfare;",
        "Inculcate among students scientific temper, spirit of inquiry and ideals of democracy, patriotism, social justice, environmental protection and peace;",
        "Treat the students with dignity and not behave in a vindictive manner towards any of them for any reason;",
        "Pay attention to only the attainment of the student in the assessment of merit;",
        "Make themselves available to the students even beyond their class hours and help and guide students without any remuneration or reward;",
        "Aid students to develop an understanding of our national heritage and national goals; and",
        "Refrain from inciting students against other students, colleagues or administration."
      ]
    },
    {
      id: "colleagues",
      romanNumeral: "III",
      title: "Teachers and Colleagues",
      prompt: "Teachers should:",
      clauses: [
        "Treat other members of the profession in the same manner as they themselves wish to be treated;",
        "Speak respectfully of other teachers and render assistance for professional betterment;",
        "Refrain from making unsubstantiated allegations against colleagues to higher authorities; and",
        "Refrain from allowing considerations of caste, creed, religion, race or sex in their professional endeavour."
      ]
    },
    {
      id: "authorities",
      romanNumeral: "IV",
      title: "Teachers and Authorities",
      prompt: "Teachers should:",
      clauses: [
        "Discharge their professional responsibilities according to the existing rules and adhere to procedures and methods consistent with their profession in initiating steps through their own institutional bodies and / or professional organisations for change of any such rule detrimental to the professional interest;",
        "Refrain from undertaking any other employment and commitment, including private tuitions and coaching classes which are likely to interfere with their professional responsibilities;",
        "Co-operate in the formulation of policies of the institution by accepting various offices and discharge responsibilities which such offices may demand;",
        "Co-operate through their organisations in the formulation of policies of the other institutions and accept offices;",
        "Co-operate with the authorities for the betterment of the institutions keeping in view the interest and in conformity with the dignity of the profession;",
        "Adhere to the terms of contract;",
        "Give and expect due notice before a change of position takes place; and",
        "Refrain from availing themselves of leave except on unavoidable grounds and as far as practicable with prior intimation, keeping in view their particular responsibility for completion of academic schedule."
      ]
    },
    {
      id: "non-teaching",
      romanNumeral: "V",
      title: "Teachers and Non-Teaching Staff",
      prompt: "Teachers should :",
      clauses: [
        "Treat the non-teaching staff as colleagues and equal partners in a cooperative undertaking, within every educational institution;",
        "Help in the functioning of joint-staff councils covering both the teachers and the non-teaching staff."
      ]
    },
    {
      id: "guardians",
      romanNumeral: "VI",
      title: "Teachers and Guardians",
      prompt: "Teachers should:",
      clauses: [
        "Try to see through teachers' bodies and organisations, that institutions maintain contact with the guardians, their students, send reports of their performance to the guardians whenever necessary and meet the guardians in meetings convened for the purpose for mutual exchange of ideas and for the benefit of the institution."
      ]
    },
    {
      id: "society",
      romanNumeral: "VII",
      title: "Teachers and Society",
      prompt: "Teachers should:",
      clauses: [
        "Recognise that education is a public service and strive to keep the public informed of the educational programmes which are being provided;",
        "Work to improve education in the community and strengthen the community's moral and intellectual life ;",
        "Be aware of social problems and take part in such activities as would be conducive to the progress of society and hence the country as a whole;",
        "Perform the duties of citizenship, participate in community activities and shoulder responsibilities of public offices;",
        "Refrain from taking part in or subscribing to or assisting in any way activities, which tend to promote feeling of hatred or enmity among different communities, religions or linguistic groups but actively work for national integration."
      ]
    }
  ]
};
