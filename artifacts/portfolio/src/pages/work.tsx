import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, ExternalLink, X, ArrowUpRight } from "lucide-react";
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
import Navbar from "@/components/Navbar";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as [number, number, number, number] } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const MARQUEE_TEXT = "DESIGN • DEVELOP • DELIVER • ITERATE • ";

const designSnippets = [
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

const projects = [
  {
    id: 0,
    title: "CareerFlow AI",
    subtitle: "Job Search Platform",
    image: project1Url,
    accentColor: "bg-primary",
    year: "2024",
    tags: ["React", "TypeScript", "AI Resume Analyzer", "Job Engine"],
    role: "Full Stack + UX Design",
    duration: "4 months",
    shortDesc: "An AI-powered platform that matches jobs, optimizes resumes, and tracks applications.",
    link: "https://github.com/harish2n5/Harish-newPortfolio",
    caseStudy: {
      problem: {
        statement: "Job seekers spend hours searching, tailoring resumes, and tracking applications across multiple platforms.",
        whoFacesIt: "Job seekers, recent graduates, and professionals looking for a career change."
      },
      research: {
        userInterviews: "20 job seekers, 5 HR recruiters.",
        surveys: "Survey: 100 participants to understand job search pain points.",
        competitorAnalysis: "Analyzed LinkedIn, Indeed, and specialized ATS platforms."
      },
      personas: {
        goals: ["Find jobs matching exact skills", "Pass ATS filters"],
        painPoints: ["Time-consuming resume tailoring", "Ghosting from recruiters"],
        motivations: ["Career progression", "Streamlined workflow"]
      },
      journey: {
        discovery: "User signs up and imports their base resume.",
        interaction: "AI analyzes the resume and recommends matching jobs. User tailors resume for a specific job in one click.",
        painPoints: "Ensuring the AI does not hallucinate skills."
      },
      architecture: {
        sitemap: "Landing Page, Dashboard, Job Search, Job Details, Resume Builder, Application Tracker, Profile Settings.",
        navigationFlow: "Dashboard -> Job Search -> Resume Tailor -> Apply -> Tracker."
      },
      wireframes: {
        lowFidelity: "Initial sketches focusing on the Dashboard and Resume Builder.",
        midFidelity: "Interactive Figma prototypes tested with 5 users."
      },
      designSystem: {
        colors: "Primary Blue, Accent Green for success states.",
        typography: "Inter for readability, Space Grotesk for headings.",
        components: "Job Cards, AI Chat Interface, Kanban Tracker.",
        icons: "Lucide Icons."
      },
      finalUI: {
        mobileScreens: "Fully responsive job search and application tracker.",
        webScreens: "Dense, informative dashboard for desktop users.",
        responsiveLayouts: "Fluid grids for side-by-side resume vs job description view."
      },
      usabilityTesting: {
        findings: "Users loved the 1-click ATS optimizer, but wanted manual override options.",
        iterations: "Added a 'Review AI Changes' diff view before finalizing resume."
      },
      impact: {
        metricsImproved: "Reduced time-to-apply by 60%. 40% increase in interview requests.",
        futureEnhancements: "Integration with LinkedIn for auto-applying."
      }
    }
  },
  {
    id: 1,
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
    id: 2,
    title: "TrackMint",
    subtitle: "Business Operations SaaS",
    image: project3Url,
    accentColor: "bg-[#B8F0A0]",
    year: "2023",
    tags: ["Next.js", "SaaS", "Dashboard Design", "Data Visualization"],
    role: "Lead Product Designer",
    duration: "6 months",
    shortDesc: "An all-in-one business management platform for inventory, sales, and analytics.",
    link: "https://github.com/harish2n5/Harish-newPortfolio",
    caseStudy: {
      problem: {
        statement: "Small businesses use multiple disconnected tools for inventory, sales, and financial tracking.",
        whoFacesIt: "Small business owners, inventory managers, and accountants."
      },
      research: {
        userInterviews: "12 small business owners across retail and wholesale.",
        surveys: "Survey of 80 retail shop managers.",
        competitorAnalysis: "Evaluated QuickBooks, Zoho Inventory, and Shopify POS."
      },
      personas: {
        goals: ["Centralized view of operations", "Automated low-stock alerts"],
        painPoints: ["Manual data entry across apps", "Inaccurate inventory counts"],
        motivations: ["Business growth", "Time savings"]
      },
      journey: {
        discovery: "Owner reviews daily sales and inventory alerts on dashboard.",
        interaction: "Approves purchase orders, generates GST reports, and tracks vendor payments.",
        painPoints: "Information overload on the main dashboard."
      },
      architecture: {
        sitemap: "Login, Dashboard, Products, Orders, Vendors, Reports, Settings.",
        navigationFlow: "Left sidebar navigation with collapsible nested menus."
      },
      wireframes: {
        lowFidelity: "Layout explorations for data-dense tables.",
        midFidelity: "Dashboard layout emphasizing key metrics (Revenue Cards, Insights)."
      },
      designSystem: {
        colors: "Dark sidebar, light workspace, status colors (Red/Yellow/Green).",
        typography: "Inter for data tables, monospaced fonts for numerical data.",
        components: "Data Grids, Complex Filters, Chart Widgets.",
        icons: "Phosphor Icons for enterprise feel."
      },
      finalUI: {
        mobileScreens: "Companion app for quick stock checks and alerts.",
        webScreens: "Dense, scannable data tables and interactive charts on desktop.",
        responsiveLayouts: "Collapsible sidebars and fluid charts."
      },
      usabilityTesting: {
        findings: "Users had trouble finding specific vendor invoices.",
        iterations: "Introduced a global command palette (Cmd+K) for quick search."
      },
      impact: {
        metricsImproved: "Reduced time spent on accounting by 15 hours/week. 99% inventory accuracy.",
        futureEnhancements: "AI-based sales forecasting."
      }
    }
  },
  {
    id: 3,
    title: "EventSphere",
    subtitle: "Event Management & Approvals",
    image: project4Url,
    accentColor: "bg-[#C8B8FF]",
    year: "2024",
    tags: ["React", "Workflow Design", "Role-Based UX", "Enterprise"],
    role: "UX/UI Designer",
    duration: "3 months",
    shortDesc: "A centralized platform resolving delays and poor visibility in event management.",
    link: "https://github.com/harish2n5/Harish-newPortfolio",
    caseStudy: {
      problem: {
        statement: "Colleges and organizations manage events through emails and spreadsheets, causing delays and poor visibility.",
        whoFacesIt: "Faculty, Event Teams, and Administrators."
      },
      research: {
        userInterviews: "Interviews with 10 faculty heads and 5 student coordinators.",
        surveys: "Feedback from 40 event organizers on approval bottlenecks.",
        competitorAnalysis: "Looked at internal university portals and generic workflow tools like Jira."
      },
      personas: {
        goals: ["Fast event approvals", "Clear budget tracking"],
        painPoints: ["Lost email requests", "Unclear approval status"],
        motivations: ["Successful events", "Accountability"]
      },
      journey: {
        discovery: "Organizer submits an event request with budget details.",
        interaction: "Request enters a multi-level approval workflow. Admins review, allocate resources, and approve.",
        painPoints: "Tracking where a request is stuck."
      },
      architecture: {
        sitemap: "Request Submission, Event Tracking, Approval Workflow, Dashboard, Reports.",
        navigationFlow: "Role-based dashboards displaying relevant pending actions."
      },
      wireframes: {
        lowFidelity: "Workflow mapping and form structuring.",
        midFidelity: "Approval pipeline visualization and detailed request view."
      },
      designSystem: {
        colors: "Clean corporate palette with clear status indicators.",
        typography: "System fonts for fast rendering and native feel.",
        components: "Multi-step Forms, Timeline / Progress Trackers, Status Badges.",
        icons: "Minimalist outline icons."
      },
      finalUI: {
        mobileScreens: "Mobile view for quick admin approvals on the go.",
        webScreens: "Detailed form submission and budget allocation tables.",
        responsiveLayouts: "Side-by-side request details and approval chat."
      },
      usabilityTesting: {
        findings: "Organizers found the budget form too rigid.",
        iterations: "Added dynamic line items and standard templates for common events."
      },
      impact: {
        metricsImproved: "Approval time reduced from 2 weeks to 3 days. 100% visibility on event budgets.",
        futureEnhancements: "Vendor management and ticketing integration."
      }
    }
  },
  {
    id: 4,
    title: "Enterprise Event Management",
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
    id: 5,
    title: "Paytm Mobile App",
    subtitle: "UX Redesign for Improved Usability",
    image: project2Url,
    accentColor: "bg-[#A0E4FF]",
    year: "2024",
    tags: ["Figma", "User Research", "Prototyping", "Usability Testing"],
    role: "UX Designer",
    duration: "3 months",
    shortDesc: "Redesigned an existing mobile application to enhance usability and user engagement.",
    link: "https://github.com/harish2n5/Harish-newPortfolio",
    caseStudy: {
      problem: { statement: "UX issues identified through heuristic evaluation and user feedback.", whoFacesIt: "Mobile app users." },
      research: { userInterviews: "User feedback analysis.", surveys: "N/A", competitorAnalysis: "N/A" },
      personas: { goals: ["Better usability", "Improved visual hierarchy"], painPoints: ["Complex navigation"], motivations: ["Engagement"] },
      journey: { discovery: "User opens app.", interaction: "User navigates through optimized user flows.", painPoints: "N/A" },
      architecture: { sitemap: "Simplified navigation.", navigationFlow: "Optimized user flows." },
      wireframes: { lowFidelity: "N/A", midFidelity: "Interactive prototypes demonstrating before-and-after improvements." },
      designSystem: { colors: "Paytm Brand colors.", typography: "Brand typography.", components: "Redesigned key screens.", icons: "Standard icons." },
      finalUI: { mobileScreens: "Redesigned key screens with improved visual hierarchy.", webScreens: "N/A", responsiveLayouts: "Mobile optimized." },
      usabilityTesting: { findings: "Validated solutions through usability testing.", iterations: "Accessibility improvements." },
      impact: { metricsImproved: "Enhanced usability and user engagement.", futureEnhancements: "N/A" }
    }
  },
  {
    id: 6,
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
      research: { userInterviews: "N/A", surveys: "N/A", competitorAnalysis: "N/A" },
      personas: { goals: ["Faster product development", "Visual consistency"], painPoints: ["Inefficient handoff"], motivations: ["Scalability"] },
      journey: { discovery: "Designer uses components.", interaction: "Developed reusable UI components, typography styles, color tokens.", painPoints: "N/A" },
      architecture: { sitemap: "N/A", navigationFlow: "N/A" },
      wireframes: { lowFidelity: "N/A", midFidelity: "N/A" },
      designSystem: { colors: "Color tokens.", typography: "Typography styles.", components: "Auto Layout and component variants.", icons: "N/A" },
      finalUI: { mobileScreens: "N/A", webScreens: "N/A", responsiveLayouts: "Layout guidelines." },
      usabilityTesting: { findings: "N/A", iterations: "N/A" },
      impact: { metricsImproved: "Efficient design-to-development handoff and long-term product scalability.", futureEnhancements: "Accessibility standards documentation." }
    }
  }
];

