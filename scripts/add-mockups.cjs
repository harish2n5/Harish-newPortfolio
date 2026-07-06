const fs = require('fs');
const path = require('path');

const workPath = path.join(__dirname, '..', 'artifacts', 'portfolio', 'src', 'pages', 'work.tsx');
let content = fs.readFileSync(workPath, 'utf8');

// 1. ProjectModal replacement
const modalTarget = `<div className="aspect-video border-[3px] border-black overflow-hidden mb-8">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>`;

const modalReplacement = `<div className="w-full rounded-xl border-[3px] border-black bg-white overflow-hidden flex flex-col mb-8 brutal-shadow">
            <div className="w-full h-8 bg-gray-200 border-b-[3px] border-black flex items-center px-3 gap-2 shrink-0">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56] border-[2px] border-black"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border-[2px] border-black"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f] border-[2px] border-black"></div>
            </div>
            <div className="aspect-video relative overflow-hidden bg-gray-100">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
          </div>`;

content = content.replace(modalTarget, modalReplacement);

// 2. ProjectCard replacement
const cardTarget = `<div className={\`\${project.accentColor} border-b-[4px] md:border-b-0 \${i % 2 === 1 ? "md:border-l-[4px]" : "md:border-r-[4px]"} border-black relative overflow-hidden aspect-video md:aspect-auto\`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 min-h-64"
                  />
                  <div className="absolute top-4 left-4 font-mono text-xs font-bold uppercase border-[2px] border-black bg-white px-3 py-1">
                    {project.year}
                  </div>
                </div>`;

const cardReplacement = `<div className={\`\${project.accentColor} border-b-[4px] md:border-b-0 \${i % 2 === 1 ? "md:border-l-[4px]" : "md:border-r-[4px]"} border-black relative overflow-hidden aspect-video md:aspect-auto p-4 md:p-8 flex items-center justify-center\`}>
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

content = content.replace(cardTarget, cardReplacement);

fs.writeFileSync(workPath, content);
console.log("Successfully updated work.tsx");
