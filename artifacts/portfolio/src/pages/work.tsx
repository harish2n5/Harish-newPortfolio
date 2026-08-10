import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "wouter";
import { projects } from "@/lib/data";
import { ArrowRight, ExternalLink, X, ArrowUpRight } from "lucide-react";
import project1Url from "../assets/project-1.png";
import project2Url from "../assets/project-2.png";
import project3Url from "../assets/project-3.png";
import project4Url from "../assets/project-4.png";
import Navbar from "@/components/Navbar";
import { LaptopMockup, PhoneMockup, IsometricMockup } from "@/components/ui/Mockup";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import CaseStudyModal from "./case-study";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as [number, number, number, number] } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const MARQUEE_TEXT = "DESIGN • DEVELOP • DELIVER • ITERATE • ";

const workflowSteps = [
  {
    number: "01",
    phase: "Discovery",
    title: "Understand the Problem",
    color: "bg-primary",
    designDetails: [
      "Stakeholder interviews to surface real goals, not assumed ones",
      "User research: surveys, existing analytics, competitor audit",
      "Define the problem statement and success metrics",
    ],
    devDetails: [
      "Technical audit of existing infrastructure (if applicable)",
      "Identify integration constraints and API availability",
      "Agree on the tech stack and tooling",
    ],
  },
  {
    number: "02",
    phase: "Strategy",
    title: "Map & Prioritise",
    color: "bg-secondary",
    designDetails: [
      "User journey mapping across key flows",
      "Information architecture and sitemap",
      "Feature prioritisation (MoSCoW framework)",
    ],
    devDetails: [
      "System architecture design and data modelling",
      "API contract definition (OpenAPI spec first)",
      "Sprint planning and milestone scoping",
    ],
  },
  {
    number: "03",
    phase: "Design",
    title: "Prototype & Validate",
    color: "bg-[#B8F0A0]",
    designDetails: [
      "Low-fidelity wireframes for all key screens",
      "Interactive Figma prototype for usability testing",
      "Iterate based on feedback — 2–3 rounds maximum",
    ],
    devDetails: [
      "Component architecture planning",
      "Design token setup and shared CSS variables",
      "Database schema first-draft and migrations",
    ],
  },
  {
    number: "04",
    phase: "Build",
    title: "Design & Develop in Tandem",
    color: "bg-[#C8B8FF]",
    designDetails: [
      "High-fidelity UI designs in Figma, component by component",
      "Design system components with states (hover, focus, error, empty)",
      "Responsive variants and edge case coverage",
    ],
    devDetails: [
      "Feature development with TypeScript end-to-end",
      "Daily syncs to catch design-dev gaps before they compound",
      "Automated testing for critical paths",
    ],
  },
  {
    number: "05",
    phase: "Launch",
    title: "Ship & Monitor",
    color: "bg-[#FFD6A0]",
    designDetails: [
      "Final QA against Figma specs pixel-by-pixel",
      "Accessibility audit and WCAG compliance check",
      "Handoff documentation and component annotations",
    ],
    devDetails: [
      "CI/CD pipeline setup and staging environment",
      "Performance audit (Lighthouse > 90)",
      "Error monitoring (Sentry) and analytics (PostHog) integration",
    ],
  },
  {
    number: "06",
    phase: "Iterate",
    title: "Learn & Improve",
    color: "bg-primary",
    designDetails: [
      "Post-launch usability review with real users",
      "Heatmap and session recording analysis",
      "Backlog of improvements prioritised by impact",
    ],
    devDetails: [
      "Performance monitoring and optimisation",
      "Feature flags for progressive rollout",
      "Monthly retrospective and roadmap refinement",
    ],
  },
];

function SectionWrapper({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className={className}>
      {children}
    </motion.div>
  );
}

