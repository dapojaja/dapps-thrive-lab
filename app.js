// Dynamic Portfolio Data
const projects = [
  {
    id: "leadgen-ai",
    category: "builds",
    title: "LeadGen AI SaaS Platform",
    shortDescription: "An AI-powered B2B lead generation app that scrapes prospects, qualifies them using Claude, and drafts personalized outreach.",
    image: "assets/hero_dashboard.jpg",
    technologies: ["Claude 3.5 Sonnet", "Vanilla JS", "Tailwind CSS", "Supabase", "n8n"],
    liveLink: "https://leadgen-ai-demo.netlify.app",
    repoLink: "https://github.com/fellowship-dev/leadgen-ai-platform",
    demoVideo: "https://www.loom.com/share/demo-placeholder",
    problem: "B2B sales teams spend over 15 hours per week manually researching leads on LinkedIn and writing personalized outreach emails, leading to slow sales cycles.",
    solution: "Built a fully functioning web application that automates lead discovery, uses LLMs to analyze company profiles, qualifies prospects based on custom ICPs, and generates high-converting hyper-personalized emails.",
    flow: "User Inputs Target ICP -> System Scrapes Public Data -> Claude Analyzes Lead Fits -> Automatically Generates Draft Sequence -> Pushes to Outbound CRM.",
    impact: "Reduced lead prospecting time by 82% and increased cold email response rates from 2.1% to 8.4%."
  },
  {
    id: "crm-enrichment",
    category: "automation",
    title: "AI CRM Enrichment & Slack Alert Workflow",
    shortDescription: "An n8n workflow that enriches inbound leads using web scraping and LLMs, updating HubSpot and alerting sales in real-time.",
    image: "assets/hero_dashboard.jpg", // Using dashboard placeholder as it shows node workflow
    technologies: ["n8n", "OpenAI GPT-4o", "HubSpot API", "Slack API", "Tavily Search"],
    liveLink: "",
    repoLink: "",
    demoVideo: "https://www.loom.com/share/workflow-demo-placeholder",
    problem: "Inbound leads frequently submit forms with minimal info (just name and email), leaving sales reps unprepared for initial calls or wasting time on manual research.",
    solution: "Designed and implemented an automated n8n workflow. The moment a lead is captured, it triggers a web search for the lead's company, summarizes recent news, extracts funding data, and updates HubSpot before sending a detailed brief to the sales Slack channel.",
    flow: "Webhook Trigger (Form Submit) -> Google Search & News Scraper -> GPT-4o Lead Profiler -> HubSpot API CRM Enricher -> Slack Notification Agent.",
    impact: "Eliminated manual lead research for the sales team. Average response time to high-value leads dropped from 4 hours to under 3 minutes."
  },
  {
    id: "support-router",
    category: "automation",
    title: "Smart Support Ticket Router & Auto-Draft Agent",
    shortDescription: "End-to-end customer support automation that classifies urgency, detects sentiment, and prepares draft replies.",
    image: "assets/hero_dashboard.jpg",
    technologies: ["n8n", "Claude 3.5 Sonnet", "Zendesk API", "PostgreSQL"],
    liveLink: "",
    repoLink: "https://github.com/fellowship-dev/smart-support-router",
    demoVideo: "https://www.loom.com/share/support-demo-placeholder",
    problem: "Support teams struggle with ticket backlogs, leading to long resolution times and customer dissatisfaction.",
    solution: "Developed an AI support routing system. It classifies incoming emails by department, rates sentiment to flag angry clients, extracts key entities (order numbers, account IDs), and drafts context-aware replies for human review.",
    flow: "Inbound Email -> AI Sentiment & Intent Analysis -> Router (Assigns Priority & Category) -> CRM Database Fetch -> Claude Drafts Response -> Agent UI Panel.",
    impact: "Support ticket queue resolution speed increased by 65%, and customer satisfaction (CSAT) scores increased by 14%."
  },
  {
    id: "campaign-engine",
    category: "content",
    title: "Multi-Platform AI Content Campaign",
    shortDescription: "A coordinated AI content generation system that produced 30 days of high-engagement educational content.",
    image: "assets/about_workspace.jpg",
    technologies: ["Midjourney", "ChatGPT (GPT-4)", "Canva API", "Buffer API"],
    liveLink: "https://linkedin.com/posts/fellowship-campaign",
    repoLink: "",
    demoVideo: "",
    problem: "Consistently producing high-quality, on-brand educational content across LinkedIn and Twitter was resource-prohibitive for a lean consulting team.",
    solution: "Engineered an AI-assisted content engine. Curated custom system prompts to generate structured, valuable technical insights, then batch-rendered graphics via templates, and scheduled postings automatically.",
    flow: "Researching Key Topics -> GPT-4 Generating Script & Captions -> Midjourney Generating Custom Hero Visuals -> Template Auto-Assembly -> Automated Publisher.",
    impact: "Successfully generated 30 days of consistent branding, resulting in a 340% increase in LinkedIn profile views and 45+ inbound lead conversations."
  },
  {
    id: "brand-video",
    category: "video-image",
    title: "Generative AI Brand Launch Concept Video",
    shortDescription: "A fully AI-generated brand video concept demonstrating next-generation smart warehouses and supply chain logistics.",
    image: "assets/about_workspace.jpg",
    technologies: ["Runway Gen-2", "Midjourney v6", "ElevenLabs", "CapCut Pro", "Topaz Video AI"],
    liveLink: "https://youtube.com/watch?v=placeholder-video",
    repoLink: "",
    demoVideo: "https://youtube.com/watch?v=placeholder-video",
    problem: "Creating a high-concept marketing video showcasing future logistics technology would cost upwards of $15,000 using traditional 3D rendering and film crews.",
    solution: "Produced an ultra-realistic 60-second video concept using Generative AI tools. Designed scene prompts in Midjourney, animated them using Runway Gen-2, upscaled the resolution using Topaz Video AI, and overlayed synthetic voiceovers.",
    flow: "Storyboarding & Scriptwriting -> Midjourney Concept Art Generation -> Runway Gen-2 Image-to-Video Animation -> ElevenLabs Voiceover Generation -> Final Sequencing & Sound Design.",
    impact: "Delivered a production-ready marketing concept in 4 days at less than 2% of the projected traditional production budget."
  },
  {
    id: "healthai-pod",
    category: "collaborative",
    title: "HealthAI Automated Booking & Audio Engine",
    shortDescription: "A collaborative POD team project building an automated clinic scheduler using AI voice-to-text integrations.",
    image: "assets/hero_dashboard.jpg",
    technologies: ["n8n", "OpenAI Whisper", "Claude 3.5 Sonnet", "Google Calendar API", "Twilio Voice"],
    liveLink: "https://healthai-pod-demo.netlify.app",
    repoLink: "https://github.com/fellowship-pods/healthai-booking-system",
    demoVideo: "https://www.loom.com/share/pod-demo-placeholder",
    problem: "Medical clinic secretaries spend up to 40% of their day answering calls to schedule, reschedule, or cancel appointments, detracting from patient care.",
    solution: "Collaborated in an agile POD team of three to build an automated agent. When patients leave a voice message or interact via an interactive voice system, Whisper transcribes the audio, Claude interprets the scheduling request, and our custom backend books it into Google Calendar.",
    role: "I designed and implemented the central n8n backend integration, error-handling mechanisms for calendar conflicts, and Twilio voice webhook receivers.",
    outcome: "Built and deployed a fully working proof-of-concept that handles appointment creation, updates, and cancellations in under 15 seconds, prompting automated SMS confirmations."
  }
];

