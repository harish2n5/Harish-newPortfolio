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
];

export const projects = [
  {
    id: 4,
    slug: "worksphere",
    category: "SaaS",
    title: "WORKSPHERE",
    subtitle: "Enterprise Employee Experience Platform",
    image: project2Url,
    processImage: snippet2Url,
    finalOutputImage: project1Url,
    accentColor: "bg-secondary",
    year: "2026",
    tags: ["Figma", "Design Systems", "WCAG 2.1", "Responsive Design"],
    role: "UI/UX Designer",
    duration: "8 Weeks",
    tools: ["Figma"],
    platform: "Mobile App",
    shortDesc: "Bringing fragmented employee workflows into one unified experience.",
    link: "https://github.com/harish2n5/Harish-newPortfolio",
    caseStudy: {
      heroTagline: "Bringing fragmented employee workflows into one unified experience.",
      targetUsers: {
        quote: "Designed for enterprise workforces, HR operations, and team managers.",
        paragraph: "WORKSPHERE addresses distinct operational friction points across three key organizational tiers to unify daily work.",
        users: [
          {
            role: "PRIMARY USER",
            title: "Enterprise Employees",
            desc: "Individual contributors tracking attendance, managing daily tasks, and completing reviews without app switching.",
            needs: ["One-click attendance & leave requests", "Unified task & OKR view", "Fast employee directory"]
          },
          {
            role: "MANAGEMENT",
            title: "Team Leads & Managers",
            desc: "Overseers managing team performance, approving leave requests, monitoring sprint goals, and leading check-ins.",
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
        problem: "Employees were switching between multiple disconnected workplace tools.",
        solution: "A centralized employee experience platform combining essential workflows.",
        result: "A more consistent and scalable experience across core workplace tasks.",
      },
      metrics: [
        { value: "6+", label: "Tools consolidated" },
        { value: "8", label: "Core modules" },
        { value: "40+", label: "Reusable components" },
        { value: "1", label: "Unified platform" },
      ],
      challenge: {
        quote: "Too many tools. Too much friction.",
        paragraph: "Employees had to move between multiple disconnected systems for attendance, tasks, OKRs, performance, learning and announcements.",
        cards: [
          { num: "01", title: "Fragmented workflows", desc: "Scattered data across legacy tools caused cognitive fatigue." },
          { num: "02", title: "Inconsistent experiences", desc: "Confusing navigation patterns across different modules." },
          { num: "03", title: "Difficult navigation", desc: "Essential everyday actions were buried 4 levels deep." },
        ],
      },
      goal: {
        quote: "Create one clear, connected experience for everyday employee workflows.",
        cards: [
          { title: "SIMPLIFY", desc: "Make navigation easier and faster." },
          { title: "CENTRALIZE", desc: "Bring important information into one view." },
          { title: "STANDARDIZE", desc: "Create consistent interactions across all modules." },
        ],
      },
      solution: {
        quote: "One platform. One consistent experience.",
        paragraph: "Designed a modular enterprise platform that consolidates attendance, tasks, OKRs, and team announcements into a unified workspace.",
        cards: [
          { title: "Unified Dashboard", desc: "Centralized overview of important employee information." },
          { title: "Connected Workflows", desc: "Attendance, tasks, OKRs, performance and learning in one system." },
          { title: "Consistent UI", desc: "Reusable patterns across all modules." },
          { title: "Scalable Design System", desc: "Components designed for future product expansion." },
        ],
      },
      decisions: [
        { num: "01", title: "INFORMATION HIERARCHY", desc: "Prioritized the information users need most frequently." },
        { num: "02", title: "NAVIGATION", desc: "Organized modules around clear user workflows instead of isolated features." },
        { num: "03", title: "CONSISTENCY", desc: "Created reusable components to maintain predictable interactions." },
      ],
      process: {
        intro: "I followed a user-centered design process to understand the problem, structure the experience and refine the final interface.",
        timeline: ["01 DISCOVER", "02 DEFINE", "03 IDEATE", "04 DESIGN", "05 TEST", "06 REFINE"],
        explanation: [
          { title: "DISCOVER", desc: "Identified user needs and existing workflow friction." },
          { title: "DESIGN", desc: "Explored information architecture, wireframes and visual directions." },
          { title: "REFINE", desc: "Improved hierarchy, navigation and component consistency." },
        ],
      },
      userFlow: [
        {
          step: "01",
          title: "AUTHENTICATE & CHECK-IN",
          desc: "Employee logs in via single sign-on (SSO) and registers daily attendance with 1-click biometric check-in.",
          highlight: "Zero friction start"
        },
        {
          step: "02",
          title: "UNIFIED DASHBOARD VIEW",
          desc: "Personalized widget board surfaces today's tasks, pending leave requests, sprint OKRs, and announcements.",
          highlight: "All-in-one glance"
        },
        {
          step: "03",
          title: "EXECUTE & REQUEST ACTIONS",
          desc: "Users submit leave requests, log sprint progress, or update OKR key results directly from the action bar.",
          highlight: "Instant execution"
        },
        {
          step: "04",
          title: "MANAGER APPROVAL & HR SYNC",
          desc: "Automated routing notifies managers for 1-click approval while syncing attendance with HR records.",
          highlight: "Automated routing"
        }
      ],
      finalOutput: {
        subheading: "A unified employee experience designed for clarity, consistency and scale.",
        cards: [
          { title: "DASHBOARD", desc: "Quick access to important employee information." },
          { title: "WORKFLOWS", desc: "Connected experiences across core workplace tasks." },
          { title: "DESIGN SYSTEM", desc: "Reusable components supporting a consistent interface." },
        ],
      },
      results: {
        quote: "From fragmented workplace tools to one connected employee experience.",
        metrics: [
          { value: "6+", label: "Tools consolidated" },
          { value: "8", label: "Core modules" },
          { value: "40+", label: "Reusable components" },
          { value: "WCAG 2.1 AA", label: "Accessibility target" },
        ],
      },
      learnings: [
        { num: "01", title: "Designing for complexity", desc: "Enterprise products require careful prioritization." },
        { num: "02", title: "UX before decoration", desc: "Strong UI starts with clear information architecture." },
        { num: "03", title: "Systems create consistency", desc: "Reusable components make complex products easier to scale." },
      ],
    },
  },
  {
    id: 6,
    slug: "insighthub",
    category: "SaaS",
    title: "INSIGHTHUB",
    subtitle: "Business Intelligence Platform",
    image: project4Url,
    processImage: snippet5Url,
    finalOutputImage: project4Url,
    accentColor: "bg-primary",
    year: "2025",
    tags: ["Figma", "Data Visualization", "AI", "SaaS"],
    role: "UX Architect",
    duration: "6 Weeks",
    tools: ["Figma"],
    platform: "Desktop Platform",
    shortDesc: "Turning complex financial data streams into plain-language actionable insights.",
    link: "https://github.com/harish2n5/Harish-newPortfolio",
    caseStudy: {
      heroTagline: "Turning complex financial data streams into plain-language actionable insights.",
      targetUsers: {
        quote: "Built for decision makers who need immediate narrative clarity over dense chart grids.",
        paragraph: "INSIGHTHUB bridges the gap between complex raw analytics and executive decision-making across three primary personas.",
        users: [
          {
            role: "PRIMARY USER",
            title: "C-Suite & Executives",
            desc: "CEOs and VPs who require rapid executive summaries, plain-language trend insights, and instant metric anomaly alerts.",
            needs: ["Plain-English narrative metrics feed", "Proactive anomaly notifications", "1-Click Slack & PDF report exports"]
          },
          {
            role: "ANALYTICAL USER",
            title: "Data Analysts & BI Leads",
            desc: "Data teams configuring analytics pipelines, validating automated narrative rules, and performing deep-dive cohort analysis.",
            needs: ["Interactive side-drawer deep-dives", "Custom widget & chart builders", "Colorblind-safe visualization palettes"]
          },
          {
            role: "OPERATIONAL USER",
            title: "Department Directors",
            desc: "Operational leaders tracking departmental KPIs across sales, marketing, and product on a daily and weekly cadence.",
            needs: ["Role-filtered dashboard views", "Cohort performance tracking", "Real-time metric threshold alerts"]
          }
        ]
      },
      quickGlance: {
        problem: "Executives were drowning in dense, un-annotated Tableau charts without visual hierarchy.",
        solution: "An AI-powered analytics digest that highlights metric anomalies in plain English.",
        result: "Faster executive decision velocity with zero reliance on manual analyst queries.",
      },
      metrics: [
        { value: "15m → 2m", label: "Time to insight" },
        { value: "30+", label: "Charts simplified" },
        { value: "1-Click", label: "Slack reporting" },
        { value: "100%", label: "Colorblind safe" },
      ],
      challenge: {
        quote: "Dense data charts. Zero narrative clarity.",
        paragraph: "Decision makers spent 15+ minutes attempting to decipher complex multi-axis graphs or had to submit manual inquiry tickets to data analysts.",
        cards: [
          { num: "01", title: "Overloaded dashboards", desc: "30+ un-annotated charts cluttering the screen without visual hierarchy." },
          { num: "02", title: "Data blindness", desc: "Important trend anomalies went unnoticed until quarter end." },
          { num: "03", title: "High friction sharing", desc: "10 manual steps required to export and share reports to leadership." },
        ],
      },
      goal: {
        quote: "Deliver narrative-first analytics that executives can scan in seconds.",
        cards: [
          { title: "SIMPLIFY", desc: "Replace chart noise with plain-English summaries." },
          { title: "CENTRALIZE", desc: "Surface anomalous metrics directly on launch." },
          { title: "STANDARDIZE", desc: "Build colorblind-safe data visualization tokens." },
        ],
      },
      solution: {
        quote: "Narrative-first analytics. Proactive anomaly detection.",
        paragraph: "Architected a feed-first executive digest that places plain-language summaries ahead of graphs, backed by an interactive side-drawer deep dive.",
        cards: [
          { title: "AI Narrative Feed", desc: "Plain-English story cards summarizing daily metric movements." },
          { title: "Anomaly Detection", desc: "Proactive callouts highlighting metric spikes and drops." },
          { title: "1-Click Sharing", desc: "Instant formatted chart exports directly to team Slack channels." },
          { title: "Accessible Visualization", desc: "WCAG AA compliant chart color palettes." },
        ],
      },
      decisions: [
        { num: "01", title: "NARRATIVE FIRST", desc: "Placed text explanations above chart axes based on user gaze tracking." },
        { num: "02", title: "ANOMALY HIGHLIGHTS", desc: "Used high-contrast badges to draw immediate focus to outliers." },
        { num: "03", title: "DENSE YET SCANNABLE", desc: "Maintained high information density while eliminating visual noise." },
      ],
      process: {
        intro: "I followed a user-centered design process to understand the problem, structure the experience and refine the final interface.",
        timeline: ["01 DISCOVER", "02 DEFINE", "03 IDEATE", "04 DESIGN", "05 TEST", "06 REFINE"],
        explanation: [
          { title: "DISCOVER", desc: "Conducted C-suite interviews to analyze how leaders consume data under pressure." },
          { title: "DESIGN", desc: "Explored feed-first layouts vs chart grids and created data visualization design tokens." },
          { title: "REFINE", desc: "Tested narrative scan speed and optimized tablet touch target areas." },
        ],
      },
      userFlow: [
        {
          step: "01",
          title: "EXECUTIVE BRIEFING FEED",
          desc: "Leadership logs into a clean, narrative-first digest summarizing daily revenue, churn, and metrics in plain English.",
          highlight: "Narrative clarity"
        },
        {
          step: "02",
          title: "ANOMALY DETECTION ALERT",
          desc: "System automatically flags statistical outliers (spikes or drops) with high-contrast alert badges.",
          highlight: "Instant alerts"
        },
        {
          step: "03",
          title: "CONTEXTUAL DEEP DIVE",
          desc: "Clicking any metric opens a side-drawer displaying cohort breakdowns, time-series graphs, and segment filters.",
          highlight: "Side-drawer workspace"
        },
        {
          step: "04",
          title: "ANNOTATE & DISTRIBUTE",
          desc: "Executives add notes to anomalous findings and broadcast automated reports directly to team Slack channels.",
          highlight: "1-Click Slack export"
        }
      ],
      finalOutput: {
        subheading: "An executive analytics experience engineered for speed, clarity and strategic impact.",
        cards: [
          { title: "EXECUTIVE DIGEST", desc: "Plain-language narrative summary feed for fast scanning." },
          { title: "DEEP DIVE WORKSPACE", desc: "Interactive chart analytics with cohort filter drawers." },
          { title: "DATA SYSTEM", desc: "Accessible component library for financial visualizations." },
        ],
      },
      results: {
        quote: "From dense spreadsheet overload to rapid narrative clarity.",
        metrics: [
          { value: "15m → 2m", label: "Time to insight" },
          { value: "85%", label: "Executive adoption" },
          { value: "40%", label: "Fewer analyst tickets" },
          { value: "WCAG 2.1 AA", label: "Accessibility target" },
        ],
      },
      learnings: [
        { num: "01", title: "Plain language wins", desc: "Data literacy varies; clear narrative is the ultimate UI equalizer." },
        { num: "02", title: "Gaze hierarchy matters", desc: "Users read headlines before reading graph axis labels." },
        { num: "03", title: "Proactive over reactive", desc: "Surface critical outliers automatically instead of hiding them." },
      ],
    },
  },
  {
    id: 5,
    slug: "supplychain-nexus",
    category: "Enterprise",
    title: "SUPPLYCHAIN NEXUS",
    subtitle: "Procurement System",
    image: project3Url,
    processImage: snippet7Url,
    finalOutputImage: project3Url,
    accentColor: "bg-[#FFD6A0]",
    year: "2025",
    tags: ["Figma", "Complex Workflows", "RBAC", "SaaS"],
    role: "UI/UX Designer",
    duration: "10 Weeks",
    tools: ["Figma"],
    platform: "Desktop Platform",
    shortDesc: "Digitizing multi-regional purchasing lifecycles into a 1-click approval workflow.",
    link: "https://github.com/harish2n5/Harish-newPortfolio",
    caseStudy: {
      heroTagline: "Digitizing multi-regional purchasing lifecycles into a 1-click approval workflow.",
      targetUsers: {
        quote: "Engineered for international logistics hubs, procurement teams, and finance directors.",
        paragraph: "SUPPLYCHAIN NEXUS streamlines high-frequency purchasing workflows across 200+ multi-regional logistics hubs.",
        users: [
          {
            role: "PRIMARY USER",
            title: "Logistics Hub Managers",
            desc: "Field operators across global logistics hubs submitting requisitions for equipment, spare parts, and local supplies.",
            needs: ["Mobile-friendly fast requisition forms", "Auto-filled vendor catalog lookup", "Real-time order status tracking"]
          },
          {
            role: "APPROVER",
            title: "Procurement Officers",
            desc: "Procurement managers evaluating supplier quotes, verifying contract terms, and clearing purchase order queues.",
            needs: ["Unified decision command inbox", "Vendor comparative quote viewer", "Keyboard-driven fast verification"]
          },
          {
            role: "FINANCE LEAD",
            title: "Finance & Audit Directors",
            desc: "Financial controllers managing department budget allocations, tracking commitments, and verifying compliance.",
            needs: ["Real-time budget ledger drawer", "Immutable activity audit timeline", "100% paperless audit reporting"]
          }
        ]
      },
      quickGlance: {
        problem: "Logistics hubs relied on paper requisition forms and untracked email chains.",
        solution: "A digitized procurement portal with real-time budget tracking and role-based approval queues.",
        result: "Significantly faster requisition approvals with 100% audit trail compliance.",
      },
      metrics: [
        { value: "18d → 4d", label: "Approval cycle" },
        { value: "200+", label: "Hubs integrated" },
        { value: "100%", label: "Paperless forms" },
        { value: "100%", label: "Audit compliance" },
      ],
      challenge: {
        quote: "Opaque approval chains. Paper bottlenecks.",
        paragraph: "Purchase requisitions routinely stalled for up to 3 weeks in approval black holes across 200 international logistics hubs.",
        cards: [
          { num: "01", title: "Paper requisitions", desc: "Manual paperwork caused missing data errors and lost requests." },
          { num: "02", title: "Zero status tracking", desc: "Requesters sent 15+ status inquiry emails per week asking where orders were stuck." },
          { num: "03", title: "Budget blindspots", desc: "Approvers lacked real-time remaining budget visibility during reviews." },
        ],
      },
      goal: {
        quote: "Digitize the entire purchasing process while giving approvers real-time financial context.",
        cards: [
          { title: "SIMPLIFY", desc: "Automate request routing based on approval thresholds." },
          { title: "CENTRALIZE", desc: "Display live budget balance directly on approval cards." },
          { title: "STANDARDIZE", desc: "Create unified status tracking indicators." },
        ],
      },
      solution: {
        quote: "Automated approval routing. Live budget visibility.",
        paragraph: "Designed a high-density enterprise dashboard featuring automated RBAC request routing, real-time budget context drawers, and instant 1-click decision queues.",
        cards: [
          { title: "Approval Queue", desc: "Priority decision inbox with inline budget health indicators." },
          { title: "Requisition Builder", desc: "Smart form with automated vendor catalog lookup." },
          { title: "Live Spend Ledger", desc: "Real-time tracking of department purchase commitments." },
          { title: "Audit Timeline", desc: "Immutable historical log of every approval action." },
        ],
      },
      decisions: [
        { num: "01", title: "CONTEXTUAL BUDGETS", desc: "Embedded remaining budget bars directly inside approval action cards." },
        { num: "02", title: "STATUS TRANSPARENCY", desc: "Designed a visual step-progress tracker visible to all stakeholders." },
        { num: "03", title: "DENSITY CONTROL", desc: "Optimized table spacing for fast keyboard-driven data verification." },
      ],
      process: {
        intro: "I followed a user-centered design process to understand the problem, structure the experience and refine the final interface.",
        timeline: ["01 DISCOVER", "02 DEFINE", "03 IDEATE", "04 DESIGN", "05 TEST", "06 REFINE"],
        explanation: [
          { title: "DISCOVER", desc: "Shadowed procurement leads across logistics hubs to map the 24-step purchasing workflow." },
          { title: "DESIGN", desc: "Wireframed approval routing logic, decision drawers, and status tracking indicators." },
          { title: "REFINE", desc: "Streamlined keyboard navigation and added optimistic UI approval feedback." },
        ],
      },
      userFlow: [
        {
          step: "01",
          title: "REQUISITION BUILDER",
          desc: "Field logistics managers create purchase requests using smart catalog auto-complete and calculated unit costs.",
          highlight: "Smart catalog lookup"
        },
        {
          step: "02",
          title: "DYNAMIC RBAC ROUTING",
          desc: "Order threshold logic automatically routes requests to appropriate local, regional, or executive finance approvers.",
          highlight: "Rules-based routing"
        },
        {
          step: "03",
          title: "COMMAND DECISION INBOX",
          desc: "Approvers review requests with live remaining department budget ledgers displayed directly on the card.",
          highlight: "Above-the-fold budget context"
        },
        {
          step: "04",
          title: "PO GENERATION & AUDIT TIMELINE",
          desc: "Approved requests generate automated purchase orders and log immutable compliance timestamps into the ledger.",
          highlight: "100% paperless audit trail"
        }
      ],
      finalOutput: {
        subheading: "An enterprise procurement system engineered for speed, transparency and compliance.",
        cards: [
          { title: "COMMAND QUEUE", desc: "Instant decision inbox with live budget health indicators." },
          { title: "REQUISITION FLOW", desc: "Streamlined form builder with instant vendor lookup." },
          { title: "AUDIT LEDGER", desc: "Comprehensive activity timeline ensuring 100% compliance." },
        ],
      },
      results: {
        quote: "From paper-based approval delays to instant digital transparency.",
        metrics: [
          { value: "18d → 4d", label: "Approval cycle" },
          { value: "200+", label: "Hubs integrated" },
          { value: "100%", label: "Paperless workflow" },
          { value: "100%", label: "Audit compliance" },
        ],
      },
      learnings: [
        { num: "01", title: "Context accelerates decisions", desc: "Showing live budget numbers on screen eliminated approval hesitation." },
        { num: "02", title: "High density requires clarity", desc: "Enterprise users prefer structured data density over whitespace." },
        { num: "03", title: "Visibility stops inquiries", desc: "Real-time status trackers eliminated thousands of status emails." },
      ],
    },
  },
];
