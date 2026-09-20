"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { MessageCircle, Send } from "lucide-react";
import { Reveal } from "./motion";
import { projectTypes, whatsappUrl } from "@/lib/content";

const fieldClass =
  "w-full rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-sky/60 focus:outline-none";

export function Contact() {
  const [name, setName] = useState("");
  const [type, setType] = useState(projectTypes[0]);
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const text = [
      "Halo Pilar Sistem,",
      `Nama saya ${name.trim()}.`,
      `Saya butuh: ${type}.`,
      message.trim() && `\n${message.trim()}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="kontak" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -z-10 size-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[140px]"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="relative overflow-hidden rounded-3xl border border-sky/20 bg-linear-to-br from-blue-600/25 via-panel/90 to-panel/90 p-8 sm:p-12 lg:p-14">
          <div className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_70%)]" aria-hidden="true" />

          <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-mono text-sm text-sky">
                <span className="text-sky/60">06</span> — Mulai Sekarang
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                Siap membangun <span className="text-gradient">pilar digital</span> bisnis Anda?
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-slate-300">
                Ceritakan kebutuhan Anda. Konsultasi awal gratis dan tanpa
                kewajiban — kami balas secepatnya lewat WhatsApp.
              </p>
              <a
                href={whatsappUrl("Halo Pilar Sistem, saya ingin konsultasi.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-sky transition-colors hover:text-white"
              >
                <MessageCircle className="size-4" />
                Atau langsung chat WhatsApp
              </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="nama" className="mb-1.5 block text-xs font-medium text-slate-300">
                  Nama
                </label>
                <input
                  id="nama"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nama Anda"
                  autoComplete="name"
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="kebutuhan" className="mb-1.5 block text-xs font-medium text-slate-300">
                  Kebutuhan
                </label>
                <select
                  id="kebutuhan"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className={fieldClass}
                >
                  {projectTypes.map((t) => (
                    <option key={t} value={t} className="bg-panel">
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="pesan" className="mb-1.5 block text-xs font-medium text-slate-300">
                  Ceritakan singkat (opsional)
                </label>
                <textarea
                  id="pesan"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Contoh: saya butuh website untuk usaha kuliner…"
                  className={`${fieldClass} resize-none`}
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-3.5 text-sm font-medium text-white shadow-xl shadow-blue-500/30 transition-colors hover:bg-blue-400"
              >
                Kirim via WhatsApp
                <Send className="size-4" />
              </motion.button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
