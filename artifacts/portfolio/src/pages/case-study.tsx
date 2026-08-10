import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Link } from "wouter";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  ArrowDown
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

const NAV_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "target-users", label: "Target Users" },
  { id: "challenge", label: "Challenge" },
  { id: "solution", label: "Solution" },
  { id: "process", label: "Process" },
  { id: "final-output", label: "Final Output" },
  { id: "results", label: "Results" },
  { id: "figma", label: "Figma" },
];

function SectionWrapper({
  children,
  className = "",
  id = ""
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
      className={`py-14 md:py-24 border-b-[4px] border-black ${className}`}
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
  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];
  const cs = project.caseStudy as any;
  const [activeStep, setActiveStep] = useState<string>("overview");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Lock body scroll while modal is active
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  // IntersectionObserver inside the scroll container
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveStep(entry.target.id);
          }
        });
      },
      { root: container, threshold: 0.2, rootMargin: "0px 0px -40% 0px" }
    );

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [cs, project.slug]);

  const scrollToSection = (id: string) => {
    const container = scrollContainerRef.current;
    const target = document.getElementById(id);
    if (container && target) {
      const topOffset = target.offsetTop;
      container.scrollTo({ top: topOffset, behavior: "smooth" });
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

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", damping: 28, stiffness: 220 }}
      className="fixed inset-0 z-50 bg-[#F4F4F0] text-foreground font-sans selection:bg-primary selection:text-black overflow-hidden flex flex-col"
    >
      {/* Top Header Bar */}
      <div className="w-full bg-[#F4F4F0] border-b-[4px] border-black z-40 shadow-md shrink-0">
        <div className="flex justify-between items-center px-4 py-3 sm:px-8 bg-white">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-black uppercase tracking-widest bg-black text-white px-3 py-1">
              UI/UX Case Study
            </span>
            <span className="font-black uppercase tracking-tight text-base sm:text-xl truncate max-w-[180px] sm:max-w-md text-black">
              {project.title}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                scrollToSection("overview");
                onNext(prevProject);
              }}
              className="hidden sm:inline-flex items-center gap-2 font-mono text-xs uppercase font-bold border-[3px] border-black bg-white px-3.5 py-2 hover:bg-primary transition-colors brutal-shadow-sm cursor-pointer text-black"
            >
              <ArrowLeft className="w-4 h-4" /> Prev Project
            </button>
            <button
              onClick={() => {
                scrollToSection("overview");
                onNext(nextProject);
              }}
              className="hidden sm:inline-flex items-center gap-2 font-mono text-xs uppercase font-bold border-[3px] border-black bg-white px-3.5 py-2 hover:bg-primary transition-colors brutal-shadow-sm cursor-pointer text-black"
            >
              Next Project <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase font-bold border-[3px] border-black bg-black text-white px-3.5 py-2 hover:bg-primary hover:text-black transition-colors brutal-shadow-sm cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" /> Close
            </button>
          </div>
        </div>
      </div>

      {/* Floating Vertical Sticky Navigation (Desktop Right Side — Once inside Case Study Page) */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-3 pointer-events-auto">
        {NAV_ITEMS.map((item) => {
          const isActive = activeStep === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              className="group flex items-center gap-2.5 px-3 py-2 rounded-full bg-black/90 backdrop-blur-md border border-white/20 text-white transition-all duration-300 hover:pr-4 shadow-2xl cursor-pointer"
              title={item.label}
            >
              <span
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  isActive ? "bg-primary scale-125" : "bg-white/40 group-hover:bg-white"
                }`}
              />
              <span
                className={`text-xs font-mono font-bold uppercase transition-all duration-300 ${
                  isActive
                    ? "text-primary opacity-100 max-w-[120px]"
                    : "opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-[120px]"
                } overflow-hidden whitespace-nowrap`}
              >
                {item.label}
              </span>
            </a>
          );
        })}
      </div>

      {/* Scrollable Content Body */}
      <div
        ref={scrollContainerRef}
        className="flex-1 w-full overflow-y-auto scroll-smooth"
      >
        {/* =========================================================================
            01 — HERO (IMAGE 01)
        ========================================================================= */}
        <section id="overview" className="pt-12 md:pt-20 pb-16 px-4 sm:px-8 border-b-[4px] border-black bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT: Metadata & CTAs */}
            <div className="space-y-6">
              <span className="font-mono text-xs font-black uppercase tracking-widest border-[2px] border-black bg-primary px-3.5 py-1.5 inline-block text-black">
                UI/UX CASE STUDY
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter leading-none text-black">
                {project.title}
              </h1>
              <h2 className="text-xl sm:text-2xl font-mono font-bold text-gray-700">
                {project.subtitle}
              </h2>
              <p className="font-mono text-base md:text-xl font-bold text-black border-l-[6px] border-primary pl-4 py-1 leading-relaxed">
                "{cs.heroTagline}"
              </p>

              {/* Metadata Grid */}
              <div className="grid grid-cols-2 gap-4 border-[3px] border-black bg-[#F4F4F0] p-4 font-mono text-xs brutal-shadow-sm">
                <div>
                  <span className="text-gray-500 block font-bold uppercase mb-0.5">Role</span>
                  <span className="font-black text-black text-sm">{project.role}</span>
                </div>
                <div>
                  <span className="text-gray-500 block font-bold uppercase mb-0.5">Timeline</span>
                  <span className="font-black text-black text-sm">{project.duration}</span>
                </div>
                <div>
                  <span className="text-gray-500 block font-bold uppercase mb-0.5">Tools</span>
                  <span className="font-black text-black text-sm">{project.tools.join(" · ")}</span>
                </div>
                <div>
                  <span className="text-gray-500 block font-bold uppercase mb-0.5">Platform</span>
                  <span className="font-black text-black text-sm">{project.platform}</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => scrollToSection("final-output")}
                  className="inline-flex items-center gap-2 font-black uppercase tracking-wider text-sm sm:text-base border-[3px] border-black bg-primary text-black px-6 py-3.5 brutal-shadow hover:bg-black hover:text-white transition-colors cursor-pointer"
                >
                  VIEW FINAL OUTPUT <ArrowDown className="w-5 h-5" />
                </button>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-black uppercase tracking-wider text-sm sm:text-base border-[3px] border-black bg-white text-black px-6 py-3.5 brutal-shadow hover:bg-secondary transition-colors cursor-pointer"
                >
                  VIEW FULL FIGMA <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* RIGHT: IMAGE 01 — HERO MOCKUP */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-primary border-[4px] border-black rounded-[2rem] transform rotate-1 group-hover:rotate-0 transition-transform duration-500 opacity-80" />
              <div className="relative border-[4px] border-black bg-black rounded-[2rem] overflow-hidden brutal-shadow shadow-2xl">
                <motion.img
                  initial={{ scale: 0.96 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  src={project.image}
                  alt={`${project.title} Hero Mockup`}
                  className="w-full h-auto max-h-[520px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            02 — QUICK SUMMARY
        ========================================================================= */}
        <section className="py-12 border-b-[4px] border-black bg-[#F4F4F0]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="font-mono text-xs font-black uppercase tracking-widest text-gray-500 mb-2">
              AT A GLANCE
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tighter text-black mb-8">
              THE PROJECT IN ONE GLANCE
            </h2>
            <div className="grid md:grid-cols-3 gap-6 font-mono text-sm">
              <div className="bg-white border-[3px] border-black p-6 brutal-shadow-sm">
                <div className="font-black uppercase text-red-600 mb-2 text-base flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-red-600 inline-block" />
                  THE PROBLEM
                </div>
                <p className="text-gray-800 font-medium leading-relaxed">
                  "{cs.quickGlance.problem}"
                </p>
              </div>
              <div className="bg-white border-[3px] border-black p-6 brutal-shadow-sm">
                <div className="font-black uppercase text-blue-600 mb-2 text-base flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-blue-600 inline-block" />
                  THE SOLUTION
                </div>
                <p className="text-gray-800 font-medium leading-relaxed">
                  "{cs.quickGlance.solution}"
                </p>
              </div>
              <div className="bg-white border-[3px] border-black p-6 brutal-shadow-sm">
                <div className="font-black uppercase text-green-700 mb-2 text-base flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-green-700 inline-block" />
                  THE RESULT
                </div>
                <p className="text-gray-800 font-medium leading-relaxed">
                  "{cs.quickGlance.result}"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            03 — QUICK METRICS
        ========================================================================= */}
        <section className="py-10 border-b-[4px] border-black bg-black text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center font-mono">
              {cs.metrics.map((m: any, i: number) => (
                <div key={i} className="p-4 border border-zinc-800 bg-zinc-900 brutal-shadow-sm">
                  <div className="text-3xl sm:text-5xl font-black text-primary tracking-tighter mb-1">
                    {m.value}
                  </div>
                  <div className="text-xs uppercase font-bold text-gray-300 tracking-wider">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            TARGET USERS
        ========================================================================= */}
        {cs.targetUsers && (
          <SectionWrapper id="target-users" className="bg-white">
            <div className="space-y-8">
              <div>
                <div className="font-mono text-xs font-black uppercase tracking-widest text-primary bg-black px-3.5 py-1.5 inline-block mb-2">
                  TARGET AUDIENCE & PERSONAS
                </div>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black">
                  TARGET USERS
                </h2>
              </div>

              <p className="text-2xl md:text-4xl font-black text-black uppercase tracking-tight border-l-[6px] border-primary pl-4 py-1">
                "{cs.targetUsers.quote}"
              </p>

              <p className="font-mono text-base md:text-lg text-gray-800 leading-relaxed font-medium">
                {cs.targetUsers.paragraph}
              </p>

              <div className="grid md:grid-cols-3 gap-6 pt-2">
                {cs.targetUsers.users.map((user: any, i: number) => (
                  <div key={i} className="bg-[#F4F4F0] border-[3px] border-black p-6 brutal-shadow flex flex-col justify-between">
                    <div>
                      <div className="font-mono font-black text-xs text-black bg-primary border-[2px] border-black px-2.5 py-1 inline-block mb-4">
                        {user.role}
                      </div>
                      <h3 className="font-black uppercase text-xl text-black mb-2">{user.title}</h3>
                      <p className="font-mono text-xs text-gray-700 leading-relaxed mb-4">{user.desc}</p>
                    </div>
                    {user.needs && user.needs.length > 0 && (
                      <div className="border-t-[2px] border-black/20 pt-4 mt-2">
                        <span className="font-mono text-[11px] font-black uppercase tracking-wider text-gray-500 block mb-2">
                          Key User Needs:
                        </span>
                        <ul className="space-y-1.5 font-mono text-xs font-bold text-black">
                          {user.needs.map((need: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-black font-black">✓</span>
                              <span>{need}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </SectionWrapper>
        )}

        {/* =========================================================================
            04 — THE CHALLENGE
        ========================================================================= */}
        <SectionWrapper id="challenge" className="bg-white">
          <div className="space-y-8">
            <div>
              <div className="font-mono text-xs font-black uppercase tracking-widest text-red-600 mb-2">
                SECTION 01 / PROBLEM
              </div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black">
                THE CHALLENGE
              </h2>
            </div>

            <p className="text-2xl md:text-4xl font-black text-black uppercase tracking-tight border-l-[6px] border-red-500 pl-4 py-1">
              "{cs.challenge.quote}"
            </p>

            <p className="font-mono text-base md:text-lg text-gray-800 leading-relaxed font-medium">
              {cs.challenge.paragraph}
            </p>

            <div className="grid md:grid-cols-3 gap-6 pt-2">
              {cs.challenge.cards.map((card: any, i: number) => (
                <div key={i} className="bg-[#F4F4F0] border-[3px] border-black p-6 brutal-shadow-sm">
                  <div className="font-mono font-black text-xs text-white bg-black px-2.5 py-1 inline-block mb-4">
                    PROBLEM {card.num}
                  </div>
                  <h3 className="font-black uppercase text-lg text-black mb-2">{card.title}</h3>
                  <p className="font-mono text-xs text-gray-700 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* =========================================================================
            05 — THE GOAL
        ========================================================================= */}
        <SectionWrapper className="bg-[#F4F4F0]">
          <div className="space-y-8">
            <div>
              <div className="font-mono text-xs font-black uppercase tracking-widest text-blue-600 mb-2">
                SECTION 02 / OBJECTIVE
              </div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black">
                THE GOAL
              </h2>
            </div>

            <p className="text-2xl md:text-4xl font-black text-black uppercase tracking-tight border-l-[6px] border-blue-600 pl-4 py-1">
              "{cs.goal.quote}"
            </p>

            <div className="grid md:grid-cols-3 gap-6 pt-2">
              {cs.goal.cards.map((g: any, i: number) => (
                <div key={i} className="bg-white border-[3px] border-black p-6 brutal-shadow-sm">
                  <div className="font-black uppercase text-xl text-black mb-2 flex items-center gap-2">
                    <span className="w-3 h-3 bg-primary inline-block" />
                    {g.title}
                  </div>
                  <p className="font-mono text-xs md:text-sm text-gray-800 font-bold">{g.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* =========================================================================
            06 — THE SOLUTION
        ========================================================================= */}
        <SectionWrapper id="solution" className="bg-white">
          <div className="space-y-8">
            <div>
              <div className="font-mono text-xs font-black uppercase tracking-widest text-green-700 mb-2">
                SECTION 03 / SYSTEM DESIGN
              </div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black">
                THE SOLUTION
              </h2>
            </div>

            <p className="text-2xl md:text-4xl font-black text-black uppercase tracking-tight border-l-[6px] border-green-600 pl-4 py-1">
              "{cs.solution.quote}"
            </p>

            <p className="font-mono text-base md:text-lg text-gray-800 leading-relaxed font-medium">
              {cs.solution.paragraph}
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
              {cs.solution.cards.map((sol: any, i: number) => (
                <div key={i} className="bg-[#F4F4F0] border-[3px] border-black p-5 brutal-shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 bg-black text-primary font-mono text-xs font-black flex items-center justify-center mb-3">
                      0{i + 1}
                    </div>
                    <h3 className="font-black uppercase text-base text-black mb-2">{sol.title}</h3>
                    <p className="font-mono text-xs text-gray-700 leading-relaxed">{sol.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* =========================================================================
            07 — KEY DESIGN DECISIONS
        ========================================================================= */}
        <SectionWrapper className="bg-[#F4F4F0]">
          <div className="space-y-8">
            <div>
              <div className="font-mono text-xs font-black uppercase tracking-widest text-black mb-2">
                SECTION 04 / ARCHITECTURE
              </div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black">
                KEY DESIGN DECISIONS
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {cs.decisions.map((dec: any, i: number) => (
                <div key={i} className="bg-white border-[3px] border-black p-6 brutal-shadow flex flex-col justify-between">
                  <div>
                    <div className="font-mono text-xs font-black text-red-600 uppercase mb-3">
                      DECISION {dec.num}
                    </div>
                    <h3 className="font-black uppercase text-lg text-black mb-3">{dec.title}</h3>
                    <p className="font-mono text-xs md:text-sm text-gray-800 leading-relaxed">
                      "{dec.desc}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* =========================================================================
            08 — PROCESS (IMAGE 02)
        ========================================================================= */}
        <SectionWrapper id="process" className="bg-white">
          <div className="space-y-8">
            <div>
              <div className="font-mono text-xs font-black uppercase tracking-widest text-red-600 mb-2">
                SECTION 05 / METHODOLOGY
              </div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black">
                HOW I GOT THERE
              </h2>
            </div>

            <p className="font-mono text-base md:text-lg text-gray-800 leading-relaxed font-medium">
              "{cs.process.intro}"
            </p>

            {/* Horizontal Process Timeline */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 border-[3px] border-black bg-black p-2 text-white font-mono text-xs">
              {cs.process.timeline.map((step: string, i: number) => (
                <div key={i} className="bg-zinc-900 border border-zinc-700 p-3 text-center">
                  <span className="font-black text-primary block text-sm mb-0.5">{step.split(" ")[0]}</span>
                  <span className="font-bold uppercase tracking-wider text-[11px] text-gray-200">{step.split(" ")[1]}</span>
                </div>
              ))}
            </div>

            {/* Process Explanation 3 Columns */}
            <div className="grid md:grid-cols-3 gap-6 pt-4 font-mono text-xs">
              {cs.process.explanation.map((exp: any, i: number) => (
                <div key={i} className="bg-[#F4F4F0] border-[3px] border-black p-5 brutal-shadow-sm">
                  <span className="font-black uppercase text-black block text-sm mb-2">{exp.title}</span>
                  <span className="text-gray-800 font-medium leading-relaxed">{exp.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* =========================================================================
            09 — USER FLOW & SOLUTION (NO IMAGE)
        ========================================================================= */}
        <SectionWrapper id="final-output" className="bg-[#F4F4F0]">
          <div className="space-y-10">
            <div>
              <div className="font-mono text-xs font-black uppercase tracking-widest text-red-600 mb-2">
                SECTION 06 / USER FLOW & SOLUTION
              </div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black">
                USER FLOW & FINAL SOLUTION
              </h2>
              <p className="font-mono text-base md:text-lg font-bold text-gray-700 mt-2">
                "{cs.finalOutput.subheading}"
              </p>
            </div>

            {/* USER FLOW STEP-BY-STEP PATHWAY (REPLACES FINAL EXPERIENCE IMAGE) */}
            {cs.userFlow && cs.userFlow.length > 0 && (
              <div className="space-y-4">
                <div className="font-mono text-xs font-black uppercase tracking-widest text-black bg-primary px-3.5 py-1.5 inline-block border-[2px] border-black">
                  END-TO-END USER EXPERIENCE FLOW
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
                  {cs.userFlow.map((flow: any, i: number) => (
                    <div
                      key={i}
                      className="bg-white border-[3px] border-black p-6 brutal-shadow flex flex-col justify-between relative group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="w-9 h-9 bg-black text-primary font-mono text-sm font-black flex items-center justify-center border-[2px] border-black">
                            {flow.step}
                          </span>
                          <span className="font-mono text-[10px] font-black uppercase tracking-wider bg-[#F4F4F0] border border-black px-2 py-0.5 text-black">
                            {flow.highlight}
                          </span>
                        </div>
                        <h3 className="font-black uppercase text-base text-black mb-3 leading-snug">
                          {flow.title}
                        </h3>
                        <p className="font-mono text-xs text-gray-700 leading-relaxed font-medium">
                          {flow.desc}
                        </p>
                      </div>
                      <div className="pt-4 border-t border-black/10 mt-4 flex items-center justify-between font-mono text-[11px] font-bold text-gray-500">
                        <span>PHASE 0{i + 1}</span>
                        {i < cs.userFlow.length - 1 && (
                          <span className="hidden lg:inline text-black font-black">→</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SOLUTION DELIVERABLE CARDS */}
            <div className="space-y-4 pt-2">
              <div className="font-mono text-xs font-black uppercase tracking-widest text-white bg-black px-3.5 py-1.5 inline-block border-[2px] border-black">
                CORE SOLUTION DELIVERABLES
              </div>
              <div className="grid md:grid-cols-3 gap-6 font-mono text-xs">
                {cs.finalOutput.cards.map((card: any, i: number) => (
                  <div key={i} className="bg-white border-[3px] border-black p-6 brutal-shadow">
                    <span className="font-black uppercase text-black text-base block mb-2">{card.title}</span>
                    <span className="text-gray-800 font-medium leading-relaxed">{card.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* =========================================================================
            10 — RESULTS / OUTCOME
        ========================================================================= */}
        <SectionWrapper id="results" className="bg-white">
          <div className="space-y-8">
            <div>
              <div className="font-mono text-xs font-black uppercase tracking-widest text-green-700 mb-2">
                SECTION 07 / IMPACT
              </div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black">
                THE OUTCOME
              </h2>
            </div>

            <p className="text-2xl md:text-4xl font-black text-black uppercase tracking-tight border-l-[6px] border-green-600 pl-4 py-1">
              "{cs.results.quote}"
            </p>

            {/* Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono">
              {cs.results.metrics.map((res: any, i: number) => (
                <div key={i} className="bg-[#F4F4F0] border-[3px] border-black p-5 brutal-shadow-sm text-center">
                  <div className="text-2xl sm:text-4xl font-black text-green-800 tracking-tighter mb-1">
                    {res.value}
                  </div>
                  <div className="text-xs uppercase font-bold text-gray-700">{res.label}</div>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* =========================================================================
            11 — WHAT I LEARNED
        ========================================================================= */}
        <SectionWrapper className="bg-[#F4F4F0]">
          <div className="space-y-8">
            <div>
              <div className="font-mono text-xs font-black uppercase tracking-widest text-black mb-2">
                SECTION 08 / RETROSPECTIVE
              </div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black">
                WHAT I LEARNED
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {cs.learnings.map((l: any, i: number) => (
                <div key={i} className="bg-white border-[3px] border-black p-6 brutal-shadow flex flex-col justify-between">
                  <div>
                    <div className="w-7 h-7 bg-black text-white font-mono text-xs font-black flex items-center justify-center mb-3">
                      {l.num}
                    </div>
                    <h3 className="font-black uppercase text-base text-black mb-2">{l.title}</h3>
                    <p className="font-mono text-xs text-gray-800 leading-relaxed font-medium">
                      "{l.desc}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* =========================================================================
            12 — FIGMA CTA
        ========================================================================= */}
        <SectionWrapper id="figma" className="bg-black text-white text-center py-20">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="font-mono text-xs font-black uppercase tracking-widest text-primary border border-primary px-3 py-1 inline-block">
              FIGMA SOURCE FILE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white">
              WANT TO EXPLORE THE FULL PROJECT?
            </h2>
            <p className="font-mono text-base sm:text-lg text-gray-300 max-w-xl mx-auto">
              Explore the complete Figma file, including the full interface, components and interactive prototype.
            </p>
            <div className="pt-4">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 font-black uppercase text-base border-[4px] border-black bg-primary text-black px-8 py-4 brutal-shadow hover:bg-white transition-colors cursor-pointer"
              >
                VIEW FULL FIGMA PROJECT <ExternalLink className="w-5 h-5" />
              </a>
            </div>
            <p className="font-mono text-xs text-gray-400">
              Full project available in Figma.
            </p>
          </div>
        </SectionWrapper>

        {/* =========================================================================
            13 — FINAL CTA
        ========================================================================= */}
        <section className="bg-primary text-black text-center py-20 border-t-[4px] border-black">
          <div className="max-w-2xl mx-auto px-4 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-black">
              Let's build something meaningful.
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
              <button
                onClick={() => {
                  scrollToSection("overview");
                  onNext(prevProject);
                }}
                className="inline-flex items-center gap-2 font-black uppercase text-sm sm:text-base border-[3px] border-black bg-white text-black px-6 py-4 brutal-shadow hover:bg-black hover:text-white transition-colors cursor-pointer w-full sm:w-auto justify-center"
              >
                <ArrowLeft className="w-5 h-5" /> PREVIOUS PROJECT
              </button>

              <button
                onClick={() => {
                  scrollToSection("overview");
                  onNext(nextProject);
                }}
                className="inline-flex items-center gap-2 font-black uppercase text-sm sm:text-base border-[3px] border-black bg-white text-black px-6 py-4 brutal-shadow hover:bg-black hover:text-white transition-colors cursor-pointer w-full sm:w-auto justify-center"
              >
                NEXT PROJECT <ArrowRight className="w-5 h-5" />
              </button>

              <Link href="/contact" onClick={onClose}>
                <span className="inline-flex items-center gap-2 font-black uppercase text-sm sm:text-base border-[3px] border-black bg-black text-white px-6 py-4 brutal-shadow hover:bg-white hover:text-black transition-colors cursor-pointer w-full sm:w-auto justify-center">
                  GET IN TOUCH <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
