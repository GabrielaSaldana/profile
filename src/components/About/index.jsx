import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import About from "./about";
import TimeLine from "../TimeLine";
import Persona from "../Persona";
import Skills from "../Skills";
import CV from "../CV";

const useStyles = makeStyles(theme => ({
  main: {
    textAlign: "center",
    color: theme.palette.text.primary
  },
  toolBar: {
    minHeight: theme.spacing(1)
  },
}));

function Main() {
  const classes = useStyles();

  return (
    <div id="main" className={classes.main}>
      <Persona />
      <Skills />
      <About />
      <TimeLine />
      <CV />
    </div>
  );
}

export default Main;
