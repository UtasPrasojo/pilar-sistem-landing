"use client";

import { motion } from "motion/react";
import { ease, Stagger, StaggerItem } from "./motion";
import { SectionHeading } from "./SectionHeading";
import { steps } from "@/lib/content";

export function Process() {
  return (
    <section id="proses" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="03"
          eyebrow="Proses Kerja"
          title={
            <>
              Empat langkah <span className="text-gradient">jelas</span> menuju website Anda
            </>
          }
          description="Alur kerja yang terstruktur supaya Anda selalu tahu apa yang terjadi dan apa yang akan datang."
        />

        <div className="relative mt-16">
          {/* Garis penghubung (desktop) */}
          <motion.div
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 1.4, ease }}
            className="absolute top-6 right-[12.5%] left-[12.5%] hidden h-px origin-left bg-linear-to-r from-blue-500/0 via-sky/60 to-blue-500/0 lg:block"
          />

          <Stagger gap={0.15} className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map(({ title, description }, i) => (
              <StaggerItem key={title} className="relative text-center lg:px-2">
                <motion.div
                  whileHover={{ scale: 1.12, rotate: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="relative mx-auto flex size-12 items-center justify-center rounded-full border border-sky/40 bg-ink font-mono text-sm font-medium text-sky shadow-[0_0_24px_-4px_rgb(131_219_255/0.5)]"
                >
                  {String(i + 1).padStart(2, "0")}
                </motion.div>
                <h3 className="mt-6 text-lg font-semibold text-white">{title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-slate-400">
                  {description}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
