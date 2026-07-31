"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, Github, Linkedin, Mail, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { Reveal } from "./Reveal";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 650);
  }

  return (
    <section id="contact" className="relative border-t border-white/[0.08] bg-[#0d0d0c] py-28 sm:py-36 lg:py-44">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_18%_82%,rgba(201,162,75,0.11),transparent_27rem)]" />
      <div className="section-shell relative">
        <Reveal className="grid gap-16 lg:grid-cols-[0.86fr_1.14fr] lg:gap-24">
          <div>
            <p className="eyebrow">04 · Contact</p>
            <h2 className="display-font mt-5 text-6xl leading-[0.85] tracking-[-0.055em] text-bone sm:text-7xl lg:text-8xl">
              Let&apos;s build <span className="gold-text">something.</span>
            </h2>
            <p className="mt-8 max-w-sm text-base leading-7 text-stone-400">
              Currently open for opportunities and collaborations.
            </p>
            <div className="mt-12 space-y-4">
              <a href="mailto:muanpi969@gmail.com" className="group flex items-center gap-4 text-sm text-stone-300 transition-colors hover:text-gold-light">
                <span className="grid h-9 w-9 place-items-center border border-white/[0.1] text-gold-light transition-colors group-hover:border-gold/70"><Mail size={15} /></span>
                muanpi969@gmail.com
              </a>
              <a href="https://github.com/muanpi969-jpg" target="_blank" rel="noreferrer" className="group flex items-center gap-4 text-sm text-stone-300 transition-colors hover:text-gold-light">
                <span className="grid h-9 w-9 place-items-center border border-white/[0.1] text-gold-light transition-colors group-hover:border-gold/70"><Github size={15} /></span>
                github.com/muanpi969-jpg
              </a>
              <a href="https://www.linkedin.com/in/pau-muan-tung-hatlang-a55968343/" target="_blank" rel="noreferrer" className="group flex items-center gap-4 text-sm text-stone-300 transition-colors hover:text-gold-light">
                <span className="grid h-9 w-9 place-items-center border border-white/[0.1] text-gold-light transition-colors group-hover:border-gold/70"><Linkedin size={15} /></span>
                LinkedIn / Pau Muan Tung Hatlang
              </a>
            </div>
          </div>

          <form onSubmit={submitForm} className="glass-panel relative min-h-[29rem] p-6 sm:p-10">
            <AnimatePresence mode="wait">
              {status === "sent" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="flex min-h-[23rem] flex-col items-start justify-center"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-gold/70 text-gold-light"><Check size={21} /></span>
                  <h3 className="display-font mt-7 text-5xl leading-none text-bone">Message received.</h3>
                  <p className="mt-4 max-w-sm text-sm leading-7 text-stone-400">Thank you for reaching out. I&apos;ll get back to you as soon as I can.</p>
                  <button type="button" onClick={() => setStatus("idle")} className="mt-9 border-b border-white/25 pb-1 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-gold-light transition-colors hover:border-gold">
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
                    <p className="text-[0.63rem] font-semibold uppercase tracking-[0.17em] text-gold-light">Start a conversation</p>
                    <span className="font-mono text-[0.65rem] text-stone-600">01—03</span>
                  </div>
                  <div className="mt-8 space-y-7">
                    <label className="block">
                      <span className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-stone-500">Your name</span>
                      <input required name="name" autoComplete="name" placeholder="Name" className="mt-3 w-full border-b border-white/[0.12] bg-transparent pb-3 text-sm text-bone outline-none transition-colors placeholder:text-stone-700 focus:border-gold" />
                    </label>
                    <label className="block">
                      <span className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-stone-500">Your email</span>
                      <input required type="email" name="email" autoComplete="email" placeholder="you@example.com" className="mt-3 w-full border-b border-white/[0.12] bg-transparent pb-3 text-sm text-bone outline-none transition-colors placeholder:text-stone-700 focus:border-gold" />
                    </label>
                    <label className="block">
                      <span className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-stone-500">What are you building?</span>
                      <textarea required name="message" rows={4} placeholder="Tell me a little about the opportunity or project..." className="mt-3 w-full resize-none border-b border-white/[0.12] bg-transparent pb-3 text-sm leading-6 text-bone outline-none transition-colors placeholder:text-stone-700 focus:border-gold" />
                    </label>
                  </div>
                  <button disabled={status === "sending"} type="submit" className="mt-9 inline-flex items-center gap-3 border border-gold/70 bg-gold/[0.05] px-5 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-gold-light transition-all duration-500 hover:bg-gold hover:text-ink disabled:cursor-wait disabled:opacity-60">
                    {status === "sending" ? "Sending..." : "Send message"} <Send size={14} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
