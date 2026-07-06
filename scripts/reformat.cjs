const fs = require('fs');
const path = require('path');

const workPath = path.join(__dirname, '..', 'artifacts', 'portfolio', 'src', 'pages', 'work.tsx');
let workContent = fs.readFileSync(workPath, 'utf8');

// The new rendering block for the modal:
const newModalRender = `          <div className="space-y-12 mb-12 mt-8">
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
          </div>`;

// Replace the modal rendering block
const modalRenderStartStr = '<div className="space-y-12 mb-12 mt-8">';
const modalRenderStart = workContent.indexOf(modalRenderStartStr);

if (modalRenderStart === -1) {
    console.error("Could not find modal render block start");
    process.exit(1);
}

const endBlockRegex = /<\/div>[\r\n\s]*<\/div>[\r\n\s]*<\/motion\.div>[\r\n\s]*<\/motion\.div>[\r\n\s]*\);[\r\n\s]*\}[\r\n\s]*function SnippetModal/;
const match = workContent.match(endBlockRegex);

if (!match) {
    console.error("Could not find modal render block end");
    process.exit(1);
}

let afterFirstDiv = match.index;
while (workContent.substr(afterFirstDiv, 6) !== '</div>') {
    afterFirstDiv++;
}
afterFirstDiv += 6; // skip the `</div>` of the space-y-12 block

// Also we should update the customSections of CareerFlow AI to map to these 8 sections.
// Wait, I can just write a regex to replace the customSections array for CareerFlow AI.
const newCareerFlowSections = `customSections: [
        { title: "Hook — the opening frame", content: "An AI-powered platform that helps users find relevant jobs, optimize resumes for ATS systems, generate cover letters, and track applications." },
        { title: "Context & problem statement", content: "Job seekers often apply to hundreds of jobs manually, use generic resumes, and struggle to track applications." },
        { title: "Research & discovery", content: "Analyzed existing job platforms and user pain points to identify gaps in ATS optimization and tracking." },
        { title: "Define — your problem reframe", content: "Presenting AI recommendations clearly while building trust in AI-generated suggestions." },
        { title: "Ideation & decisions", content: "Focused on an integrated workflow combining Job Search, Resume Analyzer, and Cover Letter Generator in one dashboard." },
        { title: "Design evolution", content: "Iterated through complex workflows to simplify AI matching and interview preparation." },
        { title: "Testing & iterations", content: "Refined the Resume Analyzer based on user feedback to ensure suggestions were actionable and transparent." },
        { title: "Outcome & reflection", content: "Delivered a comprehensive Application Tracker and User Profile, significantly improving user engagement and application success rates." }
      ]`;

// Replace the customSections block
const updatedContentWithModal = workContent.substring(0, modalRenderStart) + newModalRender + workContent.substring(afterFirstDiv);

const finalContent = updatedContentWithModal.replace(/customSections:\s*\[[\s\S]*?\]/, newCareerFlowSections);

fs.writeFileSync(workPath, finalContent);
console.log("Successfully updated work.tsx");
