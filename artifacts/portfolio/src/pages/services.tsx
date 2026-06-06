import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  PenTool, Code2, Layers, BarChart3, Smartphone, Globe,
  CheckCircle2, ArrowRight, Zap, Clock, Shield
} from "lucide-react";
import Navbar from "@/components/Navbar";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as [number, number, number, number] } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const services = [
  {
    icon: PenTool,
    title: "UI/UX Design",
    tag: "Design",
    color: "bg-primary",
    description:
      "End-to-end product design — from chaotic user research to a polished, tested interface. I design systems that feel inevitable, not bolted on.",
    deliverables: [
      "User Research & Journey Mapping",
      "Wireframes & Rapid Prototypes",
      "High-fidelity UI in Figma",
      "Interactive Prototype for Handoff",
      "Design System & Component Library",
      "Usability Testing & Iteration",
    ],
  },
  {
    icon: Code2,
    title: "Full Stack Development",
    tag: "Engineering",
    color: "bg-secondary",
    description:
      "Production-grade web applications built with modern stacks. From API design to deployment — clean architecture, typed end-to-end, zero magic.",
    deliverables: [
      "React / Next.js Frontend",
      "Node.js / Express Backend",
      "PostgreSQL Database Design",
      "REST or GraphQL APIs",
      "Auth, Payments & Third-party Integrations",
      "CI/CD & Vercel / Railway Deployment",
    ],
  },
  {
    icon: Layers,
    title: "Design Systems",
    tag: "Foundation",
    color: "bg-[#B8F0A0]",
    description:
      "A single source of truth for your product's visual language. Built in Figma and React — tokens, components, documentation, living and versioned.",
    deliverables: [
      "Token Architecture (color, type, spacing)",
      "Component Library in Figma",
      "React Component Library (TypeScript)",
      "Storybook Documentation",
      "Accessibility Audit & WCAG Compliance",
      "Adoption Guide for Your Team",
    ],
  },
  {
    icon: Smartphone,
    title: "Responsive & Mobile-First",
    tag: "Cross-Platform",
    color: "bg-[#C8B8FF]",
    description:
      "Every product I build works on every screen. Not as an afterthought — mobile is a first-class citizen from day one.",
    deliverables: [
      "Mobile-First CSS Architecture",
      "Breakpoint Strategy & Grid Systems",
      "Touch Interaction Design",
      "Performance Budgeting",
      "PWA Capabilities",
      "Cross-browser QA",
    ],
  },
  {
    icon: BarChart3,
    title: "Product Consulting",
    tag: "Strategy",
    color: "bg-primary",
    description:
      "You have an idea or an existing product that isn't performing. I come in, audit, identify the gaps, and give you a clear, actionable roadmap.",
    deliverables: [
      "UX & Conversion Audit",
      "Competitive Landscape Analysis",
      "Heuristic Evaluation Report",
      "Prioritised Improvement Roadmap",
      "Design & Tech Debt Assessment",
      "Executive Summary Presentation",
    ],
  },
  {
    icon: Globe,
    title: "Landing Pages & MVPs",
    tag: "Fast Lane",
    color: "bg-secondary",
    description:
      "Speed matters in early-stage products. I build MVPs and landing pages that look funded and convert, on a timeline that doesn't cost you runway.",
    deliverables: [
      "Single-page or Multi-section Landing",
      "Conversion-focused Copywriting Structure",
      "CMS Integration (if needed)",
      "Analytics & Heatmap Setup",
      "Email Capture & CTA Flows",
      "Live in under 2 weeks",
    ],
  },
];

