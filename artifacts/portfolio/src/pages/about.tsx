import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Code2, Layers, Zap, Heart, Github, Linkedin, Phone, MessageCircle, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";

const HERO_IMAGE = "https://i.postimg.cc/XqvfT30M/Whats-App-Image-2026-04-27-at-4-34-38-PM.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as [number, number, number, number] } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const stats = [
  { value: "4+", label: "Years of Experience" },
  { value: "30+", label: "Projects Delivered" },
  { value: "15+", label: "Happy Clients" },
  { value: "2-in-1", label: "Designer & Developer" },
];

const values = [
  {
    icon: Layers,
    title: "Design Integrity",
    body: "Every pixel has intent. I don't add decoration — I add meaning. Good design solves problems before users notice them.",
  },
  {
    icon: Code2,
    title: "Engineering Rigour",
    body: "Clean, maintainable code that scales. I write software that the next developer (or future me) can thank me for.",
  },
  {
    icon: Zap,
    title: "Relentless Velocity",
    body: "Great ideas die in endless iteration. I move fast, ship real things, and refine based on what actually lands.",
  },
  {
    icon: Heart,
    title: "Craft Over Shortcuts",
    body: "I care about the details that most people skip. The micro-interaction, the spacing, the error state — they matter.",
  },
];

const tools = [
  "Figma", "React", "TypeScript", "Next.js", "Node.js",
  "PostgreSQL", "TailwindCSS", "Framer Motion", "Drizzle ORM", "Vercel",
];

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className={className}>
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />

      {/* Hero */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 md:py-36 border-b-[3px] border-black relative overflow-hidden">
        <div className="absolute top-8 right-8 w-40 h-40 border-[3px] border-black bg-primary opacity-40 rotate-12" />
        <div className="absolute bottom-12 left-1/2 w-24 h-24 border-[3px] border-black bg-secondary opacity-30 -rotate-6" />
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="font-mono text-lg uppercase tracking-widest mb-4 text-muted-foreground"
          >
            — About Me
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.9] mb-8 sm:mb-10"
          >
            I Build<br />
            <span className="text-secondary">Experiences.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl md:text-2xl font-mono max-w-2xl border-l-[6px] border-primary pl-6"
          >
            I'm Harish — a designer who codes and a developer who designs. I close the gap between what looks good and what works.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b-[3px] border-black bg-primary">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 sm:p-10 border-r-[3px] border-black last:border-r-0 md:[&:nth-child(2)]:border-r-[3px] text-center"
              data-testid={`stat-${i}`}
            >
              <div className="text-5xl md:text-6xl font-black tracking-tighter mb-2">{stat.value}</div>
              <div className="font-mono text-sm uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bio */}
      <section className="px-4 sm:px-6 py-16 sm:py-32 border-b-[3px] border-black bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <Section>
            <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8">
              The Story.
            </motion.h2>
            <motion.p variants={fadeUp} className="font-mono text-lg leading-relaxed mb-6">
              I started as a designer obsessed with aesthetics, then realised that beautiful products without solid engineering are just pretty ideas.
            </motion.p>
            <motion.p variants={fadeUp} className="font-mono text-lg leading-relaxed mb-6">
              So I learned to code. Not just enough to hand off specs, but enough to build the entire thing myself — from database schema to pixel-level animation.
            </motion.p>
            <motion.p variants={fadeUp} className="font-mono text-lg leading-relaxed mb-10">
              Today I work with startups and product teams who need someone who speaks both languages fluently. No translation layer. No miscommunication. Just great products.
            </motion.p>
            <motion.a
              variants={fadeUp}
              href="mailto:harish@design.dev"
              data-testid="button-about-contact"
              className="inline-flex items-center gap-3 font-bold uppercase tracking-wider bg-background border-[3px] border-black px-8 py-4 brutal-shadow hover:bg-primary transition-colors"
            >
              Work With Me <ArrowRight className="w-5 h-5" />
            </motion.a>
          </Section>

          {/* Real Photo */}
          <Section>
            <motion.div
              variants={fadeUp}
              className="relative max-w-sm"
            >
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
                  <span className="font-black uppercase tracking-tight text-lg">Harish</span>
                  <span className="font-mono text-xs border-[2px] border-black px-3 py-1 bg-primary uppercase">UI/UX + Dev</span>
                </div>
              </div>
            </motion.div>
          </Section>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-32 border-b-[3px] border-black bg-background">
        <div className="max-w-6xl mx-auto">
          <Section>
            <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-16">
              What I Stand For.
            </motion.h2>
          </Section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: -4, y: -4, boxShadow: "8px 8px 0px #000" }}
                className="border-[3px] border-black bg-white p-8 brutal-shadow"
                data-testid={`value-card-${i}`}
              >
                <div className="w-12 h-12 border-[3px] border-black bg-primary flex items-center justify-center mb-6">
                  <val.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-4">{val.title}</h3>
                <p className="font-mono text-base leading-relaxed">{val.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="px-6 py-32 bg-white border-b-[3px] border-black">
        <div className="max-w-6xl mx-auto">
          <Section>
            <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12">
              My Toolkit.
            </motion.h2>
            <div className="flex flex-wrap gap-4">
              {tools.map((tool, i) => (
                <motion.span
                  key={tool}
                  variants={fadeUp}
                  custom={i}
                  whileHover={{ y: -4, boxShadow: "4px 4px 0px #000" }}
                  className="border-[3px] border-black px-6 py-3 text-xl font-bold bg-background brutal-shadow hover:bg-primary transition-colors cursor-default"
                  data-testid={`tool-tag-${tool}`}
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 bg-secondary text-black border-b-[3px] border-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4"
            >
              Let's Connect.
            </motion.h2>
            <p className="font-mono text-lg">Find me on the platforms below or just shoot a message.</p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-4 min-w-[260px]"
          >
            {[
              { icon: Mail, label: "harish@design.dev", href: "mailto:harish@design.dev", testId: "link-about-email" },
              { icon: Phone, label: "+91 98433 27279", href: "tel:+919843327279", testId: "link-about-phone" },
              { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/9843327279", testId: "link-about-whatsapp" },
              { icon: Github, label: "github.com/harish2n5", href: "https://github.com/harish2n5", testId: "link-about-github" },
              { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/harish-a-034437341", testId: "link-about-linkedin" },
            ].map((item) => (
              <motion.a
                key={item.testId}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                data-testid={item.testId}
                whileHover={{ x: -3, y: -3, boxShadow: "6px 6px 0px #000" }}
                whileTap={{ x: 1, y: 1, boxShadow: "2px 2px 0px #000" }}
                className="flex items-center gap-3 border-[3px] border-black bg-white px-5 py-3 font-bold uppercase text-sm brutal-shadow hover:bg-primary transition-colors"
              >
                <item.icon className="w-5 h-5 shrink-0" />
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
