import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Work from "@/pages/work";
import About from "@/pages/about";
import Services from "@/pages/services";
import Contact from "@/pages/contact";

import CaseStudyModal from "@/pages/case-study";
import { projects } from "@/lib/data";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);
  return null;
}

const pageVariants = {
  initial: { opacity: 0, y: 18 },
  in:      { opacity: 1, y: 0 },
  out:     { opacity: 0, y: -12 },
};

const pageTransition = {
  duration: 0.28,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

function CaseStudyRoute({ params }: { params: { slug: string } }) {
  const [, setLocation] = useLocation();
  const project = projects.find((p) => p.slug === params.slug) || projects[0];
  const nextProject = projects[(projects.findIndex((p) => p.slug === project.slug) + 1) % projects.length];

  return (
    <CaseStudyModal
      project={project}
      onClose={() => setLocation("/work")}
      onNext={(nextP) => setLocation(`/case-study/${nextP.slug}`)}
    />
  );
}

function AnimatedRoutes() {
  const [location] = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        style={{ width: "100%" }}
      >
        <Switch>
          <Route path="/"        component={Home} />
          <Route path="/work"    component={Work} />
          <Route path="/case-study/:slug" component={CaseStudyRoute} />
          <Route path="/about"   component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <ScrollToTop />
          <AnimatedRoutes />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
