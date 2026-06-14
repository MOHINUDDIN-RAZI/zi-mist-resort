import MuiCard from "@mui/material/Card";
import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <MuiCard
      className={cn("transition-all duration-300", className)}
      sx={{
        p: 3,
      }}
    >
      {children}
    </MuiCard>
  );
}
