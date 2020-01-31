import { createMuiTheme } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const textPrimary = grey["500"]; // #263238

const theme = createMuiTheme({
  palette: {
    primary: {
      main: textPrimary
    }
  }
});

export default theme;
