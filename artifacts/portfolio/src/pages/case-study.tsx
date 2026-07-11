import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, User, Target, Frown, CheckCircle, ListTodo, PenTool } from "lucide-react";
import { projects } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

function SectionWrapper({ children, className = "", id = "" }: { children: React.ReactNode; className?: string, id?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.section id={id} ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp} className={`py-16 md:py-24 border-b-[4px] border-black ${className}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {children}
      </div>
    </motion.section>
  );
}

function SectionHeading({ num, title }: { num: number, title: string }) {
  return (
    <div className="relative mb-12">
      <div className="absolute -left-6 -top-10 text-[80px] md:text-[120px] font-black text-black/5 select-none -z-10">{num}</div>
      <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter pb-4 border-b-[4px] border-black inline-block">
        {title}
      </h2>
    </div>
  );
}

function ImagePlaceholder({ text, height = "h-96" }: { text: string, height?: string }) {
  return (
    <div className={`w-full ${height} border-[4px] border-black bg-gray-200 flex flex-col items-center justify-center brutal-shadow my-8`}>
      <div className="text-4xl opacity-50 mb-4">🖼️</div>
      <div className="font-mono text-lg font-bold uppercase text-gray-500 tracking-widest">{text}</div>
      <div className="font-mono text-xs text-gray-400 mt-2">(Placeholder - Replace with actual asset)</div>
    </div>
  );
}

export default function CaseStudyModal({ project, onClose, onNext }: { project: typeof projects[0], onClose: () => void, onNext: (p: typeof projects[0]) => void }) {
  const projectIndex = projects.findIndex(p => p.slug === project.slug);
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const cs = project.caseStudy as any;

  // Prevent background scrolling
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!cs || !cs.cover) {
    return (
      <div className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center p-8 text-center">
        <h2 className="text-4xl font-black uppercase mb-4">Under Construction</h2>
        <p className="font-mono text-lg mb-8">This case study is currently being updated to the new format.</p>
        <button onClick={onClose} className="border-[3px] border-black px-6 py-3 font-bold uppercase brutal-shadow hover:bg-primary">Close</button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="fixed inset-0 z-50 overflow-y-auto bg-[#F4F4F0] text-foreground font-sans selection:bg-primary selection:text-black"
    >
      {/* Navbar / Close */}
      <div className="sticky top-0 w-full bg-[#F4F4F0] border-b-[4px] border-black z-40 flex justify-between items-center p-4">
        <div className="font-black uppercase tracking-tighter text-xl">{project.title} Case Study</div>
        <button onClick={onClose} className="inline-flex items-center gap-2 font-mono text-sm uppercase font-bold border-2 border-black bg-white px-3 py-1 hover:bg-black hover:text-white transition-colors brutal-shadow-sm">
          <ArrowLeft className="w-4 h-4" /> Close
        </button>
      </div>

      {/* 1. Cover */}
      <section className={`${project.accentColor} border-b-[4px] border-black pt-20 pb-20 px-4 sm:px-6`}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.9] mb-8 bg-white inline-block px-4 py-2 border-[4px] border-black brutal-shadow">
              {project.title}
            </h1>
            <p className="text-2xl md:text-4xl font-black uppercase tracking-tight max-w-4xl leading-tight mb-16">
              {cs.cover.description}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Role", value: cs.cover.role },
                { label: "Timeline", value: cs.cover.timeline },
                { label: "Platform", value: cs.cover.platform },
                { label: "Team", value: cs.cover.team },
              ].map((meta, i) => (
                <div key={i} className="bg-white border-[3px] border-black p-4 brutal-shadow-sm flex flex-col justify-between">
                  <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-1">{meta.label}</div>
                  <div className="font-bold text-sm md:text-base uppercase">{meta.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Problem Statement & Hook (Moved to top - Mistake 1 & 7) */}
      <SectionWrapper className="bg-primary text-black pt-12 md:pt-16">
        <div className="max-w-4xl">
          <div className="font-mono text-sm uppercase tracking-widest mb-4 font-bold">The Problem</div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-[1.1] mb-8 bg-white border-[4px] border-black p-6 md:p-8 brutal-shadow">
            "{cs.problemStatement}"
          </h2>
          <p className="text-xl md:text-2xl font-mono leading-relaxed border-l-[8px] border-black pl-6 font-bold bg-white/50 p-4">
            {cs.hook.paragraph}
          </p>
        </div>
      </SectionWrapper>

      {/* Main Cover Image (Moved down - Mistake 1) */}
      <div className="w-full border-b-[4px] border-black bg-black">
        <img src={project.image} alt={project.title} className="w-full h-auto max-h-[80vh] object-cover mix-blend-screen opacity-90" />
      </div>

      {/* 3. Project Overview */}
      <SectionWrapper>
        <SectionHeading num={3} title="Project Overview" />
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <h3 className="font-black uppercase text-2xl mb-4">Overview</h3>
            <p className="font-mono text-lg leading-relaxed mb-8">{cs.overview.whatIsIt}</p>
          </div>
          <div className="bg-white border-[3px] border-black p-6 brutal-shadow">
            <h3 className="font-black uppercase text-xl mb-4 border-b-2 border-black pb-2">My Role</h3>
            <ul className="space-y-2 mb-6">
              {cs.overview.myRole.map((role: string) => <li key={role} className="font-mono flex gap-2"><ArrowRight className="w-4 h-4 mt-1" />{role}</li>)}
            </ul>
            <h3 className="font-black uppercase text-xl mb-4 border-b-2 border-black pb-2">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {cs.overview.tools.map((tool: string) => <span key={tool} className="border-2 border-black px-2 py-1 text-xs font-bold uppercase bg-gray-100">{tool}</span>)}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 4. Background & 5. The Challenge */}
      <SectionWrapper className="bg-primary/10">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <SectionHeading num={4} title="Background" />
            <p className="font-mono text-lg leading-relaxed bg-white border-[3px] border-black p-6 brutal-shadow">{cs.background.text}</p>
          </div>
          <div>
            <SectionHeading num={5} title="The Challenge" />
            <ul className="space-y-4">
              {cs.challenge.points.map((pt: string, i: number) => (
                <li key={i} className="flex items-start gap-4 font-mono text-lg bg-white border-[3px] border-black p-4 brutal-shadow-sm">
                  <span className="bg-red-400 w-6 h-6 flex items-center justify-center border-2 border-black shrink-0 mt-0.5 font-bold">!</span>
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      {/* 6. The Goal */}
      <SectionWrapper>
        <SectionHeading num={6} title="The Goal" />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#B8F0A0] border-[4px] border-black p-8 brutal-shadow">
            <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-3"><Target /> Business Goals</h3>
            <ul className="space-y-3">
              {cs.goal.businessGoals.map((g: string) => <li key={g} className="font-mono text-lg flex gap-3"><span className="w-2 h-2 bg-black rounded-full mt-2 shrink-0" />{g}</li>)}
            </ul>
          </div>
          <div className="bg-[#C8B8FF] border-[4px] border-black p-8 brutal-shadow">
            <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-3"><User /> User Goals</h3>
            <ul className="space-y-3">
              {cs.goal.userGoals.map((g: string) => <li key={g} className="font-mono text-lg flex gap-3"><span className="w-2 h-2 bg-black rounded-full mt-2 shrink-0" />{g}</li>)}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      {/* 7. Core Insights (Replaced Methods - Mistake 3 & 4) */}
      <SectionWrapper className="bg-black text-white">
        <SectionHeading num={7} title="Core Insights" />
        <div className="grid md:grid-cols-3 gap-8">
          {cs.coreInsights?.map((insight: any, i: number) => (
            <div key={i} className="border-[3px] border-white p-6 bg-white/10 hover:bg-white/20 transition-colors">
              <h4 className="font-black uppercase text-xl text-primary mb-4 border-b-2 border-white/30 pb-2">{insight.title}</h4>
              <p className="font-mono text-base leading-relaxed text-gray-300">{insight.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 8. Personas */}
      <SectionWrapper>
        <SectionHeading num={8} title="Personas" />
        <div className="grid md:grid-cols-2 gap-10">
          {cs.personas.map((persona: any, i: number) => (
            <div key={i} className="border-[4px] border-black bg-white brutal-shadow flex flex-col">
              <div className="bg-[#FFD6A0] border-b-[4px] border-black p-6 flex items-center gap-6">
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center text-white text-3xl font-black shrink-0">{persona.age}</div>
                <div>
                  <div className="font-black text-2xl uppercase">{persona.occupation}</div>
                  <div className="font-mono text-sm uppercase tracking-widest mt-1">Age: {persona.age}</div>
                </div>
              </div>
              <div className="p-6 flex-grow">
                <p className="font-mono italic text-lg border-l-[4px] border-black pl-4 mb-6 bg-gray-50 p-2">"{persona.quote}"</p>
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-black uppercase text-sm mb-2 border-b-2 border-black inline-block">Goals</h4>
                    <ul className="space-y-1">{persona.goals.map((g: string) => <li key={g} className="font-mono text-xs flex gap-2"><span className="text-green-600 font-bold">✓</span> {g}</li>)}</ul>
                  </div>
                  <div>
                    <h4 className="font-black uppercase text-sm mb-2 border-b-2 border-black inline-block">Pain Points</h4>
                    <ul className="space-y-1">{persona.painPoints.map((p: string) => <li key={p} className="font-mono text-xs flex gap-2"><Frown className="w-3 h-3 mt-0.5 text-red-500 shrink-0"/> {p}</li>)}</ul>
                  </div>
                </div>
                <div>
                  <h4 className="font-black uppercase text-sm mb-2 border-b-2 border-black inline-block">Scenario</h4>
                  <p className="font-mono text-sm">{persona.scenario}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 9. User Journey Map */}
      <SectionWrapper className="bg-white">
        <SectionHeading num={9} title="User Journey Map" />
        <ImagePlaceholder text="User Journey Map Diagram" height="h-64" />
        <div className="grid md:grid-cols-3 gap-6 font-mono">
          <div className="border-[3px] border-black p-4 bg-gray-50">
            <h4 className="font-black uppercase mb-2">Before</h4>
            <ul className="list-disc pl-4 text-sm space-y-1">{cs.userJourneyMap.before.map((b: string) => <li key={b}>{b}</li>)}</ul>
          </div>
          <div className="border-[3px] border-black p-4 bg-gray-50">
            <h4 className="font-black uppercase mb-2">During</h4>
            <ul className="list-disc pl-4 text-sm space-y-1">{cs.userJourneyMap.during.map((d: string) => <li key={d}>{d}</li>)}</ul>
          </div>
          <div className="border-[3px] border-black p-4 bg-gray-50">
            <h4 className="font-black uppercase mb-2">After</h4>
            <ul className="list-disc pl-4 text-sm space-y-1">{cs.userJourneyMap.after.map((a: string) => <li key={a}>{a}</li>)}</ul>
          </div>
        </div>
      </SectionWrapper>

      {/* 10. How Might We */}
      <SectionWrapper className="bg-primary/20">
        <SectionHeading num={10} title="How Might We" />
        <div className="grid md:grid-cols-3 gap-6">
          {cs.howMightWe.map((hmw: string, i: number) => (
            <div key={i} className="bg-white border-[3px] border-black p-6 brutal-shadow-sm font-mono text-lg font-bold">
              {hmw}
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 11 & 12. IA & User Flow */}
      <SectionWrapper>
        <SectionHeading num={11} title="Information Architecture" />
        <p className="font-mono text-lg mb-8">{cs.informationArchitecture.description}</p>
        <ImagePlaceholder text="Sitemap Diagram" height="h-64" />
        
        <div className="mt-16">
          <SectionHeading num={12} title="User Flow" />
          <div className="flex flex-wrap items-center gap-4 mt-8">
            {cs.userFlow.steps.map((step: string, i: number) => (
              <div key={step} className="flex items-center gap-4">
                <div className="border-[3px] border-black bg-white px-4 py-2 font-black uppercase text-sm brutal-shadow-sm text-center min-w-[120px]">{step}</div>
                {i < cs.userFlow.steps.length - 1 && <ArrowRight className="w-6 h-6 hidden md:block" />}
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 13 & 14. Key Decisions & Turning Points (Replaced generic Wireframes - Mistake 2) */}
      <SectionWrapper className="bg-gray-100">
        <SectionHeading num={13} title="Key Decisions" />
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {cs.keyDecisions?.map((dec: any, i: number) => (
            <div key={i} className="bg-white border-[4px] border-black p-6 brutal-shadow-sm">
              <div className="font-black uppercase text-xl mb-3 flex items-center gap-3">
                <PenTool className="w-6 h-6 text-blue-500" /> {dec.title}
              </div>
              <p className="font-mono text-base">{dec.description}</p>
            </div>
          ))}
        </div>

        <SectionHeading num={14} title="Turning Points" />
        <div className="space-y-6">
          {cs.turningPoints?.map((tp: any, i: number) => (
            <div key={i} className="bg-primary/20 border-l-[8px] border-primary p-6 md:p-8">
              <h4 className="font-black uppercase text-2xl mb-3">{tp.title}</h4>
              <p className="font-mono text-lg">{tp.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 15 & 16. Visual Direction & Design System */}
      <SectionWrapper className="bg-white">
        <SectionHeading num={15} title="Visual Direction" />
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="border-[3px] border-black p-6 bg-[#F4F4F0] brutal-shadow-sm">
            <h4 className="font-black uppercase mb-4">Typography</h4>
            <div className="text-4xl font-black mb-2">Aa</div>
            <div className="font-mono">{cs.visualDirection.typography}</div>
          </div>
          <div className="border-[3px] border-black p-6 bg-[#F4F4F0] brutal-shadow-sm">
            <h4 className="font-black uppercase mb-4">Colors</h4>
            <div className="flex flex-wrap gap-2">
              {cs.visualDirection.colorPalette.map((c: string) => <span key={c} className="px-2 py-1 text-xs border border-black bg-white font-mono">{c}</span>)}
            </div>
          </div>
          <div className="border-[3px] border-black p-6 bg-[#F4F4F0] brutal-shadow-sm">
            <h4 className="font-black uppercase mb-4">Principles</h4>
            <ul className="font-mono text-sm list-disc pl-4 space-y-1">
              {cs.visualDirection.designPrinciples.map((p: string) => <li key={p}>{p}</li>)}
            </ul>
          </div>
        </div>

        <SectionHeading num={16} title="Design System" />
        <p className="font-mono text-lg mb-8">{cs.designSystem.text}</p>
        <ImagePlaceholder text="Design System / Components" height="h-80" />
      </SectionWrapper>

      {/* 17. High Fidelity */}
      <SectionWrapper className="bg-secondary/10">
        <SectionHeading num={17} title="High Fidelity Design" />
        <div className="space-y-16 mt-8">
          {cs.highFidelity.screens.map((screen: any, i: number) => (
            <div key={i} className="border-[4px] border-black bg-white brutal-shadow overflow-hidden">
              <div className="bg-black text-white p-4 font-black uppercase text-xl flex items-center justify-between">
                {screen.title}
                <span className="text-xs bg-white text-black px-2 py-1">Screen {i + 1}</span>
              </div>
              <ImagePlaceholder text={`High Fidelity: ${screen.title}`} height="h-[500px]" />
              <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black border-t-[4px] border-black bg-gray-50">
                <div className="p-6">
                  <div className="font-black uppercase text-xs text-red-500 mb-2 tracking-widest">Problem Solved</div>
                  <div className="font-mono text-sm">{screen.problem}</div>
                </div>
                <div className="p-6">
                  <div className="font-black uppercase text-xs text-blue-500 mb-2 tracking-widest">Layout Decision</div>
                  <div className="font-mono text-sm">{screen.layout}</div>
                </div>
                <div className="p-6">
                  <div className="font-black uppercase text-xs text-green-600 mb-2 tracking-widest">How It Helps</div>
                  <div className="font-mono text-sm">{screen.help}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 18 & 19. Prototype & Usability Testing */}
      <SectionWrapper className="bg-black text-white">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <SectionHeading num={18} title="Prototype" />
            <ImagePlaceholder text="Interactive Prototype GIF" height="h-64" />
            <ul className="mt-6 space-y-2">
              {cs.prototype.features.map((f: string) => <li key={f} className="font-mono text-sm flex gap-2"><span className="text-primary">▸</span> {f}</li>)}
            </ul>
          </div>
          <div>
            <SectionHeading num={19} title="Usability Testing" />
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="border-[3px] border-white p-4">
                <div className="font-mono text-xs uppercase text-gray-400 mb-1">Completion Rate</div>
                <div className="text-4xl font-black text-primary">{cs.usabilityTesting.completionRate}</div>
              </div>
              <div className="border-[3px] border-white p-4">
                <div className="font-mono text-xs uppercase text-gray-400 mb-1">Avg Time</div>
                <div className="text-4xl font-black text-secondary">{cs.usabilityTesting.averageTime}</div>
              </div>
            </div>
            <h4 className="font-black uppercase text-xl mb-4">User Feedback</h4>
            <div className="space-y-3">
              {cs.usabilityTesting.feedback.map((fb: string, i: number) => (
                <div key={i} className="font-mono italic text-sm bg-white/10 p-3 border-l-[3px] border-white">"{fb}"</div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 20 & 21. Before vs After & Accessibility */}
      <SectionWrapper className="bg-white">
        <SectionHeading num={20} title="Before vs After" />
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {cs.beforeAfter.metrics.map((metric: any, i: number) => (
            <div key={i} className="border-[4px] border-black p-6 brutal-shadow-sm text-center bg-gray-50">
              <div className="font-black uppercase text-sm mb-4">{metric.label}</div>
              <div className="flex items-center justify-center gap-4">
                <div className="font-mono text-xl text-red-500 line-through">{metric.before}</div>
                <ArrowRight className="w-5 h-5" />
                <div className="font-mono text-2xl font-bold text-green-600">{metric.after}</div>
              </div>
            </div>
          ))}
        </div>
        
        <SectionHeading num={21} title="Accessibility" />
        <div className="flex flex-wrap gap-3">
          {cs.accessibility.points.map((pt: string) => (
            <span key={pt} className="border-[2px] border-black px-4 py-2 bg-blue-100 font-mono text-sm font-bold">{pt}</span>
          ))}
        </div>
      </SectionWrapper>

      {/* 22 & 23. Final Outcome & Impact */}
      <SectionWrapper className="bg-primary/20">
        <SectionHeading num={22} title="Final Outcome" />
        <p className="text-2xl md:text-3xl font-mono leading-relaxed bg-white border-[4px] border-black p-8 brutal-shadow mb-16">
          {cs.finalOutcome}
        </p>

        <SectionHeading num={23} title="Impact" />
        <div className="grid md:grid-cols-2 gap-6">
          {cs.impact.benefits.map((benefit: string, i: number) => (
            <div key={i} className="bg-white border-[3px] border-black p-6 brutal-shadow-sm flex items-center gap-4">
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-black text-xl shrink-0">{i + 1}</div>
              <div className="font-mono text-lg font-bold">{benefit}</div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 24. Structured Reflection (Mistake 6) */}
      <SectionWrapper>
        <SectionHeading num={24} title="Reflection" />
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-[#B8F0A0] border-[3px] border-black p-6 brutal-shadow-sm">
            <h4 className="font-black uppercase mb-4 flex items-center gap-2"><CheckCircle className="w-5 h-5"/> What I Learned</h4>
            <p className="font-mono text-sm leading-relaxed">{cs.reflection?.whatILearned || cs.reflection?.text}</p>
          </div>
          <div className="bg-[#FFD6A0] border-[3px] border-black p-6 brutal-shadow-sm">
            <h4 className="font-black uppercase mb-4 flex items-center gap-2"><Frown className="w-5 h-5"/> What Went Wrong</h4>
            <p className="font-mono text-sm leading-relaxed">{cs.reflection?.whatWentWrong || "No major issues reported during development."}</p>
          </div>
          <div className="bg-[#A0E4FF] border-[3px] border-black p-6 brutal-shadow-sm">
            <h4 className="font-black uppercase mb-4 flex items-center gap-2"><ListTodo className="w-5 h-5"/> What I'd Do Differently</h4>
            <p className="font-mono text-sm leading-relaxed">{cs.reflection?.whatIdDoDifferently || "I would spend more time in the exploratory phase."}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mt-16">
          <div>
            <SectionHeading num={25} title="Next Steps" />
            <ul className="space-y-4 font-mono text-lg">
              {cs.nextSteps.map((step: string) => <li key={step} className="flex gap-3"><ArrowRight className="w-5 h-5 mt-1" />{step}</li>)}
            </ul>
          </div>
          <div>
            <SectionHeading num={26} title="Key Takeaways" />
            <div className="grid gap-4">
              {cs.keyTakeaways.map((takeaway: string) => (
                <div key={takeaway} className="border-[3px] border-black bg-[#C8B8FF] p-4 font-black uppercase text-sm brutal-shadow-sm flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 shrink-0" /> {takeaway}
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 27. Thank You */}
      <SectionWrapper className="bg-black text-white text-center py-32">
        <div className="text-[80px] md:text-[120px] mb-8">🙏</div>
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8">Thank You<br/>For Reading.</h2>
        <p className="font-mono text-xl max-w-2xl mx-auto mb-12">If you'd like to discuss this project or collaborate on something new, I'd love to connect.</p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button onClick={onClose} className="border-[3px] border-white px-8 py-4 font-black uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
            Close Case Study
          </button>
          <button onClick={() => {
            const el = document.getElementById("top");
            if(el) el.scrollIntoView();
            onNext(nextProject);
          }} className="border-[3px] border-white bg-white text-black px-8 py-4 font-black uppercase tracking-widest hover:bg-transparent hover:text-white transition-colors">
            Next Project
          </button>
        </div>
      </SectionWrapper>
    </motion.div>
  );
}
