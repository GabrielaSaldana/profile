import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.primary,
    border: "1px solid grey",
    margin: theme.spacing(1)
  }
}));

function Index() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1">
        Index <br /> . <br /> . <br /> . <br />
      </Typography>
    </div>
  );
}

export default Index;
