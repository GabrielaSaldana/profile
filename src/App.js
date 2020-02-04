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
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Toolbar from "@material-ui/core/Toolbar";
import { KeyboardArrowUp } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary
  },
  upButton: {
    paddingLeft: theme.spacing(1.2)
  }
}));

function ScrollTop(props) {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100
  });

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div
        className={classes.upButton}
        onClick={handleClick}
        role="presentation"
      >
        {props.children}
      </div>
    </Zoom>
  );
}

function App(props) {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <Toolbar id="back-to-top-anchor" />
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
          <ScrollTop {...props}>
            <Fab
              color="secondary"
              size="medium"
              aria-label="scroll back to top"
            >
              <KeyboardArrowUp />
            </Fab>
          </ScrollTop>
        </Grid>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
