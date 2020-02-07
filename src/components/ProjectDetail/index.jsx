import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
}));

function ProjectDetail() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      Details
    </div>
  );
}

export default ProjectDetail;
