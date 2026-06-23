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
import { LaptopMockup, PhoneMockup, IsometricMockup } from "@/components/ui/Mockup";

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
      customSections: [
        { title: "Hook — the opening frame", content: "An AI-powered platform that helps users find relevant jobs, optimize resumes for ATS systems, generate cover letters, and track applications." },
        { title: "Context & problem statement", content: "Job seekers often apply to hundreds of jobs manually, use generic resumes, and struggle to track applications." },
        { title: "Research & discovery", content: "Analyzed existing job platforms and user pain points to identify gaps in ATS optimization and tracking." },
        { title: "Define — your problem reframe", content: "Presenting AI recommendations clearly while building trust in AI-generated suggestions." },
        { title: "Ideation & decisions", content: "Focused on an integrated workflow combining Job Search, Resume Analyzer, and Cover Letter Generator in one dashboard." },
        { title: "Design evolution", content: "Iterated through complex workflows to simplify AI matching and interview preparation." },
        { title: "Testing & iterations", content: "Refined the Resume Analyzer based on user feedback to ensure suggestions were actionable and transparent." },
        { title: "Outcome & reflection", content: "Delivered a comprehensive Application Tracker and User Profile, significantly improving user engagement and application success rates." }
      ]
    }
  },
  {
    id: 1,
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
  },
  {
    id: 2,
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
  }
