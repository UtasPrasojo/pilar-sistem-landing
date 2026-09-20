"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { ease } from "./motion";
import { navItems, whatsappUrl } from "@/lib/content";

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6"
    >
      <nav
        aria-label="Navigasi utama"
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-300 sm:px-5 ${
          scrolled || open
            ? "border-white/10 bg-ink/80 shadow-lg shadow-black/20 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <a href="#beranda" aria-label="Pilar Sistem — ke atas" onClick={() => setOpen(false)}>
          <Logo priority />
        </a>

        <ul
          className="hidden items-center gap-1 lg:flex"
          onMouseLeave={() => setHovered(null)}
        >
          {navItems.map((item, i) => (
            <li key={item.href}>
              <a
                href={item.href}
                onMouseEnter={() => setHovered(item.href)}
                onFocus={() => setHovered(item.href)}
                className="relative flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm text-slate-300 transition-colors hover:text-white"
              >
                {hovered === item.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/8"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative font-mono text-[11px] text-sky/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="relative">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <motion.a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="hidden items-center gap-1.5 rounded-full bg-blue-500 px-4 py-2 text-sm whitespace-nowrap font-medium text-white shadow-lg shadow-blue-500/25 transition-colors hover:bg-blue-400 sm:inline-flex"
          >
            Hubungi Kami
            <ArrowUpRight className="size-4" />
          </motion.a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className="inline-flex size-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25, ease }}
            className="mx-auto mt-2 max-w-6xl origin-top overflow-hidden rounded-2xl border border-white/10 bg-ink/95 p-3 shadow-2xl shadow-black/40 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.3, ease }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-200 transition-colors hover:bg-white/5"
                  >
                    <span className="font-mono text-xs text-sky/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-1.5 rounded-xl bg-blue-500 px-4 py-3 text-sm font-medium text-white"
            >
              Hubungi Kami
              <ArrowUpRight className="size-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
