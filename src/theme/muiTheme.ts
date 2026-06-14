import { createTheme } from "@mui/material/styles";
import { colors } from "./colors";

const muiTheme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: colors.primary.main,
    },

    secondary: {
      main: colors.secondary.main,
    },

    background: {
      default: colors.background.primary,
      paper: colors.background.secondary,
    },

    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
    },
  },

  typography: {
    fontFamily: "Inter, system-ui, sans-serif",

    h1: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 600,
    },

    h2: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 600,
    },

    h3: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 16,
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },

      styleOverrides: {
        root: {
          borderRadius: 9999,
          textTransform: "none",
          fontWeight: 600,
          padding: "12px 24px",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: colors.background.secondary,
          border: `1px solid ${colors.border.primary}`,
        },
      },
    },
  },
});

export default muiTheme;