import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, Tag, Layers, Palette, Type } from "lucide-react";
import { graphicDesignProjects, GraphicDesignProject } from "@/lib/data";

export default function GraphicProjectModal({
  project,
  onClose,
  onNext,
}: {
  project: GraphicDesignProject;
  onClose: () => void;
  onNext: (p: GraphicDesignProject) => void;
}) {
  const currentIndex = graphicDesignProjects.findIndex((p) => p.slug === project.slug);
  const prevProject = graphicDesignProjects[(currentIndex - 1 + graphicDesignProjects.length) % graphicDesignProjects.length];
  const nextProject = graphicDesignProjects[(currentIndex + 1) % graphicDesignProjects.length];

  // Lock body scroll while modal is open
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", damping: 28, stiffness: 220 }}
      className="fixed inset-0 z-50 bg-[#F4F4F0] text-foreground font-sans selection:bg-primary selection:text-black overflow-hidden flex flex-col"
    >
      {/* Top Fixed Header Bar */}
      <div className="w-full bg-white border-b-[4px] border-black z-40 shrink-0 shadow-sm">
        <div className="flex justify-between items-center px-4 py-3 sm:px-8 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-black uppercase tracking-widest bg-black text-white px-3 py-1">
              Graphic Design Showcase
            </span>
            <span className="font-black uppercase tracking-tight text-sm sm:text-lg truncate max-w-[200px] sm:max-w-md text-black">
              {project.num} — {project.title}
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => onNext(prevProject)}
              className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs uppercase font-bold border-[2.5px] border-black bg-white px-3 py-1.5 hover:bg-primary transition-colors brutal-shadow-sm cursor-pointer text-black"
            >
              <ArrowLeft className="w-4 h-4" /> Prev
            </button>
            <button
              onClick={() => onNext(nextProject)}
              className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs uppercase font-bold border-[2.5px] border-black bg-white px-3 py-1.5 hover:bg-primary transition-colors brutal-shadow-sm cursor-pointer text-black"
            >
              Next <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase font-bold border-[2.5px] border-black bg-black text-white px-3.5 py-1.5 hover:bg-primary hover:text-black transition-colors brutal-shadow-sm cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" /> Close
            </button>
          </div>
        </div>
      </div>

      {/* Main Scrollable Content Area */}
      <div className="flex-1 w-full overflow-y-auto scroll-smooth">
        {/* Hero Section */}
        <section className="pt-10 md:pt-16 pb-14 px-4 sm:px-8 bg-white border-b-[4px] border-black">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs font-black uppercase tracking-widest border-[2px] border-black bg-primary px-3 py-1 text-black">
                  {project.category}
                </span>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  PROJECT {project.num} • {project.year}
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-black leading-none">
                {project.title}
              </h1>

              <p className="text-xl sm:text-2xl font-mono font-bold text-gray-700">
                {project.subtitle}
              </p>

              {/* Metadata Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 border-[3px] border-black bg-[#F4F4F0] p-4 font-mono text-xs brutal-shadow-sm">
                <div>
                  <span className="text-gray-500 block font-bold uppercase mb-0.5">Category</span>
                  <span className="font-black text-black text-sm">{project.category}</span>
                </div>
                <div>
                  <span className="text-gray-500 block font-bold uppercase mb-0.5">Client</span>
                  <span className="font-black text-black text-sm">{project.client || "Client Project"}</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-gray-500 block font-bold uppercase mb-0.5">Tools Used</span>
                  <span className="font-black text-black text-sm">{project.tools.slice(0, 3).join(", ")}</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5">
              <div className="border-[4px] border-black bg-white p-3 brutal-shadow overflow-hidden group">
                <div className="border-[3px] border-black overflow-hidden bg-black aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={`${project.title} Graphic Design Mockup`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge, Approach & Impact Grid */}
        <section className="py-14 px-4 sm:px-8 border-b-[4px] border-black bg-[#F4F4F0]">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <span className="font-mono text-xs font-black uppercase tracking-widest text-primary bg-black px-3.5 py-1.5 inline-block border-[2px] border-black mb-3">
                CASE STUDY BREAKDOWN
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-black">
                CHALLENGE, APPROACH & IMPACT
              </h2>
            </div>

            {/* 3 Core Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 01. Challenge Card */}
              <div className="bg-white border-[3.5px] border-black p-8 brutal-shadow flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-black uppercase tracking-widest bg-red-500 text-white px-3 py-1 border-[2px] border-black">
                      01 — CHALLENGE
                    </span>
                  </div>
                  <h3 className="text-xl font-black uppercase mb-3 text-black">The Problem Statement</h3>
                  <p className="font-mono text-sm leading-relaxed text-gray-800 font-medium">
                    {project.challenge}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t-[2px] border-black/10 font-mono text-xs text-gray-500 uppercase font-bold">
                  Friction & Requirement Definition
                </div>
              </div>

              {/* 02. Approach Card */}
              <div className="bg-white border-[3.5px] border-black p-8 brutal-shadow flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-black uppercase tracking-widest bg-blue-500 text-white px-3 py-1 border-[2px] border-black">
                      02 — APPROACH
                    </span>
                  </div>
                  <h3 className="text-xl font-black uppercase mb-3 text-black">Creative Strategy</h3>
                  <p className="font-mono text-sm leading-relaxed text-gray-800 font-medium">
                    {project.approach}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t-[2px] border-black/10 font-mono text-xs text-gray-500 uppercase font-bold">
                  Design Execution & Systems
                </div>
              </div>

              {/* 03. Impact Card */}
              <div className="bg-white border-[3.5px] border-black p-8 brutal-shadow flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-black uppercase tracking-widest bg-[#B8F0A0] text-black px-3 py-1 border-[2px] border-black">
                      03 — IMPACT
                    </span>
                  </div>
                  <h3 className="text-xl font-black uppercase mb-3 text-black">Measurable Outcome</h3>
                  <p className="font-mono text-sm leading-relaxed text-gray-800 font-medium">
                    {project.impact}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t-[2px] border-black/10 font-mono text-xs text-gray-500 uppercase font-bold">
                  Brand Transformation & Results
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Brand System & Specs Section */}
        <section className="py-14 px-4 sm:px-8 border-b-[4px] border-black bg-white">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left Column: Overview & Attributes */}
              <div className="lg:col-span-6 space-y-8">
                <div>
                  <span className="font-mono text-xs font-black uppercase tracking-widest text-black bg-primary px-3 py-1 inline-block border-[2px] border-black mb-3">
                    DESIGN OVERVIEW
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-black uppercase text-black mb-4">
                    Design Concept & Features
                  </h3>
                  <p className="font-mono text-base leading-relaxed text-gray-800 mb-6 font-medium">
                    {project.details.overview}
                  </p>
                </div>

                {/* Key Features List */}
                <div className="space-y-3">
                  <h4 className="font-mono text-xs uppercase font-black tracking-widest text-gray-500">
                    Key Solution Elements:
                  </h4>
                  <ul className="space-y-2.5 font-mono text-sm font-bold text-black">
                    {project.details.keyFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3 bg-[#F4F4F0] border-[2px] border-black p-3">
                        <CheckCircle2 className="w-5 h-5 text-black shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Brand Attributes Badges */}
                <div>
                  <h4 className="font-mono text-xs uppercase font-black tracking-widest text-gray-500 mb-3">
                    Brand Essence Keywords:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.details.brandAttributes.map((attr) => (
                      <span key={attr} className="font-mono text-xs font-black uppercase bg-black text-white px-3 py-1 border-[2px] border-black">
                        #{attr}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Color Palette & Typography Specifications */}
              <div className="lg:col-span-6 space-y-8">
                {/* Color Palette Card */}
                <div className="bg-[#F4F4F0] border-[3.5px] border-black p-6 brutal-shadow">
                  <div className="flex items-center gap-2 mb-4">
                    <Palette className="w-5 h-5 text-black" />
                    <h4 className="font-black uppercase text-lg text-black">Color Tokens & Swatches</h4>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {project.colorPalette.map((col) => (
                      <div key={col.hex} className="bg-white border-[2px] border-black p-2.5 text-center">
                        <div
                          className="w-full h-12 border-[2px] border-black mb-2 rounded-sm"
                          style={{ backgroundColor: col.hex }}
                        />
                        <div className="font-mono text-[11px] font-black text-black truncate">{col.name}</div>
                        <div className="font-mono text-[10px] font-bold text-gray-600">{col.hex}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Typography Card */}
                <div className="bg-[#F4F4F0] border-[3.5px] border-black p-6 brutal-shadow">
                  <div className="flex items-center gap-2 mb-4">
                    <Type className="w-5 h-5 text-black" />
                    <h4 className="font-black uppercase text-lg text-black">Typography System</h4>
                  </div>
                  <div className="space-y-3 font-mono text-xs">
                    {project.typography.map((type) => (
                      <div key={type.role} className="bg-white border-[2px] border-black p-3 flex justify-between items-center">
                        <span className="font-bold text-gray-500 uppercase">{type.role}</span>
                        <span className="font-black text-black text-sm">{type.font}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables Checklist */}
                <div className="bg-white border-[3.5px] border-black p-6 brutal-shadow">
                  <div className="flex items-center gap-2 mb-4">
                    <Layers className="w-5 h-5 text-black" />
                    <h4 className="font-black uppercase text-lg text-black">Shipped Deliverables</h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs font-bold">
                    {project.deliverables.map((item) => (
                      <div key={item} className="flex items-center gap-2 border-b border-black/10 py-1.5 text-black">
                        <span className="font-black text-primary">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Large Visual Gallery Section */}
        <section className="py-14 px-4 sm:px-8 border-b-[4px] border-black bg-black text-white">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800 pb-4">
              <div>
                <span className="font-mono text-xs font-black uppercase tracking-widest text-primary">
                  VISUAL PRESENTATION
                </span>
                <h3 className="text-2xl sm:text-4xl font-black uppercase text-white">
                  Full Asset Showcase
                </h3>
              </div>
              <span className="font-mono text-xs font-bold text-zinc-400 uppercase">
                High-Resolution Design Render
              </span>
            </div>

            <div className="border-[4px] border-white/20 bg-zinc-900 p-4 brutal-shadow">
              <img
                src={project.image}
                alt={`${project.title} Full Showcase`}
                className="w-full h-auto object-cover max-h-[650px]"
              />
            </div>
          </div>
        </section>

        {/* Footer Navigation */}
        <section className="bg-primary text-black py-16 text-center border-b-[4px] border-black">
          <div className="max-w-3xl mx-auto px-4 space-y-6">
            <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-black">
              Explore More Graphic Projects
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onNext(prevProject)}
                className="inline-flex items-center gap-2 font-black uppercase text-sm border-[3px] border-black bg-white text-black px-6 py-4 brutal-shadow hover:bg-black hover:text-white transition-colors cursor-pointer w-full sm:w-auto justify-center"
              >
                <ArrowLeft className="w-4 h-4" /> PREVIOUS: {prevProject.title}
              </button>

              <button
                onClick={() => onNext(nextProject)}
                className="inline-flex items-center gap-2 font-black uppercase text-sm border-[3px] border-black bg-white text-black px-6 py-4 brutal-shadow hover:bg-black hover:text-white transition-colors cursor-pointer w-full sm:w-auto justify-center"
              >
                NEXT: {nextProject.title} <ArrowRight className="w-4 h-4" />
              </button>

              <Link href="/contact" onClick={onClose}>
                <span className="inline-flex items-center gap-2 font-black uppercase text-sm border-[3px] border-black bg-black text-white px-6 py-4 brutal-shadow hover:bg-white hover:text-black transition-colors cursor-pointer w-full sm:w-auto justify-center">
                  Start a Brand Project <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
