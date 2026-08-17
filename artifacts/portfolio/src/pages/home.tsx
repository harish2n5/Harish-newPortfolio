import { motion, useMotionValue, useSpring, AnimatePresence, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, Github, Linkedin, Mail, Phone, MessageCircle, Send,
  ExternalLink, PenTool, Code2, Layers, BarChart3, Smartphone,
  Globe, CheckCircle2, Zap, Clock, Shield, Sparkles, Terminal, Code
} from "lucide-react";
import emailjs from "@emailjs/browser";
import Navbar from "@/components/Navbar";
import { projects as dataProjects } from "@/lib/data";
import CaseStudyModal from "./case-study";
import { Link001 } from "@/components/ui/skiper-ui/skiper40";
import { PortfolioCanvas } from "@/components/ui/skiper-ui/skiper39";

const EMAILJS_SERVICE_ID = "service_ij7iwe7";
const EMAILJS_TEMPLATE_ID = "template_u7yhrx9";
const EMAILJS_PUBLIC_KEY = "c0zI98N3aIBrqVcfq";

const HERO_IMAGE = "/hero-image.jpg";

const MARQUEE_TEXT = "UI/UX DESIGNER • FULL STACK DEVELOPER • DESIGN THAT SHIPS • PIXEL-PERFECT • ";

const uxMethods = [
  "User research", "Wireframing", "Prototyping", "Usability testing", "Information architecture", "Motion design"
];

const frontendSkills = [
  "React", "JavaScript", "TypeScript", "Next.js", "HTML5", "CSS3 / Tailwind"
];

const accessibilitySkills = [
  "WCAG 2.1 Guidelines", "Component Documentation", "Keyboard Navigation", "ARIA Attributes"
];

const stats = [
  { value: 1, suffix: "+", label: "Year Experience" },
  { value: 5, suffix: "+", label: "Projects Delivered" },
  { value: 10, suffix: "+", label: "UI Prototypes" },
  { value: 100, suffix: "%", label: "Ownership & Drive" },
];

const services = [
  {
    icon: PenTool,
    title: "UI/UX Design",
    tag: "Design",
    color: "bg-primary",
    description:
      "End-to-end product design — from user research to a polished, tested interface. I design systems that feel inevitable.",
    deliverables: [
      "User Research & Journey Mapping",
      "Wireframes & Rapid Prototypes",
      "High-fidelity UI in Figma",
      "Interactive Prototypes",
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
      "Production-grade web applications built with modern stacks. From API design to deployment — clean architecture typed end-to-end.",
    deliverables: [
      "React / Next.js Frontend",
      "Node.js / Express Backend",
      "PostgreSQL & Database Design",
      "REST or GraphQL APIs",
      "Auth, Payments & Integrations",
      "CI/CD & Cloud Deployment",
    ],
  },
  {
    icon: Layers,
    title: "Design Systems",
    tag: "Foundation",
    color: "bg-[#B8F0A0]",
    description:
      "A single source of truth for your product's visual language. Built in Figma and React — tokens, components, living docs.",
    deliverables: [
      "Token Architecture (color, type, space)",
      "Figma Component Library",
      "React Component Library (TypeScript)",
      "Documentation & Guidelines",
      "Accessibility & WCAG Audit",
      "Team Adoption Guide",
    ],
  },
  {
    icon: Smartphone,
    title: "Responsive & Mobile-First",
    tag: "Cross-Platform",
    color: "bg-[#C8B8FF]",
    description:
      "Every product works on every screen. Not as an afterthought — mobile is a first-class citizen from day one.",
    deliverables: [
      "Mobile-First CSS Architecture",
      "Breakpoint Strategy & Grids",
      "Touch Interaction Design",
      "Performance Budgeting",
      "PWA Capabilities",
      "Cross-browser Testing",
    ],
  },
  {
    icon: BarChart3,
    title: "Product Consulting",
    tag: "Strategy",
    color: "bg-primary",
    description:
      "Auditing existing products to uncover conversion friction, tech debt, and usability gaps with an actionable roadmap.",
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
      "Building high-converting landing pages and launch-ready MVPs on timelines designed to protect your startup's runway.",
    deliverables: [
      "Conversion-focused Landing Pages",
      "Copywriting & Content Strategy",
      "CMS & Database Integration",
      "Analytics & Lead Capture",
      "Interactive CTA Flows",
      "Rapid Launch Schedule",
    ],
  },
];

const differentiators = [
  {
    icon: Zap,
    title: "No Translation Layer",
    body: "Most teams lose weeks in design-dev handoff. I do both, which means what gets designed gets built accurately the first time.",
  },
  {
    icon: Shield,
    title: "Production Standards",
    body: "I don't build demos. Every deliverable is production-ready: typed, tested, accessible, and documented.",
  },
  {
    icon: Clock,
    title: "On Time, Every Time",
    body: "Deadlines aren't suggestions. I scope carefully, communicate early when requirements shift, and deliver on schedule.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.2 }
  }
};

const letterVariant = {
  hidden: { y: 80, opacity: 0, rotateX: -40 },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: { type: "spring" as const, stiffness: 180, damping: 14 }
  }
};

