import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { caseStudyPoints, projectTech } from "../data/portfolio";

type CaseStudyModalProps = {
  open: boolean;
  onClose: () => void;
};

export function CaseStudyModal({ open, onClose }: CaseStudyModalProps) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[80] grid place-items-center bg-ink/[0.82] px-4 py-8 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          onClick={onClose}
        >
          <motion.div
            className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl border border-white/[0.12] bg-panel p-6 shadow-card sm:p-8"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.24 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-soft">
                  Case Study
                </p>
                <h3 id="case-study-title" className="mt-3 font-display text-3xl font-bold text-white">
                  Doraseda Butikas
                </h3>
              </div>
              <button
                type="button"
                className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.06] text-slate-200 transition hover:bg-white/[0.12] hover:text-white"
                onClick={onClose}
                aria-label="Close case study"
              >
                <X size={20} />
              </button>
            </div>

            <p className="mt-6 text-base leading-8 text-slate-300">
              Designed and developed a real e-commerce website for a small business selling
              diamond painting kits, creative sets, and related products. The work included
              setup, design customization, content management, product organization, and ongoing
              improvements.
            </p>

            <div className="mt-8 grid gap-4">
              {caseStudyPoints.map((point) => (
                <article key={point.title} className="rounded-lg border border-white/10 bg-white/[0.045] p-5">
                  <h4 className="text-lg font-bold text-white">{point.title}</h4>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{point.text}</p>
                </article>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-bold text-white">Technologies Used</h4>
              <div className="mt-4 flex flex-wrap gap-3">
                {projectTech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent-pale"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
