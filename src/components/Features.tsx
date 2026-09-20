import { Stagger, StaggerItem } from "./motion";
import { SectionHeading } from "./SectionHeading";
import { SpotlightCard } from "./SpotlightCard";
import { features } from "@/lib/content";

export function Features() {
  return (
    <section
      id="keunggulan"
      className="relative border-y border-white/5 bg-surface/60 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="02"
          eyebrow="Keunggulan"
          title={
            <>
              Fondasi yang <span className="text-gradient">kokoh</span>, hasil yang bisa diandalkan
            </>
          }
          description="Kami percaya website yang baik bukan sekadar indah, tetapi juga cepat, aman, dan mudah dikembangkan."
        />

        <Stagger className="mt-14 grid gap-4 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description, className }, i) => (
            <StaggerItem key={title} className={`h-full ${className ?? ""}`}>
              <SpotlightCard className="h-full p-7">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-400">
                  {description}
                </p>

                {i === 0 && <CodeSnippet />}
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function CodeSnippet() {
  return (
    <pre
      aria-hidden="true"
      className="mt-6 overflow-x-auto rounded-xl border border-white/5 bg-black/30 p-4 font-mono text-xs leading-relaxed text-slate-400"
    >
      <code>
        <span className="text-blue-400">const</span> bisnis = {"{"}
        {"\n"}  fondasi: <span className="text-sky">&quot;kokoh&quot;</span>,
        {"\n"}  tumbuh: <span className="text-sky">&quot;berkelanjutan&quot;</span>,
        {"\n"}  template: <span className="text-amber-300">false</span>,
        {"\n"}
        {"}"};
      </code>
    </pre>
  );
}
