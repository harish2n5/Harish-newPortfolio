import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Github, Linkedin, Mail, Phone, MessageCircle, Send, ExternalLink, FileDown } from "lucide-react";
import emailjs from "@emailjs/browser";
import project1Url from "../assets/project-1.png";
import project2Url from "../assets/project-2.png";
import project3Url from "../assets/project-3.png";
import project4Url from "../assets/project-4.png";
import Navbar from "@/components/Navbar";

const EMAILJS_SERVICE_ID = "service_ij7iwe7";
const EMAILJS_TEMPLATE_ID = "template_u7yhrx9";
const EMAILJS_PUBLIC_KEY = "c0zI98N3aIBrqVcfq";

const HERO_IMAGE = "https://i.postimg.cc/XqvfT30M/Whats-App-Image-2026-04-27-at-4-34-38-PM.jpg";

const MARQUEE_TEXT = "UI/UX DESIGNER • FULL STACK DEVELOPER • DESIGN THAT SHIPS • PIXEL-PERFECT • ";

const uxMethods = [
  "User research", "Wireframing", "Prototyping", "Usability testing", "Information architecture", "Motion design"
];

const designTools = [
  "Figma (Auto Layout, Components, Design Systems)", "Photoshop", "Illustrator", "Canva", "Adobe After Effects", "FigJam"
];

const frontendSkills = [
  "React", "JavaScript", "HTML", "CSS"
];

const accessibilitySkills = [
  "WCAG guidelines", "component documentation"
];

const projects = [
  {
    title: "Enterprise Event Management System",
    subtitle: "UI/UX Case Study",
    description: "Designed an end-to-end UI/UX solution for an enterprise-level event management system, including admin dashboards and workflows.",
    image: project1Url,
    color: "bg-[#FFD6A0]",
    link: "https://github.com/harish2n5/Harish-newPortfolio"
  },
  {
    title: "Paytm Mobile App",
    subtitle: "UX Redesign for Improved Usability",
    description: "Redesigned an existing mobile application to enhance usability and user engagement by identifying UX issues through heuristic evaluation.",
    image: project2Url,
    color: "bg-[#A0E4FF]",
    link: "https://github.com/harish2n5/Harish-newPortfolio"
  },
  {
    title: "CareerFlow AI",
    subtitle: "Job Search Platform",
    description: "An AI-powered platform for job matching, ATS optimization, and interview prep.",
    image: project1Url,
    color: "bg-primary",
    link: "https://github.com/harish2n5/Harish-newPortfolio"
  },
  {
    title: "MediSync",
    subtitle: "Healthcare Management",
    description: "A unified healthcare ecosystem for appointments, prescriptions, and health tracking.",
    image: project2Url,
    color: "bg-secondary",
    link: "https://github.com/harish2n5/Harish-newPortfolio"
  },
  {
    title: "TrackMint",
    subtitle: "Business Operations SaaS",
    description: "An all-in-one business management platform for inventory, sales, and analytics.",
    image: project3Url,
    color: "bg-[#B8F0A0]",
    link: "https://github.com/harish2n5/Harish-newPortfolio"
  },
  {
    title: "EventSphere",
    subtitle: "Event Management",
    description: "A centralized platform for event requests, approvals, budgeting, and tracking.",
    image: project4Url,
    color: "bg-[#C8B8FF]",
    link: "https://github.com/harish2n5/Harish-newPortfolio"
  },
  {
    title: "Scalable Design System",
    subtitle: "& Component Library",
    description: "Created a scalable design system to ensure visual consistency and faster product development across multiple screens and platforms.",
    image: project3Url,
    color: "bg-primary",
    link: "https://github.com/harish2n5/Harish-newPortfolio"
  }
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

const slideIn = {
  hidden: { x: -60, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] } }
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