const caseStudies = [
  {
    id: "cs-campaign",
    title: "AI Content Campaign Development",
    problem: "Need for consistent, high-quality, multi-platform branded content to drive organic lead generation without hiring an agency.",
    solution: "Created a coordinated AI-generated content pipeline. Utilized fine-tuned prompts for narrative styling, Midjourney for custom vector-style graphics, and automated scheduling systems to deploy content.",
    outcome: "Delivered a fully scheduled, 30-day educational campaign. Organic reach increased by 210% within the first month.",
    businessValue: "Improved marketing efficiency, eliminated agency retainer fees ($3k/month savings), and created a repeatable content generation blueprint."
  },
  {
    id: "cs-product",
    title: "End-to-End AI Product Development",
    problem: "Traditional software development cycles take months to build MVP products, delaying market validation and increasing capital risk.",
    solution: "Designed, developed, and deployed a live AI-powered B2B leads platform in under 2 weeks using low-code tools, custom Vanilla JS code, API integrations, and AI generation tools.",
    outcome: "Successfully launched a functioning MVP that allowed early users to run prospect analysis and receive results in real-time.",
    businessValue: "Accelerated idea validation, minimized development costs by 80%, and secured a working platform ready for early customer feedback."
  },
  {
    id: "cs-productivity",
    title: "AI Productivity Systems",
    problem: "Executives and consultants waste hours daily summarizing market reports, building meeting preparation briefings, and organizing tasks.",
    solution: "Built a suite of personal AI productivity workflows. Automatically aggregates daily news sources, drafts synthesized briefings based on calendar events, and maps out task priorities using LLM reasoning.",
    outcome: "Implemented system across personal and team devices, establishing a centralized productivity command center.",
    businessValue: "Saved an estimated 8.5 hours per week per user, shifting focus from information synthesis to strategic decision-making."
  },
  {
    id: "cs-automation",
    title: "Business Process Automation",
    problem: "Manual customer onboarding workflow was taking 45 minutes per client, involving copying data between three systems, leading to human errors.",
    solution: "Mapped out the onboarding process and automated it via n8n. Used Claude to clean user input data, verify tax details via API, and create directories and accounts automatically.",
    outcome: "Client onboarding time was cut from 45 minutes to 15 seconds. Human data-entry errors were reduced to 0%.",
    businessValue: "Significantly enhanced client experience with instant onboarding, boosted operational capacity, and reduced staff administrative overhead."
  },
  {
    id: "cs-private-ai",
    title: "Private AI Deployment",
    problem: "A finance consulting client required advanced AI assistance but was strictly restricted from uploading client data to public cloud models due to compliance.",
    solution: "Configured and deployed local, private open-source LLMs (Llama 3 and Mistral) on local machines. Integrated a local retrieval-augmented generation (RAG) system using private PDF databases.",
    outcome: "Secure offline AI agent capable of summarizing financial audits and drafting advisory reports without any external internet connection.",
    businessValue: "100% compliance with strict regulatory data privacy standards while unlocking AI productivity gains."
  }
];

