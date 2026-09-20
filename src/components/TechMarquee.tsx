"use client";

import { motion } from "motion/react";
import { techStack } from "@/lib/content";

export function TechMarquee() {
  const items = [...techStack, ...techStack];

  return (
    <section
      aria-label="Teknologi yang kami gunakan"
      className="border-y border-white/5 bg-surface/60 py-8"
    >
      <p className="mb-6 text-center font-mono text-xs tracking-widest text-slate-500 uppercase">
        Dibangun dengan teknologi modern
      </p>
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <motion.ul
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 32, ease: "linear", repeat: Infinity }}
          className="flex w-max"
        >
          {items.map((tech, i) => (
            <li key={i} className="pr-4" aria-hidden={i >= techStack.length}>
              <span className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 font-mono text-sm text-slate-300">
                <span className="size-1.5 rounded-full bg-sky" />
                {tech}
              </span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
