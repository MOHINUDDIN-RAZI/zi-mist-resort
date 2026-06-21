import { Container } from "@/components/ui";
import { colors, typography } from "@/theme";

const testimonials = [
  {
    name: "Ananya R.",
    text: "A peaceful escape surrounded by misty hills. Everything felt premium and calm.",
  },
  {
    name: "Rahul M.",
    text: "The villa view and hospitality were exceptional. Truly a luxury experience.",
  },
  {
    name: "Priya S.",
    text: "Perfect place to disconnect. The bonfire night was unforgettable.",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-10 md:py-12"
      style={{
        backgroundColor: colors.background.primary,
      }}
    >
      <Container>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p
            className="mb-3 text-xs uppercase tracking-[0.35em]"
            style={{ color: colors.primary.main }}
          >
            Guest Stories
          </p>

          <h2
            className={`${typography.heading} mb-4`}
            style={{ color: colors.text.primary }}
          >
            What Our Guests Feel
          </h2>

          <p
            className={typography.body}
            style={{ color: colors.text.secondary }}
          >
            Real experiences from people who stayed at Zi Mist Resort.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="group rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{
                backgroundColor: colors.background.secondary,
                borderColor: colors.border.primary,
              }}
            >
              <p
                className="mb-6 text-sm leading-relaxed"
                style={{ color: colors.text.secondary }}
              >
                “{item.text}”
              </p>

              <div className="flex items-center justify-between">
                <h4
                  className="text-sm font-medium tracking-wide"
                  style={{ color: colors.primary.main }}
                >
                  {item.name}
                </h4>

                <div style={{ color: colors.primary.main }} className="text-sm">
                  ★★★★★
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
