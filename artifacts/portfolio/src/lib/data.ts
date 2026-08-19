import project1Url from "../assets/project-1.png";
import project2Url from "../assets/project-2.png";
import project3Url from "../assets/project-3.png";
import project4Url from "../assets/project-4.png";
import snippet1Url from "../assets/snippet-1.png";
import snippet2Url from "../assets/snippet-2.png";
import snippet3Url from "../assets/snippet-3.png";
import snippet4Url from "../assets/snippet-4.png";
import snippet5Url from "../assets/snippet-5.png";
import snippet6Url from "../assets/snippet-6.png";
import snippet7Url from "../assets/snippet-7.png";
import snippet8Url from "../assets/snippet-8.png";
import graphic1Url from "../assets/graphic-1.jpg";
import graphic2Url from "../assets/graphic-2.jpg";
import graphic3Url from "../assets/graphic-3.jpg";
import graphic4Url from "../assets/graphic-4.jpg";

export interface GraphicDesignProject {
  id: number;
  num: string;
  slug: string;
  category: string;
  tag: string;
  title: string;
  subtitle: string;
  challenge: string;
  approach: string;
  impact: string;
  image: string;
  accentColor: string;
  year: string;
  client?: string;
  tools: string[];
  deliverables: string[];
  colorPalette: { name: string; hex: string }[];
  typography: { role: string; font: string }[];
  details: {
    overview: string;
    keyFeatures: string[];
    brandAttributes: string[];
  };
}

