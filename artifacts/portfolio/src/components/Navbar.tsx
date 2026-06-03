import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import { Home, Briefcase, Mail, MoreHorizontal, Layers, User, X } from "lucide-react";
import { useState, useEffect } from "react";

const desktopLinks = [
  { label: "Home",     href: "/",        icon: Home },
  { label: "Work",     href: "/work",     icon: Briefcase },
  { label: "Services", href: "/services", icon: Layers },
  { label: "About",    href: "/about",    icon: User },
  { label: "Contact",  href: "/contact",  icon: Mail },
];

const mobileMainLinks = [
  { label: "Home",    href: "/",        icon: Home },
  { label: "Work",    href: "/work",    icon: Briefcase },
  { label: "Contact", href: "/contact", icon: Mail },
];

const moreLinks = [
  { label: "About",    href: "/about",    icon: User },
  { label: "Services", href: "/services", icon: Layers },
];

export default function Navbar() {
  const [location] = useLocation();
  const [moreOpen, setMoreOpen] = useState(false);

  // Close "More" menu on route change
  useEffect(() => { setMoreOpen(false); }, [location]);

  const isMoreActive = moreLinks.some((l) => l.href === location);

  return (
    <>
      {/* ── Desktop / Tablet Top Navbar ─────────────────────────── */}
      <nav className="border-b-[3px] border-black px-4 sm:px-6 py-4 flex justify-between items-center bg-white sticky top-0 z-50">
        <Link href="/" data-testid="link-logo">
          <span className="font-black text-xl sm:text-2xl tracking-tighter uppercase cursor-pointer hover:text-secondary transition-colors">
            HARISH.
          </span>
        </Link>

        {/* Nav links — hidden on mobile */}
        <div className="hidden md:flex items-center gap-1">
          {desktopLinks.map((link) => {
            const isActive = location === link.href;
            return (
              <Link key={link.href} href={link.href} data-testid={`link-nav-${link.label.toLowerCase()}`}>
                <span
                  className={`px-4 py-2 font-bold uppercase tracking-wider text-sm cursor-pointer transition-colors border-[2px] ${
                    isActive
                      ? "bg-primary border-black brutal-shadow"
                      : "border-transparent hover:bg-primary hover:border-black"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Hire Me — desktop only */}
        <Link href="/contact" data-testid="link-nav-hire">
          <motion.span
            whileHover={{ x: -3, y: -3, boxShadow: "6px 6px 0px #000" }}
            whileTap={{ x: 1, y: 1, boxShadow: "2px 2px 0px #000" }}
            className="hidden md:inline-block bg-primary border-[3px] border-black px-6 py-2 font-bold uppercase cursor-pointer brutal-shadow"
          >
            Hire Me
          </motion.span>
        </Link>
      </nav>

      {/* ── Mobile Floating Bottom Navbar ───────────────────────── */}
      <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-sm">

        {/* "More" popup — slides up above the navbar */}
        <AnimatePresence>
          {moreOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40"
                onClick={() => setMoreOpen(false)}
              />

              {/* Popup card */}
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 380, damping: 28 }}
                className="absolute bottom-[calc(100%+10px)] right-0 z-50 bg-black border-[3px] border-black min-w-[180px]"
                style={{ boxShadow: "4px 4px 0px #CCFF00" }}
              >
                {/* Header */}
                <div className="flex items-center justify-between border-b-[2px] border-white/20 px-4 py-2">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-white/50">More</span>
                  <button onClick={() => setMoreOpen(false)} className="text-white/50 hover:text-white transition-colors">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                {moreLinks.map((link) => {
                  const isActive = location === link.href;
                  return (
                    <Link key={link.href} href={link.href} data-testid={`link-mobile-more-${link.label.toLowerCase()}`}>
                      <motion.div
                        whileTap={{ scale: 0.97 }}
                        className={`flex items-center gap-3 px-4 py-3 cursor-pointer border-b-[2px] border-white/10 last:border-b-0 transition-colors ${
                          isActive ? "bg-primary text-black" : "text-white hover:bg-white/10"
                        }`}
                      >
                        <link.icon className="w-4 h-4 shrink-0" strokeWidth={isActive ? 2.5 : 1.8} />
                        <span className="font-bold uppercase text-xs tracking-wider">{link.label}</span>
                        {isActive && (
                          <span className="ml-auto w-1.5 h-1.5 bg-black rounded-full" />
                        )}
                      </motion.div>
                    </Link>
                  );
                })}
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Main bar */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 24, delay: 0.4 }}
          className="bg-black border-[3px] border-black flex items-center justify-around px-1 py-2"
          style={{ boxShadow: "4px 4px 0px #CCFF00" }}
        >
          {/* Main nav items */}
          {mobileMainLinks.map((link) => {
            const isActive = location === link.href;
            return (
              <Link key={link.href} href={link.href} data-testid={`link-mobile-nav-${link.label.toLowerCase()}`}>
                <motion.span
                  whileTap={{ scale: 0.88 }}
                  className={`flex flex-col items-center gap-0.5 px-4 py-1.5 cursor-pointer transition-colors ${
                    isActive ? "text-black bg-primary" : "text-white"
                  }`}
                >
                  <link.icon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 1.8} />
                  <span className="text-[9px] font-bold uppercase tracking-wider leading-none">
                    {link.label}
                  </span>
                  {isActive && (
                    <motion.div layoutId="mobile-nav-indicator" className="w-1 h-1 bg-black rounded-full" />
                  )}
                </motion.span>
              </Link>
            );
          })}

          {/* More button */}
          <motion.button
            whileTap={{ scale: 0.88 }}
            onClick={() => setMoreOpen((p) => !p)}
            data-testid="button-mobile-nav-more"
            className={`flex flex-col items-center gap-0.5 px-4 py-1.5 cursor-pointer transition-colors ${
              isMoreActive || moreOpen ? "text-black bg-primary" : "text-white"
            }`}
          >
            <MoreHorizontal className="w-5 h-5" strokeWidth={isMoreActive || moreOpen ? 2.5 : 1.8} />
            <span className="text-[9px] font-bold uppercase tracking-wider leading-none">More</span>
            {(isMoreActive || moreOpen) && (
              <motion.div layoutId="mobile-nav-indicator" className="w-1 h-1 bg-black rounded-full" />
            )}
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom spacer so content clears the bottom nav */}
      <div className="md:hidden h-20" />
    </>
  );
}
