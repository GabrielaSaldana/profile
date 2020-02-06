import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import CloudDownloadOutlinedIcon from "@material-ui/icons/CloudDownloadOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import PhoneAndroidOutlinedIcon from "@material-ui/icons/PhoneAndroidOutlined";
import LinkedinOutlineIcon from "../../icons/LinkedinOutlineIcon";

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.primary,
    margin: theme.spacing(1)
  },
  anchor: {
    color: theme.extendedPalette.purpleContrast.main,
    textDecoration: "none",
    "&:hover": {
      color: theme.extendedPalette.greenContrast.main
    }
  }
}));

function Contact() {
  const classes = useStyles();

  return (
    <div id="contact" className={classes.root}>
      <Grid container>
        <Grid item xs={3}>
          <IconButton
            className={classes.button}
            aria-label="Download CV"
            color="primary"
          >
            <CloudDownloadOutlinedIcon fontSize="large" />
          </IconButton>
          <code>Download my CV !</code>
        </Grid>
        <Grid item xs={3}>
          <IconButton
            className={classes.button}
            aria-label="Email"
            color="primary"
          >
            <EmailOutlinedIcon fontSize="large" />
          </IconButton>
          <code>gab.saldana95@gmail.com</code>
        </Grid>
        <Grid item xs={3}>
          <IconButton
            className={classes.button}
            aria-label="Linkedin"
            color="primary"
          >
            <LinkedinOutlineIcon />
          </IconButton>
          <a
            className={classes.anchor}
            href="https://www.linkedin.com/in/gabriela-salda%C3%B1a-92a2b7b4"
          >
            <code>My Linkedin</code>
          </a>
        </Grid>
        <Grid item xs={3}>
          <IconButton
            className={classes.button}
            aria-label="Linkedin"
            color="primary"
          >
            <PhoneAndroidOutlinedIcon />
          </IconButton>
          <code>+52 5548811040</code>
        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;
