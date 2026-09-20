"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Check } from "lucide-react";
import { Stagger, StaggerItem } from "./motion";
import { SectionHeading } from "./SectionHeading";
import { plans, whatsappUrl } from "@/lib/content";

export function Plans() {
  return (
    <section
      id="paket"
      className="relative border-y border-white/5 bg-surface/60 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="04"
          eyebrow="Paket Layanan"
          title={
            <>
              Pilih yang paling <span className="text-gradient">sesuai</span> kebutuhan
            </>
          }
          description="Harga menyesuaikan ruang lingkup pekerjaan. Ceritakan kebutuhan Anda dan kami kirimkan penawaran yang transparan."
        />

        <Stagger className="mt-14 grid items-stretch gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <StaggerItem key={plan.name} className="h-full">
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className={`relative flex h-full flex-col rounded-2xl p-8 ${
                  plan.highlighted
                    ? "border border-sky/40 bg-linear-to-b from-blue-500/15 to-panel/80 shadow-2xl shadow-blue-600/20"
                    : "border border-white/10 bg-panel/60"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-sky px-3 py-1 font-mono text-[11px] font-medium text-ink">
                    Rekomendasi
                  </span>
                )}

                <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                <p className="mt-2 text-sm text-slate-400">{plan.tagline}</p>

                <p className="mt-6 font-mono text-xs text-sky">
                  Harga sesuai kebutuhan
                </p>

                <ul className="mt-6 flex-1 space-y-3.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-sky/15 text-sky">
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <motion.a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`mt-8 inline-flex items-center justify-center gap-1.5 rounded-full px-5 py-3 text-sm font-medium transition-colors ${
                    plan.highlighted
                      ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30 hover:bg-blue-400"
                      : "border border-white/15 bg-white/5 text-white hover:border-sky/40 hover:bg-white/10"
                  }`}
                >
                  Minta Penawaran
                  <ArrowUpRight className="size-4" />
                </motion.a>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
