import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { Home, Briefcase, Mail } from "lucide-react";
import { Link001 } from "@/components/ui/skiper-ui/skiper40";

const desktopLinks = [
  { label: "Home",    href: "/",        icon: Home },
  { label: "Work",    href: "/work",    icon: Briefcase },
  { label: "Contact", href: "/contact", icon: Mail },
];

const mobileMainLinks = [
  { label: "Home",    href: "/",        icon: Home },
  { label: "Work",    href: "/work",    icon: Briefcase },
  { label: "Contact", href: "/contact", icon: Mail },
];

export default function Navbar() {
  const [location] = useLocation();

  return (
    <>
      {/* ── Desktop / Tablet Top Navbar ─────────────────────────── */}
      <nav className="border-b-[3px] border-black px-4 sm:px-6 py-4 flex justify-between items-center bg-white relative z-40 sticky top-0">
        <div className="flex-1 flex justify-start">
          <Link href="/" data-testid="link-logo">
            <span className="font-black text-xl sm:text-2xl tracking-tighter uppercase cursor-pointer hover:text-secondary transition-colors text-black">
              HARISH.
            </span>
          </Link>
        </div>

        {/* Nav links — hidden on mobile */}
        <div className="hidden md:flex items-center justify-center gap-2 shrink-0">
          {desktopLinks.map((link) => {
            const isActive = location === link.href;
            return (
              <Link key={link.href} href={link.href} data-testid={`link-nav-${link.label.toLowerCase()}`}>
                <span
                  className={`px-4 py-2 font-bold uppercase tracking-wider text-sm cursor-pointer transition-colors border-[2px] ${
                    isActive
                      ? "bg-primary border-black brutal-shadow text-black"
                      : "border-transparent text-black hover:bg-primary hover:text-black hover:border-black"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Hire Me CTA — desktop */}
        <div className="flex-1 hidden md:flex items-center justify-end gap-4">
          <Link href="/contact" data-testid="link-nav-hire">
            <motion.span
              whileHover={{ x: -3, y: -3, boxShadow: "6px 6px 0px #000" }}
              whileTap={{ x: 1, y: 1, boxShadow: "2px 2px 0px #000" }}
              className="inline-block bg-primary border-[3px] border-black px-6 py-2 font-bold uppercase cursor-pointer brutal-shadow text-black"
            >
              Hire Me
            </motion.span>
          </Link>
        </div>
      </nav>

      {/* ── Mobile Floating Bottom Navbar ───────────────────────── */}
      <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-xs">
        {/* Main bar */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 24, delay: 0.4 }}
          className="bg-white border-[3px] border-black flex items-center justify-around px-2 py-2"
          style={{ boxShadow: "4px 4px 0px #000" }}
        >
          {/* Main nav items */}
          {mobileMainLinks.map((link) => {
            const isActive = location === link.href;
            return (
              <Link key={link.href} href={link.href} data-testid={`link-mobile-nav-${link.label.toLowerCase()}`}>
                <motion.span
                  whileTap={{ scale: 0.88 }}
                  className={`flex flex-col items-center gap-0.5 px-4 py-1.5 cursor-pointer transition-colors ${
                    isActive ? "text-black bg-primary border border-black" : "text-black"
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
        </motion.div>
      </div>

      {/* Bottom spacer so content clears the bottom nav */}
      <div className="md:hidden h-20" />
    </>
  );
}
