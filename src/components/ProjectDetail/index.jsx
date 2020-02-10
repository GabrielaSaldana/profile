import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router-dom";
import portfolio from "../../portfolio";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "12px",
    width: "auto",
    marginLeft: theme.spacing(1),
    color: theme.palette.text.primary
  },
  mainImg: {
    height: theme.spacing(70),
    backgroundColor: theme.extendedPalette.redContrast.light
  },
  summary: {
    height: theme.spacing(60),
    backgroundColor: theme.extendedPalette.purpleContrast.light
  },
  goals: {
    height: theme.spacing(60),
    backgroundColor: theme.extendedPalette.pinkContrast.light
  },
  reserach: {
    height: theme.spacing(60),
    backgroundColor: theme.extendedPalette.greenContrast.light
  },
  customer: {
    height: theme.spacing(60),
    backgroundColor: theme.extendedPalette.cyanContrast.light
  },
  prototyping: {
    height: theme.spacing(60),
    backgroundColor: theme.extendedPalette.yellowContrast.light
  },
  learnings: {
    height: theme.spacing(60),
    backgroundColor: theme.extendedPalette.greyContrast.main
  }
}));

function ProjectDetail() {
  const classes = useStyles();
  const { projectId } = useParams();

  const result = portfolio.find(obj => {
    return obj.project_id === projectId;
  });

  return (
    <div id="details">
      <Grid container spacing={3} className={classes.root}>
        <Grid
          id="mainImg"
          container
          item
          xs={12}
          spacing={3}
          className={classes.mainImg}
        >
          <Grid item xs={12}>
            <img
              src={result.image}
              alt={result.title}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </Grid>
        </Grid>
        <Grid
          id="summary"
          container
          item
          xs={12}
          spacing={3}
          className={classes.summary}
        >
          <Grid item xs={6}>
            <Typography variant="h1">{result.title}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Problem Description</Typography>
          </Grid>
        </Grid>
        <Grid
          id="goals"
          container
          item
          xs={12}
          spacing={3}
          className={classes.goals}
        >
          <Grid item xs={6}>
            <Typography>Project Goals Title</Typography>
          </Grid>
          <Grid item xs={6}>
            <Paper>
              <Typography>Project Goals</Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid
          id="research"
          container
          item
          xs={12}
          spacing={3}
          className={classes.reserach}
        >
          <Grid item xs={6}>
            <Typography>Research Methods Title</Typography>
          </Grid>
          <Grid item xs={6}>
            <Paper>
              <Typography>Research Methods</Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid
          id="customer"
          container
          item
          xs={12}
          spacing={3}
          className={classes.customer}
        >
          <Grid item xs={6}>
            <Typography>Customer MindSet Title</Typography>
          </Grid>
          <Grid item xs={6}>
            <Paper>
              <Typography>Customer MindSet</Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid
          id="prototyping"
          container
          item
          xs={12}
          spacing={3}
          className={classes.prototyping}
        >
          <Grid item xs={6}>
            <Typography>Prototyping Title</Typography>
          </Grid>
          <Grid item xs={6}>
            <Paper>
              <Typography>Prototyping</Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid
          id="learnings"
          container
          item
          xs={12}
          spacing={3}
          className={classes.learnings}
        >
          <Grid item xs={6}>
            <Typography>Learnings Title</Typography>
          </Grid>
          <Grid item xs={6}>
            <Paper>
              <Typography>Learnings</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProjectDetail;
