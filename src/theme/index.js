import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 740,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: "#fb4226",
      light: "#fa5238",
    },
    secondary: {
      main: "#00ac4d",
      light: "#8bc541",
    },
  },
  typography: {
    fontFamily: ['"Roboto"', "sans-serif"].join(","),
    h1: {
      fontSize: "24px",
      fontWeight: 500,
    },
    h2: {
      fontSize: "20px",
      fontWeight: 500,
    },
    h3: {
      fontSize: "16px",
      fontWeight: 500,
    },
    h4: {
      fontSize: "14px",
      fontWeight: 500,
    },
    h5: {
      fontSize: "13px",
      fontWeight: 500,
    },
    h6: {
      fontSize: "12px",
      fontWeight: 400,
    },
  },
});
