import Image from "next/image";
import logoBlack from "@/app/pilar-sistem-black.png";
import logoBlue from "@/app/pilar-sistem-blue.png";
import logoWhite from "@/app/pilar-sistem-white.png";

const marks = {
  /** Untuk latar gelap (default — seluruh situs ini berlatar navy gelap). */
  white: logoWhite,
  /** Untuk latar terang. */
  blue: logoBlue,
  black: logoBlack,
};

export function LogoMark({
  variant = "white",
  className = "h-9 w-auto",
  priority = false,
}: {
  variant?: keyof typeof marks;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={marks[variant]}
      alt=""
      aria-hidden="true"
      priority={priority}
      className={className}
    />
  );
}

export function Logo({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark priority={priority} />
      <span className="font-display text-xl font-semibold tracking-tight text-white">
        Pilar<span className="text-sky">Sistem</span>
      </span>
    </span>
  );
}
