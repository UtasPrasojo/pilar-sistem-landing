"use client";

import type { ReactNode } from "react";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";

/** Kartu dengan cahaya biru yang mengikuti kursor. */
export function SpotlightCard({
  children,
  className = "",
  rounded = "rounded-2xl",
}: {
  children: ReactNode;
  className?: string;
  rounded?: string;
}) {
  const x = useMotionValue(-999);
  const y = useMotionValue(-999);
  const glow = useMotionTemplate`radial-gradient(340px circle at ${x}px ${y}px, rgb(59 130 246 / 0.2), transparent 70%)`;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);
      }}
      onMouseLeave={() => {
        x.set(-999);
        y.set(-999);
      }}
      className={`group relative overflow-hidden ${rounded} border border-white/10 bg-panel/60 backdrop-blur-sm transition-colors hover:border-sky/30 ${className}`}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: glow }}
      />
      <div className="relative h-full">{children}</div>
    </motion.div>
  );
}
