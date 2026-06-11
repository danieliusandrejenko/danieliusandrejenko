import { languages, timeline } from "../data/portfolio";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";

export function ExperienceEducation() {
  return (
    <AnimatedSection id="experience" className="px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experience & Education"
          title="Responsible independent work, backed by software studies."
          description="The experience section connects Danielius's current studies with the reliability and customer focus developed through independent work."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.72fr]">
          <div className="space-y-5">
            {timeline.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-lg border border-white/10 bg-panel/[0.72] p-6 shadow-card backdrop-blur-xl transition hover:-translate-y-1 hover:border-accent/35"
                >
                  <div className="flex flex-col gap-5 sm:flex-row">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-accent/20 bg-accent/10 text-accent-soft">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm font-semibold text-accent-pale">{item.subtitle}</p>
                      <p className="mt-4 text-sm leading-7 text-slate-300">{item.body}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.045] p-6 shadow-card backdrop-blur-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-soft">
              Languages
            </p>
            <h3 className="mt-3 text-2xl font-bold text-white">Communication</h3>
            <div className="mt-6 space-y-4">
              {languages.map((language) => {
                const Icon = language.icon;
                return (
                  <div key={language.name} className="rounded-lg border border-white/10 bg-panel/[0.72] p-4">
                    <div className="flex items-center gap-3">
                      <Icon size={20} className="text-accent-soft" />
                      <div>
                        <p className="font-bold text-white">{language.name}</p>
                        <p className="text-sm text-slate-400">{language.level}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
