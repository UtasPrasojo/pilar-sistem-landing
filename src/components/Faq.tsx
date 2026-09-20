"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { ease, Reveal } from "./motion";
import { SectionHeading } from "./SectionHeading";
import { faqs } from "@/lib/content";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          index="05"
          eyebrow="FAQ"
          title={
            <>
              Pertanyaan yang <span className="text-gradient">sering</span> diajukan
            </>
          }
        />

        <div className="mt-12 space-y-3">
          {faqs.map(({ question, answer }, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={question} delay={i * 0.06} y={16}>
                <div
                  className={`rounded-2xl border transition-colors ${
                    isOpen
                      ? "border-sky/30 bg-panel/80"
                      : "border-white/10 bg-panel/40 hover:border-white/20"
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-${i}`}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-medium text-white"
                    >
                      {question}
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.25, ease }}
                        className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-white/5 text-sky"
                      >
                        <Plus className="size-4" />
                      </motion.span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-${i}`}
                        role="region"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-sm leading-relaxed text-slate-400">
                          {answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
