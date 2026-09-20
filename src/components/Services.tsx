import { Stagger, StaggerItem } from "./motion";
import { SectionHeading } from "./SectionHeading";
import { ServiceVisual } from "./ServiceVisuals";
import { SpotlightCard } from "./SpotlightCard";
import { services, type Service } from "@/lib/content";

/**
 * Tata letak papan catur: tiap layanan = satu tile teks + satu tile visual.
 * - di bawah `sm`  : ditumpuk (teks lalu visual)
 * - `sm`–`lg`      : 2 kolom, posisi teks/visual bergantian tiap baris
 * - `lg` ke atas   : 4 kolom, baris 1 = T V T V, baris 2 = V T V T, dst.
 */
function orderClasses(i: number) {
  const flipSm = i % 2 === 1;
  const flipLg = (i >> 1) % 2 === 1;
  const sm = flipSm ? "sm:order-2" : "";
  const lg = flipLg ? "lg:order-2" : flipSm ? "lg:order-none" : "";
  return `${sm} ${lg}`;
}

function ServiceCard({
  service,
  index,
  className,
}: {
  service: Service;
  index: number;
  className: string;
}) {
  const { icon: Icon, title, description, tag } = service;
  return (
    <SpotlightCard
      rounded="rounded-3xl"
      className={`bg-linear-to-br from-panel to-surface ${className}`}
    >
      <div className="flex h-full min-h-72 flex-col p-6">
        <p className="font-mono text-xs text-sky/80">{tag}</p>
        <h3 className="mt-3 text-xl leading-snug font-semibold text-white">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          {description}
        </p>

        <div className="mt-auto flex items-end justify-between pt-8">
          <span className="font-display text-6xl leading-none font-semibold tracking-tight text-white/95">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="inline-flex size-10 items-center justify-center rounded-xl border border-sky/20 bg-sky/10 text-sky transition-colors group-hover:bg-sky/20">
            <Icon className="size-5" />
          </span>
        </div>
      </div>
    </SpotlightCard>
  );
}

export function Services() {
  return (
    <section id="layanan" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="01"
          eyebrow="Layanan"
          title={
            <>
              Satu tim untuk semua kebutuhan <span className="text-gradient">digital</span> Anda
            </>
          }
          description="Dari halaman sederhana sampai sistem yang kompleks — kami bantu wujudkan dengan pendekatan yang rapi dan terukur."
        />

        <Stagger gap={0.1} className="mt-14 grid gap-4 sm:gap-5 lg:grid-cols-4">
          {services.map((service, i) => (
            <StaggerItem
              key={service.title}
              className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:col-span-2"
            >
              <ServiceCard service={service} index={i} className={orderClasses(i)} />
              <ServiceVisual kind={service.visual} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
