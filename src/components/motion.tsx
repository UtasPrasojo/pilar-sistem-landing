"use client";

import { motion, type HTMLMotionProps, type Variants } from "motion/react";

export const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
};

/** Muncul (fade + naik) saat elemen masuk viewport. */
export function Reveal({ delay = 0, y = 24, children, ...props }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

const container = (staggerChildren: number, delayChildren: number): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};

type StaggerProps = HTMLMotionProps<"div"> & {
  gap?: number;
  delay?: number;
};

/** Container yang memunculkan anak-anaknya (StaggerItem) satu per satu. */
export function Stagger({ gap = 0.08, delay = 0, children, ...props }: StaggerProps) {
  return (
    <motion.div
      variants={container(gap, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div variants={item} {...props}>
      {children}
    </motion.div>
  );
}