const slideUp = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as [number, number, number, number] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

function useMagnet(strength = 0.3) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  };
  const onLeave = () => { x.set(0); y.set(0); };
  return { springX, springY, onMove, onLeave };
}

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !inView.current) {
        inView.current = true;
        let start = 0;
        const step = Math.ceil(target / 40);
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(timer); }
          else setCount(start);
        }, 30);
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function SectionWrapper({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={staggerContainer} className={className}>
      {children}
    </motion.div>
  );
}

function ProjectCard({
  project,
  index,
  onSelectCaseStudy,
}: {
  project: typeof dataProjects[0];
  index: number;
  onSelectCaseStudy: (p: typeof dataProjects[0]) => void;
}) {
  const mag = useMagnet(0.15);
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      style={{ x: mag.springX, y: mag.springY }}
      onMouseMove={mag.onMove}
      onMouseLeave={mag.onLeave}
      className="group border-[4px] border-black bg-white brutal-shadow p-6 md:p-8 flex flex-col justify-between h-full transition-colors"
      data-testid={`project-card-${index}`}
    >
      <div>
        <div className="flex items-center justify-between mb-3 border-b-[2px] border-black/10 pb-3">
          <span className="font-mono text-xs uppercase font-bold tracking-widest text-muted-foreground">{project.subtitle}</span>
          <span className="font-mono text-[11px] font-black uppercase px-2.5 py-0.5 border border-black bg-primary text-black">{project.year || "2024"}</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-3 text-black">{project.title}</h3>
        
        <p className="font-mono text-sm leading-relaxed text-gray-700 font-medium mb-6">
          {project.shortDesc}
        </p>

        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.slice(0, 3).map((tag: string) => (
              <span key={tag} className="border border-black px-2.5 py-0.5 font-mono text-[11px] font-bold uppercase bg-[#F4F4F0] text-black">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-4 border-t-[2px] border-black/10 mt-auto">
        <motion.button
          onClick={() => onSelectCaseStudy(project)}
          whileHover={{ x: -2, y: -2, boxShadow: "4px 4px 0px #000" }}
          whileTap={{ x: 1, y: 1, boxShadow: "1px 1px 0px #000" }}
          className="inline-flex items-center gap-2 font-bold uppercase text-xs sm:text-sm border-[3px] border-black bg-primary text-black px-4 py-2.5 brutal-shadow hover:bg-black hover:text-white transition-colors cursor-pointer"
        >
          View Case Study <ArrowRight className="w-4 h-4" />
        </motion.button>
        <Link001
          href={project.link || "https://github.com/harish2n5/Harish-newPortfolio"}
          className="font-bold uppercase text-xs sm:text-sm border-[3px] border-black bg-white text-black px-4 py-2.5 brutal-shadow hover:bg-secondary transition-colors"
        >
          Live Site
        </Link001>
      </div>
    </motion.div>
  );
}

function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-0" data-testid="form-contact">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <input
          name="from_name"
          required
          placeholder="Your Name"
          data-testid="input-contact-name"
          className="border-[3px] border-black px-6 py-4 font-mono bg-white text-black placeholder:text-muted-foreground focus:outline-none focus:bg-primary transition-colors md:border-r-[1.5px]"
        />
        <input
          name="reply_to"
          type="email"
          required
          placeholder="Your Email"
          data-testid="input-contact-email"
          className="border-[3px] border-black border-t-0 md:border-t-[3px] md:border-l-[1.5px] px-6 py-4 font-mono bg-white text-black placeholder:text-muted-foreground focus:outline-none focus:bg-primary transition-colors"
        />
      </div>
      <textarea
        name="message"
        required
        rows={5}
        placeholder="Tell me about your project..."
        data-testid="input-contact-message"
        className="border-[3px] border-black border-t-0 px-6 py-4 font-mono bg-white text-black placeholder:text-muted-foreground focus:outline-none focus:bg-primary transition-colors resize-none"
      />
      <motion.button
        type="submit"
        disabled={status === "sending"}
        data-testid="button-contact-submit"
        whileHover={status !== "sending" ? { x: -4, y: -4, boxShadow: "8px 8px 0px #000" } : {}}
        whileTap={status !== "sending" ? { x: 1, y: 1, boxShadow: "2px 2px 0px #000" } : {}}
        className="border-[3px] border-black border-t-0 px-8 py-5 font-black uppercase tracking-widest text-lg flex items-center justify-center gap-3 bg-black text-primary brutal-shadow disabled:opacity-60 cursor-pointer"
      >
        {status === "sending" ? "Sending..." : status === "success" ? "Message Sent!" : status === "error" ? "Failed — Try Again" : (
          <><Send className="w-5 h-5" /> Send Message</>
        )}
      </motion.button>
    </form>
  );
}

