import { useParams, Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import { projects } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

function SectionWrapper({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp} className={className}>
      {children}
    </motion.div>
  );
}

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const projectIndex = projects.findIndex(p => p.slug === slug);
  const project = projects[projectIndex];
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center font-mono">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">404 - Project Not Found</h1>
          <Link href="/work">
            <a className="border-2 border-black px-4 py-2 hover:bg-primary transition-colors">Go Back to Work</a>
          </Link>
        </div>
      </div>
    );
  }

  const nextProject = projects[(projectIndex + 1) % projects.length];
  const cs = project.caseStudy as any;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-black">
      <Navbar />

      {/* Hero Header */}
      <section className={`${project.accentColor} border-b-[4px] border-black pt-32 pb-16 px-4 sm:px-6`}>
        <div className="max-w-6xl mx-auto">
          <Link href="/work">
            <a className="inline-flex items-center gap-2 font-mono text-sm uppercase font-bold border-2 border-black bg-white px-3 py-1 mb-12 hover:bg-black hover:text-white transition-colors brutal-shadow-sm">
              <ArrowLeft className="w-4 h-4" /> Back to Work
            </a>
          </Link>

          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="font-mono text-sm uppercase tracking-widest border-[3px] border-black bg-white px-4 py-2 inline-block mb-6 brutal-shadow-sm">
              {project.category} • {project.year}
            </span>
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
              {project.title}
            </h1>
            <p className="text-xl md:text-3xl font-mono max-w-3xl leading-relaxed border-l-[6px] border-black pl-6 bg-white/50 py-2">
              {project.shortDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Cover Image */}
      <div className="w-full border-b-[4px] border-black bg-black">
        <img src={project.image} alt={project.title} className="w-full h-auto max-h-[80vh] object-cover mix-blend-screen opacity-90" />
      </div>

      {/* Metadata Grid */}
      <section className="border-b-[4px] border-black bg-white">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x-[3px] divide-y-[3px] md:divide-y-0 divide-black">
          {[
            { label: "Role", value: project.role },
            { label: "Duration", value: project.duration },
            { label: "Platform", value: project.category === "Mobile" ? "iOS & Android" : "Web Application" },
            { label: "Live Link", value: <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-primary transition-colors">Visit <ExternalLink className="w-4 h-4" /></a> },
          ].map((meta, i) => (
            <div key={i} className="p-6 md:p-8">
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">{meta.label}</div>
              <div className="font-black text-lg md:text-xl uppercase">{meta.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies / Tools Marquee */}
      <div className="w-full border-b-[4px] border-black bg-black text-white py-4 overflow-hidden flex whitespace-nowrap">
        <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ ease: "linear", duration: 20, repeat: Infinity }} className="flex font-mono text-xl tracking-tight uppercase items-center gap-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-8 items-center">
              {project.tags.map(tag => (
                <span key={tag} className="flex items-center gap-8">
                  {tag} <span className="text-primary text-2xl">•</span>
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dynamic Content Sections */}
      <div className="max-w-5xl mx-auto py-16 md:py-32 px-4 sm:px-6 space-y-24">
        
        {cs.customSections ? (
          // Handle Custom Sections
          cs.customSections.map((sec: any, idx: number) => (
            <SectionWrapper key={sec.title} className="relative">
              <div className="absolute -left-4 -top-8 text-[120px] font-black text-black/5 select-none -z-10">{idx + 1}</div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8 pb-4 border-b-[4px] border-primary inline-block">
                {sec.title}
              </h2>
              <div className="font-mono text-lg md:text-xl leading-relaxed max-w-4xl p-8 border-[3px] border-black bg-white brutal-shadow">
                {sec.content}
              </div>
            </SectionWrapper>
          ))
        ) : (
          // Handle Structured Content
          <>
            {cs.problem && (
              <SectionWrapper className="relative">
                <div className="absolute -left-4 -top-8 text-[120px] font-black text-black/5 select-none -z-10">1</div>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-10 pb-4 border-b-[4px] border-primary inline-block">Context & Problem</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-8 border-[3px] border-black bg-white brutal-shadow">
                    <h3 className="font-black text-2xl uppercase mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 border-[2px] border-black bg-secondary flex items-center justify-center shrink-0 font-black text-sm">?</span>
                      The Challenge
                    </h3>
                    <p className="font-mono text-lg leading-relaxed">{cs.problem.statement}</p>
                  </div>
                  <div className="p-8 border-[3px] border-black bg-white brutal-shadow">
                    <h3 className="font-black text-2xl uppercase mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 border-[2px] border-black bg-[#B8F0A0] flex items-center justify-center shrink-0 font-black text-sm">!</span>
                      Who Faces It
                    </h3>
                    <p className="font-mono text-lg leading-relaxed">{cs.problem.whoFacesIt}</p>
                  </div>
                </div>
              </SectionWrapper>
            )}

            {cs.research && (
              <SectionWrapper className="relative">
                <div className="absolute -left-4 -top-8 text-[120px] font-black text-black/5 select-none -z-10">2</div>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-10 pb-4 border-b-[4px] border-primary inline-block">Research & Discovery</h2>
                
                <div className="space-y-6">
                  <div className="p-6 border-[3px] border-black bg-white flex flex-col md:flex-row gap-6 items-start md:items-center brutal-shadow-sm">
                    <div className="bg-primary/20 p-4 border-[2px] border-black shrink-0 w-full md:w-64">
                      <strong className="uppercase font-black text-xl">Interviews</strong>
                    </div>
                    <p className="font-mono text-lg">{cs.research.userInterviews}</p>
                  </div>
                  <div className="p-6 border-[3px] border-black bg-white flex flex-col md:flex-row gap-6 items-start md:items-center brutal-shadow-sm">
                    <div className="bg-secondary/20 p-4 border-[2px] border-black shrink-0 w-full md:w-64">
                      <strong className="uppercase font-black text-xl">Surveys</strong>
                    </div>
                    <p className="font-mono text-lg">{cs.research.surveys}</p>
                  </div>
                  {cs.research.competitorAnalysis !== "N/A" && (
                    <div className="p-6 border-[3px] border-black bg-white flex flex-col md:flex-row gap-6 items-start md:items-center brutal-shadow-sm">
                      <div className="bg-[#B8F0A0]/30 p-4 border-[2px] border-black shrink-0 w-full md:w-64">
                        <strong className="uppercase font-black text-xl">Competitor Analysis</strong>
                      </div>
                      <p className="font-mono text-lg">{cs.research.competitorAnalysis}</p>
                    </div>
                  )}
                </div>
              </SectionWrapper>
            )}

            {cs.personas && (
              <SectionWrapper className="relative">
                <div className="absolute -left-4 -top-8 text-[120px] font-black text-black/5 select-none -z-10">3</div>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-10 pb-4 border-b-[4px] border-primary inline-block">Define: Personas</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { title: "Goals", items: cs.personas.goals, color: "bg-primary" },
                    { title: "Pain Points", items: cs.personas.painPoints, color: "bg-secondary" },
                    { title: "Motivations", items: cs.personas.motivations, color: "bg-[#B8F0A0]" }
                  ].map((block, i) => (
                    <div key={i} className="border-[3px] border-black bg-white brutal-shadow flex flex-col">
                      <div className={`${block.color} border-b-[3px] border-black p-4`}>
                        <strong className="uppercase font-black text-xl tracking-tight">{block.title}</strong>
                      </div>
                      <ul className="p-6 space-y-4 flex-1">
                        {block.items.map((item: string) => (
                          <li key={item} className="flex items-start gap-3 font-mono text-base">
                            <span className={`w-4 h-4 border-2 border-black ${block.color} shrink-0 mt-1`}></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </SectionWrapper>
            )}

            {cs.designSystem && (
              <SectionWrapper className="relative">
                <div className="absolute -left-4 -top-8 text-[120px] font-black text-black/5 select-none -z-10">4</div>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-10 pb-4 border-b-[4px] border-primary inline-block">Design System & UI</h2>
                
                <div className="border-[3px] border-black p-8 bg-white brutal-shadow space-y-8">
                  <div>
                    <h3 className="font-black uppercase text-xl mb-3 border-b-2 border-black inline-block pb-1">Colors</h3>
                    <p className="font-mono text-lg">{cs.designSystem.colors}</p>
                  </div>
                  <div>
                    <h3 className="font-black uppercase text-xl mb-3 border-b-2 border-black inline-block pb-1">Typography</h3>
                    <p className="font-mono text-lg">{cs.designSystem.typography}</p>
                  </div>
                  <div>
                    <h3 className="font-black uppercase text-xl mb-3 border-b-2 border-black inline-block pb-1">Components</h3>
                    <p className="font-mono text-lg">{cs.designSystem.components}</p>
                  </div>
                </div>
              </SectionWrapper>
            )}

            {cs.impact && (
              <SectionWrapper className="relative">
                <div className="absolute -left-4 -top-8 text-[120px] font-black text-black/5 select-none -z-10">5</div>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-10 pb-4 border-b-[4px] border-primary inline-block">Outcome & Reflection</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-[#A0E4FF] border-[4px] border-black p-8 brutal-shadow">
                    <h3 className="text-black uppercase text-2xl font-black mb-4 flex items-center gap-3">
                      <span className="bg-white border-[2px] border-black p-1">📈</span>
                      Metrics Improved
                    </h3>
                    <p className="font-mono text-xl leading-relaxed">{cs.impact.metricsImproved}</p>
                  </div>
                  <div className="bg-[#C8B8FF] border-[4px] border-black p-8 brutal-shadow">
                    <h3 className="text-black uppercase text-2xl font-black mb-4 flex items-center gap-3">
                      <span className="bg-white border-[2px] border-black p-1">🚀</span>
                      Future Enhancements
                    </h3>
                    <p className="font-mono text-xl leading-relaxed">{cs.impact.futureEnhancements}</p>
                  </div>
                </div>
              </SectionWrapper>
            )}
          </>
        )}
      </div>

      {/* Next Project Footer */}
      <Link href={`/work/${nextProject.slug}`}>
        <a className="block border-t-[4px] border-black bg-primary hover:bg-black hover:text-white transition-colors duration-300 group cursor-pointer">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-32 flex flex-col items-center justify-center text-center">
            <span className="font-mono text-sm font-bold uppercase tracking-widest border-2 border-current px-4 py-2 mb-8 group-hover:bg-white group-hover:text-black transition-colors">
              Next Project
            </span>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4 group-hover:scale-105 transition-transform duration-500">
              {nextProject.title}
            </h2>
            <div className="w-16 h-16 border-[3px] border-current flex items-center justify-center rounded-full mt-8 group-hover:translate-x-4 transition-transform duration-300">
              <ArrowRight className="w-8 h-8" />
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
