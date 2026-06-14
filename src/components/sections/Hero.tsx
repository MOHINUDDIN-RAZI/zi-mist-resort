import { Button, Container } from "@/components/ui";
import { typography, colors } from "@/theme";
import backgroundImage from "@/assets/images/background.png";

export default function Hero() {
  return (
    <section className="relative  overflow-hidden md:pb-40">
      <img
        src={backgroundImage}
        alt="Luxury resort surrounded by nature"
        className="absolute inset-0 h-full w-full object-cover scale-100"
      />

      <div className="absolute inset-0 z-1 overflow-hidden pointer-events-none">
        <div className="mist mist-1" />
        <div className="mist mist-2" />
        <div className="mist mist-3" />
      </div>

      <div
        className="absolute inset-0  backdrop-brightness-80 backdrop-contrast-105"
        style={{
          background: `
            linear-gradient(
              to bottom,
              rgba(0,0,0,0.80) 20%,
              rgba(0,0,0,0.45) 45%,
              rgba(0,0,0,0.25) 100%
            )
          `,
        }}
      />

      <Container className="relative z-10  items-center pt-36 md:pt-60 xl:pt-24">
        <div
          className="max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000"
          style={{ color: colors.text.primary }}
        >
          <p
            className="mb-4 uppercase tracking-[0.3em]"
            style={{ color: colors.primary.main }}
          >
            Luxury Resort & Homestay
          </p>

          <h1 className={`${typography.hero} mb-6`}>
            Escape Into Nature's Luxury
          </h1>

          <p
            className={`${typography.body} mb-10 max-w-2xl`}
            style={{ color: colors.text.secondary }}
          >
            Where misty landscapes, elegant stays, and timeless experiences come
            together.
          </p>

          <div className="flex flex-col xl:flex-row gap-4">
            <Button size="large">Book Your Stay</Button>

            <Button size="large" variant="outlined" sx={{ borderWidth: 2 }}>
              Explore Rooms
            </Button>
          </div>

          <p className="mt-6 text-sm" style={{ color: colors.text.muted }}>
            Rated 4.9★ by over 1,000 guests • Nature • Luxury • Wellness
          </p>
        </div>
      </Container>

      <button
        onClick={() =>
          document.getElementById("experience")?.scrollIntoView({
            behavior: "smooth",
          })
        }
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 hidden xl:block"
      >
        <div
          className="flex h-10 w-6 justify-center rounded-full border"
          style={{
            borderColor: colors.text.muted,
          }}
        >
          <div
            className="mt-2 h-2 w-2 animate-bounce rounded-full"
            style={{
              backgroundColor: colors.primary.main,
            }}
          />
        </div>
      </button>
      <div
        className="absolute bottom-0 left-0 right-0 h-48 z-5"
        style={{
          background: "linear-gradient(to bottom, transparent, #0A0A0A)",
        }}
      />
    </section>
  );
}