,
  {
    id: 4,
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
      customSections: [
        { title: "Hook — the opening frame", content: "A unified HR platform that consolidated 6+ disconnected employee tools into a single system for attendance, performance, learning, and analytics management." },
        { title: "Context & problem statement", content: "Employees and HR admins had to navigate across 6+ disconnected platforms to manage attendance, OKRs, tasks, and reviews, causing extreme friction." },
        { title: "Research & discovery", content: "Identified key pain points across employees, managers, and HR admins to define a unified role-based experience." },
        { title: "Define — your problem reframe", content: "How might we create an intuitive, single-pane-of-glass experience for all HR and employee lifecycle activities without overwhelming the user?" },
        { title: "Ideation & decisions", content: "Architected an 8-module platform prioritizing Dashboard, Attendance, Tasks, OKRs, Performance Reviews, Learning Portal, Announcements, and HR Analytics." },
        { title: "Design evolution", content: "Created a scalable Design System with reusable components, typography tokens, and standardized UI patterns, accelerating developer handoff." },
        { title: "Testing & iterations", content: "Ensured WCAG 2.1 AA accessibility compliance across desktop, tablet, and mobile devices." },
        { title: "Outcome & reflection", content: "Successfully delivered interactive HR Analytics dashboards visualizing headcount trends, attrition rates, and leave utilization in a responsive interface." }
      ]
    }
  },
  {
    id: 5,
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
      customSections: [
        { title: "Hook — the opening frame", content: "An enterprise procurement platform that digitized the complete purchasing lifecycle from request creation to vendor payment approval." },
        { title: "Context & problem statement", content: "Manual, paper-based workflows led to approval bottlenecks and lack of visibility into vendor performance and spending." },
        { title: "Research & discovery", content: "Analyzed existing workflows for Requesters, Procurement Managers, and Finance Approvers." },
        { title: "Define — your problem reframe", content: "How might we build multi-role workflows that reduce approval bottlenecks and streamline purchasing journeys?" },
        { title: "Ideation & decisions", content: "Developed Purchase Request and Vendor Management modules featuring budget validation, performance scorecards, and contract tracking." },
        { title: "Design evolution", content: "Created high-fidelity data visualizations and vendor comparison tools integrating role-based access controls." },
        { title: "Testing & iterations", content: "Refined dashboards to ensure seamless monitoring of spending, vendor performance, and purchase order cycle times." },
        { title: "Outcome & reflection", content: "Successfully digitized the procurement lifecycle, leading to significantly faster approvals and enhanced budget utilization tracking." }
      ]
    }
  },
  {
    id: 6,
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
      customSections: [
        { title: "Hook — the opening frame", content: "An executive analytics platform that centralized fragmented business reports into a unified decision-making dashboard with AI-generated insights." },
        { title: "Context & problem statement", content: "Executives struggled to make quick decisions due to fragmented data sources and overly technical reports." },
        { title: "Research & discovery", content: "Explored how non-technical stakeholders interpret data and identified the need for plain-language narratives." },
        { title: "Define — your problem reframe", content: "How might we translate complex metric changes into actionable, easily understandable insights?" },
        { title: "Ideation & decisions", content: "Designed customizable KPI dashboards displaying Revenue, Gross Margin, NPS, and Headcount alongside a custom report builder." },
        { title: "Design evolution", content: "Implemented drag-and-drop widgets and accessible data visualizations optimized for color-blind users and screen readers." },
        { title: "Testing & iterations", content: "Refined the AI-generated insight summaries to ensure they accurately reflected metric changes in plain English." },
        { title: "Outcome & reflection", content: "Delivered a centralized platform featuring scheduled report delivery and intuitive drill-down analytics capabilities." }
      ]
    }
  },
  {
    id: 7,
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
      customSections: [
        { title: "Hook — the opening frame", content: "A centralized brand management system standardizing visual assets and marketing materials across digital and print channels." },
        { title: "Context & problem statement", content: "Multiple departments were creating inconsistent marketing materials, leading to brand fragmentation and diluted messaging." },
        { title: "Research & discovery", content: "Audited existing collateral and identified major inconsistencies in typography, color usage, and iconography." },
        { title: "Define — your problem reframe", content: "How might we create a comprehensive, accessible brand identity system that non-designers can easily adopt?" },
        { title: "Ideation & decisions", content: "Developed a comprehensive system including logo variations, color palettes, typography guidelines, and illustration styles." },
        { title: "Design evolution", content: "Established accessibility-focused visual standards with clear typography hierarchies and color contrast guidelines." },
        { title: "Testing & iterations", content: "Tested reusable design templates across social media campaigns, presentation decks, and print brochures." },
        { title: "Outcome & reflection", content: "Maintained a cohesive user experience across all touchpoints while scaling marketing output efficiently." }
      ]
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
            {/* @ts-ignore */}
            {project.caseStudy.customSections ? (
              // @ts-ignore
              project.caseStudy.customSections.map((sec: any, idx: number) => (
                <section key={sec.title}>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4 border-b-[3px] border-black pb-2">{idx + 1}. {sec.title}</h3>
                  <div className="font-mono text-base whitespace-pre-line">{sec.content}</div>
                </section>
              ))
            ) : (
              <>
                {/* 1. Hook */}
                <section>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4 border-b-[3px] border-black pb-2">1. Hook — the opening frame</h3>
                  <p className="font-mono text-base mb-4">{project.shortDesc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(t => <span key={t} className="border-[2px] border-black px-3 py-1 font-mono text-xs font-bold uppercase bg-white">{t}</span>)}
                  </div>
                </section>

                {/* 2. Context & problem statement */}
                <section>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4 border-b-[3px] border-black pb-2">2. Context & problem statement</h3>
                  {/* @ts-ignore */}
                  <p className="font-mono text-base"><strong>The Problem:</strong> {project.caseStudy.problem?.statement}</p>
                  {/* @ts-ignore */}
                  <p className="font-mono text-base mt-2"><strong>Who faces it:</strong> {project.caseStudy.problem?.whoFacesIt}</p>
                </section>

                {/* 3. Research & discovery */}
                <section>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4 border-b-[3px] border-black pb-2">3. Research & discovery</h3>
                  <ul className="space-y-2 font-mono text-base">
                    {/* @ts-ignore */}
                    <li><strong className="bg-primary/20 px-1">Interviews:</strong> {project.caseStudy.research?.userInterviews}</li>
                    {/* @ts-ignore */}
                    <li><strong className="bg-secondary/20 px-1">Surveys:</strong> {project.caseStudy.research?.surveys}</li>
                    {/* @ts-ignore */}
                    {project.caseStudy.research?.competitorAnalysis && <li><strong className="bg-[#B8F0A0]/30 px-1">Competitor Analysis:</strong> {project.caseStudy.research?.competitorAnalysis}</li>}
                  </ul>
                </section>

                {/* 4. Define — your problem reframe */}
                <section>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4 border-b-[3px] border-black pb-2">4. Define — your problem reframe</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-sm">
                    {/* @ts-ignore */}
                    <div className="border-[2px] border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"><strong className="uppercase border-b-[2px] border-black block pb-1">Goals</strong><ul className="list-disc pl-4 mt-3 space-y-1">{project.caseStudy.personas?.goals?.map((g: string) => <li key={g}>{g}</li>)}</ul></div>
                    {/* @ts-ignore */}
                    <div className="border-[2px] border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"><strong className="uppercase border-b-[2px] border-black block pb-1">Pain Points</strong><ul className="list-disc pl-4 mt-3 space-y-1">{project.caseStudy.personas?.painPoints?.map((p: string) => <li key={p}>{p}</li>)}</ul></div>
                    {/* @ts-ignore */}
                    <div className="border-[2px] border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"><strong className="uppercase border-b-[2px] border-black block pb-1">Motivations</strong><ul className="list-disc pl-4 mt-3 space-y-1">{project.caseStudy.personas?.motivations?.map((m: string) => <li key={m}>{m}</li>)}</ul></div>
                  </div>
                </section>

                {/* 5. Ideation & decisions */}
                <section>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4 border-b-[3px] border-black pb-2">5. Ideation & decisions</h3>
                  <div className="space-y-4 font-mono text-base border-[2px] border-black p-5 bg-white">
                    {/* @ts-ignore */}
                    <div className="border-l-[4px] border-primary pl-4"><strong className="block mb-1 uppercase text-xs">Discovery</strong> {project.caseStudy.journey?.discovery}</div>
                    {/* @ts-ignore */}
                    <div className="border-l-[4px] border-secondary pl-4"><strong className="block mb-1 uppercase text-xs">Interaction</strong> {project.caseStudy.journey?.interaction}</div>
                    {/* @ts-ignore */}
                    <div className="border-l-[4px] border-[#B8F0A0] pl-4"><strong className="block mb-1 uppercase text-xs">Pain Points</strong> {project.caseStudy.journey?.painPoints}</div>
                  </div>
                </section>

                {/* 6. Design evolution */}
                <section>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4 border-b-[3px] border-black pb-2">6. Design evolution</h3>
                  {/* @ts-ignore */}
                  <p className="font-mono text-base mb-2"><strong>Architecture:</strong> Sitemap: {project.caseStudy.architecture?.sitemap} | Flow: {project.caseStudy.architecture?.navigationFlow}</p>
                  {/* @ts-ignore */}
                  <p className="font-mono text-base mb-2"><strong>Wireframes:</strong> Low-fi: {project.caseStudy.wireframes?.lowFidelity} | Mid-fi: {project.caseStudy.wireframes?.midFidelity}</p>
                  {/* @ts-ignore */}
                  <p className="font-mono text-base mb-2"><strong>Design System:</strong> {project.caseStudy.designSystem?.colors}, {project.caseStudy.designSystem?.typography}, {project.caseStudy.designSystem?.components}</p>
                </section>

                {/* 7. Testing & iterations */}
                <section>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4 border-b-[3px] border-black pb-2">7. Testing & iterations</h3>
                  {/* @ts-ignore */}
                  <p className="font-mono text-base mb-2"><strong>Findings:</strong> {project.caseStudy.usabilityTesting?.findings}</p>
                  {/* @ts-ignore */}
                  <p className="font-mono text-base border-l-[4px] border-black pl-3 ml-2 bg-gray-50 py-2"><strong>Iterations:</strong> {project.caseStudy.usabilityTesting?.iterations}</p>
                </section>

                {/* 8. Outcome & reflection */}
                <section>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4 border-b-[3px] border-black pb-2">8. Outcome & reflection</h3>
                  <div className="bg-primary border-[3px] border-black p-5">
                    {/* @ts-ignore */}
                    <p className="font-mono text-base mb-2"><strong className="text-black uppercase text-sm">Metrics Improved:</strong><br/>{project.caseStudy.impact?.metricsImproved}</p>
                    {/* @ts-ignore */}
                    <p className="font-mono text-base"><strong className="text-black uppercase text-sm">Future Enhancements:</strong><br/>{project.caseStudy.impact?.futureEnhancements}</p>
                  </div>
                </section>
              </>
            )}
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
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);


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

          <div className="flex flex-wrap gap-4 mb-12">
            {["All", "SaaS", "Enterprise", "Mobile", "Design", "AI"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 font-mono text-sm uppercase tracking-widest font-bold border-[3px] border-black brutal-shadow transition-colors ${
                  activeFilter === filter ? "bg-primary" : "bg-white hover:bg-gray-100"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="space-y-16">
            {filteredProjects.map((project: any, i: number) => (
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
            href="mailto:harish2n5@gmail.com"
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
