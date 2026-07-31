"use client";

import { motion } from "framer-motion";
import { Box, Braces, Cpu, RadioTower } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";
import { SiC, SiDocker, SiFfmpeg, SiGit, SiHuggingface, SiJavascript, SiLinux, SiNumpy, SiPandas, SiPython, SiPytorch, SiStreamlit } from "react-icons/si";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type Capability = {
  title: string;
  detail: string;
  progress: number;
  icon: LucideIcon;
};

const capabilities: Capability[] = [
  { title: "Machine Learning & NLP", detail: "PyTorch, Hugging Face, RoBERTa, BART, SQuAD 2.0", progress: 90, icon: Cpu },
  { title: "Languages", detail: "Python 3.10+, C, SQL, JavaScript", progress: 85, icon: Braces },
  { title: "Media Processing", detail: "FFmpeg, FFprobe, Audio Normalization", progress: 80, icon: RadioTower },
  { title: "DevOps & Systems", detail: "Docker, Linux, Streamlit Cloud, Git", progress: 75, icon: Box },
];

const stackMarks: Array<{ name: string; icon: IconType }> = [
  { name: "Python", icon: SiPython },
  { name: "PyTorch", icon: SiPytorch },
  { name: "Hugging Face", icon: SiHuggingface },
  { name: "Streamlit", icon: SiStreamlit },
  { name: "FFmpeg", icon: SiFfmpeg },
  { name: "Docker", icon: SiDocker },
  { name: "Linux", icon: SiLinux },
  { name: "Git", icon: SiGit },
  { name: "JavaScript", icon: SiJavascript },
  { name: "C", icon: SiC },
  { name: "NumPy", icon: SiNumpy },
  { name: "Pandas", icon: SiPandas },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="section-shell py-28 sm:py-36 lg:py-44">
      <Reveal className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div>
          <SectionHeading eyebrow="03 · Capabilities" title="Technical range, grounded in practice." />
          <p className="mt-9 max-w-md text-base leading-7 text-stone-500">
            An interdisciplinary toolkit built by shipping applications, optimizing performance, and working through real constraints.
          </p>
        </div>
        <div className="grid gap-px border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group min-h-64 bg-[#0a0a0a] p-7 sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <Icon size={20} strokeWidth={1.35} className="text-gold-light" />
                  <span className="font-mono text-xs text-gold-light">{capability.progress}%</span>
                </div>
                <h3 className="mt-16 text-base font-medium tracking-[-0.02em] text-bone">{capability.title}</h3>
                <p className="mt-3 min-h-12 text-xs leading-5 text-stone-500">{capability.detail}</p>
                <div className="mt-6 h-px overflow-hidden bg-white/[0.12]">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#9d762b] to-gold-light"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${capability.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.25, delay: 0.2 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </Reveal>
      <Reveal delay={0.12} className="mt-10 border-y border-white/[0.08] py-5 sm:mt-14">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-12">
          <p className="shrink-0 text-[0.61rem] font-semibold uppercase tracking-[0.16em] text-stone-500">Core toolkit</p>
          <div className="flex flex-wrap gap-x-5 gap-y-4">
            {stackMarks.map((technology) => {
              const Icon = technology.icon;
              return (
                <span key={technology.name} className="inline-flex items-center gap-2 text-xs text-stone-400 transition-colors hover:text-gold-light">
                  <Icon size={15} className="text-gold-light" />
                  {technology.name}
                </span>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