const proofOfWorkItems = [
  {
    category: "builds",
    title: "LeadGen AI Application",
    description: "Sleek frontend dashboard with Supabase integration.",
    link: "https://leadgen-ai-demo.netlify.app"
  },
  {
    category: "websites",
    title: "Consultant Portfolio Site",
    description: "This portfolio website, fully responsive and SEO optimized.",
    link: "#"
  },
  {
    category: "social",
    title: "LinkedIn Campaign Launch Post",
    description: "Case study detailing automation benefits, receiving 10k+ impressions.",
    link: "https://linkedin.com/posts/fellowship-campaign"
  },
  {
    category: "articles",
    title: "The Future of Local AI in Enterprise",
    description: "Published breakdown of offline RAG and private Llama 3 deployment.",
    link: "https://medium.com/@placeholder/local-ai-enterprise"
  },
  {
    category: "videos",
    title: "CRM n8n Workflow Demo Video",
    description: "Loom walkthrough showing the n8n data enrichment flow in real-time.",
    link: "https://www.loom.com/share/demo-placeholder"
  },
  {
    category: "images",
    title: "Midjourney Logistics Art Pack",
    description: "Visual assets used in the Generative AI Logistics Video campaign.",
    link: "https://behance.net/placeholder-gallery"
  },
  {
    category: "automation",
    title: "Interactive n8n Flow Diagram",
    description: "Public view of the modular smart routing automation flow.",
    link: "https://n8n.io/workflows/placeholder"
  },
  {
    category: "recordings",
    title: "HealthAI Twilio Integration Demo",
    description: "Screen recording demonstrating voice booking to Google Calendar.",
    link: "https://www.loom.com/share/pod-demo-placeholder"
  }
];

// Document Elements
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initPortfolio();
  initCaseStudies();
  initProofOfWork();
  initContactForm();
});

// Mobile Navigation
function initNavigation() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = mobileMenu.querySelectorAll("a");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    const icon = menuBtn.querySelector("i");
    if (mobileMenu.classList.contains("hidden")) {
      icon.setAttribute("data-lucide", "menu");
    } else {
      icon.setAttribute("data-lucide", "x");
    }
    lucide.createIcons();
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      const icon = menuBtn.querySelector("i");
      icon.setAttribute("data-lucide", "menu");
      lucide.createIcons();
    });
  });
}

