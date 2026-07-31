import { ArrowUpRight, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="section-shell relative py-28 sm:py-36 lg:py-44">
      <div className="grid items-start gap-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-24">
        <Reveal>
          <SectionHeading eyebrow="01 · About" title="A self-taught journey from displacement to deep learning." />
          <div className="mt-12 max-w-xl space-y-6 text-[0.98rem] leading-8 text-stone-400 sm:text-lg sm:leading-8">
            <p>
              I am a self-taught Computer Science student living in New Delhi with a strong focus on Artificial Intelligence, Natural Language Processing (NLP), and Machine Learning.
            </p>
            <p>
              My path in education has been unconventional. Instability in Myanmar forced my family to relocate to India, interrupting two years of formal schooling due to a lack of institutional re-enrollment options. Refusing to let that stop my education, I rebuilt my academic trajectory independently—earning my GED and completing Harvard University&apos;s CS50x course to master algorithmic thinking.
            </p>
            <p>
              Beyond coding, I manage live digital broadcasts and real-time sound mixing for 1,500+ attendees weekly. Right now, I am mastering university-level calculus and machine learning mathematics through the Refugee Student Settlement Pathway (RSSP), preparing to build AI systems that eliminate barriers and make quality learning accessible to everyone.
            </p>
          </div>
          <a href="#contact" className="mt-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-gold-light transition-colors hover:text-bone">
            Work with me <ArrowUpRight size={15} />
          </a>
        </Reveal>

        <Reveal delay={0.12} className="lg:pt-12">
          <div className="glass-panel relative overflow-hidden p-3 sm:p-4">
            <div className="absolute left-7 top-7 z-10 flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[0.6rem] uppercase tracking-[0.16em] text-bone backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> New Delhi, India
            </div>
            <div className="relative aspect-[0.86] overflow-hidden bg-[#151515]">
              <img src="/pau-portrait.jpg" alt="Pau Muan Tung Hatlang" className="h-full w-full object-cover object-center" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/75 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between border-t border-white/15 pt-4 text-[0.62rem] uppercase tracking-[0.16em] text-stone-300">
                <span>Self-taught / Systems-minded</span>
                <MapPin size={14} className="text-gold-light" />
              </div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 divide-x divide-white/[0.08] border-y border-white/[0.08] py-5 text-center">
            <div><p className="display-font text-3xl text-gold-light">03</p><p className="mt-1 text-[0.58rem] uppercase tracking-[0.14em] text-stone-500">Live projects</p></div>
            <div><p className="display-font text-3xl text-gold-light">1.5k+</p><p className="mt-1 text-[0.58rem] uppercase tracking-[0.14em] text-stone-500">Weekly audience</p></div>
            <div><p className="display-font text-3xl text-gold-light">CS50x</p><p className="mt-1 text-[0.58rem] uppercase tracking-[0.14em] text-stone-500">Independent</p></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
