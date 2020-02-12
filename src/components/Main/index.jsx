import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import About from "../About";
import Contact from "../Contact";
import TimeLine from "../TimeLine";
import Projects from "../Projects";

const useStyles = makeStyles(theme => ({
  main: {
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
    <div id="main" className={classes.main} style={{ padding: "8px" }}>
      <Contact />
      <About />
      <TimeLine />
      <Projects />
    </div>
  );
}

export default Main;