const workflowSteps = [
  {
    number: "01",
    phase: "Discovery",
    title: "Understand the Problem",
    color: "bg-primary",
    designDetails: [
      "Stakeholder interviews to surface real goals, not assumed ones",
      "User research: surveys, existing analytics, competitor audit",
      "Define the problem statement and success metrics",
    ],
    devDetails: [
      "Technical audit of existing infrastructure (if applicable)",
      "Identify integration constraints and API availability",
      "Agree on the tech stack and tooling",
    ],
  },
  {
    number: "02",
    phase: "Strategy",
    title: "Map & Prioritise",
    color: "bg-secondary",
    designDetails: [
      "User journey mapping across key flows",
      "Information architecture and sitemap",
      "Feature prioritisation (MoSCoW framework)",
    ],
    devDetails: [
      "System architecture design and data modelling",
      "API contract definition (OpenAPI spec first)",
      "Sprint planning and milestone scoping",
    ],
  },
  {
    number: "03",
    phase: "Design",
    title: "Prototype & Validate",
    color: "bg-[#B8F0A0]",
    designDetails: [
      "Low-fidelity wireframes for all key screens",
      "Interactive Figma prototype for usability testing",
      "Iterate based on feedback — 2–3 rounds maximum",
    ],
    devDetails: [
      "Component architecture planning",
      "Design token setup and shared CSS variables",
      "Database schema first-draft and migrations",
    ],
  },
  {
    number: "04",
    phase: "Build",
    title: "Design & Develop in Tandem",
    color: "bg-[#C8B8FF]",
    designDetails: [
      "High-fidelity UI designs in Figma, component by component",
      "Design system components with states (hover, focus, error, empty)",
      "Responsive variants and edge case coverage",
    ],
    devDetails: [
      "Feature development with TypeScript end-to-end",
      "Daily syncs to catch design-dev gaps before they compound",
      "Automated testing for critical paths",
    ],
  },
  {
    number: "05",
    phase: "Launch",
    title: "Ship & Monitor",
    color: "bg-[#FFD6A0]",
    designDetails: [
      "Final QA against Figma specs pixel-by-pixel",
      "Accessibility audit and WCAG compliance check",
      "Handoff documentation and component annotations",
    ],
    devDetails: [
      "CI/CD pipeline setup and staging environment",
      "Performance audit (Lighthouse > 90)",
      "Error monitoring (Sentry) and analytics (PostHog) integration",
    ],
  },
  {
    number: "06",
    phase: "Iterate",
    title: "Learn & Improve",
    color: "bg-primary",
    designDetails: [
      "Post-launch usability review with real users",
      "Heatmap and session recording analysis",
      "Backlog of improvements prioritised by impact",
    ],
    devDetails: [
      "Performance monitoring and optimisation",
      "Feature flags for progressive rollout",
      "Monthly retrospective and roadmap refinement",
    ],
  },
];