// Portfolio Filtering and Modal
function initPortfolio() {
  const grid = document.getElementById("portfolio-grid");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const modal = document.getElementById("project-modal");
  const modalClose = document.getElementById("modal-close");

  // Render project cards
  function renderProjects(filter = "all") {
    grid.innerHTML = "";
    const filteredProjects = filter === "all" 
      ? projects 
      : projects.filter(p => p.category === filter);

    filteredProjects.forEach(project => {
      const card = document.createElement("div");
      card.className = "bg-white border border-slate-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-standard cursor-pointer flex flex-col h-full group";
      card.dataset.id = project.id;
      
      let badgeLabel = "";
      switch(project.category) {
        case "builds": badgeLabel = "App Build"; break;
        case "automation": badgeLabel = "Automation"; break;
        case "content": badgeLabel = "Content"; break;
        case "video-image": badgeLabel = "Gen AI Video/Image"; break;
        case "collaborative": badgeLabel = "POD Collaborative"; break;
      }

      card.innerHTML = `
        <div class="relative overflow-hidden aspect-video bg-slate-100">
          <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover group-hover:scale-105 transition-all duration-300">
          <span class="absolute top-3 left-3 bg-slate-900/90 text-white text-xs font-semibold px-2.5 py-1 rounded shadow-sm">
            ${badgeLabel}
          </span>
        </div>
        <div class="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 class="text-lg font-bold text-slate-900 group-hover:text-blue-800 transition-colors mb-2">${project.title}</h3>
            <p class="text-slate-600 text-sm line-clamp-3 mb-4">${project.shortDescription}</p>
          </div>
          <div>
            <div class="flex flex-wrap gap-1.5 mb-4">
              ${project.technologies.slice(0, 3).map(tech => `
                <span class="bg-slate-50 border border-slate-200 text-slate-600 text-xs px-2 py-0.5 rounded font-medium">${tech}</span>
              `).join('')}
              ${project.technologies.length > 3 ? `<span class="bg-slate-50 border border-slate-200 text-slate-600 text-xs px-2 py-0.5 rounded font-medium">+${project.technologies.length - 3} more</span>` : ''}
            </div>
            <div class="flex items-center text-sm font-semibold text-blue-800 group-hover:translate-x-1 transition-transform">
              View Details <i data-lucide="arrow-right" class="w-4 h-4 ml-1"></i>
            </div>
          </div>
        </div>
      `;

      card.addEventListener("click", () => openProjectModal(project));
      grid.appendChild(card);
    });
    
    lucide.createIcons();
  }

  // Handle filter buttons
  filterButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      filterButtons.forEach(b => b.classList.remove("bg-slate-900", "text-white", "border-slate-900"));
      filterButtons.forEach(b => b.classList.add("bg-white", "text-slate-600", "border-slate-200", "hover:border-slate-300"));
      
      btn.classList.add("bg-slate-900", "text-white", "border-slate-900");
      btn.classList.remove("bg-white", "text-slate-600", "border-slate-200");
      
      renderProjects(btn.dataset.filter);
    });
  });

  // Modal Open
  function openProjectModal(project) {
    const title = document.getElementById("modal-title");
    const badge = document.getElementById("modal-badge");
    const desc = document.getElementById("modal-desc");
    const problemText = document.getElementById("modal-problem");
    const solutionText = document.getElementById("modal-solution");
    const flowSection = document.getElementById("modal-flow-section");
    const flowText = document.getElementById("modal-flow");
    const impactText = document.getElementById("modal-impact");
    const roleSection = document.getElementById("modal-role-section");
    const roleText = document.getElementById("modal-role");
    const techList = document.getElementById("modal-tech");
    const linksSection = document.getElementById("modal-links");
    const modalImg = document.getElementById("modal-img");

    title.innerText = project.title;
    modalImg.src = project.image;
    
    let badgeText = "";
    let badgeClass = "";
    switch(project.category) {
      case "builds": badgeText = "Application Build"; badgeClass = "bg-blue-100 text-blue-800 border-blue-200"; break;
      case "automation": badgeText = "Process Automation"; badgeClass = "bg-emerald-100 text-emerald-800 border-emerald-200"; break;
      case "content": badgeText = "AI Content Campaign"; badgeClass = "bg-amber-100 text-amber-800 border-amber-200"; break;
      case "video-image": badgeText = "Generative Video & Image"; badgeClass = "bg-indigo-100 text-indigo-800 border-indigo-200"; break;
      case "collaborative": badgeText = "POD Collaborative Project"; badgeClass = "bg-purple-100 text-purple-800 border-purple-200"; break;
    }
    badge.innerText = badgeText;
    badge.className = `inline-flex text-xs font-semibold px-2.5 py-1 rounded border ${badgeClass}`;
    
    desc.innerText = project.shortDescription;
    problemText.innerText = project.problem;
    solutionText.innerText = project.solution;

    // Automation Workflow Node Section
    if (project.flow) {
      flowSection.classList.remove("hidden");
      flowText.innerText = project.flow;
    } else {
      flowSection.classList.add("hidden");
    }

    // Business Impact
    impactText.innerText = project.impact;

    // Role (specifically for POD/Collaborative projects)
    if (project.category === "collaborative" && project.role) {
      roleSection.classList.remove("hidden");
      roleText.innerText = project.role;
    } else {
      roleSection.classList.add("hidden");
    }

    // Render Tech List
    techList.innerHTML = project.technologies.map(tech => `
      <span class="bg-slate-100 border border-slate-200 text-slate-800 text-xs px-2.5 py-1 rounded font-medium">${tech}</span>
    `).join('');

    // Dynamic Links
    let linksHtml = "";
    if (project.liveLink) {
      linksHtml += `
        <a href="${project.liveLink}" target="_blank" class="inline-flex items-center justify-center bg-slate-900 text-white text-sm font-semibold px-4 py-2 rounded shadow hover:bg-slate-800 transition-standard">
          <i data-lucide="external-link" class="w-4 h-4 mr-2"></i> Launch Application
        </a>
      `;
    } else {
      linksHtml += `
        <button disabled class="inline-flex items-center justify-center bg-slate-200 text-slate-400 text-sm font-semibold px-4 py-2 rounded cursor-not-allowed">
          <i data-lucide="external-link" class="w-4 h-4 mr-2"></i> Offline Demo
        </button>
      `;
    }

    if (project.repoLink) {
      linksHtml += `
        <a href="${project.repoLink}" target="_blank" class="inline-flex items-center justify-center bg-white border border-slate-300 text-slate-700 text-sm font-semibold px-4 py-2 rounded hover:bg-slate-50 transition-standard">
          <i data-lucide="github" class="w-4 h-4 mr-2"></i> Repository
        </a>
      `;
    }

    if (project.demoVideo) {
      linksHtml += `
        <a href="${project.demoVideo}" target="_blank" class="inline-flex items-center justify-center bg-white border border-slate-300 text-blue-800 text-sm font-semibold px-4 py-2 rounded hover:bg-slate-50 transition-standard">
          <i data-lucide="video" class="w-4 h-4 mr-2"></i> Watch Demo
        </a>
      `;
    }
    
    linksSection.innerHTML = linksHtml;

    modal.classList.remove("hidden");
    document.body.classList.add("modal-open");
    lucide.createIcons();
  }

  // Modal Close
  function closeModal() {
    modal.classList.add("hidden");
    document.body.classList.remove("modal-open");
  }

  modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // Handle escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });

  // Initial render
  renderProjects("all");
}

