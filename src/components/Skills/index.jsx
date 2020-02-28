import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.primary,
    padding: theme.spacing(1),
    textAlign: "left",
    marginBottom: theme.spacing(6)
  },
  attributeLabels: {
    textAlign: "left"
  },
  backgrounBar: {
    backgroundColor: theme.palette.primary.light
  },
  mainColorBar: {
    backgroundColor: theme.palette.primary.main
  },
  subTitle: {
    textAlign: "left",
    marginBottom: theme.spacing(2),
    color: theme.extendedPalette.pinkContrast.main
  },
  bar: {
    width: "50%"
  }
}));

const myAttributes = [
  {
    name: "creativity",
    value: 80
  },
  {
    name: "self-taught",
    value: 100
  },
  {
    name: "methodical",
    value: 90
  },
  {
    name: "programming",
    value: 90
  },
  {
    name: "design thinking",
    value: 80
  },
  {
    name: "product design",
    value: 50
  },
];

function ProgressBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.subTitle}>
        <Typography variant="h1">SKILLS</Typography>
      </div>
      {myAttributes.map((attribute, index) => (
        <Grid
          container
          key={index}
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Grid item xs={5} sm={5} md={4} lg={3} xl={3}>
            <Typography
              gutterBottom
              className={classes.attributeLabels}
              variant="h4"
              color="secondary"
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
                barColorPrimary: classes.mainColorBar
              }}
            />
          </Grid>
        </Grid>
      ))}
    </div>
  );
}

export default ProgressBar;
