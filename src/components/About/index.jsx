import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.extendedPalette.purpleContrast.main,
    border: "1px solid grey",
    margin: theme.spacing(1)
  }
}));

function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={4}>
          <code>Who am I?</code>
        </Grid>
        <Grid item xs={4}>
          <code>Anime!</code>
        </Grid>
        <Grid item xs={4}>
          <code>Plants</code>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
