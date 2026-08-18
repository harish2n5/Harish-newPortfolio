import { motion, useMotionValue, useSpring, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, Github, Linkedin, Mail, Phone, MessageCircle, Send,
  ExternalLink, PenTool, Code2, Layers, BarChart3, Smartphone,
  Globe, CheckCircle2, Zap, Clock, Shield, Sparkles, ArrowDown
} from "lucide-react";
import emailjs from "@emailjs/browser";
import Navbar from "@/components/Navbar";
import { projects as dataProjects } from "@/lib/data";
import CaseStudyModal from "./case-study";
import { Link001 } from "@/components/ui/skiper-ui/skiper40";

const EMAILJS_SERVICE_ID = "service_ij7iwe7";
const EMAILJS_TEMPLATE_ID = "template_u7yhrx9";
const EMAILJS_PUBLIC_KEY = "c0zI98N3aIBrqVcfq";

const HERO_IMAGE = "/hero-image.jpg";

const MARQUEE_TEXT = "UI/UX DESIGNER • FULL STACK DEVELOPER • DESIGN THAT SHIPS • PIXEL-PERFECT • ";

const uxMethods = [
  "User research", "Wireframing", "Prototyping", "Usability testing", "Information architecture", "Motion design"
];

const frontendSkills = [
  "React", "HTML5", "CSS3 / Tailwind"
];

const accessibilitySkills = [
  "WCAG 2.1 Guidelines", "Component Documentation", "Keyboard Navigation", "ARIA Attributes"
];

// Tool SVG Logos
const FigmaLogo = () => (
  <svg viewBox="0 0 38 57" className="w-4 h-4 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z" fill="#0ACF83"/>
    <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#1ABCFE"/>
    <path d="M0 28.5C0 23.2533 4.25329 19 9.5 19H19V38H9.5C4.25329 38 0 33.7467 0 28.5Z" fill="#A259FF"/>
    <path d="M0 9.5C0 4.25329 4.25329 0 9.5 0H19V19H9.5C4.25329 19 0 14.7467 0 9.5Z" fill="#F24E1E"/>
    <path d="M19 0H28.5C33.7467 0 38 4.25329 38 9.5C38 14.7467 33.7467 19 28.5 19H19V0Z" fill="#FF7262"/>
  </svg>
);

const IllustratorLogo = () => (
  <span className="w-5 h-5 bg-[#330000] text-[#FF9A00] border border-[#FF9A00] font-black text-[10px] rounded flex items-center justify-center font-mono shrink-0">
    Ai
  </span>
);

const PhotoshopLogo = () => (
  <span className="w-5 h-5 bg-[#001E36] text-[#31A8FF] border border-[#31A8FF] font-black text-[10px] rounded flex items-center justify-center font-sans shrink-0">
    Ps
  </span>
);

const AfterEffectsLogo = () => (
  <span className="w-5 h-5 bg-[#000033] text-[#9999FF] border border-[#9999FF] font-black text-[10px] rounded flex items-center justify-center font-sans shrink-0">
    Ae
  </span>
);

const FigJamLogo = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 fill-current text-[#A259FF]" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm0-8h-2V7h2v2zm4 8h-2V7h2v10z"/>
  </svg>
);

const CanvaLogo = () => (
  <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#00C4CC" />
    <path d="M14.5 8.5c-.8 0-1.5.4-1.9 1.1-.3.5-.4 1.2-.4 2 0 1.9.9 3.2 2.4 3.2.7 0 1.3-.3 1.7-.8l-1-1.1c-.2.3-.4.5-.7.5-.5 0-.8-.5-.8-1.2h4.5c.1-.4.1-.7.1-1.1 0-1.6-.9-2.6-2.9-2.6zm-1 2.3c0-.6.3-1 .8-1 .5 0 .8.4.8 1h-1.6z" fill="#FFF"/>
  </svg>
);

