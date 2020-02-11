import { createMuiTheme } from "@material-ui/core/styles";
import {
  grey,
  orange,
  red,
  green,
  cyan,
  pink,
  indigo,
  yellow,
  deepPurple
} from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: indigo["A200"], //#536dfe
      light: indigo["100"] //#c5cae9
    },
    secondary: {
      main: orange["A400"], //#ff9100
      light: orange["100"] // #ffe0b2
    },
    text: {
      primary: grey["700"], //#616161
      secondary: grey["500"] //#9e9e9e
    }
  },
  extendedPalette: {
    redContrast: {
      main: red["400"], //#ef5350
      light: red["100"] //#ffcdd2
    },
    cyanContrast: {
      main: cyan["400"], //#26c6da
      light: cyan["100"] //#b2ebf2
    },
    pinkContrast: {
      main: pink["A100"], //#ff80ab
      light: pink["100"] //#f8bbd0
    },
    greenContrast: {
      main: green["A400"], //#00e676
      light: green["100"] //#c8e6c9
    },
    yellowContrast: {
      main: yellow["A700"], //#ffd600
      light: yellow["100"] //#fff9c4
    },
    purpleContrast: {
      main: deepPurple["300"], //#9575cd
      light: deepPurple["100"] //#d1c4e9
    },
    greyContrast: {
      main: grey["100"] //#F2F3F7
    }
  },
  typography: {
    fontFamily: "Noto Sans, sansSerif",

    body1: {
      fontSize: 14,
      fontWeight: 500
    },
    body2: {
      fontSize: 12,
      fontWeight: 500
    },

    button: {
      fontSize: 14,
      fontWeight: "bold",
      lineHeight: 1.3,
      textTransform: "none"
    },

    h1: {
      fontSize: 24,
      fontWeight: "bold"
    },
    h2: {
      fontSize: 24,
      fontWeight: 500
    },
    h3: {
      fontSize: 18,
      fontWeight: "bold"
    },
    h4: {
      fontSize: 16,
      fontWeight: 900
    },
    h5: {
      fontSize: 14
    },
    h6: {
      fontSize: 12,
      fontWeight: "bold"
    }
  },
  overrides: {
    MuiLinearProgress: {
      root: {
        paddingLeft: "10px",
        paddingRight: "10px",
        paddingBottom: "10px",
        paddingTop: "unset",
        borderRadius: 9
      }
    },
    MuiSvgIcon: {
      root: {
        fontSize: "2rem"
      }
    },
    MuiGrid: {
      // Name of the component ⚛️ / style sheet
      "spacing-xs-3": {
        "& > $item": {
          padding: 0
        }
      }
    }
  }
});

export default theme;
