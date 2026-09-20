"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/content";

export function FloatingWhatsApp() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setVisible(y > 500));

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat via WhatsApp"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="fixed right-5 bottom-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-blue-500 text-white shadow-xl shadow-blue-500/40 sm:right-8 sm:bottom-8"
        >
          <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-blue-500/40" />
          <MessageCircle className="size-6" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
