import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router-dom";
import portfolio from "../../portfolio";
import { Typography } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import GpsFixedOutlinedIcon from "@material-ui/icons/GpsFixedOutlined";

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
    padding: "50px !important",
    backgroundColor: theme.extendedPalette.redContrast.light
  },
  goals: {
    height: theme.spacing(60),
    padding: "50px !important",
    backgroundColor: theme.extendedPalette.redContrast.light
  },
  reserach: {
    height: theme.spacing(60),
    padding: "50px !important",
    backgroundColor: theme.extendedPalette.redContrast.light
  },
  customer: {
    height: theme.spacing(60),
    padding: "50px !important",
    backgroundColor: theme.extendedPalette.redContrast.light
  },
  prototyping: {
    height: theme.spacing(60),
    padding: "50px !important",
    backgroundColor: theme.extendedPalette.redContrast.light
  },
  learnings: {
    height: theme.spacing(60),
    padding: "50px !important",
    backgroundColor: theme.extendedPalette.redContrast.light
  },
  textDescription: {
    textAlign: "justify",
    fontSize: "1rem"
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
            <Typography variant="h1" gutterBottom style={{ height: "90px" }}>
              {result.title}
            </Typography>
            <List>
              <Typography>MY ROLE</Typography>
              {result.my_role.map((role, index) => (
                <ListItem key={index}>
                  <Typography className={classes.textDescription}>
                    {role}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={6}>
            <Typography className={classes.textDescription}>
              {result.desc}
            </Typography>
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
            <Typography variant="h1" gutterBottom style={{ height: "90px" }}>
              Project Goals
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Grid container spacing={2}>
              {result.goals.map((goal, index) => (
                <Grid item xs={6} key={index}>
                  <GpsFixedOutlinedIcon fontSize="large" color="primary" />
                  <Typography className={classes.textDescription}>
                    {goal}
                  </Typography>
                </Grid>
              ))}
            </Grid>
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
            <Typography variant="h1" gutterBottom style={{ height: "90px" }}>
              Research Methods
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Grid container spacing={2}>
              {result.research.map((method, index) => (
                <Grid item xs={6} key={index}>
                  {method.icon}
                  <Typography className={classes.textDescription}>
                    {method.title}
                  </Typography>
                </Grid>
              ))}
            </Grid>
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
