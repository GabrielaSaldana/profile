import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import About from "./components/About";

function App() {
  console.log("theme:", theme);
  return (
    <MuiThemeProvider theme={theme}>
      <About />
    </MuiThemeProvider>
  );
}

export default App;
