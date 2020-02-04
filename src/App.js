import React from "react";
// import logo from "./logo.svg";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import theme from "./theme";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import About from "./components/About";
import Persona from "./components/Persona";
import Index from "./components/Index";
import Presentation from "./components/Presentation";
import Contact from "./components/Contact";
import TimeLine from "./components/TimeLine";
import Projects from "./components/Projects";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary
  }
}));

function App() {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <Persona />
              <Index />
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper className={classes.paper}>
              <Presentation />
              <Contact />
              <About />
              <TimeLine />
              <Projects />
              <Projects />
              <Projects />
              <Projects />
              <Projects />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
