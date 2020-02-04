import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ProgressBar from "../ProgressBar";
import Gabs from "../../images/me.png";

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.primary,
    border: "1px solid grey",
    margin: theme.spacing(1),
    padding: theme.spacing(1),
  },
  profileImg: {
    weight: theme.spacing(25),
    height: theme.spacing(25),
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(0.5),
    borderRadius: 100
  },
  description: {
    textAlign: "justify",
    padding: theme.spacing(1)
  }
}));

function Persona() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img id="me" className={classes.profileImg} src={Gabs} alt="Myself" />
      <Typography className={classes.description}>
        Gabriela is a hardworking person that aims to understand all the
        processes involved in Software creation and delivery.
      </Typography>
      <ProgressBar />
    </div>
  );
}

export default Persona;
