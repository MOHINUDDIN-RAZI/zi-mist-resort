import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container } from "@/components/ui";
import { colors, shadows } from "@/theme";
import { NAV_ITEMS } from "@/constants/navigation";
import logo from "@/assets/images/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isNavigating) return;

      let current = "#hero";

      const navbar = document.querySelector("header");
      const offset = (navbar?.clientHeight ?? 80) + 20;

      let closestSection = "#hero";
      let minDistance = Number.MAX_VALUE;

      NAV_ITEMS.forEach((item) => {
        const el = document.querySelector(item.path);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top);

        if (rect.top <= offset && distance < minDistance) {
          minDistance = distance;
          closestSection = item.path;
        }
      });

      current = closestSection;

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10
      ) {
        current = "#contact";
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isNavigating, NAV_ITEMS]);

  const handleScrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (!el) return;

    setIsNavigating(true);
    setActiveSection(id);

    const navbar = document.querySelector("header");
    const navbarHeight = navbar?.clientHeight ?? 40;

    const top =
      el.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 16;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    setTimeout(
      () => {
        setIsNavigating(false);
      },
      window.innerWidth < 768 ? 1500 : 800,
    );
  };

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
          to="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection("#hero");
          }}
          className="flex items-center gap-0.5 group relative hover:scale-110 transition-transform duration-300 -ml-4 md:ml-0"
        >
          <img
            src={logo}
            alt="Zi Mist Resort Logo"
            className="w-18 h-18 object-contain"
          />

          <h1
            className="absolute text-[12px] tracking-wide transition-colors duration-300 w-60 top-7 left-13"
            style={{ color: colors.text.primary }}
          >
            Mist Resort
          </h1>
        </Link>

        <nav className="hidden xl:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.path;

            return (
              <Link
                key={item.label}
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection(item.path);
                }}
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
                  style={{ backgroundColor: colors.primary.main }}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden xl:block">
            <Button
              variant="outlined"
              size="small"
              sx={{ borderWidth: 2 }}
              onClick={() => navigate("/booking")}
            >
              Book Now
            </Button>
          </div>

          <button
            className="xl:hidden"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            style={{ color: colors.text.primary }}
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </Container>

      {mobileMenuOpen && (
        <div className="xl:hidden border-t bg-black/30 backdrop-blur-md">
          <div className="flex flex-col p-6 gap-6">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.path;

              return (
                <a
                  key={item.label}
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();

                    setMobileMenuOpen(false);

                    setTimeout(() => {
                      handleScrollToSection(item.path);
                    }, 100);
                  }}
                  style={{
                    color: isActive ? colors.primary.main : colors.text.primary,
                  }}
                >
                  {item.label}
                </a>
              );
            })}

            <Button
              variant="outlined"
              size="small"
              sx={{ borderWidth: 2 }}
              onClick={() => navigate("/booking")}
            >
              Book Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
