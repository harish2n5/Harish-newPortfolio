const fs = require('fs');
const path = require('path');

const homePath = path.join(__dirname, '..', 'artifacts', 'portfolio', 'src', 'pages', 'home.tsx');
let homeContent = fs.readFileSync(homePath, 'utf8');

// Add import
if (!homeContent.includes('LaptopMockup')) {
  homeContent = homeContent.replace('import Navbar from "@/components/Navbar";', 'import Navbar from "@/components/Navbar";\nimport { LaptopMockup, IsometricMockup } from "@/components/ui/Mockup";');
}

// Replace the hardcoded browser frame with the Isometric mockup
const targetHTML = `<div className="w-full h-full rounded-lg border-[3px] border-black bg-white overflow-hidden flex flex-col brutal-shadow">
          <div className="w-full h-6 bg-gray-200 border-b-[3px] border-black flex items-center px-2 gap-1.5 shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] border-[2px] border-black"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] border-[2px] border-black"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f] border-[2px] border-black"></div>
          </div>
          <div className="relative flex-1 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>`;

const newHTML = `<IsometricMockup>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover absolute inset-0 transform group-hover:scale-105 transition-transform duration-500"
          />
        </IsometricMockup>`;

homeContent = homeContent.replace(targetHTML, newHTML);

// Remove the hardcoded height from the container to let the mockup define the space
homeContent = homeContent.replace(
  '<div className={`h-72 border-b-[4px] border-black ${project.color} relative overflow-hidden p-6 flex items-center justify-center`}>',
  '<div className={`border-b-[4px] border-black ${project.color} relative overflow-hidden p-6 md:p-10 flex items-center justify-center`}>'
);

fs.writeFileSync(homePath, homeContent);
console.log("home.tsx updated");
