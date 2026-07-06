const fs = require('fs');
const path = require('path');

const workPath = path.join(__dirname, '..', 'artifacts', 'portfolio', 'src', 'pages', 'work.tsx');
let workContent = fs.readFileSync(workPath, 'utf8');

const newProjects = `,
  {
    id: 4,
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
];`;

const idx = workContent.lastIndexOf('];\n\nconst workflowSteps');
if (idx !== -1) {
  workContent = workContent.substring(0, idx) + newProjects + workContent.substring(idx + 2);
  fs.writeFileSync(workPath, workContent);
  console.log("Success");
} else {
  // alternative matching
  const regex = /\];\s*const workflowSteps/g;
  workContent = workContent.replace(regex, newProjects + "\n\nconst workflowSteps");
  fs.writeFileSync(workPath, workContent);
  console.log("Success via regex");
}
