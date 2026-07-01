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

export const designSnippets = [
  {
    title: "Onboarding Flow",
    tag: "UX",
    color: "bg-primary",
    image: snippet1Url,
    year: "2024",
    description:
      "A 5-step onboarding sequence that reduced drop-off by 40%. Each screen does exactly one job — no cognitive overload, no surprise asks.",
    tools: ["Figma", "FigJam", "Hotjar", "Maze", "Lottie"],
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
    tools: ["Figma", "D3.js", "Recharts", "Storybook", "Radix UI"],
    trends: [
      "Dark-mode-first — reduces eye strain during marathon sessions",
      "Sparklines and inline charts for at-a-glance trend reading",
      "Contextual tooltips instead of a separate legend",
      "Controlled data density — scannable rows, not walls of text",
    ],
  },
  {
    title: "Mobile Nav Pattern",
    tag: "UX",
    color: "bg-[#B8F0A0]",
    image: snippet3Url,
    year: "2023",
    description:
      "Redesigned a tab bar into a floating gesture-aware navigation that adapts to thumb reach zones on all screen sizes.",
    tools: ["Figma", "Framer", "ProtoPie", "Expo"],
    trends: [
      "Thumb-friendly zones — primary actions always within 75% reachability",
      "Gesture-first navigation with swipe-to-switch tabs",
      "Adaptive bottom sheet for secondary items (the 'More' pattern)",
      "Haptic feedback mapped to destructive vs. confirmatory actions",
    ],
  },
  {
    title: "Empty States",
    tag: "UI",
    color: "bg-[#C8B8FF]",
    image: snippet4Url,
    year: "2024",
    description:
      "A system of illustrated empty states that turn zero-data moments into action prompts — not dead ends.",
    tools: ["Figma", "Lottie", "Principle", "Phosphor Icons"],
    trends: [
      "Contextual CTAs — every empty state offers the exact next action",
      "Illustrated characters to inject personality without stock photos",
      "Looping micro-animations to signal 'live' pages vs. error states",
      "Friendly copy over generic 'No results found' fallbacks",
    ],
  },
  {
    title: "Toast System",
    tag: "Component",
    color: "bg-primary",
    image: snippet5Url,
    year: "2023",
    description:
      "A composable, accessible toast/notification system with smart stacking, queuing, and action-button support.",
    tools: ["Figma", "Radix UI", "Framer Motion", "Storybook", "Zod"],
    trends: [
      "Stacked toasts with collapse-on-hover to reduce visual noise",
      "Inline action buttons (Undo, Retry) directly in the notification",
      "Auto-dismiss with pause-on-hover using a progress arc",
      "ARIA live regions so screen readers announce every message",
    ],
  },
  {
    title: "Auth Screens",
    tag: "UX",
    color: "bg-[#FFD6A0]",
    image: snippet6Url,
    year: "2024",
    description:
      "A low-friction auth flow that prioritised social login and magic links. Password is always the last resort.",
    tools: ["Figma", "Clerk", "Maze", "Optimal Workshop"],
    trends: [
      "Social-first layout — OAuth buttons above the fold, password buried",
      "Magic link flow for returning users who forget passwords",
      "Real-time validation feedback without premature error states",
      "Biometric auth fallback pattern on mobile web",
    ],
  },
  {
    title: "Icon Set",
    tag: "Visual",
    color: "bg-secondary",
    image: snippet7Url,
    year: "2023",
    description:
      "60+ custom icons built on a consistent 24px grid with two weight variants — designed for web and native.",
    tools: ["Figma", "Adobe Illustrator", "SVGO", "Iconoir"],
    trends: [
      "Variable stroke weight for UI icons (regular) vs. marketing (bold)",
      "Optical sizing — icons recorrected at 16px to feel equal weight",
      "Monoline style for maximum clarity at small sizes",
      "Exported as optimised SVG + React component via SVGO pipeline",
    ],
  },
  {
    title: "Pricing Page",
    tag: "Conversion",
    color: "bg-[#A0E4FF]",
    image: snippet8Url,
    year: "2024",
    description:
      "A conversion-optimised pricing page that increased paid plan sign-ups by 28% through anchoring and trust signals.",
    tools: ["Figma", "Hotjar", "Webflow", "Optimizely"],
    trends: [
      "Decoy pricing — mid-tier anchors the eye toward the target plan",
      "Annual/monthly toggle with instant savings visualisation",
      "Feature comparison table with sticky header on scroll",
      "Social proof clusters (logos + testimonials) adjacent to the CTA",
    ],
  },
];