const ChatGPTLogo = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 fill-current text-white" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.04 6.04 0 0 0-6.51-2.9 6.07 6.07 0 0 0-4.99-2.43 6.06 6.06 0 0 0-5.8 4.24 6.04 6.04 0 0 0-4.14 3.01 6.01 6.01 0 0 0 .74 7.1 5.98 5.98 0 0 0 .51 4.91 6.04 6.04 0 0 0 6.52 2.9 6.05 6.05 0 0 0 4.98 2.43 6.06 6.06 0 0 0 5.81-4.24 6.04 6.04 0 0 0 4.13-3.01 6.01 6.01 0 0 0-.73-7.1zm-8.83 11.23a4.42 4.42 0 0 1-2.85-1.04l.15-.09 3.53-2.04a.79.79 0 0 0 .39-.68v-4.98l1.49.86v4.14a4.44 4.44 0 0 1-2.71 3.83zm-7.85-3.32a4.43 4.43 0 0 1-.54-3.01l.15.09 3.53 2.04a.78.78 0 0 0 .78 0l4.31-2.49v1.73l-3.59 2.07a4.44 4.44 0 0 1-4.64-.43zm-1.08-8.52a4.42 4.42 0 0 1 2.31-1.97v4.35a.78.78 0 0 0 .39.68l4.31 2.49-1.5.86-3.58-2.07a4.44 4.44 0 0 1-1.93-4.34zm10.74 3.55-4.31-2.49 1.49-.86 3.58 2.07a4.44 4.44 0 0 1 1.93 4.34 4.42 4.42 0 0 1-2.31 1.97v-4.35a.78.78 0 0 0-.38-.68zm2.66-2.22-.15-.09-3.53-2.04a.78.78 0 0 0-.78 0l-4.31 2.49v-1.73l3.59-2.07a4.44 4.44 0 0 1 5.18 3.44zM9.54 8.52a.79.79 0 0 0-.39.68v4.98l-1.49-.86v-4.14a4.44 4.44 0 0 1 4.7-3.9l-.15.09-3.53 2.04zm.79 2.48 2.17-1.25 2.17 1.25v2.5l-2.17 1.25-2.17-1.25v-2.5z"/>
  </svg>
);

const FigmaAILogo = () => (
  <div className="flex items-center gap-1 shrink-0">
    <FigmaLogo />
    <Sparkles className="w-3.5 h-3.5 text-[#A259FF] fill-[#A259FF]" />
  </div>
);

const LovableLogo = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 fill-current text-[#FF3366]" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

const RelumeLogo = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 fill-current text-black" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="8" height="8" rx="1.5" />
    <rect x="13" y="3" width="8" height="8" rx="1.5" />
    <rect x="3" y="13" width="8" height="8" rx="1.5" />
    <polygon points="13,13 21,13 21,21" />
  </svg>
);

const MidjourneyLogo = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 fill-current text-white" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L4 20h3.5l1.5-4h6l1.5 4H20L12 2zm-1.5 11L12 9l1.5 4h-3z"/>
  </svg>
);

const ClaudeLogo = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 fill-current text-[#D97706]" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"/>
  </svg>
);

const UizardLogo = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 fill-current text-[#7C3AED]" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.5 2v10a4.5 4.5 0 0 0 9 0V2h-3v10a1.5 1.5 0 0 1-3 0V2h-3zM2 17.5A4.5 4.5 0 0 0 6.5 22h11a4.5 4.5 0 0 0 4.5-4.5v-1h-20v1z"/>
  </svg>
);

const FramerAILogo = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 fill-current text-black" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 2h16v7h-8l8 8h-8v5l-8-8h8V9H4V2z"/>
  </svg>
);

