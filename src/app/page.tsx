import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";
import { Features } from "@/components/Features";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Plans } from "@/components/Plans";
import { Process } from "@/components/Process";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Services } from "@/components/Services";
import { TechMarquee } from "@/components/TechMarquee";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <Services />
        <Features />
        <Process />
        <Plans />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
