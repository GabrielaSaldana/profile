import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.extendedPalette.purpleContrast.main
  }
}));

function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <code><Typography variant="h1">GABS PROFILE</Typography></code>
    </div>
  );
}

export default About;
