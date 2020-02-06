import React from "react";
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
import ProgressBar from "./components/ProgressBar";
import Projects from "./components/Projects";
import ProfileImage from "./components/ProfileImage";
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
  },
  stickyMenu: {
    position: "fixed",
    height: "100%",
    backgroundColor: "#F2F3F7"
  },
  scrollableSide: {
    marginLeft: "18%"
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
        <Grid container>
          <Grid item xs={2} className={classes.stickyMenu}>
            <div className={classes.paper}>
              <Toolbar id="back-to-top-anchor" />
              <ProfileImage />
              <Index />
              <Persona />
              <ProgressBar />
            </div>
          </Grid>
          <Grid item xs={10} className={classes.scrollableSide}>
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
