import aboutImage from "@/assets/images/about.png";

import { Button, Container } from "@/components/ui";
import { colors, typography } from "@/theme";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const highlights = [
  "Scenic Mountain Views",
  "Luxury Accommodations",
  "Curated Experiences",
  "Fine Dining",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-10 md:py-12"
      style={{
        backgroundColor: colors.background.primary,
      }}
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl">
            <img
              src={aboutImage}
              alt="Zi Mist Resort"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div>
            <p
              className="mb-3 text-xs uppercase tracking-[0.35em]"
              style={{ color: colors.primary.main }}
            >
              About Zi Mist Resort
            </p>

            <h2
              className={`${typography.heading} mb-6`}
              style={{ color: colors.text.primary }}
            >
              Escape Into Serenity
            </h2>

            <p
              className={`${typography.body} mb-8 max-w-lg`}
              style={{ color: colors.text.secondary }}
            >
              Nestled amidst misty landscapes, Zi Mist Resort offers a retreat
              where luxury and nature exist in harmony.
            </p>

            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircleIcon
                    sx={{
                      color: colors.primary.main,
                      fontSize: 20,
                    }}
                  />

                  <span
                    style={{
                      color: colors.text.secondary,
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Button variant="outlined" sx={{ borderWidth: 2 }}>
              Discover More
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
