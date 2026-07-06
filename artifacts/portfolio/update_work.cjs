const fs = require('fs');
const path = require('path');
const p = path.resolve('c:/Users/HP/OneDrive/Desktop/Bat Mobile/Harish-newPortfolio/artifacts/portfolio/src/pages/work.tsx');
let content = fs.readFileSync(p, 'utf8');

content = content.replace('import { useRef, useState } from "react";', 'import { useRef, useState } from "react";\nimport { Link } from "wouter";\nimport { projects, designSnippets } from "@/lib/data";');

const marqueeIndex = content.indexOf('const MARQUEE_TEXT = "DESIGN • DEVELOP • DELIVER • ITERATE • ";');
const workflowIndex = content.indexOf('const workflowSteps = [');
content = content.substring(0, marqueeIndex + 'const MARQUEE_TEXT = "DESIGN • DEVELOP • DELIVER • ITERATE • ";'.length) + '\n\n' + content.substring(workflowIndex);

const projectModalStart = content.indexOf('function ProjectModal');
const snippetModalStart = content.indexOf('function SnippetModal');
content = content.substring(0, projectModalStart) + content.substring(snippetModalStart);

content = content.replace('const [activeProject, setActiveProject] = useState<typeof projects[0] | null>(null);', '');
content = content.replace('{activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}', '');

const buttonRegex = /<motion\.button[\s\S]*?onClick=\{\(\) => setActiveProject\(project\)\}[\s\S]*?View Case Study <ArrowUpRight className="w-5 h-5" \/>\n\s*<\/motion\.button>/;
const linkStr = `<Link href={"/work/" + project.slug}>
                      <motion.a
                        whileHover={{ x: -3, y: -3, boxShadow: "6px 6px 0px #000" }}
                        whileTap={{ x: 1, y: 1, boxShadow: "2px 2px 0px #000" }}
                        data-testid={\`button-project-detail-\${project.id}\`}
                        className="self-start flex items-center gap-3 font-bold uppercase border-[3px] border-black bg-background px-6 py-3 brutal-shadow hover:bg-primary transition-colors cursor-pointer"
                      >
                        View Case Study <ArrowUpRight className="w-5 h-5" />
                      </motion.a>
                    </Link>`;
content = content.replace(buttonRegex, linkStr);

fs.writeFileSync(p, content);
console.log('Done');
