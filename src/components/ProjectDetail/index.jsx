import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router-dom";
import portfolio from "../../portfolio";

const useStyles = makeStyles(theme => ({

}));

function ProjectDetail() {
  const classes = useStyles();
  const { projectId } = useParams();

  const result = portfolio.find(obj => {
    return obj.project_id === projectId;
  });

  console.log(result);

  return (
    <div id="details" className={classes.root}>
      <Grid container spacing={3}>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={6}>
            <div>{result.title}</div>
          </Grid>
          <Grid item xs={6}>
            <div>Problem Description</div>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <div>Main Image</div>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={6}>
            <div>Project Goals Title</div>
          </Grid>
          <Grid item xs={6}>
            <Paper>Project Goals</Paper>
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={6}>
            <div>Research Methods Title</div>
          </Grid>
          <Grid item xs={6}>
            <Paper>Research Methods</Paper>
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={6}>
            <div>Customer MindSet Title</div>
          </Grid>
          <Grid item xs={6}>
            <Paper>Customer MindSet</Paper>
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={6}>
            <div>Prototyping Title</div>
          </Grid>
          <Grid item xs={6}>
            <Paper>Prototyping</Paper>
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={6}>
            <div>Learnings Title</div>
          </Grid>
          <Grid item xs={6}>
            <Paper>Learnings</Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProjectDetail;
