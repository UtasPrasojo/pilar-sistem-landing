"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import {
  MousePointer2,
  PenTool,
  Search,
  ShieldCheck,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";
import { ease } from "./motion";
import type { VisualKind } from "@/lib/content";

/* ---------- Bahan dasar ---------- */

function Frame({ children }: { children: ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className="group relative h-full min-h-56 overflow-hidden rounded-3xl border border-sky/20 bg-linear-to-br from-blue-500 via-blue-700 to-blue-950"
    >
      <div className="bg-grid absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      <div className="absolute -top-16 -right-10 size-56 rounded-full bg-sky/30 blur-3xl" />
      <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.04]">
        {children}
      </div>
    </div>
  );
}

function Window({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`absolute overflow-hidden rounded-xl border border-white/15 bg-ink/75 shadow-2xl shadow-black/30 backdrop-blur-sm ${className}`}
    >
      <div className="flex gap-1 border-b border-white/10 px-3 py-2">
        <i className="size-1.5 rounded-full bg-white/30" />
        <i className="size-1.5 rounded-full bg-white/30" />
        <i className="size-1.5 rounded-full bg-white/30" />
      </div>
      {children}
    </div>
  );
}

function Line({
  w,
  h = "h-1.5",
  className = "bg-white/20",
}: {
  w: string;
  h?: string;
  className?: string;
}) {
  return (
    <span className={`block rounded-full ${h} ${className}`} style={{ width: w }} />
  );
}

function Float({
  className = "",
  delay = 0,
  children,
}: {
  className?: string;
  delay?: number;
  children: ReactNode;
}) {
  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
      className={`absolute flex size-10 items-center justify-center rounded-full bg-white text-blue-700 shadow-xl shadow-black/30 ${className}`}
    >
      {children}
    </motion.div>
  );
}

function Bars({ heights }: { heights: number[] }) {
  return (
    <div className="flex h-full items-end gap-1.5">
      {heights.map((h, i) => (
        <motion.span
          key={i}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 + i * 0.07, ease }}
          style={{ height: `${h}%` }}
          className={`flex-1 origin-bottom rounded-t-sm ${
            i === heights.length - 2 ? "bg-sky" : "bg-white/30"
          }`}
        />
      ))}
    </div>
  );
}

/* ---------- Ilustrasi per layanan ---------- */

function Profile() {
  return (
    <Window className="inset-x-5 top-9 bottom-[-1px] rounded-b-none">
      <div className="space-y-2.5 p-3">
        <div className="space-y-1.5 rounded-lg bg-linear-to-r from-sky/50 to-blue-400/30 p-3">
          <Line w="60%" className="bg-white/90" />
          <Line w="40%" className="bg-white/50" />
          <span className="mt-1 block h-4 w-14 rounded-full bg-white/90" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-16 space-y-1.5 rounded-md bg-white/10 p-2">
              <span className="block size-3 rounded bg-sky/70" />
              <Line w="80%" />
              <Line w="55%" />
            </div>
          ))}
        </div>
      </div>
    </Window>
  );
}

function Landing() {
  return (
    <Window className="inset-x-8 top-8 bottom-[-1px] rounded-b-none">
      <div className="space-y-2 px-4 pt-5">
        <Line w="35%" className="bg-sky/80" />
        <Line w="92%" h="h-2.5" className="bg-white/90" />
        <Line w="70%" h="h-2.5" className="bg-white/90" />
        <div className="pt-1" />
        <Line w="100%" />
        <Line w="80%" />
        <div className="relative mt-4 w-fit">
          <span className="block h-7 w-24 rounded-full bg-sky shadow-lg shadow-sky/30" />
          <motion.span
            animate={{ x: [0, 6, 0], y: [0, 4, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-3 left-16 text-white"
          >
            <MousePointer2 className="size-6 fill-white" />
          </motion.span>
        </div>
      </div>
    </Window>
  );
}

function Shop() {
  return (
    <>
      <div className="absolute inset-x-6 top-12 grid grid-cols-2 gap-3">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="rounded-xl border border-white/15 bg-ink/70 p-2 backdrop-blur-sm"
          >
            <div
              className={`h-16 rounded-lg ${
                i % 2
                  ? "bg-linear-to-br from-sky/60 to-blue-500/40"
                  : "bg-linear-to-br from-white/40 to-sky/30"
              }`}
            />
            <div className="mt-2 flex items-center justify-between">
              <Line w="45%" className="bg-white/60" />
              <span className="h-3 w-8 rounded-full bg-sky" />
            </div>
          </div>
        ))}
      </div>
      <Float className="top-3 right-4">
        <ShoppingCart className="size-4" />
        <span className="absolute -top-1 -right-1 grid size-4 place-items-center rounded-full bg-sky text-[9px] font-bold text-ink">
          3
        </span>
      </Float>
    </>
  );
}

