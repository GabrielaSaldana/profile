import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.primary,
    border: "1px solid grey",
    margin: theme.spacing(1)
  }
}));

function Contact() {
  const classes = useStyles();

  return (
    <div id="contact" className={classes.root}>
      <Typography variant="h1">
        <Grid container>
          <Grid item xs={3}>
            <code>Button to download my CV as PDF,</code>
          </Grid>
          <Grid item xs={3}>
            <code>Email</code>
          </Grid>
          <Grid item xs={3}>
            <code>Linkedin</code>
          </Grid>
          <Grid item xs={3}>
            <code>Phone Number</code>
          </Grid>
        </Grid>
      </Typography>
    </div>
  );
}

export default Contact;