export default function Home() {
  const [activeProject, setActiveProject] = useState<typeof dataProjects[0] | null>(null);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background text-foreground font-sans selection:bg-primary selection:text-black transition-colors">
      <Navbar />

      {/* ── 1. HERO SECTION (Solid Black + Portfolio Canvas Skiper39 Animation) ── */}
      <section id="hero" className="relative py-16 sm:py-24 md:py-28 border-b-[4px] border-black bg-black text-white overflow-hidden min-h-[75vh] flex items-center">
        
        {/* Skiper39 Animated Portfolio Canvas Floor */}
        <PortfolioCanvas className="absolute inset-0 h-full w-full pointer-events-none opacity-85 z-0" />

        {/* Animated Ambient Light Orbs */}
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-primary/30 blur-[100px] pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 right-10 w-96 h-96 rounded-full bg-secondary/30 blur-[120px] pointer-events-none"
        />

        {/* Animated Cyber Grid Overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#CCFF00_1px,transparent_1px)] [background-size:24px_24px]"
        />

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-6xl w-full mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            {/* Kicker badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-bold uppercase tracking-widest bg-primary text-black border-[3px] border-black px-4 py-2 brutal-shadow mb-6"
            >
              <Sparkles className="w-4 h-4 fill-black" />
              <span>UI/UX Designer & Full Stack Developer</span>
            </motion.div>

            {/* Kinetic High-Contrast Typography */}
            <div className="perspective-[800px] mb-6">
              {[
                { text: "I DESIGN.", color: "text-white" },
                { text: "I CODE.", color: "text-secondary" },
                { text: "I SHIP.", color: "text-primary" },
              ].map((line, li) => (
                <motion.div
                  key={li}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delayChildren: li * 0.2 }}
                  className={`flex overflow-hidden text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.88] ${line.color}`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {line.text.split("").map((char, ci) => (
                    <motion.span key={ci} variants={letterVariant} className="inline-block">
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* Bio Box */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="border-[3px] border-white/20 bg-black/85 backdrop-blur-md p-6 brutal-shadow max-w-xl mb-8"
              style={{ boxShadow: "6px 6px 0px #CCFF00" }}
            >
              <p className="text-base sm:text-lg font-mono text-gray-200 leading-relaxed border-l-[4px] border-primary pl-4">
                Bridging raw design instinct with engineering precision. I close the gap between what looks good and what works.
              </p>
            </motion.div>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
              className="flex gap-4 flex-wrap items-center"
            >
              <motion.a
                href="#work"
                data-testid="button-hero-work"
                whileHover={{ x: -4, y: -4, boxShadow: "8px 8px 0px #CCFF00" }}
                whileTap={{ x: 1, y: 1, boxShadow: "2px 2px 0px #CCFF00" }}
                className="inline-flex items-center gap-3 font-bold uppercase text-base sm:text-lg border-[3px] border-primary bg-primary text-black px-8 py-4 brutal-shadow cursor-pointer hover:bg-white transition-colors"
              >
                See Work <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="/contact"
                data-testid="button-hero-contact"
                whileHover={{ x: -4, y: -4, boxShadow: "8px 8px 0px #FF5252" }}
                whileTap={{ x: 1, y: 1, boxShadow: "2px 2px 0px #FF5252" }}
                className="inline-flex items-center gap-3 font-bold uppercase text-base sm:text-lg border-[3px] border-secondary bg-secondary text-black px-8 py-4 brutal-shadow cursor-pointer hover:bg-white transition-colors"
              >
                Hire Me
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. MARQUEE BANNER ─────────────────────────────────────── */}
      <div className="w-full border-y-[3px] border-black bg-primary py-5 overflow-hidden flex whitespace-nowrap relative z-10 transform -rotate-1 origin-center scale-105">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 14, repeat: Infinity }}
          className="flex font-black text-3xl sm:text-4xl tracking-tight uppercase text-black"
        >
          {[...Array(4)].map((_, i) => (
            <span key={i} className="px-4">{MARQUEE_TEXT}</span>
          ))}
        </motion.div>
      </div>

      {/* ── 3. STATS BAR ──────────────────────────────────────────── */}
      <section className="border-b-[3px] border-black bg-white transition-colors">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 sm:p-10 text-center border-r-[3px] border-black last:border-r-0 md:[&:nth-child(2)]:border-r-[3px]"
              data-testid={`stat-home-${i}`}
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-2 text-black">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="font-mono text-xs sm:text-sm uppercase tracking-widest text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 4. ABOUT SECTION (`#about`) ───────────────────────────── */}
      <section id="about" className="px-4 sm:px-6 py-16 sm:py-24 border-b-[3px] border-black bg-white transition-colors">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <SectionWrapper>
            <motion.p variants={slideUp} className="font-mono text-sm sm:text-base uppercase tracking-widest mb-3 text-muted-foreground">
              — About Me
            </motion.p>
            <motion.h2 variants={slideUp} className="text-4xl sm:text-6xl lg:text-8xl font-black uppercase tracking-tighter mb-12 text-black">
              I Build <span className="text-secondary">Experiences.</span>
            </motion.h2>
          </SectionWrapper>

          {/* Bio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Story text */}
            <SectionWrapper className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-4 border-b-[3px] border-black pb-3 text-black">The Story</h3>
              <p className="font-mono text-base sm:text-lg leading-relaxed text-gray-800">
                I started as a designer obsessed with aesthetics, then realised that beautiful products without solid engineering are just pretty ideas.
              </p>
              <p className="font-mono text-base sm:text-lg leading-relaxed text-gray-800">
                So I learned to code. Not just enough to hand off specs, but enough to build the entire thing myself — from database schema to pixel-level animation.
              </p>
              <p className="font-mono text-base sm:text-lg leading-relaxed text-gray-800 mb-8">
                Today I work with startups and product teams who need someone who speaks both languages fluently. No translation layer. No miscommunication. Just great products.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ x: -3, y: -3, boxShadow: "6px 6px 0px #000" }}
                whileTap={{ x: 1, y: 1, boxShadow: "2px 2px 0px #000" }}
                className="inline-flex items-center gap-3 font-bold uppercase border-[3px] border-black bg-primary text-black px-8 py-4 brutal-shadow hover:bg-black hover:text-white transition-colors cursor-pointer"
              >
                Work With Me <ArrowRight className="w-5 h-5" />
              </motion.a>
            </SectionWrapper>

            {/* Profile Photo Display */}
            <SectionWrapper className="flex justify-center md:justify-end">
              <div className="relative max-w-sm w-full">
                <div className="absolute -bottom-3 -right-3 w-full aspect-[4/5] border-[4px] border-black bg-primary" />
                <div
                  className="relative border-[4px] border-black overflow-hidden aspect-[4/5] bg-muted z-10"
                  style={{ boxShadow: "8px 8px 0px #000" }}
                >
                  <img
                    src={HERO_IMAGE}
                    alt="Harish"
                    className="w-full h-full object-cover object-center"
                    data-testid="img-about-photo"
                  />
                  <div className="absolute bottom-0 left-0 right-0 border-t-[4px] border-black bg-white px-5 py-3 flex items-center justify-between">
                    <span className="font-black uppercase tracking-tight text-lg text-black">Harish</span>
                    <span className="font-mono text-xs border-[2px] border-black px-3 py-1 bg-primary uppercase font-bold text-black">UI/UX + Dev</span>
                  </div>
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* ── 5. THE STACK / TOOLKIT ────────────────────────────────── */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 border-b-[3px] border-black bg-background transition-colors">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-6 text-black"
            >
              The Stack.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="font-mono text-base sm:text-lg max-w-md text-gray-800"
            >
              Tools I use to bend pixels and bytes to my will. Combining design intuition with modern engineering standards.
            </motion.p>
          </div>

          <div className="flex flex-col gap-10">
            {/* Design Tools */}
            <div>
              <h3 className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-4 block border-b-[2px] border-black/10 pb-2">Design Tools</h3>
              <div className="flex flex-wrap gap-3.5 items-center">
                {/* Figma */}
                <motion.div
                  whileHover={{ y: -4, x: -4, boxShadow: "5px 5px 0px #000" }}
                  className="border-[3px] border-black px-4 py-2.5 text-sm md:text-base font-bold bg-black text-white brutal-shadow flex items-center gap-2.5 cursor-default"
                >
                  <div className="flex items-center -space-x-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F24E1E]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF7262]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#A259FF]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#1ABCFE]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0ACF83]" />
                  </div>
                  <span className="font-sans font-black tracking-tight text-white text-base">Figma</span>
                </motion.div>

                {/* Adobe Ai */}
                <motion.div
                  whileHover={{ y: -4, x: -4, boxShadow: "5px 5px 0px #000" }}
                  className="border-[3px] border-[#FF9A00] bg-[#260000] text-[#FF9A00] px-4 py-2.5 text-sm md:text-base font-bold brutal-shadow flex items-center gap-2 cursor-default"
                >
                  <span className="bg-[#FF9A00] text-[#260000] font-black text-xs px-1.5 py-0.5 rounded font-mono">Ai</span>
                  <span className="font-sans font-black tracking-wider text-[#FF9A00]">Illustrator</span>
                </motion.div>

                {/* Adobe Ps */}
                <motion.div
                  whileHover={{ y: -4, x: -4, boxShadow: "5px 5px 0px #000" }}
                  className="border-[3px] border-[#31A8FF] bg-[#001E36] text-[#31A8FF] px-4 py-2.5 text-sm md:text-base font-bold brutal-shadow flex items-center gap-2 cursor-default"
                >
                  <span className="bg-[#31A8FF] text-[#001E36] font-black text-xs px-1.5 py-0.5 rounded font-sans">Ps</span>
                  <span className="font-sans font-black tracking-wider text-[#31A8FF]">Photoshop</span>
                </motion.div>

                {/* Adobe Ae */}
                <motion.div
                  whileHover={{ y: -4, x: -4, boxShadow: "5px 5px 0px #000" }}
                  className="border-[3px] border-[#9999FF] bg-[#000033] text-[#9999FF] px-4 py-2.5 text-sm md:text-base font-bold brutal-shadow flex items-center gap-2 cursor-default"
                >
                  <span className="bg-[#9999FF] text-[#000033] font-black text-xs px-1.5 py-0.5 rounded font-sans">Ae</span>
                  <span className="font-sans font-black tracking-wider text-[#9999FF]">After Effects</span>
                </motion.div>

                {/* FigJam */}
                <motion.div
                  whileHover={{ y: -4, x: -4, boxShadow: "5px 5px 0px #000" }}
                  className="border-[3px] border-black bg-[#C8B8FF] text-black px-4 py-2.5 text-sm md:text-base font-bold brutal-shadow flex items-center gap-2 cursor-default"
                >
                  <span className="font-sans font-black tracking-tight">FigJam</span>
                </motion.div>

                {/* Canva */}
                <motion.div
                  whileHover={{ y: -4, x: -4, boxShadow: "5px 5px 0px #000" }}
                  className="border-[3px] border-black bg-[#00C4CC] text-white px-4 py-2.5 text-sm md:text-base font-bold brutal-shadow flex items-center gap-2 cursor-default"
                >
                  <span className="font-sans font-black tracking-tight">Canva</span>
                </motion.div>
              </div>
            </div>

            {/* Frontend & Code */}
            <div>
              <h3 className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-4 block border-b-[2px] border-black/10 pb-2">Frontend & Code</h3>
              <div className="flex flex-wrap gap-3">
                {frontendSkills.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ y: -4, x: -4, boxShadow: "4px 4px 0px #000" }}
                    className="border-[3px] border-black px-4 py-2 text-sm md:text-base font-bold bg-secondary text-black brutal-shadow hover:bg-white transition-colors cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* UX Methods */}
            <div>
              <h3 className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-4 block border-b-[2px] border-black/10 pb-2">UX Methods</h3>
              <div className="flex flex-wrap gap-3">
                {uxMethods.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ y: -4, x: -4, boxShadow: "4px 4px 0px #000" }}
                    className="border-[3px] border-black px-4 py-2 text-sm md:text-base font-bold bg-white text-black brutal-shadow hover:bg-primary transition-colors cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Accessibility */}
            <div>
              <h3 className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-4 block border-b-[2px] border-black/10 pb-2">Accessibility & QA</h3>
              <div className="flex flex-wrap gap-3">
                {accessibilitySkills.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ y: -4, x: -4, boxShadow: "4px 4px 0px #000" }}
                    className="border-[3px] border-black px-4 py-2 text-sm md:text-base font-bold bg-[#C8B8FF] text-black brutal-shadow hover:bg-white transition-colors cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. SERVICES SECTION (`#services`) ─────────────────────── */}
      <section id="services" className="px-4 sm:px-6 py-16 sm:py-24 border-b-[3px] border-black bg-white transition-colors">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <SectionWrapper>
            <motion.p variants={slideUp} className="font-mono text-sm sm:text-base uppercase tracking-widest mb-3 text-muted-foreground">
              — What I Do
            </motion.p>
            <motion.h2 variants={slideUp} className="text-4xl sm:text-6xl lg:text-8xl font-black uppercase tracking-tighter mb-6 text-black">
              Services <span className="text-secondary">That Ship.</span>
            </motion.h2>
            <motion.p variants={slideUp} className="text-lg sm:text-xl font-mono max-w-2xl border-l-[6px] border-primary pl-4 sm:pl-6 mb-16 text-gray-800">
              A full creative-to-code service. Whether you need a designer, a developer, or someone who thinks in both — I've got you.
            </motion.p>
          </SectionWrapper>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ x: -4, y: -4, boxShadow: "8px 8px 0px #000" }}
                className="border-[3px] border-black bg-background brutal-shadow flex flex-col transition-colors"
                data-testid={`service-card-${i}`}
              >
                <div className={`${svc.color} border-b-[3px] border-black p-6 flex items-center justify-between`}>
                  <div className="w-12 h-12 border-[3px] border-black bg-white flex items-center justify-center">
                    <svc.icon className="w-6 h-6 text-black" />
                  </div>
                  <span className="font-mono text-xs font-bold uppercase tracking-widest border-[2px] border-black bg-white px-3 py-1 text-black">
                    {svc.tag}
                  </span>
                </div>
                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4 text-black">{svc.title}</h3>
                  <p className="font-mono text-sm leading-relaxed text-gray-700 mb-6 flex-grow">{svc.description}</p>
                  <ul className="space-y-2.5 pt-4 border-t-[2px] border-black/10">
                    {svc.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 font-mono text-xs text-gray-800">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-black" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Differentiators ("Why Hire Me?") */}
          <div className="pt-12 border-t-[3px] border-black">
            <SectionWrapper>
              <motion.h3 variants={slideUp} className="text-3xl sm:text-5xl font-black uppercase tracking-tighter mb-12 text-black">
                Why Hire Me?
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {differentiators.map((d, i) => (
                  <motion.div
                    key={d.title}
                    variants={slideUp}
                    className="border-[3px] border-black bg-background p-8 brutal-shadow transition-colors"
                    data-testid={`differentiator-${i}`}
                  >
                    <div className="w-14 h-14 border-[3px] border-black bg-primary flex items-center justify-center mb-6">
                      <d.icon className="w-7 h-7 text-black" />
                    </div>
                    <h4 className="text-xl font-black uppercase tracking-tight mb-3 text-black">{d.title}</h4>
                    <p className="font-mono text-sm leading-relaxed text-gray-800">{d.body}</p>
                  </motion.div>
                ))}
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* ── 7. SELECTED WORK (`#work`) ────────────────────────────── */}
      <section id="work" className="px-4 sm:px-6 py-16 sm:py-24 border-b-[3px] border-black bg-background transition-colors">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-16"
          >
            <div>
              <p className="font-mono text-sm sm:text-base uppercase tracking-widest mb-3 text-muted-foreground">— Portfolio</p>
              <h2 className="text-4xl sm:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-none text-black">Selected Work.</h2>
            </div>
            <motion.a
              href="/work"
              data-testid="link-home-all-work"
              whileHover={{ x: -3, y: -3, boxShadow: "6px 6px 0px #000" }}
              className="inline-flex items-center gap-2 font-bold uppercase border-[3px] border-black bg-primary text-black px-6 py-3 brutal-shadow hover:bg-black hover:text-white transition-colors"
            >
              All Work <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {dataProjects.slice(0, 2).map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={i}
                onSelectCaseStudy={(p) => setActiveProject(p)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. CONTACT SECTION (`#contact`) ───────────────────────── */}
      <section id="contact" className="px-4 sm:px-6 py-16 sm:py-24 border-t-[3px] border-black bg-white transition-colors">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Info Side */}
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-mono text-sm uppercase tracking-widest mb-4 text-muted-foreground"
            >
              — Get In Touch
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none mb-8 text-black"
            >
              Let's Build<br />
              <span className="text-secondary">Something.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-mono text-base sm:text-lg max-w-sm mb-12 text-gray-800"
            >
              Got a project in mind? Drop me a message — I reply within 24 hours. First conversation is always free.
            </motion.p>

            {/* Direct Contact Links with Skiper UI */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              <Link001
                href="mailto:harish2n5@gmail.com"
                className="flex items-center gap-4 border-[3px] border-black bg-background px-6 py-4 font-bold uppercase brutal-shadow transition-colors text-black hover:bg-primary"
              >
                <Mail className="w-5 h-5 shrink-0" />
                harish2n5@gmail.com
              </Link001>

              <Link001
                href="tel:+919843327279"
                className="flex items-center gap-4 border-[3px] border-black bg-background px-6 py-4 font-bold uppercase brutal-shadow transition-colors text-black hover:bg-primary"
              >
                <Phone className="w-5 h-5 shrink-0" />
                +91 98433 27279
              </Link001>

              <Link001
                href="https://wa.me/9843327279"
                className="flex items-center gap-4 border-[3px] border-black bg-background px-6 py-4 font-bold uppercase brutal-shadow transition-colors text-black hover:bg-[#B8F0A0]"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                WhatsApp Me
              </Link001>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              className="flex gap-4 mt-8"
            >
              {[
                { icon: Github, href: "https://github.com/harish2n5", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/harish-a-034437341", label: "LinkedIn" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: -3, y: -3, boxShadow: "6px 6px 0px #000" }}
                  whileTap={{ x: 1, y: 1, boxShadow: "2px 2px 0px #000" }}
                  className="p-4 border-[3px] border-black bg-background brutal-shadow hover:bg-primary transition-colors text-black"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="border-[4px] border-black" style={{ boxShadow: "8px 8px 0px #000" }}>
              <div className="bg-primary border-b-[4px] border-black px-8 py-5">
                <h3 className="text-2xl font-black uppercase tracking-tight text-black">Send a Message</h3>
              </div>
              <div className="bg-background">
                <ContactForm />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study Modal */}
      <AnimatePresence>
        {activeProject && (
          <CaseStudyModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
            onNext={(p) => setActiveProject(p)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
