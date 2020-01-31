import { createMuiTheme } from "@material-ui/core/styles";
import { grey, deepOrange } from "@material-ui/core/colors";

const textPrimary = grey["800"]; // #263238
const orange = deepOrange["500"];// #ff5722

const theme = createMuiTheme({
  palette: {
    primary: {
      main: textPrimary
    },
    secondary: {
      main: orange
    }
  }
});

export default theme;