function FloatBox({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -12, 0], rotate: [0, 4, -4, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

function CursorFollower() {
  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);
  const springX = useSpring(cursorX, { stiffness: 120, damping: 18 });
  const springY = useSpring(cursorY, { stiffness: 120, damping: 18 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 w-8 h-8 border-[3px] border-black bg-primary z-[9999] mix-blend-multiply"
      style={{ x: springX, y: springY }}
    />
  );
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

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
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
      className="group border-[4px] border-black bg-background brutal-shadow overflow-hidden flex flex-col"
      data-testid={`project-card-${index}`}
    >
      <div className={`h-64 border-b-[4px] border-black ${project.color} relative overflow-hidden`}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover border-[3px] border-black transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-8 flex flex-col flex-grow bg-white">
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">{project.subtitle}</span>
        <h3 className="text-3xl font-black uppercase tracking-tight mb-4">{project.title}</h3>
        <p className="font-mono text-base flex-grow mb-8">{project.description}</p>
        <div className="flex gap-6 mt-auto">
          <motion.a
            href="/work"
            className="self-start flex items-center gap-2 font-bold uppercase tracking-wider group/btn"
            whileHover={{ x: 4 }}
          >
            Case Study
            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
          </motion.a>
          <motion.a
            href={project.link}
            target="_blank"
            className="self-start flex items-center gap-2 font-bold uppercase tracking-wider group/btn"
            whileHover={{ x: 4 }}
          >
            Live Site
            <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
          </motion.a>
        </div>
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
        className="border-[3px] border-black border-t-0 px-8 py-5 font-black uppercase tracking-widest text-lg flex items-center justify-center gap-3 bg-black text-primary brutal-shadow disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : status === "success" ? "Message Sent!" : status === "error" ? "Failed — Try Again" : (
          <><Send className="w-5 h-5" /> Send Message</>
        )}
      </motion.button>
    </form>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background text-foreground font-sans selection:bg-primary selection:text-black">
      <CursorFollower />
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="px-6 py-16 md:py-28 relative overflow-hidden border-b-[3px] border-black">
        <FloatBox delay={0} className="absolute top-8 right-64 w-16 h-16 border-[3px] border-black bg-primary hidden md:block" />
        <FloatBox delay={1.5} className="absolute bottom-12 left-8 w-12 h-12 border-[3px] border-black bg-secondary hidden md:block" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="font-mono text-sm md:text-base uppercase tracking-widest mb-6 text-muted-foreground"
            >
              — Designer & Developer
            </motion.p>

            <div className="perspective-[800px]">
              {[
                { text: "I DESIGN.", color: "text-foreground" },
                { text: "I CODE.", color: "text-secondary" },
                { text: "I SHIP.", color: "text-foreground" },
              ].map((line, li) => (
                <motion.div
                  key={li}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delayChildren: li * 0.25 }}
                  className={`flex overflow-hidden text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] ${line.color}`}
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

            <motion.p
              variants={slideIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.9 }}
              className="text-base md:text-lg font-mono max-w-md border-l-[6px] border-primary pl-5 mt-8 mb-8"
            >
              Bridging raw design instinct with engineering precision. I close the gap between what looks good and what works.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, type: "spring", stiffness: 200 }}
              className="flex gap-4 flex-wrap"
            >
              <motion.a
                href="/work"
                data-testid="button-hero-work"
                whileHover={{ x: -4, y: -4, boxShadow: "8px 8px 0px #000" }}
                whileTap={{ x: 1, y: 1, boxShadow: "2px 2px 0px #000" }}
                className="inline-flex items-center gap-3 font-bold uppercase border-[3px] border-black bg-foreground text-background px-7 py-4 brutal-shadow"
              >
                See Work <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#contact"
                data-testid="button-hero-contact"
                whileHover={{ x: -4, y: -4, boxShadow: "8px 8px 0px #000" }}
                whileTap={{ x: 1, y: 1, boxShadow: "2px 2px 0px #000" }}
                className="inline-flex items-center gap-3 font-bold uppercase border-[3px] border-black bg-primary px-7 py-4 brutal-shadow"
              >
                Hire Me
              </motion.a>
            </motion.div>
          </div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="relative flex justify-center md:justify-end"
          >
            {/* Decorative offset block */}
            <div className="absolute -bottom-3 -right-3 w-full max-w-sm aspect-[4/5] border-[4px] border-black bg-primary" />
            {/* Photo frame */}
            <div className="relative border-[4px] border-black max-w-sm w-full aspect-[4/5] overflow-hidden bg-muted z-10"
              style={{ boxShadow: "8px 8px 0px #000" }}
            >
              <img
                src={HERO_IMAGE}
                alt="Harish — UI/UX Designer & Full Stack Developer"
                className="w-full h-full object-cover object-center"
                data-testid="img-hero-photo"
              />
              {/* Name badge */}
              <div className="absolute bottom-0 left-0 right-0 border-t-[4px] border-black bg-white px-5 py-3 flex items-center justify-between">
                <span className="font-black uppercase tracking-tight text-lg">Harish</span>
                <span className="font-mono text-xs border-[2px] border-black px-3 py-1 bg-primary uppercase">Designer & Dev</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Marquee ──────────────────────────────────────────────── */}
      <div className="w-full border-y-[3px] border-black bg-primary py-5 overflow-hidden flex whitespace-nowrap relative z-10 transform -rotate-1 origin-center scale-105">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 14, repeat: Infinity }}
          className="flex font-black text-4xl tracking-tight uppercase"
        >
          {[...Array(4)].map((_, i) => (
            <span key={i} className="px-4">{MARQUEE_TEXT}</span>
          ))}
        </motion.div>
      </div>

      {/* ── Stats ────────────────────────────────────────────────── */}
      <section className="border-b-[3px] border-black bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { value: 4, suffix: "+", label: "Years Experience" },
            { value: 30, suffix: "+", label: "Projects Shipped" },
            { value: 15, suffix: "+", label: "Happy Clients" },
            { value: 100, suffix: "%", label: "Passion Driven" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 text-center border-r-[3px] border-black last:border-r-0 md:[&:nth-child(2)]:border-r-[3px]"
              data-testid={`stat-home-${i}`}
            >
              <div className="text-5xl font-black tracking-tighter mb-2">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Skills ───────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 py-16 sm:py-32 border-b-[3px] border-black bg-background">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6"
            >
              The Stack.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="font-mono text-lg max-w-md"
            >
              Tools I use to bend pixels and bytes to my will. Always learning, always building.
            </motion.p>
          </div>
          <div className="flex flex-col gap-10">
            {/* UX Methods */}
            <div>
              <h3 className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-4 block border-b-[2px] border-black/10 pb-2">UX Methods</h3>
              <div className="flex flex-wrap gap-3">
                {uxMethods.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    whileHover={{ y: -4, x: -4, boxShadow: "4px 4px 0px #000" }}
                    className="border-[3px] border-black px-4 py-2 text-sm md:text-base font-bold bg-white brutal-shadow hover:bg-primary transition-colors cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Design Tools */}
            <div>
              <h3 className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-4 block border-b-[2px] border-black/10 pb-2">Design Tools</h3>
              <div className="flex flex-wrap gap-3">
                {designTools.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    whileHover={{ y: -4, x: -4, boxShadow: "4px 4px 0px #000" }}
                    className="border-[3px] border-black px-4 py-2 text-sm md:text-base font-bold bg-[#B8F0A0] brutal-shadow hover:bg-white transition-colors cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div>
              <h3 className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-4 block border-b-[2px] border-black/10 pb-2">Frontend</h3>
              <div className="flex flex-wrap gap-3">
                {frontendSkills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    whileHover={{ y: -4, x: -4, boxShadow: "4px 4px 0px #000" }}
                    className="border-[3px] border-black px-4 py-2 text-sm md:text-base font-bold bg-secondary brutal-shadow hover:bg-white transition-colors cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Accessibility */}
            <div>
              <h3 className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-4 block border-b-[2px] border-black/10 pb-2">Accessibility</h3>
              <div className="flex flex-wrap gap-3">
                {accessibilitySkills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    whileHover={{ y: -4, x: -4, boxShadow: "4px 4px 0px #000" }}
                    className="border-[3px] border-black px-4 py-2 text-sm md:text-base font-bold bg-[#C8B8FF] brutal-shadow hover:bg-white transition-colors cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Selected Work ─────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 py-16 sm:py-32 border-b-[3px] border-black bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-16"
          >
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">Selected Work.</h2>
            <motion.a
              href="/work"
              data-testid="link-home-all-work"
              whileHover={{ x: -3, y: -3, boxShadow: "6px 6px 0px #000" }}
              className="hidden md:inline-flex items-center gap-2 font-bold uppercase border-[3px] border-black px-6 py-3 brutal-shadow hover:bg-primary transition-colors"
            >
              All Work <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.slice(0, 2).map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ───────────────────────────────────────────────── */}
      <section id="contact" className="px-4 sm:px-6 py-16 sm:py-32 border-t-[3px] border-black bg-background">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Left: Info */}
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
              className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8"
            >
              Let's Build<br />
              <span className="text-secondary">Something.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-mono text-base max-w-sm mb-12"
            >
              Got a project in mind? Drop me a message — I reply within 24 hours. First conversation is always free.
            </motion.p>

            {/* Contact Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              {[
                {
                  icon: Mail,
                  label: "harish@design.dev",
                  href: "mailto:harish@design.dev",
                  testId: "link-contact-email",
                  color: "hover:bg-primary",
                },
                {
                  icon: Phone,
                  label: "+91 98433 27279",
                  href: "tel:+919843327279",
                  testId: "link-contact-phone",
                  color: "hover:bg-primary",
                },
                {
                  icon: MessageCircle,
                  label: "WhatsApp Me",
                  href: "https://wa.me/9843327279",
                  testId: "link-contact-whatsapp",
                  color: "hover:bg-[#B8F0A0]",
                },
              ].map((item) => (
                <motion.a
                  key={item.testId}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  data-testid={item.testId}
                  whileHover={{ x: -3, y: -3, boxShadow: "6px 6px 0px #000" }}
                  whileTap={{ x: 1, y: 1, boxShadow: "2px 2px 0px #000" }}
                  className={`flex items-center gap-4 border-[3px] border-black bg-white px-6 py-4 font-bold uppercase brutal-shadow transition-colors ${item.color}`}
                >
                  <item.icon className="w-5 h-5 shrink-0" />
                  {item.label}
                </motion.a>
              ))}
            </motion.div>

            {/* Social row */}
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
                  className="p-4 border-[3px] border-black bg-white brutal-shadow hover:bg-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="border-[4px] border-black" style={{ boxShadow: "8px 8px 0px #000" }}>
              <div className="bg-primary border-b-[4px] border-black px-8 py-5">
                <h3 className="text-2xl font-black uppercase tracking-tight">Send a Message</h3>
              </div>
              <div className="bg-background">
                <ContactForm />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
