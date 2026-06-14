import Hero from "@/components/sections/Hero";
import ExperienceStrip from "@/components/sections/ExperienceStrip";
import AboutSection from "@/components/sections/AboutSection";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <ExperienceStrip />
      <AboutSection />
    </main>
  );
}
