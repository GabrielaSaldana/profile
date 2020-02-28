import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ProgressBar from "../ProgressBar";

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.primary,
    padding: theme.spacing(1)
  },
  description: {
    textAlign: "justify",
    padding: theme.spacing(1)
  },
  subTitle: {
    textAlign: "left",
    marginBottom: theme.spacing(2),
    color: theme.extendedPalette.pinkContrast.main
  }
}));

function Persona() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.subTitle}>
        <Typography variant="h2">ABOUT ME</Typography>
      </div>
      <Typography className={classes.description}>
        Gabriela is a hardworking person that aims to understand all the
        processes involved in Software creation and delivery.
      </Typography>
      <ProgressBar />
    </div>
  );
}

export default Persona;
