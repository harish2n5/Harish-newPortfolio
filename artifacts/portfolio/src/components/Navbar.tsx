import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import { Home, Briefcase, Mail, Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

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
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      {/* ── Desktop / Tablet Top Navbar ─────────────────────────── */}
      <nav className="border-b-[3px] border-black dark:border-white px-4 sm:px-6 py-4 flex justify-between items-center bg-white dark:bg-black relative z-40 sticky top-0 transition-colors">
        <div className="flex-1 flex justify-start">
          <Link href="/" data-testid="link-logo">
            <span className="font-black text-xl sm:text-2xl tracking-tighter uppercase cursor-pointer hover:text-secondary transition-colors text-black dark:text-white">
              HARISH.
            </span>
          </Link>
        </div>

        {/* Nav links — hidden on mobile */}
        <div className="hidden md:flex items-center justify-center gap-1 shrink-0">
          {desktopLinks.map((link) => {
            const isActive = location === link.href;
            return (
              <Link key={link.href} href={link.href} data-testid={`link-nav-${link.label.toLowerCase()}`}>
                <span
                  className={`px-4 py-2 font-bold uppercase tracking-wider text-sm cursor-pointer transition-colors border-[2px] ${
                    isActive
                      ? "bg-primary border-black dark:border-white brutal-shadow text-black"
                      : "border-transparent text-black dark:text-white hover:bg-primary hover:text-black hover:border-black dark:hover:border-white"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Theme Toggle & Hire Me — desktop */}
        <div className="flex-1 hidden md:flex items-center justify-end gap-4">
          <motion.button
            onClick={toggleTheme}
            whileHover={{ x: -2, y: -2, boxShadow: "4px 4px 0px #000" }}
            whileTap={{ x: 1, y: 1, boxShadow: "1px 1px 0px #000" }}
            data-testid="button-theme-toggle"
            aria-label="Toggle theme"
            className="flex items-center gap-2 font-bold uppercase tracking-wider text-sm border-[3px] border-black dark:border-white bg-background dark:bg-white/10 text-black dark:text-white px-4 py-2 brutal-shadow hover:bg-primary hover:text-black transition-colors cursor-pointer"
          >
            {theme === "dark" ? (
              <><Sun className="w-4 h-4 text-primary" /> Light Mode</>
            ) : (
              <><Moon className="w-4 h-4 text-black" /> Dark Mode</>
            )}
          </motion.button>

          <Link href="/contact" data-testid="link-nav-hire">
            <motion.span
              whileHover={{ x: -3, y: -3, boxShadow: "6px 6px 0px #000" }}
              whileTap={{ x: 1, y: 1, boxShadow: "2px 2px 0px #000" }}
              className="inline-block bg-primary border-[3px] border-black dark:border-white px-6 py-2 font-bold uppercase cursor-pointer brutal-shadow text-black"
            >
              Hire Me
            </motion.span>
          </Link>
        </div>
      </nav>

      {/* ── Mobile Floating Bottom Navbar ───────────────────────── */}
      <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-sm">
        {/* Main bar */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 24, delay: 0.4 }}
          className="bg-black border-[3px] border-black dark:border-white flex items-center justify-around px-2 py-2"
          style={{ boxShadow: "4px 4px 0px #CCFF00" }}
        >
          {/* Main nav items */}
          {mobileMainLinks.map((link) => {
            const isActive = location === link.href;
            return (
              <Link key={link.href} href={link.href} data-testid={`link-mobile-nav-${link.label.toLowerCase()}`}>
                <motion.span
                  whileTap={{ scale: 0.88 }}
                  className={`flex flex-col items-center gap-0.5 px-3 py-1.5 cursor-pointer transition-colors ${
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

          {/* Theme Toggle Button on Mobile */}
          <motion.button
            whileTap={{ scale: 0.88 }}
            onClick={toggleTheme}
            data-testid="button-mobile-theme-toggle"
            aria-label="Toggle theme"
            className="flex flex-col items-center gap-0.5 px-3 py-1.5 cursor-pointer text-white hover:text-primary transition-colors"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-primary" strokeWidth={2} />
            ) : (
              <Moon className="w-5 h-5 text-white" strokeWidth={2} />
            )}
            <span className="text-[9px] font-bold uppercase tracking-wider leading-none">
              {theme === "dark" ? "Light" : "Dark"}
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom spacer so content clears the bottom nav */}
      <div className="md:hidden h-20" />
    </>
  );
}
