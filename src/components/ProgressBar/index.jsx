import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.primary,
    border: "1px solid grey",
    margin: theme.spacing(0.5)
  },
  attributeLabels: {
    textAlign: "left",
    color: theme.palette.text.secondary
  },
  backgrounBar: {
    backgroundColor: theme.extendedPalette.cyanContrast.light
  },
  mainColorBar: {
    backgroundColor: theme.extendedPalette.cyanContrast.main
  }
}));

const myAttributes = [
  {
    name: "creativity",
    value: 80
  },
  {
    name: "self-taught person",
    value: 100
  },
  {
    name: "methodical",
    value: 90
  }
];
console.log(myAttributes);

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
          <Grid item xs={6}>
            <Typography
              variant="body2"
              gutterBottom
              className={classes.attributeLabels}
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
