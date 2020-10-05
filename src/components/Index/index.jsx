import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import routes from "../../routes/routes";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.primary,
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    textAlign: "center",
  },
  anchor: {
    color: theme.palette.text.primary,
    textDecoration: "none",
    "&:hover": {
      color: theme.extendedPalette.cyanContrast.main,
    },
  },
  text: {
    marginBottom: theme.spacing(2),
  },
}));

function Index() {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root} aria-label="index">
      <ListItem button>
        <Typography variant="h3" gutterBottom className={classes.text}>
          <Link className={classes.anchor} to={routes.home()}>
            About
          </Link>
        </Typography>
      </ListItem>
      <Divider light />
      <ListItem button>
        <Typography variant="h3" gutterBottom className={classes.text}>
          <Link className={classes.anchor} to={routes.projects()}>
            Portfolio
          </Link>
        </Typography>
      </ListItem>
      <Divider light />
      <ListItem button>
        <Typography variant="h3" gutterBottom className={classes.text}>
          <Link className={classes.anchor} to={routes.contact()}>
            Contact
          </Link>
        </Typography>
      </ListItem>
    </List>
  );
}

export default Index;
