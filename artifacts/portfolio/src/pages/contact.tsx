import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MessageCircle, Github, Linkedin, Send, MapPin, Clock } from "lucide-react";
import emailjs from "@emailjs/browser";
import Navbar from "@/components/Navbar";

const EMAILJS_SERVICE_ID  = "service_mjkj0xs";
const EMAILJS_TEMPLATE_ID = "template_l0m55pe";
const EMAILJS_PUBLIC_KEY  = "OLhQY0mqDmdLPvPii";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "harish2n5@gmail.com",
    href: "mailto:harish2n5@gmail.com",
    color: "bg-primary",
    testId: "link-contact-email",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98433 27279",
    href: "tel:+919843327279",
    color: "bg-secondary",
    testId: "link-contact-phone",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: "https://wa.me/9843327279",
    color: "bg-[#B8F0A0]",
    testId: "link-contact-whatsapp",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    href: "#",
    color: "bg-[#C8B8FF]",
    testId: "info-contact-location",
  },
  {
    icon: Clock,
    label: "Availability",
    value: "Open to Projects",
    href: "#",
    color: "bg-[#FFD6A0]",
    testId: "info-contact-availability",
  },
];

const socials = [
  {
    icon: Github,
    label: "GitHub",
    handle: "@harish2n5",
    href: "https://github.com/harish2n5",
    color: "bg-white hover:bg-primary",
    testId: "link-social-github",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "harish-a",
    href: "https://www.linkedin.com/in/harish-a-034437341",
    color: "bg-white hover:bg-primary",
    testId: "link-social-linkedin",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    handle: "+91 98433 27279",
    href: "https://wa.me/9843327279",
    color: "bg-white hover:bg-[#B8F0A0]",
    testId: "link-social-whatsapp",
  },
];