function Dashboard() {
  return (
    <Window className="inset-x-5 top-8 bottom-[-1px] rounded-b-none">
      <div className="flex">
        <div className="w-9 space-y-2 border-r border-white/10 p-2">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className={`block size-5 rounded ${i === 0 ? "bg-sky" : "bg-white/15"}`}
            />
          ))}
        </div>
        <div className="flex-1 space-y-3 p-3">
          <div className="flex gap-2">
            {[0, 1].map((i) => (
              <div key={i} className="flex-1 space-y-1.5 rounded-md bg-white/10 p-2">
                <Line w="50%" />
                <Line w="70%" h="h-2.5" className="bg-white/80" />
              </div>
            ))}
          </div>
          <div className="h-24">
            <Bars heights={[35, 55, 40, 70, 50, 85, 65]} />
          </div>
        </div>
      </div>
    </Window>
  );
}

function Mobile() {
  return (
    <div className="absolute top-8 left-1/2 h-[120%] w-32 -translate-x-1/2 rounded-[1.75rem] border-[3px] border-white/40 bg-ink/80 p-2.5 shadow-2xl shadow-black/40 backdrop-blur-sm">
      <span className="mx-auto mb-3 block h-1.5 w-10 rounded-full bg-white/30" />
      <div className="space-y-2.5">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-2 rounded-lg bg-white/8 p-2">
            <span
              className={`size-5 shrink-0 rounded-full ${i === 0 ? "bg-sky" : "bg-white/30"}`}
            />
            <div className="flex-1 space-y-1">
              <Line w="80%" className="bg-white/60" />
              <Line w="50%" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Design() {
  const handle = "absolute size-2 border border-sky bg-white";
  return (
    <>
      <div className="absolute inset-x-8 top-10 bottom-10">
        <div className="relative h-full rounded-xl border border-dashed border-sky/70 bg-white/5">
          <i className={`${handle} -top-1 -left-1`} />
          <i className={`${handle} -top-1 -right-1`} />
          <i className={`${handle} -bottom-1 -left-1`} />
          <i className={`${handle} -right-1 -bottom-1`} />
          <svg viewBox="0 0 200 100" className="absolute inset-0 size-full p-4">
            <motion.path
              d="M10 80 C 50 10, 90 10, 110 50 S 170 90, 190 20"
              fill="none"
              stroke="#83dbff"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease }}
            />
            {[
              [10, 80],
              [110, 50],
              [190, 20],
            ].map(([cx, cy]) => (
              <circle key={cx} cx={cx} cy={cy} r="4" fill="#fff" stroke="#83dbff" strokeWidth="2" />
            ))}
          </svg>
        </div>
        <div className="absolute -bottom-7 left-3 flex gap-1.5">
          {["bg-sky", "bg-blue-400", "bg-white", "bg-ink"].map((c) => (
            <span key={c} className={`size-5 rounded-full border border-white/40 ${c}`} />
          ))}
        </div>
      </div>
      <Float className="top-3 right-4">
        <PenTool className="size-4" />
      </Float>
    </>
  );
}

function Seo() {
  return (
    <>
      <div className="absolute inset-x-6 top-9 space-y-2.5">
        <div className="flex items-center gap-2 rounded-full border border-white/20 bg-ink/75 px-3 py-2 backdrop-blur-sm">
          <Search className="size-3.5 text-sky" />
          <Line w="55%" className="bg-white/50" />
        </div>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`flex items-start gap-2 rounded-xl border p-2.5 backdrop-blur-sm ${
              i === 0 ? "border-sky/60 bg-sky/15" : "border-white/10 bg-ink/60"
            }`}
          >
            <span
              className={`grid size-5 shrink-0 place-items-center rounded-full text-[10px] font-semibold ${
                i === 0 ? "bg-sky text-ink" : "bg-white/15 text-white"
              }`}
            >
              {i + 1}
            </span>
            <div className="flex-1 space-y-1.5">
              <Line w="70%" className={i === 0 ? "bg-sky" : "bg-white/50"} />
              <Line w="95%" />
              <Line w="60%" />
            </div>
          </div>
        ))}
      </div>
      <Float className="right-4 bottom-4 size-9">
        <TrendingUp className="size-4" />
      </Float>
    </>
  );
}

function Hosting() {
  return (
    <>
      <div className="absolute inset-x-6 top-9 space-y-2.5">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="flex items-center justify-between rounded-xl border border-white/15 bg-ink/75 px-3 py-3 backdrop-blur-sm"
          >
            <div className="flex items-center gap-2.5">
              <motion.span
                animate={{ opacity: [1, 0.35, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                className="size-2 rounded-full bg-emerald-400"
              />
              <div className="space-y-1.5">
                <Line w="72px" className="bg-white/60" />
                <Line w="44px" />
              </div>
            </div>
            <div className="flex items-end gap-1">
              {[10, 16, 12, 20].map((h, j) => (
                <span
                  key={j}
                  style={{ height: h }}
                  className="w-1 rounded-full bg-sky/70"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <Float className="right-4 bottom-4" delay={0.6}>
        <ShieldCheck className="size-5" />
      </Float>
    </>
  );
}

const visuals: Record<VisualKind, () => React.JSX.Element> = {
  profile: Profile,
  landing: Landing,
  shop: Shop,
  dashboard: Dashboard,
  mobile: Mobile,
  design: Design,
  seo: Seo,
  hosting: Hosting,
};

export function ServiceVisual({ kind }: { kind: VisualKind }) {
  const Visual = visuals[kind];
  return (
    <Frame>
      <Visual />
    </Frame>
  );
}
