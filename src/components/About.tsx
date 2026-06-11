import { aboutItems, quickStats } from "../data/portfolio";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <AnimatedSection id="about" className="px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="About Me"
              title="Focused on practical software work and steady growth."
              description="Danielius is building a software engineering foundation while already maintaining a real business website. The portfolio intentionally highlights one meaningful production project over a long list of demos."
            />
            <div className="mt-8 grid grid-cols-2 gap-3">
              {quickStats.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="rounded-lg border border-white/10 bg-white/[0.045] p-4 backdrop-blur-md"
                  >
                    <Icon className="mb-4 text-accent-soft" size={22} />
                    <p className="text-lg font-bold text-white">{item.value}</p>
                    <p className="mt-1 text-sm text-slate-400">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {aboutItems.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="group rounded-lg border border-white/10 bg-panel/[0.72] p-5 shadow-card backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-accent/35 hover:bg-panelSoft"
                >
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-lg border border-accent/20 bg-accent/10 text-accent-soft transition group-hover:border-accent/45 group-hover:bg-accent/[0.18]">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
