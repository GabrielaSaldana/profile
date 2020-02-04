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
      main: indigo["A200"] //#536dfe
    },
    secondary: {
      main: orange["A400"] //#ff9100
    },
    text: {
      primary: grey["800"], // #424242
      secondary: grey["600"] //#616161
    }
  },
  extendedPalette: {
    redContrast: {
      main: red["400"] //#ef5350
    },
    cyanContrast: {
      main: cyan["400"] //#26c6da
    },
    pinkContrast: {
      main: pink["A100"] //#ff80ab
    },
    greenContrast: {
      main: green["A400"] //#00e676 
    },
    yellowContrast: {
      main: yellow["A700"] //#ffd600
    },
    purpleContrast: {
      main: deepPurple["300"], //#9575cd
    }
  },
  typography: {
    fontFamily: 'Fresca, sansSerif',

    body1: {
      fontSize: 14,
      fontWeight: 500,
    },
    body2: {
      fontSize: 12,
      fontWeight: 500,
    },

    button: {
      fontSize: 14,
      fontWeight: 'bold',
      lineHeight: 1.3,
      textTransform: 'none',
    },

    h1: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    h2: {
      fontSize: 24,
      fontWeight: 500,
    },
    h3: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    h4: {
      fontSize: 16,
      fontWeight: 900,
    },
    h5: {
      fontSize: 14,
    },
    h6: {
      fontSize: 12,
      fontWeight: 'bold',
    },
  },
});

export default theme;
