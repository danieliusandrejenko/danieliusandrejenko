import { learningItems, skillGroups } from "../data/portfolio";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <AnimatedSection id="skills" className="px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="A growing toolkit for practical development."
          description="Core programming knowledge, web fundamentals, and WordPress experience are presented alongside the technologies Danielius is actively learning."
          align="center"
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <article
                key={group.title}
                className="rounded-lg border border-white/10 bg-white/[0.045] p-6 shadow-card backdrop-blur-xl transition hover:-translate-y-1 hover:border-accent/35"
              >
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-lg border border-accent/20 bg-accent/10 text-accent-soft">
                    <Icon size={23} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{group.title}</h3>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill}
                      className="rounded-lg border border-white/10 bg-panel/[0.72] px-4 py-4 text-center text-sm font-bold text-slate-100 transition hover:border-accent/45 hover:bg-accent/[0.12]"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 rounded-lg border border-accent/[0.18] bg-accent/[0.08] p-6 backdrop-blur-xl">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-soft">
                Currently Learning
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white">Sharpening the next layer</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {learningItems.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-slate-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
