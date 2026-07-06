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
      "A 5-step onboarding sequence that reduced drop-off by 40%. Each screen does exactly one job â€” no cognitive overload, no surprise asks.",
    tools: ["Figma", "FigJam", "Hotjar", "Maze", "Lottie"],
    trends: [
      "Progressive disclosure â€” reveal complexity only when needed",
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
      "Dark-mode-first â€” reduces eye strain during marathon sessions",
      "Sparklines and inline charts for at-a-glance trend reading",
      "Contextual tooltips instead of a separate legend",
      "Controlled data density â€” scannable rows, not walls of text",
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
      "Thumb-friendly zones â€” primary actions always within 75% reachability",
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
      "A system of illustrated empty states that turn zero-data moments into action prompts â€” not dead ends.",
    tools: ["Figma", "Lottie", "Principle", "Phosphor Icons"],
    trends: [
      "Contextual CTAs â€” every empty state offers the exact next action",
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
      "Social-first layout â€” OAuth buttons above the fold, password buried",
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
      "60+ custom icons built on a consistent 24px grid with two weight variants â€” designed for web and native.",
    tools: ["Figma", "Adobe Illustrator", "SVGO", "Iconoir"],
    trends: [
      "Variable stroke weight for UI icons (regular) vs. marketing (bold)",
      "Optical sizing â€” icons recorrected at 16px to feel equal weight",
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
      "Decoy pricing â€” mid-tier anchors the eye toward the target plan",
      "Annual/monthly toggle with instant savings visualisation",
      "Feature comparison table with sticky header on scroll",
      "Social proof clusters (logos + testimonials) adjacent to the CTA",
    ],
  },
];

export const projects = [
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
  }
];

