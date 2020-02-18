import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.primary,
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    textAlign: "left"
  },
  attributeLabels: {
    textAlign: "left"
  },
  backgrounBar: {
    backgroundColor: theme.palette.primary.light
  },
  mainColorBar: {
    backgroundColor: theme.palette.primary.main
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
  }
];

function ProgressBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {myAttributes.map((attribute, index) => (
        <Grid
          container
          key={index}
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Grid item lg={5} xl={5}>
            <Typography
              gutterBottom
              className={classes.attributeLabels}
              color="secondary"
            >
              {attribute.name}
            </Typography>
          </Grid>
          <Grid item xs>
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
