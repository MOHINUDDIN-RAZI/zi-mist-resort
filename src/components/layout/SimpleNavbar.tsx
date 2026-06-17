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
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} className="w-18 h-18 object-contain" />
          <span style={{ color: colors.text.primary }}>Mist Resort</span>
        </Link>
      </Container>
    </header>
  );
}
