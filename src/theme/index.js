import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
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
    h1: {
      fontSize: "24px",
    },
    h2: {
      fontSize: "20px",
    },
    h3: {
      fontSize: "16px",
    },
    h4: {
      fontSize: "14px",
    },
    h5: {
      fontSize: "13px",
    },
    h6: {
      fontSize: "12px",
    },
  },
});
