import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, Container } from "@/components/ui";
import { colors, typography } from "@/theme";
import { rooms } from "@/data/rooms";

export default function RoomDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const room = rooms.find((item) => item.slug === slug);

  if (!room) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <h2>Room not found</h2>
      </section>
    );
  }

  return (
    <section
      className="min-h-screen py-6"
      style={{
        backgroundColor: colors.background.primary,
      }}
    >
      {" "}
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 px-4 py-2 rounded-full  ml-2   transition xl:my-6 xl:ml-16 cursor-pointer hover:opacity-60"
      >
        <ArrowBackIcon fontSize="medium" className="hover:-translate-x-0.5" />
        back
      </button>
      <Container>
        {/* Top Section */}
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          {/* Left Image */}
          <div>
            <img
              src={room.image}
              alt={room.title}
              className="w-full h-60 md:h-110 rounded-4xl object-cover"
            />
          </div>

          {/* Right Details */}
          <div>
            <p
              className="uppercase tracking-[0.3em] text-sm mb-3"
              style={{ color: colors.primary.main }}
            >
              Luxury Stay
            </p>

            <h1
              className={typography.hero}
              style={{ color: colors.text.primary }}
            >
              {room.title}
            </h1>

            <p className="mt-6" style={{ color: colors.text.secondary }}>
              {room.description}
            </p>

            <div
              className="mt-8 flex flex-wrap gap-8 border-y py-6"
              style={{
                borderColor: colors.border.primary,
              }}
            >
              <div>
                <p
                  className="text-xs uppercase tracking-widest"
                  style={{ color: colors.text.muted }}
                >
                  Price
                </p>

                <p
                  className="mt-1 text-lg font-semibold"
                  style={{ color: colors.primary.main }}
                >
                  {room.price}
                </p>
              </div>

              <div>
                <p
                  className="text-xs uppercase tracking-widest"
                  style={{ color: colors.text.muted }}
                >
                  Size
                </p>

                <p
                  className="mt-1 text-lg font-semibold"
                  style={{ color: colors.text.primary }}
                >
                  {room.size}
                </p>
              </div>

              <div>
                <p
                  className="text-xs uppercase tracking-widest"
                  style={{ color: colors.text.muted }}
                >
                  Occupancy
                </p>

                <p
                  className="mt-1 text-lg font-semibold"
                  style={{ color: colors.text.primary }}
                >
                  {room.occupancy}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              {room.highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full px-4 py-2 text-sm font-medium"
                  style={{
                    backgroundColor: `${colors.primary.main}15`,
                    color: colors.primary.main,
                    border: `1px solid ${colors.primary.main}40`,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Amenities Full Width */}
        {/* Amenities */}
        <div className="mt-20">
          <p
            className="text-xs uppercase tracking-[0.35em] mb-3"
            style={{ color: colors.primary.main }}
          >
            Included Amenities
          </p>

          <h2
            className="text-3xl mb-10"
            style={{
              color: colors.text.primary,
              fontFamily: "Cormorant Garamond, serif",
            }}
          >
            Everything You Need For A Perfect Stay
          </h2>

          <div
            className="grid gap-y-6 md:grid-cols-2 lg:grid-cols-3"
            style={{
              borderTop: `1px solid ${colors.border.primary}`,
              borderBottom: `1px solid ${colors.border.primary}`,
              paddingTop: "2rem",
              paddingBottom: "2rem",
            }}
          >
            {room.features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <span
                  className="text-lg"
                  style={{
                    color: colors.primary.main,
                  }}
                >
                  ✦
                </span>

                <span
                  className="text-base"
                  style={{
                    color: colors.text.secondary,
                  }}
                >
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Full Width */}
        <div className="mt-6 py-10 text-center">
          <h3
            className="text-3xl mb-4"
            style={{
              color: colors.text.primary,
              fontFamily: "Cormorant Garamond, serif",
            }}
          >
            Reserve Your Escape
          </h3>

          <p
            className="mb-8 max-w-xl mx-auto"
            style={{ color: colors.text.secondary }}
          >
            Experience comfort, nature and unforgettable moments at Zi Mist
            Resort.
          </p>

          <Button
            onClick={() =>
              navigate("/booking", {
                state: { room: room.title },
              })
            }
            sx={{ borderWidth: 2 }}
            variant="outlined"
          >
            Book This Room
          </Button>
        </div>
      </Container>
    </section>
  );
}
