import { Link } from "react-router-dom";
import { Container } from "@/components/ui";
import { colors, shadows } from "@/theme";
import logo from "@/assets/images/logo.svg";

export default function SimpleNavbar() {
  return (
    <header
      className="fixed inset-x-0 top-0 z-50 bg-black/60 backdrop-blur-sm"
      style={{
        boxShadow: shadows.navbar,
        borderBottom: "2px solid",
        borderColor: colors.primary.main,
      }}
    >
      <Container className="flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-0.5 group relative hover:scale-110 transition-transform duration-300 -ml-4 md:ml-0"
        >
          <img src={logo} className="w-18 h-18 object-contain" />
          <h1
            className="absolute text-[12px] tracking-wide transition-colors duration-300 w-60 top-7 left-13"
            style={{ color: colors.text.primary }}
          >
            Mist Resort
          </h1>
        </Link>
      </Container>
    </header>
  );
}
