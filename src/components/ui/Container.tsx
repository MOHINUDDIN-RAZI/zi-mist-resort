import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return <div className={`mx-auto px-6 lg:px-16 ${className}`}>{children}</div>;
}
