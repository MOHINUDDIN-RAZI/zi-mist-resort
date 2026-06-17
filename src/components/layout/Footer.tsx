import { Container, Button } from "@/components/ui";
import { colors } from "@/theme";
import { useNavigate } from "react-router-dom";

const links = [
  { label: "Home", path: "#hero" },
  { label: "About", path: "#about" },
  { label: "Rooms", path: "#rooms" },
  { label: "Gallery", path: "#gallery" },
];

export default function Footer() {
  const navigate = useNavigate();
  const handleScrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (!el) return;

    const navbar = document.querySelector("header");
    const navbarHeight = navbar?.clientHeight ?? 80;

    const top =
      el.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 16;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="pt-20 pb-10"
      style={{
        backgroundColor: colors.background.primary,
        borderTop: `1px solid ${colors.border.primary}`,
      }}
    >
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h2
              className="text-2xl mb-4"
              style={{
                color: colors.primary.main,
                fontFamily: "Cormorant Garamond, serif",
              }}
            >
              Zi Mist Resort
            </h2>

            <p
              className="text-sm leading-relaxed"
              style={{ color: colors.text.secondary }}
            >
              A luxury escape into nature, comfort, and unforgettable
              experiences surrounded by misty hills.
            </p>
          </div>

          <div>
            <h3
              className="mb-4 text-sm uppercase tracking-widest"
              style={{ color: colors.text.primary }}
            >
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              {links.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleScrollToSection(item.path)}
                  className="text-left text-sm transition-colors cursor-pointer"
                  style={{
                    color: colors.text.secondary,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = colors.primary.main)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = colors.text.secondary)
                  }
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3
              className="mb-4 text-sm uppercase tracking-widest"
              style={{ color: colors.text.primary }}
            >
              Contact
            </h3>

            <div
              className="text-sm space-y-2"
              style={{ color: colors.text.secondary }}
            >
              <p>📍 Araku Valley, Andhra Pradesh</p>
              <p>📞 +91 8867350524</p>
              <p>✉️ bookings@zimistresort.com</p>
            </div>

            <div className="mt-5">
              <Button
                variant="outlined"
                sx={{ borderWidth: 2 }}
                onClick={() => navigate("/booking")}
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>

        <div
          className="mt-16 pt-6 text-center text-xs"
          style={{
            borderTop: `1px solid ${colors.border.primary}`,
            color: colors.text.muted,
          }}
        >
          © {new Date().getFullYear()} Zi Mist Resort. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
