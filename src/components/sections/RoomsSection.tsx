import { Button, Container } from "@/components/ui";
import { colors, typography } from "@/theme";

import { rooms } from "@/data/rooms";
import { useNavigate } from "react-router-dom";

export default function RoomsSection() {
  const navigate = useNavigate();
  return (
    <section
      id="rooms"
      className="py-10 md:py-12"
      style={{
        backgroundColor: colors.background.secondary,
      }}
    >
      <Container>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p
            className="mb-3 text-xs uppercase tracking-[0.35em]"
            style={{ color: colors.primary.main }}
          >
            Featured Stays
          </p>

          <h2
            className={`${typography.heading} mb-4`}
            style={{ color: colors.text.primary }}
          >
            Crafted for Unforgettable Escapes
          </h2>

          <p
            className={typography.body}
            style={{ color: colors.text.secondary }}
          >
            Discover thoughtfully designed spaces that blend comfort, elegance,
            and nature.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {rooms.map((room) => (
            <div
              key={room.title}
              className="group overflow-hidden rounded-3xl"
              style={{
                backgroundColor: colors.background.tertiary,
                border: `1px solid ${colors.border.primary}`,
              }}
            >
              <div className="overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <h3
                    className="text-xl font-semibold"
                    style={{ color: colors.text.primary }}
                  >
                    {room.title}
                  </h3>

                  <span
                    className="text-sm font-medium"
                    style={{ color: colors.primary.main }}
                  >
                    {room.price}
                  </span>
                </div>

                <p className="mb-6" style={{ color: colors.text.secondary }}>
                  {room.description}
                </p>

                <Button
                  fullWidth
                  variant="outlined"
                  sx={{ borderWidth: 2 }}
                  onClick={() => navigate(`/rooms/${room.slug}`)}
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
