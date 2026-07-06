const fs = require('fs');
const path = require('path');

const homePath = path.join(__dirname, '..', 'artifacts', 'portfolio', 'src', 'pages', 'home.tsx');
const workPath = path.join(__dirname, '..', 'artifacts', 'portfolio', 'src', 'pages', 'work.tsx');

let homeContent = fs.readFileSync(homePath, 'utf8');
let workContent = fs.readFileSync(workPath, 'utf8');

// Update home.tsx
const newHomeProjects = `const projects = [
  {
    title: "CareerFlow AI",
    subtitle: "Job Search Platform",
    description: "An AI-powered platform for job matching, ATS optimization, and interview prep.",
    image: project1Url,
    color: "bg-primary",
    link: "https://github.com/harish2n5/Harish-newPortfolio"
  },
  {
    title: "Scalable Design System",
    subtitle: "& Component Library",
    description: "Created a scalable design system to ensure visual consistency and faster product development across multiple screens and platforms.",
    image: project3Url,
    color: "bg-primary",
    link: "https://github.com/harish2n5/Harish-newPortfolio"
  },
  {
    title: "Enterprise Event Management System",
    subtitle: "UI/UX Case Study",
    description: "Designed an end-to-end UI/UX solution for an enterprise-level event management system, including admin dashboards and workflows.",
    image: project1Url,
    color: "bg-[#FFD6A0]",
    link: "https://github.com/harish2n5/Harish-newPortfolio"
  },
  {
    title: "MediSync",
    subtitle: "Healthcare Management",
    description: "A unified healthcare ecosystem for appointments, prescriptions, and health tracking.",
    image: project2Url,
    color: "bg-secondary",
    link: "https://github.com/harish2n5/Harish-newPortfolio"
  }
];`;

homeContent = homeContent.replace(/const projects = \[[\s\S]*?\];\n/, newHomeProjects + '\n');
fs.writeFileSync(homePath, homeContent);

// Update work.tsx
const newWorkProjects = `const projects = [
  {
    id: 0,
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
        { title: "Problem", content: "Job seekers often apply to hundreds of jobs manually, use generic resumes, and struggle to track applications." },
        { title: "Solution", content: "An AI-powered platform that helps users:\\n- Find relevant jobs\\n- Optimize resumes for ATS systems\\n- Generate cover letters\\n- Track applications\\n- Get interview preparation suggestions" },
        { title: "Key Features", content: "- AI Job Matching\\n- Resume Score Analyzer\\n- ATS Compatibility Checker\\n- Cover Letter Generator\\n- Application Tracker\\n- Interview Preparation Dashboard\\n- Career Progress Analytics" },
        { title: "UX Challenges", content: "- Presenting AI recommendations clearly\\n- Building trust in AI-generated suggestions\\n- Managing complex workflows" },
        { title: "Screens", content: "- Landing Page\\n- Login/Signup\\n- Dashboard\\n- Job Search\\n- Resume Analyzer\\n- Cover Letter Generator\\n- Application Tracker\\n- User Profile" }
      ]
    }
  },
  {
    id: 1,
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
];`;

workContent = workContent.replace(/const projects = \[[\s\S]*?\];\n\nconst workflowSteps/g, newWorkProjects + '\\n\\nconst workflowSteps');

const modalRenderStart = workContent.indexOf('<div className="space-y-12 mb-12 mt-8">');
const modalRenderEnd = workContent.indexOf('</div>\\n        </div>\\n      </motion.div>\\n    </motion.div>\\n  );\\n}\\n\\nfunction SnippetModal');

