import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Link } from "wouter";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  User,
  Target,
  Frown,
  CheckCircle,
  AlertCircle,
  Building2,
  Sparkles,
  Quote,
  TrendingUp,
  Award,
  Layers,
  PenTool,
  MessageSquare,
  Check,
  Globe,
  Clock,
  Briefcase,
  Users
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
      className={`py-16 md:py-24 border-b-[4px] border-black ${className}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {children}
      </div>
    </motion.section>
  );
}

function SectionHeading({ num, title, subtitle }: { num: string; title: string; subtitle?: string }) {
  return (
    <div className="relative mb-12">
      <div className="flex items-center gap-4 mb-2">
        <span className="font-mono text-sm font-black uppercase tracking-widest bg-black text-white px-3 py-1 border-2 border-black brutal-shadow-sm">
          Section {num}
        </span>
        {subtitle && (
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground font-bold">
            {subtitle}
          </span>
        )}
      </div>
      <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter pb-4 border-b-[4px] border-black inline-block">
        {title}
      </h2>
    </div>
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

  // Prevent background scrolling while modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

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

  // Extract structured data with fallback safety
  const titleData = cs.title || {
    headline: `${project.title}: ${cs.cover?.description || project.shortDesc}`,
    clientName: project.title,
    mainWin: cs.finalOutcome || "Streamlined product experience",
    subtitle: project.subtitle,
    role: cs.cover?.role || project.role,
    timeline: cs.cover?.timeline || project.duration,
    platform: cs.cover?.platform || "Web & Mobile",
    team: cs.cover?.team || "Product Team",
  };

  const execSummary = cs.executiveSummary || {
    problem: cs.problemStatement || cs.background?.text || "Complex legacy workflows and user friction.",
    fix: cs.solution?.overview || cs.finalOutcome || "Engineered a streamlined, accessible digital platform.",
    results: cs.impact?.benefits || ["Improved workflow efficiency", "Reduced time-on-task"],
  };

  const clientData = cs.aboutClient || {
    name: titleData.clientName || project.title,
    industry: project.category || "Enterprise Software",
    size: "Global Workforce",
    location: "United States",
    background: cs.background?.text || "A leading provider in their industry, operating at international scale.",
  };

  const challengeData = cs.challenge || {
    headline: "System Complexity & Workflow Friction",
    description: cs.problemStatement || "Fragmented tools caused operational delay and cognitive overload.",
    painPoints: cs.challenge?.points || cs.hook?.paragraph ? [cs.hook.paragraph] : ["Legacy software bottlenecks"],
    coreInsights: cs.coreInsights || [],
    personas: cs.personas || [],
  };

  const solutionData = cs.solution || {
    headline: "User-Centered Platform Redesign",
    overview: cs.overview?.whatIsIt || "A unified digital platform built for speed, clarity, and accessibility.",
    keyDecisions: cs.keyDecisions || [],
    visualDirection: cs.visualDirection || { typography: "Inter", colorPalette: ["Primary", "Dark"], designPrinciples: ["Clarity"] },
    designSystem: cs.designSystem || { text: "Built a comprehensive design system." },
    highFidelity: cs.highFidelity || { screens: [] },
    prototype: cs.prototype || { features: [] },
  };

  const resultsData = cs.results || {
    headline: "Quantifiable Performance & Impact",
    metrics: cs.beforeAfter?.metrics?.map((m: any) => ({
      label: m.label,
      before: m.before,
      after: m.after,
      change: "Improved",
    })) || [],
    impactPoints: cs.impact?.benefits || [],
  };

  const quoteData = cs.clientQuote || {
    quote: cs.usabilityTesting?.feedback?.[0] || "This project significantly improved our operational velocity and user satisfaction.",
    author: "Key Stakeholder",
    role: "Project Director",
    company: clientData.name,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80",
  };

  const ctaData = cs.callToAction || {
    headline: "Ready to Achieve Similar Results?",
    text: "Let's collaborate on your next digital product or enterprise experience.",
    primaryBtnText: "Start a Conversation",
    primaryBtnLink: "/contact",
  };

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="fixed inset-0 z-50 overflow-y-auto bg-[#F4F4F0] text-foreground font-sans selection:bg-primary selection:text-black"
    >
      {/* Sticky Header / Close Bar */}
      <div className="sticky top-0 w-full bg-[#F4F4F0]/95 backdrop-blur-md border-b-[4px] border-black z-50 flex justify-between items-center p-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-black uppercase tracking-widest bg-black text-white px-2 py-1">
            Case Study
          </span>
          <span className="font-black uppercase tracking-tighter text-lg md:text-xl truncate max-w-[200px] sm:max-w-md">
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
            className="hidden sm:inline-flex items-center gap-2 font-mono text-xs uppercase font-bold border-2 border-black bg-white px-3 py-1.5 hover:bg-primary transition-colors brutal-shadow-sm"
          >
            Next <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={onClose}
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase font-bold border-2 border-black bg-black text-white px-3 py-1.5 hover:bg-primary hover:text-black transition-colors brutal-shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Close
          </button>
        </div>
      </div>

      <div id="top" />

      {/* =========================================================================
          SECTION 1: TITLE & COVER (Headline with client name and main win)
      ========================================================================= */}
      <section className={`${project.accentColor} border-b-[4px] border-black pt-12 md:pt-16 pb-16 px-4 sm:px-6`}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            {/* Client & Category Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="font-mono text-xs md:text-sm font-black uppercase tracking-widest bg-white border-2 border-black px-3 py-1 brutal-shadow-sm flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-primary" /> {clientData.name}
              </span>
              <span className="font-mono text-xs md:text-sm font-black uppercase tracking-widest bg-black text-white px-3 py-1">
                {project.category}
              </span>
              {titleData.mainWin && (
                <span className="font-mono text-xs md:text-sm font-black uppercase tracking-widest bg-primary text-black border-2 border-black px-3 py-1 brutal-shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> Win: {titleData.mainWin}
                </span>
              )}
            </div>

            {/* Catchy Main Title / Headline */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[1.05] mb-8 bg-white p-6 md:p-8 border-[4px] border-black brutal-shadow">
              {titleData.headline}
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl font-mono uppercase font-bold tracking-tight max-w-4xl leading-tight mb-10 text-black/80">
              {titleData.subtitle}
            </p>

            {/* Metadata Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { label: "Role", value: titleData.role, icon: Briefcase },
                { label: "Timeline", value: titleData.timeline, icon: Clock },
                { label: "Platform", value: titleData.platform, icon: Globe },
                { label: "Team", value: titleData.team, icon: Users },
              ].map((meta, i) => (
                <div key={i} className="bg-white border-[3px] border-black p-4 brutal-shadow-sm flex flex-col justify-between">
                  <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-1 flex items-center gap-1 font-bold">
                    <meta.icon className="w-3.5 h-3.5" /> {meta.label}
                  </div>
                  <div className="font-black text-sm md:text-base uppercase text-black">{meta.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Cover Image Banner */}
      <div className="w-full border-b-[4px] border-black bg-black">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto max-h-[75vh] object-cover mix-blend-screen opacity-95"
        />
      </div>

      {/* =========================================================================
          SECTION 2: EXECUTIVE SUMMARY (Summary of the problem, fix, and results)
      ========================================================================= */}
      <SectionWrapper className="bg-primary text-black">
        <SectionHeading num="02" title="Executive Summary" subtitle="Problem • Fix • Results" />
        <div className="grid md:grid-cols-3 gap-8">
          {/* Problem */}
          <div className="bg-white border-[4px] border-black p-6 md:p-8 brutal-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 text-red-600 font-black uppercase tracking-widest text-sm">
                <AlertCircle className="w-5 h-5" /> 1. The Problem
              </div>
              <p className="font-mono text-base md:text-lg leading-relaxed font-bold text-black">
                "{execSummary.problem}"
              </p>
            </div>
            <div className="mt-6 pt-4 border-t-2 border-black font-mono text-xs font-bold uppercase text-red-600">
              High Pain & Friction
            </div>
          </div>

          {/* Fix */}
          <div className="bg-white border-[4px] border-black p-6 md:p-8 brutal-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 text-blue-600 font-black uppercase tracking-widest text-sm">
                <PenTool className="w-5 h-5" /> 2. The Fix
              </div>
              <p className="font-mono text-base md:text-lg leading-relaxed font-bold text-black">
                "{execSummary.fix}"
              </p>
            </div>
            <div className="mt-6 pt-4 border-t-2 border-black font-mono text-xs font-bold uppercase text-blue-600">
              Targeted Solution
            </div>
          </div>

          {/* Key Results */}
          <div className="bg-black text-white border-[4px] border-black p-6 md:p-8 brutal-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 text-primary font-black uppercase tracking-widest text-sm">
                <TrendingUp className="w-5 h-5" /> 3. Key Results
              </div>
              <ul className="space-y-3">
                {execSummary.results.map((res: string, idx: number) => (
                  <li key={idx} className="font-mono text-sm md:text-base font-bold flex items-start gap-2 text-gray-100">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t-2 border-white/30 font-mono text-xs font-bold uppercase text-primary">
              Empirical Success
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* =========================================================================
          SECTION 3: ABOUT THE CLIENT (Brief background on who they are & industry)
      ========================================================================= */}
      <SectionWrapper className="bg-white">
        <SectionHeading num="03" title="About the Client" subtitle="Background & Industry Context" />
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          <div className="md:col-span-2 bg-[#F4F4F0] border-[4px] border-black p-6 md:p-8 brutal-shadow flex flex-col justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 flex items-center gap-3">
                <Building2 className="w-8 h-8 text-primary shrink-0" /> {clientData.name}
              </h3>
              <p className="font-mono text-lg leading-relaxed mb-6 font-medium text-gray-800">
                {clientData.background}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 border-t-[3px] border-black pt-4 font-mono text-sm">
              <div>
                <span className="font-bold text-xs uppercase tracking-widest text-muted-foreground block">Industry</span>
                <span className="font-black uppercase">{clientData.industry}</span>
              </div>
              <div>
                <span className="font-bold text-xs uppercase tracking-widest text-muted-foreground block">Scale / Size</span>
                <span className="font-black uppercase">{clientData.size}</span>
              </div>
            </div>
          </div>

          <div className="bg-secondary/20 border-[4px] border-black p-6 md:p-8 brutal-shadow flex flex-col justify-center">
            <div className="font-mono text-xs uppercase tracking-widest font-black text-muted-foreground mb-2">
              Operational Scope
            </div>
            <div className="text-3xl md:text-4xl font-black uppercase mb-4 text-black">
              Enterprise Scale
            </div>
            <p className="font-mono text-sm leading-relaxed text-gray-700">
              Designed specifically for high-throughput teams needing robust performance, WCAG accessibility, and multi-user collaboration.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* =========================================================================
          SECTION 4: THE CHALLENGE (Exact pain points or obstacles faced)
      ========================================================================= */}
      <SectionWrapper className="bg-[#FFD6A0]/30">
        <SectionHeading num="04" title="The Challenge" subtitle="Pain Points & Obstacles" />
        
        <div className="mb-12">
          <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-4 bg-white border-[3px] border-black p-6 brutal-shadow">
            "{challengeData.headline}"
          </h3>
          <p className="font-mono text-lg md:text-xl leading-relaxed border-l-[8px] border-black pl-6 font-bold bg-white/60 p-4">
            {challengeData.description}
          </p>
        </div>

        {/* Detailed Pain Points */}
        <h4 className="font-black uppercase text-xl md:text-2xl mb-6">Key Friction Points</h4>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {challengeData.painPoints.map((pt: string, i: number) => (
            <div key={i} className="flex items-start gap-4 font-mono text-base md:text-lg bg-white border-[3px] border-black p-5 brutal-shadow-sm font-bold">
              <span className="bg-red-400 text-black w-8 h-8 flex items-center justify-center border-2 border-black shrink-0 font-black">
                !
              </span>
              <span>{pt}</span>
            </div>
          ))}
        </div>

        {/* Core Insights */}
        {challengeData.coreInsights && challengeData.coreInsights.length > 0 && (
          <div className="mb-16">
            <h4 className="font-black uppercase text-xl md:text-2xl mb-6">Core Research Insights</h4>
            <div className="grid md:grid-cols-3 gap-6">
              {challengeData.coreInsights.map((insight: any, i: number) => (
                <div key={i} className="bg-white border-[3px] border-black p-6 brutal-shadow">
                  <div className="font-mono text-xs uppercase tracking-widest font-black text-red-500 mb-2">
                    Insight 0{i + 1}
                  </div>
                  <h5 className="font-black uppercase text-xl mb-3 border-b-2 border-black pb-2">{insight.title}</h5>
                  <p className="font-mono text-sm leading-relaxed text-gray-700">{insight.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Target Personas */}
        {challengeData.personas && challengeData.personas.length > 0 && (
          <div>
            <h4 className="font-black uppercase text-xl md:text-2xl mb-6">Target User Personas</h4>
            <div className="grid md:grid-cols-2 gap-8">
              {challengeData.personas.map((persona: any, i: number) => (
                <div key={i} className="border-[4px] border-black bg-white brutal-shadow flex flex-col">
                  <div className="bg-[#FFD6A0] border-b-[4px] border-black p-6 flex items-center gap-6">
                    <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-black shrink-0 border-2 border-black">
                      {persona.age}
                    </div>
                    <div>
                      <div className="font-black text-2xl uppercase">{persona.name || persona.occupation}</div>
                      <div className="font-mono text-xs uppercase tracking-widest font-bold text-gray-800">
                        {persona.occupation} • Age: {persona.age}
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-grow">
                    <p className="font-mono italic text-base md:text-lg border-l-[4px] border-black pl-4 mb-6 bg-gray-50 p-3 font-medium">
                      "{persona.quote}"
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-black uppercase text-xs mb-2 border-b-2 border-black inline-block">Goals</h5>
                        <ul className="space-y-1">
                          {persona.goals.map((g: string) => (
                            <li key={g} className="font-mono text-xs flex gap-1.5 font-bold text-green-700">
                              <span>✓</span> {g}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-black uppercase text-xs mb-2 border-b-2 border-black inline-block">Pain Points</h5>
                        <ul className="space-y-1">
                          {persona.painPoints.map((p: string) => (
                            <li key={p} className="font-mono text-xs flex gap-1.5 font-bold text-red-600">
                              <span>✕</span> {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </SectionWrapper>

      {/* =========================================================================
          SECTION 5: THE SOLUTION (How product/service solved the issue)
      ========================================================================= */}
      <SectionWrapper className="bg-white">
        <SectionHeading num="05" title="The Solution" subtitle="Architecture • Decisions • High-Fidelity UI" />
        
        <div className="mb-16">
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
            {solutionData.headline}
          </h3>
          <p className="font-mono text-xl leading-relaxed text-gray-800 bg-[#F4F4F0] border-[3px] border-black p-6 md:p-8 brutal-shadow">
            {solutionData.overview}
          </p>
        </div>

        {/* Key UX Decisions */}
        {solutionData.keyDecisions && solutionData.keyDecisions.length > 0 && (
          <div className="mb-16">
            <h4 className="font-black uppercase text-2xl mb-6">Key Design & UX Decisions</h4>
            <div className="grid md:grid-cols-2 gap-8">
              {solutionData.keyDecisions.map((dec: any, i: number) => (
                <div key={i} className="bg-white border-[4px] border-black p-6 brutal-shadow">
                  <div className="font-black uppercase text-xl mb-3 flex items-center gap-3 text-black">
                    <PenTool className="w-6 h-6 text-primary shrink-0" /> {dec.title}
                  </div>
                  <p className="font-mono text-base leading-relaxed text-gray-700">{dec.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* High Fidelity UI Showcase */}
        {solutionData.highFidelity?.screens && solutionData.highFidelity.screens.length > 0 && (
          <div className="mb-16">
            <h4 className="font-black uppercase text-2xl mb-6">High-Fidelity Interface Showcase</h4>
            <div className="space-y-12">
              {solutionData.highFidelity.screens.map((screen: any, i: number) => (
                <div key={i} className="border-[4px] border-black bg-white brutal-shadow overflow-hidden">
                  <div className="bg-black text-white p-4 font-black uppercase text-xl flex items-center justify-between">
                    <span>{screen.title}</span>
                    <span className="text-xs bg-primary text-black font-mono font-bold px-3 py-1">
                      Screen 0{i + 1}
                    </span>
                  </div>

                  {/* High Fidelity Visual Frame */}
                  <div className="w-full h-80 md:h-[450px] bg-gray-200 border-b-[4px] border-black flex flex-col items-center justify-center relative overflow-hidden group">
                    <img
                      src={project.image}
                      alt={screen.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md text-white font-mono text-xs px-3 py-1 border border-white">
                      {screen.title} Mockup Preview
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black border-t-[4px] border-black bg-gray-50">
                    <div className="p-6">
                      <div className="font-black uppercase text-xs text-red-600 mb-2 tracking-widest">
                        Problem Solved
                      </div>
                      <div className="font-mono text-sm font-medium">{screen.problem}</div>
                    </div>
                    <div className="p-6">
                      <div className="font-black uppercase text-xs text-blue-600 mb-2 tracking-widest">
                        Layout Decision
                      </div>
                      <div className="font-mono text-sm font-medium">{screen.layout}</div>
                    </div>
                    <div className="p-6">
                      <div className="font-black uppercase text-xs text-green-700 mb-2 tracking-widest">
                        How It Helps
                      </div>
                      <div className="font-mono text-sm font-medium">{screen.help}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Visual Direction & Design System */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border-[3px] border-black p-6 bg-[#F4F4F0] brutal-shadow">
            <h4 className="font-black uppercase text-xl mb-4 border-b-2 border-black pb-2">Visual Direction</h4>
            <div className="space-y-4 font-mono text-sm">
              <div>
                <span className="font-bold text-xs uppercase text-muted-foreground block">Typography</span>
                <span className="font-black text-lg">{solutionData.visualDirection?.typography}</span>
              </div>
              <div>
                <span className="font-bold text-xs uppercase text-muted-foreground block mb-1">Color Tokens</span>
                <div className="flex flex-wrap gap-2">
                  {solutionData.visualDirection?.colorPalette?.map((c: string) => (
                    <span key={c} className="px-2.5 py-1 text-xs border-2 border-black bg-white font-bold uppercase">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="border-[3px] border-black p-6 bg-[#F4F4F0] brutal-shadow">
            <h4 className="font-black uppercase text-xl mb-4 border-b-2 border-black pb-2">Design System & Standards</h4>
            <p className="font-mono text-sm leading-relaxed font-medium text-gray-800">
              {solutionData.designSystem?.text}
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* =========================================================================
          SECTION 6: RESULTS & IMPACT (Hard data, stats, and percent changes)
      ========================================================================= */}
      <SectionWrapper className="bg-primary/20">
        <SectionHeading num="06" title="Results & Impact" subtitle="Hard Data • Percent Changes • Metrics" />

        <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-12">
          {resultsData.headline}
        </h3>

        {/* Hard Data Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {resultsData.metrics.map((metric: any, i: number) => (
            <div key={i} className="bg-white border-[4px] border-black p-6 brutal-shadow flex flex-col justify-between text-center">
              <div className="font-mono text-xs font-black uppercase tracking-widest text-muted-foreground mb-4">
                {metric.label}
              </div>
              <div className="my-4">
                {metric.change && (
                  <span className="inline-block bg-black text-primary font-mono text-xs font-black uppercase px-2.5 py-1 mb-2 border border-black">
                    {metric.change}
                  </span>
                )}
                <div className="flex items-center justify-center gap-3 font-mono">
                  <span className="text-lg text-red-500 line-through font-bold">{metric.before}</span>
                  <ArrowRight className="w-5 h-5 text-black shrink-0" />
                  <span className="text-2xl md:text-3xl font-black text-green-700">{metric.after}</span>
                </div>
              </div>
              <div className="font-mono text-xs font-bold text-gray-500 uppercase border-t border-black/20 pt-3">
                Verified Benchmark
              </div>
            </div>
          ))}
        </div>

        {/* Impact Points */}
        <h4 className="font-black uppercase text-2xl mb-6">Key Business Benefits</h4>
        <div className="grid md:grid-cols-2 gap-6">
          {resultsData.impactPoints.map((benefit: string, i: number) => (
            <div key={i} className="bg-white border-[3px] border-black p-6 brutal-shadow flex items-center gap-4">
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-black text-xl shrink-0 border-2 border-black">
                0{i + 1}
              </div>
              <div className="font-mono text-base md:text-lg font-bold text-black">{benefit}</div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* =========================================================================
          SECTION 7: CLIENT QUOTE (Real testimonial quote from a stakeholder)
      ========================================================================= */}
      <SectionWrapper className="bg-black text-white">
        <SectionHeading num="07" title="Client Quote" subtitle="Stakeholder Testimonial" />

        <div className="bg-white/10 border-[4px] border-white p-8 md:p-12 relative brutal-shadow">
          <Quote className="w-16 h-16 text-primary absolute -top-8 -left-4 bg-black p-2 border-2 border-white" />
          
          <p className="text-xl md:text-3xl font-mono leading-relaxed font-bold text-gray-100 mb-8 pt-4">
            "{quoteData.quote}"
          </p>

          <div className="flex items-center gap-4 border-t-2 border-white/20 pt-6">
            <img
              src={quoteData.avatar}
              alt={quoteData.author}
              className="w-16 h-16 rounded-full border-2 border-primary object-cover shrink-0"
            />
            <div>
              <div className="font-black text-xl md:text-2xl uppercase text-primary">{quoteData.author}</div>
              <div className="font-mono text-sm text-gray-300 font-bold uppercase">
                {quoteData.role} • {quoteData.company}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* =========================================================================
          SECTION 8: CALL TO ACTION (What the reader should do next)
      ========================================================================= */}
      <SectionWrapper className="bg-primary text-black text-center py-20">
        <div className="max-w-3xl mx-auto">
          <span className="font-mono text-xs font-black uppercase tracking-widest bg-black text-white px-3 py-1 border-2 border-black inline-block mb-6">
            Section 08 • Call to Action
          </span>

          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-tight">
            {ctaData.headline}
          </h2>

          <p className="font-mono text-lg md:text-xl font-bold max-w-2xl mx-auto mb-10 text-black/90">
            {ctaData.text}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/contact" onClick={onClose}>
              <span className="inline-flex items-center gap-2 font-black uppercase tracking-wider text-lg border-[4px] border-black bg-white text-black px-8 py-4 brutal-shadow hover:bg-black hover:text-white transition-colors cursor-pointer w-full sm:w-auto justify-center">
                {ctaData.primaryBtnText} <ArrowRight className="w-5 h-5" />
              </span>
            </Link>

            <button
              onClick={() => {
                const el = document.getElementById("top");
                if (el) el.scrollIntoView();
                onNext(nextProject);
              }}
              className="inline-flex items-center gap-2 font-black uppercase tracking-wider text-lg border-[4px] border-black bg-black text-white px-8 py-4 brutal-shadow hover:bg-white hover:text-black transition-colors w-full sm:w-auto justify-center"
            >
              Next Case Study <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 font-mono font-bold uppercase tracking-wider text-sm border-[3px] border-black bg-white/50 text-black px-6 py-4 hover:bg-white transition-colors w-full sm:w-auto justify-center"
            >
              Back to Portfolio
            </button>
          </div>
        </div>
      </SectionWrapper>
    </motion.div>
  );
}