const differentiators = [
  {
    icon: Zap,
    title: "No Translation Layer",
    body: "Most teams lose weeks in design-dev handoff. I do both, which means what gets designed gets built — accurately, first time.",
  },
  {
    icon: Shield,
    title: "Production Standards",
    body: "I don't build demos. Every deliverable is production-ready: typed, tested, accessible, and documented.",
  },
  {
    icon: Clock,
    title: "On Time, Every Time",
    body: "Deadlines aren't suggestions. I scope carefully, communicate early when scope shifts, and deliver when I say I will.",
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

export default function Services() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />

      {/* Hero */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 md:py-36 border-b-[3px] border-black relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-72 h-72 border-[3px] border-black bg-primary opacity-20 rotate-12" />
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="font-mono text-lg uppercase tracking-widest mb-4 text-muted-foreground"
          >
            — What I Do
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.9] mb-8 sm:mb-10"
          >
            Services<br />
            <span className="text-secondary">That Ship.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base sm:text-xl md:text-2xl font-mono max-w-2xl border-l-[6px] border-primary pl-4 sm:pl-6"
          >
            A full creative-to-code service. Whether you need a designer, a developer, or someone who thinks in both — I've got you.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 py-16 sm:py-32 border-b-[3px] border-black bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionWrapper>
            <motion.h2 variants={fadeUp} className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-16">
              What I Offer.
            </motion.h2>
          </SectionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ x: -4, y: -4, boxShadow: "8px 8px 0px #000" }}
                className="border-[3px] border-black bg-background brutal-shadow flex flex-col"
                data-testid={`service-card-${i}`}
              >
                <div className={`${svc.color} border-b-[3px] border-black p-6 flex items-center justify-between`}>
                  <div className="w-12 h-12 border-[3px] border-black bg-white flex items-center justify-center">
                    <svc.icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs font-bold uppercase tracking-widest border-[2px] border-black bg-white px-3 py-1">
                    {svc.tag}
                  </span>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4">{svc.title}</h3>
                  <p className="font-mono text-sm leading-relaxed mb-8 flex-grow">{svc.description}</p>
                  <ul className="space-y-2">
                    {svc.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-3 font-mono text-xs">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-black" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Me */}
      <section className="px-4 sm:px-6 py-16 sm:py-32 border-b-[3px] border-black bg-background">
        <div className="max-w-6xl mx-auto">
          <SectionWrapper>
            <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-16">
              Why Hire Me?
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {differentiators.map((d, i) => (
                <motion.div
                  key={d.title}
                  variants={fadeUp}
                  className="border-[3px] border-black bg-white p-8 brutal-shadow"
                  data-testid={`differentiator-${i}`}
                >
                  <div className="w-14 h-14 border-[3px] border-black bg-primary flex items-center justify-center mb-6">
                    <d.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tight mb-4">{d.title}</h3>
                  <p className="font-mono text-sm leading-relaxed">{d.body}</p>
                </motion.div>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Process teaser */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 border-b-[3px] border-black bg-primary">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
              Curious How I Work?
            </h2>
            <p className="font-mono text-lg max-w-lg">
              From first call to final deploy — my process is transparent, structured, and built to keep you in control at every step.
            </p>
          </div>
          <motion.a
            href="/work"
            data-testid="link-services-process"
            whileHover={{ x: -4, y: -4, boxShadow: "8px 8px 0px #000" }}
            whileTap={{ x: 1, y: 1, boxShadow: "2px 2px 0px #000" }}
            className="shrink-0 inline-flex items-center gap-3 font-bold uppercase text-xl border-[4px] border-black bg-white px-10 py-5 brutal-shadow"
          >
            See My Process <ArrowRight className="w-6 h-6" />
          </motion.a>
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
            Ready to Start?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="font-mono text-lg mb-10 max-w-lg mx-auto"
          >
            Drop me a message and let's talk about what you're building. First call is always free.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            href="mailto:harish2n5@gmail.com"
            data-testid="link-services-email"
            className="inline-flex items-center gap-3 font-bold uppercase text-xl border-[4px] border-black bg-white px-10 py-5 brutal-shadow hover:bg-primary transition-colors"
          >
            harish2n5@gmail.com <ArrowRight className="w-6 h-6" />
          </motion.a>
        </div>
      </section>
    </div>
  );
}
