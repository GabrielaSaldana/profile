import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    border: "1px solid grey",
    margin: theme.spacing(1)
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

function Projects() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1">
        <Grid container>
          <Grid item xs={4}>
            <Paper className={classes.paper}>Project 1</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>Project 2</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>Project 3</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>Project 4</Paper>
          </Grid>
        </Grid>
      </Typography>
    </div>
  );
}

export default Projects;
