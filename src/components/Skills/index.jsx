import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.primary,
    padding: theme.spacing(5), // This padding is used to separate teh nav-bar from the content
    textAlign: "left",
  },
  attributeLabels: {
    textAlign: "left",
  },
  backgrounBar: {
    backgroundColor: theme.palette.primary.light,
  },
  mainColorBar: {
    backgroundColor: theme.palette.primary.main,
  },
  subTitle: {
    textAlign: "left",
    marginBottom: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  bar: {
    width: "50%",
  },
}));

const myAttributes = [
  {
    name: "creativity",
    value: 100,
  },
  {
    name: "self-taught",
    value: 100,
  },
  {
    name: "critical thinking",
    value: 100,
  },
  {
    name: "technical",
    value: 90,
  },
  {
    name: "strategic thinking",
    value: 80,
  },
  {
    name: "communicative",
    value: 80,
  },
  {
    name: "friendly",
    value: 100,
  },
  {
    name: "enthusiactic",
    value: 100,
  },
];

function ProgressBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {myAttributes.map((attribute, index) => (
        <Grid container key={index} direction="row">
          <Grid item md={3} lg={3} xl={3}></Grid>
          <Grid item xs={5} sm={5} md={4} lg={3} xl={3}>
            <Typography
              gutterBottom
              className={classes.attributeLabels}
              variant="h3"
            >
              {attribute.name}
            </Typography>
          </Grid>
          <Grid item xs={5} sm={5} md={4} lg={3} xl={3}>
            <LinearProgress
              variant="determinate"
              value={attribute.value}
              classes={{
                colorPrimary: classes.backgrounBar,
                barColorPrimary: classes.mainColorBar,
              }}
            />
          </Grid>
          <Grid item md={3} lg={3} xl={3}></Grid>
        </Grid>
      ))}
    </div>
  );
}

export default ProgressBar;
