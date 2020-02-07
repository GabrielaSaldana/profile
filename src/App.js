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
import Projects from "./components/Projects";
import ProfileImage from "./components/ProfileImage";
import Fab from "@material-ui/core/Fab";
import Toolbar from "@material-ui/core/Toolbar";

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
  },
  fab: {
    margin: theme.spacing.unit
  },
  toolBar: {
    minHeight: theme.spacing(1)
  },
  linkButton: {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "1.5rem"
  }
}));

function App(props) {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={2} className={classes.stickyMenu}>
            <div className={classes.paper}>
              <ProfileImage />
              <Index />
              <Persona />
            </div>
          </Grid>
          <Grid item xs={10} className={classes.scrollableSide}>
            <Paper className={classes.paper}>
              <Toolbar id="back-to-top-anchor" className={classes.toolBar} />
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
          <div>
            <Fab
              color="secondary"
              aria-label="go to the top"
              lassName={classes.fab}
            >
              <a href="#back-to-top-anchor" className={classes.linkButton}>^</a>
            </Fab>
          </div>
        </Grid>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
