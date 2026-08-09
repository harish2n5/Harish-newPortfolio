import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Link } from "wouter";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Sparkles,
  Quote,
  TrendingUp,
  Search,
  Lightbulb,
  GitCommit,
  Layout,
  Palette,
  Play,
  TestTube,
  RefreshCw,
  Monitor,
  BarChart3,
  Check,
  X,
  Target,
  Users,
  Compass,
  Zap,
  ShieldCheck,
  HelpCircle,
  ChevronRight
} from "lucide-react";
import { projects } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
  },
};

const PROCESS_STEPS = [
  { id: "step-1", num: "01", label: "Problem", icon: AlertCircle },
  { id: "step-2", num: "02", label: "Research", icon: Search },
  { id: "step-3", num: "03", label: "Insights", icon: Lightbulb },
  { id: "step-4", num: "04", label: "User flows", icon: GitCommit },
  { id: "step-5", num: "05", label: "Wireframes", icon: Layout },
  { id: "step-6", num: "06", label: "Design decisions", icon: Palette },
  { id: "step-7", num: "07", label: "Prototype", icon: Play },
  { id: "step-8", num: "08", label: "Testing", icon: TestTube },
  { id: "step-9", num: "09", label: "Iteration", icon: RefreshCw },
  { id: "step-10", num: "10", label: "Final UI", icon: Monitor },
  { id: "step-11", num: "11", label: "Results", icon: BarChart3 },
];

