document.addEventListener("DOMContentLoaded", function () {
  console.log("VijeeraHR HTML Application Initialized.");

  // Mock Data for Courses
  const COURSES_DATA = [
    {
      id: "c-01",
      title: "Certified HR Generalist Masterclass",
      category: "HR Generalist",
      categoryKey: "hr-generalist",
      level: "All Levels",
      duration: "12 Weeks (Weekend / Weekday)",
      mode: "Hybrid",
      rating: "4.9 ★ (342 reviews)",
      shortDesc: "Comprehensive 360° training covering end-to-end HR operations, onboarding, compliance, performance appraisal, and employee lifecycle management.",
      overview: "This signature program prepares you for full-spectrum HR Generalist roles. You will master daily HR operations, policy design, employee engagement, HRIS tools, performance management systems, and statutory compliance.",
      whoShouldJoin: ["Aspiring HR Executives", "Junior HR Professionals seeking promotion", "Career Changers entering Human Resources", "MBA Graduates wanting practical exposure"],
      skillsGained: ["End-to-End Onboarding", "HRIS System Management", "KPI & OKR Design", "Statutory Compliance", "Employee Relations & Grievance"],
      modules: [
        { title: "Module 01 — HR Foundation & Talent Lifecycle", topics: ["Role of Modern HR Generalist", "Drafting Job Descriptions & Offer Letters", "Onboarding Documentation & HRIS Setup"] },
        { title: "Module 02 — Attendance, Leave & Payroll Integration", topics: ["Attendance & Leave Policy Structuring", "Formulas for Gross & Net Pay", "PF, ESI, TDS Basics"] },
        { title: "Module 03 — Performance Appraisal & Employee Engagement", topics: ["Designing KRA & KPI Frameworks", "360-Degree Feedback Methods", "Employee Retention & Engagement Strategies"] },
        { title: "Module 04 — Statutory Compliance & Labour Laws", topics: ["Factory Act & Shops Establishment Act", "POSH Act Compliance & Internal Committee", "Industrial Relations Essentials"] },
        { title: "Module 05 — Capstone Project & HR Audits", topics: ["Simulated HR Department Management", "HR Audit Checklist", "Interview Preparation & Resume Review"] }
      ],
      certificationName: "VijeeraHR Certified HR Generalist Specialist (CHGS)",
      featured: true
    },
    {
      id: "c-02",
      title: "Talent Acquisition & Strategic Sourcing",
      category: "Recruitment",
      categoryKey: "recruitment",
      level: "Intermediate",
      duration: "6 Weeks",
      mode: "Live Online",
      rating: "4.8 ★ (215 reviews)",
      shortDesc: "Master modern recruitment methodologies, Boolean search strings, AI sourcing tools, employer branding, and candidate assessment frameworks.",
      overview: "Transform into a high-demand Talent Acquisition Specialist. Learn to leverage LinkedIn Recruiter, Boolean logic, headhunting strategies, ATS management, and structured behavioral interviewing.",
      whoShouldJoin: ["Recruitment Specialists", "Agency Recruiters transitioning to In-House", "Talent Coordinators"],
      skillsGained: ["Advanced LinkedIn Sourcing", "Boolean & X-Ray Search", "ATS Optimization", "Behavioral Interviewing", "Offer Negotiation"],
      modules: [
        { title: "Module 01 — Strategic Sourcing Architecture", topics: ["Sourcing Channels Matrix", "Crafting Boolean Strings for Niche Roles", "GitHub & StackOverflow Sourcing"] },
        { title: "Module 02 — Candidate Engagement & Interviewing", topics: ["Cold Outreach Email Templates", "STAR Method Behavioral Interviewing", "Candidate Assessment Scorecards"] },
        { title: "Module 03 — ATS & Talent Pipeline Analytics", topics: ["Managing Talent Pipelines", "Time-to-Hire & Cost-per-Hire Metrics", "Employer Brand Storytelling"] }
      ],
      certificationName: "Certified Talent Acquisition Professional (CTAP)",
      featured: true
    },
    {
      id: "c-03",
      title: "Payroll Management & Statutory Compliance",
      category: "Payroll",
      categoryKey: "payroll",
      level: "Intermediate",
      duration: "8 Weeks",
      mode: "Hybrid",
      rating: "4.9 ★ (289 reviews)",
      shortDesc: "Practical hands-on training in payroll calculation formulas, salary structures, PF, ESI, PT, TDS, and modern cloud payroll software.",
      overview: "Master zero-error payroll processing. From CTC breakup design to tax calculations and statutory returns, this program gives complete hands-on mastery over real payroll spreadsheets and software.",
      whoShouldJoin: ["Payroll Executives", "HR Accountants", "Compensation Analysts"],
      skillsGained: ["CTC Structuring & Tax Saving", "Excel Payroll Modeling", "Statutory Filing (PF/ESI/TDS)", "Payroll Software Workflows"],
      modules: [
        { title: "Module 01 — CTC Components & Salary Structuring", topics: ["Basic, HRA, Special Allowance Logic", "Perquisites & Tax Deductions", "Reimbursements & Flexi Benefits"] },
        { title: "Module 02 — Payroll Computations & Excel Formulas", topics: ["Overtime, LOP, Bonus & Gratuity Calculation", "Automated Payroll Excel Sheets", "Monthly Salary Sheet Processing"] },
        { title: "Module 03 — Statutory Returns & Audits", topics: ["Provident Fund ECR Filing", "ESI Monthly Return & Compliance", "TDS Form 16 & Form 24Q Basics"] }
      ],
      certificationName: "Certified Payroll & Statutory Administrator (CPSA)",
      featured: true
    },
    {
      id: "c-04",
      title: "HR Analytics & People Metrics",
      category: "HR Analytics",
      categoryKey: "analytics",
      level: "Advanced",
      duration: "10 Weeks",
      mode: "Live Online",
      rating: "4.9 ★ (198 reviews)",
      shortDesc: "Turn HR data into actionable business insights using PowerBI, Excel, attrition modeling, and predictive workforce analytics.",
      overview: "Become a data-driven HR leader. Build interactive HR dashboards, measure employee net promoter score (eNPS), predict attrition risks, and justify HR budgets with quantitative metrics.",
      whoShouldJoin: ["HR Business Partners", "HR Managers", "Data Analysts entering HR"],
      skillsGained: ["PowerBI HR Dashboarding", "Predictive Attrition Modeling", "Turnover & Absenteeism Metrics", "ROI on L&D Programs"],
      modules: [
        { title: "Module 01 — Fundamentals of HR Analytics", topics: ["Data Sources in HR", "Descriptive vs Predictive Analytics", "HR Metrics Matrix"] },
        { title: "Module 02 — Dashboarding with PowerBI & Excel", topics: ["Data Cleaning & Transformation", "Creating Interactive Visual Dashboards", "Attrition Rate & Flight Risk Drivers"] },
        { title: "Module 03 — Executive Storytelling with Data", topics: ["Translating Metrics into Strategic Decisions", "Presenting ROI to C-Suite", "Data Privacy & Ethical HR AI"] }
      ],
      certificationName: "Certified People Analytics Specialist (CPAS)",
      featured: true
    },
    {
      id: "c-05",
      title: "Strategic HR Business Partnering (HRBP)",
      category: "Strategy",
      categoryKey: "strategy",
      level: "Advanced",
      duration: "10 Weeks",
      mode: "Classroom",
      rating: "4.8 ★ (167 reviews)",
      shortDesc: "Position yourself as a strategic business advisor. Align HR strategy with revenue goals, change management, and organizational design.",
      overview: "Designed for mid-to-senior HR professionals transitioning into strategic HRBP roles. Learn business acumen, workforce planning, change management, and C-suite influence skills.",
      whoShouldJoin: ["Senior HR Managers", "HR Leads", "Talent Directors"],
      skillsGained: ["Strategic Workforce Planning", "Change Management Frameworks", "C-Suite Stakeholder Management", "Org Restructuring"],
      modules: [
        { title: "Module 01 — Business Acumen for HR Leaders", topics: ["Understanding Financial Statements & P&L", "Aligning HR Strategy with Business Goals", "Org Architecture & Agility"] },
        { title: "Module 02 — Change Leadership & Culture Design", topics: ["Kotter's 8-Step Change Model", "Merging Company Cultures during M&A", "Leadership Succession Planning"] }
      ],
      certificationName: "Certified HR Business Partner Leader (CHRBPL)",
      featured: true
    },
    {
      id: "c-06",
      title: "AI Tools & Automation for HR Leaders",
      category: "HR Analytics",
      categoryKey: "analytics",
      level: "Intermediate",
      duration: "4 Weeks",
      mode: "Live Online",
      rating: "4.9 ★ (142 reviews)",
      shortDesc: "Leverage AI chatbots, automated screening, AI prompt engineering, and automated HR workflows to boost productivity by 10x.",
      overview: "Stay ahead in the AI revolution. Learn practical prompt engineering for drafting job specs, generating policy manuals, building automated employee Q&A assistants, and analyzing survey sentiment.",
      whoShouldJoin: ["All HR Professionals", "HR Operations Leads", "Tech-Forward Recruiters"],
      skillsGained: ["HR Prompt Engineering", "AI Job Description Generator", "Sentiment Analysis for Surveys", "Automated Policy Chatbots"],
      modules: [
        { title: "Module 01 — Generative AI in Daily HR Operations", topics: ["Crafting Effective HR Prompts", "Automating Policy Drafting", "Synthetic Candidate Sourcing Strings"] },
        { title: "Module 02 — AI Workflows & Ethical Considerations", topics: ["Building AI-Powered Onboarding Workflows", "Bias Mitigation in AI Screening", "Data Security & Confidentiality"] }
      ],
      certificationName: "AI for HR Professional Certificate (AI-HRP)",
      featured: true
    }
  ];

  // Mock Data for Development Areas
  const DEVELOPMENT_AREAS = [
    {
      id: 1,
      title: "Corporate Training",
      subtitle: "Customized Workforce Transformation",
      icon: "bi-building-gear",
      description: "Tailored 360-degree training solutions designed to elevate organizational productivity, align cross-functional teams, and upgrade enterprise capabilities.",
      keyFeatures: ["Customized Enterprise Curricula", "Behavioral & Operational Workshops", "Measurable Business Impact Metrics", "Post-Training Skills Audits"]
    },
    {
      id: 2,
      title: "One-on-One & Team Coaching",
      subtitle: "Personalized Executive Mentorship",
      icon: "bi-person-badge",
      description: "High-impact individual executive coaching and collaborative team alignment programs focused on leadership presence, conflict resolution, and career progression.",
      keyFeatures: ["1-on-1 Leadership Mentorship", "Team Synergy & Dynamics", "Performance Roadmapping", "Executive Presence Coaching"]
    },
    {
      id: 3,
      title: "Sales & Leadership Consulting",
      subtitle: "Strategic Business Excellence",
      icon: "bi-graph-up-arrow",
      description: "Specialized consulting across sales, marketing, business development, inside sales, and sales excellence to build sustainable growth architectures.",
      keyFeatures: ["Inside Sales Architecture", "Sales Excellence Programs", "Market Expansion Strategy", "Leadership Pipeline Development"]
    },
    {
      id: 4,
      title: "Certification Programs for Young Professionals",
      subtitle: "Practical HR Career Launchpad",
      icon: "bi-award",
      description: "Rigorous, hands-on certification curricula equipping young HR aspirants with practical tools, payroll systems, talent acquisition mastery, and labour law expertise.",
      keyFeatures: ["100% Practical Case Studies", "Real-World HR Tool Stack", "Resume & Mock Interview Prep", "ISO Certified Credential"]
    },
    {
      id: 5,
      title: "Executive Education Programs",
      subtitle: "Advanced Strategic Leadership",
      icon: "bi-mortarboard",
      description: "Senior management leadership and strategic HR Business Partnering masterclasses inspired by premium institutes and global executive frameworks.",
      keyFeatures: ["Strategic HRBP Frameworks", "Organizational Restructuring", "HR Analytics & Metrics", "Global Leadership Benchmarks"]
    }
  ];

  // Mock Data for Certificate Verification
  const MOCK_CERTIFICATES = {
    "VHR-2024-8921": {
      studentName: "Ananya Sharma",
      courseName: "Certified HR Generalist Masterclass",
      issueDate: "October 14, 2024",
      status: "Verified & Authentic",
      grade: "Distinction (A+)",
      isoCertified: "ISO 9001:2015 Verified"
    },
    "VHR-2024-1042": {
      studentName: "Rahul Verma",
      courseName: "Payroll Management & Statutory Compliance",
      issueDate: "November 02, 2024",
      status: "Verified & Authentic",
      grade: "Merit (A)",
      isoCertified: "ISO 9001:2015 Verified"
    },
    "VHR-2024-5510": {
      studentName: "Priyanka Nair",
      courseName: "Strategic HR Business Partnering (HRBP)",
      issueDate: "December 18, 2024",
      status: "Verified & Authentic",
      grade: "Distinction (A+)",
      isoCertified: "ISO 9001:2015 Verified"
    }
  };

  // Render Courses Grid Function
  function renderCourses(category, searchQuery) {
    const container = document.getElementById("coursesGrid");
    if (!container) return;
    container.innerHTML = "";

    searchQuery = (searchQuery || "").toLowerCase().trim();

    const filtered = COURSES_DATA.filter(course => {
      const matchCategory = (category === "all") || (course.categoryKey === category);
      const matchSearch = !searchQuery ||
        course.title.toLowerCase().includes(searchQuery) ||
        course.shortDesc.toLowerCase().includes(searchQuery) ||
        course.category.toLowerCase().includes(searchQuery);
      return matchCategory && matchSearch;
    });

    if (filtered.length === 0) {
      const template = document.getElementById("noCoursesTemplate");
      if (template) {
        container.appendChild(template.content.cloneNode(true));
      }
      return;
    }

    const template = document.getElementById("courseCardTemplate");
    if (!template) return;

    filtered.forEach(course => {
      const card = template.content.cloneNode(true);

      card.querySelector(".card-category").textContent = course.category;
      card.querySelector(".card-rating").textContent = course.rating;
      card.querySelector(".card-title").textContent = course.title;
      card.querySelector(".card-desc").textContent = course.shortDesc;
      card.querySelector(".card-duration").textContent = course.duration;
      card.querySelector(".card-mode").textContent = course.mode;

      const viewBtn = card.querySelector(".btn-view-course");
      if (viewBtn) viewBtn.setAttribute("data-id", course.id);

      const enquireBtn = card.querySelector(".btn-enquire-course");
      if (enquireBtn) enquireBtn.setAttribute("data-title", course.title);

      container.appendChild(card);
    });
  }

  // Render 5 Development Areas Grid
  function renderDevelopmentAreas() {
    const container = document.getElementById("devAreasGrid");
    if (!container) return;
    container.innerHTML = "";

    const template = document.getElementById("devAreaCardTemplate");
    if (!template) return;

    DEVELOPMENT_AREAS.forEach(area => {
      const card = template.content.cloneNode(true);

      card.querySelector(".dev-icon").classList.add(area.icon);
      card.querySelector(".dev-index").textContent = `0${area.id}`;
      card.querySelector(".dev-subtitle").textContent = area.subtitle;
      card.querySelector(".dev-title").textContent = area.title;
      card.querySelector(".dev-desc").textContent = area.description;

      const featuresList = card.querySelector(".dev-features");
      featuresList.innerHTML = "";
      area.keyFeatures.forEach(f => {
        featuresList.insertAdjacentHTML('beforeend', `<li class="mb-1"><i class="bi bi-check-circle-fill text-gold me-2"></i>${f}</li>`);
      });

      const devModalBtn = card.querySelector(".btn-dev-area-modal");
      if (devModalBtn) devModalBtn.setAttribute("data-id", area.id);

      const enquireBtn = card.querySelector(".btn-enquire-course");
      if (enquireBtn) enquireBtn.setAttribute("data-title", area.title);

      container.appendChild(card);
    });
  }

  // Show Course Detail Modal
  function showCourseDetailModal(course) {
    document.getElementById("modalCourseTitle").textContent = course.title;
    document.getElementById("modalCourseCategory").textContent = course.category;
    document.getElementById("modalCourseDuration").innerHTML = `<i class="bi bi-clock text-gold me-1"></i>${course.duration} | <i class="bi bi-laptop text-gold ms-2 me-1"></i>${course.mode}`;
    document.getElementById("modalCourseOverview").textContent = course.overview;
    document.getElementById("modalCourseCertification").textContent = course.certificationName;

    // Audience
    const audience = document.getElementById("modalCourseAudience");
    audience.innerHTML = "";
    course.whoShouldJoin.forEach(item => {
      audience.insertAdjacentHTML('beforeend', `<li class="mb-1"><i class="bi bi-check2-circle text-gold me-2"></i>${item}</li>`);
    });

    // Skills
    const skills = document.getElementById("modalCourseSkills");
    skills.innerHTML = "";
    course.skillsGained.forEach(skill => {
      skills.insertAdjacentHTML('beforeend', `<span class="badge badge-gold me-1 mb-2">${skill}</span>`);
    });

    // Modules Accordion
    const modules = document.getElementById("modalCourseModules");
    modules.innerHTML = "";
    course.modules.forEach((mod, idx) => {
      modules.insertAdjacentHTML('beforeend', `
        <div class="accordion-item bg-vijeera-card border border-secondary border-opacity-25 mb-2 rounded-3 overflow-hidden">
          <h2 class="accordion-header" id="heading${idx}">
            <button class="accordion-button collapsed bg-vijeera-card text-white fw-bold small" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${idx}">
              ${mod.title}
            </button>
          </h2>
          <div id="collapse${idx}" class="accordion-collapse collapse" data-bs-parent="#modalCourseModules">
            <div class="accordion-body bg-vijeera-dark text-secondary small">
              <ul class="mb-0 ps-3">
                ${mod.topics.map(t => `<li class="mb-1">${t}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      `);
    });

    // Set Enrol Button title
    const enrolBtn = document.getElementById("modalBtnEnrol");
    if (enrolBtn) enrolBtn.dataset.title = course.title;

    showBootstrapModal('courseDetailModal');
  }

  // Show Development Area Modal
  function showDevAreaModal(area) {
    document.getElementById("modalDevTitle").textContent = area.title;
    document.getElementById("modalDevSubtitle").textContent = area.subtitle;
    document.getElementById("modalDevDesc").textContent = area.description;

    const highlights = document.getElementById("modalDevHighlights");
    highlights.innerHTML = "";
    area.keyFeatures.forEach(f => {
      highlights.insertAdjacentHTML('beforeend', `
        <div class="d-flex align-items-start gap-2 mb-2 text-secondary small">
          <i class="bi bi-check-circle-fill text-gold mt-1"></i>
          <span>${f}</span>
        </div>
      `);
    });

    const enquireBtn = document.getElementById("modalDevBtnEnquire");
    if (enquireBtn) enquireBtn.dataset.title = area.title;

    showBootstrapModal('devAreaModal');
  }

  // Certificate Verification Handler
  function verifyCertificate() {
    const input = document.getElementById("certInput");
    const code = input ? input.value.trim().toUpperCase() : "";
    const resultBox = document.getElementById("certResultBox");
    if (!resultBox) return;

    resultBox.innerHTML = "";

    if (!code) {
      const warningTemplate = document.getElementById("certWarningTemplate");
      if (warningTemplate) {
        resultBox.appendChild(warningTemplate.content.cloneNode(true));
      }
      return;
    }

    const cert = MOCK_CERTIFICATES[code];

    if (cert) {
      const certTemplate = document.getElementById("certFoundTemplate");
      if (certTemplate) {
        const certUI = certTemplate.content.cloneNode(true);
        certUI.querySelector(".cert-status").innerHTML = `<i class="bi bi-shield-check me-1"></i>${cert.status}`;
        certUI.querySelector(".cert-iso").textContent = cert.isoCertified;
        certUI.querySelector(".cert-name").textContent = cert.studentName;
        certUI.querySelector(".cert-code").textContent = code;
        certUI.querySelector(".cert-course").textContent = cert.courseName;
        certUI.querySelector(".cert-date").textContent = cert.issueDate;
        certUI.querySelector(".cert-grade").textContent = cert.grade;
        resultBox.appendChild(certUI);
      }
    } else {
      const certGenericTemplate = document.getElementById("certGenericTemplate");
      if (certGenericTemplate) {
        const genericUI = certGenericTemplate.content.cloneNode(true);
        genericUI.querySelector(".cert-code").textContent = code;
        resultBox.appendChild(genericUI);
      }
    }
  }

  // --- Initial Execution & Event Binding --- //

  // Initial renders
  renderCourses("all", "");
  renderDevelopmentAreas();

  // Category Tab Filter
  document.querySelectorAll("#courseFilterTabs .nav-link").forEach(tab => {
    tab.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelectorAll("#courseFilterTabs .nav-link").forEach(t => t.classList.remove("active"));
      this.classList.add("active");

      const category = this.dataset.category;
      const searchInput = document.getElementById("courseSearchInput");
      const searchQuery = searchInput ? searchInput.value : "";
      renderCourses(category, searchQuery);
    });
  });

  // Course Live Search Input
  const searchInput = document.getElementById("courseSearchInput");
  if (searchInput) {
    searchInput.addEventListener("keyup", function () {
      const activeTab = document.querySelector("#courseFilterTabs .nav-link.active");
      const activeCategory = activeTab ? activeTab.dataset.category : "all";
      const searchQuery = this.value;
      renderCourses(activeCategory, searchQuery);
    });
  }

  // Event delegation for dynamically appended elements
  document.addEventListener("click", function (e) {
    // View Course Details
    const viewBtn = e.target.closest(".btn-view-course");
    if (viewBtn) {
      const courseId = viewBtn.dataset.id;
      const course = COURSES_DATA.find(c => c.id === courseId);
      if (course) {
        showCourseDetailModal(course);
      }
      return;
    }

    // Open Enquiry Modal
    const enquireBtn = e.target.closest(".btn-enquire-course");
    if (enquireBtn) {
      const courseTitle = enquireBtn.dataset.title || "";
      if (courseTitle) {
        const select = document.getElementById("enquiryCourseSelect");
        if (select) select.value = courseTitle;
      }
      showBootstrapModal('enquiryModal');
      return;
    }

    // Development Area Learn More
    const devBtn = e.target.closest(".btn-dev-area-modal");
    if (devBtn) {
      const areaId = parseInt(devBtn.dataset.id, 10);
      const area = DEVELOPMENT_AREAS.find(a => a.id === areaId);
      if (area) {
        showDevAreaModal(area);
      }
      return;
    }

    // Smooth Scroll Anchor Links
    const anchor = e.target.closest('a[href^="#"]');
    if (anchor) {
      const targetId = anchor.getAttribute('href');
      if (targetId && targetId !== '#') {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          window.scrollTo({
            top: target.getBoundingClientRect().top + window.pageYOffset - 80,
            behavior: 'smooth'
          });
        }
      }
    }
  });

  // Certificate Verification Logic
  const verifyBtn = document.getElementById("btnVerifyCert");
  if (verifyBtn) {
    verifyBtn.addEventListener("click", function () {
      verifyCertificate();
    });
  }

  const certInput = document.getElementById("certInput");
  if (certInput) {
    certInput.addEventListener("keypress", function (e) {
      if (e.which === 13 || e.keyCode === 13) {
        verifyCertificate();
      }
    });
  }

  // Enquiry Form Handler
  const enquiryForm = document.getElementById("enquiryForm");
  if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("enquiryName").value;
      const email = document.getElementById("enquiryEmail").value;
      const phone = document.getElementById("enquiryPhone").value;
      const courseSelect = document.getElementById("enquiryCourseSelect");
      const course = courseSelect ? courseSelect.value : "";

      if (!name || !email || !phone) {
        alert("Please fill in all required fields.");
        return;
      }

      // Hide Modal
      hideBootstrapModal('enquiryModal');

      // Reset Form
      this.reset();

      // Show Success Alert Toast
      const alertText = document.getElementById("enquiryAlertText");
      if (alertText) {
        alertText.textContent = `Thank you ${name}! Your enquiry for "${course || 'VijeeraHR Programs'}" has been submitted successfully. Our admission advisor will call you within 2 business hours.`;
      }

      const toastEl = document.getElementById('successToast');
      if (toastEl && window.bootstrap) {
        const toast = new window.bootstrap.Toast(toastEl);
        toast.show();
      }
    });
  }

  // Intersection Observer for Scroll Reveal Entrance Effects
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      revealObserver.observe(el);
    });
  } else {
    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      el.classList.add('is-visible');
    });
  }
});


// --- VijeeraHR Global Auth & Dashboard Script --- //

let activeRoleFilter = "ALL";

document.addEventListener("DOMContentLoaded", function () {
  initializeSession();
  bindEvents();
});

// Initialize session and route appropriately based on current page/panels
function initializeSession() {
  const currentUser = getCurrentUser();
  const mainContent = document.getElementById("mainContent");
  const adminPanel = document.getElementById("adminPanel");
  const userPanel = document.getElementById("userPanel");

  // Single-Page Dynamic View Routing (if loaded on index.html with all sections)
  if (mainContent && adminPanel && userPanel) {
    if (currentUser) {
      showPage(currentUser.role === "ADMIN" ? "admin" : "user");
    } else {
      showPage("main");
    }
  } else if (mainContent) {
    // If only main content exists on this page
    mainContent.style.display = "block";
  }

  // Populate Standalone Admin Dashboard
  if (adminPanel && !mainContent) {
    if (!currentUser || currentUser.role !== "ADMIN") {
      window.location.href = "index.html";
      return;
    }
    loadAdminData();
  }

  // Populate Standalone User Dashboard
  if (userPanel && !mainContent) {
    if (!currentUser) {
      window.location.href = "index.html";
      return;
    }
    loadUserData();
  }
}

// Global Event Listeners
function bindEvents() {
  // Authentication Forms
  const regForm = document.getElementById("registerForm");
  if (regForm) regForm.addEventListener("submit", handleRegistration);

  const loginForm = document.getElementById("loginForm");
  if (loginForm) loginForm.addEventListener("submit", handleLogin);

  // Admin Modal: Create User Form
  const adminAddForm = document.getElementById("adminAddUserForm");
  if (adminAddForm) adminAddForm.addEventListener("submit", handleAdminAddUser);

  // Global Logout Action
  const btnAdminLogout = document.getElementById("btnLogoutAdmin");
  if (btnAdminLogout) btnAdminLogout.addEventListener("click", handleLogout);

  const btnUserLogout = document.getElementById("btnLogoutUser");
  if (btnUserLogout) btnUserLogout.addEventListener("click", handleLogout);

  // Admin Live Search Filter
  const userSearchInput = document.getElementById("userSearchInput");
  if (userSearchInput) userSearchInput.addEventListener("input", handleAdminSearch);

  // Admin Role Filter Buttons (All / Users / Admins)
  document.addEventListener("click", function (e) {
    const filterBtn = e.target.closest(".filter-role-btn");
    if (filterBtn) {
      document.querySelectorAll(".filter-role-btn").forEach(btn => btn.classList.remove("active"));
      filterBtn.classList.add("active");
      activeRoleFilter = filterBtn.dataset.role;
      renderAdminUserTable();
    }
  });
}

// Utility Helpers for LocalStorage Management
function getUsers() {
  const defaultUsers = [
    { name: "System Admin", email: "admin@vijeerahr.com", password: "admin", role: "ADMIN", status: "Active" },
    { name: "Rahul Verma", email: "rahul@example.com", password: "123", role: "USER", status: "Active" },
    { name: "Ananya Sharma", email: "ananya@example.com", password: "123", role: "USER", status: "Active" }
  ];
  return JSON.parse(localStorage.getItem("vijeera_users")) || defaultUsers;
}

function saveUsers(users) {
  localStorage.setItem("vijeera_users", JSON.stringify(users));
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem("vijeera_current_user")) || null;
}

function setCurrentUser(user) {
  localStorage.setItem("vijeera_current_user", JSON.stringify(user));
}

function clearCurrentUser() {
  localStorage.removeItem("vijeera_current_user");
}

// Single-Page View Controller
function showPage(page) {
  const mainContent = document.getElementById("mainContent");
  const adminPanel = document.getElementById("adminPanel");
  const userPanel = document.getElementById("userPanel");

  if (mainContent) mainContent.style.display = "none";
  if (adminPanel) adminPanel.style.display = "none";
  if (userPanel) userPanel.style.display = "none";

  if (page === "admin" && adminPanel) {
    adminPanel.classList.remove("d-none");
    adminPanel.style.display = "block";
    loadAdminData();
  } else if (page === "user" && userPanel) {
    userPanel.classList.remove("d-none");
    userPanel.style.display = "block";
    loadUserData();
  } else if (mainContent) {
    mainContent.classList.remove("d-none");
    mainContent.style.display = "block";
  }
}

// Load and Display Admin Dashboard Data & Metrics
function loadAdminData() {
  const currentUser = getCurrentUser();

  if (currentUser) {
    const welcomeEl = document.getElementById("adminWelcomeName");
    if (welcomeEl) welcomeEl.textContent = currentUser.name;
  }

  updateAdminStats();
  renderAdminUserTable();
}

// Calculate Summary Analytics Cards
function updateAdminStats() {
  const users = getUsers();
  const total = users.length;
  const admins = users.filter((u) => u.role === "ADMIN").length;
  const standardUsers = users.filter((u) => u.role === "USER").length;
  const activeUsers = users.filter((u) => (u.status || "Active") === "Active").length;

  const totalEl = document.getElementById("statTotalUsers");
  const adminEl = document.getElementById("statAdminCount");
  const standardEl = document.getElementById("statStandardUsers");
  const activeEl = document.getElementById("statActiveUsers");

  if (totalEl) totalEl.textContent = total;
  if (adminEl) adminEl.textContent = admins;
  if (standardEl) standardEl.textContent = standardUsers;
  if (activeEl) activeEl.textContent = activeUsers;
}

// Render Users Directory Table
function renderAdminUserTable() {
  const users = getUsers();
  const searchInput = document.getElementById("userSearchInput");
  const searchQuery = (searchInput ? searchInput.value : "").toLowerCase().trim();
  const tbody = document.getElementById("adminUserTableBody");

  if (!tbody) return;
  tbody.innerHTML = "";

  const filteredUsers = users.filter((u) => {
    const matchesSearch =
      u.name.toLowerCase().includes(searchQuery) ||
      u.email.toLowerCase().includes(searchQuery) ||
      u.role.toLowerCase().includes(searchQuery);
    const matchesRole = activeRoleFilter === "ALL" || u.role === activeRoleFilter;
    return matchesSearch && matchesRole;
  });

  if (filteredUsers.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="5" class="text-center text-muted py-4">
          <i class="bi bi-folder-x fs-3 d-block mb-2 text-gold"></i>
          No user records matched your criteria.
        </td>
      </tr>
    `;
    return;
  }

  filteredUsers.forEach((u, idx) => {
    const status = u.status || "Active";
    const isSuspended = status === "Suspended";

    const roleBadge =
      u.role === "ADMIN"
        ? `<span class="badge bg-danger text-uppercase px-2 py-1"><i class="bi bi-shield-fill me-1"></i>ADMIN</span>`
        : `<span class="badge bg-primary text-uppercase px-2 py-1"><i class="bi bi-person-fill me-1"></i>USER</span>`;

    const statusBadge = isSuspended
      ? `<span class="badge bg-secondary text-uppercase px-2 py-1"><i class="bi bi-slash-circle me-1"></i>Suspended</span>`
      : `<span class="badge bg-success bg-opacity-25 text-success border border-success px-2 py-1"><i class="bi bi-check-circle me-1"></i>Active</span>`;

    tbody.insertAdjacentHTML('beforeend', `
      <tr>
        <td class="px-3 fw-bold text-muted">${idx + 1}</td>
        <td class="fw-semibold text-light">${u.name}</td>
        <td class="text-secondary small">${u.email}</td>
        <td>${roleBadge}</td>
        <td>${statusBadge}</td>
      </tr>
    `);
  });
}

// Admin Live Search Handler
function handleAdminSearch() {
  renderAdminUserTable();
}

// Admin Modal: Create New User Handler
function handleAdminAddUser(e) {
  e.preventDefault();
  const name = document.getElementById("adminAddName").value.trim();
  const email = document.getElementById("adminAddEmail").value.trim();
  const password = document.getElementById("adminAddPassword").value.trim();
  const roleSelect = document.getElementById("adminAddRole");
  const role = roleSelect ? roleSelect.value : "USER";

  if (!name || !email || !password) {
    alert("Please fill in all required fields.");
    return;
  }

  let users = getUsers();
  if (users.some((u) => u.email === email)) {
    alert("An account with this email address already exists.");
    return;
  }

  users.push({ name, email, password, role, status: "Active" });
  saveUsers(users);

  logActivity(`Created new ${role} user: ${email}`);

  // Hide Add User Modal
  hideBootstrapModal("addUserModal");

  this.reset();
  updateAdminStats();
  renderAdminUserTable();
}

// System Event Logger
function logActivity(message) {
  const time = new Date().toLocaleTimeString();
  const list = document.getElementById("activityLogList");
  if (list) {
    list.insertAdjacentHTML('afterbegin', `
      <li class="py-1 border-bottom border-secondary border-opacity-10">
        <span class="text-gold">[${time}]</span> ${message}
      </li>
    `);
  }
}

// Load and Display User Dashboard Data
function loadUserData() {
  const currentUser = getCurrentUser();

  if (currentUser) {
    const welcomeEl = document.getElementById("userWelcomeName");
    const profileName = document.getElementById("userProfileName");
    const profileEmail = document.getElementById("userProfileEmail");
    const profileRole = document.getElementById("userProfileRole");

    if (welcomeEl) welcomeEl.textContent = currentUser.name || "Student";
    if (profileName) profileName.textContent = currentUser.name || "N/A";
    if (profileEmail) profileEmail.textContent = currentUser.email || "N/A";
    if (profileRole) profileRole.textContent = currentUser.role || "USER";
  }
}

// Public Form Handler: Registration
function handleRegistration(e) {
  e.preventDefault();
  const name = document.getElementById("regName").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("regPassword").value.trim();
  const roleSelect = document.getElementById("regRole");
  const role = roleSelect ? roleSelect.value : "USER";

  if (!name || !email || !password) {
    alert("Please fill in all required fields.");
    return;
  }

  const existingUsers = getUsers();
  if (existingUsers.some((u) => u.email === email)) {
    alert("An account with this email address already exists.");
    return;
  }

  // Save registration details with explicitly selected role
  existingUsers.push({ name, email, password, role, status: "Active" });
  saveUsers(existingUsers);

  // Hide Register Modal
  hideBootstrapModal("registerModal");

  this.reset();
  alert(`Account registered successfully as ${role}! Please log in.`);

  // Open Login Modal automatically
  showBootstrapModal("loginModal");
}

// Public Form Handler: Login
function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  const users = getUsers();
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    setCurrentUser(user);

    // Hide Login Modal
    hideBootstrapModal("loginModal");

    this.reset();

    const mainContent = document.getElementById("mainContent");
    const adminPanel = document.getElementById("adminPanel");
    const userPanel = document.getElementById("userPanel");

    // Check routing type (Single Page vs Multi-file Page)
    if (adminPanel && userPanel && mainContent) {
      showPage(user.role === "ADMIN" ? "admin" : "user");
    } else {
      window.location.href = user.role === "ADMIN" ? "admin.html" : "UserPanel.html";
    }
  } else {
    alert("Invalid email address or password.");
  }
}

// Global Logout Handler
function handleLogout(e) {
  e.preventDefault();
  clearCurrentUser();

  const mainContent = document.getElementById("mainContent");
  const adminPanel = document.getElementById("adminPanel");
  const userPanel = document.getElementById("userPanel");

  if (mainContent && adminPanel && userPanel) {
    showPage("main");
  } else {
    window.location.href = "index.html";
  }
}

// Modal Helper Functions to avoid Bootstrap instance errors
function hideBootstrapModal(modalId) {
  const el = document.getElementById(modalId);
  if (el && window.bootstrap) {
    const instance = window.bootstrap.Modal.getInstance(el) || new window.bootstrap.Modal(el);
    instance.hide();
  }
}

function showBootstrapModal(modalId) {
  const el = document.getElementById(modalId);
  if (el && window.bootstrap) {
    const instance = window.bootstrap.Modal.getInstance(el) || new window.bootstrap.Modal(el);
    instance.show();
  }
}