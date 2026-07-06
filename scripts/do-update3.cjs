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

// Now we need to find the exact end of the `<div className="space-y-12 mb-12 mt-8">` block.
// It ends right before `</div>\n        </div>\n      </motion.div>\n    </motion.div>\n  );\n}`
const endBlockRegex = /<\/div>[\r\n\s]*<\/div>[\r\n\s]*<\/motion\.div>[\r\n\s]*<\/motion\.div>[\r\n\s]*\);[\r\n\s]*\}[\r\n\s]*function SnippetModal/;
const match = workContent.match(endBlockRegex);

if (!match) {
    console.error("Could not find modal render block end");
    process.exit(1);
}

// match.index is the start of `</div>\n        </div>...`
// Our modal_render.txt ends with `          </div>` which represents the close of `space-y-12`.
// The match starts at the `</div>` for `<div className="p-8">`.
// So we should replace from `modalRenderStart` to `match.index`.
// Actually wait! 
// Let's check `modal_render.txt`
// modal_render.txt ends with `          </div>`
// If `match.index` is the `</div>` of `p-8`, then the text between `modalRenderStart` and `match.index` includes the `</div>` of `space-y-12`.
// So replacing `workContent.substring(0, modalRenderStart) + modalRender + '\n        ' + workContent.substring(match.index)` is EXACTLY correct!
// Let's verify by printing what is replaced:

const replacedSection = workContent.substring(modalRenderStart, match.index);
console.log("Replacing section length:", replacedSection.length);
// console.log("Starts with:", replacedSection.substring(0, 100));
// console.log("Ends with:", replacedSection.substring(replacedSection.length - 100));

workContent = workContent.substring(0, modalRenderStart) + modalRender + '\n        ' + workContent.substring(match.index);

fs.writeFileSync(workPath, workContent);
console.log("Successfully updated work.tsx");
