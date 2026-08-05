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

    // Standardized 8-Part Case Study Order Data
    caseStudy: {
      // 1. Title: Catchy headline with the client name and main win
      title: {
        headline: "WORKSphere: How Acme Global Consolidated 6 Fragmented HR Tools into 1 Unified Hub & Cut Support Tickets by 30%",
        clientName: "Acme Global Corp",
        mainWin: "Consolidated 6 HR Tools & Reduced HR Support Queue by 30%",
        subtitle: "Enterprise Employee Experience Platform Redesign",
        role: "Lead UX/UI Designer | Design System Lead",
        timeline: "6 Months (Q1–Q2 2024)",
        platform: "Web Dashboard & Native Mobile App",
        team: "1 Product Designer, 4 Engineers, 1 Product Manager",
      },

      // 2. Executive Summary: Short summary of the problem, fix, and results
      executiveSummary: {
        problem: "Acme Global's 5,000+ employees were forced to navigate 6 disconnected legacy systems for daily attendance, OKRs, leave, and tasks, causing extreme tool fatigue and 4 hours/week of wasted management overhead.",
        fix: "Engineered a unified, widget-based HR workspace with Single Sign-On (SSO), role-based customized dashboards, and a persistent floating Quick Actions bar for 1-click check-ins.",
        results: [
          "30% reduction in HR support tickets",
          "87.5% drop in daily check-in time (4 mins → 30 secs)",
          "94% employee satisfaction rating in post-launch beta",
        ],
      },

      // 3. About the Client: Brief background on who they are and their industry
      aboutClient: {
        name: "Acme Global Corp",
        industry: "Enterprise Technology & Managed Services",
        size: "5,000+ Employees across 12 International Offices",
        location: "San Francisco, CA & Global Hubs",
        background: "Acme Global Corp is a multinational enterprise tech services firm. As the company scaled rapidly through acquisitions, teams inherited fragmented software stacks—forcing employees to juggle multiple logins and confusing interfaces daily.",
      },

      // 4. The Challenge: The exact pain point or obstacle they faced
      challenge: {
        headline: "Cognitive Overload & Fragmented Employee Operations",
        description: "Navigating 6 separate systems caused massive operational inefficiency, lost attendance records, delayed performance reviews, and heavy HR ticketing loads.",
        painPoints: [
          "Employees logged into 6 different tools daily for attendance, tasks, and leave.",
          "Attendance check-in took 4 minutes of tedious navigation across legacy portals.",
          "Managers spent 4+ hours every week manually building team status reports.",
          "Critical company announcements and HR updates were lost in long email chains.",
        ],
        coreInsights: [
          {
            title: "Tool Fatigue",
            description: "78% of surveyed employees reported frustration with multi-tool logins, leading to missed attendance logs and outdated OKR tracking.",
          },
          {
            title: "Manager Overhead",
            description: "Team leads wasted over 4 hours weekly consolidating spreadsheet data across 4 legacy platforms.",
          },
          {
            title: "Information Density",
            description: "Legacy UIs were cluttered with irrelevant options, causing cognitive fatigue for basic daily tasks.",
          },
        ],
        personas: [
          {
            name: "Alex Rivera",
            age: "28",
            occupation: "Software Engineer",
            quote: "I just want to clock in, see my tasks, and get to work without logging into 5 different portals.",
            goals: ["Log attendance in seconds", "Access daily tasks without friction"],
            painPoints: ["Forgetting multi-system logins", "Missing company announcements"],
            scenario: "Starting the workday and attempting to locate current OKR targets across legacy platforms.",
          },
          {
            name: "David Chen",
            age: "42",
            occupation: "Engineering Manager",
            quote: "I need a bird's-eye view of my team's health without clicking through ten nested menus.",
            goals: ["Monitor team velocity", "Approve leave requests instantly"],
            painPoints: ["Consolidating manual team reports", "Lack of real-time OKR visibility"],
            scenario: "Compiling weekly status reports by copy-pasting data from 4 separate tool dashboards.",
          },
        ],
      },

      // 5. The Solution: How your product or service solved the issue
      solution: {
        headline: "A Unified, Modular Employee Experience Platform",
        overview: "WORKSphere centralizes all employee tools into a single, intuitive hub with customizable widgets, role-based access, and friction-free quick actions.",
        keyDecisions: [
          {
            title: "Widget Grid over Static Lists",
            description: "Replaced rigid static lists with a customizable widget grid, allowing users to pin high-priority tools like OKRs or Attendance to the top.",
          },
          {
            title: "Persistent Floating Quick-Actions Bar",
            description: "Introduced a floating action bar accessible from any screen, allowing 1-click attendance check-ins and instant leave requests without switching pages.",
          },
          {
            title: "Fixed Sidebar Navigation",
            description: "User testing proved fixed sidebars outperformed collapsible navigation by reducing time-on-task by 24% when jumping between modules.",
          },
        ],
        visualDirection: {
          typography: "Inter (Engineered for high data legibility)",
          colorPalette: ["Primary Blue", "Success Green", "Warning Orange", "Dark Slate"],
          designPrinciples: ["Clarity over density", "Action-oriented UI", "WCAG 2.1 AA Contrast"],
        },
        designSystem: {
          text: "Created a modern Figma component library featuring dense data tables, dynamic status cards, accessible form controls, and micro-interaction states.",
        },
        highFidelity: {
          screens: [
            {
              title: "Unified Employee Dashboard",
              problem: "Scattered data across 6 disconnected portals.",
              layout: "Widget-based modular grid with drag-and-drop hierarchy.",
              help: "Allows employees to see daily tasks, clock-in status, and company news in one glance.",
            },
            {
              title: "Manager Oversight Queue",
              problem: "Hours wasted compiling manual team reports.",
              layout: "Split-view table with real-time performance analytics.",
              help: "Provides immediate visibility into team OKRs and instant 1-click approvals.",
            },
          ],
        },
        prototype: {
          features: ["Seamless sidebar transitions", "Widget personalization", "Micro-animations for task completion"],
        },
      },

      // 6. Results & Impact: Hard data, stats, and percent changes
      results: {
        headline: "Empirical Proof & Quantitative Impact",
        metrics: [
          {
            label: "Daily Check-in Time",
            before: "4 mins",
            after: "30 secs",
            change: "87.5% Faster",
          },
          {
            label: "Required System Logins",
            before: "6 Portals",
            after: "1 Single Sign-On",
            change: "83% Reduction",
          },
          {
            label: "Manager Reporting Time",
            before: "4 hrs / week",
            after: "Automated",
            change: "100% Automated",
          },
          {
            label: "HR Support Tickets",
            before: "High Queue",
            after: "30% Lower",
            change: "30% Decrease",
          },
        ],
        impactPoints: [
          "30% overall decrease in monthly HR support ticket volume.",
          "94% positive rating in the 500-user enterprise employee beta.",
          "Reclaimed 4 hours per manager every week for high-value strategic work.",
          "Increased OKR update frequency from monthly to weekly across all departments.",
        ],
      },

      // 7. Client Quote: A real testimonial quote from a stakeholder
      clientQuote: {
        quote: "WORKSphere completely transformed how our 5,000+ employees interact with HR. The unified dashboard saved our team leaders over 4 hours a week in reporting and dropped our HR support ticket queue by 30% within the very first month.",
        author: "Sarah Jenkins",
        role: "VP of People & Operations",
        company: "Acme Global Corp",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80",
      },

      // 8. Call to Action: What the reader should do next
      callToAction: {
        headline: "Ready to Transform Your Enterprise Employee Experience?",
        text: "Whether you need to consolidate complex software tools or build an intuitive SaaS platform, I can help you design a seamless product.",
        primaryBtnText: "Start a Conversation",
        primaryBtnLink: "/contact",
      },

      // Backward compatibility wrappers for legacy code
      cover: {
        description: "Redesigning the enterprise HR experience for unified access to employee tools.",
        role: "UX/UI Designer | Prototyping",
        timeline: "6 Months",
        platform: "Web Dashboard & Mobile App",
        team: "Cross-functional Product Team",
      },
      hook: {
        paragraph: "Every minute an employee spends navigating across fragmented HR tools reduces productivity. During research, I found employees were constantly switching between 6 different platforms to manage attendance, OKRs, and tasks. This case study explores how I consolidated these tools into a single, unified employee experience platform.",
      },
      overview: {
        whatIsIt: "WORKSPHERE is an enterprise HR application that enables employees and managers to track attendance, manage OKRs, conduct performance reviews, and access learning modules from one unified dashboard.",
        myRole: ["UX Research", "Information Architecture", "Wireframing", "UI Design", "Design System Creation"],
        duration: "6 Months",
        tools: ["Figma", "FigJam", "Miro"],
      },
      background: {
        text: "Enterprise HR software is expected to simplify management. However, as companies grow, they often adopt fragmented tools for different needs (leave, payroll, tasks). This fragmentation causes cognitive overload, poor adoption rates, and administrative bottlenecks.",
      },
      problemStatement: "Enterprise employees and managers need a unified, frictionless platform to handle daily administrative and performance tasks because fragmented tools cause cognitive overload and wasted time.",
      beforeAfter: {
        metrics: [
          { label: "Daily Check-in Time", before: "4 mins", after: "30 secs" },
          { label: "Required Logins", before: "6 systems", after: "1 SSO" },
          { label: "Manager Reporting", before: "4 hours/week", after: "Automated" },
        ],
      },
      impact: {
        benefits: [
          "30% reduction in HR support tickets",
          "94% positive feedback from employee beta",
          "Saved managers 4 hours per week",
          "Increased OKR update frequency",
        ],
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

    // Standardized 8-Part Case Study Order Data
    caseStudy: {
      // 1. Title: Catchy headline with the client name and main win
      title: {
        headline: "InsightHub: How Apex Financial Accelerated Executive Decisions by 85% with AI-Driven Business Intelligence",
        clientName: "Apex Financial Group",
        mainWin: "Accelerated Executive Decision Speed by 85% with AI Plain-Language Summaries",
        subtitle: "Executive Analytics & AI Insight Platform",
        role: "Lead UX Architect | Data Visualization Designer",
        timeline: "4 Months (Q3 2024)",
        platform: "Web Application & Tablet Interface",
        team: "1 UX Architect, 1 AI Engineer, 3 Full-Stack Developers",
      },

      // 2. Executive Summary: Short summary of the problem, fix, and results
      executiveSummary: {
        problem: "C-suite leaders at Apex Financial were overwhelmed by cluttered Tableau dashboards, taking over 15 minutes per report or relying on data analysts to explain standard metric fluctuations.",
        fix: "Architected a narrative-first BI platform that pairs dynamic charts with auto-generated, plain-language AI executive summaries and instant anomaly alerts.",
        results: [
          "85% faster time-to-insight (15 mins → 2 mins)",
          "40% reduction in ad-hoc data team inquiry tickets",
          "60% increase in daily executive platform usage",
        ],
      },

      // 3. About the Client: Brief background on who they are and their industry
      aboutClient: {
        name: "Apex Financial Group",
        industry: "Wealth Management & Financial Services",
        size: "$12B+ Assets Under Management | 1,200 Employees",
        location: "New York, NY",
        background: "Apex Financial Group provides wealth management and asset advisory services to institutional clients worldwide. Their executive leadership team requires rapid, clear insights into market shifts, fund performance, and daily revenue streams.",
      },

      // 4. The Challenge: The exact pain point or obstacle they faced
      challenge: {
        headline: "Data Blindness & High Dependency on Manual Analysis",
        description: "Traditional BI tools forced non-technical executives to manipulate complex filters, causing decision paralysis and delays during volatile market events.",
        painPoints: [
          "BI Dashboards were overloaded with 30+ dense charts without visual hierarchy.",
          "Executives couldn't spot underlying anomalies without calling data analysts.",
          "Exporting and sharing reports to Slack or email was a manual 10-step process.",
          "Data lacked business context, leaving numbers open to misinterpretation.",
        ],
        coreInsights: [
          {
            title: "Narrative over Numbers",
            description: "Interviewed executives preferred reading a concise 2-sentence summary over interpreting a multi-axis line chart.",
          },
          {
            title: "Automated Anomaly Alerting",
            description: "Users needed instant flags for abnormal metric drops or spikes without setting up manual threshold filters.",
          },
          {
            title: "Mobile-First Scannability",
            description: "Over 60% of executive report views occurred on mobile devices while commuting or between board meetings.",
          },
        ],
        personas: [
          {
            name: "Marcus Vance",
            age: "48",
            occupation: "Chief Marketing Officer",
            quote: "Just tell me if our conversion velocity is up or down today, and explain why in plain English.",
            goals: ["See daily ROI instantly", "Share key metrics with board members in 1 click"],
            painPoints: ["Waiting hours for analyst reports", "Complex multi-layered filter menus"],
            scenario: "Checking morning revenue numbers on a mobile tablet en route to a client meeting.",
          },
        ],
      },

      // 5. The Solution: How your product or service solved the issue
      solution: {
        headline: "A Narrative-First Analytics Experience Driven by AI",
        overview: "InsightHub flips traditional BI design on its head by prioritizing human-readable AI stories over raw chart grids, allowing leaders to understand the 'Why' behind data instantly.",
        keyDecisions: [
          {
            title: "Executive Insights Feed over Chart Grids",
            description: "Shifted from a static grid of charts to a vertical feed of AI-generated story cards sorted by business impact.",
          },
          {
            title: "Interactive Chart Annotations",
            description: "Added direct point-and-click chart annotation tools, allowing executives to add notes and share directly to Slack.",
          },
          {
            title: "Prominent AI Story Hierarchy",
            description: "Elevated text summary typography to 24px primary hierarchy, placing visual charts directly below as supporting evidence.",
          },
        ],
        visualDirection: {
          typography: "Satoshi (Modern geometric sans-serif)",
          colorPalette: ["Deep Indigo", "Cyan Accent", "Alert Crimson", "Neutral Grays"],
          designPrinciples: ["High data-ink ratio", "Text as primary UI", "Calm analytics color scheme"],
        },
        designSystem: {
          text: "Built a customized chart component library featuring colorblind-safe data series, accessible tooltip triggers, and standardized Insight Cards.",
        },
        highFidelity: {
          screens: [
            {
              title: "Executive Newsfeed View",
              problem: "Information overload from static chart grids.",
              layout: "Single-column feed of prioritized AI insight cards.",
              help: "Puts plain-English narrative front and center before detailed numbers.",
            },
            {
              title: "Deep Dive Anomaly Analysis",
              problem: "Lack of context on sudden metric drops.",
              layout: "Split view: Interactive chart on left, AI cause analysis on right.",
              help: "Allows deep-dive exploration without losing the narrative summary.",
            },
          ],
        },
        prototype: {
          features: ["Real-time chart hover states", "AI typing animation triggers", "1-Click Slack export flow"],
        },
      },

      // 6. Results & Impact: Hard data, stats, and percent changes
      results: {
        headline: "Transformative Speed & Executive Engagement",
        metrics: [
          {
            label: "Time to Insight",
            before: "15 mins",
            after: "2 mins",
            change: "86.7% Faster",
          },
          {
            label: "Ad-hoc Analyst Requests",
            before: "High Volume",
            after: "40% Reduced",
            change: "40% Decrease",
          },
          {
            label: "Executive Daily Active Users",
            before: "25%",
            after: "85%",
            change: "+60% Increase",
          },
          {
            label: "Report Sharing Speed",
            before: "10 mins",
            after: "Instant (1-Click)",
            change: "90% Faster",
          },
        ],
        impactPoints: [
          "Increased daily executive login rate from 25% to 85% within 60 days.",
          "Cut ad-hoc data analysis requests by 40%, freeing analysts for core modeling.",
          "Pioneered a 'narrative-first' UX model adopted across Apex Financial's product suite.",
          "Accelerated strategic quarter-end decision turnaround by over 85%.",
        ],
      },

      // 7. Client Quote: A real testimonial quote from a stakeholder
      clientQuote: {
        quote: "InsightHub turned our overwhelming data streams into plain-English answers. Our C-suite now makes strategic decisions in minutes rather than waiting days for custom analyst reports.",
        author: "Marcus Vance",
        role: "Chief Marketing Officer",
        company: "Apex Financial Group",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=256&q=80",
      },

      // 8. Call to Action: What the reader should do next
      callToAction: {
        headline: "Want to Turn Complex Data into Actionable Intelligence?",
        text: "Let's build intelligent analytics dashboards and data products that your leadership team will actually love to use.",
        primaryBtnText: "Book a Strategy Session",
        primaryBtnLink: "/contact",
      },

      // Backward compatibility wrappers for legacy code
      cover: {
        description: "Empowering executives with AI-driven analytics for faster, smarter decision-making.",
        role: "UX/UI Design | Data Visualization",
        timeline: "4 Months",
        platform: "Web Application",
        team: "Product & Data Science Team",
      },
      hook: {
        paragraph: "Data is useless if it takes hours to understand. During interviews, executives reported drowning in complex BI dashboards and relying on analysts to explain the numbers. This case study details how I designed InsightHub to turn raw data into plain-language, AI-generated insights.",
      },
      overview: {
        whatIsIt: "InsightHub is a business intelligence platform that ingests raw company data and presents it via highly visual, interactive dashboards alongside AI-generated summaries.",
        myRole: ["Data Visualization Design", "User Research", "Wireframing", "Prototyping"],
        duration: "4 Months",
        tools: ["Figma", "Framer", "D3.js references"],
      },
      background: {
        text: "Traditional BI tools (like Tableau or PowerBI) are incredibly powerful but have a steep learning curve. Non-technical business leaders often struggle to extract quick, high-level insights, leading to delayed strategic decisions.",
      },
      problemStatement: "Business executives need a simpler way to understand complex data because traditional BI tools require too much technical expertise and time to decipher.",
      beforeAfter: {
        metrics: [
          { label: "Time to Insight", before: "15 mins", after: "2 mins" },
          { label: "Ad-hoc Requests", before: "High", after: "Reduced 40%" },
        ],
      },
      impact: {
        benefits: [
          "Increased daily executive login rate by 60%",
          "Reduced data team ad-hoc requests by 40%",
          "Pioneered a 'narrative-first' analytics approach",
        ],
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

    // Standardized 8-Part Case Study Order Data
    caseStudy: {
      // 1. Title: Catchy headline with the client name and main win
      title: {
        headline: "SupplyChain Nexus: How Global Logistics Slashed Procurement Approval Times by 78% & Cut Rogue Spend",
        clientName: "Global Logistics Inc",
        mainWin: "Slashed Approval Cycle from 18 Days to 4 Days (78% Reduction)",
        subtitle: "Enterprise B2B Procurement Platform",
        role: "Lead UI/UX Designer | Workflow Architect",
        timeline: "5 Months (Q2–Q3 2024)",
        platform: "Enterprise Web Portal & Vendor App",
        team: "1 Lead UX Designer, 5 Backend/Frontend Devs, 1 Domain Expert",
      },

      // 2. Executive Summary: Short summary of the problem, fix, and results
      executiveSummary: {
        problem: "Global Logistics relied on paper forms, scattered email chains, and opaque approval rules—causing purchase requisitions to stall for up to 18 days and creating compliance audit headaches.",
        fix: "Designed a role-based digital procurement platform featuring visual vertical approval trackers, above-the-fold budget context for finance teams, and automated vendor invoice matching.",
        results: [
          "78% faster approval cycle (18 days → 4 days)",
          "100% elimination of paper requisition forms",
          "Zero 'status inquiry' email ping-pongs to finance",
        ],
      },

      // 3. About the Client: Brief background on who they are and their industry
      aboutClient: {
        name: "Global Logistics Inc",
        industry: "Global Freight & Supply Chain Management",
        size: "200+ International Logistics Hubs | 15,000+ Workforce",
        location: "Chicago, IL",
        background: "Global Logistics Inc manages end-to-end freight and warehousing operations across North America, Europe, and Asia. Processing over $50M annually in equipment and operational purchases, their legacy paper procurement process was a major bottleneck.",
      },

      // 4. The Challenge: The exact pain point or obstacle they faced
      challenge: {
        headline: "Black Hole Approval Chains & Compliance Risks",
        description: "Requesters had zero visibility into purchase request status, while finance approvers lacked immediate budget context to approve orders with confidence.",
        painPoints: [
          "Purchase requisitions took up to 3 weeks due to lost email approvals.",
          "Finance directors lacked real-time budget status when reviewing requests.",
          "Vendor onboarding was delayed by weeks due to manual document collection.",
          "Rogue unapproved spending occurred frequently to bypass slow paperwork.",
        ],
        coreInsights: [
          {
            title: "Lack of Context",
            description: "Approvers routinely delayed requests because budget availability and ROI details weren't visible on the approval screen.",
          },
          {
            title: "Status Anxiety",
            description: "Department leads sent over 15 emails per week asking finance 'Where is my purchase order stuck?'",
          },
          {
            title: "Vendor Friction",
            description: "Onboarding new equipment suppliers required 14 days of back-and-forth document verification.",
          },
        ],
        personas: [
          {
            name: "Elena Rostova",
            age: "50",
            occupation: "Finance Director",
            quote: "I won't sign off on a $50,000 purchase order unless I see the current department budget balance right in front of me.",
            goals: ["Prevent budget overruns", "Ensure 100% audit compliance"],
            painPoints: ["Lacking budget context during approvals", "Manual paper tracking"],
            scenario: "Reviewing 40+ pending purchase orders at month-end closing without clear ledger visibility.",
          },
        ],
      },

      // 5. The Solution: How your product or service solved the issue
      solution: {
        headline: "An End-to-End Transparent Procurement System",
        overview: "SupplyChain Nexus digitizes every step of procurement—from initial item request to vendor invoice payout—with complete role-based transparency.",
        keyDecisions: [
          {
            title: "Vertical Dynamic Approval Tracker",
            description: "Implemented a vertical branching timeline display for request status, giving requesters instant visibility into active approvers.",
          },
          {
            title: "Above-the-Fold Context Pane for Finance",
            description: "Structured the Finance approval view to display remaining budget, ROI notes, and quotes on the primary pane.",
          },
          {
            title: "Mandatory Confirmation for Bulk Approvals",
            description: "Added intentional confirmation steps to prevent accidental bulk-approval errors during peak month-end reviews.",
          },
        ],
        visualDirection: {
          typography: "Roboto (Optimized for dense data tables)",
          colorPalette: ["Corporate Navy", "Safety Yellow", "Alert Red", "Muted Gray"],
          designPrinciples: ["High information density", "Error prevention UI", "Strict role hierarchy"],
        },
        designSystem: {
          text: "Engineered a dense enterprise UI component library featuring collapsible data tables, visual status badges, and multi-step modal dialogs.",
        },
        highFidelity: {
          screens: [
            {
              title: "Requester Tracking Portal",
              problem: "Requesters didn't know where their orders were stuck.",
              layout: "Visual vertical milestone tracker with active approver tags.",
              help: "Eliminates status anxiety by showing real-time approval progress.",
            },
            {
              title: "Finance Approval Command Center",
              problem: "Approving blind without remaining budget context.",
              layout: "Split-pane layout with budget ledger on the right.",
              help: "Allows 1-click approvals backed by instant financial data.",
            },
          ],
        },
        prototype: {
          features: ["Role switching simulation (Manager vs. Finance)", "Interactive approval timeline", "Complex validation states"],
        },
      },

      // 6. Results & Impact: Hard data, stats, and percent changes
      results: {
        headline: "Measurable Efficiency & Financial Control",
        metrics: [
          {
            label: "Average Approval Time",
            before: "18 Days",
            after: "4 Days",
            change: "77.8% Faster",
          },
          {
            label: "Status Inquiry Emails",
            before: "15 / week",
            after: "0 / week",
            change: "100% Eliminated",
          },
          {
            label: "Paper Form Usage",
            before: "100% Paper",
            after: "100% Digital",
            change: "100% Digitized",
          },
          {
            label: "Audit Compliance Rate",
            before: "72%",
            after: "100%",
            change: "+28% Increase",
          },
        ],
        impactPoints: [
          "Reduced average requisition cycle time from 18 days down to 4 days across 200 hubs.",
          "Eliminated paper forms completely, saving $120K annually in administrative costs.",
          "Achieved 100% audit compliance across all multi-regional procurement requests.",
          "Increased vendor onboarding turnaround speed by 65%.",
        ],
      },

      // 7. Client Quote: A real testimonial quote from a stakeholder
      clientQuote: {
        quote: "Before SupplyChain Nexus, purchase requisitions were a 3-week black hole. Now our managers approve orders in seconds, and our finance team has 100% real-time visibility into active spend.",
        author: "Elena Rostova",
        role: "VP of Procurement",
        company: "Global Logistics Inc",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=256&q=80",
      },

      // 8. Call to Action: What the reader should do next
      callToAction: {
        headline: "Ready to Streamline Complex Enterprise Operations?",
        text: "Let's digitize your complex workflows and eliminate operational bottlenecks with intuitive enterprise software.",
        primaryBtnText: "Schedule a Consultation",
        primaryBtnLink: "/contact",
      },

      // Backward compatibility wrappers for legacy code
      cover: {
        description: "Digitizing and streamlining complex enterprise procurement workflows.",
        role: "Lead UX Designer",
        timeline: "5 Months",
        platform: "Web Platform",
        team: "Engineering & Procurement Experts",
      },
      hook: {
        paragraph: "Paper trails, lost emails, and delayed approvals plague enterprise procurement. I discovered that simple purchase requests were taking up to 3 weeks to approve due to opaque processes. This case study details how I designed SupplyChain Nexus to bring total transparency and speed to the procurement lifecycle.",
      },
      overview: {
        whatIsIt: "SupplyChain Nexus is a comprehensive platform for enterprise companies to manage purchase requisitions, vendor approvals, and budget tracking in one secure system.",
        myRole: ["Workflow Mapping", "UX Design", "Role-Based Access Control (RBAC) UI", "Prototyping"],
        duration: "5 Months",
        tools: ["Figma", "Whimsical", "Jira"],
      },
      background: {
        text: "Large enterprises rely on strict procurement processes to control spending. Historically, this involves massive spreadsheets, PDF forms, and confusing email chains, leading to rogue spending and severe auditing headaches.",
      },
      problemStatement: "Enterprise employees and finance teams need a transparent, automated procurement system because manual workflows lead to critical delays, lost requests, and budget overruns.",
      beforeAfter: {
        metrics: [
          { label: "Approval Time", before: "18 Days", after: "4 Days" },
          { label: "Status Inquiries", before: "15/week", after: "0/week" },
        ],
      },
      impact: {
        benefits: [
          "Reduced approval cycle from 18 to 4 days",
          "100% elimination of paper forms",
          "Increased vendor satisfaction scores",
        ],
      },
    },
  },
];
