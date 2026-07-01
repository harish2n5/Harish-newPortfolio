import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "wouter";
import { projects, designSnippets } from "@/lib/data";
import { ArrowRight, ExternalLink, X, ArrowUpRight } from "lucide-react";
import project1Url from "../assets/project-1.png";
import project2Url from "../assets/project-2.png";
import project3Url from "../assets/project-3.png";
import project4Url from "../assets/project-4.png";
import snippet1Url from "../assets/snippet-1.png";
import snippet2Url from "../assets/snippet-2.png";
import snippet3Url from "../assets/snippet-3.png";
import snippet4Url from "../assets/snippet-4.png";
import snippet5Url from "../assets/snippet-5.png";
import snippet6Url from "../assets/snippet-6.png";
import snippet7Url from "../assets/snippet-7.png";
import snippet8Url from "../assets/snippet-8.png";
import Navbar from "@/components/Navbar";
import { LaptopMockup, PhoneMockup, IsometricMockup } from "@/components/ui/Mockup";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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

function SnippetModal({
  snippet,
  onClose,
}: {
  snippet: typeof designSnippets[0];
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/80 flex items-end sm:items-center justify-center p-0 sm:p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 60, opacity: 0 }}
        transition={{ type: "spring", stiffness: 320, damping: 30 }}
        className="bg-background border-[4px] border-black w-full sm:max-w-2xl max-h-[92vh] sm:max-h-[88vh] overflow-y-auto"
        style={{ boxShadow: "10px 10px 0px #000" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`${snippet.color} border-b-[4px] border-black p-5 sm:p-8 flex items-start justify-between gap-4`}>
          <div>
            <span className="font-mono text-xs uppercase tracking-widest border-[2px] border-black bg-white px-3 py-1 inline-block mb-4">
              {snippet.tag} · {snippet.year}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter leading-none">
              {snippet.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            data-testid="button-snippet-modal-close"
            className="border-[3px] border-black bg-white p-2 brutal-shadow hover:bg-secondary transition-colors shrink-0"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        <div className="p-5 sm:p-8 flex flex-col gap-8">
          {/* Description */}
          <p className="font-mono text-base leading-relaxed border-l-[6px] border-black pl-5">
            {snippet.description}
          </p>

          {/* Tools Used */}
          <div>
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-5 pb-3 border-b-[3px] border-black flex items-center gap-3">
              <span className="w-7 h-7 sm:w-8 sm:h-8 border-[3px] border-black bg-primary flex items-center justify-center text-xs font-black shrink-0">T</span>
              Tools Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {snippet.tools.map((tool) => (
                <motion.span
                  key={tool}
                  whileHover={{ x: -2, y: -2, boxShadow: "4px 4px 0px #000" }}
                  className="border-[3px] border-black bg-white px-4 py-2 font-bold uppercase tracking-wide text-sm brutal-shadow"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Design Trends */}
          <div>
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-5 pb-3 border-b-[3px] border-black flex items-center gap-3">
              <span className="w-7 h-7 sm:w-8 sm:h-8 border-[3px] border-black bg-secondary flex items-center justify-center text-xs font-black shrink-0">↗</span>
              Design Trends Applied
            </h3>
            <ul className="flex flex-col gap-3">
              {snippet.trends.map((trend, i) => (
                <motion.li
                  key={trend}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="flex items-start gap-4 font-mono text-sm leading-relaxed"
                >
                  <span className={`w-6 h-6 border-[2px] border-black flex items-center justify-center shrink-0 font-black text-xs mt-0.5 ${i % 2 === 0 ? "bg-primary" : "bg-secondary"}`}>
                    {i + 1}
                  </span>
                  <span>{trend}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Work() {
  
  const [activeSnippet, setActiveSnippet] = useState<typeof designSnippets[0] | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);


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
            className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.9] mb-10"
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

      {/* Design Snippets */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 border-b-[3px] border-black bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionWrapper>
            <motion.p variants={fadeUp} className="font-mono text-lg uppercase tracking-widest mb-2 text-muted-foreground">
              — Quick Shots
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12">
              Design Snippets.
            </motion.h2>
          </SectionWrapper>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {designSnippets.map((snippet, i) => (
              <motion.div
                key={snippet.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ x: -3, y: -3, boxShadow: "6px 6px 0px #000" }}
                onClick={() => setActiveSnippet(snippet)}
                className="border-[3px] border-black brutal-shadow cursor-pointer group"
                data-testid={`snippet-card-${i}`}
              >
                <div className={`${snippet.color} border-b-[3px] border-black h-28 flex flex-col items-center justify-center relative overflow-hidden group-hover:bg-black transition-colors`}>
                  <img src={snippet.image} alt={snippet.title} className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:opacity-50 group-hover:scale-105 transition-all duration-500" />
                  {/* Hover reveal */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="font-black text-xs uppercase tracking-widest border-[2px] border-black bg-white px-2 py-1">
                      View Details
                    </span>
                  </div>
                </div>
                <div className="bg-background p-4">
                  <div className="text-sm font-bold uppercase tracking-tight mb-1 leading-tight">{snippet.title}</div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs border-[2px] border-black px-2 py-0.5 bg-white">{snippet.tag}</span>
                    <span className="font-mono text-xs text-muted-foreground">{snippet.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-4 sm:px-6 py-16 sm:py-32 border-b-[3px] border-black bg-background">
        <div className="max-w-6xl mx-auto">
          <SectionWrapper>
            <motion.p variants={fadeUp} className="font-mono text-lg uppercase tracking-widest mb-2 text-muted-foreground">
              — Deep Dives
            </motion.p>
      <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-16">
              Featured Projects.
            </motion.h2>
          </SectionWrapper>

          <div className="flex flex-col sm:flex-row mb-12 items-start sm:items-center">
            <div className="flex">
              <Select value={activeFilter} onValueChange={setActiveFilter}>
                <SelectTrigger className={`w-[200px] border-[3px] border-black brutal-shadow bg-white rounded-none font-mono font-bold uppercase tracking-widest outline-none focus:ring-0 focus:ring-offset-0 ${activeFilter !== "All" ? "border-r-0 shadow-none" : ""}`}>
                  <SelectValue placeholder="Select Filter" />
                </SelectTrigger>
                <SelectContent className="border-[3px] border-black rounded-none shadow-[4px_4px_0px_#000]">
                  {["All", "SaaS", "Enterprise", "Mobile", "Design", "AI"].map((filter) => (
                    <SelectItem key={filter} value={filter} className="font-mono font-bold uppercase tracking-widest cursor-pointer focus:bg-primary rounded-none data-[state=checked]:bg-primary">
                      {filter}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {activeFilter !== "All" && (
                <button
                  onClick={() => setActiveFilter("All")}
                  className="w-10 h-10 flex justify-center items-center border-[3px] border-black brutal-shadow bg-[#FFD6A0] hover:bg-white transition-colors"
                  title="Clear Filter"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          <div className="space-y-16">
            {filteredProjects.map((project: any, i: number) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 md:grid-cols-2 gap-0 border-[4px] border-black brutal-shadow group ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
                data-testid={`project-featured-${project.id}`}
              >
                {/* Image */}
                <div className={`${project.accentColor} border-b-[4px] md:border-b-0 ${i % 2 === 1 ? "md:border-l-[4px]" : "md:border-r-[4px]"} border-black relative overflow-hidden aspect-video md:aspect-auto`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 min-h-64"
                  />
                  <div className="absolute top-4 left-4 font-mono text-xs font-bold uppercase border-[2px] border-black bg-white px-3 py-1">
                    {project.year}
                  </div>
                </div>

                {/* Content */}
                <div className="bg-white p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground block mb-3">
                      {project.subtitle}
                    </span>
                    <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">{project.title}</h3>
                    <p className="font-mono text-base leading-relaxed mb-6">{project.shortDesc}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.slice(0, 4).map((tag: string) => (
                        <span key={tag} className="border-[2px] border-black px-3 py-1 font-mono text-xs font-bold uppercase bg-background">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-4 border-t-[3px] border-black pt-6 mb-8">
                      <div>
                        <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-1">Role</div>
                        <div className="font-bold text-sm uppercase">{project.role}</div>
                      </div>
                      <div>
                        <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-1">Duration</div>
                        <div className="font-bold text-sm uppercase">{project.duration}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Link href={"/work/" + project.slug}>
                      <motion.a
                        whileHover={{ x: -3, y: -3, boxShadow: "6px 6px 0px #000" }}
                        whileTap={{ x: 1, y: 1, boxShadow: "2px 2px 0px #000" }}
                        data-testid={`button-project-detail-${project.id}`}
                        className="self-start flex items-center gap-3 font-bold uppercase border-[3px] border-black bg-background px-6 py-3 brutal-shadow hover:bg-primary transition-colors cursor-pointer"
                      >
                        View Case Study <ArrowUpRight className="w-5 h-5" />
                      </motion.a>
                    </Link>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      whileHover={{ x: -3, y: -3, boxShadow: "6px 6px 0px #000" }}
                      whileTap={{ x: 1, y: 1, boxShadow: "2px 2px 0px #000" }}
                      className="self-start flex items-center gap-3 font-bold uppercase border-[3px] border-black bg-white px-6 py-3 brutal-shadow hover:bg-secondary transition-colors"
                    >
                      Live <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="px-4 sm:px-6 py-16 sm:py-32 bg-white border-b-[3px] border-black">
        <div className="max-w-6xl mx-auto">
          <SectionWrapper>
            <motion.p variants={fadeUp} className="font-mono text-lg uppercase tracking-widest mb-2 text-muted-foreground">
              — My Process
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
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
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8"
          >
            Your Project<br />Is Next.
          </motion.h2>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            href="mailto:harish2n5@gmail.com"
            data-testid="link-work-email"
            className="inline-flex items-center gap-3 font-bold uppercase text-xl border-[4px] border-black bg-white px-10 py-5 brutal-shadow hover:bg-primary transition-colors"
          >
            Start a Project <ArrowRight className="w-6 h-6" />
          </motion.a>
        </div>
      </section>

      <AnimatePresence>
        
      </AnimatePresence>

      <AnimatePresence>
        {activeSnippet && <SnippetModal snippet={activeSnippet} onClose={() => setActiveSnippet(null)} />}
      </AnimatePresence>
    </div>
  );
}
