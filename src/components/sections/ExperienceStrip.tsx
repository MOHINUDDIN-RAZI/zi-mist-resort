import { Hotel, Landscape, Restaurant, Spa } from "@mui/icons-material";

import { Container, Card } from "@/components/ui";
import { colors } from "@/theme";

const items = [
  {
    icon: <Hotel fontSize="large" />,
    title: "Luxury Villas",
  },
  {
    icon: <Landscape fontSize="large" />,
    title: "Scenic Views",
  },
  {
    icon: <Restaurant fontSize="large" />,
    title: "Fine Dining",
  },
  {
    icon: <Spa fontSize="large" />,
    title: "Wellness",
  },
];

export default function ExperienceStrip() {
  return (
    <section id="experience" className="relative z-20 py-10 md:py-12">
      <Container>
        <Card className="p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {items.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center gap-3"
              >
                <div
                  style={{
                    color: colors.primary.main,
                  }}
                >
                  {item.icon}
                </div>

                <h3
                  style={{
                    color: colors.text.primary,
                  }}
                  className="font-medium"
                >
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </Card>
      </Container>
    </section>
  );
}
