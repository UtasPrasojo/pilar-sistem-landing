import { Reveal } from "./motion";

type Props = {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "center",
}: Props) {
  const center = align === "center";
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="font-mono text-sm tracking-wide text-sky">
        <span className="text-sky/60">{index}</span> — {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
