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
  "id": 4,
  "slug": "worksphere",
  "category": "SaaS",
  "title": "WORKSPHERE",
  "subtitle": "Enterprise Employee Experience Platform",
  "image": project2Url,
  "accentColor": "bg-secondary",
  "year": "2024",
  "tags": [
    "Figma",
    "Design Systems",
    "WCAG 2.1",
    "Responsive Design"
  ],
  "role": "Product Designer",
  "duration": "6 months",
  "shortDesc": "A unified HR platform that consolidated 6+ disconnected employee tools into a single system for attendance, performance, learning, and analytics management.",
  "link": "https://github.com/harish2n5/Harish-newPortfolio",
  "caseStudy": {
    "cover": {
      "description": "Redesigning the enterprise HR experience for unified access to employee tools.",
      "role": "UX/UI Designer | Prototyping",
      "timeline": "6 Months",
      "platform": "Web Dashboard & Mobile App",
      "team": "Cross-functional Product Team"
    },
    "hook": {
      "paragraph": "Every minute an employee spends navigating across fragmented HR tools reduces productivity. During research, I found employees were constantly switching between 6 different platforms to manage attendance, OKRs, and tasks. This case study explores how I consolidated these tools into a single, unified employee experience platform."
    },
    "overview": {
      "whatIsIt": "WORKSPHERE is an enterprise HR application that enables employees and managers to track attendance, manage OKRs, conduct performance reviews, and access learning modules from one unified dashboard.",
      "myRole": [
        "UX Research",
        "Information Architecture",
        "Wireframing",
        "UI Design",
        "Design System Creation"
      ],
      "duration": "6 Months",
      "tools": [
        "Figma",
        "FigJam",
        "Miro"
      ]
    },
    "background": {
      "text": "Enterprise HR software is expected to simplify management. However, as companies grow, they often adopt fragmented tools for different needs (leave, payroll, tasks). This fragmentation causes cognitive overload, poor adoption rates, and administrative bottlenecks."
    },
    "challenge": {
      "points": [
        "Employees couldn't track daily tasks and OKRs in the same place.",
        "Attendance and leave requests required navigating a clunky legacy system.",
        "Managers lacked a consolidated view of their team's performance and blockers.",
        "Important company announcements were buried in email threads."
      ]
    },
    "goal": {
      "businessGoals": [
        "Increase daily active platform usage",
        "Reduce HR support tickets by 30%",
        "Improve employee NPS"
      ],
      "userGoals": [
        "Access tools with a single login",
        "Quickly check-in and log tasks",
        "Easily view performance metrics",
        "Reduce context switching"
      ]
    },
    "research": {
      "methods": [
        "Stakeholder Interviews",
        "Employee Surveys",
        "Contextual Inquiry",
        "Heuristic Evaluation"
      ],
      "interviewQuestions": [
        "How many tools do you use daily for HR/Management tasks?",
        "What frustrates you the most about the current check-in process?",
        "How do you track your OKRs?",
        "How often do you lose track of assigned tasks?"
      ]
    },
    "researchFindings": {
      "points": [
        "78% of employees hated logging into multiple systems.",
        "Task tracking and attendance were the most frequently used features.",
        "Managers spent over 4 hours a week manually consolidating team reports.",
        "Legacy interfaces were considered 'too dense' and overwhelming."
      ]
    },
    "personas": [
      {
        "age": "28",
        "occupation": "Software Engineer",
        "goals": [
          "Log attendance quickly",
          "See daily tasks without friction"
        ],
        "painPoints": [
          "Forgetting to log time",
          "Missing HR announcements"
        ],
        "quote": "I just want to clock in, see my tasks, and get to work.",
        "scenario": "Logging in every morning to check the agenda."
      },
      {
        "age": "42",
        "occupation": "Engineering Manager",
        "goals": [
          "Monitor team progress",
          "Approve leaves instantly"
        ],
        "painPoints": [
          "Consolidating reports from 4 tools",
          "Missing OKR updates"
        ],
        "quote": "I need a bird's-eye view of my team without clicking through ten menus.",
        "scenario": "Reviewing weekly team performance and approving requests."
      }
    ],
    "userJourneyMap": {
      "before": [
        "Login to Tool A",
        "Switch to Tool B",
        "Lose context"
      ],
      "during": [
        "Unified dashboard access",
        "Quick actions panel"
      ],
      "after": [
        "Task completed",
        "Immediate feedback"
      ],
      "painPoints": [
        "Too many passwords",
        "Slow loading"
      ],
      "opportunities": [
        "Single Sign-On",
        "Widget-based dashboard"
      ]
    },
    "problemStatement": "Enterprise employees and managers need a unified, frictionless platform to handle daily administrative and performance tasks because fragmented tools cause cognitive overload and wasted time.",
    "howMightWe": [
      "How might we consolidate 6 tools into a single dashboard?",
      "How might we make attendance tracking a one-click action?",
      "How might we give managers a quick overview of team health?"
    ],
    "informationArchitecture": {
      "description": "The architecture was completely flattened. I moved from a deeply nested, tool-specific hierarchy to a role-based, modular structure where the Dashboard acts as the central hub."
    },
    "userFlow": {
      "steps": [
        "Login / SSO",
        "View Personalized Dashboard",
        "Interact with Quick Actions (Check-in, Request Leave)",
        "View detailed Modules (OKRs, Tasks)",
        "Log out"
      ]
    },
    "ideation": {
      "text": "I started with Crazy 8s, focusing on the Dashboard layout. I explored a widget-based approach vs. a list-based approach. The widget approach won because it allowed users to customize their view based on priority (e.g., keeping OKRs visible at the top)."
    },
    "lowFidelity": {
      "text": "Early wireframes focused heavily on the grid system and ensuring the navigation sidebar accommodated future modules. I tested the assumption that users wanted a collapsible sidebar."
    },
    "midFidelity": {
      "text": "In the mid-fidelity stage, I refined the widget spacing and introduced the 'Quick Actions' floating bar. Testing showed users loved having check-in and leave requests available from any screen."
    },
    "visualDirection": {
      "typography": "Inter (for optimal data readability)",
      "colorPalette": [
        "Primary Blue",
        "Success Green",
        "Warning Orange",
        "Dark Slate"
      ],
      "designPrinciples": [
        "Clarity over density",
        "Action-oriented",
        "Accessible contrast"
      ]
    },
    "designSystem": {
      "text": "I built a comprehensive component library using Figma variants. This included dense data tables, interactive stat cards, standardized form inputs, and a cohesive icon set to ensure developers could build the platform rapidly."
    },
    "highFidelity": {
      "screens": [
        {
          "title": "Unified Dashboard",
          "problem": "Scattered data across tools.",
          "layout": "Widget-based modular grid.",
          "help": "Allows users to see tasks, attendance, and announcements in one glance."
        },
        {
          "title": "Manager Overview",
          "problem": "Hard to track team health.",
          "layout": "List view with inline charts.",
          "help": "Provides immediate visibility into team OKRs and leave statuses."
        }
      ]
    },
    "prototype": {
      "features": [
        "Sidebar navigation transitions",
        "Widget drag-and-drop",
        "Micro-interactions for task completion"
      ]
    },
    "usabilityTesting": {
      "completionRate": "94%",
      "averageTime": "1 min 45 sec",
      "feedback": [
        "'The dashboard feels like my actual desk now.'",
        "Loved the quick actions menu",
        "Found the analytics charts slightly confusing initially"
      ]
    },
    "beforeAfter": {
      "metrics": [
        {
          "label": "Daily Check-in Time",
          "before": "4 mins",
          "after": "30 secs"
        },
        {
          "label": "Required Logins",
          "before": "6 systems",
          "after": "1 SSO"
        },
        {
          "label": "Manager Reporting",
          "before": "4 hours/week",
          "after": "Automated"
        }
      ]
    },
    "accessibility": {
      "points": [
        "WCAG 2.1 AA Compliant Contrast",
        "Keyboard navigable data tables",
        "Screen-reader friendly charts using ARIA labels"
      ]
    },
    "finalOutcome": "The redesigned WORKSPHERE platform successfully consolidated 6 legacy tools into a modern, fast, and unified dashboard, significantly boosting daily active engagement and reducing HR administrative overhead.",
    "impact": {
      "benefits": [
        "30% reduction in HR support tickets",
        "94% positive feedback from employee beta",
        "Saved managers 4 hours per week",
        "Increased OKR update frequency"
      ]
    },
    "reflection": {
      "text": "Initially, I tried to pack too much data into the dashboard. User testing quickly revealed that employees wanted actionable items, not just data. This taught me to prioritize 'tasks to be done' over 'information to be shown'."
    },
    "nextSteps": [
      "AI-driven task prioritization",
      "Mobile app offline mode",
      "Deep integration with Slack/Teams"
    ],
    "keyTakeaways": [
      "Consolidation requires ruthless prioritization.",
      "Actionable insights beat static data.",
      "Design systems accelerate enterprise development.",
      "Testing with managers and employees reveals conflicting needs.",
      "Simplicity is the ultimate sophistication in enterprise tools."
    ]
  }
},
{
  "id": 6,
  "slug": "insighthub",
  "category": "SaaS",
  "title": "INSIGHTHUB",
  "subtitle": "Business Intelligence Platform",
  "image": project4Url,
  "accentColor": "bg-primary",
  "year": "2024",
  "tags": [
    "Figma",
    "Data Visualization",
    "AI",
    "SaaS"
  ],
  "role": "UX Architect",
  "duration": "4 months",
  "shortDesc": "An executive analytics platform that centralized fragmented business reports into a unified decision-making dashboard with AI-generated insights.",
  "link": "https://github.com/harish2n5/Harish-newPortfolio",
  "caseStudy": {
    "cover": {
      "description": "Empowering executives with AI-driven analytics for faster, smarter decision-making.",
      "role": "UX/UI Design | Data Visualization",
      "timeline": "4 Months",
      "platform": "Web Application",
      "team": "Product & Data Science Team"
    },
    "hook": {
      "paragraph": "Data is useless if it takes hours to understand. During interviews, executives reported drowning in complex BI dashboards and relying on analysts to explain the numbers. This case study details how I designed InsightHub to turn raw data into plain-language, AI-generated insights."
    },
    "overview": {
      "whatIsIt": "InsightHub is a business intelligence platform that ingests raw company data and presents it via highly visual, interactive dashboards alongside AI-generated summaries.",
      "myRole": [
        "Data Visualization Design",
        "User Research",
        "Wireframing",
        "Prototyping"
      ],
      "duration": "4 Months",
      "tools": [
        "Figma",
        "Framer",
        "D3.js references"
      ]
    },
    "background": {
      "text": "Traditional BI tools (like Tableau or PowerBI) are incredibly powerful but have a steep learning curve. Non-technical business leaders often struggle to extract quick, high-level insights, leading to delayed strategic decisions."
    },
    "challenge": {
      "points": [
        "Dashboards were too dense and technical.",
        "Executives couldn't easily spot anomalies.",
        "Exporting and sharing reports was a manual, tedious process.",
        "Data lacked context without an analyst's explanation."
      ]
    },
    "goal": {
      "businessGoals": [
        "Increase daily usage by C-suite executives",
        "Reduce ad-hoc requests to the data team",
        "Improve report sharing capabilities"
      ],
      "userGoals": [
        "Understand metrics at a glance",
        "Read plain-language summaries",
        "Easily share insights with stakeholders"
      ]
    },
    "research": {
      "methods": [
        "Executive Interviews",
        "Contextual Inquiry",
        "Competitor Analysis (Tableau, Looker)"
      ],
      "interviewQuestions": [
        "What metrics do you check every single morning?",
        "How do you currently share data findings with your team?",
        "What frustrates you most about your current BI tool?"
      ]
    },
    "researchFindings": {
      "points": [
        "Executives only care about 3-5 KPIs daily.",
        "They preferred reading a sentence over analyzing a chart.",
        "Mobile access was highly requested but poorly executed in current tools.",
        "Anomalies (spikes/drops) needed immediate highlighting."
      ]
    },
    "personas": [
      {
        "age": "48",
        "occupation": "Chief Marketing Officer",
        "goals": [
          "See daily ROI instantly",
          "Share reports easily"
        ],
        "painPoints": [
          "Waiting for data analysts",
          "Too many complex filters"
        ],
        "quote": "Just tell me if we are up or down, and why.",
        "scenario": "Reviewing campaign performance on a taxi ride to work."
      }
    ],
    "userJourneyMap": {
      "before": [
        "Open complex BI tool",
        "Adjust 5 filters",
        "Call data analyst"
      ],
      "during": [
        "Open InsightHub",
        "Read AI summary"
      ],
      "after": [
        "Share insight via Slack",
        "Make decision"
      ],
      "painPoints": [
        "Filter fatigue",
        "Data blindness"
      ],
      "opportunities": [
        "Automated anomaly detection",
        "Natural language queries"
      ]
    },
    "problemStatement": "Business executives need a simpler way to understand complex data because traditional BI tools require too much technical expertise and time to decipher.",
    "howMightWe": [
      "How might we replace complex charts with plain language?",
      "How might we highlight anomalies automatically?",
      "How might we make sharing insights a one-click process?"
    ],
    "informationArchitecture": {
      "description": "The architecture prioritizes a 'Summary First' approach. The homepage acts as a news feed for data, pushing the most critical changes to the top, rather than forcing users to dig through folders."
    },
    "userFlow": {
      "steps": [
        "Login",
        "View AI Executive Summary",
        "Click anomaly for details",
        "Interact with underlying chart",
        "Export/Share to Slack"
      ]
    },
    "ideation": {
      "text": "I explored several dashboard layouts. The breakthrough came when I moved away from a 'grid of charts' to a 'feed of insights'. We decided to pair every chart with an AI-generated text block explaining the 'Why'."
    },
    "lowFidelity": {
      "text": "Wireframes focused on the hierarchy between the AI text and the visual chart. I tested different chart sizes to ensure the text didn't feel secondary."
    },
    "midFidelity": {
      "text": "Mid-fidelity introduced interactive tooltips and the 'Share' workflow. Testing revealed that users wanted the ability to annotate the charts before sharing."
    },
    "visualDirection": {
      "typography": "Satoshi (Modern, geometric)",
      "colorPalette": [
        "Deep Indigo",
        "Accent Cyan",
        "Alert Red",
        "Neutral Grays"
      ],
      "designPrinciples": [
        "Data-ink ratio optimization",
        "Text as a primary UI element",
        "Calm analytics"
      ]
    },
    "designSystem": {
      "text": "Created a robust chart library (line, bar, scatter) focusing on accessible color pairings for data series, custom tooltips, and a standardized 'Insight Card' component."
    },
    "highFidelity": {
      "screens": [
        {
          "title": "Executive Feed",
          "problem": "Information overload.",
          "layout": "Vertical scrolling feed of insight cards.",
          "help": "Puts the narrative before the raw numbers."
        },
        {
          "title": "Deep Dive View",
          "problem": "Lack of context on anomalies.",
          "layout": "Split screen: Chart on left, AI analysis on right.",
          "help": "Allows detailed exploration without losing the narrative."
        }
      ]
    },
    "prototype": {
      "features": [
        "Hover interactions on charts",
        "Dynamic filtering animations",
        "AI typing effects for generated insights"
      ]
    },
    "usabilityTesting": {
      "completionRate": "100%",
      "averageTime": "45 secs",
      "feedback": [
        "'This is the first dashboard I actually enjoy reading.'",
        "The plain text summaries are a game-changer.",
        "Wanted more export formats (PDF)."
      ]
    },
    "beforeAfter": {
      "metrics": [
        {
          "label": "Time to Insight",
          "before": "15 mins",
          "after": "2 mins"
        },
        {
          "label": "Ad-hoc Data Requests",
          "before": "High",
          "after": "Reduced by 40%"
        }
      ]
    },
    "accessibility": {
      "points": [
        "Color-blind safe data palettes",
        "High contrast text over charts",
        "Clear data labels avoiding hover-only states"
      ]
    },
    "finalOutcome": "InsightHub revolutionized how executives interact with data, replacing intimidating chart grids with intuitive, AI-driven narratives that significantly accelerated strategic decision-making.",
    "impact": {
      "benefits": [
        "Increased daily executive login rate by 60%",
        "Reduced data team ad-hoc requests by 40%",
        "Pioneered a 'narrative-first' analytics approach"
      ]
    },
    "reflection": {
      "text": "Designing for data visualization is challenging because users have vastly different levels of data literacy. Relying on AI text summaries proved to be the ultimate equalizer, bridging the gap between raw data and business strategy."
    },
    "nextSteps": [
      "Voice-to-text querying ('Show me Q3 revenue')",
      "Predictive forecasting models",
      "Native mobile app for iOS"
    ],
    "keyTakeaways": [
      "Context is more important than data.",
      "Executives prefer reading over analyzing.",
      "Accessibility in charts requires careful color selection.",
      "Testing with real data is crucial.",
      "Reduce friction in the sharing process."
    ]
  }
},
{
  "id": 5,
  "slug": "supplychain-nexus",
  "category": "Enterprise",
  "title": "SUPPLYCHAIN NEXUS",
  "subtitle": "Procurement System",
  "image": project3Url,
  "accentColor": "bg-[#FFD6A0]",
  "year": "2024",
  "tags": [
    "Figma",
    "Complex Workflows",
    "RBAC",
    "SaaS"
  ],
  "role": "UI/UX Designer",
  "duration": "5 months",
  "shortDesc": "An enterprise procurement platform that digitized the complete purchasing lifecycle from request creation to vendor payment approval.",
  "link": "https://github.com/harish2n5/Harish-newPortfolio",
  "caseStudy": {
    "cover": {
      "description": "Digitizing and streamlining complex enterprise procurement workflows.",
      "role": "Lead UX Designer",
      "timeline": "5 Months",
      "platform": "Web Platform",
      "team": "Engineering & Procurement Experts"
    },
    "hook": {
      "paragraph": "Paper trails, lost emails, and delayed approvals plague enterprise procurement. I discovered that simple purchase requests were taking up to 3 weeks to approve due to opaque processes. This case study details how I designed SupplyChain Nexus to bring total transparency and speed to the procurement lifecycle."
    },
    "overview": {
      "whatIsIt": "SupplyChain Nexus is a comprehensive platform for enterprise companies to manage purchase requisitions, vendor approvals, and budget tracking in one secure system.",
      "myRole": [
        "Workflow Mapping",
        "UX Design",
        "Role-Based Access Control (RBAC) UI",
        "Prototyping"
      ],
      "duration": "5 Months",
      "tools": [
        "Figma",
        "Whimsical",
        "Jira"
      ]
    },
    "background": {
      "text": "Large enterprises rely on strict procurement processes to control spending. Historically, this involves massive spreadsheets, PDF forms, and confusing email chains, leading to rogue spending and severe auditing headaches."
    },
    "challenge": {
      "points": [
        "Approval chains were invisible to the requester.",
        "Vendors lacked a portal to upload invoices.",
        "Finance teams couldn't track budgets in real-time.",
        "The system had complex, multi-tiered user roles."
      ]
    },
    "goal": {
      "businessGoals": [
        "Reduce procurement cycle time by 50%",
        "Eliminate rogue spending",
        "Ensure 100% audit compliance"
      ],
      "userGoals": [
        "Track request status easily",
        "Approve requests in one click",
        "Easily onboard new vendors"
      ]
    },
    "research": {
      "methods": [
        "Process Mapping Workshops",
        "User Interviews",
        "Shadowing Finance Teams"
      ],
      "interviewQuestions": [
        "How do you currently track a purchase request?",
        "What causes the biggest delays in approval?",
        "How do you verify budget availability before approving?"
      ]
    },
    "researchFindings": {
      "points": [
        "Approvers ignored emails because they lacked context.",
        "Requesters constantly messaged finance asking for status updates.",
        "Vendor onboarding took weeks due to missing documents.",
        "Role-based access was highly confusing in legacy systems."
      ]
    },
    "personas": [
      {
        "age": "35",
        "occupation": "Department Manager (Requester)",
        "goals": [
          "Get equipment fast",
          "Know who is blocking the request"
        ],
        "painPoints": [
          "Black hole processes",
          "Complex forms"
        ],
        "quote": "I just need a laptop for my new hire. Why does it take 3 weeks?",
        "scenario": "Submitting a  IT request."
      },
      {
        "age": "50",
        "occupation": "Finance Director (Approver)",
        "goals": [
          "Prevent budget overruns",
          "Audit easily"
        ],
        "painPoints": [
          "Lacking context on requests",
          "Rogue spending"
        ],
        "quote": "I won't approve unless I see the remaining budget.",
        "scenario": "Reviewing 50+ pending approvals at month-end."
      }
    ],
    "userJourneyMap": {
      "before": [
        "Fill PDF form",
        "Email manager",
        "Wait in silence"
      ],
      "during": [
        "Submit via portal",
        "Track visual timeline"
      ],
      "after": [
        "Item received",
        "Vendor paid automatically"
      ],
      "painPoints": [
        "Lack of visibility",
        "Manual data entry"
      ],
      "opportunities": [
        "Visual progress trackers",
        "Automated budget checks"
      ]
    },
    "problemStatement": "Enterprise employees and finance teams need a transparent, automated procurement system because manual workflows lead to critical delays, lost requests, and budget overruns.",
    "howMightWe": [
      "How might we make the approval chain completely transparent?",
      "How might we simplify the vendor onboarding process?",
      "How might we display real-time budget impacts to approvers?"
    ],
    "informationArchitecture": {
      "description": "I designed a strict Role-Based Access Control (RBAC) architecture. Requesters see a simplified 'Storefront' view, while Finance users see complex 'Ledger' and 'Approval' queues."
    },
    "userFlow": {
      "steps": [
        "Select Items / Create Request",
        "System routes to Manager",
        "System routes to Finance",
        "Vendor fulfills order",
        "Invoice matched and paid"
      ]
    },
    "ideation": {
      "text": "The biggest design challenge was the 'Approval Tracker'. I sketched multiple versions, comparing a vertical timeline (like shipping trackers) versus a horizontal stepper. The vertical timeline was chosen because approval chains can sometimes dynamically branch out to 5+ people."
    },
    "lowFidelity": {
      "text": "Wireframing focused on the 'Request Detail' page. I needed to ensure that approvers had all context (Budget remaining, ROI justification, attached quotes) above the fold."
    },
    "midFidelity": {
      "text": "I introduced bulk-approval actions for Finance users. Testing showed that making it *too* easy to bulk approve was risky, so I added a mandatory summary confirmation modal."
    },
    "visualDirection": {
      "typography": "Roboto (Dense and readable)",
      "colorPalette": [
        "Corporate Navy",
        "Safety Yellow",
        "Alert Red",
        "Muted Gray"
      ],
      "designPrinciples": [
        "High Information Density",
        "Clear hierarchy",
        "Error prevention"
      ]
    },
    "designSystem": {
      "text": "Developed a dense enterprise component library. Key innovations included collapsible data tables, visual status badges (Pending, Approved, Blocked), and a robust multi-step form architecture."
    },
    "highFidelity": {
      "screens": [
        {
          "title": "Requester Dashboard",
          "problem": "Status anxiety.",
          "layout": "Visual Kanban-style tracking cards.",
          "help": "Users immediately know exactly where their request is stuck."
        },
        {
          "title": "Finance Approval Queue",
          "problem": "Context switching.",
          "layout": "Split-pane layout with budget context on the right.",
          "help": "Allows finance to approve without leaving the page."
        }
      ]
    },
    "prototype": {
      "features": [
        "Dynamic role switching (View as Manager/Finance)",
        "Interactive approval timelines",
        "Complex form validation"
      ]
    },
    "usabilityTesting": {
      "completionRate": "90%",
      "averageTime": "3 mins",
      "feedback": [
        "'The visual tracker is a lifesaver.'",
        "Finance loved the split-pane view",
        "Form required too many mandatory fields initially"
      ]
    },
    "beforeAfter": {
      "metrics": [
        {
          "label": "Average Approval Time",
          "before": "18 Days",
          "after": "4 Days"
        },
        {
          "label": "Status Update Requests",
          "before": "15/week",
          "after": "0/week"
        }
      ]
    },
    "accessibility": {
      "points": [
        "Keyboard navigation for heavy form entry",
        "High contrast badges for statuses",
        "Clear error states with recovery instructions"
      ]
    },
    "finalOutcome": "SupplyChain Nexus successfully digitized a multi-million dollar procurement pipeline, reducing average approval times by 78% and eliminating 'black hole' requests through total system transparency.",
    "impact": {
      "benefits": [
        "Reduced approval cycle from 18 to 4 days",
        "100% elimination of paper forms",
        "Increased vendor satisfaction scores"
      ]
    },
    "reflection": {
      "text": "Designing for enterprise means designing for constraints. I learned that adding friction (like confirmation modals for big approvals) is sometimes better UX than making things instantly clickable. Security and compliance dictate the design."
    },
    "nextSteps": [
      "Automated OCR for invoice scanning",
      "AI vendor risk assessments",
      "Mobile app for on-the-go approvals"
    ],
    "keyTakeaways": [
      "Transparency cures anxiety.",
      "Enterprise users need dense, contextual data.",
      "Friction can be a feature in finance.",
      "Map the edge cases early.",
      "Role-based design is incredibly complex but rewarding."
    ]
  }
}
];


