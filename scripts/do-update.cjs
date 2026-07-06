const fs = require('fs');
const path = require('path');

const workPath = path.join(__dirname, '..', 'artifacts', 'portfolio', 'src', 'pages', 'work.tsx');
const projectsArrayPath = path.join(__dirname, 'projects_array.txt');
const modalRenderPath = path.join(__dirname, 'modal_render.txt');

let workContent = fs.readFileSync(workPath, 'utf8');
const projectsArray = fs.readFileSync(projectsArrayPath, 'utf8');
const modalRender = fs.readFileSync(modalRenderPath, 'utf8');

// replace projects array
workContent = workContent.replace(/const projects = \[[\s\S]*?\];\n\nconst workflowSteps/g, projectsArray + '\n\nconst workflowSteps');

// replace modal render block
const modalRenderStart = workContent.indexOf('<div className="space-y-12 mb-12 mt-8">');
const modalRenderEnd = workContent.indexOf('</div>\n        </div>\n      </motion.div>\n    </motion.div>\n  );\n}\n\nfunction SnippetModal');

if (modalRenderStart === -1 || modalRenderEnd === -1) {
    console.error("Could not find modal render block bounds");
    process.exit(1);
}

workContent = workContent.substring(0, modalRenderStart) + modalRender + workContent.substring(modalRenderEnd);

fs.writeFileSync(workPath, workContent);
console.log("Successfully updated work.tsx");
