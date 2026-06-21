import MuiButton from "@mui/material/Button";
import type { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

interface Props extends MuiButtonProps {
  loading?: boolean;
}

export default function Button({
  children,
  loading = false,
  disabled,
  startIcon,
  endIcon,
  ...props
}: Props) {
  return (
    <MuiButton
      {...props}
      disabled={disabled || loading}
      startIcon={!loading ? startIcon : undefined}
      endIcon={!loading ? endIcon : undefined}
    >
      {loading ? <CircularProgress size={20} color="inherit" /> : children}
    </MuiButton>
  );
}
