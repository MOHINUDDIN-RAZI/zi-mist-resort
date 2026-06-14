import Typography from "@mui/material/Typography";
import { typography } from "@/theme";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  center = true,
}: SectionTitleProps) {
  return (
    <div className={center ? "text-center" : ""}>
      <Typography variant="h2" className={typography.heading} gutterBottom>
        {title}
      </Typography>

      {subtitle && (
        <Typography
          variant="body1"
          color="text.secondary"
          className="max-w-2xl mx-auto"
        >
          {subtitle}
        </Typography>
      )}
    </div>
  );
}
