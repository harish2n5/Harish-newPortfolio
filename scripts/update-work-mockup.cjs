const fs = require('fs');
const path = require('path');

const workPath = path.join(__dirname, '..', 'artifacts', 'portfolio', 'src', 'pages', 'work.tsx');
let workContent = fs.readFileSync(workPath, 'utf8');

// Add import
if (!workContent.includes('LaptopMockup')) {
  workContent = workContent.replace('import Navbar from "@/components/Navbar";', 'import Navbar from "@/components/Navbar";\nimport { LaptopMockup, IsometricMockup } from "@/components/ui/Mockup";');
}

// Replace ProjectCard image container
const targetHTML = `<div className={\`\${project.accentColor} border-b-[4px] md:border-b-0 \${i % 2 === 1 ? "md:border-l-[4px]" : "md:border-r-[4px]"} border-black relative overflow-hidden aspect-video md:aspect-auto p-4 md:p-8 flex items-center justify-center\`}>
                  <div className="w-full h-full rounded-xl border-[3px] border-black bg-white overflow-hidden flex flex-col brutal-shadow">
                    <div className="w-full h-8 bg-gray-200 border-b-[3px] border-black flex items-center px-3 gap-2 shrink-0">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f56] border-[2px] border-black"></div>
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border-[2px] border-black"></div>
                      <div className="w-3 h-3 rounded-full bg-[#27c93f] border-[2px] border-black"></div>
                    </div>
                    <div className="relative flex-1 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 font-mono text-xs font-bold uppercase border-[2px] border-black bg-white px-3 py-1 z-10">
                    {project.year}
                  </div>
                </div>`;

const newHTML = `<div className={\`\${project.accentColor} border-b-[4px] md:border-b-0 \${i % 2 === 1 ? "md:border-l-[4px]" : "md:border-r-[4px]"} border-black relative overflow-hidden p-8 md:p-12 flex items-center justify-center\`}>
                  {i % 2 === 0 ? (
                    <LaptopMockup>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </LaptopMockup>
                  ) : (
                    <IsometricMockup>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-500"
                      />
                    </IsometricMockup>
                  )}
                  <div className="absolute top-4 left-4 font-mono text-xs font-bold uppercase border-[2px] border-black bg-white px-3 py-1 z-10 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                    {project.year}
                  </div>
                </div>`;

workContent = workContent.replace(targetHTML, newHTML);

// Replace ProjectModal image container
const modalTargetHTML = `<div className="w-full rounded-xl border-[3px] border-black bg-white overflow-hidden flex flex-col mb-8 brutal-shadow">
            <div className="w-full h-8 bg-gray-200 border-b-[3px] border-black flex items-center px-3 gap-2 shrink-0">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56] border-[2px] border-black"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border-[2px] border-black"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f] border-[2px] border-black"></div>
            </div>
            <div className="aspect-video relative overflow-hidden bg-gray-100">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
          </div>`;

const modalNewHTML = `<div className="mb-12 mt-4 px-4 md:px-12 w-full max-w-4xl mx-auto">
            <LaptopMockup>
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </LaptopMockup>
          </div>`;

workContent = workContent.replace(modalTargetHTML, modalNewHTML);

fs.writeFileSync(workPath, workContent);
console.log("work.tsx updated");
