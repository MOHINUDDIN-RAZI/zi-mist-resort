import Hero from "@/components/sections/Hero";
import ExperienceStrip from "@/components/sections/ExperienceStrip";
import AboutSection from "@/components/sections/AboutSection";
import RoomsSection from "@/components/sections/RoomsSection";
import AmenitiesSection from "@/components/sections/AmenitiesSection";
import GallerySection from "@/components/sections/GallerySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />

      <section id="hero" className="scroll-mt-24 md:scroll-mt-28">
        <Hero />
      </section>

      <section id="experience" className="scroll-mt-24 md:scroll-mt-28">
        <ExperienceStrip />
      </section>

      <section id="about" className="scroll-mt-24 md:scroll-mt-28">
        <AboutSection />
      </section>

      <section id="rooms" className="scroll-mt-24 md:scroll-mt-28">
        <RoomsSection />
      </section>

      <section id="amenities" className="scroll-mt-24 md:scroll-mt-28">
        <AmenitiesSection />
      </section>

      <section id="gallery" className="scroll-mt-24 md:scroll-mt-28">
        <GallerySection />
      </section>

      <section id="testimonials" className="scroll-mt-24 md:scroll-mt-28">
        <TestimonialsSection />
      </section>

      <section id="contact" className="scroll-mt-24 md:scroll-mt-28">
        <Footer />
      </section>
    </main>
  );
}
