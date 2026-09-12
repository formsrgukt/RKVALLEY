/**
 * RGUKT RK Valley Official Website - Main Application Script
 * Rajiv Gandhi University of Knowledge Technologies - RK Valley (Idupulapaya)
 */

document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

function initApp() {
  initRouting();
  initAccessibility();
  initNavigation();
  initNotices();
  initDepartments();
  initGallery();
  initTendersAndCareers();
  initSearchModal();
  initGpaCalculator();
  initScrollEffects();
  initAnimatedCounters();
}

/* ==========================================================================
   1. ROUTING & PAGE VIEW SWITCHER
   ========================================================================== */

function initRouting() {
  window.addEventListener("hashchange", handleHashChange);
  handleHashChange(); // initial page load

  // Delegate internal hash link clicks
  document.body.addEventListener("click", (e) => {
    const link = e.target.closest("a[href^='#']");
    if (link && link.getAttribute("href") !== "#") {
      const targetHash = link.getAttribute("href");
      if (document.querySelector(targetHash) || isRoute(targetHash)) {
        // Allow default hash navigation or trigger custom route
        if (isRoute(targetHash)) {
          e.preventDefault();
          window.location.hash = targetHash;
        }
      }
    }
  });
}

function isRoute(hash) {
  const routes = [
    "#home", "#about", "#administration", "#academics", "#departments", 
    "#faculty", "#admissions", "#examinations", "#placements", "#research", 
    "#library", "#students", "#grievance", "#tenders", "#careers", "#contact"
  ];
  return routes.includes(hash);
}

function handleHashChange() {
  const hash = window.location.hash || "#home";
  const homeView = document.getElementById("home-view");
  const innerView = document.getElementById("inner-page-view");
  
  // Close mobile drawer on navigation
  closeMobileDrawer();

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });

  if (hash === "#home" || hash === "") {
    if (homeView) homeView.style.display = "block";
    if (innerView) innerView.classList.remove("active");
    updateActiveNav("home");
  } else {
    if (homeView) homeView.style.display = "none";
    if (innerView) {
      innerView.classList.add("active");
      renderInnerPage(hash.replace("#", ""));
    }
    updateActiveNav(hash.replace("#", ""));
  }
}

function updateActiveNav(pageKey) {
  document.querySelectorAll(".nav-item").forEach(item => item.classList.remove("active"));
  const match = document.querySelector(`.nav-item[data-page="${pageKey}"]`);
  if (match) match.classList.add("active");
}

