import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, ExternalLink, X, ArrowUpRight } from "lucide-react";
import project1Url from "../assets/project-1.png";
import project2Url from "../assets/project-2.png";
import project3Url from "../assets/project-3.png";
import project4Url from "../assets/project-4.png";
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
    title: "Fintrack",
    subtitle: "Fintech Dashboard",
    image: project1Url,
    accentColor: "bg-primary",
    year: "2024",
    tags: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
    role: "Full Stack + UI Design",
    duration: "3 months",
    shortDesc: "Real-time financial data visualisation with uncompromising clarity.",
    longDesc:
      "Fintrack is a B2B fintech dashboard built for investment analysts who need to monitor portfolios, track transactions, and surface anomalies in real time. The challenge was making dense data feel instantly readable without hiding complexity behind oversimplification.",
    highlights: [
      "Custom D3.js chart library with 6 interactive chart types",
      "WebSocket-powered live data feeds with < 200ms latency",
      "Role-based access control for team/enterprise tiers",
      "Dark-mode-first design system with 40+ components",
    ],
  },
  {
    id: 1,
    title: "Threadly",
    subtitle: "Social Platform",
    image: project2Url,
    accentColor: "bg-secondary",
    year: "2024",
    tags: ["Next.js", "Prisma", "Redis", "Socket.io", "TailwindCSS"],
    role: "Full Stack + Product Design",
    duration: "4 months",
    shortDesc: "High-concurrency real-time interactions wrapped in brutalist aesthetics.",
    longDesc:
      "Threadly is a discussion platform designed for professional communities. It supports nested threads, real-time notifications, and rich media posts. The design challenge was achieving the warmth of an engaged community while scaling to 10k+ concurrent users.",
    highlights: [
      "Real-time notifications via Socket.io (10k+ concurrent users)",
      "Nested comment threading with optimistic UI updates",
      "Full-text search powered by PostgreSQL FTS",
      "Mobile-first responsive layout with PWA support",
    ],
  },
  {
    id: 2,
    title: "Oxide DS",
    subtitle: "Design System",
    image: project3Url,
    accentColor: "bg-[#B8F0A0]",
    year: "2023",
    tags: ["React", "TypeScript", "Storybook", "Figma", "Rollup"],
    role: "Design + Engineering",
    duration: "6 months",
    shortDesc: "A component library built for scale and hard, consistent impact.",
    longDesc:
      "Oxide is a design system built for a SaaS startup scaling from 3 to 30 engineers. The goal was to eliminate inconsistency across the product while enabling rapid feature development. Every component is typed, accessible, and documented with Storybook.",
    highlights: [
      "80+ production-ready React components",
      "Design tokens covering colour, typography, spacing, and elevation",
      "100% WCAG 2.1 AA accessibility compliance",
      "Figma library in sync with code via token pipeline",
    ],
  },
  {
    id: 3,
    title: "Flowmind",
    subtitle: "AI Productivity Tool",
    image: project4Url,
    accentColor: "bg-[#C8B8FF]",
    year: "2024",
    tags: ["Next.js", "OpenAI API", "Drizzle ORM", "Vercel AI SDK"],
    role: "Full Stack + UX Design",
    duration: "2 months",
    shortDesc: "Neural net workflows simplified for human velocity.",
    longDesc:
      "Flowmind is an AI-powered task management tool that uses GPT-4 to break down goals into actionable steps, prioritise by impact, and auto-schedule into the user's week. The UX challenge was making AI suggestions feel like assistance, not interference.",
    highlights: [
      "GPT-4 powered goal-decomposition with contextual prompts",
      "Drag-and-drop weekly planner with conflict detection",
      "Streak tracking and focus session timer (Pomodoro-based)",
      "One-click export to Notion, Linear, and Google Calendar",
    ],
  },
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

          <p className="font-mono text-base leading-relaxed mb-8">{project.longDesc}</p>

          <h3 className="text-2xl font-black uppercase tracking-tight mb-6 border-b-[3px] border-black pb-3">Key Highlights</h3>
          <ul className="space-y-3 mb-8">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-4 font-mono text-sm">
                <span className="w-6 h-6 border-[2px] border-black bg-primary flex items-center justify-center shrink-0 font-black text-xs mt-0.5">
                  +
                </span>
                {h}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span key={tag} className="border-[2px] border-black px-4 py-2 font-mono text-xs font-bold uppercase bg-white">
                {tag}
              </span>
            ))}
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
                <div className={`${snippet.color} border-b-[3px] border-black h-28 flex flex-col items-center justify-center relative overflow-hidden`}>
                  <span className="text-3xl font-black opacity-30 group-hover:opacity-0 transition-opacity duration-200">
                    {snippet.tag[0]}
                  </span>
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
                  <motion.button
                    whileHover={{ x: -3, y: -3, boxShadow: "6px 6px 0px #000" }}
                    whileTap={{ x: 1, y: 1, boxShadow: "2px 2px 0px #000" }}
                    onClick={() => setActiveProject(project)}
                    data-testid={`button-project-detail-${project.id}`}
                    className="self-start flex items-center gap-3 font-bold uppercase border-[3px] border-black bg-background px-6 py-3 brutal-shadow hover:bg-primary transition-colors"
                  >
                    View Case Study <ArrowUpRight className="w-5 h-5" />
                  </motion.button>
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
