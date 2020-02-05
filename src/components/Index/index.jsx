import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.primary,
    border: "1px solid grey",
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    textAlign: "center"
  },
  anchor: {
    color: theme.extendedPalette.purpleContrast.main,
    textDecoration: "none",
    "&:hover": {
      color: theme.extendedPalette.greenContrast.main
    }
  }
}));

function Index() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <a className={classes.anchor} href="#about">
        <Typography variant="h3" gutterBottom>
          About
        </Typography>
      </a>
      <a className={classes.anchor} href="timeline">
        <Typography variant="h3" gutterBottom>
          Timeline
        </Typography>
      </a>
      <a className={classes.anchor} href="projects">
        <Typography variant="h3" gutterBottom>
          Projects
        </Typography>
      </a>
    </div>
  );
}

export default Index;
