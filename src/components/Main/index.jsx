import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import About from "../About";
import Contact from "../Contact";
import TimeLine from "../TimeLine";
import Projects from "../Projects";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles(theme => ({
  paper: {
    textAlign: "center",
    color: theme.palette.text.primary
  },
  toolBar: {
    minHeight: theme.spacing(1)
  }
}));

function Main() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} style={{ padding: "8px" }}>
      <Toolbar id="back-to-top-anchor" className={classes.toolBar} />
      <Contact />
      <About />
      <TimeLine />
      <Projects />
    </Paper>
  );
}

export default Main;
