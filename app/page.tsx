import { About } from "@/components/About";
import { Capabilities } from "@/components/Capabilities";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <main className="grain overflow-hidden">
      <Hero />
      <About />
      <Work />
      <Capabilities />
      <Contact />
      <Footer />
    </main>
  );
}
