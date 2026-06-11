import { motion } from "framer-motion";
import { ArrowDown, BriefcaseBusiness, Code2, Mail } from "lucide-react";
import { profileHighlights } from "../data/portfolio";

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-32 lg:pb-28">
      <div className="absolute inset-0 -z-20 bg-ink" />
      <div className="absolute inset-0 -z-10 bg-soft-grid bg-[length:42px_42px] opacity-45" />
      <div className="absolute left-0 top-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/[0.18] blur-[130px]" />
      <div className="absolute bottom-0 right-0 -z-10 h-[420px] w-[420px] translate-x-1/3 rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent-pale backdrop-blur-md">
            <BriefcaseBusiness size={16} />
            Open to internships and junior developer roles
          </div>

          <h1 className="max-w-5xl font-display text-5xl font-extrabold leading-[1.04] text-white sm:text-6xl lg:text-7xl">
            Danielius Andrejenko
          </h1>
          <p className="mt-5 text-xl font-semibold text-accent-pale sm:text-2xl">
            Software Systems Student & Aspiring Developer
          </p>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            First-year Software Systems student at Kaunas University of Technology (KTU).
            Passionate about software development, web development, and creating practical
            digital solutions. Currently seeking internship and junior developer opportunities.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#project"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-bold text-white shadow-glow transition hover:-translate-y-1 hover:bg-accent-soft focus:outline-none focus:ring-2 focus:ring-accent-soft focus:ring-offset-2 focus:ring-offset-ink"
            >
              <Code2 size={18} />
              View Project
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/[0.14] bg-white/[0.06] px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition hover:-translate-y-1 hover:border-accent/50 hover:bg-white/[0.12] focus:outline-none focus:ring-2 focus:ring-accent-soft focus:ring-offset-2 focus:ring-offset-ink"
            >
              <Mail size={18} />
              Contact Me
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {profileHighlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18 + index * 0.08, duration: 0.54 }}
                  className="rounded-lg border border-white/10 bg-white/[0.055] p-4 backdrop-blur-md transition hover:-translate-y-1 hover:border-accent/35 hover:bg-white/[0.08]"
                >
                  <Icon className="mb-3 text-accent-soft" size={22} />
                  <p className="text-sm font-semibold text-slate-100">{item.label}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[460px] lg:mr-0"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.82, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute -inset-4 rounded-[2rem] border border-accent/15 bg-accent/5 blur-sm" />
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.12] bg-panel/70 p-4 shadow-card backdrop-blur-xl">
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-panelSoft">
              <img
                src="/profile-danielius.webp"
                alt="Portrait of Danielius Andrejenko"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/[0.54] to-transparent p-5">
                <p className="text-sm font-semibold text-accent-pale">Junior Developer Portfolio</p>
                <p className="mt-1 text-2xl font-bold text-white">Real website experience</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {["C#", "Python", "WordPress"].map((label) => (
                <span
                  key={label}
                  className="rounded-lg border border-white/10 bg-white/[0.055] px-3 py-3 text-center text-sm font-bold text-slate-100"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="mx-auto mt-12 hidden h-12 w-12 animate-bounce place-items-center rounded-full border border-white/[0.12] bg-white/[0.06] text-slate-200 backdrop-blur-md transition hover:border-accent/40 hover:text-white md:grid"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
