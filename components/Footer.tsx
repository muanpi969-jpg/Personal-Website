import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] py-8">
      <div className="section-shell flex flex-col gap-5 text-[0.6rem] font-medium uppercase tracking-[0.14em] text-stone-600 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Pau Muan Tung Hatlang</p>
        <p className="text-stone-500">AI / ML Developer · New Delhi, India</p>
        <a href="#top" className="group inline-flex items-center gap-2 text-gold-light transition-colors hover:text-bone">
          Back to top <ArrowUpRight size={13} className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </footer>
  );
}
