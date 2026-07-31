"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const roles = ["AI / ML Developer", "Software Engineer", "Audio Engineer"];

function GoldParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const particlePositions = useMemo(() => {
    const positions = new Float32Array(520 * 3);

    for (let i = 0; i < positions.length; i += 3) {
      const radius = 2.5 + Math.random() * 7;
      const theta = Math.random() * Math.PI * 2;
      const height = (Math.random() - 0.5) * 7;
      positions[i] = Math.cos(theta) * radius;
      positions[i + 1] = height;
      positions[i + 2] = Math.sin(theta) * radius - 2;
    }

    return positions;
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.016;
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.045;
  });

  return (
    <points ref={pointsRef} position={[0, 0, -1]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[particlePositions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#e4c97e"
        size={0.026}
        sizeAttenuation
        transparent
        opacity={0.64}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function ParticleField() {
  return (
    <div aria-hidden="true" className="absolute inset-0 opacity-80">
      <Canvas camera={{ position: [0, 0, 6.5], fov: 56 }} dpr={[1, 1.5]} gl={{ antialias: false }}>
        <GoldParticles />
      </Canvas>
    </div>
  );
}

function Navigation() {
  return (
    <nav className="relative z-20 mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-7 sm:px-10 lg:px-20">
      <a href="#top" className="group flex items-center gap-3 text-sm font-semibold tracking-[-0.03em] text-bone">
        <span className="grid h-7 w-7 place-items-center rounded-full border border-gold/50 text-[0.62rem] text-gold-light transition-transform duration-500 group-hover:rotate-[360deg]">
          PM
        </span>
        <span className="hidden sm:block">Pau Muan</span>
      </a>
      <div className="hidden items-center gap-8 text-[0.67rem] font-medium uppercase tracking-[0.16em] text-stone-400 md:flex">
        <a href="#about" className="transition-colors hover:text-gold-light">About</a>
        <a href="#work" className="transition-colors hover:text-gold-light">Work</a>
        <a href="#capabilities" className="transition-colors hover:text-gold-light">Capabilities</a>
      </div>
      <div className="flex items-center gap-4">
        <a aria-label="GitHub" href="https://github.com/muanpi969-jpg" target="_blank" rel="noreferrer" className="text-stone-400 transition-colors hover:text-gold-light">
          <Github size={16} strokeWidth={1.6} />
        </a>
        <a aria-label="LinkedIn" href="https://www.linkedin.com/in/pau-muan-tung-hatlang-a55968343/" target="_blank" rel="noreferrer" className="text-stone-400 transition-colors hover:text-gold-light">
          <Linkedin size={16} strokeWidth={1.6} />
        </a>
      </div>
    </nav>
  );
}

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => setRoleIndex((current) => (current + 1) % roles.length), 2700);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden border-b border-white/[0.08]">
      <ParticleField />
      <div aria-hidden="true" className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_18%,#0a0a0a_73%)]" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 z-[2] h-1/3 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

      <Navigation />

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-6 pb-28 pt-14 sm:px-10 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl"
        >
          <p className="eyebrow">Portfolio · 2026</p>
          <h1 className="display-font mt-7 max-w-5xl text-[clamp(4.4rem,10.1vw,10rem)] leading-[0.72] tracking-[-0.065em] text-bone">
            Pau Muan Tung
            <span className="gold-text mt-5 block pl-[0.02em]">Hatlang.</span>
          </h1>
          <div className="mt-10 flex items-center gap-3 font-mono text-sm text-gold-light sm:text-base">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-light shadow-[0_0_16px_3px_rgba(228,201,126,0.45)]" />
            <span className="text-stone-500">I am an</span>
            <span className="relative inline-grid h-6 min-w-[11.5rem] overflow-hidden sm:min-w-[12.6rem]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[roleIndex]}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -16, opacity: 0 }}
                  transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 top-0 whitespace-nowrap"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>
          <p className="mt-6 max-w-xl text-base leading-7 text-stone-300 sm:text-lg">
            Building AI systems that make education accessible to everyone.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
            <Link href="#work" className="group inline-flex items-center gap-3 border border-gold/70 bg-gold/[0.04] px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-gold-light transition-all duration-500 hover:bg-gold hover:text-ink">
              View work <ArrowUpRight size={15} className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link href="#contact" className="group inline-flex items-center gap-2 border-b border-white/25 pb-1 text-xs font-semibold uppercase tracking-[0.15em] text-stone-200 transition-colors hover:border-gold hover:text-gold-light">
              Get in touch <span className="text-gold transition-transform duration-500 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-9 right-6 z-10 hidden items-center gap-3 text-[0.6rem] uppercase tracking-[0.18em] text-stone-500 sm:flex lg:right-20"
      >
        Scroll to explore <ArrowDown size={14} className="animate-bounce text-gold" />
      </motion.a>
    </section>
  );
}
