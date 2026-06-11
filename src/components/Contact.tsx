import { Send } from "lucide-react";
import { contactLinks } from "../data/portfolio";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <AnimatedSection id="contact" className="px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-xl border border-accent/[0.18] bg-panel/[0.78] shadow-card backdrop-blur-xl">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
              <SectionHeading
                eyebrow="Contact"
                title="Ready to discuss internships and junior developer opportunities."
                description="Reach out for opportunities involving web development, WordPress maintenance, or junior software development work."
              />
              <a
                href="mailto:danieliusandr@gmail.com"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-bold text-white shadow-glow transition hover:-translate-y-1 hover:bg-accent-soft"
              >
                <Send size={18} />
                Send Email
              </a>
            </div>

            <div className="grid gap-4 p-6 sm:grid-cols-2 sm:p-8 lg:p-10">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group rounded-lg border border-white/10 bg-white/[0.045] p-5 transition hover:-translate-y-1 hover:border-accent/35 hover:bg-white/[0.075]"
                  >
                    <Icon className="text-accent-soft transition group-hover:text-accent-pale" size={23} />
                    <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
                      {link.label}
                    </p>
                    <p className="mt-2 break-words text-base font-bold text-white">{link.value}</p>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
