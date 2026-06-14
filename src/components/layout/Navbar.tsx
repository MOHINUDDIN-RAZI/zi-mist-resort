import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Container } from "@/components/ui";
import { colors, shadows } from "@/theme";
import { NAV_ITEMS } from "@/constants/navigation";
import logo from "@/assets/images/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/60 backdrop-blur-sm " : "bg-black/30 "
      }`}
      style={{
        boxShadow: scrolled ? shadows.navbar : "none",
        borderBottom: "2px solid",
        borderColor: colors.primary.main,
      }}
    >
      <Container className="flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-0.5 group relative hover:scale-110 transition-transform duration-300 -ml-4 md:ml-0"
        >
          <img
            src={logo}
            alt="Zi Mist Resort Logo"
            className="w-18 h-18 object-contain"
          />

          <h1
            className="absolute text-[12px] tracking-wide transition-colors duration-300 w-60 top-7 left-13"
            style={{
              color: colors.text.primary,
            }}
          >
            Mist Resort
          </h1>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.label}
                to={item.path}
                className="relative group transition-colors duration-300"
                style={{
                  color: isActive ? colors.primary.main : colors.text.secondary,
                }}
              >
                {item.label}

                <span
                  className={`absolute left-0 -bottom-1 h-0.5 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  } group-hover:w-full`}
                  style={{
                    backgroundColor: colors.primary.main,
                  }}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Button variant="outlined" size="small" sx={{ borderWidth: 2 }}>
              Book Now
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            style={{
              color: colors.text.primary,
            }}
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </Container>
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-black/30 backdrop-blur-md">
          <div className="flex flex-col p-6 gap-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color:
                    location.pathname === item.path
                      ? colors.primary.main
                      : colors.text.primary,
                }}
              >
                {item.label}
              </Link>
            ))}

            <Button variant="outlined" size="small" sx={{ borderWidth: 2 }}>
              Book Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