function SectionWrapper({ children, className = "", id = "" }: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
      className={`py-14 md:py-20 border-b-[4px] border-black ${className}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {children}
      </div>
    </motion.section>
  );
}

export default function CaseStudyModal({
  project,
  onClose,
  onNext
}: {
  project: typeof projects[0];
  onClose: () => void;
  onNext: (p: typeof projects[0]) => void;
}) {
  const projectIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const cs = project.caseStudy as any;
  const [activeStep, setActiveStep] = useState<string>("step-1");

  // Prevent background scrolling while modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // IntersectionObserver to highlight active step in sticky bar on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveStep(entry.target.id);
          }
        });
      },
      { threshold: 0.25, rootMargin: "-100px 0px -40% 0px" }
    );

    PROCESS_STEPS.forEach((step) => {
      const el = document.getElementById(step.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [cs]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveStep(id);
    }
  };

  if (!cs) {
    return (
      <div className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center p-8 text-center">
        <h2 className="text-4xl font-black uppercase mb-4">Under Construction</h2>
        <p className="font-mono text-lg mb-8">This case study is currently being updated.</p>
        <button
          onClick={onClose}
          className="border-[3px] border-black px-6 py-3 font-bold uppercase brutal-shadow hover:bg-primary"
        >
          Close
        </button>
      </div>
    );
  }

  const titleData = cs.title || {
    headline: `${project.title}: Product Problem-Solving & Case Study`,
    mainWin: project.subtitle,
    subtitle: project.subtitle,
    role: project.role,
    timeline: project.duration,
    platform: "Web & Mobile Platform",
    team: "Cross-functional Product Team",
  };

  const problemData = cs.problem || {};
  const researchData = cs.research || {};
  const insightsData = cs.insights || {};
  const userFlowsData = cs.userFlows || {};
  const wireframesData = cs.wireframes || {};
  const designDecisionsData = cs.designDecisions || {};
  const prototypeData = cs.prototype || {};
  const testingData = cs.testing || {};
  const iterationData = cs.iteration || {};
  const finalUiData = cs.finalUi || {};
  const resultsData = cs.results || {};
  const quoteData = cs.clientQuote || {};

  const colorSwatches = designDecisionsData.colorSystem || [
    { name: "Primary Orange", hex: "#FF5722", role: "Key CTAs & Accent", contrastRatio: "4.8:1 (AA)" },
    { name: "Secondary Amber", hex: "#FFA000", role: "State Badges", contrastRatio: "3.2:1 (Large)" },
    { name: "Dark Slate", hex: "#1A1A1A", role: "Headers & Dark Mode", contrastRatio: "14.2:1 (AAA)" },
    { name: "Light Canvas", hex: "#F4F4F0", role: "Background Surface", contrastRatio: "Base" },
  ];

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="fixed inset-0 z-50 overflow-y-auto bg-[#F4F4F0] text-foreground font-sans selection:bg-primary selection:text-black"
    >
      {/* Sticky Header Bar */}
      <div className="sticky top-0 w-full bg-[#F4F4F0] border-b-[4px] border-black z-50 shadow-md">
        <div className="flex justify-between items-center px-4 py-2.5 sm:px-6 bg-white border-b-[2px] border-black">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-black uppercase tracking-widest bg-black text-white px-2.5 py-1 border border-black">
              Product Case Study
            </span>
            <span className="font-black uppercase tracking-tight text-base md:text-xl truncate max-w-[180px] sm:max-w-md text-black">
              {project.title}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                const el = document.getElementById("top");
                if (el) el.scrollIntoView();
                onNext(nextProject);
              }}
              className="hidden sm:inline-flex items-center gap-2 font-mono text-xs uppercase font-bold border-2 border-black bg-white px-3 py-1.5 hover:bg-primary transition-colors brutal-shadow-sm cursor-pointer text-black"
            >
              Next Case Study <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase font-bold border-2 border-black bg-black text-white px-3.5 py-1.5 hover:bg-primary hover:text-black transition-colors brutal-shadow-sm cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" /> Close
            </button>
          </div>
        </div>

        {/* 11-Step Sticky Process Navigation Bar */}
        <div className="w-full bg-[#18181B] text-white overflow-x-auto no-scrollbar py-2 px-3 flex items-center gap-1 border-t-[1px] border-white/10">
          {PROCESS_STEPS.map((step) => {
            const Icon = step.icon;
            const isActive = activeStep === step.id;
            return (
              <button
                key={step.id}
                onClick={() => scrollToSection(step.id)}
                className={`flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-bold uppercase whitespace-nowrap transition-all border ${
                  isActive
                    ? "bg-primary text-black border-black shadow-[2px_2px_0px_#000]"
                    : "bg-black/60 text-gray-300 border-gray-800 hover:border-gray-500 hover:text-white"
                }`}
              >
                <span className="opacity-70">{step.num}.</span>
                <Icon className="w-3.5 h-3.5" />
                <span>{step.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div id="top" />

      {/* =========================================================================
          HERO & PROJECT OVERVIEW
      ========================================================================= */}
      <section className="pt-10 md:pt-14 pb-12 px-4 sm:px-6 border-b-[4px] border-black bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="font-mono text-xs font-black uppercase tracking-widest text-red-600 flex items-center gap-2">
                <span className="w-3 h-3 bg-red-600 inline-block"></span>
                {project.title} · {project.category}
              </div>
              <div className="font-mono text-xs font-bold uppercase bg-[#F4F4F0] border-2 border-black px-3 py-1">
                Role: {titleData.role || project.role}
              </div>
            </div>

            <div className="border-l-[6px] md:border-l-[8px] border-red-500 pl-4 md:pl-6 py-1">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[1.08] text-black">
                {titleData.headline}
              </h1>
            </div>

            {/* Quick Context Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#F4F4F0] border-[3px] border-black p-4 font-mono text-xs mt-2 brutal-shadow-sm">
              <div>
                <span className="text-gray-500 block font-bold uppercase">Project Type</span>
                <span className="font-black text-black text-sm">{project.category}</span>
              </div>
              <div>
                <span className="text-gray-500 block font-bold uppercase">Timeline</span>
                <span className="font-black text-black text-sm">{titleData.timeline}</span>
              </div>
              <div>
                <span className="text-gray-500 block font-bold uppercase">Platform</span>
                <span className="font-black text-black text-sm">{titleData.platform}</span>
              </div>
              <div>
                <span className="text-gray-500 block font-bold uppercase">Main Win</span>
                <span className="font-black text-red-600 text-sm">{titleData.mainWin}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Showcase Image */}
      <div className="w-full border-b-[4px] border-black bg-[#121212] py-8 px-4 flex flex-col items-center">
        <div className="max-w-5xl w-full border-[4px] border-black bg-black brutal-shadow overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} Hero Interface`}
            className="w-full h-auto max-h-[65vh] object-cover"
          />
        </div>
      </div>

      {/* =========================================================================
          STEP 01 / PROBLEM
      ========================================================================= */}
      <SectionWrapper id="step-1" className="bg-white">
        <div className="space-y-6">
          <div className="font-mono text-xs font-black uppercase tracking-widest text-red-600 flex items-center gap-2">
            <span className="w-3.5 h-3.5 bg-red-600 inline-block"></span>
            STEP 01 / PROBLEM DEFINITION
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black">
            {problemData.headline || "Understanding the Operational Bottleneck"}
          </h2>

          <p className="font-mono text-base md:text-lg text-gray-800 leading-relaxed font-medium">
            {problemData.description || project.shortDesc}
          </p>

          {/* Friction Metrics Grid */}
          {problemData.initialMetrics && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {problemData.initialMetrics.map((item: any, idx: number) => (
                <div key={idx} className="bg-red-50 border-[3px] border-black p-4 brutal-shadow-sm">
                  <span className="font-mono text-xs font-bold uppercase text-red-700 block mb-1">{item.label}</span>
                  <span className="font-mono text-xl md:text-2xl font-black text-black">{item.value}</span>
                </div>
              ))}
            </div>
          )}

          {/* Pain Points List */}
          {problemData.painPoints && (
            <div className="bg-[#F4F4F0] border-[3px] border-black p-6 brutal-shadow-sm mt-6">
              <h3 className="font-mono font-black text-sm uppercase tracking-widest text-black mb-4 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-600" /> Core Friction Points & User Pain Points
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 font-mono text-xs md:text-sm">
                {problemData.painPoints.map((pt: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-2 bg-white border border-black p-3">
                    <span className="text-red-600 font-bold">✕</span>
                    <span className="text-gray-800 font-medium">{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Business Goal */}
          {problemData.businessGoal && (
            <div className="bg-primary/20 border-[3px] border-black p-5 flex items-start gap-4">
              <Target className="w-6 h-6 text-black shrink-0 mt-0.5" />
              <div>
                <span className="font-mono text-xs font-black uppercase tracking-widest text-black block mb-1">Target Business Goal</span>
                <p className="font-mono text-sm md:text-base font-bold text-black">{problemData.businessGoal}</p>
              </div>
            </div>
          )}
        </div>
      </SectionWrapper>

      {/* =========================================================================
          STEP 02 / RESEARCH
      ========================================================================= */}
      <SectionWrapper id="step-2" className="bg-[#F4F4F0]">
        <div className="space-y-6">
          <div className="font-mono text-xs font-black uppercase tracking-widest text-red-600 flex items-center gap-2">
            <span className="w-3.5 h-3.5 bg-red-600 inline-block"></span>
            STEP 02 / RESEARCH & DISCOVERY
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black">
            {researchData.headline || "Uncovering User Behaviors & Market Gaps"}
          </h2>

          <p className="font-mono text-base md:text-lg text-gray-800 leading-relaxed font-medium">
            {researchData.summary}
          </p>

          {/* Research Methods Grid */}
          {researchData.methods && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {researchData.methods.map((method: any, idx: number) => (
                <div key={idx} className="bg-white border-[3px] border-black p-5 brutal-shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs font-black uppercase bg-black text-white px-2 py-0.5 inline-block mb-3">
                      {method.sampleSize}
                    </span>
                    <h3 className="font-black uppercase text-base mb-2 text-black">{method.name}</h3>
                    <p className="font-mono text-xs text-gray-700 leading-snug">{method.output}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Key Findings & Competitor Gap */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {researchData.findings && (
              <div className="bg-white border-[3px] border-black p-6 brutal-shadow-sm">
                <h3 className="font-mono font-black text-sm uppercase tracking-widest text-black mb-4 flex items-center gap-2">
                  <Search className="w-4 h-4 text-blue-600" /> Research Findings & Survey Data
                </h3>
                <ul className="space-y-3 font-mono text-xs md:text-sm">
                  {researchData.findings.map((f: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-800">
                      <span className="w-5 h-5 bg-blue-100 border border-blue-400 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {researchData.competitorAudit && (
              <div className="bg-white border-[3px] border-black p-6 brutal-shadow-sm">
                <h3 className="font-mono font-black text-sm uppercase tracking-widest text-black mb-4 flex items-center gap-2">
                  <Compass className="w-4 h-4 text-purple-600" /> Competitor Gap Analysis
                </h3>
                <div className="space-y-3 font-mono text-xs">
                  {researchData.competitorAudit.map((comp: any, idx: number) => (
                    <div key={idx} className="border-b border-gray-200 pb-2.5 last:border-0 last:pb-0">
                      <span className="font-black uppercase text-sm text-black block">{comp.name}</span>
                      <span className="text-gray-600 block mt-0.5">Identified Gap: {comp.gap}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </SectionWrapper>

      {/* =========================================================================
          STEP 03 / INSIGHTS
      ========================================================================= */}
      <SectionWrapper id="step-3" className="bg-white">
        <div className="space-y-6">
          <div className="font-mono text-xs font-black uppercase tracking-widest text-red-600 flex items-center gap-2">
            <span className="w-3.5 h-3.5 bg-red-600 inline-block"></span>
            STEP 03 / SYNTHESIS & INSIGHTS
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black">
            {insightsData.headline || "Synthesizing Research into Opportunity Spaces"}
          </h2>

          {/* Key Insights Cards */}
          {insightsData.keyInsights && (
            <div className="grid md:grid-cols-3 gap-6">
              {insightsData.keyInsights.map((ins: any, idx: number) => (
                <div key={idx} className="border-[3px] border-black bg-[#F4F4F0] p-5 brutal-shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-mono text-xs font-black uppercase text-red-600">Insight 0{idx + 1}</span>
                      <span className="font-mono text-[10px] font-bold uppercase bg-black text-white px-2 py-0.5">{ins.impact}</span>
                    </div>
                    <h3 className="font-black uppercase text-lg mb-2 text-black">{ins.title}</h3>
                    <p className="font-mono text-xs text-gray-700 leading-relaxed">{ins.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* How Might We Statements */}
          {insightsData.hmwStatements && (
            <div className="bg-black text-white border-[3px] border-black p-6 brutal-shadow mt-6">
              <h3 className="font-mono font-black text-sm uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-primary" /> How Might We (HMW) Design Framing
              </h3>
              <div className="space-y-3 font-mono text-xs md:text-sm">
                {insightsData.hmwStatements.map((hmw: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-3 bg-zinc-900 border border-zinc-700 p-3.5">
                    <span className="text-primary font-black">HMW:</span>
                    <span className="text-gray-200 font-medium">{hmw}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* User Personas */}
          {insightsData.personas && (
            <div className="pt-4">
              <h3 className="font-mono font-black text-sm uppercase tracking-widest text-black mb-4">Target User Personas</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {insightsData.personas.map((persona: any, idx: number) => (
                  <div key={idx} className="bg-[#F4F4F0] border-[3px] border-black p-5 brutal-shadow-sm">
                    <div className="flex items-center gap-3 mb-3 border-b-[2px] border-black pb-3">
                      <div className="w-10 h-10 bg-primary border-[2px] border-black font-black text-lg flex items-center justify-center text-black">
                        {persona.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-black uppercase text-base text-black">{persona.name}</h4>
                        <span className="font-mono text-xs text-gray-600 block">{persona.role}</span>
                      </div>
                    </div>
                    <blockquote className="font-mono text-xs italic text-gray-800 bg-white border border-black p-3 mb-3">
                      "{persona.quote}"
                    </blockquote>
                    <div className="font-mono text-xs space-y-1.5">
                      <div><strong className="text-red-700">Pain Point:</strong> {persona.painPoint}</div>
                      <div><strong className="text-green-700">Primary Goal:</strong> {persona.goal}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </SectionWrapper>

      {/* =========================================================================
          STEP 04 / USER FLOWS
      ========================================================================= */}
      <SectionWrapper id="step-4" className="bg-[#F4F4F0]">
        <div className="space-y-6">
          <div className="font-mono text-xs font-black uppercase tracking-widest text-red-600 flex items-center gap-2">
            <span className="w-3.5 h-3.5 bg-red-600 inline-block"></span>
            STEP 04 / USER FLOWS & ARCHITECTURE
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black">
            {userFlowsData.headline || "Mapping Low-Friction Information Architecture"}
          </h2>

          <p className="font-mono text-base md:text-lg text-gray-800 leading-relaxed font-medium">
            {userFlowsData.summary}
          </p>

          {/* User Task Flow Cards */}
          {userFlowsData.flows && (
            <div className="space-y-6 pt-2">
              {userFlowsData.flows.map((flow: any, idx: number) => (
                <div key={idx} className="bg-white border-[3px] border-black p-6 brutal-shadow-sm">
                  <div className="flex flex-wrap justify-between items-center mb-4 gap-2 border-b-[2px] border-black pb-3">
                    <h3 className="font-black uppercase text-lg text-black">{flow.title}</h3>
                    <span className="font-mono text-xs bg-black text-white px-3 py-1 font-bold">
                      Trigger: {flow.trigger}
                    </span>
                  </div>

                  {/* Flow Step Pipeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 my-4">
                    {flow.steps.map((stepStr: string, sIdx: number) => (
                      <div key={sIdx} className="bg-[#F4F4F0] border border-black p-3 font-mono text-xs relative flex flex-col justify-between">
                        <span className="font-bold text-red-600 block mb-1">Step 0{sIdx + 1}</span>
                        <span className="font-medium text-gray-900">{stepStr}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-green-50 border border-green-400 p-3 font-mono text-xs font-bold text-green-900 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-700 shrink-0" />
                    <span>Outcome: {flow.outcome}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {userFlowsData.architectureNotes && (
            <div className="bg-white border-[2px] border-black p-4 font-mono text-xs text-gray-700">
              <strong className="text-black uppercase">Architecture Note:</strong> {userFlowsData.architectureNotes}
            </div>
          )}
        </div>
      </SectionWrapper>

      {/* =========================================================================
          STEP 05 / WIREFRAMES
      ========================================================================= */}
      <SectionWrapper id="step-5" className="bg-white">
        <div className="space-y-6">
          <div className="font-mono text-xs font-black uppercase tracking-widest text-red-600 flex items-center gap-2">
            <span className="w-3.5 h-3.5 bg-red-600 inline-block"></span>
            STEP 05 / WIREFRAMES & LAYOUT EXPLORATION
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black">
            {wireframesData.headline || "Rapid Lo-Fi Wireframing & Structural Choices"}
          </h2>

          <p className="font-mono text-base md:text-lg text-gray-800 leading-relaxed font-medium">
            {wireframesData.conceptExploration}
          </p>

          {/* Layout Decision Cards */}
          {wireframesData.layoutDecisions && (
            <div className="grid md:grid-cols-3 gap-4 pt-2">
              {wireframesData.layoutDecisions.map((dec: any, idx: number) => (
                <div
                  key={idx}
                  className={`border-[3px] border-black p-5 brutal-shadow-sm flex flex-col justify-between ${
                    dec.chosen ? "bg-primary/20 border-black" : "bg-[#F4F4F0]"
                  }`}
                >
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-mono text-xs font-black uppercase">Option 0{idx + 1}</span>
                      {dec.chosen ? (
                        <span className="font-mono text-[10px] font-black uppercase bg-black text-white px-2 py-0.5">CHOSEN</span>
                      ) : (
                        <span className="font-mono text-[10px] font-bold uppercase bg-gray-300 text-gray-700 px-2 py-0.5">DISCARDED</span>
                      )}
                    </div>
                    <h3 className="font-black uppercase text-base mb-2 text-black">{dec.option}</h3>
                    <p className="font-mono text-xs text-gray-800 leading-relaxed">{dec.rationale}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Structural Takeaways */}
          {wireframesData.structuralTakeaways && (
            <div className="bg-[#F4F4F0] border-[3px] border-black p-5 brutal-shadow-sm">
              <h3 className="font-mono font-black text-sm uppercase tracking-widest text-black mb-3">Structural Wireframe Takeaways</h3>
              <ul className="space-y-2 font-mono text-xs md:text-sm">
                {wireframesData.structuralTakeaways.map((st: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-800">
                    <span className="text-black font-black">►</span>
                    <span>{st}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </SectionWrapper>

      {/* =========================================================================
          STEP 06 / DESIGN DECISIONS
      ========================================================================= */}
      <SectionWrapper id="step-6" className="bg-[#F4F4F0]">
        <div className="space-y-8">
          <div>
            <div className="font-mono text-xs font-black uppercase tracking-widest text-red-600 flex items-center gap-2 mb-2">
              <span className="w-3.5 h-3.5 bg-red-600 inline-block"></span>
              STEP 06 / DESIGN DECISIONS & UX TRADE-OFFS
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black">
              {designDecisionsData.headline || "Strategic UX Trade-Offs & Component Tokens"}
            </h2>
          </div>

          {/* UX Trade-Off Cards */}
          {designDecisionsData.tradeOffs && (
            <div>
              <h3 className="font-mono font-black text-sm uppercase tracking-widest text-black mb-4">Critical UX Trade-Offs</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {designDecisionsData.tradeOffs.map((to: any, idx: number) => (
                  <div key={idx} className="bg-white border-[3px] border-black p-5 brutal-shadow-sm">
                    <div className="font-black uppercase text-base text-black mb-2 flex items-center gap-2">
                      <span className="w-5 h-5 bg-black text-white font-mono text-xs flex items-center justify-center font-bold">
                        {idx + 1}
                      </span>
                      {to.decision}
                    </div>
                    <div className="space-y-2 font-mono text-xs mt-3 pt-3 border-t border-gray-200">
                      <div className="bg-red-50 text-red-800 p-2.5 border border-red-200">
                        <strong className="uppercase block mb-0.5 text-red-900">Trade-Off Sacrificed:</strong> {to.tradeOff}
                      </div>
                      <div className="bg-green-50 text-green-800 p-2.5 border border-green-200">
                        <strong className="uppercase block mb-0.5 text-green-900">Why Chosen:</strong> {to.whyChosen}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Color Tokens */}
          <div>
            <h3 className="font-mono font-black text-sm uppercase tracking-widest text-black mb-4">Color Palette & WCAG Accessibility Tokens</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {colorSwatches.map((swatch: any, i: number) => (
                <div key={i} className="border-[3px] border-black bg-white brutal-shadow overflow-hidden flex flex-col justify-between">
                  <div className={`h-20 ${swatch.bg || "bg-black"} border-b-[3px] border-black flex items-end justify-between p-2`}>
                    <span className="font-mono text-[10px] font-black uppercase px-2 py-0.5 bg-black text-white border border-white">
                      {swatch.hex}
                    </span>
                    <span className="font-mono text-[10px] font-black uppercase px-2 py-0.5 bg-white text-black border border-black">
                      {swatch.contrastRatio || "WCAG AA"}
                    </span>
                  </div>
                  <div className="p-3 bg-white">
                    <span className="font-black uppercase text-sm block text-black mb-0.5">{swatch.name}</span>
                    <span className="font-mono text-[11px] text-gray-600 block leading-tight">{swatch.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Typography */}
          {designDecisionsData.typography && (
            <div className="bg-black text-white border-[4px] border-black p-6 brutal-shadow">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <div className="font-mono text-xs text-primary uppercase font-bold mb-1">Typography Architecture</div>
                  <h3 className="text-4xl font-black uppercase tracking-tight text-white mb-2">
                    {designDecisionsData.typography.primary}
                  </h3>
                  <p className="font-mono text-xs text-gray-300 leading-relaxed">
                    {designDecisionsData.typography.rationale}
                  </p>
                </div>
                <div className="font-mono text-xs space-y-2 border-t md:border-t-0 md:border-l border-zinc-700 pt-4 md:pt-0 md:pl-6">
                  <div>
                    <span className="text-gray-400 block font-bold">TYPE SCALE</span>
                    <span className="text-primary font-bold">{designDecisionsData.typography.scale}</span>
                  </div>
                  {designDecisionsData.componentSystem && (
                    <div>
                      <span className="text-gray-400 block font-bold">COMPONENT SYSTEM</span>
                      <span className="text-gray-200">{designDecisionsData.componentSystem}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </SectionWrapper>

      {/* =========================================================================
          STEP 07 / PROTOTYPE
      ========================================================================= */}
      <SectionWrapper id="step-7" className="bg-white">
        <div className="space-y-6">
          <div className="font-mono text-xs font-black uppercase tracking-widest text-red-600 flex items-center gap-2">
            <span className="w-3.5 h-3.5 bg-red-600 inline-block"></span>
            STEP 07 / INTERACTIVE PROTOTYPING
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black">
            {prototypeData.headline || "Interactive Flow Demonstrations & Motion Mechanics"}
          </h2>

          {/* Interactive Flow Highlights */}
          {prototypeData.interactiveFlows && (
            <div className="grid md:grid-cols-2 gap-6">
              {prototypeData.interactiveFlows.map((flow: any, idx: number) => (
                <div key={idx} className="bg-[#F4F4F0] border-[3px] border-black p-5 brutal-shadow-sm">
                  <div className="flex items-center gap-2 font-black uppercase text-base text-black mb-2">
                    <Play className="w-4 h-4 text-red-600 fill-red-600 shrink-0" />
                    {flow.name}
                  </div>
                  <p className="font-mono text-xs text-gray-800 leading-relaxed mb-3">{flow.description}</p>
                  <div className="bg-white border border-black p-2.5 font-mono text-xs text-gray-700">
                    <span className="font-bold text-black uppercase block mb-0.5">Micro-Interaction Logic:</span>
                    {flow.microInteraction}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* State Handling Logic */}
          {prototypeData.stateHandling && (
            <div className="bg-white border-[3px] border-black p-5 brutal-shadow-sm">
              <h3 className="font-mono font-black text-sm uppercase tracking-widest text-black mb-3">Edge Case & State Handling Protocols</h3>
              <div className="grid sm:grid-cols-3 gap-3 font-mono text-xs">
                {prototypeData.stateHandling.map((st: string, idx: number) => (
                  <div key={idx} className="bg-[#F4F4F0] border border-black p-3">
                    <span className="font-bold text-black block mb-1">State Protocol 0{idx + 1}</span>
                    <span className="text-gray-800">{st}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </SectionWrapper>

      {/* =========================================================================
          STEP 08 / TESTING
      ========================================================================= */}
      <SectionWrapper id="step-8" className="bg-[#F4F4F0]">
        <div className="space-y-6">
          <div className="font-mono text-xs font-black uppercase tracking-widest text-red-600 flex items-center gap-2">
            <span className="w-3.5 h-3.5 bg-red-600 inline-block"></span>
            STEP 08 / USABILITY TESTING & FEEDBACK
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black">
            {testingData.headline || "Usability Testing Protocol & Empirical Feedback"}
          </h2>

          {/* Test Setup Cards */}
          <div className="grid sm:grid-cols-3 gap-4 font-mono text-xs">
            <div className="bg-white border-[3px] border-black p-4 brutal-shadow-sm">
              <span className="text-gray-500 uppercase block font-bold mb-1">Methodology</span>
              <span className="font-bold text-black text-sm">{testingData.methodology}</span>
            </div>
            <div className="bg-white border-[3px] border-black p-4 brutal-shadow-sm">
              <span className="text-gray-500 uppercase block font-bold mb-1">Participants</span>
              <span className="font-bold text-black text-sm">{testingData.participants}</span>
            </div>
            <div className="bg-black text-white border-[3px] border-black p-4 brutal-shadow-sm">
              <span className="text-primary uppercase block font-bold mb-1">Task Completion Rate</span>
              <span className="font-black text-primary text-xl">{testingData.taskCompletionRate}</span>
            </div>
          </div>

          {/* Usability Test Tasks Table */}
          {testingData.usabilityFindings && (
            <div className="bg-white border-[3px] border-black brutal-shadow-sm overflow-hidden mt-4">
              <div className="bg-black text-white p-4 font-mono text-xs font-black uppercase tracking-widest">
                Usability Test Task Performance Breakdown
              </div>
              <div className="divide-y divide-black font-mono text-xs">
                {testingData.usabilityFindings.map((tf: any, idx: number) => (
                  <div key={idx} className="p-4 grid md:grid-cols-[1fr_120px_1.5fr] gap-3 items-center">
                    <div>
                      <span className="font-black uppercase text-black block">{tf.task}</span>
                    </div>
                    <div>
                      <span className="bg-green-100 text-green-800 border border-green-400 font-bold px-2 py-0.5 rounded text-[11px]">
                        {tf.passRate}
                      </span>
                    </div>
                    <div className="italic text-gray-700 border-l md:border-l-2 border-gray-300 pl-3">
                      "{tf.userFeedback}"
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </SectionWrapper>

      {/* =========================================================================
          STEP 09 / ITERATION
      ========================================================================= */}
      <SectionWrapper id="step-9" className="bg-white">
        <div className="space-y-6">
          <div className="font-mono text-xs font-black uppercase tracking-widest text-red-600 flex items-center gap-2">
            <span className="w-3.5 h-3.5 bg-red-600 inline-block"></span>
            STEP 09 / ITERATION & DESIGN REFINEMENTS
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black">
            {iterationData.headline || "Evolving the Product Based on Usability Data"}
          </h2>

          {/* Before vs After Refinement Cards */}
          {iterationData.refinements && (
            <div className="space-y-6">
              {iterationData.refinements.map((ref: any, idx: number) => (
                <div key={idx} className="border-[3px] border-black bg-[#F4F4F0] p-6 brutal-shadow-sm">
                  <div className="font-mono text-xs font-black uppercase text-red-600 mb-3">
                    Iteration 0{idx + 1} Refinement
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 font-mono text-xs">
                    <div className="bg-red-50 border border-red-300 p-4">
                      <span className="font-black uppercase text-red-700 block mb-1">✕ BEFORE (Original Design)</span>
                      <p className="text-gray-800 mb-2">{ref.before}</p>
                      <span className="font-bold text-red-900 block">Identified Usability Issue:</span>
                      <p className="text-red-800">{ref.issueFound}</p>
                    </div>

                    <div className="bg-green-50 border border-green-300 p-4">
                      <span className="font-black uppercase text-green-700 block mb-1">✓ AFTER (Iterated Solution)</span>
                      <p className="text-gray-800 mb-2">{ref.after}</p>
                      <span className="font-bold text-green-900 block">Measured UX Impact:</span>
                      <p className="text-green-800 font-bold">{ref.impact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {iterationData.pivotDecision && (
            <div className="bg-black text-white border-[3px] border-black p-5 flex items-start gap-4">
              <RefreshCw className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <div>
                <span className="font-mono text-xs font-black uppercase tracking-widest text-primary block mb-1">Major Strategic Pivot</span>
                <p className="font-mono text-sm font-bold text-gray-200">{iterationData.pivotDecision}</p>
              </div>
            </div>
          )}
        </div>
      </SectionWrapper>

      {/* =========================================================================
          STEP 10 / FINAL UI
      ========================================================================= */}
      {finalUiData.screens && finalUiData.screens.length > 0 && (
        <SectionWrapper id="step-10" className="bg-[#F4F4F0]">
          <div className="mb-8">
            <div className="font-mono text-xs font-black uppercase tracking-widest text-red-600 mb-2 flex items-center gap-2">
              <span className="w-3.5 h-3.5 bg-red-600 inline-block"></span>
              STEP 10 / FINAL UI & INTERFACE SHOWCASE
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black">
              {finalUiData.headline || "High-Fidelity Interface Showcase"}
            </h2>
          </div>

          <div className="space-y-12">
            {finalUiData.screens.map((screen: any, i: number) => (
              <div key={i} className="border-[4px] border-black bg-white brutal-shadow overflow-hidden">
                <div className="bg-black text-white p-4 font-black uppercase text-lg sm:text-xl flex items-center justify-between">
                  <span>{screen.title}</span>
                  <span className="text-xs bg-primary text-black font-mono font-bold px-3 py-1 border border-black">
                    Screen 0{i + 1}
                  </span>
                </div>

                <div className="w-full h-72 md:h-[420px] bg-gray-200 border-b-[4px] border-black relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={screen.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black border-t-[4px] border-black bg-gray-50 font-mono text-xs md:text-sm">
                  <div className="p-5">
                    <span className="font-black uppercase text-red-600 block mb-1">Problem Solved</span>
                    <span className="font-medium text-gray-800">{screen.problem}</span>
                  </div>
                  <div className="p-5">
                    <span className="font-black uppercase text-blue-600 block mb-1">Layout Strategy</span>
                    <span className="font-medium text-gray-800">{screen.layout}</span>
                  </div>
                  <div className="p-5">
                    <span className="font-black uppercase text-green-700 block mb-1">User Benefit</span>
                    <span className="font-medium text-gray-800">{screen.help}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>
      )}

      {/* =========================================================================
          STEP 11 / RESULTS
      ========================================================================= */}
      <SectionWrapper id="step-11" className="bg-white">
        <div className="space-y-8">
          <div>
            <div className="font-mono text-xs font-black uppercase tracking-widest text-red-600 flex items-center gap-2 mb-2">
              <span className="w-3.5 h-3.5 bg-red-600 inline-block"></span>
              STEP 11 / RESULTS & BUSINESS IMPACT
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black">
              {resultsData.headline || "Measurable Business Impact & Empirical Outcomes"}
            </h2>
          </div>

          {/* Hard Metrics Cards */}
          {resultsData.metrics && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {resultsData.metrics.map((metric: any, i: number) => (
                <div key={i} className="bg-primary/20 border-[4px] border-black p-6 brutal-shadow text-center flex flex-col justify-between">
                  <span className="font-mono text-xs font-black uppercase tracking-widest text-black block mb-2">
                    {metric.label}
                  </span>
                  <div className="my-3">
                    {metric.change && (
                      <span className="inline-block bg-black text-primary font-mono text-xs font-black uppercase px-2.5 py-1 mb-2 border border-black">
                        {metric.change}
                      </span>
                    )}
                    <div className="flex items-center justify-center gap-2 font-mono">
                      <span className="text-sm text-red-600 line-through font-bold">{metric.before}</span>
                      <ArrowRight className="w-4 h-4 text-black shrink-0" />
                      <span className="text-2xl font-black text-green-800">{metric.after}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Business Impact Bullets */}
          {resultsData.businessImpact && (
            <div className="bg-[#F4F4F0] border-[3px] border-black p-6 brutal-shadow-sm">
              <h3 className="font-mono font-black text-sm uppercase tracking-widest text-black mb-4 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-700" /> Enterprise ROI & Strategic Success
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 font-mono text-xs md:text-sm">
                {resultsData.businessImpact.map((imp: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-2 bg-white border border-black p-3">
                    <span className="text-green-700 font-bold">✓</span>
                    <span className="text-gray-800 font-medium">{imp}</span>
                  </div>
                ))}
              </div>
            </div>
          )}



          {/* Lessons Learned */}
          {resultsData.lessonsLearned && (
            <div className="bg-white border-[3px] border-black p-6 brutal-shadow-sm">
              <h3 className="font-mono font-black text-sm uppercase tracking-widest text-black mb-3">Key Lessons Learned & Retrospective</h3>
              <ul className="space-y-2 font-mono text-xs md:text-sm text-gray-800">
                {resultsData.lessonsLearned.map((ll: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">💡</span>
                    <span>{ll}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </SectionWrapper>

      {/* =========================================================================
          CALL TO ACTION
      ========================================================================= */}
      <SectionWrapper className="bg-primary text-black text-center py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 leading-tight">
            Ready to Build Products That Solve Real Business Problems?
          </h2>
          <p className="font-mono text-base md:text-lg font-bold mb-8 text-black/90">
            Let's collaborate on your next digital product or enterprise experience.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/contact" onClick={onClose}>
              <span className="inline-flex items-center gap-2 font-black uppercase tracking-wider text-base border-[4px] border-black bg-white text-black px-7 py-3.5 brutal-shadow hover:bg-black hover:text-white transition-colors cursor-pointer w-full sm:w-auto justify-center">
                Start a Conversation <ArrowRight className="w-5 h-5" />
              </span>
            </Link>

            <button
              onClick={() => {
                const el = document.getElementById("top");
                if (el) el.scrollIntoView();
                onNext(nextProject);
              }}
              className="inline-flex items-center gap-2 font-black uppercase tracking-wider text-base border-[4px] border-black bg-black text-white px-7 py-3.5 brutal-shadow hover:bg-white hover:text-black transition-colors w-full sm:w-auto justify-center cursor-pointer"
            >
              Next Case Study <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </SectionWrapper>
    </motion.div>
  );
}
