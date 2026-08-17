"use client";

import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";

interface PortfolioCanvasProps {
  className?: string;
}

const portfolioBadges = [
  { text: "<UI/UX />", color: "#CCFF00", bg: "#111111" },
  { text: "REACT.JS", color: "#61DAFB", bg: "#111111" },
  { text: "TYPESCRIPT", color: "#3178C6", bg: "#111111" },
  { text: "FIGMA", color: "#A259FF", bg: "#111111" },
  { text: "FULL STACK", color: "#FF5252", bg: "#111111" },
  { text: "NEXT.JS", color: "#FFFFFF", bg: "#111111" },
  { text: "NODE.JS", color: "#68A063", bg: "#111111" },
  { text: "DESIGN SYSTEMS", color: "#B8F0A0", bg: "#111111" },
  { text: "TAILWIND CSS", color: "#38BDF8", bg: "#111111" },
  { text: "POSTGRESQL", color: "#4169E1", bg: "#111111" },
  { text: "ANIMATION", color: "#C8B8FF", bg: "#111111" },
  { text: "PIXEL PERFECT", color: "#CCFF00", bg: "#111111" },
];

export const PortfolioCanvas = ({ className = "absolute bottom-0 h-full w-full pointer-events-none" }: PortfolioCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const stage = { width: 0, height: 0 };

    type TechPill = {
      text: string;
      color: string;
      bg: string;
      x: number;
      y: number;
      anchorY: number;
      width: number;
      height: number;
      scale: number;
      walk: gsap.core.Timeline | null;
    };

    const randomRange = (min: number, max: number) => min + Math.random() * (max - min);

    const items: TechPill[] = [];

    const createPills = () => {
      items.length = 0;
      const count = 18;
      for (let i = 0; i < count; i++) {
        const badge = portfolioBadges[i % portfolioBadges.length];
        items.push({
          text: badge.text,
          color: badge.color,
          bg: badge.bg,
          x: 0,
          y: 0,
          anchorY: 0,
          width: 140,
          height: 38,
          scale: randomRange(0.85, 1.2),
          walk: null,
        });
      }
    };

    const animatePill = (pill: TechPill) => {
      const direction = Math.random() > 0.5 ? 1 : -1;
      const offsetY = randomRange(-80, 80);
      const startY = stage.height / 2 + offsetY;
      const startX = direction === 1 ? -200 : stage.width + 200;
      const endX = direction === 1 ? stage.width + 200 : -200;

      pill.x = startX;
      pill.y = startY;
      pill.anchorY = startY;

      const duration = randomRange(12, 22);
      const bounceDuration = 0.35;

      if (pill.walk) pill.walk.kill();

      const tl = gsap.timeline({
        onComplete: () => animatePill(pill),
      });

      tl.to(
        pill,
        {
          duration,
          x: endX,
          ease: "none",
        },
        0
      );

      tl.to(
        pill,
        {
          duration: bounceDuration,
          repeat: Math.floor(duration / bounceDuration),
          yoyo: true,
          y: startY - 12,
          ease: "power1.inOut",
        },
        0
      );

      pill.walk = tl;
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);

      // Sort by anchorY for parallax depth
      const sorted = [...items].sort((a, b) => a.anchorY - b.anchorY);

      sorted.forEach((pill) => {
        ctx.save();
        ctx.translate(pill.x, pill.y);
        ctx.scale(pill.scale, pill.scale);

        // Measure text
        ctx.font = "900 13px 'Space Mono', monospace";
        const textMetrics = ctx.measureText(pill.text);
        const pWidth = textMetrics.width + 32;
        const pHeight = 34;

        // Draw Brutalist Pill Background
        ctx.fillStyle = "#000000";
        ctx.strokeStyle = pill.color;
        ctx.lineWidth = 3;

        // Pill shadow
        ctx.fillStyle = pill.color;
        ctx.fillRect(4, 4, pWidth, pHeight);

        // Pill body
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 0, pWidth, pHeight);
        ctx.strokeStyle = "#000000";
        ctx.strokeRect(0, 0, pWidth, pHeight);

        // Pill text
        ctx.fillStyle = "#000000";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(pill.text, pWidth / 2, pHeight / 2);

        ctx.restore();
      });

      ctx.restore();
    };

    const resize = () => {
      stage.width = canvas.clientWidth;
      stage.height = canvas.clientHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = stage.width * dpr;
      canvas.height = stage.height * dpr;

      items.forEach((pill) => animatePill(pill));
    };

    createPills();
    resize();
    gsap.ticker.add(render);

    const handleResize = () => resize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      gsap.ticker.remove(render);
      items.forEach((pill) => pill.walk?.kill());
    };
  }, []);

  return <canvas ref={canvasRef} className={className} />;
};

export const Skiper39 = () => {
  return (
    <div className="relative h-full w-full bg-white text-black overflow-hidden">
      <PortfolioCanvas />
    </div>
  );
};