const ReplitAILogo = () => (
  <div className="flex items-center gap-1 shrink-0">
    <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 fill-current text-[#F26207]" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 1.5A1.5 1.5 0 0 1 3.5 0h7A1.5 1.5 0 0 1 12 1.5V7a1.5 1.5 0 0 1-1.5 1.5H8.5V12h3.5A1.5 1.5 0 0 1 13.5 13.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3.5 20.5V15a1.5 1.5 0 0 1 1.5-1.5H8.5V8.5H3.5A1.5 1.5 0 0 1 2 7V1.5z"/>
    </svg>
    <Sparkles className="w-3.5 h-3.5 text-[#F26207] fill-[#F26207]" />
  </div>
);

const AntigravityLogo = () => (
  <div className="flex items-center gap-1 shrink-0">
    <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 fill-current text-[#4285F4]" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
    <Sparkles className="w-3.5 h-3.5 text-[#4285F4] fill-[#4285F4]" />
  </div>
);

const designTools = [
  { name: "Figma", icon: FigmaLogo, bg: "bg-white", text: "text-black", border: "border-black" },
  { name: "Illustrator", icon: IllustratorLogo, bg: "bg-[#260000]", text: "text-[#FF9A00]", border: "border-[#FF9A00]" },
  { name: "Photoshop", icon: PhotoshopLogo, bg: "bg-[#001E36]", text: "text-[#31A8FF]", border: "border-[#31A8FF]" },
  { name: "After Effects", icon: AfterEffectsLogo, bg: "bg-[#000033]", text: "text-[#9999FF]", border: "border-[#9999FF]" },
  { name: "FigJam", icon: FigJamLogo, bg: "bg-[#C8B8FF]", text: "text-black", border: "border-black" },
  { name: "Canva", icon: CanvaLogo, bg: "bg-[#00C4CC]", text: "text-white", border: "border-black" },
];

const aiTools = [
  { name: "Replit AI", icon: ReplitAILogo, bg: "bg-[#FFF4ED]", text: "text-black", border: "border-[#F26207]" },
  { name: "Antigravity", icon: AntigravityLogo, bg: "bg-[#EEF4FF]", text: "text-black", border: "border-[#4285F4]" },
  { name: "ChatGPT", icon: ChatGPTLogo, bg: "bg-[#10A37F]", text: "text-white", border: "border-black" },
  { name: "Figma AI", icon: FigmaAILogo, bg: "bg-white", text: "text-black", border: "border-black" },
  { name: "Lovable.ai", icon: LovableLogo, bg: "bg-[#FFF0F3]", text: "text-black", border: "border-[#FF3366]" },
  { name: "Relume AI", icon: RelumeLogo, bg: "bg-[#F4F4F0]", text: "text-black", border: "border-black" },
  { name: "Midjourney", icon: MidjourneyLogo, bg: "bg-[#1A1A2E]", text: "text-white", border: "border-black" },
  { name: "Claude Design", icon: ClaudeLogo, bg: "bg-[#FEF3C7]", text: "text-black", border: "border-[#D97706]" },
  { name: "Uizard", icon: UizardLogo, bg: "bg-[#F3E8FF]", text: "text-black", border: "border-[#7C3AED]" },
  { name: "Framer AI", icon: FramerAILogo, bg: "bg-white", text: "text-black", border: "border-black" },
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
      "React Frontend",
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
      "React Component Library",
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
        className="border-[3px] border-black border-t-0 px-8 py-5 font-black uppercase tracking-widest text-lg flex items-center justify-center gap-3 bg-primary text-black hover:bg-white brutal-shadow disabled:opacity-60 cursor-pointer"
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

  // Hero Section Scroll Animation Hooks
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Smooth scroll transformations for kinetic typography & parallax
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const heroRotate = useTransform(scrollYProgress, [0, 1], [0, -2]);

  const textXLine1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const textXLine2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const textXLine3 = useTransform(scrollYProgress, [0, 1], [0, -35]);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white text-foreground font-sans selection:bg-primary selection:text-black transition-colors">
      <Navbar />

      {/* ── 1. HERO SECTION ── */}
      <section
        ref={heroRef}
        id="hero"
        className="relative pt-10 sm:pt-14 md:pt-18 pb-12 sm:pb-16 border-b-[4px] border-black bg-[#F9F9F4] text-foreground overflow-hidden flex items-center min-h-[60vh]"
      >
        {/* Interactive Scroll-Driven Parallax Container */}
        <motion.div
          style={{ y: heroY, scale: heroScale, rotate: heroRotate }}
          className="relative z-10 max-w-6xl w-full mx-auto px-4 sm:px-6"
        >
          <div className="flex flex-col items-start gap-6 max-w-5xl">
            {/* Top Row: Kicker Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-widest bg-primary text-black border-[2.5px] border-black px-3.5 py-1.5 brutal-shadow"
            >
              <Sparkles className="w-3.5 h-3.5 fill-black" />
              <span>UI/UX Designer & Full Stack Developer</span>
            </motion.div>

            {/* Headline: I DESIGN. I CODE. I SHIP. (Horizontal next to next) */}
            <div className="perspective-[800px] w-full">
              <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-2 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.95]">
                {/* Item 1: I DESIGN. */}
                <motion.div style={{ x: textXLine1 }} className="flex text-black">
                  {"I DESIGN.".split("").map((char, ci) => (
                    <motion.span key={ci} variants={letterVariant} initial="hidden" animate="visible" className="inline-block">
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Item 2: I CODE. */}
                <motion.div style={{ x: textXLine2 }} className="flex text-secondary">
                  {"I CODE.".split("").map((char, ci) => (
                    <motion.span key={ci} variants={letterVariant} initial="hidden" animate="visible" className="inline-block">
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Item 3: I SHIP. */}
                <motion.div style={{ x: textXLine3 }} className="flex text-black">
                  {"I SHIP.".split("").map((char, ci) => (
                    <motion.span key={ci} variants={letterVariant} initial="hidden" animate="visible" className="inline-block">
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Description (Below Headline) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="border-[2.5px] border-black bg-white p-5 brutal-shadow max-w-2xl"
              style={{ boxShadow: "6px 6px 0px #000" }}
            >
              <p className="text-base sm:text-lg font-mono text-black leading-relaxed border-l-[4px] border-primary pl-4 font-medium">
                Bridging raw design instinct with engineering precision. I close the gap between what looks good and what works.
              </p>
            </motion.div>

            {/* CTA Buttons (Below Description) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              className="flex gap-4 flex-wrap items-center pt-2"
            >
              <motion.a
                href="#work"
                data-testid="button-hero-work"
                whileHover={{ x: -3, y: -3, boxShadow: "6px 6px 0px #000" }}
                whileTap={{ x: 1, y: 1, boxShadow: "2px 2px 0px #000" }}
                className="inline-flex items-center gap-2.5 font-bold uppercase text-sm sm:text-base border-[2.5px] border-black bg-primary text-black px-6 py-3.5 brutal-shadow cursor-pointer hover:bg-black hover:text-white transition-colors"
              >
                See Work <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="/contact"
                data-testid="button-hero-contact"
                whileHover={{ x: -3, y: -3, boxShadow: "6px 6px 0px #000" }}
                whileTap={{ x: 1, y: 1, boxShadow: "2px 2px 0px #000" }}
                className="inline-flex items-center gap-2.5 font-bold uppercase text-sm sm:text-base border-[2.5px] border-black bg-secondary text-black px-6 py-3.5 brutal-shadow cursor-pointer hover:bg-black hover:text-white transition-colors"
              >
                Hire Me
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator Badge */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-4 right-6 hidden md:flex items-center gap-2 border-[2px] border-black bg-white px-3 py-1.5 font-mono text-xs font-bold uppercase brutal-shadow z-20"
        >
          <span>Scroll to explore</span>
          <ArrowDown className="w-4 h-4 text-black animate-bounce" />
        </motion.div>
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

          {/* Grid Layout: Left = Bio Story text, Right = Hero Image / Portrait Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Bio Story Text (Left 7 cols) */}
            <div className="lg:col-span-7 space-y-6">
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
            </div>

            {/* Profile Image Box (Right 5 cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative border-[4px] border-black bg-white p-3 brutal-shadow max-w-sm w-full"
                style={{ boxShadow: "8px 8px 0px #000" }}
              >
                <div className="border-[3px] border-black overflow-hidden bg-primary relative aspect-[4/5] w-full">
                  <img
                    src={HERO_IMAGE}
                    alt="Harish - UI/UX Designer & Full Stack Developer"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#B8F0A0] border-[2.5px] border-black px-3 py-1 font-mono text-xs font-black uppercase text-black brutal-shadow">
                    HARISH • AVAILABLE FOR HIRE
                  </div>
                </div>
              </motion.div>
            </div>
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
              Tools I use to bend pixels and bytes to my will. Combining design intuition, AI acceleration, and modern engineering standards.
            </motion.p>
          </div>

          <div className="flex flex-col gap-10">
            {/* Design Tools (With Logos) */}
            <div>
              <h3 className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-4 block border-b-[2px] border-black/10 pb-2">Design Tools</h3>
              <div className="flex flex-wrap gap-3.5 items-center">
                {designTools.map((tool) => (
                  <motion.div
                    key={tool.name}
                    whileHover={{ y: -4, x: -4, boxShadow: "5px 5px 0px #000" }}
                    className={`border-[3px] ${tool.border} px-4 py-2.5 text-sm md:text-base font-bold ${tool.bg} ${tool.text} brutal-shadow flex items-center gap-2.5 cursor-default`}
                  >
                    <tool.icon />
                    <span className="font-sans font-black tracking-tight">{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* AI Tools Section (With Logos) */}
            <div>
              <h3 className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2 border-b-[2px] border-black/10 pb-2">
                <span>AI & Automation Tools</span>
                <Sparkles className="w-4 h-4 text-primary fill-primary" />
              </h3>
              <div className="flex flex-wrap gap-3.5 items-center">
                {aiTools.map((tool) => (
                  <motion.div
                    key={tool.name}
                    whileHover={{ y: -4, x: -4, boxShadow: "5px 5px 0px #000" }}
                    className={`border-[3px] ${tool.border} px-4 py-2.5 text-sm md:text-base font-bold ${tool.bg} ${tool.text} brutal-shadow flex items-center gap-2.5 cursor-default`}
                  >
                    <tool.icon />
                    <span className="font-sans font-black tracking-tight">{tool.name}</span>
                  </motion.div>
                ))}
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

            {/* Accessibility & QA */}
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
