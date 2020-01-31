import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.secondary.main
  }
}));

function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <code>GABS PROFILE</code>
    </div>
  );
}

export default About;
