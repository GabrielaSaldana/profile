import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import routes from "../../routes/routes";

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.primary,
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
      <Link className={classes.anchor} to={routes.home()}>
        <Typography variant="h3" gutterBottom>
          About
        </Typography>
      </Link>
      <Link className={classes.anchor} to={routes.projects()}>
        <Typography variant="h3" gutterBottom>
          Projects
        </Typography>
      </Link>
      <Link className={classes.anchor} to={routes.contact()}>
        <Typography variant="h3" gutterBottom>
          Contact
        </Typography>
      </Link>
    </div>
  );
}

export default Index;
