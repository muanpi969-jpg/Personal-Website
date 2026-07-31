"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BrainCircuit, ExternalLink } from "lucide-react";
import type { IconType } from "react-icons";
import { SiDocker, SiFfmpeg, SiHuggingface, SiPython, SiPytorch, SiStreamlit } from "react-icons/si";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type Tech = {
  name: string;
  icon: IconType;
};

type Project = {
  number: string;
  name: string;
  subtitle: string;
  description: string;
  tags: Tech[];
  image: string;
  imageAlt: string;
  link: string;
};

const brainIcon = BrainCircuit as unknown as IconType;

const projects: Project[] = [
  {
    number: "01",
    name: "Document Q&A",
    subtitle: "Extractive QA with Transformers",
    description:
      "An extractive Question Answering application designed to pull precise answers from long, complex documents (legal forms, medical records) without generating new text. Built on deepset/roberta-base-squad2.",
    tags: [
      { name: "Python", icon: SiPython },
      { name: "PyTorch", icon: SiPytorch },
      { name: "Hugging Face", icon: SiHuggingface },
      { name: "Streamlit", icon: SiStreamlit },
    ],
    image: "/document-qa.jpg",
    imageAlt: "Document Q&A application interface",
    link: "https://ai-document-transformers-muanpi.streamlit.app/",
  },
  {
    number: "02",
    name: "Transformer-Based Text Summarizer",
    subtitle: "Abstractive Summarization System",
    description:
      "A web platform comparing architectural trade-offs between encoder-decoder models (BART vs T5) under real-world runtime constraints, focusing on inference latency and output caching.",
    tags: [
      { name: "BART", icon: brainIcon },
      { name: "T5", icon: brainIcon },
      { name: "NLP", icon: SiHuggingface },
      { name: "Python", icon: SiPython },
    ],
    image: "/text-summarizer.jpg",
    imageAlt: "Transformer text summarization application interface",
    link: "https://muanpi-ai-text-summarizer.streamlit.app/",
  },
  {
    number: "03",
    name: "Smart Video CV Optimizer",
    subtitle: "Two-Pass Video Encoding Engine",
    description:
      "A specialized video compression app for scholarship and RSSP application videos. Compresses 60–90 second HD recordings under strict 20 MB limits while preserving facial clarity and running speech-focused audio cleanup.",
    tags: [
      { name: "FFmpeg", icon: SiFfmpeg },
      { name: "Docker", icon: SiDocker },
      { name: "Python", icon: SiPython },
      { name: "Streamlit", icon: SiStreamlit },
    ],
    image: "/video-optimizer.jpg",
    imageAlt: "Smart Video CV Optimizer application interface",
    link: "https://muanpi-cv-video-optimizer.streamlit.app/",
  },
];

function TechnologyBadge({ technology }: { technology: Tech }) {
  const Icon = technology.icon;
  return (
    <span className="inline-flex items-center gap-2 border border-white/[0.09] bg-white/[0.025] px-2.5 py-1.5 text-[0.62rem] font-medium uppercase tracking-[0.08em] text-stone-300">
      <Icon size={13} className="text-gold-light" />
      {technology.name}
    </span>
  );
}

export function Work() {
  return (
    <section id="work" className="border-y border-white/[0.08] bg-[#0c0c0b] py-28 sm:py-36 lg:py-44">
      <div className="section-shell">
        <Reveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading eyebrow="02 · Selected Work" title="Systems built for useful, real-world constraints." />
          <p className="max-w-xs text-sm leading-6 text-stone-500 md:mb-2">
            Three deployed tools shaped by practical concerns: reliability, speed, access, and clarity.
          </p>
        </Reveal>

        <div className="mt-20 space-y-8 sm:mt-28 sm:space-y-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.85, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="group glass-panel relative grid overflow-hidden lg:grid-cols-[0.94fr_1.06fr]"
            >
              <a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} live demo`} className={`project-image relative block min-h-[18rem] overflow-hidden bg-[#131313] ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <img src={project.image} alt={project.imageAlt} className="absolute inset-0 h-full w-full object-cover" />
                <span className="absolute left-5 top-5 z-10 border border-white/15 bg-black/35 px-3 py-1.5 font-mono text-[0.63rem] tracking-[0.16em] text-gold-light backdrop-blur-sm">
                  LIVE PRODUCT
                </span>
                <span className="absolute bottom-5 right-5 z-10 grid h-10 w-10 place-items-center rounded-full border border-gold/60 bg-black/35 text-gold-light backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-gold group-hover:text-ink">
                  <ExternalLink size={16} />
                </span>
              </a>
              <div className={`flex min-h-[23rem] flex-col justify-between p-7 sm:p-10 lg:p-12 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <span className="display-font text-5xl leading-none text-gold sm:text-6xl">{project.number}</span>
                    <a href={project.link} target="_blank" rel="noreferrer" className="mt-1 inline-flex items-center gap-2 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-stone-500 transition-colors hover:text-gold-light">
                      Open demo <ArrowUpRight size={14} />
                    </a>
                  </div>
                  <p className="mt-11 text-[0.64rem] font-semibold uppercase tracking-[0.17em] text-gold-light">{project.subtitle}</p>
                  <h3 className="display-font mt-3 max-w-xl text-4xl leading-[0.92] tracking-[-0.04em] text-bone sm:text-5xl">{project.name}</h3>
                  <p className="mt-6 max-w-xl text-sm leading-7 text-stone-400">{project.description}</p>
                </div>
                <div className="mt-10 flex flex-wrap gap-2">
                  {project.tags.map((technology) => <TechnologyBadge key={technology.name} technology={technology} />)}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
