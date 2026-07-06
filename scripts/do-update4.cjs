const fs = require('fs');
const path = require('path');

const workPath = path.join(__dirname, '..', 'artifacts', 'portfolio', 'src', 'pages', 'work.tsx');
const projectsArrayPath = path.join(__dirname, 'projects_array.txt');
const modalRenderPath = path.join(__dirname, 'modal_render.txt');

let workContent = fs.readFileSync(workPath, 'utf8');
const projectsArray = fs.readFileSync(projectsArrayPath, 'utf8');
const modalRender = fs.readFileSync(modalRenderPath, 'utf8');

// replace projects array
workContent = workContent.replace(/const projects = \[[\s\S]*?\];[\r\n\s]+const workflowSteps/g, projectsArray + '\n\nconst workflowSteps');

// replace modal render block
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

// match.index is exactly at the `</div>` of `<div className="space-y-12 mb-12 mt-8">`
// We need to jump past this first `</div>` because `modalRender` already has it!
let afterFirstDiv = match.index;
while (workContent.substr(afterFirstDiv, 6) !== '</div>') {
    afterFirstDiv++;
}
afterFirstDiv += 6; // skip the `</div>`

workContent = workContent.substring(0, modalRenderStart) + modalRender + workContent.substring(afterFirstDiv);

fs.writeFileSync(workPath, workContent);
console.log("Successfully updated work.tsx");
