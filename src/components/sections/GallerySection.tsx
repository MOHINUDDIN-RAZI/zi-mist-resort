import { Container } from "@/components/ui";
import { colors, typography } from "@/theme";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

import img1 from "@/assets/images/gallery/drone.png";
import img2 from "@/assets/images/gallery/pool.png";
import img3 from "@/assets/images/gallery/interior.png";
import img4 from "@/assets/images/gallery/balcony.png";
import img5 from "@/assets/images/gallery/dinning.png";
import img6 from "@/assets/images/gallery/campfire.png";
import img7 from "@/assets/images/gallery/spa.png";

const images = [img1, img2, img3, img4, img5, img6, img7];

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="py-10 md:py-12"
      style={{
        backgroundColor: colors.background.secondary,
      }}
    >
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p
            className="mb-3 text-xs uppercase tracking-[0.35em]"
            style={{ color: colors.primary.main }}
          >
            Visual Journey
          </p>

          <h2
            className={`${typography.heading} mb-4`}
            style={{ color: colors.text.primary }}
          >
            Experience Zi Mist Resort
          </h2>

          <p
            className={typography.body}
            style={{ color: colors.text.secondary }}
          >
            A seamless flow of nature, luxury, and unforgettable moments.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, FreeMode]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          freeMode={true}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {images.map((img, index) => {
            const labels = [
              "Aerial Resort View",
              "Infinity Pool",
              "Luxury Interior",
              "Balcony Mist View",
              "Fine Dining Experience",
              "Bonfire Nights",
              "Spa & Wellness",
            ];

            return (
              <SwiperSlide key={index}>
                <div className="relative group overflow-hidden rounded-3xl">
                  <img
                    src={img}
                    alt={labels[index]}
                    className=" h-48 md:h-80 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />

                  <div
                    className="
                        absolute inset-0 flex items-center justify-center
                        opacity-0 scale-95
                        group-hover:opacity-100 group-hover:scale-100
                        transition-all duration-500
                      "
                  >
                    <div className="text-center px-6 py-3 rounded-2xl ">
                      <p className="text-white text-sm tracking-widest">
                        {labels[index]}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </section>
  );
}
