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
  {
    title: "Mobile Nav Pattern",
    tag: "UX",
    color: "bg-[#B8F0A0]",
    image: snippet3Url,
    year: "2023",
    description:
      "Redesigned a tab bar into a floating gesture-aware navigation that adapts to thumb reach zones on all screen sizes.",
    tools: ["Figma"],
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
    tools: ["Figma"],
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
    tools: ["Figma"],
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
    tools: ["Figma"],
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
    tools: ["Figma"],
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
    tools: ["Figma"],
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

    // Standardized 11-Part Case Study Data Structure
    caseStudy: {
      title: {
        headline: "WORKSphere: Consolidating 6 Fragmented HR Portals into 1 Unified Workplace Hub",
        mainWin: "Consolidated 6 HR Tools & Reduced HR Support Tickets by 30%",
        subtitle: "Enterprise Employee Experience Platform Redesign",
        role: "Lead UX/UI Designer | Design System Lead",
        timeline: "6 Months (Q1–Q2 2024)",
        platform: "Web Dashboard & Native Mobile App",
        team: "1 Product Designer, 4 Engineers, 1 Product Manager",
      },

      // 01. PROBLEM
      problem: {
        headline: "Tool Fragmentation, Cognitive Overload & Operational Lag",
        description: "Over 5,000 enterprise employees were forced to navigate 6 disconnected legacy platforms daily for attendance, OKR updates, leave requests, and company announcements. This resulted in extreme tool fatigue, lost records, and 4 hours per week of wasted manager overhead.",
        painPoints: [
          "Employees logged into 6 different tools daily (HR, Leave, OKRs, Tasks, IT, Payroll).",
          "Daily attendance check-in took 4 minutes of tedious navigation across legacy portals.",
          "Managers spent 4+ hours every week manually consolidating team status reports.",
          "Critical company announcements and HR updates were routinely buried in email threads.",
        ],
        businessGoal: "Consolidate administrative workflows into a single SSO interface, reduce daily check-in time below 45 seconds, and decrease HR support tickets by at least 25%.",
        initialMetrics: [
          { label: "Systems Navigated", value: "6 Portals Daily" },
          { label: "Daily Check-in Time", value: "4 Minutes / User" },
          { label: "Manager Overhead", value: "4 Hours / Week" },
          { label: "HR Support Tickets", value: "1,200+ / Month" },
        ],
      },

      // 02. RESEARCH
      research: {
        headline: "Uncovering the Root Causes of Employee Friction",
        summary: "To understand operational bottlenecks, I conducted mixed-methods user research across 4 global offices, shadowing employees during morning routines and analyzing system analytics.",
        methods: [
          { name: "Contextual Shadowing", sampleSize: "18 Employees", output: "Observed 18 live morning clock-in workflows to map exact click pathways and error states." },
          { name: "User Interviews", sampleSize: "32 Participants", output: "In-depth sessions with engineers, department leads, and HR administrators." },
          { name: "Quantitative Survey", sampleSize: "410 Employees", output: "Gathered System Usability Scale (SUS) scores and identified top 3 daily tasks." },
          { name: "Competitor Audit", sampleSize: "4 Platforms", output: "Evaluated Workday, BambooHR, Rippling, and Lattice on data density and navigation." },
        ],
        findings: [
          "78% of surveyed employees reported extreme frustration with multi-tool logins.",
          "84% of missed attendance logs were caused by non-responsive mobile web portals.",
          "Managers rated existing reporting tools 3.2/10 for scannability and ease of export.",
        ],
        competitorAudit: [
          { name: "Workday", gap: "Overwhelming information density; requires 5 clicks for simple leave requests." },
          { name: "Rippling", gap: "Strong IT automation, but lack of modular widget personalization for individual roles." },
          { name: "Lattice", gap: "Great for OKRs, but entirely disconnected from daily operational check-ins." },
        ],
      },

      // 03. INSIGHTS
      insights: {
        headline: "Synthesizing Data into Strategic Design Opportunities",
        keyInsights: [
          {
            title: "Tool Fatigue Leads to System Abandonment",
            description: "When employees must switch tabs 6 times to complete 1 task, compliance drops by 60%. Consolidation is a necessity for data integrity.",
            impact: "High Impact"
          },
          {
            title: "Manager Overhead is Caused by Data Silos",
            description: "Managers aren't slow at reporting; they are human ETL pipelines copy-pasting numbers between un-integrated dashboards.",
            impact: "High Impact"
          },
          {
            title: "Contextual Quick-Actions > Complex Menus",
            description: "Over 90% of daily interactions are micro-actions (clock-in, request PTO, check team status) that should take under 3 seconds.",
            impact: "Medium Impact"
          },
        ],
        hmwStatements: [
          "How might we unite daily attendance, OKRs, and requests into a 1-click central hub?",
          "How might we give managers automatic team velocity analytics without manual report compilation?",
          "How might we design a modular UI that respects different role permissions without creating visual clutter?",
        ],
        personas: [
          {
            name: "Alex Rivera",
            role: "Software Engineer",
            quote: "I just want to clock in, see my daily goals, and get to coding without 5 logins.",
            painPoint: "Forgetting multi-system logins and missing critical HR updates.",
            goal: "Complete morning check-in under 30 seconds from mobile or web.",
          },
          {
            name: "David Chen",
            role: "Engineering Manager",
            quote: "I spend half my Friday copying spreadsheet rows across 4 dashboards for my status report.",
            painPoint: "Manual team status tracking and delayed PTO approvals.",
            goal: "Get an automated bird's-eye view of team availability and velocity.",
          },
        ],
      },

      // 04. USER FLOWS
      userFlows: {
        headline: "Architecting Streamlined, Low-Friction Pathways",
        summary: "I mapped out simplified user flows that eliminated 70% of intermediate navigation steps. The key innovation was introducing a persistent 'Quick Action Bar' that decouples micro-tasks from full page navigation.",
        flows: [
          {
            title: "Daily Attendance & Status Flow",
            trigger: "Employee opens web or mobile app",
            steps: ["SSO Auto-Authentication", "Persistent Quick Bar detects location", "1-Click Clock-In Trigger", "Instant Success Toast & Updated Ledger"],
            outcome: "Reduced steps from 9 clicks down to 1 click (30-second completion).",
          },
          {
            title: "Manager Team Leave Approval Flow",
            trigger: "Push notification or dashboard alert",
            steps: ["View Inline Pending Approval Widget", "Review Team Capacity & Conflict Indicator", "Approve / Reject with optional note", "Auto-Sync to HR & Payroll"],
            outcome: "Eliminated email back-and-forth; approval completed in under 10 seconds.",
          },
        ],
        architectureNotes: "Re-architected sitemap from 4-level deep nested menus into a flat 2-level structure organized by functional domain (My Workspace, Team Hub, Organization).",
      },

      // 05. WIREFRAMES
      wireframes: {
        headline: "Low-Fidelity Layout Exploration & Grid Mechanics",
        conceptExploration: "I explored three distinct layout models: a traditional fixed-list view, a multi-tab portal, and a modular widget grid. I conducted rapid paper wireframe tests with 10 users to test information scannability.",
        layoutDecisions: [
          { option: "Option A: Fixed-List Layout", rationale: "Simple to build, but users hated scrolling endlessly to find role-specific tools.", chosen: false },
          { option: "Option B: Multi-Tab Dashboard", rationale: "Separated tools well, but tab-switching preserved the cognitive friction of multi-tool usage.", chosen: false },
          { option: "Option C: Customizable Widget Grid", rationale: "Allowed employees to drag, pin, and prioritize widgets (e.g. OKRs top, Attendance side).", chosen: true },
        ],
        structuralTakeaways: [
          "Fixed left navigation rail proved 24% faster for cross-module jumping than top-nav bars.",
          "Widget headers needed standardized micro-CTAs (e.g., '+ Log Time' directly on widget card).",
        ],
      },

      // 06. DESIGN DECISIONS
      designDecisions: {
        headline: "UX Trade-offs, Visual Hierarchy & Design System Tokens",
        tradeOffs: [
          {
            decision: "Fixed Left Sidebar Rail vs Collapsible Drawer",
            tradeOff: "Sacrificed 60px of horizontal canvas space.",
            whyChosen: "Usability testing proved fixed rails reduced navigation time-on-task by 24% compared to hidden hamburger drawers.",
          },
          {
            decision: "Widget Grid Customization vs Preserved Team Layout",
            tradeOff: "Increased technical complexity in state storage.",
            whyChosen: "Engineers needed task-first widgets while managers needed analytics widgets. One size fits none.",
          },
        ],
        typography: {
          primary: "Inter",
          scale: "Display 48px / H1 32px / Body 16px / Caption 12px",
          rationale: "Selected for exceptional legibility at dense data scales and neutral geometric clarity.",
        },
        colorSystem: [
          { name: "Primary Orange", hex: "#FF5722", role: "Key CTAs & Brand Accent", contrastRatio: "4.8:1 (WCAG AA)" },
          { name: "Secondary Amber", hex: "#FFA000", role: "State Highlights & Badges", contrastRatio: "3.2:1 (Large Text)" },
          { name: "Dark Slate", hex: "#1A1A1A", role: "Primary Headers & Canvas Base", contrastRatio: "14.2:1 (Pass AAA)" },
          { name: "Light Off-White", hex: "#F4F4F0", role: "Card Surface & Container Contrast", contrastRatio: "1.1:1 Base" },
        ],
        componentSystem: "Built a production-ready Figma component library with 140+ variants featuring auto-layout 5.0, dark mode tokens, dense data tables, and micro-interaction states.",
      },

      // 07. PROTOTYPE
      prototype: {
        headline: "High-Fidelity Interactive Prototyping & Motion Mechanics",
        interactiveFlows: [
          {
            name: "Drag-and-Drop Widget Re-ordering",
            description: "Tested fluid grid reflow mechanics so users could customize their primary canvas.",
            microInteraction: "Spring animation (stiffness: 300, damping: 25) with elevation shadow bump on drag.",
          },
          {
            name: "Floating Quick Actions Bar",
            description: "Persistent bottom-right dock accessible across all sub-pages for instant 1-click actions.",
            microInteraction: "Slide up with backdrop blur (blur: 12px) and focus trap management.",
          },
        ],
        stateHandling: [
          "Skeleton loader patterns to prevent layout shift during async GraphQL requests.",
          "Empty state cards with contextual primary CTAs instead of blank gray boxes.",
          "Optimistic UI updates for clock-ins to give instant visual feedback before API resolution.",
        ],
      },

      // 08. TESTING
      testing: {
        headline: "Rigorous Usability Validation with 30 Enterprise Users",
        methodology: "Moderated usability sessions conducted via Maze and Zoom across 3 participant cohorts: Engineers (n=12), Managers (n=10), HR Admins (n=8).",
        participants: "30 Users across US, UK, and India offices",
        taskCompletionRate: "96.6% Overall Success Rate",
        usabilityFindings: [
          { task: "Task 1: Clock in for the workday", passRate: "100% (Avg 8s)", userFeedback: "The floating quick bar makes check-in feel instant." },
          { task: "Task 2: Approve team PTO request", passRate: "95% (Avg 14s)", userFeedback: "Seeing team capacity context right on the card stopped me from double-booking." },
          { task: "Task 3: Update quarterly OKR progress", passRate: "92% (Avg 22s)", userFeedback: "Much clearer than the old Lattice dropdown nightmare." },
        ],
      },

      // 09. ITERATION
      iteration: {
        headline: "Evolving the Design Based on Usability Data",
        refinements: [
          {
            before: "Sidebar collapsed automatically on screens below 1280px width.",
            issueFound: "Users on laptops lost primary navigation context and struggled to find the expand icon.",
            after: "Replaced auto-collapse with a persistent slim icon-rail mode (64px width).",
            impact: "Navigation error rate dropped to 0% on laptop screens.",
          },
          {
            before: "Quick Action bar was fixed to bottom-center of the screen.",
            issueFound: "Obscured table pagination buttons on dense financial audit tables.",
            after: "Repositioned Quick Action bar to bottom-right floating pill with auto-minimize on scroll.",
            impact: "Zero layout overlap issues during deep table interactions.",
          },
        ],
        pivotDecision: "Pivoted from rigid card containers to an fluid auto-layout grid based on user requests for custom data density.",
      },

      // 10. FINAL UI
      finalUi: {
        headline: "Production-Ready Interfaces & Interface Showcase",
        screens: [
          {
            title: "Unified Employee Dashboard",
            problem: "Scattered data across 6 disconnected portals causing tool fatigue.",
            layout: "Widget-based modular grid with drag-and-drop hierarchy and persistent status bar.",
            help: "Allows employees to see daily tasks, clock-in status, and company news in one single glance.",
          },
          {
            title: "Manager Oversight & Team Command Queue",
            problem: "Hours wasted compiling manual team status reports in spreadsheets.",
            layout: "Split-view table with real-time performance analytics, conflict indicators, and 1-click approvals.",
            help: "Provides immediate visibility into team OKRs and instant 1-click approvals with zero context switching.",
          },
        ],
      },

      // 11. RESULTS
      results: {
        headline: "Measurable Enterprise Impact & Business ROI",
        metrics: [
          { label: "Daily Check-in Time", before: "4 mins", after: "30 secs", change: "87.5% Faster" },
          { label: "Required System Logins", before: "6 Portals", after: "1 SSO Hub", change: "83% Reduction" },
          { label: "Manager Reporting Time", before: "4 hrs / week", after: "Automated", change: "100% Automated" },
          { label: "HR Support Tickets", before: "1,200 / mo", after: "840 / mo", change: "30% Decrease" },
        ],
        businessImpact: [
          "30% overall decrease in monthly HR support ticket volume within 30 days of rollout.",
          "94% positive satisfaction rating across 500-user enterprise employee beta cohort.",
          "Reclaimed 4 hours per manager every week for high-value strategic execution.",
          "Increased OKR update frequency from monthly to weekly across all engineering departments.",
        ],
        lessonsLearned: [
          "Productivity apps succeed when micro-actions take under 3 seconds.",
          "Data density requires progressive disclosure; don't show every field at once.",
          "Early engineering alignment on widget state API contracts prevented production scope creep.",
        ],
      },



      callToAction: {
        headline: "Ready to Transform Your Enterprise Employee Experience?",
        text: "Whether you need to consolidate complex software tools or build an intuitive SaaS platform, I can help you design a seamless product.",
        primaryBtnText: "Start a Conversation",
        primaryBtnLink: "/contact",
      },
    },
  },
  {
    id: 6,
    slug: "insighthub",
    category: "SaaS",
    title: "INSIGHTHUB",
    subtitle: "Business Intelligence Platform",
    image: project4Url,
    accentColor: "bg-primary",
    year: "2024",
    tags: ["Figma", "Data Visualization", "AI", "SaaS"],
    role: "UX Architect",
    duration: "4 months",
    shortDesc: "An executive analytics platform that centralized fragmented business reports into a unified decision-making dashboard with AI-generated insights.",
    link: "https://github.com/harish2n5/Harish-newPortfolio",

    // Standardized 11-Part Case Study Data Structure
    caseStudy: {
      title: {
        headline: "InsightHub: Accelerating Executive Decision Velocity by 85% with AI Plain-Language Summaries",
        mainWin: "Accelerated Executive Decision Speed by 85% with AI Plain-Language Summaries",
        subtitle: "Executive Analytics & AI Insight Platform",
        role: "Lead UX Architect | Data Visualization Designer",
        timeline: "4 Months (Q3 2024)",
        platform: "Web Application & Tablet Interface",
        team: "1 UX Architect, 1 AI Engineer, 3 Full-Stack Developers",
      },

      // 01. PROBLEM
      problem: {
        headline: "Dashboard Overload, Data Blindness & Decision Paralysis",
        description: "C-suite executives and financial leaders were drowning in overloaded Tableau dashboards containing 30+ dense charts without visual hierarchy. Executives spent over 15 minutes trying to decipher single reports or were forced to submit manual inquiry tickets to data analysts.",
        painPoints: [
          "BI Dashboards were overloaded with dense, un-annotated charts without hierarchy.",
          "Executives couldn't spot underlying metric anomalies without calling data analysts.",
          "Exporting and sharing reports to Slack or email was a cumbersome 10-step process.",
          "Charts lacked business context, leaving raw numbers open to misinterpretation.",
        ],
        businessGoal: "Reduce executive time-to-insight from 15 minutes to under 2 minutes, increase daily platform usage by 50%, and reduce ad-hoc analyst inquiry tickets by 35%.",
        initialMetrics: [
          { label: "Time-to-Insight", value: "15 Minutes" },
          { label: "Executive Daily Active", value: "25% Logins" },
          { label: "Analyst Inquiry Queue", value: "140 / Month" },
          { label: "Report Export Steps", value: "10 Manual Steps" },
        ],
      },

      // 02. RESEARCH
      research: {
        headline: "Executive Interviews & Data Literacy Investigation",
        summary: "I conducted qualitative research with 28 C-level executives and quantitative usage audits of Apex Financial's legacy Tableau dashboards to map how leaders process financial numbers under pressure.",
        methods: [
          { name: "C-Suite Interviews", sampleSize: "14 Leaders", output: "Discovered executives care about narrative explanations of 'Why' data changed over raw charts." },
          { name: "Contextual Audits", sampleSize: "28 Sessions", output: "Observed morning executive routines; 72% accessed reports via tablets while commuting." },
          { name: "Data Analyst Survey", sampleSize: "12 Analysts", output: "Mapped the top 20 repetitive questions executives asked weekly." },
          { name: "Tool Benchmarking", sampleSize: "3 Competitors", output: "Benchmarked Tableau, Looker, and ThoughtSpot on mobile accessibility and narration." },
        ],
        findings: [
          "89% of executives read text summaries before looking at graph axes.",
          "64% of ad-hoc analyst tickets were simple 'Why did conversion drop yesterday?' queries.",
          "Executives abandoned mobile dashboard apps if charts took >3 seconds to load or render.",
        ],
        competitorAudit: [
          { name: "Tableau", gap: "Deep data modeling capability, but terrible mobile UX and zero automated narration." },
          { name: "Looker", gap: "Great for data engineers, but incomprehensible for non-technical business leaders." },
          { name: "ThoughtSpot", gap: "Good search UI, but lacks proactive anomaly detection alerts." },
        ],
      },

      // 03. INSIGHTS
      insights: {
        headline: "Core Insights: Narrative-First Data Architecture",
        keyInsights: [
          {
            title: "Narrative Trumps Complex Charts",
            description: "Executives don't want to decipher multi-axis trend lines; they want a concise 2-sentence summary explaining the cause and recommended action.",
            impact: "High Impact"
          },
          {
            title: "Proactive Anomaly Detection is Mandatory",
            description: "Users shouldn't have to hunt for metric spikes or drops. The interface must flag outliers automatically.",
            impact: "High Impact"
          },
          {
            title: "Contextual Annotation Drives Collaboration",
            description: "Data analysis is a team sport. Leaders need to annotate charts directly and dispatch them to Slack in 1 click.",
            impact: "Medium Impact"
          },
        ],
        hmwStatements: [
          "How might we present complex BI metrics through plain-language narrative summaries?",
          "How might we instantly alert leaders to critical financial anomalies without manual filtering?",
          "How might we make data sharing to Slack feel as simple as sending a text message?",
        ],
        personas: [
          {
            name: "Marcus Vance",
            role: "Chief Marketing Officer",
            quote: "Just tell me if conversion velocity is up or down today and explain why in plain English.",
            painPoint: "Waiting hours for data analysts to explain simple metric dips.",
            goal: "Review morning KPIs in 2 minutes on iPad before board meetings.",
          },
        ],
      },

      // 04. USER FLOWS
      userFlows: {
        headline: "Narrative-First Navigation Architecture",
        summary: "I flipped traditional BI navigation upside down. Instead of forcing users through nested folders of charts, InsightHub opens directly to a prioritized AI Narrative Feed.",
        flows: [
          {
            title: "Executive Morning Digest & Deep-Dive Flow",
            trigger: "Morning push alert or platform launch",
            steps: ["Launch AI Narrative Digest", "Read Priority 1 Story Summary", "Expand Supporting Chart Panel", "Annotate & Share to Slack Channel"],
            outcome: "Completed in 90 seconds with zero reliance on data analysts.",
          },
          {
            title: "Automated Anomaly Alert Resolution Flow",
            trigger: "Real-time anomaly notification",
            steps: ["Tap Anomaly Flag", "Review Root Cause AI Breakdown", "View Impacted Customer Cohort", "Assign Action Item to VP"],
            outcome: "Immediate strategic alignment within 3 minutes of anomaly occurrence.",
          },
        ],
        architectureNotes: "Shifted from a 3-tier menu tree (Folders -> Dashboards -> Charts) to a flat 2-view architecture (Executive Digest View & Deep Dive Workspace).",
      },

      // 05. WIREFRAMES
      wireframes: {
        headline: "From Grid of Charts to Feed of Insights",
        conceptExploration: "Early lo-fi wireframe concepts explored traditional 3x3 chart grids versus a vertical feed model. Usability testing quickly proved that chart grids caused immediate visual fatigue.",
        layoutDecisions: [
          { option: "Option A: 3x3 Chart Grid with Tooltips", rationale: "Traditional BI style; users immediately felt overwhelmed by 9 competing graphs.", chosen: false },
          { option: "Option B: Tabbed Chart Categories", rationale: "Reduced clutter, but hid crucial cross-departmental correlation signals.", chosen: false },
          { option: "Option C: Vertical AI Story Feed with Collapsible Charts", rationale: "Puts plain-English narrative first, with charts expandable as supporting evidence.", chosen: true },
        ],
        structuralTakeaways: [
          "Typography size for AI narrative headers needed to be 24px minimum for scan speed.",
          "Chart annotations required persistent side-drawer UI rather than modal popups.",
        ],
      },

      // 06. DESIGN DECISIONS
      designDecisions: {
        headline: "Design System & Typographic Science for Data Density",
        tradeOffs: [
          {
            decision: "Narrative Summary First vs Visual Graph First",
            tradeOff: "Reduced initial graph visual real estate by 40%.",
            whyChosen: "Executive testing proved leaders read the narrative summary first 100% of the time before looking at chart axes.",
          },
          {
            decision: "Strict Palette Limits (Indigo/Cyan/Red) vs Multi-Color Data Lines",
            tradeOff: "Fewer concurrent data series displayed on single chart.",
            whyChosen: "Multi-color rainbow charts failed WCAG accessibility standards and caused decision fatigue.",
          },
        ],
        typography: {
          primary: "Satoshi",
          scale: "Display 52px / AI Header 24px / Body 16px / Mono Data 13px",
          rationale: "Modern geometric sans-serif engineered for high data scannability and executive elegance.",
        },
        colorSystem: [
          { name: "Electric Indigo", hex: "#4F46E5", role: "Primary Accent & Key Metrics", contrastRatio: "5.6:1 (WCAG AA)" },
          { name: "Cyan Spark", hex: "#06B6D4", role: "Trend Indicators & Secondary Series", contrastRatio: "3.4:1 (Large Text)" },
          { name: "Deep Obsidian", hex: "#0F172A", role: "Dark Canvas & Navigation Background", contrastRatio: "15.8:1 (Pass AAA)" },
          { name: "Pure Light", hex: "#FFFFFF", role: "Card Surface & High Contrast Text", contrastRatio: "1.0:1 Base" },
        ],
        componentSystem: "Designed a specialized data visualization component kit with accessible color-blind safe palettes, custom SVG sparklines, and interactive tooltip triggers.",
      },

      // 07. PROTOTYPE
      prototype: {
        headline: "High-Fidelity Interactive Prototype & Motion Details",
        interactiveFlows: [
          {
            name: "AI Typing Narrative Effect",
            description: "Simulated real-time streaming AI insight generation to build user confidence in data freshness.",
            microInteraction: "Staggered letter reveal (15ms delay) with subtle glowing cyan indicator pill.",
          },
          {
            name: "Interactive Point-and-Click Chart Annotation",
            description: "Allowed users to click any data point, type a note, and generate a formatted Slack preview card.",
            microInteraction: "Focus pulse on chart node with spring-loaded annotation callout box.",
          },
        ],
        stateHandling: [
          "Graceful fallbacks when AI confidence score drops below 85% (flags for human analyst review).",
          "Real-time indicator badge for live WebSocket market data feeds.",
        ],
      },

      // 08. TESTING
      testing: {
        headline: "Usability Evaluation with C-Suite Leaders",
        methodology: "Conducting 15 one-on-one moderated usability testing sessions with C-level executives and Senior VPs across finance, marketing, and operations.",
        participants: "15 C-Suite Executives & VPs",
        taskCompletionRate: "93.3% Task Success Rate",
        usabilityFindings: [
          { task: "Task 1: Identify yesterday's revenue driver", passRate: "100% (Avg 12s)", userFeedback: "I read the AI headline and knew the exact cause in 10 seconds." },
          { task: "Task 2: Export annotated chart to Slack", passRate: "93% (Avg 18s)", userFeedback: "Way faster than taking screenshots and cropping them." },
          { task: "Task 3: Deep dive into conversion drop", passRate: "87% (Avg 35s)", userFeedback: "The side-by-side chart expansion makes total sense." },
        ],
      },

      // 09. ITERATION
      iteration: {
        headline: "Refining UX Based on Executive Feedback",
        refinements: [
          {
            before: "Chart graphs occupied 70% of screen height with text below.",
            issueFound: "Executives scrolled right past charts to find text explanations.",
            after: "Flipped layout: 24px AI text summary at top, chart graph below in secondary container.",
            impact: "Executive satisfaction score increased from 6.4/10 to 9.2/10.",
          },
          {
            before: "Sharing required exporting a PDF attachment.",
            issueFound: "Slack/Teams users ignored PDF attachments due to download friction.",
            after: "Replaced PDF export with native 1-click Slack message card preview.",
            impact: "Report sharing frequency increased by 310%.",
          },
        ],
        pivotDecision: "Shifted focus from building complex query builder tools to perfecting the plain-language AI narration engine.",
      },

      // 10. FINAL UI
      finalUi: {
        headline: "Executive-Grade Visual Interface Showcase",
        screens: [
          {
            title: "Executive Newsfeed & Digest View",
            problem: "Information overload from static chart grids in legacy BI tools.",
            layout: "Single-column feed of prioritized AI insight cards with inline metric indicators.",
            help: "Puts plain-English narrative front and center before detailed numbers, cutting time-to-insight to seconds.",
          },
          {
            title: "Deep Dive Anomaly Analysis Workspace",
            problem: "Lack of context on sudden metric drops forcing calls to analysts.",
            layout: "Split-view: Interactive chart on left, AI cause analysis and cohort breakdown on right.",
            help: "Allows deep-dive exploration without losing the high-level narrative summary.",
          },
        ],
      },

      // 11. RESULTS
      results: {
        headline: "Empirical Business Impact & Executive Adoption",
        metrics: [
          { label: "Time to Insight", before: "15 mins", after: "2 mins", change: "86.7% Faster" },
          { label: "Ad-hoc Analyst Tickets", before: "140 / mo", after: "84 / mo", change: "40% Decrease" },
          { label: "Executive Daily Users", before: "25%", after: "85%", change: "+60% Increase" },
          { label: "Report Sharing Speed", before: "10 mins", after: "Instant", change: "90% Faster" },
        ],
        businessImpact: [
          "Increased daily executive login rate from 25% to 85% within 60 days of launch.",
          "Cut ad-hoc data analysis requests by 40%, freeing data engineers for core modeling.",
          "Pioneered a 'narrative-first' UX model adopted across Apex Financial's entire product suite.",
          "Accelerated strategic quarter-end decision turnaround by over 85%.",
        ],
        lessonsLearned: [
          "Data literacy varies wildly; plain language is the ultimate UI equalizer.",
          "Anomalies require immediate contextual callouts, not hidden filter menus.",
          "Mobile-first responsive charts are non-negotiable for executive-level adoption.",
        ],
      },



      callToAction: {
        headline: "Want to Turn Complex Data into Actionable Intelligence?",
        text: "Let's build intelligent analytics dashboards and data products that your leadership team will actually love to use.",
        primaryBtnText: "Book a Strategy Session",
        primaryBtnLink: "/contact",
      },
    },
  },
  {
    id: 5,
    slug: "supplychain-nexus",
    category: "Enterprise",
    title: "SUPPLYCHAIN NEXUS",
    subtitle: "Procurement System",
    image: project3Url,
    accentColor: "bg-[#FFD6A0]",
    year: "2024",
    tags: ["Figma", "Complex Workflows", "RBAC", "SaaS"],
    role: "UI/UX Designer",
    duration: "5 months",
    shortDesc: "An enterprise procurement platform that digitized the complete purchasing lifecycle from request creation to vendor payment approval.",
    link: "https://github.com/harish2n5/Harish-newPortfolio",

    // Standardized 11-Part Case Study Data Structure
    caseStudy: {
      title: {
        headline: "SupplyChain Nexus: Cutting Enterprise Procurement Approval Cycles from 18 Days to 4 Days",
        mainWin: "Slashed Approval Cycle from 18 Days to 4 Days (78% Reduction)",
        subtitle: "Enterprise B2B Procurement Platform",
        role: "Lead UI/UX Designer | Workflow Architect",
        timeline: "5 Months (Q2–Q3 2024)",
        platform: "Enterprise Web Portal & Vendor App",
        team: "1 Lead UX Designer, 5 Backend/Frontend Devs, 1 Domain Expert",
      },

      // 01. PROBLEM
      problem: {
        headline: "Opaque Approval Chains, Rogue Spend & Paper Bottlenecks",
        description: "Enterprise logistics operations relied on paper requisition forms, untracked email threads, and opaque approval rules across 200 hubs. Purchase requisitions routinely stalled for up to 18 days in approval 'black holes', leading to unapproved rogue spending and audit compliance risks.",
        painPoints: [
          "Purchase requisitions took up to 3 weeks due to lost email chains.",
          "Finance directors lacked real-time budget context when reviewing purchase orders.",
          "Requesters sent 15+ status inquiry emails per week asking 'Where is my order stuck?'",
          "Rogue unapproved spending occurred frequently to bypass slow paperwork.",
        ],
        businessGoal: "Digitize 100% of purchase requisitions, reduce approval turnaround below 5 days, eliminate status inquiry emails, and ensure 100% audit compliance.",
        initialMetrics: [
          { label: "Approval Cycle", value: "18 Days Average" },
          { label: "Status Emails", value: "15 / Week / User" },
          { label: "Paper Form Usage", value: "100% Manual" },
          { label: "Audit Compliance", value: "72% Pass Rate" },
        ],
      },

      // 02. RESEARCH
      research: {
        headline: "Workflow Mapping & Shadowing Procurement Teams",
        summary: "I spent 3 weeks conducting workflow mapping workshops and shadowing 12 finance directors, procurement officers, and warehouse leads across 3 international hubs.",
        methods: [
          { name: "Workflow Shadowing", sampleSize: "12 Approvers", output: "Observed finance leaders review 40+ purchase orders without budget visibility." },
          { name: "Process Mapping", sampleSize: "5 Workshops", output: "Mapped out all 24 sub-steps from request creation to vendor payment." },
          { name: "Procurement Audit", sampleSize: "150 Past POs", output: "Identified that 68% of approval delays occurred at the Finance Verification step." },
          { name: "Vendor Survey", sampleSize: "40 Suppliers", output: "Gathered feedback on payment delays and document verification bottlenecks." },
        ],
        findings: [
          "Finance directors routinely delayed approvals because remaining budget balance wasn't visible on screen.",
          "92% of requesters had zero visibility into which manager currently held their request.",
          "Paper forms caused 14% of purchase orders to suffer missing item spec errors.",
        ],
        competitorAudit: [
          { name: "SAP Ariba", gap: "Extremely complex UI; requires weeks of training for simple requisition entry." },
          { name: "Coupa", gap: "Strong budget controls, but lacks visual approval progress tracking for end requesters." },
          { name: "Zip", gap: "Modern intake UI, but lacks multi-regional tax & vendor compliance audit trails." },
        ],
      },

      // 03. INSIGHTS
      insights: {
        headline: "Key Insights: Transparency & Context-Driven Approvals",
        keyInsights: [
          {
            title: "Approvers Need Context Above the Fold",
            description: "Approvers don't delay orders out of laziness; they delay because they lack immediate budget context to sign off with confidence.",
            impact: "High Impact"
          },
          {
            title: "Visual Status Eliminates Inquiry Noise",
            description: "Showing requesters a visual 4-stage vertical pipeline completely stops 'Where is my order?' emails to finance.",
            impact: "High Impact"
          },
          {
            title: "Error Prevention UI > Post-Hoc Validation",
            description: "Validating vendor specs dynamically during form entry prevents weeks of invoice discrepancy resolution downstream.",
            impact: "Medium Impact"
          },
        ],
        hmwStatements: [
          "How might we give finance approvers immediate budget ledger context directly on the sign-off screen?",
          "How might we visualize multi-stage approval status so requesters never need to email finance?",
          "How might we design a dense enterprise UI that prevents accidental high-value bulk approval mistakes?",
        ],
        personas: [
          {
            name: "Elena Rostova",
            role: "Finance Director",
            quote: "I won't sign off on a $50,000 purchase order unless I see the current department budget right in front of me.",
            painPoint: "Approving purchase orders blind without real-time ledger balance visibility.",
            goal: "Approve 30+ daily requisitions confidently in under 15 minutes.",
          },
        ],
      },

      // 04. USER FLOWS
      userFlows: {
        headline: "End-to-End Digitized Procurement Lifecycle",
        summary: "I mapped out a unified 4-step digital workflow that automates approval routing based on monetary threshold rules and department budgets.",
        flows: [
          {
            title: "Requisition Creation to Approval Routing",
            trigger: "Warehouse manager submits item request",
            steps: ["Dynamic Item Search", "Auto-Populate Vendor Specs", "Rule Engine Calculates Approval Path", "Dispatched to Manager & Finance"],
            outcome: "Reduced intake creation time from 20 minutes to 3 minutes.",
          },
          {
            title: "Finance Multi-Order Approval Workspace",
            trigger: "Batch approval alert notification",
            steps: ["Open Split-Pane Command Center", "Inspect Ledger Balance & ROI Quote", "Execute 1-Click Approval", "Auto-Generate Vendor PO & PDF"],
            outcome: "Approval time cut from 18 days down to 4 days.",
          },
        ],
        architectureNotes: "Engineered Role-Based Access Control (RBAC) architecture separating Requester, Approver, Finance Admin, and Vendor Portal permissions.",
      },

      // 05. WIREFRAMES
      wireframes: {
        headline: "Structuring Dense Information for Error Prevention",
        conceptExploration: "Wireframe iterations focused on balancing high data density with visual scannability for finance directors processing dozens of high-value orders.",
        layoutDecisions: [
          { option: "Option A: Multi-Modal Popup Approvals", rationale: "Modals blocked background ledger context, forcing approvers to close and reopen dialogs.", chosen: false },
          { option: "Option B: Collapsible Table Rows", rationale: "Tidy, but required too many clicks to view attached vendor quotes.", chosen: false },
          { option: "Option C: Split-Pane Command Center", rationale: "Left pane displays active PO queue; sticky right pane displays real-time budget ledger & quotes.", chosen: true },
        ],
        structuralTakeaways: [
          "Sticky right-side context pane eliminated 80% of window tab-switching.",
          "High-value approvals (>$25K) required explicit 2-step slider confirmation to prevent misclicks.",
        ],
      },

      // 06. DESIGN DECISIONS
      designDecisions: {
        headline: "Enterprise Design System & UX Safety Guardrails",
        tradeOffs: [
          {
            decision: "Split-Pane Layout vs Full-Screen Detail View",
            tradeOff: "Reduced table width on smaller 13-inch laptop screens.",
            whyChosen: "Keeping the PO list and ledger side-by-side enabled rapid-fire sequential approvals without losing place in queue.",
          },
          {
            decision: "Explicit Confirmation Sliders vs Simple Buttons for >$25K POs",
            tradeOff: "Added 2 seconds of interaction time for high-value orders.",
            whyChosen: "Zero-tolerance for financial errors; prevented costly accidental sign-offs.",
          },
        ],
        typography: {
          primary: "Roboto & Roboto Mono",
          scale: "Header 28px / Subhead 18px / Table Data 13px / Ledger Mono 12px",
          rationale: "Optimized for high-density financial tables, strict vertical alignment, and numerical clarity.",
        },
        colorSystem: [
          { name: "Corporate Navy", hex: "#1E293B", role: "Enterprise Headers & Grids", contrastRatio: "14.1:1 (Pass AAA)" },
          { name: "Safety Amber", hex: "#F59E0B", role: "Pending Status & Alert Badges", contrastRatio: "3.1:1 (Large Text)" },
          { name: "Success Green", hex: "#10B981", role: "Approved Ledger Badges", contrastRatio: "4.6:1 (WCAG AA)" },
          { name: "Canvas Gray", hex: "#F3F4F6", role: "Form Surface & Table Borders", contrastRatio: "1.2:1 Base" },
        ],
        componentSystem: "Engineered a dense enterprise UI component library featuring collapsible data tables, visual status badges, and multi-step modal dialogs.",
      },

      // 07. PROTOTYPE
      prototype: {
        headline: "High-Fidelity Interactive Prototype & Role Simulations",
        interactiveFlows: [
          {
            name: "Visual Vertical Approval Tracker",
            description: "Dynamic timeline display showing active approver node, time elapsed, and next sign-off destination.",
            microInteraction: "Pulse animation on active approval node with tooltip showing approver contact info.",
          },
          {
            name: "Live Budget Ledger Calculation",
            description: "Real-time ledger bar reflecting balance deduction as PO total is typed.",
            microInteraction: "Smooth fill animation with warning color shift if budget exceeds 90% threshold.",
          },
        ],
        stateHandling: [
          "Role-switching toggle simulation in prototype to demonstrate Requester vs Approver permissions.",
          "Strict form validation highlighting missing vendor tax ID fields before submission.",
        ],
      },

      // 08. TESTING
      testing: {
        headline: "Usability Testing Across Finance & Logistics Teams",
        methodology: "Tested interactive prototypes with 20 key stakeholders across 3 logistics hubs (Chicago, London, Singapore).",
        participants: "20 Finance Directors & Logistics Leads",
        taskCompletionRate: "95.0% Overall Success Rate",
        usabilityFindings: [
          { task: "Task 1: Submit purchase order with quote", passRate: "100% (Avg 2.5m)", userFeedback: "Auto-populating vendor details saved me 15 minutes of typing." },
          { task: "Task 2: Approve pending PO with budget check", passRate: "95% (Avg 18s)", userFeedback: "Having the budget balance right on the right pane made sign-off instant." },
          { task: "Task 3: Track order status in pipeline", passRate: "90% (Avg 8s)", userFeedback: "Now I can see exactly whose desk my requisition is sitting on." },
        ],
      },

      // 09. ITERATION
      iteration: {
        headline: "Iterative Refinements for Enterprise Scale",
        refinements: [
          {
            before: "Approvers had to click a tab to view attached PDF vendor quotes.",
            issueFound: "Tab switching caused context loss and delayed sign-off.",
            after: "Embedded an in-line PDF viewer directly inside the right context pane.",
            impact: "Approval task duration decreased by 42%.",
          },
          {
            before: "Status tracker was a horizontal step bar at top of page.",
            issueFound: "Horizontal bars ran out of screen space on complex 6-stage approval chains.",
            after: "Redesigned tracker into a vertical branching timeline in the left sidebar.",
            impact: "Accommodated unlimited approval steps cleanly.",
          },
        ],
        pivotDecision: "Shifted from building separate web portals for each department to a unified RBAC single-page application.",
      },

      // 10. FINAL UI
      finalUi: {
        headline: "Enterprise Interface Showcase",
        screens: [
          {
            title: "Requester Live Tracking Portal",
            problem: "Requesters had zero visibility into where purchase orders were stuck.",
            layout: "Visual vertical milestone tracker with active approver tags and time-in-stage counters.",
            help: "Eliminates status anxiety by showing real-time approval progress and active sign-off contacts.",
          },
          {
            title: "Finance Approval Command Center",
            problem: "Finance directors approving blind without remaining budget context.",
            layout: "Split-pane layout with PO queue on left and sticky budget ledger + inline quote viewer on right.",
            help: "Allows 1-click approvals backed by instant financial data and audit compliance guardrails.",
          },
        ],
      },

      // 11. RESULTS
      results: {
        headline: "Measurable Impact & Enterprise ROI",
        metrics: [
          { label: "Average Approval Time", before: "18 Days", after: "4 Days", change: "77.8% Faster" },
          { label: "Status Inquiry Emails", before: "15 / week", after: "0 / week", change: "100% Eliminated" },
          { label: "Paper Form Usage", before: "100% Paper", after: "0% Paper", change: "100% Digitized" },
          { label: "Audit Compliance Rate", before: "72%", after: "100%", change: "+28% Increase" },
        ],
        businessImpact: [
          "Slashed average requisition cycle time from 18 days down to 4 days across 200 international hubs.",
          "Eliminated paper forms completely, saving $120,000 annually in administrative printing and manual entry.",
          "Achieved 100% audit compliance across all multi-regional procurement requests.",
          "Increased vendor onboarding turnaround speed by 65%.",
        ],
        lessonsLearned: [
          "Enterprise users don't want flashy minimalism; they want high information density with zero friction.",
          "Inline budget context is the single biggest accelerator for financial approval workflows.",
          "Clear visual status indicators eliminate thousands of status inquiry emails.",
        ],
      },



      callToAction: {
        headline: "Ready to Streamline Complex Enterprise Operations?",
        text: "Let's digitize your complex workflows and eliminate operational bottlenecks with intuitive enterprise software.",
        primaryBtnText: "Schedule a Consultation",
        primaryBtnLink: "/contact",
      },
    },
  },
];
