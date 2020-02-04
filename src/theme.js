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
  }
});

export default theme;
