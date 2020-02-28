import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import routes from "../../routes/routes";

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.primary,
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    textAlign: "center"
  },
  anchor: {
    color: theme.extendedPalette.purpleContrast.main,
    textDecoration: "none",
    "&:hover": {
      color: theme.extendedPalette.greenContrast.main
    },
  },
  text: {
    marginBottom: theme.spacing(2)
  }
}));

function Index() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom className={classes.text}>
        <Link className={classes.anchor} to={routes.home()}>
          About
        </Link>
      </Typography>
      <Typography variant="h3" gutterBottom className={classes.text}>
        <Link className={classes.anchor} to={routes.projects()}>
          Projects
        </Link>
      </Typography>
      <Typography variant="h3" gutterBottom className={classes.text}>
        <Link className={classes.anchor} to={routes.contact()}>
          Contact
        </Link>
      </Typography>
    </div>
  );
}

export default Index;
