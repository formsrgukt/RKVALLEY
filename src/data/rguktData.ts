/**
 * RGUKT RK Valley Official Portal - Structured Data Models & Datasets
 * Rajiv Gandhi University of Knowledge Technologies - RK Valley (Idupulapaya)
 */

export interface LeadershipMember {
  id: string;
  title: string;
  name: string;
  qualifications: string;
  designation: string;
  image: string;
  message: string;
  profile: string;
  extendedProfile?: {
    link?: string;
    contact?: {
      phone?: string;
      fax?: string;
      email?: string;
    };
    peshi?: Array<{
      name: string;
      role: string;
      email: string;
      image?: string;
      profileLink?: string;
    }>;
    address?: string;
  };
}

export interface AdministrativeOfficer {
  role: string;
  name: string;
  email: string;
  phone: string;
}

export interface Department {
  id: string;
  code: string;
  name: string;
  category: "Engineering" | "Sciences" | "Humanities";
  icon: string;
  hod: string;
  hodEmail: string;
  facultyCount: number;
  studentCount: number;
  labsCount: number;
  overview: string;
  labs: string[];
  highlights: string[];
}

export interface Notice {
  id: string;
  title: string;
  category: "Admissions" | "Academic" | "Examinations" | "Recruitment" | "Tenders" | "Events" | "News";
  date: string;
  urgent: boolean;
  tag: string;
  summary: string;
  pdfName: string;
  size: string;
}

export interface Tender {
  id: string;
  refNo: string;
  title: string;
  category: string;
  publishDate: string;
  closingDate: string;
  emd: string;
  status: "Active" | "Under Evaluation" | "Awarded";
  docUrl: string;
}

export interface Career {
  id: string;
  advtNo: string;
  post: string;
  department: string;
  qualification: string;
  lastDate: string;
  status: "Open" | "Closed";
  type: string;
  formUrl: string;
}

export interface Facility {
  id: string;
  title: string;
  category: "Campus" | "Academic" | "Labs" | "Sports";
  image: string;
  description: string;
}