export default function Work() {
  const [activeProject, setActiveProject] = useState<typeof projects[0] | null>(null);


  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />

      {/* Hero */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 md:py-36 border-b-[3px] border-black relative overflow-hidden">
        <div className="absolute top-10 right-10 w-52 h-52 border-[3px] border-black bg-primary opacity-30 rotate-6" />
        <div className="absolute bottom-10 left-1/3 w-32 h-32 border-[3px] border-black bg-secondary opacity-20 -rotate-12" />
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="font-mono text-lg uppercase tracking-widest mb-4 text-muted-foreground"
          >
            — Selected Work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.9] mb-10"
          >
            The Work<br />
            <span className="text-secondary">Speaks.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl md:text-2xl font-mono max-w-2xl border-l-[6px] border-primary pl-6"
          >
            Projects that shipped, problems that were solved, and products that users actually wanted to use.
          </motion.p>
        </div>
      </section>

      {/* Marquee */}
      <div className="w-full border-y-[3px] border-black bg-primary py-4 overflow-hidden flex whitespace-nowrap transform -rotate-1 origin-center scale-105">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 18, repeat: Infinity }}
          className="flex font-black text-3xl tracking-tight uppercase"
        >
          {[...Array(4)].map((_, i) => (
            <span key={i} className="px-4">{MARQUEE_TEXT}</span>
          ))}
        </motion.div>
      </div>



      {/* Featured Projects */}
      <section className="px-4 sm:px-6 py-12 md:py-24 border-b-[3px] border-black bg-background">
        <div className="max-w-6xl mx-auto">
          <SectionWrapper>
            <motion.p variants={fadeUp} className="font-mono text-lg uppercase tracking-widest mb-2 text-muted-foreground">
              — Deep Dives
            </motion.p>
      <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-16">
              Featured Projects.
            </motion.h2>
          </SectionWrapper>

          <div className="space-y-12">
            {projects.map((project: any, i: number) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-[4px] border-black bg-white brutal-shadow p-8 md:p-12 relative overflow-hidden"
                data-testid={`project-featured-${project.id}`}
              >
                {/* Header info */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b-[3px] border-black pb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-black uppercase tracking-widest border-[2px] border-black bg-black text-white px-3 py-1">
                      {project.category}
                    </span>
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      {project.subtitle}
                    </span>
                  </div>
                  <div className="font-mono text-xs font-black uppercase border-[2px] border-black bg-primary px-3 py-1 text-black">
                    {project.year}
                  </div>
                </div>

                {/* Title & Description */}
                <div className="mb-6">
                  <h3 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-black">
                    {project.title}
                  </h3>
                  <p className="font-mono text-base md:text-lg leading-relaxed text-gray-800 font-medium border-l-[4px] border-primary pl-4 py-1">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag: string) => (
                    <span key={tag} className="border-[2px] border-black px-3 py-1 font-mono text-xs font-bold uppercase bg-[#F4F4F0] text-black">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Required Details Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-y-[3px] border-black py-6 mb-8 bg-[#F4F4F0] px-6 brutal-shadow-sm font-mono text-xs">
                  <div>
                    <div className="text-gray-500 font-bold uppercase mb-1">Role</div>
                    <div className="font-black text-black text-sm uppercase">{project.role}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 font-bold uppercase mb-1">Duration</div>
                    <div className="font-black text-black text-sm uppercase">{project.duration}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 font-bold uppercase mb-1">Platform</div>
                    <div className="font-black text-black text-sm uppercase">{project.platform}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 font-bold uppercase mb-1">Tools</div>
                    <div className="font-black text-black text-sm uppercase">{project.tools.join(", ")}</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <motion.button
                    onClick={() => setActiveProject(project)}
                    whileHover={{ x: -3, y: -3, boxShadow: "6px 6px 0px #000" }}
                    whileTap={{ x: 1, y: 1, boxShadow: "2px 2px 0px #000" }}
                    data-testid={`button-project-detail-${project.id}`}
                    className="inline-flex items-center gap-3 font-black uppercase text-sm sm:text-base border-[3px] border-black bg-primary text-black px-6 py-3.5 brutal-shadow hover:bg-black hover:text-white transition-colors cursor-pointer"
                  >
                    View Case Study <ArrowUpRight className="w-5 h-5" />
                  </motion.button>
                  <motion.a
                    href={project.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: -3, y: -3, boxShadow: "6px 6px 0px #000" }}
                    whileTap={{ x: 1, y: 1, boxShadow: "2px 2px 0px #000" }}
                    className="inline-flex items-center gap-3 font-black uppercase text-sm sm:text-base border-[3px] border-black bg-white text-black px-6 py-3.5 brutal-shadow hover:bg-secondary transition-colors"
                  >
                    Live <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="px-4 sm:px-6 py-12 md:py-24 bg-white border-b-[3px] border-black">
        <div className="max-w-6xl mx-auto">
          <SectionWrapper>
            <motion.p variants={fadeUp} className="font-mono text-lg uppercase tracking-widest mb-2 text-muted-foreground">
              — My Process
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-4">
              How I Work.
            </motion.h2>
            <motion.p variants={fadeUp} className="font-mono text-base sm:text-lg max-w-2xl mb-10 sm:mb-20 text-muted-foreground">
              Six phases, two disciplines, one person. Here's exactly what it looks like to work with me from first call to shipped product.
            </motion.p>
          </SectionWrapper>

          <div className="space-y-0">
            {workflowSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-[120px_1fr_1fr] border-[3px] border-black border-b-0 last:border-b-[3px]"
                data-testid={`workflow-step-${i}`}
              >
                {/* Number */}
                <div className={`${step.color} border-b-[3px] md:border-b-0 md:border-r-[3px] border-black flex flex-col items-center justify-center p-6`}>
                  <div className="text-5xl font-black tracking-tighter">{step.number}</div>
                  <div className="font-mono text-xs uppercase tracking-widest text-center mt-2">{step.phase}</div>
                </div>

                {/* Design column */}
                <div className="border-b-[3px] md:border-b-0 md:border-r-[3px] border-black p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-8 h-8 border-[2px] border-black bg-primary flex items-center justify-center font-black text-xs">D</span>
                    <span className="font-mono text-xs uppercase tracking-widest font-bold">Design</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-6">{step.title}</h3>
                  <ul className="space-y-3">
                    {step.designDetails.map((detail) => (
                      <li key={detail} className="flex items-start gap-3 font-mono text-sm">
                        <span className="w-5 h-5 border-[2px] border-black bg-primary flex items-center justify-center shrink-0 font-black text-xs mt-0.5">
                          +
                        </span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Dev column */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-8 h-8 border-[2px] border-black bg-secondary flex items-center justify-center font-black text-xs">E</span>
                    <span className="font-mono text-xs uppercase tracking-widest font-bold">Engineering</span>
                  </div>
                  <h3 className="hidden md:block text-2xl font-black uppercase tracking-tight mb-6 opacity-0 select-none">{step.title}</h3>
                  <ul className="space-y-3">
                    {step.devDetails.map((detail) => (
                      <li key={detail} className="flex items-start gap-3 font-mono text-sm">
                        <span className="w-5 h-5 border-[2px] border-black bg-secondary flex items-center justify-center shrink-0 font-black text-xs mt-0.5">
                          +
                        </span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 bg-secondary text-black text-center">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-8"
          >
            Your Project<br />Is Next.
          </motion.h2>
          <Link href="/contact">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              data-testid="link-work-email"
              className="inline-flex items-center gap-3 font-bold uppercase text-xl border-[4px] border-black bg-white px-10 py-5 brutal-shadow hover:bg-primary transition-colors cursor-pointer"
            >
              Start a Project <ArrowRight className="w-6 h-6" />
            </motion.span>
          </Link>
        </div>
      </section>

      <AnimatePresence>
        {activeProject && <CaseStudyModal project={activeProject} onClose={() => setActiveProject(null)} onNext={(p) => setActiveProject(p)} />}
      </AnimatePresence>
    </div>
  );
}