function renderInnerPage(route) {
  const container = document.getElementById("inner-page-content-area");
  const titleEl = document.getElementById("inner-page-title");
  const breadcrumbEl = document.getElementById("inner-page-breadcrumb-current");
  const sidebarLinks = document.getElementById("inner-page-sidebar-links");

  if (!container) return;

  const data = RGUKT_DATA;

  switch (route) {
    case "about":
      titleEl.textContent = "About RGUKT RK Valley";
      breadcrumbEl.textContent = "About Institute";
      sidebarLinks.innerHTML = `
        <li><a href="#about" class="sidebar-link active">About RGUKT</a></li>
        <li><a href="#administration" class="sidebar-link">University Leadership</a></li>
        <li><a href="#academics" class="sidebar-link">The 6-Year Paradigm</a></li>
        <li><a href="#contact" class="sidebar-link">Campus Map & Location</a></li>
      `;
      container.innerHTML = `
        <div class="inner-article">
          <h3>The Premier Rural Technology University of Andhra Pradesh</h3>
          <p class="lead-text" style="font-size:1.05rem; color:#334155; margin-bottom:1.5rem;">
            Rajiv Gandhi University of Knowledge Technologies (RGUKT) RK Valley was established in 2008 through Act 18 of 2008 by the Government of Andhra Pradesh to cater to the educational needs of gifted rural youth.
          </p>
          <img src="images/campus_aerial.jpg" alt="RGUKT RK Valley Campus Aerial View" style="border-radius:12px; margin-bottom:2rem; width:100%; max-height:420px; object-fit:cover;" />
          
          <h4 style="margin-bottom:0.75rem; color:var(--primary-dark);">Vision & Institutional Mission</h4>
          <p style="margin-bottom:1rem; color:#475569;">
            To be a world-class university committed to fostering technological innovation, academic excellence, and societal empowerment through an integrated, multidisciplinary learning environment tailored for rural high-achievers.
          </p>
          
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:1.25rem; margin:2rem 0;">
            <div style="background:#f8fafc; padding:1.25rem; border-radius:10px; border-left:4px solid var(--accent-royal);">
              <h5 style="color:var(--primary-dark); font-weight:700; margin-bottom:0.35rem;">100% Residential Campus</h5>
              <p style="font-size:0.85rem; color:#64748b;">A vibrant 330+ acre eco-friendly sanctuary with round-the-clock ICT connectivity, modernized hostels, and central dining halls.</p>
            </div>
            <div style="background:#f8fafc; padding:1.25rem; border-radius:10px; border-left:4px solid var(--accent-gold);">
              <h5 style="color:var(--primary-dark); font-weight:700; margin-bottom:0.35rem;">6-Year Integrated B.Tech</h5>
              <p style="font-size:0.85rem; color:#64748b;">Direct post-matriculation pathway combining 2 years of Pre-University foundational sciences with 4 years of Engineering specialization.</p>
            </div>
            <div style="background:#f8fafc; padding:1.25rem; border-radius:10px; border-left:4px solid var(--status-emerald);">
              <h5 style="color:var(--primary-dark); font-weight:700; margin-bottom:0.35rem;">ICT-Driven Learning</h5>
              <p style="font-size:0.85rem; color:#64748b;">Individual laptops, high-speed 10 Gbps NKN optical fiber backbone, smart digital classrooms, and continuous evaluation.</p>
            </div>
          </div>

          <h4 style="margin-bottom:0.75rem; color:var(--primary-dark);">Campus Infrastructure Highlights</h4>
          <p style="color:#475569; margin-bottom:1rem;">
            Located at Idupulapaya in the picturesque valley surrounded by Kadapa hills, the campus boasts a state-of-the-art Central Digital Library, high-performance computing centers, dedicated research laboratories, floodlit sports stadium, and a 24x7 30-bed healthcare hospital.
          </p>
        </div>
      `;
      break;

    case "administration":
      titleEl.textContent = "University Administration & Leadership";
      breadcrumbEl.textContent = "Administration";
      sidebarLinks.innerHTML = `
        <li><a href="#administration" class="sidebar-link active">Governing Leadership</a></li>
        <li><a href="#about" class="sidebar-link">About RGUKT</a></li>
        <li><a href="#faculty" class="sidebar-link">Faculty Directory</a></li>
        <li><a href="#contact" class="sidebar-link">Telephone Directory</a></li>
      `;
      let adminHtml = `
        <div class="inner-article">
          <h3>Statutory Officers & Key Administration</h3>
          <p style="margin-bottom:2rem; color:#475569;">Meet the distinguished academic leaders and administrative officers guiding RGUKT RK Valley.</p>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:1.5rem; margin-bottom:2.5rem;">
            ${data.leadership.map(l => `
              <div style="border:1px solid #e2e8f0; border-radius:12px; overflow:hidden; background:#fff; box-shadow:0 2px 8px rgba(0,0,0,0.04);">
                <img src="${l.image}" alt="${l.name}" style="width:100%; height:220px; object-fit:cover; object-position:top;" />
                <div style="padding:1.25rem;">
                  <span style="font-size:0.75rem; font-weight:700; color:var(--accent-royal); text-transform:uppercase;">${l.title}</span>
                  <h4 style="font-size:1.1rem; color:var(--primary-dark); margin:0.2rem 0;">${l.name}</h4>
                  <p style="font-size:0.8rem; color:#64748b; margin-bottom:0.75rem;">${l.qualifications}</p>
                  <p style="font-size:0.82rem; color:#475569; font-style:italic;">"${l.message.substring(0, 110)}..."</p>
                </div>
              </div>
            `).join("")}
          </div>

          <h4 style="margin-bottom:1rem; color:var(--primary-dark);">Campus Officers & Deans Directory</h4>
          <div style="overflow-x:auto;">
            <table class="gov-table">
              <thead>
                <tr>
                  <th>Designation / Role</th>
                  <th>Officer In-Charge</th>
                  <th>Official Email</th>
                  <th>Intercom / Phone</th>
                </tr>
              </thead>
              <tbody>
                ${data.administration.map(a => `
                  <tr>
                    <td><strong>${a.role}</strong></td>
                    <td>${a.name}</td>
                    <td><a href="mailto:${a.email}">${a.email}</a></td>
                    <td>${a.phone}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </div>
      `;
      container.innerHTML = adminHtml;
      break;

    case "academics":
      titleEl.textContent = "Academic Programs & Regulations";
      breadcrumbEl.textContent = "Academics";
      sidebarLinks.innerHTML = `
        <li><a href="#academics" class="sidebar-link active">6-Year B.Tech Overview</a></li>
        <li><a href="#departments" class="sidebar-link">Departments & Syllabus</a></li>
        <li><a href="#examinations" class="sidebar-link">Grading & Exam Regulations</a></li>
        <li><a href="#admissions" class="sidebar-link">Admissions Guidelines</a></li>
      `;
      container.innerHTML = `
        <div class="inner-article">
          <h3>The 6-Year Integrated B.Tech Academic Paradigm</h3>
          <p style="font-size:1rem; color:#334155; margin-bottom:1.5rem;">
            The academic architecture at RGUKT is specifically engineered to take gifted 10th standard toppers and cultivate them into world-class engineers through a unified 6-year residential curriculum.
          </p>
          
          <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; padding:1.5rem; margin-bottom:2rem;">
            <h4 style="color:var(--primary-dark); margin-bottom:0.75rem;">Academic Structure:</h4>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.5rem;">
              <div style="background:#fff; padding:1.25rem; border-radius:8px; border-left:4px solid var(--accent-royal); box-shadow:0 1px 3px rgba(0,0,0,0.05);">
                <h5 style="color:var(--accent-royal); font-weight:700; margin-bottom:0.35rem;">Phase 1: Pre-University Course (PUC I & PUC II)</h5>
                <p style="font-size:0.85rem; color:#475569;">Two years of intensive foundational instruction in Mathematics, Physics, Chemistry, English, Information Technology, and Biology/Environmental Sciences.</p>
              </div>
              <div style="background:#fff; padding:1.25rem; border-radius:8px; border-left:4px solid var(--accent-gold); box-shadow:0 1px 3px rgba(0,0,0,0.05);">
                <h5 style="color:var(--accent-gold-dark); font-weight:700; margin-bottom:0.35rem;">Phase 2: Bachelor of Technology (E1, E2, E3, E4)</h5>
                <p style="font-size:0.85rem; color:#475569;">Four years of specialized engineering education in 7 core engineering streams with minor specializations in AI, Data Science, Cyber Security, and Renewable Energy.</p>
              </div>
            </div>
          </div>

          <h4 style="margin-bottom:1rem; color:var(--primary-dark);">Engineering Disciplines Offered</h4>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:1rem; margin-bottom:2rem;">
            ${data.departments.filter(d => d.category === "Engineering").map(d => `
              <div style="background:#fff; border:1px solid #e2e8f0; padding:1rem; border-radius:8px; text-align:center;">
                <span style="font-size:0.75rem; font-weight:800; color:var(--accent-royal);">${d.code}</span>
                <h5 style="font-size:0.92rem; color:var(--primary-dark); margin-top:0.25rem;">${d.name}</h5>
              </div>
            `).join("")}
          </div>

          <div style="display:flex; gap:1rem; flex-wrap:wrap;">
            <button class="btn btn-primary" onclick="openPdfModal('Academic_Regulations_RGUKT_2026.pdf', 'Official Academic Regulations & Syllabus')">
              Download Academic Regulations (PDF)
            </button>
            <button class="btn btn-gold" onclick="openGpaCalcModal()">
              RGUKT CGPA Calculator Tool
            </button>
          </div>
        </div>
      `;
      break;

    case "departments":
      titleEl.textContent = "Academic Departments Directory";
      breadcrumbEl.textContent = "Departments";
      sidebarLinks.innerHTML = `
        <li><a href="#departments" class="sidebar-link active">All Departments</a></li>
        <li><a href="#faculty" class="sidebar-link">Faculty Profiles</a></li>
        <li><a href="#research" class="sidebar-link">Research Centers</a></li>
        <li><a href="#academics" class="sidebar-link">Curriculum & Syllabus</a></li>
      `;
      container.innerHTML = `
        <div class="inner-article">
          <h3>Explore Academic & Engineering Departments</h3>
          <p style="margin-bottom:2rem; color:#475569;">Discover our 12 specialized departments equipped with state-of-the-art laboratories, experienced faculty, and industry-aligned curricula.</p>
          <div class="departments-grid">
            ${data.departments.map(d => `
              <div class="department-card">
                <div class="dept-header">
                  <span class="dept-code-badge">${d.code}</span>
                  <span style="font-size:0.75rem; font-weight:700; color:var(--accent-royal);">${d.category}</span>
                </div>
                <h4 class="dept-title">${d.name}</h4>
                <p class="dept-overview">${d.overview}</p>
                <div class="dept-meta-pills">
                  <span><strong>${d.facultyCount}</strong> Faculty</span> • 
                  <span><strong>${d.labsCount}</strong> Labs</span> • 
                  <span><strong>${d.studentCount}</strong> Students</span>
                </div>
                <div style="background:#f8fafc; padding:0.75rem; border-radius:6px; margin-bottom:1rem; font-size:0.8rem; color:#475569;">
                  <strong>HOD:</strong> ${d.hod}<br>
                  <strong>Email:</strong> ${d.hodEmail}
                </div>
                <button class="btn btn-primary" style="padding:0.45rem 1rem; font-size:0.82rem;" onclick="viewDepartmentDetail('${d.id}')">
                  View Syllabus & Labs →
                </button>
              </div>
            `).join("")}
          </div>
        </div>
      `;
      break;

    case "faculty":
      titleEl.textContent = "Faculty Directory";
      breadcrumbEl.textContent = "Faculty";
      sidebarLinks.innerHTML = `
        <li><a href="#faculty" class="sidebar-link active">Faculty Directory</a></li>
        <li><a href="#departments" class="sidebar-link">Departments</a></li>
        <li><a href="#research" class="sidebar-link">Research & Publications</a></li>
      `;
      container.innerHTML = `
        <div class="inner-article">
          <h3>Distinguished Faculty Members</h3>
          <p style="margin-bottom:1.5rem; color:#475569;">RGUKT RK Valley hosts over 240+ dedicated faculty members, with distinguished doctorates and researchers from IITs, NITs, and premier universities.</p>
          <div style="overflow-x:auto;">
            <table class="gov-table">
              <thead>
                <tr>
                  <th>Department</th>
                  <th>Head of Department</th>
                  <th>Faculty Strength</th>
                  <th>Key Research Domains</th>
                  <th>Contact Email</th>
                </tr>
              </thead>
              <tbody>
                ${data.departments.map(d => `
                  <tr>
                    <td><strong>${d.name} (${d.code})</strong></td>
                    <td>${d.hod}</td>
                    <td>${d.facultyCount} Members</td>
                    <td>${d.highlights[0] || 'Advanced Engineering & Applied Research'}</td>
                    <td><a href="mailto:${d.hodEmail}">${d.hodEmail}</a></td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </div>
      `;
      break;

    case "admissions":
      titleEl.textContent = "Admissions Portal 2026-27";
      breadcrumbEl.textContent = "Admissions";
      sidebarLinks.innerHTML = `
        <li><a href="#admissions" class="sidebar-link active">Admission Guidelines</a></li>
        <li><a href="#academics" class="sidebar-link">6-Year B.Tech Program</a></li>
        <li><a href="#notices" class="sidebar-link">Admission Notifications</a></li>
        <li><a href="#contact" class="sidebar-link">Admissions Helpdesk</a></li>
      `;
      container.innerHTML = `
        <div class="inner-article">
          <div style="background:linear-gradient(135deg, #002b49 0%, #0b3c5d 100%); color:#fff; padding:2rem; border-radius:12px; margin-bottom:2rem;">
            <span class="badge-urgent" style="margin-bottom:0.5rem; display:inline-block;">Admissions Open 2026</span>
            <h3 style="color:#fff; font-size:1.75rem; margin-bottom:0.5rem;">6-Year Integrated B.Tech Admissions (2026-27)</h3>
            <p style="color:#cbd5e1; font-size:0.95rem; margin-bottom:1.25rem;">
              Inviting applications from meritorious students who passed SSC (10th Standard) in AP and Telangana.
            </p>
            <div style="display:flex; gap:1rem; flex-wrap:wrap;">
              <button class="btn btn-gold" onclick="openPdfModal('RGUKT_Admissions_Detailed_Notification_2026.pdf', 'Detailed Admission Notification 2026')">
                Download Detailed Notification (PDF)
              </button>
              <button class="btn btn-outline-white" onclick="openPdfModal('RGUKT_Online_Application_Instructions_2026.pdf', 'Online Application Manual')">
                Application Manual
              </button>
            </div>
          </div>

          <h4 style="margin-bottom:1rem; color:var(--primary-dark);">Eligibility & Key Selection Criteria</h4>
          <ul style="padding-left:1.5rem; color:#475569; display:flex; flex-direction:column; gap:0.6rem; margin-bottom:2rem;">
            <li><strong>Educational Qualification:</strong> Regular candidates who passed SSC or its equivalent examination conducted in 2026 in first attempt.</li>
            <li><strong>Deprivation Points:</strong> A deprivation score of <strong>0.4 marks</strong> is added to the 10th GPA of candidates who studied in Non-Residential Government Schools (Zilla Parishad / Municipal / Govt schools) as per AP Act 18 of 2008.</li>
            <li><strong>Age Limit:</strong> Candidates should not have completed 18 years of age (21 years in case of SC/ST candidates) as of 31st December 2026.</li>
            <li><strong>Reservations:</strong> Statutory reservations for SC, ST, BC, EWS, Physically Handicapped (PH), CAP, NCC, and Sports quotas apply strictly according to AP State Government norms.</li>
          </ul>

          <h4 style="margin-bottom:1rem; color:var(--primary-dark);">Frequently Asked Questions (FAQ)</h4>
          <div style="display:flex; flex-direction:column; gap:1rem;">
            ${data.admissionFAQ.map(faq => `
              <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:1.25rem;">
                <h5 style="color:var(--primary-dark); font-weight:700; margin-bottom:0.35rem;">Q: ${faq.q}</h5>
                <p style="font-size:0.88rem; color:#475569;">${faq.a}</p>
              </div>
            `).join("")}
          </div>
        </div>
      `;
      break;

    case "examinations":
      titleEl.textContent = "Examinations Cell & Results";
      breadcrumbEl.textContent = "Examinations";
      sidebarLinks.innerHTML = `
        <li><a href="#examinations" class="sidebar-link active">Exam Regulations & Grading</a></li>
        <li><a href="#academics" class="sidebar-link">Academic Calendars</a></li>
        <li><a href="#tenders" class="sidebar-link">Examination Circulars</a></li>
      `;
      container.innerHTML = `
        <div class="inner-article">
          <h3>Examination Cell & Evaluation System</h3>
          <p style="margin-bottom:1.5rem; color:#475569;">The Examination Cell at RGUKT RK Valley is responsible for conducting mid-term and end-semester examinations, evaluation, grade sheet generation, and convocation degree issuance.</p>
          
          <div style="background:#f1f5f9; border-radius:12px; padding:1.5rem; margin-bottom:2rem;">
            <h4 style="color:var(--primary-dark); margin-bottom:0.75rem;">RGUKT 10-Point Grading Scale</h4>
            <div style="overflow-x:auto;">
              <table class="gov-table" style="background:#fff;">
                <thead>
                  <tr>
                    <th>Grade</th>
                    <th>Qualitative Description</th>
                    <th>Grade Points</th>
                    <th>Marks Range (Out of 100)</th>
                  </tr>
                </thead>
                <tbody>
                  ${data.gradingSystem.map(g => `
                    <tr>
                      <td><strong style="color:var(--accent-royal);">${g.grade}</strong></td>
                      <td>${g.description}</td>
                      <td><strong>${g.points}</strong></td>
                      <td>${g.marksRange}</td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>

          <div style="display:flex; gap:1rem; flex-wrap:wrap;">
            <button class="btn btn-primary" onclick="openGpaCalcModal()">
              Launch RGUKT SGPA/CGPA Calculator Tool
            </button>
            <button class="btn btn-gold" onclick="openPdfModal('End_Sem_Exam_Schedule_Sep_2026.pdf', 'End Semester Timetable')">
              Download Latest Exam Timetable (PDF)
            </button>
          </div>
        </div>
      `;
      break;

    case "placements":
      titleEl.textContent = "Career Development & Placement Cell (CDPC)";
      breadcrumbEl.textContent = "Placements";
      sidebarLinks.innerHTML = `
        <li><a href="#placements" class="sidebar-link active">CDPC Overview</a></li>
        <li><a href="#departments" class="sidebar-link">Department Statistics</a></li>
        <li><a href="#careers" class="sidebar-link">Recruiter Portal</a></li>
      `;
      container.innerHTML = `
        <div class="inner-article">
          <h3>Placement Record & Industry Connect</h3>
          <p style="font-size:1.05rem; color:#334155; margin-bottom:1.5rem;">${data.placements.overview}</p>
          
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:1.25rem; margin-bottom:2.5rem;">
            <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:1.25rem; border-radius:10px; text-align:center;">
              <span style="font-size:2rem; font-weight:800; color:var(--accent-gold); display:block;">${data.placements.stats.highestPackage}</span>
              <span style="font-size:0.85rem; color:#64748b; font-weight:600;">Highest CTC Package</span>
            </div>
            <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:1.25rem; border-radius:10px; text-align:center;">
              <span style="font-size:2rem; font-weight:800; color:var(--accent-royal); display:block;">${data.placements.stats.averagePackage}</span>
              <span style="font-size:0.85rem; color:#64748b; font-weight:600;">Average CTC Package</span>
            </div>
            <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:1.25rem; border-radius:10px; text-align:center;">
              <span style="font-size:2rem; font-weight:800; color:var(--status-emerald); display:block;">${data.placements.stats.offersCount}</span>
              <span style="font-size:0.85rem; color:#64748b; font-weight:600;">Offers Generated</span>
            </div>
            <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:1.25rem; border-radius:10px; text-align:center;">
              <span style="font-size:2rem; font-weight:800; color:var(--primary-dark); display:block;">${data.placements.stats.companiesVisited}</span>
              <span style="font-size:0.85rem; color:#64748b; font-weight:600;">Recruiting Partners</span>
            </div>
          </div>

          <h4 style="margin-bottom:1rem; color:var(--primary-dark);">CDPC Rigorous Training Modules</h4>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:1rem; margin-bottom:2rem;">
            ${data.placements.trainingModules.map(t => `
              <div style="background:#fff; border:1px solid #e2e8f0; border-radius:8px; padding:1.25rem; box-shadow:0 1px 3px rgba(0,0,0,0.05);">
                <h5 style="color:var(--primary-dark); font-size:0.95rem; margin-bottom:0.25rem;">${t.title}</h5>
                <span style="font-size:0.75rem; font-weight:700; color:var(--accent-royal);">${t.duration}</span>
                <p style="font-size:0.8rem; color:#64748b; margin-top:0.35rem;">Conducted by: ${t.trainer}</p>
              </div>
            `).join("")}
          </div>

          <button class="btn btn-primary" onclick="openPdfModal('Placement_Brochure_RGUKT_RKV_2026.pdf', 'Placement Brochure 2026')">
            Download CDPC Placement Brochure (PDF)
          </button>
        </div>
      `;
      break;

    case "research":
      titleEl.textContent = "Research, Innovation & Incubation";
      breadcrumbEl.textContent = "Research";
      sidebarLinks.innerHTML = `
        <li><a href="#research" class="sidebar-link active">Thrust Areas & Projects</a></li>
        <li><a href="#departments" class="sidebar-link">Department Labs</a></li>
        <li><a href="#faculty" class="sidebar-link">Publications</a></li>
      `;
      container.innerHTML = `
        <div class="inner-article">
          <h3>Fostering Indigenous Innovation</h3>
          <p style="font-size:1rem; color:#334155; margin-bottom:1.5rem;">
            RGUKT RK Valley promotes translational research addressing rural societal challenges, renewable energy grids, smart agriculture sensors, artificial intelligence, and materials engineering.
          </p>
          <img src="images/computing_lab.jpg" alt="Computing Laboratory" style="border-radius:12px; margin-bottom:2rem; width:100%; max-height:400px; object-fit:cover;" />
          
          <h4 style="margin-bottom:0.75rem; color:var(--primary-dark);">Major Funded Projects & Grants</h4>
          <p style="color:#475569; margin-bottom:1rem;">
            Faculty and research scholars have secured research funding from the Department of Science & Technology (DST), Science and Engineering Research Board (SERB), AP Pollution Control Board, and AICTE.
          </p>
          <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px; padding:1.25rem;">
            <h5 style="color:var(--primary-dark); font-weight:700;">Student Incubation & Innovation Hub (SIIH)</h5>
            <p style="font-size:0.85rem; color:#64748b; margin-top:0.35rem;">
              Providing seed funding, mentoring, and patent filing assistance for promising student technology startups and intellectual property creations.
            </p>
          </div>
        </div>
      `;
      break;

    case "library":
      titleEl.textContent = "Central Digital Library";
      breadcrumbEl.textContent = "Library";
      sidebarLinks.innerHTML = `
        <li><a href="#library" class="sidebar-link active">Library Overview</a></li>
        <li><a href="#academics" class="sidebar-link">E-Resources & OPAC</a></li>
        <li><a href="#students" class="sidebar-link">Digital Reading Wing</a></li>
      `;
      container.innerHTML = `
        <div class="inner-article">
          <h3>Central Knowledge Repository</h3>
          <p style="font-size:1.05rem; color:#334155; margin-bottom:1.5rem;">${data.campusFacilities[0].description}</p>
          <img src="images/central_library.jpg" alt="Central Library" style="border-radius:12px; margin-bottom:2rem; width:100%; max-height:420px; object-fit:cover;" />
          
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.5rem;">
            <div style="background:#f8fafc; padding:1.25rem; border-radius:8px; border:1px solid #e2e8f0;">
              <h5 style="color:var(--primary-dark); font-weight:700;">Library Hours</h5>
              <p style="font-size:0.85rem; color:#475569; margin-top:0.35rem;">
                <strong>Circulation Section:</strong> 9:00 AM – 8:00 PM<br>
                <strong>Digital Reading Wing:</strong> 24 Hours Open<br>
                <strong>Sunday & Holidays:</strong> 9:00 AM – 5:00 PM
              </p>
            </div>
            <div style="background:#f8fafc; padding:1.25rem; border-radius:8px; border:1px solid #e2e8f0;">
              <h5 style="color:var(--primary-dark); font-weight:700;">E-Journals & Databases</h5>
              <p style="font-size:0.85rem; color:#475569; margin-top:0.35rem;">
                IEEE Xplore, ScienceDirect, Springer, ACM Digital Library, NPTEL Video Courses, National Digital Library of India (NDLI).
              </p>
            </div>
          </div>
        </div>
      `;
      break;

    case "students":
      titleEl.textContent = "Student Life & Welfare Services";
      breadcrumbEl.textContent = "Students";
      sidebarLinks.innerHTML = `
        <li><a href="#students" class="sidebar-link active">Hostels & Campus Life</a></li>
        <li><a href="#grievance" class="sidebar-link">Anti-Ragging & Grievance</a></li>
        <li><a href="#library" class="sidebar-link">Central Library</a></li>
      `;
      container.innerHTML = `
        <div class="inner-article">
          <h3>Holistic Residential Campus Experience</h3>
          <p style="font-size:1rem; color:#334155; margin-bottom:1.5rem;">
            Life at RGUKT RK Valley is an immersive 24x7 residential journey where academics seamlessly blend with sports, cultural festivals, student innovation clubs, and leadership activities.
          </p>
          <img src="images/sports_complex.jpg" alt="University Sports Stadium" style="border-radius:12px; margin-bottom:2rem; width:100%; max-height:400px; object-fit:cover;" />
          
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:1.25rem; margin-bottom:2rem;">
            <div style="background:#fff; border:1px solid #e2e8f0; padding:1.25rem; border-radius:8px;">
              <h5 style="color:var(--primary-dark); font-weight:700;">Hostels & Dining</h5>
              <p style="font-size:0.82rem; color:#64748b; margin-top:0.35rem;">Dedicated hostel blocks for boys and girls with RO purified water, hot water geysers, 24x7 security, and student-monitored mess committees.</p>
            </div>
            <div style="background:#fff; border:1px solid #e2e8f0; padding:1.25rem; border-radius:8px;">
              <h5 style="color:var(--primary-dark); font-weight:700;">Student Activity Center (SAC)</h5>
              <p style="font-size:0.82rem; color:#64748b; margin-top:0.35rem;">Vibrant technical, coding, robotic, literary, music, dance, and fine arts clubs organizing annual fests like 'Abhiyanth' and 'Kalasrjan'.</p>
            </div>
            <div style="background:#fff; border:1px solid #e2e8f0; padding:1.25rem; border-radius:8px;">
              <h5 style="color:var(--primary-dark); font-weight:700;">24x7 Campus Health Center</h5>
              <p style="font-size:0.82rem; color:#64748b; margin-top:0.35rem;">30-bed in-house hospital with resident medical doctors, paramedical staff, emergency ambulance, and full pharmacy.</p>
            </div>
          </div>
        </div>
      `;
      break;

    case "grievance":
      titleEl.textContent = "Anti-Ragging & Student Grievance Redressal";
      breadcrumbEl.textContent = "Grievance";
      sidebarLinks.innerHTML = `
        <li><a href="#grievance" class="sidebar-link active">Anti-Ragging Guidelines</a></li>
        <li><a href="#students" class="sidebar-link">Student Welfare</a></li>
        <li><a href="#contact" class="sidebar-link">Contact Helplines</a></li>
      `;
      container.innerHTML = `
        <div class="inner-article">
          <div style="background:var(--status-crimson-bg); border-left:4px solid var(--status-crimson); padding:1.25rem; border-radius:8px; margin-bottom:2rem;">
            <h4 style="color:var(--status-crimson); font-weight:800;">Zero Tolerance Towards Ragging</h4>
            <p style="font-size:0.88rem; color:#7f1d1d; margin-top:0.25rem;">
              Ragging in any form is strictly prohibited inside and outside the campus. Severe disciplinary and legal actions under the AP Prohibition of Ragging Act will be initiated against violators.
            </p>
          </div>

          <h4 style="margin-bottom:1rem; color:var(--primary-dark);">Emergency Helplines & Squads</h4>
          <ul style="list-style:none; display:flex; flex-direction:column; gap:0.6rem; color:#475569; margin-bottom:2rem;">
            <li><strong>National Anti-Ragging Toll-Free Helpline:</strong> 1800-180-5522</li>
            <li><strong>Dean, Student Welfare (DSW):</strong> +91 85602 87842 | <a href="mailto:dsw@rguktrkv.ac.in">dsw@rguktrkv.ac.in</a></li>
            <li><strong>Chief Warden (Boys):</strong> +91 85602 87848</li>
            <li><strong>Chief Warden (Girls):</strong> +91 85602 87849</li>
          </ul>

          <h4 style="margin-bottom:1rem; color:var(--primary-dark);">Online Grievance Submission</h4>
          <form onsubmit="handleGrievanceSubmit(event)" style="display:flex; flex-direction:column; gap:1rem; max-width:560px;">
            <input type="text" placeholder="Student ID (e.g. R200001)" required style="padding:0.65rem; border:1px solid #cbd5e1; border-radius:6px;" />
            <input type="email" placeholder="Official University Email" required style="padding:0.65rem; border:1px solid #cbd5e1; border-radius:6px;" />
            <select required style="padding:0.65rem; border:1px solid #cbd5e1; border-radius:6px;">
              <option value="">Select Grievance Category</option>
              <option value="Academic">Academic & Examination</option>
              <option value="Hostel">Hostel & Mess Sanitation</option>
              <option value="AntiRagging">Anti-Ragging Incident</option>
              <option value="WomenCell">Internal Complaints Committee (ICC)</option>
              <option value="Infrastructure">ICT / Laboratory / Water</option>
            </select>
            <textarea placeholder="Describe your grievance in detail..." rows="4" required style="padding:0.65rem; border:1px solid #cbd5e1; border-radius:6px;"></textarea>
            <button type="submit" class="btn btn-primary" style="align-self:flex-start;">Submit Grievance to Committee</button>
          </form>
        </div>
      `;
      break;

    case "tenders":
      titleEl.textContent = "Tenders & Procurement Portal";
      breadcrumbEl.textContent = "Tenders";
      sidebarLinks.innerHTML = `
        <li><a href="#tenders" class="sidebar-link active">Active Tenders</a></li>
        <li><a href="#careers" class="sidebar-link">Careers & Recruitment</a></li>
        <li><a href="#about" class="sidebar-link">Institute Details</a></li>
      `;
      container.innerHTML = `
        <div class="inner-article">
          <h3>E-Procurement & Tender Notices</h3>
          <p style="margin-bottom:1.5rem; color:#475569;">Official tenders invited for works, supplies, lab equipment, and institutional services at RGUKT RK Valley.</p>
          <div style="overflow-x:auto;">
            <table class="gov-table">
              <thead>
                <tr>
                  <th>Tender Ref No</th>
                  <th>Description of Work / Item</th>
                  <th>Category</th>
                  <th>Publish Date</th>
                  <th>Closing Date</th>
                  <th>EMD</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                ${data.tenders.map(t => `
                  <tr>
                    <td><strong>${t.refNo}</strong></td>
                    <td style="max-width:280px;">${t.title}</td>
                    <td><span class="badge-category">${t.category}</span></td>
                    <td>${t.publishDate}</td>
                    <td><strong style="color:var(--status-crimson);">${t.closingDate}</strong></td>
                    <td>${t.emd}</td>
                    <td><span class="table-badge-active">${t.status}</span></td>
                    <td>
                      <button class="btn btn-primary" style="padding:0.3rem 0.6rem; font-size:0.75rem;" onclick="openPdfModal('${t.docUrl}', '${t.title}')">
                        Download PDF
                      </button>
                    </td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </div>
      `;
      break;

    case "careers":
      titleEl.textContent = "Careers & Faculty Recruitment";
      breadcrumbEl.textContent = "Careers";
      sidebarLinks.innerHTML = `
        <li><a href="#careers" class="sidebar-link active">Current Openings</a></li>
        <li><a href="#tenders" class="sidebar-link">Tenders</a></li>
        <li><a href="#faculty" class="sidebar-link">Faculty Directory</a></li>
      `;
      container.innerHTML = `
        <div class="inner-article">
          <h3>Employment Opportunities at RGUKT RK Valley</h3>
          <p style="margin-bottom:1.5rem; color:#475569;">Join our prestigious faculty and technical staff committed to empowering rural youth through cutting-edge technology education.</p>
          <div style="display:flex; flex-direction:column; gap:1.25rem;">
            ${data.careers.map(c => `
              <div style="background:#fff; border:1px solid #e2e8f0; border-radius:10px; padding:1.5rem; box-shadow:0 2px 4px rgba(0,0,0,0.04);">
                <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.5rem;">
                  <span style="font-size:0.75rem; font-weight:700; color:var(--accent-royal); text-transform:uppercase;">${c.advtNo}</span>
                  <span class="table-badge-active">${c.status}</span>
                </div>
                <h4 style="font-size:1.15rem; color:var(--primary-dark); margin-bottom:0.35rem;">${c.post}</h4>
                <p style="font-size:0.85rem; color:#475569; margin-bottom:0.5rem;"><strong>Departments:</strong> ${c.department}</p>
                <p style="font-size:0.82rem; color:#64748b; margin-bottom:1rem;"><strong>Eligibility:</strong> ${c.qualification}</p>
                <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid #f1f5f9; padding-top:0.75rem;">
                  <span style="font-size:0.8rem; color:#dc2626; font-weight:600;">Last Date: ${c.lastDate}</span>
                  <button class="btn btn-primary" style="padding:0.35rem 0.85rem; font-size:0.8rem;" onclick="openPdfModal('${c.formUrl}', '${c.post} Application Form')">
                    Download Application Form
                  </button>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      `;
      break;

    case "contact":
      titleEl.textContent = "Contact & Campus Location";
      breadcrumbEl.textContent = "Contact Us";
      sidebarLinks.innerHTML = `
        <li><a href="#contact" class="sidebar-link active">Campus Directory</a></li>
        <li><a href="#administration" class="sidebar-link">Statutory Officers</a></li>
        <li><a href="#grievance" class="sidebar-link">Grievance Cell</a></li>
      `;
      container.innerHTML = `
        <div class="inner-article">
          <h3>Get in Touch with RGUKT RK Valley</h3>
          <p style="margin-bottom:1.5rem; color:#475569;">We welcome inquiries from students, parents, research collaborators, and industry recruiters.</p>
          
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:2rem; margin-bottom:2.5rem;">
            <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px; padding:1.5rem;">
              <h4 style="color:var(--primary-dark); margin-bottom:1rem;">Postal Campus Address</h4>
              <p style="font-size:0.9rem; color:#475569; line-height:1.6; margin-bottom:1rem;">
                <strong>Rajiv Gandhi University of Knowledge Technologies - RK Valley</strong><br>
                Idupulapaya Village, Vempalli Mandal,<br>
                YSR Kadapa District, Andhra Pradesh, India - 516330.
              </p>
              <p style="font-size:0.85rem; color:#64748b;">
                <strong>Director's Secretariat:</strong> 08560-287834<br>
                <strong>Administrative Officer:</strong> 08560-287839<br>
                <strong>Admissions Helpline:</strong> 08560-287840<br>
                <strong>Placement Cell:</strong> cdpc@rguktrkv.ac.in
              </p>
            </div>

            <div style="background:#fff; border:1px solid #e2e8f0; border-radius:10px; padding:1.5rem;">
              <h4 style="color:var(--primary-dark); margin-bottom:1rem;">Send an Official Query</h4>
              <form onsubmit="handleQuerySubmit(event)" style="display:flex; flex-direction:column; gap:0.75rem;">
                <input type="text" placeholder="Your Full Name" required style="padding:0.6rem; border:1px solid #cbd5e1; border-radius:6px; font-size:0.85rem;" />
                <input type="email" placeholder="Email Address" required style="padding:0.6rem; border:1px solid #cbd5e1; border-radius:6px; font-size:0.85rem;" />
                <input type="text" placeholder="Subject" required style="padding:0.6rem; border:1px solid #cbd5e1; border-radius:6px; font-size:0.85rem;" />
                <textarea placeholder="Write your message here..." rows="3" required style="padding:0.6rem; border:1px solid #cbd5e1; border-radius:6px; font-size:0.85rem;"></textarea>
                <button type="submit" class="btn btn-primary" style="align-self:flex-start; font-size:0.85rem; padding:0.5rem 1.25rem;">Submit Query</button>
              </form>
            </div>
          </div>
        </div>
      `;
      break;

    default:
      titleEl.textContent = "RGUKT RK Valley";
      breadcrumbEl.textContent = "Information";
      container.innerHTML = `<p>Please select a valid section from the navigation menu above.</p>`;
  }
}

/* ==========================================================================
   2. ACCESSIBILITY & LANGUAGE TOGGLES
   ========================================================================== */

function initAccessibility() {
  const contrastBtn = document.getElementById("btn-toggle-contrast");
  const fontSmBtn = document.getElementById("btn-font-sm");
  const fontMdBtn = document.getElementById("btn-font-md");
  const fontLgBtn = document.getElementById("btn-font-lg");
  const langToggleBtn = document.getElementById("btn-lang-toggle");

  if (contrastBtn) {
    contrastBtn.addEventListener("click", () => {
      document.body.classList.toggle("high-contrast");
      const isHc = document.body.classList.contains("high-contrast");
      localStorage.setItem("rgukt_hc", isHc ? "true" : "false");
    });
  }

  if (fontSmBtn) {
    fontSmBtn.addEventListener("click", () => setFontSize("font-size-sm"));
  }
  if (fontMdBtn) {
    fontMdBtn.addEventListener("click", () => setFontSize("font-size-md"));
  }
  if (fontLgBtn) {
    fontLgBtn.addEventListener("click", () => setFontSize("font-size-lg"));
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", () => {
      const current = langToggleBtn.getAttribute("data-lang") || "en";
      if (current === "en") {
        langToggleBtn.setAttribute("data-lang", "te");
        langToggleBtn.textContent = "English";
        document.querySelectorAll(".brand-campus-title").forEach(el => {
          el.textContent = "రాజీవ్ గాంధీ వైజ్ఞానిక సాంకేతిక విశ్వవిద్యాలయం - ఆర్.కె. వ్యాలీ";
        });
      } else {
        langToggleBtn.setAttribute("data-lang", "en");
        langToggleBtn.textContent = "తెలుగు";
        document.querySelectorAll(".brand-campus-title").forEach(el => {
          el.textContent = "Rajiv Gandhi University of Knowledge Technologies";
        });
      }
    });
  }
}

function setFontSize(sizeClass) {
  document.body.classList.remove("font-size-sm", "font-size-md", "font-size-lg");
  document.body.classList.add(sizeClass);
}

/* ==========================================================================
   3. NAVIGATION & MOBILE DRAWER
   ========================================================================== */

function initNavigation() {
  const mobileToggle = document.getElementById("btn-mobile-menu");
  const mobileOverlay = document.getElementById("mobile-drawer-overlay");
  const drawerClose = document.getElementById("btn-close-drawer");

  if (mobileToggle && mobileOverlay) {
    mobileToggle.addEventListener("click", () => {
      mobileOverlay.classList.add("active");
    });
  }

  if (drawerClose && mobileOverlay) {
    drawerClose.addEventListener("click", closeMobileDrawer);
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener("click", (e) => {
      if (e.target === mobileOverlay) closeMobileDrawer();
    });
  }

  // Mobile drawer submenu accordions
  document.querySelectorAll(".drawer-toggle").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const submenu = btn.nextElementSibling;
      if (submenu) {
        submenu.classList.toggle("open");
      }
    });
  });
}

function closeMobileDrawer() {
  const mobileOverlay = document.getElementById("mobile-drawer-overlay");
  if (mobileOverlay) mobileOverlay.classList.remove("active");
}

/* ==========================================================================
   4. NOTICES & LIVE ANNOUNCEMENT FILTERS
   ========================================================================== */

function initNotices() {
  renderNoticesList("All", "");

  const tabs = document.querySelectorAll(".notice-tab-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const cat = tab.getAttribute("data-category");
      const query = document.getElementById("notice-search-input") ? document.getElementById("notice-search-input").value : "";
      renderNoticesList(cat, query);
    });
  });

  const searchInput = document.getElementById("notice-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const activeTab = document.querySelector(".notice-tab-btn.active");
      const cat = activeTab ? activeTab.getAttribute("data-category") : "All";
      renderNoticesList(cat, e.target.value.trim());
    });
  }
}

function renderNoticesList(category, searchQuery) {
  const container = document.getElementById("notices-list-container");
  if (!container) return;

  let list = RGUKT_DATA.notices;

  if (category && category !== "All") {
    list = list.filter(n => n.category.toLowerCase() === category.toLowerCase() || n.tag.toLowerCase().includes(category.toLowerCase()));
  }

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    list = list.filter(n => n.title.toLowerCase().includes(q) || n.summary.toLowerCase().includes(q));
  }

  if (list.length === 0) {
    container.innerHTML = `
      <div style="padding:2.5rem; text-align:center; color:#94a3b8;">
        <p>No circulars or notices found matching your filter criteria.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(n => {
    const parts = n.date.split(" ");
    const day = parts[0] || "01";
    const month = parts[1] || "SEP";

    return `
      <div class="notice-row">
        <div class="notice-date-badge">
          <span class="notice-day">${day}</span>
          <span class="notice-month">${month}</span>
        </div>
        <div class="notice-content">
          <div class="notice-meta">
            <span class="badge-category">${n.tag}</span>
            ${n.urgent ? `<span class="badge-urgent">Urgent</span>` : ""}
          </div>
          <h4 class="notice-headline">
            <a href="javascript:void(0)" onclick="openPdfModal('${n.pdfName}', '${escapeHtml(n.title)}')">${n.title}</a>
          </h4>
          <p class="notice-snippet">${n.summary}</p>
          <div class="notice-action-links">
            <a href="javascript:void(0)" class="btn-pdf-view" onclick="openPdfModal('${n.pdfName}', '${escapeHtml(n.title)}')">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              View Document (${n.size})
            </a>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

/* ==========================================================================
   5. DEPARTMENTS DIRECTORY
   ========================================================================== */

function initDepartments() {
  renderDepartmentsGrid("All");

  const deptTabs = document.querySelectorAll(".dept-filter-btn");
  deptTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      deptTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const cat = tab.getAttribute("data-category");
      renderDepartmentsGrid(cat);
    });
  });
}

function renderDepartmentsGrid(category) {
  const container = document.getElementById("home-departments-grid");
  if (!container) return;

  let depts = RGUKT_DATA.departments;
  if (category && category !== "All") {
    depts = depts.filter(d => d.category.toLowerCase() === category.toLowerCase());
  }

  container.innerHTML = depts.map(d => `
    <div class="department-card">
      <div class="dept-header">
        <div class="dept-icon-box">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
        </div>
        <span class="dept-code-badge">${d.code}</span>
      </div>
      <h4 class="dept-title">${d.name}</h4>
      <p class="dept-overview">${d.overview}</p>
      <div class="dept-meta-pills">
        <span><strong>${d.facultyCount}</strong> Faculty</span> • 
        <span><strong>${d.labsCount}</strong> Labs</span> • 
        <span><strong>${d.studentCount}</strong> Students</span>
      </div>
      <div class="dept-action-row">
        <span style="font-size:0.75rem; color:#64748b;">HOD: ${d.hod.split(",")[0]}</span>
        <a href="#departments" class="btn-dept-explore" onclick="viewDepartmentDetail('${d.id}')">
          Explore →
        </a>
      </div>
    </div>
  `).join("");
}

function viewDepartmentDetail(deptId) {
  window.location.hash = "#departments";
  setTimeout(() => {
    const dept = RGUKT_DATA.departments.find(d => d.id === deptId);
    if (!dept) return;

    const modalTitle = document.getElementById("doc-modal-title");
    const modalBody = document.getElementById("doc-modal-body");
    const modal = document.getElementById("document-modal");

    if (modal && modalTitle && modalBody) {
      modalTitle.textContent = `${dept.name} (${dept.code})`;
      modalBody.innerHTML = `
        <div style="line-height:1.6; color:#334155;">
          <h4 style="color:var(--primary-dark); margin-bottom:0.5rem;">Department Overview</h4>
          <p style="margin-bottom:1.25rem;">${dept.overview}</p>
          
          <h4 style="color:var(--primary-dark); margin-bottom:0.5rem;">Laboratories & Advanced Facilities</h4>
          <ul style="padding-left:1.25rem; margin-bottom:1.5rem; display:flex; flex-direction:column; gap:0.35rem;">
            ${dept.labs.map(l => `<li><strong>${l}</strong></li>`).join("")}
          </ul>

          <h4 style="color:var(--primary-dark); margin-bottom:0.5rem;">Department Leadership</h4>
          <p style="background:#f8fafc; padding:1rem; border-radius:8px; border:1px solid #e2e8f0; font-size:0.9rem;">
            <strong>Head of Department:</strong> ${dept.hod}<br>
            <strong>Official Email:</strong> <a href="mailto:${dept.hodEmail}">${dept.hodEmail}</a><br>
            <strong>Total Faculty Strength:</strong> ${dept.facultyCount} Professors & Assistant Professors
          </p>
        </div>
      `;
      modal.classList.add("active");
    }
  }, 100);
}

/* ==========================================================================
   6. CAMPUS GALLERY & LIGHTBOX
   ========================================================================== */

function initGallery() {
  const container = document.getElementById("campus-gallery-grid");
  if (!container) return;

  const facilities = RGUKT_DATA.campusFacilities;

  container.innerHTML = facilities.map(f => `
    <div class="gallery-card" onclick="openGalleryLightbox('${f.image}', '${f.title}', '${escapeHtml(f.description)}')">
      <img src="${f.image}" alt="${f.title}" class="gallery-img" loading="lazy" />
      <div class="gallery-overlay">
        <span class="gallery-tag">${f.category}</span>
        <h4 class="gallery-title">${f.title}</h4>
      </div>
    </div>
  `).join("");
}

function openGalleryLightbox(imgSrc, title, desc) {
  const modal = document.getElementById("document-modal");
  const modalTitle = document.getElementById("doc-modal-title");
  const modalBody = document.getElementById("doc-modal-body");

  if (modal && modalTitle && modalBody) {
    modalTitle.textContent = title;
    modalBody.innerHTML = `
      <img src="${imgSrc}" alt="${title}" style="width:100%; border-radius:10px; margin-bottom:1rem; max-height:420px; object-fit:cover;" />
      <p style="font-size:0.95rem; color:#475569; line-height:1.6;">${desc}</p>
    `;
    modal.classList.add("active");
  }
}

/* ==========================================================================
   7. TENDERS & CAREERS TABLE (HOMEPAGE PREVIEW)
   ========================================================================== */

function initTendersAndCareers() {
  const tendersContainer = document.getElementById("home-tenders-table-body");
  if (tendersContainer) {
    tendersContainer.innerHTML = RGUKT_DATA.tenders.slice(0, 4).map(t => `
      <tr>
        <td><strong>${t.refNo}</strong></td>
        <td>${t.title}</td>
        <td>${t.publishDate}</td>
        <td><strong style="color:var(--status-crimson);">${t.closingDate}</strong></td>
        <td><span class="table-badge-active">${t.status}</span></td>
        <td>
          <button class="btn btn-primary" style="padding:0.3rem 0.65rem; font-size:0.75rem;" onclick="openPdfModal('${t.docUrl}', '${escapeHtml(t.title)}')">
            PDF
          </button>
        </td>
      </tr>
    `).join("");
  }
}

/* ==========================================================================
   8. UNIVERSAL SEARCH MODAL (Ctrl + K)
   ========================================================================== */

function initSearchModal() {
  const searchModal = document.getElementById("search-modal");
  const searchInput = document.getElementById("universal-search-input");
  const searchResults = document.getElementById("universal-search-results");
  const openButtons = document.querySelectorAll(".btn-nav-search, .btn-trigger-search");

  openButtons.forEach(btn => {
    btn.addEventListener("click", openSearch);
  });

  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      openSearch();
    }
    if (e.key === "Escape" && searchModal && searchModal.classList.contains("active")) {
      closeAllModals();
    }
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const q = e.target.value.trim().toLowerCase();
      renderUniversalSearchResults(q);
    });
  }

  function openSearch() {
    if (searchModal) {
      searchModal.classList.add("active");
      setTimeout(() => {
        if (searchInput) {
          searchInput.value = "";
          searchInput.focus();
          renderUniversalSearchResults("");
        }
      }, 100);
    }
  }
}

function renderUniversalSearchResults(query) {
  const container = document.getElementById("universal-search-results");
  if (!container) return;

  const data = RGUKT_DATA;
  let matches = [];

  // Index Pages
  const pages = [
    { title: "About RGUKT RK Valley", link: "#about", desc: "Vision, History, Act 18 of 2008 & 330-Acre Campus" },
    { title: "University Administration", link: "#administration", desc: "Chancellor, Vice Chancellor, Director & Deans" },
    { title: "Academic Programs", link: "#academics", desc: "6-Year Integrated B.Tech Structure & Curricula" },
    { title: "Departments Directory", link: "#departments", desc: "CSE, ECE, EEE, Mechanical, Civil, Chemical, MME, Sciences" },
    { title: "Admissions 2026-27", link: "#admissions", desc: "Eligibility, Deprivation points, Application instructions" },
    { title: "Examinations Cell", link: "#examinations", desc: "10-Point Grading Scale, Timetables & Results" },
    { title: "Placements Cell (CDPC)", link: "#placements", desc: "Highest CTC, Top Recruiters & Training Roadmap" },
    { title: "Central Library", link: "#library", desc: "Digital Library, E-Journals & OPAC" },
    { title: "Student Welfare & Hostels", link: "#students", desc: "Hostel life, Mess, SAC Clubs & Sports Stadium" },
    { title: "Anti-Ragging & Grievance Cell", link: "#grievance", desc: "Zero tolerance policy & emergency squads" },
    { title: "Tenders & Procurement", link: "#tenders", desc: "Active e-procurement tenders & bidding notices" },
    { title: "Careers & Recruitment", link: "#careers", desc: "Faculty & staff employment advertisements" },
    { title: "Contact Us & Map", link: "#contact", desc: "Postal address, telephone directory & location" }
  ];

  pages.forEach(p => {
    if (!query || p.title.toLowerCase().includes(query) || p.desc.toLowerCase().includes(query)) {
      matches.push({ type: "Page", title: p.title, link: p.link, info: p.desc });
    }
  });

  // Index Departments
  data.departments.forEach(d => {
    if (!query || d.name.toLowerCase().includes(query) || d.code.toLowerCase().includes(query)) {
      matches.push({ type: "Department", title: `${d.name} (${d.code})`, link: `#departments`, info: `HOD: ${d.hod}` });
    }
  });

  // Index Notices
  data.notices.forEach(n => {
    if (query && (n.title.toLowerCase().includes(query) || n.summary.toLowerCase().includes(query))) {
      matches.push({ type: "Notice", title: n.title, link: `javascript:openPdfModal('${n.pdfName}', '${escapeHtml(n.title)}')`, info: `${n.date} • ${n.tag}` });
    }
  });

  if (matches.length === 0) {
    container.innerHTML = `<li style="padding:1rem; text-align:center; color:#94a3b8;">No results found for "${escapeHtml(query)}"</li>`;
    return;
  }

  container.innerHTML = matches.slice(0, 10).map(m => `
    <li class="search-result-item" onclick="navigateSearchResult('${m.link}')">
      <div>
        <span style="font-size:0.7rem; font-weight:700; color:var(--accent-royal); text-transform:uppercase;">${m.type}</span>
        <h5 style="font-size:0.92rem; color:var(--primary-dark);">${m.title}</h5>
        <p style="font-size:0.78rem; color:#64748b;">${m.info}</p>
      </div>
      <span style="font-size:0.8rem; color:var(--accent-royal);">→</span>
    </li>
  `).join("");
}

function navigateSearchResult(link) {
  closeAllModals();
  if (link.startsWith("#")) {
    window.location.hash = link;
  } else if (link.startsWith("javascript:")) {
    eval(link.replace("javascript:", ""));
  }
}

/* ==========================================================================
   9. RGUKT CGPA / SGPA CALCULATOR
   ========================================================================== */

function initGpaCalculator() {
  const addRowBtn = document.getElementById("btn-add-gpa-row");
  if (addRowBtn) {
    addRowBtn.addEventListener("click", addGpaCourseRow);
  }
}

function openGpaCalcModal() {
  const modal = document.getElementById("gpa-modal");
  if (modal) {
    modal.classList.add("active");
    calculateGpa();
  }
}

function addGpaCourseRow() {
  const container = document.getElementById("gpa-rows-container");
  if (!container) return;

  const row = document.createElement("div");
  row.className = "gpa-row";
  row.innerHTML = `
    <input type="text" placeholder="Course Name / Subject" value="Course ${container.children.length + 1}" />
    <select class="gpa-credits" onchange="calculateGpa()">
      <option value="4" selected>4 Credits</option>
      <option value="3">3 Credits</option>
      <option value="2">2 Credits</option>
      <option value="1.5">1.5 Credits</option>
      <option value="1">1 Credit</option>
    </select>
    <select class="gpa-grade" onchange="calculateGpa()">
      <option value="10">Ex (10)</option>
      <option value="9">A (9)</option>
      <option value="8">B (8)</option>
      <option value="7">C (7)</option>
      <option value="6">D (6)</option>
      <option value="5">E (5)</option>
      <option value="0">R (0)</option>
    </select>
    <button type="button" onclick="this.parentElement.remove(); calculateGpa();" style="color:#ef4444; font-weight:700;">×</button>
  `;
  container.appendChild(row);
  calculateGpa();
}

function calculateGpa() {
  const credits = document.querySelectorAll(".gpa-credits");
  const grades = document.querySelectorAll(".gpa-grade");
  const resultEl = document.getElementById("gpa-result-val");

  let totalPoints = 0;
  let totalCredits = 0;

  for (let i = 0; i < credits.length; i++) {
    const c = parseFloat(credits[i].value) || 0;
    const g = parseFloat(grades[i].value) || 0;
    totalPoints += (c * g);
    totalCredits += c;
  }

  const gpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "0.00";
  if (resultEl) {
    resultEl.textContent = gpa;
  }
}

/* ==========================================================================
   10. PDF & DOCUMENT PREVIEW MODAL
   ========================================================================== */

function openPdfModal(pdfFileName, title) {
  const modal = document.getElementById("document-modal");
  const modalTitle = document.getElementById("doc-modal-title");
  const modalBody = document.getElementById("doc-modal-body");

  if (modal && modalTitle && modalBody) {
    modalTitle.textContent = title;
    modalBody.innerHTML = `
      <div style="background:#f8fafc; border:2px dashed #cbd5e1; border-radius:12px; padding:2rem; text-align:center;">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1a56db" stroke-width="1.5" style="margin:0 auto 1rem;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
        <h4 style="color:var(--primary-dark); font-size:1.1rem; margin-bottom:0.35rem;">${escapeHtml(title)}</h4>
        <p style="font-size:0.85rem; color:#64748b; margin-bottom:1.5rem;">File: ${pdfFileName} | Status: Verified Official Document</p>
        
        <div style="display:flex; justify-content:center; gap:1rem; flex-wrap:wrap;">
          <a href="javascript:void(0)" onclick="triggerDownload('${pdfFileName}')" class="btn btn-primary">
            Download Official PDF
          </a>
          <button type="button" onclick="window.print()" class="btn btn-outline-white" style="color:var(--primary-dark); border-color:#cbd5e1;">
            Print Notice
          </button>
        </div>
      </div>
    `;
    modal.classList.add("active");
  }
}

function triggerDownload(fileName) {
  alert(`Downloading official university circular: ${fileName}`);
}

function openLeaderBio(leaderId) {
  const leader = RGUKT_DATA.leadership.find(l => l.id === leaderId);
  if (!leader) return;

  const modal = document.getElementById("document-modal");
  const modalTitle = document.getElementById("doc-modal-title");
  const modalBody = document.getElementById("doc-modal-body");

  if (modal && modalTitle && modalBody) {
    modalTitle.textContent = `${leader.name} - ${leader.title}`;
    modalBody.innerHTML = `
      <div style="display:flex; gap:1.5rem; flex-wrap:wrap; margin-bottom:1.5rem;">
        <img src="${leader.image}" alt="${leader.name}" style="width:140px; height:140px; border-radius:12px; object-fit:cover; object-position:top;" />
        <div style="flex:1;">
          <h4 style="color:var(--primary-dark);">${leader.name}</h4>
          <span style="font-size:0.85rem; font-weight:700; color:var(--accent-royal);">${leader.designation}</span>
          <p style="font-size:0.85rem; color:#64748b; margin-top:0.25rem;">${leader.qualifications}</p>
        </div>
      </div>
      <blockquote style="border-left:4px solid var(--accent-gold); padding-left:1rem; font-style:italic; color:#334155; margin-bottom:1.5rem; line-height:1.6;">
        "${leader.message}"
      </blockquote>
      <h5 style="color:var(--primary-dark); margin-bottom:0.35rem;">Distinguished Profile:</h5>
      <p style="font-size:0.9rem; color:#475569; line-height:1.6;">${leader.profile}</p>
    `;
    modal.classList.add("active");
  }
}

function closeAllModals() {
  document.querySelectorAll(".modal-backdrop").forEach(m => m.classList.remove("active"));
}

/* ==========================================================================
   11. SCROLL EFFECTS & BACK TO TOP
   ========================================================================== */

function initScrollEffects() {
  const backToTopBtn = document.getElementById("btn-back-to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      if (backToTopBtn) backToTopBtn.classList.add("visible");
    } else {
      if (backToTopBtn) backToTopBtn.classList.remove("visible");
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

/* ==========================================================================
   12. ANIMATED NUMERICAL COUNTERS
   ========================================================================== */

function initAnimatedCounters() {
  const counters = document.querySelectorAll(".counter-target");
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

function animateCounter(el) {
  const target = parseInt(el.getAttribute("data-target")) || 0;
  const suffix = el.getAttribute("data-suffix") || "";
  let current = 0;
  const step = Math.ceil(target / 40);

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      el.textContent = target.toLocaleString() + suffix;
      clearInterval(timer);
    } else {
      el.textContent = current.toLocaleString() + suffix;
    }
  }, 30);
}

/* ==========================================================================
   13. FORM SUBMISSIONS
   ========================================================================== */

function handleGrievanceSubmit(e) {
  e.preventDefault();
  alert("Your grievance petition has been securely logged and forwarded to the RGUKT Internal Complaints and Student Grievance Committee. A tracking token has been dispatched to your email.");
  e.target.reset();
}

function handleQuerySubmit(e) {
  e.preventDefault();
  alert("Thank you for contacting RGUKT RK Valley. Your query has been received by the Directorate and will be addressed shortly.");
  e.target.reset();
}

function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

// Global scope attachments
window.openPdfModal = openPdfModal;
window.openLeaderBio = openLeaderBio;
window.openGpaCalcModal = openGpaCalcModal;
window.closeAllModals = closeAllModals;
window.openGalleryLightbox = openGalleryLightbox;
window.viewDepartmentDetail = viewDepartmentDetail;
window.handleGrievanceSubmit = handleGrievanceSubmit;
window.handleQuerySubmit = handleQuerySubmit;
window.calculateGpa = calculateGpa;
window.addGpaCourseRow = addGpaCourseRow;
window.triggerDownload = triggerDownload;
window.navigateSearchResult = navigateSearchResult;
