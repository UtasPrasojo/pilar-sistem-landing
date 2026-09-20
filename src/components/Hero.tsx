"use client";

import { Fragment } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { ArrowRight, Gauge, Lock, Search, Smartphone } from "lucide-react";
import { ease } from "./motion";
import { whatsappUrl } from "@/lib/content";

const headline: { word: string; accent?: boolean }[] = [
  { word: "Pilar" },
  { word: "digital" },
  { word: "yang" },
  { word: "menopang" },
  { word: "pertumbuhan", accent: true },
  { word: "bisnis", accent: true },
  { word: "Anda.", accent: true },
];

export function Hero() {
  return (
    <section
      id="beranda"
      className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 lg:pb-28"
    >
      <Backdrop />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-sky/20 bg-sky/5 px-3.5 py-1.5 font-mono text-xs text-sky"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-sky opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-sky" />
            </span>
            Jasa pembuatan website &amp; sistem
          </motion.div>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {headline.map(({ word, accent }, i) => (
              <Fragment key={i}>
                <span className="-my-1 inline-block overflow-hidden py-1 align-top">
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.75, delay: 0.2 + i * 0.07, ease }}
                    className={`inline-block ${accent ? "text-gradient" : ""}`}
                  >
                    {word}
                  </motion.span>
                </span>
                {/* spasi asli di antara kata agar teks bisa turun baris */}
                {i < headline.length - 1 && " "}
              </Fragment>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            Kami merancang dan membangun website, toko online, serta sistem
            kustom yang cepat, rapi, dan siap berkembang — agar bisnis Anda
            berdiri kokoh di dunia digital.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <motion.a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3.5 text-sm font-medium text-white shadow-xl shadow-blue-500/30 transition-colors hover:bg-blue-400"
            >
              Konsultasi Gratis
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              href="#layanan"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-white backdrop-blur transition-colors hover:border-sky/40 hover:bg-white/10"
            >
              Lihat Layanan
            </motion.a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.15 }}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-slate-500"
          >
            {["Kode custom", "Responsif", "SEO-friendly", "Support purna jual"].map(
              (t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-sky/70" />
                  {t}
                </li>
              ),
            )}
          </motion.ul>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function Backdrop() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]" />
      <motion.div
        animate={{ x: [0, 40, -20, 0], y: [0, 30, -10, 0], scale: [1, 1.15, 0.95, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 left-1/2 size-[34rem] -translate-x-[70%] rounded-full bg-blue-600/25 blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -50, 20, 0], y: [0, -20, 40, 0], scale: [1, 0.9, 1.1, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-0 size-[28rem] rounded-full bg-sky/15 blur-[120px]"
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-ink to-transparent" />
    </div>
  );
}

const chips = [
  { icon: Gauge, label: "Cepat & ringan", className: "-left-3 top-10 sm:-left-8", duration: 5 },
  { icon: Search, label: "SEO-friendly", className: "-right-2 top-1/2 sm:-right-8", duration: 6.5 },
  { icon: Smartphone, label: "Responsif", className: "-bottom-4 left-8 sm:left-12", duration: 5.5 },
];

const pillars = [
  { height: "58%", label: "Website", delay: 0.9 },
  { height: "88%", label: "Sistem", delay: 1.05 },
  { height: "70%", label: "Bisnis", delay: 1.2 },
];

function HeroVisual() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), {
    stiffness: 120,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), {
    stiffness: 120,
    damping: 18,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.4, ease }}
      className="relative mx-auto w-full max-w-md lg:max-w-none"
      style={{ perspective: 1200 }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative rounded-2xl border border-white/10 bg-panel/80 shadow-2xl shadow-blue-950/60 backdrop-blur-xl"
      >
        {/* Browser bar */}
        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-red-400/80" />
            <span className="size-2.5 rounded-full bg-amber-300/80" />
            <span className="size-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <div className="flex flex-1 items-center gap-2 rounded-md bg-black/25 px-3 py-1.5 font-mono text-[11px] text-slate-400">
            <Lock className="size-3 text-sky" />
            bisnisanda.com
          </div>
        </div>

        {/* Page body */}
        <div className="grid grid-cols-5 gap-5 p-5 sm:p-6">
          <div className="col-span-3 space-y-3">
            <Bar w="40%" h="h-2" delay={1.0} className="bg-sky/70" />
            <Bar w="92%" h="h-4" delay={1.1} className="bg-white/80" />
            <Bar w="70%" h="h-4" delay={1.2} className="bg-white/80" />
            <div className="pt-1" />
            <Bar w="100%" h="h-2" delay={1.3} className="bg-white/15" />
            <Bar w="88%" h="h-2" delay={1.4} className="bg-white/15" />
            <Bar w="60%" h="h-2" delay={1.5} className="bg-white/15" />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.7, type: "spring", stiffness: 260, damping: 18 }}
              className="mt-3 h-8 w-24 rounded-full bg-blue-500 shadow-lg shadow-blue-500/40"
            />
          </div>

          <div className="col-span-2 flex h-44 items-end justify-between gap-2 rounded-xl border border-white/5 bg-black/20 p-3 sm:h-52">
            {pillars.map((p, i) => (
              <div key={p.label} className="flex h-full flex-1 flex-col justify-end gap-1.5">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: p.height }}
                  transition={{ duration: 1, delay: p.delay, ease }}
                  className={`w-full rounded-md ${
                    i === 1
                      ? "bg-linear-to-t from-blue-500 to-sky"
                      : "bg-linear-to-t from-blue-700 to-blue-500"
                  }`}
                />
                <span className="text-center font-mono text-[9px] text-slate-500">
                  {p.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Floating chips */}
        {chips.map(({ icon: Icon, label, className, duration }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
            transition={{
              opacity: { delay: 1.4 + i * 0.15, duration: 0.5 },
              scale: { delay: 1.4 + i * 0.15, type: "spring", stiffness: 240, damping: 16 },
              y: { duration, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 },
            }}
            style={{ translateZ: 50 }}
            className={`absolute flex items-center gap-2 rounded-xl border border-sky/25 bg-ink/90 px-3.5 py-2 text-xs font-medium text-white shadow-xl shadow-black/40 backdrop-blur ${className}`}
          >
            <Icon className="size-4 text-sky" />
            {label}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

function Bar({
  w,
  h,
  delay,
  className,
}: {
  w: string;
  h: string;
  delay: number;
  className: string;
}) {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: w }}
      transition={{ duration: 0.8, delay, ease }}
      className={`${h} rounded-full ${className}`}
    />
  );
}
