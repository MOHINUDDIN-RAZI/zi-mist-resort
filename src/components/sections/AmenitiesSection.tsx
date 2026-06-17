import { Container } from "@/components/ui";
import { colors, typography } from "@/theme";
import ParkIcon from "@mui/icons-material/Park";
import PoolIcon from "@mui/icons-material/Pool";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SpaIcon from "@mui/icons-material/Spa";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import WifiIcon from "@mui/icons-material/Wifi";
import FireplaceIcon from "@mui/icons-material/Whatshot";
import HikingIcon from "@mui/icons-material/Hiking";

const amenities = [
  { icon: <ParkIcon />, title: "Nature Walks" },
  { icon: <PoolIcon />, title: "Infinity Pool" },
  { icon: <RestaurantIcon />, title: "Fine Dining" },
  { icon: <SpaIcon />, title: "Spa & Wellness" },
  { icon: <LocalParkingIcon />, title: "Free Parking" },
  { icon: <WifiIcon />, title: "High-Speed WiFi" },
  { icon: <FireplaceIcon />, title: "Bonfire Nights" },
  { icon: <HikingIcon />, title: "Guided Trekking" },
];

export default function AmenitiesSection() {
  return (
    <section
      id="amenities"
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
            Resort Facilities
          </p>

          <h2
            className={`${typography.heading} mb-4`}
            style={{ color: colors.text.primary }}
          >
            Everything You Need for a Perfect Stay
          </h2>

          <p
            className={typography.body}
            style={{ color: colors.text.secondary }}
          >
            Thoughtfully designed amenities to elevate your comfort, relaxation,
            and experience.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {amenities.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col items-center gap-3 rounded-2xl p-6 transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: colors.background.secondary,
                border: `1px solid ${colors.border.primary}`,
              }}
            >
              <div
                className="transition-colors duration-300 group-hover:scale-110"
                style={{
                  color: colors.primary.main,
                }}
              >
                {item.icon}
              </div>

              <h3
                className="text-center text-sm font-medium md:text-base"
                style={{ color: colors.text.primary }}
              >
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
