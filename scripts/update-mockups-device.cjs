const fs = require('fs');
const path = require('path');

const homePath = path.join(__dirname, '..', 'artifacts', 'portfolio', 'src', 'pages', 'home.tsx');
let homeContent = fs.readFileSync(homePath, 'utf8');

// Ensure PhoneMockup is imported
if (!homeContent.includes('PhoneMockup')) {
  homeContent = homeContent.replace('import { LaptopMockup, IsometricMockup } from "@/components/ui/Mockup";', 'import { LaptopMockup, PhoneMockup, IsometricMockup } from "@/components/ui/Mockup";');
}

// Home has 2 projects. Currently they use IsometricMockup.
// I will replace IsometricMockup with LaptopMockup and PhoneMockup
const projectsHomeTarget = `<IsometricMockup>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover absolute inset-0 transform group-hover:scale-105 transition-transform duration-500"
          />
        </IsometricMockup>`;

// Since there are exactly 2, we can just replace both. Wait, we map over projects. So we need to use the index `index` or `project.title`.
// The map looks like: `projects.map((project, index) => (`
// The replacement should be conditional based on `index`:
const newHomeMockup = `{index % 2 === 0 ? (
          <LaptopMockup>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover absolute inset-0 transform group-hover:scale-105 transition-transform duration-500"
            />
          </LaptopMockup>
        ) : (
          <PhoneMockup>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover absolute inset-0 transform group-hover:scale-105 transition-transform duration-500"
            />
          </PhoneMockup>
        )}`;

homeContent = homeContent.replace(projectsHomeTarget, newHomeMockup);
fs.writeFileSync(homePath, homeContent);

const workPath = path.join(__dirname, '..', 'artifacts', 'portfolio', 'src', 'pages', 'work.tsx');
let workContent = fs.readFileSync(workPath, 'utf8');

if (!workContent.includes('PhoneMockup')) {
  workContent = workContent.replace('import { LaptopMockup, IsometricMockup } from "@/components/ui/Mockup";', 'import { LaptopMockup, PhoneMockup, IsometricMockup } from "@/components/ui/Mockup";');
}

const targetWorkMockup = `<IsometricMockup>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-500"
                      />
                    </IsometricMockup>`;

const newWorkMockup = `<PhoneMockup>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-500"
                      />
                    </PhoneMockup>`;

workContent = workContent.replace(targetWorkMockup, newWorkMockup);
fs.writeFileSync(workPath, workContent);

console.log("Mockups updated to Mobile and Laptop only.");