const newModalRender = \`<div className="space-y-12 mb-12 mt-8">
            {/* 1. Overview */}
            <section>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4 border-b-[3px] border-black pb-2">1. Overview</h3>
              <p className="font-mono text-base mb-4">{project.shortDesc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(t => <span key={t} className="border-[2px] border-black px-3 py-1 font-mono text-xs font-bold uppercase bg-white">{t}</span>)}
              </div>
            </section>

            {/* @ts-ignore */}
            {project.caseStudy.customSections ? (
              // @ts-ignore
              project.caseStudy.customSections.map((sec: any, idx: number) => (
                <section key={sec.title}>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4 border-b-[3px] border-black pb-2">{idx + 2}. {sec.title}</h3>
                  <div className="font-mono text-base whitespace-pre-line">{sec.content}</div>
                </section>
              ))
            ) : (
              <>
                {/* 2. Problem Statement */}
                <section>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4 border-b-[3px] border-black pb-2">2. Problem Statement</h3>
                  <p className="font-mono text-base"><strong>The Problem:</strong> {project.caseStudy.problem?.statement}</p>
                  <p className="font-mono text-base mt-2"><strong>Who faces it:</strong> {project.caseStudy.problem?.whoFacesIt}</p>
                </section>

                {/* 3. Research */}
                <section>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4 border-b-[3px] border-black pb-2">3. Research</h3>
                  <ul className="space-y-2 font-mono text-base">
                    <li><strong className="bg-primary/20 px-1">Interviews:</strong> {project.caseStudy.research?.userInterviews}</li>
                    <li><strong className="bg-secondary/20 px-1">Surveys:</strong> {project.caseStudy.research?.surveys}</li>
                    {project.caseStudy.research?.competitorAnalysis && <li><strong className="bg-[#B8F0A0]/30 px-1">Competitor Analysis:</strong> {project.caseStudy.research?.competitorAnalysis}</li>}
                  </ul>
                </section>

                {/* 4. Personas */}
                <section>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4 border-b-[3px] border-black pb-2">4. Personas</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-sm">
                    <div className="border-[2px] border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"><strong className="uppercase border-b-[2px] border-black block pb-1">Goals</strong><ul className="list-disc pl-4 mt-3 space-y-1">{project.caseStudy.personas?.goals?.map((g: string) => <li key={g}>{g}</li>)}</ul></div>
                    <div className="border-[2px] border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"><strong className="uppercase border-b-[2px] border-black block pb-1">Pain Points</strong><ul className="list-disc pl-4 mt-3 space-y-1">{project.caseStudy.personas?.painPoints?.map((p: string) => <li key={p}>{p}</li>)}</ul></div>
                    <div className="border-[2px] border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"><strong className="uppercase border-b-[2px] border-black block pb-1">Motivations</strong><ul className="list-disc pl-4 mt-3 space-y-1">{project.caseStudy.personas?.motivations?.map((m: string) => <li key={m}>{m}</li>)}</ul></div>
                  </div>
                </section>

                {/* 5. User Journey Map */}
                <section>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4 border-b-[3px] border-black pb-2">5. User Journey Map</h3>
                  <div className="space-y-4 font-mono text-base border-[2px] border-black p-5 bg-white">
                    <div className="border-l-[4px] border-primary pl-4"><strong className="block mb-1 uppercase text-xs">Discovery</strong> {project.caseStudy.journey?.discovery}</div>
                    <div className="border-l-[4px] border-secondary pl-4"><strong className="block mb-1 uppercase text-xs">Interaction</strong> {project.caseStudy.journey?.interaction}</div>
                    <div className="border-l-[4px] border-[#B8F0A0] pl-4"><strong className="block mb-1 uppercase text-xs">Pain Points</strong> {project.caseStudy.journey?.painPoints}</div>
                  </div>
                </section>

                {/* 6. Information Architecture */}
                <section>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4 border-b-[3px] border-black pb-2">6. Information Architecture</h3>
                  <p className="font-mono text-base mb-2"><strong>Sitemap:</strong> {project.caseStudy.architecture?.sitemap}</p>
                  <p className="font-mono text-base"><strong>Navigation Flow:</strong> {project.caseStudy.architecture?.navigationFlow}</p>
                </section>

                {/* 7. Wireframes */}
                <section>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4 border-b-[3px] border-black pb-2">7. Wireframes</h3>
                  <p className="font-mono text-base mb-2"><strong>Low Fidelity:</strong> {project.caseStudy.wireframes?.lowFidelity}</p>
                  <p className="font-mono text-base"><strong>Mid Fidelity:</strong> {project.caseStudy.wireframes?.midFidelity}</p>
                </section>

                {/* 8. Design System */}
                <section>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4 border-b-[3px] border-black pb-2">8. Design System</h3>
                  <ul className="space-y-2 font-mono text-base">
                    <li><strong>Colors:</strong> {project.caseStudy.designSystem?.colors}</li>
                    <li><strong>Typography:</strong> {project.caseStudy.designSystem?.typography}</li>
                    <li><strong>Components:</strong> {project.caseStudy.designSystem?.components}</li>
                    <li><strong>Icons:</strong> {project.caseStudy.designSystem?.icons}</li>
                  </ul>
                </section>

                {/* 9. Final UI */}
                <section>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4 border-b-[3px] border-black pb-2">9. Final UI</h3>
                  <ul className="space-y-2 font-mono text-base bg-[#C8B8FF]/20 p-4 border-[2px] border-black">
                    <li><strong>Mobile Screens:</strong> {project.caseStudy.finalUI?.mobileScreens}</li>
                    <li><strong>Web Screens:</strong> {project.caseStudy.finalUI?.webScreens}</li>
                    <li><strong>Responsive Layouts:</strong> {project.caseStudy.finalUI?.responsiveLayouts}</li>
                  </ul>
                </section>

                {/* 10. Usability Testing */}
                <section>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4 border-b-[3px] border-black pb-2">10. Usability Testing</h3>
                  <p className="font-mono text-base mb-2"><strong>Findings:</strong> {project.caseStudy.usabilityTesting?.findings}</p>
                  <p className="font-mono text-base border-l-[4px] border-black pl-3 ml-2 bg-gray-50 py-2"><strong>Iterations:</strong> {project.caseStudy.usabilityTesting?.iterations}</p>
                </section>

                {/* 11. Impact & Learnings */}
                <section>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4 border-b-[3px] border-black pb-2">11. Impact & Learnings</h3>
                  <div className="bg-primary border-[3px] border-black p-5">
                    <p className="font-mono text-base mb-2"><strong className="text-black uppercase text-sm">Metrics Improved:</strong><br/>{project.caseStudy.impact?.metricsImproved}</p>
                    <p className="font-mono text-base"><strong className="text-black uppercase text-sm">Future Enhancements:</strong><br/>{project.caseStudy.impact?.futureEnhancements}</p>
                  </div>
                </section>
              </>
            )}\`;

workContent = workContent.substring(0, modalRenderStart) + newModalRender + workContent.substring(modalRenderEnd);
fs.writeFileSync(workPath, workContent);

console.log("Successfully updated projects.");
