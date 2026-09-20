"use client";

import { MotionConfig } from "motion/react";

export function Providers({ children }: { children: React.ReactNode }) {
  // Hormati pengaturan "reduce motion" milik pengguna
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