export const graphicDesignProjects: GraphicDesignProject[] = [
  {
    id: 101,
    num: "01",
    slug: "aaranya-cafe",
    category: "Brand Identity",
    tag: "Visual Identity & Packaging",
    title: "Aaranya Café",
    subtitle: "Brand Identity & Packaging System",
    challenge: "The café needed a distinctive visual identity that felt warm, modern, and memorable.",
    approach: "Created a cohesive logo, color palette, typography, packaging, and brand assets.",
    impact: "Built a consistent brand system that works across digital and physical touchpoints.",
    image: graphic1Url,
    accentColor: "bg-[#FFD6A0]",
    year: "2025",
    client: "Aaranya Coffee Roasters",
    tools: ["Adobe Illustrator", "Photoshop", "Figma", "InDesign"],
    deliverables: [
      "Logo Suite & Mark",
      "Brand Guidelines Manual",
      "Color & Material Palette",
      "Coffee Cups & Sleeve Packaging",
      "Takeaway Bags & Seal Labels",
      "Dine-in Menu & Table Cards",
      "Digital & Social Media Assets"
    ],
    colorPalette: [
      { name: "Burnt Sienna", hex: "#B86A4C" },
      { name: "Warm Beige", hex: "#F3E5DC" },
      { name: "Dark Roast", hex: "#3C2A21" },
      { name: "Ochre Sun", hex: "#D59F58" }
    ],
    typography: [
      { role: "Primary Headline", font: "Groundwell Display Bold" },
      { role: "Body & Specs", font: "Source Code Pro / Inter" }
    ],
    details: {
      overview: "Aaranya Café required an authentic brand presence that communicated artisanal quality, cozy warmth, and contemporary urban aesthetics. The brand identity bridges organic earthy tones with high-contrast graphic elements.",
      keyFeatures: [
        "Hand-crafted logotype with subtle coffee bean micro-curves",
        "Sustainable kraft paper material specs for 100% compostable packaging",
        "Flexible grid system for social campaigns and seasonal menus",
        "Custom icon set for coffee roast levels and tasting notes"
      ],
      brandAttributes: ["Warm", "Authentic", "Modern", "Memorable", "Crafted"]
    }
  },
  {
    id: 102,
    num: "02",
    slug: "tech-product-launch",
    category: "Marketing Campaign",
    tag: "Digital Campaign & Creatives",
    title: "Tech Product Launch",
    subtitle: "Integrated Digital Marketing Campaign",
    challenge: "A new tech product needed to stand out in a crowded digital market.",
    approach: "Developed a campaign system with social posts, ads, banners, and promotional creatives.",
    impact: "Created a consistent visual language that communicates the product quickly and clearly.",
    image: graphic2Url,
    accentColor: "bg-[#C8B8FF]",
    year: "2025",
    client: "Synapse Technologies",
    tools: ["Photoshop", "After Effects", "Figma", "Illustrator"],
    deliverables: [
      "Campaign Visual Strategy",
      "Social Media Motion Graphics",
      "High-Converting Ad Banners",
      "Mobile Screen Promotion Ads",
      "Billboard & Metro Posters",
      "Email Launch Templates",
      "Press Kit & Media Assets"
    ],
    colorPalette: [
      { name: "Neon Cyan", hex: "#00F0FF" },
      { name: "Deep Violet", hex: "#7000FF" },
      { name: "Midnight Black", hex: "#0B0C10" },
      { name: "Electric Blue", hex: "#1F51FF" }
    ],
    typography: [
      { role: "Headline", font: "Syne ExtraBold / Helvetica Now" },
      { role: "Body", font: "JetBrains Mono" }
    ],
    details: {
      overview: "Designed a high-decibel digital marketing system for a futuristic tech product launch. The campaign cut through market noise with high-contrast neon gradients, bold kinetic typography, and motion ad formats.",
      keyFeatures: [
        "Modular ad template system optimized for 1:1, 9:16, and 16:9 formats",
        "High-energy motion templates for Instagram Reels and TikTok",
        "3D product placement graphics with lighting highlights",
        "Consistent brand messaging hierarchy across all digital touchpoints"
      ],
      brandAttributes: ["Bold", "Futuristic", "High-Energy", "Disruptive", "Clear"]
    }
  },
  {
    id: 103,
    num: "03",
    slug: "annalakshmi-packaging",
    category: "Packaging Design",
    tag: "Brand & Eco Packaging",
    title: "Annalakshmi",
    subtitle: "Homemade Food Experience & Packaging",
    challenge: "The brand needed packaging that reflected its homemade food experience while remaining practical for delivery.",
    approach: "Designed food boxes, labels, delivery bags, menus, and promotional materials around one visual identity.",
    impact: "Strengthened brand recognition and created a more professional customer experience.",
    image: graphic3Url,
    accentColor: "bg-[#B8F0A0]",
    year: "2024",
    client: "Annalakshmi Foods",
    tools: ["Illustrator", "Photoshop", "InDesign"],
    deliverables: [
      "Custom Eco Meal Boxes",
      "Branded Kraft Delivery Bags",
      "Tamper-Evident Label Seals",
      "Sauce Jar & Chutney Labels",
      "Folding Menu Cards",
      "Promotional Sticker Sheet",
      "Delivery Rider Kit & Apparel"
    ],
    colorPalette: [
      { name: "Terracotta Red", hex: "#9E2A2B" },
      { name: "Golden Ochre", hex: "#E9B034" },
      { name: "Eco Kraft", hex: "#C4A482" },
      { name: "Deep Maroon", hex: "#541212" }
    ],
    typography: [
      { role: "Brand Title", font: "Rozha One / Serif Display" },
      { role: "Body Text", font: "Plus Jakarta Sans" }
    ],
    details: {
      overview: "Annalakshmi needed a packaging system that felt like receiving a home-cooked meal prepared with care. We combined traditional motif art with heat-resistant, spill-proof eco-friendly packaging materials.",
      keyFeatures: [
        "Grease-proof, recyclable paperboard meal boxes with clear windows",
        "Heritage motif patterns communicating homemade authentic recipe tradition",
        "Color-coded labels for diet preferences (Veg / Non-Veg / Vegan)",
        "Sturdy kraft bags designed for zero-spill delivery transportation"
      ],
      brandAttributes: ["Homemade", "Nourishing", "Authentic", "Eco-Friendly", "Premium"]
    }
  },
  {
    id: 104,
    num: "04",
    slug: "annual-report-editorial",
    category: "Editorial Design",
    tag: "Editorial & Data Visualization",
    title: "Annual Report",
    subtitle: "Publication & Financial Data Design",
    challenge: "Complex business information needed to become easier and more engaging to read.",
    approach: "Used a structured grid, typography hierarchy, infographics, and data visualization.",
    impact: "Transformed dense information into a clear, organized, and visually engaging publication.",
    image: graphic4Url,
    accentColor: "bg-primary",
    year: "2024",
    client: "Global Innovations Inc.",
    tools: ["InDesign", "Illustrator", "Figma", "Photoshop"],
    deliverables: [
      "64-Page Print Publication",
      "Interactive Digital PDF / E-Book",
      "Executive Summary Digest",
      "Custom Infographics & Charts",
      "Financial Data Tables",
      "Iconography & Data Tokens",
      "Social Highlights Cards"
    ],
    colorPalette: [
      { name: "Corporate Navy", hex: "#0F2537" },
      { name: "Teal Highlight", hex: "#00A896" },
      { name: "Clean Slate", hex: "#F4F6F8" },
      { name: "Electric Cyan", hex: "#028090" }
    ],
    typography: [
      { role: "Headlines", font: "Inter Tight Black" },
      { role: "Financial Tables & Body", font: "Roboto Mono / Inter" }
    ],
    details: {
      overview: "Transformed dense financial statements, governance audits, and corporate strategy data into an inviting 64-page publication. The layout uses a strict 12-column grid, generous whitespace, and intuitive data graphics.",
      keyFeatures: [
        "12-column editorial grid balancing text, financial tables, and photography",
        "Color-coded section dividers for effortless navigation across quarterly reports",
        "Custom charts and infographics replacing dry spreadsheet tables",
        "Accessible contrast and typography scaling optimized for print and screen PDF"
      ],
      brandAttributes: ["Structured", "Transparent", "Engaging", "Authoritative", "Clean"]
    }
  }
];