export const projects = [
  {
    id: 0,
    slug: "careerflow-ai",
    category: "AI",
    title: "CareerFlow AI",
    subtitle: "AI-Powered Career Platform",
    image: project1Url,
    accentColor: "bg-primary",
    year: "2024",
    tags: ["React", "TypeScript", "AI Resume Analyzer", "Job Engine"],
    role: "Full Stack + UX Design",
    duration: "4 months",
    shortDesc: "An AI-powered platform that helps users find relevant jobs, optimize resumes for ATS systems, generate cover letters, and track applications.",
    link: "https://github.com/harish2n5/Harish-newPortfolio",
    caseStudy: {
      problem: { statement: "Job seekers often apply to hundreds of jobs manually, use generic resumes, and struggle to track applications.", whoFacesIt: "Job Seekers and Career Changers." },
      research: { userInterviews: "Interviewed 20 recent graduates about job search struggles.", surveys: "N/A", competitorAnalysis: "Analyzed existing job boards and resume builders." },
      personas: { goals: ["Get hired faster", "Optimize resume for ATS"], painPoints: ["No interview callbacks", "Messy application tracking"], motivations: ["Career growth", "Time efficiency"] },
      journey: { discovery: "User wants to apply for a role but feels their resume is weak.", interaction: "Uploads resume, gets AI feedback, optimizes keywords, applies.", painPoints: "Confusion around AI feedback accuracy." },
      architecture: { sitemap: "Dashboard, Job Search, Resume Analyzer, Cover Letter Generator, Tracker.", navigationFlow: "Sidebar navigation for quick access to tools." },
      wireframes: { lowFidelity: "Sketched the dashboard layout.", midFidelity: "Wireframed the resume feedback interface." },
      designSystem: { colors: "Professional blues with neon accents.", typography: "Inter for readability.", components: "File uploaders, progress rings, status pills.", icons: "Lucide React." },
      finalUI: { mobileScreens: "Responsive job search.", webScreens: "Desktop optimized resume editor.", responsiveLayouts: "Yes." },
      usabilityTesting: { findings: "Users didn't know which resume changes were most critical.", iterations: "Added a 'Critical vs Optional' priority system to the AI feedback." },
      impact: { metricsImproved: "Increased application success rates by 35%.", futureEnhancements: "Direct ATS integration." }
    }
  },
  {
    id: 1,
    slug: "scalable-design-system",
    category: "Design",
    title: "Scalable Design System",
    subtitle: "Component Library",
    image: project3Url,
    accentColor: "bg-primary",
    year: "2024",
    tags: ["Figma", "Auto Layout", "Component Variants", "Accessibility"],
    role: "Product Designer",
    duration: "5 months",
    shortDesc: "Created a scalable design system to ensure visual consistency and faster product development.",
    link: "https://github.com/harish2n5/Harish-newPortfolio",
    caseStudy: {
      problem: { statement: "Inconsistencies and slow product development across multiple screens.", whoFacesIt: "Design and development teams." },
      research: { userInterviews: "Interviewed developers about handoff friction.", surveys: "N/A", competitorAnalysis: "N/A" },
      personas: { goals: ["Faster product development", "Visual consistency"], painPoints: ["Inefficient handoff"], motivations: ["Scalability"] },
      journey: { discovery: "Designer needs to build a new screen.", interaction: "Uses pre-built components from the library.", painPoints: "N/A" },
      architecture: { sitemap: "Foundations, Components, Patterns.", navigationFlow: "Categorized library structure." },
      wireframes: { lowFidelity: "N/A", midFidelity: "Component architecture diagrams." },
      designSystem: { colors: "Color tokens.", typography: "Typography styles.", components: "Auto Layout and component variants.", icons: "Custom SVG set." },
      finalUI: { mobileScreens: "N/A", webScreens: "N/A", responsiveLayouts: "Layout guidelines." },
      usabilityTesting: { findings: "Developers struggled with component naming.", iterations: "Aligned Figma component names with React prop names." },
      impact: { metricsImproved: "Efficient design-to-development handoff and long-term product scalability.", futureEnhancements: "Accessibility standards documentation." }
    }
  },
  {
    id: 2,
    slug: "enterprise-event-management",
    category: "Enterprise",
    title: "Enterprise Event Management System",
    subtitle: "UI/UX Case Study",
    image: project1Url,
    accentColor: "bg-[#FFD6A0]",
    year: "2024",
    tags: ["Figma", "UX Research", "Design Systems", "Responsive Design"],
    role: "UI/UX Designer",
    duration: "4 months",
    shortDesc: "Designed an end-to-end UI/UX solution for an enterprise-level event management system, including admin dashboards, event team workflows, and requester portals.",
    link: "https://github.com/harish2n5/Harish-newPortfolio",
    caseStudy: {
      problem: { statement: "Needed an end-to-end UI/UX solution for an enterprise-level event management system.", whoFacesIt: "Admin and event team." },
      research: { userInterviews: "Conducted user research to identify pain points.", surveys: "N/A", competitorAnalysis: "N/A" },
      personas: { goals: ["Task efficiency", "Clear information architecture"], painPoints: ["Complex workflows"], motivations: ["Streamlined processing"] },
      journey: { discovery: "User logs in.", interaction: "User accesses admin dashboards, event team workflows, and requester portals.", painPoints: "N/A" },
      architecture: { sitemap: "Admin Dashboard, Requester Portal.", navigationFlow: "Intuitive user flows." },
      wireframes: { lowFidelity: "Created wireframes.", midFidelity: "High-fidelity designs." },
      designSystem: { colors: "Brand colors.", typography: "System defaults.", components: "Scalable design system with reusable components.", icons: "Standard icons." },
      finalUI: { mobileScreens: "Responsive layouts.", webScreens: "Web dashboard.", responsiveLayouts: "Yes." },
      usabilityTesting: { findings: "Improved task efficiency.", iterations: "Refined information architecture." },
      impact: { metricsImproved: "Improved task efficiency through clear information architecture.", futureEnhancements: "N/A" }
    }
  },
  {
    id: 3,
    slug: "medisync",
    category: "Mobile",
    title: "MediSync",
    subtitle: "Smart Healthcare Management",
    image: project2Url,
    accentColor: "bg-secondary",
    year: "2024",
    tags: ["React Native", "Node.js", "Healthcare UX", "Accessibility"],
    role: "Product Design + Frontend",
    duration: "5 months",
    shortDesc: "A unified healthcare ecosystem for patients and doctors.",
    link: "https://github.com/harish2n5/Harish-newPortfolio",
    caseStudy: {
      problem: {
        statement: "Patients struggle with appointment booking, prescription management, and health tracking.",
        whoFacesIt: "Patients (especially elderly), Doctors, and Hospital Staff."
      },
      research: {
        userInterviews: "Interviews with 15 patients and 8 healthcare providers.",
        surveys: "Surveyed 50 clinic administrators on operational bottlenecks.",
        competitorAnalysis: "Reviewed existing portals (Epic MyChart, Zocdoc)."
      },
      personas: {
        goals: ["Easy appointment booking", "Access to digital prescriptions"],
        painPoints: ["Long wait times on phone", "Losing paper prescriptions"],
        motivations: ["Better health management", "Reduced anxiety"]
      },
      journey: {
        discovery: "Patient feels unwell, opens app to find a specialist.",
        interaction: "Books slot, attends online consultation, receives digital prescription, sets medicine reminders.",
        painPoints: "Digital literacy barriers for older users."
      },
      architecture: {
        sitemap: "Onboarding, Dashboard, Doctor Search, Consultation, Reports, Settings.",
        navigationFlow: "Bottom tab navigation for core functions: Home, Appointments, Records, Profile."
      },
      wireframes: {
        lowFidelity: "Paper prototyping for the consultation flow.",
        midFidelity: "Wireframes emphasizing large touch targets and high contrast."
      },
      designSystem: {
        colors: "Calming Teal and clean White backgrounds.",
        typography: "Roboto for clarity and cross-platform consistency.",
        components: "Doctor Profile Cards, Calendar Picker, Notification Toasts.",
        icons: "Medical-specific custom icon set."
      },
      finalUI: {
        mobileScreens: "Patient App optimized for accessibility (large text, voice search).",
        webScreens: "Doctor Dashboard and Admin Portal for clinic management.",
        responsiveLayouts: "Tablet-optimized views for doctors during consultations."
      },
      usabilityTesting: {
        findings: "Elderly users struggled with the calendar interface.",
        iterations: "Simplified date picker and added a 'Quick Rebook' feature."
      },
      impact: {
        metricsImproved: "No-show rate dropped by 25%. Prescription adherence improved by 40%.",
        futureEnhancements: "Wearable device integration for live vitals monitoring."
      }
    }
  },
  {
    id: 4,
    slug: "worksphere",
    category: "SaaS",
    title: "WORKSPHERE",
    subtitle: "Enterprise Employee Experience Platform",
    image: project2Url,
    accentColor: "bg-secondary",
    year: "2024",
    tags: ["Figma", "Design Systems", "WCAG 2.1", "Responsive Design"],
    role: "Product Designer",
    duration: "6 months",
    shortDesc: "A unified HR platform that consolidated 6+ disconnected employee tools into a single system for attendance, performance, learning, and analytics management.",
    link: "https://github.com/harish2n5/Harish-newPortfolio",
    caseStudy: {
      problem: { statement: "Employees and HR admins had to navigate across 6+ disconnected platforms to manage attendance, OKRs, tasks, and reviews, causing extreme friction.", whoFacesIt: "Employees, Managers, HR Admins." },
      research: { userInterviews: "Identified key pain points across employees, managers, and HR admins to define a unified role-based experience.", surveys: "N/A", competitorAnalysis: "N/A" },
      personas: { goals: ["Single pane of glass", "Easy task tracking"], painPoints: ["Too many logins", "Fragmented data"], motivations: ["Productivity"] },
      journey: { discovery: "Employee logs in.", interaction: "Checks in, reviews tasks, checks OKRs, logs out.", painPoints: "N/A" },
      architecture: { sitemap: "Dashboard, Attendance, Tasks, OKRs, Performance, Learning.", navigationFlow: "Role-based navigation." },
      wireframes: { lowFidelity: "N/A", midFidelity: "N/A" },
      designSystem: { colors: "Corporate tones.", typography: "Clean sans-serif.", components: "Data tables, charts, cards.", icons: "Standard set." },
      finalUI: { mobileScreens: "N/A", webScreens: "HR Analytics dashboards.", responsiveLayouts: "Yes." },
      usabilityTesting: { findings: "Ensured WCAG 2.1 AA accessibility compliance.", iterations: "Improved contrast and keyboard navigation." },
      impact: { metricsImproved: "Consolidated 6 tools into 1.", futureEnhancements: "N/A" }
    }
  },
  {
    id: 5,
    slug: "supplychain-nexus",
    category: "Enterprise",
    title: "SUPPLYCHAIN NEXUS",
    subtitle: "Procurement & Vendor Management System",
    image: project3Url,
    accentColor: "bg-[#FFD6A0]",
    year: "2024",
    tags: ["Figma", "Data Visualization", "RBAC", "Prototyping"],
    role: "UI/UX Designer",
    duration: "5 months",
    shortDesc: "An enterprise procurement platform that digitized the complete purchasing lifecycle from request creation to vendor payment approval.",
    link: "https://github.com/harish2n5/Harish-newPortfolio",
    caseStudy: {
      problem: { statement: "Manual, paper-based workflows led to approval bottlenecks and lack of visibility into vendor performance and spending.", whoFacesIt: "Requesters, Procurement Managers, Finance Approvers." },
      research: { userInterviews: "Analyzed existing workflows for Requesters and Approvers.", surveys: "N/A", competitorAnalysis: "N/A" },
      personas: { goals: ["Faster approvals", "Better spend tracking"], painPoints: ["Lost requests", "Opaque vendor data"], motivations: ["Efficiency"] },
      journey: { discovery: "N/A", interaction: "N/A", painPoints: "N/A" },
      architecture: { sitemap: "N/A", navigationFlow: "Multi-role workflows." },
      wireframes: { lowFidelity: "N/A", midFidelity: "N/A" },
      designSystem: { colors: "N/A", typography: "N/A", components: "N/A", icons: "N/A" },
      finalUI: { mobileScreens: "N/A", webScreens: "High-fidelity data visualizations and vendor comparison tools.", responsiveLayouts: "Yes." },
      usabilityTesting: { findings: "Refined dashboards to ensure seamless monitoring of spending.", iterations: "N/A" },
      impact: { metricsImproved: "Successfully digitized the procurement lifecycle, leading to significantly faster approvals.", futureEnhancements: "N/A" }
    }
  },
  {
    id: 6,
    slug: "insighthub",
    category: "SaaS",
    title: "INSIGHTHUB",
    subtitle: "Business Intelligence & Analytics Platform",
    image: project4Url,
    accentColor: "bg-primary",
    year: "2024",
    tags: ["Figma", "Framer", "AI-Assisted Design", "Data Visualization"],
    role: "UX Architect",
    duration: "4 months",
    shortDesc: "An executive analytics platform that centralized fragmented business reports into a unified decision-making dashboard with AI-generated insights.",
    link: "https://github.com/harish2n5/Harish-newPortfolio",
    caseStudy: {
      problem: { statement: "Executives struggled to make quick decisions due to fragmented data sources and overly technical reports.", whoFacesIt: "Executives, Business Leaders." },
      research: { userInterviews: "Explored how non-technical stakeholders interpret data.", surveys: "N/A", competitorAnalysis: "N/A" },
      personas: { goals: ["Quick insights", "Plain-language data"], painPoints: ["Data fatigue", "Technical jargon"], motivations: ["Data-driven decisions"] },
      journey: { discovery: "N/A", interaction: "N/A", painPoints: "N/A" },
      architecture: { sitemap: "N/A", navigationFlow: "N/A" },
      wireframes: { lowFidelity: "N/A", midFidelity: "N/A" },
      designSystem: { colors: "N/A", typography: "N/A", components: "Drag-and-drop widgets.", icons: "N/A" },
      finalUI: { mobileScreens: "N/A", webScreens: "Customizable KPI dashboards displaying Revenue, Gross Margin, NPS, and Headcount.", responsiveLayouts: "Yes." },
      usabilityTesting: { findings: "Refined the AI-generated insight summaries to ensure they accurately reflected metric changes.", iterations: "N/A" },
      impact: { metricsImproved: "Delivered a centralized platform featuring scheduled report delivery.", futureEnhancements: "N/A" }
    }
  },
  {
    id: 7,
    slug: "brandsync",
    category: "Design",
    title: "BRANDSYNC",
    subtitle: "Brand Identity & Marketing Asset Platform",
    image: project1Url,
    accentColor: "bg-[#B8F0A0]",
    year: "2024",
    tags: ["Adobe CC", "Figma", "Brand Systems", "Typography"],
    role: "Visual Designer",
    duration: "3 months",
    shortDesc: "A centralized brand management system standardizing visual assets and marketing materials across digital and print channels.",
    link: "https://github.com/harish2n5/Harish-newPortfolio",
    caseStudy: {
      problem: { statement: "Multiple departments were creating inconsistent marketing materials, leading to brand fragmentation and diluted messaging.", whoFacesIt: "Marketing Teams, External Agencies." },
      research: { userInterviews: "Audited existing collateral and identified major inconsistencies in typography, color usage, and iconography.", surveys: "N/A", competitorAnalysis: "N/A" },
      personas: { goals: ["Brand consistency", "Easy access to assets"], painPoints: ["Brand fragmentation", "Hard to find latest logos"], motivations: ["Brand equity"] },
      journey: { discovery: "N/A", interaction: "N/A", painPoints: "N/A" },
      architecture: { sitemap: "N/A", navigationFlow: "N/A" },
      wireframes: { lowFidelity: "N/A", midFidelity: "N/A" },
      designSystem: { colors: "Established accessibility-focused visual standards.", typography: "Clear typography hierarchies.", components: "Logo variations, color palettes.", icons: "N/A" },
      finalUI: { mobileScreens: "N/A", webScreens: "Brand portal.", responsiveLayouts: "Yes." },
      usabilityTesting: { findings: "Tested reusable design templates across social media campaigns.", iterations: "N/A" },
      impact: { metricsImproved: "Maintained a cohesive user experience across all touchpoints while scaling marketing output efficiently.", futureEnhancements: "N/A" }
    }
  }
];