// Case Studies
function initCaseStudies() {
  const grid = document.getElementById("case-studies-grid");
  const modal = document.getElementById("case-modal");
  const modalClose = document.getElementById("case-modal-close");

  caseStudies.forEach(cs => {
    const card = document.createElement("div");
    card.className = "bg-white border border-slate-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-standard cursor-pointer flex flex-col justify-between group";
    card.innerHTML = `
      <div>
        <div class="flex items-center justify-between mb-4">
          <span class="text-xs font-semibold uppercase tracking-wider text-slate-500">Featured Case Study</span>
          <div class="bg-blue-50 text-blue-800 p-1.5 rounded-full">
            <i data-lucide="trending-up" class="w-4 h-4"></i>
          </div>
        </div>
        <h3 class="text-lg font-bold text-slate-900 group-hover:text-blue-800 transition-colors mb-3">${cs.title}</h3>
        <p class="text-slate-600 text-sm line-clamp-3 mb-4"><span class="font-semibold text-slate-800">Problem:</span> ${cs.problem}</p>
      </div>
      <div class="flex items-center text-sm font-semibold text-blue-800 group-hover:translate-x-1 transition-transform mt-2">
        Read Case Study <i data-lucide="arrow-right" class="w-4 h-4 ml-1"></i>
      </div>
    `;

    card.addEventListener("click", () => openCaseStudyModal(cs));
    grid.appendChild(card);
  });

  function openCaseStudyModal(cs) {
    document.getElementById("case-modal-title").innerText = cs.title;
    document.getElementById("case-modal-problem").innerText = cs.problem;
    document.getElementById("case-modal-solution").innerText = cs.solution;
    document.getElementById("case-modal-outcome").innerText = cs.outcome;
    document.getElementById("case-modal-value").innerText = cs.businessValue;

    modal.classList.remove("hidden");
    document.body.classList.add("modal-open");
    lucide.createIcons();
  }

  function closeCaseModal() {
    modal.classList.add("hidden");
    document.body.classList.remove("modal-open");
  }

  modalClose.addEventListener("click", closeCaseModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeCaseModal();
  });
  
  // Handle escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeCaseModal();
    }
  });

  lucide.createIcons();
}