export const designSnippets = [
  {
    title: "Onboarding Flow",
    tag: "UX",
    color: "bg-primary",
    image: snippet1Url,
    year: "2024",
    description:
      "A 5-step onboarding sequence that reduced drop-off by 40%. Each screen does exactly one job — no cognitive overload, no surprise asks.",
    tools: ["Figma"],
    trends: [
      "Progressive disclosure — reveal complexity only when needed",
      "Celebratory micro-moments at each milestone to maintain momentum",
      "Skip-friendly steps with persistent progress indicator",
      "Skeleton screens to mask async data loads on first render",
    ],
  },
  {
    title: "Data Dashboard",
    tag: "UI",
    color: "bg-secondary",
    image: snippet2Url,
    year: "2024",
    description:
      "A dense analytics UI for investment analysts. The goal: maximum information at a glance without triggering cognitive fatigue.",
    tools: ["Figma"],
    trends: [
      "Dark-mode-first — reduces eye strain during marathon sessions",
      "Sparklines and inline charts for at-a-glance trend reading",
      "Contextual tooltips instead of a separate legend",
      "Controlled data density — scannable rows, not walls of text",
    ],
  },
];

export const projects = [
  {
    id: 1,
    slug: "worksphere",
    category: "Enterprise SaaS",
    projectType: "Team Project",
    title: "WORKSPHERE",
    subtitle: "Enterprise Employee Experience Platform",
    image: project2Url,
    processImage: snippet2Url,
    finalOutputImage: project1Url,
    accentColor: "bg-secondary",
    year: "2026",
    tags: ["Figma", "FigJam", "Photoshop", "Replit AI", "Antigravity", "ChatGPT", "Claude", "Figma AI"],
    role: "UI UX Designer",
    duration: "8 Weeks",
    tools: ["Figma", "FigJam", "Photoshop"],
    aiTools: ["Replit AI", "Antigravity", "ChatGPT", "Claude", "Figma AI"],
    platform: "Web & Mobile Ecosystem",
    shortDesc: "Consolidated fragmented employee workflows across 8 modules into a unified platform, reducing tool switching and making everyday HR tasks easier to discover and complete.",
    link: "https://github.com/harish2n5/Harish-newPortfolio",
    caseStudy: {
      toolsNotice: {
        tools: ["Figma", "FigJam", "Photoshop"],
        ai: ["Replit AI", "Antigravity", "ChatGPT", "Claude", "Figma AI"]
      },
      heroTagline: "Consolidated fragmented employee workflows across 8 modules into a unified platform, reducing tool switching and making everyday HR tasks easier to discover and complete.",
      targetUsers: {
        quote: "Designed for enterprise workforces, HR operations, and team managers.",
        paragraph: "WORKSPHERE addresses distinct operational friction points across three key organizational tiers to unify daily work.",
        users: [
          {
            role: "PRIMARY USER",
            title: "Enterprise Employees",
            desc: "Individual contributors tracking attendance, managing daily tasks, requesting leave, and completing reviews without context switching.",
            needs: ["1-Click attendance & leave requests", "Unified task & OKR progress view", "Instant employee directory lookup"]
          },
          {
            role: "MANAGEMENT",
            title: "Team Leads & Managers",
            desc: "Overseers managing team performance, approving leave/expense requests, monitoring sprint goals, and leading check-ins.",
            needs: ["Team capacity & workload heatmaps", "1-Click leave & expense approvals", "Automated OKR progress tracking"]
          },
          {
            role: "ADMINISTRATORS",
            title: "HR & People Operations",
            desc: "People Ops leaders requiring platform-wide employee analytics, compliance tracking, and onboarding workflows.",
            needs: ["Centralized lifecycle management", "Custom RBAC permission roles", "Exportable compliance audit reports"]
          }
        ]
      },
      quickGlance: {
        problem: "Employees switched between 8+ fragmented tools, suffering cognitive fatigue and lost productivity.",
        solution: "A unified enterprise employee experience platform with centralized navigation and 15+ WCAG 2.1 AA design system components.",
        result: "45% reduction in task completion time, 60% drop in HR helpdesk tickets, and 3.5x faster daily check-in velocity.",
      },
      metrics: [
        { value: "8 → 1", label: "Modules consolidated" },
        { value: "45%", label: "Faster task completion" },
        { value: "15+", label: "Design system components" },
        { value: "WCAG 2.1 AA", label: "Accessibility compliance" },
      ],
      challenge: {
        quote: "Fragmented tools, hidden features, and high cognitive overload.",
        paragraph: "Employees were forced to navigate 8 separate software tools for attendance, leave management, OKRs, payroll receipts, learning modules, and internal announcements. Common HR tasks were buried up to 5 clicks deep.",
        cards: [
          { num: "01", title: "Severe Tool Switching", desc: "Average employee toggled between 8 applications daily, losing ~35 minutes in context switching." },
          { num: "02", title: "Buried Common Actions", desc: "Critical actions like leave requests and expense filings were buried under deep nested menus." },
          { num: "03", title: "Inconsistent Design Patterns", desc: "Each legacy module had separate UI patterns, color schemas, and navigation models." },
        ],
      },
      goal: {
        quote: "Create a single, highly accessible workplace hub where every HR task is discoverable in under 2 clicks.",
        cards: [
          { title: "CONSOLIDATE", desc: "Unify 8 fragmented HR modules into one cohesive dashboard." },
          { title: "ACCESSIBLE", desc: "Establish 15+ reusable UI components adhering to WCAG 2.1 AA standards." },
          { title: "STREAMLINE", desc: "Reduce daily HR task completion time by over 40%." },
        ],
      },
      solution: {
        quote: "One platform. Unified workflows. Inclusive design system.",
        paragraph: "Architected a unified workplace platform featuring modular dashboard cards, global search, instant action shortcuts, and an accessible design system.",
        cards: [
          { title: "Unified Command Center", desc: "Centralized feed for tasks, leave approvals, announcements, and OKRs." },
          { title: "Global Action Launcher", desc: "Command bar allowing instant execution of common HR workflows from anywhere." },
          { title: "WCAG 2.1 AA Design System", desc: "15+ reusable accessible components with high-contrast color tokens." },
          { title: "Cross-Device Responsiveness", desc: "Seamless experience optimized for desktop, tablet, and mobile browsers." },
        ],
      },
      decisions: [
        { num: "01", title: "MODULAR IA", desc: "Organized 8 modules into 3 primary hubs (My Work, People Ops, Team Hub)." },
        { num: "02", title: "GLOBAL SHORTCUT BAR", desc: "Introduced Cmd+K quick launcher for instant 1-click HR requests." },
        { num: "03", title: "ACCESSIBLE PALETTE", desc: "Enforced minimum 4.5:1 text contrast and focus indicator rings across all components." },
      ],
      process: {
        intro: "We followed a structured, multi-phase UX process leveraging modern tools and AI assistance to accelerate research and design synthesis.",
        timeline: ["01 DISCOVER", "02 DEFINE", "03 IDEATE", "04 DESIGN SYSTEM", "05 PROTOTYPE", "06 TEST & ITERATE"],
        explanation: [
          { title: "RESEARCH & SYNTHESIS", desc: "Conducted 12 contextual inquiries; used ChatGPT and Claude to summarize qualitative interview transcriptions." },
          { title: "IA & WIREFRAMING", desc: "Mapped user flows in FigJam; generated rapid structural variants using Figma AI." },
          { title: "DESIGN SYSTEM & HI-FI", desc: "Built 15+ WCAG 2.1 AA components in Figma; refined visuals with Photoshop assets." },
        ],
      },
      userFlow: [
        {
          step: "01",
          title: "SSO AUTHENTICATION & LANDING",
          desc: "Employee logs in via Enterprise SSO and lands on personalized workspace dashboard.",
          highlight: "Single Sign-On"
        },
        {
          step: "02",
          title: "CONTEXTUAL DASHBOARD WIDGETS",
          desc: "Dashboard surfaces today's agenda, pending approvals, team attendance, and OKR progress.",
          highlight: "At-a-glance summary"
        },
        {
          step: "03",
          title: "QUICK ACTION / COMMAND BAR",
          desc: "User invokes Cmd+K command bar to submit leave or log expenses in under 30 seconds.",
          highlight: "Instant execution"
        },
        {
          step: "04",
          title: "MANAGER APPROVAL & HR SYNC",
          desc: "Automated routing alerts managers for 1-click approval while syncing attendance with HRIS.",
          highlight: "Automated sync"
        }
      ],
      finalOutput: {
        subheading: "A unified enterprise employee experience designed for clarity, consistency and scale.",
        cards: [
          { title: "UNIFIED DASHBOARD", desc: "Consolidated view of 8 workplace modules with customizable widgets." },
          { title: "15+ COMPONENT DESIGN SYSTEM", desc: "Accessible UI tokens, buttons, inputs, modals, and data cards." },
          { title: "RESPONSIVE MOBILE VIEW", desc: "Mobile-first experience for employees on the go." },
        ],
      },
      results: {
        quote: "Transformed fragmented software fatigue into a streamlined, joyful workplace experience.",
        metrics: [
          { value: "45%", label: "Reduction in task completion time" },
          { value: "60%", label: "Decrease in HR support tickets" },
          { value: "8 → 1", label: "Tools consolidated" },
          { value: "100%", label: "WCAG 2.1 AA Compliant" },
        ],
      },
      learnings: [
        { num: "01", title: "Consolidation requires strict IA", desc: "Merging 8 modules demands unambiguous navigation rules so users never feel lost." },
        { num: "02", title: "Accessibility empowers everyone", desc: "Designing for WCAG 2.1 AA improved scan speed for all employees, not just those using assistive tools." },
        { num: "03", title: "AI accelerates research synthesis", desc: "Using LLMs to cluster research notes saved days during the synthesis phase." },
      ],
    },
  },
  {
    id: 2,
    slug: "government-redesign",
    category: "Public Service UX",
    projectType: "Personal Project",
    title: "GOVERNMENT WEBSITE REDESIGN",
    subtitle: "Public Service UX & Information Architecture Redesign",
    image: project1Url,
    processImage: snippet3Url,
    finalOutputImage: project3Url,
    accentColor: "bg-primary",
    year: "2025",
    tags: ["Figma", "FigJam", "Maze", "Lovable", "ChatGPT", "Claude", "Figma AI"],
    role: "UI UX Designer",
    duration: "6 Weeks",
    tools: ["Figma", "FigJam", "Maze"],
    aiTools: ["Lovable", "ChatGPT", "Claude", "Figma AI"],
    platform: "Responsive Web Portal",
    shortDesc: "Restructured the website’s information architecture, navigation, and service discovery to help citizens find essential services and information with less effort.",
    link: "https://github.com/harish2n5/Harish-newPortfolio",
    caseStudy: {
      toolsNotice: {
        tools: ["Figma", "FigJam", "Maze"],
        ai: ["Lovable", "ChatGPT", "Claude", "Figma AI"]
      },
      heroTagline: "Restructured the website’s information architecture, navigation, and service discovery to help citizens find essential services and information with less effort.",
      targetUsers: {
        quote: "Designed for citizens of all digital literacy levels, elderly individuals, and public service seekers.",
        paragraph: "Public services must be accessible to every citizen regardless of tech-savviness, visual impairments, or device types.",
        users: [
          {
            role: "PRIMARY USER",
            title: "Everyday Citizens",
            desc: "Individuals seeking birth certificates, permit renewals, tax documents, or public transit schedules quickly.",
            needs: ["Clear service categories", "Searchable portal with plain language", "Mobile-optimized application forms"]
          },
          {
            role: "SPECIAL NEEDS",
            title: "Elderly & Disabled Citizens",
            desc: "Users requiring screen readers, high-contrast text, large touch targets, and straightforward guidance.",
            needs: ["WCAG 2.1 AA screen reader support", "Large text & high contrast mode", "Zero jargon step-by-step instructions"]
          },
          {
            role: "ADMINISTRATORS",
            title: "Public Service Officers",
            desc: "Government staff processing incoming citizen applications, service inquiries, and appointment requests.",
            needs: ["Reduced incomplete submissions", "Clear citizen tracking status", "Automated document verification flow"]
          }
        ]
      },
      quickGlance: {
        problem: "Citizens struggled to navigate confusing government jargon, multi-tiered dropdowns, and broken mobile flows.",
        solution: "A task-based information architecture, plain-language service search, and responsive mobile-first redesign.",
        result: "65% improvement in service discovery speed, 50% decrease in bounce rates, and 92% Maze usability score.",
      },
      metrics: [
        { value: "65%", label: "Faster service discovery" },
        { value: "50%", label: "Lower bounce rate" },
        { value: "92/100", label: "Maze usability score" },
        { value: "100%", label: "Responsive compliance" },
      ],
      challenge: {
        quote: "Overwhelming bureaucratic jargon, hidden links, and zero mobile optimization.",
        paragraph: "Citizens visiting the legacy portal faced dense walls of legalistic text, complex departmental hierarchy (rather than task-based navigation), and broken layouts on mobile devices. Finding basic services required up to 7 clicks.",
        cards: [
          { num: "01", title: "Departmental Jargon Navigation", desc: "Nav menu organized by ministry departments rather than citizen tasks." },
          { num: "02", title: "Information Overload", desc: "Homepages cluttered with news archives and disclaimers instead of core services." },
          { num: "03", title: "Poor Accessibility & Mobile Experience", desc: "Low color contrast, broken form fields on smartphones, non-screen reader friendly." },
        ],
      },
      goal: {
        quote: "Transform public service access into a simple, citizen-first digital portal.",
        cards: [
          { title: "RESTRUCTURE IA", desc: "Re-organize navigation around top citizen intent and tasks." },
          { title: "HUMAN-CENTERED", desc: "Translate bureaucratic legal speak into clear plain language." },
          { title: "ACCESSIBLE", desc: "Ensure 100% WCAG 2.1 AA compliance across mobile and desktop." },
        ],
      },
      solution: {
        quote: "Intent-based navigation. Plain-language search. Universal accessibility.",
        paragraph: "Designed an intent-focused public portal featuring a prominent predictive search bar, categorized top service cards, guided step-by-step application flows, and high contrast typography.",
        cards: [
          { title: "Intent-Driven Home Portal", desc: "Prominent search bar and top 6 citizen service categories above the fold." },
          { title: "Guided Service Wizard", desc: "Step-by-step progress tracker for document applications and renewals." },
          { title: "Multilingual & Accessible UI", desc: "Instant language switcher, font sizing controls, and high contrast toggles." },
          { title: "Mobile-First Forms", desc: "Touch-optimized input fields, camera document upload, and status SMS tracking." },
        ],
      },
      decisions: [
        { num: "01", title: "TASK OVER DEPARTMENT", desc: "Shifted navigation from 'Ministry of Revenue' to 'Pay Taxes & Utilities'." },
        { num: "02", title: "PREDICTIVE SERVICE SEARCH", desc: "Built smart search indexing common queries (e.g., 'lost ID' -> 'Replace National ID')." },
        { num: "03", title: "STEP WIZARDS", desc: "Broken long 4-page forms into 3 digestible step-by-step wizard screens." },
      ],
      process: {
        intro: "I executed a rigorous UX process combining card sorting on FigJam, usability testing via Maze, and AI-assisted prototyping with Lovable and Figma AI.",
        timeline: ["01 AUDIT", "02 CARD SORTING", "03 WIREFRAMING", "04 MAZE TESTING", "05 DESIGN SYSTEM", "06 HI-FI PORTAL"],
        explanation: [
          { title: "HEURISTIC AUDIT & CARD SORT", desc: "Evaluated 45 legacy pages; conducted open card sorting with 15 citizens to regroup 60+ service links." },
          { title: "TESTING & PROTOTYPING", desc: "Created interactive prototypes in Figma; ran quantitative task-completion tests on Maze." },
          { title: "AI-ASSISTED REFLECTION", desc: "Used Lovable and Claude to test responsive layouts and refine micro-copy clarity." },
        ],
      },
      userFlow: [
        {
          step: "01",
          title: "CITIZEN SEARCH & INTENT SELECTION",
          desc: "Citizen opens portal and searches 'renew driver license' or clicks top service card.",
          highlight: "Intent-based entry"
        },
        {
          step: "02",
          title: "CLEAR ELIGIBILITY & CHECKLIST",
          desc: "Service page highlights required documents, fees, and processing times upfront.",
          highlight: "Zero surprises"
        },
        {
          step: "03",
          title: "STEP-BY-STEP APPLICATION WIZARD",
          desc: "User completes 3-step digital form with auto-fill and instant document preview.",
          highlight: "Guided progress"
        },
        {
          step: "04",
          title: "CONFIRMATION & SMS TRACKING",
          desc: "Citizen receives digital receipt and SMS tracking number for real-time status updates.",
          highlight: "Instant tracking"
        }
      ],
      finalOutput: {
        subheading: "A citizen-centered government portal built for clarity, speed and universal inclusion.",
        cards: [
          { title: "CITIZEN HUB HOMEPAGE", desc: "Clean hero search with instant service category grid." },
          { title: "GUIDED APPLICATION FLOW", desc: "Step-by-step form completion with live progress indicator." },
          { title: "ACCESSIBILITY TOOLBAR", desc: "Font resizing, high contrast mode, and voice reader support." },
        ],
      },
      results: {
        quote: "Democratized civic access through intuitive digital service design.",
        metrics: [
          { value: "65%", label: "Faster task completion" },
          { value: "92/100", label: "Maze usability score" },
          { value: "50%", label: "Lower bounce rate" },
          { value: "100%", label: "WCAG 2.1 AA Compliant" },
        ],
      },
      learnings: [
        { num: "01", title: "Language is UI", desc: "Replacing bureaucratic legal jargon with everyday language had a bigger impact than visual restyling." },
        { num: "02", title: "Card sorting reveals mental models", desc: "Citizens think in tasks ('Fix my street light'), not agency titles ('Department of Public Works')." },
        { num: "03", title: "Accessibility is non-negotiable", desc: "Designing for edge cases creates a significantly smoother experience for everyone." },
      ],
    },
  },
  {
    id: 3,
    slug: "insighthub",
    category: "Analytics & BI",
    projectType: "Personal Project",
    title: "INSIGHTHUB",
    subtitle: "Business Intelligence & Executive Analytics Platform",
    image: project4Url,
    processImage: snippet5Url,
    finalOutputImage: project4Url,
    accentColor: "bg-primary",
    year: "2025",
    tags: ["Figma", "Relume AI", "ChatGPT", "Claude", "Figma AI"],
    role: "UI UX Designer",
    duration: "6 Weeks",
    tools: ["Figma"],
    aiTools: ["Relume AI", "ChatGPT", "Claude", "Figma AI"],
    platform: "Desktop Analytics Suite",
    shortDesc: "Transformed complex financial data into clear, actionable insights by improving information hierarchy, dashboard structure, data visualization, and progressive disclosure.",
    link: "https://github.com/harish2n5/Harish-newPortfolio",
    caseStudy: {
      toolsNotice: {
        tools: ["Figma"],
        ai: ["Relume AI", "ChatGPT", "Claude", "Figma AI"]
      },
      heroTagline: "Transformed complex financial data into clear, actionable insights by improving information hierarchy, dashboard structure, data visualization, and progressive disclosure.",
      targetUsers: {
        quote: "Built for executives, financial analysts, and business directors needing instant clarity over complex metrics.",
        paragraph: "INSIGHTHUB bridges the gap between raw financial telemetry and high-stakes executive decision-making.",
        users: [
          {
            role: "PRIMARY USER",
            title: "C-Suite & Executives",
            desc: "CEOs, CFOs, and VPs who require rapid executive summaries, plain-language trend insights, and instant metric anomaly alerts.",
            needs: ["Plain-English narrative metrics feed", "Proactive anomaly notifications", "1-Click executive PDF & Slack exports"]
          },
          {
            role: "ANALYTICAL USER",
            title: "Data Analysts & Controllers",
            desc: "Data specialists configuring financial pipelines, validating automated metric rules, and running cohort deep dives.",
            needs: ["Contextual side-drawer deep-dives", "Custom chart builders", "Colorblind-safe visualization palettes"]
          },
          {
            role: "OPERATIONAL USER",
            title: "Department Directors",
            desc: "Department heads monitoring unit economics, budget vs actuals, and operational KPIs on a daily cadence.",
            needs: ["Role-filtered dashboard views", "Cohort performance tracking", "Threshold alert customization"]
          }
        ]
      },
      quickGlance: {
        problem: "Executives were drowning in 30+ un-annotated spreadsheet charts, taking 15+ minutes to interpret key metrics.",
        solution: "A narrative-first BI dashboard with progressive disclosure, AI insight digests, and high-contrast anomaly badges.",
        result: "85% reduction in time-to-insight (15m → 2m), 40% drop in analyst inquiry tickets, and 100% colorblind-safe visual hierarchy.",
      },
      metrics: [
        { value: "15m → 2m", label: "Time-to-insight" },
        { value: "40%", label: "Fewer analyst tickets" },
        { value: "100%", label: "Colorblind-safe charts" },
        { value: "1-Click", label: "Executive export" },
      ],
      challenge: {
        quote: "Dense charts, missing narrative context, and visual fatigue.",
        paragraph: "Financial executives were presented with dashboards cramming 30+ multi-axis graphs onto a single screen. Without visual hierarchy or narrative callouts, finding revenue spikes or cost anomalies required manual spreadsheet digging.",
        cards: [
          { num: "01", title: "Information Overload", desc: "30+ graphs cluttering the display without visual hierarchy or focus points." },
          { num: "02", title: "Chart Noise & Cryptic Axes", desc: "Non-standard chart colors and unclear labels forcing users to calculate trends manually." },
          { num: "03", title: "High Friction Reporting", desc: "10+ manual steps to capture screenshots and build executive summary slides." },
        ],
      },
      goal: {
        quote: "Transform raw financial numbers into instant, plain-English executive insights.",
        cards: [
          { title: "NARRATIVE FIRST", desc: "Place plain-language metric digests ahead of complex charts." },
          { title: "PROGRESSIVE DISCLOSURE", desc: "Surface top-level summary KPIs first; reveal granular charts on hover/click." },
          { title: "ACCESSIBLE DATA VIS", desc: "Establish colorblind-compliant data visualization palettes and clear scales." },
        ],
      },
      solution: {
        quote: "Narrative summaries. Progressive disclosure. Colorblind-safe visualization.",
        paragraph: "Engineered an executive BI platform featuring an AI narrative summary feed, interactive side-drawer deep-dives, customizable KPI cards, and accessible chart color tokens.",
        cards: [
          { title: "AI Executive Digest Feed", desc: "Natural language summaries highlighting financial trends and anomalies." },
          { title: "Progressive Side-Drawer Workspace", desc: "Clicking any KPI card opens a contextual deep-dive drawer with cohort filters." },
          { title: "Accessible Visual Palette", desc: "Colorblind-tested palette using shape indicators alongside color cues." },
          { title: "1-Click Slack & PDF Broadcast", desc: "Instant formatted summary exports to executive communication channels." },
        ],
      },
      decisions: [
        { num: "01", title: "NARRATIVE ABOVE CHARTS", desc: "Placed text summaries above charts based on F-pattern eye-tracking studies." },
        { num: "02", title: "SIDE-DRAWER DEEP DIVES", desc: "Used slide-over drawers instead of full-page reloads to preserve dashboard context." },
        { num: "03", title: "DUAL ENCODING VISUALS", desc: "Combined color hues with line pattern textures for 100% colorblind accessibility." },
      ],
      process: {
        intro: "I leveraged AI tools like Relume AI, ChatGPT, and Claude to map financial sitemaps and refine narrative structures, paired with high-precision Figma design execution.",
        timeline: ["01 DISCOVER", "02 ARCHITECTURE", "03 WIREFRAMING", "04 DESIGN TOKENS", "05 HI-FI DASHBOARD", "06 EVALUATION"],
        explanation: [
          { title: "AI SITEMAP & IA", desc: "Used Relume AI and ChatGPT to model executive reporting hierarchies and KPI taxonomies." },
          { title: "DATA VIS DESIGN SYSTEM", desc: "Created colorblind-safe chart components, sparklines, metric badges, and table filters in Figma." },
          { title: "PROTOTYPING & EVALUATION", desc: "Built interactive side-drawer prototypes and evaluated scan speed with 6 financial leads." },
        ],
      },
      userFlow: [
        {
          step: "01",
          title: "EXECUTIVE DIGEST LAUNCH",
          desc: "Executive logs into clean dashboard featuring natural language summary of daily revenue, CAC, and margin trends.",
          highlight: "Narrative-first"
        },
        {
          step: "02",
          title: "AUTOMATED ANOMALY FLAG",
          desc: "High-contrast alert badge flags unexpected 14% spike in operational cost.",
          highlight: "Proactive alert"
        },
        {
          step: "03",
          title: "PROGRESSIVE DEEP DIVE",
          desc: "Clicking anomaly card slides out contextual drawer showing underlying vendor line items.",
          highlight: "Contextual drawer"
        },
        {
          step: "04",
          title: "ANNOTATE & SHARE",
          desc: "User adds executive note and broadcasts 1-click snapshot to CFO Slack channel.",
          highlight: "1-Click export"
        }
      ],
      finalOutput: {
        subheading: "An executive analytics experience engineered for speed, narrative clarity and strategic impact.",
        cards: [
          { title: "EXECUTIVE DIGEST DASHBOARD", desc: "Plain-language narrative summary feed paired with high-level KPI cards." },
          { title: "INTERACTIVE SIDE-DRAWER", desc: "Detailed cohort breakdown drawer preserving main dashboard focus." },
          { title: "FINANCIAL DATA SYSTEM", desc: "Colorblind-safe data visualization library with reusable chart tokens." },
        ],
      },
      results: {
        quote: "From spreadsheet overload to lightning-fast executive decision making.",
        metrics: [
          { value: "15m → 2m", label: "Time-to-insight" },
          { value: "40%", label: "Reduction in analyst tickets" },
          { value: "85%", label: "Executive adoption rate" },
          { value: "100%", label: "Colorblind-safe design" },
        ],
      },
      learnings: [
        { num: "01", title: "Words complement numbers", desc: "Plain-English text summaries accelerate data comprehension faster than raw visual charts alone." },
        { num: "02", title: "Progressive disclosure reduces anxiety", desc: "Hiding granular data until requested prevents cognitive paralysis." },
        { num: "03", title: "Accessible charts benefit everyone", desc: "Designing high-contrast, dual-encoded charts made dark mode reading far crispier." },
      ],
    },
  },
];