const services = [
  "UI/UX Design",
  "Full Stack Development",
  "Design Systems",
  "Landing Pages & MVPs",
  "Product Consulting",
  "Mobile-First Apps",
];

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
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-0" data-testid="form-contact-page">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <input
          name="from_name"
          required
          placeholder="Your Name"
          data-testid="input-name"
          className="border-[3px] border-black px-5 py-4 font-mono bg-white text-black placeholder:text-muted-foreground focus:outline-none focus:bg-primary transition-colors sm:border-r-[1.5px]"
        />
        <input
          name="reply_to"
          type="email"
          required
          placeholder="Your Email"
          data-testid="input-email"
          className="border-[3px] border-black border-t-0 sm:border-t-[3px] sm:border-l-[1.5px] px-5 py-4 font-mono bg-white text-black placeholder:text-muted-foreground focus:outline-none focus:bg-primary transition-colors"
        />
      </div>

      <select
        name="service"
        data-testid="select-service"
        className="border-[3px] border-black border-t-0 px-5 py-4 font-mono bg-white text-black focus:outline-none focus:bg-primary transition-colors appearance-none cursor-pointer"
      >
        <option value="">What can I help you with?</option>
        {services.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>

      <input
        name="budget"
        placeholder="Budget range (optional)"
        data-testid="input-budget"
        className="border-[3px] border-black border-t-0 px-5 py-4 font-mono bg-white text-black placeholder:text-muted-foreground focus:outline-none focus:bg-primary transition-colors"
      />

      <textarea
        name="message"
        required
        rows={5}
        placeholder="Tell me about your project..."
        data-testid="input-message"
        className="border-[3px] border-black border-t-0 px-5 py-4 font-mono bg-white text-black placeholder:text-muted-foreground focus:outline-none focus:bg-primary transition-colors resize-none"
      />

      <motion.button
        type="submit"
        disabled={status === "sending" || status === "success"}
        data-testid="button-submit"
        whileHover={status === "idle" || status === "error" ? { x: -4, y: -4, boxShadow: "8px 8px 0px #000" } : {}}
        whileTap={status === "idle" || status === "error" ? { x: 1, y: 1, boxShadow: "2px 2px 0px #000" } : {}}
        className={`border-[3px] border-black border-t-0 px-8 py-5 font-black uppercase tracking-widest text-lg flex items-center justify-center gap-3 transition-colors brutal-shadow ${
          status === "success"
            ? "bg-[#B8F0A0] text-black"
            : status === "error"
            ? "bg-secondary text-black"
            : "bg-black text-primary"
        } disabled:opacity-70`}
      >
        {status === "sending" ? (
          <><span className="animate-spin w-5 h-5 border-2 border-primary border-t-transparent rounded-full inline-block" /> Sending...</>
        ) : status === "success" ? (
          "Message Sent — I'll Be In Touch!"
        ) : status === "error" ? (
          "Something Failed — Try Again"
        ) : (
          <><Send className="w-5 h-5" /> Send Message</>
        )}
      </motion.button>
    </form>
  );
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 md:py-32 border-b-[3px] border-black relative overflow-hidden">
        <div className="absolute top-6 right-6 w-24 h-24 sm:w-40 sm:h-40 border-[3px] border-black bg-primary opacity-30 rotate-12" />
        <div className="absolute bottom-8 left-1/3 w-16 h-16 border-[3px] border-black bg-secondary opacity-20 -rotate-6" />
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="font-mono text-sm sm:text-base uppercase tracking-widest mb-4 text-muted-foreground"
          >
            — Let's Talk
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.9] mb-6 sm:mb-10"
          >
            Get In<br />
            <span className="text-secondary">Touch.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base sm:text-xl md:text-2xl font-mono max-w-2xl border-l-[6px] border-primary pl-5 sm:pl-6"
          >
            Got a project? An idea? Or just want to say hello? I reply within 24 hours. First conversation is always free.
          </motion.p>
        </div>
      </section>

      {/* ── Main Content ──────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 md:py-32 border-b-[3px] border-black bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Left: Contact Info */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 sm:mb-10"
            >
              Reach Me Directly.
            </motion.h2>

            <div className="flex flex-col gap-3 mb-10 sm:mb-12">
              {contactInfo.map((item, i) => (
                <motion.a
                  key={item.testId}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  data-testid={item.testId}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  whileHover={item.href !== "#" ? { x: -3, y: -3, boxShadow: "6px 6px 0px #000" } : {}}
                  className={`flex items-center gap-4 border-[3px] border-black px-5 py-4 brutal-shadow transition-colors ${item.href !== "#" ? "cursor-pointer" : "cursor-default"} group`}
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 border-[3px] border-black ${item.color} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{item.label}</div>
                    <div className="font-bold text-sm sm:text-base uppercase">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Icons */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-5"
            >
              Find Me Online.
            </motion.h3>
            <div className="flex flex-col gap-3">
              {socials.map((s, i) => (
                <motion.a
                  key={s.testId}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={s.testId}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ x: -3, y: -3, boxShadow: "6px 6px 0px #000" }}
                  whileTap={{ x: 1, y: 1, boxShadow: "2px 2px 0px #000" }}
                  className={`flex items-center gap-4 border-[3px] border-black px-5 py-4 brutal-shadow transition-colors ${s.color}`}
                >
                  <s.icon className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
                  <div>
                    <div className="font-black text-sm uppercase tracking-tight">{s.label}</div>
                    <div className="font-mono text-xs text-muted-foreground">{s.handle}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <div className="border-[4px] border-black" style={{ boxShadow: "8px 8px 0px #000" }}>
              <div className="bg-primary border-b-[4px] border-black px-6 sm:px-8 py-5 flex items-center justify-between">
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight">Send a Message</h3>
                <span className="font-mono text-xs border-[2px] border-black bg-white px-3 py-1 uppercase">Free Reply</span>
              </div>
              <div className="bg-background">
                <ContactForm />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Availability Banner ────────────────────────────────────── */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 bg-primary border-b-[3px] border-black">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 bg-[#00C851] border-[2px] border-black rounded-full animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest font-bold">Currently Available</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter leading-tight">
              Open to new projects<br className="sm:hidden" /> & collaborations.
            </h2>
          </div>
          <motion.a
            href="mailto:harish2n5@gmail.com"
            data-testid="link-availability-email"
            whileHover={{ x: -4, y: -4, boxShadow: "8px 8px 0px #000" }}
            whileTap={{ x: 1, y: 1, boxShadow: "2px 2px 0px #000" }}
            className="shrink-0 inline-flex items-center gap-3 font-bold uppercase border-[4px] border-black bg-white px-6 sm:px-8 py-4 brutal-shadow text-sm sm:text-base"
          >
            <Mail className="w-5 h-5" /> Start a Conversation
          </motion.a>
        </div>
      </section>
    </div>
  );
}
