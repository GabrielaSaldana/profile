import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.extendedPalette.purpleContrast.main,
    border: "1px solid grey",
    margin: theme.spacing(1)
  }
}));

function Persona() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <code>
        <Typography variant="h1">GABS IMAGE</Typography>
      </code>
    </div>
  );
}

export default Persona;
