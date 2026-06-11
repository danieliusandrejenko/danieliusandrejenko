import { motion } from "framer-motion";
import { ExternalLink, FileText, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { projectLinks, projectMetrics, projectTech } from "../data/portfolio";
import { AnimatedSection } from "./AnimatedSection";
import { CaseStudyModal } from "./CaseStudyModal";
import { SectionHeading } from "./SectionHeading";

export function ProjectShowcase() {
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);

  return (
    <>
      <AnimatedSection id="project" className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Featured Project"
            title="Doraseda Butikas"
            description="The main focus of this portfolio: a real e-commerce website built and maintained for a small business serving customers across Lithuania."
            align="center"
          />

          <div className="mt-12 overflow-hidden rounded-xl border border-accent/[0.18] bg-panel/[0.78] shadow-card backdrop-blur-xl">
            <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="relative min-h-[420px] overflow-hidden bg-[#0a1322] p-5 sm:p-8">
                <div className="absolute inset-0 bg-soft-grid bg-[length:34px_34px] opacity-35" />
                <motion.div
                  className="relative mx-auto max-w-[760px]"
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 180, damping: 18 }}
                >
                  <div className="rounded-[1.35rem] border border-slate-600/50 bg-slate-950 p-3 shadow-2xl shadow-black/40">
                    <div className="mb-3 flex items-center gap-2 px-2">
                      <span className="h-3 w-3 rounded-full bg-red-400" />
                      <span className="h-3 w-3 rounded-full bg-amber-300" />
                      <span className="h-3 w-3 rounded-full bg-emerald-400" />
                      <span className="ml-3 h-5 flex-1 rounded-full bg-white/[0.08]" />
                    </div>
                    <div className="overflow-hidden rounded-lg border border-white/10 bg-white">
                      <img
                        src="/doraseda-desktop.png"
                        alt="Doraseda Butikas website desktop screenshot"
                        className="aspect-[16/10] w-full object-cover object-top"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-10 -right-2 hidden w-[170px] rounded-[1.6rem] border border-slate-600/70 bg-slate-950 p-2 shadow-2xl shadow-black/40 sm:block">
                    <div className="mx-auto mb-2 h-1 w-10 rounded-full bg-slate-700" />
                    <div className="overflow-hidden rounded-[1.1rem] border border-white/10 bg-white">
                      <img
                        src="/doraseda-mobile.png"
                        alt="Doraseda Butikas website mobile screenshot"
                        className="aspect-[9/16] w-full object-cover object-top"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent-pale">
                  <ShoppingBag size={16} />
                  Real e-commerce website
                </div>
                <h3 className="mt-6 font-display text-3xl font-bold text-white">Doraseda Butikas</h3>
                <p className="mt-4 text-base leading-8 text-slate-300">
                  Designed and developed a real e-commerce website for a small business selling
                  diamond painting kits, creative sets, and related products. Responsible for
                  website setup, design customization, content management, product organization,
                  and ongoing improvements.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-300">
                  The website provides product browsing, category navigation, and online shopping
                  functionality for customers across Lithuania.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {projectTech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-slate-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  {projectMetrics.map((metric) => (
                    <div key={metric.label} className="rounded-lg border border-white/10 bg-white/[0.045] p-4">
                      <p className="text-2xl font-bold text-white">{metric.value}</p>
                      <p className="mt-1 text-sm text-slate-400">{metric.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={projectLinks.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-bold text-white shadow-glow transition hover:-translate-y-1 hover:bg-accent-soft"
                  >
                    <ExternalLink size={18} />
                    {projectLinks.label}
                  </a>
                  <button
                    type="button"
                    onClick={() => setCaseStudyOpen(true)}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/[0.14] bg-white/[0.06] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.12]"
                  >
                    <FileText size={18} />
                    Read Case Study
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
      <CaseStudyModal open={caseStudyOpen} onClose={() => setCaseStudyOpen(false)} />
    </>
  );
}