export interface GradeItem {
  grade: string;
  description: string;
  points: number;
  marksRange: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export const RGUKT_DATA = {
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
      departments: "13",
      campusAcres: "330+",
      placementRate: "87.4%",
      highestPackage: "₹28.5 LPA",
      avgPackage: "₹6.8 LPA",
      alumniGlobal: "18,000+"
    }
  },

  leadership: [
    {
      id: "director",
      title: "Director",
      name: "Prof. G. Vijaya Prakash",
      qualifications: "FNASc, FRSC (UK), FInstP (UK)",
      designation: "Director, RGUKT RK Valley Campus",
      image: "/images/campus_director_image.png",
      message: "On lien: Institute Chair Professor and HAG Professor of Physics, IIT Delhi. A pioneer in Nanophotonics with over two decades of contributions in next-generation solar cells, LEDs, and optoelectronic devices.",
      profile: "After joining IIT Delhi in 2005, Prof. G. Vijaya Prakash initiated the new research field, “Nanophotonics”: the study of nanostructures in photonic environment. His research interests span quantum functional materials, nonlinear optics and glass photonics. His extensive and more than two decades long contributions is in the field of Inorganic-Organic hybrid perovskites, witnessed the commercial realization of next-generation solar cells and LEDs. He is one of the few initiators of research on photonic crystals in India, specifically focusing on experimental realization of electron-photon strong coupling and nonlinear device methodologies. He is widely known for nonlinear rare-earth spectroscopy/imaging of specialty glasses and phosphors for optoelectronic devices. Some of his notable research works are in demonstrating optical gain from silicon nanocrystals, shortest confocal laser cavity for atom manipulation and strong coupling, low-cost SERS substrate commercialization. He was instrumental in establishing DST-FIST Ultrafast Optics Lab at IITD. So far, he has guided/guiding more than 25 Ph.Ds and guided more than 40 post graduate students. He was keynote speaker, invited speaker, session chair for many notable international conferences. He holds research grants of more than Rs.65 Cr as PI/Co-PI from different funding agencies, since 2005. His scholarly work is evidenced by more than 240+ scientific journal publications with more than 6825 citations, h-index of 49 and i10-index of 141. His research has been recognized internationally as top 2% world scientists and top 10000 Asia scientists, since 2016. He has been a recipient of several research awards from UKIERI (UK), Royal Society (UK), INFM (Italy) and IIT Delhi (‘High Impact Research Award’), Best Teacher award and KL Chopra Faculty Basic Research Award. He also held several administrative responsibilities such as Professor in-charge of academic facilities, and All- India Organising Chairperson for JAM-2025, GATE -2025 Chairperson and GATE-JAM Vice- Chairperson (2022-23, 2023-24) and professor-in-charge for Institute Timetable for more than 06 years. Currently he is Fellow of National Academy of Sciences (FNASc) India, Fellow of Royal Society of Chemistry (FRSC) UK, Fellow of Institute of Physics (FInstP) UK and Highest Academic Grade (HAG) and Institute Chair Professor, group leader of Nanophotonics research lab. He is the recipient of Basic Research Award ( Prof. KL Chopra Faculty research Award)( 2024-25) and Teaching Excellence Award (2020-21). He has been a long-term visiting faculty, since 2007, at University Southampton and University of Cambridge, UK.",
      extendedProfile: {
        link: "https://nanophotonics.iitd.ac.in/",
        contact: {
          phone: "08588-283603",
          fax: "08588-283602",
          email: "director@rguktrkv.ac.in"
        },
        peshi: [
          {
            name: "Mr. Sake Ramakrishna",
            role: "Personal Assistant (PA) to the Director, Mentor, Department of Information Technology",
            email: "patodirector@rguktrkv.ac.in"
          },
          {
            name: "Mr. SM Basha",
            role: "Public Relational Officer",
            email: "pro@rguktrkv.ac.in"
          }
        ],
        address: "The Director,\nRGUKT-RK Valley, RGUKT-AP,\nAdministrative Block (Oppsite to Dept. of MME),\nIdupulapaya (Vill), Vempally (Mdl),\nYSR Kadapa District,\nAndhra Pradesh - 516 330."
      }
    },
    {
      id: "ao",
      title: "Administrative Officer",
      name: "Dr. Penugonda Ravi Kumar",
      qualifications: "Administrative Officer(I/c), Assistant Professor in Department of CSE Engg",
      designation: "Administrative Officer(I/c)",
      image: "/images/governing-council/Dr_Penugonda_Ravi_Kumar.jpg",
      message: "Dr. Penugonda Ravi Kumar brings a strong blend of academic excellence in CSE and robust administrative capability to the institution.",
      profile: `<p>I currently hold the position of Assistant Professor in the Computer Science and Engineering department at Rajiv Gandhi University of Knowledge Technologies (also known as IIIT – RK Valley), in Andhra Pradesh, India, on a regular basis. My academic journey has been diverse and enriching. I earned my Ph.D. in Computer Science and Engineering from The University of AIZU, situated in Aizu-Wakamatsu, Fukushima, Japan. Prior to that, I achieved my Master of Engineering degree in Computer Science from the prestigious Indian Institute of Science in Bangalore, Karnataka, India. My foundational education in Computer Science and Engineering took place at Sri Venkateswara University College of Engineering, where I earned my bachelor's degree.</p>
<p style="margin-top: 1rem;">My research interests span various domains within computer science, with a focus on cutting-edge areas such as data mining, air pollution data analytics, traffic congestion data analytics, recommender systems, and time series classification. I am dedicated to exploring innovative solutions to real-world problems through my research endeavors.</p>
<p style="margin-top: 1rem;">Over the course of my academic career, I have contributed significantly to the scholarly community. My research findings have been disseminated through publications in esteemed journals like IEEE Access, Applied Intelligence, and Electronics. Additionally, I have presented my work at prominent international conferences, including IEEE International Conference on Fuzzy Systems (FUZZ-IEEE), IEEE International Conference on Big Data (IEEE BigData), IEEE International Conference on Data Science and Advanced Analytics (DSAA), Asian Conference on Intelligent Information and Database Systems (ACIIDS), IEEE Symposium on Computational Intelligence and Data Mining (CIDM), International Conference on Industrial, Engineering and Other Applications of Applied Intelligent Systems (IEA/AIE), International Conference on Database and Expert Systems Applications (DEXA), International Conference on Soft Computing and Machine Intelligence (ISCMI), and Big Data Analytics (BDA).</p>
<p style="margin-top: 1rem;">My commitment to advancing knowledge and contributing to the academic community remains steadfast, and I look forward to furthering my research and educational endeavors.</p>

<h4 style="color: var(--primary-dark); margin-top: 2rem; margin-bottom: 0.75rem; font-size: 1.15rem; font-weight: 700;">Education</h4>
<table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 0.8rem;">
  <thead style="background: #f8fafc; text-align: left;">
    <tr>
      <th style="width: 30%; padding: 0.5rem 0.75rem; border-bottom: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0;">Course</th>
      <th style="width: 55%; padding: 0.5rem 0.75rem; border-bottom: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0;">College/University</th>
      <th style="width: 15%; padding: 0.5rem 0.75rem; border-bottom: 1px solid #e2e8f0;">Year of Passing</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 0.5rem 0.75rem; border-bottom: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0; vertical-align: top;">PhD (Computer Science and Engineering)</td>
      <td style="padding: 0.5rem 0.75rem; border-bottom: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0; vertical-align: top;">The University of AIZU, Aizu-wakamatsu, Japan.</td>
      <td style="padding: 0.5rem 0.75rem; border-bottom: 1px solid #e2e8f0; vertical-align: top;">2020-2023</td>
    </tr>
    <tr>
      <td style="padding: 0.5rem 0.75rem; border-bottom: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0; vertical-align: top;">M.E (Computer Science and Automation)</td>
      <td style="padding: 0.5rem 0.75rem; border-bottom: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0; vertical-align: top;">Indian Institute of Science, Bangalore. (Top most university in India. QS World Ranking # 184)</td>
      <td style="padding: 0.5rem 0.75rem; border-bottom: 1px solid #e2e8f0; vertical-align: top;">2011-2013</td>
    </tr>
    <tr>
      <td style="padding: 0.5rem 0.75rem; border-bottom: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0; vertical-align: top;">B. Tech (Computer Science and Engineering)</td>
      <td style="padding: 0.5rem 0.75rem; border-bottom: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0; vertical-align: top;">S.V. University College of Engineering, Tirupati.</td>
      <td style="padding: 0.5rem 0.75rem; border-bottom: 1px solid #e2e8f0; vertical-align: top;">2006-2010</td>
    </tr>
  </tbody>
</table>

<h4 style="color: var(--primary-dark); margin-top: 2rem; margin-bottom: 0.75rem; font-size: 1.15rem; font-weight: 700;">Research Interest</h4>
<ul style="list-style-type: disc; margin-left: 1.5rem; margin-bottom: 1.5rem;">
  <li>Big Data Analysis</li>
  <li>Data Mining</li>
  <li>Machine Learning</li>
  <li>Classification of Time Series Data</li>
  <li>Association Rule Mining</li>
</ul>

<h4 style="color: var(--primary-dark); margin-top: 2rem; margin-bottom: 0.75rem; font-size: 1.15rem; font-weight: 700;">Journal Publications</h4>
<ul style="list-style-type: disc; margin-left: 1.5rem; margin-bottom: 1.5rem;">
  <li style="margin-bottom: 0.5rem;">P. Likhitha, P. Ravikumar, D. Saxena, R. U. Kiran and Y. Watanobe, "k-PFPMiner: Top-k Periodic Frequent Patterns in Big Temporal Databases," in IEEE Access, vol. 11, pp. 119033-119044, 2023, doi: 10.1109/ACCESS.2023.3325839.</li>
  <li style="margin-bottom: 0.5rem;">Pamalla, V., Rage, U.K., Penugonda, R. et al. A fundamental approach to discover closed periodic-frequent patterns in very large temporal databases. Appl Intell 53, 27344–27373 (2023).</li>
  <li style="margin-bottom: 0.5rem;">Uday Kiran, R., Veena, P., Ravikumar, P. et al. HDSHUI-miner: a novel algorithm for discovering spatial high-utility itemsets in high-dimensional spatiotemporal databases. Appl Intell 53, 8536–8561 (2023).</li>
  <li style="margin-bottom: 0.5rem;">H. N. Dao, P. Ravikumar, P. Likhitha, U. K. Rage, Y. Watanobe and I. Paik, "Finding Stable Periodic-Frequent Itemsets in Big Columnar Databases," in IEEE Access, vol. 11, pp. 12504-12524, 2023, doi: 10.1109/ACCESS.2023.3241313.</li>
  <li style="margin-bottom: 0.5rem;">Kiran RU, Veena P, Ravikumar P, Saideep C, Zettsu K, Shang H, Toyoda M, Kitsuregawa M, Reddy PK. Efficient Discovery of Partial Periodic Patterns in Large Temporal Databases. Electronics. 2022; 11(10):1523.</li>
  <li style="margin-bottom: 0.5rem;">Watanobe, Y., Rahman, M.M., Matsumoto, T., Rage, U.K., Ravikumar, P.: Online judge system: Requirements, architecture, and experiences. International Journal of Software Engineering and Knowledge Engineering 32(06), 917–946 (2022)</li>
  <li style="margin-bottom: 0.5rem;">Ravikumar P, Likhitha P, Venus Vikranth Raj B, Uday Kiran R, Watanobe Y, Zettsu K. Efficient Discovery of Periodic-Frequent Patterns in Columnar Temporal Databases. Electronics. 2021; 10(12):1478.</li>
  <li style="margin-bottom: 0.5rem;">Veena Pamalla, Uday Kiran Rage, Ravikumar Penugonda, Likhitha Palla, Yutaka Watanobe, Sadanori Ito, Koji Zettsu, Masashi Toyoda, and Venus vikranth raj Bathala. "3P-ECLAT: Mining partial periodic patterns in columnar temporal databases." Appllied Intelligence (Accepted and waiting for publishing)</li>
</ul>

<h4 style="color: var(--primary-dark); margin-top: 2rem; margin-bottom: 0.75rem; font-size: 1.15rem; font-weight: 700;">Conference Publications</h4>
<ul style="list-style-type: disc; margin-left: 1.5rem; margin-bottom: 1.5rem;">
  <li style="margin-bottom: 0.5rem;">Palla Likhitha, Penugonda Ravikumar, Rage Uday Kiran, and Yutaka Watanobe. 2023. Discovering Top-k Periodic-Frequent Patterns in Very Large Temporal Databases. In Big Data Analytics: 10th International Conference, BDA 2022.</li>
  <li style="margin-bottom: 0.5rem;">Ravikumar, P. et al. (2022). Towards Efficient Discovery of Partial Periodic Patterns in Columnar Temporal Databases. In: Intelligent Information and Database Systems. ACIIDS 2022.</li>
  <li style="margin-bottom: 0.5rem;">P. Ravikumar, R. U. Kiran, P. Likhitha, T. Chandrasekhar, Y. Watanobe and K. Zettsu, "Discovering Geo-referenced Periodic-Frequent Patterns in Geo-referenced Time Series Databases," 2022 IEEE 9th International Conference on Data Science and Advanced Analytics (DSAA), Shenzhen, China, 2022, pp. 1-10.</li>
  <li style="margin-bottom: 0.5rem;">Hong N. Dao, Penugonda Ravikumar, P. Likitha, Bathala Venus Vikranth Raj, R. Uday Kiran, Yutaka Watanobe & Incheon Paik, Towards Efficient Discovery of Stable Periodic Patterns in Big Columnar Temporal Databases. IEA/AIE 2022.</li>
  <li style="margin-bottom: 0.5rem;">Veena, Pamalla and Ravikumar, Penugonda and Kwangwari, Kundai and Kiran, R. Uday and Goda, Kazuo and Watanobe, Yutaka and Zettsu, Koji, "Discovering Fuzzy Geo-referenced Periodic-Frequent Patterns in Geo-referenced Time Series Databases," 2022 IEEE International Conference on Fuzzy Systems (FUZZ-IEEE), Padua, Italy, 2022, pp. 1-8.</li>
  <li style="margin-bottom: 0.5rem;">P. Ravikumar et al., "A Novel Parameter-Free Energy Efficient Fuzzy Nearest Neighbor Classifier for Time Series Data," 2021 IEEE International Conference on Fuzzy Systems (FUZZ-IEEE), Luxembourg, Luxembourg, 2021, pp. 1-6.</li>
  <li style="margin-bottom: 0.5rem;">Penugonda Ravikumar, Palla, L., Rage, U.K., Watanobe, Y., Zettsu, K. (2021). Towards Efficient Discovery of Periodic-Frequent Patterns in Columnar Temporal Databases. IEA/AIE 2021.</li>
  <li style="margin-bottom: 0.5rem;">Bommisetty, S.C., Penugonda, R., Rage, U.K., Dao, M.S., Zettsu, K. (2021). Discovering Spatial High Utility Itemsets in High-Dimensional Spatiotemporal Databases. IEA/AIE 2021.</li>
  <li style="margin-bottom: 0.5rem;">Watanobe, Y., Rahman, M.M., Rage, U.K., Penugonda, R. (2021). Online Automatic Assessment System for Program Code: Architecture and Experiences. IEA/AIE 2021.</li>
  <li style="margin-bottom: 0.5rem;">Dao, H. N., Ravikumar, P., Likitha, P., Raj, B. V. V., Kiran, R. U., Watanobe, Y., & Paik, I. (2022). Towards efficient discovery of stable periodic patterns in big columnar temporal databases. International Conference on Industrial, Engineering and Other Applications of Applied Intelligent Systems, 831–843.</li>
  <li style="margin-bottom: 0.5rem;">So Nakamura, R. Uday Kiran, P. Likhitha, P. Ravikumar, Yutaka Watanobe, Minh Son Dao, Koji Zettsu & Masashi Toyoda. Efficient Discovery of Partial Periodic-Frequent Patterns in Temporal Databases. DEXA 2021.</li>
  <li style="margin-bottom: 0.5rem;">Likhitha, P. and Ravikumar, P. and Uday Kiran, R. and Hayamizu, Yuto and Goda, Kazuo and Toyoda, Masashi and Zettsu, Koji and Shrivastava, Sourabh, "Discovering Closed Periodic-Frequent Patterns in Very Large Temporal Databases," 2020 IEEE International Conference on Big Data (Big Data), Atlanta, GA, USA, 2020, pp. 4700-4709.</li>
  <li style="margin-bottom: 0.5rem;">Kiran, R. Uday and Saideep, C. and Ravikumar, Penugonda and Zettsu, Koji and Toyoda, Masashi and Kitsuregawa, Masaru and Reddy, P. Krishna, "Discovering Fuzzy Periodic-Frequent Patterns in Quantitative Temporal Databases," 2020 IEEE International Conference on Fuzzy Systems (FUZZ-IEEE), Glasgow, UK, 2020, pp. 1-8.</li>
  <li style="margin-bottom: 0.5rem;">P. Ravikumar and V. S. Devi, "Weighted feature-based classification of time series data," 2014 IEEE Symposium on Computational Intelligence and Data Mining (CIDM), Orlando, FL, USA, 2014, pp. 222-228.</li>
  <li style="margin-bottom: 0.5rem;">P. Ravikumar and V. S. Devi, "Fast Classification of Time Series Data," 2014 International Conference on Soft Computing and Machine Intelligence, New Delhi, India, 2014, pp. 42-45.</li>
  <li style="margin-bottom: 0.5rem;">P. Ravikumar and V. Susheela Devi, "Fuzzy classification of time series data," 2013 IEEE International Conference on Fuzzy Systems (FUZZ-IEEE), Hyderabad, India, 2013, pp. 1-6.</li>
</ul>

<h4 style="color: var(--primary-dark); margin-top: 2rem; margin-bottom: 0.75rem; font-size: 1.15rem; font-weight: 700;">List of Books Published</h4>
<p style="margin-bottom: 1.5rem;">Machine Learning and Artificial Intelligence Application - Dr. G. Preethi, Mr. Monelli Ayyavaraiah, Dr. Penugonda Ravi Kumar</p>

<h4 style="color: var(--primary-dark); margin-top: 2rem; margin-bottom: 0.75rem; font-size: 1.15rem; font-weight: 700;">List of Book Chapters Published</h4>
<p style="margin-bottom: 1.5rem;">Veena, P., Uday Kiran, R., Ravikumar, P., Aggrawal, S. (2021). Discovering Fuzzy Periodic Patterns in Quantitative Temporal Databases. In: Kiran, R.U., Fournier-Viger, P., Luna, J.M., Lin, J.CW., Mondal, A. (eds) Periodic Pattern Mining. Springer, Singapore.</p>

<h4 style="color: var(--primary-dark); margin-top: 2rem; margin-bottom: 0.75rem; font-size: 1.15rem; font-weight: 700;">List of Patents Applied</h4>
<ul style="list-style-type: disc; margin-left: 1.5rem; margin-bottom: 1.5rem;">
  <li style="margin-bottom: 0.5rem;">I have applied for a patent with Application No.202241076114 A and title of the invention is "ENSEMBLE CLASSIFICATION BASED COVID-19 DIAGNOSIS FROM CHEST X-RAYS AND CT IMAGES" and this application is published at The Patent Office Journal No. 02/2023 dated 13/01/2023, India.</li>
  <li style="margin-bottom: 0.5rem;">I have applied for a patent during my studies at the University of AIZU and title of the invention is "TIME SERIES CLASSIFYING DEVICE, TIME SERIES CLASSIFYING PROGRAM, AND TIME SERIES CLASSIFYING METHOD".</li>
</ul>

<h4 style="color: var(--primary-dark); margin-top: 2rem; margin-bottom: 0.75rem; font-size: 1.15rem; font-weight: 700;">Teaching Experience</h4>
<ul style="list-style-type: disc; margin-left: 1.5rem; margin-bottom: 1.5rem;">
  <li style="margin-bottom: 0.5rem;">Assistant Professor (regular basis) in RGUKT- RK Valley campus since 28th January 2017 to till date, Courses covered includes Data Mining, Formal Languages and Automata Theory, and Compiler Design.</li>
  <li style="margin-bottom: 0.5rem;">Worked as a Lecturer (contractual basis) in RGUKT- RK Valley campus from 3rdJuly, 2013 to 27th January, 2017. Courses covered: Formal Languages and Automata Theory, Pattern Recognition and its applications, Database systems, Data Mining and Compiler Design.</li>
</ul>

<h4 style="color: var(--primary-dark); margin-top: 2rem; margin-bottom: 0.75rem; font-size: 1.15rem; font-weight: 700;">Professional Development Activities</h4>
<ul style="list-style-type: disc; margin-left: 1.5rem; margin-bottom: 1.5rem;">
  <li style="margin-bottom: 0.5rem;"><strong>2017-18 ::</strong> Attended Faculty Development Programme (FDP) on Hadoop Big Data Analytics ASSAGOA, One day National Conference on Remote Sensing Application, Orientation Programme in JNTU HRDC - Hyderabad, and Refresher course on Entrepreneurship in SVUHRDC -Tirupati</li>
  <li style="margin-bottom: 0.5rem;"><strong>2016-17 ::</strong> Attended Faculty Development Programme (FDP) on AWS in JNTU pulivendula, and IBM Business Analytics FDP SRKR Bhimvaram.</li>
  <li style="margin-bottom: 0.5rem;"><strong>2015-16 ::</strong> Presented several papers in international Conference Emerging Trends on Engineering, SVUCE, Tirupathi.</li>
  <li style="margin-bottom: 0.5rem;"><strong>2014-15 ::</strong> Presented two papers in IEEE Symposium Series on Computational Intelligence and Data Mining(SSCI-CIDM 2014), and International Conference on Soft Computing & Machine Intelligence(ISCMI-2014)</li>
  <li style="margin-bottom: 0.5rem;"><strong>2013-14 ::</strong> Presented a paper in IEEE International Conference on Fuzzy systems (FUZZ-IEEE2013)</li>
</ul>

<h4 style="color: var(--primary-dark); margin-top: 2rem; margin-bottom: 0.75rem; font-size: 1.15rem; font-weight: 700;">Administrative Responsibilities</h4>
<p style="margin-bottom: 0.5rem;">As a faculty at RGUKT- RK Valley, I have carried out several additional administrative responsibilities along with teaching. My past and current responsibilities at RGUKT RK valley are listed below:</p>
<ul style="list-style-type: disc; margin-left: 1.5rem; margin-bottom: 1.5rem;">
  <li>IT Infrastructure in-charge from 01-10-2015 to 01-07-2016</li>
  <li>Associate IT Infrastructure Coordinator from 20-07-2016 to 27-01-2017</li>
  <li>Branch Examination Coordinator from 03-07-2013 to 22-07-2014</li>
  <li>M. Tech Central Coordinator from 23-06-2014 to 22-06-2016</li>
  <li>Department of Disciplinary committee from 2013 to till date.</li>
  <li>Associate IT Infrastructure Coordinator from 28-01-2017 to 30-06-2018.</li>
  <li>IT Infrastructure Coordinator from 01-07-2018 to 16-09-2020.</li>
  <li>IT Infrastructure Coordinator from 14-09-2023 to till date.</li>
</ul>`,
      extendedProfile: {
        link: "https://www.rguktrkv.ac.in/pdfdoc/RAVIP_Profile.pdf",
        contact: {
          phone: "08588-283687",
          email: "ao@rguktrkv.ac.in"
        },
        peshi: [
          {
            name: "Mr. Subbanarasaiah",
            role: "Assistant Coordinator, Mentor in IT (Phone: 08588-283687)",
            email: "patoao@rguktrkv.ac.in"
          }
        ],
        address: "The Administrative Officer,\nIIIT-RK Valley, RGUKT-AP,\nAcademic Block - 2, Ground Floor,\nIdupulapaya (Vill), Vempally (Mdl),\nYSR Kadapa District,\nAndhra Pradesh - 516 330."
      }
    },
    {
      id: "coe",
      title: "Controller of Examinations",
      name: "Dr. Y Arun Kumar Reddy",
      qualifications: "Assistant Professor in dept.of Electronics and Communication Engg",
      designation: "Controller of Examinations",
      image: "/images/arun_kumar.jpg",
      message: "",
      profile: "",
      extendedProfile: {
        link: "",
        contact: {
          phone: "08588-283682",
          fax: "",
          email: "coe@rguktrkv.ac.in"
        },
        peshi: [
          {
            name: "Mr. H Seshagiri Rao",
            role: "Associate Controller of Examinations, Assistant Professor in the dept.of Chemistry",
            email: "ace@rguktrkv.ac.in",
            image: "/images/seshagiri_rao.jpg"
          },
          {
            name: "Mr. J. Bhanumurthy",
            role: "Associate Controller of Examinations, Mentor in Matematics",
            email: "acoe@rguktrkv.ac.in",
            image: "/images/bhanumurthy.jpg"
          }
        ]
      }
    },
    {
      id: "fo",
      title: "Finance Officer (i/c)",
      name: "Dr. G. Ramesh",
      qualifications: "Assistant Professor in Metallurgical and Materials Engg",
      designation: "Finance Officer (i/c)",
      image: "/images/Dr_G_Ramesh.jpg",
      message: "",
      profile: "Update Soon.....",
      extendedProfile: {
        contact: {
          phone: "08588-283681",
          email: "fo@rguktrkv.ac.in"
        },
        address: "The Finance Officer,\nIIIT-RK Valley, RGUKT-AP\nAcademic Block - 1, Ground Floor,\nIdupulapaya (Vill), Vempally (Mdl),\nYSR Kadapa District,\nAndhra Pradesh -516 330."
      }
    },
    {
      id: "establishment",
      title: "Establishment Section",
      name: "Establishment Section",
      qualifications: "Central Administration",
      designation: "Establishment Section",
      image: "/images/campus-image.png",
      message: "The Establishment Section of RK Valley Institute, Rajiv Gandhi University of Knowledge Technologies, plays a pivotal role in managing and administering all service-related matters of employees.",
      profile: `<p>The Establishment Section of RK Valley Institute, Rajiv Gandhi University of Knowledge Technologies, plays a pivotal role in managing and administering all service-related matters of employees. The section ensures smooth functioning of personnel administration in accordance with Government rules and University policies.</p>
<h4 style="color: var(--primary-dark); margin-top: 2rem; margin-bottom: 0.75rem; font-size: 1.15rem; font-weight: 700;">Functions &amp; Responsibilities</h4>
<p style="margin-bottom: 0.5rem;">The Establishment Section is responsible for:</p>
<ul style="list-style-type: disc; margin-left: 1.5rem; margin-bottom: 1.5rem;">
  <li>Maintenance of service records of all Regular and Contract Employees</li>
  <li>Processing of appointments, joining reports, and probation declarations</li>
  <li>Handling promotions, transfers, and deputations</li>
  <li>Processing leave records and maintaining attendance systems</li>
  <li>Preparation and verification of pay fixation, increments, and service benefits</li>
  <li>Implementation of Government Orders (GOs) and University regulations</li>
  <li>Processing of retirement benefits, resignations, and relieving formalities</li>
  <li>Coordination with Finance, Academic, and Administrative Sections</li>
</ul>
<h4 style="color: var(--primary-dark); margin-top: 2rem; margin-bottom: 0.75rem; font-size: 1.15rem; font-weight: 700;">Key Services</h4>
<ul style="list-style-type: disc; margin-left: 1.5rem; margin-bottom: 1.5rem;">
  <li><strong>e-Samarth (Employee Leave Management System)</strong>: Leave Application &amp; Approval, Employee Data &amp; Profile Management, Biometric Attendance Integration, and Online Approval Workflow (HOD / Administration)</li>
  <li>Employee Data Management</li>
  <li>Leave Management &amp; Attendance Monitoring</li>
  <li>Service Register Maintenance</li>
  <li>Issue of No-Due Certificates &amp; Service Certificates</li>
  <li>Redressal of Employee Grievances related to service matters</li>
</ul>`,
      extendedProfile: {
        contact: {},
        peshi: [
          {
            name: "Dr. A. Job Roger Binny",
            role: "Coordinator, Mentor Department of Biology (Phone: 08588-283687)",
            email: "ebs@rguktrkv.ac.in",
            image: "/images/Dr_A_Job_Roger_Binny.jpg",
            profileLink: "/departments/bio/faculty/fac-dr-roger-binny"
          },
          {
            name: "Mr. A. V. Durga Kishore Reddy",
            role: "Additional Coordinator, Mentor Department of Chemistry (Phone: 08588-283687)",
            email: "ebs@rguktrkv.ac.in",
            image: "/images/Mr_A_V_Durga_Kishore_Reddy.jpg",
            profileLink: "/departments/ce/faculty/fac-durga-kishore"
          },
          {
            name: "Mr. K Ravidranatha Reddy",
            role: "Assistant Coordinator, Mentor Department of IT (Phone: 08588-283687)",
            email: "ebsoffice@rguktrkv.ac.in",
            image: "/images/Mr_K_Ravidranatha_Reddy.jpg"
          }
        ]
      }
    },
    {
      id: "doa",
      title: "Dean of Academics",
      name: "Mr. Daundkar Ramesh Kailas",
      qualifications: "Assistant Professor in Civil",
      designation: "Dean of Academics",
      image: "/images/Mr_Daundkar_Ramesh_Kailas.jpg",
      message: "",
      profile: `<h4 style="color: var(--primary-dark); margin-top: 1.5rem; margin-bottom: 0.75rem; font-size: 1.15rem; font-weight: 700;">Education</h4>
<ul style="list-style-type: disc; margin-left: 1.5rem; margin-bottom: 1.5rem;">
  <li style="margin-bottom: 0.5rem;">Masters of Technology in Hydraulic and Water Resources Engineering from IIT Kharagpur (2008-10).</li>
  <li style="margin-bottom: 0.5rem;">Bachelor of Technology in Agricultural Engineering from K.K.Wagh College of Agricultural Engg, Nasik (2004-08).</li>
</ul>
<h4 style="color: var(--primary-dark); margin-top: 1.5rem; margin-bottom: 0.75rem; font-size: 1.15rem; font-weight: 700;">Teaching Experience</h4>
<ul style="list-style-type: disc; margin-left: 1.5rem; margin-bottom: 1.5rem;">
  <li style="margin-bottom: 0.5rem;">Working as Assistant Professor in Department of Civil Engineering at IIIT R K Valley, RGUKT from 15th Feb 2016 to till date.</li>
  <li style="margin-bottom: 0.5rem;">Worked as Assistant Professor in Department of Civil Engineering at Rajiv Gandhi University of Knowledge Technology, IIIT RK valley (16/06/2010 to 14-07-2016).</li>
  <li style="margin-bottom: 0.5rem;">Successfully taught subjects like Engineering Mechanics, Engineering Drawing, Water Resource Engineering, Hydraulic Engineering, Fluid Mechanics, Surveying &amp; Leveling and Mechanics of Solids.</li>
</ul>
<p style="margin-top: 1.5rem;"><a href="/departments/ce/faculty/fac-daundkar-ramesh-kailas" style="color: var(--primary-maroon); font-weight: bold; text-decoration: underline;">Click here for profile ...</a></p>`,
      extendedProfile: {
        contact: {
          phone: "08588-283683",
          email: "da@rguktrkv.ac.in"
        },
        peshi: [
          {
            name: "Dr. H.M.S. Mostafa Mazarbhuiya",
            role: "Associate Dean, Assistant Professor in the dept. of Mechanical Engineering",
            email: "ada@rguktrkv.ac.in",
            image: "/images/Dr_HMS_Mostafa_Mazarbhuiya.jpg",
            profileLink: "/departments/me/faculty/fac-hms-mostafa-mazarbhuiya"
          },
          {
            name: "Mr. K.S. Khaja Hussain",
            role: "Associate Dean, Assistant Professor in the dept. of EEE",
            email: "ada@rguktrkv.ac.in"
          },
          {
            name: "Dr. Bukke Eswara Naik",
            role: "Associate Dean (PUC), Mentor in the dept. of Chemistry",
            email: "adapuc@rguktrkv.ac.in",
            image: "/images/Dr_Bukke_Eswara_Naik.jpg",
            profileLink: "/departments/chem/faculty/fac-bukke-eswara-naik"
          },
          {
            name: "Dr. B Tilak",
            role: "Associate Dean (PUC), Assistant Professor in the dept. of EEE",
            email: "adapuc1@rguktrkv.ac.in"
          }
        ]
      }
    },
    {
      id: "dosw",
      title: "Dean of Students Welfare",
      name: "Mr. G. Venkatesh",
      qualifications: "Assistant Professor in Civil Engineering",
      designation: "Dean of Students Welfare",
      image: "/images/Mr._G._Venkatesh.jpg",
      message: "",
      profile: `<p>The Dean of Students Welfare acts as a guide, mentor, and problem solver for the students. The office primarily handles student accommodation, discipline, cultural activities, and general well-being on campus.</p>
<h4 style="color: var(--primary-dark); margin-top: 1.5rem; margin-bottom: 0.75rem; font-size: 1.15rem; font-weight: 700;">Hostel Administration</h4>
<p style="margin-bottom: 1.5rem;">The Students' Welfare Office manages both Boys and Girls hostels, ensuring a safe, hygienic, and conducive environment for academic pursuits. Wardens and caretakers are appointed for each block to address student needs round the clock.</p>`,
      extendedProfile: {
        contact: {
          phone: "08588-283654",
          email: "dsw@rguktrkv.ac.in"
        },
        address: "The Dean, Students' Welfare, G007, Ground Floor, Academic Block - 1, IIIT-RK Valley, RGUKT-AP, Idupulapaya (Vill), Vempally (Mdl), YSR Kadapa District, Andhra Pradesh -516 330.",
        peshi: [
          {
            name: "Mr. M. Imran",
            role: "Assistant Coordinator, Mentor in the dept. of IT, Boys Hostels, Warden for Penna Hostel",
            image: "/images/Mr._M._Imran.jpg"
          },
          {
            name: "Dr. K. Ramu",
            role: "Warden (North Block), Mentor in Telugu",
            email: "k.ramu@rguktrkv.ac.in",
            image: "/images/ramu.jpg"
          },
          {
            name: "Mr. B. Ramesh",
            role: "Warden (South Block), Mentor in IT, Warden for Papagni Hostel",
            email: "bramesh@rguktrkv.ac.in",
            image: "/images/Mr._B._Ramesh.jpg"
          },
          {
            name: "Dr. Balagovind Tiwari",
            role: "Warden (North Block), Assistant Professor in Physics",
            email: "balagovindtiwari@rguktrkv.ac.in",
            image: "/images/2102710.jpg"
          },
          {
            name: "Dr. D. Konappa",
            role: "Warden (South Block), Assistant Librarian, Warden for Rho & Theta Hostel (OLD Campus)",
            email: "drkonappa@rguktrkv.ac.in",
            image: "/images/2137302.jpg"
          },
          {
            name: "Mr. K. Pavan Kumar Reddy",
            role: "Warden, Mentor in Mathematics, Girls Hostels, Warden for Kundu Hostel, Warden for Chitravati Hostel",
            email: "kpavankumarreddy@rguktrkv.ac.in",
            image: "/images/2082405.jpg"
          },
          {
            name: "Mrs. Vimala Persis",
            role: "Warden",
            email: "warden@rguktrkv.ac.in"
          },
          {
            name: "Mrs. Sreelakshmi",
            role: "Music (Vocal) Trainer, Warden for Alpha and Beta Hostel (OLD Campus), Warden for Gama Hostel (OLD Campus)"
          },
          {
            name: "Ms. S. Sreedevi",
            role: "Warden, Mentor in IT",
            email: "s.sridevi@rguktrkv.ac.in",
            image: "/images/2098031.jpg"
          },
          {
            name: "Dr. T. Suvarna",
            role: "Warden, Mentor in Biology, Warden for Delta Hostel (OLD Campus)",
            email: "t.suvarna@rguktrkv.ac.in",
            image: "/images/2091106.jpg"
          },
          {
            name: "Dr. Suda Ankamma",
            role: "Warden, Assistant Professor"
          }
        ]
      }
    }
  ] as LeadershipMember[],

  administration: [
    { role: "Director", name: "Prof. G. Vijaya Prakash", email: "director@rguktrkv.ac.in", phone: "08588-283603" },
    { role: "Administrative Officer (AO)", name: "Sri B. Venkata Rami Reddy", email: "ao@rguktrkv.ac.in", phone: "08560-287839" },
    { role: "Dean of Academics", name: "Mr. Daundkar Ramesh Kailas", email: "da@rguktrkv.ac.in", phone: "08588-283683" },
    { role: "Dean of Student Welfare (DSW)", name: "Dr. V. Rajesh", email: "dsw@rguktrkv.ac.in", phone: "08560-287842" },
    { role: "Dean of Research & Development", name: "Dr. K. Ramanjaneyulu", email: "dean.rnd@rguktrkv.ac.in", phone: "08560-287843" },
    { role: "Finance Officer (i/c)", name: "Dr. G. Ramesh", email: "fo@rguktrkv.ac.in", phone: "08588-283681" },
    { role: "Controller of Examinations (COE)", name: "Dr. P. Chandra Sekhar", email: "coe@rguktrkv.ac.in", phone: "08560-287845" },
    { role: "Career Development & Placement Officer", name: "Dr. T. Suresh Kumar", email: "cdpc@rguktrkv.ac.in", phone: "08560-287846" },
    { role: "Coordinator, IQAC", name: "Dr. N. Siva Prasad", email: "iqac@rguktrkv.ac.in", phone: "08560-287847" },
    { role: "Chief Warden (Boys)", name: "Dr. M. Venkatesh", email: "warden.boys@rguktrkv.ac.in", phone: "08560-287848" },
    { role: "Chief Warden (Girls)", name: "Dr. G. Lakshmi Prasanna", email: "warden.girls@rguktrkv.ac.in", phone: "08560-287849" },
    { role: "Chief Security Officer", name: "Sri R. K. V. Sharma", email: "security@rguktrkv.ac.in", phone: "08560-287850" }
  ] as AdministrativeOfficer[],

  departments: [
    {
      id: "aiml",
      code: "AI&ML",
      name: "Artificial Intelligence and Machine Learning",
      category: "Engineering",
      icon: "cpu",
      hod: "Dr. K. Eswara Rao, Ph.D.",
      hodEmail: "hod.aiml@rguktrkv.ac.in",
      facultyCount: 18,
      studentCount: 360,
      labsCount: 5,
      overview: "Specializing in Deep Learning, Generative AI, Computer Vision, and autonomous computing systems.",
      labs: [
        "Advanced Deep Learning & Neural Computing Lab",
        "Generative AI & Large Language Models (LLM) Studio",
        "Computer Vision & Pattern Recognition Lab",
        "Autonomous Systems & Robotics Studio",
        "Data Science & Predictive Modeling Center"
      ],
      highlights: [
        "NVIDIA GPU Supercomputing Cluster for AI Research",
        "Funded projects in AI for Smart Agriculture & Healthcare",
        "Active student collaborations with leading tech research labs"
      ]
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
      overview: "Specializing in Process Engineering, Nanotechnology, Reaction Kinetics, and Industrial Separation.",
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
      overview: "Focusing on Structural Design, Geotechnical Engineering, GIS Surveying, and Smart Infrastructure.",
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
      overview: "Imparting cutting-edge education in AI/ML, Cloud Computing, Cyber Security, and Software Systems.",
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
      overview: "Dedicated to Smart Grids, Renewable Energy, Electric Vehicles, and Power Electronics.",
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
      overview: "Specializing in VLSI Design, Embedded Systems, 5G/6G Networks, and Digital Signal Processing.",
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
      overview: "Covering Thermal Systems, CAD/CAM Design, Robotics, and Advanced CNC Manufacturing.",
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
      overview: "Advancing Advanced Alloys, Ceramic Composites, Extractive Metallurgy, and Corrosion Science.",
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
      overview: "Foundational instruction in Linear Algebra, Calculus, Numerical Methods, and Cryptography.",
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
      overview: "Covering Applied Optics, Semiconductor Physics, Quantum Mechanics, and Nanomaterials.",
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
      overview: "Instruction in Organic Synthesis, Analytical Chemistry, Electrochemistry, and Polymers.",
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
      overview: "Fundamental concepts of Molecular Biology, Bioinformatics, and Computational Genomics.",
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
      overview: "Fostering professional communication skills, managerial economics, ethics, and soft skills.",
      labs: ["Interactive English Language & Multimedia Phonetics Lab", "Corporate Soft Skills & Mock Interview Suite"],
      highlights: ["Extensive BEC (Business English Certificate) training", "Model United Nations & Debate Society Mentors"]
    }
  ] as Department[],

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
  ] as Notice[],

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
  ] as Tender[],

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
  ] as Career[],

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
      image: "/images/central_library.jpg",
      description: "A three-story digital library housing over 75,000 physical volumes, 10,000+ national and international e-journals via IEEE Xplore, ScienceDirect, ACM Digital Library, and a 200-seat 24x7 digital reading wing."
    },
    {
      id: "computing",
      title: "Central Computing Center & AI Lab",
      category: "Labs",
      image: "/images/computing_lab.jpg",
      description: "State-of-the-art data center with 10 Gbps National Knowledge Network (NKN) optical fiber backbone, dual-redundant server clusters, and GPU workstations powering computer vision and AI research."
    },
    {
      id: "sports",
      title: "University Sports Stadium & SAC",
      category: "Sports",
      image: "/images/sports_complex.jpg",
      description: "Floodlit athletic track, international standard synthetic tennis & basketball courts, volleyball courts, modern multi-gymnasium, cricket ground, and indoor badminton stadium."
    },
    {
      id: "aerial",
      title: "330-Acre Green Sanctuary",
      category: "Campus",
      image: "/images/campus_aerial.jpg",
      description: "Eco-friendly scenic residential campus nestled amidst the rolling hills of Idupulapaya, featuring 1MW solar rooftops, 1000 KLD wastewater recycling, and serene walking avenues."
    },
    {
      id: "academic-hub",
      title: "Academic Administrative Complex",
      category: "Campus",
      image: "/images/campus_hero.jpg",
      description: "The architectural landmark housing state-of-the-art smart lecture theatres, Senate Hall, Administrative Directorate, Deaneries, and Departmental Research Centers."
    }
  ] as Facility[],

  gradingSystem: [
    { grade: "Ex", description: "Excellent", points: 10, marksRange: "90 - 100" },
    { grade: "A", description: "Very Good", points: 9, marksRange: "80 - 89" },
    { grade: "B", description: "Good", points: 8, marksRange: "70 - 79" },
    { grade: "C", description: "Fair", points: 7, marksRange: "60 - 69" },
    { grade: "D", description: "Satisfactory", points: 6, marksRange: "50 - 59" },
    { grade: "E", description: "Pass", points: 5, marksRange: "40 - 49" },
    { grade: "R", description: "Remedial (Failed)", points: 0, marksRange: "Below 40" }
  ] as GradeItem[],

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
  ] as FAQItem[]
};