// Proof of Work Links
function initProofOfWork() {
  const container = document.getElementById("pow-container");

  proofOfWorkItems.forEach(item => {
    const card = document.createElement("a");
    card.href = item.link;
    if (item.link !== "#") {
      card.target = "_blank";
    }
    card.className = "bg-white border border-slate-100 rounded-lg p-5 shadow-sm hover:shadow-md transition-standard group flex flex-col justify-between h-full";
    
    let iconName = "link";
    let catLabel = "";
    switch(item.category) {
      case "builds": iconName = "layout"; catLabel = "Application Build"; break;
      case "websites": iconName = "globe"; catLabel = "Website Build"; break;
      case "social": iconName = "message-circle"; catLabel = "Social Post"; break;
      case "articles": iconName = "file-text"; catLabel = "Published Article"; break;
      case "videos": iconName = "video"; catLabel = "Demo Recording"; break;
      case "images": iconName = "image"; catLabel = "AI Asset"; break;
      case "automation": iconName = "git-branch"; catLabel = "Automation Demo"; break;
      case "recordings": iconName = "film"; catLabel = "Screen Capture"; break;
    }

    card.innerHTML = `
      <div>
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-semibold px-2 py-0.5 bg-slate-50 border border-slate-200 text-slate-500 rounded">${catLabel}</span>
          <div class="text-slate-400 group-hover:text-blue-800 transition-colors">
            <i data-lucide="${iconName}" class="w-5 h-5"></i>
          </div>
        </div>
        <h4 class="font-bold text-slate-900 group-hover:text-blue-800 transition-colors text-sm mb-1">${item.title}</h4>
        <p class="text-slate-600 text-xs">${item.description}</p>
      </div>
      <div class="flex items-center text-xs font-semibold text-blue-800 group-hover:translate-x-1 transition-transform mt-3">
        Verify Link <i data-lucide="chevron-right" class="w-3.5 h-3.5 ml-0.5"></i>
      </div>
    `;

    container.appendChild(card);
  });
  
  lucide.createIcons();
}

// Contact Form and success notification
function initContactForm() {
  const form = document.getElementById("contact-form");
  const notification = document.getElementById("success-notification");
  const notificationClose = document.getElementById("notification-close");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Collect Form Values
    const name = document.getElementById("form-name").value.trim();
    const email = document.getElementById("form-email").value.trim();
    const business = document.getElementById("form-business").value.trim();
    const service = document.getElementById("form-service").value;
    const message = document.getElementById("form-message").value.trim();

    // Simple validation checks
    if (!name || !email || !message) {
      alert("Please fill out all required fields (Name, Email, and Message).");
      return;
    }

    // Success Simulation
    console.log("Form Submitted Successfully:", { name, email, business, service, message });
    form.reset();

    // Show custom banner notification
    notification.classList.remove("hidden");
    notification.classList.add("flex");
    
    // Auto hide after 5 seconds
    setTimeout(() => {
      closeNotification();
    }, 6000);
  });

  function closeNotification() {
    notification.classList.add("hidden");
    notification.classList.remove("flex");
  }

  notificationClose.addEventListener("click", closeNotification);
}
