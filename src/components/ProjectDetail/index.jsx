import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router-dom";
import portfolio from "../../portfolio";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
}));

function ProjectDetail() {
  const classes = useStyles();
  const { projectId } = useParams();

  const result = portfolio.find(obj => {
    return obj.project_id === projectId;
  });

  console.log(result);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}> Project Description</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Problem Description</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Main Image</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Project Goals Title</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Project Goals</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Research Methods Title</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Research Methods</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Customer MindSet Title</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Customer MindSet</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Prototyping Title</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Prototyping</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Learnings Title</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Learnings</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProjectDetail;