function SectionWrapper({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className={className}>
      {children}
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 60, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-background border-[4px] border-black max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        style={{ boxShadow: "12px 12px 0px #000" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`${project.accentColor} border-b-[4px] border-black p-6 flex items-start justify-between`}>
          <div>
            <span className="font-mono text-xs uppercase tracking-widest border-[2px] border-black bg-white px-3 py-1 inline-block mb-3">
              {project.subtitle}
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">{project.title}</h2>
          </div>
          <button
            onClick={onClose}
            data-testid="button-modal-close"
            className="border-[3px] border-black bg-white p-2 brutal-shadow hover:bg-secondary transition-colors shrink-0 ml-4"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-8">
          <div className="aspect-video border-[3px] border-black overflow-hidden mb-8">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-[3px] border-black mb-8">
            {[
              { label: "Role", value: project.role },
              { label: "Year", value: project.year },
              { label: "Duration", value: project.duration },
            ].map((meta, i) => (
              <div key={meta.label} className={`p-4 sm:p-5 ${i < 2 ? "border-b-[3px] sm:border-b-0 sm:border-r-[3px] border-black" : ""}`}>
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-1">{meta.label}</div>
                <div className="font-black text-lg uppercase">{meta.value}</div>
              </div>
            ))}
          </div>

                    <div className="space-y-12 mb-12 mt-8">
            {/* 1. Overview */}
            <section>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4 border-b-[3px] border-black pb-2">1. Overview</h3>
              <p className="font-mono text-base mb-4">{project.shortDesc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(t => <span key={t} className="border-[2px] border-black px-3 py-1 font-mono text-xs font-bold uppercase bg-white">{t}</span>)}
              </div>
            </section>

            {/* 2. Problem Statement */}
            <section>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4 border-b-[3px] border-black pb-2">2. Problem Statement</h3>
              <p className="font-mono text-base"><strong>The Problem:</strong> {project.caseStudy.problem.statement}</p>
              <p className="font-mono text-base mt-2"><strong>Who faces it:</strong> {project.caseStudy.problem.whoFacesIt}</p>
            </section>

            {/* 3. Research */}
            <section>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4 border-b-[3px] border-black pb-2">3. Research</h3>
              <ul className="space-y-2 font-mono text-base">
                <li><strong className="bg-primary/20 px-1">Interviews:</strong> {project.caseStudy.research.userInterviews}</li>
                <li><strong className="bg-secondary/20 px-1">Surveys:</strong> {project.caseStudy.research.surveys}</li>
                {project.caseStudy.research.competitorAnalysis && <li><strong className="bg-[#B8F0A0]/30 px-1">Competitor Analysis:</strong> {project.caseStudy.research.competitorAnalysis}</li>}
              </ul>
            </section>

            {/* 4. Personas */}
            <section>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4 border-b-[3px] border-black pb-2">4. Personas</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-sm">
                <div className="border-[2px] border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"><strong className="uppercase border-b-[2px] border-black block pb-1">Goals</strong><ul className="list-disc pl-4 mt-3 space-y-1">{project.caseStudy.personas.goals.map(g => <li key={g}>{g}</li>)}</ul></div>
                <div className="border-[2px] border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"><strong className="uppercase border-b-[2px] border-black block pb-1">Pain Points</strong><ul className="list-disc pl-4 mt-3 space-y-1">{project.caseStudy.personas.painPoints.map(p => <li key={p}>{p}</li>)}</ul></div>
                <div className="border-[2px] border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"><strong className="uppercase border-b-[2px] border-black block pb-1">Motivations</strong><ul className="list-disc pl-4 mt-3 space-y-1">{project.caseStudy.personas.motivations.map(m => <li key={m}>{m}</li>)}</ul></div>
              </div>
            </section>

            {/* 5. User Journey Map */}
            <section>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4 border-b-[3px] border-black pb-2">5. User Journey Map</h3>
              <div className="space-y-4 font-mono text-base border-[2px] border-black p-5 bg-white">
                <div className="border-l-[4px] border-primary pl-4"><strong className="block mb-1 uppercase text-xs">Discovery</strong> {project.caseStudy.journey.discovery}</div>
                <div className="border-l-[4px] border-secondary pl-4"><strong className="block mb-1 uppercase text-xs">Interaction</strong> {project.caseStudy.journey.interaction}</div>
                <div className="border-l-[4px] border-[#B8F0A0] pl-4"><strong className="block mb-1 uppercase text-xs">Pain Points</strong> {project.caseStudy.journey.painPoints}</div>
              </div>
            </section>

            {/* 6. Information Architecture */}
            <section>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4 border-b-[3px] border-black pb-2">6. Information Architecture</h3>
              <p className="font-mono text-base mb-2"><strong>Sitemap:</strong> {project.caseStudy.architecture.sitemap}</p>
              <p className="font-mono text-base"><strong>Navigation Flow:</strong> {project.caseStudy.architecture.navigationFlow}</p>
            </section>

            {/* 7. Wireframes */}
            <section>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4 border-b-[3px] border-black pb-2">7. Wireframes</h3>
              <p className="font-mono text-base mb-2"><strong>Low Fidelity:</strong> {project.caseStudy.wireframes.lowFidelity}</p>
              <p className="font-mono text-base"><strong>Mid Fidelity:</strong> {project.caseStudy.wireframes.midFidelity}</p>
            </section>

            {/* 8. Design System */}
            <section>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4 border-b-[3px] border-black pb-2">8. Design System</h3>
              <ul className="space-y-2 font-mono text-base">
                <li><strong>Colors:</strong> {project.caseStudy.designSystem.colors}</li>
                <li><strong>Typography:</strong> {project.caseStudy.designSystem.typography}</li>
                <li><strong>Components:</strong> {project.caseStudy.designSystem.components}</li>
                <li><strong>Icons:</strong> {project.caseStudy.designSystem.icons}</li>
              </ul>
            </section>

            {/* 9. Final UI */}
            <section>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4 border-b-[3px] border-black pb-2">9. Final UI</h3>
              <ul className="space-y-2 font-mono text-base bg-[#C8B8FF]/20 p-4 border-[2px] border-black">
                <li><strong>Mobile Screens:</strong> {project.caseStudy.finalUI.mobileScreens}</li>
                <li><strong>Web Screens:</strong> {project.caseStudy.finalUI.webScreens}</li>
                <li><strong>Responsive Layouts:</strong> {project.caseStudy.finalUI.responsiveLayouts}</li>
              </ul>
            </section>

            {/* 10. Usability Testing */}
            <section>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4 border-b-[3px] border-black pb-2">10. Usability Testing</h3>
              <p className="font-mono text-base mb-2"><strong>Findings:</strong> {project.caseStudy.usabilityTesting.findings}</p>
              <p className="font-mono text-base border-l-[4px] border-black pl-3 ml-2 bg-gray-50 py-2"><strong>Iterations:</strong> {project.caseStudy.usabilityTesting.iterations}</p>
            </section>

            {/* 11. Impact & Learnings */}
            <section>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4 border-b-[3px] border-black pb-2">11. Impact & Learnings</h3>
              <div className="bg-primary border-[3px] border-black p-5">
                <p className="font-mono text-base mb-2"><strong className="text-black uppercase text-sm">Metrics Improved:</strong><br/>{project.caseStudy.impact.metricsImproved}</p>
                <p className="font-mono text-base"><strong className="text-black uppercase text-sm">Future Enhancements:</strong><br/>{project.caseStudy.impact.futureEnhancements}</p>
              </div>
            </section>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function SnippetModal({
  snippet,
  onClose,
}: {
  snippet: typeof designSnippets[0];
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/80 flex items-end sm:items-center justify-center p-0 sm:p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 60, opacity: 0 }}
        transition={{ type: "spring", stiffness: 320, damping: 30 }}
        className="bg-background border-[4px] border-black w-full sm:max-w-2xl max-h-[92vh] sm:max-h-[88vh] overflow-y-auto"
        style={{ boxShadow: "10px 10px 0px #000" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`${snippet.color} border-b-[4px] border-black p-5 sm:p-8 flex items-start justify-between gap-4`}>
          <div>
            <span className="font-mono text-xs uppercase tracking-widest border-[2px] border-black bg-white px-3 py-1 inline-block mb-4">
              {snippet.tag} · {snippet.year}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter leading-none">
              {snippet.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            data-testid="button-snippet-modal-close"
            className="border-[3px] border-black bg-white p-2 brutal-shadow hover:bg-secondary transition-colors shrink-0"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        <div className="p-5 sm:p-8 flex flex-col gap-8">
          {/* Description */}
          <p className="font-mono text-base leading-relaxed border-l-[6px] border-black pl-5">
            {snippet.description}
          </p>

          {/* Tools Used */}
          <div>
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-5 pb-3 border-b-[3px] border-black flex items-center gap-3">
              <span className="w-7 h-7 sm:w-8 sm:h-8 border-[3px] border-black bg-primary flex items-center justify-center text-xs font-black shrink-0">T</span>
              Tools Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {snippet.tools.map((tool) => (
                <motion.span
                  key={tool}
                  whileHover={{ x: -2, y: -2, boxShadow: "4px 4px 0px #000" }}
                  className="border-[3px] border-black bg-white px-4 py-2 font-bold uppercase tracking-wide text-sm brutal-shadow"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Design Trends */}
          <div>
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-5 pb-3 border-b-[3px] border-black flex items-center gap-3">
              <span className="w-7 h-7 sm:w-8 sm:h-8 border-[3px] border-black bg-secondary flex items-center justify-center text-xs font-black shrink-0">↗</span>
              Design Trends Applied
            </h3>
            <ul className="flex flex-col gap-3">
              {snippet.trends.map((trend, i) => (
                <motion.li
                  key={trend}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="flex items-start gap-4 font-mono text-sm leading-relaxed"
                >
                  <span className={`w-6 h-6 border-[2px] border-black flex items-center justify-center shrink-0 font-black text-xs mt-0.5 ${i % 2 === 0 ? "bg-primary" : "bg-secondary"}`}>
                    {i + 1}
                  </span>
                  <span>{trend}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Work() {
  const [activeProject, setActiveProject] = useState<typeof projects[0] | null>(null);
  const [activeSnippet, setActiveSnippet] = useState<typeof designSnippets[0] | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />

      {/* Hero */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 md:py-36 border-b-[3px] border-black relative overflow-hidden">
        <div className="absolute top-10 right-10 w-52 h-52 border-[3px] border-black bg-primary opacity-30 rotate-6" />
        <div className="absolute bottom-10 left-1/3 w-32 h-32 border-[3px] border-black bg-secondary opacity-20 -rotate-12" />
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="font-mono text-lg uppercase tracking-widest mb-4 text-muted-foreground"
          >
            — Selected Work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.9] mb-10"
          >
            The Work<br />
            <span className="text-secondary">Speaks.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl md:text-2xl font-mono max-w-2xl border-l-[6px] border-primary pl-6"
          >
            Projects that shipped, problems that were solved, and products that users actually wanted to use.
          </motion.p>
        </div>
      </section>

      {/* Marquee */}
      <div className="w-full border-y-[3px] border-black bg-primary py-4 overflow-hidden flex whitespace-nowrap transform -rotate-1 origin-center scale-105">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 18, repeat: Infinity }}
          className="flex font-black text-3xl tracking-tight uppercase"
        >
          {[...Array(4)].map((_, i) => (
            <span key={i} className="px-4">{MARQUEE_TEXT}</span>
          ))}
        </motion.div>
      </div>

      {/* Design Snippets */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 border-b-[3px] border-black bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionWrapper>
            <motion.p variants={fadeUp} className="font-mono text-lg uppercase tracking-widest mb-2 text-muted-foreground">
              — Quick Shots
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12">
              Design Snippets.
            </motion.h2>
          </SectionWrapper>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {designSnippets.map((snippet, i) => (
              <motion.div
                key={snippet.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ x: -3, y: -3, boxShadow: "6px 6px 0px #000" }}
                onClick={() => setActiveSnippet(snippet)}
                className="border-[3px] border-black brutal-shadow cursor-pointer group"
                data-testid={`snippet-card-${i}`}
              >
                <div className={`${snippet.color} border-b-[3px] border-black h-28 flex flex-col items-center justify-center relative overflow-hidden group-hover:bg-black transition-colors`}>
                  <img src={snippet.image} alt={snippet.title} className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:opacity-50 group-hover:scale-105 transition-all duration-500" />
                  {/* Hover reveal */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="font-black text-xs uppercase tracking-widest border-[2px] border-black bg-white px-2 py-1">
                      View Details
                    </span>
                  </div>
                </div>
                <div className="bg-background p-4">
                  <div className="text-sm font-bold uppercase tracking-tight mb-1 leading-tight">{snippet.title}</div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs border-[2px] border-black px-2 py-0.5 bg-white">{snippet.tag}</span>
                    <span className="font-mono text-xs text-muted-foreground">{snippet.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-4 sm:px-6 py-16 sm:py-32 border-b-[3px] border-black bg-background">
        <div className="max-w-6xl mx-auto">
          <SectionWrapper>
            <motion.p variants={fadeUp} className="font-mono text-lg uppercase tracking-widest mb-2 text-muted-foreground">
              — Deep Dives
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-16">
              Featured Projects.
            </motion.h2>
          </SectionWrapper>

          <div className="space-y-16">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 md:grid-cols-2 gap-0 border-[4px] border-black brutal-shadow group ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
                data-testid={`project-featured-${project.id}`}
              >
                {/* Image */}
                <div className={`${project.accentColor} border-b-[4px] md:border-b-0 ${i % 2 === 1 ? "md:border-l-[4px]" : "md:border-r-[4px]"} border-black relative overflow-hidden aspect-video md:aspect-auto`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 min-h-64"
                  />
                  <div className="absolute top-4 left-4 font-mono text-xs font-bold uppercase border-[2px] border-black bg-white px-3 py-1">
                    {project.year}
                  </div>
                </div>

                {/* Content */}
                <div className="bg-white p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground block mb-3">
                      {project.subtitle}
                    </span>
                    <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">{project.title}</h3>
                    <p className="font-mono text-base leading-relaxed mb-6">{project.shortDesc}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span key={tag} className="border-[2px] border-black px-3 py-1 font-mono text-xs font-bold uppercase bg-background">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-4 border-t-[3px] border-black pt-6 mb-8">
                      <div>
                        <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-1">Role</div>
                        <div className="font-bold text-sm uppercase">{project.role}</div>
                      </div>
                      <div>
                        <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-1">Duration</div>
                        <div className="font-bold text-sm uppercase">{project.duration}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <motion.button
                      whileHover={{ x: -3, y: -3, boxShadow: "6px 6px 0px #000" }}
                      whileTap={{ x: 1, y: 1, boxShadow: "2px 2px 0px #000" }}
                      onClick={() => setActiveProject(project)}
                      data-testid={`button-project-detail-${project.id}`}
                      className="self-start flex items-center gap-3 font-bold uppercase border-[3px] border-black bg-background px-6 py-3 brutal-shadow hover:bg-primary transition-colors"
                    >
                      View Case Study <ArrowUpRight className="w-5 h-5" />
                    </motion.button>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      whileHover={{ x: -3, y: -3, boxShadow: "6px 6px 0px #000" }}
                      whileTap={{ x: 1, y: 1, boxShadow: "2px 2px 0px #000" }}
                      className="self-start flex items-center gap-3 font-bold uppercase border-[3px] border-black bg-white px-6 py-3 brutal-shadow hover:bg-secondary transition-colors"
                    >
                      Live <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="px-4 sm:px-6 py-16 sm:py-32 bg-white border-b-[3px] border-black">
        <div className="max-w-6xl mx-auto">
          <SectionWrapper>
            <motion.p variants={fadeUp} className="font-mono text-lg uppercase tracking-widest mb-2 text-muted-foreground">
              — My Process
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
              How I Work.
            </motion.h2>
            <motion.p variants={fadeUp} className="font-mono text-base sm:text-lg max-w-2xl mb-10 sm:mb-20 text-muted-foreground">
              Six phases, two disciplines, one person. Here's exactly what it looks like to work with me from first call to shipped product.
            </motion.p>
          </SectionWrapper>

          <div className="space-y-0">
            {workflowSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-[120px_1fr_1fr] border-[3px] border-black border-b-0 last:border-b-[3px]"
                data-testid={`workflow-step-${i}`}
              >
                {/* Number */}
                <div className={`${step.color} border-b-[3px] md:border-b-0 md:border-r-[3px] border-black flex flex-col items-center justify-center p-6`}>
                  <div className="text-5xl font-black tracking-tighter">{step.number}</div>
                  <div className="font-mono text-xs uppercase tracking-widest text-center mt-2">{step.phase}</div>
                </div>

                {/* Design column */}
                <div className="border-b-[3px] md:border-b-0 md:border-r-[3px] border-black p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-8 h-8 border-[2px] border-black bg-primary flex items-center justify-center font-black text-xs">D</span>
                    <span className="font-mono text-xs uppercase tracking-widest font-bold">Design</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-6">{step.title}</h3>
                  <ul className="space-y-3">
                    {step.designDetails.map((detail) => (
                      <li key={detail} className="flex items-start gap-3 font-mono text-sm">
                        <span className="w-5 h-5 border-[2px] border-black bg-primary flex items-center justify-center shrink-0 font-black text-xs mt-0.5">
                          +
                        </span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Dev column */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-8 h-8 border-[2px] border-black bg-secondary flex items-center justify-center font-black text-xs">E</span>
                    <span className="font-mono text-xs uppercase tracking-widest font-bold">Engineering</span>
                  </div>
                  <h3 className="hidden md:block text-2xl font-black uppercase tracking-tight mb-6 opacity-0 select-none">{step.title}</h3>
                  <ul className="space-y-3">
                    {step.devDetails.map((detail) => (
                      <li key={detail} className="flex items-start gap-3 font-mono text-sm">
                        <span className="w-5 h-5 border-[2px] border-black bg-secondary flex items-center justify-center shrink-0 font-black text-xs mt-0.5">
                          +
                        </span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 bg-secondary text-black text-center">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8"
          >
            Your Project<br />Is Next.
          </motion.h2>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            href="mailto:harish@design.dev"
            data-testid="link-work-email"
            className="inline-flex items-center gap-3 font-bold uppercase text-xl border-[4px] border-black bg-white px-10 py-5 brutal-shadow hover:bg-primary transition-colors"
          >
            Start a Project <ArrowRight className="w-6 h-6" />
          </motion.a>
        </div>
      </section>

      <AnimatePresence>
        {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
      </AnimatePresence>

      <AnimatePresence>
        {activeSnippet && <SnippetModal snippet={activeSnippet} onClose={() => setActiveSnippet(null)} />}
      </AnimatePresence>
    </div>
  );
}
